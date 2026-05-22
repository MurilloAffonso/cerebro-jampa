/**
 * Helpers para construir mensagens e URLs do WhatsApp.
 *
 * Sem backend. Sem captura de cartão. Sem checkout.
 * Apenas formata a intenção do cliente em texto e devolve um link wa.me
 * pronto para abrir o WhatsApp do Murillo com a mensagem preenchida.
 */

import { empresa } from "@/data/empresa";

export interface ReservationIntent {
  passeioNome: string;
  /** ISO `"2026-05-15"` vindo de `<input type="date">` — `""` quando vazio. */
  dataPasseio?: string;
  hotel?: string;
  adultos: number;
  criancas: number;
  bebes: number;
  nome?: string;
  whatsapp?: string;
}

type Locale = "pt" | "en" | "es";
export type WhatsAppIntent =
  | "geral"
  | "roteiro"
  | "roteiro3dias"
  | "passeio"
  | "passeioCard"
  | "piscinas"
  | "mare"
  | "transfer"
  | "privativo"
  | "grupo"
  | "areiaVermelha"
  | "litoralSul"
  | "litoralNorte"
  | "blog"
  | "faq"
  | "sobre";

export interface WhatsAppMessageOptions {
  passeioNome?: string;
}

export interface PasseioWhatsAppContext {
  nome: string;
  categoria: string;
  slug: string;
  dependeDeMare?: boolean;
}

function nomePasseio(nome?: string): string {
  return nome?.trim() || "esse passeio";
}

export function buildWhatsAppMessage(
  intent: WhatsAppIntent,
  opts: WhatsAppMessageOptions = {},
): string {
  const passeio = nomePasseio(opts.passeioNome);

  switch (intent) {
    case "roteiro3dias":
      return "Oi Murillo! Quero montar um roteiro de 3 dias em João Pessoa. Datas: __. Somos __ pessoas. Quero incluir praias, piscinas naturais e pôr do sol. Pode me passar opções?";
    case "passeio":
      return `Oi Murillo! Quero reservar o passeio ${passeio}. Data: __. Somos __ adultos e __ crianças. Hospedagem: __. Pode confirmar disponibilidade, valor e forma de pagamento?`;
    case "passeioCard":
      return `Oi Murillo! Quero saber mais sobre o passeio ${passeio}. Pode me passar valor, disponibilidade e o que está incluso?`;
    case "piscinas":
    case "mare":
      return "Oi Murillo! Quero fazer piscinas naturais na maré baixa. Minhas datas são __. Pode indicar o melhor dia entre Seixas, Picãozinho e Areia Vermelha?";
    case "areiaVermelha":
      return "Oi Murillo! Quero fazer o passeio para Areia Vermelha. Minhas datas são __. Pode confirmar o melhor dia de maré baixa, valor e disponibilidade?";
    case "litoralSul":
      return "Oi Murillo! Quero fazer o Litoral Sul. Data: __. Somos __ pessoas. Pode confirmar roteiro, valor, horário de saída e opção com quadriciclo?";
    case "litoralNorte":
      return "Oi Murillo! Quero fazer o Litoral Norte. Data: __. Somos __ pessoas. Pode confirmar roteiro, valor e opção com Areia Vermelha e pôr do sol do Jacaré?";
    case "transfer":
      return "Oi Murillo! Quero cotar transfer em João Pessoa. Origem: __. Destino: __. Data/hora: __. Passageiros: __. Bagagens/voo: __.";
    case "privativo":
      return "Oi Murillo! Quero um passeio privativo em João Pessoa. Somos __ pessoas, data __. Pode cotar opções, duração, capacidade e o que está incluso?";
    case "grupo":
      return "Oi Murillo! Quero cotar passeio para grupo/excursão. Cidade de origem: __. Data: __. Quantidade de pessoas: __. Tipo de grupo: __. Pode me passar opções?";
    case "blog":
      return "Oi Murillo! Li uma dica no blog da Vem Passear Jampa e quero ajuda para montar meu roteiro em João Pessoa. Datas: __. Somos __ pessoas.";
    case "faq":
    case "sobre":
      return "Oi Murillo! Vim pelo site da Vem Passear Jampa e tenho uma dúvida sobre os passeios em João Pessoa.";
    case "roteiro":
    case "geral":
    default:
      return "Oi Murillo! Estou planejando uma viagem para João Pessoa. Vou ficar de __ a __, somos __ pessoas. Pode me ajudar a escolher os melhores passeios?";
  }
}

export function buildWhatsAppUrl(
  intent: WhatsAppIntent,
  opts: WhatsAppMessageOptions = {},
  baseUrl = empresa.contato.whatsappLink,
): string {
  return `${baseUrl}?text=${encodeURIComponent(buildWhatsAppMessage(intent, opts))}`;
}

export function resolveCategoriaWhatsAppIntent(categoria: string): WhatsAppIntent {
  switch (categoria) {
    case "piscinas-naturais":
      return "piscinas";
    case "litoral-sul":
      return "litoralSul";
    case "litoral-norte":
      return "litoralNorte";
    case "pacotes":
      return "roteiro";
    default:
      return "geral";
  }
}

export function resolvePasseioWhatsAppIntent(passeio: PasseioWhatsAppContext): WhatsAppIntent {
  const slug = passeio.slug.toLowerCase();
  const nome = passeio.nome.toLowerCase();

  if (slug === "roteiro-do-murillo-3-dias" || nome.includes("3 dias")) {
    return "roteiro3dias";
  }
  if (slug.includes("privativ") || nome.includes("privativ")) {
    return "privativo";
  }
  if (slug.includes("areia-vermelha") || nome.includes("areia vermelha")) {
    return "areiaVermelha";
  }
  if (passeio.categoria === "piscinas-naturais" || passeio.dependeDeMare) {
    return "piscinas";
  }
  if (passeio.categoria === "litoral-sul") {
    return "litoralSul";
  }
  if (passeio.categoria === "litoral-norte") {
    return "litoralNorte";
  }

  return "passeio";
}

interface ReservationCopy {
  intro: (passeio: string) => string;
  data: string;
  hotel: string;
  adultos: string;
  criancas: string;
  bebes: string;
  nome: string;
  whatsapp: string;
}

const RESERVATION_COPY: Record<Locale, ReservationCopy> = {
  pt: {
    intro: (p) => `Oi Murillo! Quero reservar o passeio ${p}.`,
    data: "Data do passeio",
    hotel: "Hospedagem",
    adultos: "Adultos",
    criancas: "Crianças",
    bebes: "Bebês",
    nome: "Nome",
    whatsapp: "Meu WhatsApp",
  },
  en: {
    intro: (p) => `Hi Murillo! I'd like to know about the ${p} tour.`,
    data: "Tour date",
    hotel: "Hotel/Neighborhood",
    adultos: "Adults",
    criancas: "Children",
    bebes: "Babies",
    nome: "Name",
    whatsapp: "My WhatsApp",
  },
  es: {
    intro: (p) => `¡Hola Murillo! Me gustaría saber sobre el tour ${p}.`,
    data: "Fecha del tour",
    hotel: "Hotel/Barrio",
    adultos: "Adultos",
    criancas: "Niños",
    bebes: "Bebés",
    nome: "Nombre",
    whatsapp: "Mi WhatsApp",
  },
};

function resolveLocale(locale?: string): Locale {
  if (locale === "en" || locale === "es") return locale;
  return "pt";
}

/**
 * Converte ISO `"2026-05-15"` em formato brasileiro `"15/05/2026"`.
 * Devolve string vazia se entrada for falsy ou inválida.
 */
function formatarDataBR(iso?: string): string {
  if (!iso) return "";
  const partes = iso.split("-");
  if (partes.length !== 3) return iso;
  const [ano, mes, dia] = partes;
  if (!ano || !mes || !dia) return iso;
  return `${dia}/${mes}/${ano}`;
}

/**
 * Monta o texto da mensagem WhatsApp seguindo o template aprovado, no idioma do site.
 * Campos vazios viram linhas em branco — não bloqueia envio.
 */
export function buildReservationIntentMessage(
  i: ReservationIntent,
  locale?: string,
): string {
  const c = RESERVATION_COPY[resolveLocale(locale)];
  const data = formatarDataBR(i.dataPasseio);
  const linhas = [
    c.intro(i.passeioNome),
    "",
    `${c.data}: ${data}`,
    `${c.hotel}: ${i.hotel ?? ""}`,
    `${c.adultos}: ${i.adultos}`,
    `${c.criancas}: ${i.criancas}`,
    `${c.bebes}: ${i.bebes}`,
    `${c.nome}: ${i.nome ?? ""}`,
    `${c.whatsapp}: ${i.whatsapp ?? ""}`,
  ];
  return linhas.join("\n");
}

/**
 * Retorna a URL completa do wa.me com a mensagem URL-encoded.
 *
 * @param baseUrl ex: `"https://wa.me/558399087830"` (vem de `empresa.contato.whatsappLink`)
 */
export function buildReservationWhatsAppUrl(
  intent: ReservationIntent,
  baseUrl: string,
  locale?: string,
): string {
  const texto = buildReservationIntentMessage(intent, locale);
  return `${baseUrl}?text=${encodeURIComponent(texto)}`;
}
