/**
 * Página de Passeio Individual
 *
 * Rota dinâmica: /passeios/[categoria]/[slug]
 * Exemplo: /passeios/litoral-sul/seixas
 *
 * Estrutura esperada:
 * 1. Breadcrumb
 * 2. Hero com imagem
 * 3. InfoCard (preço, duração, saída)
 * 4. Descrição principal
 * 5. O que está incluído
 * 6. Rotário (itineário)
 * 7. FAQ da página
 * 8. Depoimento
 * 9. CTA WhatsApp Final
 *
 * [PLACEHOLDER: Componentes ainda não implementados]
 * Será preenchida com dados de _conhecimento/catalogo_vempassear_estruturado.md
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPasseioBySlug } from "@/data/passeios";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo";

interface PasseioPageProps {
  params: {
    categoria: string;
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PasseioPageProps): Promise<Metadata> {
  const passeio = getPasseioBySlug(params.slug);
  if (!passeio) return {};

  return generateSeoMetadata({
    title: `${passeio.nome} em João Pessoa`,
    description: `${passeio.descricao}. Preço: ${passeio.preco}. Duração: ${passeio.duracao}. Agende no WhatsApp →`,
    keywords: [
      passeio.nome,
      "João Pessoa",
      "turismo",
      params.categoria.replace("-", " "),
    ],
    ogImage: passeio.imagemSrc,
  });
}

export default function PasseioPage({ params }: PasseioPageProps) {
  const passeio = getPasseioBySlug(params.slug);

  if (!passeio) {
    notFound();
  }

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="container-safe py-4 text-sm">
        <a href="/" className="hover:text-primary">
          Home
        </a>
        {" / "}
        <a href={`/passeios/${params.categoria}`} className="hover:text-primary">
          {params.categoria}
        </a>
        {" / "}
        <span className="text-gray-600">{passeio.nome}</span>
      </nav>

      {/* Hero */}
      {/* <HeroBlock imageSrc={...} title={...} /> */}

      {/* InfoCard */}
      {/* <InfoCard preco={...} duracao={...} saida={...} /> */}

      {/* Descrição */}
      <section className="section-padding">
        <div className="container-safe max-w-3xl">
          <h1>{passeio.nome}</h1>
          <p className="text-lg text-gray-700 mt-4">
            {passeio.descricaoLonga || passeio.descricao}
          </p>
        </div>
      </section>

      {/* O Que Está Incluído */}
      {passeio.incluso && passeio.incluso.length > 0 && (
        <section className="section-padding bg-light">
          <div className="container-safe max-w-3xl">
            <h2>O Que Está Incluído</h2>
            <ul className="list-disc list-inside space-y-2 mt-6 text-gray-700">
              {passeio.incluso.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Rotário */}
      {passeio.rotario && passeio.rotario.length > 0 && (
        <section className="section-padding">
          <div className="container-safe max-w-3xl">
            <h2>Rotário</h2>
            <div className="space-y-4 mt-6">
              {passeio.rotario.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">
                    {idx + 1}.
                  </span>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {passeio.faq && passeio.faq.length > 0 && (
        <section className="section-padding bg-light">
          <div className="container-safe max-w-3xl">
            <h2>Perguntas Frequentes</h2>
            {/* <FAQAccordion items={passeio.faq} /> */}
          </div>
        </section>
      )}

      {/* Depoimento */}
      {passeio.depoimento && (
        <section className="section-padding">
          <div className="container-safe max-w-2xl text-center">
            <p className="text-lg italic mb-4">
              "{passeio.depoimento.texto}"
            </p>
            <p className="font-semibold">— {passeio.depoimento.autor}</p>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="section-padding bg-primary text-white">
        <div className="container-safe text-center">
          <h2>Pronto para essa experiência?</h2>
          <p className="text-lg mt-4 mb-8">
            Mande uma mensagem e vamos marcar seu passeio.
          </p>
          <a href="#" className="btn-primary bg-white text-primary hover:bg-gray-100">
            Agendar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
