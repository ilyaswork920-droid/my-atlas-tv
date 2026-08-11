"use client";

import { X, Check } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const cable = [
  "€60+ pro Monat",
  "12–24 Monate Vertragslaufzeit",
  "Begrenzte Senderpakete",
  "Zusätzliche Gerätemiete",
  "Langsamer Kundenservice",
];

const iptv = [
  "Ab €30 pro Jahr",
  "Keine langfristige Vertragsbindung",
  "15.000+ Kanäle inklusive",
  "Funktioniert auf Geräten, die du bereits besitzt",
  "24/7 WhatsApp-Support",
];

export function PriceComparison() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-edge flex flex-col gap-14">
        <SectionHeading
          eyebrow="Warum wechseln"
          title="Bis zu €690 pro Jahr sparen gegenüber Kabel & Satellit"
          description="Klassisches Fernsehen bindet dich an teure Verträge. IPTV Germany nicht."
        />

        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal direction="left">
            <div className="flex h-full flex-col gap-5 rounded-3xl border border-white/8 bg-navy-900/50 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Kabel / Satellit
              </h3>
              <ul className="flex flex-col gap-4">
                {cable.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-mist">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/80" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-purple-400/30 bg-navy-900 p-8 shadow-glow-purple">
              <div
                aria-hidden
                className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/20 blur-2xl"
              />
              <h3 className="relative text-sm font-semibold uppercase tracking-wide text-purple-300">
                IPTV Germany
              </h3>
              <ul className="relative flex flex-col gap-4">
                {iptv.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-cloud">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted"
        >
          Geschätzte jährliche Ersparnis basierend auf durchschnittlichen Kabel-/Satellitenpreisen
          von €60+/Monat gegenüber unserem 1-Bildschirm-Tarif ab €30/Jahr.
        </motion.p>
      </div>
    </section>
  );
}
