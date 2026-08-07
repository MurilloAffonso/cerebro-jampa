/**
 * Traduções de passeios — EN/ES.
 *
 * Indexado por `passeio.id`. Cada idioma carrega `Partial<Passeio>` com os
 * campos visíveis traduzidos. O helper `localizarPasseio` em
 * `lib/passeios-i18n.ts` aplica os overrides sobre o objeto PT base.
 *
 * Tradução fiel: nomes próprios (Tambaba, Coqueirinho, Picãozinho,
 * Areia Vermelha, Bolero de Ravel, Murillo, Jurandy, Belle Soares),
 * valores em R$ e horários permanecem inalterados.
 */

import type { Passeio } from "./passeios";

type PasseioOverride = Partial<Passeio>;

export const passeiosTranslations: Record<
  string,
  { en?: PasseioOverride; es?: PasseioOverride }
> = {
  // =========================================================================
  // PACOTES
  // =========================================================================

  "roteiro-do-murillo-3-dias": {
    en: {
      nome: "Murillo's Itinerary — 3 days",
      preco: "Single: R$ 400 / Double: R$ 700",
      duracao: "3 days",
      saida: "8am–9am",
      descricao:
        "3 full days: southern beaches with ATV, history and sunset on the north coast, snorkeling in Seixas' natural pools.",
      incluso: [
        "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Accredited guides on every day",
        "ATV (1 machine)",
        "Sunset at Jacaré catamaran",
      ],
      naoIncluso: ["Meals"],
      observacoes:
        "ATV: minimum 7 years old. Seixas: depends on low tide. Private rate: on request.",
      idealPara: [
        "Travelers with 3+ days in João Pessoa",
        "Anyone who wants the full experience",
        "Families and couples",
      ],
      imagemAlt: "Murillo's 3-day complete itinerary in João Pessoa",
      faq: [
        {
          pergunta: "What's included in Murillo's 3-day itinerary?",
          resposta:
            "Transfer, accredited guides on all 3 days, ATV (1 machine) on the south coast and catamaran for Sunset at Jacaré. Meals are not included.",
        },
        {
          pergunta: "Do children pay?",
          resposta:
            "Under 5 years old: free. 5 to 11 years old: R$ 320. From 12 years old: adult rate.",
        },
        {
          pergunta: "Can I book the package as a private tour?",
          resposta:
            "Yes. Private rate on request — send a message on WhatsApp.",
        },
      ],
    },
    es: {
      nome: "Itinerario de Murillo — 3 días",
      preco: "Individual: R$ 400 / Pareja: R$ 700",
      duracao: "3 días",
      saida: "8h–9h",
      descricao:
        "3 días completos: playas del sur con cuatriciclo, historia y atardecer en el norte, esnórquel en las piscinas de Seixas.",
      incluso: [
        "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Guías acreditados todos los días",
        "Cuatriciclo (1 máquina)",
        "Catamarán Atardecer del Jacaré",
      ],
      naoIncluso: ["Comidas"],
      observacoes:
        "Cuatriciclo: mínimo 7 años. Seixas: depende de marea baja. Valor privativo: consultar.",
      idealPara: [
        "Turistas con 3+ días en João Pessoa",
        "Quien quiere la experiencia completa",
        "Familias y parejas",
      ],
      imagemAlt: "Itinerario completo de 3 días en João Pessoa con Murillo",
      faq: [
        {
          pergunta: "¿Qué incluye el Itinerario de Murillo de 3 días?",
          resposta:
            "Transfer, guías acreditados los 3 días, cuatriciclo (1 máquina) en el Litoral Sur y catamarán en el Atardecer del Jacaré. Las comidas no están incluidas.",
        },
        {
          pergunta: "¿Pagan los niños?",
          resposta:
            "Menores de 5 años: gratis. De 5 a 11 años: R$ 320. Desde 12 años: tarifa adulta.",
        },
        {
          pergunta: "¿Puedo contratar el paquete en modo privativo?",
          resposta:
            "Sí. Valor privativo a consultar — envía un mensaje por WhatsApp.",
        },
      ],
    },
  },

  "combo-sol-nascente-3-dias": {
    en: {
      nome: "Sunrise Combo — 3 days",
      preco: "Single: R$ 280 / Double: R$ 430",
      duracao: "3 days",
      saida: "8am–9am",
      descricao:
        "The best of João Pessoa in 3 days with the city's best value for money.",
      incluso: [
        "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Accredited guides for 3 days",
      ],
      naoIncluso: [
        "Meals",
        "ATV (optional add-on)",
        "Sunset catamaran (optional — R$ 90)",
      ],
      observacoes:
        "Seixas: depends on low tide. Sunset catamaran can be added for R$ 90.",
      idealPara: [
        "Travelers with 3 days and a balanced budget",
        "Groups",
        "First-time visitors to João Pessoa",
      ],
      imagemAlt: "Sunrise Combo — 3 days of tours in João Pessoa",
      faq: [
        {
          pergunta: "What's the difference between Sunrise Combo and Murillo's Itinerary?",
          resposta:
            "The Sunrise Combo doesn't include the ATV or sunset catamaran (both optional add-ons). Murillo's Itinerary already includes both.",
        },
        {
          pergunta: "Do children pay?",
          resposta:
            "Under 5 years old: free. 5 to 11 years old: R$ 224. From 12 years old: adult rate.",
        },
      ],
    },
    es: {
      nome: "Combo Sol Naciente — 3 días",
      preco: "Individual: R$ 280 / Pareja: R$ 430",
      duracao: "3 días",
      saida: "8h–9h",
      descricao:
        "Lo mejor de João Pessoa en 3 días con la mejor relación calidad-precio de la ciudad.",
      incluso: [
        "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Guías acreditados los 3 días",
      ],
      naoIncluso: [
        "Comidas",
        "Cuatriciclo (opcional aparte)",
        "Catamarán Atardecer (opcional — R$ 90)",
      ],
      observacoes:
        "Seixas: depende de marea baja. El catamarán del Atardecer se puede agregar por R$ 90.",
      idealPara: [
        "Turistas con 3 días y presupuesto equilibrado",
        "Grupos",
        "Primer contacto con João Pessoa",
      ],
      imagemAlt: "Combo Sol Naciente — 3 días de tours en João Pessoa",
      faq: [
        {
          pergunta: "¿Cuál es la diferencia entre el Combo Sol Naciente y el Itinerario de Murillo?",
          resposta:
            "El Combo Sol Naciente no incluye cuatriciclo ni catamarán del Atardecer (ambos opcionales aparte). El Itinerario de Murillo ya incluye los dos.",
        },
        {
          pergunta: "¿Pagan los niños?",
          resposta:
            "Menores de 5 años: gratis. De 5 a 11 años: R$ 224. Desde 12 años: tarifa adulta.",
        },
      ],
    },
  },

  "combo-mare-boa-2-dias": {
    en: {
      nome: "Good Tide Combo — 2 days",
      preco: "Single: R$ 140 / Double: R$ 260",
      duracao: "2 days",
      saida: "8am–9am",
      descricao:
        "Two essential experiences in 2 days — South Coast and Natural Pools — at the best value for money.",
      incluso: [
        "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Guide for both days",
      ],
      naoIncluso: ["Meals"],
      observacoes: "Seixas: depends on low tide.",
      idealPara: [
        "Travelers with 2 days",
        "Budget-friendly groups",
        "First-time visitors to João Pessoa",
      ],
      imagemAlt: "Good Tide Combo — 2 days of tours in João Pessoa",
      faq: [
        {
          pergunta: "Which tours are included?",
          resposta:
            "Day 1: South Coast (southern beaches). Day 2: Seixas Natural Pools (tide-dependent).",
        },
        {
          pergunta: "Do children pay?",
          resposta:
            "Under 5 years old: free. 5 to 11 years old: R$ 112. From 12 years old: adult rate.",
        },
      ],
    },
    es: {
      nome: "Combo Marea Buena — 2 días",
      preco: "Individual: R$ 140 / Pareja: R$ 260",
      duracao: "2 días",
      saida: "8h–9h",
      descricao:
        "Dos experiencias esenciales en 2 días — Litoral Sur y Piscinas Naturales — en la mejor relación calidad-precio.",
      incluso: [
        "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Guía los 2 días",
      ],
      naoIncluso: ["Comidas"],
      observacoes: "Seixas: depende de marea baja.",
      idealPara: [
        "Turistas con 2 días",
        "Grupos económicos",
        "Primer contacto con João Pessoa",
      ],
      imagemAlt: "Combo Marea Buena — 2 días de tours en João Pessoa",
      faq: [
        {
          pergunta: "¿Qué tours están incluidos?",
          resposta:
            "Día 1: Litoral Sur (playas del sur). Día 2: Piscinas Naturales de Seixas (depende de marea).",
        },
        {
          pergunta: "¿Pagan los niños?",
          resposta:
            "Menores de 5 años: gratis. De 5 a 11 años: R$ 112. Desde 12 años: tarifa adulta.",
        },
      ],
    },
  },

  // =========================================================================
  // LITORAL SUL
  // =========================================================================

  "litoral-sul-classico": {
    en: {
      nome: "South Coast — Classic Itinerary",
      preco: "R$ 80",
      duracao: "~8h",
      saida: "8am–9am",
      h1: "South Coast of João Pessoa — Classic Itinerary, 4 Beaches in 1 Day",
      metaDescription:
        "Classic south coast itinerary of João Pessoa: Gramame, Amor, Tambaba and Coqueirinho in 1 day. R$ 80 with transfer. Active Cadastur. Book on WhatsApp!",
      subtituloHero:
        "4 beaches in 1 day, with transfer from Tambaú, Cabo Branco, Manaíra or Bessa. We take care of the route and timing at each beach. You just enjoy.",
      descricao:
        "A full day along the most beautiful beaches of Paraíba's south coast: Gramame, Amor, Tambaba and Coqueirinho.",
      descricaoLonga:
        "The absolute classic of the south coast. You visit 4 different beaches, each with its own character: Gramame with white sand and calm waters, Amor with wild beauty, Tambaba — the only official nudist beach in the Northeast — and Coqueirinho for lunch.",
      lead:
        "Want to see the best of Paraíba's south coast in a single day — without driving, parking, or worrying about the route?\n\nThe Classic Itinerary visits 4 beaches with very different personalities: Gramame to start calmly, Amor for the wild scenery, Tambaba (the only official nudist beach in the Northeast, optional) and Coqueirinho for lunch.\n\nWe pick you up at the hotel in the morning, take you, tell you what each beach has to offer, and bring you back in the late afternoon. Departure between 8am and 9am, return around 4:30pm.",
      descricaoSensorial:
        "The driver picks you up in Tambaú, Cabo Branco, Manaíra or Bessa between 8am and 9am. The first stop is Gramame: white sand, calm waters, perfect for an easy start to the day.\n\nFrom there, we head to Praia do Amor — wild beauty, colorful cliffs and the most striking scenery of the day. Photographers want to stop longer.\n\nNext, Tambaba: the only official nudist beach in the Northeast. The visit is optional — you decide whether to go down or skip it. We let everyone know beforehand. Those who go down can stay dressed in part of the beach.\n\nThe last stop is Coqueirinho — a long break, time for lunch (not included, several options on-site). Time to rest, swim and enjoy that orange-cliff and coconut tree scenery that's in every Paraíba photo.\n\nReturn around 4:30pm, dropping you back at the hotel.",
      roteiroNarrativo: [
        {
          emoji: "🚐",
          titulo: "Pickup (transfer) — 8am to 9am",
          texto:
            "We pick you up at your hotel or Airbnb in Tambaú, Cabo Branco, Manaíra or Bessa. Exact time confirmed in the voucher after booking. No extra transfer fee within these neighborhoods.",
        },
        {
          emoji: "🏖️",
          titulo: "Gramame Beach",
          texto:
            "First stop. White sand, calm waters, perfect for starting the day at an easy pace. Time for a swim, photos and a breath before the more dynamic stops.",
        },
        {
          emoji: "🌊",
          titulo: "Praia do Amor",
          texto:
            "Wild beauty, colorful cliffs and the most striking scenery of the day. Photographers usually want to stay a bit longer — and we flex within the day's schedule.",
        },
        {
          emoji: "🌅",
          titulo: "Tambaba Beach (optional)",
          texto:
            "The only official nudist beach in the Northeast. The visit is optional — you decide whether to go down or skip it. We let everyone know beforehand. Those who go down can remain dressed in part of the beach.",
        },
        {
          emoji: "🌴",
          titulo: "Coqueirinho Beach — long stop",
          texto:
            "Last stop and the longest. Lunch time (not included — several restaurants on-site). Time for a swim, rest and that orange-cliff and coconut-tree scenery that's in every Paraíba photo.",
        },
        {
          emoji: "🚐",
          titulo: "Return around 4:30pm",
          texto:
            "We drop you back at the hotel. Total: ~8h since departure.",
        },
      ],
      galleryImages: [
        { src: "/images/passeios/litoral-sul/roteiro-classico/litoral-sul-gallery-08-tambaba-praia-vista-aerea.webp", alt: "Aerial view of Tambaba Beach with sea, reefs and sand" },
        { src: "/images/passeios/litoral-sul/roteiro-classico/litoral-sul-gallery-04-barra-gramame-rio-mar.webp", alt: "Aerial view of Barra de Gramame where the river meets the sea" },
        { src: "/images/passeios/litoral-sul/roteiro-classico/litoral-sul-gallery-09-praia-do-amor-costao.webp", alt: "Rocky shore at Praia do Amor on Paraíba's south coast" },
        { src: "/images/passeios/litoral-sul/roteiro-classico/litoral-sul-gallery-10-coqueirinho-enseada.webp", alt: "Coqueirinho Beach cove with sea, sand and vegetation" },
      ],
      imagemAlt:
        "Tambaba Beach on the classic south coast tour from João Pessoa",
      rotario: [
        "Departure 8am–9am (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Gramame Beach (white sand, calm waters)",
        "Praia do Amor (wild beauty, unique view)",
        "Tambaba Beach (only nudist beach in the Northeast — stop)",
        "Coqueirinho Beach (long lunch stop)",
        "Return ~4:30pm",
      ],
      incluso: [
        "Round-trip transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Accredited guides at every beach",
        "Guidance and assistance (Murillo or team)",
      ],
      naoIncluso: [
        "Meals (lunch at Coqueirinho extra — several options on-site)",
        "Drinks",
        "Entrance/fee at Tambaba (if applicable)",
      ],
      observacoes:
        "Tambaba is a nudist beach — visit is optional, we let everyone know beforehand. Private rate: on request.",
      nomeCurto: "South Coast",
      idealPara: ["Beach", "Full day", "Scenery", "Families and couples"],
      faq: [
        {
          pergunta: "Which beach is best for swimming?",
          resposta:
            "Gramame and Coqueirinho have calmer waters, ideal for long swims. Amor is wilder, with rocks and waves — great for photos and views, less for long swims. Depends on your taste.",
        },
        {
          pergunta: "Should I bring an extra swimsuit?",
          resposta:
            "We recommend yes. It's 4 beaches and you'll want to change out of a wet swimsuit before lunch at Coqueirinho. A towel is also important.",
        },
        {
          pergunta: "Tambaba is a nudist beach — do I have to undress?",
          resposta:
            "No. The visit to Tambaba is optional. Those who go down can stay dressed in part of the beach. Those who'd rather not go can stay in the vehicle or we skip the stop. We let everyone know beforehand.",
        },
        {
          pergunta: "What's included in the R$ 80?",
          resposta:
            "Round-trip transfer from Tambaú, Cabo Branco, Manaíra or Bessa, accredited guides at every beach and guidance during the tour. Meals and drinks are paid separately (lunch at Coqueirinho, several options on-site).",
        },
        {
          pergunta: "How long does the tour last?",
          resposta:
            "Around 8h, with departure between 8am and 9am and return around 4:30pm. Time at each beach is flexible within the day's schedule.",
        },
        {
          pergunta: "Can children come?",
          resposta:
            "Yes. Under 5 years old: free. 5 to 11 years old: R$ 64. From 12 years old: adult rate. Children must be accompanied by an adult throughout the tour.",
        },
        {
          pergunta: "What's the cancellation policy for rain?",
          resposta:
            "With 2h advance notice, we reschedule at no cost. If rescheduling isn't possible, 100% refund.",
        },
        {
          pergunta: "Is there a private option instead of the shared one?",
          resposta:
            "Yes. We can arrange a private version of the route for groups, families or couples who prefer total flexibility at each beach. Ask for the rate on WhatsApp.",
        },
        {
          pergunta: "Can I combine it with the Coqueirinho ATV trail?",
          resposta:
            "Yes — that's exactly what the Jampa Combo offers. Same beach route + ATV trail in the afternoon, in a single day. See the Combo page or ask on WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Swimsuit (and an extra one to change before lunch)",
          "Towel",
          "Sunscreen",
          "Comfortable flip-flops",
          "Cash or card for lunch at Coqueirinho",
        ],
        pontoEncontro:
          "We pick you up at your hotel or Airbnb in Tambaú, Cabo Branco, Manaíra or Bessa — João Pessoa, PB. The exact location is confirmed in the voucher after booking.",
        horario:
          "Departure between 8am and 9am. Return around 4:30pm.",
      },
    },
    es: {
      nome: "Litoral Sur — Itinerario Clásico",
      preco: "R$ 80",
      duracao: "~8h",
      saida: "8h–9h",
      h1: "Litoral Sur de João Pessoa — Itinerario Clásico por 4 Playas en 1 Día",
      metaDescription:
        "Itinerario clásico del litoral sur de João Pessoa: Gramame, Amor, Tambaba y Coqueirinho en 1 día. R$ 80 con transfer. Cadastur activo. Reserva por WhatsApp.",
      subtituloHero:
        "4 playas en 1 día, con transfer desde Tambaú, Cabo Branco, Manaíra o Bessa. Nos encargamos del trayecto y del tiempo en cada playa. Tú solo disfrutas.",
      descricao:
        "Un día entero por las playas más encantadoras del litoral sur de Paraíba: Gramame, Amor, Tambaba y Coqueirinho.",
      descricaoLonga:
        "El clásico absoluto del litoral sur. Pasas por 4 playas diferentes, cada una con su personalidad: Gramame con arena blanca y aguas calmas, Amor con belleza salvaje, Tambaba — la única playa naturista oficial del Nordeste — y Coqueirinho para almorzar.",
      lead:
        "¿Quieres conocer lo mejor del litoral sur de Paraíba en un solo día — sin manejar, sin estacionar, sin preocuparte por el trayecto?\n\nEl Itinerario Clásico pasa por 4 playas con personalidades muy diferentes: Gramame para empezar tranquilo, Amor por su visual salvaje, Tambaba (la única playa naturista oficial del Nordeste, opcional) y Coqueirinho para almorzar.\n\nTe recogemos en el hotel por la mañana, te llevamos, te contamos lo que hay en cada playa, y te traemos de vuelta por la tarde. Salida entre 8h y 9h, retorno alrededor de las 16h30.",
      descricaoSensorial:
        "El chofer te recoge en Tambaú, Cabo Branco, Manaíra o Bessa entre 8h y 9h. La primera parada es Gramame: arena blanca, aguas calmas, ideal para empezar el día tranquilo.\n\nDesde allí, vamos a Praia do Amor — belleza salvaje, acantilados de colores y el visual más impactante del día. Los amantes de la foto querrán parar más.\n\nLuego, Tambaba: la única playa naturista oficial del Nordeste. La visita es opcional — tú decides si bajas o prefieres seguir directo. Avisamos antes para quien prefiera no ir.\n\nLa última parada es Coqueirinho — parada larga, hora del almuerzo (no incluido, varias opciones en el lugar). Tiempo para descansar, bañarte en el mar y disfrutar de esa postal de cocoteros con acantilado naranja que aparece en toda foto de Paraíba.\n\nRetorno alrededor de las 16h30, dejándote de vuelta en el hotel.",
      roteiroNarrativo: [
        {
          emoji: "🚐",
          titulo: "Recogida (transfer) — 8h a 9h",
          texto:
            "Te recogemos en tu hotel o Airbnb en Tambaú, Cabo Branco, Manaíra o Bessa. Horario exacto confirmado en el voucher tras la reserva. Sin cobro adicional de transfer dentro de esos barrios.",
        },
        {
          emoji: "🏖️",
          titulo: "Playa de Gramame",
          texto:
            "Primera parada. Arena blanca, aguas calmas, ideal para empezar el día con tranquilidad. Tiempo para bañarte, fotos y respirar antes de la secuencia más intensa.",
        },
        {
          emoji: "🌊",
          titulo: "Praia do Amor",
          texto:
            "Belleza salvaje, acantilados de colores y el visual más marcante del día. Los amantes de la foto suelen pedir quedarse un poco más — y flexibilizamos dentro del horario del día.",
        },
        {
          emoji: "🌅",
          titulo: "Playa de Tambaba (opcional)",
          texto:
            "La única playa naturista oficial del Nordeste. La visita es opcional — tú decides si bajas o sigues directo. Avisamos antes para quien prefiera no ir. Quien baja puede permanecer vestido en parte de la playa.",
        },
        {
          emoji: "🌴",
          titulo: "Playa de Coqueirinho — parada larga",
          texto:
            "Última parada y la más larga. Hora del almuerzo (no incluido — varios restaurantes en el lugar). Tiempo para bañarte, descansar y la postal de acantilado naranja con cocoteros que está en toda foto de Paraíba.",
        },
        {
          emoji: "🚐",
          titulo: "Retorno alrededor de las 16h30",
          texto:
            "Te dejamos de vuelta en el hotel. Total: ~8h desde la salida.",
        },
      ],
      galleryImages: [
        { src: "/images/passeios/litoral-sul/roteiro-classico/litoral-sul-gallery-08-tambaba-praia-vista-aerea.webp", alt: "Vista aérea de la Playa de Tambaba con mar, arrecifes y arena" },
        { src: "/images/passeios/litoral-sul/roteiro-classico/litoral-sul-gallery-04-barra-gramame-rio-mar.webp", alt: "Vista aérea de Barra de Gramame donde el río se encuentra con el mar" },
        { src: "/images/passeios/litoral-sul/roteiro-classico/litoral-sul-gallery-09-praia-do-amor-costao.webp", alt: "Costa rocosa de Praia do Amor en el litoral sur de Paraíba" },
        { src: "/images/passeios/litoral-sul/roteiro-classico/litoral-sul-gallery-10-coqueirinho-enseada.webp", alt: "Ensenada de la Playa de Coqueirinho con mar, arena y vegetación" },
      ],
      imagemAlt:
        "Playa de Tambaba en el paseo clásico por el litoral sur de João Pessoa",
      rotario: [
        "Salida 8h–9h (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Playa de Gramame (arena blanca, aguas calmas)",
        "Praia do Amor (belleza salvaje, visual único)",
        "Playa de Tambaba (única playa naturista del NE — parada)",
        "Playa de Coqueirinho (parada larga para almorzar)",
        "Retorno ~16h30",
      ],
      incluso: [
        "Transfer ida y vuelta (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Guías acreditados en todas las playas",
        "Orientación y atención (Murillo o equipo)",
      ],
      naoIncluso: [
        "Comidas (almuerzo en Coqueirinho aparte — varias opciones en el lugar)",
        "Bebidas",
        "Entrada/pasaje en Tambaba (si aplica)",
      ],
      observacoes:
        "Tambaba es playa naturista — visita opcional, avisamos antes. Valor privativo: consultar.",
      nomeCurto: "Litoral Sur",
      idealPara: ["Playa", "Día completo", "Paisaje", "Familias y parejas"],
      faq: [
        {
          pergunta: "¿Qué playa es mejor para bañarse?",
          resposta:
            "Gramame y Coqueirinho tienen aguas más calmas, ideales para baño prolongado. Amor es más salvaje, con piedras y olas — buena para foto y vista, menos para baño largo. Todo depende de tu gusto.",
        },
        {
          pergunta: "¿Necesito llevar traje de baño extra?",
          resposta:
            "Recomendamos sí. Son 4 playas y lo ideal es cambiarte el traje mojado antes del almuerzo en Coqueirinho. La toalla también es importante.",
        },
        {
          pergunta: "Tambaba es playa naturista — ¿estoy obligado a desnudarme?",
          resposta:
            "No. La visita a Tambaba es opcional. Quien decide ir puede permanecer vestido en parte de la playa. Quien prefiere no ir, se queda en el vehículo o seguimos directo. Avisamos antes a quien prefiera saltar esa parada.",
        },
        {
          pergunta: "¿Qué incluyen los R$ 80?",
          resposta:
            "Transfer ida y vuelta desde Tambaú, Cabo Branco, Manaíra o Bessa, guías acreditados en todas las playas y orientación durante el tour. Las comidas y bebidas se pagan aparte (almuerzo en Coqueirinho, varias opciones en el lugar).",
        },
        {
          pergunta: "¿Cuánto dura el tour?",
          resposta:
            "Alrededor de 8h, contando salida entre 8h y 9h y retorno alrededor de las 16h30. El tiempo en cada playa es flexible dentro del itinerario del día.",
        },
        {
          pergunta: "¿Pueden ir niños?",
          resposta:
            "Sí. Menores de 5 años: gratis. De 5 a 11 años: R$ 64. Desde 12 años: tarifa adulta. Los niños deben estar acompañados por un adulto durante todo el tour.",
        },
        {
          pergunta: "¿Cuál es la política de cancelación por lluvia?",
          resposta:
            "Con aviso de 2h de antelación, reprogramamos sin costo. Si es imposible reprogramar, 100% de reembolso.",
        },
        {
          pergunta: "¿Hay opción privativa en lugar del compartido?",
          resposta:
            "Sí. Podemos armar una versión privativa de la ruta para grupos, familias o parejas que prefieran total flexibilidad de tiempo en cada playa. Consulta el valor por WhatsApp.",
        },
        {
          pergunta: "¿Se puede combinar con el trail de cuatriciclo de Coqueirinho?",
          resposta:
            "Sí — eso es exactamente lo que ofrecemos en el Combo Jampa. Misma ruta de playas + trail en cuatriciclo por la tarde, en un solo día. Mira la página del Combo o consulta por WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Traje de baño (y uno extra para cambiarte antes del almuerzo)",
          "Toalla",
          "Protector solar",
          "Chanclas cómodas",
          "Efectivo o tarjeta para almorzar en Coqueirinho",
        ],
        pontoEncontro:
          "Te recogemos en tu hotel o Airbnb en Tambaú, Cabo Branco, Manaíra o Bessa — João Pessoa, PB. La ubicación exacta se confirma en el voucher tras la reserva.",
        horario:
          "Salida entre 8h y 9h. Retorno alrededor de las 16h30.",
      },
    },
  },

  "litoral-sul-praia-bela": {
    en: {
      nome: "South Coast 2 — Praia Bela",
      preco: "R$ 80",
      duracao: "~8h",
      saida: "8am–9am",
      descricao:
        "Alternative route featuring Praia Bela and the meeting of sea and Mucatu River — a natural pool of warm fresh water.",
      incluso: ["Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)", "Guide"],
      naoIncluso: ["Meals"],
      observacoes:
        "Best for those who've already done the Classic Itinerary. Private rate: on request.",
      idealPara: ["Families", "Couples", "Second visit to the south coast"],
      imagemAlt: "Praia Bela on Paraíba's south coast where the Mucatu River meets the sea",
      faq: [
        {
          pergunta: "What's the difference between Praia Bela and the Classic Itinerary?",
          resposta:
            "Different routes. Praia Bela includes where the sea meets the Mucatu River — a natural pool of warm fresh water. Recommended for those who've already done the Classic.",
        },
        {
          pergunta: "Can children come?",
          resposta:
            "Yes. Under 5 years old: free. 5 to 11 years old: R$ 64. From 12 years old: adult rate.",
        },
      ],
    },
    es: {
      nome: "Litoral Sur 2 — Praia Bela",
      preco: "R$ 80",
      duracao: "~8h",
      saida: "8h–9h",
      descricao:
        "Ruta alternativa con Praia Bela y el encuentro del mar con el Río Mucatu — piscina natural de agua dulce tibia.",
      incluso: ["Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)", "Guía"],
      naoIncluso: ["Comidas"],
      observacoes:
        "Ideal para quien ya conoce el Itinerario Clásico. Valor privativo: consultar.",
      idealPara: ["Familias", "Parejas", "Segunda visita al litoral sur"],
      imagemAlt: "Praia Bela en el litoral sur de Paraíba con encuentro del Río Mucatu",
      faq: [
        {
          pergunta: "¿Cuál es la diferencia entre Praia Bela y el Itinerario Clásico?",
          resposta:
            "Rutas diferentes. Praia Bela incluye el encuentro del mar con el Río Mucatu — piscina natural de agua dulce tibia. Recomendado para quien ya hizo el Clásico.",
        },
        {
          pergunta: "¿Pueden ir niños?",
          resposta:
            "Sí. Menores de 5 años: gratis. De 5 a 11 años: R$ 64. Desde 12 años: tarifa adulta.",
        },
      ],
    },
  },

  "combo-jampa-quadriciclo": {
    en: {
      nome: "Jampa Combo — South Coast with ATV",
      preco: "Without ATV: R$ 150 / Single ATV: R$ 240 / Double ATV: R$ 310",
      duracao: "~8h (trail 1h30–2h)",
      saida: "8am–9am",
      h1: "Jampa Combo — South Coast of João Pessoa with ATV in Coqueirinho",
      metaDescription:
        "South coast beaches + ATV trail in Coqueirinho in one day. Transfer, guide, Dedo de Deus and Castelinho viewpoints. From R$ 150. Book on WhatsApp!",
      subtituloHero:
        "4 beaches in the morning, ATV adrenaline in the afternoon. We pick you up at the hotel, take care of everything, drop you back at the end of the day.",
      descricao:
        "Paradise beaches in the morning + ATV trail through Coqueirinho's historic viewpoints.",
      lead:
        "Want beach and adventure on the same day, without driving or hunting for parking?\n\nThe Jampa Combo pairs the Classic South Coast route (Gramame, Amor, Tambaba and Coqueirinho) with a 1h30–2h ATV trail through Coqueirinho's most stunning viewpoints.\n\nWe pick you up between 8am and 9am in Tambaú, Cabo Branco, Manaíra or Bessa. Four beaches in the morning, lunch in Coqueirinho, ATV in the afternoon — guided by our team. Back to the hotel around 4:30pm.",
      descricaoSensorial:
        "The morning follows the Classic South Coast rhythm: white sand in Gramame, raw cliffs at Praia do Amor, the optional stop in Tambaba and lunch in Coqueirinho with that orange-cliff-and-palm view.\n\nAfter lunch, the energy shifts. You swap the beach for the trail. The ATV is yours, the guide leads, and the route covers Mirante Dedo de Deus, Mirante das Tartarugas, Castelinho da Princesa (with little shops of artisanal cachaça) and Shopping Rural (local handicrafts and sweets).\n\nThe trail runs between 1h30 and 2h. At each stop you get off, photograph, breathe in the view and move on. At the end, a calm ride back to the hotel.",
      roteiroNarrativo: [
        {
          emoji: "🚐",
          titulo: "Pick-up (transfer) — 8am to 9am",
          texto:
            "We pick you up at your hotel or airbnb in Tambaú, Cabo Branco, Manaíra or Bessa. Exact time confirmed in the voucher.",
        },
        {
          emoji: "🏖️",
          titulo: "South coast beaches — morning",
          texto:
            "Gramame (calm waters), Praia do Amor (raw cliffs), Tambaba (optional stop) and Coqueirinho for lunch (not included, several options on site).",
        },
        {
          emoji: "🏍️",
          titulo: "ATV trail starts",
          texto:
            "After lunch, you get on the ATV. The guide briefs you on the vehicle, route and safety. Helmet provided. Minimum 7 years old to ride.",
        },
        {
          emoji: "📸",
          titulo: "Mirante Dedo de Deus and Mirante das Tartarugas",
          texto:
            "The most photogenic stops on the trail. Panoramic views of the south coast and time for photos without rushing.",
        },
        {
          emoji: "🏛️",
          titulo: "Castelinho da Princesa and Shopping Rural",
          texto:
            "Castelinho with little shops of artisanal cachaça. Shopping Rural with sweets, fruits, handicrafts and local products — a great stop for souvenirs.",
        },
        {
          emoji: "🚐",
          titulo: "Return around 4:30pm",
          texto:
            "Trail wraps, ATV returned, and transfer back to the hotel.",
        },
      ],
      rotario: [
        "Departure 8am–9am (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Beaches: Gramame, Amor, Tambaba and Coqueirinho (lunch)",
        "ATV trail 1h30–2h in Coqueirinho",
        "Stops: Dedo de Deus, Tartarugas, Castelinho, Shopping Rural",
        "Return ~4:30pm",
      ],
      incluso: [
        "Round-trip transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Accredited drivers and guide at every stop",
        "ATV on Coqueirinho trail (when booked)",
        "Helmet and safety gear",
        "Support and guidance (Murillo or team)",
      ],
      naoIncluso: [
        "Meals (lunch in Coqueirinho at extra cost)",
        "Drinks",
        "Purchases at Castelinho and Shopping Rural",
      ],
      observacoes:
        "ATV: minimum 7 years old to ride, maximum 2 people per machine. Younger kids can do the beach route only. Private rate: on request.",
      nomeCurto: "Jampa Combo",
      idealPara: [
        "Adventure seekers",
        "Couples",
        "Families with kids 7+",
        "Anyone who wants beach + adrenaline in one day",
      ],
      imagemAlt: "ATV trail through the viewpoints of Coqueirinho, Paraíba's south coast",
      faq: [
        {
          pergunta: "Can I do the tour without the ATV?",
          resposta:
            "Yes. Without ATV: R$ 150 per person. The beach route is exactly the same as the Classic South Coast tour.",
        },
        {
          pergunta: "Can children ride the ATV?",
          resposta:
            "From 7 years old to operate it (always with the guide leading). Younger kids can join the beach tour but not the ATV part.",
        },
        {
          pergunta: "Do I need ATV experience?",
          resposta:
            "No. The guide briefs you on the vehicle before departure, leads the group and adjusts pace to the riders' level. Trail is safe and well marked.",
        },
        {
          pergunta: "What's the difference between Single and Double ATV?",
          resposta:
            "Single: one ATV just for you (R$ 240). Double: two people share the same ATV (R$ 310). Maximum two riders per machine.",
        },
        {
          pergunta: "What's included in R$ 240 / R$ 310?",
          resposta:
            "Round-trip transfer, accredited drivers and guide at every stop, ATV on the Coqueirinho trail, helmet and safety gear. Meals and drinks are paid separately.",
        },
        {
          pergunta: "What if it rains on the trail day?",
          resposta:
            "With 2 hours' notice, we reschedule at no cost. If rescheduling is impossible, 100% refund. The beach tour usually runs even on cloudy days.",
        },
        {
          pergunta: "Can I skip Tambaba?",
          resposta:
            "Yes. The Tambaba stop is optional — anyone who prefers can skip and head straight to Coqueirinho. We let you know in advance.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Swimwear (and a spare to change after lunch)",
          "Comfortable pants or shorts for the ATV",
          "Closed-toe shoes or sandals with straps for the trail",
          "Towel",
          "Sunscreen",
          "Cash or card for lunch and purchases at Castelinho/Shopping Rural",
        ],
        pontoEncontro:
          "We pick you up at your hotel or airbnb in Tambaú, Cabo Branco, Manaíra or Bessa — João Pessoa, PB. Exact location confirmed in the voucher after booking.",
        horario:
          "Departure between 8am and 9am. Return around 4:30pm. ATV trail in the afternoon, 1h30 to 2h.",
      },
    },
    es: {
      nome: "Combo Jampa — Litoral Sur con Cuatriciclo",
      preco: "Sin cuatri: R$ 150 / Cuatri individual: R$ 240 / Cuatri doble: R$ 310",
      duracao: "~8h (trail 1h30–2h)",
      saida: "8h–9h",
      h1: "Combo Jampa — Litoral Sur de João Pessoa con Cuatriciclo en Coqueirinho",
      metaDescription:
        "Playas del litoral sur + trail en cuatriciclo en Coqueirinho en un solo día. Transfer, guía, miradores Dedo de Deus y Castelinho. Desde R$ 150. Reserva por WhatsApp!",
      subtituloHero:
        "4 playas por la mañana y adrenalina en cuatriciclo por la tarde. Te recogemos en el hotel, organizamos todo y te dejamos al final del día.",
      descricao:
        "Playas paradisíacas por la mañana + trail en cuatriciclo por los miradores históricos de Coqueirinho.",
      lead:
        "¿Quieres playa y aventura en el mismo día, sin conducir ni buscar estacionamiento?\n\nEl Combo Jampa une la Ruta Clásica del litoral sur (Gramame, Amor, Tambaba y Coqueirinho) con un trail en cuatriciclo de 1h30 a 2h por los miradores más bonitos de Coqueirinho.\n\nTe recogemos entre las 8h y las 9h en Tambaú, Cabo Branco, Manaíra o Bessa. Cuatro playas por la mañana, almuerzo en Coqueirinho y cuatriciclo guiado por la tarde. Regreso al hotel alrededor de las 16h30.",
      descricaoSensorial:
        "La mañana sigue el ritmo del Litoral Sur Clásico: arena blanca en Gramame, acantilados salvajes en Praia do Amor, parada opcional en Tambaba y almuerzo en Coqueirinho con vista de palmeras y acantilado anaranjado.\n\nDespués del almuerzo, cambia la energía. Cambias la playa por el trail. El cuatriciclo es tuyo, el guía va adelante y la ruta pasa por el Mirante Dedo de Deus, el Mirante das Tartarugas, el Castelinho da Princesa (con tienditas de cachaça artesanal) y el Shopping Rural (artesanías y dulces locales).\n\nEl trail dura entre 1h30 y 2h. En cada parada bajas, sacas fotos, respiras la vista y sigues. Al final, regreso tranquilo al hotel.",
      roteiroNarrativo: [
        {
          emoji: "🚐",
          titulo: "Salida (transfer) — 8h a 9h",
          texto:
            "Te recogemos en tu hotel o airbnb en Tambaú, Cabo Branco, Manaíra o Bessa. Horario exacto confirmado en el voucher.",
        },
        {
          emoji: "🏖️",
          titulo: "Playas del litoral sur — mañana",
          texto:
            "Gramame (aguas tranquilas), Praia do Amor (acantilados salvajes), Tambaba (parada opcional) y Coqueirinho para almorzar (no incluido, varias opciones en el lugar).",
        },
        {
          emoji: "🏍️",
          titulo: "Inicio del trail en cuatriciclo",
          texto:
            "Tras el almuerzo, montas en el cuatriciclo. El guía explica el vehículo, la ruta y la seguridad. Casco incluido. Mínimo 7 años para conducir.",
        },
        {
          emoji: "📸",
          titulo: "Mirante Dedo de Deus y Mirante das Tartarugas",
          texto:
            "Las paradas más fotogénicas del trail. Vista panorámica del litoral sur y tiempo para fotos sin prisa.",
        },
        {
          emoji: "🏛️",
          titulo: "Castelinho da Princesa y Shopping Rural",
          texto:
            "Castelinho con tienditas de cachaças artesanales. Shopping Rural con dulces, frutas, artesanías y productos regionales — buena parada para souvenirs.",
        },
        {
          emoji: "🚐",
          titulo: "Regreso alrededor de las 16h30",
          texto:
            "Trail terminado, devolución del cuatriciclo y transfer de vuelta al hotel.",
        },
      ],
      rotario: [
        "Salida 8h–9h (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Playas: Gramame, Amor, Tambaba y Coqueirinho (almuerzo)",
        "Trail en cuatriciclo 1h30–2h en Coqueirinho",
        "Paradas: Dedo de Deus, Tartarugas, Castelinho, Shopping Rural",
        "Regreso ~16h30",
      ],
      incluso: [
        "Transfer ida y vuelta (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Conductores y guía acreditados en todas las paradas",
        "Cuatriciclo en el trail de Coqueirinho (cuando se contrata)",
        "Casco y equipo de seguridad",
        "Orientación y atención (Murillo o equipo)",
      ],
      naoIncluso: [
        "Comidas (almuerzo en Coqueirinho aparte)",
        "Bebidas",
        "Compras en Castelinho y Shopping Rural",
      ],
      observacoes:
        "Cuatriciclo: mínimo 7 años para conducir, máximo 2 personas por máquina. Los niños menores pueden hacer solo la ruta de playas. Valor privativo: consultar.",
      nomeCurto: "Combo Jampa",
      idealPara: [
        "Aventureros",
        "Parejas",
        "Familias con niños desde 7 años",
        "Quien busca playa + adrenalina en el mismo día",
      ],
      imagemAlt: "Trail en cuatriciclo por los miradores de Coqueirinho, Litoral Sur de Paraíba",
      faq: [
        {
          pergunta: "¿Puedo hacer el tour sin el cuatriciclo?",
          resposta:
            "Sí. Sin cuatri: R$ 150 por persona. La ruta de playas es exactamente la misma del Clásico del Litoral Sur.",
        },
        {
          pergunta: "¿Pueden los niños usar el cuatriciclo?",
          resposta:
            "Desde 7 años para conducir (siempre con el guía adelante). Los menores pueden ir al tour de playas pero no al cuatriciclo.",
        },
        {
          pergunta: "¿Necesito experiencia con cuatriciclo?",
          resposta:
            "No. El guía explica el vehículo antes de salir, lidera el grupo y ajusta el ritmo al nivel de los pilotos. El trail es seguro y bien señalizado.",
        },
        {
          pergunta: "¿Cuál es la diferencia entre individual y doble en el cuatri?",
          resposta:
            "Individual: 1 cuatri solo para ti (R$ 240). Doble: 2 personas comparten el mismo cuatri (R$ 310). Máximo 2 personas por máquina.",
        },
        {
          pergunta: "¿Qué incluye R$ 240 / R$ 310?",
          resposta:
            "Transfer ida y vuelta, conductores y guía en todas las paradas, cuatriciclo en el trail de Coqueirinho, casco y equipo de seguridad. Comidas y bebidas se pagan aparte.",
        },
        {
          pergunta: "¿Y si llueve el día del trail?",
          resposta:
            "Con aviso de 2 horas de antelación, reprogramamos sin costo. Si no es posible reprogramar, reembolso del 100%. El tour de playas suele realizarse incluso con tiempo nublado.",
        },
        {
          pergunta: "¿Puedo saltarme Tambaba?",
          resposta:
            "Sí. La visita a Tambaba es opcional — quien prefiere sigue directo a Coqueirinho. Te avisamos antes.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Traje de baño (y uno extra para cambiarte tras el almuerzo)",
          "Pantalón o bermuda cómoda para el cuatriciclo",
          "Zapatillas cerradas o sandalias con tira para el trail",
          "Toalla",
          "Protector solar",
          "Dinero o tarjeta para almuerzo y compras en Castelinho/Shopping Rural",
        ],
        pontoEncontro:
          "Te recogemos en tu hotel o airbnb en Tambaú, Cabo Branco, Manaíra o Bessa — João Pessoa, PB. La ubicación exacta se confirma en el voucher tras la reserva.",
        horario:
          "Salida entre las 8h y las 9h. Regreso alrededor de las 16h30. Trail en cuatriciclo por la tarde, 1h30 a 2h.",
      },
    },
  },

  "combo-praia-bela-quadriciclo": {
    en: {
      nome: "Praia Bela Combo — South Coast with ATV",
      preco: "Without ATV: R$ 159 / Single ATV: R$ 250 / Double ATV: R$ 330",
      duracao: "~8h (trail 1h30–2h)",
      saida: "8am–9am",
      descricao:
        "Beaches on the Praia Bela route + ATV trail through colorful cliffs and where the sea meets the Abiaí River.",
      incluso: [
        "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Guide",
        "ATV (when booked)",
      ],
      naoIncluso: ["Meals"],
      observacoes: "ATV: minimum 7 years old. Private rate: on request.",
      idealPara: ["Adventure seekers", "Couples", "Families with kids 7+"],
      imagemAlt: "ATV on the cliffs of Praia Bela, Paraíba's south coast",
      faq: [
        {
          pergunta: "What's the difference between Jampa Combo and Praia Bela Combo?",
          resposta:
            "Different routes. Praia Bela Combo includes colorful cliffs and where the sea meets the Abiaí River.",
        },
      ],
    },
    es: {
      nome: "Combo Praia Bela — Litoral Sur con Cuatriciclo",
      preco: "Sin cuatri: R$ 159 / Cuatri individual: R$ 250 / Cuatri doble: R$ 330",
      duracao: "~8h (trail 1h30–2h)",
      saida: "8h–9h",
      descricao:
        "Playas de la ruta Praia Bela + trail en cuatriciclo por los acantilados de colores y el encuentro del mar con el Río Abiaí.",
      incluso: [
        "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Guía",
        "Cuatriciclo (cuando se contrata)",
      ],
      naoIncluso: ["Comidas"],
      observacoes: "Cuatriciclo: mínimo 7 años. Valor privativo: consultar.",
      idealPara: ["Aventureros", "Parejas", "Familias con niños 7+"],
      imagemAlt: "Cuatriciclo en los acantilados de Praia Bela, litoral sur de Paraíba",
      faq: [
        {
          pergunta: "¿Cuál es la diferencia entre el Combo Jampa y el Combo Praia Bela?",
          resposta:
            "Rutas diferentes. El Combo Praia Bela incluye acantilados de colores y el encuentro del mar con el Río Abiaí.",
        },
      ],
    },
  },

  "quadriciclo-coqueirinho": {
    en: {
      nome: "ATV in Coqueirinho",
      preco: "On request · Reply within 5 min",
      duracao: "1h30–2h",
      saida: "To be arranged · Morning or afternoon",
      descricao:
        "ATV trail through Coqueirinho's historic viewpoints and cliffs — without the beach tour.",
      observacoes:
        "Minimum 7 years old. Transport and availability: on request. Format: private.",
      idealPara: ["Adventure seekers", "Groups", "Returning visitors"],
      imagemAlt: "ATV on the viewpoints of Coqueirinho, Paraíba",
      faq: [
        {
          pergunta: "Can I do just the ATV trail without the beach tour?",
          resposta:
            "Yes. This is the trail-only tour. Check availability and rate on WhatsApp.",
        },
      ],
    },
    es: {
      nome: "Cuatriciclo en Coqueirinho",
      preco: "A consultar · Respuesta en 5 min",
      duracao: "1h30–2h",
      saida: "A coordinar · Mañana o tarde",
      descricao:
        "Trail en cuatriciclo por los miradores y acantilados históricos de Coqueirinho — sin el tour de playas.",
      observacoes:
        "Mínimo 7 años. Transporte y disponibilidad: consultar. Formato: privativo.",
      idealPara: ["Aventureros", "Grupos", "Visitantes que repiten"],
      imagemAlt: "Cuatriciclo en los miradores de Coqueirinho, Paraíba",
      faq: [
        {
          pergunta: "¿Puedo hacer solo el trail en cuatri sin el tour de playas?",
          resposta:
            "Sí. Este es el tour solo de trail. Consulta disponibilidad y valor por WhatsApp.",
        },
      ],
    },
  },

  "quadriciclo-praia-bela": {
    en: {
      nome: "ATV in Praia Bela",
      preco: "On request · Reply within 5 min",
      duracao: "1h30–2h",
      saida: "To be arranged · Morning or afternoon",
      descricao:
        "ATV trail through Praia Bela's colorful cliffs and where the Abiaí River meets the sea.",
      observacoes:
        "Minimum 7 years old. Transport and availability: on request. Format: private.",
      idealPara: ["Adventure seekers", "Groups"],
      imagemAlt: "ATV on the cliffs of Praia Bela, Paraíba",
      faq: [
        {
          pergunta: "Can I do just the ATV trail in Praia Bela?",
          resposta:
            "Yes. Check availability and rate on WhatsApp.",
        },
      ],
    },
    es: {
      nome: "Cuatriciclo en Praia Bela",
      preco: "A consultar · Respuesta en 5 min",
      duracao: "1h30–2h",
      saida: "A coordinar · Mañana o tarde",
      descricao:
        "Trail en cuatriciclo por los acantilados de colores de Praia Bela y el encuentro del Río Abiaí con el mar.",
      observacoes:
        "Mínimo 7 años. Transporte y disponibilidad: consultar. Formato: privativo.",
      idealPara: ["Aventureros", "Grupos"],
      imagemAlt: "Cuatriciclo en los acantilados de Praia Bela, Paraíba",
      faq: [
        {
          pergunta: "¿Puedo hacer solo el trail en cuatri en Praia Bela?",
          resposta:
            "Sí. Consulta disponibilidad y valor por WhatsApp.",
        },
      ],
    },
  },

  // =========================================================================
  // LITORAL NORTE
  // =========================================================================

  "litoral-norte-classico": {
    en: {
      nome: "North Coast — Classic Itinerary",
      preco: "R$ 80",
      duracao: "~8h",
      saida: "Morning",
      h1: "North Coast of João Pessoa — Classic Itinerary with Jacaré Sunset",
      metaDescription:
        "Classic north coast itinerary: Sea Turtle Reserve, Cabedelo Dike, Fort Santa Catarina and Jacaré Sunset to Ravel's Bolero. R$ 80. Book on WhatsApp!",
      subtituloHero:
        "Nature, colonial history and Brazil's most moving sunset — in a single day, with transfer and guide.",
      descricao:
        "Nature, colonial history and Brazil's most moving sunset to the sound of Ravel's Bolero.",
      lead:
        "Want to see the contemplative, historic side of João Pessoa, ending with a sunset famous for its live saxophone?\n\nThe Classic North Coast Itinerary takes you to three landmarks in Cabedelo — the Sea Turtle Nesting Reserve, Cabedelo Dike and Fort Santa Catarina — and wraps the day on the Paraíba River banks with Ravel's Bolero played live by Jurandy do Sax.\n\nWe pick you up in the morning in Tambaú, Cabo Branco, Manaíra or Bessa. All led by an accredited guide, round-trip transfer included.",
      descricaoSensorial:
        "The morning starts at the Sea Turtle Nesting Reserve — in season, you can see nests protected by the Tamar Project. A short but meaningful stop that sets the tone for the day.\n\nNext, the Cabedelo Dike, where the Paraíba River meets the sea. The contrast between fresh and salt water is visible, and the landscape is unlike anything on the south coast.\n\nFort Santa Catarina follows: a colonial fortification built by the Portuguese, with cannons and walls still preserved. The guide tells the story without rushing.\n\nLunch is in Cabedelo (not included — several options, fresh fish and shrimp). Then the afternoon is dedicated to the Jacaré Sunset.\n\nWe arrive before sunset so you can pick a good table. The catamaran boards from there (optional, R$ 90 extra) and sails the Paraíba River. When the sun touches the horizon, Jurandy do Sax climbs onto his canoe and plays Ravel's Bolero — a scene he's been repeating for over 20 years. Even without the catamaran, you can listen from the shore.",
      roteiroNarrativo: [
        {
          emoji: "🚐",
          titulo: "Pick-up (transfer) — morning",
          texto:
            "We pick you up at your hotel or airbnb in Tambaú, Cabo Branco, Manaíra or Bessa. Time confirmed in the voucher after booking.",
        },
        {
          emoji: "🐢",
          titulo: "Sea Turtle Nesting Reserve",
          texto:
            "Stop at the protected area in Cabedelo. In nesting season, you can see marked nests. Short but important to understand the local ecosystem.",
        },
        {
          emoji: "🌊",
          titulo: "Cabedelo Dike",
          texto:
            "Where the Paraíba River meets the sea. Contrast between the waters and wide-open landscape — good for photos and a breather.",
        },
        {
          emoji: "🏰",
          titulo: "Fort Santa Catarina",
          texto:
            "Portuguese colonial fortification, still with cannons and walls. Historic heritage of Cabedelo. The guide walks you through the story.",
        },
        {
          emoji: "🍤",
          titulo: "Lunch in Cabedelo (not included)",
          texto:
            "Restaurants along the north coast with fresh fish and shrimp. The guide suggests the best options for your style.",
        },
        {
          emoji: "🎷",
          titulo: "Jacaré Sunset",
          texto:
            "Arrival before sunset to pick a table. Jurandy do Sax plays Ravel's Bolero live when the sun touches the horizon. The catamaran is optional (R$ 90 extra) and offers a river view.",
        },
        {
          emoji: "🚐",
          titulo: "Return after sunset",
          texto:
            "We drop you back at the hotel right after the performance ends.",
        },
      ],
      rotario: [
        "Departure in the morning (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Sea Turtle Nesting Reserve",
        "Cabedelo Dike (river meets sea)",
        "Fort Santa Catarina (colonial era)",
        "Lunch in Cabedelo (not included)",
        "Jacaré Sunset with live Ravel's Bolero",
        "Return after sunset",
      ],
      incluso: [
        "Round-trip transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Accredited drivers and guide",
        "Historical commentary at every landmark",
        "Support and guidance (Murillo or team)",
      ],
      naoIncluso: [
        "Meals (lunch in Cabedelo at extra cost)",
        "Drinks",
        "Jacaré Sunset catamaran (optional — R$ 90 per person)",
        "Museum or cultural center entries (when applicable)",
      ],
      observacoes:
        "The Jacaré Sunset happens every day, with Jurandy on saxophone live. The catamaran is optional and highly recommended. Private rate: on request.",
      nomeCurto: "North Coast",
      idealPara: [
        "All types of travelers",
        "Lovers of history and culture",
        "Couples",
        "Anyone after a memorable sunset",
      ],
      imagemAlt: "João Pessoa's north coast with colonial history and nature",
      faq: [
        {
          pergunta: "Is the Jacaré Sunset included?",
          resposta:
            "No. It's an optional add-on (R$ 90 per person, on the catamaran). We strongly recommend it — it's one of João Pessoa's most memorable experiences. If you prefer, you can watch from the shore without paying for the catamaran.",
        },
        {
          pergunta: "Who plays Ravel's Bolero? Every day?",
          resposta:
            "It's Jurandy do Sax, doing it for over 20 years. Every day at sunset, except in extreme weather. The performance is in front of Praia do Jacaré.",
        },
        {
          pergunta: "Can I see turtles outside nesting season?",
          resposta:
            "Nests are only marked during nesting season (roughly October to March). Outside that window, the stop is still worthwhile to understand the protection work and see the project's structure.",
        },
        {
          pergunta: "Can children come?",
          resposta:
            "Yes. Under 5 years old: free. 5 to 11 years old: R$ 64. From 12 years old: adult rate. The tour is calm, no trail or physical effort.",
        },
        {
          pergunta: "What's included in R$ 80?",
          resposta:
            "Round-trip transfer from Tambaú, Cabo Branco, Manaíra or Bessa, accredited guide at the historic stops and support throughout the day. Meals, drinks and catamaran are extra.",
        },
        {
          pergunta: "What's the best place for lunch in Cabedelo?",
          resposta:
            "Several restaurants along the coast. The guide recommends based on your style: traditional, seafood, regional, casual or upscale.",
        },
        {
          pergunta: "What's the cancellation policy in case of rain?",
          resposta:
            "With 2 hours' notice, we reschedule at no cost. If rescheduling is impossible, 100% refund.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Light, comfortable clothing",
          "Sneakers or closed-toe shoes for the Fort",
          "Sunscreen and sunglasses",
          "Camera (the sunset is worth photographing)",
          "Light jacket for the river at sunset",
          "Cash or card for lunch and drinks",
        ],
        pontoEncontro:
          "We pick you up at your hotel or airbnb in Tambaú, Cabo Branco, Manaíra or Bessa — João Pessoa, PB. Exact location confirmed in the voucher after booking.",
        horario:
          "Departure in the morning. Return after sunset (usually between 6pm and 7pm depending on the season).",
      },
    },
    es: {
      nome: "Litoral Norte — Itinerario Clásico",
      preco: "R$ 80",
      duracao: "~8h",
      saida: "Mañana",
      h1: "Litoral Norte de João Pessoa — Itinerario Clásico con Atardecer del Jacaré",
      metaDescription:
        "Itinerario clásico del litoral norte: Reserva de Tortugas, Dique de Cabedelo, Fortaleza de Santa Catarina y Atardecer del Jacaré con Bolero de Ravel. R$ 80. Reserva por WhatsApp!",
      subtituloHero:
        "Naturaleza, historia colonial y el atardecer más emocionante de Brasil — en un solo día, con transfer y guía.",
      descricao:
        "Naturaleza, historia colonial y el atardecer más emocionante de Brasil al son del Bolero de Ravel.",
      lead:
        "¿Quieres conocer el lado histórico y contemplativo de João Pessoa, cerrando con un atardecer famoso por su saxofón en vivo?\n\nEl Itinerario Clásico del Litoral Norte te lleva por tres puntos marcantes de Cabedelo — Reserva de Desova de Tortugas, Dique de Cabedelo y Fortaleza de Santa Catarina — y cierra el día frente al Río Paraíba con el Bolero de Ravel tocado en vivo por Jurandy do Sax.\n\nTe recogemos por la mañana en Tambaú, Cabo Branco, Manaíra o Bessa. Todo conducido por guía acreditado, transfer ida y vuelta incluido.",
      descricaoSensorial:
        "La mañana empieza en la Reserva de Desova de Tortugas Marinas — en época adecuada, puedes ver nidos protegidos por el Proyecto Tamar. Parada corta pero marcante: cambia el tono del día.\n\nLuego, el Dique de Cabedelo, donde el Río Paraíba se encuentra con el mar. El contraste entre agua dulce y salada se ve a simple vista, y el paisaje es distinto de todo lo del litoral sur.\n\nLa Fortaleza de Santa Catarina viene a continuación: fortificación colonial portuguesa, con cañones y murallas todavía preservados. El guía cuenta la historia sin prisa.\n\nEl almuerzo es en Cabedelo (no incluido — varias opciones, pescado y camarón frescos). Después, la tarde se dedica al Atardecer del Jacaré.\n\nLlegamos antes de que se ponga el sol para que elijas buena mesa. El catamarán embarca desde ahí (opcional, R$ 90 aparte) y navega por el Río Paraíba. Cuando el sol toca el horizonte, Jurandy do Sax sube a su canoa y toca el Bolero de Ravel — una escena que repite hace más de 20 años. Si no haces el catamarán, escuchas desde la orilla.",
      roteiroNarrativo: [
        {
          emoji: "🚐",
          titulo: "Salida (transfer) — por la mañana",
          texto:
            "Te recogemos en tu hotel o airbnb en Tambaú, Cabo Branco, Manaíra o Bessa. Horario confirmado en el voucher tras la reserva.",
        },
        {
          emoji: "🐢",
          titulo: "Reserva de Desova de Tortugas Marinas",
          texto:
            "Parada en el área de protección en Cabedelo. En época de desova, se pueden ver nidos señalizados. Breve pero importante para entender el ecosistema local.",
        },
        {
          emoji: "🌊",
          titulo: "Dique de Cabedelo",
          texto:
            "Donde el Río Paraíba se encuentra con el mar. Contraste entre las aguas y paisaje amplio — bueno para foto y respiro.",
        },
        {
          emoji: "🏰",
          titulo: "Fortaleza de Santa Catarina",
          texto:
            "Fortificación colonial portuguesa, todavía con cañones y murallas. Patrimonio histórico en Cabedelo. El guía explica la historia mientras caminas.",
        },
        {
          emoji: "🍤",
          titulo: "Almuerzo en Cabedelo (no incluido)",
          texto:
            "Restaurantes a lo largo del litoral norte con pescado y camarón fresquito. El guía indica las mejores opciones para tu perfil.",
        },
        {
          emoji: "🎷",
          titulo: "Atardecer del Jacaré",
          texto:
            "Llegada antes del atardecer para elegir mesa. Jurandy do Sax toca el Bolero de Ravel en vivo cuando el sol toca el horizonte. El catamarán es opcional (R$ 90 aparte) y ofrece la vista del río.",
        },
        {
          emoji: "🚐",
          titulo: "Regreso tras el atardecer",
          texto:
            "Te llevamos de vuelta al hotel justo después de terminar la presentación.",
        },
      ],
      rotario: [
        "Salida por la mañana (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Reserva de Desova de Tortugas",
        "Dique de Cabedelo (encuentro del río con el mar)",
        "Fortaleza de Santa Catarina (período colonial)",
        "Almuerzo en Cabedelo (no incluido)",
        "Atardecer del Jacaré con Bolero de Ravel en vivo",
        "Regreso tras el atardecer",
      ],
      incluso: [
        "Transfer ida y vuelta (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Conductores y guía acreditados",
        "Acompañamiento histórico en los puntos turísticos",
        "Orientación y atención (Murillo o equipo)",
      ],
      naoIncluso: [
        "Comidas (almuerzo en Cabedelo aparte)",
        "Bebidas",
        "Catamarán Atardecer del Jacaré (opcional — R$ 90 por persona)",
        "Entradas a museos o centros culturales (cuando aplique)",
      ],
      observacoes:
        "El Atardecer del Jacaré ocurre todos los días con Jurandy en saxofón en vivo. El catamarán es opcional y muy recomendado. Valor privativo: consultar.",
      nomeCurto: "Litoral Norte",
      idealPara: [
        "Todo tipo de viajeros",
        "Amantes de historia y cultura",
        "Parejas",
        "Quien quiere un atardecer memorable",
      ],
      imagemAlt: "Litoral norte de João Pessoa con historia colonial y naturaleza",
      faq: [
        {
          pergunta: "¿Está incluido el Atardecer del Jacaré?",
          resposta:
            "No. Es un opcional aparte (R$ 90 por persona, en el catamarán). Recomendamos fuertemente — es una de las experiencias más marcantes de João Pessoa. Si prefieres, puedes verlo desde la orilla sin pagar el catamarán.",
        },
        {
          pergunta: "¿Quién toca el Bolero de Ravel? ¿Es todos los días?",
          resposta:
            "Es Jurandy do Sax, hace más de 20 años. Sucede todos los días al atardecer, excepto en condiciones extremas de clima. La presentación es frente a Praia do Jacaré.",
        },
        {
          pergunta: "¿Se ven tortugas fuera de la época de desova?",
          resposta:
            "Los nidos solo se señalizan en época de desova (aproximadamente de octubre a marzo). Fuera de ese período, la parada sigue valiendo para entender el trabajo de protección y ver la estructura del proyecto.",
        },
        {
          pergunta: "¿Pueden ir niños?",
          resposta:
            "Sí. Menores de 5 años: gratis. De 5 a 11 años: R$ 64. Desde 12 años: tarifa adulta. El tour es tranquilo, sin caminata ni esfuerzo físico.",
        },
        {
          pergunta: "¿Qué incluye R$ 80?",
          resposta:
            "Transfer ida y vuelta desde Tambaú, Cabo Branco, Manaíra o Bessa, guía acreditado en los puntos históricos y orientación durante el día. Comidas, bebidas y catamarán aparte.",
        },
        {
          pergunta: "¿Cuál es el mejor lugar para almorzar en Cabedelo?",
          resposta:
            "Varios restaurantes a lo largo del litoral. El guía recomienda según tu perfil: tradicional, frutos del mar, comida regional, opciones más simples o más elaboradas.",
        },
        {
          pergunta: "¿Cuál es la política de cancelación por lluvia?",
          resposta:
            "Con aviso de 2 horas de antelación, reprogramamos sin costo. Si no es posible reprogramar, reembolso del 100%.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Ropa ligera y cómoda",
          "Zapatillas o calzado cerrado para la Fortaleza",
          "Protector solar y gafas de sol",
          "Cámara (el atardecer vale la foto)",
          "Chaqueta ligera para el atardecer en el río",
          "Dinero o tarjeta para almuerzo y bebidas",
        ],
        pontoEncontro:
          "Te recogemos en tu hotel o airbnb en Tambaú, Cabo Branco, Manaíra o Bessa — João Pessoa, PB. La ubicación exacta se confirma en el voucher tras la reserva.",
        horario:
          "Salida por la mañana. Regreso tras el atardecer (generalmente entre las 18h y 19h, según la época del año).",
      },
    },
  },

  "combo-litoral-norte-areia-vermelha": {
    en: {
      nome: "North Coast Combo with Areia Vermelha",
      preco: "With catamaran: R$ 160 / Without catamaran: R$ 80",
      duracao: "~8h",
      saida: "Morning · Confirmed according to the tide table",
      h1: "North Coast Combo with Areia Vermelha — Catamaran and Jacaré Sunset",
      metaDescription:
        "North coast landmarks + catamaran to Areia Vermelha Island. Natural pools in Cabedelo, Ravel's Bolero at sunset. With catamaran R$ 160. Book on WhatsApp!",
      subtituloHero:
        "Sea Turtle Reserve, Fort, sandbank with natural pools and Jampa's most famous sunset — all in one day.",
      descricao:
        "Historical landmarks of the north coast + catamaran to Areia Vermelha Island with natural pools and sunset.",
      lead:
        "Want the best of João Pessoa's north coast in one day — with history, natural pools and an unforgettable sunset?\n\nThe North Coast Combo with Areia Vermelha puts together the Sea Turtle Reserve, Cabedelo Dike and Fort Santa Catarina in the morning, with a catamaran crossing to Areia Vermelha Island — a sandbank that surfaces at low tide off Camboinha. The afternoon closes with the Jacaré Sunset to Ravel's Bolero.\n\nDeparture time is set by the tide table to ensure Areia Vermelha is exposed. We handle that and confirm with you the day before.",
      descricaoSensorial:
        "The morning follows the north coast's historic route: Sea Turtle Nesting Reserve, Cabedelo Dike (river meeting sea) and Fort Santa Catarina, colonial era.\n\nThen comes the most anticipated part. Catamaran boarding heading to Areia Vermelha Island — a sandbank that only appears at low tide, surrounded by natural pools of crystal-green water. The catamaran has a water slide, onboard bar and grill; the crossing gives you time to relax and take in the north coast from a different angle.\n\nOn the island, you step off, walk the sandbank, swim in the natural pools and photograph the scene that went viral on social media. Marine life nearby, warm water, clear bottom. When the tide starts rising, the catamaran heads back.\n\nLunch is in Cabedelo (not included). Then transfer to Jacaré for sunset with Jurandy do Sax and Ravel's Bolero — the perfect closing of the day.",
      roteiroNarrativo: [
        {
          emoji: "🚐",
          titulo: "Pick-up (transfer) — morning",
          texto:
            "We pick you up at your hotel or airbnb in Tambaú, Cabo Branco, Manaíra or Bessa. Time set by the day's tide table.",
        },
        {
          emoji: "🐢",
          titulo: "Sea Turtle Reserve and historic stops",
          texto:
            "Sea Turtle Nesting Reserve, Cabedelo Dike and Fort Santa Catarina (colonial era). Historical commentary by the guide.",
        },
        {
          emoji: "⛵",
          titulo: "Catamaran boarding to Areia Vermelha",
          texto:
            "Departure from Ponta de Campina. Short crossing with north coast views. Catamaran equipped with water slide, onboard bar and grill.",
        },
        {
          emoji: "🏝️",
          titulo: "Areia Vermelha Island",
          texto:
            "Sandbank that emerges with low tide off Praia de Camboinha. Crystal-green natural pools, swimming and rest. Free time until the tide starts rising.",
        },
        {
          emoji: "🍤",
          titulo: "Lunch in Cabedelo (not included)",
          texto:
            "Seafood restaurants along the north coast. The guide recommends options for your style.",
        },
        {
          emoji: "🎷",
          titulo: "Jacaré Sunset with Ravel's Bolero",
          texto:
            "Arrival at sunset at Praia do Jacaré. Jurandy do Sax plays Ravel's Bolero live as the sun touches the horizon — a daily ritual for over 20 years.",
        },
        {
          emoji: "🚐",
          titulo: "Return after sunset",
          texto:
            "We drop you back at the hotel right after the performance ends.",
        },
      ],
      rotario: [
        "Departure in the morning (per tide table)",
        "Sea Turtle Reserve + Dike + Fort Santa Catarina",
        "Catamaran to Areia Vermelha Island (sandbank + pools)",
        "Lunch in Cabedelo (not included)",
        "Jacaré Sunset with live Ravel's Bolero",
        "Return after sunset",
      ],
      incluso: [
        "Round-trip transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Accredited drivers and guide",
        "Catamaran to Areia Vermelha Island (when booked)",
        "Catamaran amenities: water slide, onboard bar, restrooms, first-aid kit",
        "Historical commentary at landmarks",
        "Support and guidance (Murillo or team)",
      ],
      naoIncluso: [
        "Meals (lunch in Cabedelo at extra cost)",
        "Onboard drinks",
        "Snorkel, mask and underwater photographer (optional)",
        "Jacaré Sunset catamaran (you watch from the shore; boarding is extra)",
      ],
      observacoes:
        "Areia Vermelha Island depends on the tide table (only exposed at low tide). Departure time confirmed the day before. Private rate: on request.",
      alertaMare:
        "Areia Vermelha Island is only exposed at low tide. We check the tide table beforehand and confirm with you the best time to ensure the sandbank is visible.",
      nomeCurto: "North Coast Combo",
      idealPara: [
        "Anyone who wants north coast + natural pools in one day",
        "Couples",
        "Families",
        "Anyone after a full day of history, sea and sunset",
      ],
      imagemAlt: "North Coast Combo with Areia Vermelha — João Pessoa",
      faq: [
        {
          pergunta: "Can I do it without the catamaran to Areia Vermelha?",
          resposta:
            "Yes. Without catamaran: R$ 80 per person (historic route only). With catamaran to Areia Vermelha Island: R$ 160 per person. We recommend the full option — Areia Vermelha is one of João Pessoa's most striking attractions.",
        },
        {
          pergunta: "Do children pay for the catamaran?",
          resposta:
            "5 to 11 years old: R$ 128 (with catamaran) or R$ 64 (without). Under 5 years old: free. From 12 years old: adult rate.",
        },
        {
          pergunta: "What if the tide isn't low on my chosen day?",
          resposta:
            "We check the tide table before confirming your booking. If your preferred day has unfavorable tide for Areia Vermelha, we suggest another date at no cost.",
        },
        {
          pergunta: "Does the Jacaré Sunset include the sunset catamaran?",
          resposta:
            "No. The historic tour reaches Praia do Jacaré and you watch the Jurandy do Sax performance from the shore. The sunset catamaran is a separate experience (R$ 90), optional. Let us know at booking if you want to add it.",
        },
        {
          pergunta: "How long do we stay on Areia Vermelha Island?",
          resposta:
            "Depends on the tide cycle. Usually 1h30 to 2h on the sandbank. Once the tide rises and covers it, we head back to the catamaran.",
        },
        {
          pergunta: "Do I need to know how to swim?",
          resposta:
            "No. The natural pools around the sandbank are shallow and protected. You stand in most of them. Life jackets available on board.",
        },
        {
          pergunta: "What's the cancellation policy?",
          resposta:
            "For unfavorable tide or weather conditions, we reschedule at no cost. For customer cancellations: see the full policy on WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Swimwear (wear it under your clothes)",
          "Towel",
          "Reef-safe biodegradable sunscreen",
          "Comfortable sandals or aqua shoes",
          "Camera or phone (waterproof is a bonus)",
          "Light jacket for sunset on the river",
          "Cash or card for lunch",
        ],
        pontoEncontro:
          "We pick you up at your hotel or airbnb in Tambaú, Cabo Branco, Manaíra or Bessa — João Pessoa, PB. Catamaran boards at Ponta de Campina, Cabedelo. Exact location in the voucher.",
        horario:
          "Departure in the morning (exact time per the day's tide table). Return after sunset.",
      },
    },
    es: {
      nome: "Combo Litoral Norte con Areia Vermelha",
      preco: "Con catamarán: R$ 160 / Sin catamarán: R$ 80",
      duracao: "~8h",
      saida: "Mañana · Confirmado según la tabla de mareas",
      h1: "Combo Litoral Norte con Areia Vermelha — Catamarán y Atardecer del Jacaré",
      metaDescription:
        "Puntos históricos del litoral norte + catamarán hasta la Isla de Areia Vermelha. Piscinas naturales en Cabedelo, Bolero de Ravel al atardecer. Con catamarán R$ 160. Reserva por WhatsApp!",
      subtituloHero:
        "Reserva de Tortugas, Fortaleza, banco de arena con piscinas naturales y el atardecer más famoso de Jampa — todo en el mismo día.",
      descricao:
        "Puntos históricos del litoral norte + catamarán hasta la Isla de Areia Vermelha con piscinas naturales y atardecer.",
      lead:
        "¿Quieres lo mejor del litoral norte de João Pessoa en un solo día — con historia, piscinas naturales y un atardecer inolvidable?\n\nEl Combo Litoral Norte con Areia Vermelha une la Reserva de Tortugas, el Dique de Cabedelo y la Fortaleza de Santa Catarina por la mañana, con una travesía en catamarán hasta la Isla de Areia Vermelha — banco de arena que aparece con la marea baja frente a Camboinha. Por la tarde, cierra con el Atardecer del Jacaré al son del Bolero de Ravel.\n\nEl horario de salida se ajusta a la tabla de mareas para garantizar que la Isla de Areia Vermelha esté expuesta. Nos ocupamos de eso y te confirmamos la víspera.",
      descricaoSensorial:
        "La mañana sigue la ruta histórica del Litoral Norte: Reserva de Desova de Tortugas, Dique de Cabedelo (encuentro del río con el mar) y Fortaleza de Santa Catarina, período colonial.\n\nDespués viene la parte más esperada. Embarque del catamarán rumbo a la Isla de Areia Vermelha — banco de arena que solo aparece con marea baja, rodeado de piscinas naturales de agua verde-cristalina. El catamarán tiene tobogán, bar a bordo y parrilla; durante la travesía da tiempo de relajar y disfrutar el paisaje del litoral norte desde otro ángulo.\n\nEn la isla, bajas, caminas por el banco de arena, te bañas en las piscinas naturales y fotografías el escenario que se hizo famoso en las redes. Vida marina cercana, agua tibia, fondo claro. Cuando la marea empieza a subir, el catamarán retorna.\n\nEl almuerzo es en Cabedelo (no incluido). Después, transfer al Jacaré para el atardecer con Jurandy do Sax y el Bolero de Ravel — cierre perfecto del día.",
      roteiroNarrativo: [
        {
          emoji: "🚐",
          titulo: "Salida (transfer) — por la mañana",
          texto:
            "Te recogemos en tu hotel o airbnb en Tambaú, Cabo Branco, Manaíra o Bessa. Horario ajustado según la tabla de mareas del día.",
        },
        {
          emoji: "🐢",
          titulo: "Reserva de Tortugas y puntos históricos",
          texto:
            "Reserva de Desova de Tortugas Marinas, Dique de Cabedelo y Fortaleza de Santa Catarina (período colonial). Acompañamiento histórico por el guía.",
        },
        {
          emoji: "⛵",
          titulo: "Embarque del catamarán a Areia Vermelha",
          texto:
            "Salida en Ponta de Campina. Travesía corta con vista del litoral norte. Catamarán equipado con tobogán, bar a bordo y parrilla.",
        },
        {
          emoji: "🏝️",
          titulo: "Isla de Areia Vermelha",
          texto:
            "Banco de arena que aparece con marea baja, frente a Praia de Camboinha. Piscinas naturales de agua verde-cristalina, baño y descanso. Tiempo libre hasta que la marea empieza a subir.",
        },
        {
          emoji: "🍤",
          titulo: "Almuerzo en Cabedelo (no incluido)",
          texto:
            "Restaurantes de frutos del mar a lo largo del litoral norte. El guía indica opciones para tu perfil.",
        },
        {
          emoji: "🎷",
          titulo: "Atardecer del Jacaré con Bolero de Ravel",
          texto:
            "Llegada al atardecer en Praia do Jacaré. Jurandy do Sax toca el Bolero de Ravel en vivo cuando el sol toca el horizonte — espectáculo que sucede a diario hace más de 20 años.",
        },
        {
          emoji: "🚐",
          titulo: "Regreso tras el atardecer",
          texto:
            "Te llevamos de vuelta al hotel justo después del final de la presentación.",
        },
      ],
      rotario: [
        "Salida por la mañana (según tabla de mareas)",
        "Reserva de Tortugas + Dique + Fortaleza de Santa Catarina",
        "Catamarán hasta Isla de Areia Vermelha (banco + piscinas)",
        "Almuerzo en Cabedelo (no incluido)",
        "Atardecer del Jacaré con Bolero de Ravel en vivo",
        "Regreso tras el atardecer",
      ],
      incluso: [
        "Transfer ida y vuelta (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Conductores y guía acreditados",
        "Catamarán hasta la Isla de Areia Vermelha (cuando se contrata)",
        "Estructura del catamarán: tobogán, bar a bordo, baños, kit de primeros auxilios",
        "Acompañamiento histórico en los puntos turísticos",
        "Orientación y atención (Murillo o equipo)",
      ],
      naoIncluso: [
        "Comidas (almuerzo en Cabedelo aparte)",
        "Bebidas a bordo",
        "Snorkel, máscara y fotógrafo subacuático (opcionales)",
        "Catamarán del Atardecer del Jacaré (se ve desde la orilla; embarcar es aparte)",
      ],
      observacoes:
        "Isla de Areia Vermelha sujeta a la tabla de mareas (solo aparece con marea baja). Horario de salida confirmado la víspera. Valor privativo: consultar.",
      alertaMare:
        "La Isla de Areia Vermelha solo queda expuesta cuando la marea está baja. Consultamos la tabla de mareas antes y te confirmamos el mejor horario para garantizar que el banco de arena esté visible.",
      nomeCurto: "Combo Litoral Norte",
      idealPara: [
        "Quien quiere litoral norte + piscinas naturales en un día",
        "Parejas",
        "Familias",
        "Quien busca un día completo con historia, mar y atardecer",
      ],
      imagemAlt: "Combo Litoral Norte con Areia Vermelha — João Pessoa",
      faq: [
        {
          pergunta: "¿Puedo hacerlo sin el catamarán a Areia Vermelha?",
          resposta:
            "Sí. Sin catamarán: R$ 80 por persona (solo la ruta histórica). Con catamarán a la Isla de Areia Vermelha: R$ 160 por persona. Recomendamos la opción completa — Areia Vermelha es una de las atracciones más marcantes de João Pessoa.",
        },
        {
          pergunta: "¿Pagan los niños en el catamarán?",
          resposta:
            "De 5 a 11 años: R$ 128 (con catamarán) o R$ 64 (sin). Menores de 5 años: gratis. Desde 12 años: tarifa adulta.",
        },
        {
          pergunta: "¿Y si la marea no está baja el día que quiero?",
          resposta:
            "Consultamos la tabla de mareas antes de confirmar la reserva. Si tu día elegido no tiene marea favorable para Areia Vermelha, sugerimos otra fecha sin costo.",
        },
        {
          pergunta: "¿El Atardecer del Jacaré incluye el catamarán del atardecer?",
          resposta:
            "No. El tour histórico llega a Praia do Jacaré y ves la presentación de Jurandy do Sax desde la orilla. El catamarán del atardecer es una experiencia aparte (R$ 90), opcional. Si lo quieres, avisa al momento de la reserva.",
        },
        {
          pergunta: "¿Cuánto tiempo nos quedamos en la Isla de Areia Vermelha?",
          resposta:
            "Depende del ciclo de la marea. En promedio 1h30 a 2h en el banco de arena. Cuando la marea empieza a subir y lo cubre, retornamos al catamarán.",
        },
        {
          pergunta: "¿Hay que saber nadar?",
          resposta:
            "No. Las piscinas naturales alrededor del banco de arena son poco profundas y protegidas. Estás de pie en la mayoría. Chalecos salvavidas disponibles a bordo.",
        },
        {
          pergunta: "¿Cuál es la política de cancelación?",
          resposta:
            "En caso de marea desfavorable o condiciones climáticas que impidan la salida, reprogramamos sin costo. Cancelaciones por el cliente: consulta la política completa por WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Traje de baño (úsalo debajo de la ropa)",
          "Toalla",
          "Protector solar biodegradable (preserva los corales)",
          "Sandalias cómodas o aqua shoes",
          "Cámara o celular (a prueba de agua es un plus)",
          "Chaqueta ligera para el atardecer en el río",
          "Dinero o tarjeta para almuerzo",
        ],
        pontoEncontro:
          "Te recogemos en tu hotel o airbnb en Tambaú, Cabo Branco, Manaíra o Bessa — João Pessoa, PB. Embarque del catamarán en Ponta de Campina, Cabedelo. Ubicación exacta en el voucher.",
        horario:
          "Salida por la mañana (horario exacto según tabla de mareas del día). Regreso tras el atardecer.",
      },
    },
  },

  "areia-vermelha-catamara": {
    en: {
      nome: "Areia Vermelha — Catamaran Tour",
      preco: "R$ 70",
      duracao: "~3h",
      saida: "According to the tide table",
      h1: "Areia Vermelha in João Pessoa — Catamaran to the Sandbar in Cabedelo",
      metaDescription:
        "Discover Areia Vermelha in Cabedelo, 20 min from João Pessoa. A sandbar with green-crystal natural pools. R$ 70 per person. Active Cadastur. Book on WhatsApp!",
      subtituloHero:
        "In Cabedelo, low tide reveals a sandbar surrounded by emerald-green natural pools. We take you at the right time, on a fully equipped catamaran.",
      descricao:
        "A sandbar that emerges at low tide with crystal-clear natural pools. The most Instagrammable spot in Paraíba.",
      descricaoLonga:
        "Areia Vermelha is a natural phenomenon: a sandbar that appears only at low tide, revealing natural pools with emerald-green water and colorful corals. It's the most photographed and sought-after spot for tourists.",
      lead:
        "Have you seen photos of that sandbar that appears in the middle of the sea with emerald-green pools around it?\n\nIt's Areia Vermelha. Located in Cabedelo, 20 minutes from João Pessoa, and only visible at low tide.\n\nWe depart by catamaran from Restaurante Lovina, in Ponta de Campina, check the tide beforehand and take you to the right spot at the right time. You just disembark, take photos, snorkel — and come back with the best photos of the trip.",
      descricaoSensorial:
        "The catamaran leaves Restaurante Lovina, in Ponta de Campina (Cabedelo), and within minutes is already above the sandbar.\n\nThe tide has gone out. What was once sea is now a clear strip of sand surrounded by natural pools. The water is warm, transparent, with shades from emerald to blue. Colorful corals, swimming fish — you can snorkel, float, or just stand in waist-deep water.\n\nThe catamaran has a water slide, an onboard bar and a barbecue. Bathrooms, sound system, safety equipment. The structure is ready — you just enjoy.\n\nWe stay as long as the tide allows. Around 3h total, including crossing and return.",
      roteiroNarrativo: [
        {
          emoji: "🚢",
          titulo: "Boarding at Ponta de Campina",
          texto:
            "Meeting point at Restaurante Lovina, in Ponta de Campina (Cabedelo). Exact location sent in the voucher after booking. Departure time according to the day's tide table — we confirm with you on WhatsApp the day before.",
        },
        {
          emoji: "🌊",
          titulo: "Crossing to the sandbar",
          texto:
            "Catamaran departure to Areia Vermelha, across from Camboinha Beach. Short crossing — you'll already feel the breeze and see the north coast from a new angle.",
        },
        {
          emoji: "🏝️",
          titulo: "Areia Vermelha emerges at low tide",
          texto:
            "The tide has gone out and the sandbar emerges in the middle of the sea. A clear strip surrounded by emerald-green natural pools, colorful corals and fish. You disembark, snorkel, take photos — or just stand still and let the scenery do the work.",
        },
        {
          emoji: "⚡",
          titulo: "The catamaran is your base",
          texto:
            "The catamaran anchors alongside. Water slide for anyone who wants action. Onboard bar for water and drinks. Barbecue available. Bathrooms, sound system and safety equipment.",
        },
        {
          emoji: "🚢",
          titulo: "Return to Ponta de Campina",
          texto:
            "When the tide starts to rise, the sandbar disappears back into the sea — time to head home. Total: ~3h from boarding.",
        },
      ],
      imagemAlt:
        "Areia Vermelha sandbar with emerald-green natural pools during low tide in Cabedelo, João Pessoa",
      rotario: [
        "Boarding at Restaurante Lovina, Ponta de Campina — Cabedelo",
        "Crossing to Areia Vermelha (tide-dependent)",
        "Swim in the natural pools",
        "Explore the natural scenery",
        "Return (~3h total)",
      ],
      incluso: [
        "Shared catamaran tour",
        "Water slide, onboard bar and barbecue",
        "Bathrooms, sound system with mic, first-aid kit",
        "Safety equipment and structure",
        "Guidance and assistance (Murillo or team)",
      ],
      naoIncluso: [
        "Meals (food and drinks at the onboard bar charged separately)",
        "Transfer to Ponta de Campina (check availability)",
      ],
      observacoes:
        "Tide-dependent (low tide required). Very popular — book in advance. Transfer to Cabedelo: on request.",
      alertaMare:
        "Areia Vermelha only appears at low tide. Before confirming your date, we check the tide table and tell you the best time. You don't have to worry about it — that's our job.",
      nomeCurto: "Areia Vermelha",
      idealPara: ["Instagram photos", "Natural pools", "Light snorkeling", "Families"],
      faq: [
        {
          pergunta: "Does Areia Vermelha only exist at low tide?",
          resposta:
            "Yes. The sandbar only appears at low tide. Before confirming your date, we check the João Pessoa tide table. If the day you want doesn't have favorable tide, we let you know beforehand and suggest another date — at no cost.",
        },
        {
          pergunta: "Where does the boat leave from?",
          resposta:
            "Boarding is at Restaurante Lovina, in Ponta de Campina (Cabedelo) — not from Tambaú. The exact location is sent in the voucher after booking. If you need transfer to the location, ask us on WhatsApp.",
        },
        {
          pergunta: "What exactly is included in the R$ 70?",
          resposta:
            "It covers the shared catamaran tour with water slide, onboard bar, barbecue, bathrooms, sound system, first-aid kit and safety equipment. Food and drinks are paid separately at the onboard bar.",
        },
        {
          pergunta: "How long does the tour last?",
          resposta:
            "Around 3h, including boarding, crossing, time on the sandbar and return. The departure time varies according to the tide table — we confirm with you the day before.",
        },
        {
          pergunta: "Is it safe? Can I go even if I can't swim?",
          resposta:
            "Yes. The natural pools around the sandbar are shallow — you can stand up in most of them. The catamaran has safety equipment and the water slide is supervised. Swimming isn't required.",
        },
        {
          pergunta: "Can children come?",
          resposta:
            "Yes. Under 5 years old: free. 5 to 11 years old: R$ 56. From 12 years old: adult rate. Children must be accompanied by an adult throughout the activity.",
        },
        {
          pergunta: "What's the cancellation policy?",
          resposta:
            "In case of unfavorable weather or tide, we reschedule at no cost. For customer cancellations, check our full policy on WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Swimsuit (come with it on)",
          "Biodegradable sunscreen (good for the corals)",
          "Towel",
          "Cash or card for the onboard bar",
        ],
        pontoEncontro:
          "Restaurante Lovina — Ponta de Campina, Cabedelo, PB. The exact location is sent in the voucher after booking.",
        horario:
          "Varies with the tide table. We confirm with you on WhatsApp the day before.",
      },
    },
    es: {
      nome: "Areia Vermelha — Tour en Catamarán",
      preco: "R$ 70",
      duracao: "~3h",
      saida: "Según la tabla de mareas",
      h1: "Areia Vermelha en João Pessoa — Catamarán hasta el Banco de Arena en Cabedelo",
      metaDescription:
        "Conoce Areia Vermelha en Cabedelo, a 20 min de João Pessoa. Banco de arena con piscinas naturales verde-cristal. R$ 70 por persona. Cadastur activo. Reserva por WhatsApp.",
      subtituloHero:
        "En Cabedelo, la marea baja revela un banco de arena rodeado de piscinas naturales verde-esmeralda. Te llevamos en el horario correcto, en catamarán con estructura completa.",
      descricao:
        "Un banco de arena que aparece con la marea baja con piscinas naturales de agua cristalina. El lugar más instagrameable de Paraíba.",
      descricaoLonga:
        "Areia Vermelha es un fenómeno natural: un banco de arena que aparece solo con marea baja, revelando piscinas naturales con agua verde-esmeralda y corales coloridos. Es el lugar más fotografiado y buscado por los turistas.",
      lead:
        "¿Has visto fotos de ese banco de arena que aparece en medio del mar con piscinas verde-esmeralda alrededor?\n\nEs Areia Vermelha. Queda en Cabedelo, a 20 minutos de João Pessoa, y solo aparece cuando baja la marea.\n\nSalimos en catamarán del Restaurante Lovina, en Ponta de Campina, chequeamos la marea antes y te llevamos al punto correcto en el horario correcto. Solo bajas, fotografías, te zambulles — y vuelves con las mejores fotos del viaje.",
      descricaoSensorial:
        "El catamarán sale del Restaurante Lovina, en Ponta de Campina (Cabedelo), y en pocos minutos ya está sobre el banco de arena.\n\nLa marea bajó. Lo que antes era mar ahora es una franja de arena clara rodeada por piscinas naturales. El agua es tibia, transparente, con tonos que van del verde-cristal al azul. Corales coloridos, peces circulando — puedes hacer esnórquel, flotar o solo quedarte de pie con el agua hasta la cintura.\n\nEn el catamarán hay tobogán de agua, bar a bordo y parrilla. Baños, sonido, equipo de salvataje. La estructura está lista — tú solo disfrutas.\n\nNos quedamos mientras la marea lo permita. Alrededor de 3h en total, contando travesía y retorno.",
      roteiroNarrativo: [
        {
          emoji: "🚢",
          titulo: "Embarque en Ponta de Campina",
          texto:
            "Punto de encuentro en el Restaurante Lovina, en Ponta de Campina (Cabedelo). Ubicación exacta enviada en el voucher tras la reserva. Horario según la tabla de mareas del día — confirmamos contigo por WhatsApp la víspera.",
        },
        {
          emoji: "🌊",
          titulo: "Travesía hasta el banco de arena",
          texto:
            "Salida en catamarán hacia Areia Vermelha, frente a la Playa de Camboinha. Travesía corta — ya sentirás la brisa y verás el litoral norte desde otro ángulo.",
        },
        {
          emoji: "🏝️",
          titulo: "Areia Vermelha aparece con la marea baja",
          texto:
            "La marea bajó y el banco de arena aparece en medio del mar. Franja clara rodeada por piscinas naturales verde-esmeralda, corales coloridos y peces. Bajas, te sumerges, fotografías — o solo te quedas parado dejando que el escenario haga el trabajo.",
        },
        {
          emoji: "⚡",
          titulo: "El catamarán es tu base",
          texto:
            "El catamarán ancla al lado. Tobogán de agua para quien quiera acción. Bar a bordo para agua y bebidas. Parrilla disponible. Baños, sonido y equipo de salvataje.",
        },
        {
          emoji: "🚢",
          titulo: "Retorno a Ponta de Campina",
          texto:
            "Cuando la marea comienza a subir, el banco de arena desaparece de vuelta en el mar — señal de regresar. Total: ~3h desde el embarque.",
        },
      ],
      imagemAlt:
        "Banco de arena de Areia Vermelha con piscinas naturales verde-esmeralda durante marea baja en Cabedelo, João Pessoa",
      rotario: [
        "Embarque en el Restaurante Lovina, Ponta de Campina — Cabedelo",
        "Navegación hasta Areia Vermelha (según marea)",
        "Baño en las piscinas naturales",
        "Exploración del escenario natural",
        "Retorno (~3h total)",
      ],
      incluso: [
        "Tour compartido en catamarán",
        "Tobogán de agua, bar a bordo y parrilla",
        "Baños, sonido con micrófono, kit de primeros auxilios",
        "Equipo de salvataje y estructura de seguridad",
        "Orientación y atención (Murillo o equipo)",
      ],
      naoIncluso: [
        "Comidas (consumo en el bar a bordo aparte)",
        "Transfer hasta Ponta de Campina (consultar disponibilidad)",
      ],
      observacoes:
        "Depende de tabla de mareas (marea baja obligatoria). Lugar muy buscado — reserva con anticipación. Transfer hasta Cabedelo: consultar.",
      alertaMare:
        "Areia Vermelha solo aparece cuando la marea está baja. Antes de confirmar tu fecha, consultamos la tabla de mareas y te avisamos el mejor horario. No tienes que preocuparte — ese es nuestro trabajo.",
      nomeCurto: "Areia Vermelha",
      idealPara: ["Fotos Instagram", "Piscinas naturales", "Esnórquel suave", "Familias"],
      faq: [
        {
          pergunta: "¿Areia Vermelha solo existe en marea baja?",
          resposta:
            "Sí. El banco de arena solo aparece con marea baja. Antes de confirmar tu fecha, consultamos la tabla de mareas de João Pessoa. Si el día que quieres no tiene marea favorable, te avisamos antes y sugerimos otra fecha — sin costo.",
        },
        {
          pergunta: "¿De dónde sale el barco?",
          resposta:
            "El embarque es en el Restaurante Lovina, en Ponta de Campina (Cabedelo) — no sale de Tambaú. La ubicación exacta se envía en el voucher tras la confirmación. Si necesitas transfer hasta el lugar, consúltanos por WhatsApp.",
        },
        {
          pergunta: "¿Qué incluyen exactamente los R$ 70?",
          resposta:
            "Cubre el tour compartido en catamarán con tobogán, bar a bordo, parrilla, baños, sonido, kit de primeros auxilios y equipo de salvataje. Las comidas y bebidas se pagan aparte en el bar a bordo.",
        },
        {
          pergunta: "¿Cuánto dura el tour?",
          resposta:
            "Alrededor de 3h, contando embarque, travesía, tiempo en el banco de arena y retorno. El horario de salida varía según la tabla de mareas — confirmamos contigo la víspera.",
        },
        {
          pergunta: "¿Es seguro? ¿Puedo ir aunque no sepa nadar?",
          resposta:
            "Sí. Las piscinas naturales alrededor del banco de arena son poco profundas — te quedas de pie en buena parte de ellas. El catamarán tiene equipo de salvataje y el tobogán está supervisado. No es necesario saber nadar.",
        },
        {
          pergunta: "¿Pueden ir niños?",
          resposta:
            "Sí. Menores de 5 años: gratis. De 5 a 11 años: R$ 56. Desde 12 años: tarifa adulta. Los niños deben estar acompañados por un adulto durante toda la actividad.",
        },
        {
          pergunta: "¿Cuál es la política de cancelación?",
          resposta:
            "En caso de condiciones climáticas o marea desfavorable, reprogramamos sin costo. Para cancelaciones por parte del cliente, consulta nuestra política completa por WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Traje de baño (ven con él puesto)",
          "Protector solar biodegradable (bueno para los corales)",
          "Toalla",
          "Efectivo o tarjeta para el bar a bordo",
        ],
        pontoEncontro:
          "Restaurante Lovina — Ponta de Campina, Cabedelo, PB. La ubicación exacta se envía en el voucher tras la reserva.",
        horario:
          "Varía según la tabla de mareas. Confirmamos contigo por WhatsApp la víspera.",
      },
    },
  },

  "por-do-sol-jacare": {
    en: {
      nome: "Sunset at Jacaré — Catamaran",
      preco: "R$ 90",
      duracao: "~1h30",
      saida: "Afternoon · Time varies with the season",
      h1: "Sunset at Jacaré in João Pessoa — Catamaran with Live Ravel's Bolero",
      metaDescription:
        "Sailing on the Paraíba River by catamaran with live Ravel's Bolero. Jurandy do Sax's show for over 20 years. R$ 90 per person. Book on WhatsApp!",
      subtituloHero:
        "1h30 of sailing on the Paraíba River at sunset, with forró pé de serra, violin and Ravel's Bolero played live when the sun touches the horizon.",
      descricao:
        "Sailing on the Paraíba River with a live performance of Ravel's Bolero. A unique experience that's existed for over 20 years.",
      descricaoLonga:
        "Sunset at Jacaré is a must-stop in João Pessoa. Sailing on the Paraíba River with live music (Bolero de Ravel on sax), forró dancing, violin. A one-of-a-kind experience.",
      lead:
        "Want to live one of the most memorable experiences in northeastern Brazil?\n\nSunset at Jacaré isn't a regular catamaran tour. It's a ritual that's been happening for over 20 years: every evening, a catamaran sails the Paraíba River while Jurandy do Sax plays Ravel's Bolero live, on his own canoe. When the sun touches the horizon, he raises the solo — and nobody forgets the moment.\n\nBoarding is at Praia do Jacaré, in Cabedelo. 1h30 of sailing with music, forró dancing and history. No matter how many times you see it, it's always cinematic.",
      descricaoSensorial:
        "You arrive at Praia do Jacaré a bit before the scheduled time and see the catamaran anchored at the riverbank. There's a crowd, but the mood is light. Once you board, you pick a seat — the best is facing west, the sunset side.\n\nSailing starts smooth. The guide tells the history of the Paraíba River, the mangroves and the city's relationship with the river. Belle Soares shows up with her violin, then a couple of cangaceiros leads the group in a forró pé de serra dance. The catamaran laughs with us.\n\nThe sun keeps dropping. When it gets close to the horizon, everyone goes quiet. Jurandy appears in a small canoe next to the catamaran. The saxophone starts Ravel's Bolero. The music grows along with the orange light. When the sun touches the horizon line, he raises the solo to the limit. That's the famous moment — and it repeats, beautifully, every day.",
      roteiroNarrativo: [
        {
          emoji: "🚢",
          titulo: "Boarding at Praia do Jacaré, Cabedelo",
          texto:
            "Arrive 30 minutes before the scheduled time to pick a good seat. Boarding at Praia do Jacaré (Cabedelo). Exact location in the voucher.",
        },
        {
          emoji: "🌊",
          titulo: "Sailing on the Paraíba River",
          texto:
            "The catamaran casts off and starts cruising the river. The guide shares the history of the region, the mangroves and Praia do Jacaré.",
        },
        {
          emoji: "🎻",
          titulo: "Belle Soares violin performance",
          texto:
            "Belle Soares performs onboard with violin. Intimate atmosphere, repertoire that sets the mood for the sunset.",
        },
        {
          emoji: "💃",
          titulo: "Forró pé de serra with cangaceiros",
          texto:
            "A couple of cangaceiros leads passengers in a forró pé de serra dance. Northeastern music, fun, memorable photos.",
        },
        {
          emoji: "🎷",
          titulo: "Live Ravel's Bolero at sunset",
          texto:
            "When the sun touches the horizon, Jurandy do Sax shows up in his canoe next to the catamaran and plays Ravel's Bolero live. The peak of the tour.",
        },
        {
          emoji: "🚢",
          titulo: "Return at dusk",
          texto:
            "After the performance, the catamaran heads back to the dock. Total: ~1h30.",
        },
      ],
      rotario: [
        "Boarding at Praia do Jacaré (Cabedelo)",
        "Sailing the Paraíba River with regional history",
        "Belle Soares violin performance",
        "Forró pé de serra with cangaceiros",
        "Live Ravel's Bolero by Jurandy do Sax at sunset",
        "Return ~1h30 total",
      ],
      incluso: [
        "Shared catamaran tour (~1h30)",
        "Live musical performances (Ravel's Bolero on sax, violin, forró)",
        "Historical info about the Paraíba River",
        "Onboard bar, restroom, sound system with mic",
        "First-aid kit and safety gear",
        "Support and guidance (Murillo or team)",
      ],
      naoIncluso: [
        "Meals (onboard purchases extra)",
        "Drinks at the catamaran bar",
        "Transfer to Praia do Jacaré (check availability)",
      ],
      observacoes:
        "Daily afternoon departure. Time varies by season (sunset) — confirmed on WhatsApp. In extreme weather, the tour may be rescheduled. Transfer to Jacaré: on request.",
      nomeCurto: "Jacaré Sunset",
      idealPara: ["Romance", "Sunset", "Live music", "Couples", "Unique cultural experience in Jampa"],
      imagemAlt: "Sunset at Jacaré with live Ravel's Bolero in João Pessoa",
      faq: [
        {
          pergunta: "Does Ravel's Bolero always play?",
          resposta:
            "Yes. Jurandy do Sax plays every day at sunset, except in extreme weather. It's been the ritual for over 20 years and is the highlight of the tour.",
        },
        {
          pergunta: "What time does the catamaran depart?",
          resposta:
            "Time varies with the season's sunset — usually between 4:30pm and 5:30pm. We confirm the exact time on WhatsApp the day before or at booking.",
        },
        {
          pergunta: "Can children come?",
          resposta:
            "Yes. Under 5 years old: free. 5 to 11 years old: R$ 72. From 12 years old: adult rate. Children must be accompanied by an adult.",
        },
        {
          pergunta: "Can I watch from the shore instead of paying for the catamaran?",
          resposta:
            "Yes, you can hear the Bolero from the shore at Praia do Jacaré. But the catamaran offers the river sailing, the 360° sunset view and the show up close — the full experience is worth it.",
        },
        {
          pergunta: "What time should I arrive?",
          resposta:
            "We recommend arriving 30 minutes before boarding to pick a good seat on the catamaran (west side for the sunset).",
        },
        {
          pergunta: "What's included in R$ 90?",
          resposta:
            "Shared catamaran tour (~1h30), live musical performances (Bolero, violin, forró), onboard bar (purchases extra), restroom, sound system and safety gear. Meals and drinks are paid at the bar.",
        },
        {
          pergunta: "What's the cancellation policy?",
          resposta:
            "In case of heavy rain or weather conditions that prevent departure, we reschedule at no cost. For customer cancellations, check the full policy on WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Light clothing (warm in the afternoon, lightly cooler after sunset)",
          "Light jacket or long sleeves for dusk",
          "Camera or phone (worth the photo)",
          "Cash or card for bar purchases",
          "Repellent (river has mosquitoes at dusk)",
        ],
        pontoEncontro:
          "Praia do Jacaré, Cabedelo, PB. Exact location sent in the voucher after booking.",
        horario:
          "Varies with the season (sunset). Confirmed on WhatsApp.",
      },
    },
    es: {
      nome: "Atardecer del Jacaré — Catamarán",
      preco: "R$ 90",
      duracao: "~1h30",
      saida: "Tarde · Horario varía según la estación",
      h1: "Atardecer del Jacaré en João Pessoa — Catamarán con Bolero de Ravel en Vivo",
      metaDescription:
        "Navegación por el Río Paraíba en catamarán con Bolero de Ravel en vivo. Espectáculo de Jurandy do Sax hace más de 20 años. R$ 90 por persona. Reserva por WhatsApp!",
      subtituloHero:
        "1h30 de navegación por el Río Paraíba al atardecer, con forró pé de serra, violín y el Bolero de Ravel tocado en vivo cuando el sol toca el horizonte.",
      descricao:
        "Navegación por el Río Paraíba con presentación en vivo del Bolero de Ravel. Experiencia única que existe hace más de 20 años.",
      descricaoLonga:
        "El atardecer del Jacaré es una parada obligatoria en João Pessoa. Navegación por el Río Paraíba al son de música en vivo (Bolero de Ravel al sax), baile de forró, violín. Una experiencia única en el mundo.",
      lead:
        "¿Quieres vivir una de las experiencias más marcantes del nordeste brasileño?\n\nEl Atardecer del Jacaré no es un tour común en catamarán. Es un ritual que sucede hace más de 20 años: cada atardecer, un catamarán navega por el Río Paraíba mientras Jurandy do Sax toca el Bolero de Ravel en vivo, a bordo de su canoa. Cuando el sol toca el horizonte, eleva el solo — y nadie olvida el momento.\n\nEl embarque es en la Praia do Jacaré, en Cabedelo. 1h30 de navegación con música, baile de forró e historia. No importa cuántas veces lo veas, siempre es cinematográfico.",
      descricaoSensorial:
        "Llegas a la Praia do Jacaré un poco antes del horario y ya ves el catamarán anclado en la orilla del río. El movimiento es grande, pero el clima es liviano. Al embarcar, eliges lugar — el mejor es mirando al oeste, lado del atardecer.\n\nLa navegación empieza tranquila. El guía cuenta la historia del Río Paraíba, los manglares y la relación de la ciudad con el río. Belle Soares aparece con su violín, después una pareja de cangaceiros lleva al grupo a un baile de forró pé de serra. El catamarán se ríe con nosotros.\n\nEl sol baja. Cuando se acerca al horizonte, todos se callan. Jurandy aparece en una canoa pequeña al lado del catamarán. El saxofón empieza el Bolero de Ravel. La música crece junto con la luz anaranjada. Cuando el sol toca la línea del horizonte, eleva el solo al límite. Es el momento famoso — y se repite, hermoso, todos los días.",
      roteiroNarrativo: [
        {
          emoji: "🚢",
          titulo: "Embarque en la Praia do Jacaré, Cabedelo",
          texto:
            "Llega 30 minutos antes del horario para elegir un buen lugar. El embarque es en la Praia do Jacaré (Cabedelo). Ubicación exacta en el voucher.",
        },
        {
          emoji: "🌊",
          titulo: "Navegación por el Río Paraíba",
          texto:
            "El catamarán suelta amarras y empieza a navegar el río. El guía cuenta la historia de la región, los manglares y la Praia do Jacaré.",
        },
        {
          emoji: "🎻",
          titulo: "Presentación de Belle Soares al violín",
          texto:
            "Belle Soares se presenta a bordo, con violín. Ambiente íntimo, repertorio que prepara el clima del atardecer.",
        },
        {
          emoji: "💃",
          titulo: "Forró pé de serra con pareja de cangaceiros",
          texto:
            "Una pareja de cangaceiros lleva a los pasajeros al baile de forró pé de serra. Música nordestina, juego, fotos memorables.",
        },
        {
          emoji: "🎷",
          titulo: "Bolero de Ravel en vivo al atardecer",
          texto:
            "Cuando el sol empieza a tocar el horizonte, Jurandy do Sax aparece en su canoa al lado del catamarán y toca el Bolero de Ravel en vivo. El gran momento del tour.",
        },
        {
          emoji: "🚢",
          titulo: "Retorno al atardecer",
          texto:
            "Tras el final de la presentación, el catamarán regresa al puerto. Total: ~1h30.",
        },
      ],
      rotario: [
        "Embarque en la Praia do Jacaré (Cabedelo)",
        "Navegación por el Río Paraíba con historia de la región",
        "Presentación de Belle Soares al violín",
        "Forró pé de serra con pareja de cangaceiros",
        "Bolero de Ravel en vivo por Jurandy do Sax al atardecer",
        "Retorno ~1h30 total",
      ],
      incluso: [
        "Tour compartido en catamarán (~1h30)",
        "Presentaciones musicales en vivo (Bolero de Ravel al sax, violín, forró)",
        "Información histórica del Río Paraíba",
        "Bar a bordo, baño, sonido con micrófono",
        "Kit de primeros auxilios y equipo de salvamento",
        "Orientación y atención (Murillo o equipo)",
      ],
      naoIncluso: [
        "Comidas (consumo a bordo aparte)",
        "Bebidas en el bar del catamarán",
        "Transfer hasta la Praia do Jacaré (consulta disponibilidad)",
      ],
      observacoes:
        "Salida diaria por la tarde. El horario varía según la época del año (atardecer) — confirmamos por WhatsApp. En condiciones climáticas extremas, el tour puede reprogramarse. Transfer hasta Jacaré: consultar.",
      nomeCurto: "Atardecer Jacaré",
      idealPara: ["Romance", "Atardecer", "Música en vivo", "Parejas", "Experiencia cultural única en Jampa"],
      imagemAlt: "Atardecer del Jacaré con Bolero de Ravel en vivo en João Pessoa",
      faq: [
        {
          pergunta: "¿Siempre suena el Bolero de Ravel?",
          resposta:
            "Sí. Jurandy do Sax toca todos los días al atardecer, excepto en condiciones climáticas extremas. Es el ritual hace más de 20 años y el punto alto del tour.",
        },
        {
          pergunta: "¿A qué hora sale el catamarán?",
          resposta:
            "El horario varía según el atardecer de la época del año — generalmente entre las 16h30 y 17h30. Confirmamos contigo el horario exacto por WhatsApp la víspera o al momento de la reserva.",
        },
        {
          pergunta: "¿Pueden ir niños?",
          resposta:
            "Sí. Menores de 5 años: gratis. De 5 a 11 años: R$ 72. Desde 12 años: tarifa adulta. Los niños deben estar acompañados por un adulto.",
        },
        {
          pergunta: "¿Puedo ver desde la orilla en vez de pagar el catamarán?",
          resposta:
            "Sí, se escucha el Bolero desde la orilla de la Praia do Jacaré. Pero el catamarán ofrece la navegación en el río, la vista 360° del atardecer y el show de cerca — vale la experiencia completa.",
        },
        {
          pergunta: "¿A qué hora debo llegar?",
          resposta:
            "Recomendamos llegar 30 minutos antes del embarque para elegir un buen lugar en el catamarán (lado oeste para el atardecer).",
        },
        {
          pergunta: "¿Qué incluye R$ 90?",
          resposta:
            "Tour compartido en catamarán (~1h30), presentaciones musicales en vivo (Bolero, violín, forró), bar a bordo (consumo aparte), baño, sonido y equipo de seguridad. Comidas y bebidas se pagan en el bar.",
        },
        {
          pergunta: "¿Cuál es la política de cancelación?",
          resposta:
            "En caso de lluvia intensa o condiciones climáticas que impidan la salida, reprogramamos sin costo. Para cancelaciones del cliente, consulta la política completa por WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Ropa ligera (calor por la tarde, ligeramente fresco tras el atardecer)",
          "Chaqueta ligera o camisa de manga para el atardecer",
          "Cámara o celular (vale la foto)",
          "Dinero o tarjeta para consumo en el bar",
          "Repelente (el río tiene mosquitos al final de la tarde)",
        ],
        pontoEncontro:
          "Praia do Jacaré, Cabedelo, PB. La ubicación exacta se envía en el voucher tras la reserva.",
        horario:
          "Varía según la época del año (atardecer). Confirmamos contigo por WhatsApp.",
      },
    },
  },

  "lancha-privativa": {
    en: {
      nome: "Speedboat Tour — Private Itinerary",
      preco: "From R$ 1,590 (rate varies by boat model — on request)",
      duracao: "~10h (8:30am–6pm)",
      saida: "From 8:30am — Jacaré River Marina",
      descricao:
        "A full day on a private speedboat with exclusive stops, barbecue prepared by the boatman and a sunset return.",
      incluso: [
        "Fuel",
        "Licensed boatman",
        "Onboard barbecue preparation",
      ],
      naoIncluso: ["Drinks and barbecue meats"],
      observacoes:
        "100% private — we don't group strangers together. Capacity: on request. Children over 5 count toward group size.",
      idealPara: ["Groups", "Couples", "Families wanting a premium experience"],
      imagemAlt: "Private speedboat on João Pessoa's north coast at sunset",
      faq: [
        {
          pergunta: "Is the tour really 100% private?",
          resposta:
            "Yes. No strangers. The boat is exclusive to your group.",
        },
        {
          pergunta: "What's the exact rate?",
          resposta:
            "From R$ 1,590 — varies with boat model and group size. Check on WhatsApp.",
        },
      ],
    },
    es: {
      nome: "Tour en Lancha — Itinerario Privativo",
      preco: "Desde R$ 1.590 (valor varía por modelo de lancha — consultar)",
      duracao: "~10h (8h30–18h)",
      saida: "Desde las 8h30 — Marina del Río Jacaré",
      descricao:
        "Día completo en lancha privativa con paradas exclusivas, parrilla preparada por el marinero y retorno al atardecer.",
      incluso: [
        "Combustible",
        "Marinero habilitado",
        "Preparación de parrilla a bordo",
      ],
      naoIncluso: ["Bebidas y carnes de la parrilla"],
      observacoes:
        "100% privativo — no juntamos grupos con desconocidos. Capacidad: consultar. Los niños mayores de 5 años cuentan en la composición del grupo.",
      idealPara: ["Grupos", "Parejas", "Familias que quieren experiencia premium"],
      imagemAlt: "Lancha privativa en el litoral norte de João Pessoa al atardecer",
      faq: [
        {
          pergunta: "¿El tour es realmente 100% privativo?",
          resposta:
            "Sí. Sin extraños. La lancha es exclusiva para tu grupo.",
        },
        {
          pergunta: "¿Cuál es el valor exacto?",
          resposta:
            "Desde R$ 1.590 — varía según modelo de lancha y tamaño del grupo. Consulta por WhatsApp.",
        },
      ],
    },
  },

  // =========================================================================
  // PISCINAS NATURAIS
  // =========================================================================

  "seixas": {
    en: {
      nome: "Seixas Natural Pools",
      preco: "R$ 60",
      duracao: "~3h30",
      saida: "According to the tide table",
      h1: "Seixas Natural Pools, João Pessoa — Snorkeling in Crystal-Clear Water",
      metaDescription:
        "Discover the Seixas natural pools in João Pessoa. Low tide, corals and crystal-clear water. R$ 60 per person. Active Cadastur. Book on WhatsApp!",
      subtituloHero:
        "At the easternmost point of the Americas, low tide reveals coral natural pools so clear they look like an aquarium. With us, you just enjoy.",
      descricao:
        "At the easternmost point of the Americas. Coral natural pools with crystal-clear, warm water. Perfect for snorkeling and diving.",
      lead:
        "Got to João Pessoa and want to see real natural pools — not just photos?\n\nSeixas is at the easternmost point of the Americas. When the tide drops, corals form natural pools of warm, crystal-clear water. You float, see colorful fish passing by, and feel like you're in an aquarium — only it's the real thing.\n\nWe leave from Tambaú by catamaran, check the tide beforehand, and take care of everything. You just enjoy.",
      descricaoSensorial:
        "You board in Tambaú and in about 15 minutes by catamaran you're already over the pools.\n\nThe water is warm — even in winter — and so clear that you easily see the bottom. Colorful fish swim near you, unhurried, as if they didn't mind you being there.\n\nYou can float face-down just looking at the coral floor. You can dive (snorkel and mask available as add-ons). You can swim, take photos or just stay still letting the tide rock you.\n\nThe catamaran has a water slide, kayak and trampoline for anyone who wants action. Onboard bar when you're thirsty. We stay as long as the tide allows — around 3h30 total, including boarding and return.",
      roteiroNarrativo: [
        {
          emoji: "🚢",
          titulo: "Boarding at Tambaú",
          texto:
            "Meeting point at Praia de Tambaú, near Hotel Tambaú. The exact location is sent in the voucher after booking. Departure time according to the day's tide table — we confirm with you on WhatsApp the day before.",
        },
        {
          emoji: "🌊",
          titulo: "Catamaran crossing",
          texto:
            "About 15 minutes by boat. You'll see the João Pessoa coast from a different angle — and the coastline that, from afar, looks like a straight line, up close becomes cliff, coral and history.",
        },
        {
          emoji: "🐠",
          titulo: "In the Seixas natural pools",
          texto:
            "The tide has gone out. The pools are open. You step into the water and the coral is right there — alive, colorful, full of marine life. Stay as long as you want, explore, take photos.",
        },
        {
          emoji: "⚡",
          titulo: "The catamaran is your base",
          texto:
            "While you're in the pools, the catamaran stays anchored. Water slide, trampoline and kayak available. Onboard bar for water and drinks. Onboard restroom.",
        },
        {
          emoji: "🚢",
          titulo: "Return to Tambaú",
          texto:
            "When the tide starts to rise and the pools become too deep, we head back. Total: ~3h30 from boarding.",
        },
      ],
      incluso: [
        "Shared catamaran tour",
        "Water slide, kayak and trampoline (free use on the catamaran)",
        "Onboard bar and galley",
        "Onboard restroom",
        "Sound system with mic",
        "Guidance and assistance (Murillo or team)",
      ],
      naoIncluso: [
        "Meals (bring a snack and water or buy onboard)",
        "Snorkel and mask (optional — check on WhatsApp)",
        "Underwater photographer (optional — check on WhatsApp)",
        "Cylinder diving (optional — check on WhatsApp)",
        "Transfer to Tambaú (check availability)",
      ],
      observacoes:
        "Tide-dependent (low tide required). Confirm availability before booking.",
      alertaMare:
        "Natural pools only appear at low tide. Before confirming your date, we check the tide table and tell you the best time. You don't have to worry about it. That's our job.",
      nomeCurto: "Seixas",
      idealPara: ["Diving", "Snorkeling", "Photos", "Sea adventure"],
      galleryImages: [
        { src: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg", alt: "Aerial view of Seixas natural pools, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/seixas/galeria-01.jpg", alt: "Tourists in the Seixas natural pools seen from a drone, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/seixas/galeria-02.jpg", alt: "Seixas natural pools with crystal-clear water, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/seixas/galeria-03.jpg", alt: "Reefs and natural pools of Seixas Beach, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/seixas/galeria-04.jpg", alt: "Aerial view of Seixas Beach with reefs, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/seixas/galeria-05.jpg", alt: "Seixas natural pools during low tide, João Pessoa" },
      ],
      imagemAlt:
        "Seixas natural pools with coral and crystal-clear water during low tide in João Pessoa",
      faq: [
        {
          pergunta: "I've never snorkeled before. Can I take this tour?",
          resposta:
            "Yes. The Seixas natural pools are shallow — you can stand in most of them. You don't need to know how to swim or dive. If you want to use snorkel and mask, we'll guide you on the spot. It's easier than it sounds.",
        },
        {
          pergunta: "Does the tour really depend on low tide? What if the tide isn't good?",
          resposta:
            "Yes — and that's exactly what makes the tour special. Natural pools only appear at low tide. Before confirming your date, we check the João Pessoa tide table. If the day you want doesn't have favorable tide, we let you know beforehand and suggest another date — at no cost.",
        },
        {
          pergunta: "What exactly is included in the R$ 60?",
          resposta:
            "It covers the shared catamaran tour, with use of the water slide, kayak, trampoline, bar and onboard restroom. Snorkel, mask, underwater photographer and cylinder diving are optional, paid separately. Meals are not included.",
        },
        {
          pergunta: "Where do we leave from? And how do I get there?",
          resposta:
            "Boarding is at Praia de Tambaú, near Hotel Tambaú, in João Pessoa. The exact location is sent in the voucher after booking. If you need a hotel-to-Tambaú transfer, ask us on WhatsApp — we check availability.",
        },
        {
          pergunta: "How long does the tour last in total?",
          resposta:
            "Around 3h30, including boarding, the crossing, time in the pools and return. The departure time varies with the tide table — we confirm with you the day before.",
        },
        {
          pergunta: "Can I bring children?",
          resposta:
            "Yes! There's no minimum age for the tour. Children must be accompanied by an adult throughout the activity.",
        },
        {
          pergunta: "What's the cancellation policy?",
          resposta:
            "In case of unfavorable weather or tide, we reschedule at no cost. For customer cancellations, check our full policy on WhatsApp.",
        },
        {
          pergunta: "Is it worth renting snorkel and mask?",
          resposta:
            "Yes, especially if you've never tried it. The coral floor at Seixas is rich in marine life and looks even better with a mask. Available onboard at extra cost — ask on WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Swimsuit (come with it on)",
          "Biodegradable sunscreen (good for the corals)",
          "Towel",
          "Water or buy onboard",
        ],
        pontoEncontro:
          "Praia de Tambaú, near Hotel Tambaú — João Pessoa, PB. The exact location is sent in the voucher after booking.",
        horario:
          "Varies with the tide table. We confirm with you on WhatsApp the day before.",
      },
    },
    es: {
      nome: "Piscinas Naturales de Seixas",
      preco: "R$ 60",
      duracao: "~3h30",
      saida: "Según la tabla de mareas",
      h1: "Piscinas Naturales de Seixas, João Pessoa — Esnórquel en Agua Cristalina",
      metaDescription:
        "Conoce las piscinas naturales de Seixas en João Pessoa. Marea baja, corales y agua cristalina. R$ 60 por persona. Cadastur activo. Reserva por WhatsApp.",
      subtituloHero:
        "En el punto más oriental de las Américas, la marea baja revela piscinas naturales de coral con agua tan clara que parece un acuario. Con nosotros, tú solo disfrutas.",
      descricao:
        "En el punto más oriental de las Américas. Piscinas naturales de corales con aguas cristalinas y tibias. Perfecto para esnórquel y buceo.",
      lead:
        "¿Llegaste a João Pessoa y quieres ver las piscinas naturales de verdad — no solo en foto?\n\nSeixas queda en el punto más al este de las Américas. Cuando baja la marea, los corales forman piscinas naturales de agua tibia y cristalina. Flotas, ves peces coloridos pasar al lado, y sientes que estás en un acuario — pero es la naturaleza misma.\n\nSalimos de Tambaú en catamarán, chequeamos la marea antes y nos encargamos de todo. Tú solo disfrutas.",
      descricaoSensorial:
        "Embarcas en Tambaú y en unos 15 minutos de catamarán ya estás sobre las piscinas.\n\nEl agua es tibia — incluso en invierno — y tan limpia que ves el fondo con facilidad. Peces coloridos nadan cerca, sin prisa, como si no les importara que estés ahí.\n\nPuedes flotar boca abajo solo mirando el fondo de coral. Puedes hacer esnórquel (snorkel y máscara opcionales). Puedes nadar, fotografiar o solo quedarte quieto dejando que la marea te acune.\n\nEn el catamarán hay tobogán de agua, kayak y trampolín para quien quiera acción. Bar a bordo para cuando dé sed. Nos quedamos mientras la marea lo permita — alrededor de 3h30 en total, contando embarque y retorno.",
      roteiroNarrativo: [
        {
          emoji: "🚢",
          titulo: "Embarque en Tambaú",
          texto:
            "Punto de encuentro en la Praia de Tambaú, cerca del Hotel Tambaú. La ubicación exacta se envía en el voucher tras la reserva. Horario según la tabla de mareas del día — confirmamos contigo por WhatsApp la víspera.",
        },
        {
          emoji: "🌊",
          titulo: "Travesía en catamarán",
          texto:
            "Cerca de 15 minutos en barco. Ya verás el mar de João Pessoa desde otro ángulo — y el litoral que, desde lejos, parece una línea recta, de cerca se vuelve acantilado, coral e historia.",
        },
        {
          emoji: "🐠",
          titulo: "En las piscinas naturales de Seixas",
          texto:
            "La marea bajó. Las piscinas están abiertas. Entras al agua y el coral está allí — vivo, colorido, lleno de vida marina. Quédate el tiempo que quieras, explora, fotografía.",
        },
        {
          emoji: "⚡",
          titulo: "El catamarán es tu base",
          texto:
            "Mientras estés en las piscinas, el catamarán queda anclado. Tobogán, trampolín y kayak disponibles. Bar a bordo para agua y bebidas. Baño a bordo.",
        },
        {
          emoji: "🚢",
          titulo: "Retorno a Tambaú",
          texto:
            "Cuando la marea comienza a subir y las piscinas se vuelven demasiado profundas, regresamos. Total: ~3h30 desde el embarque.",
        },
      ],
      incluso: [
        "Tour compartido en catamarán",
        "Tobogán, kayak y trampolín (uso libre en el catamarán)",
        "Bar y cocina a bordo",
        "Baño a bordo",
        "Sonido con micrófono",
        "Orientación y atención (Murillo o equipo)",
      ],
      naoIncluso: [
        "Comidas (lleva snack y agua o compra a bordo)",
        "Snorkel y máscara (opcional — consultar por WhatsApp)",
        "Fotógrafo submarino (opcional — consultar por WhatsApp)",
        "Buceo con cilindro (opcional — consultar por WhatsApp)",
        "Transfer hasta Tambaú (consultar disponibilidad)",
      ],
      observacoes:
        "Depende de tabla de mareas (marea baja obligatoria). Confirmar disponibilidad antes de reservar.",
      alertaMare:
        "Las piscinas naturales solo aparecen cuando la marea está baja. Antes de confirmar tu fecha, consultamos la tabla de mareas y te avisamos el mejor horario. No te preocupes por eso. Ese es nuestro trabajo.",
      nomeCurto: "Seixas",
      idealPara: ["Buceo", "Esnórquel", "Fotos", "Aventura marina"],
      galleryImages: [
        { src: "/images/passeios/piscinas-naturais/seixas/hero-01.jpg", alt: "Vista aérea de las piscinas naturales de Seixas, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/seixas/galeria-01.jpg", alt: "Turistas en las piscinas naturales de Seixas vistas desde drone, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/seixas/galeria-02.jpg", alt: "Piscinas naturales de Seixas con agua cristalina, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/seixas/galeria-03.jpg", alt: "Arrecifes y piscinas naturales de la Playa de Seixas, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/seixas/galeria-04.jpg", alt: "Vista aérea de la Playa de Seixas con arrecifes, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/seixas/galeria-05.jpg", alt: "Piscinas naturales de Seixas durante marea baja, João Pessoa" },
      ],
      imagemAlt:
        "Piscinas naturales de Seixas con coral y agua cristalina durante marea baja en João Pessoa",
      faq: [
        {
          pergunta: "Nunca hice esnórquel. ¿Puedo hacer este tour?",
          resposta:
            "Sí. Las piscinas naturales de Seixas son poco profundas — te quedas de pie en buena parte de ellas. No es necesario saber nadar ni bucear. Si quieres usar snorkel y máscara, te orientamos en el momento. Es más fácil de lo que parece.",
        },
        {
          pergunta: "¿El tour realmente depende de marea baja? ¿Y si la marea no está buena?",
          resposta:
            "Sí — y es justamente eso lo que hace el tour especial. Las piscinas naturales solo aparecen con marea baja. Antes de confirmar tu fecha, consultamos la tabla de mareas de João Pessoa. Si el día que quieres no tiene marea favorable, te avisamos antes y sugerimos otra fecha — sin costo.",
        },
        {
          pergunta: "¿Qué incluyen exactamente los R$ 60?",
          resposta:
            "Cubre el tour compartido en catamarán, con uso de tobogán, kayak, trampolín, bar y baño a bordo. Snorkel, máscara, fotógrafo submarino y buceo con cilindro son opcionales pagados aparte. Las comidas no están incluidas.",
        },
        {
          pergunta: "¿De dónde salimos? ¿Cómo llego?",
          resposta:
            "El embarque es en la Praia de Tambaú, cerca del Hotel Tambaú, en João Pessoa. La ubicación exacta se envía en el voucher tras la reserva. Si necesitas transfer del hotel hasta Tambaú, consúltanos por WhatsApp — verificamos disponibilidad.",
        },
        {
          pergunta: "¿Cuánto dura el tour en total?",
          resposta:
            "Alrededor de 3h30, contando embarque, travesía de ida, tiempo en las piscinas y retorno. El horario de salida varía según la tabla de mareas — confirmamos contigo la víspera.",
        },
        {
          pergunta: "¿Puedo llevar niños?",
          resposta:
            "¡Sí! No hay edad mínima para el tour. Los niños deben estar acompañados por un adulto durante toda la actividad.",
        },
        {
          pergunta: "¿Cuál es la política de cancelación?",
          resposta:
            "En caso de condiciones climáticas o marea desfavorable, reprogramamos sin costo. Para cancelaciones del cliente, consulta nuestra política completa por WhatsApp.",
        },
        {
          pergunta: "¿Vale la pena alquilar snorkel y máscara?",
          resposta:
            "Sí, sobre todo si nunca lo hiciste. El fondo de coral en Seixas es rico en vida marina y se ve aún mejor con la máscara. Disponibles a bordo por valor aparte — consulta por WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Traje de baño (ven con él puesto)",
          "Protector solar biodegradable (bueno para los corales)",
          "Toalla",
          "Agua o compra a bordo",
        ],
        pontoEncontro:
          "Praia de Tambaú, cerca del Hotel Tambaú — João Pessoa, PB. La ubicación exacta se envía en el voucher tras la reserva.",
        horario:
          "Varía según la tabla de mareas. Confirmamos contigo por WhatsApp la víspera.",
      },
    },
  },

  "penha": {
    en: {
      nome: "Penha Natural Pools",
      preco: "R$ 60",
      duracao: "~3h",
      saida: "According to the tide table",
      h1: "Penha Natural Pools in João Pessoa — Exclusive and Peaceful Version",
      metaDescription:
        "The most exclusive natural pools in João Pessoa, at Penha Beach. Only 2 boats at a time. Warm waters, reefs and tranquility. R$ 60. Book on WhatsApp!",
      subtituloHero:
        "Only two boats at a time. No crowds. Preserved reefs off Penha Beach — Jampa's sea in calm mode.",
      descricao:
        "The most exclusive pools in João Pessoa — only 2 boats at a time guarantee tranquility and genuine contact with nature.",
      lead:
        "Want to dive into João Pessoa's natural pools without sharing the reef with dozens of boats?\n\nPenha works differently. Only 2 boats are allowed at the reef at a time, keeping the environment preserved and the experience intimate. The waters are the same — warm, clear, with fish around — but the pace is different.\n\nWe leave from Penha Beach (south of João Pessoa) and in 10–15 minutes we're at the pools. Departure set by low tide. You just enjoy.",
      descricaoSensorial:
        "Boarding is at Penha Beach, at the southern tip of the João Pessoa coast, away from the bustle of Tambaú and Cabo Branco. The departure point already has a different vibe: quiet beach, village rhythm, open sea.\n\nThe crossing to the pools is short — 10 to 15 minutes. Once the catamaran anchors, the reef is already exposed. Warm waters, clear floor, fish nearby. With a limited number of boats around, the silence is bigger, the water clearer, and you can hear the waves and the wind.\n\nThe catamaran has an onboard bar, restrooms, sound system and safety gear. Snorkel and mask optional. You stay in the pools until the tide starts rising — around 3h total experience.",
      roteiroNarrativo: [
        {
          emoji: "🚢",
          titulo: "Boarding at Penha Beach",
          texto:
            "Meeting point at Penha Beach (south of João Pessoa). Time set by the day's tide — confirmed on WhatsApp the day before.",
        },
        {
          emoji: "🌊",
          titulo: "Peaceful crossing",
          texto:
            "10 to 15 minutes by catamaran to the reef. Open sea, wind, view of Jampa's south coast.",
        },
        {
          emoji: "🐠",
          titulo: "In the exclusive pools",
          texto:
            "Only 2 boats at a time. Warm waters, preserved reef, colorful fish. Snorkel freely (optional). In most pools you stand.",
        },
        {
          emoji: "⚡",
          titulo: "Catamaran as your base",
          texto:
            "Onboard bar, restrooms, sound system with mic, first-aid kit. Life vests available. Snorkel and mask optional.",
        },
        {
          emoji: "🚢",
          titulo: "Return to Penha",
          texto:
            "When the tide rises and covers the reef, we head back. Around 3h total from boarding.",
        },
      ],
      rotario: [
        "Boarding at Penha Beach (per tide table)",
        "Short crossing (~10–15 min)",
        "Swim and snorkeling in the exclusive natural pools",
        "Catamaran base with bar and restroom",
        "Return ~3h total",
      ],
      incluso: [
        "Shared catamaran tour (only 2 boats at a time at the reef)",
        "Access to the natural pools",
        "Onboard bar, restrooms, sound system with mic",
        "Life vests and first-aid kit",
        "Support and guidance (Murillo or team)",
      ],
      naoIncluso: [
        "Meals (onboard purchases extra)",
        "Snorkel and mask (optional — check on WhatsApp)",
        "Underwater photographer (optional)",
        "Transfer to Penha Beach (check availability)",
      ],
      observacoes:
        "Tide-dependent. Only 2 boats at a time — book in advance to secure your spot. Transfer to Penha: on request.",
      alertaMare:
        "The Penha pools only emerge at low tide. We check the tide table beforehand and confirm with you the best time.",
      nomeCurto: "Penha",
      idealPara: [
        "Travelers seeking tranquility",
        "Couples",
        "Families with kids",
        "Anyone after an exclusive, uncrowded experience",
      ],
      faq: [
        {
          pergunta: "What makes Penha different from Seixas and Picãozinho?",
          resposta:
            "At Penha, only 2 boats are allowed at the reef at a time — far fewer than Seixas and Picãozinho. This ensures more quiet, cleaner water and a more intimate experience with nature. The departure point is also different: Penha Beach, in southern João Pessoa.",
        },
        {
          pergunta: "Can children come?",
          resposta:
            "Yes. Under 5 years old: free. 5 to 11 years old: R$ 48. From 12 years old: adult rate. The pools are shallow and family-safe.",
        },
        {
          pergunta: "Do I need to know how to swim?",
          resposta:
            "No. The Penha natural pools are shallow — you stand in most of them. Life vests available onboard. Knowing how to swim isn't required.",
        },
        {
          pergunta: "How do I get to Penha Beach?",
          resposta:
            "Penha is at the southern end of João Pessoa, past Cabo Branco and Seixas. If you need hotel-to-Penha transfer, ask us on WhatsApp — we check availability.",
        },
        {
          pergunta: "What's included in R$ 60?",
          resposta:
            "Shared catamaran tour, pool access, onboard bar, restrooms, life vests and guidance. Snorkel, mask, photographer and meals are extra.",
        },
        {
          pergunta: "How long does the tour last?",
          resposta:
            "Around 3h on average, including boarding, crossing, time in the pools and return. Window set by the tide.",
        },
        {
          pergunta: "What's the cancellation policy?",
          resposta:
            "If weather or tide is unfavorable, we reschedule at no cost. For customer cancellations, check the full policy on WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Swimsuit (come with it on)",
          "Towel",
          "Biodegradable sunscreen",
          "Water or buy onboard",
          "Waterproof camera (optional)",
        ],
        pontoEncontro:
          "Penha Beach — João Pessoa, PB. Exact location sent in the voucher after booking.",
        horario:
          "Varies with the tide table. Confirmed on WhatsApp the day before.",
      },
    },
    es: {
      nome: "Piscinas Naturales de Penha",
      preco: "R$ 60",
      duracao: "~3h",
      saida: "Según la tabla de mareas",
      h1: "Piscinas Naturales de Penha en João Pessoa — Versión Exclusiva y Tranquila",
      metaDescription:
        "Las piscinas naturales más exclusivas de João Pessoa, en la Playa de Penha. Solo 2 embarcaciones a la vez. Aguas tibias, arrecifes y tranquilidad. R$ 60. Reserva por WhatsApp!",
      subtituloHero:
        "Solo dos embarcaciones a la vez. Sin aglomeración. Arrecifes preservados frente a la Playa de Penha — el mar de Jampa en modo tranquilo.",
      descricao:
        "Las piscinas más exclusivas de João Pessoa — solo 2 embarcaciones a la vez garantizan tranquilidad y contacto genuino con la naturaleza.",
      lead:
        "¿Quieres sumergirte en las piscinas naturales de João Pessoa sin compartir el arrecife con decenas de barcos?\n\nPenha funciona diferente. Solo se permiten 2 embarcaciones a la vez en el arrecife, lo que mantiene el ambiente preservado y la experiencia más íntima. El agua es la misma — tibia, cristalina, con peces alrededor — pero el ritmo es otro.\n\nSalimos desde la Playa de Penha (sur de João Pessoa) y en 10–15 minutos estamos en las piscinas. Salida ajustada a la marea baja. Tú solo disfrutas.",
      descricaoSensorial:
        "El embarque es en la Playa de Penha, en el extremo sur de la orla de João Pessoa, lejos del movimiento de Tambaú y Cabo Branco. El punto de salida ya tiene otra vibra: playa tranquila, ritmo de pueblito, mar abierto.\n\nLa travesía hasta las piscinas es corta — 10 a 15 minutos. Cuando el catamarán ancla, el arrecife ya está expuesto. Aguas tibias, fondo claro, peces circulando cerca. Con un número limitado de embarcaciones, el silencio es mayor, el agua más limpia y se oye el viento y las olas.\n\nEn el catamarán hay bar a bordo, baños, sonido y equipo de salvamento. Snorkel y máscara opcionales. Te quedas en las piscinas hasta que la marea sube — alrededor de 3h de experiencia total.",
      roteiroNarrativo: [
        {
          emoji: "🚢",
          titulo: "Embarque en la Playa de Penha",
          texto:
            "Punto de encuentro en la Playa de Penha (sur de João Pessoa). Horario ajustado a la marea del día — confirmamos la víspera por WhatsApp.",
        },
        {
          emoji: "🌊",
          titulo: "Travesía tranquila",
          texto:
            "10 a 15 minutos de catamarán hasta el arrecife. Mar abierto, viento, paisaje del litoral sur de Jampa.",
        },
        {
          emoji: "🐠",
          titulo: "En las piscinas exclusivas",
          texto:
            "Solo 2 embarcaciones a la vez. Aguas tibias, arrecife preservado, peces coloridos. Snorkel a voluntad (opcional). En buena parte de las piscinas te quedas de pie.",
        },
        {
          emoji: "⚡",
          titulo: "Catamarán como base",
          texto:
            "Bar a bordo, baños, sonido con micrófono, kit de primeros auxilios. Chalecos disponibles. Snorkel y máscara opcionales.",
        },
        {
          emoji: "🚢",
          titulo: "Retorno a Penha",
          texto:
            "Cuando la marea sube y cubre el arrecife, regresamos. Total ~3h desde el embarque.",
        },
      ],
      rotario: [
        "Embarque en la Playa de Penha (según tabla de mareas)",
        "Travesía corta (~10–15 min)",
        "Baño y esnórquel en las piscinas naturales exclusivas",
        "Base en el catamarán con bar y baño",
        "Retorno ~3h total",
      ],
      incluso: [
        "Tour compartido en catamarán (solo 2 embarcaciones a la vez en el arrecife)",
        "Acceso a las piscinas naturales",
        "Bar a bordo, baños, sonido con micrófono",
        "Chalecos salvavidas y kit de primeros auxilios",
        "Orientación y atención (Murillo o equipo)",
      ],
      naoIncluso: [
        "Comidas (consumo a bordo aparte)",
        "Snorkel y máscara (opcional — consulta por WhatsApp)",
        "Fotógrafo submarino (opcional)",
        "Transfer hasta la Playa de Penha (consulta disponibilidad)",
      ],
      observacoes:
        "Depende de marea baja. Solo 2 embarcaciones a la vez — reserva con antelación para garantizar tu lugar. Transfer hasta Penha: consultar.",
      alertaMare:
        "Las piscinas de Penha solo aparecen con marea baja. Consultamos la tabla de mareas antes y te confirmamos el mejor horario.",
      nomeCurto: "Penha",
      idealPara: [
        "Quien busca tranquilidad",
        "Parejas",
        "Familias con niños",
        "Quien quiere experiencia exclusiva sin aglomeración",
      ],
      faq: [
        {
          pergunta: "¿Qué hace a Penha diferente de Seixas y Picãozinho?",
          resposta:
            "En Penha solo se permiten 2 embarcaciones a la vez en el arrecife — número mucho menor que Seixas y Picãozinho. Esto garantiza más silencio, agua más limpia y una experiencia más íntima con la naturaleza. El punto de salida también es diferente: Playa de Penha, en el sur de João Pessoa.",
        },
        {
          pergunta: "¿Pueden ir niños?",
          resposta:
            "Sí. Menores de 5 años: gratis. De 5 a 11 años: R$ 48. Desde 12 años: tarifa adulta. Las piscinas son poco profundas y seguras para familia.",
        },
        {
          pergunta: "¿Necesito saber nadar?",
          resposta:
            "No. Las piscinas naturales de Penha son poco profundas — te quedas de pie en buena parte. Chalecos disponibles a bordo. No es necesario saber nadar.",
        },
        {
          pergunta: "¿Cómo llego a la Playa de Penha?",
          resposta:
            "Penha queda en el extremo sur de João Pessoa, después de Cabo Branco y Seixas. Si necesitas transfer desde el hotel, consulta por WhatsApp — verificamos disponibilidad.",
        },
        {
          pergunta: "¿Qué incluye R$ 60?",
          resposta:
            "Tour compartido en catamarán, acceso a las piscinas, bar a bordo, baños, chalecos y orientación. Snorkel, máscara, fotógrafo y comidas aparte.",
        },
        {
          pergunta: "¿Cuánto dura el tour?",
          resposta:
            "En promedio 3h, contando embarque, travesía, tiempo en las piscinas y retorno. Ventana ajustada a la marea.",
        },
        {
          pergunta: "¿Cuál es la política de cancelación?",
          resposta:
            "En caso de tiempo o marea desfavorable, reprogramamos sin costo. Para cancelaciones del cliente, consulta la política completa por WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Traje de baño (ven con él puesto)",
          "Toalla",
          "Protector solar biodegradable",
          "Agua o compra a bordo",
          "Cámara a prueba de agua (opcional)",
        ],
        pontoEncontro:
          "Playa de Penha — João Pessoa, PB. La ubicación exacta se envía en el voucher tras la reserva.",
        horario:
          "Varía según la tabla de mareas. Confirmamos contigo por WhatsApp la víspera.",
      },
    },
  },

  "picaozinho": {
    en: {
      nome: "Picãozinho Natural Pools",
      preco: "R$ 60",
      duracao: "~3h",
      saida: "According to low tide",
      h1: "Picãozinho Natural Pools — Snorkeling 1.5 km from Tambaú Beach",
      metaDescription:
        "Open-air natural aquarium 1,500 meters from Tambaú in João Pessoa. Reefs, colorful fish and warm waters. R$ 60 per person. Book on WhatsApp!",
      subtituloHero:
        "Just 1,500 meters from Tambaú Beach, a natural aquarium with colorful fish and warm, shallow waters. Short crossing, big experience.",
      descricao:
        "Just 1,500 meters from Tambaú. Open-air natural aquarium with fish of every color and reef formations.",
      descricaoLonga:
        "Picãozinho is one of the most sought-after reefs in João Pessoa. Shallow, warm and crystal-clear pools, ideal for snorkeling. Colorful fish, algae, preserved marine fauna. It's like swimming in a natural aquarium.",
      lead:
        "Want to see João Pessoa's marine life up close without traveling far?\n\nPicãozinho is just 1,500 meters from Tambaú Beach — right off the shore. A few minutes by catamaran and you're already over the reef formations that create shallow, warm and crystal-clear natural pools, with colorful fish passing by.\n\nIt's the perfect tour for snorkeling beginners, kids, or anyone who just wants to stand in emerald water. We take care of the tide, the time and the structure. You just enjoy.",
      descricaoSensorial:
        "Boarding is at Tambaú, right on the shore. A few minutes by catamaran and you arrive at the reefs — the crossing is short enough for kids and seniors to enjoy without tiring.\n\nWhen the tide drops, the pools open. Greenish to light-blue waters, coral floor with algae and colorful fish nearby. In many spots you stand in the water. In others, you just float with the mask and watch.\n\nOn the catamaran you can drink water, buy a soda, rest. Return when the tide starts rising and covers the reefs — around 3h total experience.",
      roteiroNarrativo: [
        {
          emoji: "🚢",
          titulo: "Boarding at Tambaú",
          texto:
            "Meeting point on Tambaú Beach. Time set by the day's tide — we confirm with you the day before on WhatsApp.",
        },
        {
          emoji: "🌊",
          titulo: "Short catamaran crossing",
          texto:
            "Just 1,500 meters from the shore. Within minutes you're over the reef. Great for those who prefer a quick crossing.",
        },
        {
          emoji: "🐠",
          titulo: "Swim in the natural pools",
          texto:
            "Low tide, exposed reefs, formed pools. Shallow, warm and crystal-clear waters. Colorful fish near, preserved marine fauna. Snorkel freely (optional, extra).",
        },
        {
          emoji: "⚡",
          titulo: "Catamaran as your base",
          texto:
            "Space to rest, drink water, buy a soda. Life vests available for those who prefer.",
        },
        {
          emoji: "🚢",
          titulo: "Return to Tambaú",
          texto:
            "When the tide starts rising and covers the reefs, we head back. Around 3h total from boarding.",
        },
      ],
      galleryImages: [
        { src: "/images/passeios/piscinas-naturais/picaozinho/hero-01.jpg", alt: "Aerial view of Picãozinho reefs with turquoise sea, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/picaozinho/galeria-01.jpg", alt: "Tourists in the Picãozinho natural pools, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/picaozinho/galeria-02.jpg", alt: "Reefs and marine life of Picãozinho, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/picaozinho/galeria-03.jpg", alt: "Snorkeling in the Picãozinho natural pools, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/picaozinho/galeria-04.jpg", alt: "Crystal-clear sea over the Picãozinho reefs, João Pessoa" },
      ],
      rotario: [
        "Boarding at Tambaú (per tide table)",
        "Short catamaran crossing (~1.5 km)",
        "Swim and snorkeling in the natural pools",
        "Marine fauna observation",
        "Return ~3h total",
      ],
      incluso: [
        "Shared catamaran tour",
        "Access to the reefs and natural pools",
        "Life vests",
        "Support and guidance (Murillo or team)",
      ],
      naoIncluso: [
        "Meals (onboard purchases extra)",
        "Snorkel and mask (optional — check on WhatsApp)",
        "Underwater photographer (optional)",
        "Transfer to Tambaú (check availability)",
      ],
      observacoes:
        "Tide-dependent — only runs when the tide table allows. Shallow and safe pools, ideal for families. We confirm time beforehand.",
      alertaMare:
        "Picãozinho only appears at low tide. We check the João Pessoa tide table beforehand and let you know the best time. No need to worry about it.",
      nomeCurto: "Picãozinho",
      idealPara: ["Snorkeling", "Family", "Children", "Snorkeling beginners", "Marine photos"],
      imagemAlt: "Picãozinho reef with colorful fish in João Pessoa",
      faq: [
        {
          pergunta: "Is it safe for children?",
          resposta:
            "Yes. Shallow, warm and crystal-clear waters — you can stand in most of the reef. Life vests available. An adult must supervise children under 6.",
        },
        {
          pergunta: "Will I see lots of fish?",
          resposta:
            "Yes. Picãozinho is known for its preserved marine fauna, with colorful fish swimming nearby without spooking. It's like diving into a natural aquarium.",
        },
        {
          pergunta: "Do I need to know how to swim?",
          resposta:
            "No. The water is shallow across most of the reef — you stand. Life vests available on board if you prefer.",
        },
        {
          pergunta: "What's the difference between Picãozinho and Seixas?",
          resposta:
            "Picãozinho is 1.5 km from Tambaú Beach — boarding on the shore, short crossing. Seixas requires a slightly longer crossing and sits at the easternmost point of the Americas. Both are beautiful; Picãozinho is more practical for simple logistics.",
        },
        {
          pergunta: "What's included in R$ 60?",
          resposta:
            "Shared catamaran tour, reef access, life vests and guidance. Snorkel, mask, underwater photographer and meals are paid separately.",
        },
        {
          pergunta: "How long does the tour last?",
          resposta:
            "Around 3h on average, including boarding, crossing, time in the pools and return. Everything within the low-tide window.",
        },
        {
          pergunta: "What's the cancellation policy?",
          resposta:
            "If weather or tide is unfavorable, we reschedule at no cost. For customer cancellations, check the full policy on WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Swimsuit (come with it on)",
          "Towel",
          "Biodegradable sunscreen (preserves the corals)",
          "Water or buy onboard",
        ],
        pontoEncontro:
          "Tambaú Beach — João Pessoa, PB. Exact location sent in the voucher after booking.",
        horario:
          "Varies with the tide table. Confirmed on WhatsApp the day before.",
      },
    },
    es: {
      nome: "Piscinas Naturales de Picãozinho",
      preco: "R$ 60",
      duracao: "~3h",
      saida: "Según marea baja",
      h1: "Piscinas Naturales de Picãozinho — Esnórquel a 1,5 km de la Playa de Tambaú",
      metaDescription:
        "Acuario natural al aire libre a 1.500 metros de Tambaú en João Pessoa. Arrecifes, peces coloridos y aguas tibias. R$ 60 por persona. Reserva por WhatsApp!",
      subtituloHero:
        "A solo 1.500 metros de la Playa de Tambaú, un acuario natural con peces coloridos y aguas tibias y poco profundas. Travesía corta, gran experiencia.",
      descricao:
        "A solo 1.500 metros de Tambaú. Acuario natural al aire libre con peces de todos los colores y formaciones de arrecife.",
      descricaoLonga:
        "Picãozinho es uno de los arrecifes más buscados de João Pessoa. Piscinas poco profundas, tibias y cristalinas, ideales para esnórquel. Peces coloridos, algas, fauna marina preservada. Es como sumergirse en un acuario natural.",
      lead:
        "¿Quieres ver de cerca la vida marina de João Pessoa sin viajar lejos?\n\nPicãozinho queda a solo 1.500 metros de la Playa de Tambaú — justo frente a la orla. En pocos minutos de catamarán ya estás sobre las formaciones de arrecife que crean piscinas naturales poco profundas, tibias y cristalinas, con peces coloridos pasando al lado.\n\nEs el tour ideal para esnórquel principiante, niños o simplemente quedarte de pie en agua esmeralda. Nosotros nos ocupamos de la marea, el horario y la estructura. Tú solo disfrutas.",
      descricaoSensorial:
        "El embarque es en Tambaú, en la orla. En pocos minutos de catamarán llegas a los arrecifes — la travesía es corta y cómoda para niños y mayores.\n\nCuando la marea baja, las piscinas se abren. Aguas que van del verdoso al azul claro, fondo de coral con algas y peces coloridos circulando cerca. En varios puntos te quedas de pie. En otros, flotas con la máscara y miras.\n\nEn el catamarán hay espacio para tomar agua, comprar bebida, descansar. La vuelta sucede cuando la marea sube y cubre los arrecifes — en promedio 3h de experiencia total.",
      roteiroNarrativo: [
        {
          emoji: "🚢",
          titulo: "Embarque en Tambaú",
          texto:
            "Punto de encuentro en la Playa de Tambaú. Horario ajustado a la marea del día — confirmamos contigo la víspera por WhatsApp.",
        },
        {
          emoji: "🌊",
          titulo: "Travesía corta en catamarán",
          texto:
            "Solo 1.500 metros de la orla. En minutos ya estás sobre el arrecife. Ideal para quien prefiere navegación rápida.",
        },
        {
          emoji: "🐠",
          titulo: "Baño en las piscinas naturales",
          texto:
            "Marea baja, arrecifes expuestos, piscinas formadas. Aguas poco profundas, tibias y cristalinas. Peces coloridos cerca, fauna marina preservada. Esnórquel a voluntad (opcional, aparte).",
        },
        {
          emoji: "⚡",
          titulo: "Catamarán como base",
          texto:
            "Espacio para descansar, tomar agua, comprar bebida. Chalecos disponibles para quien prefiera.",
        },
        {
          emoji: "🚢",
          titulo: "Retorno a Tambaú",
          texto:
            "Cuando la marea sube y cubre los arrecifes, regresamos. Total ~3h desde el embarque.",
        },
      ],
      galleryImages: [
        { src: "/images/passeios/piscinas-naturais/picaozinho/hero-01.jpg", alt: "Vista aérea de los arrecifes de Picãozinho con mar turquesa, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/picaozinho/galeria-01.jpg", alt: "Turistas en las piscinas naturales de Picãozinho, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/picaozinho/galeria-02.jpg", alt: "Arrecifes y fauna marina de Picãozinho, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/picaozinho/galeria-03.jpg", alt: "Esnórquel en las piscinas naturales de Picãozinho, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/picaozinho/galeria-04.jpg", alt: "Mar cristalino sobre los arrecifes de Picãozinho, João Pessoa" },
      ],
      rotario: [
        "Embarque en Tambaú (según tabla de mareas)",
        "Travesía corta en catamarán (~1,5 km)",
        "Baño y esnórquel en las piscinas naturales",
        "Observación de la fauna marina",
        "Retorno ~3h total",
      ],
      incluso: [
        "Tour compartido en catamarán",
        "Acceso a los arrecifes y piscinas naturales",
        "Chalecos salvavidas",
        "Orientación y atención (Murillo o equipo)",
      ],
      naoIncluso: [
        "Comidas (consumo a bordo aparte)",
        "Snorkel y máscara (opcional — consulta por WhatsApp)",
        "Fotógrafo submarino (opcional)",
        "Transfer hasta Tambaú (consulta disponibilidad)",
      ],
      observacoes:
        "Depende de marea baja — solo se realiza cuando la tabla de mareas lo permite. Piscinas poco profundas y seguras, ideales para familia. Confirmamos el horario antes.",
      alertaMare:
        "Picãozinho solo aparece con marea baja. Consultamos la tabla de mareas de João Pessoa antes y te avisamos el mejor horario. No tienes que preocuparte.",
      nomeCurto: "Picãozinho",
      idealPara: ["Esnórquel", "Familia", "Niños", "Quien nunca buceó", "Fotos marinas"],
      imagemAlt: "Arrecife de Picãozinho con peces coloridos en João Pessoa",
      faq: [
        {
          pergunta: "¿Es seguro para niños?",
          resposta:
            "Sí. Aguas poco profundas, tibias y cristalinas — en buena parte del arrecife se está de pie. Chalecos disponibles. Supervisión de un adulto necesaria para menores de 6 años.",
        },
        {
          pergunta: "¿Veo muchos peces?",
          resposta:
            "Sí. Picãozinho es conocido por su fauna marina preservada, con peces coloridos que circulan cerca sin asustarse. Es como sumergirse en un acuario natural.",
        },
        {
          pergunta: "¿Necesito saber nadar?",
          resposta:
            "No. El agua es poco profunda en casi todo el arrecife — te quedas de pie. Chalecos salvavidas disponibles a bordo para quien se sienta más cómodo.",
        },
        {
          pergunta: "¿Cuál es la diferencia entre Picãozinho y Seixas?",
          resposta:
            "Picãozinho queda a 1,5 km de la Playa de Tambaú — embarque en la orla, travesía corta. Seixas requiere travesía un poco más larga y está en el punto más oriental de las Américas. Ambos son hermosos; Picãozinho es más práctico para logística simple.",
        },
        {
          pergunta: "¿Qué incluye R$ 60?",
          resposta:
            "Tour compartido en catamarán, acceso al arrecife, chalecos y orientación. Snorkel, máscara, fotógrafo submarino y comidas se pagan aparte.",
        },
        {
          pergunta: "¿Cuánto dura el tour?",
          resposta:
            "En promedio 3h, contando embarque, travesía, tiempo en las piscinas y retorno. Todo dentro de la ventana de marea baja.",
        },
        {
          pergunta: "¿Cuál es la política de cancelación?",
          resposta:
            "En caso de tiempo o marea desfavorable, reprogramamos sin costo. Para cancelaciones del cliente, consulta la política completa por WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Traje de baño (ven con él puesto)",
          "Toalla",
          "Protector solar biodegradable (preserva los corales)",
          "Agua o compra a bordo",
        ],
        pontoEncontro:
          "Playa de Tambaú — João Pessoa, PB. La ubicación exacta se envía en el voucher tras la reserva.",
        horario:
          "Varía según la tabla de mareas. Confirmamos contigo por WhatsApp la víspera.",
      },
    },
  },

  "mergulho": {
    en: {
      nome: "Cylinder Diving",
      preco: "On request · Reply within 5 min",
      duracao: "On request",
      saida: "Depending on tide and visibility",
      descricao:
        "Diving with full equipment in the natural pools of João Pessoa, with a certified professional.",
      incluso: [
        "Full diving equipment",
        "Certified professional",
      ],
      observacoes:
        "Depends on tide and visibility conditions. Rate and availability: on request.",
      idealPara: ["Travelers who want a full dive", "Advanced experience"],
      imagemAlt: "Cylinder diving in the natural pools of João Pessoa",
      faq: [
        {
          pergunta: "Do I need experience to dive?",
          resposta:
            "Ask Murillo. There are options for beginners and for those who already dive.",
        },
        {
          pergunta: "How much does it cost?",
          resposta:
            "On request — depends on the modality and availability. Send a message on WhatsApp.",
        },
      ],
    },
    es: {
      nome: "Buceo con Cilindro",
      preco: "A consultar · Respuesta en 5 min",
      duracao: "A consultar",
      saida: "Según marea y visibilidad",
      descricao:
        "Buceo con equipo completo en las piscinas naturales de João Pessoa, con profesional certificado.",
      incluso: [
        "Equipo completo de buceo",
        "Profesional certificado",
      ],
      observacoes:
        "Depende de condiciones de marea y visibilidad. Valor y disponibilidad: a consultar.",
      idealPara: ["Quien quiere buceo completo", "Experiencia avanzada"],
      imagemAlt: "Buceo con cilindro en las piscinas naturales de João Pessoa",
      faq: [
        {
          pergunta: "¿Necesito experiencia para hacer el buceo?",
          resposta:
            "Consulta a Murillo. Hay opciones para principiantes y para quien ya bucea.",
        },
        {
          pergunta: "¿Cuál es el valor?",
          resposta:
            "Valor a consultar — depende de la modalidad y disponibilidad. Envía mensaje por WhatsApp.",
        },
      ],
    },
  },

  // =========================================================================
  // CITY TOUR
  // =========================================================================

  "city-tour-jampa": {
    en: {
      nome: "Jampa City Tour — Historic",
      preco: "R$ 80",
      duracao: "~3h30",
      saida: "Morning",
      h1: "City Tour in João Pessoa — Historic Center, Niemeyer and Ponta do Seixas",
      metaDescription:
        "Tour through the 3rd oldest city in Brazil: 'João Pessoa' sign, Cabo Branco Lighthouse, Niemeyer's Cabo Branco Station, São Francisco Cultural Center and more. R$ 80. Book on WhatsApp!",
      subtituloHero:
        "3h30 through the historic center, Niemeyer's works and the easternmost point of the Americas. Transfer and accredited guide.",
      descricao:
        "Discover the 3rd oldest city in Brazil: Niemeyer, easternmost point, colonial heritage and historic squares.",
      lead:
        "Want to really understand João Pessoa, not just the beaches?\n\nThe Jampa City Tour takes you through the points that tell the city's story — the 3rd oldest in Brazil, the second greenest capital in the world, and the place where the sun first rises in the Americas.\n\nWe pass by the 'João Pessoa' sign, the Cabo Branco Lighthouse at Ponta do Seixas, the Cabo Branco Station (Oscar Niemeyer's work), the Bosque dos Sonhos, Praça da Independência, São Francisco Cultural Center, Hotel Globo (historic landmark) and Sólon de Lucena Park. Round-trip transfer included. Accredited guide who tells the story as you walk.",
      descricaoSensorial:
        "The morning starts early. The van picks you up at the hotel or airbnb in Tambaú, Cabo Branco, Manaíra or Bessa. First stop usually is the 'João Pessoa' sign — classic photo. From there, the Cabo Branco Lighthouse at Ponta do Seixas: the easternmost point of the Americas. The sun that rises in Brazil rises right there.\n\nThen the Cabo Branco Station — art and science space designed by Oscar Niemeyer. Curved white architecture with a sea view. Bosque dos Sonhos comes next: a garden with panoramic vista.\n\nThe most historic stretch now. Praça da Independência, São Francisco Cultural Center (entrance not included but worth paying — one of the most important Baroque churches in Brazil), Hotel Globo (heritage, with a view of the Sanhauá River), Praça dos Três Poderes and Sólon de Lucena Park — the lagoon surrounded by imperial palms at the city's heart.\n\nThe guide tells the story unhurried. You photograph, ask, understand the city. Back to the hotel around noon.",
      coverImage: "/images/passeios/litoral-sul/roteiro-classico/hero-01.jpg",
      imagemAlt: "Historic center of João Pessoa — 3rd oldest city in Brazil",
      roteiroNarrativo: [
        {
          emoji: "🚐",
          titulo: "Pick-up (transfer) — morning",
          texto:
            "We pick you up at your hotel or airbnb in Tambaú, Cabo Branco, Manaíra or Bessa. Time in the voucher.",
        },
        {
          emoji: "📸",
          titulo: "'João Pessoa' sign + Cabo Branco Lighthouse",
          texto:
            "Photo at the iconic sign and stop at the Cabo Branco Lighthouse (Ponta do Seixas) — easternmost point of the Americas.",
        },
        {
          emoji: "🏛️",
          titulo: "Cabo Branco Station (Niemeyer) + Bosque dos Sonhos",
          texto:
            "Oscar Niemeyer's work with a sea view. Bosque dos Sonhos with a city viewpoint.",
        },
        {
          emoji: "⛪",
          titulo: "São Francisco Cultural Center and Hotel Globo",
          texto:
            "Baroque heritage of the São Francisco Cultural Center (entrance optional, extra). Hotel Globo with a view of the Sanhauá River.",
        },
        {
          emoji: "🌳",
          titulo: "Historic squares + Sólon de Lucena Park",
          texto:
            "Praça da Independência, Praça dos Três Poderes and Sólon de Lucena Park — lagoon ringed with imperial palms at the city center.",
        },
        {
          emoji: "🚐",
          titulo: "Return around noon",
          texto:
            "Drop-off at the hotel. Total: ~3h30.",
        },
      ],
      rotario: [
        "Morning departure (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "'João Pessoa' sign",
        "Cabo Branco Lighthouse / Ponta do Seixas",
        "Cabo Branco Station (Niemeyer)",
        "Bosque dos Sonhos",
        "Praça da Independência",
        "São Francisco Cultural Center",
        "Hotel Globo",
        "Praça dos Três Poderes",
        "Sólon de Lucena Park",
        "Return to hotel ~3h30",
      ],
      incluso: [
        "Round-trip transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Accredited drivers and guide",
        "Historical commentary at every stop",
        "Support and guidance (Murillo or team)",
      ],
      naoIncluso: [
        "São Francisco Cultural Center entrance (optional, ask on-site)",
        "Meals and drinks",
        "Purchases",
      ],
      observacoes:
        "Operates Tuesday to Sunday (closed Mondays). Private rate: on request.",
      nomeCurto: "City Tour",
      idealPara: [
        "First-time visitors to João Pessoa",
        "Lovers of history and architecture",
        "Cultural travelers",
        "Cloudy or unstable-weather days",
        "Families",
      ],
      faq: [
        {
          pergunta: "What does the City Tour visit?",
          resposta:
            "'João Pessoa' sign, Cabo Branco Lighthouse (Ponta do Seixas), Cabo Branco Station (Niemeyer), Bosque dos Sonhos, Praça da Independência, São Francisco Cultural Center, Hotel Globo, Praça dos Três Poderes and Sólon de Lucena Park.",
        },
        {
          pergunta: "Does it run every day?",
          resposta:
            "Tuesday to Sunday. Closed on Mondays — several of the visited landmarks also close on that day.",
        },
        {
          pergunta: "Is the São Francisco Cultural Center entrance included?",
          resposta:
            "No. The entrance fee is paid on-site (ask on-site) and is optional — you decide if you want to enter and see the Baroque interior of the church. Worth it for sacred-art lovers.",
        },
        {
          pergunta: "Can children come?",
          resposta:
            "Yes. Under 5 years old: free. 5 to 11 years old: R$ 64. From 12 years old: adult rate. The tour is calm, no trail.",
        },
        {
          pergunta: "How long does it last?",
          resposta:
            "Around 3h30, including morning departure, all stops with time for photos and return to the hotel.",
        },
        {
          pergunta: "Worth it if I'm short on time in João Pessoa?",
          resposta:
            "Yes — that's exactly the idea. The City Tour sums up the best of João Pessoa's history, architecture and culture in one morning. Combines well with beach tours on other days.",
        },
        {
          pergunta: "What's the cancellation policy for rain?",
          resposta:
            "With 2h advance notice, we reschedule at no cost. The City Tour is one of the best options for unstable weather, since most stops are covered or have indoor options.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Light, comfortable clothing",
          "Sneakers or closed-toe shoes (some historic floors)",
          "Sunscreen and sunglasses",
          "Camera",
          "Water bottle",
          "Cash or card (optional Cultural Center entrance)",
        ],
        pontoEncontro:
          "We pick you up at your hotel or airbnb in Tambaú, Cabo Branco, Manaíra or Bessa — João Pessoa, PB. Exact location in the voucher.",
        horario:
          "Morning departure. Return around noon (total ~3h30).",
      },
    },
    es: {
      nome: "City Tour Jampa — Histórico",
      preco: "R$ 80",
      duracao: "~3h30",
      saida: "Mañana",
      h1: "City Tour en João Pessoa — Centro Histórico, Niemeyer y Ponta do Seixas",
      metaDescription:
        "Tour por la 3ª ciudad más antigua de Brasil: Letrero, Faro del Cabo Branco, Estación Cabo Branco de Niemeyer, Centro Cultural São Francisco y más. R$ 80. Reserva por WhatsApp!",
      subtituloHero:
        "3h30 por el centro histórico, obras de Niemeyer y el punto más oriental de las Américas. Transfer y guía acreditado.",
      descricao:
        "Conoce la 3ª ciudad más antigua de Brasil: Niemeyer, punto más oriental, patrimonio colonial y plazas históricas.",
      lead:
        "¿Quieres entender João Pessoa de verdad, no solo las playas?\n\nEl City Tour Jampa te lleva por los puntos que cuentan la historia de la ciudad — la 3ª más antigua de Brasil, la segunda capital más verde del mundo y el lugar donde el sol nace primero en las Américas.\n\nPasamos por el Letrero 'João Pessoa', por el Faro del Cabo Branco en Ponta do Seixas, por la Estación Cabo Branco (obra de Oscar Niemeyer), por el Bosque dos Sonhos, la Praça da Independência, el Centro Cultural São Francisco, el Hotel Globo (patrimonio histórico) y el Parque Sólon de Lucena. Transfer ida y vuelta incluido. Guía acreditado que cuenta la historia mientras caminas.",
      descricaoSensorial:
        "La mañana empieza temprano. La van te recoge en el hotel o airbnb en Tambaú, Cabo Branco, Manaíra o Bessa. La primera parada suele ser el Letrero 'João Pessoa' — clásico para foto. Después, el Faro del Cabo Branco, en Ponta do Seixas: el punto más oriental de las Américas. El sol que nace en Brasil nace ahí.\n\nSigue a la Estación Cabo Branco — espacio de arte y ciencia diseñado por Oscar Niemeyer. Arquitectura curva, blanca, con vista al mar. Bosque dos Sonhos a continuación: jardín con vista panorámica.\n\nLa parte más histórica viene ahora. Praça da Independência, Centro Cultural São Francisco (entrada no incluida, pero vale pagar — una de las iglesias barrocas más importantes de Brasil), Hotel Globo (patrimonio, vista del río Sanhauá), Praça dos Três Poderes y Parque Sólon de Lucena — la laguna rodeada de palmeras imperiales en el corazón de la ciudad.\n\nEl guía cuenta la historia sin prisa. Tú fotografías, preguntas, entiendes la ciudad. Vuelta al hotel cerca del mediodía.",
      coverImage: "/images/passeios/litoral-sul/roteiro-classico/hero-01.jpg",
      imagemAlt: "Centro histórico de João Pessoa — 3ª ciudad más antigua de Brasil",
      roteiroNarrativo: [
        {
          emoji: "🚐",
          titulo: "Recogida (transfer) — mañana",
          texto:
            "Te recogemos en tu hotel o airbnb en Tambaú, Cabo Branco, Manaíra o Bessa. Horario en el voucher.",
        },
        {
          emoji: "📸",
          titulo: "Letrero 'João Pessoa' + Faro del Cabo Branco",
          texto:
            "Foto en el letrero icónico y parada en el Faro del Cabo Branco (Ponta do Seixas) — punto más oriental de las Américas.",
        },
        {
          emoji: "🏛️",
          titulo: "Estación Cabo Branco (Niemeyer) + Bosque dos Sonhos",
          texto:
            "Obra de Oscar Niemeyer con vista al mar. Bosque dos Sonhos con mirador a la ciudad.",
        },
        {
          emoji: "⛪",
          titulo: "Centro Cultural São Francisco y Hotel Globo",
          texto:
            "Patrimonio barroco del Centro Cultural São Francisco (entrada aparte, opcional). Hotel Globo con vista del río Sanhauá.",
        },
        {
          emoji: "🌳",
          titulo: "Plazas históricas + Parque Sólon de Lucena",
          texto:
            "Praça da Independência, Praça dos Três Poderes y Parque Sólon de Lucena — laguna rodeada de palmeras imperiales en el centro de la ciudad.",
        },
        {
          emoji: "🚐",
          titulo: "Regreso cerca del mediodía",
          texto:
            "Devolución en el hotel al final. Total: ~3h30.",
        },
      ],
      rotario: [
        "Salida por la mañana (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Letrero 'João Pessoa'",
        "Faro del Cabo Branco / Ponta do Seixas",
        "Estación Cabo Branco (Niemeyer)",
        "Bosque dos Sonhos",
        "Praça da Independência",
        "Centro Cultural São Francisco",
        "Hotel Globo",
        "Praça dos Três Poderes",
        "Parque Sólon de Lucena",
        "Regreso al hotel ~3h30",
      ],
      incluso: [
        "Transfer ida y vuelta (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Conductores y guía acreditados",
        "Acompañamiento histórico en todos los puntos",
        "Orientación y atención (Murillo o equipo)",
      ],
      naoIncluso: [
        "Entrada al Centro Cultural São Francisco (opcional, consultar en el lugar)",
        "Comidas y bebidas",
        "Compras",
      ],
      observacoes:
        "Funciona de martes a domingo (no opera los lunes). Valor privativo: consultar.",
      nomeCurto: "City Tour",
      idealPara: [
        "Primer contacto con João Pessoa",
        "Quien aprecia historia y arquitectura",
        "Turistas culturales",
        "Días nublados o con clima inestable",
        "Familias",
      ],
      faq: [
        {
          pergunta: "¿Qué se visita en el City Tour?",
          resposta:
            "Letrero 'João Pessoa', Faro del Cabo Branco (Ponta do Seixas), Estación Cabo Branco (Niemeyer), Bosque dos Sonhos, Praça da Independência, Centro Cultural São Francisco, Hotel Globo, Praça dos Três Poderes y Parque Sólon de Lucena.",
        },
        {
          pergunta: "¿Funciona todos los días?",
          resposta:
            "De martes a domingo. No opera los lunes — algunos de los puntos visitados también cierran ese día.",
        },
        {
          pergunta: "¿La entrada al Centro Cultural São Francisco está incluida?",
          resposta:
            "No. La entrada se paga en el lugar (consultar valor) y es opcional — tú decides si quieres entrar para ver el interior barroco de la iglesia. Vale la pena para amantes del arte sacro.",
        },
        {
          pergunta: "¿Pueden ir niños?",
          resposta:
            "Sí. Menores de 5 años: gratis. De 5 a 11 años: R$ 64. Desde 12 años: tarifa adulta. El tour es tranquilo, sin caminata.",
        },
        {
          pergunta: "¿Cuánto dura?",
          resposta:
            "Alrededor de 3h30, contando salida por la mañana, todas las paradas con tiempo para fotos, y regreso al hotel.",
        },
        {
          pergunta: "¿Vale la pena si tengo poco tiempo en João Pessoa?",
          resposta:
            "Sí — es exactamente para eso. El City Tour resume lo mejor de la historia, la arquitectura y la cultura de João Pessoa en una mañana. Combina bien con tours de playa en otros días.",
        },
        {
          pergunta: "¿Cuál es la política de cancelación por lluvia?",
          resposta:
            "Con aviso de 2h de antelación, reprogramamos sin costo. El City Tour es una de las mejores opciones para días de clima inestable, ya que la mayoría de los puntos son cubiertos o tienen opción interna.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Ropa ligera y cómoda",
          "Zapatillas o calzado cerrado (algunos pisos históricos)",
          "Protector solar y gafas de sol",
          "Cámara",
          "Botella de agua",
          "Dinero o tarjeta (entrada opcional del Centro Cultural)",
        ],
        pontoEncontro:
          "Te recogemos en tu hotel o airbnb en Tambaú, Cabo Branco, Manaíra o Bessa — João Pessoa, PB. Ubicación exacta en el voucher.",
        horario:
          "Salida por la mañana. Regreso cerca del mediodía (total ~3h30).",
      },
    },
  },

  // =========================================================================
  // INTERESTADUAIS
  // =========================================================================

  "porto-de-galinhas": {
    en: {
      nome: "Porto de Galinhas — Pernambuco",
      preco: "R$ 160",
      duracao: "Full day",
      saida: "Morning departure · Time confirmed on WhatsApp",
      h1: "Porto de Galinhas from João Pessoa — Day Trip to the Natural Pools",
      metaDescription:
        "Day trip from João Pessoa to Porto de Galinhas (PE): unique natural pools, jangadas and greenish waters. R$ 160 with transport. Book on WhatsApp!",
      subtituloHero:
        "Morning departure, night return. Round-trip João Pessoa → Porto de Galinhas → João Pessoa in a comfortable vehicle, with free time to enjoy the pools and the village.",
      descricao:
        "One of Brazil's most famous destinations — unique natural pools, jangadas and greenish waters.",
      lead:
        "Want to visit Porto de Galinhas without changing hotels?\n\nWe run the day trip from João Pessoa, leaving in the morning and returning at night. It's about a 2h30 drive in a comfortable vehicle, with pickup at your hotel. You get a full day in one of Brazil's most famous beaches — unique natural pools, charming village and greenish waters — without disturbing your trip logistics.\n\nPhoto ID is required (interstate trip PB → PE). Meals and the jangada ride to the pools are at your expense.",
      descricaoSensorial:
        "The van picks you up at the hotel in the morning (time confirmed on WhatsApp). The ride is smooth, with restroom and snack stops along the way. Before you know it, you're in Porto de Galinhas.\n\nThe village is charming: shops, restaurants, well-organized tourist environment. From the main beach, you see the jangadas taking visitors out to the natural pools — coral formations just meters from the sand that create open-air aquariums with crystal-green water and colorful fish.\n\nFree time to enjoy it your way: natural pools (jangada paid on-site), beach, village, lunch. We agree on the meeting point and time before arrival. At night, transport back to João Pessoa.",
      roteiroNarrativo: [
        {
          emoji: "🚐",
          titulo: "Morning pick-up",
          texto:
            "We pick you up at your hotel in João Pessoa. Time set to reach Porto de Galinhas with plenty of day to enjoy.",
        },
        {
          emoji: "🛣️",
          titulo: "Drive João Pessoa → Porto de Galinhas",
          texto:
            "About 2h30 in a comfortable vehicle, with a restroom/snack stop. Photo ID mandatory (interstate PB → PE).",
        },
        {
          emoji: "🏖️",
          titulo: "Arrival in Porto de Galinhas",
          texto:
            "Free time in the village and on the beach. Shops, restaurants, well-organized tourist setting.",
        },
        {
          emoji: "⛵",
          titulo: "Natural pools (optional)",
          texto:
            "Jangadas take visitors to the pools meters from the beach — crystal-green water, corals and fish. Jangada fee paid on-site.",
        },
        {
          emoji: "🍽️",
          titulo: "Lunch and free time (not included)",
          texto:
            "Many restaurant options in the village. The guide recommends based on your style.",
        },
        {
          emoji: "🚐",
          titulo: "Night return",
          texto:
            "We agree the boarding time to head back to João Pessoa at night, with drop-off at the hotel.",
        },
      ],
      rotario: [
        "Morning departure from João Pessoa",
        "~2h30 drive (technical stop on the way)",
        "Free time in Porto de Galinhas (village + beach)",
        "Natural pools by jangada (optional, extra)",
        "Lunch (not included)",
        "Night return to João Pessoa",
      ],
      incluso: [
        "Round-trip transport (João Pessoa ↔ Porto de Galinhas) in a comfortable vehicle",
        "Accredited driver",
        "Support and guidance (Murillo or team)",
      ],
      naoIncluso: [
        "Meals (lunch, drinks, snacks)",
        "Jangada to the natural pools (pay on-site)",
        "Purchases and extra village activities",
        "Tolls and local fees (when applicable)",
      ],
      observacoes:
        "Photo ID mandatory (interstate trip PB → PE). Departure subject to minimum passengers — check availability. Night return.",
      nomeCurto: "Porto de Galinhas",
      idealPara: [
        "Travelers who want to visit Porto de Galinhas without changing hotels",
        "Families",
        "Couples",
        "Organized day trip",
      ],
      faq: [
        {
          pergunta: "What's included in the R$ 160?",
          resposta:
            "Round-trip transport (João Pessoa ↔ Porto de Galinhas) in a comfortable vehicle, with accredited driver and guidance. Meals, jangada to the pools and tolls are at your expense.",
        },
        {
          pergunta: "Do I need ID?",
          resposta:
            "Yes. Photo ID required — interstate trip between Paraíba and Pernambuco. Bring RG, driver's license or passport.",
        },
        {
          pergunta: "How much does the jangada to the natural pools cost?",
          resposta:
            "Jangada cost is paid directly to the boatmen in Porto de Galinhas. Price varies with the season and group size. Ask on-site.",
        },
        {
          pergunta: "Do children pay?",
          resposta:
            "Under 5 years old: free. 5 to 11 years old: R$ 128. From 12 years old: adult rate. Children must be accompanied by a responsible adult.",
        },
        {
          pergunta: "How long does the drive take?",
          resposta:
            "Around 2h30 to 3h, with a restroom and snack stop. Return is at night, generally after sunset.",
        },
        {
          pergunta: "Can I find lunch in Porto de Galinhas?",
          resposta:
            "Yes. The village has dozens of restaurants — from regional to international. The guide recommends options for your style. Meals are not included.",
        },
        {
          pergunta: "What's the cancellation policy?",
          resposta:
            "With 24h advance notice, we reschedule at no cost. Customer cancellations: see the full policy on WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Photo ID (mandatory)",
          "Swimsuit (wear it under your clothes)",
          "Towel",
          "Biodegradable sunscreen",
          "Hat or cap",
          "Camera",
          "Cash and card (jangada, lunch, purchases)",
        ],
        pontoEncontro:
          "We pick you up at your hotel in João Pessoa in covered areas (Tambaú, Cabo Branco, Manaíra, Bessa). Exact point and time confirmed in the voucher.",
        horario:
          "Morning departure (time confirmed on WhatsApp). Night return to the hotel.",
      },
    },
    es: {
      nome: "Porto de Galinhas — Pernambuco",
      preco: "R$ 160",
      duracao: "Día entero",
      saida: "Salida por la mañana · Horario confirmado por WhatsApp",
      h1: "Porto de Galinhas desde João Pessoa — Bate-y-vuelta a las Piscinas Naturales",
      metaDescription:
        "Bate-y-vuelta de João Pessoa a Porto de Galinhas (PE): piscinas naturales únicas, jangadas y aguas verdosas. R$ 160 con transporte. Reserva por WhatsApp!",
      subtituloHero:
        "Salida por la mañana, regreso de noche. Transporte João Pessoa → Porto de Galinhas → João Pessoa en vehículo cómodo, con tiempo libre para disfrutar las piscinas y el pueblo.",
      descricao:
        "Uno de los destinos más famosos de Brasil — piscinas naturales únicas, jangadas y aguas verdosas.",
      lead:
        "¿Quieres conocer Porto de Galinhas sin cambiar de alojamiento?\n\nHacemos el bate-y-vuelta saliendo de João Pessoa por la mañana y regresando por la noche. El trayecto es de unas 2h30 de ida en vehículo cómodo, con salida directa desde tu hotel. Ganas un día entero en una de las playas más famosas de Brasil — piscinas naturales únicas, pueblo encantador y aguas verdosas — sin alterar la logística de tu viaje.\n\nDocumento con foto obligatorio (viaje interestatal PB → PE). Comidas y paseo de jangada en las piscinas por cuenta del visitante.",
      descricaoSensorial:
        "La van te recoge en el hotel por la mañana (horario confirmado por WhatsApp). El viaje es tranquilo, con paradas para baño y refrigerio en el camino. En poco tiempo estás en Porto de Galinhas.\n\nEl pueblo es encantador: tiendas, restaurantes, ambiente turístico organizado. Desde la playa central, ves las jangadas llevando turistas a las piscinas naturales — formaciones de coral a pocos metros de la arena que crean acuarios a cielo abierto con agua verde-cristalina y peces coloridos.\n\nTiempo libre para disfrutar a tu manera: piscinas naturales (jangada pagada en el lugar), playa, pueblo, almuerzo. Combinamos el punto y horario de regreso antes de llegar. Por la noche, transporte de vuelta a João Pessoa.",
      roteiroNarrativo: [
        {
          emoji: "🚐",
          titulo: "Embarque por la mañana",
          texto:
            "Te recogemos en el hotel en João Pessoa. Horario ajustado para llegar a Porto de Galinhas con tiempo de aprovechar.",
        },
        {
          emoji: "🛣️",
          titulo: "Viaje João Pessoa → Porto de Galinhas",
          texto:
            "Cerca de 2h30 de viaje en vehículo cómodo, con parada para baño/refrigerio. Documento con foto obligatorio (interestatal PB → PE).",
        },
        {
          emoji: "🏖️",
          titulo: "Llegada a Porto de Galinhas",
          texto:
            "Tiempo libre en el pueblo y en la playa. Tiendas, restaurantes, ambiente turístico organizado.",
        },
        {
          emoji: "⛵",
          titulo: "Piscinas naturales (opcional)",
          texto:
            "Jangadas llevan turistas a las piscinas a pocos metros de la playa — agua verde-cristalina, corales y peces. Pago de la jangada en el lugar.",
        },
        {
          emoji: "🍽️",
          titulo: "Almuerzo y tiempo libre (no incluido)",
          texto:
            "Varias opciones de restaurantes en el pueblo. El guía indica las mejores para tu perfil.",
        },
        {
          emoji: "🚐",
          titulo: "Regreso por la noche",
          texto:
            "Combinamos el horario de embarque para regresar a João Pessoa por la noche, con llegada al hotel.",
        },
      ],
      rotario: [
        "Salida de João Pessoa por la mañana",
        "Viaje ~2h30 (parada técnica en el camino)",
        "Tiempo libre en Porto de Galinhas (pueblo + playa)",
        "Piscinas naturales por jangada (opcional, aparte)",
        "Almuerzo (no incluido)",
        "Regreso a João Pessoa por la noche",
      ],
      incluso: [
        "Transporte ida y vuelta (João Pessoa ↔ Porto de Galinhas) en vehículo cómodo",
        "Conductor acreditado",
        "Orientación y atención (Murillo o equipo)",
      ],
      naoIncluso: [
        "Comidas (almuerzo, bebidas, refrigerios)",
        "Jangada para las piscinas naturales (pagar en el lugar)",
        "Compras y actividades extras en el pueblo",
        "Peajes y tasas locales (cuando aplique)",
      ],
      observacoes:
        "Documento con foto obligatorio (viaje interestatal PB → PE). Salida sujeta a número mínimo de pasajeros — consulta disponibilidad. Regreso por la noche.",
      nomeCurto: "Porto de Galinhas",
      idealPara: [
        "Quien quiere conocer Porto de Galinhas sin cambiar de alojamiento",
        "Familias",
        "Parejas",
        "Bate-y-vuelta organizado",
      ],
      faq: [
        {
          pergunta: "¿Qué incluye R$ 160?",
          resposta:
            "Transporte ida y vuelta (João Pessoa ↔ Porto de Galinhas) en vehículo cómodo, con conductor acreditado y orientación. Comidas, jangada para las piscinas y peajes por cuenta del visitante.",
        },
        {
          pergunta: "¿Necesito documento?",
          resposta:
            "Sí. Documento con foto obligatorio — viaje interestatal entre Paraíba y Pernambuco. Trae RG, licencia de conducir o pasaporte.",
        },
        {
          pergunta: "¿Cuánto cuesta la jangada a las piscinas naturales?",
          resposta:
            "El valor de la jangada se paga directamente a los jangaderos en Porto de Galinhas. El precio varía según la temporada y el tamaño del grupo. Consulta al llegar.",
        },
        {
          pergunta: "¿Pagan los niños?",
          resposta:
            "Menores de 5 años: gratis. De 5 a 11 años: R$ 128. Desde 12 años: tarifa adulta. Los niños deben estar acompañados por un responsable.",
        },
        {
          pergunta: "¿Cuánto dura el viaje de ida?",
          resposta:
            "Cerca de 2h30 a 3h, con parada para baño y refrigerio. El regreso es por la noche, generalmente tras el atardecer.",
        },
        {
          pergunta: "¿Hay opciones para almorzar en Porto de Galinhas?",
          resposta:
            "Sí. El pueblo tiene decenas de restaurantes — de comida regional a internacional. El guía indica opciones para tu perfil. La alimentación no está incluida.",
        },
        {
          pergunta: "¿Cuál es la política de cancelación?",
          resposta:
            "Con aviso de 24h, reprogramamos sin costo. Cancelaciones del cliente: consulta la política completa por WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Documento con foto (obligatorio)",
          "Traje de baño (úsalo debajo de la ropa)",
          "Toalla",
          "Protector solar biodegradable",
          "Gorro o gorra",
          "Cámara",
          "Dinero en efectivo y tarjeta (jangada, almuerzo, compras)",
        ],
        pontoEncontro:
          "Te recogemos en el hotel en João Pessoa, en regiones atendidas (Tambaú, Cabo Branco, Manaíra, Bessa). Confirmamos el punto y horario exactos en el voucher.",
        horario:
          "Salida por la mañana (horario confirmado por WhatsApp). Regreso por la noche al hotel.",
      },
    },
  },

  "praia-de-pipa": {
    en: {
      nome: "Praia de Pipa — Rio Grande do Norte",
      preco: "R$ 160",
      duracao: "Full day",
      saida: "Morning departure · Time confirmed on WhatsApp",
      h1: "Praia de Pipa from João Pessoa — Day Trip to Tibau do Sul, RN",
      metaDescription:
        "Day trip from João Pessoa to Praia de Pipa (RN): Praia do Amor, Praia do Moleque, charming village and viewpoints over the Atlantic. R$ 160. Book on WhatsApp!",
      subtituloHero:
        "Morning departure, night return. Round-trip João Pessoa → Pipa → João Pessoa for a full day in the Northeast's most charming destination.",
      descricao:
        "Cinematic scenery, paradise beaches, charming village — the trendiest destination in the Northeast.",
      lead:
        "Want to visit Pipa in a day, without changing hotels?\n\nWe run the day trip to Praia de Pipa (Tibau do Sul, RN) from João Pessoa, leaving in the morning. It's about a 2h drive in a comfortable vehicle. You get a full day to enjoy Praia do Amor, Praia do Moleque, viewpoints over the Atlantic and the village with restaurants, shops and nightlife.\n\nPhoto ID is required (interstate trip PB → RN). Meals are not included.",
      descricaoSensorial:
        "The van picks you up at the hotel in the morning (time confirmed on WhatsApp). The route to Pipa passes through coastal roads with beautiful scenery. Within a short time you arrive at the village.\n\nPipa is a charming village, with cobblestone streets, colorful façades and people from all over the world. The main beach is busy, but the surrounding ones — Amor, Moleque, Madeiro — are paradise. Colorful cliffs dropping into the sea, surf waves, dolphins occasionally near the shore, viewpoints over the Atlantic.\n\nFree time your way: walking the village, lunching with a view, swimming at paradise beaches, forgetting the world. Before return, we agree on the point and time. At night, transport back to João Pessoa.",
      roteiroNarrativo: [
        {
          emoji: "🚐",
          titulo: "Morning pick-up",
          texto:
            "We pick you up at your hotel in João Pessoa. Time set to reach Pipa with plenty of day to enjoy.",
        },
        {
          emoji: "🛣️",
          titulo: "Drive João Pessoa → Pipa",
          texto:
            "About 2h in a comfortable vehicle along coastal roads. Photo ID mandatory (interstate PB → RN).",
        },
        {
          emoji: "🏖️",
          titulo: "Arrival in Pipa",
          texto:
            "Free time in the village and on the beaches. Praia do Amor, Praia do Moleque, Atlantic viewpoints.",
        },
        {
          emoji: "🐬",
          titulo: "Paradise beaches",
          texto:
            "Swim at the most beautiful beaches in RN. On some days, you can spot dolphins near the shore.",
        },
        {
          emoji: "🍽️",
          titulo: "Lunch and village time (not included)",
          texto:
            "Restaurants with sea view, regional or international food. Shops, charming village life.",
        },
        {
          emoji: "🚐",
          titulo: "Night return",
          texto:
            "We agree boarding time for the return to João Pessoa at night, with drop-off at the hotel.",
        },
      ],
      rotario: [
        "Morning departure from João Pessoa",
        "~2h drive (coastal roads)",
        "Free time in Pipa (village + beaches)",
        "Visit to Praia do Amor and Praia do Moleque",
        "Atlantic viewpoints",
        "Lunch (not included)",
        "Night return to João Pessoa",
      ],
      incluso: [
        "Round-trip transport (João Pessoa ↔ Pipa) in a comfortable vehicle",
        "Accredited driver",
        "Support and guidance (Murillo or team)",
      ],
      naoIncluso: [
        "Meals (lunch, drinks, snacks)",
        "Boat tours and water activities in Pipa (pay on-site)",
        "Village purchases",
        "Tolls and local fees (when applicable)",
      ],
      observacoes:
        "Photo ID mandatory (interstate trip PB → RN). Departure subject to minimum passengers. Night return.",
      nomeCurto: "Pipa",
      idealPara: [
        "Travelers seeking beautiful beaches and a lively village",
        "Couples",
        "Friends",
        "Cultural and beach day trip",
      ],
      faq: [
        {
          pergunta: "What's included in R$ 160?",
          resposta:
            "Round-trip transport (João Pessoa ↔ Pipa) in a comfortable vehicle, with accredited driver and guidance. Meals, boat tours and purchases are at your expense.",
        },
        {
          pergunta: "Do I need ID?",
          resposta:
            "Yes. Photo ID required — interstate trip between Paraíba and Rio Grande do Norte. Bring RG, driver's license or passport.",
        },
        {
          pergunta: "Do children pay?",
          resposta:
            "Under 5 years old: free. 5 to 11 years old: R$ 128. From 12 years old: adult rate. Children must be accompanied by a responsible adult.",
        },
        {
          pergunta: "How long does the drive take?",
          resposta:
            "About 2h from João Pessoa to Pipa. Return at night, with hotel drop-off after sunset.",
        },
        {
          pergunta: "Can I see dolphins?",
          resposta:
            "On some days, yes. Dolphins appear more often at Praia do Madeiro and in open sea. To increase your chances, we recommend a paid local boat tour (extra).",
        },
        {
          pergunta: "Which beach is best for swimming in Pipa?",
          resposta:
            "Praia do Amor and Praia do Madeiro are the most paradise-like. Praia do Moleque is livelier. The Central Beach is great to combine with restaurants and shops.",
        },
        {
          pergunta: "What's the cancellation policy?",
          resposta:
            "With 24h advance notice, we reschedule at no cost. Customer cancellations: see the full policy on WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Photo ID (mandatory)",
          "Swimsuit (wear it under your clothes)",
          "Towel",
          "Biodegradable sunscreen",
          "Hat or cap",
          "Camera",
          "Comfortable sneakers for the village (cobblestone streets)",
          "Cash and card",
        ],
        pontoEncontro:
          "We pick you up at your hotel in João Pessoa in covered areas (Tambaú, Cabo Branco, Manaíra, Bessa). Exact point and time in the voucher.",
        horario:
          "Morning departure (time confirmed on WhatsApp). Night return to the hotel.",
      },
    },
    es: {
      nome: "Playa de Pipa — Rio Grande do Norte",
      preco: "R$ 160",
      duracao: "Día entero",
      saida: "Salida por la mañana · Horario confirmado por WhatsApp",
      h1: "Playa de Pipa desde João Pessoa — Bate-y-vuelta a Tibau do Sul, RN",
      metaDescription:
        "Bate-y-vuelta de João Pessoa a Playa de Pipa (RN): Playa del Amor, Playa do Moleque, pueblo encantador y miradores con vista al Atlántico. R$ 160. Reserva por WhatsApp!",
      subtituloHero:
        "Salida por la mañana, regreso de noche. Transporte João Pessoa → Pipa → João Pessoa para disfrutar un día entero en el destino más encantador del Nordeste.",
      descricao:
        "Paisajes cinematográficos, playas paradisíacas, pueblo encantador — el destino más cool del Nordeste.",
      lead:
        "¿Quieres conocer Pipa en un día, sin cambiar de hotel?\n\nHacemos el bate-y-vuelta a Playa de Pipa (Tibau do Sul, RN) saliendo de João Pessoa por la mañana. Son aproximadamente 2h de viaje en vehículo cómodo. Ganas un día entero para disfrutar la Playa del Amor, la Playa do Moleque, miradores con vista al Atlántico y el pueblo con restaurantes, tienditas y vida nocturna.\n\nDocumento con foto obligatorio (viaje interestatal PB → RN). Comidas no incluidas.",
      descricaoSensorial:
        "La van te recoge en el hotel por la mañana (horario confirmado por WhatsApp). El trayecto hasta Pipa pasa por carreteras costeras con paisajes hermosos. En poco tiempo llegas al pueblo.\n\nPipa es un pueblo encantador, con calles de piedra, fachadas coloridas y gente de todo el mundo. La playa central es animada, pero las vecinas — Amor, Moleque, Madeiro — son paraíso. Acantilados de colores cayendo en el mar, olas para surf, delfines que a veces aparecen cerca de la costa, miradores con vista al Atlántico.\n\nTiempo libre a tu manera: caminar por el pueblo, almorzar con vista, baño de mar en playas paradisíacas, olvidarte del mundo. Antes del regreso, combinamos el punto y horario. Por la noche, transporte de vuelta a João Pessoa.",
      roteiroNarrativo: [
        {
          emoji: "🚐",
          titulo: "Embarque por la mañana",
          texto:
            "Te recogemos en el hotel en João Pessoa. Horario ajustado para llegar a Pipa con tiempo libre para aprovechar.",
        },
        {
          emoji: "🛣️",
          titulo: "Viaje João Pessoa → Pipa",
          texto:
            "Cerca de 2h de viaje en vehículo cómodo, con paisaje costero. Documento con foto obligatorio (interestatal PB → RN).",
        },
        {
          emoji: "🏖️",
          titulo: "Llegada a Pipa",
          texto:
            "Tiempo libre en el pueblo y en las playas. Playa del Amor, Playa do Moleque, miradores del Atlántico.",
        },
        {
          emoji: "🐬",
          titulo: "Playas paradisíacas",
          texto:
            "Baño en las playas más hermosas de RN. En algunos días, se pueden ver delfines cerca de la costa.",
        },
        {
          emoji: "🍽️",
          titulo: "Almuerzo y tiempo en el pueblo (no incluido)",
          texto:
            "Restaurantes con vista al mar, comida regional o internacional. Tiendas, vida encantadora de pueblo.",
        },
        {
          emoji: "🚐",
          titulo: "Regreso por la noche",
          texto:
            "Combinamos el horario de embarque para regresar a João Pessoa por la noche, con llegada al hotel.",
        },
      ],
      rotario: [
        "Salida de João Pessoa por la mañana",
        "Viaje ~2h (carreteras costeras)",
        "Tiempo libre en Pipa (pueblo + playas)",
        "Visita a la Playa del Amor y la Playa do Moleque",
        "Miradores con vista al Atlántico",
        "Almuerzo (no incluido)",
        "Regreso a João Pessoa por la noche",
      ],
      incluso: [
        "Transporte ida y vuelta (João Pessoa ↔ Pipa) en vehículo cómodo",
        "Conductor acreditado",
        "Orientación y atención (Murillo o equipo)",
      ],
      naoIncluso: [
        "Comidas (almuerzo, bebidas, refrigerios)",
        "Paseos en barco y actividades náuticas en Pipa (pagar en el lugar)",
        "Compras en el pueblo",
        "Peajes y tasas locales (cuando aplique)",
      ],
      observacoes:
        "Documento con foto obligatorio (viaje interestatal PB → RN). Salida sujeta a número mínimo de pasajeros. Regreso por la noche.",
      nomeCurto: "Pipa",
      idealPara: [
        "Quien busca playas hermosas y pueblo animado",
        "Parejas",
        "Amigos",
        "Bate-y-vuelta cultural y de playa",
      ],
      faq: [
        {
          pergunta: "¿Qué incluye R$ 160?",
          resposta:
            "Transporte ida y vuelta (João Pessoa ↔ Pipa) en vehículo cómodo, conductor acreditado y orientación. Comidas, paseos náuticos y compras por cuenta del visitante.",
        },
        {
          pergunta: "¿Necesito documento?",
          resposta:
            "Sí. Documento con foto obligatorio — viaje interestatal entre Paraíba y Rio Grande do Norte. Trae RG, licencia de conducir o pasaporte.",
        },
        {
          pergunta: "¿Pagan los niños?",
          resposta:
            "Menores de 5 años: gratis. De 5 a 11 años: R$ 128. Desde 12 años: tarifa adulta. Los niños deben estar acompañados por un responsable.",
        },
        {
          pergunta: "¿Cuánto dura el viaje?",
          resposta:
            "Cerca de 2h de João Pessoa a Pipa. El regreso es por la noche, con llegada al hotel tras el atardecer.",
        },
        {
          pergunta: "¿Se pueden ver delfines?",
          resposta:
            "En algunos días, sí. Los delfines aparecen con más frecuencia en la Playa do Madeiro y en mar abierto. Para mayor chance, recomendamos pagar un paseo en barco en el lugar (aparte).",
        },
        {
          pergunta: "¿Qué playa es mejor para bañarse en Pipa?",
          resposta:
            "La Playa del Amor y la Playa do Madeiro son las más paradisíacas. La Playa do Moleque tiene más movimiento. La Playa Central del pueblo es buena para combinar con restaurantes y tiendas.",
        },
        {
          pergunta: "¿Cuál es la política de cancelación?",
          resposta:
            "Con aviso de 24h, reprogramamos sin costo. Cancelaciones del cliente: consulta la política completa por WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Documento con foto (obligatorio)",
          "Traje de baño (úsalo debajo de la ropa)",
          "Toalla",
          "Protector solar biodegradable",
          "Gorro o gorra",
          "Cámara",
          "Zapatillas cómodas para el pueblo (calles de piedra)",
          "Dinero en efectivo y tarjeta",
        ],
        pontoEncontro:
          "Te recogemos en el hotel en João Pessoa, en regiones atendidas (Tambaú, Cabo Branco, Manaíra, Bessa). Punto y horario exactos en el voucher.",
        horario:
          "Salida por la mañana (horario confirmado por WhatsApp). Regreso por la noche al hotel.",
      },
    },
  },

  "natal": {
    en: {
      nome: "Natal — Rio Grande do Norte",
      preco: "R$ 160",
      duracao: "Full day",
      saida: "Morning departure · Time confirmed on WhatsApp",
      h1: "Natal from João Pessoa — Pirangi Cashew Tree, Rockets and Ponta Negra",
      metaDescription:
        "Day trip from João Pessoa to Natal (RN): World's Largest Cashew Tree, Barreira do Inferno, Pirangi and Ponta Negra. R$ 160 with transport. Book on WhatsApp!",
      subtituloHero:
        "Morning departure, night return. Round-trip João Pessoa → Natal → João Pessoa in a comfortable vehicle for a full day of beaches and Potiguar history.",
      descricao:
        "World's largest cashew tree, Rocket Launch Center and the warm waters of Ponta Negra beach.",
      lead:
        "Want to visit the Potiguar capital in a day, without changing hotels?\n\nWe run the day trip to Natal from João Pessoa, leaving in the morning. It's about 3h in a comfortable vehicle. You get a full day to visit the World's Largest Cashew Tree (in Pirangi), the Barreira do Inferno Rocket Launch Center and the warm beaches of Pirangi and Ponta Negra — including Morro do Careca, the city's postcard.\n\nPhoto ID is required (interstate trip PB → RN). Meals are not included.",
      descricaoSensorial:
        "The van picks you up at the hotel in the morning (time confirmed on WhatsApp). The drive to Natal goes through quiet roads with northeastern scenery.\n\nAt Pirangi do Norte you visit the World's Largest Cashew Tree — a tree so big it covers nearly 9,000 m². Walking under it is a different experience. Then Barreira do Inferno: the Brazilian Air Force's Rocket Launch Center (exterior visit).\n\nThe afternoon is at the beaches. Pirangi has warm water and clear sand. Ponta Negra is the postcard — the Morro do Careca is the giant dune that shows up in every picture. Free time to swim, lunch (not included) and rest. Before return, we agree on the meeting point and time. At night, transport back to João Pessoa.",
      roteiroNarrativo: [
        {
          emoji: "🚐",
          titulo: "Morning pick-up",
          texto:
            "We pick you up at your hotel in João Pessoa. Time set to reach Natal with plenty of day to enjoy.",
        },
        {
          emoji: "🛣️",
          titulo: "Drive João Pessoa → Natal",
          texto:
            "About 3h in a comfortable vehicle, with a technical stop. Photo ID mandatory (interstate PB → RN).",
        },
        {
          emoji: "🌳",
          titulo: "World's Largest Cashew Tree (Pirangi)",
          texto:
            "Visit the giant cashew tree in Pirangi do Norte, with about 9,000 m² of canopy. Walk under the tree, photos, lookout.",
        },
        {
          emoji: "🚀",
          titulo: "Barreira do Inferno Rocket Launch Center",
          texto:
            "Pass by the Brazilian Air Force's Rocket Launch Center (exterior visit, no entry).",
        },
        {
          emoji: "🏖️",
          titulo: "Pirangi and Ponta Negra beaches",
          texto:
            "Time on the warm beaches of Pirangi and Ponta Negra, with the Morro do Careca view — Natal's postcard.",
        },
        {
          emoji: "🍽️",
          titulo: "Free lunch (not included)",
          texto:
            "Restaurants in Ponta Negra with regional food and sea view.",
        },
        {
          emoji: "🚐",
          titulo: "Night return",
          texto:
            "We agree boarding time for the return to João Pessoa at night, with drop-off at the hotel.",
        },
      ],
      rotario: [
        "Morning departure from João Pessoa",
        "~3h drive (with technical stop)",
        "World's Largest Cashew Tree in Pirangi",
        "Barreira do Inferno Rocket Launch Center",
        "Pirangi and Ponta Negra beaches (Morro do Careca)",
        "Lunch (not included)",
        "Night return to João Pessoa",
      ],
      incluso: [
        "Round-trip transport (João Pessoa ↔ Natal) in a comfortable vehicle",
        "Accredited driver",
        "Support and guidance (Murillo or team)",
      ],
      naoIncluso: [
        "Meals (lunch, drinks, snacks)",
        "Entry fees at attractions that charge admission (when applicable)",
        "Purchases",
        "Tolls and local fees (when applicable)",
      ],
      observacoes:
        "Photo ID mandatory (interstate trip PB → RN). Departure subject to minimum passengers. Night return.",
      nomeCurto: "Natal",
      idealPara: [
        "Travelers who want to visit Natal from João Pessoa",
        "Families",
        "Couples",
        "Curious about history and science (cashew tree + rockets)",
      ],
      faq: [
        {
          pergunta: "What's included in R$ 160?",
          resposta:
            "Round-trip transport (João Pessoa ↔ Natal) in a comfortable vehicle, with accredited driver and guidance. Meals, entry fees and purchases are at your expense.",
        },
        {
          pergunta: "Do I need ID?",
          resposta:
            "Yes. Photo ID required — interstate trip between Paraíba and Rio Grande do Norte. Bring RG, driver's license or passport.",
        },
        {
          pergunta: "Do children pay?",
          resposta:
            "Under 5 years old: free. 5 to 11 years old: R$ 128. From 12 years old: adult rate. Children must be accompanied by a responsible adult.",
        },
        {
          pergunta: "How long does the drive take?",
          resposta:
            "About 3h from João Pessoa to Natal. Return at night, with hotel drop-off after sunset.",
        },
        {
          pergunta: "Can I go inside the cashew tree?",
          resposta:
            "Yes. The World's Largest Cashew Tree has a paid entrance (not included in the tour price). Well worth it — walking under a single tree covering 9,000 m² is a unique experience.",
        },
        {
          pergunta: "Can I enter Barreira do Inferno?",
          resposta:
            "The Barreira do Inferno visit (Air Force Rocket Launch Center) is from the outside in this tour. Internal visits require prior scheduling with the Air Force — not included.",
        },
        {
          pergunta: "What's the cancellation policy?",
          resposta:
            "With 24h advance notice, we reschedule at no cost. Customer cancellations: see the full policy on WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Photo ID (mandatory)",
          "Swimsuit (wear it under your clothes)",
          "Towel",
          "Biodegradable sunscreen",
          "Hat or cap",
          "Camera",
          "Comfortable sneakers",
          "Cash and card",
        ],
        pontoEncontro:
          "We pick you up at your hotel in João Pessoa in covered areas (Tambaú, Cabo Branco, Manaíra, Bessa). Exact point and time in the voucher.",
        horario:
          "Morning departure (time confirmed on WhatsApp). Night return to the hotel.",
      },
    },
    es: {
      nome: "Natal — Rio Grande do Norte",
      preco: "R$ 160",
      duracao: "Día entero",
      saida: "Salida por la mañana · Horario confirmado por WhatsApp",
      h1: "Natal desde João Pessoa — Cajueiro de Pirangi, Cohetes y Ponta Negra",
      metaDescription:
        "Bate-y-vuelta de João Pessoa a Natal (RN): Mayor Cajueiro del Mundo, Barreira do Inferno, Pirangi y Ponta Negra. R$ 160 con transporte. Reserva por WhatsApp!",
      subtituloHero:
        "Salida por la mañana, regreso de noche. Transporte João Pessoa → Natal → João Pessoa en vehículo cómodo para un día entero de playas e historia potiguar.",
      descricao:
        "El cajueiro más grande del mundo, Centro de Lanzamiento de Cohetes y las playas tibias de Ponta Negra.",
      lead:
        "¿Quieres conocer la capital potiguar en un día, sin cambiar de hotel?\n\nHacemos el bate-y-vuelta a Natal saliendo de João Pessoa por la mañana. Son aproximadamente 3h de viaje en vehículo cómodo. Ganas un día entero para conocer el Mayor Cajueiro del Mundo (en Pirangi), el Centro de Lanzamiento de la Barreira do Inferno y las playas tibias de Pirangi y Ponta Negra — incluido el Morro do Careca, postal de la ciudad.\n\nDocumento con foto obligatorio (viaje interestatal PB → RN). Comidas no incluidas.",
      descricaoSensorial:
        "La van te recoge en el hotel por la mañana (horario confirmado por WhatsApp). El trayecto a Natal pasa por carreteras tranquilas, con paisaje nordestino.\n\nEn Pirangi do Norte visitas el Mayor Cajueiro del Mundo — un árbol tan grande que cubre casi 9.000 m². Caminar debajo es una experiencia diferente. Después, la Barreira do Inferno: Centro de Lanzamiento de Cohetes de la Fuerza Aérea Brasileña (visita externa).\n\nLa tarde es en las playas. Pirangi tiene agua tibia y arena clara. Ponta Negra es la postal — el Morro do Careca es la duna gigante que aparece en todas las fotos. Tiempo libre para bañarte, almorzar (no incluido) y descansar. Antes del regreso, combinamos el punto y horario. Por la noche, transporte de vuelta a João Pessoa.",
      roteiroNarrativo: [
        {
          emoji: "🚐",
          titulo: "Embarque por la mañana",
          texto:
            "Te recogemos en el hotel en João Pessoa. Horario ajustado para llegar a Natal con tiempo de aprovechar.",
        },
        {
          emoji: "🛣️",
          titulo: "Viaje João Pessoa → Natal",
          texto:
            "Cerca de 3h de viaje en vehículo cómodo, con parada técnica. Documento con foto obligatorio (interestatal PB → RN).",
        },
        {
          emoji: "🌳",
          titulo: "Mayor Cajueiro del Mundo (Pirangi)",
          texto:
            "Visita al cajueiro gigante en Pirangi do Norte, con cerca de 9.000 m² de copa. Caminata debajo del árbol, fotos, mirador.",
        },
        {
          emoji: "🚀",
          titulo: "Centro de Lanzamiento Barreira do Inferno",
          texto:
            "Paso por el Centro de Lanzamiento de Cohetes de la Fuerza Aérea Brasileña (visita externa, sin entrada).",
        },
        {
          emoji: "🏖️",
          titulo: "Playas de Pirangi y Ponta Negra",
          texto:
            "Tiempo en las playas tibias de Pirangi y Ponta Negra, con vista del Morro do Careca — postal de Natal.",
        },
        {
          emoji: "🍽️",
          titulo: "Almuerzo libre (no incluido)",
          texto:
            "Restaurantes en Ponta Negra con comida regional y vista al mar.",
        },
        {
          emoji: "🚐",
          titulo: "Regreso por la noche",
          texto:
            "Combinamos el horario de embarque para regresar a João Pessoa por la noche, con llegada al hotel.",
        },
      ],
      rotario: [
        "Salida de João Pessoa por la mañana",
        "Viaje ~3h (con parada técnica)",
        "Mayor Cajueiro del Mundo en Pirangi",
        "Centro de Lanzamiento Barreira do Inferno",
        "Playa de Pirangi y Playa de Ponta Negra (Morro do Careca)",
        "Almuerzo (no incluido)",
        "Regreso a João Pessoa por la noche",
      ],
      incluso: [
        "Transporte ida y vuelta (João Pessoa ↔ Natal) en vehículo cómodo",
        "Conductor acreditado",
        "Orientación y atención (Murillo o equipo)",
      ],
      naoIncluso: [
        "Comidas (almuerzo, bebidas, refrigerios)",
        "Entradas a atracciones con cobro (cuando aplique)",
        "Compras",
        "Peajes y tasas locales (cuando aplique)",
      ],
      observacoes:
        "Documento con foto obligatorio (viaje interestatal PB → RN). Salida sujeta a número mínimo de pasajeros. Regreso por la noche.",
      nomeCurto: "Natal",
      idealPara: [
        "Quien quiere conocer Natal desde João Pessoa",
        "Familias",
        "Parejas",
        "Curiosos por historia y ciencia (cajueiro + cohetes)",
      ],
      faq: [
        {
          pergunta: "¿Qué incluye R$ 160?",
          resposta:
            "Transporte ida y vuelta (João Pessoa ↔ Natal) en vehículo cómodo, conductor acreditado y orientación. Comidas, entradas y compras por cuenta del visitante.",
        },
        {
          pergunta: "¿Necesito documento?",
          resposta:
            "Sí. Documento con foto obligatorio — viaje interestatal entre Paraíba y Rio Grande do Norte. Trae RG, licencia de conducir o pasaporte.",
        },
        {
          pergunta: "¿Pagan los niños?",
          resposta:
            "Menores de 5 años: gratis. De 5 a 11 años: R$ 128. Desde 12 años: tarifa adulta. Los niños deben estar acompañados por un responsable.",
        },
        {
          pergunta: "¿Cuánto dura el viaje?",
          resposta:
            "Cerca de 3h de João Pessoa a Natal. El regreso es por la noche, con llegada al hotel tras el atardecer.",
        },
        {
          pergunta: "¿Se puede entrar en el cajueiro?",
          resposta:
            "Sí. El Mayor Cajueiro del Mundo tiene entrada paga (no incluida en el valor del tour). Vale mucho la visita — caminar bajo un único árbol que cubre 9.000 m² es una experiencia única.",
        },
        {
          pergunta: "¿Se puede entrar en la Barreira do Inferno?",
          resposta:
            "La visita a la Barreira do Inferno (Centro de Lanzamiento de Cohetes de la FAB) es externa en este tour. Para visita interna, es necesario agendamiento previo con la Fuerza Aérea — no incluido.",
        },
        {
          pergunta: "¿Cuál es la política de cancelación?",
          resposta:
            "Con aviso de 24h, reprogramamos sin costo. Cancelaciones del cliente: consulta la política completa por WhatsApp.",
        },
      ],
      informacoesPraticas: {
        oqueLevar: [
          "Documento con foto (obligatorio)",
          "Traje de baño (úsalo debajo de la ropa)",
          "Toalla",
          "Protector solar biodegradable",
          "Gorro o gorra",
          "Cámara",
          "Zapatillas cómodas",
          "Dinero en efectivo y tarjeta",
        ],
        pontoEncontro:
          "Te recogemos en el hotel en João Pessoa, en regiones atendidas (Tambaú, Cabo Branco, Manaíra, Bessa). Punto y horario exactos en el voucher.",
        horario:
          "Salida por la mañana (horario confirmado por WhatsApp). Regreso por la noche al hotel.",
      },
    },
  },
};
