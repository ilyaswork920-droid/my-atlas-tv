import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllSlugs, clusterLabel } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";
import { BlogHeader } from "@/components/blog/blog-header";
import { ArticleBody } from "@/components/blog/article-body";
import { ArticleFaq } from "@/components/blog/article-faq";
import { RelatedArticles } from "@/components/blog/related-articles";
import { ArticleConclusion } from "@/components/blog/article-conclusion";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: `/blog/${article.slug}` },
    keywords: [article.keyword, ...article.secondaryKeywords],
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `${siteConfig.url}/blog/${article.slug}`,
      locale: "de_DE",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.metaDescription,
    inLanguage: "de",
    about: article.keyword,
    articleSection: clusterLabel(article.cluster),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogHeader article={article} />
      <ArticleBody article={article} />
      <ArticleFaq article={article} />
      <RelatedArticles article={article} />
      <ArticleConclusion article={article} />
    </>
  );
}

