'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { CronogramaPasseio } from '@/data/cronogramas'

interface PasseioCronogramaProps {
  cronograma: CronogramaPasseio
}

export function PasseioCronograma({ cronograma }: PasseioCronogramaProps) {
  const [open, setOpen] = useState(false)
  const last = cronograma.paradas.length - 1

  return (
    <div style={{ background: '#fff', borderBottom: '1px solid #E6E9EB' }}>
      {/* Header / trigger */}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          background: '#F7F8F7',
          border: '1px solid #E6E9EB',
          borderRadius: 12,
          padding: '16px 20px',
          cursor: 'pointer',
          textAlign: 'left',
          margin: '0',
        }}
      >
        <div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#107997',
            marginBottom: 4,
          }}>
            {cronograma.label}
          </div>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 15,
            fontWeight: 600,
            color: '#092238',
          }}>
            Veja o cronograma completo
          </div>
        </div>

        {/* Chevron */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#107997"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{
            flexShrink: 0,
            transition: 'transform 300ms ease-out',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Accordion content */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: open ? '1fr' : '0fr',
          transition: 'grid-template-rows 300ms ease-out',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <ul
            role="list"
            style={{
              listStyle: 'none',
              margin: 0,
              padding: '16px 20px 20px',
              position: 'relative',
            }}
          >
            {cronograma.paradas.map((parada, i) => {
              const isLast = i === last
              return (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 14,
                    paddingBottom: isLast ? 0 : 18,
                    position: 'relative',
                  }}
                >
                  {/* Vertical connecting line — not on last item */}
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        left: 13,
                        top: 28,
                        bottom: 0,
                        width: 2,
                        background: '#E6E9EB',
                        zIndex: 0,
                      }}
                    />
                  )}

                  {/* Badge column */}
                  <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
                    <div style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: isLast ? '#107997' : '#092238',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: 12,
                      color: '#fff',
                    }}>
                      {isLast ? (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : parada.n}
                    </div>
                    {isLast && (
                      <div style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 10,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#107997',
                        marginTop: 3,
                      }}>
                        FIM
                      </div>
                    )}
                  </div>

                  {/* Thumbnail */}
                  <div style={{
                    flexShrink: 0,
                    width: 56,
                    height: 56,
                    borderRadius: 8,
                    overflow: 'hidden',
                    background: '#F7F8F7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {parada.foto ? (
                      <Image
                        src={parada.foto}
                        alt={parada.titulo}
                        width={56}
                        height={56}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <FallbackIcon />
                    )}
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 15,
                      fontWeight: 600,
                      color: '#092238',
                      lineHeight: 1.2,
                      marginBottom: 3,
                    }}>
                      {parada.titulo}
                    </div>
                    <div style={{
                      fontFamily: 'monospace',
                      fontSize: 13,
                      color: '#5A6B78',
                      marginBottom: 4,
                    }}>
                      {parada.hora}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      lineHeight: 1.4,
                      color: '#0E1A24',
                    }}>
                      {parada.desc}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

function FallbackIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B0BEC5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
