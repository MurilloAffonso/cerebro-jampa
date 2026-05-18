/**
 * Helpers para SEO
 *
 * Fonte: _conhecimento/seo-local-joao-pessoa.md
 * Regra: Sempre incluir "João Pessoa" se não estiver no H1
 */

import { SeoMeta } from "@/types";

const SITE_URL = "https://vempassearjampacom.netlify.app";
const BRAND_NAME = "Vem Passear em Jampa";
const WHATSAPP = "+55 83 9908-7830";

export function generateMetadata(meta: SeoMeta) {
  // Canonical: usa explícito quando fornecido; senão fica omitido (Next infere com metadataBase + path)
  const canonicalUrl = meta.canonical
    ? meta.canonical.startsWith("http")
      ? meta.canonical
      : `${SITE_URL}${meta.canonical}`
    : undefined;

  return {
    // absolute para não duplicar com o `template` do layout raiz por locale
    title: { absolute: `${meta.title} | ${BRAND_NAME}` },
    description: meta.description,
    keywords: meta.keywords?.join(", "),
    ...(canonicalUrl ? { alternates: { canonical: canonicalUrl } } : {}),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl ?? SITE_URL,
      siteName: BRAND_NAME,
      images: meta.ogImage
        ? [{ url: meta.ogImage, width: 1200, height: 630, alt: meta.title }]
        : [],
      type: (meta.ogType || "website") as "website" | "article" | "profile",
      locale: "pt_BR",
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

interface ArticleSchemaParams {
  title: string;
  description: string;
  url: string;
  imagemUrl?: string;
  authorName?: string;
  publishedAt?: string;
  updatedAt?: string;
}

/**
 * Generator de schema Article — preparado para quando o blog publicar
 * o primeiro post real. Hoje fica dormente porque /blog/_slug-disabled
 * não renderiza. Reativar quando reabrir [slug].
 */
export function generateArticleSchema(params: ArticleSchemaParams) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: params.url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url,
    },
    author: {
      "@type": "Person",
      name: params.authorName || "Murillo Affonso",
      worksFor: {
        "@type": "TravelAgency",
        name: BRAND_NAME,
        url: SITE_URL,
      },
    },
    publisher: {
      "@type": "TravelAgency",
      name: BRAND_NAME,
      url: SITE_URL,
    },
  };

  if (params.imagemUrl) {
    schema.image = {
      "@type": "ImageObject",
      url: params.imagemUrl.startsWith("http")
        ? params.imagemUrl
        : `${SITE_URL}${params.imagemUrl}`,
    };
  }

  if (params.publishedAt) schema.datePublished = params.publishedAt;
  if (params.updatedAt) schema.dateModified = params.updatedAt;

  return schema;
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

/**
 * Constrói alternates (canonical + hreflang) locale-aware.
 *
 * Convenção: PT é o defaultLocale e fica sem prefixo (`/`); EN/ES levam prefixo.
 * O canonical retornado é a URL absoluta da página neste locale; languages
 * lista as 3 versões + x-default (= PT).
 *
 * @param locale "pt" | "en" | "es"
 * @param path caminho sem prefixo de locale, começando com "/" (ex.: "/sobre", "/blog/foo"). Use "/" para a home.
 */
export function buildLocaleAlternates(
  locale: string,
  path: string
): { canonical: string; languages: Record<string, string> } {
  const clean = path === "" || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const ptUrl = `${SITE_URL}${clean || "/"}`;
  const enUrl = `${SITE_URL}/en${clean}`;
  const esUrl = `${SITE_URL}/es${clean}`;

  const canonical =
    locale === "en" ? enUrl : locale === "es" ? esUrl : ptUrl;

  return {
    canonical,
    languages: {
      "pt-BR": ptUrl,
      en: enUrl,
      es: esUrl,
      "x-default": ptUrl,
    },
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
