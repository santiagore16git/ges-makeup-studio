import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

// --- zlib inflate/deflate via Web Streams (PNG uses zlib-wrapped deflate) ---
async function inflate(zlibBytes) {
  const ds = new DecompressionStream('deflate');
  const writer = ds.writable.getWriter();
  writer.write(zlibBytes);
  writer.close();
  const reader = ds.readable.getReader();
  const chunks = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    total += value.length;
  }
  const out = new Uint8Array(total);
  let off = 0;
  for (const c of chunks) { out.set(c, off); off += c.length; }
  return out;
}

async function deflate(rawBytes) {
  const cs = new CompressionStream('deflate');
  const writer = cs.writable.getWriter();
  writer.write(rawBytes);
  writer.close();
  const reader = cs.readable.getReader();
  const chunks = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    total += value.length;
  }
  const out = new Uint8Array(total);
  let off = 0;
  for (const c of chunks) { out.set(c, off); off += c.length; }
  return out;
}

// --- CRC32 ---
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(bytes) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < bytes.length; i++) c = crcTable[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}

function pngChunk(type, body) {
  const result = new Uint8Array(8 + body.length + 4);
  const dv = new DataView(result.buffer);
  dv.setUint32(0, body.length);
  for (let i = 0; i < 4; i++) result[4 + i] = type.charCodeAt(i);
  result.set(body, 8);
  const crcInput = new Uint8Array(4 + body.length);
  for (let i = 0; i < 4; i++) crcInput[i] = type.charCodeAt(i);
  crcInput.set(body, 4);
  dv.setUint32(8 + body.length, crc32(crcInput));
  return result;
}

export default async function(req) {
  try {
    const SRC = "https://media.base44.com/images/public/6a60faceb2d0839ce964897b/f34bb67cd_LogoGES-2.png";
    const ab = await (await fetch(SRC)).arrayBuffer();
    const data = new Uint8Array(ab);

    // --- parse PNG chunks ---
    let p = 8; // skip 8-byte signature
    let width = 0, height = 0, bitDepth = 0, colorType = 0;
    let palette = null;
    const idatChunks = [];
    while (p < data.length) {
      const dv = new DataView(data.buffer, data.byteOffset);
      const len = dv.getUint32(p);
      const type = String.fromCharCode(data[p + 4], data[p + 5], data[p + 6], data[p + 7]);
      const bodyStart = p + 8;
      const body = data.slice(bodyStart, bodyStart + len);
      p = bodyStart + len + 4; // skip data + crc
      if (type === 'IHDR') {
        const bdv = new DataView(body.buffer, body.byteOffset);
        width = bdv.getUint32(0);
        height = bdv.getUint32(4);
        bitDepth = body[8];
        colorType = body[9];
      } else if (type === 'PLTE') {
        palette = body;
      } else if (type === 'IDAT') {
        idatChunks.push(body);
      } else if (type === 'IEND') break;
    }

    let totalLen = 0;
    for (const c of idatChunks) totalLen += c.length;
    const idat = new Uint8Array(totalLen);
    let off = 0;
    for (const c of idatChunks) { idat.set(c, off); off += c.length; }
    const raw = await inflate(idat);

    let chan;
    if (colorType === 2) chan = 3;
    else if (colorType === 6) chan = 4;
    else if (colorType === 0) chan = 1;
    else if (colorType === 4) chan = 2;
    else if (colorType === 3) chan = 1;
    else return Response.json({ error: 'Unsupported colorType ' + colorType }, { status: 400 });

    if (bitDepth !== 8) return Response.json({ error: 'Unsupported bitDepth ' + bitDepth }, { status: 400 });

    const bpp = chan;
    const stride = 1 + width * bpp;

    // --- unfilter scanlines ---
    const recon = new Uint8Array(height * width * bpp);
    for (let y = 0; y < height; y++) {
      const filter = raw[y * stride];
      for (let x = 0; x < width * bpp; x++) {
        const cur = raw[y * stride + 1 + x];
        const left = (x >= bpp) ? recon[y * width * bpp + x - bpp] : 0;
        const up = (y > 0) ? recon[(y - 1) * width * bpp + x] : 0;
        const upLeft = (x >= bpp && y > 0) ? recon[(y - 1) * width * bpp + x - bpp] : 0;
        let val = cur;
        if (filter === 1) val = (cur + left) & 0xFF;
        else if (filter === 2) val = (cur + up) & 0xFF;
        else if (filter === 3) val = (cur + ((left + up) >> 1)) & 0xFF;
        else if (filter === 4) {
          const pp = left + up - upLeft;
          const pa = Math.abs(pp - left), pb = Math.abs(pp - up), pc = Math.abs(pp - upLeft);
          const pred = (pa <= pb && pa <= pc) ? left : (pb <= pc) ? up : upLeft;
          val = (cur + pred) & 0xFF;
        }
        recon[y * width * bpp + x] = val;
      }
    }

    // --- build RGBA with soft luma-key alpha (white -> transparent, anti-aliased edges) ---
    const rgba = new Uint8Array(width * height * 4);
    let transparentCount = 0;
    for (let i = 0; i < width * height; i++) {
      let r, g, b;
      if (colorType === 2) { r = recon[i * 3]; g = recon[i * 3 + 1]; b = recon[i * 3 + 2]; }
      else if (colorType === 6) { r = recon[i * 4]; g = recon[i * 4 + 1]; b = recon[i * 4 + 2]; }
      else if (colorType === 0) { r = g = b = recon[i]; }
      else if (colorType === 4) { r = g = b = recon[i * 2]; }
      else if (colorType === 3) { const idx = recon[i] * 3; r = palette[idx]; g = palette[idx + 1]; b = palette[idx + 2]; }

      const max = Math.max(r, g, b);
      let a;
      if (max >= 248) a = 0;
      else if (max > 228) a = Math.round((248 - max) / 20 * 255);
      else a = 255;
      if (a === 0) transparentCount++;
      rgba[i * 4] = Math.round(r * a / 255);
      rgba[i * 4 + 1] = Math.round(g * a / 255);
      rgba[i * 4 + 2] = Math.round(b * a / 255);
      rgba[i * 4 + 3] = a;
    }

    // --- re-encode PNG (colorType 6, 8-bit, filter none) ---
    const strideOut = 1 + width * 4;
    const filtered = new Uint8Array(height * strideOut);
    for (let y = 0; y < height; y++) {
      filtered[y * strideOut] = 0;
      filtered.set(rgba.subarray(y * width * 4, (y + 1) * width * 4), y * strideOut + 1);
    }
    const compressed = await deflate(filtered);

    const sig = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
    const ihdr = new Uint8Array(13);
    const ihdrDv = new DataView(ihdr.buffer);
    ihdrDv.setUint32(0, width);
    ihdrDv.setUint32(4, height);
    ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

    const parts = [sig, pngChunk('IHDR', ihdr), pngChunk('IDAT', compressed), pngChunk('IEND', new Uint8Array(0))];
    let totalP = 0;
    for (const pt of parts) totalP += pt.length;
    const png = new Uint8Array(totalP);
    let oo = 0;
    for (const pt of parts) { png.set(pt, oo); oo += pt.length; }

    // --- upload ---
    const base44 = createClientFromRequest(req);
    const file = new File([png], 'ges-logo-v2.png', { type: 'image/png' });
    const up = await base44.asServiceRole.integrations.Core.UploadFile({ file });

    return Response.json({
      file_url: up.file_url,
      width, height, colorType, bitDepth,
      transparentCount,
      totalPixels: width * height,
      transparentRatio: transparentCount / (width * height)
    });
  } catch (error) {
    return Response.json({ error: error.message, stack: error.stack }, { status: 500 });
  }
}