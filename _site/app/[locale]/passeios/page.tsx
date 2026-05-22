/**
 * Hub de Passeios — /passeios/
 * Lista todos os passeios com filtro por categoria (Cloud Design).
 */

import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { passeios } from "@/data/passeios";
import { localizarPasseios } from "@/lib/passeios-i18n";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASticky } from "@/components/CTASticky";
import { CTAFinal } from "@/components/CTAFinal";
import { HomePasseiosSection } from "@/components/HomePasseiosSection";
import { generateMetadata as generateSeoMetadata, buildLocaleAlternates, buildLocalizedUrl } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const PASSEIOS_META: Record<string, { title: string; description: string; keywords: string[] }> = {
  pt: {
    title: "Passeios em João Pessoa",
    description:
      `${passeios.length} passeios em João Pessoa com guia local: piscinas naturais, litoral sul e norte, city tour e pacotes. Cadastur ativo, 4,9★. Agende pelo WhatsApp.`,
    keywords: ["passeios João Pessoa", "piscinas naturais", "litoral sul", "litoral norte", "city tour", "Paraíba", "Cadastur"],
  },
  en: {
    title: "Tours in João Pessoa",
    description:
      `${passeios.length} tours in João Pessoa with local guidance: natural pools, south and north coast, city tour and packages. Active Cadastur, 4.9★. Book on WhatsApp.`,
    keywords: ["João Pessoa tours", "natural pools", "south coast", "north coast", "city tour", "Paraíba", "Cadastur"],
  },
  es: {
    title: "Tours en João Pessoa",
    description:
      `${passeios.length} tours en João Pessoa con orientación local: piscinas naturales, litoral sur y norte, city tour y paquetes. Cadastur activo, 4,9★. Reserva por WhatsApp.`,
    keywords: ["tours João Pessoa", "piscinas naturales", "litoral sur", "litoral norte", "city tour", "Paraíba", "Cadastur"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const copy = PASSEIOS_META[params.locale] ?? PASSEIOS_META.pt;
  const base = generateSeoMetadata({
    title: copy.title,
    description: copy.description,
    keywords: copy.keywords,
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

  const t    = await getTranslations('ListaPasseios');
  const tSt  = await getTranslations('CTASticky');
  const tNav = await getTranslations('Nav');

  const WA_URL = buildWhatsAppUrl("geral");

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
        items={[{ label: tNav("inicio"), href: "/" }, { label: tNav("passeios") }]}
        currentUrl={buildLocalizedUrl(locale, "/passeios")}
        locale={locale}
      />

      {/* ── Chips + Grid Cloud Design ── */}
      <HomePasseiosSection passeios={localizarPasseios(passeios, locale)} showViewAll={false} />

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
