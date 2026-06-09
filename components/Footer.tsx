"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 4l16 16M4 20L20 4" />
      </svg>
    ),
  },
];

const navLinks = [
  { href: "#sobre", label: "Sobre o Projeto" },
  { href: "#atividade", label: "Atividades" },
  { href: "#impacto", label: "Impacto" },
  { href: "#objetivos", label: "Objetivos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#timeline", label: "Percurso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-950 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute -top-20 right-0 w-80 h-80 text-green-900 opacity-60"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M100 10 C140 10 180 50 180 100 C180 150 140 190 100 180 C60 170 20 140 20 100 C20 60 60 10 100 10Z" />
        </svg>
        <svg
          className="absolute bottom-0 left-10 w-64 h-64 text-green-900/40"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M80 20 C130 20 170 60 160 110 C150 160 100 190 60 170 C20 150 10 100 30 60 C50 20 80 20 80 20Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top section */}
        <div className="grid lg:grid-cols-3 gap-12 py-14 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="Cultivar Memórias"
                width={130}
                height={52}
                className="h-20 w-auto"
                style={{ filter: "drop-shadow(0.75px 0 0 white) drop-shadow(-0.75px 0 0 white) drop-shadow(0 0.75px 0 white) drop-shadow(0 -0.75px 0 white) drop-shadow(0.75px 0.75px 0 white) drop-shadow(-0.75px -0.75px 0 white) drop-shadow(0.75px -0.75px 0 white) drop-shadow(-0.75px 0.75px 0 white)" }}
              />
            </div>
            <p className="text-sm font-body font-300 text-white/50 leading-relaxed mb-6 max-w-xs">
              Uma iniciativa solidária que aproxima gerações através da
              agricultura, da partilha e do convívio.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/8 hover:bg-green-400 border border-white/10 hover:border-green-400 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                >
                  {social.svg}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-1">
            <p className="text-xs font-body font-700 tracking-widest uppercase text-green-400 mb-5">
              Navegação
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-body text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote / mission */}
          <div className="lg:col-span-1">
            <p className="text-xs font-body font-700 tracking-widest uppercase text-green-400 mb-5">
              A Nossa Missão
            </p>
            <blockquote className="border-l-2 border-green-400 pl-5">
              <p className="font-display font-600 text-xl text-white/90 italic leading-snug mb-4">
                "Cultivar alimentos, cultivar memórias."
              </p>
              <p className="text-sm font-body text-white/40 leading-relaxed">
                Cada semente plantada é uma história que começa. Cada visita é
                uma memória que fica para sempre.
              </p>
            </blockquote>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-green-400 hover:bg-green-500 text-white text-sm font-body font-700 px-5 py-3 rounded-full shadow-green transition-all duration-200 hover:-translate-y-0.5"
              >
                🌿 Participar no Projeto
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-white/30">
            © {year} Cultivar Memórias. Projeto Solidário Escolar.
          </p>
          <p className="text-xs font-body text-white/30">
            Feito com{" "}
            <span className="text-green-400">💚</span>{" "}
            por alunos comprometidos com a comunidade
          </p>
        </div>
      </div>
    </footer>
  );
}
