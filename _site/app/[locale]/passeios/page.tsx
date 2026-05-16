/**
 * Hub de Passeios — /passeios/
 * Lista todos os passeios com filtro por categoria (Cloud Design).
 */

import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { passeios } from "@/data/passeios";
import { empresa } from "@/data/empresa";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASticky } from "@/components/CTASticky";
import { CTAFinal } from "@/components/CTAFinal";
import { HomePasseiosSection } from "@/components/HomePasseiosSection";
import { generateMetadata as generateSeoMetadata, buildLocaleAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const base = generateSeoMetadata({
    title: "Passeios em João Pessoa — Vem Passear em Jampa",
    description:
      `${passeios.length} passeios em João Pessoa com guia local: piscinas naturais, litoral sul e norte, city tour e pacotes. Cadastur ativo, 4,9★. Agende pelo WhatsApp.`,
    keywords: ["passeios João Pessoa", "piscinas naturais", "litoral sul", "litoral norte", "city tour", "Paraíba", "Cadastur"],
    ogImage: "/og-image.svg",
  });
  const alternates = buildLocaleAlternates(params.locale, "/passeios");
  return {
    ...base,
    alternates,
    openGraph: {
      ...(base.openGraph ?? {}),
      url: alternates.canonical,
    },
  };
}

interface PasseiosPageProps {
  params: { locale: string };
}

export default async function PasseiosPage({ params }: PasseiosPageProps) {
  const { locale } = params;
  setRequestLocale(locale);

  const t   = await getTranslations('ListaPasseios');
  const tSt = await getTranslations('CTASticky');
  const tWa = await getTranslations('Whatsapp');

  const WA_URL = `${empresa.contato.whatsappLink}?text=${tWa('mensagemGeral')}`;

  return (
    <div style={{ background: '#fff' }}>
      <CTASticky whatsappUrl={WA_URL} label={tSt('label')} />

      {/* ── Hero da página ── */}
      <section style={{
        background: '#092238',
        padding: '48px 16px 40px',
      }}>
        <div style={{ maxWidth: 600 }}>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)', fontWeight: 600, marginBottom: 10,
          }}>
            {t('kicker')}
          </div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: 600, lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: '#fff', margin: 0,
          }}>
            {t('titulo')}
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15, color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.55, marginTop: 12, marginBottom: 0,
          }}>
            {t('subtitulo', { count: passeios.length })}
          </p>
        </div>
      </section>

      {/* ── Breadcrumb ── */}
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Passeios" }]}
        currentUrl={`https://${empresa.dominio}/passeios/`}
      />

      {/* ── Chips + Grid Cloud Design ── */}
      <HomePasseiosSection passeios={passeios} showViewAll={false} />

      {/* ── CTA Final ── */}
      <CTAFinal
        whatsappUrl={WA_URL}
        label={t('ctaLabel')}
        titulo={t('ctaTitulo')}
        subtitulo={t('ctaSubtitulo')}
        textoBotao={t('ctaBotao')}
        microcopy={t('ctaMicrocopy')}
      />
    </div>
  );
}
