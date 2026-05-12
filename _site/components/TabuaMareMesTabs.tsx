/**
 * Seletor de mês da Tábua de Maré (client component).
 *
 * - Mobile (<768px): `<select>` nativo — melhor UX em 320px.
 * - Desktop (≥768px): grid de botões 4×2.
 *
 * Painéis dos meses são renderizados todos no SSR (Google indexa todos).
 * Este componente apenas alterna o atributo `hidden` dos `<section
 * id="mes-{slug}">` correspondentes via `useEffect`. Sem reload de página,
 * sincroniza query string `?mes=` por conveniência.
 */

"use client";

import { useEffect, useState } from "react";
import type { MesMareManual } from "@/data/tabua-mares-manual";

interface Props {
  meses: MesMareManual[];
  defaultMesSlug?: string;
}

export function TabuaMareMesTabs({ meses, defaultMesSlug }: Props) {
  const [mesAtivo, setMesAtivo] = useState<string>(
    defaultMesSlug ?? meses[0]?.mesSlug ?? ""
  );

  // 1. Ao montar, sincroniza com `?mes=` se houver (link compartilhável).
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const fromUrl = sp.get("mes");
    if (fromUrl && meses.some((m) => m.mesSlug === fromUrl)) {
      setMesAtivo(fromUrl);
    }
  }, [meses]);

  // 2. Alterna visibilidade dos painéis SSR e atualiza query string.
  useEffect(() => {
    if (!mesAtivo) return;
    meses.forEach((m) => {
      const el = document.getElementById(`mes-${m.mesSlug}`);
      if (!el) return;
      if (m.mesSlug === mesAtivo) {
        el.removeAttribute("hidden");
      } else {
        el.setAttribute("hidden", "");
      }
    });
    const url = new URL(window.location.href);
    url.searchParams.set("mes", mesAtivo);
    window.history.replaceState({}, "", url.toString());
  }, [mesAtivo, meses]);

  return (
    <div className="container-safe">
      {/* Mobile: select nativo (melhor em 320px) */}
      <div className="md:hidden mb-6">
        <label
          htmlFor="seletor-mes"
          style={{
            display: "block",
            fontFamily: "var(--font-inter)",
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--cor-texto-medio)",
            marginBottom: "8px",
          }}
        >
          Escolha o mês:
        </label>
        <select
          id="seletor-mes"
          value={mesAtivo}
          onChange={(e) => setMesAtivo(e.target.value)}
          style={{
            width: "100%",
            background: "var(--cor-fundo-puro)",
            border: "1px solid var(--cor-borda)",
            borderRadius: "10px",
            padding: "12px 14px",
            fontFamily: "var(--font-inter)",
            fontSize: "16px",
            color: "var(--cor-texto-escuro)",
            minHeight: "48px",
          }}
        >
          {meses.map((m) => (
            <option key={m.mesSlug} value={m.mesSlug}>
              {m.mesNome} / {m.ano}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop: grid de botões 4×2 */}
      <div
        role="tablist"
        aria-label="Selecionar mês da tábua de maré"
        className="hidden md:grid grid-cols-4 gap-2 mb-8"
      >
        {meses.map((m) => {
          const ativo = m.mesSlug === mesAtivo;
          return (
            <button
              key={m.mesSlug}
              type="button"
              role="tab"
              aria-selected={ativo}
              aria-controls={`mes-${m.mesSlug}`}
              onClick={() => setMesAtivo(m.mesSlug)}
              style={{
                background: ativo ? "var(--cor-primaria)" : "var(--cor-fundo-puro)",
                color: ativo ? "#fff" : "var(--cor-texto-escuro)",
                border: `1px solid ${ativo ? "var(--cor-primaria)" : "var(--cor-borda)"}`,
                borderRadius: "10px",
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                fontSize: "14px",
                padding: "12px 16px",
                minHeight: "48px",
                cursor: "pointer",
                transition: "all 200ms ease-out",
              }}
            >
              {m.mesNome}
            </button>
          );
        })}
      </div>
    </div>
  );
}
