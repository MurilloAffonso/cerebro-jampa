import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',      // Laranja Vem Passear
        secondary: '#004E89',    // Azul João Pessoa
        accent: '#F77F00',       // Laranja escuro
        light: '#ECEFF1',        // Cinza claro
        dark: '#1A1A1A',         // Preto
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-bottom))',
      },
    },
  },
  plugins: [],
}
export default config
