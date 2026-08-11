"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { planWhatsAppMessage } from "@/lib/site-config";

const blocks = [
  {
    eyebrow: "8K-Erlebnis",
    title: "Kinoreifes Bild, direkt in deinem Wohnzimmer",
    description:
      "Streame in echtem 8K Ultra HD auf unterstützten Kanälen und Geräten, mit adaptiver Bitrate, damit die Qualität auch bei schwankender Verbindung nie einbricht.",
    image: "/images/cinema-seats.jpg",
    alt: "Leerer Kinosaal mit hochwertigen roten Sitzen als Symbol für 8K Ultra HD Bildqualität",
    bullets: [
      "8K, 4K & Full HD in jedem Tarif enthalten",
      "10 Mbit/s minimum für HD, 50+ Mbit/s für 8K",
      "HEVC H.265 für ein schärferes Bild bei weniger Datenverbrauch",
    ],
    reverse: false,
    planId: "12-months",
    planName: "Most Popular",
    duration: "12 Monate",
    price: 59,
  },
  {
    eyebrow: "Senderbibliothek",
    title: "15.000+ Kanäle, ein einfaches Abo",
    description:
      "Lokale und internationale Unterhaltung, Sport, Nachrichten und Kinderkanäle — alles übersichtlich in einem schnellen Programmführer organisiert.",
    image: "/images/content-landscape-tv.jpg",
    alt: "Großer Smart-TV mit lebendigen Inhalten in einem hellen, modernen Wohnzimmer",
    bullets: [
      "Lokale Sender in jedem Tarif enthalten",
      "Internationale Unterhaltung, Nachrichten & Kinderkategorien",
      "7-Tage-EPG, damit du nie etwas verpasst",
    ],
    reverse: true,
    planId: "12-months",
    planName: "Most Popular",
    duration: "12 Monate",
    price: 59,
  },
];

export function ContentShowcase() {
  return (
    <section className="relative py-8 sm:py-10">
      <div className="container-edge flex flex-col gap-24 sm:gap-28">
        {blocks.map((block) => (
          <div
            key={block.title}
            className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
              block.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal direction={block.reverse ? "right" : "left"}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-card">
                <Image
                  src={block.image}
                  alt={block.alt}
                  width={900}
                  height={720}
                  sizes="(min-width: 1024px) 570px, 90vw"
                  className="aspect-[5/4] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal direction={block.reverse ? "left" : "right"} delay={0.1}>
              <div className="flex flex-col items-start gap-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-purple-300">
                  {block.eyebrow}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight text-cloud sm:text-3xl">
                  {block.title}
                </h3>
                <p className="text-base leading-relaxed text-muted">{block.description}</p>
                <ul className="flex flex-col gap-3">
                  {block.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-mist">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-purple-300">
                        <Check className="h-3 w-3" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <WhatsAppButton
                    message={planWhatsAppMessage(block.planName, block.duration, block.price)}
                    variant="secondary"
                    showArrow
                  >
                    Mehr erfahren
                  </WhatsAppButton>
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
