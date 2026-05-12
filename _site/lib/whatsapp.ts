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
 * Monta o texto da mensagem WhatsApp seguindo o template aprovado.
 * Campos vazios viram linhas em branco — não bloqueia envio.
 */
export function buildReservationIntentMessage(i: ReservationIntent): string {
  const data = formatarDataBR(i.dataPasseio);
  const linhas = [
    `Oi, Murillo! Quero saber sobre o passeio ${i.passeioNome}.`,
    "",
    `Data do passeio: ${data}`,
    `Hotel/Bairro: ${i.hotel ?? ""}`,
    `Adultos: ${i.adultos}`,
    `Crianças: ${i.criancas}`,
    `Bebês: ${i.bebes}`,
    `Nome: ${i.nome ?? ""}`,
    `Meu WhatsApp: ${i.whatsapp ?? ""}`,
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
): string {
  const texto = buildReservationIntentMessage(intent);
  return `${baseUrl}?text=${encodeURIComponent(texto)}`;
}
