/**
 * CONFIGURAÇÃO DE DESCONTOS POR PASSEIO
 * ─────────────────────────────────────
 * Murillo: edite aqui para ajustar percentuais e condições sem tocar em código.
 *
 * - precoAnterior: preço cheio SEM desconto (o que fica riscado no card)
 * - label: condição do desconto exibida em destaque no chip de preço
 * - tipo: "pix" | "grupo" | "antecipado" (apenas para organização interna)
 *
 * Para REMOVER o preço riscado de um passeio: comente ou delete a linha do slug.
 */

export interface DescontoConfig {
  precoAnterior: string; // preço riscado — ex: "R$ 70"
  label: string;         // ex: "PIX à vista"
  tipo: "pix" | "grupo" | "antecipado";
}

// Slugs sem desconto: simplesmente não aparecem aqui.
export const DESCONTOS: Record<string, DescontoConfig> = {
  // ── Piscinas Naturais ────────────────────────────────────────────
  "seixas":              { precoAnterior: "R$ 70",  label: "PIX à vista",  tipo: "pix" },
  "penha":               { precoAnterior: "R$ 70",  label: "PIX à vista",  tipo: "pix" },
  "picaozinho":          { precoAnterior: "R$ 70",  label: "PIX à vista",  tipo: "pix" },
  "mergulho":            { precoAnterior: "R$ 120", label: "PIX à vista",  tipo: "pix" }, // [CONFIRMAR COM MURILLO]

  // ── Litoral Norte ────────────────────────────────────────────────
  "areia-vermelha-catamara": { precoAnterior: "R$ 80",  label: "PIX à vista",  tipo: "pix" },
  "combo-areia-vermelha":    { precoAnterior: "R$ 90",  label: "PIX à vista",  tipo: "pix" },

  // ── Litoral Sul ──────────────────────────────────────────────────
  "roteiro-classico":            { precoAnterior: "R$ 95",  label: "PIX à vista",  tipo: "pix" },
  "praia-bela":                  { precoAnterior: "R$ 95",  label: "PIX à vista",  tipo: "pix" },
  "combo-jampa-quadriciclo":     { precoAnterior: "R$ 165", label: "PIX à vista",  tipo: "pix" },
  "combo-praia-bela-quadriciclo":{ precoAnterior: "R$ 175", label: "PIX à vista",  tipo: "pix" },

  // ── Passeios de Embarcação ───────────────────────────────────────
  "por-do-sol-jacare":   { precoAnterior: "R$ 100", label: "PIX à vista",  tipo: "pix" },

  // ── City Tour ────────────────────────────────────────────────────
  "jampa-historica":     { precoAnterior: "R$ 95",  label: "PIX à vista",  tipo: "pix" },

  // ── Excursões ────────────────────────────────────────────────────
  "porto-de-galinhas":   { precoAnterior: "R$ 180", label: "Grupo (3+)",   tipo: "grupo" },
  "praia-de-pipa":       { precoAnterior: "R$ 180", label: "Grupo (3+)",   tipo: "grupo" },
  "natal":               { precoAnterior: "R$ 180", label: "Grupo (3+)",   tipo: "grupo" },

  // ── Pacotes ──────────────────────────────────────────────────────
  "roteiro-do-murillo-3-dias":  { precoAnterior: "R$ 445", label: "PIX à vista",  tipo: "pix" },
  "combo-sol-nascente-3-dias":  { precoAnterior: "R$ 310", label: "PIX à vista",  tipo: "pix" },
  "combo-mare-boa-2-dias":      { precoAnterior: "R$ 155", label: "PIX à vista",  tipo: "pix" },
};
