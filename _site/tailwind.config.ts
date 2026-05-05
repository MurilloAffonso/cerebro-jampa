import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',      // CTAs, badges, acento H1, checkmarks
        secondary: '#004E89',    // Links, botão alternativo, CTA azul
        accent: '#F77F00',       // Hover do primary — nunca cor principal
        dark: '#1A1A2E',         // Hero, footer, texto escuro
        surface: '#FFFFFF',      // Cards, blockquotes, badges
        whatsapp: '#25D366',     // Exclusivo canal WhatsApp
        muted: '#6B7280',        // Subtítulos, labels, secundários
        // Tokens DS v1.2 (canônicos)
        'bg-soft': '#FAFAF8',    // Fundo seções alternadas — quente
        text: '#1F2937',         // Corpo em fundos claros
        // Aliases legados — preservar compatibilidade com classes existentes
        'bg-warm': '#FAFAF8',    // alias de bg-soft
        body: '#1F2937',         // alias de text
        light: '#ECEFF1',        // legado
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
        mono: ['var(--font-dm-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // DS v1.2 — escalas canônicas
        hero:   ['clamp(44px, 7.5vw, 84px)', { lineHeight: '1.07', letterSpacing: '-2px' }],
        h2:     ['clamp(28px, 4vw, 46px)',   { lineHeight: '1.12', letterSpacing: '-1px' }],
        h3:     ['26px',                     { lineHeight: '1.2',  letterSpacing: '-0.3px' }],
        kicker: ['11px',                     { lineHeight: '1.4',  letterSpacing: '2.5px' }],
        body:   ['17px',                     { lineHeight: '1.65' }],
        sm:     ['14px',                     { lineHeight: '1.6' }],
      },
      boxShadow: {
        'cta-orange': '0 6px 36px rgba(255,107,53,0.45)',
        'cta-blue':   '0 4px 20px rgba(0,78,137,0.3)',
        'cta-wa':     '0 2px 12px rgba(37,211,102,0.3)',
        card:         '0 4px 24px rgba(0,0,0,0.12)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.22)',
      },
      maxWidth: {
        container: '1200px',
        prose: '700px',
        cta: '680px',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        instant: '100ms',
        fast: '200ms',
        base: '320ms',
        slow: '600ms',
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-bottom))',
      },
    },
  },
  plugins: [],
}
export default config
