import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import ScrollReveal from "@/components/shared/ScrollReveal";

const HERO_IMG =
"https://media.base44.com/images/public/6a60faceb2d0839ce964897b/6132e624f_6d06f913-e132-4901-aeb0-4f191fdb753b.jpg";
const SOBRE_IMG =
"https://media.base44.com/images/public/6a60faceb2d0839ce964897b/949e6797c_SesionMI6.jpg";
const PREVIEW_BIG =
"https://media.base44.com/images/public/6a60faceb2d0839ce964897b/cccf36faa_f0f06b81-fbf3-4838-a469-7b04671339ce.jpg";
const PREVIEW_S1 =
"https://media.base44.com/images/public/6a60faceb2d0839ce964897b/b93953a58_IMG_1194.jpg";
const PREVIEW_S2 =
"https://media.base44.com/images/public/6a60faceb2d0839ce964897b/8d40cfb94__ADS1268.jpg";

export default function Inicio() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.97]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0.8]);

  return (
    <div>
      {/* Hero — beauty campaign */}
      <section className="relative h-screen min-h-[640px] overflow-hidden bg-[#2D2926]">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0">
          
          <Image
            src={HERO_IMG}
            alt="Novia preparándose el día de su boda"
            className="w-full h-full object-cover"
            fittingType="fill" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/70 via-[#2D2926]/15 to-[#2D2926]/30" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-16 max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
            
            <p className="font-body text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-white/70 mb-7">
              GES Makeup Studio
            </p>
            <h1 className="font-display text-5xl md:text-8xl lg:text-[8.5rem] font-light text-white leading-[0.92] tracking-[-0.02em]">El arte de
arreglar novias


            </h1>
            













            
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          
        </div>
      </section>

      {/* Sobre GES — editorial spread */}
      <section className="py-28 md:py-48 px-6 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8C8279] mb-20 md:mb-28">
              Sobre GES
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <ScrollReveal className="md:col-span-6">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src={SOBRE_IMG}
                  alt="Novia con tiara en escaleras"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.04]"
                  fittingType="fill" />
                
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12} className="md:col-span-5 md:col-start-8 md:pt-16">
              <h2 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-light text-[#2D2926] leading-[1.1] tracking-[-0.01em] mb-10">
                Cada novia lleva consigo una personalidad única.{" "}
                <em className="italic">Nuestro trabajo es revelarla.</em>
              </h2>
              <p className="font-body text-sm md:text-[15px] text-[#8C8279] leading-[1.9] max-w-md">En GES Makeup Studio creemos que el maquillaje nupcial no se trata de transformar, sino de iluminar. Con más de 15 años de experiencia en las haciendas y jardines de Morelos, creamos looks atemporales que enaltecen la belleza natural de cada novia.




              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trabajo selecto */}
      <section className="py-28 md:py-44 px-6 md:px-16 border-t border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
              <div>
                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8C8279] mb-5">
                  Trabajo Selecto
                </p>
                <h2 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-light text-[#2D2926] leading-[1.05] tracking-[-0.01em]">Una selección de 
nuestro trabajo


                </h2>
              </div>
              <Link
                to="/trabajo"
                className="hidden md:inline-flex items-center gap-3 font-body text-[10px] tracking-[0.3em] uppercase text-[#2D2926] group">
                
                <span className="border-b border-[#2D2926] pb-1 group-hover:text-[#8C8279] group-hover:border-[#8C8279] transition-colors duration-500">
                  Ver galería
                </span>
                <ArrowRight
                  size={14}
                  strokeWidth={1.25}
                  className="transition-transform duration-500 group-hover:translate-x-1" />
                
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8">
            <ScrollReveal className="md:col-span-8">
              <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden">
                <Image
                  src={PREVIEW_BIG}
                  alt="Novia con ramo de flores"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.04]"
                  fittingType="fill" />
                
              </div>
            </ScrollReveal>

            <div className="md:col-span-4 flex flex-col gap-5 md:gap-8">
              <ScrollReveal delay={0.1} className="flex-1">
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={PREVIEW_S1}
                    alt="Novia con damas de honor"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.04]"
                    fittingType="fill" />
                  
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="flex-1">
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={PREVIEW_S2}
                    alt="Novia poniéndose un arete"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.04]"
                    fittingType="fill" />
                  
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal>
            <div className="mt-12 md:hidden">
              <Link
                to="/trabajo"
                className="font-body text-[10px] tracking-[0.3em] uppercase text-[#2D2926] border-b border-[#2D2926] pb-1">
                
                Ver galería
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA — private invitation */}
      <section className="py-32 md:py-52 px-6 md:px-16 border-t border-[#E8E2D9]">
        <div className="max-w-[1100px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8C8279] mb-10">EN GES MAKEUP STUDIO

            </p>
            <h2 className="font-display text-4xl md:text-7xl lg:text-[6rem] font-light text-[#2D2926] leading-[1.0] tracking-[-0.02em] mb-14">Resaltamos 
tu 
belleza

            </h2>
            <a
              href="mailto:hola@gesmakeup.com"
              className="group inline-flex items-center gap-3 font-body text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#2D2926]">
              
              

              
              


              
              
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>);

}