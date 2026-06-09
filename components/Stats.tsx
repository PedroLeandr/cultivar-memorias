"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Building2, Package, Users, CalendarCheck } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: 1,
    suffix: "",
    display: null as string | null,
    label: "Centros Visitados",
    desc: "Entidades ERPI e Centros de Dia",
    color: "text-green-500 bg-green-50",
    accent: "bg-green-400",
  },
  {
    icon: Package,
    value: 0,
    suffix: "",
    display: "—",
    label: "Produtos Entregues",
    desc: "Frescos da nossa horta",
    color: "text-amber-600 bg-amber-50",
    accent: "bg-amber-400",
  },
  {
    icon: Users,
    value: 10,
    suffix: "+",
    display: null as string | null,
    label: "Participantes",
    desc: "Utentes e voluntários",
    color: "text-blue-500 bg-blue-50",
    accent: "bg-blue-400",
  },
  {
    icon: CalendarCheck,
    value: 1,
    suffix: "",
    display: null as string | null,
    label: "Atividades Realizadas",
    desc: "Desde o início do projeto",
    color: "text-purple-500 bg-purple-50",
    accent: "bg-purple-400",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(value);

  return (
    <span className="counter-value">
      {display}{suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const vp = { once: true, amount: 0.1 };

export default function Stats() {
  return (
    <section className="py-24 lg:py-32 bg-green-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -top-20 -left-20 w-96 h-96 text-green-800 opacity-50" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 10 C140 10 180 50 180 100 C180 150 140 190 100 180 C60 170 20 140 20 100 C20 60 60 10 100 10Z" />
        </svg>
        <svg className="absolute -bottom-10 -right-10 w-72 h-72 text-green-700 opacity-40" viewBox="0 0 200 200" fill="currentColor">
          <path d="M80 20 C130 20 170 60 160 110 C150 160 100 190 60 170 C20 150 10 100 30 60 C50 20 80 20 80 20Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-body font-700 tracking-widest uppercase text-green-300 mb-4">
            Estatísticas
          </span>
          <div className="w-14 h-1 bg-green-400 rounded-full mx-auto mb-6" />
          <h2 className="font-display font-700 text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Números que <span className="text-green-300">contam histórias</span>
          </h2>
          <p className="mt-4 text-lg text-green-200/60 font-body font-300 max-w-xl mx-auto">
            Valores temporários — serão atualizados com o crescimento do projeto.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0.1 * i}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-400/30 rounded-3xl p-7 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                <stat.icon size={24} strokeWidth={2} />
              </div>
              <div className="font-display font-800 text-5xl text-white mb-2">
                {stat.display !== null
                  ? <span className="counter-value">{stat.display}</span>
                  : <Counter value={stat.value} suffix={stat.suffix} />
                }
              </div>
              <p className="font-body font-700 text-white/90 text-base mb-1">{stat.label}</p>
              <p className="text-sm text-green-300/60 font-body">{stat.desc}</p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={vp}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                className={`h-0.5 ${stat.accent} rounded-full mt-5 origin-left`}
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="text-center text-sm text-green-300/50 font-body mt-8"
        >
          * Valores indicativos — serão atualizados regularmente com dados reais do projeto
        </motion.p>
      </div>
    </section>
  );
}
