import Link from "next/link";
import { Passeio } from "@/data/passeios";
import { isCampoIndisponivel } from "@/lib/consultar";
import { buildProximaSaidaCard, getStatusLabel } from "@/lib/tabua-mares";
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

const STATUS_DOT: Record<string, string> = {
  excelente: "bg-green-500",
  boa: "bg-emerald-500",
  consultar: "bg-amber-400",
  "sem-passeio": "bg-red-400",
};

export function PasseioCard({ passeio }: PasseioCardProps) {
  const href = `/passeios/${passeio.categoria}/${passeio.slug}`;

  const mareCard =
    passeio.dependeDeMare && MARE_SLUG_MAP[passeio.slug]
      ? buildProximaSaidaCard(MARE_SLUG_MAP[passeio.slug], TABUA_MARES_2026)
      : null;

  return (
    <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative bg-light" style={{ aspectRatio: "2/1" }}>
        {passeio.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={passeio.coverImage}
            alt={passeio.imagemAlt || passeio.nome}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      <div className="p-4">
        <h3 className="font-bold text-dark text-base leading-snug mb-1">
          {passeio.nome}
        </h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2 leading-relaxed">
          {passeio.descricao}
        </p>

        {passeio.dependeDeMare && (
          <div className="mb-3 text-xs text-gray-600 flex items-center gap-1.5">
            {mareCard ? (
              <>
                <span
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${STATUS_DOT[mareCard.statusOperacional] ?? "bg-gray-300"}`}
                  aria-hidden="true"
                />
                <span>
                  Próxima saída:{" "}
                  <span className="font-semibold text-dark">
                    {mareCard.diaSemana.slice(0, 3)}, {mareCard.dataFormatada} —{" "}
                    {mareCard.horarioSaida}
                  </span>
                  {" · "}
                  <span className="text-gray-500">
                    {getStatusLabel(mareCard.statusOperacional)}
                  </span>
                </span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-blue-300" aria-hidden="true" />
                <span>Consulte próximas saídas disponíveis</span>
              </>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          {isCampoIndisponivel(passeio.preco) ? (
            <span className="text-sm text-gray-500 italic">Consultar valor</span>
          ) : (
            <span className="text-primary font-bold text-base">{passeio.preco}</span>
          )}
          <Link
            href={href}
            className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
            aria-label={`Ver passeio ${passeio.nome}`}
          >
            Ver passeio →
          </Link>
        </div>
      </div>
    </article>
  );
}
