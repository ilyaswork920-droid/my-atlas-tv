import type { Metadata } from "next";
import { SetupHero } from "@/components/setup/setup-hero";
import { SetupSteps } from "@/components/setup/setup-steps";
import { DevicesGrid } from "@/components/setup/devices-grid";
import { DeviceGuides } from "@/components/setup/device-guides";
import { SetupHelpCta } from "@/components/setup/setup-help-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "IPTV Einrichtungsanleitung | Smart TV, Fire Stick, Handy & PC",
  description:
    "Schritt-für-Schritt IPTV Germany Einrichtungsanleitung für Samsung, LG, Fire TV Stick, Android TV, iPhone, Android und PC. In unter 5 Minuten streamen, mit WhatsApp-Support.",
  alternates: { canonical: "/setup-guide" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: siteConfig.name,
    title: "IPTV Einrichtungsanleitung | Smart TV, Fire Stick, Handy & PC",
    description:
      "Schritt-für-Schritt IPTV Germany Einrichtungsanleitung für jedes Gerät. In unter 5 Minuten streamen.",
    url: `${siteConfig.url}/setup-guide`,
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Einrichtungsanleitung | Smart TV, Fire Stick, Handy & PC",
    description:
      "Schritt-für-Schritt IPTV Germany Einrichtungsanleitung für jedes Gerät. In unter 5 Minuten streamen.",
  },
};

export default function SetupGuidePage() {
  return (
    <>
      <SetupHero />
      <SetupSteps />
      <DevicesGrid />
      <DeviceGuides />
      <SetupHelpCta />
    </>
  );
}
