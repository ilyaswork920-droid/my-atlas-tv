import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Politique de confidentialité du site ${siteConfig.name} (${siteConfig.domain}) : données collectées, finalités, base légale et droits RGPD.`,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description: `Politique de confidentialité du site ${siteConfig.name} (${siteConfig.domain}) : données collectées, finalités, base légale et droits RGPD.`,
    url: `${siteConfig.url}/privacy-policy`,
  },
};

const sections = [
  {
    h2: "Responsable du traitement",
    body: [
      `Le responsable du traitement des données collectées sur ${siteConfig.domain} est ${siteConfig.name}, joignable à l'adresse ${siteConfig.supportEmail}.`,
    ],
  },
  {
    h2: "Données collectées",
    body: [
      `Lorsque vous utilisez le formulaire de contact du site, nous collectons les informations que vous renseignez : nom, adresse email et message. Lorsque vous nous contactez via WhatsApp, cet échange a lieu directement sur la plateforme WhatsApp et est soumis à la politique de confidentialité de WhatsApp (Meta).`,
    ],
  },
  {
    h2: "Finalités du traitement",
    body: [
      "Les données collectées sont utilisées uniquement pour répondre à votre demande, vous accompagner dans le choix, la souscription ou l'installation de votre abonnement, et assurer le support client. Nous ne vendons pas vos informations personnelles à des tiers.",
    ],
  },
  {
    h2: "Base légale",
    body: [
      "Le traitement de vos données repose sur votre consentement, exprimé librement lorsque vous nous contactez via le formulaire du site ou via WhatsApp.",
    ],
  },
  {
    h2: "Durée de conservation",
    body: [
      "Vos données sont conservées uniquement le temps nécessaire pour traiter votre demande et assurer le suivi du support, puis supprimées ou anonymisées.",
    ],
  },
  {
    h2: "Cookies et traceurs",
    body: [
      `${siteConfig.name} n'utilise aucun cookie publicitaire ni traceur tiers sur ce site. Seuls les éléments techniques strictement nécessaires à son fonctionnement sont utilisés.`,
    ],
  },
  {
    h2: "Partage des données",
    body: [
      "Vos données ne sont ni vendues ni partagées avec des tiers, à l'exception des prestataires techniques nécessaires au fonctionnement du site : notre hébergeur (Vercel Inc.) et WhatsApp/Meta pour les échanges que vous initiez vous-même.",
    ],
  },
  {
    h2: "Vos droits",
    body: [
      "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement et de limitation du traitement de vos données personnelles. Vous pouvez exercer ces droits à tout moment en nous contactant à " +
        siteConfig.supportEmail +
        ". Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL).",
    ],
  },
  {
    h2: "Contact",
    body: [
      `Pour toute question relative à cette politique de confidentialité ou à l'utilisation de vos données, contactez-nous à ${siteConfig.supportEmail} ou via WhatsApp au ${siteConfig.whatsapp.numberDisplay}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
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
            <span className="text-mist">Privacy Policy</span>
          </nav>
          <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-cloud sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="max-w-xl text-balance text-base text-muted sm:text-lg" lang="fr">
            Comment {siteConfig.domain} collecte et utilise vos informations personnelles.
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
