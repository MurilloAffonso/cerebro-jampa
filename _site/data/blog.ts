/**
 * Blog — modelo de dados
 *
 * Arquitetura:
 *   - Posts são definidos aqui em estrutura tipada
 *   - status = "draft" → não aparece no /blog público nem no sitemap
 *   - status = "published" → aparece em /blog, /blog/[slug] e sitemap
 *   - relatedPasseios → IDs de passeios em data/passeios.ts (links internos automáticos)
 *
 * Regra ouro:
 *   Nunca inventar fato (preço, horário, depoimento, dado específico).
 *   Posts draft existem para reservar URL e estrutura, NÃO conteúdo final.
 *   Conteúdo só vai para "published" após revisão de Murillo.
 */

export type BlogStatus = "draft" | "published";

export type BlogCluster =
  | "guia-cidade"
  | "piscinas-naturais"
  | "litoral-sul"
  | "litoral-norte"
  | "roteiros"
  | "mares-natureza"
  | "logistica"
  | "familia"
  | "privativo";

export interface BlogSection {
  heading: string;
  body: string;
}

export interface BlogFAQ {
  pergunta: string;
  resposta: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  cluster: BlogCluster;
  status: BlogStatus;
  updatedAt: string;
  author: string;
  readingTime: number;
  keywords: string[];
  relatedPasseios: string[];
  faq: BlogFAQ[];
  sections: BlogSection[];
}

const AUTHOR = "Affonso Murillo Soledade de Oliveira";

const DRAFT_PLACEHOLDER_SECTIONS: BlogSection[] = [
  {
    heading: "Conteúdo em preparação",
    body: "Este guia está sendo escrito por Murillo com base em experiência real de campo. Volte em breve ou fale com Murillo no WhatsApp para receber a orientação direta.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "o-que-fazer-em-joao-pessoa",
    title: "O Que Fazer em João Pessoa: guia completo do guia local",
    description:
      "Roteiro completo de João Pessoa por quem vive aqui: praias, piscinas naturais, city tour e dicas práticas.",
    category: "Guia da Cidade",
    cluster: "guia-cidade",
    status: "draft",
    updatedAt: "2026-05-02",
    author: AUTHOR,
    readingTime: 12,
    keywords: ["o que fazer em João Pessoa", "turismo JP", "guia João Pessoa"],
    relatedPasseios: ["seixas", "areia-vermelha-catamara", "litoral-sul-classico"],
    faq: [],
    sections: DRAFT_PLACEHOLDER_SECTIONS,
  },
  {
    slug: "piscinas-naturais-joao-pessoa-guia",
    title: "Piscinas Naturais em João Pessoa: guia completo",
    description:
      "Seixas, Picãozinho, Areia Vermelha e Penha: como funcionam, melhor maré e o que esperar.",
    category: "Piscinas Naturais",
    cluster: "piscinas-naturais",
    status: "draft",
    updatedAt: "2026-05-02",
    author: AUTHOR,
    readingTime: 10,
    keywords: [
      "piscinas naturais João Pessoa",
      "piscinas naturais Paraíba",
      "Seixas",
      "Picãozinho",
    ],
    relatedPasseios: ["seixas", "picaozinho", "penha", "areia-vermelha-catamara"],
    faq: [],
    sections: DRAFT_PLACEHOLDER_SECTIONS,
  },
  {
    slug: "passeio-praia-do-seixas",
    title: "Passeio para a Praia do Seixas: piscinas naturais e ponto mais oriental",
    description:
      "Como funciona o passeio para a Praia do Seixas, melhor horário pela maré e o que levar.",
    category: "Piscinas Naturais",
    cluster: "piscinas-naturais",
    status: "draft",
    updatedAt: "2026-05-02",
    author: AUTHOR,
    readingTime: 8,
    keywords: ["Praia do Seixas", "passeio Seixas", "piscinas naturais Seixas"],
    relatedPasseios: ["seixas"],
    faq: [],
    sections: DRAFT_PLACEHOLDER_SECTIONS,
  },
  {
    slug: "areia-vermelha-vale-a-pena",
    title: "Areia Vermelha vale a pena? O que esperar do passeio de catamarã",
    description:
      "A ilha que aparece e desaparece com a maré: como é o passeio, melhor maré e o que levar.",
    category: "Litoral Norte",
    cluster: "litoral-norte",
    status: "draft",
    updatedAt: "2026-05-02",
    author: AUTHOR,
    readingTime: 8,
    keywords: ["Areia Vermelha", "catamarã João Pessoa", "passeio Areia Vermelha"],
    relatedPasseios: ["areia-vermelha-catamara", "combo-litoral-norte-areia-vermelha"],
    faq: [],
    sections: DRAFT_PLACEHOLDER_SECTIONS,
  },
  {
    slug: "roteiro-3-dias-joao-pessoa",
    title: "Roteiro de 3 Dias em João Pessoa: o que ver, fazer e comer",
    description:
      "Roteiro completo de 3 dias em João Pessoa: do litoral norte ao litoral sul, com dicas práticas.",
    category: "Roteiros",
    cluster: "roteiros",
    status: "draft",
    updatedAt: "2026-05-02",
    author: AUTHOR,
    readingTime: 12,
    keywords: [
      "roteiro João Pessoa 3 dias",
      "o que fazer em João Pessoa em 3 dias",
      "roteiro Paraíba",
    ],
    relatedPasseios: ["pacote-3-dias-completo", "pacote-3-dias-basico", "pacote-super-economico"],
    faq: [],
    sections: DRAFT_PLACEHOLDER_SECTIONS,
  },
  {
    slug: "litoral-sul-joao-pessoa-o-que-fazer",
    title: "Litoral Sul de João Pessoa: praias, trilhas e quadriciclo",
    description:
      "Coqueirinho, Tabatinga, Praia Bela e Tambaba: o que ver no litoral sul de João Pessoa.",
    category: "Litoral Sul",
    cluster: "litoral-sul",
    status: "draft",
    updatedAt: "2026-05-02",
    author: AUTHOR,
    readingTime: 10,
    keywords: [
      "litoral sul João Pessoa",
      "Coqueirinho",
      "Tambaba",
      "Praia Bela",
    ],
    relatedPasseios: [
      "litoral-sul-classico",
      "litoral-sul-praia-bela",
      "quadriciclo-coqueirinho",
    ],
    faq: [],
    sections: DRAFT_PLACEHOLDER_SECTIONS,
  },
  {
    slug: "litoral-norte-joao-pessoa-o-que-fazer",
    title: "Litoral Norte de João Pessoa: Cabedelo, Jacaré e Areia Vermelha",
    description:
      "Pôr do sol no Jacaré, Areia Vermelha e a história colonial do litoral norte.",
    category: "Litoral Norte",
    cluster: "litoral-norte",
    status: "draft",
    updatedAt: "2026-05-02",
    author: AUTHOR,
    readingTime: 10,
    keywords: [
      "litoral norte João Pessoa",
      "Cabedelo",
      "pôr do sol Jacaré",
      "Areia Vermelha",
    ],
    relatedPasseios: [
      "litoral-norte-classico",
      "areia-vermelha-catamara",
      "por-do-sol-jacare",
    ],
    faq: [],
    sections: DRAFT_PLACEHOLDER_SECTIONS,
  },
  {
    slug: "tabua-de-mares-piscinas-naturais",
    title: "Tábua de Marés para Piscinas Naturais em João Pessoa",
    description:
      "Como ler a tábua de marés e escolher o melhor dia para visitar Seixas, Picãozinho e Areia Vermelha.",
    category: "Marés e Natureza",
    cluster: "mares-natureza",
    status: "draft",
    updatedAt: "2026-05-02",
    author: AUTHOR,
    readingTime: 7,
    keywords: [
      "tábua de marés João Pessoa",
      "maré seca piscinas naturais",
      "melhor dia Seixas",
    ],
    relatedPasseios: ["seixas", "picaozinho", "areia-vermelha-catamara"],
    faq: [],
    sections: DRAFT_PLACEHOLDER_SECTIONS,
  },
  {
    slug: "joao-pessoa-com-criancas",
    title: "João Pessoa com Crianças: passeios seguros e dicas práticas",
    description:
      "Quais passeios em João Pessoa funcionam bem com crianças, segurança e o que levar.",
    category: "Família",
    cluster: "familia",
    status: "draft",
    updatedAt: "2026-05-02",
    author: AUTHOR,
    readingTime: 9,
    keywords: [
      "João Pessoa com crianças",
      "passeios crianças JP",
      "viagem família João Pessoa",
    ],
    relatedPasseios: ["seixas", "areia-vermelha-catamara", "city-tour-jampa"],
    faq: [],
    sections: DRAFT_PLACEHOLDER_SECTIONS,
  },
  {
    slug: "transfer-aeroporto-joao-pessoa",
    title: "Transfer do Aeroporto de João Pessoa: como funciona",
    description:
      "Opções de transfer do aeroporto Castro Pinto para João Pessoa, com atendimento 24h.",
    category: "Logística",
    cluster: "logistica",
    status: "draft",
    updatedAt: "2026-05-02",
    author: AUTHOR,
    readingTime: 6,
    keywords: [
      "transfer aeroporto João Pessoa",
      "Castro Pinto transfer",
      "como sair do aeroporto JP",
    ],
    relatedPasseios: [],
    faq: [],
    sections: DRAFT_PLACEHOLDER_SECTIONS,
  },
];

export const blogClusters: Record<BlogCluster, { nome: string; descricao: string }> = {
  "guia-cidade": {
    nome: "Guia da Cidade",
    descricao: "Visão geral de João Pessoa para quem está chegando.",
  },
  "piscinas-naturais": {
    nome: "Piscinas Naturais",
    descricao: "Recifes, marés e mergulho leve nas piscinas naturais da Paraíba.",
  },
  "litoral-sul": {
    nome: "Litoral Sul",
    descricao: "Praias, trilhas e quadriciclo no litoral sul de João Pessoa.",
  },
  "litoral-norte": {
    nome: "Litoral Norte",
    descricao: "Cabedelo, pôr do sol no Jacaré e Areia Vermelha.",
  },
  roteiros: {
    nome: "Roteiros",
    descricao: "Roteiros prontos de 1 a 5 dias para aproveitar João Pessoa.",
  },
  "mares-natureza": {
    nome: "Marés e Natureza",
    descricao: "Tábuas de maré, melhor época e clima.",
  },
  logistica: {
    nome: "Logística",
    descricao: "Transfer, deslocamentos e dicas práticas de chegada.",
  },
  familia: {
    nome: "Família e Crianças",
    descricao: "Passeios seguros e adaptados para grupos com crianças.",
  },
  privativo: {
    nome: "Passeio Privativo",
    descricao: "Roteiros exclusivos para casais, famílias e grupos fechados.",
  },
};
