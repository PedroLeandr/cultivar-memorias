"use client";

import { motion } from "framer-motion";

const cards = [
  {
    emoji: "🌱",
    color: "from-green-400 to-green-500",
    bg: "bg-green-50",
    border: "border-green-200",
    title: "Agricultura Sustentável",
    desc: "Produção local e valorização dos produtos cultivados com responsabilidade ambiental e amor pela terra.",
    stat: "100%",
    statLabel: "Produtos Locais",
  },
  {
    emoji: "🤝",
    color: "from-amber-400 to-orange-400",
    bg: "bg-amber-50",
    border: "border-amber-200",
    title: "Ligação Entre Gerações",
    desc: "Partilha de conhecimentos e experiências entre jovens e idosos, criando pontes entre o passado e o futuro.",
    stat: "∞",
    statLabel: "Histórias Partilhadas",
  },
  {
    emoji: "❤️",
    color: "from-red-400 to-rose-400",
    bg: "bg-red-50",
    border: "border-red-200",
    title: "Solidariedade",
    desc: "Promoção da inclusão social, apoio à comunidade e construção de uma sociedade mais justa e coesa.",
    stat: "1",
    statLabel: "Centro Visitado",
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

const vp = { once: true, amount: 0.15 };

export default function Impact() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-body font-700 tracking-widest uppercase text-green-500 mb-4">
            Impacto
          </span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl md:text-5xl text-green-900 max-w-2xl mx-auto leading-tight">
            O nosso impacto na{" "}
            <span className="text-gradient">comunidade</span>
          </h2>
          <p className="mt-4 text-lg text-green-700/60 font-body font-300 max-w-xl mx-auto">
            Cada ação cria ondas positivas que se estendem muito além do que podemos ver.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0.1 * i}
              className={`relative rounded-3xl border ${card.border} ${card.bg} p-7 card-hover flex flex-col gap-5 overflow-hidden`}
            >
              <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${card.color} opacity-10 blur-2xl pointer-events-none`} />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-soft text-2xl`}>
                {card.emoji}
              </div>
              <div className="flex-1">
                <h3 className="font-display font-700 text-xl text-green-900 mb-3">{card.title}</h3>
                <p className="text-sm text-green-800/65 font-body font-300 leading-relaxed">{card.desc}</p>
              </div>
              <div className="border-t border-current/10 pt-4 mt-auto">
                <span className={`font-display font-800 text-3xl bg-gradient-to-br ${card.color} bg-clip-text text-transparent`}>
                  {card.stat}
                </span>
                <span className="text-xs font-body text-green-700/50 mt-0.5 block">{card.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
