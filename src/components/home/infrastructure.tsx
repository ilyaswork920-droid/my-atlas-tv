"use client";

import { motion } from "framer-motion";
import { Gauge, ShieldHalf, Server, Cpu } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, revealItem } from "@/components/ui/reveal";

const points = [
  {
    icon: Gauge,
    title: "8K Ultra HD",
    description: "Volle 7680×4320-Auflösung auf kompatiblen Geräten und Kanälen.",
  },
  {
    icon: ShieldHalf,
    title: "Anti-Freeze-Technologie",
    description: "Adaptive Bitratenpufferung hält deinen Stream flüssig, selbst bei instabilen Netzwerken.",
  },
  {
    icon: Server,
    title: "EU-Streaming-Server",
    description: "Latenzarme Übertragung von europäischen Servern für durchgehend schnelle Streams.",
  },
  {
    icon: Cpu,
    title: "HEVC H.265 Codec",
    description: "Effiziente Kompression für ein schärferes Bild bei geringerer Bandbreite.",
  },
];

export function Infrastructure() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div aria-hidden className="glow-blob left-[-160px] top-1/3 h-[420px] w-[420px] bg-blue-500/15" />
      <div className="container-edge relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Infrastruktur"
          title="Entwickelt für ein makelloses Bild"
          description="Erstklassige Infrastruktur hinter jedem Stream — schnell, stabil und gestochen scharf."
        />

        <RevealGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={revealItem}
              className="group flex flex-col gap-4 bg-navy-950 p-8 transition-colors duration-300 hover:bg-navy-900"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-glow-purple">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-base font-semibold text-cloud">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{description}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
