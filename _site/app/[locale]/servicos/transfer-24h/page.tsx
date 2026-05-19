/**
 * Página: Transfer 24h — /servicos/transfer-24h/
 */

import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { empresa } from "@/data/empresa";
import { buildLocaleAlternates, SITE_URL } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASticky } from "@/components/CTASticky";
import { FAQAccordion } from "@/components/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "TransferPage" });
  const alternates = buildLocaleAlternates(params.locale, "/servicos/transfer-24h");
  return {
    title: { absolute: `${t("h1")} | Vem Passear em Jampa` },
    description: t("metaDescription"),
    alternates,
    openGraph: {
      title: t("h1"),
      description: t("metaDescription"),
      url: alternates.canonical,
      images: [
        { url: "/og-image.svg", width: 1200, height: 630, alt: t("h1") },
      ],
    },
  };
}

const WA_URL = `${empresa.contato.whatsappLink}?text=Oi%2C+quero+solicitar+cota%C3%A7%C3%A3o+de+transfer`;

export default async function TransferPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t    = await getTranslations("TransferPage");
  const tNav = await getTranslations("Nav");

  const SERVICE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: t("nome"),
    name: t("h1"),
    description: t("descricao"),
    areaServed: {
      "@type": "City",
      name: "João Pessoa",
      addressRegion: "PB",
      addressCountry: "BR",
    },
    provider: {
      "@type": "TravelAgency",
      name: "Vem Passear em Jampa",
      telephone: "+55 83 9908-7830",
      url: SITE_URL,
    },
    url: `${SITE_URL}/servicos/transfer-24h`,
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const faqItems = t.raw("faq") as Array<{ pergunta: string; resposta: string }>;
  const faqSchema = generateFAQSchema(faqItems);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: tNav("inicio"), item: SITE_URL },
    { name: t("crumbServicos"), item: `${SITE_URL}/servicos` },
    { name: t("crumbTransfer"), item: `${SITE_URL}/servicos/transfer-24h` },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <CTASticky whatsappUrl={WA_URL} label={t("stickyLabel")} />

      <Breadcrumb
        items={[
          { label: tNav("inicio"), href: "/" },
          { label: t("crumbServicos") },
          { label: t("crumbTransfer") },
        ]}
        currentUrl={`https://${empresa.dominio}/servicos/transfer-24h/`}
      />

      {/* Hero */}
      <section
        id="hero-section"
        style={{ background: 'var(--cor-primaria)', padding: '64px 24px 80px', textAlign: 'center' }}
      >
        <div className="container-safe" style={{ maxWidth: '620px' }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-inter)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--cor-acento)',
              marginBottom: '16px',
            }}
          >
            {t("heroKicker")}
          </span>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(28px, 4.5vw, 48px)',
              fontWeight: 600,
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            {t("h1")}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '17px',
              color: 'var(--cor-areia)',
              lineHeight: 1.65,
              marginBottom: '32px',
            }}
          >
            {t("descricao")}
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--cor-acento)',
              color: '#fff',
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              fontSize: '17px',
              padding: '18px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: 'var(--sombra-cta)',
            }}
          >
            {t("heroCta")}
          </a>
        </div>
      </section>

      {/* Informações */}
      <section className="section-padding">
        <div className="container-safe max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm text-gray-500 mb-1">{t("cardAtendimentoTitulo")}</p>
              <p className="text-xl font-bold text-secondary">{t("atendimento")}</p>
              <p className="text-sm text-gray-600 mt-1">{t("cardAtendimentoSub")}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm text-gray-500 mb-1">{t("cardCoberturaTitulo")}</p>
              <p className="text-lg font-bold text-secondary">{t("cobertura")}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm text-gray-500 mb-1">{t("cardCobrancaTitulo")}</p>
              <p className="text-xl font-bold text-secondary">{t("cardCobrancaValor")}</p>
              <p className="text-sm text-gray-600 mt-1">{t("cardCobrancaSub")}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm text-gray-500 mb-1">{t("cardValorTitulo")}</p>
              <p className="text-lg font-bold text-primary">{t("cardValorValor")}</p>
              <p className="text-sm text-gray-600 mt-1">{t("cardValorSub")}</p>
            </div>
          </div>

          {/* Por que */}
          <div className="bg-light rounded-lg p-6 mb-10">
            <h2 className="text-xl font-bold text-secondary mb-4">
              {t("porqueTitulo")}
            </h2>
            <ul className="space-y-3 text-gray-700">
              {[t("porque1"), t("porque2"), t("porque3"), t("porque4"), t("porque5")].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trajetos */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-secondary mb-4">{t("trajetosTitulo")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { de: t("trajeto1De"), para: t("trajeto1Para") },
                { de: t("trajeto2De"), para: t("trajeto2Para") },
                { de: t("trajeto3De"), para: t("trajeto3Para") },
                { de: t("trajeto4De"), para: t("trajeto4Para") },
              ].map((trj, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4 text-sm">
                  <p className="text-gray-500">{trj.de}</p>
                  <p className="text-primary font-semibold">→ {trj.para}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">{t("trajetosNota")}</p>
          </div>

          {/* Contratar */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-secondary mb-4">{t("contratarTitulo")}</h2>
            <ol className="space-y-4">
              {[
                { n: "1", t: t("contratar1Titulo"), d: t("contratar1Desc") },
                { n: "2", t: t("contratar2Titulo"), d: t("contratar2Desc") },
                { n: "3", t: t("contratar3Titulo"), d: t("contratar3Desc") },
              ].map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    {step.n}
                  </span>
                  <div>
                    <p className="font-semibold text-dark">{step.t}</p>
                    <p className="text-sm text-gray-600">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-safe max-w-3xl">
          <h2>{t("faqTitulo")}</h2>
          <div className="mt-6">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="section-padding bg-primary text-white">
        <div className="container-safe text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t("ctaFinalTitulo")}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {t("ctaFinalSub")}
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            {t("ctaFinalBotao")}
          </a>
        </div>
      </section>

      {/* Cross-link */}
      <section className="container-safe py-10">
        <div className="rounded-2xl border border-[#C5B7A3]/50 bg-[#F7F8F7] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-1">{t("crossKicker")}</p>
            <h3 className="font-serif font-bold text-secondary text-lg md:text-xl mb-1">{t("crossTitulo")}</h3>
            <p className="text-sm text-gray-700 max-w-xl">{t("crossDesc")}</p>
          </div>
          <Link
            href="/servicos/excursoes-e-grupos"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold px-5 py-3 rounded-full text-sm transition-colors whitespace-nowrap"
          >
            {t("crossCta")}
          </Link>
        </div>
      </section>

      <div className="container-safe py-6 text-center">
        <Link href="/passeios" className="text-sm text-primary hover:text-accent font-medium transition-colors">
          {t("verTodosPasseios")}
        </Link>
      </div>
    </div>
  );
}
