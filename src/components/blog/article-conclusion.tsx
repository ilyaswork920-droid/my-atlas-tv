import Link from "next/link";
import type { BlogArticle, SitePage } from "@/lib/blog";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { trialWhatsAppMessage } from "@/lib/site-config";

const PAGE_META: Record<SitePage, { label: string; href: string }> = {
  home: { label: "Startseite", href: "/" },
  pricing: { label: "Preise", href: "/pricing" },
  setup: { label: "Einrichtungsanleitung", href: "/setup-guide" },
  contact: { label: "Kontakt", href: "/contact" },
};

export function ArticleConclusion({ article }: { article: BlogArticle }) {
  return (
    <section className="relative py-14 sm:py-16">
      <div className="container-edge">
        <div className="mx-auto max-w-2xl" lang="de">
          <Reveal>
            <div className="rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-600/15 via-navy-900 to-blue-600/10 p-8 sm:p-10">
              <div className="flex flex-col gap-4 text-base leading-relaxed text-mist">
                {article.conclusion.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <WhatsAppButton message={trialWhatsAppMessage} showArrow>
                  Kostenlos testen
                </WhatsAppButton>
                {article.sitePages.map((page) => (
                  <Link
                    key={page}
                    href={PAGE_META[page].href}
                    className="inline-flex h-11 items-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-medium text-mist transition-colors hover:border-white/20 hover:text-white"
                  >
                    {PAGE_META[page].label}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
