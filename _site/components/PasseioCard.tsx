import Link from "next/link";
import { Passeio } from "@/data/passeios";

interface PasseioCardProps {
  passeio: Passeio;
}

export function PasseioCard({ passeio }: PasseioCardProps) {
  const href = `/passeios/${passeio.categoria}/${passeio.slug}`;

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
        <div className="flex items-center justify-between">
          <span className="text-primary font-bold text-base">{passeio.preco}</span>
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
