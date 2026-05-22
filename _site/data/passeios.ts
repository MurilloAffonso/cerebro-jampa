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

/**
 * Badges comerciais — usar somente quando houver respaldo objetivo.
 * NUNCA inventar "Mais vendido", "Recomendado" etc sem confirmação do Murillo.
 */
export type BadgeComercial =
  | "imperdivel"
  | "mais-vendido"
  | "esgota-rapido"
  | "recomendado"
  | "depende-da-mare"
  | "familia"
  | "privativo"
  | "bate-volta"
  | "desconto-progressivo";

export const BADGE_LABEL: Record<BadgeComercial, string> = {
  "imperdivel":            "Imperdível",
  "mais-vendido":          "Mais vendido",
  "esgota-rapido":         "Esgota rápido",
  "recomendado":           "Recomendado pelos turistas",
  "depende-da-mare":       "Depende da maré",
  "familia":               "Ideal para família",
  "privativo":             "Privativo",
  "bate-volta":            "Bate e volta",
  "desconto-progressivo":  "Desconto progressivo",
};

/**
 * Galeria estruturada — usar para PasseioGallery comercial.
 * Só popular quando existirem fotos REAIS na pasta `public/images/passeios/`.
 * Placeholder SVG não conta como foto real.
 */
export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Passeio {
  id: string;
  nome: string;
  categoria: string;
  slug: string;
  preco: string;         // "[CONSULTAR]" quando não confirmado
  precoAnterior?: string; // riscado — opcional, popular só com confirmação
  duracao: string;       // "[CONSULTAR]" quando não confirmado
  saida: string;         // "[CONSULTAR]" quando não confirmado
  localizacao?: string;   // ex: "Cabedelo · Litoral Norte" — opcional, distinto de `saida`
  descricao: string;
  descricaoLonga?: string;
  prioritario?: boolean; // true nos 3 passeios prioritários da Fase 1
  badges?: BadgeComercial[]; // 0..N — card exibe até 2
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
  gallery?: string[];                    // legado — mantido por compat; pode apontar para placeholder
  galleryImages?: GalleryImage[];        // novo — só popular com fotos REAIS (PasseioGallery)
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
    id: "roteiro-do-murillo-3-dias",
    nome: "Roteiro do Murillo — 3 dias",
    categoria: "pacotes",
    slug: "roteiro-do-murillo-3-dias",
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
    coverImage: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
    imagemAlt: "Roteiro completo de 3 dias em João Pessoa com Murillo",
    faq: [
      {
        pergunta: "O que está incluso no Roteiro do Murillo — 3 dias?",
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
    id: "combo-sol-nascente-3-dias",
    nome: "Combo Sol Nascente — 3 dias",
    categoria: "pacotes",
    slug: "combo-sol-nascente-3-dias",
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
    coverImage: "/images/passeios/litoral-sul/roteiro-classico/hero-01.jpg",
    imagemAlt: "Combo Sol Nascente — 3 dias de passeios em João Pessoa",
    faq: [
      {
        pergunta: "Qual a diferença entre o Combo Sol Nascente e o Roteiro do Murillo?",
        resposta:
          "O Combo Sol Nascente não inclui quadriciclo nem catamarã Pôr do Sol (ambos opcionais à parte). O Roteiro do Murillo já inclui os dois.",
      },
      {
        pergunta: "Criança paga?",
        resposta:
          "Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 224. A partir de 12 anos: valor adulto.",
      },
    ],
  },

  {
    id: "combo-mare-boa-2-dias",
    nome: "Combo Maré Boa — 2 dias",
    categoria: "pacotes",
    slug: "combo-mare-boa-2-dias",
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
    imagemAlt: "Combo Maré Boa — 2 dias de passeios em João Pessoa",
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
    coverImage: "/images/passeios/litoral-sul/roteiro-classico/hero-01.jpg",
    galleryImages: [
      {
        src: "/images/passeios/litoral-sul/roteiro-classico/hero-01.jpg",
        alt: "Vista aérea do litoral sul da Paraíba com praias e recifes",
      },
      {
        src: "/images/passeios/litoral-sul/roteiro-classico/galeria-01.jpg",
        alt: "Vista drone da Praia de Coqueirinho, litoral sul da Paraíba",
      },
      {
        src: "/images/passeios/litoral-sul/roteiro-classico/galeria-02.jpg",
        alt: "Praia do litoral sul de João Pessoa",
      },
      {
        src: "/images/passeios/litoral-sul/roteiro-classico/galeria-03.jpg",
        alt: "Paisagem do litoral sul paraibano",
      },
      {
        src: "/images/passeios/litoral-sul/roteiro-classico/galeria-04.jpg",
        alt: "Praias e falésias do litoral sul da Paraíba",
      },
      {
        src: "/images/passeios/litoral-sul/roteiro-classico/galeria-05.jpg",
        alt: "Litoral sul de João Pessoa — passeio de um dia",
      },
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
      {
        pergunta: "Tem opção privativa em vez do compartilhado?",
        resposta:
          "Sim. Conseguimos montar versão privativa do roteiro para grupos, famílias ou casais que preferem flexibilidade total de tempo em cada praia. Consulte o valor pelo WhatsApp.",
      },
      {
        pergunta: "É possível combinar com a trilha de quadriciclo de Coqueirinho?",
        resposta:
          "Sim — é exatamente isso que oferecemos no Combo Jampa. Mesmo roteiro de praias + trilha de quadriciclo à tarde, num único dia. Veja a página do Combo ou pergunte pelo WhatsApp.",
      },
    ],
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
    h1: "Combo Jampa — Litoral Sul de João Pessoa com Quadriciclo em Coqueirinho",
    metaDescription:
      "Praias do litoral sul + trilha de quadriciclo em Coqueirinho num dia só. Transfer, guia, mirantes Dedo de Deus e Castelinho. A partir de R$ 150. Reserve no WhatsApp!",
    subtituloHero:
      "4 praias de manhã e adrenalina em quadriciclo à tarde, no mesmo dia. A gente busca no hotel, leva, e devolve no fim do dia.",
    descricao:
      "Praias paradisíacas de manhã + trilha de quadriciclo pelos mirantes históricos de Coqueirinho.",
    lead:
      "Quer praia e aventura no mesmo dia, sem ter que dirigir nem perder tempo procurando estacionamento?\n\nO Combo Jampa junta o Roteiro Clássico do litoral sul (Gramame, Amor, Tambaba e Coqueirinho) com uma trilha de quadriciclo de 1h30 a 2h pelos mirantes mais bonitos de Coqueirinho.\n\nA gente busca você entre 8h e 9h em Tambaú, Cabo Branco, Manaíra ou Bessa. Faz as 4 praias pela manhã, almoço em Coqueirinho, e à tarde você pilota o quadriciclo guiado pela equipe. Retorno por volta das 16h30.",
    descricaoSensorial:
      "A manhã segue o ritmo do Litoral Sul Clássico: areia branca em Gramame, falésia selvagem em Praia do Amor, parada opcional em Tambaba e almoço em Coqueirinho com vista de coqueiro e falésia laranja.\n\nDepois do almoço a energia muda. Você troca a praia pela trilha. O quadriciclo é seu, o guia vai à frente, e a sequência passa por Mirante Dedo de Deus, Mirante das Tartarugas, Castelinho da Princesa (com lojinhas de cachaça artesanal) e Shopping Rural (artesanato e doces locais).\n\nA trilha dura entre 1h30 e 2h. Em cada parada você desce, fotografa, respira aquela vista e segue. No fim, retorno tranquilo para o hotel.",
    roteiroNarrativo: [
      {
        emoji: "🚐",
        titulo: "Embarque (transfer) — 8h às 9h",
        texto:
          "Buscamos você no hotel ou airbnb em Tambaú, Cabo Branco, Manaíra ou Bessa. Horário exato confirmado no voucher.",
      },
      {
        emoji: "🏖️",
        titulo: "Praias do litoral sul — manhã",
        texto:
          "Gramame (águas calmas), Praia do Amor (falésia selvagem), Tambaba (parada opcional) e Coqueirinho para almoço (não incluso, várias opções no local).",
      },
      {
        emoji: "🏍️",
        titulo: "Saída para a trilha de quadriciclo",
        texto:
          "Após o almoço, você pega o quadriciclo. O guia explica o veículo, o trajeto e cuida da segurança. Capacete fornecido. Mínimo 7 anos para operar.",
      },
      {
        emoji: "📸",
        titulo: "Mirante Dedo de Deus e Mirante das Tartarugas",
        texto:
          "As duas paradas mais fotogênicas da trilha. Vista panorâmica do litoral sul e tempo para fotos sem pressa.",
      },
      {
        emoji: "🏛️",
        titulo: "Castelinho da Princesa e Shopping Rural",
        texto:
          "Castelinho com lojinhas de cachaças artesanais. Shopping Rural com doces, frutas, artesanato e produtos regionais — boa parada para lembrancinhas.",
      },
      {
        emoji: "🚐",
        titulo: "Retorno por volta das 16h30",
        texto:
          "Trilha encerrada, devolução do quadriciclo, e transfer de volta ao hotel.",
      },
    ],
    rotario: [
      "Saída 8h–9h (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Praias: Gramame, Amor, Tambaba e Coqueirinho (almoço)",
      "Trilha de quadriciclo 1h30–2h em Coqueirinho",
      "Paradas: Dedo de Deus, Tartarugas, Castelinho, Shopping Rural",
      "Retorno ~16h30",
    ],
    incluso: [
      "Transfer ida e volta (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Condutores e guia credenciados em todas as paradas",
      "Quadriciclo na trilha de Coqueirinho (quando contratado)",
      "Capacete e equipamento de segurança",
      "Orientação e atendimento (Murillo ou equipe)",
    ],
    naoIncluso: [
      "Alimentação (almoço em Coqueirinho à parte)",
      "Bebidas",
      "Compras no Castelinho e Shopping Rural",
    ],
    observacoes:
      "Quadriciclo: mínimo 7 anos para operar, máximo 2 pessoas por máquina. Crianças menores podem fazer só o roteiro de praias. Valor privativo: consultar.",
    nomeCurto: "Combo Jampa",
    idealPara: [
      "Aventureiros",
      "Casais",
      "Famílias com crianças a partir de 7 anos",
      "Quem quer praia + adrenalina no mesmo dia",
    ],
    faq: [
      {
        pergunta: "Posso fazer o passeio sem o quadriciclo?",
        resposta:
          "Sim. Sem quad: R$ 150 por pessoa. O roteiro de praias é exatamente o mesmo do Clássico do Litoral Sul.",
      },
      {
        pergunta: "Criança pode usar o quadriciclo?",
        resposta:
          "A partir de 7 anos para operar (sempre com o guia à frente). Crianças menores podem ir no passeio de praias mas não no quad.",
      },
      {
        pergunta: "Preciso ter experiência com quadriciclo?",
        resposta:
          "Não. O guia explica o veículo antes da saída, conduz à frente e ajusta o ritmo para o nível do grupo. A trilha é segura e bem sinalizada.",
      },
      {
        pergunta: "Qual a diferença entre individual e dupla no quadriciclo?",
        resposta:
          "Individual: 1 quadriciclo só para você (R$ 240). Dupla: 2 pessoas dividem o mesmo quadriciclo (R$ 310). Máximo 2 pessoas por máquina.",
      },
      {
        pergunta: "O que está incluso nos R$ 240/R$ 310?",
        resposta:
          "Transfer ida e volta, condutores e guia em todas as paradas, quadriciclo na trilha de Coqueirinho, capacete e equipamento de segurança. Alimentação e bebidas são pagas à parte.",
      },
      {
        pergunta: "E se chover no dia da trilha?",
        resposta:
          "Com aviso de 2h de antecedência, remarcamos sem custo. Se for impossível remarcar, 100% de reembolso. O passeio de praias geralmente acontece mesmo com tempo nublado.",
      },
      {
        pergunta: "Posso pular Tambaba?",
        resposta:
          "Sim. A visita a Tambaba é opcional — quem prefere segue direto para Coqueirinho. Avisamos antes.",
      },
    ],
    temAvaliacoes: false,
    avaliacoes: [],
    informacoesPraticas: {
      oqueLevar: [
        "Roupa de banho (e uma extra para trocar após o almoço)",
        "Calça ou bermuda confortável para o quadriciclo",
        "Tênis fechado ou chinelo com tira para a trilha",
        "Toalha",
        "Protetor solar",
        "Dinheiro ou cartão para almoço e compras no Castelinho/Shopping Rural",
      ],
      pontoEncontro:
        "Buscamos você no hotel ou airbnb em Tambaú, Cabo Branco, Manaíra ou Bessa — João Pessoa, PB. A localização exata é confirmada no voucher após a reserva.",
      horario:
        "Saída entre 8h e 9h. Retorno por volta das 16h30. Trilha de quadriciclo no período da tarde, 1h30 a 2h.",
    },
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
    coverImage: "/images/passeios/litoral-sul/praia-bela/hero-01.jpg",
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
    preco: "Sob consulta · Resposta em 5 min",
    duracao: "1h30–2h",
    saida: "A combinar · Manhã ou tarde",
    descricao:
      "Trilha de quadriciclo pelos mirantes e falésias históricas de Coqueirinho — sem o passeio de praias.",
    observacoes:
      "Mínimo 7 anos. Transporte e disponibilidade: [CONSULTAR]. Formato: privativo.",
    idealPara: ["Aventureiros", "Grupos", "Quem já conhece as praias"],
    coverImage: "/images/passeios/litoral-sul/quadriciclo-coqueirinho/hero-01.jpg",
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
    preco: "Sob consulta · Resposta em 5 min",
    duracao: "1h30–2h",
    saida: "A combinar · Manhã ou tarde",
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
    h1: "Litoral Norte de João Pessoa — Roteiro Clássico com Pôr do Sol do Jacaré",
    metaDescription:
      "Roteiro clássico do litoral norte: Reserva de Tartarugas, Dique de Cabedelo, Fortaleza de Santa Catarina e Pôr do Sol do Jacaré ao som do Bolero de Ravel. R$ 80. Reserve no WhatsApp!",
    subtituloHero:
      "Natureza, história colonial e o entardecer mais emocionante do Brasil — num único dia, com transfer e guia.",
    descricao:
      "Natureza, história colonial e o pôr do sol mais emocionante do Brasil ao som do Bolero de Ravel.",
    lead:
      "Quer conhecer o lado histórico e contemplativo de João Pessoa, terminando com um pôr do sol que ficou famoso pelo som do saxofone?\n\nO Roteiro Clássico do Litoral Norte leva você por três pontos marcantes de Cabedelo — Reserva de Desova das Tartarugas, Dique de Cabedelo e Fortaleza de Santa Catarina — e fecha o dia em frente ao Rio Paraíba com o Bolero de Ravel tocado ao vivo pelo Jurandy do Sax.\n\nA gente busca você pela manhã em Tambaú, Cabo Branco, Manaíra ou Bessa. Tudo conduzido por guia credenciado, transfer ida e volta incluso.",
    descricaoSensorial:
      "A manhã começa na Reserva de Desova das Tartarugas Marinhas — em época certa, dá para ver ninhos protegidos pelo Projeto Tamar. É uma parada curta, mas marcante: muda o tom do dia.\n\nDali, o Dique de Cabedelo, onde o Rio Paraíba encontra o mar. O contraste entre água doce e salgada é visível, e a paisagem é diferente de tudo no litoral sul.\n\nA Fortaleza de Santa Catarina vem na sequência: forte do período colonial, construído pelos portugueses, ainda com canhões e muralhas preservadas. O guia conta a história sem pressa.\n\nO almoço fica em Cabedelo (não incluso — várias opções, peixe e camarão frescos). Depois, a tarde é dedicada ao Pôr do Sol do Jacaré.\n\nA gente chega antes do sol se pôr para você escolher mesa boa. O catamarã embarca dali (opcional, R$ 90 à parte) e navega pelo Rio Paraíba. Quando o sol toca o horizonte, Jurandy do Sax sobe na canoa dele e toca o Bolero de Ravel — uma cena que está repetindo há mais de 20 anos. Mesmo se você não fizer o catamarã, escuta da margem.",
    roteiroNarrativo: [
      {
        emoji: "🚐",
        titulo: "Embarque (transfer) — pela manhã",
        texto:
          "Buscamos você no hotel ou airbnb em Tambaú, Cabo Branco, Manaíra ou Bessa. Horário confirmado no voucher após a reserva.",
      },
      {
        emoji: "🐢",
        titulo: "Reserva de Desova das Tartarugas Marinhas",
        texto:
          "Parada na área de proteção em Cabedelo. Em época de desova, é possível ver ninhos sinalizados. Curta mas importante para entender o ecossistema local.",
      },
      {
        emoji: "🌊",
        titulo: "Dique de Cabedelo",
        texto:
          "Ponto onde o Rio Paraíba encontra o mar. Contraste entre as águas e paisagem ampla — boa para foto e respiro.",
      },
      {
        emoji: "🏰",
        titulo: "Fortaleza de Santa Catarina",
        texto:
          "Forte do período colonial português, ainda com canhões e muralhas. Patrimônio histórico em Cabedelo. O guia explica a história enquanto você caminha.",
      },
      {
        emoji: "🍤",
        titulo: "Almoço em Cabedelo (não incluso)",
        texto:
          "Restaurantes ao longo do litoral norte com peixe e camarão fresquinho. O guia indica as melhores opções para o seu perfil.",
      },
      {
        emoji: "🎷",
        titulo: "Pôr do Sol do Jacaré",
        texto:
          "Chegada antes do entardecer para escolher mesa. Jurandy do Sax toca o Bolero de Ravel ao vivo quando o sol toca o horizonte. O catamarã é opcional (R$ 90 à parte) e oferece a vista do rio.",
      },
      {
        emoji: "🚐",
        titulo: "Retorno após o pôr do sol",
        texto:
          "Voltamos para o hotel logo após o término da apresentação.",
      },
    ],
    rotario: [
      "Saída pela manhã (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Reserva de Desova das Tartarugas",
      "Dique de Cabedelo (encontro do rio com o mar)",
      "Fortaleza de Santa Catarina (período colonial)",
      "Almoço em Cabedelo (não incluso)",
      "Pôr do Sol do Jacaré com Bolero de Ravel ao vivo",
      "Retorno após o entardecer",
    ],
    incluso: [
      "Transfer ida e volta (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Condutores e guia credenciados",
      "Acompanhamento histórico nos pontos turísticos",
      "Orientação e atendimento (Murillo ou equipe)",
    ],
    naoIncluso: [
      "Alimentação (almoço em Cabedelo à parte)",
      "Bebidas",
      "Catamarã Pôr do Sol do Jacaré (opcional — R$ 90 por pessoa)",
      "Entradas em museus ou centros culturais (quando aplicável)",
    ],
    observacoes:
      "Pôr do Sol do Jacaré acontece todos os dias, com o saxofonista Jurandy ao vivo. O catamarã é opcional e altamente recomendado. Valor privativo: consultar.",
    nomeCurto: "Litoral Norte",
    idealPara: [
      "Todos os perfis",
      "Quem aprecia história e cultura",
      "Casais",
      "Quem quer um pôr do sol marcante",
    ],
    coverImage: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
    imagemAlt: "Litoral norte de João Pessoa com história colonial e natureza",
    faq: [
      {
        pergunta: "O Pôr do Sol do Jacaré está incluso?",
        resposta:
          "Não. É opcional à parte (R$ 90 por pessoa, no catamarã). Recomendamos fortemente — é uma das experiências mais marcantes de João Pessoa. Se preferir, dá para assistir da margem sem pagar o catamarã.",
      },
      {
        pergunta: "Quem toca o Bolero de Ravel? É todo dia?",
        resposta:
          "É o Jurandy do Sax, há mais de 20 anos. Acontece todos os dias ao entardecer, exceto em condições extremas de tempo. A apresentação é em frente à Praia do Jacaré.",
      },
      {
        pergunta: "Dá para ver as tartarugas mesmo fora da época de desova?",
        resposta:
          "Os ninhos só ficam sinalizados na época de desova (geralmente outubro a março). Fora desse período, a parada continua valendo para entender o trabalho de proteção e ver a estrutura do projeto.",
      },
      {
        pergunta: "Criança pode ir?",
        resposta:
          "Sim. Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 64. A partir de 12 anos: valor adulto. O passeio é tranquilo, sem trilha ou esforço físico.",
      },
      {
        pergunta: "O que está incluso nos R$ 80?",
        resposta:
          "Transfer ida e volta a partir de Tambaú, Cabo Branco, Manaíra ou Bessa, guia credenciado nos pontos históricos e orientação durante o dia. Alimentação, bebidas e catamarã são à parte.",
      },
      {
        pergunta: "Qual o melhor lugar para almoçar em Cabedelo?",
        resposta:
          "Vários restaurantes ao longo do litoral. O guia indica de acordo com seu perfil: tradicional, frutos do mar, comida regional, opções mais simples ou mais elaboradas.",
      },
      {
        pergunta: "Qual é a política de cancelamento por chuva?",
        resposta:
          "Com aviso de 2h de antecedência, remarcamos sem custo. Se for impossível remarcar, 100% de reembolso.",
      },
    ],
    temAvaliacoes: false,
    avaliacoes: [],
    informacoesPraticas: {
      oqueLevar: [
        "Roupa leve e confortável",
        "Tênis ou sapato fechado para a Fortaleza",
        "Protetor solar e óculos de sol",
        "Câmera (o pôr do sol vale a foto)",
        "Casaco leve para o entardecer no rio",
        "Dinheiro ou cartão para almoço e bebidas",
      ],
      pontoEncontro:
        "Buscamos você no hotel ou airbnb em Tambaú, Cabo Branco, Manaíra ou Bessa — João Pessoa, PB. A localização exata é confirmada no voucher após a reserva.",
      horario:
        "Saída pela manhã. Retorno após o pôr do sol (geralmente entre 18h e 19h, dependendo da época do ano).",
    },
  },

  {
    id: "combo-litoral-norte-areia-vermelha",
    nome: "Combo Litoral Norte com Areia Vermelha",
    categoria: "litoral-norte",
    slug: "combo-areia-vermelha",
    dependeDeMare: true,
    preco: "Com catamarã: R$ 160 / Sem catamarã: R$ 80",
    duracao: "~8h",
    saida: "Manhã · Confirmado conforme tábua de marés",
    h1: "Combo Litoral Norte com Areia Vermelha — Catamarã e Pôr do Sol do Jacaré",
    metaDescription:
      "Pontos históricos do litoral norte + catamarã até a Ilha de Areia Vermelha. Piscinas naturais em Cabedelo, Bolero de Ravel ao pôr do sol. Com catamarã R$ 160. Reserve no WhatsApp!",
    subtituloHero:
      "Reserva de Tartarugas, Fortaleza, banco de areia com piscinas naturais e o entardecer mais famoso de Jampa — tudo no mesmo dia.",
    descricao:
      "Pontos históricos do litoral norte + catamarã até a Ilha de Areia Vermelha com piscinas naturais e pôr do sol.",
    lead:
      "Quer fazer o melhor do litoral norte de João Pessoa num dia só — com história, piscinas naturais e um pôr do sol inesquecível?\n\nO Combo Litoral Norte com Areia Vermelha junta a Reserva de Tartarugas, o Dique de Cabedelo e a Fortaleza de Santa Catarina pela manhã, com uma travessia de catamarã até a Ilha de Areia Vermelha — banco de areia que surge na maré baixa em frente a Camboinha. À tarde, fecha com o Pôr do Sol do Jacaré ao som do Bolero de Ravel.\n\nO horário de saída é ajustado conforme a tábua de marés para garantir que a Ilha de Areia Vermelha esteja exposta. A gente cuida disso e confirma com você na véspera.",
    descricaoSensorial:
      "A manhã segue a rota histórica do Litoral Norte: Reserva de Desova das Tartarugas, Dique de Cabedelo (onde o rio encontra o mar) e Fortaleza de Santa Catarina, do período colonial.\n\nDepois vem a parte mais aguardada. O embarque do catamarã rumo à Ilha de Areia Vermelha — um banco de areia que só aparece com a maré baixa, cercado por piscinas naturais de água verde-cristalina. O catamarã tem toboágua, bar a bordo e churrasqueira; durante a travessia, dá tempo de relaxar e curtir a paisagem do litoral norte de outro ângulo.\n\nNa ilha, você desce, caminha pelo banco de areia, mergulha nas piscinas naturais e fotografa o cenário que ficou famoso nas redes sociais. Vida marinha próxima, água morna, fundo claro. Quando a maré começa a encher, o catamarã retorna.\n\nO almoço fica em Cabedelo (não incluso). Depois, transfer até o Jacaré para o entardecer com o Jurandy do Sax e o Bolero de Ravel — encerramento perfeito do dia.",
    roteiroNarrativo: [
      {
        emoji: "🚐",
        titulo: "Embarque (transfer) — pela manhã",
        texto:
          "Buscamos você no hotel ou airbnb em Tambaú, Cabo Branco, Manaíra ou Bessa. Horário ajustado conforme a tábua de marés do dia.",
      },
      {
        emoji: "🐢",
        titulo: "Reserva de Tartarugas e pontos históricos",
        texto:
          "Reserva de Desova das Tartarugas Marinhas, Dique de Cabedelo e Fortaleza de Santa Catarina (período colonial). Acompanhamento histórico pelo guia.",
      },
      {
        emoji: "⛵",
        titulo: "Embarque do catamarã para Areia Vermelha",
        texto:
          "Saída em Ponta de Campina. Travessia curta com vista do litoral norte. Catamarã equipado com toboágua, bar a bordo e churrasqueira.",
      },
      {
        emoji: "🏝️",
        titulo: "Ilha de Areia Vermelha",
        texto:
          "Banco de areia que surge com a maré baixa, em frente à Praia de Camboinha. Piscinas naturais de água verde-cristalina, mergulho e descanso. Tempo livre até a maré começar a encher.",
      },
      {
        emoji: "🍤",
        titulo: "Almoço em Cabedelo (não incluso)",
        texto:
          "Restaurantes de frutos do mar ao longo do litoral norte. O guia indica opções para o seu perfil.",
      },
      {
        emoji: "🎷",
        titulo: "Pôr do Sol do Jacaré com Bolero de Ravel",
        texto:
          "Chegada ao entardecer na Praia do Jacaré. Jurandy do Sax toca o Bolero de Ravel ao vivo quando o sol toca o horizonte — espetáculo que acontece todos os dias há mais de 20 anos.",
      },
      {
        emoji: "🚐",
        titulo: "Retorno após o pôr do sol",
        texto:
          "Voltamos para o hotel logo após o término da apresentação.",
      },
    ],
    rotario: [
      "Saída pela manhã (conforme tábua de marés)",
      "Reserva de Tartarugas + Dique + Fortaleza de Santa Catarina",
      "Catamarã até Ilha de Areia Vermelha (banco de areia + piscinas)",
      "Almoço em Cabedelo (não incluso)",
      "Pôr do Sol do Jacaré com Bolero de Ravel ao vivo",
      "Retorno após o entardecer",
    ],
    incluso: [
      "Transfer ida e volta (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Condutores e guia credenciados",
      "Catamarã até a Ilha de Areia Vermelha (quando contratado)",
      "Estrutura do catamarã: toboágua, bar a bordo, banheiros, kit de primeiros socorros",
      "Acompanhamento histórico nos pontos turísticos",
      "Orientação e atendimento (Murillo ou equipe)",
    ],
    naoIncluso: [
      "Alimentação (almoço em Cabedelo à parte)",
      "Bebidas a bordo",
      "Snorkel, máscara e fotógrafo subaquático (opcionais)",
      "Catamarã do Pôr do Sol do Jacaré (passeio é assistido da margem; embarcar custa à parte)",
    ],
    observacoes:
      "Ilha de Areia Vermelha sujeita à tábua de marés (só aparece com maré baixa). Horário de saída confirmado na véspera. Valor privativo: consultar.",
    alertaMare:
      "A Ilha de Areia Vermelha só fica exposta quando a maré está baixa. A gente checa a tábua de marés antes e confirma com você o melhor horário para garantir que o banco de areia esteja visível.",
    nomeCurto: "Combo Litoral Norte",
    idealPara: [
      "Quem quer litoral norte + piscinas naturais em um dia",
      "Casais",
      "Famílias",
      "Quem busca um dia completo com história, mar e pôr do sol",
    ],
    coverImage: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
    imagemAlt: "Combo Litoral Norte com Areia Vermelha — João Pessoa",
    faq: [
      {
        pergunta: "Posso fazer sem o catamarã para Areia Vermelha?",
        resposta:
          "Sim. Sem catamarã: R$ 80 por pessoa (só o roteiro histórico). Com catamarã para a Ilha de Areia Vermelha: R$ 160 por pessoa. Recomendamos a opção completa — Areia Vermelha é uma das atrações mais marcantes de João Pessoa.",
      },
      {
        pergunta: "Criança paga no catamarã?",
        resposta:
          "De 5 a 11 anos: R$ 128 (com catamarã) ou R$ 64 (sem). Abaixo de 5 anos não paga. A partir de 12 anos: valor adulto.",
      },
      {
        pergunta: "E se a maré não estiver baixa no dia que eu quero?",
        resposta:
          "A gente consulta a tábua de marés antes de confirmar sua reserva. Se o dia escolhido não tiver maré favorável para Areia Vermelha, sugerimos outra data sem custo.",
      },
      {
        pergunta: "O Pôr do Sol do Jacaré inclui o catamarã do entardecer?",
        resposta:
          "Não. O passeio histórico chega à Praia do Jacaré e você assiste a apresentação do Jurandy do Sax da margem. O catamarã do pôr do sol é uma experiência à parte (R$ 90), opcional. Se quiser incluir, avise no momento da reserva.",
      },
      {
        pergunta: "Quanto tempo a gente fica na Ilha de Areia Vermelha?",
        resposta:
          "Depende do ciclo da maré. Em média 1h30 a 2h no banco de areia. Quando a maré começa a encher e cobre o banco, retornamos para o catamarã.",
      },
      {
        pergunta: "Precisa saber nadar?",
        resposta:
          "Não. As piscinas naturais ao redor do banco de areia são rasas e protegidas. Você fica de pé em boa parte. Coletes salva-vidas disponíveis a bordo.",
      },
      {
        pergunta: "Qual é a política de cancelamento?",
        resposta:
          "Em caso de maré desfavorável ou condições climáticas que impeçam a saída, remarcamos sem custo. Cancelamentos pelo cliente: consultar política completa no WhatsApp.",
      },
    ],
    temAvaliacoes: false,
    avaliacoes: [],
    informacoesPraticas: {
      oqueLevar: [
        "Roupa de banho (vista por baixo da roupa)",
        "Toalha",
        "Protetor solar biodegradável (preserva os corais)",
        "Chinelo confortável ou aqua shoes",
        "Câmera ou celular (à prova d'água é bônus)",
        "Casaco leve para o pôr do sol no rio",
        "Dinheiro ou cartão para almoço",
      ],
      pontoEncontro:
        "Buscamos você no hotel ou airbnb em Tambaú, Cabo Branco, Manaíra ou Bessa — João Pessoa, PB. Embarque do catamarã em Ponta de Campina, Cabedelo. Localização exata no voucher.",
      horario:
        "Saída pela manhã (horário exato conforme tábua de marés do dia). Retorno após o pôr do sol.",
    },
  },

  // ★ PRIORITÁRIO
  {
    id: "areia-vermelha-catamara",
    nome: "Areia Vermelha — Passeio de Catamarã",
    categoria: "litoral-norte",
    slug: "areia-vermelha-catamara",
    prioritario: true,
    dependeDeMare: true,
    badges: ["depende-da-mare"],
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
    coverImage: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
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
    saida: "Tarde · Horário varia conforme estação",
    h1: "Pôr do Sol do Jacaré em João Pessoa — Catamarã com Bolero de Ravel ao Vivo",
    metaDescription:
      "Navegação pelo Rio Paraíba no catamarã com Bolero de Ravel ao vivo. Espetáculo de Jurandy do Sax há mais de 20 anos. R$ 90 por pessoa. Reserve no WhatsApp!",
    subtituloHero:
      "1h30 de navegação no Rio Paraíba ao entardecer, com forró pé de serra, violino e o Bolero de Ravel tocado ao vivo quando o sol toca o horizonte.",
    descricao:
      "Navegação pelo Rio Paraíba com apresentação ao vivo do Bolero de Ravel. Experiência única que existe há mais de 20 anos.",
    descricaoLonga:
      "O pôr do sol do Jacaré é uma parada obrigatória em João Pessoa. Navegação pelo Rio Paraíba ao som de músicas ao vivo (Bolero de Ravel ao sax), dança de forró, violino. Uma experiência única no mundo.",
    lead:
      "Quer viver uma das experiências mais marcantes do nordeste brasileiro?\n\nO Pôr do Sol do Jacaré não é um passeio comum de catamarã. É um ritual que acontece há mais de 20 anos: a cada entardecer, um catamarã navega pelo Rio Paraíba enquanto Jurandy do Sax toca o Bolero de Ravel ao vivo, a bordo da sua canoa. Quando o sol toca o horizonte, ele eleva o solo — e ninguém esquece o momento.\n\nO embarque é na Praia do Jacaré, em Cabedelo. 1h30 de navegação com música, dança de forró e história. Não importa quantas vezes você veja, é sempre cinematográfico.",
    descricaoSensorial:
      "Você chega à Praia do Jacaré um pouco antes do horário e já vê o catamarã ancorado à beira do rio. O movimento é grande, mas o clima é leve. Ao embarcar, escolhe lugar — o melhor é virado para o oeste, lado do pôr do sol.\n\nA navegação começa tranquila. O guia conta a história do Rio Paraíba, dos manguezais e da relação da cidade com o rio. Belle Soares aparece com violino, depois um casal de cangaceiros leva a galera para uma dança de forró pé de serra. O catamarã ri com a gente.\n\nO sol vai descendo. Quando começa a se aproximar do horizonte, todo mundo silencia. O Jurandy aparece numa canoa pequena, ao lado do catamarã. O saxofone começa o Bolero de Ravel. A música cresce junto com a luz alaranjada. Quando o sol toca a linha do horizonte, ele eleva o solo até o limite. É o momento que ficou famoso — e que repete, lindo, todos os dias.",
    coverImage: "/images/passeios/piscinas-naturais/penha/hero-01.jpg",
    roteiroNarrativo: [
      {
        emoji: "🚢",
        titulo: "Embarque na Praia do Jacaré, Cabedelo",
        texto:
          "Chegue 30 minutos antes do horário marcado para escolher seu lugar. O embarque é na Praia do Jacaré (Cabedelo). Localização exata no voucher.",
      },
      {
        emoji: "🌊",
        titulo: "Navegação pelo Rio Paraíba",
        texto:
          "O catamarã solta amarras e começa a navegar pelo rio. O guia conta a história da região, dos manguezais e da Praia do Jacaré.",
      },
      {
        emoji: "🎻",
        titulo: "Apresentação de Belle Soares ao violino",
        texto:
          "Belle Soares se apresenta a bordo, com violino. Ambiente intimista, repertório que prepara o clima do pôr do sol.",
      },
      {
        emoji: "💃",
        titulo: "Forró pé de serra com casal de cangaceiros",
        texto:
          "Casal de cangaceiros leva os passageiros para a dança de forró pé de serra. Música nordestina, brincadeira, fotos memoráveis.",
      },
      {
        emoji: "🎷",
        titulo: "Bolero de Ravel ao vivo no pôr do sol",
        texto:
          "Quando o sol começa a tocar o horizonte, Jurandy do Sax aparece em sua canoa ao lado do catamarã e toca o Bolero de Ravel ao vivo. O grande momento do passeio.",
      },
      {
        emoji: "🚢",
        titulo: "Retorno após o entardecer",
        texto:
          "Após o término da apresentação, o catamarã retorna ao porto. Total: ~1h30.",
      },
    ],
    rotario: [
      "Embarque na Praia do Jacaré (Cabedelo)",
      "Navegação pelo Rio Paraíba com história da região",
      "Apresentação de Belle Soares ao violino",
      "Forró pé de serra com casal de cangaceiros",
      "Bolero de Ravel ao vivo por Jurandy do Sax no pôr do sol",
      "Retorno ~1h30 total",
    ],
    incluso: [
      "Passeio compartilhado em catamarã (~1h30)",
      "Apresentações musicais ao vivo (Bolero de Ravel ao sax, violino, forró)",
      "Informações históricas do Rio Paraíba",
      "Bar a bordo, banheiro, som com microfone",
      "Kit de primeiros socorros e equipamento de salvatagem",
      "Orientação e atendimento (Murillo ou equipe)",
    ],
    naoIncluso: [
      "Alimentação (consumo a bordo à parte)",
      "Bebidas no bar do catamarã",
      "Transfer até a Praia do Jacaré (consultar disponibilidade)",
    ],
    observacoes:
      "Saída diariamente à tarde. Horário varia conforme época do ano (entardecer) — confirmamos no WhatsApp. Em condições climáticas extremas, o passeio pode ser remarcado. Transfer até Jacaré: consultar.",
    nomeCurto: "Pôr do Sol Jacaré",
    idealPara: ["Romance", "Pôr do sol", "Música ao vivo", "Casais", "Experiência cultural única em Jampa"],
    imagemAlt: "Pôr do sol do Jacaré com Bolero de Ravel ao vivo em João Pessoa",
    faq: [
      {
        pergunta: "O Bolero de Ravel toca sempre?",
        resposta:
          "Sim. Jurandy do Sax toca todos os dias ao pôr do sol, exceto em condições climáticas extremas. É o ritual há mais de 20 anos e o ponto alto do passeio.",
      },
      {
        pergunta: "Que horas sai o catamarã?",
        resposta:
          "O horário varia conforme o pôr do sol da época do ano — geralmente entre 16h30 e 17h30. Confirmamos com você o horário exato no WhatsApp na véspera ou no momento da reserva.",
      },
      {
        pergunta: "Criança pode ir?",
        resposta:
          "Sim. Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 72. A partir de 12 anos: valor adulto. Crianças devem estar acompanhadas por um responsável.",
      },
      {
        pergunta: "Posso ver da margem em vez de pagar o catamarã?",
        resposta:
          "Sim, dá pra escutar o Bolero da margem da Praia do Jacaré. Mas o catamarã oferece a navegação no rio, a vista 360° do pôr do sol e o show de perto — vale a experiência completa.",
      },
      {
        pergunta: "Que horas devo chegar?",
        resposta:
          "Recomendamos chegar 30 minutos antes do embarque para escolher um lugar bom no catamarã (lado oeste para o pôr do sol).",
      },
      {
        pergunta: "O que está incluso nos R$ 90?",
        resposta:
          "Passeio compartilhado em catamarã (~1h30), apresentações musicais ao vivo (Bolero, violino, forró), bar a bordo (consumo à parte), banheiro, som e equipamento de segurança. Alimentação e bebidas são pagas no bar.",
      },
      {
        pergunta: "Qual é a política de cancelamento?",
        resposta:
          "Em caso de chuva intensa ou condições climáticas que impeçam a saída, remarcamos sem custo. Para cancelamentos pelo cliente, consulte a política completa no WhatsApp.",
      },
    ],
    temAvaliacoes: false,
    avaliacoes: [],
    informacoesPraticas: {
      oqueLevar: [
        "Roupa leve (calor à tarde, levemente fresca após o pôr do sol)",
        "Casaco leve ou camisa de manga para o entardecer",
        "Câmera ou celular (vale a foto)",
        "Dinheiro ou cartão para consumo no bar",
        "Repelente (rio tem mosquitos no fim da tarde)",
      ],
      pontoEncontro:
        "Praia do Jacaré, Cabedelo, PB. A localização exata é enviada no voucher após a confirmação da reserva.",
      horario:
        "Varia conforme a época do ano (entardecer). Confirmamos com você no WhatsApp.",
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
    coverImage: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
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
    badges: ["depende-da-mare"],
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
    galleryImages: [
      {
        src: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
        alt: "Vista aérea das piscinas naturais do Seixas, João Pessoa",
      },
      {
        src: "/images/passeios/piscinas-naturais/seixas/galeria-01.jpg",
        alt: "Turistas nas piscinas naturais do Seixas vistas do drone, João Pessoa",
      },
      {
        src: "/images/passeios/piscinas-naturais/seixas/galeria-02.jpg",
        alt: "Piscinas naturais do Seixas com água cristalina, João Pessoa",
      },
      {
        src: "/images/passeios/piscinas-naturais/seixas/galeria-03.jpg",
        alt: "Recifes e piscinas naturais da Praia do Seixas, João Pessoa",
      },
      {
        src: "/images/passeios/piscinas-naturais/seixas/galeria-04.jpg",
        alt: "Vista aérea da praia do Seixas com recifes, João Pessoa",
      },
      {
        src: "/images/passeios/piscinas-naturais/seixas/galeria-05.jpg",
        alt: "Piscinas naturais do Seixas durante maré baixa, João Pessoa",
      },
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
      {
        pergunta: "Vale a pena alugar snorkel e máscara?",
        resposta:
          "Sim, se você nunca fez. O fundo de coral em Seixas é rico em vida marinha e fica mais bonito com a máscara. Disponibilizamos a bordo por valor à parte — consulte no WhatsApp.",
      },
    ],
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
    badges: ["depende-da-mare"],
    preco: "R$ 60",
    duracao: "~3h",
    saida: "Conforme tábua de marés",
    h1: "Piscinas Naturais da Penha em João Pessoa — Versão Exclusiva e Tranquila",
    metaDescription:
      "As piscinas naturais mais exclusivas de João Pessoa, na Praia da Penha. Apenas 2 embarcações por vez. Águas mornas, recifes e tranquilidade. R$ 60. Reserve no WhatsApp!",
    subtituloHero:
      "Apenas duas embarcações por vez. Sem aglomeração. Recifes preservados em frente à Praia da Penha — o mar de Jampa no modo tranquilo.",
    descricao:
      "As piscinas mais exclusivas de João Pessoa — apenas 2 embarcações por vez garantem tranquilidade e contato genuíno com a natureza.",
    lead:
      "Quer mergulhar nas piscinas naturais de João Pessoa sem dividir o recife com dezenas de barcos?\n\nA Penha funciona diferente. Apenas 2 embarcações por vez são liberadas para chegar até as piscinas, o que mantém o ambiente preservado e a experiência muito mais íntima. As águas são as mesmas — mornas, cristalinas, com peixes ao redor — mas o ritmo é outro.\n\nA gente parte da Praia da Penha (sul de João Pessoa) e em 10–15 minutos já está nas piscinas. Saída ajustada à maré baixa. Você só aproveita.",
    descricaoSensorial:
      "O embarque é na Praia da Penha, no extremo sul da orla de João Pessoa, longe do movimento de Tambaú e Cabo Branco. Já o ponto de saída tem uma vibe diferente: praia tranquila, ritmo de vila, mar aberto.\n\nA travessia até as piscinas é curta — 10 a 15 minutos. Quando o catamarã ancora, o recife já está exposto. Águas mornas, fundo claro, peixes circulando perto. Por ter um número limitado de embarcações no local, o silêncio é maior, a água fica mais limpa e dá pra ouvir as ondas e o vento.\n\nNo catamarã tem bar a bordo, banheiros, som e equipamento de salvatagem. Snorkel e máscara opcionais. Você fica nas piscinas até a maré começar a encher — em média 3h de experiência total.",
    coverImage: "/images/passeios/piscinas-naturais/penha/hero-01.jpg",
    imagemAlt: "Piscinas naturais da Penha em João Pessoa — ambiente exclusivo e tranquilo",
    roteiroNarrativo: [
      {
        emoji: "🚢",
        titulo: "Embarque na Praia da Penha",
        texto:
          "Ponto de encontro na Praia da Penha (sul de João Pessoa). Horário ajustado conforme a maré do dia — confirmamos na véspera no WhatsApp.",
      },
      {
        emoji: "🌊",
        titulo: "Travessia tranquila",
        texto:
          "10 a 15 minutos de catamarã até o recife. Mar aberto, vento, paisagem do litoral sul de Jampa.",
      },
      {
        emoji: "🐠",
        titulo: "Nas piscinas exclusivas",
        texto:
          "Apenas 2 embarcações por vez. Águas mornas, recife preservado, peixes coloridos. Snorkel à vontade (opcional). Em boa parte das piscinas você fica de pé.",
      },
      {
        emoji: "⚡",
        titulo: "Catamarã como base",
        texto:
          "Bar a bordo, banheiros, som com microfone, kit de primeiros socorros. Coletes disponíveis. Snorkel e máscara opcionais.",
      },
      {
        emoji: "🚢",
        titulo: "Retorno para a Penha",
        texto:
          "Quando a maré começa a encher e cobre o recife, retornamos. Total ~3h desde o embarque.",
      },
    ],
    rotario: [
      "Embarque na Praia da Penha (conforme tábua de marés)",
      "Travessia curta (~10–15 min)",
      "Banho e snorkel nas piscinas naturais exclusivas",
      "Base no catamarã com bar e banheiro",
      "Retorno ~3h total",
    ],
    incluso: [
      "Passeio compartilhado em catamarã (apenas 2 embarcações por vez no recife)",
      "Acesso às piscinas naturais",
      "Bar a bordo, banheiros, som com microfone",
      "Coletes salva-vidas e kit de primeiros socorros",
      "Orientação e atendimento (Murillo ou equipe)",
    ],
    naoIncluso: [
      "Alimentação (consumo a bordo à parte)",
      "Snorkel e máscara (opcional — consulte no WhatsApp)",
      "Fotógrafo subaquático (opcional)",
      "Transfer até a Praia da Penha (consultar disponibilidade)",
    ],
    observacoes:
      "Sujeito à tábua de marés. Apenas 2 embarcações por vez — reserve com antecedência para garantir vaga. Transfer até a Penha: consultar.",
    alertaMare:
      "As piscinas da Penha só ficam expostas com a maré baixa. A gente checa a tábua de marés antes e confirma com você o melhor horário.",
    nomeCurto: "Penha",
    idealPara: [
      "Quem busca tranquilidade",
      "Casais",
      "Famílias com crianças",
      "Quem quer experiência exclusiva sem aglomeração",
    ],
    faq: [
      {
        pergunta: "O que torna a Penha diferente de Seixas e Picãozinho?",
        resposta:
          "Na Penha são liberadas apenas 2 embarcações por vez no recife — número muito menor que Seixas e Picãozinho. Isso garante mais silêncio, água mais limpa e uma experiência mais íntima com a natureza. O ponto de saída também é diferente: Praia da Penha, no sul de João Pessoa.",
      },
      {
        pergunta: "Criança pode ir?",
        resposta:
          "Sim. Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 48. A partir de 12 anos: valor adulto. As piscinas são rasas e seguras para família.",
      },
      {
        pergunta: "Preciso saber nadar?",
        resposta:
          "Não. As piscinas naturais da Penha são rasas — você fica de pé em boa parte delas. Coletes disponíveis a bordo. Não é necessário saber nadar.",
      },
      {
        pergunta: "Como chego até a Praia da Penha?",
        resposta:
          "A Penha fica no extremo sul de João Pessoa, depois de Cabo Branco e Seixas. Se precisar de transfer de hotel até lá, consulte a gente no WhatsApp — verificamos disponibilidade.",
      },
      {
        pergunta: "O que está incluso nos R$ 60?",
        resposta:
          "Passeio compartilhado em catamarã, acesso às piscinas, bar a bordo, banheiros, coletes e orientação. Snorkel, máscara, fotógrafo e alimentação são à parte.",
      },
      {
        pergunta: "Quanto tempo dura o passeio?",
        resposta:
          "Em média 3h, contando embarque, travessia, tempo nas piscinas e retorno. Janela ajustada à maré.",
      },
      {
        pergunta: "Qual é a política de cancelamento?",
        resposta:
          "Em caso de tempo ou maré desfavorável, remarcamos sem custo. Para cancelamentos pelo cliente, consulte a política completa no WhatsApp.",
      },
    ],
    temAvaliacoes: false,
    avaliacoes: [],
    informacoesPraticas: {
      oqueLevar: [
        "Roupa de banho (já venha com ela)",
        "Toalha",
        "Protetor solar biodegradável",
        "Água ou compre a bordo",
        "Câmera à prova d'água (opcional)",
      ],
      pontoEncontro:
        "Praia da Penha — João Pessoa, PB. A localização exata é enviada no voucher após a confirmação da reserva.",
      horario:
        "Varia conforme a tábua de marés. Confirmamos com você no WhatsApp na véspera.",
    },
  },

  {
    id: "picaozinho",
    nome: "Piscinas Naturais de Picãozinho",
    categoria: "piscinas-naturais",
    slug: "picaozinho",
    dependeDeMare: true,
    badges: ["depende-da-mare"],
    preco: "R$ 60",
    duracao: "~3h",
    saida: "Conforme maré baixa",
    h1: "Piscinas Naturais de Picãozinho — Snorkel a 1,5 km da Praia de Tambaú",
    metaDescription:
      "Aquário natural a céu aberto a 1.500 metros de Tambaú em João Pessoa. Recifes, peixes coloridos e águas mornas. R$ 60 por pessoa. Reserve no WhatsApp!",
    subtituloHero:
      "A apenas 1.500 metros da Praia de Tambaú, um aquário natural com peixes coloridos e águas mornas e rasas. Travessia curta, experiência grande.",
    descricao:
      "A apenas 1.500 metros de Tambaú. Aquário natural a céu aberto com peixes de todas as cores e formações de recife.",
    descricaoLonga:
      "Picãozinho é um dos recifes mais procurados de João Pessoa. Piscinas rasas, mornas e cristalinas, ideais para snorkel. Peixes coloridos, algas, fauna marinha preservada. É como mergulhar em um aquário natural.",
    lead:
      "Quer ver de perto a vida marinha de João Pessoa sem precisar viajar longe?\n\nPicãozinho fica a apenas 1.500 metros da Praia de Tambaú — pertinho da orla. Em poucos minutos de catamarã você já está sobre as formações de recife que criam piscinas naturais rasas, mornas e cristalinas, com peixes coloridos passando ao seu lado.\n\nÉ o passeio ideal para quem quer ver corais, fazer snorkel pela primeira vez ou simplesmente ficar de pé na água esmeralda. A gente cuida da maré, do horário e da estrutura. Você só aproveita.",
    descricaoSensorial:
      "O embarque é em Tambaú, bem na orla. Em poucos minutos de catamarã você chega aos recifes — a travessia é curta o suficiente para crianças e idosos curtirem sem cansar.\n\nQuando a maré recua, as piscinas se abrem. Águas que vão do esverdeado ao azul-claro, fundo de coral com algas e peixes coloridos circulando perto. Em vários pontos você fica de pé na água. Em outros, é só flutuar com a máscara e observar.\n\nNo catamarã tem espaço para tomar água, comprar bebida, descansar. A volta acontece quando a maré começa a subir e cobre os recifes — em média, 3h de experiência total.",
    coverImage: "/images/passeios/piscinas-naturais/picaozinho/hero-01.jpg",
    galleryImages: [
      {
        src: "/images/passeios/piscinas-naturais/picaozinho/hero-01.jpg",
        alt: "Vista aérea dos recifes de Picãozinho com mar turquesa, João Pessoa",
      },
      {
        src: "/images/passeios/piscinas-naturais/picaozinho/galeria-01.jpg",
        alt: "Turistas nas piscinas naturais de Picãozinho, João Pessoa",
      },
      {
        src: "/images/passeios/piscinas-naturais/picaozinho/galeria-02.jpg",
        alt: "Recifes e fauna marinha de Picãozinho, João Pessoa",
      },
      {
        src: "/images/passeios/piscinas-naturais/picaozinho/galeria-03.jpg",
        alt: "Snorkel nas piscinas naturais de Picãozinho, João Pessoa",
      },
      {
        src: "/images/passeios/piscinas-naturais/picaozinho/galeria-04.jpg",
        alt: "Mar cristalino nos recifes de Picãozinho, João Pessoa",
      },
    ],
    roteiroNarrativo: [
      {
        emoji: "🚢",
        titulo: "Embarque em Tambaú",
        texto:
          "Ponto de encontro na Praia de Tambaú. Horário ajustado conforme a maré do dia — a gente confirma com você na véspera no WhatsApp.",
      },
      {
        emoji: "🌊",
        titulo: "Travessia curta de catamarã",
        texto:
          "Apenas 1.500 metros da orla. Em poucos minutos você já está sobre o recife. Ideal para quem prefere navegação rápida.",
      },
      {
        emoji: "🐠",
        titulo: "Mergulho nas piscinas naturais",
        texto:
          "Maré baixa, recifes expostos, piscinas formadas. Águas rasas, mornas e cristalinas. Peixes coloridos passando perto, fauna marinha preservada. Snorkel à vontade (opcional, à parte).",
      },
      {
        emoji: "⚡",
        titulo: "Catamarã é sua base",
        texto:
          "Espaço para descansar, beber água, comprar bebida. Coletes disponíveis para quem preferir.",
      },
      {
        emoji: "🚢",
        titulo: "Retorno para Tambaú",
        texto:
          "Quando a maré começa a subir e cobre os recifes, retornamos. Total ~3h desde o embarque.",
      },
    ],
    rotario: [
      "Embarque em Tambaú (conforme tábua de marés)",
      "Travessia curta de catamarã (~1,5 km)",
      "Banho e snorkel nas piscinas naturais",
      "Observação da fauna marinha",
      "Retorno ~3h total",
    ],
    incluso: [
      "Passeio compartilhado em catamarã",
      "Acesso aos recifes e piscinas naturais",
      "Coletes salva-vidas",
      "Orientação e atendimento (Murillo ou equipe)",
    ],
    naoIncluso: [
      "Alimentação (consumo a bordo à parte)",
      "Snorkel e máscara (opcional — consulte no WhatsApp)",
      "Fotógrafo subaquático (opcional)",
      "Transfer até Tambaú (consultar disponibilidade)",
    ],
    observacoes:
      "Sujeito à maré baixa — só dá pra ir quando a tábua de marés permite. Piscinas rasas e seguras, ideais para família. A gente confirma o horário antes.",
    alertaMare:
      "Picãozinho só aparece com maré baixa. A gente consulta a tábua de marés de João Pessoa antes e te avisa o melhor horário. Você não precisa se preocupar.",
    nomeCurto: "Picãozinho",
    idealPara: ["Snorkel", "Família", "Crianças", "Quem nunca mergulhou", "Fotos marinhas"],
    imagemAlt: "Recife de Picãozinho com peixes coloridos em João Pessoa",
    faq: [
      {
        pergunta: "É seguro para crianças?",
        resposta:
          "Sim. Águas rasas, mornas e cristalinas — em boa parte do recife dá pra ficar de pé. Coletes disponíveis. Supervisão de um responsável é necessária para menores de 6 anos.",
      },
      {
        pergunta: "Vejo muitos peixes?",
        resposta:
          "Sim. Picãozinho é conhecido pela fauna marinha preservada, com peixes coloridos que circulam perto sem se assustar. É como mergulhar em um aquário natural.",
      },
      {
        pergunta: "Preciso saber nadar?",
        resposta:
          "Não. A água é rasa em quase todo o recife — você fica de pé. Coletes salva-vidas disponíveis a bordo para quem se sentir mais confortável.",
      },
      {
        pergunta: "Qual a diferença entre Picãozinho e Seixas?",
        resposta:
          "Picãozinho fica a 1,5 km da Praia de Tambaú — embarque na orla, travessia curta. Seixas exige travessia um pouco mais longa e fica no ponto mais oriental das Américas. Ambos são piscinas naturais lindas; Picãozinho é mais prático para quem quer logística simples.",
      },
      {
        pergunta: "O que está incluso nos R$ 60?",
        resposta:
          "Passeio compartilhado em catamarã, acesso ao recife, coletes salva-vidas e orientação. Snorkel, máscara, fotógrafo subaquático e alimentação são pagos à parte.",
      },
      {
        pergunta: "Quanto tempo dura o passeio?",
        resposta:
          "Em média 3h, contando embarque, travessia, tempo nas piscinas e retorno. Tudo conforme a janela da maré baixa.",
      },
      {
        pergunta: "Qual é a política de cancelamento?",
        resposta:
          "Em caso de tempo ou maré desfavorável, remarcamos sem custo. Para cancelamentos pelo cliente, consulte a política completa no WhatsApp.",
      },
    ],
    temAvaliacoes: false,
    avaliacoes: [],
    informacoesPraticas: {
      oqueLevar: [
        "Roupa de banho (já venha com ela)",
        "Toalha",
        "Protetor solar biodegradável (preserva os corais)",
        "Água ou compre a bordo",
      ],
      pontoEncontro:
        "Praia de Tambaú — João Pessoa, PB. A localização exata é enviada no voucher após a confirmação da reserva.",
      horario:
        "Varia conforme a tábua de marés. Confirmamos com você no WhatsApp na véspera.",
    },
  },

  {
    id: "mergulho",
    nome: "Mergulho com Cilindro",
    categoria: "piscinas-naturais",
    slug: "mergulho",
    preco: "Sob consulta · Resposta em 5 min",
    duracao: "Sob consulta",
    saida: "Conforme maré e visibilidade",
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
    h1: "City Tour em João Pessoa — Centro Histórico, Niemeyer e Ponta do Seixas",
    metaDescription:
      "Tour pela 3ª cidade mais antiga do Brasil: Letreiro, Farol do Cabo Branco, Estação Cabo Branco de Niemeyer, Centro Cultural São Francisco e mais. R$ 80. Reserve no WhatsApp!",
    subtituloHero:
      "3h30 pelo centro histórico, obras de Niemeyer e o ponto mais oriental das Américas. Transfer e guia credenciado.",
    descricao:
      "Conhecer a 3ª cidade mais antiga do Brasil: Niemeyer, ponto mais oriental, patrimônio colonial e praças históricas.",
    lead:
      "Quer entender João Pessoa de verdade, não só as praias?\n\nO City Tour Jampa leva você pelos pontos que contam a história da cidade — a 3ª mais antiga do Brasil, a segunda capital mais verde do mundo e o lugar onde o sol nasce primeiro nas Américas.\n\nA gente passa pelo Letreiro 'João Pessoa', pelo Farol do Cabo Branco na Ponta do Seixas, pela Estação Cabo Branco (obra de Oscar Niemeyer), pelo Bosque dos Sonhos, pela Praça da Independência, pelo Centro Cultural São Francisco, pelo Hotel Globo (patrimônio histórico) e pelo Parque Sólon de Lucena. Transfer ida e volta incluso. Guia credenciado que conta a história enquanto você anda.",
    descricaoSensorial:
      "A manhã começa cedo. A van busca você no hotel ou airbnb em Tambaú, Cabo Branco, Manaíra ou Bessa. A primeira parada costuma ser o Letreiro 'João Pessoa' — clássico para foto. Dali, o Farol do Cabo Branco, na Ponta do Seixas: o ponto mais oriental das Américas. O sol que nasce no Brasil nasce ali.\n\nSegue para a Estação Cabo Branco — espaço de arte e ciência projetado por Oscar Niemeyer. Arquitetura curvilínea, branca, com vista para o mar. Bosque dos Sonhos na sequência: jardim com vista panorâmica.\n\nA parte mais histórica vem agora. Praça da Independência, Centro Cultural São Francisco (entrada não inclusa, mas vale pagar — uma das igrejas barrocas mais importantes do Brasil), Hotel Globo (patrimônio, vista do rio Sanhauá), Praça dos Três Poderes e Parque Sólon de Lucena — a lagoa cercada de palmeiras imperiais no coração da cidade.\n\nO guia conta a história sem pressa. Você fotografa, faz pergunta, entende a cidade. Volta pro hotel por volta do meio-dia.",
    coverImage: "/images/passeios/litoral-sul/roteiro-classico/hero-01.jpg",
    imagemAlt: "Centro histórico de João Pessoa — 3ª cidade mais antiga do Brasil",
    roteiroNarrativo: [
      {
        emoji: "🚐",
        titulo: "Embarque (transfer) — manhã",
        texto:
          "Buscamos você no hotel ou airbnb em Tambaú, Cabo Branco, Manaíra ou Bessa. Horário no voucher.",
      },
      {
        emoji: "📸",
        titulo: "Letreiro 'João Pessoa' + Farol do Cabo Branco",
        texto:
          "Foto no letreiro icônico e parada no Farol do Cabo Branco (Ponta do Seixas) — ponto mais oriental das Américas.",
      },
      {
        emoji: "🏛️",
        titulo: "Estação Cabo Branco (Niemeyer) + Bosque dos Sonhos",
        texto:
          "Obra de Oscar Niemeyer com vista para o mar. Bosque dos Sonhos com mirante para a cidade.",
      },
      {
        emoji: "⛪",
        titulo: "Centro Cultural São Francisco e Hotel Globo",
        texto:
          "Patrimônio barroco do Centro Cultural São Francisco (entrada à parte, opcional). Hotel Globo com vista do rio Sanhauá.",
      },
      {
        emoji: "🌳",
        titulo: "Praças históricas + Parque Sólon de Lucena",
        texto:
          "Praça da Independência, Praça dos Três Poderes e Parque Sólon de Lucena — lagoa cercada de palmeiras imperiais no centro da cidade.",
      },
      {
        emoji: "🚐",
        titulo: "Retorno por volta do meio-dia",
        texto:
          "Devolução no hotel ao final. Total: ~3h30.",
      },
    ],
    rotario: [
      "Saída pela manhã (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Letreiro 'João Pessoa'",
      "Farol do Cabo Branco / Ponta do Seixas",
      "Estação Cabo Branco (Niemeyer)",
      "Bosque dos Sonhos",
      "Praça da Independência",
      "Centro Cultural São Francisco",
      "Hotel Globo",
      "Praça dos Três Poderes",
      "Parque Sólon de Lucena",
      "Retorno ao hotel ~3h30",
    ],
    incluso: [
      "Transfer ida e volta (Tambaú, Cabo Branco, Manaíra, Bessa)",
      "Condutores e guia credenciados",
      "Acompanhamento histórico em todos os pontos",
      "Orientação e atendimento (Murillo ou equipe)",
    ],
    naoIncluso: [
      "Entrada no Centro Cultural São Francisco (opcional, R$ a consultar no local)",
      "Alimentação e bebidas",
      "Compras",
    ],
    observacoes:
      "Funciona de terça a domingo (não opera às segundas). Valor privativo: consultar.",
    nomeCurto: "City Tour",
    idealPara: [
      "Primeiro contato com João Pessoa",
      "Quem aprecia história e arquitetura",
      "Turistas culturais",
      "Dias nublados ou de tempo instável",
      "Famílias",
    ],
    faq: [
      {
        pergunta: "O que é visitado no City Tour?",
        resposta:
          "Letreiro 'João Pessoa', Farol do Cabo Branco (Ponta do Seixas), Estação Cabo Branco (Niemeyer), Bosque dos Sonhos, Praça da Independência, Centro Cultural São Francisco, Hotel Globo, Praça dos Três Poderes e Parque Sólon de Lucena.",
      },
      {
        pergunta: "Funciona todos os dias?",
        resposta:
          "De terça a domingo. Não opera às segundas — alguns dos pontos visitados também fecham nesse dia.",
      },
      {
        pergunta: "A entrada do Centro Cultural São Francisco está inclusa?",
        resposta:
          "Não. A entrada é cobrada no local (valor a consultar) e é opcional — você decide se quer entrar para ver o interior barroco da igreja. Vale a pena para quem aprecia arte sacra.",
      },
      {
        pergunta: "Criança pode ir?",
        resposta:
          "Sim. Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 64. A partir de 12 anos: valor adulto. O passeio é tranquilo, sem trilha.",
      },
      {
        pergunta: "Quanto tempo dura?",
        resposta:
          "Em torno de 3h30, contando saída pela manhã, todas as paradas com tempo para fotos, e retorno ao hotel.",
      },
      {
        pergunta: "Vale a pena se eu tiver pouco tempo em João Pessoa?",
        resposta:
          "Sim — é exatamente para isso. O City Tour resume o melhor da história, arquitetura e cultura de João Pessoa em uma manhã. Combina bem com passeios de praia em outros dias.",
      },
      {
        pergunta: "Qual é a política de cancelamento por chuva?",
        resposta:
          "Com aviso de 2h de antecedência, remarcamos sem custo. O City Tour é uma das melhores opções para dias de tempo instável, já que a maioria dos pontos é coberta ou tem opção interna.",
      },
    ],
    temAvaliacoes: false,
    avaliacoes: [],
    informacoesPraticas: {
      oqueLevar: [
        "Roupa leve e confortável",
        "Tênis ou sapato fechado (alguns pisos históricos)",
        "Protetor solar e óculos de sol",
        "Câmera",
        "Garrafa de água",
        "Dinheiro ou cartão (entrada do Centro Cultural opcional)",
      ],
      pontoEncontro:
        "Buscamos você no hotel ou airbnb em Tambaú, Cabo Branco, Manaíra ou Bessa — João Pessoa, PB. Localização exata no voucher.",
      horario:
        "Saída pela manhã. Retorno por volta do meio-dia (total ~3h30).",
    },
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
    saida: "Saída pela manhã · Horário confirmado por WhatsApp",
    h1: "Porto de Galinhas saindo de João Pessoa — Bate-volta às Piscinas Naturais",
    metaDescription:
      "Bate-volta de João Pessoa para Porto de Galinhas (PE): piscinas naturais únicas, jangadas e águas esverdeadas. R$ 160 com transporte. Reserve no WhatsApp!",
    subtituloHero:
      "Saída pela manhã, retorno à noite. Transporte João Pessoa → Porto de Galinhas → João Pessoa em veículo confortável, com tempo livre para curtir as piscinas e a vila.",
    descricao:
      "Um dos destinos mais famosos do Brasil — piscinas naturais únicas, jangadas e águas esverdeadas.",
    lead:
      "Quer conhecer Porto de Galinhas sem precisar mudar de hospedagem?\n\nA gente faz o bate-volta saindo de João Pessoa pela manhã e voltando à noite. O percurso é cerca de 2h30 de ida em veículo confortável, com saída direto do seu hotel. Você ganha um dia inteiro em uma das praias mais famosas do Brasil — piscinas naturais únicas, vila charmosa e águas esverdeadas — sem perder a logística da sua viagem.\n\nDocumento com foto é obrigatório (viagem interestadual PB → PE). Alimentação e passeio de jangada nas piscinas são por conta do visitante.",
    descricaoSensorial:
      "A van busca você no hotel pela manhã (horário confirmado no WhatsApp). A viagem é tranquila, com paradas para banheiro e lanche no caminho. Em pouco tempo você está em Porto de Galinhas.\n\nA vila é charmosa: lojas, restaurantes, ambiente turístico organizado. Da praia central, você vê as jangadas levando turistas para as piscinas naturais — formações de coral a poucos metros da areia que criam aquários a céu aberto com água verde-cristalina e peixes coloridos.\n\nTempo livre para você curtir do seu jeito: piscinas naturais (jangada paga no local), praia, vila, almoço. A gente combina o ponto e horário de retorno antes da chegada. À noite, transporte de volta para João Pessoa.",
    coverImage: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
    imagemAlt: "Piscinas naturais de Porto de Galinhas em Pernambuco",
    roteiroNarrativo: [
      {
        emoji: "🚐",
        titulo: "Embarque pela manhã",
        texto:
          "Buscamos você no hotel em João Pessoa. Horário ajustado para chegar em Porto de Galinhas com tempo de aproveitar.",
      },
      {
        emoji: "🛣️",
        titulo: "Viagem João Pessoa → Porto de Galinhas",
        texto:
          "Cerca de 2h30 de viagem em veículo confortável, com parada para banheiro/lanche. Documento com foto obrigatório (interestadual).",
      },
      {
        emoji: "🏖️",
        titulo: "Chegada em Porto de Galinhas",
        texto:
          "Tempo livre na vila e na praia. Lojas, restaurantes, ambiente turístico organizado.",
      },
      {
        emoji: "⛵",
        titulo: "Piscinas naturais (opcional)",
        texto:
          "Jangadas levam turistas até as piscinas a poucos metros da praia — água verde-cristalina, corais e peixes. Pagamento da jangada feito no local.",
      },
      {
        emoji: "🍽️",
        titulo: "Almoço e tempo livre (não incluso)",
        texto:
          "Várias opções de restaurantes na vila. O guia indica os melhores para o seu perfil.",
      },
      {
        emoji: "🚐",
        titulo: "Retorno à noite",
        texto:
          "Combinamos horário de embarque para retornar a João Pessoa à noite, com chegada ao hotel.",
      },
    ],
    rotario: [
      "Saída de João Pessoa pela manhã",
      "Viagem ~2h30 (parada técnica no caminho)",
      "Tempo livre em Porto de Galinhas (vila + praia)",
      "Piscinas naturais via jangada (opcional, à parte)",
      "Almoço (não incluso)",
      "Retorno a João Pessoa à noite",
    ],
    incluso: [
      "Transporte ida e volta (João Pessoa ↔ Porto de Galinhas) em veículo confortável",
      "Condutor credenciado",
      "Orientação e atendimento (Murillo ou equipe)",
    ],
    naoIncluso: [
      "Alimentação (almoço, bebidas, lanches)",
      "Jangada para as piscinas naturais (pagar no local)",
      "Compras e atividades extras na vila",
      "Pedágios e taxas locais (quando aplicável)",
    ],
    observacoes:
      "Documento com foto obrigatório (viagem interestadual PB → PE). Saída sujeita a número mínimo de passageiros — verifique disponibilidade. Retorno à noite.",
    nomeCurto: "Porto de Galinhas",
    idealPara: [
      "Quem quer conhecer Porto de Galinhas sem mudar de hospedagem",
      "Famílias",
      "Casais",
      "Bate-volta organizado",
    ],
    faq: [
      {
        pergunta: "O que está incluso nos R$ 160?",
        resposta:
          "Transporte de ida e volta (João Pessoa ↔ Porto de Galinhas) em veículo confortável, com condutor credenciado e orientação. Alimentação, jangada para as piscinas e pedágios são por conta do visitante.",
      },
      {
        pergunta: "Preciso de documento?",
        resposta:
          "Sim. Documento com foto obrigatório — é viagem interestadual entre Paraíba e Pernambuco. Traga RG, CNH ou passaporte.",
      },
      {
        pergunta: "Quanto custa a jangada para as piscinas naturais?",
        resposta:
          "O valor da jangada é pago diretamente aos jangadeiros no local, em Porto de Galinhas. O preço varia conforme a temporada e o tamanho do grupo. Consulte ao chegar.",
      },
      {
        pergunta: "Criança paga?",
        resposta:
          "Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 128. A partir de 12 anos: valor adulto. Crianças devem estar acompanhadas por responsável.",
      },
      {
        pergunta: "Quanto tempo dura a viagem de ida?",
        resposta:
          "Cerca de 2h30 a 3h, com parada para banheiro e lanche. O retorno é à noite, geralmente após o pôr do sol.",
      },
      {
        pergunta: "Tem como almoçar em Porto de Galinhas?",
        resposta:
          "Sim. A vila tem dezenas de restaurantes — de comida regional a internacional. O guia indica opções para o seu perfil. Alimentação não está inclusa no valor.",
      },
      {
        pergunta: "Qual é a política de cancelamento?",
        resposta:
          "Em caso de imprevistos com aviso de 24h, remarcamos sem custo. Cancelamentos pelo cliente: consulte a política completa no WhatsApp.",
      },
    ],
    temAvaliacoes: false,
    avaliacoes: [],
    informacoesPraticas: {
      oqueLevar: [
        "Documento com foto (obrigatório)",
        "Roupa de banho (vista por baixo)",
        "Toalha",
        "Protetor solar biodegradável",
        "Chapéu ou boné",
        "Câmera",
        "Dinheiro em espécie e cartão (jangada, almoço, compras)",
      ],
      pontoEncontro:
        "Buscamos você no hotel em João Pessoa, em regiões atendidas (Tambaú, Cabo Branco, Manaíra, Bessa). Confirmamos o ponto e horário exatos no voucher.",
      horario:
        "Saída pela manhã (horário confirmado no WhatsApp). Retorno à noite ao hotel.",
    },
  },

  {
    id: "praia-de-pipa",
    nome: "Praia de Pipa — Rio Grande do Norte",
    categoria: "interestaduais",
    slug: "praia-de-pipa",
    preco: "R$ 160",
    duracao: "Dia inteiro",
    saida: "Saída pela manhã · Horário confirmado por WhatsApp",
    h1: "Praia de Pipa saindo de João Pessoa — Bate-volta a Tibau do Sul, RN",
    metaDescription:
      "Bate-volta de João Pessoa para Praia de Pipa (RN): Praia do Amor, Praia do Moleque, vila charmosa e mirantes com vista do Atlântico. R$ 160. Reserve no WhatsApp!",
    subtituloHero:
      "Saída pela manhã, retorno à noite. Transporte João Pessoa → Pipa → João Pessoa para curtir um dia inteiro no destino mais charmoso do nordeste.",
    descricao:
      "Visual cinematográfico, praias paradisíacas, vila charmosa — o destino mais descolado do nordeste.",
    lead:
      "Quer conhecer Pipa em um dia, sem precisar trocar de hotel?\n\nA gente faz o bate-volta a Praia de Pipa (Tibau do Sul, RN) saindo de João Pessoa pela manhã. São aproximadamente 2h de viagem em veículo confortável. Você ganha um dia inteiro para curtir a Praia do Amor, a Praia do Moleque, mirantes com vista do Atlântico e a vila com restaurantes, lojinhas e vida noturna.\n\nDocumento com foto é obrigatório (viagem interestadual PB → RN). Alimentação não está inclusa.",
    descricaoSensorial:
      "A van busca você no hotel pela manhã (horário confirmado no WhatsApp). O trajeto até Pipa passa por estradas costeiras com paisagens bonitas. Em pouco tempo você chega à vila.\n\nPipa é uma vila charmosa, com ruas de pedra, fachadas coloridas e gente do mundo todo. A praia central é movimentada, mas as vizinhas — Amor, Moleque, Madeiro — são paraíso. Falésias coloridas caindo no mar, ondas para surf, golfinhos que às vezes aparecem perto da costa, mirantes com vista do Atlântico.\n\nTempo livre para você curtir do seu jeito: caminhar pela vila, almoçar com vista, banho de mar nas praias paradisíacas, esquecer do mundo. Antes do retorno, a gente combina o ponto e horário. À noite, transporte de volta para João Pessoa.",
    coverImage: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
    imagemAlt: "Praia de Pipa no Rio Grande do Norte — falésias e águas cristalinas",
    roteiroNarrativo: [
      {
        emoji: "🚐",
        titulo: "Embarque pela manhã",
        texto:
          "Buscamos você no hotel em João Pessoa. Horário ajustado para chegar em Pipa com tempo livre para aproveitar.",
      },
      {
        emoji: "🛣️",
        titulo: "Viagem João Pessoa → Pipa",
        texto:
          "Cerca de 2h de viagem em veículo confortável, com paisagem costeira. Documento com foto obrigatório (interestadual PB → RN).",
      },
      {
        emoji: "🏖️",
        titulo: "Chegada em Pipa",
        texto:
          "Tempo livre na vila e nas praias. Praia do Amor, Praia do Moleque, mirantes do Atlântico.",
      },
      {
        emoji: "🐬",
        titulo: "Praias paradisíacas",
        texto:
          "Banho nas praias mais bonitas do RN. Em alguns dias, dá pra ver golfinhos perto da costa.",
      },
      {
        emoji: "🍽️",
        titulo: "Almoço e tempo na vila (não incluso)",
        texto:
          "Restaurantes com vista de mar, comida regional ou internacional. Lojas, vida charmosa de vila.",
      },
      {
        emoji: "🚐",
        titulo: "Retorno à noite",
        texto:
          "Combinamos horário de embarque para retornar a João Pessoa à noite, com chegada ao hotel.",
      },
    ],
    rotario: [
      "Saída de João Pessoa pela manhã",
      "Viagem ~2h (estradas costeiras)",
      "Tempo livre em Pipa (vila + praias)",
      "Visita à Praia do Amor e Praia do Moleque",
      "Mirantes com vista do Atlântico",
      "Almoço (não incluso)",
      "Retorno a João Pessoa à noite",
    ],
    incluso: [
      "Transporte ida e volta (João Pessoa ↔ Pipa) em veículo confortável",
      "Condutor credenciado",
      "Orientação e atendimento (Murillo ou equipe)",
    ],
    naoIncluso: [
      "Alimentação (almoço, bebidas, lanches)",
      "Passeios de barco e atividades náuticas em Pipa (pagar no local)",
      "Compras na vila",
      "Pedágios e taxas locais (quando aplicável)",
    ],
    observacoes:
      "Documento com foto obrigatório (viagem interestadual PB → RN). Saída sujeita a número mínimo de passageiros. Retorno à noite.",
    nomeCurto: "Pipa",
    idealPara: [
      "Quem busca praias bonitas e vila animada",
      "Casais",
      "Amigos",
      "Bate-volta cultural e de praia",
    ],
    faq: [
      {
        pergunta: "O que está incluso nos R$ 160?",
        resposta:
          "Transporte de ida e volta (João Pessoa ↔ Pipa) em veículo confortável, condutor credenciado e orientação. Alimentação, passeios náuticos e compras são por conta do visitante.",
      },
      {
        pergunta: "Preciso de documento?",
        resposta:
          "Sim. Documento com foto obrigatório — é viagem interestadual entre Paraíba e Rio Grande do Norte. Traga RG, CNH ou passaporte.",
      },
      {
        pergunta: "Criança paga?",
        resposta:
          "Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 128. A partir de 12 anos: valor adulto. Crianças devem estar acompanhadas por responsável.",
      },
      {
        pergunta: "Quanto tempo dura a viagem?",
        resposta:
          "Cerca de 2h de João Pessoa até Pipa. O retorno é à noite, com chegada ao hotel após o pôr do sol.",
      },
      {
        pergunta: "Dá para ver golfinhos?",
        resposta:
          "Em alguns dias, dá. Os golfinhos aparecem com mais frequência na Praia do Madeiro e em mar aberto. Para garantir, recomendamos pagar um passeio de barco no local (à parte).",
      },
      {
        pergunta: "Qual praia é melhor para banho em Pipa?",
        resposta:
          "Praia do Amor e Praia do Madeiro são as mais paradisíacas. Praia do Moleque tem mais agito. Praia Central da vila é boa para combinar com restaurantes e lojinhas.",
      },
      {
        pergunta: "Qual é a política de cancelamento?",
        resposta:
          "Em caso de imprevistos com aviso de 24h, remarcamos sem custo. Cancelamentos pelo cliente: consulte a política completa no WhatsApp.",
      },
    ],
    temAvaliacoes: false,
    avaliacoes: [],
    informacoesPraticas: {
      oqueLevar: [
        "Documento com foto (obrigatório)",
        "Roupa de banho (vista por baixo)",
        "Toalha",
        "Protetor solar biodegradável",
        "Chapéu ou boné",
        "Câmera",
        "Tênis confortável para a vila (ruas de pedra)",
        "Dinheiro em espécie e cartão",
      ],
      pontoEncontro:
        "Buscamos você no hotel em João Pessoa, em regiões atendidas (Tambaú, Cabo Branco, Manaíra, Bessa). Ponto e horário exatos no voucher.",
      horario:
        "Saída pela manhã (horário confirmado no WhatsApp). Retorno à noite ao hotel.",
    },
  },

  {
    id: "natal",
    nome: "Natal — Rio Grande do Norte",
    categoria: "interestaduais",
    slug: "natal",
    preco: "R$ 160",
    duracao: "Dia inteiro",
    saida: "Saída pela manhã · Horário confirmado por WhatsApp",
    h1: "Natal saindo de João Pessoa — Cajueiro de Pirangi, Foguetes e Ponta Negra",
    metaDescription:
      "Bate-volta de João Pessoa para Natal (RN): Maior Cajueiro do Mundo, Barreira do Inferno, Pirangi e Ponta Negra. R$ 160 com transporte. Reserve no WhatsApp!",
    subtituloHero:
      "Saída pela manhã, retorno à noite. Transporte João Pessoa → Natal → João Pessoa em veículo confortável para um dia inteiro de praias e história potiguar.",
    descricao:
      "Maior cajueiro do mundo, Centro de Lançamento de Foguetes e praias mornas de Ponta Negra.",
    lead:
      "Quer conhecer a capital potiguar em um dia, sem mudar de hotel?\n\nA gente faz o bate-volta a Natal saindo de João Pessoa pela manhã. São cerca de 3h de viagem em veículo confortável. Você ganha um dia inteiro para conhecer o Maior Cajueiro do Mundo (em Pirangi), o Centro de Lançamento da Barreira do Inferno e as praias mornas de Pirangi e Ponta Negra — incluindo o Morro do Careca, cartão postal da cidade.\n\nDocumento com foto é obrigatório (viagem interestadual PB → RN). Alimentação não está inclusa.",
    descricaoSensorial:
      "A van busca você no hotel pela manhã (horário confirmado no WhatsApp). O trajeto até Natal passa por estradas tranquilas, com paisagem nordestina.\n\nEm Pirangi do Norte você visita o Maior Cajueiro do Mundo — uma árvore tão grande que cobre quase 9.000 m². Caminhar por baixo dela é uma experiência diferente. Depois, a Barreira do Inferno: Centro de Lançamento de Foguetes da Força Aérea Brasileira (visita externa).\n\nA tarde é nas praias. Pirangi tem água morna e areia clara. Ponta Negra é o cartão postal — o Morro do Careca é aquela duna gigante que aparece em toda foto. Tempo livre para banho, almoço (não incluso) e descanso. Antes do retorno, combinamos o ponto e horário. À noite, transporte de volta para João Pessoa.",
    coverImage: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
    imagemAlt: "Ponta Negra em Natal, Rio Grande do Norte",
    roteiroNarrativo: [
      {
        emoji: "🚐",
        titulo: "Embarque pela manhã",
        texto:
          "Buscamos você no hotel em João Pessoa. Horário ajustado para chegar em Natal com tempo de aproveitar.",
      },
      {
        emoji: "🛣️",
        titulo: "Viagem João Pessoa → Natal",
        texto:
          "Cerca de 3h de viagem em veículo confortável, com parada técnica. Documento com foto obrigatório (interestadual PB → RN).",
      },
      {
        emoji: "🌳",
        titulo: "Maior Cajueiro do Mundo (Pirangi)",
        texto:
          "Visita ao cajueiro gigante de Pirangi do Norte, com cerca de 9.000 m² de copa. Caminhada por baixo da árvore, fotos, mirante.",
      },
      {
        emoji: "🚀",
        titulo: "Centro de Lançamento Barreira do Inferno",
        texto:
          "Passagem pelo Centro de Lançamento de Foguetes da Força Aérea Brasileira (visita externa, sem entrada).",
      },
      {
        emoji: "🏖️",
        titulo: "Praias de Pirangi e Ponta Negra",
        texto:
          "Tempo nas praias mornas de Pirangi e Ponta Negra, com vista do Morro do Careca — cartão postal de Natal.",
      },
      {
        emoji: "🍽️",
        titulo: "Almoço livre (não incluso)",
        texto:
          "Restaurantes em Ponta Negra com comida regional e vista de mar.",
      },
      {
        emoji: "🚐",
        titulo: "Retorno à noite",
        texto:
          "Combinamos horário de embarque para retornar a João Pessoa à noite, com chegada ao hotel.",
      },
    ],
    rotario: [
      "Saída de João Pessoa pela manhã",
      "Viagem ~3h (com parada técnica)",
      "Maior Cajueiro do Mundo em Pirangi",
      "Centro de Lançamento Barreira do Inferno",
      "Praia de Pirangi e Praia de Ponta Negra (Morro do Careca)",
      "Almoço (não incluso)",
      "Retorno a João Pessoa à noite",
    ],
    incluso: [
      "Transporte ida e volta (João Pessoa ↔ Natal) em veículo confortável",
      "Condutor credenciado",
      "Orientação e atendimento (Murillo ou equipe)",
    ],
    naoIncluso: [
      "Alimentação (almoço, bebidas, lanches)",
      "Entradas em atrações que cobrem ingresso (quando houver)",
      "Compras",
      "Pedágios e taxas locais (quando aplicável)",
    ],
    observacoes:
      "Documento com foto obrigatório (viagem interestadual PB → RN). Saída sujeita a número mínimo de passageiros. Retorno à noite.",
    nomeCurto: "Natal",
    idealPara: [
      "Quem quer conhecer Natal a partir de João Pessoa",
      "Famílias",
      "Casais",
      "Curiosos por história e ciência (cajueiro + foguetes)",
    ],
    faq: [
      {
        pergunta: "O que está incluso nos R$ 160?",
        resposta:
          "Transporte de ida e volta (João Pessoa ↔ Natal) em veículo confortável, com condutor credenciado e orientação. Alimentação, entradas e compras são por conta do visitante.",
      },
      {
        pergunta: "Preciso de documento?",
        resposta:
          "Sim. Documento com foto obrigatório — é viagem interestadual entre Paraíba e Rio Grande do Norte. Traga RG, CNH ou passaporte.",
      },
      {
        pergunta: "Criança paga?",
        resposta:
          "Abaixo de 5 anos não paga. De 5 a 11 anos: R$ 128. A partir de 12 anos: valor adulto. Crianças devem estar acompanhadas por responsável.",
      },
      {
        pergunta: "Quanto tempo dura a viagem?",
        resposta:
          "Cerca de 3h de João Pessoa até Natal. O retorno é à noite, com chegada ao hotel após o pôr do sol.",
      },
      {
        pergunta: "Dá para entrar no cajueiro?",
        resposta:
          "Sim. O Maior Cajueiro do Mundo tem entrada paga (não inclusa no valor do passeio). Vale muito a visita — caminhar por baixo de uma única árvore que cobre 9.000 m² é uma experiência única.",
      },
      {
        pergunta: "É possível entrar na Barreira do Inferno?",
        resposta:
          "A visita à Barreira do Inferno (Centro de Lançamento de Foguetes da FAB) é externa nesse passeio. Para visitação interna, é necessário agendamento prévio com a Força Aérea — não está incluso.",
      },
      {
        pergunta: "Qual é a política de cancelamento?",
        resposta:
          "Em caso de imprevistos com aviso de 24h, remarcamos sem custo. Cancelamentos pelo cliente: consulte a política completa no WhatsApp.",
      },
    ],
    temAvaliacoes: false,
    avaliacoes: [],
    informacoesPraticas: {
      oqueLevar: [
        "Documento com foto (obrigatório)",
        "Roupa de banho (vista por baixo)",
        "Toalha",
        "Protetor solar biodegradável",
        "Chapéu ou boné",
        "Câmera",
        "Tênis confortável",
        "Dinheiro em espécie e cartão",
      ],
      pontoEncontro:
        "Buscamos você no hotel em João Pessoa, em regiões atendidas (Tambaú, Cabo Branco, Manaíra, Bessa). Ponto e horário exatos no voucher.",
      horario:
        "Saída pela manhã (horário confirmado no WhatsApp). Retorno à noite ao hotel.",
    },
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
