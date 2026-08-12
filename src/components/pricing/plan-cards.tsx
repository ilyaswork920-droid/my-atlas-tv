"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle, Plus } from "lucide-react";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { plans, planWhatsAppMessage, type Plan } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function FeatureIcon({ text }: { text: string }) {
  if (text.includes("WhatsApp")) {
    return <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />;
  }
  if (text.includes("Bonus")) {
    return <Plus className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />;
  }
  return <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />;
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <motion.div
      variants={revealItem}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative flex h-full flex-col gap-6 rounded-3xl border p-8 transition-all duration-300 ease-premium",
        plan.highlighted
          ? "border-purple-400/50 bg-navy-900 shadow-glow-purple lg:-translate-y-3"
          : "border-white/10 bg-navy-900/50 shadow-card hover:border-white/25 hover:shadow-card-hover"
      )}
    >
      {plan.badge && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-glow-purple ring-1 ring-white/20">
          {plan.badge}
        </span>
      )}

      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-purple-300">
          {plan.duration} · {plan.devices}
        </span>
        <h3
          className={cn(
            "font-display text-2xl font-bold tracking-tight",
            plan.highlighted ? "text-gradient" : "text-cloud"
          )}
        >
          {plan.name}
        </h3>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="font-display text-4xl font-bold text-cloud">€{plan.price}</span>
        <span className="text-lg font-medium text-muted-dark line-through">€{plan.oldPrice}</span>
      </div>

      <ul className="flex flex-col gap-3 border-t border-white/8 pt-6">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-mist">
            <FeatureIcon text={f} />
            {f}
          </li>
        ))}
      </ul>

      <WhatsAppButton
        message={planWhatsAppMessage(plan.name, plan.duration, plan.price)}
        variant={plan.highlighted ? "primary" : "secondary"}
        className="mt-auto w-full"
      >
        Jetzt bestellen
      </WhatsAppButton>
    </motion.div>
  );
}

export function PlanCards() {
  return (
    <section className="relative py-8 sm:py-10">
      <div className="container-edge">
        <RevealGroup
          className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
