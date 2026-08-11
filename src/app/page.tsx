import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { StreamingFeatures } from "@/components/home/streaming-features";
import { Infrastructure } from "@/components/home/infrastructure";
import { ContentShowcase } from "@/components/home/content-showcase";
import { SocialProof } from "@/components/home/social-proof";
import { PriceComparison } from "@/components/home/price-comparison";
import { PricingTeaser } from "@/components/home/pricing-teaser";
import { Testimonials } from "@/components/home/testimonials";
import { SetupTeaser } from "@/components/home/setup-teaser";
import { FinalCta } from "@/components/home/final-cta";
import { siteConfig, plans } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "IPTV Germany | Premium IPTV-Abo ab €30/Jahr",
  description:
    "Streame mit IPTV Germany: 15.000+ Live-Kanäle, HD/4K/8K-Streaming, erstklassige internationale Inhalte. Sofortige Aktivierung, 24/7 WhatsApp-Support. Kostenlose Testphase verfügbar.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "IPTV Germany | Premium IPTV-Abo ab €30/Jahr",
    description:
      "Streame mit IPTV Germany: 15.000+ Live-Kanäle, HD/4K/8K-Streaming, erstklassige internationale Inhalte. Sofortige Aktivierung, 24/7 WhatsApp-Support.",
    url: siteConfig.url,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "IPTV Subscription Service",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  description: siteConfig.description,
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    price: plan.price,
    priceCurrency: "EUR",
    url: `${siteConfig.url}/pricing`,
    availability: "https://schema.org/InStock",
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero />
      <TrustStrip />
      <StreamingFeatures />
      <Infrastructure />
      <ContentShowcase />
      <SocialProof />
      <PriceComparison />
      <PricingTeaser />
      <Testimonials />
      <SetupTeaser />
      <FinalCta />
    </>
  );
}
