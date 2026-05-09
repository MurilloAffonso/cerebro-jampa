/**
 * CategoryIcon — ícones SVG line unificados para as 6 categorias.
 *
 * - `stroke="currentColor"` herda a cor do contexto (branco em cards escuros,
 *   secondary em fundos claros). Não fixar paleta aqui.
 * - Mesma malha 48x48 viewBox usada em todos os usos do site.
 * - Substitui emojis em headers de categoria e chips do hub /passeios.
 */

import type { SVGProps } from "react";

interface CategoryIconProps extends Omit<SVGProps<SVGSVGElement>, "stroke" | "fill"> {
  slug: string;
  size?: number;
}

const ICONS: Record<string, JSX.Element> = {
  pacotes: (
    <>
      <rect x="8" y="16" width="32" height="24" rx="3" strokeOpacity="0.85" />
      <path d="M16 16V12a8 8 0 0 1 16 0v4" strokeOpacity="0.85" />
      <path d="M24 26v4M20 28h8" strokeLinecap="round" strokeOpacity="1" />
    </>
  ),
  "litoral-sul": (
    <>
      <path
        d="M4 34 C10 26 16 38 24 30 C32 22 38 36 44 28"
        strokeOpacity="0.85"
        strokeLinecap="round"
      />
      <circle cx="24" cy="16" r="7" strokeOpacity="0.85" />
      <path
        d="M24 9V4M24 28v5M9 16H4M44 16h-5"
        strokeWidth="1.5"
        strokeOpacity="0.55"
        strokeLinecap="round"
      />
    </>
  ),
  "litoral-norte": (
    <>
      <path
        d="M8 36 L24 12 L40 36"
        strokeOpacity="0.85"
        strokeLinejoin="round"
      />
      <path
        d="M14 36 L24 20 L34 36"
        strokeWidth="1.5"
        strokeOpacity="0.55"
        strokeLinejoin="round"
      />
      <path d="M4 40h40" strokeWidth="1.5" strokeOpacity="0.65" strokeLinecap="round" />
    </>
  ),
  "piscinas-naturais": (
    <>
      <circle cx="24" cy="22" r="12" strokeOpacity="0.85" />
      <circle cx="24" cy="22" r="5" strokeWidth="1.5" strokeOpacity="0.6" />
      <path
        d="M6 38 C12 32 18 42 24 36 C30 30 36 40 42 34"
        strokeOpacity="0.85"
        strokeLinecap="round"
      />
    </>
  ),
  "city-tour": (
    <>
      <rect x="6" y="24" width="12" height="16" strokeWidth="1.5" strokeOpacity="0.7" />
      <rect x="18" y="16" width="14" height="24" strokeOpacity="0.95" />
      <rect x="32" y="20" width="10" height="20" strokeWidth="1.5" strokeOpacity="0.7" />
      <path d="M4 40h40" strokeWidth="1.5" strokeOpacity="0.65" strokeLinecap="round" />
      <rect x="22" y="28" width="6" height="8" strokeWidth="1.2" strokeOpacity="0.6" />
    </>
  ),
  interestaduais: (
    <>
      <path
        d="M8 24 C8 15 15 8 24 8 C33 8 40 15 40 24"
        strokeOpacity="0.85"
      />
      <path
        d="M8 24 C8 33 15 40 24 40 C33 40 40 33 40 24"
        strokeOpacity="0.85"
      />
      <path
        d="M24 8 C18 14 16 20 16 24 C16 28 18 34 24 40"
        strokeWidth="1.5"
        strokeOpacity="0.55"
      />
      <path
        d="M24 8 C30 14 32 20 32 24 C32 28 30 34 24 40"
        strokeWidth="1.5"
        strokeOpacity="0.55"
      />
      <path d="M8 24h32" strokeWidth="1.5" strokeOpacity="0.55" />
    </>
  ),
};

export function CategoryIcon({ slug, size = 32, ...rest }: CategoryIconProps) {
  const content = ICONS[slug];
  if (!content) return null;

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...rest}
    >
      {content}
    </svg>
  );
}
