import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const FAQS = [
  {
    q: "¿Cuánto tiempo dura el servicio de peinado y maquillaje?",
    a: "En la prueba, dedicamos aproximadamente 2 horas y media al maquillaje y peinado (esto incluye comentar los estilos y probar qué le sienta mejor a tu tono de piel, color de ojos y rasgos). El día de la boda, el servicio puede durar entre 1 hora y media y 2 horas para la novia, y 1 hora para cada invitada.",
  },
  {
    q: "¿Recibiré recomendaciones sobre qué productos usar para que mi piel luzca radiante y saludable para el gran día?",
    a: "Te recomendamos consultar a un dermatólogo sobre qué productos son los más adecuados para tu tipo de piel.",
  },
  {
    q: "¿Su equipo se queda para hacer retoques durante la fiesta?",
    a: "Sí, siempre que hayas elegido un paquete que incluya el servicio de retoques. Además, podemos ofrecer este servicio por un costo adicional por hora si se solicita con antelación.",
  },
  {
    q: "¿Qué productos utilizan?",
    a: "Nos importa mucho la calidad del servicio que ofrecemos. Por eso, utilizamos únicamente productos de alta gama tanto para el maquillaje como para el cuidado de la piel. Algunas de las marcas de nuestro kit profesional son: TEMPTU, Charlotte Tilbury, Nars, Patrick Ta, DIOR, CHANEL, Estée Lauder, One Size, Too Faced, MAC, Hourglass, entre otras.",
  },
  {
    q: "¿Ofrecen descuentos para grupos grandes?",
    a: "Los paquetes que ofrecemos tienen un precio más ventajoso en comparación con la contratación de servicios por separado.",
  },
  {
    q: "Tengo la piel muy sensible y se me enrojecen los ojos con facilidad. ¿Ofrecen alguna solución para evitarlo?",
    a: "El bienestar de cada cliente es importante para nosotros. Si tienes piel sensible, optamos por utilizar productos diferentes para evitar saturar la piel. En cuanto a los ojos, siempre utilizamos pegamento sin látex. También estamos abiertos a utilizar productos que tú ya conozcas y que ayuden a prevenir esta situación.",
  },
  {
    q: "¿Puedo reservar la fecha sin abonar un pago por adelantado?",
    a: "No, solo confirmamos la reserva de los servicios tras recibir un pago inicial del 50%.",
  },
  {
    q: "Si alguien de mi grupo cancela su servicio a última hora, ¿puedo obtener un reembolso?",
    a: "Lamentablemente, no. Sugerimos que otra persona ocupe su lugar, ya que los profesionales para el servicio ya habrán sido reservados.",
  },
  {
    q: "¿Puedo obtener un reembolso si mi evento se cancela o cambia de fecha?",
    a: "No se realizan reembolsos. Ofrecemos cambios de fecha con un aviso previo mínimo de 6 meses, sujeto a disponibilidad para la nueva fecha.",
  },
  {
    q: "¿Qué sucede si me gustó el resultado de la prueba pero quiero probar un estilo diferente? ¿Se me cobraría nuevamente por este servicio?",
    a: "Sí, en ese caso se cobraría como un servicio habitual de maquillaje y/o peinado.",
  },
  {
    q: "¿Ofrecen algún descuento para bodas entre semana o en domingo?",
    a: "No, las tarifas son las mismas independientemente del día.",
  },
];

function FaqItem({ item, index, isOpen, onToggle }) {
  return (
    <div className="border-t border-[#E8E2D9]">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-9 md:py-12 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-5 md:gap-10">
          <span className="font-body text-[10px] tracking-[0.25em] text-[#BDB3A9] pt-2">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-xl md:text-2xl lg:text-[1.75rem] font-light text-[#2D2926] leading-[1.3] group-hover:text-[#8C8279] transition-colors duration-500">
            {item.q}
          </h3>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 pt-2 text-[#8C8279]"
        >
          <Plus size={20} strokeWidth={1} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm md:text-base text-[#8C8279] leading-[1.8] pb-9 md:pb-12 pl-10 md:pl-[3.5rem] max-w-2xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PreguntasFrecuentes() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      {/* Header */}
      <section className="px-6 md:px-16 py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8C8279] mb-6">
              Información
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-light text-[#2D2926] leading-[0.92] tracking-[-0.02em]">
              Preguntas
              <br />
              <em className="italic">Frecuentes</em>
            </h1>
            <p className="font-body text-sm text-[#8C8279] mt-8 max-w-md leading-relaxed">
              Resolvemos las dudas más comunes sobre nuestros servicios de maquillaje y
              peinado de novias.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="h-px bg-[#E8E2D9]" />
      </div>

      {/* FAQ list */}
      <section className="px-6 md:px-16 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          {FAQS.map((item, i) => (
            <ScrollReveal key={i} delay={Math.min(i * 0.03, 0.2)}>
              <FaqItem
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </ScrollReveal>
          ))}
          <div className="border-t border-[#E8E2D9]" />
        </div>
      </section>
    </div>
  );
}