'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { empresa } from '@/data/empresa'

const WA_BASE = empresa.contato.whatsappLink

interface HomeVideoHeroProps {
  whatsappUrl: string
}

export function HomeVideoHero({ whatsappUrl }: HomeVideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const t   = useTranslations('Hero')
  const tWa = useTranslations('Whatsapp')

  // Workaround React 18 hydration — garante muted via DOM
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = true
  }, [])

  const secondaryHref = `${WA_BASE}?text=${tWa('mensagemRoteiro')}`
  const localizacao = t('localizacao')

  return (
    <section
      id="hero-section"
      aria-label="Vem Passear em Jampa — hero principal"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'min(100svh, 620px)',
        background: '#092238',
        marginTop: 'calc(-1 * var(--header-h))',
      }}
    >
      {/* ── Vídeo de fundo ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/home/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
        aria-hidden="true"
      >
        <source src="/videos/home/hero-jampa.webm" type="video/webm" />
        <source src="/videos/home/hero-jampa.mp4"  type="video/mp4"  />
      </video>

      {/* ── Overlay gradiente ── */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(9,34,56,0.15) 0%, rgba(9,34,56,0.35) 50%, rgba(9,34,56,0.85) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── MOBILE: texto posicionado no rodapé do hero ── */}
      <div
        className="md:hidden absolute"
        style={{ left: 18, right: 18, bottom: 28, color: '#fff' }}
      >
        <Kicker label={localizacao} />
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 38, fontWeight: 600, lineHeight: 1.05,
          margin: '12px 0 8px', letterSpacing: '-0.02em',
        }}>
          {t('titulo1')}<br />{t('titulo2')} {t('titulo3Em')}
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 14.5, lineHeight: 1.5, color: 'rgba(255,255,255,0.86)',
          margin: '0 0 18px', maxWidth: 280,
        }}>
          {t('subtituloMobile')}
        </p>

        {/* CTA WhatsApp — full width */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('ctaPrimario')}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 9, width: '100%',
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15.5,
            color: '#fff', background: '#107997', border: 'none',
            borderRadius: 999, padding: '14px 20px',
            textDecoration: 'none', minHeight: 50,
            boxShadow: '0 8px 22px -10px rgba(16,121,151,0.6)',
          }}
        >
          <IcoWA size={18} /> {t('ctaPrimario')}
        </a>

        {/* Stars */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6, marginTop: 12,
          fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'rgba(255,255,255,0.78)',
        }}>
          <Stars /> {empresa.rating.valor} · {empresa.rating.totalAvaliacoes} {t('ratingText')}
        </div>
      </div>

      {/* ── DESKTOP: texto à esquerda, centrado verticalmente ── */}
      <div
        className="hidden md:flex absolute flex-col justify-center"
        style={{
          top: 0, bottom: 0,
          left: 56, right: '42%',
          color: '#fff',
          paddingTop: 'var(--header-h)',
        }}
      >
        <Kicker label={localizacao} />
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(48px, 5.8vw, 76px)',
          fontWeight: 600, lineHeight: 0.98,
          letterSpacing: '-0.025em',
          margin: '20px 0 18px',
        }}>
          {t('titulo1')}<br />
          {t('titulo2')}{' '}
          <em style={{ fontStyle: 'italic', color: '#9FE3D9', fontWeight: 500 }}>{t('titulo3Em')}</em>
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 17, lineHeight: 1.55, color: 'rgba(255,255,255,0.86)',
          maxWidth: 460, marginBottom: 28,
        }}>
          {t('subtituloDesktop')}
        </p>

        {/* CTAs desktop */}
        <div style={{ display: 'flex', gap: 12 }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16,
              color: '#fff', background: '#107997',
              border: 'none', borderRadius: 999, padding: '14px 24px',
              textDecoration: 'none', minHeight: 52,
              boxShadow: '0 8px 22px -10px rgba(16,121,151,0.6)',
              transition: 'background 180ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#0E8FA8')}
            onMouseLeave={e => (e.currentTarget.style.background = '#107997')}
          >
            <IcoWA size={18} /> {t('ctaPrimario')}
          </a>

          <a
            href={secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
              background: 'rgba(255,255,255,0.12)', color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.4)',
              borderRadius: 999, padding: '13px 22px',
              backdropFilter: 'blur(6px)', textDecoration: 'none', minHeight: 52,
              transition: 'background 180ms, border-color 180ms',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.22)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
            }}
          >
            {t('ctaSecundario')}
          </a>
        </div>

        {/* Stats desktop */}
        <div style={{
          display: 'flex', gap: 24, marginTop: 38,
          fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.82)',
        }}>
          <StatItem value={String(empresa.rating.valor)} label={t('statNota')} />
          <div style={{ width: 1, background: 'rgba(255,255,255,0.2)' }} />
          <StatItem value={`${empresa.rating.totalAvaliacoes}`} label={t('statAvaliacoes')} />
          <div style={{ width: 1, background: 'rgba(255,255,255,0.2)' }} />
          <StatItem value={t('statCadastur')} label={t('statAtivo')} />
        </div>
      </div>

      {/* Scroll hint mobile */}
      <div
        className="md:hidden absolute bottom-3 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <svg className="animate-bounce-gentle" width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ color: 'rgba(255,255,255,0.3)' }}>
          <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}

/* ── Sub-componentes ── */

function Kicker({ label }: { label: string }) {
  return (
    <div style={{
      fontFamily: 'var(--font-body)',
      fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.8)',
      display: 'inline-flex', alignItems: 'center', gap: 6,
    }}>
      <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(255,255,255,0.7)' }} />
      {label}
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 30, fontWeight: 600, color: '#fff', lineHeight: 1 }}>
        {value}
      </div>
      <div style={{ marginTop: 3 }}>{label}</div>
    </div>
  );
}

function Stars() {
  return (
    <span style={{ display: 'inline-flex', gap: 1, color: '#F2B035', fontSize: 12 }}>
      ★★★★★
    </span>
  );
}

function IcoWA({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path fill="#fff" d="M17.5 14.4c-.3-.1-1.8-.9-2-.9-.2-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.9-.4-1.7-.9-2.4-1.6-.7-.7-1.1-1.5-1.5-2.3-.2-.3-.1-.4 0-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-2c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.2.3-1 .9-1 2.3 0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.1 1.8.7 2.5.7 3.4.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.1-.2-.4-.3z"/>
      <path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3 1.3 4.7 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3c-.9-1.3-1.3-2.9-1.3-4.4C4.5 7.5 8 4 12 4s7.5 3.5 7.5 8-3.5 8-7.5 8z"/>
    </svg>
  );
}
