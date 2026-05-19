"use client";

import { useTranslations } from "next-intl";
import { trackWhatsAppClick } from "@/lib/tracking";

interface CTAFinalProps {
  whatsappUrl: string;
  titulo?: string;
  subtitulo?: string;
  textoBotao?: string;
  variante?: "laranja" | "azul";
  label?: string;
  microcopy?: string;
}

export function CTAFinal({
  whatsappUrl,
  titulo,
  subtitulo,
  textoBotao,
  // variante: prop legada, atualmente sem efeito (todas usam --cor-primaria)
  variante: _variante = "azul",
  label,
  microcopy,
}: CTAFinalProps) {
  const tHome = useTranslations("CTAHome");
  const tWa = useTranslations("Whatsapp");
  const tituloFinal     = titulo     ?? tHome("titulo");
  const subtituloFinal  = subtitulo  ?? tHome("subtitulo");
  const textoBotaoFinal = textoBotao ?? tWa("falarMurillo");
  const microcopyFinal  = microcopy  ?? tHome("microcopy");
  return (
    <section
      id="cta-final"
      className="relative overflow-hidden"
      style={{ background: 'var(--cor-primaria)' }}
    >
      {/* Blob decorativo */}
      <div
        className="absolute top-[-30%] right-[-10%] w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'rgba(197, 183, 163, 0.12)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />
      {/* Segundo blob */}
      <div
        className="absolute bottom-[-20%] left-[-5%] w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: 'rgba(217, 119, 6, 0.10)',
          filter: 'blur(50px)',
        }}
        aria-hidden="true"
      />

      <div className="relative container-safe py-20 md:py-28 text-center">
        {label && (
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-inter)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--cor-acento)',
              marginBottom: '20px',
            }}
          >
            {label}
          </span>
        )}

        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#fff',
            maxWidth: '620px',
            margin: '0 auto 16px',
          }}
        >
          {tituloFinal}
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'clamp(16px, 1.5vw, 18px)',
            lineHeight: 1.65,
            color: 'rgba(197, 183, 163, 0.88)',
            maxWidth: '520px',
            margin: '0 auto 40px',
          }}
        >
          {subtituloFinal}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={textoBotaoFinal}
          onClick={() => trackWhatsAppClick("cta-final")}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            backgroundColor: 'var(--cor-acento)',
            color: '#fff',
            fontFamily: 'var(--font-inter)',
            fontWeight: 600,
            fontSize: '17px',
            letterSpacing: '0.01em',
            padding: '18px 36px',
            borderRadius: '8px',
            minHeight: '56px',
            boxShadow: 'var(--sombra-cta)',
            textDecoration: 'none',
            transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          className="hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(217,119,6,0.55)]"
        >
          <IconWhatsApp />
          {textoBotaoFinal}
        </a>

        {microcopyFinal && (
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              marginTop: '16px',
            }}
          >
            {microcopyFinal}
          </p>
        )}
      </div>
    </section>
  );
}

function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
