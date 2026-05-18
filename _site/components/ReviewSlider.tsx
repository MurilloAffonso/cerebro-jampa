/**
 * ReviewSlider v2 — versão enxuta e "premium".
 *
 * Sem setas, dots ou contador visíveis. Mostra 1 avaliação por vez,
 * autoplay a cada `autoplayMs` (default 5s), pausa em hover/foco/touch.
 * No mobile, swipe avança/volta; no desktop, mouse fica fora — a leitura
 * é guiada pelo autoplay.
 *
 * Acessibilidade:
 *  - `aria-roledescription="carousel"` no wrapper.
 *  - `aria-live="polite"` no slide para anunciar troca em leitor de tela.
 *  - Botão de pausa/play oculto visualmente mas focável (sr-only) para
 *    quem usa teclado — não polui o design, mas atende WCAG.
 *
 * Recebe lista de `GoogleReview` (data/google-reviews.ts) — nunca inventa
 * texto, nome, data ou foto.
 */

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import type { GoogleReview } from "@/data/google-reviews";

interface Props {
  reviews: GoogleReview[];
  /** Intervalo de autoplay em ms. Default: 5000. 0 desabilita. */
  autoplayMs?: number;
}

const SWIPE_THRESHOLD = 50;

export function ReviewSlider({ reviews, autoplayMs = 5000 }: Props) {
  const [idx, setIdx] = useState(0);
  const [pausado, setPausado] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = reviews.length;

  useEffect(() => {
    if (autoplayMs <= 0 || pausado || total <= 1) return;
    const t = setTimeout(() => {
      setIdx((i) => (i + 1) % total);
    }, autoplayMs);
    return () => clearTimeout(t);
  }, [idx, pausado, autoplayMs, total]);

  if (total === 0) return null;

  function avancar() {
    setIdx((i) => (i + 1) % total);
  }
  function voltar() {
    setIdx((i) => (i - 1 + total) % total);
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    setPausado(true);
  }
  function onTouchEnd(e: React.TouchEvent) {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX === null) return;
    const endX = e.changedTouches[0]?.clientX ?? startX;
    const delta = endX - startX;
    if (Math.abs(delta) < SWIPE_THRESHOLD) {
      // Sem swipe — destrava o autoplay
      setPausado(false);
      return;
    }
    if (delta < 0) avancar();
    else voltar();
    // Mantém pausado por mais um ciclo para o usuário ler
    setTimeout(() => setPausado(false), 4000);
  }

  const review = reviews[idx];

  return (
    <div
      aria-roledescription="carousel"
      aria-label="Avaliações de clientes"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        position: "relative",
        maxWidth: "680px",
        margin: "0 auto",
        // Cross-fade visual entre slides
      }}
    >
      <div aria-live="polite">
        <ReviewCard review={review} key={`${review.name}-${idx}`} />
      </div>

      {/* Controle de pausa/play oculto — só para teclado/SR (WCAG). */}
      <button
        type="button"
        onClick={() => setPausado((v) => !v)}
        aria-label={
          pausado ? "Retomar troca automática" : "Pausar troca automática"
        }
        style={srOnlyStyle}
      >
        {pausado ? "Retomar" : "Pausar"}
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Card individual
// ---------------------------------------------------------------------------

function ReviewCard({ review }: { review: GoogleReview }) {
  const t = useTranslations("Reviews");
  const [expandido, setExpandido] = useState(false);
  const paragrafos = review.text.split("\n\n");
  const primeiroLongo = paragrafos[0].length > 220;
  const compacto = primeiroLongo
    ? paragrafos[0].slice(0, 220).trimEnd() + "…"
    : paragrafos[0];
  const podeExpandir = paragrafos.length > 1 || primeiroLongo;

  useEffect(() => {
    setExpandido(false);
  }, [review.name, review.text]);

  return (
    <article
      style={{
        background: "var(--cor-fundo-puro)",
        border: "1px solid var(--cor-borda)",
        borderRadius: "16px",
        padding: "28px 24px",
        boxShadow: "var(--sombra-card)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        minHeight: "240px",
        transition: "opacity 280ms ease",
      }}
    >
      <header style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            position: "relative",
            width: "44px",
            height: "44px",
            borderRadius: "999px",
            overflow: "hidden",
            background: "var(--cor-fundo)",
            flexShrink: 0,
          }}
        >
          <Image
            src={review.avatarUrl}
            alt=""
            fill
            sizes="44px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "15px",
              fontWeight: 600,
              color: "var(--cor-texto-escuro)",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {review.name}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "2px",
            }}
          >
            <Stars count={review.stars} />
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                color: "var(--cor-texto-claro)",
              }}
            >
              · {review.tempo}
            </span>
          </div>
          {t("originalPt") && (
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                color: "var(--cor-texto-claro)",
                margin: "4px 0 0",
                fontStyle: "italic",
              }}
            >
              {t("originalPt")}
            </p>
          )}
        </div>
      </header>

      <div>
        {expandido ? (
          paragrafos.map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "15px",
                lineHeight: 1.65,
                color: "var(--cor-texto-medio)",
                margin: "0 0 10px",
              }}
            >
              {p}
            </p>
          ))
        ) : (
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "15px",
              lineHeight: 1.65,
              color: "var(--cor-texto-medio)",
              margin: 0,
            }}
          >
            {compacto}
          </p>
        )}
        {podeExpandir && (
          <button
            type="button"
            onClick={() => setExpandido((v) => !v)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              marginTop: "8px",
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--cor-primaria)",
              cursor: "pointer",
            }}
          >
            {expandido ? t("mostrarMenos") : t("lerCompleta")}
          </button>
        )}
      </div>

      {review.photoUrls && review.photoUrls[0] && (
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            borderRadius: "12px",
            overflow: "hidden",
            background: "var(--cor-fundo)",
          }}
        >
          <Image
            src={review.photoUrls[0]}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 680px"
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>
      )}
    </article>
  );
}

function Stars({ count }: { count: number }) {
  const t = useTranslations("Reviews");
  const cheias = Math.max(0, Math.min(5, Math.round(count)));
  return (
    <span
      aria-label={t("estrelasAria", { count: cheias })}
      style={{ display: "inline-flex", gap: "1px" }}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < cheias ? "var(--cor-acento-suave)" : "transparent"}
          stroke={
            i < cheias ? "var(--cor-acento-suave)" : "var(--cor-texto-claro)"
          }
          strokeWidth="1.4"
          aria-hidden="true"
        >
          <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.3 21 12 17.7 5.7 21 7 14.1 2 9.3 9 8.5" />
        </svg>
      ))}
    </span>
  );
}

const srOnlyStyle: React.CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};
