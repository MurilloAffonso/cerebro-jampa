/**
 * Cronogramas dos passeios — dados estruturados para o componente PasseioCronograma.
 *
 * Chave: `${categoria}-${slug}` (necessário pois dois passeios têm slug "roteiro-classico")
 * Foto: path em /public — usa coverImages existentes; undefined → placeholder com ícone.
 * Hora: "HH:MM", "~HH:MM" ou rótulo textual quando o horário depende de maré/sol.
 */

export interface Parada {
  n: string;
  foto?: string;
  titulo: string;
  hora: string;
  desc: string;
}

export interface CronogramaPasseio {
  label: "ROTEIRO DO DIA" | "ROTEIRO" | "3 DIAS" | "2 DIAS" | "PASSEIO";
  paradas: Parada[];
}

export function getCronograma(categoria: string, slug: string): CronogramaPasseio | null {
  return CRONOGRAMAS[`${categoria}-${slug}`] ?? null;
}

const CRONOGRAMAS: Record<string, CronogramaPasseio> = {

  /* ─────────────────────── LITORAL SUL ─────────────────────── */

  "litoral-sul-roteiro-classico": {
    label: "ROTEIRO DO DIA",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/litoral-sul/hero-01.jpg",
        titulo: "Saída de João Pessoa",
        hora: "08:30",
        desc: "Embarque na van climatizada no ponto combinado.",
      },
      {
        n: "02",
        foto: "/images/passeios/litoral-sul/hero-01.jpg",
        titulo: "Tabatinga",
        hora: "09:30",
        desc: "Piscinas naturais, recifes de coral e área de naturismo regulamentada.",
      },
      {
        n: "03",
        foto: "/images/passeios/litoral-sul/coqueirinho/hero-01.jpg",
        titulo: "Coqueirinho",
        hora: "11:30",
        desc: "Falésias vermelhas, piscinas naturais e almoço livre nos quiosques.",
      },
      {
        n: "04",
        foto: "/images/passeios/litoral-sul/tambaba/hero-01.jpg",
        titulo: "Tambaba",
        hora: "14:30",
        desc: "Falésias, banho livre e mirante com vista para o litoral.",
      },
      {
        n: "05",
        titulo: "Retorno a João Pessoa",
        hora: "~17:00",
        desc: "Van climatizada diretamente ao ponto de origem.",
      },
    ],
  },

  "litoral-sul-praia-bela": {
    label: "ROTEIRO DO DIA",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/litoral-sul/hero-01.jpg",
        titulo: "Saída de João Pessoa",
        hora: "08:30",
        desc: "Embarque na van climatizada no ponto combinado.",
      },
      {
        n: "02",
        foto: "/images/passeios/litoral-sul/hero-01.jpg",
        titulo: "Tabatinga",
        hora: "09:30",
        desc: "Piscinas naturais em maré baixa e recifes de coral.",
      },
      {
        n: "03",
        foto: "/images/passeios/litoral-sul/praia-bela/hero-01.jpg",
        titulo: "Praia Bela",
        hora: "11:00",
        desc: "Snorkel em apneia nos recifes e piscinas rasas, almoço livre.",
      },
      {
        n: "04",
        foto: "/images/passeios/litoral-sul/tambaba/hero-01.jpg",
        titulo: "Tambaba",
        hora: "14:00",
        desc: "Banho livre e falésias.",
      },
      {
        n: "05",
        titulo: "Retorno a João Pessoa",
        hora: "~17:00",
        desc: "Van climatizada diretamente ao ponto de origem.",
      },
    ],
  },

  "litoral-sul-combo-jampa-quadriciclo": {
    label: "ROTEIRO DO DIA",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/litoral-sul/hero-01.jpg",
        titulo: "Saída de João Pessoa",
        hora: "08:30",
        desc: "Embarque na van climatizada.",
      },
      {
        n: "02",
        foto: "/images/passeios/litoral-sul/coqueirinho/hero-01.jpg",
        titulo: "Coqueirinho — Piscinas Naturais",
        hora: "09:30",
        desc: "Piscinas e falésias antes do quadriciclo.",
      },
      {
        n: "03",
        foto: "/images/passeios/litoral-sul/coqueirinho/hero-01.jpg",
        titulo: "Quadriciclo nas Dunas",
        hora: "11:30",
        desc: "Trilha de ~1h30 nas dunas e mirantes do litoral sul.",
      },
      {
        n: "04",
        titulo: "Almoço livre",
        hora: "13:30",
        desc: "Quiosques locais próximos ao ponto de quadriciclo.",
      },
      {
        n: "05",
        foto: "/images/passeios/litoral-sul/tambaba/hero-01.jpg",
        titulo: "Tambaba / Praia livre",
        hora: "15:00",
        desc: "Banho final antes do retorno.",
      },
      {
        n: "06",
        titulo: "Retorno a João Pessoa",
        hora: "~17:30",
        desc: "Van climatizada diretamente ao ponto de origem.",
      },
    ],
  },

  "litoral-sul-combo-praia-bela-quadriciclo": {
    label: "ROTEIRO DO DIA",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/litoral-sul/hero-01.jpg",
        titulo: "Saída de João Pessoa",
        hora: "08:30",
        desc: "Embarque na van climatizada.",
      },
      {
        n: "02",
        foto: "/images/passeios/litoral-sul/praia-bela/hero-01.jpg",
        titulo: "Praia Bela — Snorkel",
        hora: "09:30",
        desc: "Piscinas naturais e snorkel em apneia.",
      },
      {
        n: "03",
        foto: "/images/passeios/litoral-sul/praia-bela/hero-01.jpg",
        titulo: "Quadriciclo nas Dunas",
        hora: "11:30",
        desc: "Trilha de ~1h30 pelas dunas e trilhas da região.",
      },
      {
        n: "04",
        titulo: "Almoço livre",
        hora: "13:30",
        desc: "Quiosques locais.",
      },
      {
        n: "05",
        titulo: "Retorno a João Pessoa",
        hora: "~17:00",
        desc: "Van climatizada.",
      },
    ],
  },

  "litoral-sul-quadriciclo-coqueirinho": {
    label: "PASSEIO",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/litoral-sul/coqueirinho/hero-01.jpg",
        titulo: "Chegada em Coqueirinho",
        hora: "Conforme agendamento",
        desc: "Recepção no ponto de saída do quadriciclo.",
      },
      {
        n: "02",
        titulo: "Briefing + Equipamentos",
        hora: "+20 min",
        desc: "Capacete, instruções de segurança e operação do quadriciclo.",
      },
      {
        n: "03",
        foto: "/images/passeios/litoral-sul/coqueirinho/hero-01.jpg",
        titulo: "Trilha nas Dunas",
        hora: "~1h30",
        desc: "Percurso pelas dunas, mirantes e trilhas do litoral sul.",
      },
      {
        n: "04",
        titulo: "Retorno ao Ponto de Partida",
        hora: "Término",
        desc: "Entrega do equipamento e encerramento.",
      },
    ],
  },

  "litoral-sul-quadriciclo-praia-bela": {
    label: "PASSEIO",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/litoral-sul/praia-bela/hero-01.jpg",
        titulo: "Chegada em Praia Bela",
        hora: "Conforme agendamento",
        desc: "Recepção no ponto de saída do quadriciclo.",
      },
      {
        n: "02",
        titulo: "Briefing + Equipamentos",
        hora: "+20 min",
        desc: "Capacete, instruções de segurança e operação.",
      },
      {
        n: "03",
        foto: "/images/passeios/litoral-sul/praia-bela/hero-01.jpg",
        titulo: "Trilha nas Dunas",
        hora: "~1h30",
        desc: "Percurso pelas dunas e trilhas próximas a Praia Bela.",
      },
      {
        n: "04",
        titulo: "Retorno ao Ponto de Partida",
        hora: "Término",
        desc: "Entrega do equipamento e encerramento.",
      },
    ],
  },

  /* ─────────────────────── LITORAL NORTE ─────────────────────── */

  "litoral-norte-roteiro-classico": {
    label: "ROTEIRO DO DIA",
    paradas: [
      {
        n: "01",
        titulo: "Saída de João Pessoa",
        hora: "09:00",
        desc: "Embarque na van climatizada.",
      },
      {
        n: "02",
        titulo: "Fortaleza de Santa Catarina",
        hora: "10:00",
        desc: "Fortaleza portuguesa de 1585, às margens do Rio Paraíba em Cabedelo.",
      },
      {
        n: "03",
        titulo: "Praias do Litoral Norte",
        hora: "11:00",
        desc: "Camboinha, Lucena e outras praias da região — banho e almoço livre.",
      },
      {
        n: "04",
        foto: "/images/passeios/litoral-norte/jacare/hero-01.jpg",
        titulo: "Pôr do Sol do Jacaré",
        hora: "~16:30",
        desc: "Às margens do Rio Jacaré — Jurandy do Sax toca o Bolero de Ravel (~17 min).",
      },
      {
        n: "05",
        titulo: "Retorno a João Pessoa",
        hora: "~18:00",
        desc: "Van climatizada diretamente ao ponto de origem.",
      },
    ],
  },

  "litoral-norte-combo-areia-vermelha": {
    label: "ROTEIRO DO DIA",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/litoral-norte/areia-vermelha/hero-01.jpg",
        titulo: "Catamarã — Areia Vermelha",
        hora: "Conforme maré",
        desc: "Embarcação no Rio Jacaré, travessia até a ilha de areia no oceano.",
      },
      {
        n: "02",
        foto: "/images/passeios/litoral-norte/areia-vermelha/hero-01.jpg",
        titulo: "Areia Vermelha",
        hora: "~3h na ilha",
        desc: "Piscinas naturais rasas ao redor da ilha, banho e fotos.",
      },
      {
        n: "03",
        titulo: "Fortaleza de Santa Catarina",
        hora: "Após retorno",
        desc: "Fortaleza portuguesa de 1585, visita rápida com vista para o rio.",
      },
      {
        n: "04",
        foto: "/images/passeios/litoral-norte/jacare/hero-01.jpg",
        titulo: "Pôr do Sol do Jacaré",
        hora: "~16:30",
        desc: "Bolero de Ravel ao vivo — encerramento do dia.",
      },
      {
        n: "05",
        titulo: "Retorno a João Pessoa",
        hora: "~18:00",
        desc: "Van climatizada.",
      },
    ],
  },

  "litoral-norte-areia-vermelha-catamara": {
    label: "PASSEIO",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/litoral-norte/jacare/hero-01.jpg",
        titulo: "Embarcação no Rio Jacaré",
        hora: "Conforme maré",
        desc: "Catamarã parte do embarcadouro do Rio Jacaré, em Cabedelo.",
      },
      {
        n: "02",
        foto: "/images/passeios/litoral-norte/areia-vermelha/hero-01.jpg",
        titulo: "Chegada na Areia Vermelha",
        hora: "+15 min",
        desc: "Desembarque na ilha de areia — piscinas naturais rasas ao redor.",
      },
      {
        n: "03",
        foto: "/images/passeios/litoral-norte/areia-vermelha/hero-01.jpg",
        titulo: "Tempo na Ilha",
        hora: "~3h",
        desc: "Banho, fotos e exploração da ilha no oceano.",
      },
      {
        n: "04",
        titulo: "Retorno ao Jacaré",
        hora: "Conforme maré",
        desc: "Catamarã de volta ao embarcadouro do Rio Jacaré.",
      },
    ],
  },

  "litoral-norte-por-do-sol-jacare": {
    label: "PASSEIO",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/litoral-norte/jacare/hero-01.jpg",
        titulo: "Chegada ao Rio Jacaré",
        hora: "~16:00",
        desc: "Chegue com 30 min de antecedência para garantir posição na margem.",
      },
      {
        n: "02",
        foto: "/images/passeios/litoral-norte/jacare/hero-01.jpg",
        titulo: "Embarcação",
        hora: "~16:30",
        desc: "Catamarã posicionado no rio, frente ao sol poente.",
      },
      {
        n: "03",
        foto: "/images/passeios/litoral-norte/jacare/hero-01.jpg",
        titulo: "Pôr do Sol + Bolero de Ravel",
        hora: "Out: 17h · Jan: 17h45",
        desc: "Jurandy do Sax toca o Bolero de Ravel ao vivo — duração ~17 minutos.",
      },
      {
        n: "04",
        titulo: "Retorno",
        hora: "Após o pôr do sol",
        desc: "Desembarque no Rio Jacaré e retorno ao ponto de origem.",
      },
    ],
  },

  "litoral-norte-lancha-privativa": {
    label: "ROTEIRO DO DIA",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/litoral-norte/jacare/hero-01.jpg",
        titulo: "Saída da Marina — Rio Jacaré",
        hora: "08:30",
        desc: "Embarque privativo na lancha, grupo fechado.",
      },
      {
        n: "02",
        foto: "/images/passeios/litoral-norte/areia-vermelha/hero-01.jpg",
        titulo: "Areia Vermelha",
        hora: "Conforme maré",
        desc: "Ilha de areia no oceano — até 3h na ilha com piscinas naturais.",
      },
      {
        n: "03",
        titulo: "Almoço a bordo ou na praia",
        hora: "~12:30",
        desc: "Almoço livre (não incluso).",
      },
      {
        n: "04",
        foto: "/images/passeios/litoral-norte/jacare/hero-01.jpg",
        titulo: "Passeio no Rio Paraíba",
        hora: "~14:00",
        desc: "Navegação pelo estuário até a Fortaleza de Santa Catarina.",
      },
      {
        n: "05",
        foto: "/images/passeios/litoral-norte/jacare/hero-01.jpg",
        titulo: "Pôr do Sol do Jacaré",
        hora: "~16:30",
        desc: "Bolero de Ravel ao vivo — encerramento do dia.",
      },
      {
        n: "06",
        titulo: "Retorno à Marina",
        hora: "~18:00",
        desc: "Atracagem e encerramento do passeio.",
      },
    ],
  },

  /* ─────────────────────── PISCINAS NATURAIS ─────────────────────── */

  "piscinas-naturais-seixas": {
    label: "ROTEIRO",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
        titulo: "Praia do Seixas",
        hora: "Conforme maré",
        desc: "Chegada ao ponto mais oriental das Américas — ponto de embarque.",
      },
      {
        n: "02",
        foto: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
        titulo: "Embarcação para os Recifes",
        hora: "+15 min",
        desc: "Barco ou jangada até os recifes de coral.",
      },
      {
        n: "03",
        foto: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
        titulo: "Piscinas Naturais",
        hora: "~3h",
        desc: "Snorkel, piscinas rasas, peixes coloridos e corais — explore no seu ritmo.",
      },
      {
        n: "04",
        titulo: "Retorno à Praia",
        hora: "Conforme maré",
        desc: "Retorno de barco à Praia do Seixas.",
      },
    ],
  },

  "piscinas-naturais-penha": {
    label: "ROTEIRO",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/piscinas-naturais/penha/hero-01.jpg",
        titulo: "Praia da Penha",
        hora: "Conforme maré",
        desc: "Praia do Litoral Sul, menos visitada e muito tranquila.",
      },
      {
        n: "02",
        foto: "/images/passeios/piscinas-naturais/penha/hero-01.jpg",
        titulo: "Embarcação para os Recifes",
        hora: "+15 min",
        desc: "Barco até os recifes de coral da Penha.",
      },
      {
        n: "03",
        foto: "/images/passeios/piscinas-naturais/penha/hero-01.jpg",
        titulo: "Piscinas Naturais",
        hora: "~3h",
        desc: "Snorkel e exploração dos recifes — ambiente mais calmo e menos turistas.",
      },
      {
        n: "04",
        titulo: "Retorno à Praia",
        hora: "Conforme maré",
        desc: "Retorno de barco à Praia da Penha.",
      },
    ],
  },

  "piscinas-naturais-picaozinho": {
    label: "ROTEIRO",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/picaozinho/hero-01.jpg",
        titulo: "Praia de Tambaú",
        hora: "Conforme maré",
        desc: "Embarque na orla da cidade, a 700 m do Picãozinho.",
      },
      {
        n: "02",
        foto: "/images/passeios/picaozinho/hero-01.jpg",
        titulo: "Chegada ao Picãozinho",
        hora: "+10 min",
        desc: "A piscina natural mais próxima da orla — ideal para crianças.",
      },
      {
        n: "03",
        foto: "/images/passeios/picaozinho/hero-01.jpg",
        titulo: "Piscinas Naturais",
        hora: "~2h",
        desc: "Água rasa e tranquila, peixinhos coloridos, recifes acessíveis.",
      },
      {
        n: "04",
        titulo: "Retorno a Tambaú",
        hora: "Conforme maré",
        desc: "Retorno de barco à Praia de Tambaú.",
      },
    ],
  },

  "piscinas-naturais-mergulho": {
    label: "PASSEIO",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/piscinas-naturais/mergulho/hero-01.jpg",
        titulo: "Ponto de Mergulho",
        hora: "Conforme maré e visibilidade",
        desc: "Chegada ao ponto — condição verificada antes de sair.",
      },
      {
        n: "02",
        titulo: "Briefing + Equipamentos",
        hora: "+20 min",
        desc: "Cilindros, máscara, roupa, instruções de segurança.",
      },
      {
        n: "03",
        foto: "/images/passeios/piscinas-naturais/mergulho/hero-01.jpg",
        titulo: "Mergulho com Cilindro",
        hora: "~45 min",
        desc: "Exploração dos recifes de coral em profundidade — guia instructor ao lado.",
      },
      {
        n: "04",
        titulo: "Encerramento",
        hora: "Após mergulho",
        desc: "Descanso de superfície e retorno ao ponto de origem.",
      },
    ],
  },

  /* ─────────────────────── CITY TOUR ─────────────────────── */

  "city-tour-jampa-historica": {
    label: "ROTEIRO DO DIA",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/city-tour/hero-01.jpg",
        titulo: "Saída em van climatizada",
        hora: "09:00",
        desc: "Grupo pequeno, van climatizada, guia local.",
      },
      {
        n: "02",
        titulo: "Farol do Cabo Branco",
        hora: "09:30",
        desc: "Marco zero das Américas — ponto mais oriental do continente americano.",
      },
      {
        n: "03",
        titulo: "Centro Histórico",
        hora: "10:30",
        desc: "Igrejas barrocas do século XVIII, Mercado de Artesanato, casarões coloniais.",
      },
      {
        n: "04",
        foto: "/images/passeios/city-tour/hero-01.jpg",
        titulo: "Parque Solon de Lucena (Lagoa)",
        hora: "12:00",
        desc: "Ponto de encontro dos pessoenses — projeto de Roberto Burle Marx, anos 1940.",
      },
      {
        n: "05",
        titulo: "Retorno ao ponto de origem",
        hora: "~14:00",
        desc: "Fim do City Tour.",
      },
    ],
  },

  /* ─────────────────────── PACOTES ─────────────────────── */

  "pacotes-roteiro-do-murillo-3-dias": {
    label: "3 DIAS",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/litoral-sul/hero-01.jpg",
        titulo: "Dia 1 — Litoral Sul Clássico",
        hora: "Saída 08:30",
        desc: "Tabatinga, Coqueirinho, Tambaba — dia inteiro de praias e piscinas naturais.",
      },
      {
        n: "02",
        foto: "/images/passeios/litoral-norte/jacare/hero-01.jpg",
        titulo: "Dia 2 — Litoral Norte + Pôr do Sol",
        hora: "Saída 09:00",
        desc: "Fortaleza de Santa Catarina, praias do norte e Bolero de Ravel no Jacaré.",
      },
      {
        n: "03",
        foto: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
        titulo: "Dia 3 — Piscinas Naturais + Areia Vermelha",
        hora: "Conforme maré",
        desc: "Seixas, Penha ou Picãozinho (Murillo escolhe com você pela tábua de marés) + Areia Vermelha se maré permitir.",
      },
    ],
  },

  "pacotes-combo-sol-nascente-3-dias": {
    label: "3 DIAS",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/litoral-sul/hero-01.jpg",
        titulo: "Dia 1 — Litoral Sul",
        hora: "Saída 08:30",
        desc: "Tabatinga, Coqueirinho, Tambaba.",
      },
      {
        n: "02",
        foto: "/images/passeios/litoral-norte/jacare/hero-01.jpg",
        titulo: "Dia 2 — Litoral Norte + Pôr do Sol",
        hora: "Saída 09:00",
        desc: "Fortaleza de Santa Catarina e Bolero de Ravel no Jacaré.",
      },
      {
        n: "03",
        foto: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg",
        titulo: "Dia 3 — Piscinas Naturais",
        hora: "Conforme maré",
        desc: "Seixas ou Penha — escolha da piscina orientada pela tábua de marés.",
      },
    ],
  },

  "pacotes-combo-mare-boa-2-dias": {
    label: "2 DIAS",
    paradas: [
      {
        n: "01",
        foto: "/images/passeios/city-tour/hero-01.jpg",
        titulo: "Dia 1 — City Tour + Piscinas Naturais",
        hora: "Conforme maré",
        desc: "Manhã: City Tour histórico. Tarde: piscinas naturais (Picãozinho ou Seixas).",
      },
      {
        n: "02",
        foto: "/images/passeios/litoral-norte/jacare/hero-01.jpg",
        titulo: "Dia 2 — Pôr do Sol do Jacaré",
        hora: "Tarde",
        desc: "Tarde livre e Pôr do Sol no Jacaré com Bolero de Ravel.",
      },
    ],
  },

  /* ─────────────────────── INTERESTADUAIS ─────────────────────── */

  "interestaduais-porto-de-galinhas": {
    label: "ROTEIRO DO DIA",
    paradas: [
      {
        n: "01",
        titulo: "Saída de João Pessoa",
        hora: "05:00",
        desc: "Van climatizada — chegada a Porto de Galinhas em ~2h (123 km).",
      },
      {
        n: "02",
        foto: "/images/passeios/interestaduais/porto-de-galinhas/hero-01.jpg",
        titulo: "Piscinas Naturais de Porto de Galinhas",
        hora: "07:30",
        desc: "As piscinas mais famosas do Nordeste — visitadas na maré baixa.",
      },
      {
        n: "03",
        titulo: "Praia livre + Almoço",
        hora: "11:00",
        desc: "Almoço livre nos restaurantes locais (não incluso).",
      },
      {
        n: "04",
        foto: "/images/passeios/interestaduais/porto-de-galinhas/hero-01.jpg",
        titulo: "Passeio de Buggy (opcional)",
        hora: "14:00",
        desc: "Buggy pelas praias da região — contratação local por conta do viajante.",
      },
      {
        n: "05",
        titulo: "Retorno a João Pessoa",
        hora: "17:00",
        desc: "Chegada a João Pessoa ~19h.",
      },
    ],
  },

  "interestaduais-praia-de-pipa": {
    label: "ROTEIRO DO DIA",
    paradas: [
      {
        n: "01",
        titulo: "Saída de João Pessoa",
        hora: "05:30",
        desc: "Van climatizada — chegada a Pipa em ~1h30.",
      },
      {
        n: "02",
        foto: "/images/passeios/interestaduais/praia-de-pipa/hero-01.jpg",
        titulo: "Praia do Amor + Mirante das Falésias",
        hora: "07:30",
        desc: "Falésias laranja com vista para o oceano — um dos mirantes mais bonitos do NE.",
      },
      {
        n: "03",
        titulo: "Baía dos Golfinhos",
        hora: "09:30",
        desc: "Trilha até a baía para avistar golfinhos-nariz-de-garrafa (não garantido, natural).",
      },
      {
        n: "04",
        foto: "/images/passeios/interestaduais/praia-de-pipa/hero-01.jpg",
        titulo: "Almoço em Pipa",
        hora: "12:00",
        desc: "Almoço livre no vilarejo (não incluso).",
      },
      {
        n: "05",
        titulo: "Praia livre + Retorno",
        hora: "14:00",
        desc: "Banho livre antes do retorno. Saída ~17h, chegada em JP ~18h30.",
      },
    ],
  },

  "interestaduais-natal": {
    label: "ROTEIRO DO DIA",
    paradas: [
      {
        n: "01",
        titulo: "Saída de João Pessoa",
        hora: "04:30",
        desc: "Van climatizada — chegada a Natal em ~2h30 (183 km).",
      },
      {
        n: "02",
        titulo: "Ponta Negra + Morro do Careca",
        hora: "07:30",
        desc: "A praia mais famosa de Natal e a duna símbolo da cidade.",
      },
      {
        n: "03",
        titulo: "Dunas de Genipabu",
        hora: "09:30",
        desc: "Passeio de buggy pelas famosas dunas de Genipabu (contratação local).",
      },
      {
        n: "04",
        titulo: "Almoço",
        hora: "12:30",
        desc: "Almoço livre em Natal (não incluso).",
      },
      {
        n: "05",
        titulo: "Praia de Cotovelo / Pirangi",
        hora: "14:00",
        desc: "Praias tranquilas ao sul de Natal antes do retorno.",
      },
      {
        n: "06",
        titulo: "Retorno a João Pessoa",
        hora: "17:00",
        desc: "Chegada a João Pessoa ~19h30.",
      },
    ],
  },
};
