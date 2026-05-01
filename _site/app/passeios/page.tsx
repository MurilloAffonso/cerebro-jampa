/**
 * Hub de Passeios — /passeios/
 * Lista os 22 passeios agrupados pelas 6 categorias, cada card linkando para /passeios/[categoria]/[slug].
 * ISSUE-09
 */

import type { Metadata } from "next";
import Link from "next/link";
import { passeios } from "@/data/passeios";
import { empresa } from "@/data/empresa";

export const metadata: Metadata = {
  title: "Passeios em João Pessoa — Vem Passear em Jampa",
  description:
    "Explore os 22 passeios em João Pessoa: piscinas naturais, litoral sul e norte, city tour, pacotes e interestaduais. Agende pelo WhatsApp.",
};

const CATEGORIAS: { slug: string; nome: string; emoji: string }[] = [
  { slug: "pacotes",           nome: "Pacotes",            emoji: "🎒" },
  { slug: "litoral-sul",       nome: "Litoral Sul",        emoji: "🏖️" },
  { slug: "litoral-norte",     nome: "Litoral Norte",      emoji: "⛵" },
  { slug: "piscinas-naturais", nome: "Piscinas Naturais",  emoji: "🐠" },
  { slug: "city-tour",         nome: "City Tour",          emoji: "🏙️" },
  { slug: "interestaduais",    nome: "Interestaduais",     emoji: "🗺️" },
];

export default function PasseiosPage() {
  const categorias = CATEGORIAS.map((cat) => ({
    ...cat,
    itens: passeios.filter((p) => p.categoria === cat.slug),
  }));

  const total = passeios.length;

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="container-safe py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-primary">Home</Link>
        {" / "}
        <span className="text-gray-700 font-medium">Passeios</span>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-safe text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Todos os Passeios em João Pessoa
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {total} passeios divididos em {categorias.length} categorias. Escolha o seu e agende pelo WhatsApp.
          </p>

          {/* Âncoras de categoria */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categorias.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-medium hover:border-primary hover:text-primary transition"
              >
                {cat.emoji} {cat.nome}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Listagem por categoria */}
      <section className="section-padding">
        <div className="container-safe space-y-16">
          {categorias.map((cat) => (
            <div key={cat.slug} id={cat.slug}>
              {/* Cabeçalho da categoria */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
                <span className="text-3xl">{cat.emoji}</span>
                <div>
                  <h2 className="text-2xl font-bold text-secondary">{cat.nome}</h2>
                  <p className="text-sm text-gray-500">
                    {cat.itens.length} {cat.itens.length === 1 ? "passeio" : "passeios"}
                  </p>
                </div>
              </div>

              {/* Grid de passeios */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.itens.map((p) => (
                  <Link
                    key={p.id}
                    href={`/passeios/${p.categoria}/${p.slug}`}
                    className="group flex flex-col bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-primary transition"
                  >
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition mb-2">
                      {p.nome}
                    </h3>
                    <p className="text-sm text-gray-600 flex-1 mb-4 leading-relaxed">
                      {p.descricao}
                    </p>
                    <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-3">
                      <div className="space-y-0.5">
                        <p className="text-gray-500">
                          <span className="font-medium text-gray-700">Duração:</span>{" "}
                          {p.duracao || "[CONSULTAR]"}
                        </p>
                        <p className="text-gray-500">
                          <span className="font-medium text-gray-700">A partir de:</span>{" "}
                          {p.preco || "[CONSULTAR]"}
                        </p>
                      </div>
                      <span className="text-primary font-semibold text-sm whitespace-nowrap ml-4">
                        Ver detalhes →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="section-padding bg-primary text-white">
        <div className="container-safe text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ficou com dúvida sobre qual passeio escolher?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Mande uma mensagem para Murillo — ele indica o roteiro certo para o seu tempo e orçamento.
          </p>
          <a
            href={empresa.contato.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            💬 Falar com Murillo pelo WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
