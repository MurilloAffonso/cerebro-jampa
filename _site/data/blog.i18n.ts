/**
 * Traduções de blog posts e clusters — EN/ES.
 *
 * Tradução fiel: nomes próprios (Seixas, Picãozinho, Areia Vermelha, Penha,
 * Coqueirinho, Tambaba, Praia Bela, Tabatinga, Murillo, Jurandy do Sax,
 * Bolero de Ravel), valores em R$, distâncias em km, datas e horários
 * permanecem inalterados. Pontos pendentes devem ficar em draft até revisão.
 */

import type { BlogPost, BlogCluster } from "./blog";

type PostOverride = Partial<BlogPost>;

export const blogClustersTranslations: Record<
  "en" | "es",
  Record<BlogCluster, { nome: string; descricao: string }>
> = {
  en: {
    "guia-cidade": {
      nome: "City Guide",
      descricao: "Overview of João Pessoa for first-time visitors.",
    },
    "piscinas-naturais": {
      nome: "Natural Pools",
      descricao: "Reefs, tides and light snorkeling in Paraíba's natural pools.",
    },
    "litoral-sul": {
      nome: "South Coast",
      descricao: "Beaches, trails and ATV on João Pessoa's south coast.",
    },
    "litoral-norte": {
      nome: "North Coast",
      descricao: "Cabedelo, sunset at Jacaré and Areia Vermelha.",
    },
    roteiros: {
      nome: "Itineraries",
      descricao: "Ready-to-use 1- to 5-day itineraries to enjoy João Pessoa.",
    },
    "mares-natureza": {
      nome: "Tides & Nature",
      descricao: "Tide tables, best season and climate.",
    },
    logistica: {
      nome: "Logistics",
      descricao: "Transfer, getting around and practical arrival tips.",
    },
    familia: {
      nome: "Family & Kids",
      descricao: "Safe tours adapted for groups with children.",
    },
    privativo: {
      nome: "Private Tour",
      descricao: "Exclusive itineraries for couples, families and closed groups.",
    },
  },
  es: {
    "guia-cidade": {
      nome: "Guía de la Ciudad",
      descricao: "Visión general de João Pessoa para quien llega.",
    },
    "piscinas-naturais": {
      nome: "Piscinas Naturales",
      descricao: "Arrecifes, mareas y esnórquel suave en las piscinas naturales de Paraíba.",
    },
    "litoral-sul": {
      nome: "Litoral Sur",
      descricao: "Playas, trails y cuatriciclo en el litoral sur de João Pessoa.",
    },
    "litoral-norte": {
      nome: "Litoral Norte",
      descricao: "Cabedelo, atardecer en el Jacaré y Areia Vermelha.",
    },
    roteiros: {
      nome: "Itinerarios",
      descricao: "Itinerarios listos de 1 a 5 días para aprovechar João Pessoa.",
    },
    "mares-natureza": {
      nome: "Mareas y Naturaleza",
      descricao: "Tablas de mareas, mejor época y clima.",
    },
    logistica: {
      nome: "Logística",
      descricao: "Transfer, desplazamientos y consejos prácticos de llegada.",
    },
    familia: {
      nome: "Familia y Niños",
      descricao: "Tours seguros y adaptados para grupos con niños.",
    },
    privativo: {
      nome: "Tour Privativo",
      descricao: "Itinerarios exclusivos para parejas, familias y grupos cerrados.",
    },
  },
};

export const blogPostsTranslations: Record<
  string,
  { en?: PostOverride; es?: PostOverride }
> = {
  "o-que-fazer-em-joao-pessoa": {
    en: {
      title: "What to Do in João Pessoa: a complete guide by someone who lives here",
      description:
        "Complete itinerary for João Pessoa by someone who lives here: beaches, natural pools, city tour and practical tips to make every day count.",
      category: "City Guide",
      faq: [
        {
          pergunta: "How many days are enough to get to know João Pessoa?",
          resposta:
            "Three days give you a good base: one for natural pools (tide-dependent), one for the South Coast and one for the North Coast with sunset at Jacaré. With five days, you can go deeper into each destination and still explore the historic center calmly. Less than two days and you'll want to come back.",
        },
        {
          pergunta: "Is João Pessoa close to Natal and Recife?",
          resposta:
            "João Pessoa is about 120 km from Recife and about 185 km from Natal. You can use João Pessoa as a base for day trips to either city, but the round trip takes a lot of time. We recommend planning at least 3 days in each destination if you want to enjoy it properly.",
        },
        {
          pergunta: "What's the best time to visit João Pessoa?",
          resposta:
            "João Pessoa is warm year-round. The drier period runs from September to February, ideal for natural pools. July and August have milder temperatures and high tourist traffic. Low tide is the most important factor for natural pools — and it happens in any month of the year, at different times.",
        },
      ],
      sections: [
        {
          heading: "Why João Pessoa deserves more than a weekend",
          body: "João Pessoa is the third oldest city in Brazil and at the same time one of the most peaceful capitals in the Northeast. It's at the easternmost point of the Americas — the first place on the continent to receive sunlight. This geographic position isn't just trivia: it defines the quality of the light, the rhythm of the tides and the beauty of the beaches that make up the city. You'll find natural pools with crystal-clear water, a south coast with nearly untouched beaches, a north coast with catamaran scenery and a famous sunset, and a historic center with colonial churches, markets and Lagoa as the local meeting point. Three days is the minimum for the essentials.",
        },
        {
          heading: "The natural pools: João Pessoa's most sought-after attraction",
          body: "The main attraction of João Pessoa is the natural pools formed by coral reefs at low tide. The main ones are: Seixas (at the easternmost point of the Americas), Picãozinho (on the city shoreline, more accessible), Areia Vermelha (an island that appears and disappears with the tide, near Cabedelo) and Penha (on the South Coast). Each has its own character, and low tide determines when they're accessible. Before planning any visit, it's essential to check the tide table for your date — or talk to Murillo on WhatsApp to confirm the ideal conditions.",
        },
        {
          heading: "South Coast: long beaches, trails and ATV in Coqueirinho",
          body: "The South Coast starts in Jacarapé and stretches for over 30 km of beaches with very different characteristics. Coqueirinho has natural pools, cliffs and is the starting point for the ATV trail through the dunes. Tabatinga has reefs and one of Paraíba's only regularized nudist beaches. Praia Bela is less crowded, with pools and reefs at low tide. Tambaba is a stopover for those going further. The South Coast is a full-day tour, with an early start to catch the right tide.",
        },
        {
          heading: "North Coast: sunset at Jacaré and Areia Vermelha island",
          body: "João Pessoa's North Coast has its hub in the municipality of Cabedelo, on the banks of the Paraíba River. Sunset at Jacaré is one of Paraíba's most photographed events: tourists gather on the riverbanks to watch the sunset while a saxophonist plays live. Areia Vermelha is a sandbar that's submerged at high tide and emerges at low tide, forming a temporary island in the ocean. Access is by catamaran from the Jacaré River. Also worth visiting is Fort Orange, 17th-century Dutch ruins on the riverbanks.",
        },
        {
          heading: "City Tour: from Cabo Branco to the historic center",
          body: "For those who came for more than the beaches, the City Tour covers the historic and cultural points of João Pessoa. The Cabo Branco Lighthouse is the easternmost point of the Americas on land — a viewpoint over the Atlantic. Parque Solon de Lucena, known as Lagoa, is the locals' meeting place with wooden benches, kiosks and a crafts fair. The historic center has baroque churches, the Photography Museum mansion and the crafts market. The City Tour fits a half-day and pairs well with a morning or afternoon at the beach.",
        },
        {
          heading: "How to organize your itinerary with local WhatsApp guidance",
          body: "The biggest challenge in planning a trip to João Pessoa is fitting the tides into your calendar. Natural pools only work at the right tide — and that determines which tour goes on which day. Murillo does this planning directly on WhatsApp: you send your dates, he checks the tide table and suggests the right order of tours. It's not a form, not a chatbot — it's direct guidance from someone who organizes these tours every day. Enjoy Jampa with us.",
        },
      ],
    },
    es: {
      title: "Qué Hacer en João Pessoa: guía completa por quien vive aquí",
      description:
        "Itinerario completo de João Pessoa por quien vive aquí: playas, piscinas naturales, city tour y consejos prácticos para aprovechar cada día.",
      category: "Guía de la Ciudad",
      faq: [
        {
          pergunta: "¿Cuántos días son suficientes para conocer João Pessoa?",
          resposta:
            "Tres días dan una buena base: uno para piscinas naturales (dependiendo de la marea), uno para el Litoral Sur y uno para el Litoral Norte con atardecer en el Jacaré. Con cinco días puedes profundizar en cada destino y aún conocer el centro histórico con calma. Menos de dos días y vas a querer volver.",
        },
        {
          pergunta: "¿João Pessoa queda cerca de Natal y Recife?",
          resposta:
            "João Pessoa está a unos 120 km de Recife y a unos 185 km de Natal. Es posible usar João Pessoa como base y hacer excursión de un día a cada ciudad, pero el viaje de ida y vuelta consume bastante tiempo. Lo recomendado es planificar al menos 3 días en cada destino si la intención es aprovechar bien.",
        },
        {
          pergunta: "¿Cuál es la mejor época para visitar João Pessoa?",
          resposta:
            "João Pessoa tiene clima cálido todo el año. El período de menor lluvia va de septiembre a febrero, ideal para piscinas naturales. Julio y agosto tienen temperaturas más suaves y mucho movimiento de turistas. La marea baja es el factor más importante para las piscinas naturales — y sucede en cualquier mes del año, en distintos horarios.",
        },
      ],
      sections: [
        {
          heading: "Por qué João Pessoa merece más de un fin de semana",
          body: "João Pessoa es la tercera ciudad más antigua de Brasil y al mismo tiempo una de las capitales más tranquilas del Nordeste. Está en el punto más oriental de las Américas — el primer lugar del continente en recibir la luz del sol. Esta posición geográfica no es solo curiosidad: define la calidad de la luz, el ritmo de las mareas y la belleza de las playas que componen la ciudad. Encontrarás piscinas naturales de agua cristalina, un litoral sur con playas casi vírgenes, un litoral norte con escenarios de catamarán y un atardecer famoso, y un centro histórico con iglesias coloniales, mercados y la Lagoa como punto de encuentro local. Tres días es el mínimo para lo esencial.",
        },
        {
          heading: "Las piscinas naturales: la atracción más buscada de João Pessoa",
          body: "La gran atracción de João Pessoa son las piscinas naturales formadas por arrecifes de coral en marea baja. Las principales son: Seixas (en el punto más oriental de las Américas), Picãozinho (en la orilla, más accesible), Areia Vermelha (una isla que aparece y desaparece con la marea, cerca de Cabedelo) y Penha (en el Litoral Sur). Cada una tiene su carácter, y la marea baja es lo que determina cuándo están accesibles. Antes de planificar cualquier visita, es esencial verificar la tabla de mareas para tu día — o hablar con Murillo por WhatsApp para que él confirme las condiciones ideales.",
        },
        {
          heading: "Litoral Sur: playas extensas, trails y cuatriciclo en Coqueirinho",
          body: "El Litoral Sur empieza en Jacarapé y se extiende por más de 30 km de playas con características muy distintas. Coqueirinho tiene piscinas naturales, acantilados y es el punto de partida del cuatriciclo en las dunas. Tabatinga tiene arrecifes y una de las pocas playas naturistas regularizadas de Paraíba. Praia Bela es menos concurrida, con piscinas y arrecifes en marea baja. Tambaba es punto de parada para quien va más lejos. El Litoral Sur se hace en tour de día entero, con salida temprano para aprovechar la marea correcta.",
        },
        {
          heading: "Litoral Norte: el atardecer del Jacaré y la isla de Areia Vermelha",
          body: "El Litoral Norte de João Pessoa tiene como polo central el municipio de Cabedelo, a orillas del Río Paraíba. El Atardecer del Jacaré es uno de los eventos más fotografiados de Paraíba: turistas se reúnen a orillas del río para asistir al atardecer mientras un saxofonista toca en vivo. Areia Vermelha es un banco de arena que queda sumergido en marea alta y emerge en marea baja, formando una isla temporal en el océano. El acceso es en catamarán desde el Río Jacaré. También vale visitar Fort Orange, ruinas holandesas del siglo XVII a orillas del río.",
        },
        {
          heading: "City Tour: desde Cabo Branco hasta el centro histórico",
          body: "Para quien no vino solo por las playas, el City Tour cubre los puntos históricos y culturales de João Pessoa. El Faro del Cabo Branco es el punto más oriental de las Américas en tierra firme — un mirador con vista al Atlántico. El Parque Solon de Lucena, conocido como Lagoa, es el punto de encuentro de los pessoenses con bancos de madera, quioscos y feria de artesanía. El centro histórico tiene iglesias barrocas, el caserón del Museo Fotográfico y el mercado de artesanías. El City Tour se hace en medio día y combina bien con mañana o tarde de playa.",
        },
        {
          heading: "Cómo organizar tu itinerario con orientación local por WhatsApp",
          body: "El mayor desafío al planificar un viaje a João Pessoa es encajar las mareas en tu calendario. Las piscinas naturales solo funcionan con la marea correcta — y eso define qué tour va en qué día. Murillo hace esa planificación directamente por WhatsApp: tú mandas tus fechas, él verifica la tabla de mareas y sugiere el orden correcto de los tours. No es formulario, no es chatbot — es orientación directa de quien organiza estos tours todos los días. Disfruta Jampa con nosotros.",
        },
      ],
    },
  },

  "piscinas-naturais-joao-pessoa-guia": {
    en: {
      title: "Natural Pools in João Pessoa: a complete guide",
      description:
        "Seixas, Picãozinho, Areia Vermelha and Penha: how João Pessoa's natural pools work, best tide and what to expect from each one.",
      category: "Natural Pools",
      faq: [
        {
          pergunta: "What's the difference between Seixas and Picãozinho?",
          resposta:
            "Seixas is at the easternmost end of João Pessoa, near Cabo Branco Lighthouse, with pools between farther reefs offshore. Picãozinho is within the city shoreline, accessible by boat from Praia de Tambaú. Picãozinho tends to be calmer and shallower, recommended for families with children. Seixas has larger, more open pools. Murillo will tell you which to pick based on your profile and your day's tide conditions.",
        },
        {
          pergunta: "Do I need to know how to swim to visit the natural pools?",
          resposta:
            "At low tide, the natural pools are usually shallow enough to stand in most areas. Life vests are available onboard. Even non-swimmers can safely enjoy most of the pools — especially Picãozinho and Seixas. Let Murillo know on WhatsApp if you have any limitation so he can recommend the best tour for your group.",
        },
        {
          pergunta: "How do I know if the tide will be good on my day?",
          resposta:
            "The most direct way is to check the official Brazilian Navy tide table for João Pessoa and see if low tide falls in the morning or afternoon of your day. But the easiest way is to message Murillo on WhatsApp with your dates — he checks the table and lets you know if your day has a good tide and at what time.",
        },
      ],
      sections: [
        {
          heading: "What João Pessoa's natural pools are",
          body: "Natural pools are shallow areas of water formed by coral and sandstone reefs that emerge during low tide. At high tide, the sea covers the reefs and the pools cease to exist. At low tide, the reefs emerge or sit just below the surface, forming natural pools with warm, transparent and calm water. João Pessoa has four main natural pools, each with a different character: Seixas, Picãozinho, Areia Vermelha and Penha.",
        },
        {
          heading: "Seixas Natural Pools: the easternmost point of the Americas",
          body: "Praia do Seixas is at the easternmost end of João Pessoa, at the same point as the Cabo Branco Lighthouse — the place that receives the first sun rays of the American continent every day. The Seixas natural pools are formed by an extensive line of reefs between 500 meters and 1 km from the beach. At low tide, the area is accessible and you can walk across the reefs, snorkel in the pools and see colorful fish and corals. Access is by boat or jangada from the beach. Seixas is the most sought-after tour in João Pessoa and depends entirely on low tide to work well.",
        },
        {
          heading: "Picãozinho: the natural pool inside João Pessoa's shoreline",
          body: "Picãozinho is about 700 meters from Praia de Tambaú, accessible by boat in just a few minutes. Being inside the city shoreline, it's the closest and easiest natural pool to fit in a half-day itinerary. The water is shallow and calm, recommended for children and for those who prefer a more relaxed experience. At low tide, the reefs emerge and form a maze of pools with small fish and coral. It's a great starting point for those who haven't visited Paraíba's natural pools before.",
        },
        {
          heading: "Areia Vermelha: the island that appears and disappears with the tide",
          body: "Areia Vermelha isn't technically a reef pool — it's a sandbar that's submerged at high tide and emerges as an island at low tide. It sits off the coast of Cabedelo, on João Pessoa's North Coast. Access is by catamaran from the Jacaré River. At low tide, the island has a natural pool around it formed by where the Paraíba River meets the Atlantic — the water turns greenish from the river sediment and has a mild temperature. It's one of the most visual and photogenic tours in the region.",
        },
        {
          heading: "Penha: natural pools on the South Coast",
          body: "Praia da Penha is on João Pessoa's South Coast, farther from the center, with natural pools formed by reefs similar to Seixas. It's a less mass-tourism beach, which means fewer people and more tranquility. Access is via the South Coast and can be combined with other points on the same route. Penha availability should be confirmed during service, because this option depends on the route, tide and operation of the day.",
        },
        {
          heading: "How the tide determines which natural pool to visit and when",
          body: "Each natural pool has its ideal tide window. Seixas and Picãozinho work best with low tide in a safe operational window. Areia Vermelha depends on low tide for the island to emerge. The tide table changes every day — low tide can be in the morning one day and in the afternoon the next. The most practical way to plan is to check the table for your dates or talk to Murillo on WhatsApp: he checks the table and tells you which natural pool is best for your day and time.",
        },
      ],
    },
    es: {
      title: "Piscinas Naturales en João Pessoa: guía completa",
      description:
        "Seixas, Picãozinho, Areia Vermelha y Penha: cómo funcionan las piscinas naturales de João Pessoa, mejor marea y qué esperar de cada una.",
      category: "Piscinas Naturales",
      faq: [
        {
          pergunta: "¿Cuál es la diferencia entre Seixas y Picãozinho?",
          resposta:
            "Seixas queda en el extremo este de João Pessoa, cerca del Faro del Cabo Branco, y sus piscinas están entre arrecifes más alejados de la orilla. Picãozinho está dentro de la orilla de la ciudad, accesible en barco desde la Praia de Tambaú. Picãozinho tiende a ser más tranquilo y poco profundo, recomendado para familias con niños. Seixas tiene piscinas más grandes y abiertas. Murillo orienta cuál elegir según tu perfil y las condiciones de marea de tu día.",
        },
        {
          pergunta: "¿Necesito saber nadar para visitar las piscinas naturales?",
          resposta:
            "En marea baja, las piscinas naturales suelen tener agua poco profunda como para quedarse de pie en buena parte de las áreas. Hay chalecos salvavidas a bordo. Incluso quien no sabe nadar puede aprovechar la mayoría de las piscinas con seguridad — especialmente Picãozinho y Seixas. Avísale a Murillo por WhatsApp si tienes alguna restricción para que oriente el mejor tour para tu grupo.",
        },
        {
          pergunta: "¿Cómo saber si la marea estará buena el día de mi visita?",
          resposta:
            "La forma más directa es consultar la tabla de mareas oficial de la Marina para João Pessoa y ver si hay marea baja por la mañana o por la tarde de tu día. Pero lo más simple es mandar mensaje a Murillo por WhatsApp con tus fechas — él verifica la tabla y te informa si el día tiene buena marea y en qué horario.",
        },
      ],
      sections: [
        {
          heading: "Qué son las piscinas naturales de João Pessoa",
          body: "Las piscinas naturales son áreas de agua poco profunda formadas por arrecifes de coral y arenisca que quedan expuestos durante la marea baja. Con marea alta, el mar cubre los arrecifes y las piscinas dejan de existir. Con marea baja, los arrecifes emergen o quedan rasos a la superficie, formando piscinas naturales con agua tibia, transparente y calma. João Pessoa tiene cuatro piscinas naturales principales, cada una con carácter distinto: Seixas, Picãozinho, Areia Vermelha y Penha.",
        },
        {
          heading: "Piscinas Naturales de Seixas: el punto más oriental de las Américas",
          body: "La Praia do Seixas queda en el extremo este de João Pessoa, en el mismo punto del Faro del Cabo Branco — el lugar que recibe los primeros rayos de sol del continente americano cada día. Las piscinas naturales de Seixas están formadas por un extenso cordón de arrecifes entre 500 metros y 1 km de la playa. En marea baja, el área queda accesible y es posible caminar por los arrecifes, sumergirse en las piscinas y ver peces y corales coloridos. El acceso se hace en barco o jangada desde la playa. Seixas es el tour más buscado en João Pessoa y depende enteramente de la marea baja para funcionar bien.",
        },
        {
          heading: "Picãozinho: la piscina natural dentro de la orilla de João Pessoa",
          body: "Picãozinho queda a unos 700 metros de la Praia de Tambaú, accesible en barco en pocos minutos. Por estar dentro de la orilla de la ciudad, es la piscina natural más cercana y más fácil de incluir en un itinerario de medio día. El agua es poco profunda y tranquila, recomendada para niños y para quien prefiere una experiencia más calma. En marea baja, los arrecifes emergen y forman un laberinto de piscinas con peces pequeños y coral. Es un excelente punto de entrada para quien aún no conoce las piscinas naturales de Paraíba.",
        },
        {
          heading: "Areia Vermelha: la isla que aparece y desaparece con la marea",
          body: "Areia Vermelha no es técnicamente una piscina natural de arrecife — es un banco de arena que queda sumergido en marea alta y emerge como una isla en marea baja. Está frente a la costa de Cabedelo, en el Litoral Norte de João Pessoa. El acceso se hace en catamarán desde el Río Jacaré. En marea baja, la isla tiene una piscina natural alrededor formada por el encuentro del Río Paraíba con el Atlántico — el agua queda verdosa por el sedimento del río y tiene temperatura amena. Es uno de los tours más visuales y fotogénicos de la región.",
        },
        {
          heading: "Penha: piscinas naturales en el Litoral Sur",
          body: "La Praia da Penha queda en el Litoral Sur de João Pessoa, más alejada del centro, con piscinas naturales formadas por arrecifes similares a las de Seixas. Es una playa menos masificada por el turismo, lo que garantiza menos gente y más tranquilidad. El acceso se hace por el Litoral Sur y puede combinarse con otros puntos de la misma ruta. La disponibilidad de Penha debe confirmarse en la atención, porque este encaje depende del itinerario, la marea y la operación del día.",
        },
        {
          heading: "Cómo la marea determina qué piscina natural visitar y cuándo",
          body: "Cada piscina natural tiene su ventana de marea ideal. Seixas y Picãozinho funcionan mejor con marea baja dentro de una ventana operacional segura. Areia Vermelha depende de marea baja para que la isla emerja. La tabla de mareas cambia todos los días — el horario de marea baja puede ser por la mañana un día y por la tarde al día siguiente. La forma más práctica de planificar es consultar la tabla para tus fechas o hablar con Murillo por WhatsApp: él consulta la tabla y orienta qué piscina natural es mejor para tu día y horario.",
        },
      ],
    },
  },

  "passeio-praia-do-seixas": {
    en: {
      title: "Tour to Praia do Seixas: natural pools and easternmost point",
      description:
        "How the tour to Praia do Seixas in João Pessoa works, the best time based on the tide table and what to bring.",
      category: "Natural Pools",
      faq: [
        {
          pergunta: "Is Seixas far from the center of João Pessoa?",
          resposta:
            "Praia do Seixas is at the easternmost end of João Pessoa, near Cabo Branco, about 10 km from the city center. Access is by road and the beach itself is calm, without the bustle of the main shoreline. The organized tour includes transport to the beach and the boat to the natural pools.",
        },
        {
          pergunta: "Does the tour to Seixas include cylinder diving?",
          resposta:
            "The standard tour to Seixas includes snorkeling in apnea — you dive at the surface with a mask. Cylinder diving is a different modality and should be checked separately before booking.",
        },
        {
          pergunta: "What's the ideal time to visit Seixas?",
          resposta:
            "The ideal time depends on the day's tide table. Low tide can happen in the morning or afternoon — and this varies daily. The rule is: go at low tide. Murillo checks the tide table before confirming any departure.",
        },
      ],
      sections: [
        {
          heading: "Praia do Seixas: where the sun rises first in the Americas",
          body: "Praia do Seixas is at the easternmost end of João Pessoa, marked by the same geographic point as the Cabo Branco Lighthouse — the place where the sun first rises across the entire American continent. It's a beach with dark green water, without the tourist-shoreline structure, with fishermen, boats and a more preserved environment. The beach itself is the starting point for the tour — what attracts visitors most is a few hundred meters from the coast, on the coral reefs that form the natural pools.",
        },
        {
          heading: "Seixas natural pools: how they work",
          body: "Between Seixas and the open sea there's a line of coral and sandstone reefs. At high tide, those reefs stay submerged and the sea behaves normally. At low tide, the reefs emerge or sit just below the surface, forming natural pools with warm, transparent and relatively calm water. Depth varies — in some pools you stand, in others you need to float. The fauna is rich: it's possible to see clownfish, urchins, corals, colorful reef fish and, depending on tide and season, even rays.",
        },
        {
          heading: "What to do at Seixas besides the pools",
          body: "For those not entering the water, Seixas has the Marco Zero das Américas — a monument marking the easternmost point of the continent. It's a photogenic destination loaded with geographic significance. The Cabo Branco Lighthouse, next to Seixas, is also a viewpoint over the Atlantic. Praia do Seixas has simple beach huts and a calm environment — no resorts or intense tourist infrastructure.",
        },
        {
          heading: "When to go: the tide defines everything",
          body: "Visiting Seixas without low tide doesn't have the same effect. At high tide, the pools stay submerged and the boat tour loses much of its appeal. The tide table is the calendar that governs departures — and the low tide time changes daily. Before confirming any visit to Seixas, it's essential to check the table for your day. Murillo does this as part of the confirmation process: no departure is confirmed without verifying that the tide will be good.",
        },
        {
          heading: "How the organized tour to Seixas works",
          body: "The organized tour departs from Praia do Seixas by boat or jangada. The route to the reefs takes a few minutes. At the reef, you can enter the water with a snorkel mask, walk on the exposed reefs and explore the pools. Operational details such as departure point, total duration and included items are confirmed during service before booking. Life vests are available onboard. The tour is preferably done early in the morning when low tide is in the morning, or in the afternoon when the window falls in the afternoon.",
        },
      ],
    },
    es: {
      title: "Tour a la Praia do Seixas: piscinas naturales y punto más oriental",
      description:
        "Cómo funciona el tour a la Praia do Seixas en João Pessoa, mejor horario por la tabla de mareas y qué llevar.",
      category: "Piscinas Naturales",
      faq: [
        {
          pergunta: "¿Seixas queda lejos del centro de João Pessoa?",
          resposta:
            "La Praia do Seixas queda en el extremo este de João Pessoa, cerca de Cabo Branco, a unos 10 km del centro de la ciudad. El acceso es por carretera y la playa en sí es tranquila, sin el movimiento de la orilla principal. El tour organizado incluye el traslado a la playa y el barco hasta las piscinas naturales.",
        },
        {
          pergunta: "¿El tour a Seixas incluye buceo con cilindro?",
          resposta:
            "El tour estándar a Seixas incluye esnórquel en apnea — te sumerges en la superficie con máscara. El buceo con cilindro es una modalidad diferente y debe consultarse por separado antes de reservar.",
        },
        {
          pergunta: "¿Cuál es el horario ideal para visitar Seixas?",
          resposta:
            "El horario ideal depende de la tabla de mareas del día. La marea baja puede suceder por la mañana o por la tarde — y eso varía todos los días. La regla es: ir con marea baja. Murillo verifica la tabla antes de confirmar cualquier salida.",
        },
      ],
      sections: [
        {
          heading: "La Praia do Seixas: donde el sol nace primero en las Américas",
          body: "La Praia do Seixas queda en el extremo este de João Pessoa, marcada por el mismo punto geográfico del Faro del Cabo Branco — el lugar donde el sol nace primero en todo el continente americano. Es una playa de agua verde-oscura, sin la estructura de la orilla turística, con pescadores, barcos y un ambiente más preservado. La playa en sí es el punto de partida del tour — lo que más atrae a los visitantes está a algunos cientos de metros de la costa, en los arrecifes de coral que forman las piscinas naturales.",
        },
        {
          heading: "Las piscinas naturales de Seixas: cómo funcionan",
          body: "Entre Seixas y el mar abierto hay un cordón de arrecifes de coral y arenisca. En marea alta, esos arrecifes quedan sumergidos y el mar se comporta normalmente. En marea baja, los arrecifes emergen o quedan justo por debajo de la superficie, formando piscinas naturales con agua tibia, transparente y relativamente calma. La profundidad varía — en algunas piscinas te quedas de pie, en otras necesitas flotar. La fauna es rica: es posible ver pez-payaso, erizos, corales, peces de arrecife coloridos y, dependiendo de la marea y la época, incluso rayas.",
        },
        {
          heading: "Qué hacer en Seixas además de las piscinas",
          body: "Para quien no quiere entrar al agua, Seixas tiene el Marco Cero de las Américas — un monumento que marca el punto más oriental del continente. Es un destino fotogénico cargado de significado geográfico. El Faro del Cabo Branco, vecino a Seixas, también es un mirador con vista al Atlántico. La Praia do Seixas tiene cabañas simples y ambiente tranquilo — nada de resort o estructura turística intensa.",
        },
        {
          heading: "Cuándo ir: la marea define todo",
          body: "Visitar Seixas sin marea baja no tiene el mismo efecto. Con marea alta, las piscinas quedan sumergidas y el paseo en barco pierde gran parte del atractivo. La tabla de mareas es el calendario que rige las salidas — y el horario de marea baja cambia todos los días. Antes de confirmar cualquier visita a Seixas, es fundamental verificar la tabla de tu día. Murillo hace eso como parte del proceso de confirmación: ninguna salida se confirma sin verificar que la marea estará buena.",
        },
        {
          heading: "Cómo funciona el tour organizado a Seixas",
          body: "El tour organizado parte de la Praia do Seixas en barco o jangada. El recorrido hasta los arrecifes toma pocos minutos. En el arrecife, puedes entrar al agua con máscara de snorkel, caminar por los arrecifes expuestos y explorar las piscinas. Los detalles operacionales, como punto de salida, duración total e ítems incluidos, se confirman en la atención antes de reservar. Hay chaleco salvavidas a bordo. El tour se hace preferentemente temprano por la mañana cuando la marea baja es por la mañana, o por la tarde cuando la ventana cae por la tarde.",
        },
      ],
    },
  },

  "areia-vermelha-vale-a-pena": {
    en: {
      title: "Is Areia Vermelha worth it? What to expect from the catamaran tour",
      description:
        "The Paraíba island that appears and disappears with the tide: what the catamaran tour to Areia Vermelha is like, best season and what to bring.",
      category: "North Coast",
      faq: [
        {
          pergunta: "Does Areia Vermelha exist at any time of year?",
          resposta:
            "Areia Vermelha exists year-round, but is only visible at low tide. The sandbar is permanently in the same location — what changes is the sea level. At high tide, it's submerged. At low tide, it emerges as a beach in the middle of the ocean. The size of the island varies with the day's tide coefficient.",
        },
        {
          pergunta: "Can children go on the catamaran tour to Areia Vermelha?",
          resposta:
            "Yes, the catamaran is a stable vessel and the tour is calm. The crossing on the Jacaré River is gentle and the water at Areia Vermelha is shallow at low tide. Children must be accompanied by a responsible adult throughout the tour.",
        },
        {
          pergunta: "How long does the catamaran tour to Areia Vermelha last?",
          resposta:
            "The exact duration may vary depending on tide, boarding and the day's operation. Murillo confirms the schedule and estimated return before booking.",
        },
      ],
      sections: [
        {
          heading: "What Areia Vermelha is and why it disappears with the tide",
          body: "Areia Vermelha is a sandbar off the coast of Cabedelo, on João Pessoa's North Coast. At high tide, the bar is completely submerged and disappears. At low tide, the sand emerges in the middle of the sea and forms a temporary island — sometimes hundreds of meters long, sometimes smaller, depending on the day's tide coefficient. The name comes from the reddish color of the sand, the result of mixing sediment carried by the Paraíba River with ocean sand. It's one of Paraíba's most photographed sceneries.",
        },
        {
          heading: "What the catamaran tour to Areia Vermelha is like",
          body: "The tour departs from the Jacaré River, in Cabedelo. The catamaran sails through the Paraíba River estuary and enters the Atlantic toward Areia Vermelha. The crossing is relatively short. At Areia Vermelha, visitors can disembark on the island, swim around it, take photos and explore the area. The water around the island has different shades — more greenish near the estuary, more blue toward the open sea. The boat stays anchored nearby while visitors explore.",
        },
        {
          heading: "What to do at Areia Vermelha",
          body: "The main activity is exploring the island and enjoying the scenery — a sand beach in the middle of the ocean, with no buildings, nothing around except water and sky. You can swim around the island, enter the shallow natural pools that form around the nearby reefs and take photos of the catamaran anchored with the ocean in the background. Structure on the island is limited, so bring basic personal items and confirm in advance if any extra activity is available that day.",
        },
        {
          heading: "Best tide and best time to visit",
          body: "Low tide is mandatory — without low tide, Areia Vermelha doesn't exist. The exact time varies every day according to the tide table. The best time of year is September to March, when rains are lower and the sea tends to be calmer and more transparent. But within the right tide conditions, the tour runs year-round. Murillo checks the table before confirming any departure for Areia Vermelha.",
        },
        {
          heading: "Worth combining Areia Vermelha with Sunset at Jacaré?",
          body: "Sunset at Jacaré happens on the banks of the same river from which the catamaran to Areia Vermelha departs. Depending on your day's low tide time, you can do both on the same day: catamaran tour to Areia Vermelha in the morning or early afternoon, and sunset at Jacaré at the end of the afternoon. There's a combined tour that unites the two — talk to Murillo on WhatsApp to check availability and fit it to your tide table.",
        },
      ],
    },
    es: {
      title: "¿Vale la pena Areia Vermelha? Qué esperar del tour en catamarán",
      description:
        "La isla paraibana que aparece y desaparece con la marea: cómo es el tour en catamarán a Areia Vermelha, mejor época y qué llevar.",
      category: "Litoral Norte",
      faq: [
        {
          pergunta: "¿Areia Vermelha existe en cualquier época del año?",
          resposta:
            "Areia Vermelha existe todo el año, pero solo es visible en marea baja. El banco de arena queda permanentemente en el mismo lugar — lo que cambia es el nivel del mar. En marea alta, queda sumergido. En marea baja, emerge como una playa en medio del océano. La extensión de la isla varía según el coeficiente de la marea del día.",
        },
        {
          pergunta: "¿Pueden ir niños en el tour de catamarán a Areia Vermelha?",
          resposta:
            "Sí, el catamarán es un barco estable y el tour es tranquilo. La travesía por el Río Jacaré es calma y el agua en Areia Vermelha es poco profunda en marea baja. Los niños deben estar acompañados por un responsable durante todo el tour.",
        },
        {
          pergunta: "¿Cuánto dura el tour de catamarán a Areia Vermelha?",
          resposta:
            "La duración exacta puede variar según la marea, el embarque y la operación del día. Murillo confirma el horario y la previsión de regreso antes de la reserva.",
        },
      ],
      sections: [
        {
          heading: "Qué es Areia Vermelha y por qué desaparece con la marea",
          body: "Areia Vermelha es un banco de arena ubicado frente a la costa de Cabedelo, en el Litoral Norte de João Pessoa. En marea alta, el banco queda completamente sumergido y desaparece. En marea baja, la arena emerge en medio del mar y forma una isla temporal — a veces con cientos de metros de extensión, a veces menor, dependiendo del coeficiente de la marea. El nombre viene de la coloración rojiza de la arena, resultado de la mezcla de sedimentos traídos por el Río Paraíba con la arena del océano. Es uno de los escenarios más fotografiados de Paraíba.",
        },
        {
          heading: "Cómo es el tour en catamarán a Areia Vermelha",
          body: "El tour parte del Río Jacaré, en Cabedelo. El catamarán navega por el estuario del Río Paraíba y entra al Atlántico rumbo a Areia Vermelha. La travesía es relativamente corta. En Areia Vermelha, los visitantes pueden desembarcar en la isla, nadar a su alrededor, tomar fotos y explorar el área. El agua alrededor de la isla tiene coloración diferente — más verdosa cerca del estuario, azul más hacia mar abierto. El barco queda anclado cerca mientras los visitantes exploran.",
        },
        {
          heading: "Qué hacer en Areia Vermelha",
          body: "La actividad principal es explorar la isla y disfrutar el paisaje — una playa de arena en medio del océano, sin construcción, sin nada alrededor más que agua y cielo. Puedes nadar alrededor de la isla, entrar en las piscinas naturales poco profundas que se forman alrededor de los arrecifes cercanos y tomar fotos del catamarán anclado con el océano de fondo. La estructura en la isla es limitada, así que conviene llevar ítems personales básicos y confirmar antes si hay alguna actividad adicional disponible ese día.",
        },
        {
          heading: "Mejor marea y mejor época para visitar",
          body: "La marea baja es obligatoria — sin marea baja, Areia Vermelha no existe. El horario exacto varía todos los días según la tabla de mareas. La mejor época del año es de septiembre a marzo, cuando las lluvias son menores y el mar suele estar más calmo y transparente. Pero, dentro de las condiciones correctas de marea, el tour sucede todo el año. Murillo consulta la tabla antes de confirmar cualquier salida a Areia Vermelha.",
        },
        {
          heading: "¿Vale combinar Areia Vermelha con el Atardecer del Jacaré?",
          body: "El Atardecer del Jacaré sucede a orillas del mismo río de donde parte el catamarán para Areia Vermelha. Dependiendo del horario de la marea baja de tu día, puedes hacer ambos en el mismo día: tour en catamarán a Areia Vermelha por la mañana o inicio de la tarde, y atardecer en el Jacaré al final de la tarde. Existe un tour combinado que une ambos — habla con Murillo por WhatsApp para verificar disponibilidad y encajar en tu tabla de mareas.",
        },
      ],
    },
  },

  "roteiro-3-dias-joao-pessoa": {
    en: {
      title: "3-Day Itinerary in João Pessoa: what to see, do and enjoy",
      description:
        "Complete 3-day itinerary for João Pessoa: from north coast to south coast, with tide-table guidance and practical tips.",
      category: "Itineraries",
      faq: [
        {
          pergunta: "Can I really do all these tours in 3 days?",
          resposta:
            "Yes, with tide-table planning. The trick is to fit the natural-pool tours into the day when low tide falls at the most convenient time. The other tours — South Coast and North Coast — don't depend on tide and can be fitted into the other days with more flexibility.",
        },
        {
          pergunta: "Do the tours run every day of the week?",
          resposta:
            "Availability varies by tour, date and tide. The best path is to send your dates on WhatsApp so Murillo can confirm which options fit your itinerary.",
        },
        {
          pergunta: "How does the 3-day package with Vem Passear em Jampa work?",
          resposta:
            "The 3-day packages include the main tours with transfer, accompaniment and itinerary organization based on the tide table. Murillo plans the itinerary on WhatsApp before you arrive. The price varies according to the included tours and whether it's a group or private tour. Talk to Murillo to build the ideal package for your group.",
        },
      ],
      sections: [
        {
          heading: "Why João Pessoa deserves at least 3 days",
          body: "João Pessoa has three very different experience axes: natural pools (tide-dependent), South Coast (long beaches, ATV, trails) and North Coast (catamaran, sunset, colonial history). Trying to see everything in one or two days is impossible without compromising the experience. Three days allow proper attention to each axis and still include an afternoon in the historic center. The tide is the element that organizes everything — the natural-pool day will depend on when low tide falls at the right time.",
        },
        {
          heading: "Day 1: Natural Pools — the tide decides the time",
          body: "The first planning step is figuring out when low tide falls on your first day in João Pessoa. If it's in the morning, the day starts early with a tour to Seixas or Picãozinho. If it's in the afternoon, you can do the City Tour in the morning and visit the pools later. Seixas is the most complete — extensive reefs, rich fauna and the Marco Zero of the easternmost point of the Americas. Picãozinho is calmer and recommended for children. Murillo confirms which is in better condition on your specific day.",
        },
        {
          heading: "Day 2: South Coast — Coqueirinho, ATV and empty beaches",
          body: "The South Coast is a full-day tour. The classic itinerary passes through Coqueirinho (natural pools and the ATV starting point on the dunes), Tabatinga (reefs and regulated nudism), Praia Bela (less crowded, good for apnea snorkeling) and other beaches along the coast. ATV in Coqueirinho is a separate activity — worth booking in advance. Departure is early to catch the right tide and the maximum number of beaches.",
        },
        {
          heading: "Day 3: North Coast — Areia Vermelha and sunset at Jacaré",
          body: "The North Coast has two main moments: the catamaran tour to Areia Vermelha (tide-dependent) and Sunset at Jacaré at the end of the afternoon. If low tide falls in the morning, the catamaran tour departs early and there's time to visit Fort Orange before sunset. Areia Vermelha is visual and photogenic — the sand island in the middle of the ocean with the catamaran anchored in the background. Sunset at Jacaré closes the itinerary with the daily spectacle of light and music on the banks of the Paraíba River.",
        },
        {
          heading: "How the tide table reorganizes everything",
          body: "In João Pessoa, the tide table is the real calendar. If you already have your dates, the best path is to send your dates to Murillo on WhatsApp before booking hotel or flight. He checks the table and tells you which tour fits which day. That way you guarantee you'll go to Seixas or Areia Vermelha in the right tide window — and don't end up arriving at high tide, which is the situation that frustrates tourists who don't know João Pessoa the most.",
        },
        {
          heading: "Ready-made 3-day packages with Vem Passear em Jampa",
          body: "Vem Passear em Jampa offers 3-day packages that already include the main organized tours, transfer and complete itinerary guidance. Murillo plans the package according to your dates, group profile and tide table. It's not a rigid package — it's an itinerary made for your group. Talk on WhatsApp to receive options.",
        },
      ],
    },
    es: {
      title: "Itinerario de 3 Días en João Pessoa: qué ver, hacer y disfrutar",
      description:
        "Itinerario completo de 3 días en João Pessoa: del litoral norte al litoral sur, con orientación por la tabla de mareas y consejos prácticos.",
      category: "Itinerarios",
      faq: [
        {
          pergunta: "¿Es posible hacer todos esos tours en 3 días?",
          resposta:
            "Sí, con planificación por la tabla de mareas. El secreto es encajar los tours de piscinas naturales en el día en que la marea baja cae en el horario más conveniente. Los demás tours — Litoral Sur y Litoral Norte — no dependen de marea y pueden encajarse en los otros días con más libertad.",
        },
        {
          pergunta: "¿Los tours salen todos los días de la semana?",
          resposta:
            "La disponibilidad varía según el tour, la fecha y la marea. Lo ideal es enviar tus fechas por WhatsApp para que Murillo confirme qué opciones encajan mejor en tu itinerario.",
        },
        {
          pergunta: "¿Cómo funciona el paquete de 3 días con Vem Passear em Jampa?",
          resposta:
            "Los paquetes de 3 días incluyen los tours principales con transfer, acompañamiento y organización del itinerario por la tabla de mareas. Murillo arma el itinerario por WhatsApp antes de tu llegada. El precio varía según los tours incluidos y si es grupo o privativo. Habla con Murillo para armar el paquete ideal para tu grupo.",
        },
      ],
      sections: [
        {
          heading: "Por qué João Pessoa merece al menos 3 días",
          body: "João Pessoa tiene tres ejes de experiencia muy distintos: piscinas naturales (que dependen de marea), Litoral Sur (playas extensas, cuatriciclo, trails) y Litoral Norte (catamarán, atardecer, historia colonial). Intentar ver todo en un día o dos es imposible sin comprometer la experiencia. Tres días permiten dar atención adecuada a cada eje y aún incluir una tarde en el centro histórico. La marea es el elemento que organiza todo — el día de piscinas naturales dependerá de cuándo cae la marea baja en el horario correcto.",
        },
        {
          heading: "Día 1: Piscinas Naturales — la marea decide el horario",
          body: "El primer paso de la planificación es descubrir cuándo cae la marea baja en tu primer día en João Pessoa. Si es por la mañana, el día empieza temprano con tour a Seixas o Picãozinho. Si es por la tarde, se puede hacer City Tour por la mañana y visitar las piscinas después. Seixas es el más completo — arrecifes extensos, fauna rica y el Marco del punto más oriental de las Américas. Picãozinho es más tranquilo y recomendado para niños. Murillo confirma cuál está con mejor condición en tu día específico.",
        },
        {
          heading: "Día 2: Litoral Sur — Coqueirinho, cuatriciclo y playas desiertas",
          body: "El Litoral Sur es un tour de día entero. El itinerario clásico pasa por Coqueirinho (piscinas naturales y punto de partida del cuatriciclo en las dunas), Tabatinga (arrecifes y naturismo reglamentado), Praia Bela (menos concurrida, buena para snorkel en apnea) y otras playas a lo largo de la costa. El cuatriciclo en Coqueirinho es actividad aparte — vale reservar con anticipación. La salida es temprano para aprovechar la marea correcta y el máximo de playas.",
        },
        {
          heading: "Día 3: Litoral Norte — Areia Vermelha y atardecer en el Jacaré",
          body: "El Litoral Norte tiene dos momentos principales: el tour en catamarán a Areia Vermelha (que depende de marea baja) y el Atardecer del Jacaré al final de la tarde. Si la marea baja cae por la mañana, el tour en catamarán sale temprano y da tiempo de visitar Fort Orange antes del atardecer. Areia Vermelha es visual y fotogénica — la isla de arena en medio del océano con el catamarán anclado al fondo. El Atardecer del Jacaré cierra el itinerario con el espectáculo diario de luz y música a orillas del Río Paraíba.",
        },
        {
          heading: "Cómo la tabla de mareas reorganiza todo",
          body: "En João Pessoa, la tabla de mareas es el calendario de verdad. Si ya tienes tus fechas, el mejor camino es mandar las fechas a Murillo por WhatsApp antes de hacer cualquier reserva de hotel o pasaje. Él verifica la tabla e indica qué tour encajar en qué día. Así garantizas que irás a Seixas o Areia Vermelha en la ventana de marea correcta, y no acabas llegando en marea alta — que es la situación que más frustra al turista que no conoce João Pessoa.",
        },
        {
          heading: "Paquetes listos de 3 días con Vem Passear em Jampa",
          body: "Vem Passear em Jampa ofrece paquetes de 3 días que ya incluyen los tours principales organizados, transfer y orientación completa de itinerario. Murillo arma el paquete según tus fechas, el perfil del grupo y la tabla de mareas. No es un paquete rígido — es un itinerario hecho para tu grupo. Habla por WhatsApp para recibir las opciones.",
        },
      ],
    },
  },

  "litoral-sul-joao-pessoa-o-que-fazer": {
    en: {
      title: "João Pessoa's South Coast: beaches, trails and ATV",
      description:
        "Coqueirinho, Tabatinga, Praia Bela and Tambaba: what to see and do on João Pessoa's south coast in a day tour.",
      category: "South Coast",
      faq: [
        {
          pergunta: "How many beaches can I see on the south coast in one day?",
          resposta:
            "The classic South Coast itinerary includes between 4 and 6 stops depending on distance and the group's pace. Coqueirinho, Tabatinga, Praia Bela and Tambaba are the main ones. With an early start — around 7 or 8 am — you can see them all comfortably and still have time for the ATV in Coqueirinho. The exact departure time and stops of the day are confirmed during service before booking.",
        },
        {
          pergunta: "Is the ATV in Coqueirinho for everyone?",
          resposta:
            "The ATV is driven by the visitor themselves across the dunes near Coqueirinho. No driving license required. Children and people with physical restrictions should check conditions before booking.",
        },
        {
          pergunta: "Is Tambaba a mandatory nudist beach?",
          resposta:
            "No. Tambaba has a regulated nudist area and a regular swimming area. The nudist area is accessed by a separate stretch of the beach. Anyone who doesn't want to participate can stay in the regular area normally.",
        },
      ],
      sections: [
        {
          heading: "João Pessoa's South Coast: what to expect",
          body: "João Pessoa's South Coast begins in Jacarapé, just below Praia de Bessa, and extends for over 30 km to the boundaries with the municipality of Conde. Unlike the city's urban shoreline, the south coast has more preserved beaches, colorful cliffs, less tourist infrastructure and a feel of wild coastline. The full-day tour covers several different beaches in sequence, with stops for swimming, trails and activities. It's considered the most varied itinerary in the region.",
        },
        {
          heading: "Coqueirinho: natural pools, cliffs and ATV",
          body: "Praia do Coqueirinho is the most famous stop on the South Coast. It has a shoreline of coconut trees (which gave it its name), red cliffs in the background and natural pools formed by reefs at low tide. It's the starting point for the ATV on the dunes — a separate activity that crosses dunes and trails in the region at moderate speed. The beach itself is good for swimming and reef exploration at the right tide.",
        },
        {
          heading: "Tabatinga: reefs and the only regularized nudist beach in Paraíba",
          body: "Tabatinga has extensive reefs that form natural pools at low tide. It's also where the regulated nudist beach is located — one of the few in the Northeast with a specifically delimited area. Nudism is optional and restricted to one stretch of the beach; the rest of Tabatinga is visited normally by all kinds of visitors. The scenery is beautiful and the atmosphere is calmer than in Coqueirinho.",
        },
        {
          heading: "Praia Bela: reefs, pools and tranquility",
          body: "Praia Bela lives in the shadow of the most famous South Coast beaches and thus has fewer people. The reefs are extensive and the natural pools at low tide are clear and shallow. It's recommended for snorkeling and for those wanting less movement. The Praia Bela stop and its best tide condition are confirmed according to the chosen itinerary and the day's operation.",
        },
        {
          heading: "Tambaba and the beaches further south",
          body: "Tambaba is the most frequent last stop of the classic South Coast itinerary. After it, the coast continues through more deserted beaches like Coqueirinho do Sul, Carapibus and Barra de Gramame — beaches that require more travel and rarely enter one-day itineraries. Those who want to explore the southernmost coast can hire a specific tour.",
        },
        {
          heading: "How to do the South Coast with itinerary guidance",
          body: "The classic South Coast itinerary by Vem Passear em Jampa departs early from the city and covers the main beaches in sequence, with transfer included. ATV in Coqueirinho can be booked separately. Murillo guides on WhatsApp what to include according to the group's profile — whether there are children, whether the focus is adventure or tranquility, whether you want to add the ATV. The tour can be done in any tide, but the stop at Coqueirinho and Praia Bela pools is best at low tide.",
        },
      ],
    },
    es: {
      title: "Litoral Sur de João Pessoa: playas, trails y cuatriciclo",
      description:
        "Coqueirinho, Tabatinga, Praia Bela y Tambaba: qué ver y hacer en el litoral sur de João Pessoa en un día de tour.",
      category: "Litoral Sur",
      faq: [
        {
          pergunta: "¿Cuántas playas se pueden ver en el litoral sur en un día?",
          resposta:
            "El itinerario clásico del Litoral Sur incluye entre 4 y 6 paradas según la distancia y el ritmo del grupo. Coqueirinho, Tabatinga, Praia Bela y Tambaba son las principales. Con salida temprano — alrededor de las 7h u 8h — se pueden ver todas con comodidad y aún tener tiempo para el cuatriciclo en Coqueirinho. El horario exacto de salida y las paradas del día se confirman en la atención antes de reservar.",
        },
        {
          pergunta: "¿El cuatriciclo en Coqueirinho es para cualquier persona?",
          resposta:
            "El cuatriciclo lo conduce el propio visitante en las dunas cercanas a Coqueirinho. No se necesita licencia. Niños y personas con restricción física deben consultar las condiciones antes de reservar.",
        },
        {
          pergunta: "¿Tambaba es playa de nudismo obligatorio?",
          resposta:
            "No. Tambaba tiene un área de naturismo reglamentada y un área de baño común. El área de naturismo se accede por un tramo separado de la playa. Quien no quiera participar puede quedarse en el área común normalmente.",
        },
      ],
      sections: [
        {
          heading: "El Litoral Sur de João Pessoa: qué esperar",
          body: "El Litoral Sur de João Pessoa comienza en Jacarapé, justo después de la Praia de Bessa, y se extiende por más de 30 km hasta los límites con el municipio de Conde. A diferencia de la orilla urbana de la ciudad, el litoral sur tiene playas más preservadas, acantilados de colores, menos infraestructura turística y una sensación de litoral salvaje. El tour de día entero recorre varias playas diferentes en secuencia, con paradas para baño, trails y actividades. Es considerado el itinerario más variado de la región.",
        },
        {
          heading: "Coqueirinho: piscinas naturales, acantilados y cuatriciclo",
          body: "La Praia do Coqueirinho es la parada más famosa del Litoral Sur. Tiene una orilla con cocoteros (que le dieron el nombre), acantilados rojos al fondo y piscinas naturales formadas por arrecifes en marea baja. Es el punto de partida del cuatriciclo en las dunas — una actividad aparte que recorre las dunas y trails de la región a velocidad moderada. La playa en sí es buena para baño y exploración de los arrecifes en la marea correcta.",
        },
        {
          heading: "Tabatinga: arrecifes y la única playa naturista regularizada de Paraíba",
          body: "Tabatinga tiene arrecifes extensos que forman piscinas naturales en marea baja. Es también donde queda la playa naturista reglamentada — una de las pocas del Nordeste con área específica delimitada. El naturismo es opcional y restringido a un tramo de la playa; el resto de Tabatinga es frecuentado normalmente por todo tipo de visitante. El paisaje es bonito y el ambiente más tranquilo que en Coqueirinho.",
        },
        {
          heading: "Praia Bela: arrecifes, piscinas y tranquilidad",
          body: "Praia Bela vive a la sombra de las playas más famosas del Litoral Sur y por eso tiene menos gente. Los arrecifes son extensos y las piscinas naturales en marea baja son claras y poco profundas. Está recomendada para esnórquel y para quien quiere menos movimiento. La parada en Praia Bela y su mejor condición de marea se confirman según el itinerario elegido y la operación del día.",
        },
        {
          heading: "Tambaba y las playas más al sur",
          body: "Tambaba es la última parada más frecuente del itinerario clásico del Litoral Sur. Después de ella, el litoral continúa por playas más desiertas como Coqueirinho do Sul, Carapibus y Barra de Gramame — playas que exigen más desplazamiento y raramente entran en itinerarios de un día. Quien quiera explorar el litoral más al sur puede contratar un tour específico.",
        },
        {
          heading: "Cómo hacer el Litoral Sur con orientación de itinerario",
          body: "El itinerario clásico del Litoral Sur de Vem Passear em Jampa sale temprano de la ciudad y recorre las playas principales en secuencia, con transfer incluido. El cuatriciclo en Coqueirinho puede reservarse aparte. Murillo orienta por WhatsApp qué incluir según el perfil del grupo — si hay niños, si el foco es aventura o tranquilidad, si quieres agregar el cuatriciclo. El tour puede hacerse con cualquier marea, pero la parada en las piscinas de Coqueirinho y Praia Bela es mejor en marea baja.",
        },
      ],
    },
  },

  "litoral-norte-joao-pessoa-o-que-fazer": {
    en: {
      title: "João Pessoa's North Coast: Cabedelo, Jacaré and Areia Vermelha",
      description:
        "Sunset at Jacaré, Areia Vermelha island and colonial history: what to see on João Pessoa's north coast and how to organize the itinerary.",
      category: "North Coast",
      faq: [
        {
          pergunta: "Is Sunset at Jacaré worth it?",
          resposta:
            "It is — especially if it's your first time in João Pessoa. The event happens on the banks of the Jacaré River, in Cabedelo, with tourists gathered on the boats and riverbanks watching the sun set over the estuary while a saxophonist plays live. It's more a collective experience than a private sunset, but the scenery is genuinely beautiful.",
        },
        {
          pergunta: "What time does the sunset at Jacaré happen?",
          resposta:
            "The time varies throughout the year: in October the sun sets around 5 pm; in January, around 5:45 pm. Saxophonist Jurandy do Sax performs Ravel's Bolero for about 17 minutes — exactly the duration of the sunset. Arrive at least 30 minutes early to secure a good spot.",
        },
        {
          pergunta: "How do I get from João Pessoa to Cabedelo?",
          resposta:
            "Cabedelo is about 18 km from João Pessoa, connected by BR-230. The organized tour by Vem Passear em Jampa includes round-trip transfer. To go on your own, you can take a bus or use a transport app.",
        },
      ],
      sections: [
        {
          heading: "João Pessoa's North Coast: Cabedelo and the Paraíba River estuary",
          body: "João Pessoa's North Coast has its hub in the municipality of Cabedelo, separated from the capital by the Paraíba River. The river estuary is the environment that defines the north coast landscape — a mix of fresh water from the river with salt water from the Atlantic, which creates different colorations and unique tide conditions. Cabedelo is less than 20 km from João Pessoa's center and can be visited by car, bus or as part of an organized tour.",
        },
        {
          heading: "Areia Vermelha: the island that's born and disappears with the tide",
          body: "Areia Vermelha is the most visual highlight of the North Coast. It's a sandbar that's submerged at high tide and emerges as an island in the ocean at low tide. Access is by catamaran from the Jacaré River. The island has reddish sand — a color that comes from mixing sediment from the Paraíba River with sand from the Atlantic. Around the island, at low tide, shallow natural pools form with little fish and coral.",
        },
        {
          heading: "Sunset at Jacaré: the most famous in João Pessoa",
          body: "Sunset at Jacaré isn't just a beautiful sunset — it's a collective ritual. Every afternoon, tourists and locals gather on the banks of the Jacaré River to watch the sun set over the Paraíba River estuary. The event is recognized as one of the most beautiful in Brazil — a reputation built over decades by the beauty of the estuary and the musical tradition of saxophonist Jurandy do Sax, who performs Ravel's Bolero live daily. The time varies throughout the year according to the sun's position.",
        },
        {
          heading: "Fortaleza de Santa Catarina: colonial history on the Paraíba River banks",
          body: "Fortaleza de Santa Catarina is a Portuguese fortress built in 1585 on the banks of the Paraíba River, in Cabedelo — one of the oldest in Brazil. It was built to defend the river mouth from attacks by privateers and European powers vying for control of the Northeast coast. The structure is open for visitation and is near the Jacaré boarding point. It's a short stop but with real historical weight — 440 years of history concentrated in a privileged viewpoint over the estuary.",
        },
        {
          heading: "How to organize the North Coast itinerary",
          body: "The ideal is to combine the catamaran tour to Areia Vermelha in the morning (when the tide is usually low) with a visit to Fortaleza de Santa Catarina in the early afternoon and Sunset at Jacaré at the end of the afternoon. Murillo checks your day's tide table and organizes the right sequence. There's also a combined tour that joins Areia Vermelha and sunset at Jacaré in a single itinerary — talk to Murillo on WhatsApp to check availability.",
        },
      ],
    },
    es: {
      title: "Litoral Norte de João Pessoa: Cabedelo, Jacaré y Areia Vermelha",
      description:
        "Atardecer en el Jacaré, isla de Areia Vermelha e historia colonial: qué ver en el litoral norte de João Pessoa y cómo organizar el itinerario.",
      category: "Litoral Norte",
      faq: [
        {
          pergunta: "¿Vale la pena el atardecer del Jacaré?",
          resposta:
            "Vale — especialmente si es tu primera vez en João Pessoa. El evento sucede a orillas del Río Jacaré, en Cabedelo, con turistas reunidos en los barcos y en las márgenes del río mirando el sol ponerse sobre el estuario mientras un saxofonista toca en vivo. Es más una experiencia colectiva que un show particular de atardecer, pero el paisaje es genuinamente hermoso.",
        },
        {
          pergunta: "¿Cuál es el horario del atardecer en el Jacaré?",
          resposta:
            "El horario varía a lo largo del año: en octubre el sol se pone alrededor de las 17h; en enero, alrededor de las 17h45. El saxofonista Jurandy do Sax ejecuta el Bolero de Ravel durante aproximadamente 17 minutos — que es exactamente la duración del atardecer. Vale llegar con al menos 30 minutos de antelación para garantizar un buen lugar.",
        },
        {
          pergunta: "¿Cómo ir de João Pessoa a Cabedelo?",
          resposta:
            "Cabedelo está a unos 18 km de João Pessoa, conectada por la BR-230. El tour organizado de Vem Passear em Jampa incluye transfer ida y vuelta. Para ir por cuenta propia, se puede tomar autobús o usar app de transporte.",
        },
      ],
      sections: [
        {
          heading: "El Litoral Norte de João Pessoa: Cabedelo y el estuario del Río Paraíba",
          body: "El Litoral Norte de João Pessoa tiene como polo central el municipio de Cabedelo, separado de la capital por el Río Paraíba. El estuario del río es el ambiente que define el paisaje del litoral norte — una mezcla de agua dulce del río con el agua salada del Atlántico, que crea coloraciones diferentes y condiciones únicas de marea. Cabedelo está a menos de 20 km del centro de João Pessoa y puede visitarse en auto, autobús o como parte de un tour organizado.",
        },
        {
          heading: "Areia Vermelha: la isla que nace y desaparece con la marea",
          body: "Areia Vermelha es el destaque más visual del Litoral Norte. Es un banco de arena que queda sumergido en marea alta y emerge como una isla en el océano en marea baja. El acceso se hace en catamarán desde el Río Jacaré. La isla tiene arena rojiza — color que viene de la mezcla de sedimentos del Río Paraíba con la arena del Atlántico. Alrededor de la isla, en marea baja, se forman piscinas naturales poco profundas con pececitos y coral.",
        },
        {
          heading: "El Atardecer del Jacaré: el más famoso de João Pessoa",
          body: "El Atardecer del Jacaré no es solo un atardecer bonito — es un ritual colectivo. Todas las tardes, turistas y pessoenses se reúnen a orillas del Río Jacaré para mirar el sol ponerse sobre el estuario del Río Paraíba. El evento es reconocido como uno de los más hermosos de Brasil — una reputación consolidada a lo largo de décadas por la belleza del estuario y la tradición musical del saxofonista Jurandy do Sax, que toca el Bolero de Ravel en vivo a diario. El horario varía a lo largo del año según la posición del sol.",
        },
        {
          heading: "Fortaleza de Santa Catarina: historia colonial a orillas del Río Paraíba",
          body: "La Fortaleza de Santa Catarina es una fortaleza portuguesa construida en 1585 a orillas del Río Paraíba, en Cabedelo — una de las más antiguas de Brasil. Fue construida para defender la boca del río de los ataques de corsarios y potencias europeas que disputaban el control del litoral nordestino. La estructura está abierta a visitación y queda cerca del embarcadero del Jacaré. Es una parada corta pero con peso histórico real — 440 años de historia concentrados en un punto de vista privilegiado sobre el estuario.",
        },
        {
          heading: "Cómo organizar el itinerario del Litoral Norte",
          body: "Lo ideal es combinar el tour en catamarán a Areia Vermelha por la mañana (cuando la marea suele estar baja) con la visita a la Fortaleza de Santa Catarina al inicio de la tarde y el Atardecer del Jacaré al final de la tarde. Murillo verifica la tabla de mareas de tu día y organiza la secuencia correcta. Existe también un tour combinado que une Areia Vermelha y atardecer en el Jacaré en un único itinerario — habla con Murillo por WhatsApp para verificar disponibilidad.",
        },
      ],
    },
  },

  "tabua-de-mares-piscinas-naturais": {
    en: {
      title: "Tide Table for Natural Pools in João Pessoa",
      description:
        "How to read the tide table and choose the best day to visit Seixas, Picãozinho and Areia Vermelha in João Pessoa.",
      category: "Tides & Nature",
      faq: [
        {
          pergunta: "Where to find the official João Pessoa tide table?",
          resposta:
            "The official tide table is published by the Brazilian Navy on the Directorate of Hydrography and Navigation (DHN) website. For João Pessoa, the reference station is Cabedelo (PB). The consultation is free and shows times and heights for every day of the year.",
        },
        {
          pergunta: "What happens if the tide isn't good on my day?",
          resposta:
            "If your day's low tide falls at an incompatible time, options include: reschedule for the next day if low tide falls at a better time, visit a different natural pool that has a tide window at another time, or do a tour that doesn't depend on tide on the same day — like the South Coast or City Tour. Murillo guides you to the best alternative for your case.",
        },
        {
          pergunta: "Can I visit the natural pools at any tide?",
          resposta:
            "No. At high tide, the pools are submerged and the tour loses most of its appeal. Low tide is the minimum requirement. Ideal is a low tide with a high coefficient, which uncovers more reef area and leaves the pools shallower and wider. No departure is confirmed without checking the day's tide conditions.",
        },
      ],
      sections: [
        {
          heading: "What the tide table is and why it matters in João Pessoa",
          body: "The tide table is the official document — published by the Brazilian Navy — that predicts tide times and heights for each port or station along the coast. In João Pessoa, the reference station is Cabedelo (PB). The table governs natural-pool activities in the region: without low tide, the pools don't exist. At high tide, the reefs are submerged and the sea water is deep and rough above them. That's why every natural-pool departure in João Pessoa is planned from the tide table.",
        },
        {
          heading: "How to read the tide table: coefficient, range and time",
          body: "The table shows for each day the alternation between high (high tide) and low (low tide) tides, with time and height in meters. The tide coefficient indicates intensity — higher values mean more difference between high and low tides, and therefore more expressive natural pools at low tide. A low coefficient may mean low tide doesn't fully uncover the reefs. For João Pessoa's natural pools, the ideal is a low tide with a high coefficient and at a time compatible with the tour — preferably in the morning, before the sun gets too strong.",
        },
        {
          heading: "Seixas, Picãozinho and Areia Vermelha: when each is best",
          body: "Seixas and Picãozinho respond well to any low tide with reasonable coefficient — the difference is that with a high coefficient the pools are larger and shallower. Areia Vermelha depends on low tide for the island to emerge — without low tide, it simply doesn't exist. Penha also depends on low tide for the pools to work. The practical rule is: check the table for your dates, identify days with low tide in the morning and higher coefficient, and book those days for natural pools.",
        },
        {
          heading: "The tide cycle in João Pessoa over the month",
          body: "Tides follow lunar cycles of about 14 days between the strongest tides (syzygy, near full and new moon) and weakest tides (quadrature, near first and last quarter). On syzygy days, the coefficient is higher and the natural pools are more expressive. On quadrature days, low tide is less intense and the pools may be shallower or less accessible. Planning the visit on dates near full or new moon tends to ensure better conditions.",
        },
        {
          heading: "How Vem Passear em Jampa confirms the tide before each departure",
          body: "No natural-pool tour is confirmed without checking the tide table for the day. When you contact us on WhatsApp, Murillo checks the table for your dates and tells you the best tide window for each tour. If your day's tide isn't good for Seixas, for example, he guides whether Picãozinho or another option works better. This guidance is part of the service — not charged separately.",
        },
      ],
    },
    es: {
      title: "Tabla de Mareas para Piscinas Naturales en João Pessoa",
      description:
        "Cómo leer la tabla de mareas y elegir el mejor día para visitar Seixas, Picãozinho y Areia Vermelha en João Pessoa.",
      category: "Mareas y Naturaleza",
      faq: [
        {
          pergunta: "¿Dónde encontrar la tabla de mareas oficial de João Pessoa?",
          resposta:
            "La tabla de mareas oficial es publicada por la Marina de Brasil en el sitio de la Dirección de Hidrografía y Navegación (DHN). Para João Pessoa, la estación de referencia es Cabedelo (PB). La consulta es gratuita y muestra horarios y alturas de marea para cada día del año.",
        },
        {
          pergunta: "¿Qué pasa si la marea no está buena en mi día?",
          resposta:
            "Si la marea baja de tu día cae en un horario incompatible con el tour, hay opciones: reprogramar para el día siguiente si la marea baja cae en mejor horario, visitar una piscina natural diferente que tenga ventana de marea en otro horario, o hacer un tour que no depende de marea en el mismo día — como el Litoral Sur o el City Tour. Murillo orienta cuál es la mejor alternativa para tu caso.",
        },
        {
          pergunta: "¿Es posible visitar las piscinas naturales con cualquier marea?",
          resposta:
            "No. Con marea alta, las piscinas quedan sumergidas y el tour pierde casi todo el atractivo. La marea baja es el requisito mínimo. Lo ideal es una marea baja con coeficiente elevado, que descubre más área de los arrecifes y deja las piscinas más rasas y amplias. Ninguna salida se confirma sin verificar las condiciones de marea del día.",
        },
      ],
      sections: [
        {
          heading: "Qué es la tabla de mareas y por qué importa en João Pessoa",
          body: "La tabla de mareas es el documento oficial — publicado por la Marina de Brasil — que prevé los horarios y alturas de marea para cada puerto o estación a lo largo del litoral. En João Pessoa, la estación de referencia es Cabedelo (PB). La tabla es lo que rige las actividades de piscinas naturales en la región: sin marea baja, las piscinas no existen. Con marea alta, los arrecifes quedan sumergidos y el agua del mar queda profunda y agitada sobre ellos. Por eso, toda salida a piscinas naturales en João Pessoa se planifica a partir de la tabla de mareas.",
        },
        {
          heading: "Cómo leer la tabla de mareas: coeficiente, amplitud y horario",
          body: "La tabla muestra para cada día la alternancia entre mareas altas (pleamar) y mareas bajas (bajamar), con horario y altura en metros. El coeficiente de marea indica la intensidad — valores más altos significan más diferencia entre marea alta y baja, y por lo tanto piscinas naturales más expresivas en marea baja. Un coeficiente bajo puede significar que la marea baja no descubre completamente los arrecifes. Para las piscinas naturales de João Pessoa, lo ideal es una marea baja con coeficiente elevado y en horario compatible con el tour — preferentemente por la mañana, antes de que el sol sea muy fuerte.",
        },
        {
          heading: "Seixas, Picãozinho y Areia Vermelha: cuándo cada una está mejor",
          body: "Seixas y Picãozinho responden bien a cualquier marea baja con coeficiente razonable — la diferencia es que con coeficiente alto las piscinas son más grandes y rasas. Areia Vermelha depende de marea baja para que la isla emerja — sin marea baja simplemente no existe. Penha también depende de marea baja para que las piscinas funcionen. La regla práctica es: consulta la tabla para tus fechas, identifica los días con marea baja por la mañana y coeficiente más alto, y reserva esos días para las piscinas naturales.",
        },
        {
          heading: "El ciclo de las mareas en João Pessoa a lo largo del mes",
          body: "Las mareas siguen ciclos lunares de aproximadamente 14 días entre las mareas más fuertes (sicigia, cerca de luna llena y luna nueva) y las mareas más débiles (cuadratura, cerca de los cuartos creciente y menguante). En los días de sicigia, el coeficiente es mayor y las piscinas naturales son más expresivas. En los días de cuadratura, la marea baja es menos intensa y las piscinas pueden quedar más rasas o menos accesibles. Planificar la visita en fechas cercanas a luna llena o nueva tiende a garantizar mejores condiciones.",
        },
        {
          heading: "Cómo Vem Passear em Jampa confirma la marea antes de cada salida",
          body: "Ningún tour de piscinas naturales se confirma sin verificación de la tabla de mareas del día. Cuando contactas por WhatsApp, Murillo verifica la tabla para tus fechas e indica cuál es la mejor ventana de marea para cada tour. Si la marea de tu día no está buena para Seixas, por ejemplo, él orienta si Picãozinho u otra opción funciona mejor. Esa orientación es parte de la atención — no se cobra aparte.",
        },
      ],
    },
  },

  "joao-pessoa-com-criancas": {
    en: {
      title: "João Pessoa with Children: safe tours and practical tips",
      description:
        "Which tours in João Pessoa work well with children, what to look for in safety and practical tips to enjoy the family trip.",
      category: "Family & Kids",
      faq: [
        {
          pergunta: "Are children's life vests available on the tours?",
          resposta:
            "Yes. Life vests are available onboard on aquatic tours. They're recommended for non-swimmers and children regardless of swimming ability.",
        },
        {
          pergunta: "Which tour is best for small children?",
          resposta:
            "Picãozinho is João Pessoa's calmest and shallowest natural pool — great for small children. The catamaran to Areia Vermelha is also stable and the island has very shallow water. The City Tour by van is suitable for any age. For children aged 0 to 5, Murillo recommends the best option based on tide, transfer time and family profile.",
        },
        {
          pergunta: "What's the minimum age for the tours?",
          resposta:
            "Minimum age and restrictions vary by tour, especially for catamaran, ATV and full-day South Coast itineraries. Confirm the conditions on WhatsApp before booking.",
        },
      ],
      sections: [
        {
          heading: "Is João Pessoa a good destination for children?",
          body: "João Pessoa is one of the safest capitals in the Northeast and has a calm beach structure, without strong currents on most of the shoreline. The natural pools, when visited at the right low tide, have shallow and calm water — ideal for children. Traffic in the city is less chaotic than in Recife or Fortaleza. And the local people are genuinely welcoming with families and children. The city works well as a family destination as long as the itinerary is planned with the tide table in mind.",
        },
        {
          heading: "Natural pools with children: what to consider",
          body: "Picãozinho is the most recommended natural pool for small children: close to shore, short boat crossing, and shallow enough water to stand in most of the area. Seixas also works for older children — the reefs are more extensive and the fauna is richer, but access is a bit farther. Life vests are available and recommended regardless of swimming ability. Water-resistant sunscreen, in good amount, is indispensable.",
        },
        {
          heading: "Areia Vermelha by catamaran with children",
          body: "The catamaran is a stable boat, without big waves on the Jacaré River crossing. Areia Vermelha has very shallow water when the island is emerged — children love walking on the sand in the middle of the ocean. It's one of the most photogenic tours and usually delights children of all ages. Children must always be accompanied by a responsible adult, and any specific restriction is confirmed before booking.",
        },
        {
          heading: "City Tour: the urban itinerary that works for any age",
          body: "The City Tour covers João Pessoa's historic center, Cabo Branco Lighthouse, Lagoa (Parque Solon de Lucena) and other points of the city. It's done in an air-conditioned van with stops for photos and walking. Doesn't depend on tide and can be done at any time. Children usually enjoy the Lighthouse and Lagoa — the park has open space to run and food kiosks.",
        },
        {
          heading: "Practical tips for traveling with children in João Pessoa",
          body: "Sunscreen factor 50 or higher, water-resistant, applied in advance before getting on the boat. Sun-protective robe or shirt for children. Plenty of water — Northeast heat dehydrates quickly, especially in the pools where the heat sensation is lower. Light snack for long tours. Hat. Early start for pool tours — low tide is usually in the morning, which coincides with less strong sun and fewer tourists.",
        },
        {
          heading: "Minimum age and restrictions per tour",
          body: "Before booking, confirm on WhatsApp whether there is a minimum age, physical restriction or special recommendation for your chosen tour. This is especially important for activities such as ATV in Coqueirinho, cylinder diving, Areia Vermelha catamaran and full-day South Coast itineraries.",
        },
      ],
    },
    es: {
      title: "João Pessoa con Niños: tours seguros y consejos prácticos",
      description:
        "Qué tours en João Pessoa funcionan bien con niños, qué observar en seguridad y consejos prácticos para aprovechar el viaje en familia.",
      category: "Familia y Niños",
      faq: [
        {
          pergunta: "¿Hay chalecos salvavidas para niños en los tours?",
          resposta:
            "Sí. Hay chalecos salvavidas a bordo en los tours acuáticos. Se recomiendan para no-nadadores y niños independiente de la habilidad en el agua.",
        },
        {
          pergunta: "¿Qué tour es más indicado para niños pequeños?",
          resposta:
            "Picãozinho es la piscina natural más tranquila y rasa de João Pessoa — excelente para niños pequeños. El catamarán a Areia Vermelha también es estable y la isla tiene agua muy rasa. El City Tour en van es indicado para cualquier edad. Para niños de 0 a 5 años, Murillo orienta la mejor opción según marea, desplazamiento y perfil de la familia.",
        },
        {
          pergunta: "¿Cuál es la edad mínima para los tours?",
          resposta:
            "La edad mínima y las restricciones varían según el tour, especialmente para catamarán, cuatriciclo e itinerarios de día completo por el Litoral Sur. Confirma las condiciones por WhatsApp antes de reservar.",
        },
      ],
      sections: [
        {
          heading: "¿João Pessoa es buen destino para niños?",
          body: "João Pessoa es una de las capitales más seguras del Nordeste y tiene una estructura de playa tranquila, sin corrientes fuertes en la mayor parte de la orilla. Las piscinas naturales, cuando se visitan en la marea baja correcta, tienen agua rasa y calma — ideal para niños. El tránsito en la ciudad es menos caótico que en Recife o Fortaleza. Y el pueblo pessoense es genuinamente acogedor con familias y niños. La ciudad funciona bien como destino familiar siempre que el itinerario sea planificado con la tabla de mareas en mente.",
        },
        {
          heading: "Piscinas naturales con niños: qué considerar",
          body: "Picãozinho es la piscina natural más recomendada para niños pequeños: cerca de la orilla, la travesía en barco es corta y el agua es rasa lo suficiente para quedarse de pie en buena parte del área. Seixas también funciona para niños mayores — los arrecifes son más extensos y la fauna más rica, pero el acceso es un poco más lejano. Hay chaleco salvavidas disponible y recomendado independiente de la habilidad de nadar. Protector solar resistente al agua, en cantidad, es indispensable.",
        },
        {
          heading: "Areia Vermelha en catamarán con niños",
          body: "El catamarán es un barco estable, sin grandes olas en la travesía por el Río Jacaré. Areia Vermelha tiene agua muy rasa cuando la isla está emergida — los niños adoran caminar por la arena en medio del océano. Es uno de los tours más fotogénicos y que suele encantar a niños de todas las edades. Los niños deben estar siempre acompañados por un responsable, y cualquier restricción específica se confirma antes de la reserva.",
        },
        {
          heading: "City Tour: el itinerario urbano que funciona para cualquier edad",
          body: "El City Tour recorre el centro histórico de João Pessoa, el Faro del Cabo Branco, la Lagoa (Parque Solon de Lucena) y otros puntos de la ciudad. Se hace en van con aire acondicionado y tiene paradas para fotos y paseo a pie. No depende de marea y puede hacerse en cualquier horario. A los niños suele gustarles el Faro y la Lagoa — el parque tiene espacio abierto para correr y quioscos de comida.",
        },
        {
          heading: "Consejos prácticos para viajar con niños en João Pessoa",
          body: "Protector solar factor 50 o más, resistente al agua, aplicado con antelación antes de entrar al barco. Bata o camiseta anti-UV para niños. Agua en abundancia — el calor del Nordeste deshidrata rápido, especialmente en las piscinas donde la sensación de calor es menor. Snack ligero para tours largos. Sombrero. Salida temprano para los tours de piscinas — la marea baja suele ser por la mañana, lo que coincide con el horario de menos sol fuerte y menos turistas.",
        },
        {
          heading: "Edad mínima y restricciones por tour",
          body: "Antes de reservar, confirma por WhatsApp si hay edad mínima, restricción física o recomendación especial para el tour elegido. Esto es especialmente importante en actividades como cuatriciclo en Coqueirinho, buceo con cilindro, catamarán a Areia Vermelha e itinerarios de día completo por el Litoral Sur.",
        },
      ],
    },
  },

  "transfer-aeroporto-joao-pessoa": {
    en: {
      title: "Transfer from João Pessoa Airport: how it works",
      description:
        "Transfer options from Presidente Castro Pinto Airport to João Pessoa, with 24/7 service and how to schedule before arriving.",
      category: "Logistics",
      faq: [
        {
          pergunta: "Does the transfer work for late-night arrivals?",
          resposta:
            "Yes. The Vem Passear em Jampa transfer operates 24 hours a day, 7 days a week, including late nights and holidays. Booking is done in advance on WhatsApp.",
        },
        {
          pergunta: "Can I book the transfer at the last minute?",
          resposta:
            "It's possible, but we recommend booking at least 24 hours in advance to ensure availability. For late-night or holiday trips, the more advance the better. Get in touch on WhatsApp as soon as you have your flight number confirmed.",
        },
        {
          pergunta: "Does the transfer take me to any address in João Pessoa?",
          resposta:
            "Yes, the transfer drops you off directly at your hotel, inn or residence address in João Pessoa. For nearby cities such as Cabedelo, Santa Rita or Bayeux, check availability and pricing during service.",
        },
      ],
      sections: [
        {
          heading: "Presidente Castro Pinto Airport: location and distance",
          body: "Presidente Castro Pinto Airport is located in the municipality of Bayeux, approximately 11 km from the center of João Pessoa and about 15 km from the shoreline (Manaíra, Tambaú, Cabo Branco). Leaving the airport, especially at night or late, can be a stressful moment for someone who's never been to the city — without references, without guaranteed wi-fi, with luggage. A scheduled transfer solves this: you leave the arrival hall and already have a car waiting with your name.",
        },
        {
          heading: "Transport options from the airport to João Pessoa",
          body: "Available options to leave João Pessoa Airport include: rideshare apps (Uber and 99, with varying nighttime availability), conventional taxi (queue at the terminal exit), intercity bus (for those comfortable with public transport and less luggage) and scheduled private transfer. Private transfer is the most comfortable option for groups, families with children, late-night arrivals or travelers with bulky luggage.",
        },
        {
          heading: "Vem Passear em Jampa 24h transfer: how it works",
          body: "The Vem Passear em Jampa transfer is private — only your group goes in the vehicle. Booking is done on WhatsApp before the trip: you provide your flight number, arrival time and destination address. Murillo or his team monitors the flight and adjusts in case of delays. The vehicle waits at the terminal exit. Vehicle type, passenger capacity, luggage space and price are confirmed according to the requested route.",
        },
        {
          heading: "How much does the airport transfer cost?",
          body: "Transfer pricing is quoted case by case, according to origin, destination, date, time, number of passengers and luggage. Send these details on WhatsApp to receive the correct quote.",
        },
        {
          heading: "Is it worth hiring transfer before arriving in João Pessoa?",
          body: "For those arriving at night or late, especially with children or lots of luggage, the transfer pays off through peace of mind. You leave the arrival hall without needing to install an app, without depending on wi-fi, without queues. The car is already waiting with your name. For daytime arrivals with little luggage, rideshare apps are a functional alternative. For larger groups or those already using Vem Passear tours during the trip, it makes sense to unify the service and book the transfer along with the tours.",
        },
      ],
    },
    es: {
      title: "Transfer desde el Aeropuerto de João Pessoa: cómo funciona",
      description:
        "Opciones de transfer desde el Aeropuerto Presidente Castro Pinto a João Pessoa, con atención 24h y cómo reservar antes de llegar.",
      category: "Logística",
      faq: [
        {
          pergunta: "¿El transfer funciona para llegadas de madrugada?",
          resposta:
            "Sí. El transfer de Vem Passear em Jampa funciona 24 horas al día, 7 días a la semana, incluyendo madrugadas y feriados. La reserva se hace con antelación por WhatsApp.",
        },
        {
          pergunta: "¿Puedo reservar el transfer a última hora?",
          resposta:
            "Es posible, pero lo recomendado es reservar con al menos 24 horas de antelación para garantizar disponibilidad. Para viajes de madrugada o feriados, más antelación siempre es mejor. Entra en contacto por WhatsApp en cuanto tengas el número de vuelo confirmado.",
        },
        {
          pergunta: "¿El transfer lleva a cualquier dirección en João Pessoa?",
          resposta:
            "Sí, el transfer lleva directo a la dirección de hotel, posada o residencia en João Pessoa. Para ciudades cercanas, como Cabedelo, Santa Rita o Bayeux, consulta disponibilidad y valor en la atención.",
        },
      ],
      sections: [
        {
          heading: "El Aeropuerto Presidente Castro Pinto: ubicación y distancia",
          body: "El Aeropuerto Presidente Castro Pinto queda en el municipio de Bayeux, a aproximadamente 11 km del centro de João Pessoa y a unos 15 km de la orilla (Manaíra, Tambaú, Cabo Branco). La salida del aeropuerto, especialmente de noche o de madrugada, puede ser un momento de estrés para quien nunca estuvo en la ciudad — sin referencias, sin wi-fi garantizado, con equipaje. Un transfer reservado resuelve ese problema: sales del desembarque y ya tienes un auto esperando con tu nombre.",
        },
        {
          heading: "Opciones de transporte del aeropuerto a João Pessoa",
          body: "Las opciones disponibles para salir del Aeropuerto de João Pessoa incluyen: apps de transporte (Uber y 99, con disponibilidad variable de noche), taxi convencional (fila en la salida del terminal), autobús intermunicipal (para quien está cómodo con transporte público y tiene menos equipaje) y transfer privativo reservado. El transfer privativo es la opción más cómoda para grupos, familias con niños, llegadas de madrugada o viajeros con equipaje voluminoso.",
        },
        {
          heading: "Transfer 24h de Vem Passear em Jampa: cómo funciona",
          body: "El transfer de Vem Passear em Jampa es privativo — solo tu grupo va en el vehículo. La reserva se hace por WhatsApp antes del viaje: pasas el número de vuelo, el horario de llegada y la dirección de destino. Murillo o su equipo monitorea el vuelo y ajusta en caso de atraso. El vehículo aguarda en la salida del terminal. Tipo de vehículo, capacidad de pasajeros, equipaje y valor se confirman según el trayecto solicitado.",
        },
        {
          heading: "¿Cuánto cuesta el transfer del aeropuerto?",
          body: "El valor del transfer se cotiza caso por caso, según origen, destino, fecha, horario, número de pasajeros y equipaje. Envía esos datos por WhatsApp para recibir la cotización correcta.",
        },
        {
          heading: "¿Vale contratar el transfer antes de llegar a João Pessoa?",
          body: "Para quien llega de noche o madrugada, especialmente con niños o mucho equipaje, el transfer vale bastante por la tranquilidad. Sales del desembarque sin necesitar instalar app, sin depender de wi-fi, sin fila. El auto ya está esperando con tu nombre. Para llegadas de día y con poco equipaje, las apps de transporte son una alternativa funcional. Para grupos más grandes o quien ya va a usar los tours de Vem Passear durante el viaje, tiene sentido unificar la atención y reservar el transfer junto con los tours.",
        },
      ],
    },
  },

  "melhor-epoca-joao-pessoa": {
    en: {
      title: "Best Time to Visit João Pessoa: climate, rain and tide guide",
      description:
        "When to go to João Pessoa: September to February have less rain, more sun and favorable tides for natural pools. Month-by-month guide with practical tips.",
      category: "Tides & Nature",
      faq: [
        {
          pergunta: "Which month has the least rain in João Pessoa?",
          resposta:
            "The period October to November tends to have the months with least accumulated rain in João Pessoa. October and November are especially consistent: sunny days, little rain, temperature between 28°C and 31°C. June is historically the rainiest month — averages can exceed 350 mm. September to February is the dry period overall.",
        },
        {
          pergunta: "Is João Pessoa hot all year round?",
          resposta:
            "Yes. Temperature in João Pessoa ranges between 24°C and 32°C throughout the year, with no cold period. July and August are slightly milder — especially at night — but during the day the heat remains. Sunscreen is needed at any time of year.",
        },
        {
          pergunta: "Is July a good time to visit João Pessoa?",
          resposta:
            "July is the peak of the winter high season — hotels fill up and tours become more competitive. The weather is starting to improve (July is drier than June), but there's still more cloudiness than in October. If the priority is more stable weather, fewer people and more accessible prices, October and November are better. For those who can only travel in July, it's still worth it — just book in advance.",
        },
      ],
      sections: [
        {
          heading: "João Pessoa is warm year-round — but has a better time",
          body: "João Pessoa sits at 7° south latitude, with average temperature between 26°C and 32°C throughout the year. There's no cold in the conventional sense — but there's a significant difference between the dry and rainy periods. The dry period (September to February) is when beaches look best, natural pools appear in better visibility condition and the sun shines more consistently. The rainy period (March to August) concentrates rains between April and July — and June tends to be the rainiest month, with historical averages above 350 mm. Even in the rainy period, rains tend to be brief, in the afternoon, and the rest of the day stays open. But the shoreline turns grayer and the sea may be slightly murkier.",
        },
        {
          heading: "The best months: September to February",
          body: "The period September to February is the most recommended for those who want to enjoy beaches and natural pools in better condition. October, November and December are the most balanced: less rain, consistent sun (8 to 9 hours of light per day), tides usually favorable in the morning. January and February have longer days — the sun sets around 5:45 pm in January, later than in October, when it sets around 5:00 pm. For those wanting the best balance between climate, sea quality and tourist tranquility, October and November stand out: good beach condition, more moderate tourist traffic and lodging prices tending to be more accessible than in July or January.",
        },
        {
          heading: "Rainy period: March to August",
          body: "The rainy period runs from March to August, peaking in June and July. Rains tend to be concentrated in short bursts — it rains hard for one or two hours, especially in the late afternoon, and the weather clears quickly. This means that even in June you can enjoy the morning at the natural pools without problem. What changes is consistency: in the rainy period there are more days with heavy clouds, the sea can be rougher and snorkel visibility becomes less predictable. June tends to be the month with most accumulated rain in the region. If you can only travel in winter, don't skip it — but adjust expectations: it may rain on your pool day and not rain the next day.",
        },
        {
          heading: "The tide doesn't have a bad season — but it has the right time",
          body: "João Pessoa's natural pools don't depend on the climate to exist — they depend on the tide. Low tide happens year-round, in any month, which means natural pools can be in great condition even in rainy June, as long as the tide table is favorable. What changes with the climate is water quality: in the dry period, the sea tends to be more crystalline and snorkel visibility is better. The low-tide time changes daily — it can fall in the morning or afternoon, and varies week by week with the lunar cycle. The most important factor is to plan the tour for when low tide falls at a convenient time, regardless of the month.",
        },
        {
          heading: "High season: July and December/January",
          body: "João Pessoa has two tourist peaks: July (winter holidays from southern Brazil) and December/January (summer holidays and end-of-year festivities). At the July peak, hotels fill up, tours become more competitive and prices rise. Carnival (February/March) also concentrates visitors, especially on the South Coast. Holy Week has high movement. For those who prefer the city with fewer people and better value-for-money lodging, October and November are the right choice: good weather, favorable tides and calm tourist traffic.",
        },
        {
          heading: "Summary: when to go to João Pessoa according to your goal",
          body: "If the priority is natural pools with better visibility: choose October, November or December. If you want to enjoy the city with more movement and programming: July or January. If the priority is value for money and fewer people: October or November. If you can only travel during the rainy period: go — the experience is different but worth it, especially if the tide is favorable. The golden rule is simple: regardless of the month, check the tide table before planning natural-pool tours. Murillo does this on WhatsApp before confirming any departure.",
        },
      ],
    },
    es: {
      title: "Mejor Época para Visitar João Pessoa: guía de clima, lluvia y mareas",
      description:
        "Cuándo ir a João Pessoa: septiembre a febrero tienen menos lluvia, más sol y mareas favorables para piscinas naturales. Guía mes a mes con consejos prácticos.",
      category: "Mareas y Naturaleza",
      faq: [
        {
          pergunta: "¿Cuál es el mes con menos lluvia en João Pessoa?",
          resposta:
            "El período de octubre a noviembre suele tener los meses con menos lluvia acumulada de João Pessoa. Octubre y noviembre son especialmente consistentes: días de sol, pocas lluvias, temperatura entre 28°C y 31°C. Junio es históricamente el mes con más lluvia — promedios que pueden superar los 350 mm. Septiembre a febrero es el período seco en general.",
        },
        {
          pergunta: "¿João Pessoa es cálida todo el año?",
          resposta:
            "Sí. La temperatura en João Pessoa varía entre 24°C y 32°C a lo largo del año, sin período frío. Julio y agosto son levemente más suaves — especialmente por la noche — pero durante el día el calor continúa. El protector solar es necesario en cualquier época del año.",
        },
        {
          pergunta: "¿Julio es buena época para visitar João Pessoa?",
          resposta:
            "Julio es el pico de la temporada alta de invierno — los hoteles se llenan y los tours quedan más concurridos. El clima ya empieza a mejorar (julio es más seco que junio), pero todavía hay más nubosidad que en octubre. Si la prioridad es clima más estable, menos gente y precios más accesibles, octubre y noviembre son mejores. Para quien solo puede viajar en julio, vale mucho la pena — solo reserva con antelación.",
        },
      ],
      sections: [
        {
          heading: "João Pessoa tiene clima cálido todo el año — pero tiene una época mejor",
          body: "João Pessoa queda a 7° de latitud sur, con temperatura promedio entre 26°C y 32°C durante todo el año. No hay frío en el sentido convencional — pero hay una diferencia significativa entre el período seco y el período lluvioso. El período seco (septiembre a febrero) es cuando las playas quedan más hermosas, las piscinas naturales aparecen en mejor condición de visibilidad y el sol brilla con más consistencia. El período lluvioso (marzo a agosto) concentra las lluvias entre abril y julio — y junio suele ser el mes más lluvioso, con promedios históricos arriba de 350 mm. Incluso en el período lluvioso, las lluvias suelen ser rápidas, por la tarde, y el resto del día queda abierto. Pero la orilla queda más gris y el mar puede quedar levemente más turbio.",
        },
        {
          heading: "Los mejores meses: septiembre a febrero",
          body: "El período de septiembre a febrero es el más recomendado para quien quiere aprovechar las playas y piscinas naturales en mejor condición. Octubre, noviembre y diciembre son los más equilibrados: menos lluvia, sol consistente (8 a 9 horas de luz al día), mareas que suelen ser favorables por la mañana. Enero y febrero tienen días más largos — el sol se pone alrededor de las 17h45 en enero, más tarde que en octubre, cuando cae alrededor de las 17h. Para quien quiere el mejor equilibrio entre clima, calidad de mar y tranquilidad turística, octubre y noviembre se destacan: buena condición de playa, movimiento de turistas más moderado y precios de hospedaje tendiendo a ser más accesibles que en julio o enero.",
        },
        {
          heading: "Período lluvioso: marzo a agosto",
          body: "El período lluvioso va de marzo a agosto, con pico en junio y julio. Las lluvias suelen estar concentradas en ráfagas cortas — llueve fuerte por una o dos horas, especialmente al final de la tarde, y el tiempo abre rápidamente. Eso significa que incluso en junio es posible aprovechar la mañana en las piscinas naturales sin problema. Lo que cambia es la consistencia: en el período lluvioso hay más días con nubes pesadas, el mar puede estar más agitado y la visibilidad para esnórquel queda menos previsible. Junio suele ser el mes con más lluvia acumulada de la región. Si solo puedes viajar en invierno, no dejes de ir — pero ajusta las expectativas: puede llover en tu día de piscinas naturales y no llover al día siguiente.",
        },
        {
          heading: "La marea no tiene época mala — pero tiene horario correcto",
          body: "Las piscinas naturales de João Pessoa no dependen del clima para existir — dependen de la marea. La marea baja sucede todo el año, en cualquier mes, lo que significa que las piscinas naturales pueden estar en condición óptima en pleno junio lluvioso, siempre que la tabla de mareas esté favorable. Lo que cambia con el clima es la calidad del agua: en el período seco, el mar suele ser más cristalino y la visibilidad para esnórquel es mejor. El horario de la marea baja cambia todos los días — puede caer por la mañana o por la tarde, y varía semana a semana según el ciclo lunar. El factor más importante es planificar el tour para cuando la marea baja caiga en un horario conveniente, independiente del mes.",
        },
        {
          heading: "Temporada alta: julio y diciembre/enero",
          body: "João Pessoa tiene dos picos de turismo: julio (vacaciones de invierno del sur y sudeste de Brasil) y diciembre/enero (vacaciones de verano y fiestas de fin de año). En el pico de julio, los hoteles se llenan, los tours quedan más concurridos y los precios suben. El Carnaval (febrero/marzo) también concentra visitantes, especialmente en el Litoral Sur. Semana Santa tiene movimiento alto. Para quien prefiere la ciudad con menos gente y mejor relación calidad-precio de hospedaje, octubre y noviembre son la elección correcta: buen clima, mareas favorables y movimiento turístico tranquilo.",
        },
        {
          heading: "Resumen: cuándo ir a João Pessoa según tu objetivo",
          body: "Si la prioridad son piscinas naturales con mejor visibilidad: elige octubre, noviembre o diciembre. Si quieres aprovechar la ciudad con más movimiento y programación: julio o enero. Si la prioridad es relación calidad-precio y menos gente: octubre o noviembre. Si solo puedes viajar en período lluvioso: ve — la experiencia es distinta pero vale la pena, especialmente si la marea está favorable. La regla de oro es simple: independiente del mes, consulta la tabla de mareas antes de planificar los tours de piscinas naturales. Murillo hace eso por WhatsApp antes de confirmar cualquier salida.",
        },
      ],
    },
  },

  "por-do-sol-jacare-joao-pessoa": {
    en: {
      title: "Sunset at Jacaré in João Pessoa: complete guide with times",
      description:
        "Everything about Sunset at Jacaré: where it is, time by season, saxophonist Jurandy do Sax and how to combine it with the catamaran tour to Areia Vermelha.",
      category: "North Coast",
      faq: [
        {
          pergunta: "Does Sunset at Jacaré happen every day?",
          resposta:
            "Yes. The sunset happens daily and Jurandy do Sax plays live regularly — having accumulated over 9,000 performances over the years. On days of heavy rain, visibility may be reduced, but the musical tradition continues regardless of weather.",
        },
        {
          pergunta: "How much does it cost to go to Sunset at Jacaré?",
          resposta:
            "The event itself is free — you stay on the riverbank and watch with no ticket. What you pay are the consumptions at the riverside bars. If you go on the organized tour by Vem Passear em Jampa, the value includes the transfer and may include the combined catamaran. Talk to Murillo on WhatsApp to plan the North Coast itinerary according to your day's tides.",
        },
        {
          pergunta: "What's the best position to watch the sunset at Jacaré?",
          resposta:
            "The riverbank, facing the horizon where the sun sets, is the best position. Arriving 30 minutes in advance ensures a good spot. From the boat anchored on the river is also a unique experience — the catamaran on the organized tour stays anchored during the event.",
        },
      ],
      sections: [
        {
          heading: "Sunset at Jacaré: why everyone talks about it",
          body: "Sunset at Jacaré happens daily on the banks of the Jacaré River, in Cabedelo, about 18 km from João Pessoa. What started as an informal meeting point became one of the most photographed events in the Northeast. Tourists and locals gather on the riverbanks, on the anchored boats and at the riverside bars to watch the sun set over the Paraíba River estuary. The water frame, the Northeast sky and the saxophonist who plays live created an experience hard to reproduce elsewhere — and explain why Jacaré is a must-stop on any João Pessoa itinerary.",
        },
        {
          heading: "Jurandy do Sax and Ravel's Bolero",
          body: "The musical tradition of Sunset at Jacaré is owed to saxophonist Jurandy do Sax, who performs Ravel's Bolero daily on the riverbanks. The piece lasts approximately 17 minutes — exactly the average duration of the light show that the sunset projects over the estuary. Jurandy has accumulated over 9,000 performances over the years, becoming a figure inseparable from the Jacaré experience. Ravel's Bolero has a uniquely hypnotic quality: it starts soft and grows progressively to the end, matching the rhythm of the sunset itself. Even those who've never heard Ravel's work leave with the melody in mind.",
        },
        {
          heading: "Sunset time at Jacaré by season",
          body: "Sunset time varies throughout the year according to the sun's position. In October, the sun sets around 5:00 pm. In January, around 5:45 pm — days are longer in summer. The event lasts on average 17 minutes, which is the duration of Ravel's Bolero. The recommendation is to arrive at least 30 minutes in advance to secure a spot near the riverbank. The best angles are on the bank, where the sun's reflection on the water composes the scenery.",
        },
        {
          heading: "How to get to Jacaré from João Pessoa",
          body: "Jacaré is in Cabedelo, approximately 18 km from the center of João Pessoa. By car, via BR-230, the route takes between 20 and 30 minutes depending on traffic. The organized tour by Vem Passear em Jampa includes round-trip transfer — the most practical option for those without a car. For those going on their own, you can use a transport app. Arriving around 4:30 pm guarantees a spot on the bank and time to explore the bars and the riverside before the spectacle.",
        },
        {
          heading: "What to combine with Sunset at Jacaré",
          body: "Sunset at Jacaré naturally combines with the catamaran tour to Areia Vermelha — both depart from the same point on the Jacaré River. If your day's tide table allows, you can do the catamaran in the morning or early afternoon, visit Fortaleza de Santa Catarina (built in 1585, near the boarding point) in the early afternoon, and close with the sunset at the end of the day. There's a combined tour by Vem Passear em Jampa that joins Areia Vermelha and Sunset at Jacaré in a single itinerary. Talk to Murillo on WhatsApp to check availability according to your day's tide table.",
        },
        {
          heading: "Practical tips to enjoy Sunset at Jacaré",
          body: "Arrive early — at least 30 minutes before the day's sunset time. The event attracts a lot of people and the best spots on the bank fill up fast. Bring water. Wear light clothes but pack a sweater in your bag — the river wind after sunset can be cooler than it seems. A camera with zoom helps capture the sun on the horizon. And silence while Jurandy plays — it's part of the tacit etiquette of the place, respected by tourists and locals alike.",
        },
      ],
    },
    es: {
      title: "Atardecer del Jacaré en João Pessoa: guía completa con horarios",
      description:
        "Todo sobre el Atardecer del Jacaré: dónde queda, horario por época del año, el saxofonista Jurandy do Sax y cómo combinarlo con el tour en catamarán a Areia Vermelha.",
      category: "Litoral Norte",
      faq: [
        {
          pergunta: "¿El Atardecer del Jacaré sucede todos los días?",
          resposta:
            "Sí. El atardecer sucede a diario y Jurandy do Sax toca en vivo con regularidad — acumulando más de 9.000 presentaciones a lo largo de los años. En días de lluvia intensa, la visibilidad puede reducirse, pero la tradición musical continúa independiente del tiempo.",
        },
        {
          pergunta: "¿Cuánto cuesta ir al Atardecer del Jacaré?",
          resposta:
            "El evento en sí es gratuito — te quedas a orillas del río y miras sin entrada. Lo que pagas son los consumos en los bares de la orilla. Si vas en el tour organizado de Vem Passear em Jampa, el valor incluye el transfer y puede incluir el catamarán combinado. Habla con Murillo por WhatsApp para armar el itinerario del Litoral Norte según las mareas de tu día.",
        },
        {
          pergunta: "¿Cuál es la mejor posición para ver el atardecer en el Jacaré?",
          resposta:
            "La orilla del río, de frente al horizonte donde se pone el sol, es la mejor posición. Llegar con 30 minutos de antelación garantiza un buen lugar. Desde el barco anclado en el río también es una experiencia diferenciada — el catamarán del tour organizado permanece anclado durante el evento.",
        },
      ],
      sections: [
        {
          heading: "El Atardecer del Jacaré: por qué todo el mundo habla de eso",
          body: "El Atardecer del Jacaré sucede a diario a orillas del Río Jacaré, en Cabedelo, a unos 18 km de João Pessoa. Lo que empezó como un punto de encuentro informal se volvió uno de los eventos más fotografiados del Nordeste. Turistas y residentes se reúnen a orillas del río, en los barcos anclados y en los bares de la orilla para ver el sol ponerse sobre el estuario del Río Paraíba. El marco de agua, el cielo del Nordeste y el saxofonista que toca en vivo crearon una experiencia difícil de reproducir en otro lugar — y explican por qué el Jacaré es parada obligatoria en cualquier itinerario de João Pessoa.",
        },
        {
          heading: "Jurandy do Sax y el Bolero de Ravel",
          body: "La tradición musical del Atardecer del Jacaré se debe al saxofonista Jurandy do Sax, que toca el Bolero de Ravel a diario a orillas del río. La pieza dura aproximadamente 17 minutos — justamente la duración promedio del espectáculo de luz que el atardecer proyecta sobre el estuario. Jurandy acumula más de 9.000 presentaciones a lo largo de los años, volviéndose una figura inseparable de la experiencia del Jacaré. El Bolero de Ravel tiene una calidad hipnótica única: empieza suave y va creciendo progresivamente hasta el final, acompañando el ritmo del propio atardecer. Incluso quien nunca escuchó la obra de Ravel sale con la melodía guardada.",
        },
        {
          heading: "Horario del atardecer en el Jacaré por época del año",
          body: "El horario del atardecer varía a lo largo del año según la posición del sol. En octubre, el sol se pone alrededor de las 17h. En enero, el horario es alrededor de las 17h45 — los días son más largos en verano. El evento dura en promedio 17 minutos, que es la duración del Bolero de Ravel. La recomendación es llegar con al menos 30 minutos de antelación para garantizar un lugar cerca de la orilla del río. Los mejores ángulos quedan en la orilla, donde el reflejo del sol en el agua compone el escenario.",
        },
        {
          heading: "Cómo llegar al Jacaré saliendo de João Pessoa",
          body: "El Jacaré queda en Cabedelo, a aproximadamente 18 km del centro de João Pessoa. En auto, por la BR-230, el recorrido toma entre 20 y 30 minutos dependiendo del tránsito. El tour organizado de Vem Passear em Jampa incluye transfer ida y vuelta — la opción más práctica para quien no está en auto. Para quien va por cuenta propia, es posible usar app de transporte. La llegada alrededor de las 16h30 garantiza lugar en la orilla y tiempo para explorar los bares y la orilla antes del espectáculo.",
        },
        {
          heading: "Qué combinar con el Atardecer del Jacaré",
          body: "El Atardecer del Jacaré combina naturalmente con el tour en catamarán a Areia Vermelha — ambos parten del mismo punto en el Río Jacaré. Si la tabla de mareas del día permite, se puede hacer el catamarán por la mañana o inicio de la tarde, visitar la Fortaleza de Santa Catarina (construida en 1585, cerca del embarcadero) al inicio de la tarde, y cerrar con el atardecer al final del día. Existe un tour combinado de Vem Passear em Jampa que une Areia Vermelha y Atardecer del Jacaré en un único itinerario. Habla con Murillo por WhatsApp para verificar disponibilidad según la tabla de mareas de tu día.",
        },
        {
          heading: "Consejos prácticos para aprovechar el Atardecer del Jacaré",
          body: "Llega temprano — al menos 30 minutos antes del horario del atardecer del día. El evento atrae bastante gente y los mejores lugares en la orilla se ocupan rápido. Lleva agua. Usa ropa ligera pero guarda una camiseta en la mochila — el viento del río después del atardecer puede ser más fresco de lo que parece. Cámara con zoom ayuda a registrar el sol en el horizonte. Y silencio mientras Jurandy toca — es parte de la etiqueta tácita del lugar, respetada por turistas y pessoenses por igual.",
        },
      ],
    },
  },

  "melhores-passeios-joao-pessoa": {
    en: {
      title: "Best Tours in João Pessoa: an honest ranking by the organizer",
      description:
        "Honest ranking of the best tours in João Pessoa by the person who organizes them: natural pools, south coast, Jacaré sunset and city tour — with criteria.",
      category: "City Guide",
      faq: [
        {
          pergunta: "What's the best-selling tour in João Pessoa?",
          resposta:
            "Seixas and Areia Vermelha share that spot. Both depend on low tide and offer natural pools. When the tide favors, they sell out first. The Classic South Coast (Gramame, Amor, Tambaba, Coqueirinho) comes next — tide-independent, runs almost every day.",
        },
        {
          pergunta: "Which tour suits small kids?",
          resposta:
            "Picãozinho and Sunset at Jacaré are the easiest with children. Picãozinho has shallow waters, short crossing and the catamaran as base. Jacaré is a 1h30 short cruise with music and dance, no physical effort. Classic South Coast with older kids (5+) also works.",
        },
        {
          pergunta: "Can I fit all tours in a few days?",
          resposta:
            "With 3 well-planned days, you can see the essentials: Seixas/Picãozinho one day, South Coast another, North Coast with sunset on the third. Areia Vermelha fits when the tide allows. Combos like North Coast + Areia Vermelha cover 2 attractions in 1 day.",
        },
        {
          pergunta: "Which tour gives the most value?",
          resposta:
            "By cost-benefit, the Classic South Coast (R$ 80) delivers 4 beaches with transfer and guide — unbeatable. Seixas (R$ 60) offers the city's most photogenic experience. Sunset at Jacaré (R$ 90) is a one-of-a-kind experience. For groups, do them all.",
        },
      ],
      sections: [
        {
          heading: "Why this ranking is different",
          body: "Someone who lives in João Pessoa and runs tours daily knows there's a difference between a tour that looks good in photos and a tour that's actually good. This ranking is built from what clients say when they come back, what gets repeated, what works with kids, what produces effortless photos, what respects your time. Prices mentioned are real and updated for 2026. To combine tours and check tides, message Murillo on WhatsApp — he builds the itinerary your way.",
        },
        {
          heading: "1. Seixas Natural Pools — Paraíba's best in water",
          body: "Seixas is at the easternmost point of the Americas and has the prettiest reef in the state. Low tide, warm water, colorful fish, crystal-clear bottom. Short catamaran crossing from Tambaú. About 3h30 of experience for R$ 60 per person. It's the tour that shows up most in tourist photos and the one that earns 'worth every cent' at day's end. When tide cooperates, it sells out. Book ahead.",
        },
        {
          heading: "2. Classic South Coast — best value for money",
          body: "4 beaches in one day with round-trip transfer, accredited guide and R$ 80 per person. Gramame to ease in, Amor for the colorful cliff, Tambaba (optional stop, the only official nudist beach in the Northeast) and Coqueirinho for lunch with a view. Tide-independent, runs almost every day. If you can only do one land tour in Jampa, do this one.",
        },
        {
          heading: "3. Areia Vermelha Catamaran — the most Instagrammable photo",
          body: "Sandbank that emerges at low tide in Cabedelo, surrounded by emerald-green natural pools. Catamaran with water slide, onboard bar and grill. R$ 70 per person, ~3h of experience. Tide-dependent (we confirm the right date). It's the scene that shows up most on tourist Instagram — for good reason.",
        },
        {
          heading: "4. Sunset at Jacaré — a one-of-a-kind experience",
          body: "For over 20 years, Jurandy do Sax has played Ravel's Bolero live from a canoe on the Paraíba River as the sun sets. 1h30 of catamaran sailing with Belle Soares' violin, forró pé de serra dance and Jurandy's saxophone. R$ 90 per person. Happens daily. Pairs with North Coast on the same day.",
        },
        {
          heading: "5. Jampa Combo — South Coast with ATV — beach + adrenaline",
          body: "For anyone wanting beach in the morning and adventure in the afternoon, without driving. Same 4 beaches as Classic South Coast + ATV trail in Coqueirinho (Mirante Dedo de Deus, Mirante das Tartarugas, Castelinho, Shopping Rural). R$ 150 to R$ 310 depending on the package (no ATV, single or double). Minimum 7 years old to ride.",
        },
        {
          heading: "6. North Coast Combo with Areia Vermelha — 2-in-1",
          body: "Colonial history in Cabedelo (Sea Turtle Reserve, Dike, Fort Santa Catarina) + catamaran to Areia Vermelha + Sunset at Jacaré with Ravel's Bolero. R$ 80 without catamaran or R$ 160 with catamaran. Full day, tide-dependent.",
        },
        {
          heading: "7. Jampa City Tour — to understand the city",
          body: "For those who arrive early and want to absorb João Pessoa before hitting the beach. 'João Pessoa' sign, Cabo Branco Lighthouse, Cabo Branco Station (Niemeyer), Bosque dos Sonhos, São Francisco Cultural Center, Hotel Globo, Sólon de Lucena Park. R$ 80 per person, ~3h30. Tuesday to Sunday (closed Mondays).",
        },
        {
          heading: "How to combine all this",
          body: "Send Murillo a WhatsApp message with your travel dates. He checks the tide table, confirms which tours fit your calendar and arranges the order. No form, no call center, no middleman. It's the fastest way to secure a spot in tide-dependent tours and avoid the disappointment of arriving with everything pre-planned only to find the tide doesn't cooperate.",
        },
      ],
    },
    es: {
      title: "Mejores Tours en João Pessoa: ranking honesto por quien organiza",
      description:
        "Ranking honesto de los mejores tours en João Pessoa por quien organiza: piscinas naturales, litoral sur, atardecer del Jacaré y city tour — con criterio.",
      category: "Guía de la Ciudad",
      faq: [
        {
          pergunta: "¿Cuál es el tour más vendido en João Pessoa?",
          resposta:
            "Seixas y Areia Vermelha se disputan esa posición. Ambos dependen de marea baja y ofrecen piscinas naturales. Cuando la marea ayuda, son los primeros en agotarse. El Litoral Sur Clásico (Gramame, Amor, Tambaba, Coqueirinho) viene enseguida — sin depender de marea, opera casi todos los días.",
        },
        {
          pergunta: "¿Qué tour combina con niño pequeño?",
          resposta:
            "Picãozinho y el Atardecer del Jacaré son los más tranquilos con niños. Picãozinho tiene aguas poco profundas, travesía corta y el catamarán como base. Jacaré es una navegación corta de 1h30 con música y baile, sin esfuerzo físico. Litoral Sur con niño mayor (5+) también funciona.",
        },
        {
          pergunta: "¿Puedo hacer todos los tours en pocos días?",
          resposta:
            "Con 3 días bien planificados, puedes ver lo esencial: Seixas/Picãozinho un día, Litoral Sur otro, Litoral Norte con atardecer el tercero. Areia Vermelha encaja cuando la marea ayuda. Combos como Litoral Norte + Areia Vermelha resuelven 2 atracciones en 1 día.",
        },
        {
          pergunta: "¿Qué tour vale más la inversión?",
          resposta:
            "En costo-beneficio, Litoral Sur Clásico (R$ 80) entrega 4 playas con transfer y guía — no hay como superarlo. Seixas (R$ 60) ofrece la experiencia más fotografiable de la ciudad. Atardecer del Jacaré (R$ 90) es una experiencia única en el mundo. Para grupo, vale hacerlos todos.",
        },
      ],
      sections: [
        {
          heading: "Por qué este ranking es diferente",
          body: "Quien vive en João Pessoa y organiza tours todos los días sabe que existe diferencia entre tour bueno en foto y tour realmente bueno. Este ranking se monta a partir de lo que los clientes dicen al volver, de lo que pide repetición, de lo que combina con niño, de lo que da foto sin pose forzada, de lo que respeta tu tiempo. Los precios citados son reales y actualizados en 2026. Para combinar tours y verificar marea, habla con Murillo por WhatsApp — él arma el itinerario a tu manera.",
        },
        {
          heading: "1. Piscinas Naturales de Seixas — lo mejor de Paraíba en agua",
          body: "Seixas está en el punto más oriental de las Américas y tiene el arrecife más bonito del estado. Marea baja, agua tibia, peces coloridos, fondo cristalino. Travesía corta en catamarán desde Tambaú. Cerca de 3h30 de experiencia por R$ 60 por persona. Es el tour que más aparece en foto de turista y el que más escucha 'valió cada centavo' al final del día. Cuando la marea ayuda, se agota. Reserva con antelación.",
        },
        {
          heading: "2. Litoral Sur — Itinerario Clásico — mejor costo-beneficio",
          body: "4 playas en un día con transfer ida y vuelta, guía acreditado y R$ 80 por persona. Gramame para empezar tranquilo, Amor para el acantilado colorido, Tambaba (parada opcional, la única playa naturista oficial del Nordeste) y Coqueirinho para el almuerzo con vista. Sin depender de marea, opera casi todos los días. Si solo puedes hacer un tour terrestre en Jampa, haz este.",
        },
        {
          heading: "3. Areia Vermelha en Catamarán — la foto más instagramable",
          body: "Banco de arena que aparece con marea baja en Cabedelo, rodeado de piscinas naturales verde-esmeralda. Catamarán con tobogán, bar a bordo y parrilla. R$ 70 por persona, ~3h de experiencia. Depende de marea (confirmamos la fecha correcta). Es el escenario que más aparece en el Instagram de los turistas — por buenas razones.",
        },
        {
          heading: "4. Atardecer del Jacaré — la experiencia única en el mundo",
          body: "Hace más de 20 años, Jurandy do Sax toca el Bolero de Ravel en vivo en una canoa en el Río Paraíba mientras el sol baja. 1h30 de navegación en catamarán con violín de Belle Soares, baile de forró pé de serra y el saxofón de Jurandy. R$ 90 por persona. Sucede todos los días. Combina con Litoral Norte el mismo día.",
        },
        {
          heading: "5. Combo Jampa — Litoral Sur con Cuatriciclo — adrenalina + playa",
          body: "Para quien quiere playa por la mañana y aventura por la tarde, sin conducir. Mismas 4 playas del Clásico del Litoral Sur + trail en cuatriciclo en Coqueirinho (Mirante Dedo de Deus, Mirante das Tartarugas, Castelinho, Shopping Rural). R$ 150 a R$ 310 según el modelo (sin cuatri, individual o doble). Mínimo 7 años para conducir el cuatri.",
        },
        {
          heading: "6. Combo Litoral Norte con Areia Vermelha — 2 en 1",
          body: "Historia colonial en Cabedelo (Reserva de Tortugas, Dique, Fortaleza de Santa Catarina) + catamarán a Areia Vermelha + Atardecer del Jacaré con Bolero de Ravel. R$ 80 sin catamarán o R$ 160 con catamarán. Día completo, depende de marea favorable.",
        },
        {
          heading: "7. City Tour Jampa — para entender la ciudad",
          body: "Para quien llega temprano al destino y quiere absorber João Pessoa antes de ir a la playa. Letrero 'João Pessoa', Faro del Cabo Branco, Estación Cabo Branco (Niemeyer), Bosque dos Sonhos, Centro Cultural São Francisco, Hotel Globo, Parque Sólon de Lucena. R$ 80 por persona, ~3h30. De martes a domingo (lunes cierra).",
        },
        {
          heading: "Cómo combinar todo esto",
          body: "Manda mensaje a Murillo por WhatsApp con la fecha de tu viaje. Él verifica la tabla de mareas, confirma qué tours encajan en tu calendario y arma el orden. Sin formulario, sin central, sin intermediario. Es la forma más rápida de garantizar lugar en los tours que dependen de marea y de evitar el arrepentimiento de llegar con todo pre-planeado y descubrir que la marea no ayuda ese día.",
        },
      ],
    },
  },

  "litoral-sul-ou-norte-joao-pessoa": {
    en: {
      title: "South Coast or North Coast of João Pessoa: which to choose?",
      description:
        "Honest comparison between South Coast and North Coast of João Pessoa: when each works, ideal profile and how to combine both in your itinerary.",
      category: "City Guide",
      faq: [
        {
          pergunta: "If I only have one day, which should I choose?",
          resposta:
            "South Coast. In one day, you see 4 different beaches (Gramame, Amor, Tambaba, Coqueirinho) with transfer and guide for R$ 80. North Coast is more spread out and Sunset at Jacaré only works with comfortable round-trip time — which makes the package longer.",
        },
        {
          pergunta: "Which is more family-friendly?",
          resposta:
            "North Coast. The pace is calmer: Sea Turtle Reserve, Fort, Dike, lunch in Cabedelo and Sunset at Jacaré with live music. No trail, no strong waves. South Coast has cliffs and beaches with more action — better for older kids, couples and groups of friends.",
        },
        {
          pergunta: "Which is better for photos?",
          resposta:
            "Both produce beautiful photos, in different styles. South Coast has colorful cliffs and the coconut-tree-and-sea scene (Jampa's most cliché photo) — Coqueirinho and Amor. North Coast has the Areia Vermelha sandbank (the most Instagram-worthy photo) and the Bolero de Ravel silhouette at sunset.",
        },
        {
          pergunta: "Can I combine both sides on the same day?",
          resposta:
            "We don't recommend it. Each one already takes the full day. The ideal is South Coast one day and North Coast another. If you only have one day, pick one and ask Murillo about fitting smaller tours into the other days.",
        },
      ],
      sections: [
        {
          heading: "Quick geography: what each side is",
          body: "João Pessoa sits in the middle of Paraíba's coast. From the urban shoreline, the south coast goes down toward Conde and Praia Bela. The north coast goes up toward Cabedelo, where the Paraíba River meets the sea. Both sides are reachable by car within 40 minutes from the central shoreline. But what each side offers is very different — and that's what we'll detail.",
        },
        {
          heading: "South Coast: beaches, cliffs and adrenaline",
          body: "The South Coast is João Pessoa's postcard. It starts in Jacarapé, passes through Gramame, Amor, Tambaba, Coqueirinho, Tabatinga, Carapibus and Praia Bela. Most beaches feature colorful cliffs (orange, yellow, pink), palm groves and open sea. Coqueirinho is the highlight, with Paraíba's most famous photo (cliff + palm + sea). There's also the ATV trail (Mirante Dedo de Deus, Castelinho da Princesa) for those wanting adrenaline. It's the ideal side for a full beach day, with departures around 8am-9am and return by 4:30pm.",
        },
        {
          heading: "North Coast: history, calm sea and the sunset",
          body: "João Pessoa's North Coast has a different DNA. Cabedelo is the neighboring city and the hub: Sea Turtle Nesting Reserve (Tamar Project), Cabedelo Dike (where the Paraíba River meets the sea), Fort Santa Catarina (Portuguese colonial period) and the iconic Sunset at Jacaré, with live Ravel's Bolero. To the northwest, the Areia Vermelha sandbank appears at low tide off Camboinha Beach. It's a day of calmer sea, history and Brazil's most memorable sunset.",
        },
        {
          heading: "How to choose between them",
          body: "If you like active beaches, cliffs, colorful photos and have energy for a full day on the shore — South Coast. If you prefer a contemplative pace, history, calm sea and a memorable sunset — North Coast. If you're with small kids or seniors — North Coast is lighter. If you're with a young couple or friend group hunting photos and adrenaline — South Coast (especially with ATV).",
        },
        {
          heading: "The ideal is to do both",
          body: "In 2 or 3 days of itinerary, you can do both sides comfortably. Day 1: Classic South Coast or Jampa Combo with ATV. Day 2: North Coast + Areia Vermelha + Sunset at Jacaré. The routes are already structured — just talk to Murillo on WhatsApp considering the tide table. When the tide helps, we fit Areia Vermelha in. When it doesn't, we adjust without losing the best of each side.",
        },
        {
          heading: "Talk to the person who organizes",
          body: "Murillo knows the month's tide table by heart and knows which side works best for your calendar. Send a WhatsApp message with your travel dates and he'll arrange the tour order so you don't miss the best of each side.",
        },
      ],
    },
    es: {
      title: "¿Litoral Sur o Litoral Norte de João Pessoa: cuál elegir?",
      description:
        "Comparación honesta entre Litoral Sur y Litoral Norte de João Pessoa: cuándo funciona cada uno, perfil ideal y cómo combinar los dos en tu itinerario.",
      category: "Guía de la Ciudad",
      faq: [
        {
          pergunta: "Si solo tengo un día, ¿cuál elegir?",
          resposta:
            "Litoral Sur. En un día ves 4 playas diferentes (Gramame, Amor, Tambaba, Coqueirinho) con transfer y guía por R$ 80. El Litoral Norte está más disperso y el Atardecer del Jacaré solo vale con tiempo de ida y vuelta tranquilo — lo que hace el paquete más largo.",
        },
        {
          pergunta: "¿Cuál es más family-friendly?",
          resposta:
            "Litoral Norte. El ritmo es más calmo: Reserva de Tortugas, Fortaleza, Dique, almuerzo en Cabedelo y Atardecer del Jacaré con música en vivo. Sin caminata, sin olas fuertes. Litoral Sur tiene acantilados y playas con más movimiento — bueno para niños mayores, parejas y grupos de amigos.",
        },
        {
          pergunta: "¿Cuál es mejor para fotos?",
          resposta:
            "Los dos rinden fotos hermosas, en estilos diferentes. Litoral Sur tiene los acantilados de colores y la escena de cocotero con mar (la foto más cliché de Jampa) — Coqueirinho y Amor. Litoral Norte tiene el banco de arena de Areia Vermelha (la foto más instagram) y la silueta del Bolero de Ravel al atardecer.",
        },
        {
          pergunta: "¿Se pueden combinar los dos lados el mismo día?",
          resposta:
            "No recomendamos. Cada uno ya lleva el día completo. Lo ideal es Litoral Sur un día y Litoral Norte en otro. Si solo tienes un día, elige uno y consulta a Murillo sobre encajar tours menores en los demás días.",
        },
      ],
      sections: [
        {
          heading: "Geografía rápida: qué es cada lado",
          body: "João Pessoa está en medio del litoral paraibano. Desde la orla urbana, el litoral sur baja hacia Conde y Praia Bela. El litoral norte sube hacia Cabedelo, donde el Río Paraíba se encuentra con el mar. Ambos lados son accesibles en auto en hasta 40 minutos desde la orla central. Pero lo que cada lado ofrece es muy diferente — y eso es lo que vamos a detallar.",
        },
        {
          heading: "Litoral Sur: playas, acantilados y adrenalina",
          body: "El Litoral Sur es la postal de João Pessoa. Empieza en Jacarapé, pasa por Gramame, Amor, Tambaba, Coqueirinho, Tabatinga, Carapibus y Praia Bela. La mayoría de las playas tienen acantilados de colores (naranja, amarillo, rosa), cocoteros y mar abierto. Coqueirinho es el punto alto, con la foto más conocida de Paraíba (acantilado + cocotero + mar). También está el trail en cuatriciclo (Mirante Dedo de Deus, Castelinho da Princesa) para quien quiere adrenalina. Es el lado ideal para un día entero de playa, con salidas alrededor de las 8h-9h y regreso a las 16h30.",
        },
        {
          heading: "Litoral Norte: historia, mar calmo y el atardecer",
          body: "El Litoral Norte de João Pessoa tiene otro ADN. Cabedelo es la ciudad vecina y centraliza todo: Reserva de Desova de Tortugas Marinas (Proyecto Tamar), Dique de Cabedelo (encuentro del Río Paraíba con el mar), Fortaleza de Santa Catarina (período colonial portugués) y el icónico Atardecer del Jacaré, con Bolero de Ravel en vivo. Al noroeste, el banco de arena de Areia Vermelha aparece con marea baja frente a la Playa de Camboinha. Es un día de mar más calmo, historia y el atardecer más marcante de Brasil.",
        },
        {
          heading: "Cómo elegir entre los dos",
          body: "Si te gusta la playa activa, el acantilado, la foto colorida y tienes energía para un día entero de orla — Litoral Sur. Si prefieres ritmo contemplativo, historia, mar calmo y un atardecer marcante — Litoral Norte. Si vas con niño pequeño o adulto mayor — Litoral Norte es más liviano. Si vas con pareja joven o grupo de amigos buscando fotos y adrenalina — Litoral Sur (especialmente con cuatriciclo).",
        },
        {
          heading: "Lo ideal es hacer los dos",
          body: "En 2 o 3 días de itinerario, puedes hacer los dos lados con holgura. Día 1: Litoral Sur Clásico o Combo Jampa con Cuatriciclo. Día 2: Litoral Norte + Areia Vermelha + Atardecer del Jacaré. Los itinerarios ya están estructurados — basta combinar con Murillo por WhatsApp considerando la tabla de mareas. Cuando la marea ayuda, encajamos Areia Vermelha. Cuando no, ajustamos sin perder lo mejor de cada lado.",
        },
        {
          heading: "Habla directo con quien organiza",
          body: "Murillo conoce la tabla de mareas del mes completo de memoria y sabe qué lado funciona mejor en tu calendario. Manda mensaje por WhatsApp con la fecha de tu viaje y él arma el orden de los tours para que no pierdas lo mejor de cada lado.",
        },
      ],
    },
  },

  "porto-de-galinhas-de-joao-pessoa-vale-a-pena": {
    en: {
      title: "Is Porto de Galinhas from João Pessoa worth it? An honest guide",
      description:
        "Honest review of the Porto de Galinhas day trip from João Pessoa: when it's worth it, how the transport works, jangadas and what to expect.",
      category: "Logistics",
      faq: [
        {
          pergunta: "How long is the drive to Porto de Galinhas from João Pessoa?",
          resposta:
            "About 2h30 to 3h one-way, depending on traffic and route. Morning departure, night return. Comfortable vehicle, with a technical stop for restroom and snack.",
        },
        {
          pergunta: "Is photo ID mandatory?",
          resposta:
            "Yes. Photo ID is mandatory — it's an interstate trip between Paraíba (PB) and Pernambuco (PE). RG, driver's license or passport work. Without ID, boarding is denied.",
        },
        {
          pergunta: "Is the jangada to the natural pools included?",
          resposta:
            "No. The R$ 160 covers round-trip transport. The jangada to the natural pools is paid separately on-site (varies by group and season). Meals are also extra.",
        },
        {
          pergunta: "When is the day trip NOT worth it?",
          resposta:
            "When you only have 2-3 days in João Pessoa. In that case, better enjoy Jampa (Seixas, South Coast, Areia Vermelha) which offers equivalent quality without losing a full day on the road. With 5+ days, it's worth including.",
        },
      ],
      sections: [
        {
          heading: "Who usually asks this question",
          body: "A tourist staying in João Pessoa for 4-7 days, who hears about Porto de Galinhas and wants to know if it makes sense to include without changing hotels. Short answer: yes, if you have days to spare and want to see a different destination. But if you have 2-3 days, it's better to enjoy Jampa — which has equivalent natural pools with simpler logistics.",
        },
        {
          heading: "How the day trip works",
          body: "We pick you up at the hotel in the morning, about 2h30 to 3h drive in a comfortable vehicle to Porto de Galinhas (PE). Free time at the destination to enjoy as you like: village with shops and restaurants, central beach, natural pools via jangada (paid on-site) and lunch (not included). At night, return to João Pessoa. R$ 160 per person, round-trip transport. Photo ID mandatory.",
        },
        {
          heading: "What to expect at the natural pools",
          body: "Porto de Galinhas' natural pools are famous: coral formations a few meters from the beach that create open-air aquariums with colorful fish and green-crystal water. You take a jangada from the central beach to the pools. It's a paid experience there (not included in the R$ 160 of the day trip) — varies by season and group size. Worth negotiating and checking the price before boarding.",
        },
        {
          heading: "Honest comparison: Porto de Galinhas vs. Seixas and Picãozinho",
          body: "The natural pools in Porto de Galinhas and in João Pessoa (Seixas, Picãozinho, Areia Vermelha) are similar in concept: corals that form pools at low tide. The real difference is logistics. In Jampa, you leave the hotel, do the tour in 3h, and you're back in the afternoon. In Porto de Galinhas, it's a full-day logistics with 5-6h of road. For those with time, the experience is worth it. For those tight on days, better prioritize Jampa.",
        },
        {
          heading: "When the day trip IS (and ISN'T) worth it",
          body: "Worth it: you have 5+ days in João Pessoa, you've done Jampa's main tours, you want to see a different northeastern destination, and you're OK with a full day of logistics. Not worth it: you have 2-3 days, you're focused on Jampa, or you prefer a slow pace. The day trip consumes the whole day — whether it's the best use of your days is a priority decision.",
        },
        {
          heading: "Other day-trip options",
          body: "If you want to see another northeastern destination from João Pessoa, we also offer day trips to Praia de Pipa (RN, ~2h drive) and Natal (RN, ~3h drive). Pipa has a charming village and paradise beaches. Natal has the World's Largest Cashew Tree and Ponta Negra. Both R$ 160 per person, round-trip. ID mandatory.",
        },
        {
          heading: "How to decide",
          body: "Send Murillo a WhatsApp message with your travel dates and number of days. He'll analyze what makes the most sense for your calendar: prioritize Jampa (no day lost on the road), include Porto de Galinhas (if you have extra days), or swap for Pipa/Natal. It's direct guidance from someone who runs these day trips every week.",
        },
      ],
    },
    es: {
      title: "¿Vale la pena Porto de Galinhas desde João Pessoa? Guía honesta",
      description:
        "Evaluación honesta del bate-y-vuelta a Porto de Galinhas desde João Pessoa: cuándo vale la pena, cómo funciona el transporte, jangadas y qué esperar.",
      category: "Logística",
      faq: [
        {
          pergunta: "¿Cuánto dura el viaje a Porto de Galinhas desde João Pessoa?",
          resposta:
            "Cerca de 2h30 a 3h de ida, según el tráfico y la ruta. Salida temprano por la mañana, regreso por la noche. Vehículo cómodo, con parada técnica para baño y refrigerio.",
        },
        {
          pergunta: "¿Documento obligatorio?",
          resposta:
            "Sí. Documento con foto es obligatorio — es viaje interestatal entre Paraíba (PB) y Pernambuco (PE). RG, licencia de conducir o pasaporte funcionan. Sin documento, embarque negado.",
        },
        {
          pergunta: "¿La jangada para las piscinas naturales está incluida?",
          resposta:
            "No. El valor de R$ 160 cubre el transporte ida y vuelta. La jangada para las piscinas naturales se paga aparte en el lugar (varía según grupo y temporada). Las comidas también aparte.",
        },
        {
          pergunta: "¿Cuándo NO vale la pena hacer el bate-y-vuelta?",
          resposta:
            "Cuando tienes solo 2-3 días en João Pessoa. En ese caso, es mejor aprovechar Jampa (Seixas, Litoral Sur, Areia Vermelha) que ofrece calidad equivalente sin perder un día entero en carretera. Con 5+ días, vale la pena incluirlo.",
        },
      ],
      sections: [
        {
          heading: "Quién suele hacer esta pregunta",
          body: "Turista que está en João Pessoa por 4-7 días, oye hablar de Porto de Galinhas y quiere entender si tiene sentido incluirlo en el itinerario sin cambiar de hotel. Respuesta corta: vale la pena, si tienes días de sobra y quieres conocer un destino diferente. Pero si tienes 2-3 días, vale más aprovechar Jampa — que tiene piscinas naturales equivalentes con logística más simple.",
        },
        {
          heading: "Cómo funciona el bate-y-vuelta",
          body: "Te recogemos en el hotel por la mañana, cerca de 2h30 a 3h de viaje en vehículo cómodo hasta Porto de Galinhas (PE). Tiempo libre en el destino para disfrutar a tu manera: pueblo con tiendas y restaurantes, playa central, piscinas naturales por jangada (pago en el lugar) y almuerzo (no incluido). Por la noche, vuelta a João Pessoa. R$ 160 por persona, transporte ida y vuelta. Documento con foto obligatorio.",
        },
        {
          heading: "Qué esperar de las piscinas naturales",
          body: "Las piscinas naturales de Porto de Galinhas son famosas: formaciones de coral a pocos metros de la playa que crean acuarios a cielo abierto con peces coloridos y agua verde-cristalina. Sales en jangada desde la playa central hasta las piscinas. Es una experiencia pagada allí (no incluida en los R$ 160 del bate-y-vuelta) — varía según temporada y tamaño del grupo. Vale negociar y verificar el precio antes de embarcar.",
        },
        {
          heading: "Comparación honesta: Porto de Galinhas vs. Seixas y Picãozinho",
          body: "Las piscinas naturales de Porto de Galinhas y las de João Pessoa (Seixas, Picãozinho, Areia Vermelha) son similares en concepto: corales que forman piscinas con la marea baja. La diferencia real está en la logística. En Jampa, sales del hotel, haces el tour en 3h y estás de vuelta por la tarde. En Porto de Galinhas, es un día entero de logística con 5-6h de carretera. Para quien tiene tiempo, vale la experiencia. Para quien está apretado de días, mejor priorizar Jampa.",
        },
        {
          heading: "Cuándo vale (y cuándo no) el bate-y-vuelta",
          body: "Vale: tienes 5+ días en João Pessoa, ya hiciste los tours principales de Jampa, quieres conocer un destino diferente del nordeste pernambucano, y aceptas un día entero de logística. No vale: tienes 2-3 días, estás enfocado en conocer Jampa, o prefieres ritmo lento. El bate-y-vuelta consume el día entero — si es el mejor uso de tus días es una decisión de prioridad.",
        },
        {
          heading: "Otras opciones de bate-y-vuelta",
          body: "Si la idea es conocer otro destino del nordeste desde João Pessoa, también ofrecemos bate-y-vuelta a Praia de Pipa (RN, ~2h de viaje) y Natal (RN, ~3h de viaje). Pipa tiene pueblo encantador y playas paradisíacas. Natal tiene el Mayor Cajueiro del Mundo y Ponta Negra. Ambos R$ 160 por persona, ida y vuelta. Documento obligatorio.",
        },
        {
          heading: "Cómo decidir",
          body: "Manda mensaje a Murillo por WhatsApp con la fecha y cantidad de días de tu viaje. Él analiza lo que más tiene sentido en tu calendario: priorizar Jampa (sin perder día en carretera), incluir Porto de Galinhas (si sobran días), o cambiar por Pipa/Natal. Es orientación directa de quien organiza estos bate-y-vueltas toda la semana.",
        },
      ],
    },
  },
};
