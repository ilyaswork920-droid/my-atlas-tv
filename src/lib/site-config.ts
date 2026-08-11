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
  duration: string;
  devices: string;
  price: number;
  oldPrice: number;
  badge?: string;
  highlighted?: boolean;
  features: string[];
};

const baseFeatures = [
  "+55.000 globale Live-Kanäle",
  "+90.000 Filme und Serien",
  "Alle deutschen Premium-Sender",
  "Alle deutschen Premium-Sportsender",
  "Alle lokalen & globalen Plattformen",
  "Time-Shift & EPG-Guide",
  "Qualität in SD, HD, FHD und 4K",
  "Tägliche Updates",
  "Anti-Freeze™-Technologie",
  "Kein VPN erforderlich (VPN inklusive)",
];

export const plans: Plan[] = [
  {
    id: "3-months",
    name: "Premium Paket",
    duration: "3 Monate",
    devices: "1 Gerät",
    price: 29,
    oldPrice: 59,
    features: [
      ...baseFeatures,
      "15 Tage Geld-zurück-Garantie",
      "24/7 WhatsApp & E-Mail Support",
    ],
  },
  {
    id: "12-months",
    name: "Premium Paket ++",
    duration: "12 Monate",
    devices: "1 Gerät",
    price: 59,
    oldPrice: 99,
    badge: "BESTSELLER",
    highlighted: true,
    features: [
      ...baseFeatures,
      "30 Tage Geld-zurück-Garantie",
      "6 Monate Bonus",
      "24/7 WhatsApp & E-Mail Support",
    ],
  },
  {
    id: "6-months",
    name: "Premium Paket +",
    duration: "6 Monate",
    devices: "1 Gerät",
    price: 39,
    oldPrice: 79,
    features: [
      ...baseFeatures,
      "30 Tage Geld-zurück-Garantie",
      "3 Monate Bonus",
      "24/7 WhatsApp & E-Mail Support",
    ],
  },
];

export function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp.numberIntl}?text=${encoded}`;
}

export function planWhatsAppMessage(planName: string, duration: string, price: number) {
  return `Hallo! Ich interessiere mich für den Tarif "${planName}" (${duration}, €${price}) auf ${siteConfig.domain}. Könnt ihr mir helfen, loszulegen?`;
}

export const trialWhatsAppMessage = `Hallo! Ich möchte gerne meine kostenlose Testphase bei ${siteConfig.name} starten. Könnt ihr mir die Details schicken?`;
export const setupHelpWhatsAppMessage = `Hallo! Ich brauche Hilfe bei der Einrichtung von ${siteConfig.name} auf meinem Gerät. Könnt ihr mir helfen?`;
export const generalWhatsAppMessage = `Hallo! Ich habe eine Frage zu ${siteConfig.name}. Könnt ihr mir helfen?`;
