"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, User, Mail, MessageSquare, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const vp = { once: true, amount: 0.1 };

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-body font-700 tracking-widest uppercase text-green-500 mb-4">
            Contacto
          </span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl md:text-5xl text-green-900 max-w-2xl mx-auto leading-tight">
            Faz parte desta <span className="text-gradient">história</span>
          </h2>
          <p className="mt-4 text-lg text-green-700/60 font-body font-300 max-w-xl mx-auto">
            Tens interesse em apoiar, colaborar ou saber mais sobre o projeto? Fala connosco!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            custom={0.1}
            className="flex flex-col gap-7"
          >
            <div className="bg-green-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-400/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="font-display font-700 text-2xl mb-3 text-white">Cultivar Memórias</h3>
                <p className="text-green-200/80 font-body font-300 text-sm leading-relaxed mb-6">
                  Somos um projeto escolar solidário com uma missão simples mas poderosa: unir gerações,
                  partilhar produtos e criar memórias inesquecíveis.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { emoji: "📍", text: "Portugal" },
                    { emoji: "🏫", text: "Projeto Escolar" },
                    { emoji: "💚", text: "Iniciativa Solidária" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <span>{item.emoji}</span>
                      <span className="text-sm font-body text-green-200/70">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
              <p className="font-body font-700 text-green-700 text-sm mb-2">Segue o nosso projeto</p>
              <p className="text-xs text-green-600/60 font-body">
                Acompanha as novidades e os momentos especiais do Cultivar Memórias nas redes sociais.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            custom={0.2}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center flex flex-col items-center gap-5"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  className="w-20 h-20 rounded-full bg-green-400 flex items-center justify-center shadow-green"
                >
                  <CheckCircle2 size={36} className="text-white" strokeWidth={2} />
                </motion.div>
                <div>
                  <h3 className="font-display font-700 text-2xl text-green-800 mb-2">Mensagem Enviada!</h3>
                  <p className="text-green-600/70 font-body text-sm leading-relaxed">
                    Obrigado pelo teu contacto. Responderemos em breve!
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                  className="text-sm font-body font-700 text-green-600 hover:text-green-400 transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-earth-100 rounded-3xl p-8 border border-beige-200 flex flex-col gap-5">
                {[
                  { id: "name", label: "Nome", icon: User, type: "text", placeholder: "O teu nome" },
                  { id: "email", label: "Email", icon: Mail, type: "email", placeholder: "o.teu@email.com" },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label htmlFor={field.id} className="text-sm font-body font-700 text-green-800 flex items-center gap-1.5">
                      <field.icon size={13} className="text-green-500" />
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required
                      value={form[field.id as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full bg-white border border-beige-200 rounded-xl px-4 py-3 text-sm font-body text-green-800 placeholder:text-green-700/30 transition-all duration-200"
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-body font-700 text-green-800 flex items-center gap-1.5">
                    <MessageSquare size={13} className="text-green-500" />
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Escreve a tua mensagem aqui..."
                    className="w-full bg-white border border-beige-200 rounded-xl px-4 py-3 text-sm font-body text-green-800 placeholder:text-green-700/30 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 w-full bg-green-400 hover:bg-green-500 disabled:opacity-70 text-white font-body font-700 text-sm px-6 py-4 rounded-xl shadow-green hover:shadow-green-lg transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      A enviar...
                    </>
                  ) : (
                    <>
                      <Send size={15} strokeWidth={2.5} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
