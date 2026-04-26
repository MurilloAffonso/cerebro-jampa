import { Avaliacao } from "@/data/passeios";

interface ReviewsBlockProps {
  avaliacoes: Avaliacao[];
  googleMapsUrl?: string;
}

export function ReviewsBlock({ avaliacoes, googleMapsUrl }: ReviewsBlockProps) {
  if (!avaliacoes || avaliacoes.length === 0) return null;

  return (
    <section className="bg-white" aria-label="Avaliações de clientes">
      <div className="container-safe py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
          O que dizem quem foi
        </h2>

        <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {avaliacoes.map((avaliacao, index) => (
            <li
              key={index}
              role="listitem"
              className="bg-white border border-gray-200 rounded-lg p-4 md:p-5"
            >
              <div className="flex gap-0.5 mb-3" aria-label="5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-base" aria-hidden="true">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-gray-800 text-sm leading-relaxed mb-3">
                &quot;{avaliacao.texto}&quot;
              </p>
              <p className="text-gray-500 text-xs">
                — {avaliacao.autor}
                {avaliacao.cidade && `, ${avaliacao.cidade}`}
              </p>
              <p className="text-gray-400 text-xs mt-1">{avaliacao.data} · Google Maps</p>
            </li>
          ))}
        </ul>

        {googleMapsUrl && (
          <div className="mt-4">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-accent inline-flex items-center gap-1 transition-colors"
            >
              Ver todas as avaliações no Google ↗
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
