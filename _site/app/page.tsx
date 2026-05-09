/**
 * Home Page — /
 *
 * Estrutura redesenhada (REDESIGN-HOME-01 / retorno-cloud-designer-home.md):
 *   1. Hero: dark + blobs + stats bottom (integra prova social)
 *   2. Categorias: cards coloridos por categoria
 *   3. Passeios Prioritários: poster 3/4 com overlay
 *   4. Bloco Murillo: grid 2 colunas, avatar placeholder
 *   5. CTA Final WhatsApp
 *
 * Regras:
 *   - Dados de confiança exclusivamente de data/empresa.ts
 *   - Sem Blog, sem link /sobre como página
 *   - Sem dados inventados
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

const WA_URL = `${empresa.contato.whatsappLink}?text=Oi%2C+quero+informações+sobre+os+passeios+em+João+Pessoa`;

const CATEGORIAS = [
  {
    nome: "Pacotes",
    slug: "pacotes",
    emoji: "🎒",
    descricao: "Roteiros de 2 e 3 dias com transfer, guia e tudo incluso.",
    cor: "#004E89",
  },
  {
    nome: "Litoral Sul",
    slug: "litoral-sul",
    emoji: "🏖️",
    descricao: "Gramame, Amor, Tambaba e Coqueirinho — praias e trilhas de quadriciclo.",
    cor: "#1A6B52",
  },
  {
    nome: "Litoral Norte",
    slug: "litoral-norte",
    emoji: "⛵",
    descricao: "História colonial, Areia Vermelha e o pôr do sol mais famoso do Brasil.",
    cor: "#7B4F12",
  },
  {
    nome: "Piscinas Naturais",
    slug: "piscinas-naturais",
    emoji: "🤿",
    descricao: "Recifes de corais e águas mornas no ponto mais oriental das Américas.",
    cor: "#0E5E8A",
  },
  {
    nome: "City Tour",
    slug: "city-tour",
    emoji: "🏛️",
    descricao: "A 3ª cidade mais antiga do Brasil: Niemeyer, patrimônio e praças históricas.",
    cor: "#4A3580",
  },
  {
    nome: "Interestaduais",
    slug: "interestaduais",
    emoji: "🗺️",
    descricao: "Porto de Galinhas, Pipa e Natal a partir de João Pessoa.",
    cor: "#8B1A3A",
  },
] as const;

export const metadata: Metadata = {
  title: "Passeios em João Pessoa | Vem Passear em Jampa",
  description:
    "Descubra os melhores passeios em João Pessoa: piscinas naturais, litoral sul, catamarã e city tour. Atendimento rápido pelo WhatsApp. Cadastur ativo.",
  openGraph: {
    title: "Passeios em João Pessoa — Vem Passear em Jampa",
    description:
      "Piscinas naturais, litoral sul e norte, catamarã e city tour com orientação local. Reserve pelo WhatsApp.",
  },
};

export default function Home() {
  const prioritarios = getPasseiosPrioritarios();

  return (
    <div>

      <CTASticky whatsappUrl={WA_URL} label="Falar com Murillo no WhatsApp" />

      {/* ── 1. HERO ── */}
      <HomeVideoHero whatsappUrl={WA_URL} />

      {/* Wave hero → categorias */}
      <WaveDivider fill="#FAFAF8" className="-mt-1" />

      {/* ── 2. CATEGORIAS ── */}
      <section className="py-14 md:py-20" style={{ background: "#FAFAF8" }}>
        <div className="container-safe">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary text-center mb-3">
            Explore por categoria
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-dark text-center mb-3 leading-tight">
            Passeios em João Pessoa
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
            Escolha a categoria que combina com você ou deixa a gente montar o roteiro certo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {CATEGORIAS.map((cat) => (
              <CategoryCard
                key={cat.slug}
                nome={cat.nome}
                slug={cat.slug}
                emoji={cat.emoji}
                descricao={cat.descricao}
                cor={cat.cor}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/passeios"
              className="text-sm font-semibold text-secondary hover:text-primary transition-colors border-b-2 border-secondary/30 hover:border-primary pb-0.5"
            >
              Ver todos os 22 passeios →
            </a>
          </div>
        </div>
      </section>

      {/* Wave categorias → prioritários */}
      <WaveDivider fill="#ffffff" />

      {/* ── 2.5. PROVA SOCIAL HONESTA (Google reviews) ── */}
      <section className="bg-white py-12 md:py-16" aria-label="Avaliações reais no Google">
        <div className="container-safe max-w-3xl text-center">
          <a
            href={empresa.rede.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group"
            aria-label={`Ler as ${empresa.rating.totalAvaliacoes} avaliações reais no Google`}
          >
            <p className="font-serif font-bold text-dark mb-2" style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1 }}>
              <span className="text-primary">★</span> {empresa.rating.valor}
              <span className="text-2xl text-gray-400 font-sans font-normal align-super ml-1">/5</span>
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-3">
              <strong className="text-dark">{empresa.rating.totalAvaliacoes} avaliações reais</strong> no Google
            </p>
            <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed mb-5">
              Pessoas que viajaram com a Vem Passear em João Pessoa e voltaram para contar.
            </p>
            <span className="text-sm font-semibold text-secondary group-hover:text-primary border-b-2 border-secondary/30 group-hover:border-primary transition-colors pb-0.5">
              Ler todas no Google →
            </span>
          </a>
        </div>
      </section>

      {/* ── 3. PASSEIOS PRIORITÁRIOS ── */}
      {prioritarios.length > 0 && (
        <section className="py-14 md:py-20 bg-white">
          <div className="container-safe">
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary text-center mb-3">
              Mais procurados
            </p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-dark text-center mb-3 leading-tight">
              Os Favoritos dos Turistas
            </h2>
            <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
              Os passeios que mais encantam quem visita João Pessoa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {prioritarios.map((p) => (
                <PasseioCard key={p.id} passeio={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. BLOCO MURILLO ── */}
      <MurilloBlock whatsappUrl={WA_URL} />

      {/* ── 5. CTA FINAL ── */}
      <CTAFinal
        whatsappUrl={WA_URL}
        variante="laranja"
        label="Fale agora"
        titulo="Vamos Montar o Roteiro que Você Sonha"
        subtitulo="Mande mensagem para Murillo e receba orientação local, preço justo e atendimento rápido — sem enrolação."
        textoBotao="Chamar Murillo no WhatsApp"
      />

    </div>
  );
}
