/**
 * Página de Categoria — /passeios/[categoria]/
 * Lista os passeios filtrados por categoria com links para /passeios/[categoria]/[slug].
 * ISSUE-10
 */

import type { Metadata } from "next";
import Link from "next/link";
import { passeios, getPasseiosByCategoria } from "@/data/passeios";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { isCampoIndisponivel } from "@/lib/consultar";
import { empresa } from "@/data/empresa";

interface CategoriaPageProps {
  params: {
    categoria: string;
  };
}

const CATEGORIAS_META: Record<string, { nome: string; emoji: string; descricao: string }> = {
  pacotes: {
    nome: "Pacotes",
    emoji: "🎒",
    descricao:
      "Combine os melhores passeios de João Pessoa em um só roteiro. Praias, piscinas naturais e cultura — tudo com transfer e guia credenciado.",
  },
  "litoral-sul": {
    nome: "Litoral Sul",
    emoji: "🏖️",
    descricao:
      "Praias desertas, falésias coloridas e quadriciclo nas dunas. O Litoral Sul de João Pessoa é a saída favorita de quem quer aventura.",
  },
  "litoral-norte": {
    nome: "Litoral Norte",
    emoji: "⛵",
    descricao:
      "Pôr do sol no Jacaré, Areia Vermelha e catamarã no Atlântico. O Litoral Norte combina natureza e uma das paisagens mais fotografadas da Paraíba.",
  },
  "piscinas-naturais": {
    nome: "Piscinas Naturais",
    emoji: "🐠",
    descricao:
      "Recifes de coral a poucos minutos de João Pessoa. Água morna, transparente e fauna marinha — experiência única no litoral nordestino.",
  },
  "city-tour": {
    nome: "City Tour",
    emoji: "🏙️",
    descricao:
      "Conheça a história e a arquitetura de João Pessoa — a segunda cidade mais antiga do Brasil — com guia especializado.",
  },
  interestaduais: {
    nome: "Interestaduais",
    emoji: "🗺️",
    descricao:
      "Porto de Galinhas, Praia de Pipa e Natal a partir de João Pessoa. Destinos imperdíveis do Nordeste em excursões com saída garantida.",
  },
};

export function generateStaticParams() {
  const categorias = Array.from(new Set(passeios.map((p) => p.categoria)));
  return categorias.map((categoria) => ({ categoria }));
}

export async function generateMetadata({ params }: CategoriaPageProps): Promise<Metadata> {
  const meta = CATEGORIAS_META[params.categoria];
  const nome = meta?.nome ?? params.categoria.replace(/-/g, " ");

  return generateSeoMetadata({
    title: `Passeios ${nome} em João Pessoa | Vem Passear em Jampa`,
    description:
      meta?.descricao ??
      `Descubra os passeios de ${nome.toLowerCase()} em João Pessoa. Agende pelo WhatsApp.`,
    keywords: [nome, "João Pessoa", "passeios", "turismo", "Paraíba"],
  });
}

export default function CategoriaPage({ params }: CategoriaPageProps) {
  const itens = getPasseiosByCategoria(params.categoria);
  const meta = CATEGORIAS_META[params.categoria];
  const nome = meta?.nome ?? params.categoria.replace(/-/g, " ");
  const emoji = meta?.emoji ?? "🎯";
  const descricao = meta?.descricao ?? null;

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="container-safe py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-primary">Home</Link>
        {" / "}
        <Link href="/passeios" className="hover:text-primary">Passeios</Link>
        {" / "}
        <span className="text-gray-700 font-medium">{nome}</span>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-safe text-center">
          <div className="text-5xl mb-4">{emoji}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {nome} em João Pessoa
          </h1>
          {descricao && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">{descricao}</p>
          )}
          <p className="text-sm text-gray-500">
            {itens.length} {itens.length === 1 ? "passeio disponível" : "passeios disponíveis"}
          </p>
        </div>
      </section>

      {/* Grid de passeios */}
      <section className="section-padding">
        <div className="container-safe">
          {itens.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Nenhum passeio disponível nesta categoria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {itens.map((passeio) => (
                <Link
                  key={passeio.id}
                  href={`/passeios/${params.categoria}/${passeio.slug}`}
                  className="group flex flex-col bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-primary transition"
                >
                  <h2 className="font-bold text-lg text-gray-900 group-hover:text-primary transition mb-2">
                    {passeio.nome}
                  </h2>
                  <p className="text-sm text-gray-600 flex-1 mb-4 leading-relaxed">
                    {passeio.descricao}
                  </p>
                  <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-3">
                    <div className="space-y-0.5">
                      <p className="text-gray-500">
                        <span className="font-medium text-gray-700">Duração:</span>{" "}
                        {isCampoIndisponivel(passeio.duracao) ? "[CONSULTAR]" : passeio.duracao}
                      </p>
                      <p className="text-gray-500">
                        <span className="font-medium text-gray-700">A partir de:</span>{" "}
                        {isCampoIndisponivel(passeio.preco) ? "[CONSULTAR]" : passeio.preco}
                      </p>
                    </div>
                    <span className="text-primary font-semibold whitespace-nowrap ml-4">
                      Ver detalhes →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="section-padding bg-primary text-white">
        <div className="container-safe text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ficou com dúvida sobre algum passeio?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Mande uma mensagem para Murillo — ele responde rápido e ajuda a montar o roteiro ideal.
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
