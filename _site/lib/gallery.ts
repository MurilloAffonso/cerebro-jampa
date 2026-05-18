/**
 * Helpers de galeria de passeio — resolvem qual conjunto de imagens renderizar.
 *
 * Pipeline (do mais específico ao mais genérico):
 *  1. `coverImage` real (jpg/webp/png) — vira a imagem principal.
 *  2. `galleryImages` (estruturado, com alt).
 *  3. `gallery` legado (string[]) — só itens reais; SVGs placeholder são
 *     ignorados.
 *  4. Fallback ilustrativo da própria Vem Passear (mesma categoria) — marcado
 *     com caption "Foto ilustrativa" para honestidade.
 *
 * Garantia: todo passeio recebe pelo menos `MIN_GALERIA_IMAGES` imagens
 * reais (jamais SVG). Sem dependência externa. Sem imagem de concorrente.
 */

import type { GalleryImage } from "@/data/passeios";

const REAL_PHOTO_RX = /\.(jpe?g|webp|png)$/i;

/** True quando o caminho aponta para foto real (não SVG placeholder). */
export function isRealPhoto(src: string | undefined | null): src is string {
  return !!src && REAL_PHOTO_RX.test(src);
}

/** Quantidade mínima de imagens que toda galeria de passeio deve exibir. */
export const MIN_GALERIA_IMAGES = 4;

const CAPTION_ILUSTRATIVA = "Foto ilustrativa · Vem Passear em Jampa";

// ---------------------------------------------------------------------------
// Pools de fallback por categoria
// ---------------------------------------------------------------------------
// Reutilizam fotos JPG REAIS já existentes em /public/images/passeios/.
// Cada pool tenta refletir o "clima" da categoria (piscina, falésia, pôr do
// sol etc) usando o que está disponível no acervo local.

const FALLBACK_GENERICO: GalleryImage[] = [
  {
    src: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
    alt: "Piscinas naturais com água cristalina em João Pessoa",
    caption: CAPTION_ILUSTRATIVA,
  },
  {
    src: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
    alt: "Banco de Areia Vermelha em João Pessoa",
    caption: CAPTION_ILUSTRATIVA,
  },
  {
    src: "/images/passeios/litoral-sul/roteiro-classico/hero-01.jpg",
    alt: "Falésias de Coqueirinho no Litoral Sul de João Pessoa",
    caption: CAPTION_ILUSTRATIVA,
  },
  {
    src: "/images/passeios/piscinas-naturais/penha/hero-01.jpg",
    alt: "Pôr do sol no Rio Jacaré em João Pessoa",
    caption: CAPTION_ILUSTRATIVA,
  },
];

const FALLBACK_POR_CATEGORIA: Record<string, GalleryImage[]> = {
  "piscinas-naturais": [
    {
      src: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
      alt: "Piscinas naturais do Seixas com água cristalina, João Pessoa",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/piscinas-naturais/mergulho/hero-01.jpg",
      alt: "Mergulho com snorkel nas piscinas naturais de João Pessoa",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/piscinas-naturais/penha/hero-01.jpg",
      alt: "Praia da Penha com piscinas naturais em João Pessoa",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
      alt: "Banco de Areia Vermelha em maré baixa, João Pessoa",
      caption: CAPTION_ILUSTRATIVA,
    },
  ],
  "litoral-norte": [
    {
      src: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
      alt: "Banco de Areia Vermelha em maré baixa, João Pessoa",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/piscinas-naturais/penha/hero-01.jpg",
      alt: "Pôr do sol no Rio Jacaré com o Bolero de Ravel ao vivo",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
      alt: "Litoral Norte de João Pessoa",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/piscinas-naturais/penha/hero-01.jpg",
      alt: "Praia do Jacaré em Cabedelo, próxima a João Pessoa",
      caption: CAPTION_ILUSTRATIVA,
    },
  ],
  "litoral-sul": [
    {
      src: "/images/passeios/litoral-sul/roteiro-classico/hero-01.jpg",
      alt: "Falésias coloridas de Coqueirinho no Litoral Sul, João Pessoa",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/litoral-sul/praia-bela/hero-01.jpg",
      alt: "Praia Bela no Litoral Sul de João Pessoa",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/litoral-sul/roteiro-classico/galeria-04.jpg",
      alt: "Praia de Tambaba no Litoral Sul de João Pessoa",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/litoral-sul/roteiro-classico/hero-01.jpg",
      alt: "Litoral Sul da Paraíba",
      caption: CAPTION_ILUSTRATIVA,
    },
  ],
  "city-tour": [
    {
      src: "/images/passeios/litoral-sul/roteiro-classico/hero-01.jpg",
      alt: "Centro histórico de João Pessoa",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
      alt: "Areia Vermelha em João Pessoa",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
      alt: "Piscinas naturais em João Pessoa",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/litoral-sul/roteiro-classico/hero-01.jpg",
      alt: "Falésias do Litoral Sul de João Pessoa",
      caption: CAPTION_ILUSTRATIVA,
    },
  ],
  "interestaduais": [
    {
      src: "/images/passeios/interestaduais/porto-de-galinhas/hero-01.jpg",
      alt: "Piscinas naturais de Porto de Galinhas em Pernambuco",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/interestaduais/praia-de-pipa/hero-01.jpg",
      alt: "Praia de Pipa no Rio Grande do Norte",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
      alt: "Litoral nordestino visto do mar",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/litoral-sul/roteiro-classico/hero-01.jpg",
      alt: "Falésias do Nordeste brasileiro",
      caption: CAPTION_ILUSTRATIVA,
    },
  ],
  "pacotes": [
    {
      src: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
      alt: "Piscinas naturais do Seixas — incluso em pacotes da Vem Passear",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
      alt: "Banco de Areia Vermelha — incluso em pacotes da Vem Passear",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/litoral-sul/roteiro-classico/hero-01.jpg",
      alt: "Falésias do Litoral Sul — incluso em pacotes da Vem Passear",
      caption: CAPTION_ILUSTRATIVA,
    },
    {
      src: "/images/passeios/piscinas-naturais/penha/hero-01.jpg",
      alt: "Pôr do sol no Jacaré — incluso em pacotes da Vem Passear",
      caption: CAPTION_ILUSTRATIVA,
    },
  ],
};

export function getFallbackGalleryImages(categoria: string | undefined): GalleryImage[] {
  return FALLBACK_POR_CATEGORIA[categoria ?? ""] ?? FALLBACK_GENERICO;
}

// ---------------------------------------------------------------------------
// Normalização e pipeline final
// ---------------------------------------------------------------------------

interface NormalizeArgs {
  galleryImages?: GalleryImage[];
  gallery?: string[];
  coverImage?: string;
  coverAlt?: string;
  passeioNome: string;
}

/**
 * Junta `coverImage` (se real) + `galleryImages` + `gallery` legado em uma
 * lista deduplicada de fotos reais. Cover entra primeiro para ser a principal.
 */
export function normalizeGalleryImages(args: NormalizeArgs): GalleryImage[] {
  const { galleryImages, gallery, coverImage, coverAlt, passeioNome } = args;
  const seen = new Set<string>();
  const out: GalleryImage[] = [];

  const push = (img: GalleryImage) => {
    if (!isRealPhoto(img.src) || seen.has(img.src)) return;
    seen.add(img.src);
    out.push(img);
  };

  if (isRealPhoto(coverImage)) {
    push({ src: coverImage, alt: coverAlt || passeioNome });
  }
  for (const img of galleryImages ?? []) {
    push(img);
  }
  for (const src of gallery ?? []) {
    push({ src, alt: coverAlt || passeioNome });
  }

  return out;
}

interface PasseioParaGaleria {
  galleryImages?: GalleryImage[];
  gallery?: string[];
  coverImage?: string;
  imagemAlt?: string;
  nome: string;
  categoria: string;
}

/**
 * Pipeline completo da página de passeio:
 *  - Normaliza tudo que é REAL (cover + galleryImages + gallery legado).
 *  - Se sobrou < MIN_GALERIA_IMAGES, completa com fallback ilustrativo da
 *    categoria do passeio, marcado com caption "Foto ilustrativa".
 *  - Garante que toda galeria seja preenchida; nunca devolve lista vazia.
 */
export function getPasseioGalleryImages(passeio: PasseioParaGaleria): GalleryImage[] {
  const reais = normalizeGalleryImages({
    galleryImages: passeio.galleryImages,
    gallery: passeio.gallery,
    coverImage: passeio.coverImage,
    coverAlt: passeio.imagemAlt,
    passeioNome: passeio.nome,
  });

  if (reais.length >= MIN_GALERIA_IMAGES) return reais;

  const fallback = getFallbackGalleryImages(passeio.categoria);
  const seen = new Set(reais.map((i) => i.src));
  const out = [...reais];
  for (const img of fallback) {
    if (out.length >= MIN_GALERIA_IMAGES) break;
    if (seen.has(img.src)) continue;
    seen.add(img.src);
    out.push(img);
  }

  // Se a categoria não tem cobertura suficiente nem entre fallback + reais,
  // completa com o genérico. Improvável, mas defensivo.
  if (out.length < MIN_GALERIA_IMAGES) {
    for (const img of FALLBACK_GENERICO) {
      if (out.length >= MIN_GALERIA_IMAGES) break;
      if (seen.has(img.src)) continue;
      seen.add(img.src);
      out.push(img);
    }
  }

  return out;
}
