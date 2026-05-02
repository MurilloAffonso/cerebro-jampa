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

      {/* ── 1. HERO ── */}
      <section
        id="hero-section"
        className="relative overflow-hidden flex flex-col"
        style={{ minHeight: "min(100svh, 800px)" }}
      >
        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(145deg, #003d6b 0%, #1A1A2E 55%, #0a2a45 100%)" }}
        />

        {/* Decorative blobs */}
        <div
          className="absolute top-[-10%] left-[-5%] w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "#FF6B35", filter: "blur(80px)", opacity: 0.18 }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-[5%] right-[-5%] w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "#004E89", filter: "blur(70px)", opacity: 0.2 }}
          aria-hidden="true"
        />

        {/* Content */}
        <div
          className="relative container-safe flex flex-col items-center justify-center text-center text-white py-16 flex-1"
          style={{ minHeight: "min(100svh, 800px)" }}
        >
          {/* Badge */}
          <div className="animate-fade-up delay-50 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-7">
            <span className="w-2 h-2 rounded-full bg-primary inline-block shrink-0" aria-hidden="true" />
            João Pessoa, Paraíba
          </div>

          {/* H1 */}
          <h1
            className="animate-fade-up delay-150 font-serif font-bold leading-[1.08] text-white mb-6 max-w-3xl"
            style={{ fontSize: "clamp(40px, 7vw, 80px)", letterSpacing: "-1.5px" }}
          >
            O Que Fazer em{" "}
            <span className="text-primary">João Pessoa?</span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-up delay-250 text-white/75 max-w-xl mb-8 leading-relaxed"
            style={{ fontSize: "clamp(16px, 1.8vw, 20px)" }}
          >
            Praias paradisíacas, piscinas de corais, quadriciclo, catamarã e o pôr do sol
            mais emocionante do Brasil. Murillo te orienta do jeito certo.
          </p>

          {/* CTA */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-up delay-350 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-white font-extrabold px-9 py-[18px] rounded-full min-h-[56px] transition-all hover:scale-[1.02] hover:-translate-y-[3px] shadow-lg"
            style={{ fontSize: "clamp(15px, 1.5vw, 18px)", boxShadow: "0 8px 32px rgba(255,107,53,0.35)" }}
            aria-label="Montar roteiro no WhatsApp"
          >
            💬 Montar Meu Roteiro no WhatsApp
          </a>

          {/* Stats bottom */}
          <div className="animate-fade-up delay-450 mt-14 pt-7 border-t border-white/10 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-bold text-primary text-xl mb-0.5">
                ★ {empresa.rating.valor}/5
              </p>
              <p className="text-white/55 text-xs">
                {empresa.rating.totalAvaliacoes} avaliações Google
              </p>
            </div>
            <div>
              <p className="font-bold text-white text-xl mb-0.5">Cadastur</p>
              <p className="text-white/55 text-xs">{empresa.cadastur} · Ativo</p>
            </div>
            <div>
              <p className="font-bold text-white text-xl mb-0.5">WhatsApp</p>
              <p className="text-white/55 text-xs">Atendimento direto</p>
            </div>
          </div>
        </div>
      </section>

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
