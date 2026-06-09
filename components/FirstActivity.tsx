"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";

const vp = { once: true, amount: 0.1 };

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function FirstActivity() {
  return (
    <section
      id="atividade"
      className="py-24 lg:py-32 bg-organic relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 leaf-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" >
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible" viewport={vp}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-body font-700 tracking-widest uppercase text-green-500 mb-4">
            Primeira Atividade
          </span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl md:text-5xl text-green-900 max-w-3xl mx-auto leading-tight">
            Visita ao Centro Social{" "}
            <span className="text-gradient">Santa Joana Princesa</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible" viewport={vp}
            custom={0.15}
            className="flex flex-col gap-6"
          >
            {/* Meta tags */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Calendar, text: "2026" },
                { icon: MapPin, text: "Ctr. Sta. Joana Princesa", fullText: "Centro Social Santa Joana Princesa" },
                { icon: Users, text: "Visita de Convívio" },
              ].map((tag) => (
                <span
                  key={tag.text}
                  title={tag.fullText}
                  className="inline-flex items-center gap-1.5 text-xs font-body font-700 text-green-700 bg-white border border-green-200 px-3 py-1.5 rounded-full shadow-soft max-w-full truncate"
                >
                  <tag.icon size={12} strokeWidth={2.5} className="flex-shrink-0" />
                  <span className="truncate">{tag.text}</span>
                </span>
              ))}
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-5">
              <p className="text-base lg:text-lg text-green-800/75 font-body font-300 leading-relaxed">
                Hoje foi iniciado o nosso projeto, que consiste numa campanha
                solidária onde levamos os produtos da nossa horta a entidades
                de ERPI e Centros de Dia.
              </p>
              <p className="text-base lg:text-lg text-green-800/75 font-body font-300 leading-relaxed">
                Visitámos o Centro Social Santa Joana Princesa para apresentar
                aquilo que cultivamos na nossa horta e explicar em que consiste
                o projeto.
              </p>
              <p className="text-base lg:text-lg text-green-800/75 font-body font-300 leading-relaxed">
                Tivemos também um momento de convívio com os utentes, onde
                partilhámos experiências sobre como era o cultivo antigamente,
                se já tinham cultivado e qual a sua opinião sobre esta iniciativa.
              </p>
              <p className="text-base lg:text-lg text-green-800/75 font-body font-300 leading-relaxed">
                O dia decorreu de forma muito positiva, com uma excelente receção
                por parte dos utentes, que agradeceram o nosso empenho e
                demonstraram apoio à ideia do projeto.
              </p>
            </div>

          </motion.div>

          {/* Image placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible" viewport={vp}
            custom={0.3}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-medium">
              <Image
                src="/img4.jpeg"
                alt="Voluntária na visita ao Centro Social Santa Joana Princesa"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent" />
            </div>

            {/* Floating info card */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-medium border border-green-50 max-w-[180px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🌿</span>
                <span className="text-xs font-body font-700 text-green-700">1.ª Visita</span>
              </div>
              <p className="text-xs font-body text-green-600/70 leading-snug">
                Centro Social Santa Joana Princesa
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
