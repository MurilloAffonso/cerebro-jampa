/**
 * Página: FAQ — /faq/
 */

import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASticky } from "@/components/CTASticky";
import { CTAFinal } from "@/components/CTAFinal";
import { generateFAQSchema, generateBreadcrumbSchema, buildLocaleAlternates, SITE_URL } from "@/lib/seo";
import { empresa } from "@/data/empresa";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "FaqPage" });
  const alternates = buildLocaleAlternates(params.locale, "/faq");
  return {
    title: { absolute: t("seoTitle") },
    description: t("seoDescription"),
    alternates,
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: alternates.canonical,
      images: [
        { url: "/og-image.svg", width: 1200, height: 630, alt: t("ogAlt") },
      ],
    },
  };
}

const WA_URL = buildWhatsAppUrl("faq");

export default async function FaqPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations("FaqPage");
  const faqItems = t.raw("faq") as Array<{ pergunta: string; resposta: string }>;
  const faqSchema = generateFAQSchema(faqItems);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t("crumbHome"), item: SITE_URL },
    { name: t("crumbFaq"), item: `${SITE_URL}/faq` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb
        items={[
          { label: t("crumbHome"), href: "/" },
          { label: t("crumbFaq") },
        ]}
        currentUrl={`https://${empresa.dominio}/faq/`}
      />

      <CTASticky whatsappUrl={WA_URL} />

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
            {t("heroTitulo")}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '17px',
              color: 'var(--cor-areia)',
              lineHeight: 1.65,
            }}
          >
            {t("heroSubtitulo")}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-safe max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA Final */}
      <CTAFinal
        whatsappUrl={WA_URL}
        variante="laranja"
        label={t("ctaLabel")}
        titulo={t("ctaTitulo")}
        subtitulo={t("ctaSubtitulo")}
        textoBotao={t("ctaBotao")}
      />

      <div className="container-safe py-6 text-center">
        <Link href="/passeios" className="text-sm text-primary hover:text-accent font-medium transition-colors">
          {t("verTodosPasseios")}
        </Link>
      </div>
    </>
  );
}
