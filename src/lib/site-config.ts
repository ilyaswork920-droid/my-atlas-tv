export const siteConfig = {
  name: "IPTV Germany",
  shortName: "IPTV Germany",
  domain: "iptvgermanyiptv.de",
  url: "https://iptvgermanyiptv.de",
  description:
    "Premium-IPTV-Abo mit über 15.000 Live-Kanälen, HD-, 4K- & 8K-Streaming, lokalen & internationalen Inhalten und sofortiger Aktivierung. Das Vertrauen tausender Streamer weltweit.",
  locale: "de",
  themeColor: "#0b0e1c",
  supportEmail: "support@iptvgermanyiptv.de",
  whatsapp: {
    numberDisplay: "+44 7723 781927",
    numberIntl: "447723781927",
  },
  social: {
    whatsapp: "https://wa.me/447723781927",
  },
} as const;

export const navLinks = [
  { label: "Startseite", href: "/" },
  { label: "Preise", href: "/pricing" },
  { label: "Einrichtung", href: "/setup-guide" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/contact" },
] as const;

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  period: string;
  badge?: string;
  devices: string;
  features: string[];
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    id: "basic",
    name: "1 Bildschirm – 12 Monate",
    tagline: "Perfekt für den Einstieg",
    price: 30,
    period: "/Jahr",
    devices: "1 Gerät gleichzeitig",
    features: [
      "15.000+ Live-Kanäle",
      "Lokale & internationale Sender",
      "Full HD & 4K Streaming",
      "7-Tage EPG Programmführer",
      "Stabile, unterbrechungsfreie Server",
      "24/7 WhatsApp-Support",
    ],
  },
  {
    id: "plus",
    name: "2 Bildschirme – 12 Monate",
    tagline: "Unser beliebtester Tarif",
    price: 45,
    period: "/Jahr",
    badge: "Beliebteste Wahl",
    devices: "2 Geräte gleichzeitig",
    highlighted: true,
    features: [
      "Alles aus 1 Bildschirm, plus:",
      "8K Ultra HD Streaming",
      "7 Tage Catch-up TV & Wiederholung",
      "Arabisches Senderpaket",
      "Priorisierte EU-Streaming-Server",
      "Priorisierter WhatsApp-Support",
    ],
  },
  {
    id: "premium",
    name: "3 Bildschirme – 12 Monate",
    tagline: "Das volle Erlebnis",
    price: 55,
    period: "/Jahr",
    badge: "Bester Wert",
    devices: "3 Geräte gleichzeitig",
    features: [
      "Alles aus 2 Bildschirme, plus:",
      "Komplettes Sportpaket",
      "VIP-Support-Hotline",
      "Früher Zugang zu neuen Sendern",
      "Höchste Serverpriorität",
      "Kostenlose Einrichtungshilfe",
    ],
  },
];

export function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp.numberIntl}?text=${encoded}`;
}

export function planWhatsAppMessage(planName: string, price: number) {
  return `Hallo! Ich interessiere mich für den Tarif "${planName}" (€${price}/Jahr) auf ${siteConfig.domain}. Könnt ihr mir helfen, loszulegen?`;
}

export const trialWhatsAppMessage = `Hallo! Ich möchte gerne meine kostenlose Testphase bei ${siteConfig.name} starten. Könnt ihr mir die Details schicken?`;
export const setupHelpWhatsAppMessage = `Hallo! Ich brauche Hilfe bei der Einrichtung von ${siteConfig.name} auf meinem Gerät. Könnt ihr mir helfen?`;
export const generalWhatsAppMessage = `Hallo! Ich habe eine Frage zu ${siteConfig.name}. Könnt ihr mir helfen?`;
