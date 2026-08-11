import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt | IPTV Germany Support",
  description:
    "Kontaktiere IPTV Germany bei Fragen zum Abo, zur Einrichtung oder zur Abrechnung. Schreib uns direkt auf WhatsApp für eine schnelle Antwort.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Kontakt | IPTV Germany Support",
    description:
      "Kontaktiere IPTV Germany bei Fragen zum Abo, zur Einrichtung oder zur Abrechnung.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="relative pb-24 sm:pb-28">
        <div className="container-edge grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
