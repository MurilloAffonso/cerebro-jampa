/**
 * PasseioGallery v3 — galeria comercial enxuta no padrão de site turístico.
 *
 * API simples: recebe `images: GalleryImage[]` JÁ resolvido pelo
 * `lib/gallery.ts` (`getPasseioGalleryImages`). Não decide fallback — quem
 * monta a lista é o caller (página). Assim a galeria nunca aparece "vazia".
 *
 * Visual:
 *  - Imagem principal grande (4:3 mobile · 16:10 desktop) com setas overlay.
 *  - Strip de até 4 miniaturas. A ÚLTIMA miniatura visível, quando há mais
 *    fotos, recebe overlay escurecido "+ N fotos" e abre o lightbox naquele
 *    índice.
 *  - Contador discreto no canto superior direito da principal.
 *  - Lightbox em <dialog> nativo: overlay escuro, imagem central, setas
 *    laterais, botão fechar, contador "1 / N", teclado (←/→/ESC), swipe touch.
 *
 * Mobile-first. Sem dependência externa. Sem scroll horizontal.
 */

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/data/passeios";

interface Props {
  /** Lista resolvida pelo `getPasseioGalleryImages`. */
  images: GalleryImage[];
  /** Nome do passeio para aria-label. */
  passeioNome: string;
}

const MAX_THUMBS = 4;
const SWIPE_THRESHOLD = 50;

export function PasseioGallery({ images, passeioNome }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (lightboxIdx !== null && !dlg.open) dlg.showModal();
    if (lightboxIdx === null && dlg.open) dlg.close();
  }, [lightboxIdx]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    function onKey(e: KeyboardEvent) {
      if (lightboxIdx === null) return;
      if (e.key === "ArrowRight") {
        setLightboxIdx((i) => (i === null ? null : (i + 1) % images.length));
      } else if (e.key === "ArrowLeft") {
        setLightboxIdx((i) =>
          i === null ? null : (i - 1 + images.length) % images.length,
        );
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, images.length]);

  if (images.length === 0) return null;

  function closeLightbox() {
    setLightboxIdx(null);
    setTimeout(() => openerRef.current?.focus(), 0);
  }

  function avancar() {
    setActiveIdx((i) => (i + 1) % images.length);
  }
  function voltar() {
    setActiveIdx((i) => (i - 1 + images.length) % images.length);
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }
  function onTouchEnd(e: React.TouchEvent) {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX === null) return;
    const endX = e.changedTouches[0]?.clientX ?? startX;
    const delta = endX - startX;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) avancar();
    else voltar();
  }

  const principal = images[activeIdx] ?? images[0];
  const visibleThumbs = images.slice(0, MAX_THUMBS);
  const extras = Math.max(0, images.length - MAX_THUMBS);
  const ultimaIdxVisivel = visibleThumbs.length - 1;
  const temMaisFotos = extras > 0;
  const total = images.length;

  return (
    <section
      aria-label={`Galeria de fotos — ${passeioNome}`}
      className="container-safe"
      style={{ paddingTop: "24px", paddingBottom: "24px" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "10px",
        }}
        className="md:grid-cols-[1fr_140px] md:gap-3"
      >
        {/* ───── Imagem principal ───── */}
        <div
          style={{ position: "relative", width: "100%" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            ref={openerRef}
            onClick={() => setLightboxIdx(activeIdx)}
            aria-label={`Abrir foto ampliada: ${principal.alt}`}
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/3",
              borderRadius: "16px",
              overflow: "hidden",
              background: "var(--cor-navy)",
              border: "none",
              padding: 0,
              cursor: "zoom-in",
              boxShadow: "var(--sombra-card)",
              display: "block",
            }}
            className="md:aspect-[16/10]"
          >
            <Image
              src={principal.src}
              alt={principal.alt}
              fill
              sizes="(max-width: 768px) 100vw, 880px"
              style={{ objectFit: "cover" }}
              priority={activeIdx === 0}
            />
            {principal.caption && (
              <span
                style={{
                  position: "absolute",
                  left: "12px",
                  bottom: "12px",
                  background: "rgba(9,34,56,0.72)",
                  color: "#fff",
                  padding: "4px 10px",
                  borderRadius: "8px",
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                {principal.caption}
              </span>
            )}
          </button>

          {/* Setas overlay — só quando há ≥2 fotos */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  voltar();
                }}
                aria-label="Foto anterior"
                style={mainNavBtnStyle("left")}
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  avancar();
                }}
                aria-label="Próxima foto"
                style={mainNavBtnStyle("right")}
              >
                ›
              </button>
            </>
          )}

          {/* Contador discreto */}
          {total > 1 && (
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "rgba(9,34,56,0.72)",
                color: "#fff",
                padding: "4px 10px",
                borderRadius: "999px",
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              {activeIdx + 1} / {total}
            </span>
          )}
        </div>

        {/* ───── Strip de miniaturas ───── */}
        <div
          role="list"
          aria-label="Miniaturas da galeria"
          style={{
            display: "flex",
            gap: "8px",
            overflowX: "auto",
            paddingBottom: "4px",
          }}
          className="md:flex-col md:overflow-visible"
        >
          {visibleThumbs.map((img, idx) => {
            const ativo = idx === activeIdx;
            const ehUltima = idx === ultimaIdxVisivel;
            const mostrarOverlayMais = temMaisFotos && ehUltima;

            return (
              <button
                key={img.src}
                role="listitem"
                type="button"
                onClick={() => {
                  if (mostrarOverlayMais) {
                    // Abre lightbox direto na primeira foto extra
                    setLightboxIdx(MAX_THUMBS);
                  } else {
                    setActiveIdx(idx);
                  }
                }}
                aria-label={
                  mostrarOverlayMais
                    ? `Ver mais ${extras} fotos`
                    : `Mostrar foto ${idx + 1}: ${img.alt}`
                }
                aria-current={ativo}
                style={{
                  position: "relative",
                  flexShrink: 0,
                  width: "88px",
                  height: "66px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  background: "var(--cor-navy)",
                  border: `2px solid ${
                    ativo ? "var(--cor-primaria)" : "transparent"
                  }`,
                  padding: 0,
                  cursor: "pointer",
                }}
                className="md:w-full md:h-auto md:aspect-[4/3]"
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="120px"
                  style={{ objectFit: "cover" }}
                />
                {/* Overlay "+ N fotos" sobre a última miniatura visível */}
                {mostrarOverlayMais && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(9,34,56,0.62)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 600,
                      fontSize: "13px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    + {extras} fotos
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ───── Lightbox <dialog> nativo ───── */}
      <dialog
        ref={dialogRef}
        onClose={() => setLightboxIdx(null)}
        aria-label={`Foto ampliada de ${passeioNome}`}
        style={{
          padding: 0,
          border: "none",
          background: "transparent",
          maxWidth: "100vw",
          maxHeight: "100vh",
          width: "100%",
          height: "100%",
        }}
      >
        {lightboxIdx !== null && (
          <LightboxConteudo
            images={images}
            activeIdx={lightboxIdx}
            onPrev={() =>
              setLightboxIdx((i) =>
                i === null ? null : (i - 1 + images.length) % images.length,
              )
            }
            onNext={() =>
              setLightboxIdx((i) =>
                i === null ? null : (i + 1) % images.length,
              )
            }
            onClose={closeLightbox}
            passeioNome={passeioNome}
          />
        )}
      </dialog>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Lightbox — conteúdo isolado para facilitar leitura
// ---------------------------------------------------------------------------

function LightboxConteudo({
  images,
  activeIdx,
  onPrev,
  onNext,
  onClose,
  passeioNome,
}: {
  images: GalleryImage[];
  activeIdx: number;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
  passeioNome: string;
}) {
  const touchStartX = useRef<number | null>(null);
  const atual = images[activeIdx];

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }
  function onTouchEnd(e: React.TouchEvent) {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX === null) return;
    const endX = e.changedTouches[0]?.clientX ?? startX;
    const delta = endX - startX;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) onNext();
    else onPrev();
  }

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "rgba(9,34,56,0.94)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Contador no topo */}
      <span
        aria-live="polite"
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.92)",
          fontFamily: "var(--font-inter)",
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "0.04em",
        }}
      >
        {activeIdx + 1} / {images.length}
      </span>

      {/* Botão fechar */}
      <button
        type="button"
        onClick={onClose}
        aria-label={`Fechar galeria de ${passeioNome}`}
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          background: "rgba(255,255,255,0.10)",
          color: "#fff",
          border: "none",
          borderRadius: "999px",
          width: "44px",
          height: "44px",
          fontSize: "22px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        ✕
      </button>

      {/* Setas laterais */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={onPrev}
            aria-label="Foto anterior"
            style={lightboxNavBtnStyle("left")}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Próxima foto"
            style={lightboxNavBtnStyle("right")}
          >
            ›
          </button>
        </>
      )}

      {/* Imagem central */}
      <figure
        style={{
          position: "relative",
          width: "min(92vw, 1200px)",
          height: "min(80vh, 800px)",
          margin: 0,
        }}
      >
        <Image
          src={atual.src}
          alt={atual.alt}
          fill
          sizes="100vw"
          style={{ objectFit: "contain" }}
        />
        {atual.caption && (
          <figcaption
            style={{
              position: "absolute",
              bottom: "-36px",
              left: 0,
              right: 0,
              color: "rgba(255,255,255,0.85)",
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              textAlign: "center",
            }}
          >
            {atual.caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Estilos auxiliares
// ---------------------------------------------------------------------------

function mainNavBtnStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [side]: "10px",
    background: "rgba(255,255,255,0.92)",
    color: "var(--cor-navy)",
    border: "none",
    borderRadius: "999px",
    width: "40px",
    height: "40px",
    fontSize: "24px",
    lineHeight: 1,
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(9,34,56,0.18)",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-inter)",
    fontWeight: 600,
  };
}

function lightboxNavBtnStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [side]: "16px",
    background: "rgba(255,255,255,0.10)",
    color: "#fff",
    border: "none",
    borderRadius: "999px",
    width: "48px",
    height: "48px",
    fontSize: "28px",
    lineHeight: 1,
    cursor: "pointer",
    zIndex: 2,
  };
}
