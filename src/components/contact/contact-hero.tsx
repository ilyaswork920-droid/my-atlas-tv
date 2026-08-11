"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-[170px] pb-14 sm:pt-[188px] sm:pb-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-texture opacity-30" />
      <div
        aria-hidden
        className="glow-blob left-1/2 top-[-220px] h-[460px] w-[680px] -translate-x-1/2 bg-purple-600/25"
      />
      <div className="container-edge relative flex flex-col items-center gap-5 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-purple-300"
        >
          Kontakt
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="max-w-2xl font-display text-4xl font-bold tracking-tight text-cloud sm:text-5xl"
        >
          Nimm <span className="text-gradient">Kontakt auf</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="max-w-xl text-balance text-base text-muted sm:text-lg"
        >
          Fragen zu Tarifen, Einrichtung oder Abrechnung? Schick uns eine Nachricht und wir
          antworten dir sofort auf WhatsApp.
        </motion.p>
      </div>
    </section>
  );
}
