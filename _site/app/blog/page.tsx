/**
 * /blog — hub editorial
 *
 * Comportamento:
 *   - Se houver posts published → lista os posts
 *   - Se não houver → mostra "Guias em preparação" com clusters planejados
 *
 * Drafts NUNCA aparecem nesta página.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { empresa } from "@/data/empresa";
import { getPublishedPosts, listClusters } from "@/lib/blog";

const WA_URL = `${empresa.contato.whatsappLink}?text=Oi%2C+quero+informações+sobre+os+passeios+em+João+Pessoa`;

export const metadata: Metadata = {
  title: "Blog — Guias de João Pessoa | Vem Passear em Jampa",
  description:
    "Guias práticos sobre João Pessoa: piscinas naturais, roteiros, marés e dicas locais com orientação direta de Murillo.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Guias de João Pessoa",
    description:
      "Guias práticos sobre João Pessoa escritos por quem vive aqui. Piscinas naturais, roteiros, marés e dicas locais.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const published = getPublishedPosts();
  const clusters = listClusters();
  const totalPlanejados = clusters.reduce((acc, c) => acc + c.count, 0);
  const emPreparacao = published.length === 0;

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#FAFAF8] py-16 md:py-20">
        <div className="container-safe max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            Blog Vem Passear
          </p>
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-dark leading-tight mb-5">
            Guias de João Pessoa por quem vive aqui
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Conteúdo criado por Murillo, fundador da Vem Passear em Jampa — atendimento direto, orientação local e curadoria dos passeios.
            Sem clichê turístico. Só o que funciona de verdade.
          </p>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="py-14 md:py-20">
        <div className="container-safe max-w-5xl">
          {emPreparacao ? (
            <div className="bg-[#FAFAF8] border border-gray-200 rounded-2xl p-8 md:p-12 mb-10">
              <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
                Em preparação
              </p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-dark mb-4 leading-tight">
                Guias chegando em breve
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                Estamos preparando uma série de guias práticos sobre João Pessoa.
                Enquanto isso, fale direto com Murillo no WhatsApp para receber
                orientação personalizada de roteiro.
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white font-bold px-6 py-3 rounded-full min-h-[44px] transition-colors"
              >
                💬 Falar com Murillo
              </a>
            </div>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {published.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block border border-gray-200 hover:border-primary rounded-2xl p-6 transition-colors h-full"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">
                      {post.category}
                    </p>
                    <h3 className="font-serif font-bold text-xl text-dark leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {post.description}
                    </p>
                    <p className="text-xs text-gray-400">
                      {post.readingTime} min de leitura · atualizado em {post.updatedAt}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Clusters editoriais */}
          <div>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-dark mb-2 leading-tight">
              Temas que cobrimos
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              {totalPlanejados > 0
                ? `${totalPlanejados} guia${totalPlanejados > 1 ? "s" : ""} publicado${totalPlanejados > 1 ? "s" : ""}.`
                : "Conteúdo em preparação por cluster editorial."}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {clusters.map((cluster) => (
                <li
                  key={cluster.key}
                  className="border border-gray-200 rounded-xl p-5 bg-white"
                >
                  <h3 className="font-serif font-bold text-base text-dark leading-snug mb-1">
                    {cluster.nome}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-2">
                    {cluster.descricao}
                  </p>
                  <p className="text-xs text-gray-400">
                    {cluster.count === 0
                      ? "Em preparação"
                      : `${cluster.count} guia${cluster.count > 1 ? "s" : ""} publicado${cluster.count > 1 ? "s" : ""}`}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section
        id="cta-final"
        className="py-14 md:py-20"
        style={{ background: "#004E89" }}
      >
        <div className="container-safe text-center max-w-2xl">
          <h2 className="font-serif font-bold text-white text-2xl md:text-3xl mb-3 leading-tight">
            Prefere conversar direto?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Murillo responde no WhatsApp. Atendimento humano, orientação local, sem
            enrolação.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white font-extrabold px-8 py-4 rounded-full min-h-[56px] transition-all"
          >
            💬 Chamar Murillo no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
