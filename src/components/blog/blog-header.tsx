"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogArticle } from "@/lib/blog";
import { clusterLabel } from "@/lib/blog";

export function BlogHeader({ article }: { article: BlogArticle }) {
  return (
    <section className="relative overflow-hidden pt-[150px] pb-14 sm:pt-[168px] sm:pb-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-texture opacity-30" />
      <div
        aria-hidden
        className="glow-blob left-1/2 top-[-220px] h-[460px] w-[680px] -translate-x-1/2 bg-purple-600/25"
      />
      <div className="container-edge relative flex flex-col items-start gap-5" lang="de">
        <nav aria-label="Brotkrümelnavigation" className="flex items-center gap-2 text-xs text-muted">
          <Link href="/" className="transition-colors hover:text-white">
            Startseite
          </Link>
          <span>/</span>
          <Link href="/blog" className="transition-colors hover:text-white">
            Blog
          </Link>
          <span>/</span>
          <span className="text-mist">{article.keyword}</span>
        </nav>

        <div className="flex flex-wrap items-center gap-2">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-purple-300"
          >
            {clusterLabel(article.cluster)}
          </motion.span>
          {article.pillar && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-purple-300">
              Ratgeber
            </span>
          )}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="max-w-3xl font-display text-3xl font-bold tracking-tight text-cloud sm:text-4xl lg:text-[2.75rem]"
        >
          {article.h1}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="flex max-w-2xl flex-col gap-4 text-base leading-relaxed text-muted sm:text-lg"
        >
          {article.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="relative mt-2 aspect-video w-full max-w-3xl overflow-hidden rounded-2xl"
        >
          <Image
            src={article.featuredImage}
            alt={article.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
