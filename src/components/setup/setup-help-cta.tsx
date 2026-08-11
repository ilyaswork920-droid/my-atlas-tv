"use client";

import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { setupHelpWhatsAppMessage } from "@/lib/site-config";

export function SetupHelpCta() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-600/20 via-navy-900 to-purple-600/25 px-8 py-16 text-center sm:px-16"
        >
          <div
            aria-hidden
            className="glow-blob left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/30"
          />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-cloud sm:text-4xl">
              Brauchst du noch Hilfe?
            </h2>
            <p className="max-w-xl text-balance text-base text-muted sm:text-lg">
              Schreib unserem Team auf WhatsApp und wir führen dich live durch die Einrichtung,
              auf Deutsch oder Englisch.
            </p>
            <WhatsAppButton message={setupHelpWhatsAppMessage} size="lg" showArrow>
              Einrichtungshilfe erhalten
            </WhatsAppButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
