/**
 * Helpers para SEO
 *
 * Fonte: _conhecimento/seo-local-joao-pessoa.md
 * Regra: Sempre incluir "João Pessoa" se não estiver no H1
 */

import { SeoMeta } from "@/types";

const SITE_URL = "https://vempassearjampa.com.br";
const BRAND_NAME = "Vem Passear em Jampa";
const WHATSAPP = "+55 83 9908-7830";

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
        ? [{ url: meta.ogImage, width: 1200, height: 630, alt: meta.title }]
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

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: BRAND_NAME,
    legalName: "AFFONSO MURILLO SOLEDADE DE OLIVEIRA",
    taxID: "52.077.577/0001-03",
    description: "Agência de turismo receptivo em João Pessoa. Cadastur 52.077.577 — Ativo.",
    url: SITE_URL,
    telephone: WHATSAPP,
    address: {
      "@type": "PostalAddress",
      addressLocality: "João Pessoa",
      addressRegion: "PB",
      addressCountry: "BR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "61",
    },
  };
}

interface TouristAttractionParams {
  nome: string;
  descricao: string;
  url: string;
  imagemUrl?: string;
  preco?: string;
  virtualTourUrl?: string;
}

export function generateTouristAttractionSchema(params: TouristAttractionParams) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: params.nome,
    description: params.descricao,
    url: params.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "João Pessoa",
      addressRegion: "PB",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-7.1519",
      longitude: "-34.7929",
    },
    provider: {
      "@type": "TravelAgency",
      name: BRAND_NAME,
      telephone: WHATSAPP,
    },
  };

  if (params.imagemUrl) schema.image = params.imagemUrl;

  if (params.preco) {
    schema.offers = {
      "@type": "Offer",
      price: params.preco.replace(/\D/g, "") || undefined,
      priceCurrency: "BRL",
      url: params.url,
      availability: "https://schema.org/InStock",
    };
  }

  if (params.virtualTourUrl) schema.virtualTourUrl = params.virtualTourUrl;

  return schema;
}

export function generateFAQSchema(
  items: Array<{ pergunta: string; resposta: string }>
) {
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

interface BreadcrumbSchemaItem {
  name: string;
  item: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

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
