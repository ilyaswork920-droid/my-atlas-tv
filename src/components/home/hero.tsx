"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Zap, ShieldCheck } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Button } from "@/components/ui/button";
import { trialWhatsAppMessage } from "@/lib/site-config";

const stats = [
  { value: "2.800+", label: "Zufriedene Kunden" },
  { value: "15.000+", label: "Live-Kanäle" },
  { value: "4,9/5", label: "Durchschnittliche Bewertung" },
  { value: "99,9%", label: "Verfügbarkeit" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[170px] pb-20 sm:pt-[188px] sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-texture opacity-40" />
      <div
        aria-hidden
        className="glow-blob left-1/2 top-[-220px] h-[520px] w-[720px] -translate-x-1/2 bg-purple-600/30"
      />
      <div
        aria-hidden
        className="glow-blob right-[-140px] top-[220px] h-[380px] w-[380px] bg-blue-500/20"
      />

      <div className="container-edge relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
        <div className="flex flex-col items-start gap-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-4 text-xs font-medium text-mist"
          >
            <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-2.5 py-1 text-white">
              <Star className="h-3 w-3 fill-white" />
              4.9/5
            </span>
            Das Vertrauen von 2.800+ Streamern weltweit
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-cloud sm:text-5xl lg:text-[3.4rem]"
          >
            IPTV Germany: Premium-Streaming in{" "}
            <span className="text-gradient">HD, 4K &amp; 8K</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg"
          >
            Das beste IPTV-Abo für Deutschland: 15.000+ Live-Kanäle, erstklassige internationale
            Inhalte, stabile Streaming-Server und sofortige Aktivierung — schon ab{" "}
            <span className="font-semibold text-cloud">€29</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <WhatsAppButton message={trialWhatsAppMessage} size="lg" showArrow>
              Jetzt abonnieren
            </WhatsAppButton>
            <Button href="/pricing" variant="secondary" size="lg">
              Preise ansehen
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs text-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-purple-400" /> Sofortige Aktivierung
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-purple-400" /> Keine Kreditkarte für Testphase nötig
            </span>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 grid w-full grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-7 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-cloud">{s.value}</dd>
                <dd className="text-xs text-muted">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-card">
            <Image
              src="/images/hero-tv-wall.jpg"
              alt="Modernes Wohnzimmer mit einem Premium-Smart-TV, der IPTV Germany-Kanäle streamt"
              width={900}
              height={1000}
              priority
              sizes="(min-width: 1024px) 570px, (min-width: 640px) 448px, 90vw"
              className="aspect-[9/10] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-strong absolute -left-6 top-10 hidden w-52 rounded-2xl p-4 shadow-card sm:block"
          >
            <p className="text-xs font-medium text-muted">Jetzt live</p>
            <p className="mt-1 text-sm font-semibold text-cloud">Top-Sport · Live 4K</p>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-red-500" />
              <span className="text-[11px] font-medium uppercase tracking-wider text-red-400">
                Live
              </span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="glass-strong absolute -bottom-6 -right-4 w-48 rounded-2xl p-4 shadow-card sm:-right-8"
          >
            <p className="text-xs font-medium text-muted">Senderbibliothek</p>
            <p className="mt-1 font-display text-xl font-bold text-gradient">15.000+</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
