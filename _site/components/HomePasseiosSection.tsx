"use client";

import { useState } from "react";
import type { Passeio } from "@/data/passeios";
import { PasseioCard } from "@/components/PasseioCard";
import { empresa } from "@/data/empresa";

interface HomePasseiosSectionProps {
  passeios: Passeio[];
  showViewAll?: boolean;
}

const CATEGORIAS = [
  { slug: "todos",           label: "Todos" },
  { slug: "piscinas-naturais", label: "Piscinas Naturais" },
  { slug: "litoral-sul",     label: "Litoral Sul" },
  { slug: "litoral-norte",   label: "Litoral Norte" },
  { slug: "pacotes",         label: "Pacotes" },
  { slug: "city-tour",       label: "City Tour" },
];

export function HomePasseiosSection({ passeios, showViewAll = true }: HomePasseiosSectionProps) {
  const [active, setActive] = useState("todos");

  const filtered = active === "todos"
    ? passeios
    : passeios.filter((p) => p.categoria === active);

  // Na view "todos", priorizar os prioritários no topo
  const sorted = active === "todos"
    ? [...filtered].sort((a, b) => (b.prioritario ? 1 : 0) - (a.prioritario ? 1 : 0))
    : filtered;

  const waUrl = `${empresa.contato.whatsappLink}?text=${encodeURIComponent("Oi, quero montar um roteiro personalizado para João Pessoa")}`;

  return (
    <section style={{ background: '#fff', paddingBottom: 48 }}>

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
          {active === "todos" ? "Mais procurados" : "Passeios"}
        </div>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 600,
          color: '#092238', marginTop: 4, letterSpacing: '-0.01em',
        }}>
          {active === "todos"
            ? "Os passeios que ninguém pula."
            : CATEGORIAS.find((c) => c.slug === active)?.label ?? "Passeios"}
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
            loading={i < 2 ? "eager" : "lazy"}
          />
        ))}
        {sorted.length === 0 && (
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 14,
            color: '#5A6B78', padding: '24px 0',
          }}>
            Nenhum passeio nesta categoria ainda. Fale com o Murillo!
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
            Montar roteiro no WhatsApp →
          </a>
          <a
            href="/passeios"
            style={{
              display: 'block', marginTop: 12,
              fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
              color: '#107997', textDecoration: 'none',
            }}
          >
            Ver todos os {passeios.length} passeios →
          </a>
        </div>
      )}
    </section>
  );
}
