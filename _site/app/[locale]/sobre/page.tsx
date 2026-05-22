/**
 * Página: Sobre — /sobre/
 */

import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { empresa } from "@/data/empresa";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASticky } from "@/components/CTASticky";
import { CTAFinal } from "@/components/CTAFinal";
import { FAQAccordion } from "@/components/FAQAccordion";
import { buildLocaleAlternates, buildLocalizedUrl, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const CADASTUR_URL = "https://cadastur.turismo.gov.br/cadastur/#!/public/qrcode/52077577000103";

const WA_URL = buildWhatsAppUrl("sobre");

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "SobrePage" });
  const alternates = buildLocaleAlternates(params.locale, "/sobre");
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

export default async function SobrePage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations("SobrePage");
  const diferenciais = empresa.diferencial.split(" + ");
  const faqItems = t.raw("faq") as Array<{ pergunta: string; resposta: string }>;
  const faqSchema = generateFAQSchema(faqItems);
  const pageUrl = buildLocalizedUrl(params.locale, "/sobre");
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t("crumbHome"), item: buildLocalizedUrl(params.locale, "/") },
    { name: t("crumbSobre"), item: pageUrl },
  ]);

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CTASticky whatsappUrl={WA_URL} />

      <Breadcrumb
        items={[
          { label: t("crumbHome"), href: "/" },
          { label: t("crumbSobre") },
        ]}
        currentUrl={pageUrl}
        locale={params.locale}
      />

      {/* HERO */}
      <section
        id="hero-section"
        style={{ background: 'var(--cor-primaria)', padding: '64px 24px 80px', textAlign: 'center' }}
      >
        <div className="container-safe" style={{ maxWidth: '660px' }}>
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

      {/* SOBRE A MARCA */}
      <section className="section-padding" style={{ background: 'var(--cor-fundo-puro)' }}>
        <div className="container-safe" style={{ maxWidth: '780px' }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-inter)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--cor-acento)',
              marginBottom: '12px',
              textAlign: 'center',
            }}
          >
            {t("marcaKicker")}
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(26px, 3.8vw, 38px)',
              color: 'var(--cor-primaria)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            {t("marcaTitulo")}
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              fontFamily: 'var(--font-inter)',
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'var(--cor-texto-medio)',
            }}
          >
            <p dangerouslySetInnerHTML={{ __html: t.raw("marcaP1") as string }} />
            <p>{t("marcaP2")}</p>
            <p>{t("marcaP3")}</p>
            <p>{t("marcaP4")}</p>
            <p
              style={{
                fontFamily: 'var(--font-fraunces), var(--font-inter)',
                fontStyle: 'italic',
                fontSize: '20px',
                color: 'var(--cor-primaria)',
                borderLeft: '3px solid var(--cor-acento)',
                paddingLeft: '20px',
                margin: '8px 0',
              }}
            >
              {t("marcaQuote")}
            </p>
            <p>{t("marcaP5")}</p>
            <p>{t("marcaP6")}</p>
            <p>{t("marcaP7")}</p>
          </div>
        </div>
      </section>

      {/* IDENTIDADE VERIFICÁVEL */}
      <section className="section-padding">
        <div className="container-safe max-w-4xl">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-dark mb-6 text-center">
            {t("identidadeTitulo")}
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            {t("identidadeIntro")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={CADASTUR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-gray-200 hover:border-primary rounded-xl p-5 transition-colors"
              aria-label={t("cadasturVerificar")}
            >
              <p className="text-xs font-bold uppercase tracking-[2px] text-primary mb-2">{t("cadasturLabel")}</p>
              <p className="text-2xl font-bold text-secondary mb-1">{empresa.cadastur}</p>
              <p className="text-sm text-gray-600">{t("cadasturAtivoAte", { data: empresa.cadasturValido })}</p>
              <p className="text-xs text-gray-500 mt-3 group-hover:text-primary transition-colors">
                {t("cadasturVerificar")}
              </p>
            </a>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-[2px] text-primary mb-2">{t("cnpjLabel")}</p>
              <p className="text-2xl font-bold text-secondary mb-1">{empresa.cnpj}</p>
              <p className="text-sm text-gray-600">{t("cnpjSubtitulo")}</p>
            </div>

            <a
              href={empresa.rede.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-gray-200 hover:border-primary rounded-xl p-5 transition-colors"
              aria-label={t("googleVerificar")}
            >
              <p className="text-xs font-bold uppercase tracking-[2px] text-primary mb-2">{t("googleLabel")}</p>
              <p className="text-2xl font-bold text-secondary mb-1">
                {empresa.rating.valor}/5 ★ <span className="text-base font-normal text-gray-500">({empresa.rating.totalAvaliacoes})</span>
              </p>
              <p className="text-sm text-gray-600">{t("googleSubtitulo")}</p>
              <p className="text-xs text-gray-500 mt-3 group-hover:text-primary transition-colors">
                {t("googleVerificar")}
              </p>
            </a>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-[2px] text-primary mb-2">{t("localizacaoLabel")}</p>
              <p className="text-2xl font-bold text-secondary mb-1">{empresa.localizacao.cidade}</p>
              <p className="text-sm text-gray-600">{empresa.localizacao.estado}, {empresa.localizacao.pais}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section className="section-padding" style={{ background: 'var(--cor-areia)' }}>
        <div className="container-safe max-w-3xl">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-dark mb-6 text-center">
            {t("missaoTitulo")}
          </h2>

          <blockquote className="border-l-[3px] border-primary pl-5 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed italic">
              {empresa.missao}
            </p>
            <p className="text-sm text-gray-500 mt-3">{t("missaoQuoteAutor")}</p>
          </blockquote>

          <h3 className="font-bold text-secondary text-lg mb-4">{t("praticaTitulo")}</h3>
          <ul className="space-y-3">
            {diferenciais.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7l3.5 3.5L12 3.5" stroke="#107997" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMO FUNCIONA O ATENDIMENTO */}
      <section className="section-padding">
        <div className="container-safe max-w-3xl">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-dark mb-6 text-center">
            {t("atendimentoTitulo")}
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            {t("atendimentoIntro")}
          </p>

          <ol className="space-y-5">
            {[
              { n: "1", t: t("step1Titulo"), d: t("step1Desc") },
              { n: "2", t: t("step2Titulo"), d: t("step2Desc") },
              { n: "3", t: t("step3Titulo"), d: t("step3Desc") },
            ].map((step) => (
              <li key={step.n} className="flex gap-4">
                <span className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5">
                  {step.n}
                </span>
                <div>
                  <p className="font-bold text-dark mb-1">{step.t}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* REDES */}
      <section className="section-padding bg-bg-soft">
        <div className="container-safe max-w-2xl text-center">
          <h2 className="font-serif font-bold text-xl md:text-2xl text-dark mb-4">
            {t("redesTitulo")}
          </h2>
          <p className="text-gray-600 mb-6">
            {t("redesIntro")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={empresa.rede.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary text-secondary hover:text-primary font-semibold px-5 py-3 rounded-full text-sm transition-colors"
              aria-label={t("instagramAria")}
            >
              📷 Instagram {empresa.rede.instagram.handle}
            </a>
            <a
              href={empresa.rede.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary text-secondary hover:text-primary font-semibold px-5 py-3 rounded-full text-sm transition-colors"
              aria-label={t("googleMapsAria")}
            >
              📍 {t("googlePerfil")}
            </a>
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

      {/* CTA FINAL */}
      <CTAFinal
        whatsappUrl={WA_URL}
        label={t("ctaLabel")}
        titulo={t("ctaTitulo")}
        subtitulo={t("ctaSubtitulo")}
      />

      <div className="container-safe py-6 text-center">
        <Link href="/passeios" className="text-sm text-primary hover:text-accent font-medium transition-colors">
          {t("verTodosPasseios")}
        </Link>
      </div>
    </div>
  );
}
