/**
 * Hub de Passeios — /passeios/
 * Lista todos os passeios com filtro por categoria (Cloud Design).
 */

import type { Metadata } from "next";
import { passeios } from "@/data/passeios";
import { empresa } from "@/data/empresa";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASticky } from "@/components/CTASticky";
import { CTAFinal } from "@/components/CTAFinal";
import { HomePasseiosSection } from "@/components/HomePasseiosSection";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Passeios em João Pessoa — Vem Passear em Jampa",
  description:
    `${passeios.length} passeios em João Pessoa com guia local: piscinas naturais, litoral sul e norte, city tour e pacotes. Cadastur ativo, 4,9★. Agende pelo WhatsApp.`,
  keywords: ["passeios João Pessoa", "piscinas naturais", "litoral sul", "litoral norte", "city tour", "Paraíba", "Cadastur"],
  ogImage: "/og-image.svg",
  canonical: "/passeios/",
});

const WA_URL = `${empresa.contato.whatsappLink}?text=Oi%2C+quero+escolher+um+passeio+em+Jo%C3%A3o+Pessoa`;

export default function PasseiosPage() {
  return (
    <div style={{ background: '#fff' }}>
      <CTASticky whatsappUrl={WA_URL} label="Falar com Murillo no WhatsApp" />

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
            Curadoria do Murillo
          </div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: 600, lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: '#fff', margin: 0,
          }}>
            Todos os passeios<br />em João Pessoa
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15, color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.55, marginTop: 12, marginBottom: 0,
          }}>
            {passeios.length} passeios. Filtre por categoria ou deixa o Murillo montar o roteiro.
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
        label="Ficou com dúvida?"
        titulo="Qual passeio combina com você?"
        subtitulo="Manda mensagem para Murillo — ele orienta sobre roteiro, datas e o que combina com seu tempo e orçamento."
        textoBotao="Falar com Murillo no WhatsApp"
        microcopy="Atendimento direto · Sem script · Resposta rápida"
      />
    </div>
  );
}
