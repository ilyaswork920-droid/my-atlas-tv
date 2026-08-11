"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const guides = [
  {
    device: "Smart TV (Samsung / LG)",
    steps: [
      "Öffne den App Store deines Fernsehers und installiere eine IPTV-Player-App (wir empfehlen dir gerne eine).",
      "Starte die App und wähle „Playlist hinzufügen“ oder „Xtream-Login eingeben“.",
      "Gib die Zugangsdaten ein, die wir dir auf WhatsApp schicken.",
      "Speichern und deine Kanäle durchstöbern.",
    ],
  },
  {
    device: "Amazon Fire TV Stick",
    steps: [
      "Suche im Amazon App Store nach der empfohlenen IPTV-App und installiere sie.",
      "Öffne die App und wähle „Login“ oder „Playlist hinzufügen“.",
      "Gib Benutzername, Passwort und Server-URL ein.",
      "Bestätigen und sofort loslegen.",
    ],
  },
  {
    device: "Android TV / TV Box",
    steps: [
      "Installiere die IPTV-App über Google Play oder eine APK-Datei, die wir dir zur Verfügung stellen.",
      "Öffne die App und wähle den Xtream-Codes-Login.",
      "Gib deine Aktivierungsdaten genau wie zugesendet ein.",
      "Auf „Verbinden“ tippen und deine Kanäle genießen.",
    ],
  },
  {
    device: "iPhone & Android",
    steps: [
      "Lade die empfohlene IPTV-App aus dem App Store oder Google Play herunter.",
      "Öffne die App und tippe auf „Neuen Nutzer hinzufügen“ oder „Login“.",
      "Gib deine Zugangsdaten ein und bestätige.",
      "Streame unterwegs, über WLAN oder mobile Daten.",
    ],
  },
  {
    device: "Windows & Mac",
    steps: [
      "Lade den empfohlenen IPTV-Player für den Desktop herunter und installiere ihn.",
      "Öffne die App und wähle „Login mit Xtream Codes“.",
      "Gib Benutzername, Passwort und Server-URL ein.",
      "Auf „Verbinden“ klicken und auf deinem Computer loslegen.",
    ],
  },
];

export function DeviceGuides() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-edge flex flex-col gap-14">
        <SectionHeading eyebrow="Schnellanleitungen" title="Schritt für Schritt für dein Gerät" />

        <Reveal className="mx-auto w-full max-w-3xl">
          <div className="flex flex-col gap-3">
            {guides.map((guide, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={guide.device}
                  className="overflow-hidden rounded-2xl border border-white/8 bg-navy-900/50"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-cloud">
                      {guide.device}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-mist"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <ol className="flex flex-col gap-3 px-6 pb-6">
                          {guide.steps.map((step, idx) => (
                            <li key={step} className="flex items-start gap-3 text-sm text-mist">
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-[11px] font-semibold text-purple-300">
                                {idx + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
