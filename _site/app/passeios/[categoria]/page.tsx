/**
 * Página de Categoria
 *
 * Rota dinâmica: /passeios/[categoria]
 * Exemplo: /passeios/litoral-sul
 *
 * Estrutura esperada:
 * 1. Hero com nome da categoria
 * 2. Descrição da categoria
 * 3. Grid de passeios (cards com foto, nome, preço)
 * 4. CTA final
 *
 * [PLACEHOLDER: Será preenchida com dados de _conhecimento/clusters-seo.md]
 */

import type { Metadata } from "next";
import { getPasseiosByCategoria } from "@/data/passeios";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo";

interface CategoriaPageProps {
  params: {
    categoria: string;
  };
}

export async function generateMetadata({
  params,
}: CategoriaPageProps): Promise<Metadata> {
  const nomeCat = params.categoria.replace(/-/g, " ");

  return generateSeoMetadata({
    title: `${nomeCat} em João Pessoa`,
    description: `Descubra os melhores passeios de ${nomeCat.toLowerCase()} em João Pessoa. Conheça as opções disponíveis e agende a sua experiência.`,
    keywords: [`${nomeCat}`, "João Pessoa", "passeios", "turismo"],
  });
}

export default function CategoriaPage({ params }: CategoriaPageProps) {
  const passeios = getPasseiosByCategoria(params.categoria);
  const nomeCat = params.categoria.replace(/-/g, " ");

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="container-safe py-4 text-sm">
        <a href="/" className="hover:text-primary">
          Home
        </a>
        {" / "}
        <span className="text-gray-600">{nomeCat}</span>
      </nav>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="container-safe text-center">
          <h1>{nomeCat}</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            {passeios.length} passeios incríveis aguardando você.
            Escolha sua experiência favorita.
          </p>
        </div>
      </section>

      {/* Grid de Passeios */}
      <section className="section-padding">
        <div className="container-safe">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passeios.map((passeio) => (
              <a
                key={passeio.id}
                href={`/passeios/${params.categoria}/${passeio.slug}`}
                className="group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Card Image Placeholder */}
                <div className="w-full h-40 bg-light flex items-center justify-center">
                  📷
                </div>

                {/* Card Content */}
                <div className="p-4 md:p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition">
                    {passeio.nome}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {passeio.descricao}
                  </p>

                  {/* Info */}
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">{passeio.preco}</span>
                    <span className="text-sm text-gray-500">{passeio.duracao}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {passeios.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">Nenhum passeio disponível nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-primary text-white">
        <div className="container-safe text-center">
          <h2>Não encontrou o que procura?</h2>
          <p className="text-lg mt-4 mb-8">
            Mande uma mensagem e vamos criar um roteiro personalizado pra você.
          </p>
          <a href="#" className="btn-primary bg-white text-primary hover:bg-gray-100">
            Chamar Murillo no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
