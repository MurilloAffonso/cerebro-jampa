/**
 * Dados de passeios — FONTE: _conhecimento/base-operacional-comercial.md
 *
 * Regra: Dados NUNCA são inventados aqui.
 * Campos com "[CONSULTAR]" = dado ausente no vault — não exibir sem confirmação de Murillo.
 * Atualizado em: 2026-04-30 (ISSUE-03 — 22 passeios Fase 1)
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
  preco: string;         // "[CONSULTAR]" quando não confirmado
  duracao: string;       // "[CONSULTAR]" quando não confirmado
  saida: string;         // "[CONSULTAR]" quando não confirmado
  descricao: string;
  descricaoLonga?: string;
  prioritario?: boolean; // true nos 3 passeios prioritários da Fase 1
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
  // Tábua de marés
  dependeDeMare?: boolean;
  // Informações práticas
  informacoesPraticas?: {
    oqueLevar?: string[];
    pontoEncontro?: string;
    pontoEncontroUrl?: string;
    horario?: string;
  };
}

/**
 * Array de passeios — FASE 1: 22 passeios
 *
 * ✅ DADOS REAIS: Extraído de _conhecimento/base-operacional-comercial.md
 * Campos [CONSULTAR] = não confirmados — ISSUE-05 trata exibição
 * Validado em: 2026-04-30
 */
export const passeios: Passeio[] = [

  // =========================================================================
  // PACOTES (3)
  // =========================================================================

  {
    id: "pacote-3-dias-completo",
    nome: "Pacote 3 Dias Completo",
    categoria: "pacotes",
    slug: "3-dias-completo",
    preco: "Individual: R$ 400 / Dupla: R$ 700",
    duracao: "3 dias",
    saida: "8h–9h",
    descricao:
      "3 dias completos: praias do sul com quadriciclo, história e pôr do sol no norte, mergulho nas piscinas do Seixas.",
    incluso: [
      "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Condutores credenciados em todos os dias",
      "Quadriciclo (1 máquina)",
      "Catamarã Pôr do Sol do Jacaré",
    ],
    naoIncluso: ["Alimentação"],
    observacoes:
      "Quadriciclo: mínimo 7 anos. Seixas: sujeito à maré baixa. Valor privativo: [CONSULTAR].",
    idealPara: [
      "Turistas com 3+ dias em João Pessoa",
      "Quem quer o máximo da experiência",
      "Famílias e casais",
    ],
    coverImage: "/images/passeios/litoral-norte/areia-vermelha/hero-01.jpg",
    imagemAlt: "Colagem dos melhores passeios em João Pessoa em 3 dias",
    faq: [
      {
        pergunta: "O que está incluso no Pacote 3 Dias Completo?",
        resposta:
          "Transfer, acompanhamento com condutores credenciados nos 3 dias, quadriciclo (1 máquina) no Litoral Sul e catamarã no Pôr do Sol do Jacaré. Alimentação não está inclusa.",
      },
      {
        pergunta: "Criança paga?",
        resposta:
          "Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 320. A partir de 12 anos: valor adulto.",
      },
      {
        pergunta: "Posso fazer o pacote em modo privativo?",
        resposta:
          "Sim. Valor privativo sob consulta — envie mensagem no WhatsApp.",
      },
    ],
  },

  {
    id: "pacote-3-dias-basico",
    nome: "Pacote 3 Dias Básico",
    categoria: "pacotes",
    slug: "3-dias-basico",
    preco: "Individual: R$ 280 / Dupla: R$ 430",
    duracao: "3 dias",
    saida: "8h–9h",
    descricao:
      "O melhor de João Pessoa em 3 dias com o melhor custo-benefício da cidade.",
    incluso: [
      "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Condutores credenciados nos 3 dias",
    ],
    naoIncluso: [
      "Alimentação",
      "Quadriciclo (opcional à parte)",
      "Catamarã Pôr do Sol (opcional — R$ 90)",
    ],
    observacoes: "Seixas: sujeito à maré baixa. Catamarã Pôr do Sol pode ser adicionado por R$ 90.",
    idealPara: [
      "Turistas com 3 dias e orçamento equilibrado",
      "Grupos",
      "Primeiro contato com João Pessoa",
    ],
    coverImage: "/images/passeios/litoral-sul/coqueirinho/hero-01.jpg",
    imagemAlt: "Passeios em João Pessoa — Pacote 3 Dias com custo-benefício",
    faq: [
      {
        pergunta: "Qual a diferença entre o Básico e o Completo?",
        resposta:
          "O Básico não inclui quadriciclo nem catamarã Pôr do Sol (ambos opcionais à parte). O Completo já inclui os dois.",
      },
      {
        pergunta: "Criança paga?",
        resposta:
          "Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 224. A partir de 12 anos: valor adulto.",
      },
    ],
  },

  {
    id: "pacote-super-economico",
    nome: "Pacote Super Econômico",
    categoria: "pacotes",
    slug: "super-economico",
    preco: "Individual: R$ 140 / Dupla: R$ 260",
    duracao: "2 dias",
    saida: "8h–9h",
    descricao:
      "Duas experiências essenciais em 2 dias — Litoral Sul e Piscinas Naturais — no melhor custo-benefício.",
    incluso: [
      "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Guia nos 2 dias",
    ],
    naoIncluso: ["Alimentação"],
    observacoes: "Seixas: sujeito à maré baixa.",
    idealPara: [
      "Turistas com 2 dias",
      "Grupos econômicos",
      "Primeiro contato com João Pessoa",
    ],
    coverImage: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
    imagemAlt: "Passeio econômico em João Pessoa — 2 dias de experiência",
    faq: [
      {
        pergunta: "Quais passeios estão inclusos?",
        resposta:
          "Dia 1: Litoral Sul (praias do sul). Dia 2: Piscinas Naturais do Seixas (sujeito à maré).",
      },
      {
        pergunta: "Criança paga?",
        resposta:
          "Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 112. A partir de 12 anos: valor adulto.",
      },
    ],
  },

  // =========================================================================
  // LITORAL SUL (6)
  // =========================================================================

  // ★ PRIORITÁRIO
  {
    id: "litoral-sul-classico",
    nome: "Litoral Sul — Roteiro Clássico",
    categoria: "litoral-sul",
    slug: "roteiro-classico",
    prioritario: true,
    preco: "R$ 80",
    duracao: "~8h",
    saida: "8h–9h",
    h1: "Litoral Sul de João Pessoa — Roteiro Clássico por 4 Praias em 1 Dia",
    metaDescription:
      "Roteiro clássico do litoral sul de João Pessoa: Gramame, Amor, Tambaba e Coqueirinho em 1 dia. R$ 80 com transfer. Cadastur ativo. Reserve pelo WhatsApp!",
    subtituloHero:
      "4 praias em 1 dia, com transfer saindo de Tambaú, Cabo Branco, Manaíra ou Bessa. A gente cuida do trajeto e do tempo em cada praia. Você só aproveita.",
    descricao:
      "Um dia inteiro pelas praias mais encantadoras do litoral sul paraibano: Gramame, Amor, Tambaba e Coqueirinho.",
    descricaoLonga:
      "O clássico absoluto do litoral sul. Você passa por 4 praias diferentes, cada uma com sua personalidade: Gramame com areia branca e águas calmas, Amor com beleza selvagem, Tambaba a única praia naturista oficial do Nordeste, e Coqueirinho para almoço.",
    lead:
      "Quer conhecer o melhor do litoral sul paraibano em um único dia — sem dirigir, sem estacionar, sem se preocupar com trajeto?\n\nO Roteiro Clássico passa por 4 praias com personalidades muito diferentes: Gramame para começar com calma, Amor para o visual selvagem, Tambaba (a única praia naturista oficial do Nordeste, opcional) e Coqueirinho para almoço.\n\nA gente busca você no hotel pela manhã, leva, conta o que tem em cada praia, e traz de volta no fim da tarde. Saída entre 8h e 9h, retorno por volta das 16h30.",
    descricaoSensorial:
      "O motorista te busca em Tambaú, Cabo Branco, Manaíra ou Bessa entre 8h e 9h. A primeira parada é Gramame: areia branca, águas calmas, ótima para começar o dia tranquilo.\n\nDali, segue para a Praia do Amor — beleza selvagem, falésias coloridas e o visual mais marcante do dia. Quem gosta de fotografar vai querer parar mais.\n\nNa sequência, Tambaba: a única praia naturista oficial do Nordeste. A visita é opcional — você decide se desce ou prefere seguir direto. Avisamos antes para quem preferir não ir.\n\nA última parada é Coqueirinho — parada longa, hora do almoço (não incluso, várias opções no local). Tempo para descanso, banho de mar e aquela paisagem de coqueiro com falésia laranja que aparece em toda foto da Paraíba.\n\nRetorno por volta das 16h30, deixando você de volta no hotel.",
    roteiroNarrativo: [
      {
        emoji: "🚐",
        titulo: "Embarque (transfer) — 8h às 9h",
        texto:
          "Buscamos você no hotel ou airbnb em Tambaú, Cabo Branco, Manaíra ou Bessa. Horário exato confirmado no voucher após a reserva. Sem cobrança extra de transfer dentro dessas regiões.",
      },
      {
        emoji: "🏖️",
        titulo: "Praia de Gramame",
        texto:
          "Primeira parada. Areia branca, águas calmas, ótima para começar o dia em ritmo tranquilo. Tempo para banho, foto e respirar antes da sequência mais agitada.",
      },
      {
        emoji: "🌊",
        titulo: "Praia do Amor",
        texto:
          "Beleza selvagem, falésias coloridas e o visual mais marcante do dia. Quem gosta de fotografar costuma pedir para ficar mais um pouco — e a gente flexibiliza dentro do tempo do roteiro.",
      },
      {
        emoji: "🌅",
        titulo: "Praia de Tambaba (opcional)",
        texto:
          "A única praia naturista oficial do Nordeste. A visita é opcional — você decide se desce ou prefere seguir direto. Avisamos antes para quem preferir não ir. Quem desce, pode permanecer vestido em parte da praia.",
      },
      {
        emoji: "🌴",
        titulo: "Praia de Coqueirinho — parada longa",
        texto:
          "Última parada e a mais demorada. Hora do almoço (não incluso — vários restaurantes no local). Tempo para banho de mar, descanso e a paisagem de falésia laranja com coqueiros que está em toda foto da Paraíba.",
      },
      {
        emoji: "🚐",
        titulo: "Retorno por volta das 16h30",
        texto:
          "Deixamos você de volta no hotel. Total: ~8h desde a saída.",
      },
    ],
    coverImage: "/images/passeios/litoral-sul/hero-01.jpg",
    gallery: [
      "/images/passeios/litoral-sul/roteiro-classico/galeria-01.webp",
      "/images/passeios/litoral-sul/roteiro-classico/galeria-02.webp",
    ],
    imagemAlt:
      "Falésias coloridas e coqueiros na Praia de Coqueirinho, litoral sul de João Pessoa",
    rotario: [
      "Saída 8h–9h (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Praia de Gramame (areia branca, águas calmas)",
      "Praia do Amor (beleza selvagem, visual único)",
      "Praia de Tambaba (única praia naturista do NE — parada)",
      "Praia de Coqueirinho (parada longa para almoço)",
      "Retorno ~16h30",
    ],
    incluso: [
      "Transfer ida e volta (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Condutores credenciados em todas as praias",
      "Orientação e atendimento (Murillo ou equipe)",
    ],
    naoIncluso: [
      "Alimentação (almoço em Coqueirinho à parte — várias opções no local)",
      "Bebidas",
      "Entrada/passagem em Tambaba (se aplicável)",
    ],
    observacoes:
      "Tambaba é praia naturista — visita opcional, avisamos antes. Valor privativo: consultar.",
    nomeCurto: "Litoral Sul",
    idealPara: ["Praia", "Dia completo", "Paisagem", "Famílias e casais"],
    faq: [
      {
        pergunta: "Qual praia é melhor para banho?",
        resposta:
          "Gramame e Coqueirinho têm águas mais calmas, ideais para banho longo. Amor é mais selvagem, com pedras e ondas — bom para foto e vista, menos para banho prolongado. Tudo depende do seu gosto.",
      },
      {
        pergunta: "Preciso levar roupa de banho extra?",
        resposta:
          "Recomendamos sim. São 4 praias e o ideal é trocar de roupa molhada antes do almoço em Coqueirinho. Toalha também é importante.",
      },
      {
        pergunta: "Tambaba é praia naturista — sou obrigado a tirar a roupa?",
        resposta:
          "Não. A visita a Tambaba é opcional. Quem decide ir pode permanecer vestido em parte da praia. Quem prefere não ir, fica no veículo ou seguimos direto. Avisamos antes para quem prefere pular essa parada.",
      },
      {
        pergunta: "O que está incluso nos R$ 80?",
        resposta:
          "Transfer ida e volta a partir de Tambaú, Cabo Branco, Manaíra ou Bessa, condutores credenciados em todas as praias e orientação durante o passeio. Alimentação e bebidas são pagas à parte (almoço em Coqueirinho, várias opções no local).",
      },
      {
        pergunta: "Quanto tempo dura o passeio?",
        resposta:
          "Em torno de 8h, contando saída entre 8h e 9h e retorno por volta das 16h30. O tempo em cada praia é flexível dentro do roteiro do dia.",
      },
      {
        pergunta: "Criança pode ir?",
        resposta:
          "Sim. Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 64. A partir de 12 anos: valor adulto. Crianças devem estar acompanhadas por um responsável durante todo o passeio.",
      },
      {
        pergunta: "Qual é a política de cancelamento por chuva?",
        resposta:
          "Com aviso de 2h de antecedência, remarcamos sem custo. Se for impossível remarcar, 100% de reembolso.",
      },
    ],
    depoimento: {
      texto:
        "[CONFIRMAR COM MURILLO: depoimento real de cliente sobre o Roteiro Clássico do Litoral Sul]",
      autor: "[CONFIRMAR: nome e cidade do cliente]",
    },
    temAvaliacoes: false,
    avaliacoes: [],
    tem360: false,
    url360: undefined,
    informacoesPraticas: {
      oqueLevar: [
        "Roupa de banho (e uma extra para trocar antes do almoço)",
        "Toalha",
        "Protetor solar",
        "Chinelo confortável",
        "Dinheiro ou cartão para almoço em Coqueirinho",
      ],
      pontoEncontro:
        "Buscamos você no hotel ou airbnb em Tambaú, Cabo Branco, Manaíra ou Bessa — João Pessoa, PB. A localização exata é confirmada no voucher após a reserva.",
      horario:
        "Saída entre 8h e 9h. Retorno por volta das 16h30.",
    },
  },

  {
    id: "litoral-sul-praia-bela",
    nome: "Litoral Sul 2 — Praia Bela",
    categoria: "litoral-sul",
    slug: "praia-bela",
    preco: "R$ 80",
    duracao: "~8h",
    saida: "8h–9h",
    descricao:
      "Rota alternativa com Praia Bela e o encontro do mar com o Rio Mucatu — piscina natural de água doce e morna.",
    incluso: [
      "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Guia",
    ],
    naoIncluso: ["Alimentação"],
    observacoes:
      "Ideal para quem já conhece o Roteiro Clássico. Valor privativo: [CONSULTAR].",
    idealPara: ["Famílias", "Casais", "Segunda visita ao litoral sul"],
    coverImage: "/images/passeios/litoral-sul/praia-bela/hero-01.jpg",
    imagemAlt: "Praia Bela no litoral sul da Paraíba com encontro do Rio Mucatu",
    faq: [
      {
        pergunta: "Qual a diferença entre Praia Bela e o Roteiro Clássico?",
        resposta:
          "Rotas diferentes. Praia Bela inclui o encontro do mar com o Rio Mucatu — piscina natural de água doce e morna. Indicada para quem já fez o Clássico.",
      },
      {
        pergunta: "Criança pode ir?",
        resposta:
          "Sim. Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 64. A partir de 12 anos: valor adulto.",
      },
    ],
  },

  {
    id: "combo-jampa-quadriciclo",
    nome: "Combo Jampa — Litoral Sul com Quadriciclo",
    categoria: "litoral-sul",
    slug: "combo-jampa-quadriciclo",
    preco: "Sem quad: R$ 150 / Quad individual: R$ 240 / Quad dupla: R$ 310",
    duracao: "~8h (trilha 1h30–2h)",
    saida: "8h–9h",
    descricao:
      "Praias paradisíacas de manhã + trilha de quadriciclo pelos mirantes históricos de Coqueirinho.",
    incluso: [
      "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Guia",
      "Quadriciclo (quando contratado)",
    ],
    naoIncluso: ["Alimentação"],
    observacoes:
      "Quadriciclo: mínimo 7 anos, máximo 2 pessoas por máquina. Valor privativo: [CONSULTAR].",
    idealPara: ["Aventureiros", "Casais", "Famílias com crianças ≥ 7 anos"],
    coverImage: "/images/passeios/litoral-sul/coqueirinho/hero-01.jpg",
    imagemAlt: "Trilha de quadriciclo nos mirantes de Coqueirinho, Litoral Sul da Paraíba",
    faq: [
      {
        pergunta: "Posso fazer o passeio sem o quadriciclo?",
        resposta:
          "Sim. Sem quad: R$ 150 por pessoa. O roteiro de praias é o mesmo.",
      },
      {
        pergunta: "Criança pode usar o quadriciclo?",
        resposta:
          "A partir de 7 anos. Crianças menores podem ir no passeio de praias mas não operam o quad.",
      },
    ],
  },

  {
    id: "combo-praia-bela-quadriciclo",
    nome: "Combo Praia Bela — Litoral Sul com Quadriciclo",
    categoria: "litoral-sul",
    slug: "combo-praia-bela-quadriciclo",
    preco: "Sem quad: R$ 159 / Quad individual: R$ 250 / Quad dupla: R$ 330",
    duracao: "~8h (trilha 1h30–2h)",
    saida: "8h–9h",
    descricao:
      "Praias da rota Praia Bela + trilha de quad pelas falésias coloridas e o encontro do mar com o Rio Abiaí.",
    incluso: [
      "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Guia",
      "Quadriciclo (quando contratado)",
    ],
    naoIncluso: ["Alimentação"],
    observacoes:
      "Quadriciclo: mínimo 7 anos. Valor privativo: [CONSULTAR].",
    idealPara: ["Aventureiros", "Casais", "Famílias com crianças ≥ 7 anos"],
    coverImage: "/images/passeios/litoral-sul/tambaba/hero-01.jpg",
    imagemAlt: "Quadriciclo nas falésias da Praia Bela, litoral sul da Paraíba",
    faq: [
      {
        pergunta: "Qual a diferença entre Combo Jampa e Combo Praia Bela?",
        resposta:
          "Rotas diferentes. Combo Praia Bela inclui falésias coloridas e o encontro do mar com o Rio Abiaí.",
      },
    ],
  },

  {
    id: "quadriciclo-coqueirinho",
    nome: "Quadriciclo em Coqueirinho",
    categoria: "litoral-sul",
    slug: "quadriciclo-coqueirinho",
    preco: "[CONSULTAR]",
    duracao: "1h30–2h",
    saida: "[CONSULTAR]",
    descricao:
      "Trilha de quadriciclo pelos mirantes e falésias históricas de Coqueirinho — sem o passeio de praias.",
    observacoes:
      "Mínimo 7 anos. Transporte e disponibilidade: [CONSULTAR]. Formato: privativo.",
    idealPara: ["Aventureiros", "Grupos", "Quem já conhece as praias"],
    coverImage: "/images/passeios/litoral-sul/coqueirinho/hero-01.jpg",
    imagemAlt: "Quadriciclo nos mirantes de Coqueirinho, Paraíba",
    faq: [
      {
        pergunta: "Posso fazer só a trilha de quad sem o passeio de praias?",
        resposta:
          "Sim. Este é o passeio de trilha somente. Consulte disponibilidade e valor pelo WhatsApp.",
      },
    ],
  },

  {
    id: "quadriciclo-praia-bela",
    nome: "Quadriciclo em Praia Bela",
    categoria: "litoral-sul",
    slug: "quadriciclo-praia-bela",
    preco: "[CONSULTAR]",
    duracao: "1h30–2h",
    saida: "[CONSULTAR]",
    descricao:
      "Trilha de quadriciclo pelas falésias coloridas de Praia Bela e o encontro do Rio Abiaí com o mar.",
    observacoes:
      "Mínimo 7 anos. Transporte e disponibilidade: [CONSULTAR]. Formato: privativo.",
    idealPara: ["Aventureiros", "Grupos"],
    coverImage: "/images/passeios/litoral-sul/praia-bela/hero-01.jpg",
    imagemAlt: "Quadriciclo nas falésias de Praia Bela, Paraíba",
    faq: [
      {
        pergunta: "Posso fazer só a trilha de quad em Praia Bela?",
        resposta:
          "Sim. Consulte disponibilidade e valor pelo WhatsApp.",
      },
    ],
  },

  // =========================================================================
  // LITORAL NORTE (5)
  // =========================================================================

  {
    id: "litoral-norte-classico",
    nome: "Litoral Norte — Roteiro Clássico",
    categoria: "litoral-norte",
    slug: "roteiro-classico",
    preco: "R$ 80",
    duracao: "~8h",
    saida: "Manhã",
    descricao:
      "Natureza, história colonial e o pôr do sol mais emocionante do Brasil ao som do Bolero de Ravel.",
    incluso: [
      "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Guia",
    ],
    naoIncluso: [
      "Alimentação",
      "Catamarã Pôr do Sol do Jacaré (opcional — R$ 90)",
    ],
    observacoes:
      "Valor privativo: [CONSULTAR]. Retorno após o pôr do sol.",
    idealPara: [
      "Todos os perfis",
      "Quem aprecia história e cultura",
      "Casais",
    ],
    coverImage: "/images/passeios/litoral-norte/areia-vermelha/hero-01.jpg",
    imagemAlt: "Litoral norte de João Pessoa com história colonial e natureza",
    faq: [
      {
        pergunta: "O Pôr do Sol do Jacaré está incluso?",
        resposta:
          "Não. É opcional à parte (R$ 90 por pessoa). Recomendamos adicionar — é uma experiência única.",
      },
      {
        pergunta: "Criança pode ir?",
        resposta:
          "Sim. Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 64. A partir de 12 anos: valor adulto.",
      },
    ],
  },

  {
    id: "combo-litoral-norte-areia-vermelha",
    nome: "Combo Litoral Norte com Areia Vermelha",
    categoria: "litoral-norte",
    slug: "combo-areia-vermelha",
    dependeDeMare: true,
    preco: "Com catamarã: R$ 160 / Sem catamarã: R$ 80",
    duracao: "~8h",
    saida: "[CONSULTAR — sujeito à tábua de marés]",
    descricao:
      "Pontos históricos do litoral norte + catamarã até a Ilha de Areia Vermelha com piscinas naturais e pôr do sol.",
    incluso: [
      "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Guia",
      "Catamarã Areia Vermelha (quando contratado)",
    ],
    naoIncluso: ["Alimentação"],
    observacoes:
      "Areia Vermelha: sujeito à maré baixa. Horário de saída confirmar antes.",
    idealPara: ["Quem quer litoral norte + piscinas naturais em um dia"],
    coverImage: "/images/passeios/litoral-norte/areia-vermelha/hero-01.jpg",
    imagemAlt: "Combo Litoral Norte com Areia Vermelha — João Pessoa",
    faq: [
      {
        pergunta: "Posso fazer sem o catamarã?",
        resposta:
          "Sim. Sem catamarã: R$ 80. Com catamarã Areia Vermelha: R$ 160.",
      },
      {
        pergunta: "Criança paga no catamarã?",
        resposta:
          "De 5 a 11 anos: R$ 128 (com catamarã) ou R$ 64 (sem). Abaixo de 5 anos não paga.",
      },
    ],
  },

  // ★ PRIORITÁRIO
  {
    id: "areia-vermelha-catamara",
    nome: "Areia Vermelha — Passeio de Catamarã",
    categoria: "litoral-norte",
    slug: "areia-vermelha-catamara",
    prioritario: true,
    dependeDeMare: true,
    preco: "R$ 70",
    duracao: "~3h",
    saida: "Conforme tábua de marés",
    h1: "Areia Vermelha em João Pessoa — Catamarã até o Banco de Areia em Cabedelo",
    metaDescription:
      "Conheça Areia Vermelha em Cabedelo, a 20 min de João Pessoa. Banco de areia com piscinas naturais verde-cristalinas. R$ 70 por pessoa. Cadastur ativo. Reserve pelo WhatsApp!",
    subtituloHero:
      "Em Cabedelo, a maré baixa revela um banco de areia cercado por piscinas naturais verde-esmeralda. A gente leva você no horário certo, em catamarã com estrutura completa.",
    descricao:
      "Um banco de areia que surge na maré baixa com piscinas naturais de água cristalina. O lugar mais instagramável da Paraíba.",
    descricaoLonga:
      "Areia Vermelha é um fenômeno da natureza: um banco de areia que aparece apenas na maré baixa, revelando piscinas naturais com água verde-esmeralda e corais coloridos. É o local mais fotografado e procurado por turistas.",
    lead:
      "Você já viu fotos daquele banco de areia que aparece no meio do mar com piscinas verde-esmeralda em volta?\n\nÉ Areia Vermelha. Fica em Cabedelo, a 20 minutos de João Pessoa, e só aparece quando a maré baixa.\n\nA gente parte em catamarã do Restaurante Lovina, em Ponta de Campina, checa a maré antes, e leva você até o ponto certo na hora certa. Você só desce, fotografa, mergulha — e volta com as melhores fotos da viagem.",
    descricaoSensorial:
      "O catamarã sai do Restaurante Lovina, em Ponta de Campina (Cabedelo), e em poucos minutos já está sobre o banco de areia.\n\nA maré recuou. O que antes era mar agora é uma faixa de areia clara cercada por piscinas naturais. A água é morna, transparente, com tons que vão do verde-cristal ao azul. Corais coloridos, peixes circulando — dá pra mergulhar, flutuar com snorkel, ou só ficar de pé na água até a cintura.\n\nNo catamarã tem toboágua, bar a bordo e churrasqueira. Banheiros, som, equipamento de salvatagem. A estrutura está pronta — você só aproveita.\n\nA gente fica enquanto a maré deixar. Em torno de 3h no total, contando travessia e retorno.",
    roteiroNarrativo: [
      {
        emoji: "🚢",
        titulo: "Embarque em Ponta de Campina",
        texto:
          "Ponto de encontro no Restaurante Lovina, em Ponta de Campina (Cabedelo). A localização exata é enviada no voucher após a confirmação da reserva. Horário conforme tábua de marés do dia — a gente confirma com você no WhatsApp na véspera.",
      },
      {
        emoji: "🌊",
        titulo: "Travessia até o banco de areia",
        texto:
          "Saída em catamarã rumo a Areia Vermelha, em frente à Praia de Camboinha. Travessia curta — você já vai sentindo o vento e vendo o litoral norte de outro ângulo.",
      },
      {
        emoji: "🏝️",
        titulo: "Areia Vermelha aparece com a maré baixa",
        texto:
          "A maré baixou e o banco de areia surge no meio do mar. Faixa clara cercada por piscinas naturais de água verde-esmeralda, corais coloridos e peixes. Você desce, mergulha, fotografa, ou só fica parado deixando o cenário fazer o trabalho.",
      },
      {
        emoji: "⚡",
        titulo: "Catamarã é sua base",
        texto:
          "O catamarã ancora ao lado. Toboágua para quem quiser agitar. Bar a bordo para água e bebidas. Churrasqueira disponível. Banheiros, som e equipamento de salvatagem.",
      },
      {
        emoji: "🚢",
        titulo: "Retorno para Ponta de Campina",
        texto:
          "Quando a maré começa a encher, o banco de areia some de volta para o mar — sinal de que é hora de voltar. Total: ~3h desde o embarque.",
      },
    ],
    coverImage: "/images/passeios/litoral-norte/areia-vermelha/hero-01.jpg",
    gallery: [
      "/images/passeios/areia-vermelha/galeria-01.webp",
      "/images/passeios/areia-vermelha/galeria-02.webp",
    ],
    imagemAlt:
      "Banco de areia de Areia Vermelha com piscinas naturais verde-esmeralda durante maré baixa em Cabedelo, João Pessoa",
    rotario: [
      "Embarque no Restaurante Lovina, Ponta de Campina — Cabedelo",
      "Navegação até Areia Vermelha (conforme maré)",
      "Banho nas piscinas naturais",
      "Exploração do cenário natural",
      "Retorno (~3h total)",
    ],
    incluso: [
      "Passeio compartilhado em catamarã",
      "Toboágua, bar a bordo e churrasqueira",
      "Banheiros, som com microfone, kit de primeiros socorros",
      "Equipamento de salvatagem e estrutura de segurança",
      "Orientação e atendimento (Murillo ou equipe)",
    ],
    naoIncluso: [
      "Alimentação (consumo no bar a bordo à parte)",
      "Transfer até Ponta de Campina (consultar disponibilidade)",
    ],
    observacoes:
      "Sujeito à tábua de marés (maré baixa obrigatória). Lugar muito procurado — reserve com antecedência. Transfer até Cabedelo: consultar.",
    alertaMare:
      "Areia Vermelha só aparece quando a maré está baixa. Antes de confirmar sua data, a gente consulta a tábua de marés e te avisa o melhor horário. Você não precisa se preocupar com isso — é nosso trabalho.",
    nomeCurto: "Areia Vermelha",
    idealPara: ["Fotos Instagram", "Piscinas naturais", "Mergulho leve", "Famílias"],
    faq: [
      {
        pergunta: "Areia Vermelha só existe em maré baixa?",
        resposta:
          "Sim. O banco de areia surge apenas quando a maré está baixa. Antes de confirmar sua data, a gente consulta a tábua de marés de João Pessoa. Se o dia que você quer não tiver maré favorável, avisamos antes e sugerimos outra data — sem custo.",
      },
      {
        pergunta: "De onde sai o barco?",
        resposta:
          "O embarque é no Restaurante Lovina, em Ponta de Campina (Cabedelo) — não sai de Tambaú. A localização exata é enviada no voucher após a confirmação. Se precisar de transfer até o local, consulte a gente no WhatsApp.",
      },
      {
        pergunta: "O que exatamente está incluso nos R$ 70?",
        resposta:
          "O valor cobre o passeio compartilhado em catamarã com toboágua, bar a bordo, churrasqueira, banheiros, som, kit de primeiros socorros e equipamento de salvatagem. Alimentação e bebidas são pagas à parte no bar do catamarã.",
      },
      {
        pergunta: "Quanto tempo dura o passeio?",
        resposta:
          "Em torno de 3h, contando embarque, travessia, tempo no banco de areia e retorno. O horário de saída varia conforme a tábua de marés — a gente confirma com você na véspera.",
      },
      {
        pergunta: "É seguro? Posso ir mesmo sem saber nadar?",
        resposta:
          "Sim. As piscinas naturais ao redor do banco de areia são rasas — você fica de pé em boa parte delas. O catamarã tem equipamento de salvatagem e o toboágua é supervisionado. Não é necessário saber nadar.",
      },
      {
        pergunta: "Criança pode ir?",
        resposta:
          "Sim. Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 56. A partir de 12 anos: valor adulto. Crianças devem estar acompanhadas por um responsável durante toda a atividade.",
      },
      {
        pergunta: "Qual é a política de cancelamento?",
        resposta:
          "Em caso de condições climáticas ou maré desfavorável, remarcamos sem custo. Para cancelamentos pelo cliente, consulte nossa política completa no WhatsApp.",
      },
    ],
    depoimento: {
      texto:
        "[CONFIRMAR COM MURILLO: depoimento real de cliente sobre o passeio de Areia Vermelha]",
      autor: "[CONFIRMAR: nome e cidade do cliente]",
    },
    temAvaliacoes: false,
    avaliacoes: [],
    tem360: false,
    url360: undefined,
    informacoesPraticas: {
      oqueLevar: [
        "Roupa de banho (já venha com ela)",
        "Protetor solar biodegradável (bom para os corais)",
        "Toalha",
        "Dinheiro ou cartão para o bar a bordo",
      ],
      pontoEncontro:
        "Restaurante Lovina — Ponta de Campina, Cabedelo, PB. A localização exata é enviada no voucher após a confirmação da reserva.",
      horario:
        "Varia conforme a tábua de marés. Confirmamos com você no WhatsApp na véspera.",
    },
  },

  {
    id: "por-do-sol-jacare",
    nome: "Pôr do Sol do Jacaré — Catamarã",
    categoria: "litoral-norte",
    slug: "por-do-sol-jacare",
    preco: "R$ 90",
    duracao: "~1h30",
    saida: "Tarde (conforme pôr do sol — [CONSULTAR horário exato])",
    descricao:
      "Navegação pelo Rio Paraíba com apresentação ao vivo do Bolero de Ravel. Experiência única que existe há mais de 20 anos.",
    descricaoLonga:
      "O pôr do sol do Jacaré é uma parada obrigatória em João Pessoa. Navegação pelo Rio Paraíba ao som de músicas ao vivo (Bolero de Ravel ao sax), dança de forró, violino. Uma experiência única no mundo.",
    coverImage: "/images/passeios/litoral-norte/jacare/hero-01.jpg",
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
    naoIncluso: ["Alimentação"],
    observacoes:
      "Saída diariamente à tarde. Horário varia conforme época do ano — confirmar no WhatsApp. Transfer até Jacaré: [CONSULTAR].",
    idealPara: ["Romance", "Pôr do sol", "Música ao vivo", "Experiência cultural única"],
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
          "Saída conforme o pôr do sol — varia por época. Consulte Murillo para o horário exato.",
      },
      {
        pergunta: "Criança pode ir?",
        resposta:
          "Sim. Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 72. A partir de 12 anos: valor adulto.",
      },
    ],
    depoimento: {
      texto:
        "[CONFIRMAR COM MURILLO: depoimento real de cliente sobre o Pôr do Sol do Jacaré]",
      autor: "[CONFIRMAR: nome e cidade do cliente]",
    },
  },

  {
    id: "lancha-privativa",
    nome: "Passeio de Lancha — Roteiro Privativo",
    categoria: "litoral-norte",
    slug: "lancha-privativa",
    preco: "A partir de R$ 1.590 (valor varia por modelo de lancha — [CONSULTAR])",
    duracao: "~10h (8h30–18h)",
    saida: "A partir das 8h30 — Marina da Praia Fluvial do Jacaré",
    descricao:
      "Dia completo em lancha privativa com paradas exclusivas, churrasco preparado pelo marinheiro e retorno ao pôr do sol.",
    incluso: [
      "Gasolina",
      "Marinheiro habilitado",
      "Preparo do churrasco a bordo",
    ],
    naoIncluso: ["Bebidas e carnes do churrasco"],
    observacoes:
      "100% privativo — não monta grupos com desconhecidos. Capacidade: [CONSULTAR]. Crianças acima de 5 anos entram na composição do grupo.",
    idealPara: ["Grupos", "Casais", "Famílias que querem experiência premium"],
    coverImage: "/images/passeios/litoral-norte/areia-vermelha/hero-01.jpg",
    imagemAlt: "Lancha privativa no litoral norte de João Pessoa ao pôr do sol",
    faq: [
      {
        pergunta: "O passeio é mesmo 100% privativo?",
        resposta:
          "Sim. Não tem estranhos. A lancha é exclusiva para seu grupo.",
      },
      {
        pergunta: "Qual o valor exato?",
        resposta:
          "A partir de R$ 1.590 — varia conforme modelo de lancha e tamanho do grupo. Consulte no WhatsApp.",
      },
    ],
  },

  // =========================================================================
  // PISCINAS NATURAIS (4)
  // =========================================================================

  // ★ PRIORITÁRIO
  {
    id: "seixas",
    nome: "Piscinas Naturais do Seixas",
    categoria: "piscinas-naturais",
    slug: "seixas",
    prioritario: true,
    dependeDeMare: true,
    preco: "R$ 60",
    duracao: "~3h30",
    saida: "Conforme tábua de marés",
    h1: "Piscinas Naturais do Seixas, João Pessoa — Snorkel em Água Cristalina",
    metaDescription:
      "Conheça as piscinas naturais de Seixas em João Pessoa. Maré baixa, corais e água cristalina. R$ 60 por pessoa. Cadastur ativo. Reserve pelo WhatsApp!",
    subtituloHero:
      "No ponto mais oriental das Américas, a maré baixa revela piscinas naturais de coral com água tão clara que parece aquário. Com a gente, você só aproveita.",
    descricao:
      "No ponto mais oriental das Américas. Piscinas naturais de corais com águas cristalinas e mornas. Perfeito para mergulho e snorkel.",
    lead:
      "Chegou em João Pessoa e quer ver as piscinas naturais de verdade — não em foto?\n\nSeixas fica no ponto mais a leste das Américas. Quando a maré baixa, corais formam piscinas naturais de água morna e cristalina. Você flutua, vê peixes coloridos passando do lado, e fica achando que está num aquário — mas é a natureza mesmo.\n\nA gente parte de Tambaú em catamarã, checa a maré antes, e cuida de tudo. Você só aproveita.",
    descricaoSensorial:
      "Você embarca em Tambaú e em cerca de 15 minutos de catamarã já está sobre as piscinas.\n\nA água é morna — mesmo em inverno — e tão limpa que você enxerga o fundo com facilidade. Peixes coloridos nadam perto, sem pressa, como se não ligassem pra você estar ali.\n\nDá pra flutuar de cara para baixo só olhando o fundo de coral. Dá pra mergulhar (tem snorkel e máscara opcionais). Dá pra nadar, fotografar, ou só ficar parado deixando a maré te embalar.\n\nNo catamarã tem toboágua, caiaque e trampolim para quem quiser agitar. Bar a bordo para quando der sede. A gente vai ficando enquanto a maré deixar — é em torno de 3h30 no total, contando embarque e retorno.",
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
    incluso: [
      "Passeio compartilhado em catamarã",
      "Toboágua, caiaque e trampolim (uso livre no catamarã)",
      "Bar e cozinha a bordo",
      "Banheiro a bordo",
      "Som com microfone",
      "Orientação e atendimento (Murillo ou equipe)",
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
    coverImage: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
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
    depoimento: {
      texto:
        "[CONFIRMAR COM MURILLO: depoimento real de cliente sobre o passeio de Seixas]",
      autor: "[CONFIRMAR: nome e cidade do cliente]",
    },
    temAvaliacoes: false,
    avaliacoes: [],
    googleMapsUrl: "https://maps.app.goo.gl/Q1Q8BNC5K1k9tiyX7",
    tem360: false,
    url360: undefined,
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

  {
    id: "penha",
    nome: "Piscinas Naturais da Penha",
    categoria: "piscinas-naturais",
    slug: "penha",
    dependeDeMare: true,
    preco: "R$ 60",
    duracao: "~3h",
    saida: "Conforme tábua de marés",
    descricao:
      "As piscinas mais exclusivas de João Pessoa — apenas 2 embarcações por vez garantem tranquilidade e contato genuíno com a natureza.",
    incluso: ["Embarcação", "Acesso às piscinas naturais"],
    naoIncluso: ["Alimentação"],
    observacoes:
      "Sujeito à maré baixa. Ponto de saída: Praia da Penha. Transfer até a Penha: [CONSULTAR].",
    idealPara: ["Quem busca tranquilidade", "Natureza", "Família"],
    coverImage: "/images/passeios/piscinas-naturais/penha/hero-01.jpg",
    imagemAlt: "Piscinas naturais da Penha em João Pessoa — ambiente exclusivo e tranquilo",
    faq: [
      {
        pergunta: "O que torna a Penha diferente de Seixas e Picãozinho?",
        resposta:
          "A Penha tem apenas 2 embarcações por vez, garantindo mais tranquilidade e contato real com a natureza.",
      },
      {
        pergunta: "Criança pode ir?",
        resposta:
          "Sim. Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 48. A partir de 12 anos: valor adulto.",
      },
    ],
  },

  {
    id: "picaozinho",
    nome: "Piscinas Naturais de Picãozinho",
    categoria: "piscinas-naturais",
    slug: "picaozinho",
    dependeDeMare: true,
    preco: "R$ 60",
    duracao: "~3h",
    saida: "Conforme maré baixa",
    descricao:
      "A apenas 1.500 metros de Tambaú. Aquário natural a céu aberto com peixes de todas as cores e formações de recife.",
    descricaoLonga:
      "Picãozinho é um dos recifes mais procurados de João Pessoa. Piscinas rasas, mornas e cristalinas, ideais para snorkel. Peixes coloridos, algas, fauna marinha preservada. É como mergulhar em um aquário natural.",
    coverImage: "/images/passeios/picaozinho/hero-01.jpg",
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
      "Catamarã com estrutura básica",
      "Acesso aos recifes",
    ],
    naoIncluso: ["Alimentação"],
    observacoes:
      "Sujeito à maré baixa. Piscinas rasas e seguras, ideais para família.",
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
          "Não obrigatório. Água é rasa. Coletes disponíveis.",
      },
    ],
  },

  {
    id: "mergulho",
    nome: "Mergulho com Cilindro",
    categoria: "piscinas-naturais",
    slug: "mergulho",
    preco: "[CONSULTAR]",
    duracao: "[CONSULTAR]",
    saida: "[CONSULTAR — sujeito à maré e visibilidade]",
    descricao:
      "Mergulho com equipamento completo nas piscinas naturais de João Pessoa, com profissional certificado.",
    incluso: [
      "Equipamento completo de mergulho",
      "Profissional certificado",
    ],
    observacoes:
      "Sujeito a condições de maré e visibilidade. Valor e disponibilidade: [CONSULTAR].",
    idealPara: ["Quem quer mergulho completo", "Experiência avançada"],
    coverImage: "/images/passeios/piscinas-naturais/mergulho/hero-01.jpg",
    imagemAlt: "Mergulho com cilindro nas piscinas naturais de João Pessoa",
    faq: [
      {
        pergunta: "Preciso de experiência para fazer o mergulho?",
        resposta:
          "Consulte Murillo. Há opções para iniciantes e para quem já mergulha.",
      },
      {
        pergunta: "Qual o valor?",
        resposta:
          "Valor sob consulta — depende da modalidade e disponibilidade. Envie mensagem no WhatsApp.",
      },
    ],
  },

  // =========================================================================
  // CITY TOUR (1)
  // =========================================================================

  {
    id: "city-tour-jampa",
    nome: "City Tour Jampa — Histórica",
    categoria: "city-tour",
    slug: "jampa-historica",
    preco: "R$ 80",
    duracao: "~3h30",
    saida: "Manhã",
    descricao:
      "Conhecer a 3ª cidade mais antiga do Brasil: Niemeyer, ponto mais oriental, patrimônio colonial e praças históricas.",
    incluso: [
      "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Condutores credenciados",
    ],
    naoIncluso: [
      "Entrada Centro Cultural São Francisco",
    ],
    observacoes:
      "Funciona terça a domingo (não opera às segundas). Valor privativo: [CONSULTAR].",
    idealPara: [
      "Primeiro contato com João Pessoa",
      "Quem aprecia história e arquitetura",
      "Turistas culturais",
    ],
    coverImage: "/images/passeios/city-tour/hero-01.jpg",
    imagemAlt: "Centro histórico de João Pessoa — 3ª cidade mais antiga do Brasil",
    faq: [
      {
        pergunta: "O que é visitado no City Tour?",
        resposta:
          "Centro histórico, patrimônio colonial, ponto mais oriental das Américas, obras de Oscar Niemeyer e praças históricas.",
      },
      {
        pergunta: "Funciona todos os dias?",
        resposta:
          "Terça a domingo. Não opera às segundas.",
      },
      {
        pergunta: "Criança pode ir?",
        resposta:
          "Sim. Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 64. A partir de 12 anos: valor adulto.",
      },
    ],
  },

  // =========================================================================
  // INTERESTADUAIS (3)
  // =========================================================================

  {
    id: "porto-de-galinhas",
    nome: "Porto de Galinhas — Pernambuco",
    categoria: "interestaduais",
    slug: "porto-de-galinhas",
    preco: "R$ 160",
    duracao: "Dia inteiro",
    saida: "Manhã — [CONSULTAR horário exato]",
    descricao:
      "Um dos destinos mais famosos do Brasil — piscinas naturais únicas, jangadas e águas esverdeadas.",
    incluso: ["Transporte (João Pessoa → Porto de Galinhas → João Pessoa)"],
    naoIncluso: ["Alimentação", "Jangada nas piscinas (pagar no local)"],
    observacoes:
      "Documento com foto obrigatório (viagem interestadual PB → PE). Disponibilidade: [CONSULTAR]. Retorno à noite.",
    idealPara: ["Quem quer conhecer Porto de Galinhas a partir de João Pessoa"],
    coverImage: "/images/passeios/interestaduais/porto-de-galinhas/hero-01.jpg",
    imagemAlt: "Piscinas naturais de Porto de Galinhas em Pernambuco",
    faq: [
      {
        pergunta: "O que está incluso nos R$ 160?",
        resposta:
          "Transporte de ida e volta (João Pessoa ↔ Porto de Galinhas). Alimentação e jangada são por conta do visitante.",
      },
      {
        pergunta: "Preciso de documento?",
        resposta:
          "Sim. Documento com foto obrigatório — é viagem interestadual.",
      },
      {
        pergunta: "Criança paga?",
        resposta:
          "Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 128. A partir de 12 anos: valor adulto.",
      },
    ],
  },

  {
    id: "praia-de-pipa",
    nome: "Praia de Pipa — Rio Grande do Norte",
    categoria: "interestaduais",
    slug: "praia-de-pipa",
    preco: "R$ 160",
    duracao: "Dia inteiro",
    saida: "Manhã — [CONSULTAR horário exato]",
    descricao:
      "Visual cinematográfico, praias paradisíacas, vila charmosa — o destino mais descolado do nordeste.",
    incluso: ["Transporte (João Pessoa → Pipa → João Pessoa)"],
    naoIncluso: ["Alimentação"],
    observacoes:
      "Documento com foto obrigatório (viagem interestadual). Disponibilidade: [CONSULTAR].",
    idealPara: ["Quem busca praias bonitas e vila animada"],
    coverImage: "/images/passeios/interestaduais/praia-de-pipa/hero-01.jpg",
    imagemAlt: "Praia de Pipa no Rio Grande do Norte — falésias e águas cristalinas",
    faq: [
      {
        pergunta: "O que está incluso?",
        resposta:
          "Transporte de ida e volta. Alimentação por conta do visitante.",
      },
      {
        pergunta: "Criança paga?",
        resposta:
          "Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 128. A partir de 12 anos: valor adulto.",
      },
    ],
  },

  {
    id: "natal",
    nome: "Natal — Rio Grande do Norte",
    categoria: "interestaduais",
    slug: "natal",
    preco: "R$ 160",
    duracao: "Dia inteiro",
    saida: "Manhã — [CONSULTAR horário exato]",
    descricao:
      "Maior cajueiro do mundo, Centro de Lançamento de Foguetes e praias mornas de Ponta Negra.",
    incluso: ["Transporte (João Pessoa → Natal → João Pessoa)"],
    naoIncluso: ["Alimentação"],
    observacoes:
      "Documento com foto obrigatório. Disponibilidade: [CONSULTAR].",
    idealPara: ["Quem quer conhecer Natal a partir de João Pessoa"],
    imagemAlt: "Ponta Negra em Natal, Rio Grande do Norte",
    faq: [
      {
        pergunta: "O que está incluso?",
        resposta:
          "Transporte de ida e volta. Alimentação por conta do visitante.",
      },
      {
        pergunta: "Criança paga?",
        resposta:
          "Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 128. A partir de 12 anos: valor adulto.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getPasseioBySlug(slug: string, categoria?: string): Passeio | undefined {
  if (categoria) {
    return passeios.find((p) => p.slug === slug && p.categoria === categoria);
  }
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

export function getPasseiosPrioritarios(): Passeio[] {
  return passeios.filter((p) => p.prioritario === true);
}
