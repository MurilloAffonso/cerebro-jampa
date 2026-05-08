import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial v2 (canônica)
        primary: '#107997',      // Ocean — CTAs/acentos de ação (era laranja #FF6B35)
        secondary: '#092238',    // Navy — links/botão alternativo (era azul #004E89)
        accent: '#0E6B85',       // Ocean -10% — hover do primary
        dark: '#092238',         // Navy — heros, footer, texto escuro (era #1A1A2E)
        surface: '#FFFFFF',      // Cards, blockquotes, badges
        whatsapp: '#25D366',     // Exclusivo canal WhatsApp — único verde da marca
        muted: '#6B7280',        // Subtítulos, labels, secundários
        text: '#1F2937',         // Corpo em fundos claros
        body: '#1F2937',         // alias de text
        // Tokens nominais da paleta (uso explícito quando o semântico não cabe)
        navy: '#092238',         // Base principal
        deep: '#163149',         // Profundidade — meio de gradientes
        ocean: '#107997',        // Destaque/ação — alias de primary
        sand: '#C5B7A3',         // Calor sutil, bordas, divisores
        bone: '#F7F8F7',         // Fundos claros e respiro
        // Bone como bg-soft/bg-warm (compat com classes existentes)
        'bg-soft': '#F7F8F7',
        'bg-warm': '#F7F8F7',
        light: '#ECEFF1',        // Hover neutro do menu (cinza, não cor de marca)
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
        'cta-orange': '0 6px 36px rgba(16,121,151,0.45)',  // legado nominal — agora ocean
        'cta-blue':   '0 4px 20px rgba(9,34,56,0.3)',       // legado nominal — agora navy
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
