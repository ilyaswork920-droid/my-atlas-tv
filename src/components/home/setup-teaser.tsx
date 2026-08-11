"use client";

import Image from "next/image";
import { Tv, MonitorSmartphone, Smartphone, Laptop } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { setupHelpWhatsAppMessage } from "@/lib/site-config";

const devices = [
  { icon: Tv, label: "Smart TV" },
  { icon: MonitorSmartphone, label: "Fire Stick & Android TV" },
  { icon: Smartphone, label: "iPhone & Android" },
  { icon: Laptop, label: "PC & Mac" },
];

export function SetupTeaser() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-edge grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="left">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-card">
            <Image
              src="/images/setup-tv-wall.jpg"
              alt="Minimalistischer, wandmontierter Smart-TV, bereit für die Einrichtung von IPTV Germany"
              width={900}
              height={720}
              sizes="(min-width: 1024px) 570px, 90vw"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-purple-300">
              Einrichtung
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight text-cloud sm:text-3xl">
              In unter 5 Minuten startklar
            </h3>
            <p className="text-base leading-relaxed text-muted">
              Keine technischen Kenntnisse nötig. Folge unserer Schritt-für-Schritt-Anleitung für
              dein Gerät oder schreib uns auf WhatsApp — wir führen dich live durch die Einrichtung.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-1">
              {devices.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-navy-900/50 px-3.5 py-3"
                >
                  <Icon className="h-4 w-4 shrink-0 text-purple-300" />
                  <span className="text-xs font-medium text-mist">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/setup-guide" showArrow>
                Zur Einrichtungsanleitung
              </Button>
              <WhatsAppButton message={setupHelpWhatsAppMessage} variant="secondary">
                Auf WhatsApp fragen
              </WhatsAppButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
