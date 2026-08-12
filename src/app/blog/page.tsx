import type { Metadata } from "next";
import { blogArticles } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";
import { RevealGroup } from "@/components/ui/reveal";
import { BlogCard } from "@/components/blog/blog-card";

export const metadata: Metadata = {
  title: "IPTV Blog Deutschland | Ratgeber, Vergleiche und Tipps",
  description:
    "Ratgeber, Vergleiche und praktische Tipps rund um IPTV in Deutschland: Anbieter, Smart-TV, Einrichtung, 4K-Qualität, Sport und Legalität, verständlich erklärt.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: siteConfig.name,
    title: "IPTV Blog Deutschland | Ratgeber, Vergleiche und Tipps",
    description:
      "Ratgeber, Vergleiche und praktische Tipps rund um IPTV in Deutschland, verständlich erklärt.",
    url: `${siteConfig.url}/blog`,
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Blog Deutschland | Ratgeber, Vergleiche und Tipps",
    description:
      "Ratgeber, Vergleiche und praktische Tipps rund um IPTV in Deutschland, verständlich erklärt.",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      {/* Fixed-height dark spacer sits exactly behind the transparent header for nav contrast. */}
      <div aria-hidden className="h-24 bg-black" />

      <section className="bg-white pb-24 pt-14 sm:pb-28 sm:pt-16">
        <div className="container-edge" lang="de">
          <div className="flex flex-col gap-3 pb-12 sm:pb-16">
            <h1 className="font-display text-5xl font-bold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              BLOG
            </h1>
            <p className="max-w-xl text-balance text-base text-neutral-500 sm:text-lg">
              Ratgeber, Vergleiche und konkrete Antworten, um IPTV zu verstehen, das passende
              Abo zu wählen und es reibungslos einzurichten.
            </p>
          </div>

          <RevealGroup
            className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.04}
          >
            {blogArticles.map((article, i) => (
              <BlogCard key={article.slug} article={article} priority={i < 3} />
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
