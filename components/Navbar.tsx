"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#atividade", label: "Atividade" },
  { href: "#impacto", label: "Impacto" },
  { href: "#objetivos", label: "Objetivos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#timeline", label: "Percurso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const checkRef = useRef<HTMLInputElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function closeMenu() {
    if (checkRef.current) checkRef.current.checked = false;
  }

  return (
    <>
      {/* Input checkbox — controla o menu via CSS `:checked ~ .peer-checked:` */}
      <input
        ref={checkRef}
        type="checkbox"
        id="nav-toggle"
        className="peer"
        style={{ position: "fixed", opacity: 0, pointerEvents: "none", width: 1, height: 1, zIndex: -1 }}
      />

      {/* Header fixo */}
      <header
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9998 }}
        className={`transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-soft py-1.5" : "bg-[#faf7f2] py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#">
            <Image src="/logo.png" alt="Cultivar Memórias" width={160} height={64} className="h-14 w-auto" priority />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-body text-green-800 hover:text-green-400 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contacto" className="hidden lg:inline-flex bg-green-400 hover:bg-green-500 text-white text-sm font-body font-700 px-5 py-2.5 rounded-full transition-colors">
            Participar
          </a>

          {/* Label = botão hamburger (funciona com CSS puro via for/id) */}
          <label
            htmlFor="nav-toggle"
            className="lg:hidden p-3 text-green-800 cursor-pointer"
            style={{ position: "relative" }}
          >
            <Menu size={26} />
          </label>
        </div>
      </header>

      {/* Overlay verde — desliza para baixo ao abrir, sobe ao fechar */}
      <div
        className="fixed inset-0 bg-green-900 flex flex-col -translate-y-full peer-checked:translate-y-0 transition-transform duration-300 ease-in-out"
        style={{ zIndex: 9999 }}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-green-700">
          <a href="#" onClick={closeMenu}>
            <Image src="/logo.png" alt="Cultivar Memórias" width={200} height={80} className="h-20 w-auto" style={{ filter: "drop-shadow(0.75px 0 0 white) drop-shadow(-0.75px 0 0 white) drop-shadow(0 0.75px 0 white) drop-shadow(0 -0.75px 0 white) drop-shadow(0.75px 0.75px 0 white) drop-shadow(-0.75px -0.75px 0 white) drop-shadow(0.75px -0.75px 0 white) drop-shadow(-0.75px 0.75px 0 white)" }} />
          </a>
          {/* Label fecha o menu */}
          <label htmlFor="nav-toggle" className="p-3 text-white cursor-pointer" style={{ zIndex: 10000 }}>
            <X size={26} />
          </label>
        </div>

        <nav className="flex flex-col px-6 pt-6 gap-1 overflow-y-auto flex-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-2xl font-display font-700 text-white py-4 border-b border-green-800"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={closeMenu}
            className="mt-6 flex items-center justify-center bg-green-400 text-white text-base font-body font-700 px-6 py-4 rounded-2xl"
          >
            Participar
          </a>
        </nav>

        <div className="px-6 py-6">
          <p className="text-green-400/60 text-xs font-body">Cultivar Memórias — Projeto Solidário Escolar</p>
        </div>
      </div>
    </>
  );
}
