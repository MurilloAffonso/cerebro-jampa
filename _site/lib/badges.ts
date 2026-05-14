/**
 * Badge system — mapeamento entre dados do passeio e badges visuais do Cloud Design.
 * Não inventar badges — só aplicar quando há respaldo objetivo.
 */

import type { Passeio } from "@/data/passeios";

export type DesignBadgeKind =
  | "mais-vendido"
  | "imperdivel"
  | "mare"
  | "promo"
  | "vagas"
  | "familia"
  | "transfer"
  | "novo";

export const DESIGN_BADGE: Record<DesignBadgeKind, { bg: string; label: string; icon: string }> = {
  "mais-vendido": { bg: "#107997", label: "Mais vendido",    icon: "★" },
  "imperdivel":   { bg: "#E05C00", label: "Imperdível",      icon: "⚡" },
  "mare":         { bg: "#0056B3", label: "Depende da maré", icon: "〜" },
  "promo":        { bg: "#C0392B", label: "Promoção",        icon: "%" },
  "vagas":        { bg: "#7D3C98", label: "Vagas limitadas", icon: "⏳" },
  "familia":      { bg: "#27AE60", label: "Família",         icon: "♡" },
  "transfer":     { bg: "#092238", label: "Transfer incluso","icon": "→" },
  "novo":         { bg: "#0E8FA8", label: "Novo roteiro",    icon: "+" },
};

/** Slugs que recebem badge automático por serem comprovadamente populares */
const MAIS_VENDIDOS = new Set(["seixas", "picaozinho", "roteiro-classico"]);
const IMPERDIVEIS   = new Set(["areia-vermelha-catamara", "por-do-sol-jacare"]);
const FAMILIA_SLUGS = new Set(["3-dias-completo", "3-dias-basico", "super-economico"]);

export function getPasseioBadges(passeio: Passeio): DesignBadgeKind[] {
  const result = new Set<DesignBadgeKind>();

  // 1. Mapeamento de BadgeComercial → DesignBadgeKind
  for (const b of passeio.badges ?? []) {
    if (b === "mais-vendido")   result.add("mais-vendido");
    if (b === "imperdivel")     result.add("imperdivel");
    if (b === "depende-da-mare") result.add("mare");
    if (b === "familia")        result.add("familia");
    if (b === "esgota-rapido")  result.add("vagas");
    if (b === "privativo")      result.add("transfer");
    if (b === "bate-volta")     result.add("novo");
    if (b === "desconto-progressivo") result.add("promo");
  }

  // 2. Flag dependeDeMare
  if (passeio.dependeDeMare) result.add("mare");

  // 3. Overrides por slug (respaldo objetivo — passeios prioritários confirmados)
  if (MAIS_VENDIDOS.has(passeio.slug)) result.add("mais-vendido");
  if (IMPERDIVEIS.has(passeio.slug))   result.add("imperdivel");
  if (FAMILIA_SLUGS.has(passeio.slug)) result.add("familia");

  // Pacotes sempre levam "familia"
  if (passeio.categoria === "pacotes") result.add("familia");

  // Retorna max 2 badges — prioridade: mais-vendido > imperdivel > mare > resto
  const priority: DesignBadgeKind[] = [
    "mais-vendido", "imperdivel", "mare", "familia",
    "vagas", "promo", "transfer", "novo",
  ];
  return priority.filter((k) => result.has(k)).slice(0, 2);
}

/** Extrai o menor preço de um campo de preço para exibição no chip */
export function parsePrecoChip(preco: string): string | null {
  if (!preco || preco.includes("[CONSULTAR]") || preco.includes("[CONFIRMAR")) return null;
  // ex: "R$ 60" → "R$ 60"
  // ex: "Individual: R$ 400 / Dupla: R$ 700" → "R$ 400"
  const match = preco.match(/R\$\s*[\d.,]+/);
  return match ? match[0].replace(/\s+/, " ") : null;
}
