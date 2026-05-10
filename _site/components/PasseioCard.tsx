import Link from "next/link";
import Image from "next/image";
import { Passeio } from "@/data/passeios";
import { isCampoIndisponivel } from "@/lib/consultar";

interface PasseioCardProps {
  passeio: Passeio;
  badge?: "mais-vendido" | "murillo" | "novo" | "privativo" | "em-alta";
  loading?: "lazy" | "eager";
}

const CATEGORIA_NOME: Record<string, string> = {
  "pacotes":           "Pacotes",
  "litoral-sul":       "Litoral Sul",
  "litoral-norte":     "Litoral Norte",
  "piscinas-naturais": "Piscinas Naturais",
  "city-tour":         "City Tour",
  "interestaduais":    "Interestaduais",
};

const BADGE_CONFIG = {
  "mais-vendido": { label: "Mais vendido",           bg: "#D97706", text: "#fff" },
  "murillo":      { label: "Indicado pelo Murillo",  bg: "#107997", text: "#fff" },
  "novo":         { label: "Novo",                   bg: "#FBBF24", text: "#0D1F2D" },
  "privativo":    { label: "Privativo",               bg: "#092238", text: "#fff" },
  "em-alta":      { label: "Em alta",                bg: "#10B981", text: "#fff" },
} as const;

export function PasseioCard({ passeio, badge, loading = "lazy" }: PasseioCardProps) {
  const href = `/passeios/${passeio.categoria}/${passeio.slug}`;
  const categoriaNome = CATEGORIA_NOME[passeio.categoria] ?? passeio.categoria;
  const badgeCfg = badge ? BADGE_CONFIG[badge] : null;
  const precoLabel = isCampoIndisponivel(passeio.preco) ? "Consultar" : passeio.preco;

  return (
    <Link
      href={href}
      aria-label={`Ver passeio ${passeio.nome}`}
      className="group block"
      style={{ textDecoration: 'none' }}
    >
      <article
        style={{
          background: 'var(--cor-fundo-puro)',
          border: '1px solid transparent',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: 'var(--sombra-card)',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        className="group-hover:-translate-y-[6px] group-hover:shadow-[var(--sombra-hover)] group-hover:border-[var(--cor-primaria)] transition-all duration-300"
      >
        {/* ── Imagem 16:10 ──────────────────────────────── */}
        <div
          style={{
            position: 'relative',
            aspectRatio: '16/10',
            overflow: 'hidden',
            borderRadius: '16px 16px 0 0',
            background: 'var(--cor-navy)',
          }}
        >
          {passeio.coverImage ? (
            <Image
              src={passeio.coverImage}
              alt={passeio.imagemAlt || `${passeio.nome} em João Pessoa`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading={loading}
              style={{
                objectFit: 'cover',
                transition: 'transform 550ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              className="group-hover:scale-[1.04]"
            />
          ) : (
            /* Placeholder — slot aguardando foto real */
            <div
              data-foto-id={`CARD-${passeio.slug.toUpperCase().replace(/-/g, '_')}-01`}
              title={`TODO foto: ${passeio.nome}`}
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, var(--cor-navy) 0%, var(--cor-primaria) 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <IconImage />
              <span style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '10px',
                letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
              }}>
                foto em breve
              </span>
            </div>
          )}

          {/* Badge */}
          {badgeCfg && (
            <span
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                background: badgeCfg.bg,
                color: badgeCfg.text,
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.04em',
                padding: '4px 10px',
                borderRadius: '999px',
              }}
            >
              {badgeCfg.label}
            </span>
          )}
        </div>

        {/* ── Conteúdo ──────────────────────────────────── */}
        <div style={{ padding: '24px' }}>
          {/* Categoria */}
          <span
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              color: 'var(--cor-acento)',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            {categoriaNome}
          </span>

          {/* Nome */}
          <h3
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontSize: '22px',
              fontWeight: 500,
              lineHeight: 1.2,
              color: 'var(--cor-primaria)',
              marginBottom: '10px',
            }}
          >
            {passeio.nome}
          </h3>

          {/* Descrição — 2 linhas */}
          {passeio.descricao && (
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '15px',
                color: 'var(--cor-texto-medio)',
                lineHeight: 1.55,
                marginBottom: '16px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                maxWidth: '100%',
              }}
            >
              {passeio.descricao}
            </p>
          )}

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'var(--cor-borda)',
              marginBottom: '16px',
            }}
            aria-hidden="true"
          />

          {/* Meta-info */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '20px',
              flexWrap: 'wrap',
            }}
          >
            {passeio.duracao && (
              <MetaItem icon={<IconClock />} label={passeio.duracao} />
            )}
            {passeio.saida && (
              <MetaItem icon={<IconPin />} label={passeio.saida} />
            )}
          </div>

          {/* Preço */}
          <div style={{ marginBottom: '20px' }}>
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--cor-texto-claro)',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              A partir de
            </span>
            <span
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontSize: '28px',
                fontWeight: 600,
                color: 'var(--cor-primaria)',
                lineHeight: 1,
              }}
            >
              {precoLabel}
            </span>
            {!isCampoIndisponivel(passeio.preco) && (
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px',
                  color: 'var(--cor-texto-claro)',
                  marginLeft: '4px',
                }}
              >
                / pessoa
              </span>
            )}
          </div>

          {/* Botão */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              fontSize: '15px',
              color: 'var(--cor-primaria)',
              borderBottom: '1.5px solid rgba(16,121,151,0.28)',
              paddingBottom: '2px',
              transition: 'color 200ms, border-color 200ms',
            }}
            className="group-hover:text-[var(--cor-acento)] group-hover:border-[var(--cor-acento)]"
          >
            Ver detalhes
            <span style={{ transition: 'transform 200ms' }} className="group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </article>
    </Link>
  );
}

/* ── Ícones SVG line ──────────────────────────────────────── */
function MetaItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--font-inter)',
        fontSize: '13px',
        color: 'var(--cor-texto-claro)',
      }}
    >
      <span style={{ color: 'var(--cor-primaria-clara)', flexShrink: 0 }}>{icon}</span>
      {label}
    </span>
  );
}

function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconPeople() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconImage() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}
