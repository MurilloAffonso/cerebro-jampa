/**
 * Página: Todos os Passeios
 *
 * Rota: /passeios
 * Objetivo: Listar todas as categorias e permitir navegação por tipo de passeio
 *
 * Estrutura:
 * 1. Hero: "Escolha o tipo de passeio"
 * 2. Grid de categorias com quantidade de passeios
 * 3. CTA para cada categoria
 */

import type { Metadata } from "next";
import Link from "next/link";
import { passeios } from "@/data/passeios";

export const metadata: Metadata = {
  title: "Todos os Passeios em João Pessoa | Vem Passear em Jampa",
  description:
    "Navegue por todas as categorias de passeios em João Pessoa: piscinas naturais, litoral, city tour e muito mais.",
};

export default function PasseiosPage() {
  // Agrupar passeios por categoria
  const categorias = Array.from(new Set(passeios.map((p) => p.categoria)));

  const categoriasComPasseios = categorias.map((cat) => ({
    slug: cat,
    nome: cat
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    passeios: passeios.filter((p) => p.categoria === cat),
  }));

  const emojiPorCategoria: { [key: string]: string } = {
    "piscinas-naturais": "🐠",
    "litoral-sul": "🏖️",
    "litoral-norte": "⛵",
    "city-tour": "🏙️",
    urbano: "🏙️",
  };

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="container-safe py-4 text-sm">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        {" / "}
        <span className="text-gray-600">Passeios</span>
      </nav>

      {/* Hero */}
      <section className="hero-section bg-gradient-to-b from-blue-50 to-white">
        <div className="container-safe text-center">
          <h1>Todos os Passeios</h1>
          <p className="text-lg text-gray-600 mt-4">
            Escolha o tipo de passeio e descubra as melhores opções para sua viagem.
          </p>
        </div>
      </section>

      {/* Grid de Categorias */}
      <section className="section-padding">
        <div className="container-safe">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriasComPasseios.map((cat) => (
              <Link
                key={cat.slug}
                href={`/passeios/${cat.slug}`}
                className="group block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">
                  {emojiPorCategoria[cat.slug] || "🎯"}
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition">
                  {cat.nome}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {cat.passeios.length} {cat.passeios.length === 1 ? "passeio" : "passeios"}
                </p>

                {/* Preview dos passeios */}
                <ul className="text-sm text-gray-700 space-y-1">
                  {cat.passeios.slice(0, 3).map((p) => (
                    <li key={p.id} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{p.nome}</span>
                    </li>
                  ))}
                  {cat.passeios.length > 3 && (
                    <li className="text-primary font-semibold">
                      + {cat.passeios.length - 3} mais
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <span className="inline-block text-primary font-semibold text-sm">
                    Ver todos →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-primary text-white">
        <div className="container-safe text-center">
          <h2>Não encontrou o que procura?</h2>
          <p className="text-lg mt-4 mb-8">
            Mande uma mensagem para Murillo e vamos criar um roteiro personalizado.
          </p>
          <a
            href="https://wa.me/5583988888888"
            className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            💬 Chamar Murillo
          </a>
        </div>
      </section>
    </div>
  );
}
