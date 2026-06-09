"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";

const events: {
  date: string;
  title: string;
  desc: string;
  status: "done" | "upcoming";
  emoji: string;
}[] = [
  {
    date: "Início 2026",
    title: "Início do Projeto",
    desc: "O projeto Cultivar Memórias é fundado com o objetivo de unir gerações através da agricultura solidária.",
    status: "done",
    emoji: "🌟",
  },
  {
    date: "Primavera 2026",
    title: "Preparação da Horta",
    desc: "Início dos trabalhos na horta escolar — plantação, organização e preparação dos primeiros produtos a partilhar.",
    status: "done",
    emoji: "🌱",
  },
  {
    date: "2026",
    title: "1.ª Visita — Centro Social Santa Joana Princesa",
    desc: "Primeira visita oficial com entrega de produtos e momento de convívio com os utentes do centro.",
    status: "done",
    emoji: "🤝",
  },
  {
    date: "Em breve",
    title: "Futuras Visitas",
    desc: "Expansão das visitas a outros Centros de Dia e entidades ERPI da região, levando produtos e convívio.",
    status: "upcoming",
    emoji: "📅",
  },
  {
    date: "Futuro",
    title: "Expansão do Projeto",
    desc: "Crescimento do projeto com mais parceiros, mais jovens voluntários e mais impacto na comunidade.",
    status: "upcoming",
    emoji: "🚀",
  },
];

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const vp = { once: true, amount: 0.1 };

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 lg:py-32 bg-organic relative overflow-hidden">
      <div className="absolute inset-0 leaf-pattern opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-body font-700 tracking-widest uppercase text-green-500 mb-4">
            Percurso
          </span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl md:text-5xl text-green-900 max-w-2xl mx-auto leading-tight">
            A nossa <span className="text-gradient">jornada</span>
          </h2>
          <p className="mt-4 text-lg text-green-700/60 font-body font-300 max-w-xl mx-auto">
            Cada etapa representa um passo em direção a uma comunidade mais unida e solidária.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-green-300 to-green-100 -translate-x-1/2 rounded-full" />

          <div className="flex flex-col gap-8">
            {events.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={event.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  custom={0.05 * i}
                  className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className={`w-full pl-14 md:pl-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`}>
                    <div className={`group bg-white rounded-2xl p-5 shadow-soft border ${event.status === "done" ? "border-green-200" : "border-dashed border-green-200 opacity-75"} card-hover`}>
                      <div className={`inline-flex items-center gap-1.5 text-xs font-body font-700 px-3 py-1 rounded-full mb-3 ${event.status === "done" ? "bg-green-50 text-green-600" : "bg-gray-50 text-gray-500"}`}>
                        {event.status === "done" ? <CheckCircle2 size={11} /> : <Clock size={11} />}
                        {event.date}
                      </div>
                      <h3 className="font-body font-700 text-green-800 text-base mb-2">{event.title}</h3>
                      <p className="text-sm text-green-700/60 font-body font-300 leading-relaxed">{event.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10 top-5">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileInView={{ scale: 1 }}
                      viewport={vp}
                      transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 200, damping: 15 }}
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl shadow-soft border-2 ${event.status === "done" ? "bg-green-400 border-green-300 text-white shadow-green" : "bg-white border-green-200 text-green-400"}`}
                    >
                      {event.emoji}
                    </motion.div>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
