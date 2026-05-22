'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { empresa } from '@/data/empresa'
import { trackWhatsAppClick } from '@/lib/tracking'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

interface HomeVideoHeroProps {
  whatsappUrl: string
}

export function HomeVideoHero({ whatsappUrl }: HomeVideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const t = useTranslations('Hero')

  // Workaround React 18 hydration: garante muted via DOM.
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = true
  }, [])

  const secondaryHref = buildWhatsAppUrl('roteiro')
  const localizacao = t('localizacao')

  return (
    <section
      id="hero-section"
      aria-label="Vem Passear em Jampa - hero principal"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'min(100svh, 620px)',
        background: '#092238',
        marginTop: 'calc(-1 * var(--header-h))',
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/videos/home/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
        aria-hidden="true"
      >
        <source src="/videos/home/hero-jampa.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(9,34,56,0.15) 0%, rgba(9,34,56,0.35) 50%, rgba(9,34,56,0.85) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="home-hero-copy">
        <Kicker label={localizacao} />

        <h1 className="home-hero-title">
          {t('titulo1')}<br />
          {t('titulo2')}{' '}
          <em>{t('titulo3Em')}</em>
        </h1>

        <p className="home-hero-subtitle">
          <span className="home-hero-subtitle-mobile">{t('subtituloMobile')}</span>
          <span className="home-hero-subtitle-desktop">{t('subtituloDesktop')}</span>
        </p>

        <div className="home-hero-actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('ctaPrimario')}
            className="home-hero-primary-cta"
            onClick={() => trackWhatsAppClick('home-hero-primary')}
            onMouseEnter={e => (e.currentTarget.style.background = '#0E8FA8')}
            onMouseLeave={e => (e.currentTarget.style.background = '#107997')}
          >
            <IcoWA size={18} /> {t('ctaPrimario')}
          </a>

          <a
            href={secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="home-hero-secondary-cta"
            onClick={() => trackWhatsAppClick('home-hero-roteiro')}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.22)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
            }}
          >
            {t('ctaSecundario')}
          </a>
        </div>

        <div className="home-hero-mobile-rating">
          <Stars /> {empresa.rating.valor} · {empresa.rating.totalAvaliacoes} {t('ratingText')}
        </div>

        <div className="home-hero-stats">
          <StatItem value={String(empresa.rating.valor)} label={t('statNota')} />
          <div style={{ width: 1, background: 'rgba(255,255,255,0.2)' }} />
          <StatItem value={`${empresa.rating.totalAvaliacoes}`} label={t('statAvaliacoes')} />
          <div style={{ width: 1, background: 'rgba(255,255,255,0.2)' }} />
          <StatItem value={t('statCadastur')} label={t('statAtivo')} />
        </div>
      </div>

      <style>{`
        .home-hero-copy {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 28px;
          color: #fff;
        }

        .home-hero-title {
          font-family: var(--font-heading);
          font-size: 38px;
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: 0;
          margin: 12px 0 8px;
        }

        .home-hero-title em {
          color: inherit;
          font-style: normal;
          font-weight: 600;
        }

        .home-hero-subtitle {
          font-family: var(--font-body);
          font-size: 14.5px;
          line-height: 1.5;
          color: rgba(255,255,255,0.86);
          margin: 0 0 18px;
          max-width: 280px;
        }

        .home-hero-subtitle-desktop,
        .home-hero-secondary-cta,
        .home-hero-stats {
          display: none;
        }

        .home-hero-actions {
          display: flex;
          gap: 12px;
        }

        .home-hero-primary-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: 100%;
          min-height: 50px;
          padding: 14px 20px;
          border: none;
          border-radius: 999px;
          background: #107997;
          color: #fff;
          box-shadow: 0 8px 22px -10px rgba(16,121,151,0.6);
          font-family: var(--font-body);
          font-size: 15.5px;
          font-weight: 700;
          text-decoration: none;
          transition: background 180ms;
        }

        .home-hero-mobile-rating {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 12px;
          color: rgba(255,255,255,0.78);
          font-family: var(--font-body);
          font-size: 12.5px;
        }

        @media (min-width: 768px) {
          .home-hero-copy {
            top: 0;
            bottom: 0;
            left: 56px;
            right: 42%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-top: var(--header-h);
          }

          .home-hero-title {
            font-size: clamp(48px, 5.8vw, 76px);
            line-height: 0.98;
            margin: 20px 0 18px;
          }

          .home-hero-title em {
            color: #9FE3D9;
            font-style: italic;
            font-weight: 500;
          }

          .home-hero-subtitle {
            max-width: 460px;
            margin-bottom: 28px;
            font-size: 17px;
            line-height: 1.55;
          }

          .home-hero-subtitle-mobile,
          .home-hero-mobile-rating {
            display: none;
          }

          .home-hero-subtitle-desktop {
            display: inline;
          }

          .home-hero-primary-cta {
            display: inline-flex;
            width: auto;
            min-height: 52px;
            padding: 14px 24px;
            font-size: 16px;
          }

          .home-hero-secondary-cta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            min-height: 52px;
            padding: 13px 22px;
            border: 1.5px solid rgba(255,255,255,0.4);
            border-radius: 999px;
            background: rgba(255,255,255,0.12);
            color: #fff;
            backdrop-filter: blur(6px);
            font-family: var(--font-body);
            font-size: 15px;
            font-weight: 600;
            text-decoration: none;
            transition: background 180ms, border-color 180ms;
          }

          .home-hero-stats {
            display: flex;
            gap: 24px;
            margin-top: 38px;
            color: rgba(255,255,255,0.82);
            font-family: var(--font-body);
            font-size: 13px;
          }
        }
      `}</style>

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

function Kicker({ label }: { label: string }) {
  return (
    <div style={{
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.8)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
    }}>
      <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(255,255,255,0.7)' }} />
      {label}
    </div>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 30, fontWeight: 600, color: '#fff', lineHeight: 1 }}>
        {value}
      </div>
      <div style={{ marginTop: 3 }}>{label}</div>
    </div>
  )
}

function Stars() {
  return (
    <span style={{ display: 'inline-flex', gap: 1, color: '#F2B035', fontSize: 12 }}>
      ★★★★★
    </span>
  )
}

function IcoWA({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path fill="#fff" d="M17.5 14.4c-.3-.1-1.8-.9-2-.9-.2-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.9-.4-1.7-.9-2.4-1.6-.7-.7-1.1-1.5-1.5-2.3-.2-.3-.1-.4 0-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-2c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.2.3-1 .9-1 2.3 0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.1 1.8.7 2.5.7 3.4.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.1-.2-.4-.3z"/>
      <path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3 1.3 4.7 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3c-.9-1.3-1.3-2.9-1.3-4.4C4.5 7.5 8 4 12 4s7.5 3.5 7.5 8-3.5 8-7.5 8z"/>
    </svg>
  )
}
