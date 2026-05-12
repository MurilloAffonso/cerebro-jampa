'use client'

/**
 * PartnersMarquee — Carrossel horizontal infinito de parceiros
 *
 * Substitui o bloco "Praia do Amor" na home.
 * Animação CSS pura (sem JS), efeito "fachada passando".
 * Pausa no hover por acessibilidade.
 *
 * Cada parceiro pode ter `logoSrc` (preferencial) OU exibir só nome+tipo.
 * Logos vão em `public/parceiros/`.
 *
 * TODO: trocar placeholders restantes por parceiros reais confirmados por Murillo.
 */

interface Parceiro {
  nome: string;
  tipo: string;
  logoSrc?: string;
  alt?: string;
  link?: string;
}

const PARCEIROS: Parceiro[] = [
  {
    nome: "Quiosque Pé na Areia",
    tipo: "Quiosque",
    logoSrc: "/parceiros/quiosque-pe-na-areia.jpg",
    alt: "Logo do Quiosque Pé na Areia",
    link: "https://maps.app.goo.gl/8zoxqPMp7VhS5ZoJ7",
  },
  // [CONFIRMAR COM MURILLO: lista real de parceiros — placeholders abaixo]
  { nome: "Parceiro 2", tipo: "Hotel" },
  { nome: "Parceiro 3", tipo: "Restaurante" },
  { nome: "Parceiro 4", tipo: "Pousada" },
  { nome: "Parceiro 5", tipo: "Quiosque" },
  { nome: "Parceiro 6", tipo: "Marca" },
  { nome: "Parceiro 7", tipo: "Restaurante" },
  { nome: "Parceiro 8", tipo: "Hotel" },
];

export function PartnersMarquee() {
  const loopList = [...PARCEIROS, ...PARCEIROS];

  return (
    <section
      style={{
        background: 'var(--cor-areia)',
        padding: '72px 0',
        overflow: 'hidden',
      }}
      aria-label="Nossos parceiros"
    >
      <div className="container-safe" style={{ marginBottom: '40px' }}>
        <span
          className="section-kicker text-center block"
          style={{ marginBottom: '8px' }}
        >
          Quem caminha com a gente
        </span>
        <h2
          className="font-serif text-center"
          style={{
            color: 'var(--cor-primaria)',
            fontSize: 'clamp(28px, 4vw, 40px)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          Parceiros em João Pessoa
        </h2>
        <p
          className="text-center mx-auto"
          style={{
            color: 'var(--cor-texto-claro)',
            fontSize: '15px',
            maxWidth: '520px',
            marginTop: '12px',
            lineHeight: 1.6,
          }}
        >
          Quiosques, hotéis e marcas que confiam no nosso receptivo — e que recomendamos pra você.
        </p>
      </div>

      {/* ── Faixa rolante ── */}
      <div
        className="partners-marquee-track"
        style={{
          display: 'flex',
          gap: '20px',
          width: 'max-content',
          animation: 'partners-scroll 36s linear infinite',
        }}
      >
        {loopList.map((p, i) => (
          <PartnerCard
            key={`${p.nome}-${i}`}
            partner={p}
            duplicate={i >= PARCEIROS.length}
          />
        ))}
      </div>

      <style>{`
        @keyframes partners-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .partners-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .partners-marquee-track {
            animation: none !important;
            flex-wrap: wrap;
            justify-content: center;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Card de parceiro ─────────────────────────────────────── */

function PartnerCard({ partner, duplicate }: { partner: Parceiro; duplicate: boolean }) {
  const hasLogo = !!partner.logoSrc;
  const isLink = !!partner.link && !duplicate;

  const cardStyle: React.CSSProperties = {
    flexShrink: 0,
    width: '220px',
    height: '140px',
    borderRadius: '16px',
    background: 'var(--cor-fundo-puro)',
    border: '1px solid var(--cor-borda)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '16px',
    boxShadow: 'var(--sombra-card)',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'transform 200ms, box-shadow 200ms',
    cursor: isLink ? 'pointer' : 'default',
  };

  const content = hasLogo ? (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={partner.logoSrc}
        alt={partner.alt || partner.nome}
        loading="lazy"
        style={{
          maxWidth: '100%',
          maxHeight: '88px',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--cor-texto-claro)',
        }}
      >
        {partner.tipo}
      </span>
    </>
  ) : (
    <>
      <span
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--cor-acento)',
        }}
      >
        {partner.tipo}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-fraunces), var(--font-inter)',
          fontSize: '18px',
          fontWeight: 600,
          color: 'var(--cor-primaria)',
          textAlign: 'center',
        }}
      >
        {partner.nome}
      </span>
    </>
  );

  if (isLink) {
    return (
      <a
        href={partner.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir ${partner.nome} no Google Maps`}
        style={cardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 10px 28px rgba(9,34,56,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'var(--sombra-card)';
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <div aria-hidden={duplicate} style={cardStyle}>
      {content}
    </div>
  );
}
