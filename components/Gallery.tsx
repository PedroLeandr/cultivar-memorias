"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

const vp = { once: true, amount: 0.1 };

const photos = [
  { id: 1, src: "/img1.jpeg", label: "Alface da Horta",       hint: "Produtos cultivados na nossa horta",                           span: "col-span-2" },
  { id: 2, src: "/img2.jpeg", label: "Produtos Entregues",     hint: "Alfaces, cenouras e courgettes no Centro Social",              span: "col-span-1" },
  { id: 3, src: "/img3.jpeg", label: "A Nossa Horta",          hint: "Alfaces a crescer na horta escolar",                          span: "col-span-1" },
  { id: 4, src: "/img4.jpeg", label: "Visita ao Centro",       hint: "Voluntária na visita ao Centro Social Santa Joana Princesa",  span: "col-span-2 md:col-span-1" },
  { id: 5, src: "/img5.jpeg", label: "Momento de Convívio",    hint: "Utentes reunidos durante a visita solidária",                 span: "col-span-1 md:col-span-2" },
  { id: 6, src: "/img6.jpeg", label: "Colheita",               hint: "Colheita fresca para entrega",                               span: "col-span-1" },
];

type Photo = (typeof photos)[0];

const fadeUp = {
  hidden:  { opacity: 1, y: 0 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } }),
};

export default function Gallery() {
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} className="text-center mb-16">
          <span className="inline-block text-xs font-body font-700 tracking-widest uppercase text-green-500 mb-4">
            Galeria
          </span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl md:text-5xl text-green-900 max-w-2xl mx-auto leading-tight">
            Momentos que <span className="text-gradient">ficam para sempre</span>
          </h2>
          <p className="mt-4 text-lg text-green-700/60 font-body font-300 max-w-xl mx-auto">
            Momentos reais do nosso projeto — da horta ao convívio com os utentes.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px] md:auto-rows-[240px]">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0.05 * i}
              className={`${photo.span} relative rounded-2xl overflow-hidden group`}
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Label */}
              <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur-sm rounded-full px-2.5 py-1 pointer-events-none z-10">
                <span className="text-xs font-body font-700 text-green-700">{photo.label}</span>
              </div>

              {/* Botão de expandir — cobre toda a célula */}
              <button
                type="button"
                aria-label={`Ver ${photo.label}`}
                className="absolute inset-0 w-full h-full z-20 flex items-center justify-center"
                style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
                onClick={() => setLightbox(photo)}
              >
                {/* Ícone zoom visível em mobile, hover em desktop */}
                <span className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-1.5 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={14} className="text-green-600" />
                </span>
                {/* Overlay hover desktop */}
                <span className="absolute inset-0 bg-green-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden md:block" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4 bg-black/85"
          style={{ zIndex: 9999, animation: "fadeIn 0.15s ease" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
            style={{ aspectRatio: "4/3", animation: "scaleIn 0.2s ease" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.label}
              fill
              className="object-cover"
              sizes="90vw"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5 pointer-events-none">
              <p className="font-display font-700 text-white text-lg">{lightbox.label}</p>
              <p className="text-white/70 font-body text-sm mt-0.5">{lightbox.hint}</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 bg-white/90 rounded-full p-2.5 z-10"
              style={{ touchAction: "manipulation" }}
            >
              <X size={18} className="text-green-700" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
