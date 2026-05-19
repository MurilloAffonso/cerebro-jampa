/**
 * Helpers para construir mensagens e URLs do WhatsApp.
 *
 * Sem backend. Sem captura de cartão. Sem checkout.
 * Apenas formata a intenção do cliente em texto e devolve um link wa.me
 * pronto para abrir o WhatsApp do Murillo com a mensagem preenchida.
 */

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
    intro: (p) => `Oi, Murillo! Quero saber sobre o passeio ${p}.`,
    data: "Data do passeio",
    hotel: "Hotel/Bairro",
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
