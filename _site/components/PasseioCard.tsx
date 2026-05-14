"use client";

import Link from "next/link";
import Image from "next/image";
import { empresa } from "@/data/empresa";
import type { Passeio } from "@/data/passeios";
import { getPasseioBadges, parsePrecoChip, DESIGN_BADGE, type DesignBadgeKind } from "@/lib/badges";

const WA_BASE = empresa.contato.whatsappLink;

interface PasseioCardProps {
  passeio: Passeio;
  loading?: "lazy" | "eager";
}

export function PasseioCard({ passeio, loading = "lazy" }: PasseioCardProps) {
  const href   = `/passeios/${passeio.categoria}/${passeio.slug}`;
  const waUrl  = `${WA_BASE}?text=${encodeURIComponent(`Oi, tenho interesse no passeio ${passeio.nome}`)}`;
  const badges = getPasseioBadges(passeio);
  const preco  = parsePrecoChip(passeio.preco);
  const local  = passeio.localizacao || passeio.saida;

  return (
    <article style={{
      width: '100%',
      background: '#fff',
      borderRadius: 14,
      overflow: 'hidden',
      border: '1px solid #E6E9EB',
      boxShadow: '0 10px 30px -22px rgba(9,34,56,0.35)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 240ms cubic-bezier(0.22,1,0.36,1), box-shadow 240ms ease, border-color 180ms ease',
      willChange: 'transform',
    }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(-4px)';
        el.style.boxShadow = '0 20px 50px -24px rgba(9,34,56,0.35)';
        el.style.borderColor = '#107997';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = '0 10px 30px -22px rgba(9,34,56,0.35)';
        el.style.borderColor = '#E6E9EB';
      }}
    >
      {/* ── Área de imagem (200px) ── */}
      <div style={{ position: 'relative', height: 200, flexShrink: 0 }}>

        {/* Foto */}
        {passeio.coverImage ? (
          <Image
            src={passeio.coverImage}
            alt={passeio.imagemAlt || `${passeio.nome} em João Pessoa`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading={loading}
            style={{ objectFit: 'cover', filter: 'saturate(1.05)' }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, #092238 0%, #107997 100%)',
          }} />
        )}

        {/* Overlay gradiente */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(9,34,56,0) 30%, rgba(9,34,56,0.65) 100%)',
          pointerEvents: 'none',
        }} />

        {/* Badges — top left */}
        {badges.length > 0 && (
          <div style={{
            position: 'absolute', top: 12, left: 12,
            display: 'flex', gap: 6, flexWrap: 'wrap',
          }}>
            {badges.map((k) => <BadgePill key={k} kind={k} />)}
          </div>
        )}

        {/* Favorito — top right */}
        <div style={{
          position: 'absolute', top: 12, right: 12,
          width: 32, height: 32, borderRadius: 999,
          background: 'rgba(255,255,255,0.94)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#092238', fontSize: 14, lineHeight: 1,
        }} aria-hidden="true">♡</div>

        {/* Chip de preço — bottom right */}
        {preco && (
          <div style={{
            position: 'absolute', bottom: 12, right: 12,
            background: '#fff', borderRadius: 8,
            padding: '6px 10px',
            boxShadow: '0 6px 18px -10px rgba(0,0,0,0.4)',
            lineHeight: 1.1,
          }}>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: 9, fontWeight: 500, textTransform: 'uppercase',
              letterSpacing: '0.06em', color: '#5A6B78',
            }}>a partir de</div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 18, fontWeight: 700, color: '#107997', marginTop: 1,
            }}>{preco}</div>
          </div>
        )}
      </div>

      {/* ── Conteúdo ── */}
      <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>

        {/* Título */}
        <Link href={href} style={{ textDecoration: 'none' }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 19, fontWeight: 600,
            color: '#092238', letterSpacing: '-0.01em', lineHeight: 1.15,
            marginBottom: 8,
            transition: 'color 150ms',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#107997')}
            onMouseLeave={e => (e.currentTarget.style.color = '#092238')}
          >{passeio.nome}</h3>
        </Link>

        {/* Meta-info */}
        <div style={{
          display: 'flex', gap: 12, flex: '1 1 auto',
          fontSize: 12, color: '#5A6B78',
          marginBottom: 14,
        }}>
          {passeio.duracao && (
            <MetaItem icon={<IcoClock />}>{passeio.duracao}</MetaItem>
          )}
          {local && (
            <MetaItem icon={<IcoPin />}>{local}</MetaItem>
          )}
        </div>

        {/* Botões */}
        <div style={{ display: 'flex', gap: 8 }}>
          <Link href={href} style={{
            flex: 1,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600,
            color: '#092238', background: 'transparent',
            border: '1.5px solid #E6E9EB', borderRadius: 999,
            padding: '10px 0', textDecoration: 'none', minHeight: 44,
            transition: 'border-color 150ms, background 150ms',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#092238';
              e.currentTarget.style.background = '#F7F8F7';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#E6E9EB';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Ver passeio
          </Link>

          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            aria-label={`Reservar ${passeio.nome} pelo WhatsApp`}
            style={{
              flex: 1.3,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              gap: 6,
              fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700,
              color: '#fff', background: '#107997', border: 'none',
              borderRadius: 999, padding: '10px 0', textDecoration: 'none',
              minHeight: 44,
              boxShadow: '0 8px 22px -10px rgba(16,121,151,0.55)',
              transition: 'background 150ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#0E8FA8')}
            onMouseLeave={e => (e.currentTarget.style.background = '#107997')}
          >
            <IcoWA /> WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

/* ── Sub-componentes ── */

function BadgePill({ kind }: { kind: DesignBadgeKind }) {
  const b = DESIGN_BADGE[kind];
  return (
    <span style={{
      fontFamily: 'var(--font-body)',
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: b.bg, color: '#fff',
      padding: '4px 9px', fontSize: 10.5, fontWeight: 700,
      borderRadius: 999, textTransform: 'uppercase', letterSpacing: '0.04em',
      lineHeight: 1, whiteSpace: 'nowrap',
      boxShadow: '0 4px 14px -6px rgba(0,0,0,0.4)',
    }}>
      <span style={{ fontSize: 11.5, lineHeight: 1 }}>{b.icon}</span>
      {b.label}
    </span>
  );
}

function MetaItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
      <span style={{ color: '#107997', flexShrink: 0 }}>{icon}</span>
      {children}
    </span>
  );
}

function IcoClock() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IcoPin() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IcoWA() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path fill="#fff" d="M17.5 14.4c-.3-.1-1.8-.9-2-.9-.2-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.9-.4-1.7-.9-2.4-1.6-.7-.7-1.1-1.5-1.5-2.3-.2-.3-.1-.4 0-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-2c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.2.3-1 .9-1 2.3 0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.1 1.8.7 2.5.7 3.4.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.1-.2-.4-.3z"/>
      <path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3 1.3 4.7 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3c-.9-1.3-1.3-2.9-1.3-4.4C4.5 7.5 8 4 12 4s7.5 3.5 7.5 8-3.5 8-7.5 8z"/>
    </svg>
  );
}
