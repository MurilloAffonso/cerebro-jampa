"use client";

import { useTranslations } from "next-intl";
import { DESIGN_BADGE, type DesignBadgeKind } from "@/lib/badges";

const BADGE_T_KEY: Record<DesignBadgeKind, string> = {
  "mais-vendido":     "maisVendido",
  "imperdivel":       "imperdivel",
  "mare":             "dependeMare",
  "so-mare-baixa":    "soMareBaixa",
  "promo":            "promo",
  "vagas":            "vagas",
  "vagas-embarcacao": "vagasEmbarcacao",
  "equipamentos":     "equipamentos",
  "visibilidade":     "visibilidade",
  "familia":          "familia",
  "transfer":         "transferIncluso",
  "novo":             "novoRoteiro",
};

interface HeroBadgePillsProps {
  badges: DesignBadgeKind[];
}

export function HeroBadgePills({ badges }: HeroBadgePillsProps) {
  const t = useTranslations("Tags");

  return (
    <>
      {badges.map((k) => {
        const b = DESIGN_BADGE[k];
        return (
          <span
            key={k}
            style={{
              fontFamily: "var(--font-body)",
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              background: b.bg,
              color: "#fff",
              padding: "5px 10px",
              fontSize: 11,
              fontWeight: 700,
              borderRadius: 999,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              lineHeight: 1,
              whiteSpace: "nowrap",
              boxShadow: "0 4px 14px -6px rgba(0,0,0,0.45)",
            }}
          >
            <span style={{ fontSize: 12, lineHeight: 1 }}>{b.icon}</span>
            {t(BADGE_T_KEY[k])}
          </span>
        );
      })}
    </>
  );
}
