/**
 * HeroBlock — Hero fotográfico para páginas de passeio/categoria.
 * Cloud Design: left-aligned, breadcrumb overlay, pill CTA teal.
 */

import Image from "next/image";
import { DESIGN_BADGE, type DesignBadgeKind } from "@/lib/badges";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroBlockProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  kicker?: string;
  badges?: DesignBadgeKind[];
  breadcrumbItems?: BreadcrumbItem[];
  cta?: {
    text: string;
    href: string;
  };
  isH1?: boolean;
  height?: "md" | "lg" | "xl";
  fotoId?: string;
}

const HEIGHT_MAP: Record<string, number> = {
  md: 460,
  lg: 560,
  xl: 640,
};

export function HeroBlock({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  kicker,
  badges,
  breadcrumbItems,
  cta,
  isH1 = true,
  height = "lg",
  fotoId,
}: HeroBlockProps) {
  const Heading = isH1 ? "h1" : "h2";

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "#092238",
        marginTop: "calc(-1 * var(--header-h))",
        minHeight: HEIGHT_MAP[height],
      }}
    >
      {/* Imagem de fundo */}
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority={isH1}
          sizes="100vw"
          {...(fotoId ? { "data-foto-id": fotoId } : {})}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #092238 0%, #107997 100%)",
          }}
          {...(fotoId ? { "data-foto-id": fotoId } : {})}
        />
      )}

      {/* Overlay gradiente — mais pesado embaixo para legibilidade */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(9,34,56,0.3) 0%, rgba(9,34,56,0.08) 30%, rgba(9,34,56,0.82) 75%, rgba(9,34,56,0.96) 100%)",
        }}
      />

      {/* ── Breadcrumb overlay — abaixo do header ── */}
      {breadcrumbItems && breadcrumbItems.length > 0 && (
        <nav
          aria-label="Breadcrumb"
          style={{
            position: "absolute",
            top: "calc(var(--header-h) + 14px)",
            left: 16,
            right: 16,
            zIndex: 2,
          }}
        >
          <ol style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "4px 6px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}>
            {breadcrumbItems.map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {i > 0 && (
                  <span aria-hidden="true" style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.45)",
                  }}>/</span>
                )}
                {item.href ? (
                  <a href={item.href} style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                  }}>
                    {item.label}
                  </a>
                ) : (
                  <span aria-current="page" style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.9)",
                  }}>
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* ── Badges — topo esquerdo (abaixo do breadcrumb se existir) ── */}
      {badges && badges.length > 0 && (
        <div style={{
          position: "absolute",
          top: breadcrumbItems && breadcrumbItems.length > 0
            ? "calc(var(--header-h) + 46px)"
            : 16,
          left: 16,
          display: "flex",
          gap: 6,
          flexWrap: "wrap",
          zIndex: 2,
        }}>
          {badges.map((k) => {
            const b = DESIGN_BADGE[k];
            return (
              <span key={k} style={{
                fontFamily: "var(--font-body)",
                display: "inline-flex", alignItems: "center", gap: 5,
                background: b.bg, color: "#fff",
                padding: "5px 10px", fontSize: 11, fontWeight: 700,
                borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.04em",
                lineHeight: 1, whiteSpace: "nowrap",
                boxShadow: "0 4px 14px -6px rgba(0,0,0,0.45)",
              }}>
                <span style={{ fontSize: 12, lineHeight: 1 }}>{b.icon}</span>
                {b.label}
              </span>
            );
          })}
        </div>
      )}

      {/* ── Conteúdo — left-aligned, bottom ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 18px 28px",
        }}
      >
        <div style={{ maxWidth: 600 }}>
          {kicker && (
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              marginBottom: 10,
            }}>
              {kicker}
            </p>
          )}

          <Heading style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(28px, 5.5vw, 52px)",
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "#fff",
            margin: 0,
            marginBottom: subtitle ? 12 : 0,
            textShadow: "0 2px 20px rgba(9,34,56,0.4)",
          }}>
            {title}
          </Heading>

          {subtitle && (
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14px, 1.4vw, 16px)",
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.82)",
              margin: 0,
              marginBottom: cta ? 20 : 0,
              maxWidth: 480,
            }}>
              {subtitle}
            </p>
          )}

          {cta && (
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                width: "100%",
                maxWidth: 380,
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: 15,
                color: "#fff",
                background: "#107997",
                border: "none",
                borderRadius: 999,
                padding: "14px 24px",
                textDecoration: "none",
                minHeight: 50,
                boxShadow: "0 8px 22px -10px rgba(16,121,151,0.65)",
                marginTop: subtitle ? 0 : 20,
              }}
            >
              {cta.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
