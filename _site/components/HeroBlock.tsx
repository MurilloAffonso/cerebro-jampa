/**
 * HeroBlock — Hero reutilizável para páginas de passeio/categoria
 * Usado em: app/passeios/[categoria]/[slug]/page.tsx
 */

import Image from "next/image";
import Link from "next/link";

interface HeroBlockProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  kicker?: string;
  cta?: {
    text: string;
    href: string;
    variant?: "primary" | "outline";
  };
  isH1?: boolean;
  height?: "md" | "lg" | "xl";
  fotoId?: string;
}

const HEIGHT_MAP = {
  md: "h-[420px] md:h-[520px]",
  lg: "h-[520px] md:h-[640px]",
  xl: "h-[600px] md:h-[760px]",
};

export function HeroBlock({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  kicker,
  cta,
  isH1 = true,
  height = "lg",
  fotoId,
}: HeroBlockProps) {
  const Heading = isH1 ? "h1" : "h2";

  return (
    <section
      className={`relative w-full overflow-hidden ${HEIGHT_MAP[height]}`}
      style={{ background: "var(--cor-navy)" }}
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
        /* Placeholder com gradiente quando não há imagem */
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--cor-navy) 0%, var(--cor-primaria) 100%)",
          }}
          {...(fotoId ? { "data-foto-id": fotoId } : {})}
        />
      )}

      {/* Overlay — gradiente navy para legibilidade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(9,34,56,0.82) 0%, rgba(9,34,56,0.45) 55%, rgba(9,34,56,0.18) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Conteúdo */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 md:pb-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          {kicker && (
            <p
              className="animate-fade-up"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--cor-acento-suave)",
                marginBottom: "14px",
              }}
            >
              {kicker}
            </p>
          )}

          <Heading
            className="animate-fade-up delay-100 font-serif text-white"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: subtitle ? "16px" : "0",
              textShadow: "0 2px 24px rgba(9,34,56,0.5)",
            }}
          >
            {title}
          </Heading>

          {subtitle && (
            <p
              className="animate-fade-up delay-200"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(15px, 1.5vw, 18px)",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.82)",
                maxWidth: "600px",
                margin: "0 auto",
                marginBottom: cta ? "28px" : "0",
              }}
            >
              {subtitle}
            </p>
          )}

          {cta && (
            <div className="animate-fade-up delay-300 mt-7">
              <Link
                href={cta.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background:
                    cta.variant === "outline"
                      ? "transparent"
                      : "var(--cor-acento)",
                  color: "#fff",
                  border:
                    cta.variant === "outline"
                      ? "1.5px solid rgba(255,255,255,0.75)"
                      : "none",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 600,
                  fontSize: "16px",
                  padding: "16px 28px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  boxShadow:
                    cta.variant === "outline"
                      ? "none"
                      : "var(--sombra-cta)",
                  transition:
                    "transform 280ms cubic-bezier(0.22,1,0.36,1), box-shadow 280ms ease",
                }}
              >
                {cta.text}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
