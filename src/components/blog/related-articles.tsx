"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogArticle } from "@/lib/blog";
import { getRelatedArticles } from "@/lib/blog";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, revealItem } from "@/components/ui/reveal";

export function RelatedArticles({ article }: { article: BlogArticle }) {
  const related = getRelatedArticles(article);
  if (related.length === 0) return null;

  return (
    <section className="relative py-14 sm:py-16">
      <div className="container-edge">
        <div className="mx-auto max-w-4xl" lang="de">
          <SectionHeading eyebrow="Auch interessant" title="Weiterführende Artikel" align="left" />
          <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.06}>
            {related.map((r) => (
              <motion.div key={r.slug} variants={revealItem}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="group flex h-full flex-col justify-between gap-3 rounded-2xl border border-white/8 bg-navy-900/50 p-6 transition-colors hover:border-purple-400/30"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                      {r.keyword}
                    </p>
                    <p className="mt-2 font-display text-base font-semibold text-cloud">
                      {r.title}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-white">
                    Artikel lesen
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
