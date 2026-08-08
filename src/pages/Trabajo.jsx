import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Image } from "@/components/ui/image";
import ScrollReveal from "@/components/shared/ScrollReveal";

const GALLERY = [
  {
    src: "https://media.base44.com/images/public/6a60faceb2d0839ce964897b/6580bb495_1_NataliaJuancarlosARREGLOS32.jpg",
    alt: "Novia y vestido de novia en blanco y negro",
    span: "col-span-12",
    aspect: "aspect-[3/2]",
  },
  {
    src: "https://media.base44.com/images/public/6a60faceb2d0839ce964897b/949e6797c_SesionMI6.jpg",
    alt: "Novia con tiara en escaleras",
    span: "col-span-12 md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://media.base44.com/images/public/6a60faceb2d0839ce964897b/274296585_d944611f-1597-4373-9424-d5358d1b04a8.jpg",
    alt: "Novia junto a maniquí con vestido",
    span: "col-span-12 md:col-span-7",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://media.base44.com/images/public/6a60faceb2d0839ce964897b/cccf36faa_f0f06b81-fbf3-4838-a469-7b04671339ce.jpg",
    alt: "Novia con ramo de flores frente a muro de piedra",
    span: "col-span-12 md:col-span-7",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://media.base44.com/images/public/6a60faceb2d0839ce964897b/a7db0d9e7_ARREGLOSGabyRodrigo-98.jpg",
    alt: "Cliente recibiendo servicio de maquillaje",
    span: "col-span-12 md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://media.base44.com/images/public/6a60faceb2d0839ce964897b/8d40cfb94__ADS1268.jpg",
    alt: "Novia poniéndose un arete en blanco y negro",
    span: "col-span-12",
    aspect: "aspect-[3/2]",
  },
  {
    src: "https://media.base44.com/images/public/6a60faceb2d0839ce964897b/7cde38016_yunyyayo-5.jpg",
    alt: "Novia con velo en blanco y negro",
    span: "col-span-12 md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://media.base44.com/images/public/6a60faceb2d0839ce964897b/f2e0e23ff_1_NataliaJuancarlosARREGLOS35.jpg",
    alt: "Novia tocando el vestido de novia",
    span: "col-span-12 md:col-span-7",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://media.base44.com/images/public/6a60faceb2d0839ce964897b/ff8f9bce7__DSC2505.jpg",
    alt: "Novia con damas de honor",
    span: "col-span-12",
    aspect: "aspect-[3/2]",
  },
  {
    src: "https://media.base44.com/images/public/6a60faceb2d0839ce964897b/ebc07c09e_UM-7.jpg",
    alt: "Maquillista aplicando maquillaje en blanco y negro",
    span: "col-span-12",
    aspect: "aspect-[16/10]",
  },
  {
    src: "https://media.base44.com/images/public/6a60faceb2d0839ce964897b/4a22f7c77_FotoGesMagazine.jpg",
    alt: "Novia sosteniendo su vestido de novia en la percha",
    span: "col-span-12 md:col-span-6",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://media.base44.com/images/public/6a60faceb2d0839ce964897b/cb81e4a82_AtaliaPepe-220.jpg",
    alt: "Novia con ramo de orquídeas frente a arco de piedra",
    span: "col-span-12 md:col-span-6",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://media.base44.com/images/public/6a60faceb2d0839ce964897b/0b86cfdc3__DSC0833.jpg",
    alt: "Novia de espalda con tocado en blanco y negro",
    span: "col-span-12 md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://media.base44.com/images/public/6a60faceb2d0839ce964897b/108e0657e_UM-84.jpg",
    alt: "Novia de espalda mirando sobre el hombro",
    span: "col-span-12 md:col-span-7",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://media.base44.com/images/public/6a60faceb2d0839ce964897b/081b0b5e1_fererikprev-010.jpg",
    alt: "Novia con ramo de anthuriums frente a muro de piedra",
    span: "col-span-12 md:col-span-8 md:col-start-3",
    aspect: "aspect-[4/5]",
  },
];

export default function Trabajo() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div>
      {/* Header */}
      <section className="px-6 md:px-16 py-24 md:py-40">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8C8279] mb-6">
              Portafolio
            </p>
            <h1 className="font-display text-5xl md:text-8xl lg:text-[8rem] font-light text-[#2D2926] leading-[0.92] tracking-[-0.02em]">
              Trabajo
            </h1>
            <p className="font-body text-sm text-[#8C8279] mt-8 max-w-md leading-relaxed">
              Una selección de nuestros momentos más preciados. Cada imagen cuenta la
              historia de una novia, sus invitadas y su luz única.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="h-px bg-[#E8E2D9]" />
      </div>

      {/* Editorial gallery */}
      <section className="px-6 md:px-16 py-16 md:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8">
          {GALLERY.map((item, i) => (
            <ScrollReveal
              key={i}
              delay={Math.min(i * 0.04, 0.2)}
              className={`${item.span} ${item.aspect}`}
            >
              <div
                className="relative group cursor-pointer overflow-hidden w-full h-full"
                onClick={() => setLightbox(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-[#2D2926]/0 group-hover:bg-[#2D2926]/10 transition-colors duration-700" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2D2926]/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Cerrar"
            >
              <X size={24} strokeWidth={1.25} />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full h-full max-h-[80vh] object-contain"
                fittingType="fit"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}