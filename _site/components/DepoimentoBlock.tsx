import { getInitials } from "@/lib/utils";

interface DepoimentoBlockProps {
  texto: string;
  autor: string;
  avatar?: string;
}

export function DepoimentoBlock({ texto, autor, avatar }: DepoimentoBlockProps) {
  // Não renderiza se o texto for um placeholder
  if (texto.startsWith("[")) return null;

  return (
    <section className="section-padding bg-light">
      <div className="container-safe max-w-2xl">
        <figure>
          <blockquote>
            <p className="text-lg md:text-xl italic text-dark leading-relaxed">
              &ldquo;{texto}&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-4 flex items-center gap-3">
            {avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={avatar}
                alt={`Foto de ${autor}`}
                className="w-10 h-10 rounded-full object-cover"
                loading="lazy"
                width={40}
                height={40}
              />
            ) : (
              <div
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                aria-hidden="true"
              >
                {getInitials(autor)}
              </div>
            )}
            <div>
              <p className="font-semibold text-dark text-sm">— {autor}</p>
              <p className="text-gray-500 text-xs">⭐ Google</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
