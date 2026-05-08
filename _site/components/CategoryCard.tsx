import Link from "next/link";

interface CategoryCardProps {
  nome: string;
  slug: string;
  descricao: string;
  cor: string;
  emoji?: string;
}

const CAT_ICONS: Record<string, React.ReactNode> = {
  pacotes: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40" aria-hidden="true">
      <rect x="8" y="16" width="32" height="24" rx="3" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
      <path d="M16 16V12a8 8 0 0 1 16 0v4" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
      <path d="M24 26v4M20 28h8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.9" />
    </svg>
  ),
  "litoral-sul": (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40" aria-hidden="true">
      <path d="M4 34 C10 26 16 38 24 30 C32 22 38 36 44 28" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round" />
      <circle cx="24" cy="16" r="7" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
      <path d="M24 9 V4M24 28v5M9 16H4M44 16h-5" stroke="white" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
    </svg>
  ),
  "litoral-norte": (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40" aria-hidden="true">
      <path d="M8 36 L24 12 L40 36" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" strokeLinejoin="round" />
      <path d="M14 36 L24 20 L34 36" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" strokeLinejoin="round" />
      <path d="M4 40h40" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
    </svg>
  ),
  "piscinas-naturais": (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40" aria-hidden="true">
      <circle cx="24" cy="22" r="12" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
      <circle cx="24" cy="22" r="5" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M6 38 C12 32 18 42 24 36 C30 30 36 40 42 34" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round" />
    </svg>
  ),
  "city-tour": (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40" aria-hidden="true">
      <rect x="6" y="24" width="12" height="16" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
      <rect x="18" y="16" width="14" height="24" stroke="white" strokeWidth="2.5" strokeOpacity="0.8" />
      <rect x="32" y="20" width="10" height="20" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
      <path d="M4 40h40" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
      <rect x="22" y="28" width="6" height="8" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
    </svg>
  ),
  interestaduais: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40" aria-hidden="true">
      <path d="M8 24 C8 15 15 8 24 8 C33 8 40 15 40 24" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
      <path d="M8 24 C8 33 15 40 24 40 C33 40 40 33 40 24" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
      <path d="M24 8 C18 14 16 20 16 24 C16 28 18 34 24 40" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M24 8 C30 14 32 20 32 24 C32 28 30 34 24 40" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M8 24h32" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
    </svg>
  ),
};

export function CategoryCard({ nome, slug, descricao, cor }: CategoryCardProps) {
  const icon = CAT_ICONS[slug];

  return (
    <Link
      href={`/passeios/${slug}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:shadow-card-hover min-h-[180px]"
      style={{ background: cor, boxShadow: '0 2px 16px rgba(0,0,0,0.12)' }}
    >
      {/* Radial highlight sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="relative p-[30px_26px] flex flex-col flex-1">
        {/* Ícone */}
        <div className="mb-5 opacity-90">{icon}</div>

        <h3 className="font-serif font-bold text-[21px] text-white leading-snug mb-2">
          {nome}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed flex-1">{descricao}</p>

        {/* Seta */}
        <div className="absolute bottom-6 right-6 text-white/60 group-hover:text-white transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
