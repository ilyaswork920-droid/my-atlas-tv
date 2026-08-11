"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Button } from "@/components/ui/button";
import { plans, planWhatsAppMessage } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function PricingTeaser() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-edge flex flex-col gap-14">
        <SectionHeading
          eyebrow="Preise"
          title="Einfache, transparente Jahrestarife"
          description="Keine versteckten Kosten, keine Vertragsbindung. Wähle den Tarif, der zu deinem Sehverhalten passt."
        />

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={revealItem}
              whileHover={{ y: -6 }}
              className={cn(
                "relative flex flex-col gap-6 rounded-3xl border p-8",
                plan.highlighted
                  ? "border-purple-400/40 bg-navy-900 shadow-glow-purple"
                  : "border-white/8 bg-navy-900/50"
              )}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  {plan.badge}
                </span>
              )}
              <div>
                <h3 className="font-display text-xl font-bold text-cloud">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted">
                  {plan.duration} · {plan.devices}
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-cloud">€{plan.price}</span>
                <span className="text-base font-medium text-muted-dark line-through">
                  €{plan.oldPrice}
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {plan.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-mist">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <WhatsAppButton
                message={planWhatsAppMessage(plan.name, plan.duration, plan.price)}
                variant={plan.highlighted ? "primary" : "secondary"}
                className="mt-auto w-full"
              >
                Jetzt abonnieren
              </WhatsAppButton>
            </motion.div>
          ))}
        </RevealGroup>

        <div className="flex justify-center">
          <Button href="/pricing" variant="ghost" showArrow>
            Alle Tarifmerkmale vergleichen
          </Button>
        </div>
      </div>
    </section>
  );
}
