import { Avaliacao } from "@/data/passeios";

interface ReviewsBlockProps {
  avaliacoes: Avaliacao[];
  googleMapsUrl?: string;
}

function getInitial(name: string): string {
  return name.trim().charAt(0).toUpperCase();
}

export function ReviewsBlock({ avaliacoes, googleMapsUrl }: ReviewsBlockProps) {
  if (!avaliacoes || avaliacoes.length === 0) return null;

  return (
    <section
      style={{ background: 'var(--cor-fundo)' }}
      aria-label="Avaliações de clientes"
    >
      <div className="container-safe" style={{ paddingTop: '48px', paddingBottom: '48px' }}>

        {/* Header da seção */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '2px' }} aria-label="5 estrelas">
              {[0,1,2,3,4].map(i => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span style={{
              fontFamily: 'var(--font-fraunces)',
              fontSize: '22px',
              fontWeight: 700,
              color: 'var(--cor-navy)',
              lineHeight: 1,
            }}>
              O que dizem quem foi
            </span>
          </div>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            color: 'var(--cor-texto-claro)',
            margin: 0,
          }}>
            Avaliações reais de turistas no Google
          </p>
        </div>

        {/* Grid de avaliações */}
        <ul
          role="list"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '12px',
            padding: 0,
            listStyle: 'none',
            margin: 0,
          }}
        >
          {avaliacoes.map((avaliacao, index) => (
            <li
              key={index}
              role="listitem"
              className="hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(16,121,151,0.16)] transition-[box-shadow,transform] duration-200"
              style={{
                background: 'var(--cor-fundo-puro)',
                border: '1px solid var(--cor-borda)',
                borderRadius: '14px',
                padding: '18px',
                boxShadow: 'var(--sombra-card)',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }} aria-label="5 estrelas">
                {[0,1,2,3,4].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Texto */}
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                color: 'var(--cor-texto-escuro)',
                lineHeight: 1.6,
                marginBottom: '16px',
                fontStyle: 'italic',
                margin: '0 0 16px',
              }}>
                &ldquo;{avaliacao.texto}&rdquo;
              </p>

              {/* Autor */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--cor-primaria)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-fraunces)',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#fff',
                  }}>
                    {getInitial(avaliacao.autor)}
                  </span>
                </div>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 600,
                    fontSize: '13px',
                    color: 'var(--cor-navy)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    {avaliacao.autor}
                    {avaliacao.cidade && (
                      <span style={{ fontWeight: 400, color: 'var(--cor-texto-claro)' }}>
                        {' · '}{avaliacao.cidade}
                      </span>
                    )}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '11px',
                    color: 'var(--cor-texto-claro)',
                    margin: 0,
                    lineHeight: 1.3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    {avaliacao.data}
                    {' · '}
                    <svg width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Link para mais avaliações */}
        {googleMapsUrl && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--cor-primaria)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                borderBottom: '1.5px solid rgba(16,121,151,0.25)',
                paddingBottom: '2px',
                transition: 'border-color 150ms',
              }}
              className="hover:border-[var(--cor-primaria)]"
            >
              Ver todas as avaliações no Google ↗
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
