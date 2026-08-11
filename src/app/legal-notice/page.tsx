import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: `Mentions légales du site ${siteConfig.name} (${siteConfig.domain}) : éditeur, hébergement, propriété intellectuelle et informations de contact.`,
  alternates: { canonical: "/legal-notice" },
  openGraph: {
    title: `Legal Notice | ${siteConfig.name}`,
    description: `Mentions légales du site ${siteConfig.name} (${siteConfig.domain}) : éditeur, hébergement, propriété intellectuelle et informations de contact.`,
    url: `${siteConfig.url}/legal-notice`,
  },
};

const sections = [
  {
    h2: "Éditeur du site",
    body: [
      `Le site ${siteConfig.domain} est édité par ${siteConfig.name}. Les informations d'identification complètes de l'éditeur peuvent être communiquées sur demande à l'adresse ${siteConfig.supportEmail}.`,
    ],
  },
  {
    h2: "Directeur de la publication",
    body: [
      `La direction de la publication du site est assurée par ${siteConfig.name}, joignable à l'adresse indiquée dans la rubrique « Contact » ci-dessous.`,
    ],
  },
  {
    h2: "Hébergement",
    body: [
      "Ce site est hébergé par Vercel Inc., fournisseur d'infrastructure cloud. Vercel assure l'hébergement technique du contenu du site et n'intervient pas dans son contenu éditorial.",
    ],
  },
  {
    h2: "Propriété intellectuelle",
    body: [
      `L'ensemble des contenus présents sur ce site — textes, graphismes, logo et marque ${siteConfig.name} — est la propriété de ${siteConfig.name}, sauf mention contraire, et ne peut être reproduit sans autorisation écrite préalable.`,
    ],
  },
  {
    h2: "Données personnelles",
    body: [
      "Le traitement des données personnelles collectées sur ce site est détaillé dans notre Politique de Confidentialité, accessible depuis le pied de page du site.",
    ],
  },
  {
    h2: "Responsabilité",
    body: [
      `${siteConfig.name} s'efforce de maintenir les informations de ce site à jour et exactes, mais ne peut garantir l'absence d'erreurs ou d'omissions. L'utilisation de ce site relève de la responsabilité de l'utilisateur.`,
    ],
  },
  {
    h2: "Droit applicable",
    body: [
      "Les présentes mentions légales sont soumises au droit applicable au lieu d'exploitation du site. Tout litige relatif à leur interprétation ou à leur exécution relève de la compétence des tribunaux compétents.",
    ],
  },
  {
    h2: "Contact",
    body: [
      `Pour toute question d'ordre légal concernant ce site, vous pouvez nous contacter par email à ${siteConfig.supportEmail} ou via WhatsApp au ${siteConfig.whatsapp.numberDisplay}.`,
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
              Home
            </Link>
            <span>/</span>
            <span className="text-mist">Legal Notice</span>
          </nav>
          <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-cloud sm:text-5xl">
            Legal Notice
          </h1>
          <p className="max-w-xl text-balance text-base text-muted sm:text-lg" lang="fr">
            Mentions légales relatives à l&apos;édition et à l&apos;hébergement du site{" "}
            {siteConfig.domain}.
          </p>
        </div>
      </section>

      <section className="relative pb-24 sm:pb-28">
        <div className="container-edge">
          <div className="mx-auto flex max-w-2xl flex-col gap-12" lang="fr">
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
                ← Retour à l&apos;accueil
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
