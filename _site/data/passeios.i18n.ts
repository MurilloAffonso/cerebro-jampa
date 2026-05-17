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
        { src: "/images/passeios/litoral-sul/roteiro-classico/hero-01.jpg", alt: "Aerial view of Paraíba's south coast with beaches and reefs" },
        { src: "/images/passeios/litoral-sul/roteiro-classico/galeria-01.jpg", alt: "Drone view of Coqueirinho Beach, Paraíba south coast" },
        { src: "/images/passeios/litoral-sul/roteiro-classico/galeria-02.jpg", alt: "Beach on João Pessoa's south coast" },
        { src: "/images/passeios/litoral-sul/roteiro-classico/galeria-03.jpg", alt: "Paraíba's south coast landscape" },
        { src: "/images/passeios/litoral-sul/roteiro-classico/galeria-04.jpg", alt: "Beaches and cliffs of Paraíba's south coast" },
        { src: "/images/passeios/litoral-sul/roteiro-classico/galeria-05.jpg", alt: "João Pessoa's south coast — one-day tour" },
      ],
      imagemAlt:
        "Colorful cliffs and coconut trees on Coqueirinho Beach, João Pessoa's south coast",
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
        { src: "/images/passeios/litoral-sul/roteiro-classico/hero-01.jpg", alt: "Vista aérea del litoral sur de Paraíba con playas y arrecifes" },
        { src: "/images/passeios/litoral-sul/roteiro-classico/galeria-01.jpg", alt: "Vista drone de la Playa de Coqueirinho, litoral sur de Paraíba" },
        { src: "/images/passeios/litoral-sul/roteiro-classico/galeria-02.jpg", alt: "Playa del litoral sur de João Pessoa" },
        { src: "/images/passeios/litoral-sul/roteiro-classico/galeria-03.jpg", alt: "Paisaje del litoral sur de Paraíba" },
        { src: "/images/passeios/litoral-sul/roteiro-classico/galeria-04.jpg", alt: "Playas y acantilados del litoral sur de Paraíba" },
        { src: "/images/passeios/litoral-sul/roteiro-classico/galeria-05.jpg", alt: "Litoral sur de João Pessoa — tour de un día" },
      ],
      imagemAlt:
        "Acantilados de colores y cocoteros en la Playa de Coqueirinho, litoral sur de João Pessoa",
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
      descricao:
        "Paradise beaches in the morning + ATV trail through Coqueirinho's historic viewpoints.",
      incluso: [
        "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Guide",
        "ATV (when booked)",
      ],
      naoIncluso: ["Meals"],
      observacoes:
        "ATV: minimum 7 years old, maximum 2 people per machine. Private rate: on request.",
      idealPara: ["Adventure seekers", "Couples", "Families with kids 7+"],
      imagemAlt: "ATV trail through the viewpoints of Coqueirinho, Paraíba's south coast",
      faq: [
        {
          pergunta: "Can I do the tour without the ATV?",
          resposta:
            "Yes. Without ATV: R$ 150 per person. The beach route is the same.",
        },
        {
          pergunta: "Can children ride the ATV?",
          resposta:
            "From 7 years old. Younger children can join the beach tour but cannot operate the ATV.",
        },
      ],
    },
    es: {
      nome: "Combo Jampa — Litoral Sur con Cuatriciclo",
      preco: "Sin cuatri: R$ 150 / Cuatri individual: R$ 240 / Cuatri doble: R$ 310",
      duracao: "~8h (trail 1h30–2h)",
      saida: "8h–9h",
      descricao:
        "Playas paradisíacas por la mañana + trail en cuatriciclo por los miradores históricos de Coqueirinho.",
      incluso: [
        "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Guía",
        "Cuatriciclo (cuando se contrata)",
      ],
      naoIncluso: ["Comidas"],
      observacoes:
        "Cuatriciclo: mínimo 7 años, máximo 2 personas por máquina. Valor privativo: consultar.",
      idealPara: ["Aventureros", "Parejas", "Familias con niños 7+"],
      imagemAlt: "Trail en cuatriciclo por los miradores de Coqueirinho, Litoral Sur de Paraíba",
      faq: [
        {
          pergunta: "¿Puedo hacer el tour sin el cuatriciclo?",
          resposta:
            "Sí. Sin cuatri: R$ 150 por persona. El recorrido de playas es el mismo.",
        },
        {
          pergunta: "¿Pueden los niños usar el cuatriciclo?",
          resposta:
            "Desde 7 años. Los menores pueden ir al tour de playas pero no operan el cuatriciclo.",
        },
      ],
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
      descricao:
        "Nature, colonial history and Brazil's most moving sunset to the sound of Ravel's Bolero.",
      incluso: ["Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)", "Guide"],
      naoIncluso: [
        "Meals",
        "Jacaré Sunset catamaran (optional — R$ 90)",
      ],
      observacoes:
        "Private rate: on request. Return after sunset.",
      idealPara: [
        "All types of travelers",
        "Lovers of history and culture",
        "Couples",
      ],
      imagemAlt: "João Pessoa's north coast with colonial history and nature",
      faq: [
        {
          pergunta: "Is the Jacaré Sunset included?",
          resposta:
            "No. It's an optional add-on (R$ 90 per person). We recommend adding it — it's a unique experience.",
        },
        {
          pergunta: "Can children come?",
          resposta:
            "Yes. Under 5 years old: free. 5 to 11 years old: R$ 64. From 12 years old: adult rate.",
        },
      ],
    },
    es: {
      nome: "Litoral Norte — Itinerario Clásico",
      preco: "R$ 80",
      duracao: "~8h",
      saida: "Mañana",
      descricao:
        "Naturaleza, historia colonial y el atardecer más emocionante de Brasil al son del Bolero de Ravel.",
      incluso: ["Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)", "Guía"],
      naoIncluso: [
        "Comidas",
        "Catamarán Atardecer del Jacaré (opcional — R$ 90)",
      ],
      observacoes:
        "Valor privativo: consultar. Retorno tras el atardecer.",
      idealPara: [
        "Todo tipo de viajeros",
        "Amantes de historia y cultura",
        "Parejas",
      ],
      imagemAlt: "Litoral norte de João Pessoa con historia colonial y naturaleza",
      faq: [
        {
          pergunta: "¿Está incluido el Atardecer del Jacaré?",
          resposta:
            "No. Es un opcional aparte (R$ 90 por persona). Recomendamos agregarlo — es una experiencia única.",
        },
        {
          pergunta: "¿Pueden ir niños?",
          resposta:
            "Sí. Menores de 5 años: gratis. De 5 a 11 años: R$ 64. Desde 12 años: tarifa adulta.",
        },
      ],
    },
  },

  "combo-litoral-norte-areia-vermelha": {
    en: {
      nome: "North Coast Combo with Areia Vermelha",
      preco: "With catamaran: R$ 160 / Without catamaran: R$ 80",
      duracao: "~8h",
      saida: "Morning · Confirmed according to the tide table",
      descricao:
        "Historical landmarks of the north coast + catamaran to Areia Vermelha Island with natural pools and sunset.",
      incluso: [
        "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Guide",
        "Areia Vermelha catamaran (when booked)",
      ],
      naoIncluso: ["Meals"],
      observacoes:
        "Areia Vermelha: depends on low tide. Departure time confirmed in advance.",
      idealPara: ["Anyone who wants north coast + natural pools in one day"],
      imagemAlt: "North Coast Combo with Areia Vermelha — João Pessoa",
      faq: [
        {
          pergunta: "Can I do it without the catamaran?",
          resposta:
            "Yes. Without catamaran: R$ 80. With Areia Vermelha catamaran: R$ 160.",
        },
        {
          pergunta: "Do children pay for the catamaran?",
          resposta:
            "5 to 11 years old: R$ 128 (with catamaran) or R$ 64 (without). Under 5 years old: free.",
        },
      ],
    },
    es: {
      nome: "Combo Litoral Norte con Areia Vermelha",
      preco: "Con catamarán: R$ 160 / Sin catamarán: R$ 80",
      duracao: "~8h",
      saida: "Mañana · Confirmado según la tabla de mareas",
      descricao:
        "Puntos históricos del litoral norte + catamarán hasta la Isla de Areia Vermelha con piscinas naturales y atardecer.",
      incluso: [
        "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Guía",
        "Catamarán Areia Vermelha (cuando se contrata)",
      ],
      naoIncluso: ["Comidas"],
      observacoes:
        "Areia Vermelha: depende de marea baja. Horario de salida confirmado antes.",
      idealPara: ["Quien quiere litoral norte + piscinas naturales en un día"],
      imagemAlt: "Combo Litoral Norte con Areia Vermelha — João Pessoa",
      faq: [
        {
          pergunta: "¿Puedo hacerlo sin el catamarán?",
          resposta:
            "Sí. Sin catamarán: R$ 80. Con catamarán Areia Vermelha: R$ 160.",
        },
        {
          pergunta: "¿Pagan los niños en el catamarán?",
          resposta:
            "De 5 a 11 años: R$ 128 (con catamarán) o R$ 64 (sin). Menores de 5 años: gratis.",
        },
      ],
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
      descricao:
        "Sailing on the Paraíba River with a live performance of Ravel's Bolero. A unique experience that's existed for over 20 years.",
      descricaoLonga:
        "Sunset at Jacaré is a must-stop in João Pessoa. Sailing on the Paraíba River with live music (Bolero de Ravel on sax), forró dancing, violin. A one-of-a-kind experience.",
      rotario: [
        "Boarding at Praia do Jacaré, Cabedelo",
        "Sailing on the Paraíba River with historical commentary",
        "Belle Soares violin performance",
        "Forró pé de serra dance with cangaceiros",
        "Jurandy do Sax playing Ravel's Bolero live",
        "Return at dusk",
      ],
      incluso: [
        "Catamaran with full structure (onboard bar, restroom, sound system)",
        "Musical performances (Ravel's Bolero, forró)",
        "Historical info about the Paraíba River",
      ],
      naoIncluso: ["Meals"],
      observacoes:
        "Daily afternoon departure. Time varies by season — confirm on WhatsApp. Transfer to Jacaré: on request.",
      idealPara: ["Romance", "Sunset", "Live music", "Unique cultural experience"],
      imagemAlt: "Sunset at Jacaré with live Ravel's Bolero in João Pessoa",
      faq: [
        {
          pergunta: "Does Ravel's Bolero always play?",
          resposta:
            "Yes. Jurandy do Sax plays daily. It's the signature of the tour.",
        },
        {
          pergunta: "What time does the catamaran depart?",
          resposta:
            "Departure follows the sunset — varies by season. Ask Murillo for the exact time.",
        },
        {
          pergunta: "Can children come?",
          resposta:
            "Yes. Under 5 years old: free. 5 to 11 years old: R$ 72. From 12 years old: adult rate.",
        },
      ],
    },
    es: {
      nome: "Atardecer del Jacaré — Catamarán",
      preco: "R$ 90",
      duracao: "~1h30",
      saida: "Tarde · Horario varía según la estación",
      descricao:
        "Navegación por el Río Paraíba con presentación en vivo del Bolero de Ravel. Experiencia única que existe hace más de 20 años.",
      descricaoLonga:
        "El atardecer del Jacaré es una parada obligatoria en João Pessoa. Navegación por el Río Paraíba al son de música en vivo (Bolero de Ravel al sax), baile de forró, violín. Una experiencia única en el mundo.",
      rotario: [
        "Embarque en la Praia do Jacaré, Cabedelo",
        "Navegación por el Río Paraíba con información histórica",
        "Presentación de Belle Soares al violín",
        "Baile de forró pé de serra con cangaceiros",
        "Jurandy do Sax tocando el Bolero de Ravel en vivo",
        "Retorno al atardecer",
      ],
      incluso: [
        "Catamarán con estructura (bar a bordo, baño, sonido)",
        "Presentaciones musicales (Bolero de Ravel, forró)",
        "Información histórica del Río Paraíba",
      ],
      naoIncluso: ["Comidas"],
      observacoes:
        "Salida diaria por la tarde. El horario varía según la época del año — confirmar por WhatsApp. Transfer hasta Jacaré: consultar.",
      idealPara: ["Romance", "Atardecer", "Música en vivo", "Experiencia cultural única"],
      imagemAlt: "Atardecer del Jacaré con Bolero de Ravel en vivo en João Pessoa",
      faq: [
        {
          pergunta: "¿Siempre suena el Bolero de Ravel?",
          resposta:
            "Sí. Jurandy do Sax toca a diario. Es la marca registrada del tour.",
        },
        {
          pergunta: "¿A qué hora sale el catamarán?",
          resposta:
            "Salida según el atardecer — varía por época. Consulta a Murillo el horario exacto.",
        },
        {
          pergunta: "¿Pueden ir niños?",
          resposta:
            "Sí. Menores de 5 años: gratis. De 5 a 11 años: R$ 72. Desde 12 años: tarifa adulta.",
        },
      ],
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
      descricao:
        "The most exclusive pools in João Pessoa — only 2 boats at a time guarantee tranquility and genuine contact with nature.",
      incluso: ["Boat", "Access to the natural pools"],
      naoIncluso: ["Meals"],
      observacoes:
        "Tide-dependent. Departure point: Penha Beach. Transfer to Penha: on request.",
      idealPara: ["Travelers seeking tranquility", "Nature", "Family"],
      imagemAlt: "Penha natural pools in João Pessoa — exclusive and peaceful environment",
      faq: [
        {
          pergunta: "What makes Penha different from Seixas and Picãozinho?",
          resposta:
            "Penha has only 2 boats at a time, providing more tranquility and real contact with nature.",
        },
        {
          pergunta: "Can children come?",
          resposta:
            "Yes. Under 5 years old: free. 5 to 11 years old: R$ 48. From 12 years old: adult rate.",
        },
      ],
    },
    es: {
      nome: "Piscinas Naturales de Penha",
      preco: "R$ 60",
      duracao: "~3h",
      saida: "Según la tabla de mareas",
      descricao:
        "Las piscinas más exclusivas de João Pessoa — solo 2 embarcaciones a la vez garantizan tranquilidad y contacto genuino con la naturaleza.",
      incluso: ["Embarcación", "Acceso a las piscinas naturales"],
      naoIncluso: ["Comidas"],
      observacoes:
        "Depende de marea baja. Punto de salida: Playa de Penha. Transfer hasta Penha: consultar.",
      idealPara: ["Quien busca tranquilidad", "Naturaleza", "Familia"],
      imagemAlt: "Piscinas naturales de Penha en João Pessoa — ambiente exclusivo y tranquilo",
      faq: [
        {
          pergunta: "¿Qué hace a Penha diferente de Seixas y Picãozinho?",
          resposta:
            "Penha tiene solo 2 embarcaciones a la vez, garantizando más tranquilidad y contacto real con la naturaleza.",
        },
        {
          pergunta: "¿Pueden ir niños?",
          resposta:
            "Sí. Menores de 5 años: gratis. De 5 a 11 años: R$ 48. Desde 12 años: tarifa adulta.",
        },
      ],
    },
  },

  "picaozinho": {
    en: {
      nome: "Picãozinho Natural Pools",
      preco: "R$ 60",
      duracao: "~3h",
      saida: "According to low tide",
      descricao:
        "Just 1,500 meters from Tambaú. Open-air natural aquarium with fish of every color and reef formations.",
      descricaoLonga:
        "Picãozinho is one of the most sought-after reefs in João Pessoa. Shallow, warm and crystal-clear pools, ideal for snorkeling. Colorful fish, algae, preserved marine fauna. It's like swimming in a natural aquarium.",
      galleryImages: [
        { src: "/images/passeios/piscinas-naturais/picaozinho/hero-01.jpg", alt: "Aerial view of Picãozinho reefs with turquoise sea, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/picaozinho/galeria-01.jpg", alt: "Tourists in the Picãozinho natural pools, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/picaozinho/galeria-02.jpg", alt: "Reefs and marine life of Picãozinho, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/picaozinho/galeria-03.jpg", alt: "Snorkeling in the Picãozinho natural pools, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/picaozinho/galeria-04.jpg", alt: "Crystal-clear sea over the Picãozinho reefs, João Pessoa" },
      ],
      rotario: [
        "Boarding at Tambaú",
        "Short crossing (1.5 km)",
        "Swim in the natural pools",
        "Snorkeling over the reefs",
        "Marine life exploration",
        "Return (~3h total)",
      ],
      incluso: [
        "Catamaran with basic structure",
        "Access to the reefs",
      ],
      naoIncluso: ["Meals"],
      observacoes:
        "Tide-dependent. Shallow and safe pools, ideal for families.",
      idealPara: ["Snorkeling", "Family", "Children", "Marine photos"],
      imagemAlt: "Picãozinho reef with colorful fish in João Pessoa",
      faq: [
        {
          pergunta: "Is it safe for children?",
          resposta:
            "Yes. Shallow, warm and crystal-clear waters. Supervision recommended for under 6.",
        },
        {
          pergunta: "Will I see lots of fish?",
          resposta:
            "Yes. Preserved marine fauna, colorful fish. A real natural aquarium.",
        },
        {
          pergunta: "Do I need to know how to swim?",
          resposta:
            "Not required. The water is shallow. Life vests available.",
        },
      ],
    },
    es: {
      nome: "Piscinas Naturales de Picãozinho",
      preco: "R$ 60",
      duracao: "~3h",
      saida: "Según marea baja",
      descricao:
        "A solo 1.500 metros de Tambaú. Acuario natural al aire libre con peces de todos los colores y formaciones de arrecife.",
      descricaoLonga:
        "Picãozinho es uno de los arrecifes más buscados de João Pessoa. Piscinas poco profundas, tibias y cristalinas, ideales para esnórquel. Peces coloridos, algas, fauna marina preservada. Es como sumergirse en un acuario natural.",
      galleryImages: [
        { src: "/images/passeios/piscinas-naturais/picaozinho/hero-01.jpg", alt: "Vista aérea de los arrecifes de Picãozinho con mar turquesa, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/picaozinho/galeria-01.jpg", alt: "Turistas en las piscinas naturales de Picãozinho, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/picaozinho/galeria-02.jpg", alt: "Arrecifes y fauna marina de Picãozinho, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/picaozinho/galeria-03.jpg", alt: "Esnórquel en las piscinas naturales de Picãozinho, João Pessoa" },
        { src: "/images/passeios/piscinas-naturais/picaozinho/galeria-04.jpg", alt: "Mar cristalino sobre los arrecifes de Picãozinho, João Pessoa" },
      ],
      rotario: [
        "Embarque en Tambaú",
        "Navegación corta (1,5 km)",
        "Baño en las piscinas naturales",
        "Esnórquel en los arrecifes",
        "Exploración de la fauna marina",
        "Retorno (~3h total)",
      ],
      incluso: [
        "Catamarán con estructura básica",
        "Acceso a los arrecifes",
      ],
      naoIncluso: ["Comidas"],
      observacoes:
        "Depende de marea baja. Piscinas poco profundas y seguras, ideales para familia.",
      idealPara: ["Esnórquel", "Familia", "Niños", "Fotos marinas"],
      imagemAlt: "Arrecife de Picãozinho con peces coloridos en João Pessoa",
      faq: [
        {
          pergunta: "¿Es seguro para niños?",
          resposta:
            "Sí. Aguas poco profundas, tibias y cristalinas. Supervisión recomendada para menores de 6 años.",
        },
        {
          pergunta: "¿Veo muchos peces?",
          resposta:
            "Sí. Fauna marina preservada, peces coloridos. Un acuario natural de verdad.",
        },
        {
          pergunta: "¿Necesito saber nadar?",
          resposta:
            "No obligatorio. El agua es poco profunda. Chalecos disponibles.",
        },
      ],
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
      descricao:
        "Discover the 3rd oldest city in Brazil: Niemeyer, easternmost point, colonial heritage and historic squares.",
      incluso: [
        "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Accredited guides",
      ],
      naoIncluso: ["Entrance to São Francisco Cultural Center"],
      observacoes:
        "Operates Tuesday to Sunday (closed Mondays). Private rate: on request.",
      idealPara: [
        "First-time visitors to João Pessoa",
        "Lovers of history and architecture",
        "Cultural travelers",
      ],
      imagemAlt: "Historic center of João Pessoa — 3rd oldest city in Brazil",
      faq: [
        {
          pergunta: "What does the City Tour visit?",
          resposta:
            "Historic center, colonial heritage, easternmost point of the Americas, Oscar Niemeyer's works and historic squares.",
        },
        {
          pergunta: "Does it run every day?",
          resposta:
            "Tuesday to Sunday. Closed on Mondays.",
        },
        {
          pergunta: "Can children come?",
          resposta:
            "Yes. Under 5 years old: free. 5 to 11 years old: R$ 64. From 12 years old: adult rate.",
        },
      ],
    },
    es: {
      nome: "City Tour Jampa — Histórico",
      preco: "R$ 80",
      duracao: "~3h30",
      saida: "Mañana",
      descricao:
        "Conoce la 3ª ciudad más antigua de Brasil: Niemeyer, punto más oriental, patrimonio colonial y plazas históricas.",
      incluso: [
        "Transfer (Tambaú, Cabo Branco, Manaíra, Bessa)",
        "Guías acreditados",
      ],
      naoIncluso: ["Entrada al Centro Cultural São Francisco"],
      observacoes:
        "Funciona de martes a domingo (no opera los lunes). Valor privativo: consultar.",
      idealPara: [
        "Primer contacto con João Pessoa",
        "Quien aprecia historia y arquitectura",
        "Turistas culturales",
      ],
      imagemAlt: "Centro histórico de João Pessoa — 3ª ciudad más antigua de Brasil",
      faq: [
        {
          pergunta: "¿Qué se visita en el City Tour?",
          resposta:
            "Centro histórico, patrimonio colonial, punto más oriental de las Américas, obras de Oscar Niemeyer y plazas históricas.",
        },
        {
          pergunta: "¿Funciona todos los días?",
          resposta:
            "De martes a domingo. No opera los lunes.",
        },
        {
          pergunta: "¿Pueden ir niños?",
          resposta:
            "Sí. Menores de 5 años: gratis. De 5 a 11 años: R$ 64. Desde 12 años: tarifa adulta.",
        },
      ],
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
      descricao:
        "One of Brazil's most famous destinations — unique natural pools, jangadas and greenish waters.",
      incluso: ["Transport (João Pessoa → Porto de Galinhas → João Pessoa)"],
      naoIncluso: ["Meals", "Jangada at the pools (pay on-site)"],
      observacoes:
        "Photo ID required (interstate trip PB → PE). Availability: on request. Night return.",
      idealPara: ["Travelers who want to visit Porto de Galinhas from João Pessoa"],
      imagemAlt: "Natural pools of Porto de Galinhas in Pernambuco",
      faq: [
        {
          pergunta: "What's included in the R$ 160?",
          resposta:
            "Round-trip transport (João Pessoa ↔ Porto de Galinhas). Meals and jangada are at your expense.",
        },
        {
          pergunta: "Do I need ID?",
          resposta:
            "Yes. Photo ID required — it's an interstate trip.",
        },
        {
          pergunta: "Do children pay?",
          resposta:
            "Under 5 years old: free. 5 to 11 years old: R$ 128. From 12 years old: adult rate.",
        },
      ],
    },
    es: {
      nome: "Porto de Galinhas — Pernambuco",
      preco: "R$ 160",
      duracao: "Día entero",
      saida: "Salida por la mañana · Horario confirmado por WhatsApp",
      descricao:
        "Uno de los destinos más famosos de Brasil — piscinas naturales únicas, jangadas y aguas verdosas.",
      incluso: ["Transporte (João Pessoa → Porto de Galinhas → João Pessoa)"],
      naoIncluso: ["Comidas", "Jangada en las piscinas (pagar en el lugar)"],
      observacoes:
        "Documento con foto obligatorio (viaje interestatal PB → PE). Disponibilidad: consultar. Retorno por la noche.",
      idealPara: ["Quien quiere conocer Porto de Galinhas desde João Pessoa"],
      imagemAlt: "Piscinas naturales de Porto de Galinhas en Pernambuco",
      faq: [
        {
          pergunta: "¿Qué incluyen los R$ 160?",
          resposta:
            "Transporte ida y vuelta (João Pessoa ↔ Porto de Galinhas). Comidas y jangada por cuenta del visitante.",
        },
        {
          pergunta: "¿Necesito documento?",
          resposta:
            "Sí. Documento con foto obligatorio — es un viaje interestatal.",
        },
        {
          pergunta: "¿Pagan los niños?",
          resposta:
            "Menores de 5 años: gratis. De 5 a 11 años: R$ 128. Desde 12 años: tarifa adulta.",
        },
      ],
    },
  },

  "praia-de-pipa": {
    en: {
      nome: "Praia de Pipa — Rio Grande do Norte",
      preco: "R$ 160",
      duracao: "Full day",
      saida: "Morning departure · Time confirmed on WhatsApp",
      descricao:
        "Cinematic scenery, paradise beaches, charming village — the trendiest destination in the Northeast.",
      incluso: ["Transport (João Pessoa → Pipa → João Pessoa)"],
      naoIncluso: ["Meals"],
      observacoes:
        "Photo ID required (interstate trip). Availability: on request.",
      idealPara: ["Travelers seeking beautiful beaches and a lively village"],
      imagemAlt: "Praia de Pipa in Rio Grande do Norte — cliffs and crystal waters",
      faq: [
        {
          pergunta: "What's included?",
          resposta:
            "Round-trip transport. Meals at your expense.",
        },
        {
          pergunta: "Do children pay?",
          resposta:
            "Under 5 years old: free. 5 to 11 years old: R$ 128. From 12 years old: adult rate.",
        },
      ],
    },
    es: {
      nome: "Playa de Pipa — Rio Grande do Norte",
      preco: "R$ 160",
      duracao: "Día entero",
      saida: "Salida por la mañana · Horario confirmado por WhatsApp",
      descricao:
        "Paisajes cinematográficos, playas paradisíacas, pueblo encantador — el destino más cool del Nordeste.",
      incluso: ["Transporte (João Pessoa → Pipa → João Pessoa)"],
      naoIncluso: ["Comidas"],
      observacoes:
        "Documento con foto obligatorio (viaje interestatal). Disponibilidad: consultar.",
      idealPara: ["Quien busca playas hermosas y pueblo animado"],
      imagemAlt: "Playa de Pipa en Rio Grande do Norte — acantilados y aguas cristalinas",
      faq: [
        {
          pergunta: "¿Qué está incluido?",
          resposta:
            "Transporte ida y vuelta. Las comidas por cuenta del visitante.",
        },
        {
          pergunta: "¿Pagan los niños?",
          resposta:
            "Menores de 5 años: gratis. De 5 a 11 años: R$ 128. Desde 12 años: tarifa adulta.",
        },
      ],
    },
  },

  "natal": {
    en: {
      nome: "Natal — Rio Grande do Norte",
      preco: "R$ 160",
      duracao: "Full day",
      saida: "Morning departure · Time confirmed on WhatsApp",
      descricao:
        "World's largest cashew tree, Rocket Launch Center and the warm waters of Ponta Negra beach.",
      incluso: ["Transport (João Pessoa → Natal → João Pessoa)"],
      naoIncluso: ["Meals"],
      observacoes:
        "Photo ID required. Availability: on request.",
      idealPara: ["Travelers who want to visit Natal from João Pessoa"],
      imagemAlt: "Ponta Negra in Natal, Rio Grande do Norte",
      faq: [
        {
          pergunta: "What's included?",
          resposta:
            "Round-trip transport. Meals at your expense.",
        },
        {
          pergunta: "Do children pay?",
          resposta:
            "Under 5 years old: free. 5 to 11 years old: R$ 128. From 12 years old: adult rate.",
        },
      ],
    },
    es: {
      nome: "Natal — Rio Grande do Norte",
      preco: "R$ 160",
      duracao: "Día entero",
      saida: "Salida por la mañana · Horario confirmado por WhatsApp",
      descricao:
        "El cajueiro más grande del mundo, Centro de Lanzamiento de Cohetes y las playas tibias de Ponta Negra.",
      incluso: ["Transporte (João Pessoa → Natal → João Pessoa)"],
      naoIncluso: ["Comidas"],
      observacoes:
        "Documento con foto obligatorio. Disponibilidad: consultar.",
      idealPara: ["Quien quiere conocer Natal desde João Pessoa"],
      imagemAlt: "Ponta Negra en Natal, Rio Grande do Norte",
      faq: [
        {
          pergunta: "¿Qué está incluido?",
          resposta:
            "Transporte ida y vuelta. Las comidas por cuenta del visitante.",
        },
        {
          pergunta: "¿Pagan los niños?",
          resposta:
            "Menores de 5 años: gratis. De 5 a 11 años: R$ 128. Desde 12 años: tarifa adulta.",
        },
      ],
    },
  },
};
