"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { buildWhatsAppUrl } from "@/lib/site-config";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const whatsappMessage = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const url = buildWhatsAppUrl(whatsappMessage);

    window.open(url, "_blank", "noopener,noreferrer");

    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
    window.setTimeout(() => setSent(false), 4000);
  }

  return (
    <Reveal direction="left">
      <form
        onSubmit={handleSubmit}
        className="glass-strong flex flex-col gap-5 rounded-3xl p-8 shadow-card"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-mist">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Dein vollständiger Name"
            className="h-12 rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-cloud outline-none placeholder:text-muted-dark focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-mist">
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="du@beispiel.de"
            className="h-12 rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-cloud outline-none placeholder:text-muted-dark focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-mist">
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Sag uns, für welchen Tarif du dich interessierst, oder stell eine Frage..."
            className="resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-cloud outline-none placeholder:text-muted-dark focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20"
          />
        </div>

        <button
          type="submit"
          className="group mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-all duration-300 hover:shadow-glow-purple hover:brightness-110"
        >
          Über WhatsApp senden
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        <motion.p
          initial={false}
          animate={{ opacity: sent ? 1 : 0, height: sent ? "auto" : 0 }}
          className="overflow-hidden text-center text-sm font-medium text-purple-300"
        >
          WhatsApp wird geöffnet — sende die vorausgefüllte Nachricht, um uns zu erreichen.
        </motion.p>

        <p className="text-center text-xs text-muted-dark">
          Beim Absenden öffnet sich WhatsApp mit deiner vorausgefüllten Nachricht. Wir speichern
          deine Daten niemals auf einem Server.
        </p>
      </form>
    </Reveal>
  );
}
