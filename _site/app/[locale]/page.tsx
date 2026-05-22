/**
 * Home Page — /
 *
 * Estrutura v4 (refinamento visual + emocional 2026-05-10):
 *   1. Hero emocional com quote poética
 *   2. Categorias com respiração generosa
 *   3. Prova social Google
 *   4. Passeios prioritários
 *   5. Quote poética Murillo (pausa emocional)
 *   6. Bloco Murillo redesenhado
 *   7. CTA final emocional
 */

import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { passeios } from "@/data/passeios";
import { empresa } from "@/data/empresa";
import { buildLocaleAlternates } from "@/lib/seo";
import { localizarPasseios } from "@/lib/passeios-i18n";
import { MurilloBlock } from "@/components/MurilloBlock";
import { WaveDivider } from "@/components/WaveDivider";
import { CTAFinal } from "@/components/CTAFinal";
import { CTASticky } from "@/components/CTASticky";
import { HomeVideoHero } from "@/components/HomeVideoHero";
import { HomePasseiosSection } from "@/components/HomePasseiosSection";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { GoogleReviewsBlock } from "@/components/GoogleReviewsBlock";
import { CadasturCertificate } from "@/components/CadasturCertificate";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const HOME_COPY: Record<string, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  pt: {
    title: "Passeios em João Pessoa | Vem Passear em Jampa",
    description:
      "Passeios em João Pessoa com orientação local: piscinas naturais, litoral sul e norte, catamarã, city tour e pacotes. Cadastur ativo, 4,9★ no Google. Atendimento direto com Murillo pelo WhatsApp.",
    ogTitle: "Passeios em João Pessoa — Vem Passear em Jampa",
    ogDescription:
      "Piscinas naturais, litoral sul e norte, catamarã e city tour com orientação local. Atendimento direto pelo WhatsApp.",
  },
  en: {
    title: "Tours in João Pessoa | Vem Passear em Jampa",
    description:
      "Tours in João Pessoa with local guidance: natural pools, south and north coast, catamaran, city tour and packages. Active Cadastur, 4.9★ on Google. Direct WhatsApp service with Murillo.",
    ogTitle: "Tours in João Pessoa — Vem Passear em Jampa",
    ogDescription:
      "Natural pools, south and north coast, catamaran and city tour with local guidance. Direct WhatsApp service.",
  },
  es: {
    title: "Tours en João Pessoa | Vem Passear em Jampa",
    description:
      "Tours en João Pessoa con orientación local: piscinas naturales, litoral sur y norte, catamarán, city tour y paquetes. Cadastur activo, 4,9★ en Google. Atención directa por WhatsApp con Murillo.",
    ogTitle: "Tours en João Pessoa — Vem Passear em Jampa",
    ogDescription:
      "Piscinas naturales, litoral sur y norte, catamarán y city tour con orientación local. Atención directa por WhatsApp.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const copy = HOME_COPY[locale] ?? HOME_COPY.pt;
  const alternates = buildLocaleAlternates(locale, "/");

  return {
    title: copy.title,
    description: copy.description,
    alternates,
    openGraph: {
      title: copy.ogTitle,
      description: copy.ogDescription,
      url: alternates.canonical,
      images: [
        { url: "/og-image.svg", width: 1200, height: 630, alt: copy.ogTitle },
      ],
    },
  };
}

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);

  const tCTA    = await getTranslations('CTAHome');
  const tSticky = await getTranslations('CTASticky');

  const WA_URL = buildWhatsAppUrl("geral");

  return (
    <div style={{ background: 'var(--cor-fundo)' }}>

      <CTASticky whatsappUrl={WA_URL} label={tSticky('label')} />

      {/* ── 1. HERO ── */}
      <HomeVideoHero whatsappUrl={WA_URL} />

      {/* ── 2. PASSEIOS COM FILTRO POR CATEGORIA ── */}
      <HomePasseiosSection passeios={localizarPasseios(passeios, locale)} />

      {/* Wave passeios → prova social */}
      <WaveDivider fill="var(--cor-fundo-puro)" />

      {/* ── 3. PROVAS REAIS DO GOOGLE (cards estilo print) ── */}
      <GoogleReviewsBlock />

      {/* ── 5. PARCEIROS (carrossel rolante) ── */}
      <PartnersMarquee />

      {/* ── 5b. CADASTUR — credibilidade visual ── */}
      <CadasturCertificate />

      {/* ── 6. BLOCO MURILLO ── */}
      <MurilloBlock whatsappUrl={WA_URL} />

      {/* ── 7. CTA FINAL ── */}
      <CTAFinal
        whatsappUrl={WA_URL}
        variante="laranja"
        label={tCTA('label')}
        titulo={tCTA('titulo')}
        subtitulo={tCTA('subtitulo')}
        textoBotao={tCTA('botao')}
        microcopy={tCTA('microcopy')}
      />

    </div>
  );
}
