import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { PlanCards } from "@/components/pricing/plan-cards";
import { ComparisonTable } from "@/components/pricing/comparison-table";
import { PriceComparison } from "@/components/home/price-comparison";
import { Guarantees } from "@/components/pricing/guarantees";
import { FinalCta } from "@/components/home/final-cta";
import { siteConfig, plans } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "IPTV Abo Deutschland | Tarife ab €30/Jahr",
  description:
    "Vergleiche die IPTV Germany Tarife: 1, 2 oder 3 Bildschirme. 15.000+ Kanäle, HD/4K/8K-Streaming, Catch-up TV und mehr. IPTV Deutschland mit sofortiger Aktivierung.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "IPTV Abo Deutschland | Tarife ab €30/Jahr",
    description:
      "Vergleiche die IPTV Germany Tarife: 1, 2 oder 3 Bildschirme. 15.000+ Kanäle, HD/4K/8K-Streaming und sofortige Aktivierung.",
    url: `${siteConfig.url}/pricing`,
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
      <ComparisonTable />
      <PriceComparison />
      <Guarantees />
      <FinalCta />
    </>
  );
}
