/**
 * HeroBlock — Hero fotográfico para páginas de passeio/categoria.
 * Cloud Design: left-aligned, breadcrumb overlay, pill CTA teal.
 */

import Image from "next/image";
import { type DesignBadgeKind } from "@/lib/badges";
import { HeroBadgePills } from "@/components/HeroBadgePills";

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
          <HeroBadgePills badges={badges} />
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
          padding: "0 clamp(16px, 4vw, 28px) clamp(24px, 5vw, 36px)",
        }}
      >
        <div style={{ maxWidth: 600, width: "100%" }}>
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
            fontSize: "clamp(30px, 6vw, 54px)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#fff",
            margin: 0,
            marginBottom: subtitle ? 14 : 0,
            textShadow: "0 2px 20px rgba(9,34,56,0.4)",
            overflowWrap: "break-word",
          }}>
            {title}
          </Heading>

          {subtitle && (
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 1.5vw, 17px)",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.88)",
              margin: 0,
              marginBottom: cta ? 22 : 0,
              maxWidth: 520,
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
                gap: 10,
                width: "100%",
                maxWidth: 380,
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: 16,
                color: "#fff",
                background: "#107997",
                border: "none",
                borderRadius: 999,
                padding: "16px 28px",
                textDecoration: "none",
                minHeight: 54,
                boxShadow: "0 12px 28px -8px rgba(16,121,151,0.75), 0 4px 10px -4px rgba(0,0,0,0.25)",
                marginTop: subtitle ? 0 : 22,
              }}
            >
              <IcoWA size={18} />
              {cta.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function IcoWA({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path fill="#fff" d="M17.5 14.4c-.3-.1-1.8-.9-2-.9-.2-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.9-.4-1.7-.9-2.4-1.6-.7-.7-1.1-1.5-1.5-2.3-.2-.3-.1-.4 0-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-2c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.2.3-1 .9-1 2.3 0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.1 1.8.7 2.5.7 3.4.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.1-.2-.4-.3z" />
      <path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3 1.3 4.7 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3c-.9-1.3-1.3-2.9-1.3-4.4C4.5 7.5 8 4 12 4s7.5 3.5 7.5 8-3.5 8-7.5 8z" />
    </svg>
  );
}
