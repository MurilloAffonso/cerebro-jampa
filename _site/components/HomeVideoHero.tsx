'use client'

import { useEffect, useRef, useState } from 'react'
import { empresa } from '@/data/empresa'

interface HomeVideoHeroProps {
  whatsappUrl: string
}

export function HomeVideoHero({ whatsappUrl }: HomeVideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showVideo, setShowVideo] = useState(true)

  useEffect(() => {
    const nav = navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string }
    }
    const conn = nav.connection
    if (conn?.saveData || conn?.effectiveType === '2g' || conn?.effectiveType === 'slow-2g') {
      setShowVideo(false)
      return
    }
    if (videoRef.current) videoRef.current.muted = true
  }, [])

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden flex flex-col"
      style={{
        minHeight: 'min(100svh, 800px)',
        background: 'linear-gradient(135deg, #092238 0%, #163149 50%, #092238 100%)',
      }}
    >
      {/* Blob laranja — sempre presente */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%', right: '-5%',
          width: '55%', paddingBottom: '55%',
          background: 'radial-gradient(circle, rgba(197,183,163,0.30) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />
      {/* Blob azul — sempre presente */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '5%', left: '-8%',
          width: '45%', paddingBottom: '45%',
          background: 'radial-gradient(circle, rgba(16,121,151,0.5) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
        }}
        aria-hidden="true"
      />

      {/* Vídeo (Estado C) — respeita saveData e prefers-reduced-motion */}
      {showVideo && (
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
          <source src="/videos/home/hero-jampa.mp4" type="video/mp4" />
        </video>
      )}

      {/* Overlay — legibilidade do texto */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.65) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Linha decorativa de onda (Estado A) */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ opacity: 0.15 }}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z" fill="white" />
      </svg>

      {/* Conteúdo */}
      <div
        className="relative container-safe flex flex-col items-start justify-center text-white py-16 flex-1"
        style={{ minHeight: 'min(100svh, 800px)' }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-[6px] text-xs font-semibold uppercase tracking-wider mb-6"
          style={{
            background: 'rgba(16,121,151,0.2)',
            border: '1px solid rgba(16,121,151,0.4)',
            color: '#107997',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0" aria-hidden="true" />
          João Pessoa, Paraíba
        </div>

        {/* H1 */}
        <h1
          className="font-serif font-bold text-white mb-6 max-w-2xl"
          style={{ fontSize: 'clamp(44px, 7.5vw, 84px)', lineHeight: 1.08, letterSpacing: '-2px' }}
        >
          O Que Fazer em<br />
          <span className="text-primary">João Pessoa?</span>
        </h1>

        {/* Subtítulo */}
        <p
          className="text-white/80 max-w-lg mb-10 leading-relaxed"
          style={{ fontSize: 'clamp(16px, 1.8vw, 19px)' }}
        >
          Praias paradisíacas, piscinas de corais, catamarã e o pôr do sol mais
          emocionante do Brasil. Murillo te orienta do jeito certo.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-accent text-white font-extrabold px-7 py-[17px] rounded-full min-h-[56px] transition-all hover:scale-[1.02] hover:-translate-y-[2px] w-full sm:w-auto"
            style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', boxShadow: '0 4px 32px rgba(16,121,151,0.45)', letterSpacing: '-0.2px' }}
            aria-label="Montar meu roteiro no WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.118 1.522 5.848L.057 23.292a.5.5 0 0 0 .651.651l5.444-1.465A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.535-5.209-1.462l-.374-.224-3.876 1.044 1.044-3.876-.224-.374A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
            Montar Meu Roteiro no WhatsApp
          </a>
          <a
            href="/passeios"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-7 py-[17px] rounded-full min-h-[56px] transition-all w-full sm:w-auto"
            style={{ fontSize: 'clamp(14px, 1.4vw, 16px)' }}
          >
            Ver passeios mais vendidos →
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 mt-14 pt-7 border-t border-white/10 w-full max-w-2xl">
          <div>
            <p className="font-serif font-bold text-primary text-lg mb-0.5">
              ★ {empresa.rating.valor}/5
            </p>
            <p className="text-white/50 text-xs">{empresa.rating.totalAvaliacoes} avaliações Google</p>
          </div>
          <div>
            <p className="font-serif font-bold text-white text-lg mb-0.5">Cadastur</p>
            <p className="text-white/50 text-xs">{empresa.cadastur} — ativo</p>
          </div>
          <div>
            <p className="font-serif font-bold text-white text-lg mb-0.5">WhatsApp</p>
            <p className="text-white/50 text-xs">Atendimento direto</p>
          </div>
        </div>
      </div>
    </section>
  )
}
