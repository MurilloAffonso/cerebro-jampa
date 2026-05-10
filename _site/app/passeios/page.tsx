/**
 * Hub de Passeios — /passeios/
 * Lista os 22 passeios agrupados pelas 6 categorias.
 */

import type { Metadata } from "next";
import { passeios } from "@/data/passeios";
import { empresa } from "@/data/empresa";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASticky } from "@/components/CTASticky";
import { CTAFinal } from "@/components/CTAFinal";
import { CategoryIcon } from "@/components/CategoryIcon";
import { PasseioCard } from "@/components/PasseioCard";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Passeios em João Pessoa — Vem Passear em Jampa",
  description:
    "22 passeios em João Pessoa com guia local: piscinas naturais, litoral sul e norte, city tour e pacotes. Cadastur ativo, 4,9★. Agende pelo WhatsApp.",
  keywords: ["passeios João Pessoa", "piscinas naturais", "litoral sul", "litoral norte", "city tour", "Paraíba", "Cadastur"],
  ogImage: "/og-image.svg",
  canonical: "/passeios/",
});

const CATEGORIAS: { slug: string; nome: string; descricao: string }[] = [
  { slug: "pacotes",           nome: "Pacotes",           descricao: "Roteiros completos de 2 e 3 dias com transfer e guia." },
  { slug: "litoral-sul",       nome: "Litoral Sul",       descricao: "Falésias, praias desertas e quadriciclo nas dunas." },
  { slug: "litoral-norte",     nome: "Litoral Norte",     descricao: "Areia Vermelha, catamarã e o pôr do sol no Jacaré." },
  { slug: "piscinas-naturais", nome: "Piscinas Naturais", descricao: "Recifes de coral e água cristalina no Atlântico." },
  { slug: "city-tour",         nome: "City Tour",         descricao: "A história de João Pessoa com guia especializado." },
  { slug: "interestaduais",    nome: "Interestaduais",    descricao: "Porto de Galinhas, Pipa e Natal a partir de JP." },
];

export default function PasseiosPage() {
  const categorias = CATEGORIAS.map((cat) => ({
    ...cat,
    itens: passeios.filter((p) => p.categoria === cat.slug),
  }));

  const WA_URL = `${empresa.contato.whatsappLink}?text=Oi%2C+quero+escolher+um+passeio+em+Jo%C3%A3o+Pessoa`;

  return (
    <div style={{ background: 'var(--cor-fundo)' }}>
      <CTASticky whatsappUrl={WA_URL} label="Falar com Murillo no WhatsApp" />

      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Passeios" }]}
        currentUrl={`https://${empresa.dominio}/passeios/`}
      />

      {/* ── Hero ── */}
      <section
        style={{
          background: 'var(--cor-primaria)',
          padding: '64px 24px 80px',
          textAlign: 'center',
        }}
      >
        <div className="container-safe" style={{ maxWidth: '680px' }}>
          <span className="section-kicker" style={{ color: 'var(--cor-acento)' }}>
            Curadoria do Murillo
          </span>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 600,
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            Todos os passeios em João Pessoa
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '18px',
              color: 'var(--cor-areia)',
              lineHeight: 1.6,
              marginBottom: '36px',
            }}
          >
            {passeios.length} passeios em {categorias.length} categorias.
            Escolha o seu ou deixa o Murillo montar o roteiro certo.
          </p>

          {/* Âncoras de categoria */}
          <div className="flex flex-wrap justify-center gap-2">
            {categorias.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '999px',
                  padding: '8px 16px',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 500,
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  transition: 'all 200ms',
                }}
                className="hover:!bg-white/20 hover:!text-white"
              >
                <CategoryIcon slug={cat.slug} size={16} strokeWidth={2} />
                {cat.nome}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Listagem por categoria ── */}
      <div className="container-safe" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {categorias.map((cat) => (
            <section key={cat.slug} id={cat.slug} aria-label={`Passeios — ${cat.nome}`}>

              {/* Cabeçalho da categoria */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '32px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--cor-borda)',
                }}
              >
                <div style={{ color: 'var(--cor-primaria)', flexShrink: 0 }}>
                  <CategoryIcon slug={cat.slug} size={36} strokeWidth={1.8} />
                </div>
                <div>
                  <h2
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(22px, 2.5vw, 28px)',
                      fontWeight: 600,
                      color: 'var(--cor-primaria)',
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {cat.nome}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '14px',
                      color: 'var(--cor-texto-claro)',
                      margin: '4px 0 0',
                    }}
                  >
                    {cat.descricao} · {cat.itens.length} {cat.itens.length === 1 ? 'passeio' : 'passeios'}
                  </p>
                </div>
              </div>

              {/* Grid de passeios */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.itens.map((p) => (
                  <PasseioCard key={p.id} passeio={p} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

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
