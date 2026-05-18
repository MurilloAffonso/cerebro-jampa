/**
 * Página pública — Tábua de Maré em João Pessoa.
 */

import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { empresa } from "@/data/empresa";
import {
  TABUA_MARES_MANUAL_2026,
  getMesAtual,
  buildMensagemWhatsApp,
} from "@/data/tabua-mares-manual";
import { generateFAQSchema, generateBreadcrumbSchema, buildLocaleAlternates } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTAFinal } from "@/components/CTAFinal";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TabuaMareMesTabs } from "@/components/TabuaMareMesTabs";
import { TabuaMareMensal } from "@/components/TabuaMareMensal";
import { TabuaMarePasseiosRelacionados } from "@/components/TabuaMarePasseiosRelacionados";

const SITE_URL = `https://${empresa.dominio}`;
const PAGE_URL = `${SITE_URL}/tabua-de-mares-joao-pessoa`;

const KEYWORDS = [
  "tábua de maré João Pessoa",
  "tábua de marés João Pessoa 2026",
  "maré baixa João Pessoa",
  "piscinas naturais João Pessoa",
  "Piscinas Naturais do Seixas",
  "Areia Vermelha",
  "Picãozinho",
];

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "TabuaPage" });
  const alternates = buildLocaleAlternates(params.locale, "/tabua-de-mares-joao-pessoa");
  return {
    title: t("seoTitle"),
    description: t("seoDescription"),
    keywords: KEYWORDS.join(", "),
    alternates,
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: alternates.canonical,
      type: "website",
      siteName: "Vem Passear em Jampa",
    },
  };
}

const WA_URL = `${empresa.contato.whatsappLink}?text=${encodeURIComponent(buildMensagemWhatsApp())}`;

export default async function TabuaMaresJoaoPessoaPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations("TabuaPage");
  const mesAtual = getMesAtual();
  const faqItems = t.raw("faq") as Array<{ pergunta: string; resposta: string }>;
  const faqSchema = generateFAQSchema(faqItems);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t("crumbHome"), item: SITE_URL },
    { name: t("crumbTabua"), item: PAGE_URL },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb
        items={[
          { label: t("crumbHome"), href: "/" },
          { label: t("crumbTabua") },
        ]}
        currentUrl={PAGE_URL}
      />

      {/* HERO */}
      <section
        style={{
          background: "var(--cor-fundo)",
          borderBottom: "1px solid var(--cor-borda)",
        }}
      >
        <div className="container-safe py-12 md:py-20">
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--cor-primaria)",
              marginBottom: "14px",
            }}
          >
            {t("heroKicker")}
          </span>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 600,
              lineHeight: 1.05,
              color: "var(--cor-texto-escuro)",
              maxWidth: "780px",
              marginBottom: "20px",
            }}
          >
            {t("heroTitulo")}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(16px, 1.7vw, 19px)",
              lineHeight: 1.6,
              color: "var(--cor-texto-medio)",
              maxWidth: "640px",
              marginBottom: "28px",
            }}
          >
            {t("heroSubtitulo")}
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--cor-whatsapp)",
              color: "#fff",
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              fontSize: "16px",
              padding: "16px 24px",
              borderRadius: "999px",
              minHeight: "52px",
              textDecoration: "none",
              boxShadow: "0 4px 18px rgba(37,211,102,0.30)",
            }}
          >
            {t("heroCta")}
          </a>
        </div>
      </section>

      {/* EXPLICAÇÃO */}
      <section className="container-safe py-12 md:py-16">
        <div style={{ maxWidth: "720px" }}>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(22px, 2.5vw, 28px)",
              fontWeight: 600,
              color: "var(--cor-texto-escuro)",
              marginBottom: "16px",
            }}
          >
            {t("explicacaoTitulo")}
          </h2>
          <div
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              lineHeight: 1.75,
              color: "var(--cor-texto-medio)",
            }}
          >
            <p
              style={{ marginBottom: "14px" }}
              dangerouslySetInnerHTML={{ __html: t.raw("explicacaoP1") as string }}
            />
            <p>{t("explicacaoP2")}</p>
          </div>
        </div>
      </section>

      {/* CALENDÁRIOS */}
      <section
        id="calendarios"
        className="py-8 md:py-12"
        style={{
          background: "var(--cor-fundo-puro)",
          borderTop: "1px solid var(--cor-borda)",
        }}
      >
        <div className="container-safe pb-2">
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(22px, 2.5vw, 28px)",
              fontWeight: 600,
              color: "var(--cor-texto-escuro)",
              marginBottom: "8px",
            }}
          >
            {t("calendariosTitulo")}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "15px",
              color: "var(--cor-texto-medio)",
              marginBottom: "8px",
            }}
          >
            {t("calendariosSub")}
          </p>
        </div>

        <TabuaMareMesTabs
          meses={TABUA_MARES_MANUAL_2026}
          defaultMesSlug={mesAtual.mesSlug}
        />

        {TABUA_MARES_MANUAL_2026.map((mes) => (
          <TabuaMareMensal
            key={mes.mesSlug}
            mes={mes}
            visivel={mes.mesSlug === mesAtual.mesSlug}
          />
        ))}
      </section>

      <TabuaMarePasseiosRelacionados />

      {/* FAQ */}
      <section className="container-safe py-12 md:py-16">
        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 600,
            color: "var(--cor-texto-escuro)",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          {t("faqTitulo")}
        </h2>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTAFinal
        whatsappUrl={WA_URL}
        label={t("ctaLabel")}
        titulo={t("ctaTitulo")}
        subtitulo={t("ctaSub")}
        microcopy={t("ctaMicrocopy")}
      />
    </>
  );
}
