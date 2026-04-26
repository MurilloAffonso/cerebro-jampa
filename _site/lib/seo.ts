/**
 * Helpers para SEO
 *
 * Fonte: _conhecimento/seo-local-joao-pessoa.md
 * Regra: Sempre incluir "João Pessoa" se não estiver no H1
 * Sempre mobile-first
 * Meta description com CTA
 */

import { SeoMeta } from "@/types";

const SITE_URL = "https://vempassearjampa.com.br"; // [CONFIRMAR COM MURILLO: domínio exato]
const BRAND_NAME = "Vem Passear em Jampa";

export function generateMetadata(meta: SeoMeta) {
  return {
    title: `${meta.title} | ${BRAND_NAME}`,
    description: meta.description,
    keywords: meta.keywords?.join(", "),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: SITE_URL,
      siteName: BRAND_NAME,
      images: meta.ogImage
        ? [
            {
              url: meta.ogImage,
              width: 1200,
              height: 630,
              alt: meta.title,
            },
          ]
        : [],
      type: (meta.ogType || "website") as "website" | "article" | "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: meta.ogImage ? [meta.ogImage] : [],
    },
  };
}

/**
 * Schemas JSON-LD para SEO estruturado
 */

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND_NAME,
    description: "Agência de turismo receptivo em João Pessoa",
    url: SITE_URL,
    telephone: "+5583988888888", // [CONFIRMAR COM MURILLO]
    address: {
      "@type": "PostalAddress",
      addressLocality: "João Pessoa",
      addressRegion: "Paraíba",
      addressCountry: "BR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "150", // [CONFIRMAR COM MURILLO]
    },
  };
}

export function generateTouristAttractionSchema(
  nome: string,
  descricao: string,
  imagemUrl?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: nome,
    description: descricao,
    image: imagemUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "João Pessoa",
      addressRegion: "Paraíba",
      addressCountry: "BR",
    },
  };
}

export function generateFAQSchema(items: Array<{ pergunta: string; resposta: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.resposta,
      },
    })),
  };
}

/**
 * Helpers de URL
 */

export function slugify(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function gerarUrlPasseio(categoria: string, slug: string): string {
  return `/passeios/${slugify(categoria)}/${slug}`;
}

export function gerarUrlCategoria(slug: string): string {
  return `/passeios/${slug}`;
}
