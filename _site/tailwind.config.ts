import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Paleta oficial (aprovada 2026-05-10) ─────────────────────────
        primary:          '#107997',   // ocean — cor principal: links, CTAs, headings
        'primary-light':  '#128AAD',   // ocean claro — hover states, gradientes
        secondary:        '#092238',   // navy profundo — footer, header fundo, texto escuro
        deep:             '#163149',   // navy médio — textos de destaque, títulos em fundo claro
        areia:            '#C5B7A3',   // areia — bordas, fundos suaves, separadores
        acento:           '#D97706',   // laranja-falésia — CTAs de conversão, badges, destaques
        'acento-suave':   '#FBBF24',   // amarelo-sol — estrelas, ícones, detalhes

        // ── Texto ─────────────────────────────────────────────────────────
        'texto-escuro':   '#0D1F2D',   // quase-preto levemente azulado
        'texto-medio':    '#374151',   // cinza-azulado médio
        'texto-claro':    '#6B7280',   // cinza claro para meta e legendas

        // ── Fundos ────────────────────────────────────────────────────────
        fundo:            '#F7F8F7',   // bone — fundo de página
        'fundo-puro':     '#FFFFFF',   // branco puro — cards, modais
        borda:            '#DDD5C8',   // borda suave, harmoniza com areia

        // ── Feedback ──────────────────────────────────────────────────────
        sucesso:          '#10B981',
        erro:             '#DC2626',

        // ── Aliases de compatibilidade ────────────────────────────────────
        accent:       '#128AAD',
        dark:         '#163149',
        surface:      '#FFFFFF',
        whatsapp:     '#25D366',
        muted:        '#6B7280',
        'bg-soft':    '#F7F8F7',
        'bg-warm':    '#F7F8F7',
        text:         '#0D1F2D',
        body:         '#0D1F2D',
        light:        '#EEF2F5',
      },
      fontFamily: {
        sans:  ['var(--font-inter)',     'system-ui', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'Georgia',   'serif'],
        mono:  ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Escala canônica — mobile-first
        hero:      ['clamp(38px, 6.5vw, 68px)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        h2:        ['clamp(28px, 3.5vw, 44px)', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        h3:        ['clamp(22px, 2vw, 30px)',   { lineHeight: '1.2',  letterSpacing: '-0.015em' }],
        h4:        ['clamp(18px, 1.5vw, 22px)', { lineHeight: '1.3'  }],
        kicker:    ['12px',  { lineHeight: '1.4', letterSpacing: '0.12em', fontWeight: '600' }],
        body:      ['17px',  { lineHeight: '1.75' }],
        'body-lg': ['clamp(17px, 1.4vw, 20px)', { lineHeight: '1.65' }],
        sm:        ['14px',  { lineHeight: '1.55' }],
        xs:        ['12px',  { lineHeight: '1.5'  }],
      },
      boxShadow: {
        // RGB de #107997 = 16, 121, 151
        'card':       '0 2px 16px rgba(16, 121, 151, 0.07)',
        'card-hover': '0 8px 32px rgba(16, 121, 151, 0.16)',
        'cta':        '0 4px 20px rgba(217, 119, 6, 0.40)',
        'cta-ocean':  '0 4px 20px rgba(16, 121, 151, 0.30)',
        'cta-wa':     '0 2px 12px rgba(37, 211, 102, 0.30)',
        // legado
        'cta-orange':  '0 6px 36px rgba(217, 119, 6, 0.38)',
        'cta-blue':    '0 4px 20px rgba(16, 121, 151, 0.30)',
        'card-lg':     '0 16px 48px rgba(16, 121, 151, 0.18)',
      },
      maxWidth: {
        container: '1200px',
        prose:     '65ch',
        cta:       '680px',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        instant: '100ms',
        fast:    '180ms',
        base:    '280ms',
        slow:    '550ms',
      },
      borderRadius: {
        card:  '16px',
        img:   '20px',
        badge: '999px',
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-bottom))',
      },
    },
  },
  plugins: [],
}
export default config
