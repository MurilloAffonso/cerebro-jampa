'use client'

import { useEffect, useRef } from 'react'
import { empresa } from '@/data/empresa'

interface HomeVideoHeroProps {
  whatsappUrl: string
}

export function HomeVideoHero({ whatsappUrl }: HomeVideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Workaround React 18 hydration — garante muted via DOM
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
    }
  }, [])

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden flex flex-col"
      style={{ minHeight: 'min(100svh, 860px)', background: 'var(--cor-primaria)' }}
    >
      {/* ── Vídeo em loop ────────────────────────────────────── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/home/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
        data-foto-id="HOME-HERO-01"
        aria-hidden="true"
      >
        <source src="/videos/home/hero-jampa.webm" type="video/webm" />
        <source src="/videos/home/hero-jampa.mp4"  type="video/mp4"  />
      </video>

      {/* Poster estático (prefers-reduced-motion) */}
      <div
        className="absolute inset-0 bg-cover bg-center motion-safe:hidden"
        style={{ backgroundImage: "url('/videos/home/hero-poster.jpg')" }}
        aria-hidden="true"
      />

      {/* ── Overlay gradiente — legibilidade sem matar a foto ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(9,34,56,0.72) 0%, rgba(16,121,151,0.38) 60%, rgba(9,34,56,0.22) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Conteúdo ─────────────────────────────────────────── */}
      <div
        className="relative container-safe flex flex-col items-center justify-center text-center text-white py-20 flex-1"
        style={{ minHeight: 'min(100svh, 860px)' }}
      >

        {/* [2] Label geográfico */}
        <span
          className="animate-fade-up"
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#FBBF24',
            marginBottom: '24px',
            display: 'block',
          }}
        >
          João Pessoa · Paraíba · Desde 2022
        </span>

        {/* [3] Headline principal — Opção A */}
        <h1
          className="animate-fade-up delay-100 font-serif text-white max-w-3xl mx-auto"
          style={{
            fontSize: 'clamp(40px, 7vw, 68px)',
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
          }}
        >
          <span className="block">O mar daqui tem hora certa.</span>
          <span className="block" style={{ color: 'var(--cor-areia)' }}>A gente conhece ela.</span>
        </h1>

        {/* [4] Subheadline */}
        <p
          className="animate-fade-up delay-200"
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'clamp(16px, 1.8vw, 19px)',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'var(--cor-areia)',
            maxWidth: '600px',
            marginBottom: '32px',
          }}
        >
          Receptivo boutique em João Pessoa. Curadoria pessoal do Murillo,
          grupos de até 8 pessoas, roteiros que respeitam a maré e o seu
          ritmo. Nada de van lotada, bandeira no ar e correria.
        </p>

        {/* [5] Trust badges */}
        <div
          className="animate-fade-up delay-250 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-10"
          aria-label="Credenciais da Vem Passear em Jampa"
        >
          <TrustBadge
            icon={<IconCadastur />}
            href="https://cadastur.turismo.gov.br/hotsite/#!/public/inicio"
            label="Cadastur verificar"
          >
            Cadastur {empresa.cadastur} ativo
          </TrustBadge>

          <span className="hidden sm:block w-px h-5 bg-white/20" aria-hidden="true" />

          <TrustBadge
            icon={<IconStar />}
            href={empresa.rede.googleMaps}
            label="Ver avaliações no Google"
          >
            {empresa.rating.valor} em {empresa.rating.totalAvaliacoes} avaliações Google
          </TrustBadge>

          <span className="hidden sm:block w-px h-5 bg-white/20" aria-hidden="true" />

          <TrustBadge icon={<IconPerson />}>
            Atendimento direto com o dono
          </TrustBadge>
        </div>

        {/* [6] CTAs */}
        <div className="animate-fade-up delay-350 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-sm sm:max-w-none sm:w-auto">
          {/* Primário — laranja */}
          <div className="flex flex-col items-center gap-1.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com Murillo no WhatsApp"
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
                padding: '18px 32px',
                borderRadius: '8px',
                minHeight: '56px',
                boxShadow: 'var(--sombra-cta)',
                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 8px 28px rgba(217,119,6,0.55)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'var(--sombra-cta)'
              }}
            >
              <IconWhatsApp />
              Falar com o Murillo agora
            </a>
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              Resposta em até 5 minutos
            </span>
          </div>

          {/* Secundário — contorno branco */}
          <a
            href="/passeios"
            aria-label="Ver passeios mais procurados"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: 'transparent',
              color: '#fff',
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              fontSize: '17px',
              padding: '17px 31px',
              borderRadius: '8px',
              border: '1.5px solid rgba(255,255,255,0.8)',
              minHeight: '56px',
              transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.backgroundColor = '#fff'
              el.style.color = 'var(--cor-primaria)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.backgroundColor = 'transparent'
              el.style.color = '#fff'
            }}
          >
            Ver passeios mais procurados
          </a>
        </div>

        {/* [7] Bloco Murillo — canto inferior humanizador */}
        <div
          className="animate-fade-up delay-450 mt-14 flex items-center gap-3"
          aria-label="Sobre o Murillo, fundador"
        >
          {/* Foto circular do Murillo — TODO substituir por foto real (HOME-PRT-01) */}
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: '2px solid #fff',
              boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
              overflow: 'hidden',
              flexShrink: 0,
              background: 'var(--cor-primaria)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            data-foto-id="HOME-PRT-01"
            title="TODO: substituir por foto real do Murillo (HOME-PRT-01)"
          >
            <span
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 700,
                fontSize: '22px',
                color: '#fff',
              }}
            >
              M
            </span>
          </div>
          <div style={{ textAlign: 'left' }}>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '14px',
                color: '#fff',
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              — Murillo, fundador
            </p>
            <p
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontStyle: 'italic',
                fontSize: '16px',
                color: 'var(--cor-areia)',
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              &ldquo;Eu mesmo respondo no WhatsApp&rdquo;
            </p>
          </div>
        </div>

        {/* [8] Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          aria-hidden="true"
        >
          <span
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            Role para descobrir
          </span>
          <svg
            className="animate-bounce-gentle"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            <path
              d="M10 4v12M4 10l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

      </div>
    </section>
  )
}

/* ── Sub-componentes internos ─────────────────────────────── */

function TrustBadge({
  icon,
  children,
  href,
  label,
}: {
  icon: React.ReactNode
  children: React.ReactNode
  href?: string
  label?: string
}) {
  const content = (
    <span className="flex items-center gap-2">
      <span style={{ color: '#FBBF24', flexShrink: 0 }}>{icon}</span>
      <span
        style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 500,
          fontSize: '14px',
          color: 'rgba(255,255,255,0.9)',
        }}
      >
        {children}
      </span>
    </span>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="hover:opacity-80 transition-opacity"
        style={{ textDecoration: 'none' }}
      >
        {content}
      </a>
    )
  }
  return <span>{content}</span>
}

function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function IconCadastur() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

function IconStar() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function IconPerson() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
