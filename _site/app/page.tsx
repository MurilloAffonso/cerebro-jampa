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
import { passeios } from "@/data/passeios";
import { empresa } from "@/data/empresa";
import { MurilloBlock } from "@/components/MurilloBlock";
import { WaveDivider } from "@/components/WaveDivider";
import { CTAFinal } from "@/components/CTAFinal";
import { CTASticky } from "@/components/CTASticky";
import { HomeVideoHero } from "@/components/HomeVideoHero";
import { HomePasseiosSection } from "@/components/HomePasseiosSection";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { GoogleReviewsBlock } from "@/components/GoogleReviewsBlock";
import { CadasturCertificate } from "@/components/CadasturCertificate";

const WA_URL = `${empresa.contato.whatsappLink}?text=Oi%2C+quero+informações+sobre+os+passeios+em+João+Pessoa`;


export const metadata: Metadata = {
  title: "Passeios em João Pessoa | Vem Passear em Jampa",
  description:
    "Passeios em João Pessoa com orientação local: piscinas naturais, litoral sul e norte, catamarã, city tour e pacotes. Cadastur ativo, 4,9★ no Google. Atendimento direto com Murillo pelo WhatsApp.",
  alternates: { canonical: "https://vempassearjampa.com.br/" },
  openGraph: {
    title: "Passeios em João Pessoa — Vem Passear em Jampa",
    description:
      "Piscinas naturais, litoral sul e norte, catamarã e city tour com orientação local. Atendimento direto pelo WhatsApp.",
    url: "https://vempassearjampa.com.br/",
    images: [
      { url: "/og-image.svg", width: 1200, height: 630, alt: "Vem Passear em Jampa — Passeios em João Pessoa" },
    ],
  },
};

export default function Home() {
  return (
    <div style={{ background: 'var(--cor-fundo)' }}>

      <CTASticky whatsappUrl={WA_URL} label="Falar com Murillo no WhatsApp" />

      {/* ── 1. HERO ── */}
      <HomeVideoHero whatsappUrl={WA_URL} />

      {/* ── 2. PASSEIOS COM FILTRO POR CATEGORIA ── */}
      <HomePasseiosSection passeios={passeios} />

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
        label="Vamos conversar"
        titulo="O melhor de João Pessoa começa numa conversa."
        subtitulo="Manda mensagem. O Murillo responde rápido, sem script, sem enrolação. Se não for com a gente, ele indica quem confiar."
        textoBotao="Conversar com o Murillo agora"
        microcopy="Atende de 7h às 22h, todos os dias · Resposta em até 5 minutos"
      />

    </div>
  );
}
