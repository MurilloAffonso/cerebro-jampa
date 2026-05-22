/**
 * Página: Excursões e Grupos — /servicos/excursoes-e-grupos/
 */

import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { empresa } from "@/data/empresa";
import { generateMetadata as generateSeoMetadata, generateFAQSchema, generateBreadcrumbSchema, buildLocaleAlternates, SITE_URL } from "@/lib/seo";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTAFinal } from "@/components/CTAFinal";
import { CTASticky } from "@/components/CTASticky";
import { Breadcrumb } from "@/components/Breadcrumb";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "ExcursoesPage" });
  const base = generateSeoMetadata({
    title: t("seoTitle"),
    description: t("seoDescription"),
    keywords: [
      "excursão João Pessoa",
      "fechar van João Pessoa",
      "ônibus turístico João Pessoa",
      "roteiro grupo Paraíba",
      "receptivo João Pessoa",
    ],
    ogImage: "/og-image.svg",
  });
  const alternates = buildLocaleAlternates(params.locale, "/servicos/excursoes-e-grupos");
  return {
    ...base,
    alternates,
    openGraph: {
      ...(base.openGraph ?? {}),
      url: alternates.canonical,
    },
  };
}

export default async function ExcursoesGruposPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t    = await getTranslations("ExcursoesPage");
  const tNav = await getTranslations("Nav");

  const WA_URL = buildWhatsAppUrl("grupo");

  const PERFIS = [t("perfil1"), t("perfil2"), t("perfil3"), t("perfil4"), t("perfil5"), t("perfil6")];

  const PILARES = [
    { titulo: t("pilar1Titulo"), desc: t("pilar1Desc") },
    { titulo: t("pilar2Titulo"), desc: t("pilar2Desc") },
    { titulo: t("pilar3Titulo"), desc: t("pilar3Desc") },
    { titulo: t("pilar4Titulo"), desc: t("pilar4Desc") },
  ];

  const PROCESSO = [
    { n: "1", titulo: t("processo1Titulo"), desc: t("processo1Desc") },
    { n: "2", titulo: t("processo2Titulo"), desc: t("processo2Desc") },
    { n: "3", titulo: t("processo3Titulo"), desc: t("processo3Desc") },
    { n: "4", titulo: t("processo4Titulo"), desc: t("processo4Desc") },
  ];

  const ROTEIROS = [
    { nome: t("roteiro1Nome"), desc: t("roteiro1Desc") },
    { nome: t("roteiro2Nome"), desc: t("roteiro2Desc") },
    { nome: t("roteiro3Nome"), desc: t("roteiro3Desc") },
    { nome: t("roteiro4Nome"), desc: t("roteiro4Desc") },
  ];

  const DIFERENCIAIS = [
    { titulo: t("diferencial1Titulo"), desc: t("diferencial1Desc") },
    {
      titulo: t("diferencial2Titulo", {
        nota: String(empresa.rating.valor),
        total: String(empresa.rating.totalAvaliacoes),
      }),
      desc: t("diferencial2Desc"),
    },
    { titulo: t("diferencial3Titulo"), desc: t("diferencial3Desc") },
    { titulo: t("diferencial4Titulo"), desc: t("diferencial4Desc") },
  ];

  const BRIEFING_CAMPOS = [
    t("briefing1"), t("briefing2"), t("briefing3"), t("briefing4"), t("briefing5"),
    t("briefing6"), t("briefing7"), t("briefing8"), t("briefing9"), t("briefing10"),
  ];

  const FAQ_ITEMS = t.raw("faq") as Array<{ pergunta: string; resposta: string }>;

  const SERVICE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: t("crumbExcursoes"),
    name: `${t("crumbExcursoes")} — João Pessoa`,
    description: t("seoDescription"),
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
    url: `${SITE_URL}/servicos/excursoes-e-grupos`,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQ_ITEMS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
          { name: tNav("inicio"), item: SITE_URL },
          { name: t("crumbServicos"), item: `${SITE_URL}/servicos` },
          { name: t("crumbExcursoes"), item: `${SITE_URL}/servicos/excursoes-e-grupos` },
        ])) }}
      />

      <CTASticky whatsappUrl={WA_URL} label={t("stickyLabel")} />

      <Breadcrumb
        items={[
          { label: tNav("inicio"), href: "/" },
          { label: t("crumbServicos") },
          { label: t("crumbExcursoes") },
        ]}
        currentUrl={`https://${empresa.dominio}/servicos/excursoes-e-grupos/`}
      />

      {/* Hero */}
      <section
        id="hero-section"
        className="relative overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(135deg, var(--cor-primaria) 0%, #0d5f71 55%, var(--cor-primaria) 100%)",
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-15%", right: "-8%", width: "45%", paddingBottom: "45%",
            background: "radial-gradient(circle, rgba(27,107,124,0.4) 0%, transparent 70%)",
            borderRadius: "50%", filter: "blur(55px)",
          }}
          aria-hidden="true"
        />

        <div className="relative container-safe py-16 md:py-20 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-[#C5B7A3] mb-4">
            {t("heroKicker")}
          </p>
          <h1
            className="font-serif font-bold text-white max-w-3xl mb-5 leading-[1.08]"
            style={{ fontSize: "clamp(30px, 5vw, 56px)", letterSpacing: "-1px" }}
          >
            {t("heroTitulo")}
          </h1>
          <p className="text-white/80 max-w-2xl mb-8 leading-relaxed text-base md:text-lg">
            {t("heroSubtitulo")}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ea355] text-white font-extrabold px-7 py-[17px] rounded-full min-h-[56px] transition-all hover:-translate-y-[2px] shadow-[0_4px_24px_rgba(37,211,102,0.35)]"
              style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}
              aria-label={t("heroCtaWaAria")}
            >
              {t("heroCtaWa")}
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-6 py-[17px] rounded-full min-h-[56px] transition-all"
              style={{ fontSize: "clamp(14px, 1.4vw, 16px)" }}
            >
              {t("heroCtaScroll")}
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
            <li>{t("selo1", { numero: empresa.cadastur })}</li>
            <li>{t("selo2", { nota: String(empresa.rating.valor), total: String(empresa.rating.totalAvaliacoes) })}</li>
            <li>{t("selo3")}</li>
            <li>{t("selo4")}</li>
          </ul>
        </div>
      </section>

      {/* Para quem é */}
      <section className="section-padding">
        <div className="container-safe max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            {t("paraQuemKicker")}
          </p>
          <h2 className="font-serif font-bold text-secondary mb-5" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", letterSpacing: "-0.5px" }}>
            {t("paraQuemTitulo")}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            {t("paraQuemDesc")}
          </p>

          <div className="flex flex-wrap gap-2.5">
            {PERFIS.map((p) => (
              <span
                key={p}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-secondary bg-white border border-[#C5B7A3]/60"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="section-padding" style={{ background: "#F7F8F7" }}>
        <div className="container-safe max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            {t("pilaresKicker")}
          </p>
          <h2 className="font-serif font-bold text-secondary mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", letterSpacing: "-0.5px" }}>
            {t("pilaresTitulo")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PILARES.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#C5B7A3]/40"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
                    {i + 1}
                  </span>
                  <h3 className="font-bold text-dark text-lg">{p.titulo}</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="section-padding">
        <div className="container-safe max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            {t("processoKicker")}
          </p>
          <h2 className="font-serif font-bold text-secondary mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", letterSpacing: "-0.5px" }}>
            {t("processoTitulo")}
          </h2>

          <ol className="relative space-y-6">
            {PROCESSO.map((step, i) => (
              <li key={step.n} className="flex gap-5 relative">
                {i < PROCESSO.length - 1 && (
                  <div
                    className="absolute left-[18px] top-[44px] w-[2px]"
                    style={{ height: "calc(100% - 12px)", background: "#C5B7A3" }}
                    aria-hidden="true"
                  />
                )}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 z-10"
                  style={{ background: "#107997", color: "white", boxShadow: "0 2px 12px rgba(16,121,151,0.30)" }}
                  aria-hidden="true"
                >
                  {step.n}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-dark text-base mb-1.5">{step.titulo}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Roteiros */}
      <section className="section-padding" style={{ background: "#F7F8F7" }}>
        <div className="container-safe max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            {t("roteirosKicker")}
          </p>
          <h2 className="font-serif font-bold text-secondary mb-3" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", letterSpacing: "-0.5px" }}>
            {t("roteirosTitulo")}
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl text-sm leading-relaxed">
            {t("roteirosDesc")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ROTEIROS.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#C5B7A3]/40"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
              >
                <h3 className="font-serif font-bold text-secondary text-xl mb-2">{r.nome}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding" style={{ background: "#F7F8F7" }}>
        <div className="container-safe max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            {t("diferenciaisKicker")}
          </p>
          <h2 className="font-serif font-bold text-secondary mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", letterSpacing: "-0.5px" }}>
            {t("diferenciaisTitulo")}
          </h2>

          <ul className="space-y-4">
            {DIFERENCIAIS.map((d, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[#C5B7A3]/40"
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(16,121,151,0.12)" }}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#107997" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-dark mb-1">{d.titulo}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Briefing */}
      <section className="section-padding">
        <div className="container-safe max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            {t("briefingKicker")}
          </p>
          <h2 className="font-serif font-bold text-secondary mb-3" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", letterSpacing: "-0.5px" }}>
            {t("briefingTitulo")}
          </h2>
          <p className="text-gray-700 mb-7 leading-relaxed">
            {t("briefingIntro")}
          </p>

          <ul className="bg-white border border-[#C5B7A3]/50 rounded-2xl p-6 mb-8 space-y-2.5" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
            {BRIEFING_CAMPOS.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-dark">
                <span className="text-primary mt-0.5 shrink-0" aria-hidden="true">•</span>
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ea355] text-white font-extrabold px-7 py-[17px] rounded-full min-h-[56px] transition-all hover:-translate-y-[2px] shadow-[0_4px_24px_rgba(37,211,102,0.35)]"
            style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}
            aria-label={t("briefingCtaAria")}
          >
            {t("briefingCta")}
          </a>
          <p className="text-xs text-gray-500 mt-3">
            {t("briefingMicrocopy")}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: "#F7F8F7" }}>
        <div className="container-safe max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            {t("faqKicker")}
          </p>
          <h2 className="font-serif font-bold text-secondary mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", letterSpacing: "-0.5px" }}>
            {t("faqTitulo")}
          </h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA Final */}
      <CTAFinal
        whatsappUrl={WA_URL}
        label={t("ctaFinalLabel")}
        titulo={t("ctaFinalTitulo")}
        subtitulo={t("ctaFinalSub")}
        variante="azul"
      />

      <div className="container-safe py-8 text-center text-sm text-gray-500">
        <Link href="/servicos/transfer-24h" className="hover:text-primary transition-colors mr-4">
          {t("voltarTransfer")}
        </Link>
        <Link href="/passeios" className="hover:text-primary transition-colors">
          {t("verTodosPasseios")}
        </Link>
      </div>
    </div>
  );
}
