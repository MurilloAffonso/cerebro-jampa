import { getInitials } from "@/lib/utils";

interface DepoimentoBlockProps {
  texto: string;
  autor: string;
  avatar?: string;
}

export function DepoimentoBlock({ texto, autor, avatar }: DepoimentoBlockProps) {
  if (texto.startsWith("[")) return null;

  return (
    <section className="section-padding" style={{ background: "#F7F8F7" }}>
      <div className="container-safe max-w-2xl">
        <figure>
          {/* Aspas decorativas */}
          <div className="text-primary mb-4" style={{ opacity: 0.4 }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
              <path d="M14 6C8.477 6 4 10.477 4 16v4c0 5.523 4.477 10 10 10h2v8l8-8h2c5.523 0 10-4.477 10-10v-4c0-5.523-4.477-10-10-10H14zm20 0c-5.523 0-10 4.477-10 10v4c0 5.523 4.477 10 10 10h2v8l8-8h2c5.523 0 10-4.477 10-10v-4c0-5.523-4.477-10-10-10H34z" />
            </svg>
          </div>

          <blockquote
            className="border-l-[3px] border-primary pl-6"
          >
            <p className="font-serif italic text-dark leading-relaxed mb-0" style={{ fontSize: 'clamp(17px, 2vw, 21px)', lineHeight: 1.6 }}>
              &ldquo;{texto}&rdquo;
            </p>
          </blockquote>

          <figcaption className="mt-6 flex items-center gap-3">
            {avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={avatar}
                alt={`Foto de ${autor}`}
                className="w-11 h-11 rounded-full object-cover"
                loading="lazy"
                width={44}
                height={44}
              />
            ) : (
              <div
                className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0"
                aria-hidden="true"
              >
                {getInitials(autor)}
              </div>
            )}
            <div>
              <p className="font-semibold text-dark text-sm">— {autor}</p>
              <p className="text-muted text-xs flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#FF6B35" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Google
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
