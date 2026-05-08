import Link from "next/link";
import { Passeio } from "@/data/passeios";
import { buildProximaSaidaCard } from "@/lib/tabua-mares";
import { TABUA_MARES_2026 } from "@/data/tabua-mares";
import type { PasseioMareSlug } from "@/types/tabua-mares";

interface PasseioCardProps {
  passeio: Passeio;
}

const MARE_SLUG_MAP: Record<string, PasseioMareSlug> = {
  seixas: "seixas",
  picaozinho: "picaozinho",
  "areia-vermelha-catamara": "areia-vermelha-catamara",
};

const CATEGORIA_BG: Record<string, string> = {
  "pacotes":           "linear-gradient(160deg, #003d6b, #004E89)",
  "litoral-sul":       "linear-gradient(160deg, #0d4d2e, #1A6B52)",
  "litoral-norte":     "linear-gradient(160deg, #4a2c0a, #7B4F12)",
  "piscinas-naturais": "linear-gradient(160deg, #073d5c, #0E5E8A)",
  "city-tour":         "linear-gradient(160deg, #2a1e55, #4A3580)",
  "interestaduais":    "linear-gradient(160deg, #550f23, #8B1A3A)",
};

const CATEGORIA_NOME: Record<string, string> = {
  "pacotes": "Pacotes",
  "litoral-sul": "Litoral Sul",
  "litoral-norte": "Litoral Norte",
  "piscinas-naturais": "Piscinas Naturais",
  "city-tour": "City Tour",
  "interestaduais": "Interestaduais",
};

const CATEGORIA_BADGE_COLOR: Record<string, string> = {
  "pacotes":           "#004E89",
  "litoral-sul":       "#1A6B52",
  "litoral-norte":     "#7B4F12",
  "piscinas-naturais": "#0E5E8A",
  "city-tour":         "#4A3580",
  "interestaduais":    "#8B1A3A",
};

export function PasseioCard({ passeio }: PasseioCardProps) {
  const href = `/passeios/${passeio.categoria}/${passeio.slug}`;

  const mareCard =
    passeio.dependeDeMare && MARE_SLUG_MAP[passeio.slug]
      ? buildProximaSaidaCard(MARE_SLUG_MAP[passeio.slug], TABUA_MARES_2026)
      : null;

  const bg = CATEGORIA_BG[passeio.categoria] ?? "linear-gradient(160deg, #092238, #163149)";
  const categoriaNome = CATEGORIA_NOME[passeio.categoria] ?? passeio.categoria;
  const badgeColor = CATEGORIA_BADGE_COLOR[passeio.categoria] ?? "#092238";

  return (
    <Link
      href={href}
      className="group block relative rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-[5px] hover:shadow-2xl"
      style={{ aspectRatio: "3/4" }}
      aria-label={`Ver passeio ${passeio.nome}`}
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ background: bg }}>
        {passeio.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={passeio.coverImage}
            alt={passeio.imagemAlt || passeio.nome}
            className="w-full h-full object-cover opacity-80"
            loading="lazy"
          />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Mare badge — top left */}
      {passeio.dependeDeMare && mareCard && (
        <div className="absolute top-3 left-3 bg-emerald-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          {mareCard.horarioSaida}
        </div>
      )}

      {/* Content — anchored to bottom */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 pb-6">
        {/* Category badge — colored pill */}
        <span
          className="self-start text-[11px] font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full mb-2.5"
          style={{ background: badgeColor }}
        >
          {categoriaNome}
        </span>

        {/* Title */}
        <h3 className="font-serif font-bold text-lg text-white leading-snug mb-1.5">
          {passeio.nome}
        </h3>

        {/* Description — hover reveal */}
        <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-300">
          <p className="text-white/0 group-hover:text-white/75 text-sm leading-relaxed mb-3 transition-colors duration-300">
            {passeio.descricao}
          </p>
        </div>

        {/* Duration + CTA row */}
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1 text-white/55 text-xs">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
            {passeio.duracao}
          </span>
          <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
            Ver detalhes →
          </span>
        </div>
      </div>
    </Link>
  );
}
