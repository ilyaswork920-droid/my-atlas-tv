import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { PlanCards } from "@/components/pricing/plan-cards";
import { PriceComparison } from "@/components/home/price-comparison";
import { Guarantees } from "@/components/pricing/guarantees";
import { FinalCta } from "@/components/home/final-cta";
import { siteConfig, plans } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "IPTV Abo Deutschland | Premium Pakete ab €29",
  description:
    "IPTV Germany Premium Pakete für 3, 6 oder 12 Monate. +55.000 Live-Kanäle, +90.000 Filme & Serien, alle deutschen Premium- & Sportsender, Geld-zurück-Garantie.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: siteConfig.name,
    title: "IPTV Abo Deutschland | Premium Pakete ab €29",
    description:
      "IPTV Germany Premium Pakete für 3, 6 oder 12 Monate. +55.000 Live-Kanäle, +90.000 Filme & Serien, Geld-zurück-Garantie.",
    url: `${siteConfig.url}/pricing`,
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Abo Deutschland | Premium Pakete ab €29",
    description:
      "IPTV Germany Premium Pakete für 3, 6 oder 12 Monate. +55.000 Live-Kanäle, +90.000 Filme & Serien, Geld-zurück-Garantie.",
  },
};

const offerJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: `${siteConfig.name} Tarife`,
  itemListElement: plans.map((plan, index) => ({
    "@type": "Offer",
    position: index + 1,
    name: plan.name,
    price: plan.price,
    priceCurrency: "EUR",
    url: `${siteConfig.url}/pricing`,
    availability: "https://schema.org/InStock",
    itemOffered: {
      "@type": "Service",
      name: `${siteConfig.name} – ${plan.name}`,
      description: plan.features.join(", "),
    },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }}
      />
      <PricingHero />
      <PlanCards />
      <PriceComparison />
      <Guarantees />
      <FinalCta />
    </>
  );
}
