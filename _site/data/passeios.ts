/**
 * Dados de passeios — FONTE: _conhecimento/passeios.md
 *
 * Regra: Dados NUNCA são inventados aqui.
 * Sempre puxa de _conhecimento/catalogo_vempassear_estruturado.md
 * Ao atualizar, manter sincronizado com vault.
 *
 * Estrutura:
 * - id: slug único para URL
 * - nome: nome exato do passeio
 * - categoria: cluster em que está (litoral-sul, urbano, etc)
 * - preco: preço exato de _conhecimento/passeios.md
 * - duracao: duração exata
 * - saida: ponto de saída/embarque
 * - descricao: descrição breve (expandida em página)
 * - rotario: array de passos (vem do catálogo)
 * - incluso: o que está incluído
 * - observacoes: restrições ou notas operacionais
 */

export interface Passeio {
  id: string;
  nome: string;
  categoria: string;
  slug: string;
  preco: string;
  duracao: string;
  saida: string;
  descricao: string;
  descricaoLonga?: string;
  rotario?: string[];
  incluso?: string[];
  observacoes?: string;
  // Imagens — padrão: /images/passeios/[slug]/
  coverImage?: string; // ex: "/images/passeios/seixas/capa.webp"
  gallery?: string[]; // ex: ["/images/passeios/seixas/galeria-01.webp", ...]
  imagemAlt?: string; // alt text para cover
  requisitos?: string[];
  faq?: Array<{ pergunta: string; resposta: string }>;
  depoimento?: {
    texto: string;
    autor: string;
    avatar?: string;
  };
}

/**
 * Array de passeios — FASE 1: 5 passeios prioritários
 *
 * ✅ DADOS REAIS: Extraído de _conhecimento/catalogo_vempassear_estruturado.md
 * Validado em: 2026-04-25
 *
 * Prioridade 1: Seixas, Areia Vermelha, Litoral Sul Clássico, Picãozinho, Pôr do Sol Jacaré
 * Total: 5 passeios em Fase 1 | 29 passeios no catálogo completo
 */
export const passeios: Passeio[] = [
  // =========================================
  // PISCINAS NATURAIS - Seixas
  // =========================================
  {
    id: "seixas",
    nome: "Piscinas Naturais do Seixas",
    categoria: "piscinas-naturais",
    slug: "seixas",
    preco: "R$ 60",
    duracao: "3h30",
    saida: "Conforme maré baixa",
    descricao:
      "No ponto mais oriental das Américas. Piscinas naturais de corais com águas cristalinas e mornas. Perfeito para mergulho e snorkel.",
    descricaoLonga:
      "Seixas é onde o sol nasce primeiro no continente. Água morna e cristalina, recifes de coral vivos, peixes coloridos. Equipamentos disponíveis: caiaque, toboágua, trampolim. Bar a bordo.",
    // Imagens (prontas para receber fotos reais)
    coverImage: "/images/passeios/seixas/capa.webp",
    gallery: [
      "/images/passeios/seixas/galeria-01.webp",
      "/images/passeios/seixas/galeria-02.webp",
    ],
    rotario: [
      "Embarque em Tambaú",
      "Navegação até o recife (25–30 min)",
      "Banho e mergulho nas piscinas naturais",
      "Snorkel e exploração dos corais",
      "Retorno a Tambaú (~3h30 total)",
    ],
    incluso: [
      "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Catamarã com estrutura (bar, banheiro, som)",
      "Acesso às piscinas naturais",
      "Caiaque e trampolim a bordo",
    ],
    observacoes:
      "Sujeito à tábua de marés (maré baixa obrigatória). Confirmar disponibilidade antes de reservar.",
    idealPara: ["Mergulho", "Snorkel", "Fotos", "Aventura marinha"],
    imagemAlt: "Piscinas naturais do Seixas com águas cristalinas",
    faq: [
      {
        pergunta: "Como é a maré em Seixas?",
        resposta:
          "Seixas depende de maré baixa. Confirme a tábua de marés no dia escolhido.",
      },
      {
        pergunta: "Posso levar criança?",
        resposta: "Sim, com acompanhante. Confirme restrições caso tenha menos de 5 anos.",
      },
      {
        pergunta: "Está incluída alimentação?",
        resposta: "Não. Bar a bordo oferece bebidas. Recomendamos almoço antes ou lanches.",
      },
    ],
    depoimento: {
      texto: "As piscinas do Seixas são de outro mundo! Água cristalina, corais lindos, e o atendimento da Vem Passear foi impecável.",
      autor: "Lucas & Amanda",
    },
  },

  // =========================================
  // LITORAL NORTE - Areia Vermelha
  // =========================================
  {
    id: "areia-vermelha",
    nome: "Areia Vermelha — Passeio de Catamarã",
    categoria: "litoral-norte",
    slug: "areia-vermelha",
    preco: "R$ 70",
    duracao: "~3h",
    saida: "Conforme tábua de marés",
    descricao:
      "Um banco de areia que surge na maré baixa com piscinas naturais de água cristalina. O lugar mais instagramável da Paraíba.",
    descricaoLonga:
      "Areia Vermelha é um fenômeno da natureza: um banco de areia que aparece apenas na maré baixa, revelando piscinas naturais com água verde-esmeralda e corais coloridos. É o local mais fotografado e procurado por turistas.",
    // Imagens (prontas para receber fotos reais)
    coverImage: "/images/passeios/areia-vermelha/capa.webp",
    gallery: [
      "/images/passeios/areia-vermelha/galeria-01.webp",
      "/images/passeios/areia-vermelha/galeria-02.webp",
    ],
    rotario: [
      "Embarque no Restaurante Lovina, Ponta de Campina",
      "Navegação até Areia Vermelha (conforme maré)",
      "Banho nas piscinas naturais",
      "Exploração do cenário natural",
      "Retorno (~3h total)",
    ],
    incluso: [
      "Catamarã com toboágua, bar a bordo, churrasqueira",
      "Acesso às piscinas naturais",
      "Estrutura de segurança e salvatagem",
      "Banheiros e som a bordo",
    ],
    observacoes:
      "Saída conforme tábua de marés. Lugar muito procurado — reserve com antecedência.",
    idealPara: ["Fotos Instagram", "Piscinas naturais", "Mergulho leve", "Famílias"],
    imagemAlt: "Banco de areia vermelha com piscinas naturais em João Pessoa",
    faq: [
      {
        pergunta: "Areia Vermelha só existe em maré baixa?",
        resposta:
          "Sim. O banco de areia surge apenas na maré baixa. Confirme a tábua de marés.",
      },
      {
        pergunta: "É perigoso o toboágua?",
        resposta:
          "Não. É seguro e supervisionado. Equipamento de salvatagem disponível.",
      },
      {
        pergunta: "Qual é o melhor horário?",
        resposta:
          "Depende da maré. Murillo recomenda de acordo com tábua de marés do dia.",
      },
    ],
    depoimento: {
      texto: "Areia Vermelha é mágico! A água é cristalina, o cenário é irreal. As melhores fotos das férias foram lá.",
      autor: "Patricia, turista de SP",
    },
  },

  // =========================================
  // LITORAL SUL - Roteiro Clássico
  // =========================================
  {
    id: "litoral-sul-classico",
    nome: "Litoral Sul — Roteiro Clássico",
    categoria: "litoral-sul",
    slug: "litoral-sul-classico",
    preco: "R$ 80",
    duracao: "8h",
    saida: "8h–9h",
    descricao:
      "Um dia inteiro pelas praias mais encantadoras do litoral sul paraibano: Gramame, Amor, Tambaba e Coqueirinho.",
    descricaoLonga:
      "O clássico absoluto do litoral sul. Você passa por 4 praias diferentes, cada uma com sua personalidade: Gramame com areia branca e águas calmas, Amor com beleza selvagem, Tambaba a única praia naturista oficial do Nordeste, e Coqueirinho para almoço.",
    // Imagens (prontas para receber fotos reais)
    coverImage: "/images/passeios/litoral-sul-classico/capa.webp",
    gallery: [
      "/images/passeios/litoral-sul-classico/galeria-01.webp",
      "/images/passeios/litoral-sul-classico/galeria-02.webp",
    ],
    rotario: [
      "Saída 8h–9h (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Praia de Gramame (areia branca, águas calmas)",
      "Praia do Amor (beleza selvagem, visual único)",
      "Praia de Tambaba (única praia naturista do NE, parada)",
      "Praia de Coqueirinho (parada longa para almoço)",
      "Retorno ~16h30",
    ],
    incluso: [
      "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Guia credenciado em todas praias",
      "Conhecimento local e histórias de cada lugar",
    ],
    observacoes: "Não inclui alimentação. Tempo para almoço em Coqueirinho.",
    idealPara: ["Praia", "Dia completo", "Paisagem", "Melhor custo-benefício"],
    imagemAlt: "Praia de Gramame no litoral sul de João Pessoa",
    faq: [
      {
        pergunta: "Qual praia é melhor para banho?",
        resposta:
          "Gramame e Coqueirinho têm águas mais calmas. Amor é mais selvagem. Tudo depende do seu gosto.",
      },
      {
        pergunta: "Preciso levar roupa de banho extra?",
        resposta:
          "Sim. São 4 praias, você vai banhar em todas. Toalha também é recomendada.",
      },
      {
        pergunta: "É possível fazer só meia-dia?",
        resposta: "Consulte Murillo. Este roteiro é pensado para dia inteiro (8h).",
      },
    ],
    depoimento: {
      texto: "O Litoral Sul é perfeito para quem quer conhecer o melhor de João Pessoa em um dia só. Cada praia é única.",
      autor: "Roberto, turista de Brasília",
    },
  },

  // =========================================
  // PISCINAS NATURAIS - Picãozinho
  // =========================================
  {
    id: "picaozinho",
    nome: "Piscinas Naturais de Picãozinho",
    categoria: "piscinas-naturais",
    slug: "picaozinho",
    preco: "R$ 60",
    duracao: "~3h",
    saida: "Conforme maré baixa",
    descricao:
      "A apenas 1.500 metros de Tambaú. Aquário natural a céu aberto com peixes de todas as cores e formações de recife.",
    descricaoLonga:
      "Picãozinho é um dos recifes mais procurados de João Pessoa. Piscinas rasas, mornas e cristalinas, ideais para snorkel. Peixes coloridos, algas, fauna marinha preservada. É como mergulhar em um aquário natural.",
    // Imagens (prontas para receber fotos reais)
    coverImage: "/images/passeios/picaozinho/capa.webp",
    gallery: ["/images/passeios/picaozinho/galeria-01.webp"],
    rotario: [
      "Embarque em Tambaú",
      "Navegação curta (1,5 km)",
      "Banho nas piscinas naturais",
      "Snorkel nos recifes",
      "Exploração da fauna marinha",
      "Retorno (~3h total)",
    ],
    incluso: [
      "Transfer até Tambaú (de Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Acesso aos recifes",
      "Catamarã com estrutura básica",
    ],
    observacoes: "Sujeito à maré baixa. Piscinas rasas e seguras, ideais para família.",
    idealPara: ["Snorkel", "Família", "Crianças", "Fotos marinhas"],
    imagemAlt: "Recife de Picãozinho com peixes coloridos em João Pessoa",
    faq: [
      {
        pergunta: "É seguro para crianças?",
        resposta:
          "Sim. Águas rasas, mornas e cristalinas. Supervisão recomendada para menores de 6 anos.",
      },
      {
        pergunta: "Vejo muitos peixes?",
        resposta:
          "Sim. Fauna marinha preservada, peixes coloridos. Aquário natural de verdade.",
      },
      {
        pergunta: "Preciso saber nadar?",
        resposta: "Não obrigatório. Água é rasa (até 2m em alguns pontos). Coletes disponíveis.",
      },
    ],
  },

  // =========================================
  // LITORAL NORTE - Pôr do Sol do Jacaré
  // =========================================
  {
    id: "por-do-sol-jacare",
    nome: "Pôr do Sol do Jacaré — Catamarã",
    categoria: "litoral-norte",
    slug: "por-do-sol-jacare",
    preco: "R$ 90",
    duracao: "~1h30",
    saida: "Tarde (conforme pôr do sol)",
    descricao:
      "Navegação pelo Rio Paraíba com apresentação ao vivo do Bolero de Ravel. Experiência única que existe há mais de 20 anos.",
    descricaoLonga:
      "O pôr do sol do Jacaré é uma parada obrigatória em João Pessoa. Navegação pelo Rio Paraíba ao som de músicas ao vivo (Bolero de Ravel ao sax), dança de forró, violino. Uma experiência única no mundo.",
    // Imagens (prontas para receber fotos reais)
    coverImage: "/images/passeios/por-do-sol-jacare/capa.webp",
    gallery: ["/images/passeios/por-do-sol-jacare/galeria-01.webp"],
    rotario: [
      "Embarque na Praia do Jacaré, Cabedelo",
      "Navegação pelo Rio Paraíba com informações históricas",
      "Apresentação de Belle Soares ao violino",
      "Dança de forró pé de serra com cangaceiros",
      "Jurandy do Sax tocando Bolero de Ravel ao vivo",
      "Retorno ao entardecer",
    ],
    incluso: [
      "Catamarã com estrutura (bar a bordo, banheiro, som)",
      "Apresentações musicais (Bolero de Ravel, forró)",
      "Informações históricas do Rio Paraíba",
    ],
    observacoes:
      "Saída diariamente à tarde. Experiência única que funciona há mais de 20 anos.",
    idealPara: ["Romance", "Pôr do sol", "Música ao vivo", "Experiência única"],
    imagemAlt: "Pôr do sol do Jacaré com Bolero de Ravel ao vivo em João Pessoa",
    faq: [
      {
        pergunta: "O Bolero de Ravel toca sempre?",
        resposta:
          "Sim. Jurandy do Sax toca diariamente. É a marca registrada do passeio.",
      },
      {
        pergunta: "Que horas sai o catamarã?",
        resposta:
          "Saída conforme o pôr do sol. Consulte Murillo para horário exato (varia por estação).",
      },
      {
        pergunta: "É romântico?",
        resposta:
          "Muito! Ideal para casais. Muitos casamentos começam aqui (risos). Leve sua namorada/o!",
      },
    ],
    depoimento: {
      texto: "O pôr do sol do Jacaré é mágico. A música, o Rio, o atardecer... foi a noite mais especial da nossa viagem!",
      autor: "Marina & João, casal",
    },
  },
];

/**
 * Funções auxiliares para buscar dados
 */

export function getPasseioBySlug(slug: string): Passeio | undefined {
  return passeios.find((p) => p.slug === slug);
}

export function getPasseiosByCategoria(categoria: string): Passeio[] {
  return passeios.filter((p) => p.categoria === categoria);
}

export function getCategorias(): string[] {
  const cats = new Set(passeios.map((p) => p.categoria));
  return Array.from(cats);
}

export function getPasseiosByIds(ids: string[]): Passeio[] {
  return passeios.filter((p) => ids.includes(p.id));
}
