import type { BlogArticle } from "@/lib/blog";
import { Reveal } from "@/components/ui/reveal";

export function ArticleBody({ article }: { article: BlogArticle }) {
  return (
    <section className="relative py-4 sm:py-6">
      <div className="container-edge">
        <div className="mx-auto flex max-w-2xl flex-col gap-12" lang="de">
          {article.sections.map((section, i) => (
            <Reveal key={i}>
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-2xl font-bold tracking-tight text-cloud sm:text-[1.75rem]">
                  {section.h2}
                </h2>
                <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
                  {section.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>

                {section.subsections && section.subsections.length > 0 && (
                  <div className="mt-2 flex flex-col gap-6 border-l-2 border-white/10 pl-6">
                    {section.subsections.map((sub, k) => (
                      <div key={k} className="flex flex-col gap-2">
                        <h3 className="font-display text-lg font-semibold text-cloud">{sub.h3}</h3>
                        <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted">
                          {sub.body.map((p, l) => (
                            <p key={l}>{p}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
