"use client";

import { Tv, Globe2, Smartphone, Sparkles } from "lucide-react";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { motion } from "framer-motion";

const items = [
  { icon: Tv, label: "HD, 4K & 8K Streaming" },
  { icon: Globe2, label: "Lokale & internationale Sender" },
  { icon: Sparkles, label: "15.000+ Live-Kanäle" },
  { icon: Smartphone, label: "Funktioniert auf allen Geräten" },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-white/8 bg-navy-950/60">
      <RevealGroup className="container-edge grid grid-cols-2 gap-6 py-8 sm:grid-cols-4 sm:gap-4">
        {items.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={revealItem}
            className="flex items-center justify-center gap-2.5 text-center sm:justify-start sm:text-left"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-300">
              <Icon className="h-[18px] w-[18px]" />
            </span>
            <span className="text-sm font-medium text-mist">{label}</span>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}
