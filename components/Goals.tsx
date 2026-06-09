"use client";

import { motion } from "framer-motion";
import { Activity, BookOpen, Star, Link, Package } from "lucide-react";

const goals = [
  {
    icon: Activity,
    title: "Promover o Envelhecimento Ativo",
    desc: "Estimular o bem-estar físico e mental dos idosos através de atividades significativas e participativas.",
    color: "text-green-500 bg-green-50",
    num: "01",
  },
  {
    icon: BookOpen,
    title: "Valorizar Conhecimentos Agrícolas Tradicionais",
    desc: "Preservar e transmitir saberes ancestrais sobre cultivo, colheita e uso dos produtos da terra.",
    color: "text-amber-600 bg-amber-50",
    num: "02",
  },
  {
    icon: Star,
    title: "Incentivar o Voluntariado Jovem",
    desc: "Inspirar os jovens a participarem ativamente na vida comunitária e a descobrirem o valor do serviço ao próximo.",
    color: "text-blue-500 bg-blue-50",
    num: "03",
  },
  {
    icon: Link,
    title: "Reforçar os Laços Entre Gerações",
    desc: "Criar espaços de encontro e diálogo entre jovens e idosos, construindo pontes de compreensão mútua.",
    color: "text-purple-500 bg-purple-50",
    num: "04",
  },
  {
    icon: Package,
    title: "Distribuir Produtos Cultivados Localmente",
    desc: "Partilhar os frutos da nossa horta com quem mais precisa, promovendo alimentação saudável e sustentável.",
    color: "text-red-500 bg-red-50",
    num: "05",
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

export default function Goals() {
  return (
    <section id="objetivos" className="py-24 lg:py-32 bg-organic relative overflow-hidden">
      <div className="absolute inset-0 leaf-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="lg:sticky lg:top-28 text-center lg:text-left"
          >
            <span className="inline-block text-xs font-body font-700 tracking-widest uppercase text-green-500 mb-4">
              Objetivos
            </span>
            <h2 className="font-display font-700 text-3xl sm:text-4xl md:text-5xl text-green-900 leading-tight mb-6">
              O que queremos{" "}
              <span className="text-gradient">alcançar</span>
            </h2>
            <p className="text-lg text-green-700/65 font-body font-300 leading-relaxed">
              Cada objetivo representa um compromisso com a comunidade e com o
              futuro que queremos construir juntos.
            </p>
            <div className="mt-8 bg-white rounded-2xl p-5 shadow-soft border border-green-100">
              <p className="text-sm font-body font-700 text-green-700 mb-3">Objetivos em curso</p>
              <div className="flex gap-1.5">
                {goals.map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={vp}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                    className="h-2 flex-1 rounded-full bg-green-400 origin-left"
                  />
                ))}
              </div>
              <p className="text-xs text-green-600/50 font-body mt-2">5 objetivos definidos</p>
            </div>
          </motion.div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            {goals.map((goal, i) => (
              <motion.div
                key={goal.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={0.05 * i}
                className="group bg-white rounded-2xl p-6 shadow-soft border border-beige-200 card-hover flex items-stretch gap-5"
              >
                <div className="flex-shrink-0 flex flex-col items-center justify-between">
                  <span className="font-display font-800 text-xl text-green-200 group-hover:text-green-300 transition-colors leading-none">
                    {goal.num}
                  </span>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${goal.color} group-hover:scale-110 transition-transform`}>
                    <goal.icon size={22} strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <h3 className="font-body font-700 text-green-800 text-base mb-2 group-hover:text-green-600 transition-colors">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-green-700/60 font-body font-300 leading-relaxed">{goal.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
