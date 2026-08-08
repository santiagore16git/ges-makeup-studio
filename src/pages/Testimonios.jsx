import React from "react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const TESTIMONIAL =
"Quedé espectacular, me encantó el maquillaje y el peinado, todos chulearon mucho tu trabajo, pero no solo eso, también su energía y su buena vibra, de verdad son un equipazo. Mil mil gracias por todo, son las mejores! Que tengan todo el éxito siempre! Abrazos.";

const EXAMPLES = [
{
  quote:
  "Al final de la boda mi maquillaje intacto y hubo mucho que me hicieron el comentario, que qué bárbara la calidad. Mil mil gracias por hacerme ver espectacular en ese día tan importante para mí, gracias a ti y a todo tu equipo. 🙏🏻🫶🏻",
  name: "Katya",
  detail: "Mayo 2026"
},
{
  quote:
  "Gil! Increíble tu trabajo de verdad intacto en toda la noche! Muchísimas gracias por todo! No hubo necesidad de retocarme!",
  name: "Daniela",
  detail: "Febrero 2026"
},
{
  quote:
  "Todo de maravilla, el maquillaje me duró todo el evento, me encantó. El arreglo de mis hermanas y mi mamá también estuvo de maravilla. Muchas gracias a ti y a las chicas. Les agradezco por todo.",
  name: "Belén",
  detail: "Mayo 2026"
},
{
  quote:
  "Gil de mi corazón, no sabes cómo me llenaste el corazón de alegría y paz, no puedo estar más feliz con los resultados. Todos me chuleaban y tu equipo ni se diga! Unas expertas, unas tipazas y unas profesionales. Mil gracias por todo el esfuerzo!",
  name: "Bere",
  detail: "Octubre 2025"
}];


export default function Testimonios() {
  return (
    <div>
      {/* Header */}
      <section className="px-6 md:px-16 py-24 md:py-40">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8C8279] mb-6">
              Voces
            </p>
            <h1 className="font-display text-5xl md:text-8xl lg:text-[8rem] font-light text-[#2D2926] leading-[0.92] tracking-[-0.02em]">
              Testimonios
            </h1>
            <p className="font-body text-sm text-[#8C8279] mt-8 max-w-md leading-relaxed">
              Las palabras de las novias que confiaron en nosotras. Su experiencia es el
              reflejo más honesto de nuestro trabajo.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="h-px bg-[#E8E2D9]" />
      </div>

      {/* Featured testimonial */}
      <section className="px-6 md:px-16 py-28 md:py-52">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className="font-display text-xl md:text-3xl lg:text-[2rem] font-light italic text-[#2D2926] leading-[1.5]">
              “Quedé espectacular, me encantó el maquillaje y el peinado, todos chulearon mucho tu trabajo, pero no solo eso, también su energía y su buena vibra, de verdad son un equipazo. Mil mil gracias por todo, son las mejores! Que tengan todo el éxito siempre! Abrazos.”
            </blockquote>
            <div className="mt-16 flex items-center justify-center gap-5">
              <span className="h-px w-12 bg-[#E8E2D9]" />
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#8C8279]">
                Paulina · Enero 2025
              </p>
              <span className="h-px w-12 bg-[#E8E2D9]" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* More testimonials */}
      <section className="px-6 md:px-16 pb-28 md:pb-40">
        <div className="max-w-3xl mx-auto">
          {EXAMPLES.map((t, i) =>
          <ScrollReveal key={i} delay={i * 0.05}>
              <div className="py-14 md:py-20 border-t border-[#E8E2D9] last:border-b">
                <p className="font-display text-xl md:text-3xl lg:text-[2rem] font-light italic text-[#2D2926] leading-[1.5] mb-8">
                  “{t.quote}”
                </p>
                <p className="font-body text-sm tracking-wide text-[#2D2926]">{t.name}</p>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#8C8279] mt-1.5">
                  {t.detail}
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-28 md:py-48 border-t border-[#E8E2D9]">
        <div className="max-w-[1100px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-7xl lg:text-[6rem] font-light text-[#2D2926] leading-[1.0] tracking-[-0.02em] mb-14">
              La próxima voz
              <br />
              <em className="italic">podría ser la tuya</em>
            </h2>
            <span className="group inline-flex items-center gap-3 font-body text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#2D2926]">
              

              
            </span>
          </ScrollReveal>
        </div>
      </section>
    </div>);

}