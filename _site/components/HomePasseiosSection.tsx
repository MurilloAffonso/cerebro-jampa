"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import type { Passeio } from "@/data/passeios";
import { PasseioCard } from "@/components/PasseioCard";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface HomePasseiosSectionProps {
  passeios: Passeio[];
  showViewAll?: boolean;
  heading?: string;
}

type CatSlug = "todos" | "piscinas-naturais" | "litoral-sul" | "litoral-norte" | "pacotes" | "city-tour" | "interestaduais";

export function HomePasseiosSection({ passeios, showViewAll = true, heading }: HomePasseiosSectionProps) {
  const [active, setActive] = useState<CatSlug>("todos");
  const tFil = useTranslations('Filtros');
  const tCat = useTranslations('Categorias');

  const CATEGORIAS: { slug: CatSlug; label: string }[] = [
    { slug: "todos",             label: tFil('todos') },
    { slug: "piscinas-naturais", label: tCat('piscinasNaturais') },
    { slug: "litoral-sul",       label: tCat('litoralSul') },
    { slug: "litoral-norte",     label: tCat('litoralNorte') },
    { slug: "pacotes",           label: tCat('pacotes') },
    { slug: "city-tour",         label: tCat('cityTour') },
    { slug: "interestaduais",    label: tCat('interestaduais') },
  ];

  const filtered = active === "todos"
    ? passeios
    : passeios.filter((p) => p.categoria === active);

  const sorted = active === "todos"
    ? [...filtered].sort((a, b) => (b.prioritario ? 1 : 0) - (a.prioritario ? 1 : 0))
    : filtered;

  const waUrl = buildWhatsAppUrl("roteiro");

  return (
    <section style={{ background: '#fff', paddingBottom: 48 }}>

      {heading && (
        <h2 style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(15px, 1.5vw, 18px)',
          fontWeight: 600,
          color: 'var(--cor-texto-escuro)',
          padding: '20px 16px 0',
          margin: 0,
          letterSpacing: '-0.01em',
        }}>
          {heading}
        </h2>
      )}

      {/* ── Chips de categoria ── */}
      <div style={{
        padding: '20px 16px 0',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
      }}>
        <div style={{ display: 'flex', gap: 8, paddingBottom: 6, width: 'max-content' }}>
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActive(cat.slug)}
              style={{
                fontFamily: 'var(--font-body)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '8px 14px', fontSize: 13, fontWeight: 600,
                borderRadius: 999, whiteSpace: 'nowrap',
                cursor: 'pointer',
                border: active === cat.slug ? 'none' : '1px solid #E6E9EB',
                background: active === cat.slug ? '#092238' : '#fff',
                color: active === cat.slug ? '#fff' : '#092238',
                transition: 'background 180ms, color 180ms',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Cabeçalho da seção ── */}
      <div style={{ padding: '24px 16px 6px' }}>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: '#5A6B78', fontWeight: 600,
        }}>
          {active === "todos" ? tFil('labelTodos') : tFil('labelCategoria')}
        </div>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 600,
          color: '#092238', marginTop: 4, letterSpacing: '-0.01em',
        }}>
          {active === "todos"
            ? tFil('tituloTodos')
            : CATEGORIAS.find((c) => c.slug === active)?.label ?? tFil('labelCategoria')}
        </div>
      </div>

      {/* ── Grid de cards ── */}
      <div style={{
        padding: '16px 16px 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
        gap: 16,
      }}>
        {sorted.map((p, i) => (
          <PasseioCard
            key={p.id}
            passeio={p}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        {sorted.length === 0 && (
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 14,
            color: '#5A6B78', padding: '24px 0',
          }}>
            {tFil('semPasseios')}
          </p>
        )}
      </div>

      {/* ── Link "Ver todos" — oculto em /passeios ── */}
      {showViewAll && (
        <div style={{ textAlign: 'center', marginTop: 28, padding: '0 16px' }}>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              gap: 8, width: '100%', maxWidth: 400,
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15,
              color: '#fff', background: '#107997', border: 'none',
              borderRadius: 999, padding: '14px 24px',
              textDecoration: 'none', minHeight: 50,
              boxShadow: '0 8px 22px -10px rgba(16,121,151,0.55)',
              transition: 'background 180ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#0E8FA8')}
            onMouseLeave={e => (e.currentTarget.style.background = '#107997')}
          >
            {tFil('ctaWa')}
          </a>
          <Link
            href="/passeios"
            style={{
              display: 'block', marginTop: 12,
              fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
              color: '#107997', textDecoration: 'none',
            }}
          >
            {tFil('verTodos', { count: passeios.length })}
          </Link>
        </div>
      )}
    </section>
  );
}
