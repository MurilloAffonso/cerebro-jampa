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
 *   [CONFIRMAR COM MURILLO: ...] marca o que precisa de validação antes de publicar.
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

export const blogPosts: BlogPost[] = [
  {
    slug: "o-que-fazer-em-joao-pessoa",
    title: "O Que Fazer em João Pessoa: guia completo por quem vive aqui",
    description:
      "Roteiro completo de João Pessoa por quem vive aqui: praias, piscinas naturais, city tour e dicas práticas para aproveitar cada dia.",
    category: "Guia da Cidade",
    cluster: "guia-cidade",
    status: "published",
    updatedAt: "2026-05-14",
    author: AUTHOR,
    readingTime: 12,
    keywords: [
      "o que fazer em João Pessoa",
      "turismo João Pessoa",
      "o que visitar João Pessoa",
      "passeios João Pessoa",
      "atrações João Pessoa",
      "roteiro João Pessoa",
      "ponto turístico João Pessoa",
    ],
    relatedPasseios: ["seixas", "areia-vermelha-catamara", "litoral-sul-classico"],
    faq: [
      {
        pergunta: "Quantos dias são suficientes para conhecer João Pessoa?",
        resposta:
          "Três dias dão uma boa base: um dia para piscinas naturais (dependendo da maré), um dia para o Litoral Sul e um dia para o Litoral Norte com pôr do sol no Jacaré. Com cinco dias, você consegue aprofundar cada destino e ainda conhecer o centro histórico com calma. Menos de dois dias e você vai querer voltar.",
      },
      {
        pergunta: "João Pessoa fica perto de Natal e Recife?",
        resposta:
          "João Pessoa fica a cerca de 120 km de Recife e a cerca de 185 km de Natal. É possível usar João Pessoa como base e fazer uma excursão de um dia para cada cidade, mas a viagem de ida e volta consome bastante tempo. O recomendado é planejar pelo menos 3 dias em cada destino se a intenção é aproveitar bem.",
      },
      {
        pergunta: "Qual é a melhor época para visitar João Pessoa?",
        resposta:
          "João Pessoa tem clima quente o ano todo. O período de menor chuva vai de setembro a fevereiro, o que favorece as piscinas naturais. Julho e agosto têm temperaturas mais amenas e movimentação alta de turistas. A maré baixa é o fator mais importante para as piscinas naturais — e isso acontece em qualquer mês do ano, em horários diferentes.",
      },
    ],
    sections: [
      {
        heading: "Por que João Pessoa merece mais de um fim de semana",
        body: "João Pessoa é a terceira cidade mais antiga do Brasil e ao mesmo tempo uma das capitais mais tranquilas do Nordeste. Está no ponto mais oriental das Américas — o primeiro lugar do continente a receber a luz do sol. Essa posição geográfica não é só curiosidade: ela define a qualidade da luz, o ritmo das marés e a beleza das praias que compõem a cidade. Você vai encontrar aqui piscinas naturais de água cristalina, um litoral sul com praias quase intocadas, um litoral norte com cenários de catamarã e pôr do sol famoso, e um centro histórico com igrejas coloniais, mercados e a Lagoa como point local. Três dias é o mínimo para ver o essencial.",
      },
      {
        heading: "As piscinas naturais: a atração mais buscada de João Pessoa",
        body: "A grande atração de João Pessoa são as piscinas naturais formadas por recifes de coral em maré baixa. As principais são: Seixas (no ponto mais oriental das Américas), Picãozinho (na orla, mais acessível), Areia Vermelha (uma ilha que aparece e desaparece com a maré, perto de Cabedelo) e Penha (no Litoral Sul). Cada uma tem caráter diferente, e a maré baixa é o que determina quando estão acessíveis. Antes de planejar qualquer visita, é essencial verificar a tábua de marés para o seu dia — ou falar com Murillo no WhatsApp para que ele confirme a condição ideal.",
      },
      {
        heading: "Litoral Sul: praias extensas, trilhas e quadriciclo em Coqueirinho",
        body: "O Litoral Sul começa em Jacarapé e se estende por mais de 30 km de praias com características bem diferentes. Coqueirinho tem piscinas naturais, falésias e é o ponto de partida para o quadriciclo nas dunas. Tabatinga tem recifes e uma das únicas praias de naturismo regularizada da Paraíba. Praia Bela é menos movimentada, com piscinas e recifes em maré baixa. Tambaba é ponto de parada para quem vai mais longe. O Litoral Sul se faz em passeio de dia inteiro, com saída cedo para aproveitar a maré certa.",
      },
      {
        heading: "Litoral Norte: o pôr do sol do Jacaré e a ilha de Areia Vermelha",
        body: "O Litoral Norte de João Pessoa tem como polo central o município de Cabedelo, às margens do Rio Paraíba. O Pôr do Sol do Jacaré é um dos eventos mais fotografados da Paraíba: turistas se reúnem nas margens do rio para assistir ao pôr do sol enquanto um saxofonista toca ao vivo. A Areia Vermelha é um banco de areia que fica submerso na maré cheia e emerge na maré baixa, formando uma ilha temporária no oceano. O acesso é feito de catamarã a partir do Rio Jacaré. Também vale visitar o Fort Orange, ruínas holandesas do século XVII às margens do rio.",
      },
      {
        heading: "City Tour: do Cabo Branco até o centro histórico",
        body: "Para quem não veio só pelas praias, o City Tour cobre os pontos históricos e culturais de João Pessoa. O Faro do Cabo Branco é o ponto mais oriental das Américas em terra firme — um mirante com vista para o Atlântico. O Parque Solon de Lucena, conhecida como a Lagoa, é o ponto de encontro dos pessoenses com bancos de madeira, quiosques e feira de artesanato. O centro histórico tem igrejas barrocas, o casarão do Museu Fotográfico e o mercado de artesanato. O City Tour se faz em meio período e combina bem com manhã ou tarde de praia.",
      },
      {
        heading: "Como organizar seu roteiro com orientação local pelo WhatsApp",
        body: "O maior desafio de planejar uma viagem a João Pessoa é encaixar as marés dentro do seu calendário. Piscinas naturais só funcionam na maré certa — e isso define qual passeio vai no qual dia. Murillo faz esse planejamento direto pelo WhatsApp: você manda as suas datas, ele verifica a tábua de marés e sugere a ordem certa dos passeios. Não é formulário, não é chatbot — é orientação direta de quem organiza esses passeios todos os dias. Curta Jampa com a gente.",
      },
    ],
  },
  {
    slug: "piscinas-naturais-joao-pessoa-guia",
    title: "Piscinas Naturais em João Pessoa: guia completo",
    description:
      "Seixas, Picãozinho, Areia Vermelha e Penha: como funcionam as piscinas naturais de João Pessoa, melhor maré e o que esperar de cada uma.",
    category: "Piscinas Naturais",
    cluster: "piscinas-naturais",
    status: "published",
    updatedAt: "2026-05-14",
    author: AUTHOR,
    readingTime: 10,
    keywords: [
      "piscinas naturais João Pessoa",
      "piscinas naturais Paraíba",
      "Seixas João Pessoa",
      "Picãozinho João Pessoa",
      "Areia Vermelha João Pessoa",
      "melhor maré piscinas naturais",
      "piscinas naturais maré baixa",
    ],
    relatedPasseios: ["seixas", "picaozinho", "penha", "areia-vermelha-catamara"],
    faq: [
      {
        pergunta: "Qual é a diferença entre Seixas e Picãozinho?",
        resposta:
          "O Seixas fica no extremo leste de João Pessoa, próximo ao Farol do Cabo Branco, e suas piscinas ficam entre recifes mais afastados da orla. O Picãozinho fica dentro da orla da cidade, acessível de barco a partir da Praia de Tambaú. O Picãozinho tende a ser mais tranquilo e raso, indicado para famílias com crianças. O Seixas tem piscinas maiores e mais abertas. Murillo orienta qual escolher conforme seu perfil e as condições de maré do seu dia.",
      },
      {
        pergunta: "Preciso saber nadar para visitar as piscinas naturais?",
        resposta:
          "Na maré baixa, as piscinas naturais costumam ter água rasa o suficiente para ficar de pé em boa parte das áreas. Colete salva-vidas está disponível a bordo. Mesmo quem não sabe nadar consegue aproveitar a maior parte das piscinas com segurança — especialmente o Picãozinho e o Seixas. Avise Murillo no WhatsApp se tiver alguma restrição para ele orientar o melhor passeio para o seu grupo.",
      },
      {
        pergunta: "Como saber se a maré estará boa no dia da minha visita?",
        resposta:
          "A forma mais direta é verificar a tábua de marés oficial da Marinha para João Pessoa e checar se há maré baixa no período da manhã ou da tarde do seu dia. Mas o mais simples é mandar mensagem para o Murillo no WhatsApp com as suas datas — ele verifica a tábua e informa se o dia está com maré boa e em qual horário.",
      },
    ],
    sections: [
      {
        heading: "O que são as piscinas naturais de João Pessoa",
        body: "As piscinas naturais são áreas de água rasa formadas por recifes de coral e arenito que ficam expostos durante a maré baixa. Com a maré alta, o mar cobre os recifes e as piscinas deixam de existir. Com a maré baixa, os recifes emergem ou ficam rentes à superfície, formando piscinas naturais com água quente, transparente e calma. João Pessoa tem quatro piscinas naturais principais, cada uma com caráter diferente: Seixas, Picãozinho, Areia Vermelha e Penha.",
      },
      {
        heading: "Piscinas Naturais do Seixas: o ponto mais oriental das Américas",
        body: "A Praia do Seixas fica no extremo leste de João Pessoa, no mesmo ponto do Farol do Cabo Branco — o local que recebe os primeiros raios de sol do continente americano a cada dia. As piscinas naturais do Seixas são formadas por um extenso cordão de recifes entre 500 metros e 1 km da praia. Na maré baixa, a área fica acessível e é possível caminhar pelos recifes, mergulhar nas piscinas e ver peixes e corais coloridos. O acesso se faz de barco ou jangada a partir da praia. O Seixas é o passeio de maior procura em João Pessoa e depende inteiramente da maré baixa para funcionar bem.",
      },
      {
        heading: "Picãozinho: a piscina natural dentro da orla de João Pessoa",
        body: "O Picãozinho fica a cerca de 700 metros da Praia de Tambaú, acessível de barco em poucos minutos. Por estar dentro da orla da cidade, é a piscina natural mais próxima e mais fácil de incluir num roteiro de meio dia. A água é rasa e tranquila, indicada para crianças e para quem prefere uma experiência mais calma. Na maré baixa, os recifes emergem e formam um labirinto de piscinas com peixes pequenos e coral. É um ótimo ponto de entrada para quem ainda não conhece as piscinas naturais da Paraíba.",
      },
      {
        heading: "Areia Vermelha: a ilha que aparece e desaparece com a maré",
        body: "A Areia Vermelha não é tecnicamente uma piscina natural de recife — é um banco de areia que fica submerso na maré cheia e emerge como uma ilha na maré baixa. Fica em frente à costa de Cabedelo, no Litoral Norte de João Pessoa. O acesso é feito de catamarã a partir do Rio Jacaré. Na maré baixa, a ilha tem uma piscina natural ao redor formada pelo encontro do Rio Paraíba com o Atlântico — a água fica esverdeada pelo sedimento do rio e tem temperatura amena. É um dos passeios mais visuais e fotogênicos da região.",
      },
      {
        heading: "Penha: piscinas naturais no Litoral Sul",
        body: "A Praia da Penha fica no Litoral Sul de João Pessoa, mais afastada do centro, e tem piscinas naturais formadas por recifes similares às do Seixas. É uma praia menos conhecida do turismo de massa, o que garante menos gente e mais tranquilidade. O acesso é feito pelo Litoral Sul e pode ser combinado com outros pontos da mesma rota. [CONFIRMAR COM MURILLO: disponibilidade do passeio para Penha e dependência de maré específica]",
      },
      {
        heading: "Como a maré determina qual piscina natural visitar e quando",
        body: "Cada piscina natural tem sua janela de maré ideal. O Seixas e o Picãozinho funcionam melhor com maré baixa de coeficiente acima de [CONFIRMAR COM MURILLO: coeficiente mínimo ideal]. A Areia Vermelha depende da maré baixa para a ilha emergir. A tábua de marés muda todos os dias — o horário de maré baixa pode ser de manhã um dia e de tarde no dia seguinte. A forma mais prática de planejar é verificar a tábua para as suas datas ou falar com Murillo no WhatsApp: ele consulta a tábua e orienta qual piscina natural é melhor para o seu dia e horário.",
      },
    ],
  },
  {
    slug: "passeio-praia-do-seixas",
    title: "Passeio para a Praia do Seixas: piscinas naturais e ponto mais oriental",
    description:
      "Como funciona o passeio para a Praia do Seixas em João Pessoa, melhor horário pela tábua de marés e o que levar.",
    category: "Piscinas Naturais",
    cluster: "piscinas-naturais",
    status: "published",
    updatedAt: "2026-05-14",
    author: AUTHOR,
    readingTime: 8,
    keywords: [
      "Praia do Seixas João Pessoa",
      "passeio Seixas",
      "piscinas naturais Seixas",
      "ponto mais oriental Américas",
      "Seixas maré baixa",
      "passeio piscina natural João Pessoa",
    ],
    relatedPasseios: ["seixas"],
    faq: [
      {
        pergunta: "O Seixas fica longe do centro de João Pessoa?",
        resposta:
          "A Praia do Seixas fica no extremo leste de João Pessoa, próximo ao Cabo Branco, a cerca de 10 km do centro da cidade. O acesso é por estrada e a praia em si é tranquila, sem a movimentação da orla principal. O passeio organizado inclui o deslocamento para a praia e o barco até as piscinas naturais.",
      },
      {
        pergunta: "O passeio para o Seixas inclui mergulho com cilindro?",
        resposta:
          "O passeio padrão para o Seixas inclui snorkeling em apneia — você mergulha na superfície com máscara. Mergulho com cilindro é uma modalidade diferente, disponível em passeio separado. [CONFIRMAR COM MURILLO: disponibilidade de mergulho com cilindro no Seixas e condições]",
      },
      {
        pergunta: "Qual é o horário ideal para visitar o Seixas?",
        resposta:
          "O horário ideal depende da tábua de marés do dia. A maré baixa pode acontecer de manhã ou de tarde — e isso varia todos os dias. A regra é: ir com a maré baixa. Murillo verifica a tábua antes de confirmar qualquer saída.",
      },
    ],
    sections: [
      {
        heading: "A Praia do Seixas: onde o sol nasce primeiro nas Américas",
        body: "A Praia do Seixas fica no extremo leste de João Pessoa, marcada pelo mesmo ponto geográfico do Farol do Cabo Branco — o lugar onde o sol nasce primeiro em todo o continente americano. É uma praia de água verde-escura, sem a estrutura da orla turística, com pescadores, barcos e um ambiente mais preservado. A praia em si é o ponto de partida para o passeio — o que mais atrai os visitantes está a alguns centenas de metros da costa, nos recifes de coral que formam as piscinas naturais.",
      },
      {
        heading: "As piscinas naturais do Seixas: como funcionam",
        body: "Entre o Seixas e o mar aberto há um cordão de recifes de coral e arenito. Na maré alta, esses recifes ficam submersos e o mar se comporta normalmente. Na maré baixa, os recifes emergem ou ficam logo abaixo da superfície, formando piscinas naturais com água quente, transparente e relativamente calma. A profundidade varia — em algumas piscinas você fica de pé, em outras precisa flutuar. A fauna é rica: é possível ver peixe-palhaço, ouriços, corais, peixes de recife coloridos e, dependendo da maré e da época, até arraias.",
      },
      {
        heading: "O que fazer no Seixas além das piscinas",
        body: "Para quem não quer entrar na água, o Seixas tem o Marco Zero das Américas — um monumento que marca o ponto mais oriental do continente. É um destino fotogênico e carregado de significado geográfico. O Farol do Cabo Branco, vizinho ao Seixas, também é um mirante com vista para o Atlântico. A Praia do Seixas tem barracas simples e ambiente tranquilo — nada de resort ou estrutura turística intensa.",
      },
      {
        heading: "Quando ir: a maré define tudo",
        body: "Visitar o Seixas sem maré baixa não tem o mesmo efeito. Com maré cheia, as piscinas ficam submersas e o passeio de barco perde grande parte do apelo. A tábua de marés é o calendário que governa as saídas — e o horário de maré baixa muda todos os dias. Antes de confirmar qualquer visita ao Seixas, é fundamental verificar a tábua do seu dia. Murillo faz isso como parte do processo de confirmação: nenhuma saída é confirmada sem verificar se a maré estará boa.",
      },
      {
        heading: "Como funciona o passeio organizado para o Seixas",
        body: "O passeio organizado parte da Praia do Seixas de barco ou jangada. O percurso até os recifes leva poucos minutos. No recife, você pode entrar na água com máscara de snorkel, caminhar pelos recifes expostos e explorar as piscinas. [CONFIRMAR COM MURILLO: duração total do passeio, o que está incluso — máscara, colete, barco — e ponto de saída exato]. Colete salva-vidas está disponível a bordo. O passeio se faz preferencialmente de manhã cedo quando a maré baixa é pela manhã, ou de tarde quando a janela cai na parte da tarde.",
      },
    ],
  },
  {
    slug: "areia-vermelha-vale-a-pena",
    title: "Areia Vermelha vale a pena? O que esperar do passeio de catamarã",
    description:
      "A ilha paraibana que aparece e desaparece com a maré: como é o passeio de catamarã para a Areia Vermelha, melhor época e o que levar.",
    category: "Litoral Norte",
    cluster: "litoral-norte",
    status: "published",
    updatedAt: "2026-05-14",
    author: AUTHOR,
    readingTime: 8,
    keywords: [
      "Areia Vermelha João Pessoa",
      "Areia Vermelha Cabedelo",
      "catamarã Areia Vermelha",
      "Areia Vermelha vale a pena",
      "passeio Areia Vermelha",
      "ilha Areia Vermelha Paraíba",
    ],
    relatedPasseios: ["areia-vermelha-catamara", "combo-litoral-norte-areia-vermelha"],
    faq: [
      {
        pergunta: "A Areia Vermelha existe em qualquer época do ano?",
        resposta:
          "A Areia Vermelha existe o ano todo, mas só é visível na maré baixa. O banco de areia fica permanentemente no mesmo local — o que muda é o nível do mar. Em maré cheia, fica submerso. Em maré baixa, emerge como uma praia no meio do oceano. A extensão da ilha varia conforme o coeficiente da maré do dia.",
      },
      {
        pergunta: "Criança pode ir no passeio de catamarã para a Areia Vermelha?",
        resposta:
          "Sim, o catamarã é um barco estável e o passeio é tranquilo. A travessia pelo Rio Jacaré é calma e a água na Areia Vermelha é rasa na maré baixa. [CONFIRMAR COM MURILLO: idade mínima ou restrições específicas para crianças neste passeio]",
      },
      {
        pergunta: "Quanto tempo dura o passeio de catamarã para a Areia Vermelha?",
        resposta:
          "[CONFIRMAR COM MURILLO: duração total do passeio de catamarã para a Areia Vermelha, incluindo tempo na ilha]",
      },
    ],
    sections: [
      {
        heading: "O que é a Areia Vermelha e por que ela some com a maré",
        body: "A Areia Vermelha é um banco de areia localizado em frente à costa de Cabedelo, no Litoral Norte de João Pessoa. Na maré cheia, o banco fica completamente submerso e desaparece. Na maré baixa, a areia emerge no meio do mar e forma uma ilha temporária — às vezes com centenas de metros de extensão, às vezes menor, dependendo do coeficiente da maré. O nome vem da coloração avermelhada da areia, resultado da mistura de sedimentos trazidos pelo Rio Paraíba com a areia do oceano. É um dos cenários mais fotografados da Paraíba.",
      },
      {
        heading: "Como é o passeio de catamarã para a Areia Vermelha",
        body: "O passeio parte do Rio Jacaré, em Cabedelo. O catamarã navega pelo estuário do Rio Paraíba e entra no Atlântico em direção à Areia Vermelha. A travessia é relativamente curta. Na Areia Vermelha, os visitantes podem desembarcar na ilha, nadar ao redor, tirar fotos e explorar a área. A água ao redor da ilha tem coloração diferente — mais esverdeada próxima ao estuário, azul mais para o mar aberto. O barco fica ancorado próximo enquanto os visitantes exploram.",
      },
      {
        heading: "O que fazer na Areia Vermelha",
        body: "A principal atividade é explorar a ilha e aproveitar a paisagem — uma praia de areia no meio do oceano, sem construção, sem nada ao redor além de água e céu. Dá para nadar ao redor da ilha, entrar nas piscinas naturais rasas que se formam ao redor dos recifes próximos, tirar fotos do catamarã ancorado com o oceano ao fundo. [CONFIRMAR COM MURILLO: se há alguma estrutura na ilha ou se os visitantes levam o que precisam; se há mergulho disponível na Areia Vermelha]",
      },
      {
        heading: "Melhor maré e melhor época para visitar",
        body: "A maré baixa é obrigatória — sem maré baixa, a Areia Vermelha não existe. O horário exato varia todos os dias conforme a tábua de marés. A melhor época do ano é o período de setembro a março, quando as chuvas são menores e o mar costuma ficar mais calmo e transparente. Mas, dentro das condições de maré certas, o passeio acontece o ano todo. Murillo consulta a tábua antes de confirmar qualquer saída para a Areia Vermelha.",
      },
      {
        heading: "Vale combinar Areia Vermelha com o Pôr do Sol do Jacaré?",
        body: "O Pôr do Sol do Jacaré acontece às margens do mesmo rio de onde parte o catamarã para a Areia Vermelha. Dependendo do horário da maré baixa do seu dia, dá para fazer os dois no mesmo dia: passeio de catamarã para a Areia Vermelha de manhã ou início da tarde, e o pôr do sol no Jacaré ao final da tarde. Existe um passeio combinado que une os dois — fale com Murillo no WhatsApp para verificar disponibilidade e encaixar na sua tábua de marés.",
      },
    ],
  },
  {
    slug: "roteiro-3-dias-joao-pessoa",
    title: "Roteiro de 3 Dias em João Pessoa: o que ver, fazer e aproveitar",
    description:
      "Roteiro completo de 3 dias em João Pessoa: do litoral norte ao litoral sul, com orientação pela tábua de marés e dicas práticas.",
    category: "Roteiros",
    cluster: "roteiros",
    status: "published",
    updatedAt: "2026-05-14",
    author: AUTHOR,
    readingTime: 12,
    keywords: [
      "roteiro João Pessoa 3 dias",
      "o que fazer em João Pessoa em 3 dias",
      "roteiro Paraíba",
      "itinerário João Pessoa",
      "férias João Pessoa",
      "João Pessoa fim de semana",
    ],
    relatedPasseios: ["roteiro-do-murillo-3-dias", "combo-sol-nascente-3-dias", "combo-mare-boa-2-dias"],
    faq: [
      {
        pergunta: "É possível fazer todos esses passeios em 3 dias?",
        resposta:
          "Sim, com planejamento pela tábua de marés. O segredo é encaixar os passeios de piscinas naturais no dia em que a maré baixa cai no horário mais conveniente. Os demais passeios — Litoral Sul e Litoral Norte — não dependem de maré e podem ser encaixados nos outros dias com mais liberdade.",
      },
      {
        pergunta: "Os passeios saem todos os dias da semana?",
        resposta:
          "[CONFIRMAR COM MURILLO: quais passeios saem em quais dias da semana e se há restrição de dia mínimo de antecedência para agendar]",
      },
      {
        pergunta: "Como funciona o pacote de 3 dias com a Vem Passear em Jampa?",
        resposta:
          "Os pacotes de 3 dias incluem os passeios principais com transfer, acompanhamento e organização do roteiro pela tábua de marés. Murillo orienta a montagem do roteiro pelo WhatsApp antes de você chegar. O preço varia conforme os passeios incluídos e se é grupo ou privativo. Fale com Murillo para montar o pacote ideal para o seu grupo.",
      },
    ],
    sections: [
      {
        heading: "Por que João Pessoa merece pelo menos 3 dias",
        body: "João Pessoa tem três eixos de experiência muito diferentes: piscinas naturais (que dependem da maré), Litoral Sul (praias extensas, quadriciclo, trilhas) e Litoral Norte (catamarã, pôr do sol, história colonial). Tentar ver tudo em um dia ou dois é impossível sem comprometer a experiência. Três dias permitem dar atenção adequada a cada eixo e ainda incluir uma tarde no centro histórico. A maré é o elemento que organiza tudo — o dia de piscinas naturais vai depender de quando a maré baixa cai no horário certo.",
      },
      {
        heading: "Dia 1: Piscinas Naturais — a maré decide o horário",
        body: "O primeiro passo do planejamento é descobrir quando a maré baixa cai no seu primeiro dia em João Pessoa. Se for de manhã, o dia começa cedo com passeio para o Seixas ou Picãozinho. Se for de tarde, dá para fazer o City Tour de manhã e ir às piscinas depois. O Seixas é o mais completo — recifes extensos, fauna rica e o marco do ponto mais oriental das Américas. O Picãozinho é mais tranquilo e indicado para crianças. Murillo confirma qual está com melhor condição no seu dia específico.",
      },
      {
        heading: "Dia 2: Litoral Sul — Coqueirinho, quadriciclo e praias desertas",
        body: "O Litoral Sul é um passeio de dia inteiro. O roteiro clássico passa por Coqueirinho (piscinas naturais e o ponto de partida do quadriciclo nas dunas), Tabatinga (recifes e naturismo regulamentado), Praia Bela (menos movimentada, boa para mergulho em apneia) e outras praias ao longo da costa. O quadriciclo em Coqueirinho é uma atividade à parte — vale reservar com antecedência. A saída é cedo para aproveitar a maré certa e o máximo de praias.",
      },
      {
        heading: "Dia 3: Litoral Norte — Areia Vermelha e pôr do sol no Jacaré",
        body: "O Litoral Norte tem dois momentos principais: o passeio de catamarã para a Areia Vermelha (que depende de maré baixa) e o Pôr do Sol do Jacaré ao final da tarde. Se a maré baixa cair de manhã, o passeio de catamarã sai cedo e dá tempo de visitar o Fort Orange antes do pôr do sol. A Areia Vermelha é visual e fotogênica — a ilha de areia no meio do oceano com o catamarã ancorado ao fundo. O Pôr do Sol do Jacaré fecha o roteiro com o espetáculo diário de luz e música às margens do Rio Paraíba.",
      },
      {
        heading: "Como a tábua de marés reorganiza tudo",
        body: "Em João Pessoa, a tábua de marés é o calendário de verdade. Se você já tem as suas datas, o melhor caminho é mandar as datas para Murillo no WhatsApp antes de fazer qualquer reserva de hotel ou passagem. Ele verifica a tábua e indica qual passeio encaixar em qual dia. Assim você garante que vai ao Seixas ou à Areia Vermelha na janela de maré certa, e não acaba chegando na maré cheia — que é a situação que mais frustra o turista que não conhece João Pessoa.",
      },
      {
        heading: "Pacotes prontos de 3 dias com a Vem Passear em Jampa",
        body: "A Vem Passear em Jampa oferece pacotes de 3 dias que já incluem os principais passeios organizados, transfer e orientação completa de roteiro. Murillo monta o pacote conforme as suas datas, o perfil do grupo e a tábua de marés. Não é um pacote engessado — é um roteiro feito para o seu grupo. Fale no WhatsApp para receber as opções.",
      },
    ],
  },
  {
    slug: "litoral-sul-joao-pessoa-o-que-fazer",
    title: "Litoral Sul de João Pessoa: praias, trilhas e quadriciclo",
    description:
      "Coqueirinho, Tabatinga, Praia Bela e Tambaba: o que ver e fazer no litoral sul de João Pessoa em um dia de passeio.",
    category: "Litoral Sul",
    cluster: "litoral-sul",
    status: "published",
    updatedAt: "2026-05-14",
    author: AUTHOR,
    readingTime: 10,
    keywords: [
      "litoral sul João Pessoa",
      "Coqueirinho Paraíba",
      "Tambaba praia nudismo",
      "Praia Bela Paraíba",
      "Tabatinga João Pessoa",
      "quadriciclo João Pessoa",
      "passeio litoral sul",
    ],
    relatedPasseios: [
      "litoral-sul-classico",
      "litoral-sul-praia-bela",
      "quadriciclo-coqueirinho",
    ],
    faq: [
      {
        pergunta: "Quantas praias dá para ver no litoral sul em um dia?",
        resposta:
          "O roteiro clássico do Litoral Sul inclui entre 4 e 6 paradas dependendo da distância e do ritmo do grupo. Coqueirinho, Tabatinga, Praia Bela e Tambaba são as principais. Com saída cedo — por volta das 7h ou 8h — dá para ver todas com conforto e ainda ter tempo de quadriciclo em Coqueirinho. [CONFIRMAR COM MURILLO: horário exato de saída e número de paradas do roteiro clássico]",
      },
      {
        pergunta: "O quadriciclo em Coqueirinho é para qualquer pessoa?",
        resposta:
          "O quadriciclo é conduzido pelo próprio visitante nas dunas próximas ao Coqueirinho. Não é necessário ter habilitação. [CONFIRMAR COM MURILLO: restrições de idade mínima, peso ou condição física para o quadriciclo em Coqueirinho]",
      },
      {
        pergunta: "Tambaba é praia de nudismo obrigatório?",
        resposta:
          "Não. Tambaba tem uma área de naturismo regulamentada e uma área de banho comum. A área de naturismo é acessada por um trecho separado da praia. Quem não quiser participar pode ficar na área comum normalmente.",
      },
    ],
    sections: [
      {
        heading: "O Litoral Sul de João Pessoa: o que esperar",
        body: "O Litoral Sul de João Pessoa começa em Jacarapé, logo abaixo da Praia de Bessa, e se estende por mais de 30 km até os limites com o município de Conde. Ao contrário da orla urbana da cidade, o litoral sul tem praias mais preservadas, falésias coloridas, menos infraestrutura turística e uma sensação de litoral selvagem. O passeio de dia inteiro percorre várias praias diferentes em sequência, com paradas para banho, trilhas e atividades. É considerado o roteiro mais variado da região.",
      },
      {
        heading: "Coqueirinho: piscinas naturais, falésias e quadriciclo",
        body: "A Praia do Coqueirinho é a parada mais famosa do Litoral Sul. Tem uma orla com coqueiros (que deram o nome), falésias vermelhas ao fundo e piscinas naturais formadas por recifes em maré baixa. É o ponto de partida para o quadriciclo nas dunas — uma atividade à parte que percorre as dunas e trilhas da região em velocidade moderada. A praia em si é boa para banho e exploração dos recifes na maré certa.",
      },
      {
        heading: "Tabatinga: recifes e a única praia de naturismo regularizada da Paraíba",
        body: "Tabatinga tem recifes extensos que formam piscinas naturais na maré baixa. É também onde fica a praia de naturismo regulamentada — uma das poucas do Nordeste com área específica delimitada. O naturismo é opcional e restrito a um trecho da praia; o restante da Tabatinga é frequentado normalmente por todo tipo de visitante. A paisagem é bonita e o ambiente é mais tranquilo do que em Coqueirinho.",
      },
      {
        heading: "Praia Bela: recifes, piscinas e tranquilidade",
        body: "A Praia Bela vive à sombra das praias mais famosas do Litoral Sul e por isso tem menos gente. Os recifes são extensos e as piscinas naturais na maré baixa são claras e rasas. É indicada para snorkeling e para quem quer menos movimento. [CONFIRMAR COM MURILLO: se o roteiro clássico inclui parada na Praia Bela e em qual condição de maré ela é melhor]",
      },
      {
        heading: "Tambaba e as praias mais ao sul",
        body: "Tambaba é a última parada mais frequente do roteiro clássico do Litoral Sul. Depois dela, o litoral continua por praias mais desertas como Coqueirinho do Sul, Carapibus e Barra de Gramame — praias que exigem mais deslocamento e raramente entram em roteiros de um dia. Quem quiser explorar o litoral mais ao sul pode contratar um passeio específico.",
      },
      {
        heading: "Como fazer o Litoral Sul com orientação de roteiro",
        body: "O roteiro clássico do Litoral Sul da Vem Passear em Jampa sai cedo da cidade e percorre as praias principais em sequência, com transfer incluído. O quadriciclo em Coqueirinho pode ser reservado separadamente. Murillo orienta pelo WhatsApp o que incluir conforme o perfil do grupo — se tem crianças, se o foco é aventura ou tranquilidade, se quer adicionar o quadriciclo. O passeio pode ser feito em qualquer maré, mas a parada nas piscinas de Coqueirinho e Praia Bela é melhor na maré baixa.",
      },
    ],
  },
  {
    slug: "litoral-norte-joao-pessoa-o-que-fazer",
    title: "Litoral Norte de João Pessoa: Cabedelo, Jacaré e Areia Vermelha",
    description:
      "Pôr do sol no Jacaré, ilha da Areia Vermelha e história colonial: o que ver no litoral norte de João Pessoa e como organizar o roteiro.",
    category: "Litoral Norte",
    cluster: "litoral-norte",
    status: "published",
    updatedAt: "2026-05-14",
    author: AUTHOR,
    readingTime: 10,
    keywords: [
      "litoral norte João Pessoa",
      "Cabedelo Paraíba",
      "pôr do sol Jacaré",
      "Areia Vermelha catamarã",
      "Rio Paraíba",
      "Fort Orange Cabedelo",
      "passeio litoral norte",
    ],
    relatedPasseios: [
      "litoral-norte-classico",
      "areia-vermelha-catamara",
      "por-do-sol-jacare",
    ],
    faq: [
      {
        pergunta: "O pôr do sol do Jacaré vale a pena?",
        resposta:
          "Vale — especialmente se você está pela primeira vez em João Pessoa. O evento acontece às margens do Rio Jacaré, em Cabedelo, com turistas reunidos nos barcos e nas margens do rio assistindo ao sol se por sobre o estuário enquanto um saxofonista toca ao vivo. É mais uma experiência coletiva do que um show particular de pôr do sol, mas a paisagem é genuinamente bonita.",
      },
      {
        pergunta: "Qual é o horário do pôr do sol no Jacaré?",
        resposta:
          "O horário varia ao longo do ano: em outubro o sol se põe por volta das 17h; em janeiro, por volta das 17h45. O saxofonista Jurandy do Sax executa o Bolero de Ravel durante aproximadamente 17 minutos — que é exatamente a duração do pôr do sol. Vale chegar com pelo menos 30 minutos de antecedência para garantir um bom lugar.",
      },
      {
        pergunta: "Como ir de João Pessoa para Cabedelo?",
        resposta:
          "Cabedelo fica a cerca de 18 km de João Pessoa, ligada pela BR-230. O passeio organizado da Vem Passear em Jampa inclui transfer de ida e volta. Para ir por conta própria, é possível pegar ônibus ou usar aplicativo de transporte.",
      },
    ],
    sections: [
      {
        heading: "O Litoral Norte de João Pessoa: Cabedelo e o estuário do Rio Paraíba",
        body: "O Litoral Norte de João Pessoa tem como polo central o município de Cabedelo, separado da capital pelo Rio Paraíba. O estuário do rio é o ambiente que define a paisagem do litoral norte — uma mistura de água doce do rio com a água salgada do Atlântico, que cria colorações diferentes e condições únicas de maré. Cabedelo tem menos de 20 km de distância do centro de João Pessoa e pode ser visitado de carro, ônibus ou como parte de um passeio organizado.",
      },
      {
        heading: "Areia Vermelha: a ilha que nasce e desaparece com a maré",
        body: "A Areia Vermelha é o destaque mais visual do Litoral Norte. É um banco de areia que fica submerso na maré cheia e emerge como uma ilha no oceano na maré baixa. O acesso é feito de catamarã a partir do Rio Jacaré. A ilha tem areia avermelhada — cor que vem da mistura de sedimentos do Rio Paraíba com a areia do Atlântico. Ao redor da ilha, na maré baixa, formam-se piscinas naturais rasas com peixinhos e coral.",
      },
      {
        heading: "O Pôr do Sol do Jacaré: o mais famoso de João Pessoa",
        body: "O Pôr do Sol do Jacaré não é apenas um pôr do sol bonito — é um ritual coletivo. Todas as tardes, turistas e pessoenses se reúnem nas margens do Rio Jacaré para assistir ao sol se por sobre o estuário do Rio Paraíba. O evento é reconhecido como um dos mais belos do Brasil — uma reputação consolidada ao longo de décadas pela beleza do estuário e pela tradição musical do saxofonista Jurandy do Sax, que toca o Bolero de Ravel ao vivo diariamente. O horário varia ao longo do ano conforme a posição do sol.",
      },
      {
        heading: "Fortaleza de Santa Catarina: história colonial às margens do Rio Paraíba",
        body: "A Fortaleza de Santa Catarina é uma fortaleza portuguesa construída em 1585 às margens do Rio Paraíba, em Cabedelo — uma das mais antigas do Brasil. Foi construída para defender a foz do rio dos ataques de corsários e potências europeias que disputavam o controle do litoral nordestino. A estrutura é aberta à visitação e fica próxima ao embarcadouro do Jacaré. É uma parada curta mas com peso histórico real — 440 anos de história concentrados num ponto de vista privilegiado sobre o estuário.",
      },
      {
        heading: "Como organizar o roteiro do Litoral Norte",
        body: "O ideal é combinar o passeio de catamarã para a Areia Vermelha de manhã (quando a maré costuma estar baixa) com a visita à Fortaleza de Santa Catarina no início da tarde e o Pôr do Sol do Jacaré ao fim da tarde. Murillo verifica a tábua de marés do seu dia e organiza a sequência certa. Existe também um passeio combinado que une Areia Vermelha e pôr do sol no Jacaré em um único roteiro — fale com Murillo no WhatsApp para verificar disponibilidade.",
      },
    ],
  },
  {
    slug: "tabua-de-mares-piscinas-naturais",
    title: "Tábua de Marés para Piscinas Naturais em João Pessoa",
    description:
      "Como ler a tábua de marés e escolher o melhor dia para visitar Seixas, Picãozinho e Areia Vermelha em João Pessoa.",
    category: "Marés e Natureza",
    cluster: "mares-natureza",
    status: "published",
    updatedAt: "2026-05-14",
    author: AUTHOR,
    readingTime: 7,
    keywords: [
      "tábua de marés João Pessoa",
      "maré baixa João Pessoa",
      "maré seca piscinas naturais",
      "melhor dia Seixas",
      "melhor dia Picãozinho",
      "tábua de marés Cabo Branco",
      "maré João Pessoa hoje",
    ],
    relatedPasseios: ["seixas", "picaozinho", "areia-vermelha-catamara"],
    faq: [
      {
        pergunta: "Onde encontrar a tábua de marés oficial de João Pessoa?",
        resposta:
          "A tábua de marés oficial é publicada pela Marinha do Brasil no site da Diretoria de Hidrografia e Navegação (DHN). Para João Pessoa, a estação de referência é Cabedelo (PB). A consulta é gratuita e mostra os horários e alturas de maré para cada dia do ano.",
      },
      {
        pergunta: "O que acontece se a maré não estiver boa no meu dia?",
        resposta:
          "Se a maré baixa do seu dia cair em horário incompatível com o passeio, existem opções: reagendar para o dia seguinte se a maré baixa cair num horário melhor, visitar uma piscina natural diferente que tenha janela de maré em outro horário, ou fazer um passeio que não depende de maré no mesmo dia — como o Litoral Sul ou o City Tour. Murillo orienta qual é a melhor alternativa para o seu caso.",
      },
      {
        pergunta: "É possível visitar as piscinas naturais com qualquer maré?",
        resposta:
          "Não. Com maré cheia, as piscinas ficam submersas e o passeio perde quase todo o apelo. A maré baixa é o requisito mínimo. O ideal é uma maré baixa com coeficiente elevado, que descobre mais área dos recifes e deixa as piscinas mais rasas e amplas. Nenhuma saída é confirmada sem verificar as condições de maré do dia.",
      },
    ],
    sections: [
      {
        heading: "O que é a tábua de marés e por que ela importa em João Pessoa",
        body: "A tábua de marés é o documento oficial — publicado pela Marinha do Brasil — que prevê os horários e alturas de maré para cada porto ou estação ao longo do litoral. Em João Pessoa, a estação de referência é Cabedelo (PB). A tábua é o que governa as atividades de piscinas naturais na região: sem maré baixa, as piscinas não existem. Com maré alta, os recifes ficam submersos e a água do mar fica funda e agitada sobre eles. Por isso, toda saída para piscinas naturais em João Pessoa é planejada a partir da tábua de marés.",
      },
      {
        heading: "Como ler a tábua de marés: coeficiente, amplitude e horário",
        body: "A tábua mostra para cada dia a alternância entre marés baixas (preamar) e marés altas (baixamar), com horário e altura em metros. O coeficiente de maré indica a intensidade — valores mais altos significam mais diferença entre maré alta e baixa, e portanto piscinas naturais mais expressivas na maré baixa. Um coeficiente baixo pode significar que a maré baixa não descobre completamente os recifes. Para as piscinas naturais de João Pessoa, o ideal é uma maré baixa com coeficiente elevado e em horário compatível com o passeio — preferencialmente pela manhã, antes de o sol ficar muito forte.",
      },
      {
        heading: "Seixas, Picãozinho e Areia Vermelha: quando cada uma está melhor",
        body: "O Seixas e o Picãozinho respondem bem a qualquer maré baixa com coeficiente razoável — a diferença é que com coeficiente alto as piscinas são maiores e mais rasas. A Areia Vermelha depende de maré baixa para a ilha emergir — sem maré baixa ela simplesmente não existe. A Penha também depende de maré baixa para as piscinas funcionarem. A regra prática é: verifique a tábua para as suas datas, identifique os dias com maré baixa pela manhã e coeficiente mais alto, e reserve esses dias para as piscinas naturais.",
      },
      {
        heading: "O ciclo das marés em João Pessoa ao longo do mês",
        body: "As marés seguem ciclos lunares de aproximadamente 14 dias entre as marés mais fortes (sizígia, perto da lua cheia e lua nova) e as marés mais fracas (quadratura, perto dos quartos crescente e minguante). Nos dias de sizígia, o coeficiente é maior e as piscinas naturais ficam mais expressivas. Nos dias de quadratura, a maré baixa é menos intensa e as piscinas podem ficar mais rasas ou menos acessíveis. Planejar a visita nas datas próximas à lua cheia ou nova tende a garantir melhores condições.",
      },
      {
        heading: "Como a Vem Passear em Jampa confirma a maré antes de cada saída",
        body: "Nenhum passeio de piscinas naturais é confirmado sem verificação da tábua de marés para o dia. Quando você entra em contato pelo WhatsApp, Murillo verifica a tábua para as suas datas e indica qual é a melhor janela de maré para cada passeio. Se a maré do seu dia não estiver boa para o Seixas, por exemplo, ele orienta se o Picãozinho ou outra opção funciona melhor. Essa orientação é parte do atendimento — não é cobrada à parte.",
      },
    ],
  },
  {
    slug: "joao-pessoa-com-criancas",
    title: "João Pessoa com Crianças: passeios seguros e dicas práticas",
    description:
      "Quais passeios em João Pessoa funcionam bem com crianças, o que observar em segurança e dicas práticas para aproveitar a viagem em família.",
    category: "Família",
    cluster: "familia",
    status: "published",
    updatedAt: "2026-05-14",
    author: AUTHOR,
    readingTime: 9,
    keywords: [
      "João Pessoa com crianças",
      "passeios família João Pessoa",
      "viagem família Paraíba",
      "o que fazer João Pessoa com filhos",
      "férias nordeste com crianças",
      "piscinas naturais criança João Pessoa",
    ],
    relatedPasseios: ["seixas", "areia-vermelha-catamara", "city-tour-jampa"],
    faq: [
      {
        pergunta: "Colete salva-vidas está disponível para crianças nos passeios?",
        resposta:
          "Sim. Coletes salva-vidas estão disponíveis a bordo nos passeios aquáticos. São recomendados para não-nadadores e crianças independente da habilidade na água.",
      },
      {
        pergunta: "Qual passeio é mais indicado para crianças pequenas?",
        resposta:
          "O Picãozinho é a piscina natural mais tranquila e rasa de João Pessoa — ótima para crianças pequenas. O catamarã para a Areia Vermelha também é estável e a ilha tem água muito rasa. O City Tour em van é indicado para qualquer idade. [CONFIRMAR COM MURILLO: qual passeio específico recomenda para crianças de 0 a 5 anos]",
      },
      {
        pergunta: "Qual é a idade mínima para os passeios?",
        resposta:
          "[CONFIRMAR COM MURILLO: idade mínima por passeio — especialmente para o catamarã, o quadriciclo e o Litoral Sul]",
      },
    ],
    sections: [
      {
        heading: "João Pessoa é boa destino para crianças?",
        body: "João Pessoa é uma das capitais mais seguras do Nordeste e tem uma estrutura de praia tranquila, sem correntes fortes na maior parte da orla. As piscinas naturais, quando visitadas na maré baixa correta, têm água rasa e calma — ideal para crianças. O trânsito na cidade é menos caótico do que em Recife ou Fortaleza. E o povo pessoense é genuinamente acolhedor com famílias e crianças. A cidade funciona bem como destino familiar desde que o roteiro seja planejado com a tábua de marés em mente.",
      },
      {
        heading: "Piscinas naturais com crianças: o que considerar",
        body: "O Picãozinho é a piscina natural mais recomendada para crianças pequenas: fica perto da orla, a travessia de barco é curta, e a água é rasa o suficiente para ficar de pé em boa parte da área. O Seixas também funciona para crianças maiores — os recifes são mais extensos e a fauna é mais rica, mas o acesso é um pouco mais distante. Colete salva-vidas está disponível e é recomendado independente da habilidade de nadar. Protetor solar resistente à água, em quantidade, é indispensável.",
      },
      {
        heading: "Areia Vermelha de catamarã com crianças",
        body: "O catamarã é um barco estável, sem grandes ondas na travessia pelo Rio Jacaré. A Areia Vermelha tem água muito rasa quando a ilha está emersa — as crianças adoram caminhar pela areia no meio do oceano. É um dos passeios mais fotogênicos e que costuma encantar crianças de todas as idades. [CONFIRMAR COM MURILLO: restrição de idade ou peso mínimo para o catamarã da Areia Vermelha]",
      },
      {
        heading: "City Tour: o roteiro urbano que funciona para qualquer idade",
        body: "O City Tour percorre o centro histórico de João Pessoa, o Farol do Cabo Branco, a Lagoa (Parque Solon de Lucena) e outros pontos da cidade. É feito em van com ar-condicionado e tem paradas para fotos e passeio a pé. Não depende de maré e pode ser feito em qualquer horário. Crianças costumam gostar do Farol e da Lagoa — o parque tem espaço aberto para correr e quiosques de comida.",
      },
      {
        heading: "Dicas práticas para viagem com crianças em João Pessoa",
        body: "Protetor solar fator 50 ou mais, resistente à água, aplicado com antecedência antes de entrar no barco. Roupão ou camiseta anti-UV para crianças. Água em abundância — o calor do Nordeste desidrata rápido, especialmente nas piscinas onde a sensação de calor é menor. Lanche leve para passeios longos. Chapéu. Saída cedo para os passeios de piscinas — a maré baixa costuma ser pela manhã, o que coincide com o horário de menos sol forte e menos turistas.",
      },
      {
        heading: "Idade mínima e restrições por passeio",
        body: "[CONFIRMAR COM MURILLO: lista completa de idade mínima e restrições por passeio — especialmente quadriciclo em Coqueirinho, mergulho com cilindro, catamarã da Areia Vermelha e Litoral Sul. Incluir aqui antes de publicar.]",
      },
    ],
  },
  {
    slug: "transfer-aeroporto-joao-pessoa",
    title: "Transfer do Aeroporto de João Pessoa: como funciona",
    description:
      "Opções de transfer do Aeroporto Presidente Castro Pinto para João Pessoa, com atendimento 24h e como agendar antes de chegar.",
    category: "Logística",
    cluster: "logistica",
    status: "published",
    updatedAt: "2026-05-14",
    author: AUTHOR,
    readingTime: 6,
    keywords: [
      "transfer aeroporto João Pessoa",
      "Castro Pinto transfer",
      "como sair do aeroporto João Pessoa",
      "transfer 24h João Pessoa",
      "táxi aeroporto João Pessoa",
      "aeroporto Presidente Castro Pinto",
    ],
    relatedPasseios: [],
    faq: [
      {
        pergunta: "O transfer funciona para chegadas de madrugada?",
        resposta:
          "Sim. O transfer da Vem Passear em Jampa funciona 24 horas por dia, 7 dias por semana, incluindo madrugadas e feriados. O agendamento é feito com antecedência pelo WhatsApp.",
      },
      {
        pergunta: "Consigo agendar o transfer de última hora?",
        resposta:
          "É possível, mas o recomendado é agendar com pelo menos 24 horas de antecedência para garantir disponibilidade. Para viagens de madrugada ou feriados, mais antecedência é sempre melhor. Entre em contato pelo WhatsApp assim que tiver o número do voo confirmado.",
      },
      {
        pergunta: "O transfer leva para qualquer endereço em João Pessoa?",
        resposta:
          "Sim, o transfer leva direto para o endereço de hotel, pousada ou residência em João Pessoa. [CONFIRMAR COM MURILLO: se o transfer atende também outras cidades da região — Cabedelo, Santa Rita, Bayeux — e se há custo adicional por distância]",
      },
    ],
    sections: [
      {
        heading: "O Aeroporto Presidente Castro Pinto: localização e distância",
        body: "O Aeroporto Presidente Castro Pinto fica no município de Bayeux, a aproximadamente 11 km do centro de João Pessoa e a cerca de 15 km da orla (Manaíra, Tambaú, Cabo Branco). A saída do aeroporto, especialmente à noite ou de madrugada, pode ser um momento de estresse para quem nunca esteve na cidade — sem referências, sem wi-fi garantido, com bagagem. Um transfer agendado resolve esse problema: você sai do desembarque e já tem um carro esperando com o seu nome.",
      },
      {
        heading: "Opções de transporte do aeroporto para João Pessoa",
        body: "As opções disponíveis para sair do Aeroporto de João Pessoa incluem: aplicativos de transporte (Uber e 99, com disponibilidade variável à noite), táxi convencional (fila na saída do terminal), ônibus intermunicipal (para quem está confortável com transporte público e tem menos bagagem) e transfer privativo agendado. O transfer privativo é a opção mais confortável para grupos, famílias com crianças, chegadas de madrugada ou viajantes com bagagem volumosa.",
      },
      {
        heading: "Transfer 24h da Vem Passear em Jampa: como funciona",
        body: "O transfer da Vem Passear em Jampa é privativo — apenas o seu grupo vai no veículo. O agendamento é feito pelo WhatsApp antes da viagem: você passa o número do voo, o horário de chegada e o endereço de destino. Murillo ou sua equipe monitora o voo e ajusta em caso de atraso. O veículo aguarda na saída do terminal. [CONFIRMAR COM MURILLO: tipo de veículo, capacidade máxima de passageiros e bagagem, e preço por trajeto]",
      },
      {
        heading: "Quanto custa o transfer do aeroporto?",
        body: "[CONFIRMAR COM MURILLO: preço por trajeto do transfer aeroporto ↔ João Pessoa. O preço está como null em data/servicos.ts aguardando confirmação. Incluir aqui antes de publicar.]",
      },
      {
        heading: "Vale contratar o transfer antes de chegar em João Pessoa?",
        body: "Para quem chega à noite ou de madrugada, especialmente com crianças ou muita bagagem, o transfer vale bastante pela tranquilidade. Você sai do desembarque sem precisar instalar app, sem depender de wi-fi, sem fila. O carro já está esperando com o seu nome. Para chegadas de dia e com pouca bagagem, os aplicativos de transporte são uma alternativa funcional. Para grupos maiores ou quem já vai usar os passeios da Vem Passear durante a viagem, faz sentido unificar o atendimento e agendar o transfer junto com os passeios.",
      },
    ],
  },
  {
    slug: "melhor-epoca-joao-pessoa",
    title: "Melhor Época para Visitar João Pessoa: guia de clima, chuva e marés",
    description:
      "Quando ir a João Pessoa: setembro a fevereiro têm menos chuva, mais sol e marés favoráveis para piscinas naturais. Guia mês a mês com dicas práticas.",
    category: "Marés e Natureza",
    cluster: "mares-natureza",
    status: "published",
    updatedAt: "2026-05-14",
    author: AUTHOR,
    readingTime: 8,
    keywords: [
      "melhor época João Pessoa",
      "quando visitar João Pessoa",
      "clima João Pessoa",
      "chuva João Pessoa por mês",
      "temperatura João Pessoa",
      "alta temporada João Pessoa",
      "quando ir João Pessoa",
    ],
    relatedPasseios: ["seixas", "picaozinho", "areia-vermelha-catamara"],
    faq: [
      {
        pergunta: "Qual é o mês com menos chuva em João Pessoa?",
        resposta:
          "O período de outubro a novembro costuma ter os meses com menos chuva acumulada de João Pessoa. Outubro e novembro são especialmente consistentes: dias de sol, poucas chuvas, temperatura entre 28°C e 31°C. Junho é historicamente o mês com mais chuva — médias que podem ultrapassar 350 mm. Setembro a fevereiro é o período seco no geral.",
      },
      {
        pergunta: "João Pessoa é quente o ano todo?",
        resposta:
          "Sim. A temperatura em João Pessoa varia entre 24°C e 32°C ao longo do ano, sem período frio. Julho e agosto são levemente mais amenos — especialmente à noite — mas durante o dia o calor continua. Protetor solar é necessário em qualquer época do ano.",
      },
      {
        pergunta: "Julho é boa época para visitar João Pessoa?",
        resposta:
          "Julho é o pico da alta temporada de inverno — hotéis enchem e os passeios ficam mais concorridos. O clima já começa a melhorar (julho é mais seco que junho), mas ainda há mais nebulosidade do que em outubro. Se a prioridade é clima mais estável, menos gente e preços mais acessíveis, outubro e novembro são melhores. Para quem só pode viajar em julho, vale muito a pena — apenas reserve com antecedência.",
      },
    ],
    sections: [
      {
        heading: "João Pessoa tem clima quente o ano todo — mas tem uma época melhor",
        body: "João Pessoa fica a 7° de latitude sul, com temperatura média entre 26°C e 32°C durante o ano inteiro. Não há frio no sentido convencional — mas há uma diferença significativa entre o período seco e o período chuvoso. O período seco (setembro a fevereiro) é quando as praias ficam mais bonitas, as piscinas naturais aparecem em melhor condição de visibilidade e o sol brilha com mais consistência. O período chuvoso (março a agosto) concentra as chuvas entre abril e julho — e junho costuma ser o mês mais chuvoso, com médias históricas acima de 350 mm. Mesmo no período chuvoso, as chuvas costumam ser rápidas, de tarde, e o restante do dia fica aberto. Mas a orla fica mais cinza e o mar pode ficar levemente mais turvo.",
      },
      {
        heading: "Os melhores meses: setembro a fevereiro",
        body: "O período de setembro a fevereiro é o mais recomendado para quem quer aproveitar as praias e piscinas naturais com melhor condição. Outubro, novembro e dezembro são os mais equilibrados: menos chuva, sol consistente (8 a 9 horas de luz por dia), marés que costumam ser favoráveis pela manhã. Janeiro e fevereiro têm dias mais longos — o sol se põe por volta das 17h45 em janeiro, mais tarde do que em outubro, quando cai por volta das 17h00. Para quem quer o melhor equilíbrio entre clima, qualidade de mar e tranquilidade turística, outubro e novembro se destacam: boa condição de praia, movimento de turistas mais moderado e preços de hospedagem tendendo a ser mais acessíveis do que em julho ou janeiro.",
      },
      {
        heading: "Período chuvoso: março a agosto",
        body: "O período chuvoso vai de março a agosto, com pico em junho e julho. As chuvas costumam ser concentradas em rajadas curtas — chove forte por uma ou duas horas, especialmente no final da tarde, e o tempo abre rapidamente. Isso significa que mesmo em junho é possível aproveitar a manhã nas piscinas naturais sem problema. O que muda é a consistência: no período chuvoso há mais dias com nuvens pesadas, o mar pode ficar mais agitado e a visibilidade para snorkel fica menos previsível. Junho costuma ser o mês com mais chuva acumulada da região. Se você só pode viajar no inverno, não deixe de ir — mas ajuste as expectativas: pode chover no seu dia de piscinas naturais e não chover no dia seguinte.",
      },
      {
        heading: "A maré não tem época ruim — mas tem horário certo",
        body: "As piscinas naturais de João Pessoa não dependem do clima para existir — dependem da maré. A maré baixa acontece o ano todo, em qualquer mês, o que significa que as piscinas naturais podem estar em condição ótima em pleno junho chuvoso, desde que a tábua de marés esteja favorável. O que muda com o clima é a qualidade da água: no período seco, o mar costuma ser mais cristalino e a visibilidade para snorkel é melhor. O horário da maré baixa muda todos os dias — pode cair de manhã ou de tarde, e varia semana a semana conforme o ciclo lunar. O fator mais importante é planejar o passeio para quando a maré baixa cair num horário conveniente, independente do mês.",
      },
      {
        heading: "Alta temporada: julho e dezembro/janeiro",
        body: "João Pessoa tem dois picos de turismo: julho (férias de inverno do sul e sudeste do Brasil) e dezembro/janeiro (férias de verão e festas de fim de ano). No pico de julho, os hotéis ficam cheios, os passeios ficam mais concorridos e os preços sobem. O Carnaval (fevereiro/março) também concentra visitantes, especialmente no Litoral Sul. Semana Santa tem movimentação alta. Para quem prefere a cidade com menos gente e melhor relação custo-benefício de hospedagem, outubro e novembro são a escolha certa: bom clima, marés favoráveis e movimento turístico tranquilo.",
      },
      {
        heading: "Resumo: quando ir a João Pessoa conforme seu objetivo",
        body: "Se a prioridade são piscinas naturais com melhor visibilidade: escolha outubro, novembro ou dezembro. Se quer aproveitar a cidade com mais movimento e programação: julho ou janeiro. Se a prioridade é custo-benefício e menos gente: outubro ou novembro. Se só pode viajar no período chuvoso: vá — a experiência é diferente mas vale a pena, especialmente se a maré estiver favorável. A regra de ouro é simples: independente do mês, consulte a tábua de marés antes de planejar os passeios de piscinas naturais. Murillo faz isso pelo WhatsApp antes de confirmar qualquer saída.",
      },
    ],
  },
  {
    slug: "por-do-sol-jacare-joao-pessoa",
    title: "Pôr do Sol do Jacaré em João Pessoa: guia completo com horários",
    description:
      "Tudo sobre o Pôr do Sol do Jacaré: onde fica, horário por época do ano, o saxofonista Jurandy do Sax e como combinar com o passeio de catamarã para a Areia Vermelha.",
    category: "Litoral Norte",
    cluster: "litoral-norte",
    status: "published",
    updatedAt: "2026-05-14",
    author: AUTHOR,
    readingTime: 7,
    keywords: [
      "pôr do sol Jacaré João Pessoa",
      "Jurandy do Sax",
      "pôr do sol Jacaré horário",
      "Cabedelo pôr do sol",
      "Rio Jacaré João Pessoa",
      "catamarã Jacaré João Pessoa",
      "passeio Jacaré João Pessoa",
    ],
    relatedPasseios: ["por-do-sol-jacare", "areia-vermelha-catamara", "combo-litoral-norte-areia-vermelha"],
    faq: [
      {
        pergunta: "O Pôr do Sol do Jacaré acontece todos os dias?",
        resposta:
          "Sim. O pôr do sol acontece diariamente e Jurandy do Sax toca ao vivo com regularidade — acumulando mais de 9.000 apresentações ao longo dos anos. Em dias de chuva intensa, a visibilidade pode ser reduzida, mas a tradição musical continua independente do tempo.",
      },
      {
        pergunta: "Quanto custa ir ao Pôr do Sol do Jacaré?",
        resposta:
          "O evento em si é gratuito — você fica na margem do rio e assiste sem ingresso. O que você paga são os consumos nos bares da orla. Se for no passeio organizado da Vem Passear em Jampa, o valor inclui o transfer e pode incluir o catamarã combinado. Fale com Murillo no WhatsApp para montar o roteiro do Litoral Norte conforme as marés do seu dia.",
      },
      {
        pergunta: "Qual é a melhor posição para assistir ao pôr do sol no Jacaré?",
        resposta:
          "A margem do rio, de frente para o horizonte onde o sol se põe, é a melhor posição. Chegar com 30 minutos de antecedência garante um bom lugar. Do barco ancorado no rio também é uma experiência diferenciada — o catamarã do passeio organizado permanece ancorado durante o evento.",
      },
    ],
    sections: [
      {
        heading: "O Pôr do Sol do Jacaré: por que todo mundo fala nisso",
        body: "O Pôr do Sol do Jacaré acontece diariamente às margens do Rio Jacaré, em Cabedelo, a cerca de 18 km de João Pessoa. O que começou como um ponto de encontro informal virou um dos eventos mais fotografados do Nordeste. Turistas e moradores se reúnem nas margens do rio, nos barcos ancorados e nos bares da beira d'água para assistir ao sol se por sobre o estuário do Rio Paraíba. A moldura de água, o céu do Nordeste e o saxofonista que toca ao vivo criaram uma experiência difícil de reproduzir em outro lugar — e que explica por que o Jacaré é uma parada obrigatória em qualquer roteiro de João Pessoa.",
      },
      {
        heading: "Jurandy do Sax e o Bolero de Ravel",
        body: "A tradição musical do Pôr do Sol do Jacaré se deve ao saxofonista Jurandy do Sax, que toca o Bolero de Ravel diariamente às margens do rio. A peça dura aproximadamente 17 minutos — justamente a duração média do espetáculo de luz que o pôr do sol projeta sobre o estuário. Jurandy acumula mais de 9.000 apresentações ao longo dos anos, tornando-se uma figura indissociável da experiência do Jacaré. O Bolero de Ravel tem uma qualidade hipnótica única: começa suave e vai crescendo progressivamente até o final, acompanhando o ritmo do próprio pôr do sol. Mesmo quem nunca ouviu a obra de Ravel sai com a melodia guardada.",
      },
      {
        heading: "Horário do pôr do sol no Jacaré por época do ano",
        body: "O horário do pôr do sol varia ao longo do ano conforme a posição do sol. Em outubro, o sol se põe por volta das 17h00. Em janeiro, o horário é por volta das 17h45 — os dias são mais longos no verão. O evento dura em média 17 minutos, que é a duração do Bolero de Ravel. A recomendação é chegar com pelo menos 30 minutos de antecedência para garantir um lugar próximo à margem do rio. Os melhores ângulos ficam na margem, onde o reflexo do sol na água compõe o cenário.",
      },
      {
        heading: "Como chegar ao Jacaré saindo de João Pessoa",
        body: "O Jacaré fica em Cabedelo, a aproximadamente 18 km do centro de João Pessoa. De carro, pela BR-230, o percurso leva entre 20 e 30 minutos dependendo do trânsito. O passeio organizado da Vem Passear em Jampa inclui transfer de ida e volta — a opção mais prática para quem não está de carro. Para quem vai por conta própria, é possível usar aplicativo de transporte. A chegada por volta das 16h30 garante lugar na margem e tempo para explorar os bares e a orla antes do espetáculo.",
      },
      {
        heading: "O que combinar com o Pôr do Sol do Jacaré",
        body: "O Pôr do Sol do Jacaré combina naturalmente com o passeio de catamarã para a Areia Vermelha — ambos partem do mesmo ponto no Rio Jacaré. Se a tábua de marés do dia permitir, dá para fazer o catamarã pela manhã ou início da tarde, visitar a Fortaleza de Santa Catarina (construída em 1585, próxima ao embarcadouro) no início da tarde, e encerrar com o pôr do sol ao final do dia. Existe um passeio combinado da Vem Passear em Jampa que une Areia Vermelha e Pôr do Sol do Jacaré em um único roteiro. Fale com Murillo no WhatsApp para verificar disponibilidade conforme a tábua de marés do seu dia.",
      },
      {
        heading: "Dicas práticas para aproveitar o Pôr do Sol do Jacaré",
        body: "Chegue cedo — pelo menos 30 minutos antes do horário do pôr do sol do dia. O evento atrai bastante gente e os melhores lugares na margem ficam ocupados rápido. Leve água. Vista roupas leves mas guarde uma blusa na mochila — o vento do rio depois do pôr do sol pode ser mais fresco do que parece. Câmera com zoom ajuda a registrar o sol no horizonte. E silêncio enquanto Jurandy toca — é parte da etiqueta tácita do lugar, respeitada por turistas e pessoenses igualmente.",
      },
    ],
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
