"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sprout } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-hero flex items-center overflow-hidden pt-20"
    >
      {/* Decorative leaf shapes */}
      <div className="absolute inset-0 leaf-deco pointer-events-none overflow-hidden">
        <svg
          className="absolute -top-10 -right-20 w-96 h-96 text-green-400 opacity-10"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M100 10 C140 10 180 50 180 100 C180 150 140 190 100 180 C60 170 20 140 20 100 C20 60 60 10 100 10Z" />
        </svg>
        <svg
          className="absolute bottom-0 -left-16 w-80 h-80 text-green-300 opacity-8"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M80 20 C130 20 170 60 160 110 C150 160 100 190 60 170 C20 150 10 100 30 60 C50 20 80 20 80 20Z" />
        </svg>
        {/* Floating dots */}
        {[
          { top: "20%", left: "8%", size: 8 },
          { top: "60%", left: "5%", size: 5 },
          { top: "35%", right: "12%", size: 6 },
          { top: "75%", right: "8%", size: 10 },
          { top: "15%", left: "30%", size: 4 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
            className="absolute rounded-full bg-green-400 opacity-25"
            style={{
              top: dot.top,
              left: (dot as any).left,
              right: (dot as any).right,
              width: dot.size,
              height: dot.size,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16">
        {/* Left — text */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-body font-700 px-4 py-2 rounded-full w-fit mx-auto lg:mx-0"
          >
            <Sprout size={15} strokeWidth={2.5} />
            Projeto Solidário Escolar
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-green-900"
          >
            Cultivar{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Memórias</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M2 6 C50 2 150 2 198 6"
                  stroke="#4CAF50"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="text-lg sm:text-xl text-green-800/70 font-body font-300 leading-relaxed max-w-xl"
          >
            Uma iniciativa solidária que aproxima gerações através da
            agricultura, da partilha e do convívio.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start"
          >
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 bg-green-400 hover:bg-green-500 text-white font-body font-700 px-7 py-3.5 rounded-full shadow-green hover:shadow-green-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Conhecer o Projeto
            </a>
            <a
              href="#atividade"
              className="inline-flex items-center gap-2 bg-white hover:bg-green-50 text-green-700 font-body font-700 px-7 py-3.5 rounded-full border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:-translate-y-0.5 shadow-soft"
            >
              Ver Atividades
            </a>
          </motion.div>

          {/* Stats preview */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.65}
            className="flex gap-8 pt-4 border-t border-green-100 justify-center lg:justify-start"
          >
            {[
              { value: "1", label: "Centro Visitado" },
              { value: "2026", label: "Ano de Início" },
              { value: "∞", label: "Memórias Partilhadas" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <span className="font-display font-700 text-2xl text-green-500">
                  {stat.value}
                </span>
                <span className="text-xs text-green-700/60 font-body">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — imagem principal */}
        <motion.div
          initial={{ opacity: 1, x: 0, scale: 1 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative sm:mb-6 lg:mb-0"
        >
          {/* Imagem principal */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-medium">
            <Image
              src="/img7.jpeg"
              alt="Equipa do Cultivar Memórias com produtos da horta"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
          </div>

          {/* Floating card — escondido em mobile para não transbordar */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:flex absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-medium border border-green-50 items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
              <span className="text-xl">🌱</span>
            </div>
            <div>
              <p className="text-xs text-green-600/60 font-body">Iniciativa</p>
              <p className="text-sm font-body font-700 text-green-800">Solidariedade Ativa</p>
            </div>
          </motion.div>

          {/* Top badge — escondido em mobile */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden sm:block absolute -top-4 -right-3 bg-green-400 text-white rounded-2xl px-4 py-2.5 shadow-green"
          >
            <p className="text-xs font-body font-700 leading-tight">
              🤝 União entre<br />gerações
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-xs font-body text-green-600/50 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-green-500/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
