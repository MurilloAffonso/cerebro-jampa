import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',      // Laranja Vem Passear (CTA)
        secondary: '#004E89',    // Azul João Pessoa (links/confiança)
        accent: '#F77F00',       // Laranja escuro (hover)
        light: '#ECEFF1',        // Cinza claro
        dark: '#1A1A2E',         // Azul escuro (hero, footer, texto)
        surface: '#FFFFFF',      // Branco — cards, badges
        'bg-warm': '#FAFAF8',    // Off-white quente (seções alternadas)
        whatsapp: '#25D366',     // Verde WhatsApp (CTA header)
        muted: '#6B7280',        // Texto secundário
        body: '#1F2937',         // Texto corpo em fundos claros
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-bottom))',
      },
    },
  },
  plugins: [],
}
export default config
