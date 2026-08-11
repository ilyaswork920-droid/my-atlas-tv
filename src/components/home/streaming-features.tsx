"use client";

import { motion } from "framer-motion";
import { Radio, Clapperboard, Film, Trophy, RotateCcw, CalendarClock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, revealItem } from "@/components/ui/reveal";

const features = [
  {
    icon: Radio,
    title: "Live-TV",
    description: "15.000+ Live-Kanäle mit globalen, regionalen und internationalen Sendungen.",
  },
  {
    icon: Clapperboard,
    title: "Filme on demand",
    description: "Eine ständig aktualisierte Bibliothek mit Blockbustern und Klassikern in HD & 4K.",
  },
  {
    icon: Film,
    title: "Serien & Shows",
    description: "Sofortiger Zugriff auf ganze Staffeln deiner Lieblingsserien, ganz ohne Wartezeit.",
  },
  {
    icon: Trophy,
    title: "Sportkanäle",
    description: "Top-Ligen, Champions League und internationaler Sport in dedizierten Tarifen.",
  },
  {
    icon: RotateCcw,
    title: "7-Tage-Wiederholung",
    description: "Etwas verpasst? Spule zurück und sieh dir bis zu 7 Tage alte Sendungen erneut an.",
  },
  {
    icon: CalendarClock,
    title: "Intelligenter EPG-Guide",
    description: "Ein übersichtlicher Programmführer, um zu planen und zu entdecken, was als Nächstes läuft.",
  },
];

export function StreamingFeatures() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-edge flex flex-col gap-14">
        <SectionHeading
          eyebrow="Das erwartet dich"
          title="Streaming der nächsten Generation, für alle gemacht"
          description="Alles, was du für erstklassige Unterhaltung brauchst — live, on demand und immer in hoher Qualität."
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {features.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={revealItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-navy-900/60 p-7 shadow-card"
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/0 to-blue-500/0 blur-2xl transition-all duration-500 group-hover:from-purple-500/25 group-hover:to-blue-500/20"
              />
              <span className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-300 ring-1 ring-white/10">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="relative font-display text-lg font-semibold text-cloud">{title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
