/**
 * GoogleReviewsBlock — Provas reais do Google Maps em carrossel rolante
 *
 * Marquee horizontal infinito (igual o PartnersMarquee, mas com cards de review).
 * Animação CSS pura, pausa no hover, fallback grid em prefers-reduced-motion.
 * Dados em data/google-reviews.ts (extraídos do Maps real, nunca editar manualmente).
 */

import { googleReviews, type GoogleReview } from "@/data/google-reviews";
import { empresa } from "@/data/empresa";

export function GoogleReviewsBlock() {
  // Duplicamos a lista pra loop sem corte visível
  const loopList = [...googleReviews, ...googleReviews];

  return (
    <section
      style={{ background: 'var(--cor-fundo)', padding: '80px 0', overflow: 'hidden' }}
      aria-label="Avaliações reais do Google"
    >
      <div className="container-safe" style={{ marginBottom: '40px' }}>
        {/* ── Cabeçalho ── */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-kicker block" style={{ marginBottom: '8px' }}>
            Provas reais
          </span>
          <h2
            className="font-serif"
            style={{
              color: 'var(--cor-primaria)',
              fontSize: 'clamp(28px, 4vw, 40px)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '0 auto 14px',
              maxWidth: '720px',
            }}
          >
            O que dizem no Google
          </h2>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 18px',
              borderRadius: '999px',
              background: 'var(--cor-fundo-puro)',
              border: '1px solid var(--cor-borda)',
              boxShadow: 'var(--sombra-card)',
            }}
          >
            <GoogleLogo />
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '14px',
                color: 'var(--cor-texto-escuro)',
              }}
            >
              <span style={{ color: '#FBBC05' }}>★★★★★</span> {empresa.rating.valor} · {empresa.rating.totalAvaliacoes} avaliações
            </span>
          </div>
        </div>
      </div>

      {/* ── Faixa rolante ── */}
      <div
        className="reviews-marquee-track"
        style={{
          display: 'flex',
          gap: '20px',
          width: 'max-content',
          animation: `reviews-scroll ${googleReviews.length * 7}s linear infinite`,
          padding: '0 24px',
        }}
      >
        {loopList.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} review={r} duplicate={i >= googleReviews.length} />
        ))}
      </div>

      {/* ── CTA ler todas ── */}
      <div className="container-safe" style={{ textAlign: 'center', marginTop: '40px' }}>
        <a
          href={empresa.rede.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            fontWeight: 600,
            color: 'var(--cor-primaria)',
            borderBottom: '2px solid rgba(16,121,151,0.25)',
            paddingBottom: '2px',
            textDecoration: 'none',
          }}
        >
          Ler as {empresa.rating.totalAvaliacoes} avaliações no Google →
        </a>
      </div>

      <style>{`
        @keyframes reviews-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .reviews-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .reviews-marquee-track {
            animation: none !important;
            flex-wrap: wrap;
            justify-content: center;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Sub-componente: card de review ──────────────────────────── */

function ReviewCard({ review, duplicate }: { review: GoogleReview; duplicate: boolean }) {
  return (
    <article
      aria-hidden={duplicate}
      style={{
        flexShrink: 0,
        width: '360px',
        background: 'var(--cor-fundo-puro)',
        border: '1px solid var(--cor-borda)',
        borderRadius: '16px',
        padding: '22px',
        boxShadow: 'var(--sombra-card)',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
    >
      {/* Header: avatar + nome + tempo */}
      <header style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={review.avatarUrl}
          alt={`Foto de ${review.name}`}
          width={44}
          height={44}
          referrerPolicy="no-referrer"
          loading="lazy"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            objectFit: 'cover',
            flexShrink: 0,
            background: 'var(--cor-fundo)',
          }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              fontSize: '15px',
              color: 'var(--cor-texto-escuro)',
              margin: 0,
              lineHeight: 1.3,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {review.name}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '12px',
              color: 'var(--cor-texto-claro)',
              margin: '2px 0 0',
              lineHeight: 1.3,
            }}
          >
            <span style={{ color: '#FBBC05', letterSpacing: '1px' }}>
              {'★'.repeat(review.stars)}
            </span>{' '}
            · {review.tempo}
          </p>
        </div>
      </header>

      {/* Texto */}
      <p
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '14px',
          lineHeight: 1.6,
          color: 'var(--cor-texto-medio)',
          margin: 0,
          whiteSpace: 'pre-line',
          display: '-webkit-box',
          WebkitLineClamp: 6,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          minHeight: '130px',
        }}
      >
        {review.text}
      </p>

      {/* Grid de fotos */}
      {review.photoUrls.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${Math.min(review.photoUrls.length, 3)}, 1fr)`,
            gap: '6px',
            marginTop: '4px',
          }}
        >
          {review.photoUrls.slice(0, 3).map((url, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={url}
              alt={`Foto ${i + 1} da avaliação de ${review.name}`}
              referrerPolicy="no-referrer"
              loading="lazy"
              style={{
                width: '100%',
                height: '90px',
                objectFit: 'cover',
                borderRadius: '10px',
                background: 'var(--cor-fundo)',
              }}
            />
          ))}
        </div>
      )}
    </article>
  );
}

/* ── Sub-componente: logo Google (cores oficiais) ────────────── */

function GoogleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}
