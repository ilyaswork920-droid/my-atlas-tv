import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Rechtliche Hinweise",
  description: `Rechtliche Hinweise zur Website ${siteConfig.name} (${siteConfig.domain}): Betreiber, Hosting, geistiges Eigentum und Kontaktinformationen.`,
  alternates: { canonical: "/legal-notice" },
  openGraph: {
    title: `Rechtliche Hinweise | ${siteConfig.name}`,
    description: `Rechtliche Hinweise zur Website ${siteConfig.name} (${siteConfig.domain}): Betreiber, Hosting, geistiges Eigentum und Kontaktinformationen.`,
    url: `${siteConfig.url}/legal-notice`,
  },
};

const sections = [
  {
    h2: "Betreiber der Website",
    body: [
      `Die Website ${siteConfig.domain} wird von ${siteConfig.name} betrieben. Vollständige Angaben zum Betreiber können auf Anfrage unter ${siteConfig.supportEmail} mitgeteilt werden.`,
    ],
  },
  {
    h2: "Verantwortlich für den Inhalt",
    body: [
      `Die inhaltliche Verantwortung für die Website liegt bei ${siteConfig.name}, erreichbar über die im Abschnitt „Kontakt" unten angegebene Adresse.`,
    ],
  },
  {
    h2: "Hosting",
    body: [
      "Diese Website wird von Vercel Inc., einem Anbieter von Cloud-Infrastruktur, gehostet. Vercel übernimmt ausschließlich das technische Hosting der Inhalte und hat keinen Einfluss auf die redaktionellen Inhalte der Website.",
    ],
  },
  {
    h2: "Geistiges Eigentum",
    body: [
      `Sämtliche Inhalte dieser Website — Texte, Grafiken, Logo und die Marke ${siteConfig.name} — sind, sofern nicht anders angegeben, Eigentum von ${siteConfig.name} und dürfen ohne vorherige schriftliche Genehmigung nicht vervielfältigt werden.`,
    ],
  },
  {
    h2: "Personenbezogene Daten",
    body: [
      "Die Verarbeitung der auf dieser Website erhobenen personenbezogenen Daten ist in unserer Datenschutzerklärung beschrieben, die über die Fußzeile der Website erreichbar ist.",
    ],
  },
  {
    h2: "Haftung",
    body: [
      `${siteConfig.name} bemüht sich, die Informationen auf dieser Website aktuell und korrekt zu halten, kann jedoch keine Gewähr für die Fehlerfreiheit oder Vollständigkeit übernehmen. Die Nutzung dieser Website erfolgt in eigener Verantwortung des Nutzers.`,
    ],
  },
  {
    h2: "Anwendbares Recht",
    body: [
      "Diese rechtlichen Hinweise unterliegen dem am Sitz des Website-Betreibers geltenden Recht. Für Streitigkeiten im Zusammenhang mit ihrer Auslegung oder Anwendung sind die zuständigen Gerichte zuständig.",
    ],
  },
  {
    h2: "Kontakt",
    body: [
      `Bei rechtlichen Fragen zu dieser Website erreichen Sie uns per E-Mail unter ${siteConfig.supportEmail} oder über WhatsApp unter ${siteConfig.whatsapp.numberDisplay}.`,
    ],
  },
];

export default function LegalNoticePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[170px] pb-14 sm:pt-[188px] sm:pb-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-texture opacity-30" />
        <div
          aria-hidden
          className="glow-blob left-1/2 top-[-220px] h-[460px] w-[680px] -translate-x-1/2 bg-purple-600/25"
        />
        <div className="container-edge relative flex flex-col items-start gap-5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="transition-colors hover:text-white">
              Startseite
            </Link>
            <span>/</span>
            <span className="text-mist">Rechtliche Hinweise</span>
          </nav>
          <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-cloud sm:text-5xl">
            Rechtliche Hinweise
          </h1>
          <p className="max-w-xl text-balance text-base text-muted sm:text-lg" lang="de">
            Rechtliche Angaben zum Betrieb und Hosting der Website {siteConfig.domain}.
          </p>
        </div>
      </section>

      <section className="relative pb-24 sm:pb-28">
        <div className="container-edge">
          <div className="mx-auto flex max-w-2xl flex-col gap-12" lang="de">
            {sections.map((section, i) => (
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
                </div>
              </Reveal>
            ))}

            <Reveal>
              <Link
                href="/"
                className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-purple-300 transition-colors hover:text-white"
              >
                ← Zurück zur Startseite
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
