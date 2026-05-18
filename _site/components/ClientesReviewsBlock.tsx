/**
 * ClientesReviewsBlock — "O que dizem nossos clientes" (páginas de passeio).
 *
 * Versão SLIDER (1 avaliação por vez), substituiu o grid de cards.
 * O `GoogleReviewsBlock` da Home (faixa marquee) continua intacto.
 *
 * Mesma fonte: `data/google-reviews.ts`. NUNCA editar texto/nome/data
 * manualmente. Para atualizar, rodar nova extração via Playwright.
 *
 * Posicionado nas páginas de passeio entre Pré-reserva e FAQ.
 */

"use client";

import { useTranslations } from "next-intl";
import { googleReviews } from "@/data/google-reviews";
import { empresa } from "@/data/empresa";
import { ReviewSlider } from "@/components/ReviewSlider";

export function ClientesReviewsBlock() {
  const t = useTranslations("Reviews");
  if (googleReviews.length === 0) return null;

  const waUrl = `${empresa.contato.whatsappLink}?text=${encodeURIComponent(t("mensagemWa"))}`;

  return (
    <section
      aria-labelledby="clientes-reviews-titulo"
      style={{
        background: "var(--cor-fundo)",
        borderTop: "1px solid var(--cor-borda)",
        borderBottom: "1px solid var(--cor-borda)",
        padding: "56px 0",
      }}
    >
      <div className="container-safe">
        <header
          style={{
            textAlign: "center",
            marginBottom: "32px",
            maxWidth: "680px",
            marginInline: "auto",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--cor-primaria)",
              margin: "0 0 8px",
            }}
          >
            {t("kicker")}
          </p>
          <h2
            id="clientes-reviews-titulo"
            className="font-serif"
            style={{
              fontSize: "clamp(24px, 3vw, 32px)",
              fontWeight: 600,
              color: "var(--cor-texto-escuro)",
              margin: "0 0 12px",
              lineHeight: 1.2,
            }}
          >
            {t("titulo")}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "15px",
              lineHeight: 1.6,
              color: "var(--cor-texto-medio)",
              margin: 0,
            }}
          >
            {t("subtitulo")}
          </p>
        </header>

        <ReviewSlider reviews={googleReviews} />

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--cor-whatsapp)",
              color: "#fff",
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              fontSize: "14px",
              padding: "12px 22px",
              borderRadius: "999px",
              minHeight: "44px",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(37,211,102,0.25)",
            }}
          >
            {t("falarMurillo")}
          </a>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "12px",
            fontFamily: "var(--font-inter)",
            fontSize: "12px",
            color: "var(--cor-texto-claro)",
          }}
        >
          {t("rodape", { total: empresa.rating.totalAvaliacoes })}
        </p>
      </div>
    </section>
  );
}
