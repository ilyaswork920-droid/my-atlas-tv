"use client";

import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Button } from "@/components/ui/button";
import { trialWhatsAppMessage } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-purple-600/25 via-navy-900 to-blue-600/20 px-8 py-16 text-center sm:px-16"
        >
          <div
            aria-hidden
            className="glow-blob left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/30"
          />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-cloud sm:text-4xl">
              Bereit für ein besseres Fernseherlebnis?
            </h2>
            <p className="max-w-xl text-balance text-base text-muted sm:text-lg">
              Starte noch heute deine kostenlose Testphase — sofortige Aktivierung, keine
              Kreditkarte nötig, und echter Support auf WhatsApp, wann immer du ihn brauchst.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <WhatsAppButton message={trialWhatsAppMessage} size="lg" showArrow>
                Kostenlose Testphase starten
              </WhatsAppButton>
              <Button href="/pricing" variant="secondary" size="lg">
                Preise ansehen
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
