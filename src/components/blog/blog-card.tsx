"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogArticle } from "@/lib/blog";
import { revealItem } from "@/components/ui/reveal";

export function BlogCard({
  article,
  priority = false,
}: {
  article: BlogArticle;
  priority?: boolean;
}) {
  return (
    <motion.div variants={revealItem}>
      <Link href={`/blog/${article.slug}`} className="group flex flex-col gap-4">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-100">
          <Image
            src={article.featuredImage}
            alt={article.imageAlt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-wide text-neutral-400">
            {article.keyword}
          </span>
          <h2 className="font-display text-lg font-semibold leading-snug text-neutral-950 transition-colors duration-200 group-hover:text-purple-600">
            {article.title}
          </h2>
        </div>
      </Link>
    </motion.div>
  );
}
