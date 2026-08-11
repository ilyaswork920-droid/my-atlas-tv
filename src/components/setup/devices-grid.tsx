"use client";

import { motion } from "framer-motion";
import { Tv, MonitorSmartphone, Smartphone, Laptop, Cast, Tablet } from "lucide-react";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const devices = [
  { icon: Tv, label: "Samsung / LG Smart TV" },
  { icon: MonitorSmartphone, label: "Amazon Fire TV Stick" },
  { icon: Cast, label: "Android TV & TV Box" },
  { icon: Smartphone, label: "iPhone & Android" },
  { icon: Tablet, label: "iPad & Tablets" },
  { icon: Laptop, label: "Windows & Mac" },
];

export function DevicesGrid() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-edge flex flex-col gap-14">
        <SectionHeading
          eyebrow="Kompatibilität"
          title="Funktioniert auf Geräten, die du bereits besitzt"
          description="Keine zusätzliche Hardware nötig — App installieren und losstreamen."
        />

        <RevealGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" stagger={0.06}>
          {devices.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={revealItem}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/8 bg-navy-900/50 p-6 text-center"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-300 ring-1 ring-white/10">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-medium text-mist">{label}</span>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
