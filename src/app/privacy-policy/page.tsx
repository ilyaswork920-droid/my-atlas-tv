import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung der Website ${siteConfig.name} (${siteConfig.domain}): erhobene Daten, Zwecke, Rechtsgrundlage und Ihre Rechte nach der DSGVO.`,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: `Datenschutzerklärung | ${siteConfig.name}`,
    description: `Datenschutzerklärung der Website ${siteConfig.name} (${siteConfig.domain}): erhobene Daten, Zwecke, Rechtsgrundlage und Ihre Rechte nach der DSGVO.`,
    url: `${siteConfig.url}/privacy-policy`,
  },
};

const sections = [
  {
    h2: "Verantwortlicher für die Datenverarbeitung",
    body: [
      `Verantwortlicher für die auf ${siteConfig.domain} erhobenen Daten ist ${siteConfig.name}, erreichbar unter ${siteConfig.supportEmail}.`,
    ],
  },
  {
    h2: "Erhobene Daten",
    body: [
      `Wenn Sie das Kontaktformular der Website nutzen, erheben wir die von Ihnen angegebenen Informationen: Name, E-Mail-Adresse und Nachricht. Wenn Sie uns über WhatsApp kontaktieren, findet dieser Austausch direkt auf der WhatsApp-Plattform statt und unterliegt der Datenschutzrichtlinie von WhatsApp (Meta).`,
    ],
  },
  {
    h2: "Zweck der Verarbeitung",
    body: [
      "Die erhobenen Daten werden ausschließlich verwendet, um Ihre Anfrage zu beantworten, Sie bei der Auswahl, dem Abschluss oder der Einrichtung Ihres Abonnements zu unterstützen und den Kundensupport sicherzustellen. Wir verkaufen Ihre personenbezogenen Daten nicht an Dritte.",
    ],
  },
  {
    h2: "Rechtsgrundlage",
    body: [
      "Die Verarbeitung Ihrer Daten beruht auf Ihrer Einwilligung, die Sie freiwillig erteilen, wenn Sie uns über das Kontaktformular der Website oder über WhatsApp kontaktieren.",
    ],
  },
  {
    h2: "Speicherdauer",
    body: [
      "Ihre Daten werden nur so lange gespeichert, wie es zur Bearbeitung Ihrer Anfrage und zur Nachverfolgung des Supports erforderlich ist, und anschließend gelöscht oder anonymisiert.",
    ],
  },
  {
    h2: "Cookies und Tracking",
    body: [
      `${siteConfig.name} verwendet auf dieser Website weder Werbe-Cookies noch Tracking-Tools von Drittanbietern. Es werden ausschließlich technisch notwendige Elemente eingesetzt, die für den Betrieb der Website erforderlich sind.`,
    ],
  },
  {
    h2: "Weitergabe von Daten",
    body: [
      "Ihre Daten werden weder verkauft noch an Dritte weitergegeben, mit Ausnahme der für den Betrieb der Website notwendigen technischen Dienstleister: unser Hosting-Anbieter (Vercel Inc.) sowie WhatsApp/Meta für den Austausch, den Sie selbst initiieren.",
    ],
  },
  {
    h2: "Ihre Rechte",
    body: [
      "Gemäß der Datenschutz-Grundverordnung (DSGVO) haben Sie das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Sie können diese Rechte jederzeit ausüben, indem Sie uns unter " +
        siteConfig.supportEmail +
        " kontaktieren. Außerdem haben Sie das Recht, eine Beschwerde bei der zuständigen Datenschutz-Aufsichtsbehörde einzureichen.",
    ],
  },
  {
    h2: "Kontakt",
    body: [
      `Bei Fragen zu dieser Datenschutzerklärung oder zur Nutzung Ihrer Daten erreichen Sie uns unter ${siteConfig.supportEmail} oder über WhatsApp unter ${siteConfig.whatsapp.numberDisplay}.`,
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
              Startseite
            </Link>
            <span>/</span>
            <span className="text-mist">Datenschutzerklärung</span>
          </nav>
          <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-cloud sm:text-5xl">
            Datenschutzerklärung
          </h1>
          <p className="max-w-xl text-balance text-base text-muted sm:text-lg" lang="de">
            Wie {siteConfig.domain} Ihre personenbezogenen Daten erhebt und verwendet.
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
