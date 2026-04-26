/**
 * Dados de passeios — FONTE: _conhecimento/passeios.md
 *
 * Regra: Dados NUNCA são inventados aqui.
 * Sempre puxa de _conhecimento/catalogo_vempassear_estruturado.md
 * Ao atualizar, manter sincronizado com vault.
 */

export interface RoteiroStep {
  emoji: string;
  titulo: string;
  texto: string;
}

export interface Avaliacao {
  texto: string;
  autor: string;
  cidade?: string;
  data: string;
}

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
  // SEO
  h1?: string;
  metaDescription?: string;
  // Hero
  subtituloHero?: string;
  // Conteúdo
  lead?: string;
  descricaoSensorial?: string;
  rotario?: string[]; // typo do codebase — não corrigir sem testar
  roteiroNarrativo?: RoteiroStep[];
  incluso?: string[];
  naoIncluso?: string[];
  observacoes?: string;
  alertaMare?: string;
  nomeCurto?: string;
  idealPara?: string[];
  // Imagens
  coverImage?: string;
  gallery?: string[];
  imagemAlt?: string;
  // FAQ
  requisitos?: string[];
  faq?: Array<{ pergunta: string; resposta: string }>;
  // Prova social
  depoimento?: {
    texto: string;
    autor: string;
    avatar?: string;
  };
  // Avaliações Google Maps (condicional — `temAvaliacoes`)
  temAvaliacoes?: boolean;
  avaliacoes?: Avaliacao[];
  googleMapsUrl?: string;
  // Experiência 360° (condicional — `tem360`)
  tem360?: boolean;
  url360?: string;
  // Informações práticas
  informacoesPraticas?: {
    oqueLevar?: string[];
    pontoEncontro?: string;
    pontoEncontroUrl?: string;
    horario?: string;
  };
}

/**
 * Array de passeios — FASE 1: 5 passeios prioritários
 *
 * ✅ DADOS REAIS: Extraído de _conhecimento/catalogo_vempassear_estruturado.md
 * Validado em: 2026-04-26
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
    duracao: "~3h30",
    saida: "Conforme tábua de marés",
    // SEO (04-seo-local-turismo.md)
    h1: "Piscinas Naturais do Seixas, João Pessoa — Snorkel em Água Cristalina",
    metaDescription:
      "Conheça as piscinas naturais de Seixas em João Pessoa. Maré baixa, corais e água cristalina. R$ 60 por pessoa. Cadastur ativo. Reserve pelo WhatsApp!",
    // Conteúdo hero
    subtituloHero:
      "No ponto mais oriental das Américas, a maré baixa revela piscinas naturais de coral com água tão clara que parece aquário. Com a gente, você só aproveita.",
    descricao:
      "No ponto mais oriental das Américas. Piscinas naturais de corais com águas cristalinas e mornas. Perfeito para mergulho e snorkel.",
    // Lead (Bloco 5 — copy 02a)
    lead: "Chegou em João Pessoa e quer ver as piscinas naturais de verdade — não em foto?\n\nSeixas fica no ponto mais a leste das Américas. Quando a maré baixa, corais formam piscinas naturais de água morna e cristalina. Você flutua, vê peixes coloridos passando do lado, e fica achando que está num aquário — mas é a natureza mesmo.\n\nA gente parte de Tambaú em catamarã, checa a maré antes, e cuida de tudo. Você só aproveita.",
    // Descrição sensorial (Bloco 6 — copy 02a)
    descricaoSensorial:
      "Você embarca em Tambaú e em cerca de 15 minutos de catamarã já está sobre as piscinas.\n\nA água é morna — mesmo em inverno — e tão limpa que você enxerga o fundo com facilidade. Peixes coloridos nadam perto, sem pressa, como se não ligassem pra você estar ali.\n\nDá pra flutuar de cara para baixo só olhando o fundo de coral. Dá pra mergulhar (tem snorkel e máscara opcionais). Dá pra nadar, fotografar, ou só ficar parado deixando a maré te embalar.\n\nNo catamarã tem toboágua, caiaque e trampolim para quem quiser agitar. Bar a bordo para quando der sede. A gente vai ficando enquanto a maré deixar — é em torno de 3h30 no total, contando embarque e retorno.",
    // Roteiro narrativo (Bloco 7 — copy 02a)
    roteiroNarrativo: [
      {
        emoji: "🚢",
        titulo: "Embarque em Tambaú",
        texto:
          "Ponto de encontro na Praia de Tambaú, próximo ao Hotel Tambaú. A localização exata é enviada no voucher após a confirmação da reserva. Horário conforme tábua de marés do dia — a gente confirma com você no WhatsApp na véspera.",
      },
      {
        emoji: "🌊",
        titulo: "Travessia de catamarã",
        texto:
          "Cerca de 15 minutos de barco. Você já vai vendo o mar de João Pessoa de outro ângulo — e o litoral que, de longe, parece uma linha reta, de perto vira falésia, coral e história.",
      },
      {
        emoji: "🐠",
        titulo: "Nas piscinas naturais de Seixas",
        texto:
          "A maré baixou. As piscinas estão abertas. Você entra na água e o coral está ali — vivo, colorido, repleto de vida marinha. Fique o tempo que quiser, explore, fotografe.",
      },
      {
        emoji: "⚡",
        titulo: "Catamarã é sua base",
        texto:
          "Enquanto estiver nas piscinas, o catamarã está ancorado. Toboágua, trampolim e caiaque disponíveis. Bar a bordo para água e bebidas. Banheiro a bordo.",
      },
      {
        emoji: "🚢",
        titulo: "Retorno para Tambaú",
        texto:
          "Quando a maré começa a encher e as piscinas ficam fundas demais, a gente retorna. Total: ~3h30 desde o embarque.",
      },
    ],
    // O que está incluso (Bloco 8 — copy 02a)
    incluso: [
      "Passeio compartilhado em catamarã",
      "Toboágua, caiaque e trampolim (uso livre no catamarã)",
      "Bar e cozinha a bordo",
      "Banheiro a bordo",
      "Som com microfone",
      "Orientação do guia local (Murillo ou equipe)",
    ],
    naoIncluso: [
      "Alimentação (leve lanche e água ou compre a bordo)",
      "Snorkel e máscara (opcional — consulte no WhatsApp)",
      "Fotógrafo subaquático (opcional — consulte no WhatsApp)",
      "Mergulho com cilindro (opcional — consulte no WhatsApp)",
      "Transfer até Tambaú (consultar disponibilidade)",
    ],
    observacoes:
      "Sujeito à tábua de marés (maré baixa obrigatória). Confirmar disponibilidade antes de reservar.",
    alertaMare:
      "As piscinas naturais só aparecem quando a maré está baixa. Antes de confirmar sua data, a gente consulta a tábua de marés e te avisa o melhor horário. Você não precisa se preocupar com isso. Esse é o nosso trabalho.",
    nomeCurto: "Seixas",
    idealPara: ["Mergulho", "Snorkel", "Fotos", "Aventura marinha"],
    // Imagens — placeholders SVG (fotos reais substituem conforme 05c-mapa-imagens.md)
    coverImage: "/images/passeios/seixas/hero-01.svg",
    gallery: [
      "/images/passeios/seixas/galeria-01.svg",
      "/images/passeios/seixas/galeria-02.svg",
      "/images/passeios/seixas/galeria-03.svg",
      "/images/passeios/seixas/galeria-04.svg",
      "/images/passeios/seixas/galeria-05.svg",
      "/images/passeios/seixas/galeria-06.svg",
    ],
    imagemAlt:
      "Piscinas naturais de Seixas com coral e água cristalina durante maré baixa em João Pessoa",
    // FAQ — 7 perguntas (Bloco 9 — copy 02a + decisões-estrategicas.md)
    faq: [
      {
        pergunta: "Nunca mergulhei na vida. Posso fazer este passeio?",
        resposta:
          "Sim. As piscinas naturais de Seixas são rasas — você fica de pé em boa parte delas. Não é necessário saber nadar ou mergulhar. Se quiser usar snorkel e máscara, a gente orienta na hora. É mais fácil do que parece.",
      },
      {
        pergunta:
          "O passeio realmente depende de maré baixa? E se a maré não estiver boa?",
        resposta:
          "Sim — e é exatamente isso que torna o passeio especial. Piscinas naturais só aparecem com maré baixa. Antes de confirmar sua data, a gente consulta a tábua de marés de João Pessoa. Se o dia que você quer não tiver maré favorável, avisamos antes e sugerimos outra data — sem custo.",
      },
      {
        pergunta: "O que exatamente está incluso nos R$ 60?",
        resposta:
          "O valor cobre o passeio compartilhado em catamarã, com uso de toboágua, caiaque, trampolim, bar e banheiro a bordo. Snorkel, máscara, fotógrafo subaquático e mergulho com cilindro são opcionais pagos à parte. Alimentação não está inclusa.",
      },
      {
        pergunta: "De onde a gente sai? E como chego até lá?",
        resposta:
          "O embarque é na Praia de Tambaú, próximo ao Hotel Tambaú, em João Pessoa. A localização exata é enviada no voucher após a confirmação da reserva. Se precisar de transfer de hotel até Tambaú, consulte a gente no WhatsApp — verificamos disponibilidade.",
      },
      {
        pergunta: "Quanto tempo dura o passeio no total?",
        resposta:
          "Em torno de 3h30, contando embarque, travessia de ida, tempo nas piscinas e retorno. O horário de saída varia conforme a tábua de marés — a gente confirma com você na véspera.",
      },
      {
        pergunta: "Posso levar crianças?",
        resposta:
          "Sim! Não há idade mínima para o passeio. Crianças devem estar acompanhadas por um responsável durante toda a atividade.",
      },
      {
        pergunta: "Qual é a política de cancelamento?",
        resposta:
          "Em caso de condições climáticas ou maré desfavorável, remarcamos sem custo. Para cancelamentos pelo cliente, consulte nossa política completa no WhatsApp.",
      },
    ],
    // Depoimento — aguarda texto real de Murillo (decisoes-estrategicas.md #24)
    depoimento: {
      texto:
        "[CONFIRMAR COM MURILLO: depoimento real de cliente sobre o passeio de Seixas]",
      autor: "[CONFIRMAR: nome e cidade do cliente]",
    },
    // Avaliações Google Maps — aguarda Murillo (#31 decisoes-estrategicas.md)
    temAvaliacoes: false,
    avaliacoes: [],
    googleMapsUrl: "https://maps.app.goo.gl/Q1Q8BNC5K1k9tiyX7",
    // Experiência 360° — aguarda link de Murillo (#32 decisoes-estrategicas.md)
    tem360: false,
    url360: undefined,
    // Informações práticas (Bloco 11 — copy 02a)
    informacoesPraticas: {
      oqueLevar: [
        "Roupa de banho (já venha com ela)",
        "Protetor solar biodegradável (bom para os corais)",
        "Toalha",
        "Água ou compre a bordo",
      ],
      pontoEncontro:
        "Praia de Tambaú, próximo ao Hotel Tambaú — João Pessoa, PB. A localização exata é enviada no voucher após a confirmação da reserva.",
      horario:
        "Varia conforme a tábua de marés. Confirmamos com você no WhatsApp na véspera.",
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
      texto:
        "Areia Vermelha é mágico! A água é cristalina, o cenário é irreal. As melhores fotos das férias foram lá.",
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
      texto:
        "O Litoral Sul é perfeito para quem quer conhecer o melhor de João Pessoa em um dia só. Cada praia é única.",
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
        resposta:
          "Não obrigatório. Água é rasa (até 2m em alguns pontos). Coletes disponíveis.",
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
      texto:
        "O pôr do sol do Jacaré é mágico. A música, o Rio, o atardecer... foi a noite mais especial da nossa viagem!",
      autor: "Marina & João, casal",
    },
  },
];

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
