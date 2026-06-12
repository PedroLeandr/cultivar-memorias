"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Loader2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const vp = { once: true, amount: 0.1 };

const PRESET_AMOUNTS = [0.5, 1, 5, 20];

export default function Donation() {
  const [selected, setSelected] = useState<number | null>(null);
  const [custom, setCustom] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const effectiveAmount = selected ?? (custom ? parseFloat(custom) : null);

  const handleDonate = async () => {
    setError("");
    if (!effectiveAmount || effectiveAmount < 0.5) {
      setError("Introduz um valor mínimo de €0,50.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amountInCents: Math.round(effectiveAmount * 100) }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Ocorreu um erro. Tenta novamente.");
      }
    } catch {
      setError("Ocorreu um erro. Tenta novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(null);
    setCustom(e.target.value);
    setError("");
  };

  const handlePreset = (amount: number) => {
    setSelected(selected === amount ? null : amount);
    setCustom("");
    setError("");
  };

  return (
    <section id="doacoes" className="py-24 lg:py-32 bg-green-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-300/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-body font-700 tracking-widest uppercase text-green-400 mb-4">
            Sem fins lucrativos
          </span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-5">
            Apoia o nosso{" "}
            <span className="text-green-400">projeto</span>
          </h2>
          <p className="text-lg text-green-200/70 font-body font-300 max-w-xl mx-auto leading-relaxed">
            Cada donativo, grande ou pequeno, ajuda-nos a chegar a mais idosos, a criar mais memórias
            e a fortalecer a nossa comunidade. Obrigado pelo teu apoio!
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          custom={0.1}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl"
        >
          {/* Preset buttons */}
          <p className="text-sm font-body font-700 text-green-800 mb-4">Escolhe um valor</p>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {PRESET_AMOUNTS.map((amount) => (
              <button
                key={amount}
                onClick={() => handlePreset(amount)}
                className={`py-4 rounded-2xl font-body font-700 text-base transition-all duration-200 border-2 ${
                  selected === amount
                    ? "bg-green-400 border-green-400 text-white shadow-lg scale-105"
                    : "bg-green-50 border-green-100 text-green-800 hover:border-green-400 hover:bg-green-100"
                }`}
              >
                {amount}€
              </button>
            ))}
          </div>

          {/* Custom amount */}
          <div className="mb-6">
            <p className="text-sm font-body font-700 text-green-800 mb-3">Ou introduz outro valor</p>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600 font-body font-700 text-lg select-none">
                €
              </span>
              <input
                type="number"
                min="0.50"
                step="0.50"
                placeholder="0,00"
                value={custom}
                onChange={handleCustomChange}
                className="w-full bg-green-50 border-2 border-green-100 focus:border-green-400 focus:outline-none rounded-2xl pl-9 pr-4 py-4 text-lg font-body font-700 text-green-800 placeholder:text-green-300 transition-all duration-200"
              />
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-500 font-body">{error}</p>
            )}
          </div>

          {/* Donate button */}
          <button
            onClick={handleDonate}
            disabled={loading || !effectiveAmount}
            className="w-full bg-green-400 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-body font-700 text-base px-6 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2.5 hover:-translate-y-0.5 hover:shadow-xl"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                A processar...
              </>
            ) : (
              <>
                <Heart size={18} strokeWidth={2.5} />
                Doar{effectiveAmount ? ` ${effectiveAmount.toFixed(2).replace(".", ",")}€` : ""}
              </>
            )}
          </button>

          <p className="mt-5 text-center text-xs text-green-600/50 font-body">
            Pagamento seguro via Stripe · Projeto sem fins lucrativos
          </p>
        </motion.div>
      </div>
    </section>
  );
}
