import type { BlogArticle } from "@/lib/blog";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ArticleFaq({ article }: { article: BlogArticle }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section className="relative py-14 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-edge">
        <div className="mx-auto max-w-2xl" lang="de">
          <SectionHeading eyebrow="FAQ" title="Häufig gestellte Fragen" align="left" />
          <div className="mt-8 flex flex-col gap-4">
            {article.faq.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="rounded-2xl border border-white/8 bg-navy-900/50 p-6">
                  <h3 className="font-display text-base font-semibold text-cloud">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
