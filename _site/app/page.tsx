/**
 * Home Page — /
 *
 * Estrutura (ISSUE-08 / PRD Fase 1 / CONTEXT.md):
 *   1. Hero: H1 + subtítulo + CTA WhatsApp
 *   2. Prova social: Google 4.9/5, 61 avaliações, Cadastur
 *   3. Cards das 6 categorias (não lista de passeios individuais)
 *   4. Destaques: 3 passeios prioritários
 *   5. Bloco Murillo / Sobre
 *   6. CTA Final WhatsApp
 *
 * Regras:
 *   - Dados de confiança exclusivamente de data/empresa.ts
 *   - Sem Blog, sem link /sobre como página
 *   - Sem dados inventados
 */

import type { Metadata } from "next";
import Link from "next/link";
import { getPasseiosPrioritarios } from "@/data/passeios";
import { empresa } from "@/data/empresa";
import { PasseioCard } from "@/components/PasseioCard";

const WA_URL = `${empresa.contato.whatsappLink}?text=Oi%2C+quero+informações+sobre+os+passeios+em+João+Pessoa`;

const CATEGORIAS = [
  {
    nome: "Pacotes",
    slug: "pacotes",
    emoji: "🎒",
    descricao: "Roteiros de 2 e 3 dias com transfer, guia e tudo incluso.",
  },
  {
    nome: "Litoral Sul",
    slug: "litoral-sul",
    emoji: "🏖️",
    descricao: "Gramame, Amor, Tambaba e Coqueirinho — praias e trilhas de quadriciclo.",
  },
  {
    nome: "Litoral Norte",
    slug: "litoral-norte",
    emoji: "⛵",
    descricao: "História colonial, Areia Vermelha e o pôr do sol mais famoso do Brasil.",
  },
  {
    nome: "Piscinas Naturais",
    slug: "piscinas-naturais",
    emoji: "🤿",
    descricao: "Recifes de corais e águas mornas no ponto mais oriental das Américas.",
  },
  {
    nome: "City Tour",
    slug: "city-tour",
    emoji: "🏛️",
    descricao: "A 3ª cidade mais antiga do Brasil: Niemeyer, patrimônio e praças históricas.",
  },
  {
    nome: "Interestaduais",
    slug: "interestaduais",
    emoji: "🗺️",
    descricao: "Porto de Galinhas, Pipa e Natal a partir de João Pessoa.",
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
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container-safe text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-dark leading-tight mb-4">
            O Que Fazer em João Pessoa?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Praias paradisíacas, piscinas de corais, quadriciclo, catamarã e o pôr do sol
            mais emocionante do Brasil. Murillo te orienta do jeito certo.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-white font-bold text-lg px-8 py-4 rounded-lg min-h-[52px] transition-colors shadow-md"
            aria-label="Montar roteiro no WhatsApp"
          >
            💬 Montar Meu Roteiro no WhatsApp
          </a>
        </div>
      </section>

      {/* ── 2. PROVA SOCIAL ── */}
      <section className="bg-dark text-white py-10 md:py-12">
        <div className="container-safe">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">
                {empresa.rating.valor}/5 ⭐
              </div>
              <p className="text-gray-300 text-sm">
                {empresa.rating.totalAvaliacoes} avaliações verificadas no Google
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">Cadastur</div>
              <p className="text-gray-300 text-sm">
                {empresa.cadastur} — ativo até {empresa.cadasturValido}
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">WhatsApp</div>
              <p className="text-gray-300 text-sm">Atendimento direto, sem intermediários</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CATEGORIAS ── */}
      <section className="py-14 md:py-20">
        <div className="container-safe">
          <h2 className="text-2xl md:text-3xl font-bold text-dark text-center mb-3">
            Passeios em João Pessoa
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Escolha a categoria que combina com você ou deixa a gente montar o roteiro certo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIAS.map((cat) => (
              <Link
                key={cat.slug}
                href={`/passeios/${cat.slug}`}
                className="group flex gap-4 items-start bg-white border border-gray-200 rounded-xl p-5 hover:border-primary hover:shadow-md transition-all"
              >
                <span className="text-3xl shrink-0" aria-hidden="true">{cat.emoji}</span>
                <div>
                  <h3 className="font-bold text-dark text-base mb-1 group-hover:text-primary transition-colors">
                    {cat.nome}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{cat.descricao}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/passeios"
              className="text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              Ver todos os passeios →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. PASSEIOS PRIORITÁRIOS ── */}
      {prioritarios.length > 0 && (
        <section className="py-14 md:py-20 bg-light">
          <div className="container-safe">
            <h2 className="text-2xl md:text-3xl font-bold text-dark text-center mb-3">
              Os Mais Procurados
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
              Os passeios que mais encantam quem visita João Pessoa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prioritarios.map((p) => (
                <PasseioCard key={p.id} passeio={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. BLOCO MURILLO ── */}
      <section className="py-14 md:py-20">
        <div className="container-safe max-w-3xl">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar placeholder */}
            <div className="shrink-0 w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold select-none mx-auto md:mx-0">
              M
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-3">
                Por que a Vem Passear em Jampa?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {empresa.missao}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {empresa.diferencial.split(" + ").map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 shrink-0" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-gray-500">
                — {empresa.proprietario}, fundador
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CTA FINAL ── */}
      <section className="bg-primary text-white py-14 md:py-20">
        <div className="container-safe text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Vamos Montar o Roteiro que Você Sonha
          </h2>
          <p className="text-lg mb-8 text-orange-100">
            Mande mensagem para Murillo e receba orientação local, preço justo e
            atendimento rápido — sem enrolação.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-orange-50 font-bold text-lg px-8 py-4 rounded-lg min-h-[52px] transition-colors"
            aria-label="Chamar Murillo no WhatsApp"
          >
            💬 Chamar Murillo no WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
