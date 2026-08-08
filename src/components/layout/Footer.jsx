import React from "react";

const GES_LOGO = "https://base44.app/api/apps/6a60faceb2d0839ce964897b/files/mp/public/6a60faceb2d0839ce964897b/52b440a4c_ges-logo-v2.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#FDFCFB] overflow-hidden border-t border-[#E8E2D9]">
      {/* GES logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <img
          src={GES_LOGO}
          alt=""
          aria-hidden="true"
          className="w-[70vw] md:w-[42vw] max-w-[680px] h-auto object-contain opacity-[0.22]" />
        
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Contacto */}
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#8C8279] mb-5">
              Contacto
            </p>
            <p className="font-body text-sm text-[#2D2926]">gesmakeupstudio@gmail.com</p>
          </div>

          {/* Estudio */}
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#8C8279] mb-5">
              Estudio
            </p>
            <p className="font-body text-sm text-[#2D2926]">Morelos, México</p>
          </div>

          {/* Síguenos */}
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#8C8279] mb-5">
              Síguenos
            </p>
            <a
              href="https://www.instagram.com/ges_makeup_studio?igsh=MW93MThmOWh4OWNl&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-[#2D2926] hover:text-[#8C8279] transition-colors duration-500">
              
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-6 border-t border-[#E8E2D9]/60">
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#8C8279]">
            © {new Date().getFullYear()} GES Makeup Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>);

}