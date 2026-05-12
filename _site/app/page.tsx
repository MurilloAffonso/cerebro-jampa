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
import { getPasseiosPrioritarios } from "@/data/passeios";
import { empresa } from "@/data/empresa";
import { PasseioCard } from "@/components/PasseioCard";
import { CategoryCard } from "@/components/CategoryCard";
import { MurilloBlock } from "@/components/MurilloBlock";
import { WaveDivider } from "@/components/WaveDivider";
import { CTAFinal } from "@/components/CTAFinal";
import { CTASticky } from "@/components/CTASticky";
import { HomeVideoHero } from "@/components/HomeVideoHero";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { GoogleReviewsBlock } from "@/components/GoogleReviewsBlock";
import { CadasturCertificate } from "@/components/CadasturCertificate";

const WA_URL = `${empresa.contato.whatsappLink}?text=Oi%2C+quero+informações+sobre+os+passeios+em+João+Pessoa`;

const CATEGORIAS = [
  {
    nome: "Pacotes",
    slug: "pacotes",
    descricao: "Roteiros de 2 e 3 dias com transfer, guia e tudo incluso.",
    cor: "#107997",
  },
  {
    nome: "Litoral Sul",
    slug: "litoral-sul",
    descricao: "Gramame, Amor, Tambaba e Coqueirinho — praias e trilhas de quadriciclo.",
    cor: "#1A6B52",
  },
  {
    nome: "Litoral Norte",
    slug: "litoral-norte",
    descricao: "História colonial, Areia Vermelha e o pôr do sol mais famoso do Brasil.",
    cor: "#7B4F12",
  },
  {
    nome: "Piscinas Naturais",
    slug: "piscinas-naturais",
    descricao: "Recifes de corais e águas mornas no ponto mais oriental das Américas.",
    cor: "#0E5E8A",
  },
  {
    nome: "City Tour",
    slug: "city-tour",
    descricao: "A 3ª cidade mais antiga do Brasil: Niemeyer, patrimônio e praças históricas.",
    cor: "#4A3580",
  },
  {
    nome: "Interestaduais",
    slug: "interestaduais",
    descricao: "Porto de Galinhas, Pipa e Natal a partir de João Pessoa.",
    cor: "#8B1A3A",
  },
] as const;

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
  const prioritarios = getPasseiosPrioritarios();

  return (
    <div style={{ background: 'var(--cor-fundo)' }}>

      <CTASticky whatsappUrl={WA_URL} label="Falar com Murillo no WhatsApp" />

      {/* ── 1. HERO ── */}
      <HomeVideoHero whatsappUrl={WA_URL} />

      {/* Wave hero → categorias */}
      <WaveDivider fill="var(--cor-fundo)" className="-mt-1" />

      {/* ── 2. CATEGORIAS ── */}
      <section className="section-padding" style={{ background: 'var(--cor-fundo)' }}>
        <div className="container-safe">
          <span className="section-kicker text-center block">Explore por categoria</span>
          <h2
            className="font-serif text-center mb-4"
            style={{ color: 'var(--cor-primaria)', marginBottom: '12px' }}
          >
            Passeios em João Pessoa
          </h2>
          <p
            className="text-center mx-auto mb-12"
            style={{ color: 'var(--cor-texto-claro)', fontSize: '16px', maxWidth: '520px' }}
          >
            Escolha a categoria que combina com você ou deixe a gente montar o roteiro certo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIAS.map((cat) => (
              <CategoryCard
                key={cat.slug}
                nome={cat.nome}
                slug={cat.slug}
                descricao={cat.descricao}
                cor={cat.cor}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/passeios"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '15px',
                fontWeight: 600,
                color: 'var(--cor-primaria)',
                borderBottom: '2px solid rgba(16,121,151,0.25)',
                paddingBottom: '2px',
                textDecoration: 'none',
                transition: 'border-color 200ms',
              }}
            >
              Ver todos os 22 passeios →
            </a>
          </div>
        </div>
      </section>

      {/* Wave categorias → prova social */}
      <WaveDivider fill="var(--cor-fundo-puro)" />

      {/* ── 3. PROVAS REAIS DO GOOGLE (cards estilo print) ── */}
      <GoogleReviewsBlock />

      {/* ── 4. PASSEIOS PRIORITÁRIOS ── */}
      {prioritarios.length > 0 && (
        <section
          className="section-padding"
          style={{ background: 'var(--cor-fundo-puro)' }}
        >
          <div className="container-safe">
            <span className="section-kicker text-center block">Mais procurados</span>
            <h2
              className="font-serif text-center mb-4"
              style={{ color: 'var(--cor-primaria)', marginBottom: '12px' }}
            >
              Os Favoritos dos Turistas
            </h2>
            <p
              className="text-center mx-auto mb-12"
              style={{ color: 'var(--cor-texto-claro)', fontSize: '16px', maxWidth: '520px' }}
            >
              Os passeios que mais encantam quem visita João Pessoa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prioritarios.map((p) => (
                <PasseioCard key={p.id} passeio={p} />
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="/passeios"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--cor-primaria)',
                  borderBottom: '2px solid rgba(16,121,151,0.25)',
                  paddingBottom: '2px',
                  textDecoration: 'none',
                }}
              >
                Ver os 22 passeios →{' '}
                <span style={{ display: 'inline-block', transition: 'transform 200ms' }}>→</span>
              </a>
            </div>
          </div>
        </section>
      )}

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
