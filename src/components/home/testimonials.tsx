"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, revealItem } from "@/components/ui/reveal";

const testimonials = [
  {
    name: "Michael K.",
    city: "Berlin",
    quote:
      "Der beste IPTV-Anbieter, den ich bisher hatte. Stabile 4K-Streams und eine riesige Senderliste.",
  },
  {
    name: "Sarah M.",
    city: "Hamburg",
    quote:
      "Die Einrichtung auf meinem Fire Stick hat keine fünf Minuten gedauert. Die kostenlose Testphase hat die Entscheidung leicht gemacht.",
  },
  {
    name: "Ahmed H.",
    city: "Frankfurt",
    quote:
      "Tolle Auswahl an internationalen Kanälen, und der WhatsApp-Support antwortet wirklich schnell.",
  },
  {
    name: "Thomas W.",
    city: "München",
    quote:
      "Mein Kabelpaket für €60/Monat gekündigt. 8K auf meinem Samsung TV sieht für den Preis unglaublich aus.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-edge flex flex-col gap-14">
        <SectionHeading
          eyebrow="Kundenstimmen"
          title="Was unsere Kunden sagen"
          description="Echtes Feedback von IPTV Germany-Abonnenten aus ganz Deutschland."
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={revealItem}
              className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-navy-900/50 p-6"
            >
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-mist">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-xs font-semibold text-white">
                  {t.name.charAt(0)}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-cloud">{t.name}</span>
                  <span className="text-xs text-muted">{t.city}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
