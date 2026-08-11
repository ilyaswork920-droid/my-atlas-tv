"use client";

import { Zap, Lock, Headset, RefreshCcw } from "lucide-react";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { motion } from "framer-motion";

const items = [
  { icon: Zap, title: "Sofortige Aktivierung", description: "Erhalte deine Zugangsdaten innerhalb weniger Minuten nach der Buchung." },
  { icon: Lock, title: "Sicherer Checkout", description: "Deine Daten werden direkt mit unserem Support-Team abgewickelt." },
  { icon: Headset, title: "24/7 Support", description: "Echte Menschen, jederzeit bereit, dir auf WhatsApp zu helfen." },
  { icon: RefreshCcw, title: "Kostenlose Testphase", description: "Teste, bevor du buchst — keine Kreditkarte erforderlich." },
];

export function Guarantees() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="container-edge">
        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {items.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={revealItem}
              className="flex flex-col items-start gap-3 rounded-2xl border border-white/8 bg-navy-900/50 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-300 ring-1 ring-white/10">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-sm font-semibold text-cloud">{title}</h3>
              <p className="text-xs leading-relaxed text-muted">{description}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
