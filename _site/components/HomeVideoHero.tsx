'use client'

import { useEffect, useRef } from 'react'
import { empresa } from '@/data/empresa'

interface HomeVideoHeroProps {
  whatsappUrl: string
}

export function HomeVideoHero({ whatsappUrl }: HomeVideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Garante muted=true via propriedade DOM — workaround React 18 hydration
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
    }
  }, [])

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden flex flex-col bg-dark"
      style={{ minHeight: 'min(100svh, 800px)' }}
    >
      {/* Vídeo em loop — oculto quando prefers-reduced-motion: reduce */}
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

      {/* Poster estático — exibido apenas quando prefers-reduced-motion: reduce */}
      <div
        className="absolute inset-0 bg-cover bg-center motion-safe:hidden"
        style={{ backgroundImage: "url('/videos/home/hero-poster.jpg')" }}
        aria-hidden="true"
      />

      {/* Overlay gradiente para legibilidade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.42) 50%, rgba(0,0,0,0.68) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Conteúdo */}
      <div
        className="relative container-safe flex flex-col items-center justify-center text-center text-white py-16 flex-1"
        style={{ minHeight: 'min(100svh, 800px)' }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-7">
          <span
            className="w-2 h-2 rounded-full bg-primary inline-block shrink-0"
            aria-hidden="true"
          />
          João Pessoa, Paraíba
        </div>

        {/* H1 */}
        <h1
          className="font-serif font-bold leading-[1.08] text-white mb-6 max-w-3xl"
          style={{ fontSize: 'clamp(36px, 6vw, 76px)', letterSpacing: '-1.5px' }}
        >
          Passeios em João Pessoa com{' '}
          <span className="text-primary">orientação local do Murillo</span>
        </h1>

        {/* Subtítulo */}
        <p
          className="text-white/80 max-w-2xl mb-8 leading-relaxed"
          style={{ fontSize: 'clamp(16px, 1.8vw, 19px)' }}
        >
          Piscinas naturais, litoral sul, catamarã, pôr do sol e roteiros
          personalizados com ajuda para escolher o melhor passeio de acordo
          com a maré.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-sm sm:max-w-none sm:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-white font-extrabold px-8 py-[18px] rounded-full min-h-[56px] transition-all hover:scale-[1.02] hover:-translate-y-[3px]"
            style={{
              fontSize: 'clamp(15px, 1.5vw, 17px)',
              boxShadow: '0 8px 32px rgba(255,107,53,0.35)',
            }}
            aria-label="Montar meu roteiro no WhatsApp"
          >
            💬 Montar meu roteiro no WhatsApp
          </a>

          <a
            href="/passeios"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-7 py-[18px] rounded-full min-h-[56px] transition-all"
            style={{ fontSize: 'clamp(14px, 1.4vw, 16px)' }}
          >
            Ver passeios mais vendidos →
          </a>
        </div>

        {/* Prova social */}
        <div className="mt-14 pt-7 border-t border-white/10 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-bold text-primary text-xl mb-0.5">
              ★ {empresa.rating.valor}/5
            </p>
            <p className="text-white/55 text-xs">
              {empresa.rating.totalAvaliacoes} avaliações Google
            </p>
          </div>
          <div>
            <p className="font-bold text-white text-xl mb-0.5">Cadastur</p>
            <p className="text-white/55 text-xs">{empresa.cadastur} · Ativo</p>
          </div>
          <div>
            <p className="font-bold text-white text-xl mb-0.5">WhatsApp</p>
            <p className="text-white/55 text-xs">Atendimento direto</p>
          </div>
        </div>
      </div>
    </section>
  )
}
