"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const pillars = [
  {
    icon: Leaf,
    color: "bg-green-50 text-green-500",
    title: "Horta Solidária",
    desc: "Produtos cultivados com dedicação e entregues a quem mais precisa.",
  },
  {
    icon: Users,
    color: "bg-beige-100 text-yellow-700",
    title: "União de Gerações",
    desc: "Jovens e idosos partilham saberes, histórias e memórias únicas.",
  },
  {
    icon: Heart,
    color: "bg-red-50 text-red-400",
    title: "Impacto Real",
    desc: "Cada visita transforma vidas e cria laços que ficam para sempre.",
  },
];

const vp = { once: true, amount: 0.15 };

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-body font-700 tracking-widest uppercase text-green-500 mb-4">
            Sobre o Projeto
          </span>
          <h2 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl text-green-950 max-w-2xl mx-auto leading-tight">
            O que é o{" "}
            <span className="text-gradient">Cultivar Memórias</span>?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            custom={0.1}
            className="flex flex-col gap-6"
          >
            <p className="text-lg text-green-800/75 font-body font-300 leading-relaxed">
              O <strong className="text-green-700 font-700">Cultivar Memórias</strong> é um
              projeto solidário que tem como objetivo levar os produtos cultivados
              na nossa horta a entidades de ERPI e Centros de Dia.
            </p>
            <p className="text-lg text-green-800/75 font-body font-300 leading-relaxed">
              Mais do que entregar produtos, pretendemos criar momentos de convívio
              entre gerações, promovendo a troca de experiências, histórias e
              conhecimentos relacionados com a agricultura e a vida comunitária.
            </p>
            <blockquote className="relative pl-6 border-l-4 border-green-400 bg-green-50 rounded-r-2xl py-4 pr-4">
              <p className="font-display font-600 text-green-700 text-lg italic leading-snug">
                "Cultivar alimentos é nutrir o corpo. Cultivar memórias é nutrir a alma."
              </p>
            </blockquote>
          </motion.div>

          {/* Pillars */}
          <div className="flex flex-col gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                custom={0.05 * i}
                className="flex items-start gap-4 bg-earth-100 rounded-2xl p-5 card-hover border border-beige-200"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${pillar.color}`}>
                  <pillar.icon size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-body font-700 text-green-800 mb-1">{pillar.title}</h3>
                  <p className="text-sm text-green-700/65 font-body leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
