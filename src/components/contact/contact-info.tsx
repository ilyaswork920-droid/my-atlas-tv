"use client";

import { MessageCircle, Mail, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig, generalWhatsAppMessage, buildWhatsAppUrl } from "@/lib/site-config";

const cards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Der schnellste Weg, uns zu erreichen — meist Antwort innerhalb weniger Minuten.",
    action: siteConfig.whatsapp.numberDisplay,
    href: buildWhatsAppUrl(generalWhatsAppMessage),
    external: true,
  },
  {
    icon: Mail,
    title: "E-Mail",
    description: "Für alles, was nicht dringend ist, schreib uns einfach.",
    action: siteConfig.supportEmail,
    href: `mailto:${siteConfig.supportEmail}`,
    external: false,
  },
  {
    icon: Clock,
    title: "Antwortzeit",
    description: "Unser Team antwortet in der Regel innerhalb von 15–30 Minuten, rund um die Uhr.",
    action: null,
    href: null,
    external: false,
  },
];

export function ContactInfo() {
  return (
    <Reveal direction="right" delay={0.1}>
      <div className="flex flex-col gap-5">
        {cards.map(({ icon: Icon, title, description, action, href, external }) => {
          const content = (
            <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-navy-900/50 p-6 transition-colors duration-300 hover:border-purple-400/30">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-300 ring-1 ring-white/10">
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold text-cloud">{title}</h3>
                <p className="text-sm text-muted">{description}</p>
                {action && <p className="text-sm font-medium text-purple-300">{action}</p>}
              </div>
            </div>
          );

          if (!href) {
            return <div key={title}>{content}</div>;
          }

          return external ? (
            <a key={title} href={href} target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          ) : (
            <a key={title} href={href}>
              {content}
            </a>
          );
        })}
      </div>
    </Reveal>
  );
}
