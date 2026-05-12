/**
 * CadasturCertificate — Bloco de credibilidade com certificado oficial
 *
 * Mostra a imagem real do Cadastur (Ministério do Turismo) lado a lado
 * com selo de validação. Clicável para abrir em tamanho real.
 */

'use client'

import { useState } from 'react'
import { empresa } from '@/data/empresa'

const CADASTUR_URL = 'https://cadastur.turismo.gov.br/cadastur/#!/public/qrcode/52077577000103'
const CERT_IMG = '/credenciais/cadastur-certificado.jpeg'

export function CadasturCertificate() {
  const [open, setOpen] = useState(false)

  return (
    <section
      aria-label="Empresa registrada no Cadastur"
      style={{ background: 'var(--cor-fundo-puro)', padding: '72px 0' }}
    >
      <div className="container-safe">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            alignItems: 'center',
          }}
          className="md:grid-cols-[5fr_7fr] md:gap-12"
        >
          {/* ── Certificado (imagem clicável) ── */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ampliar o certificado Cadastur"
            style={{
              all: 'unset',
              cursor: 'zoom-in',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--sombra-hover)',
              border: '1px solid var(--cor-borda)',
              display: 'block',
              background: 'var(--cor-fundo)',
              transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(9,34,56,0.18)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'var(--sombra-hover)'
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CERT_IMG}
              alt="Certificado oficial Cadastur — Ministério do Turismo"
              loading="lazy"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </button>

          {/* ── Texto ── */}
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                color: '#15803D',
                fontFamily: 'var(--font-inter)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              <CheckIcon /> Registro Ativo
            </span>

            <h2
              className="font-serif"
              style={{
                color: 'var(--cor-primaria)',
                fontSize: 'clamp(28px, 3.6vw, 38px)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                margin: '0 0 16px',
              }}
            >
              Empresa legal,<br />certificada pelo Ministério do Turismo.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                lineHeight: 1.65,
                color: 'var(--cor-texto-medio)',
                margin: '0 0 22px',
                maxWidth: '520px',
              }}
            >
              Nosso registro no Cadastur é a prova oficial de que somos uma agência de
              turismo regularizada no Brasil. Você reserva com segurança — sem improviso,
              sem golpe, sem dor de cabeça.
            </p>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <InfoRow label="CNPJ" value={empresa.cnpj} />
              <InfoRow
                label="Validade"
                value={`até ${formatarData(empresa.cadasturValido)}`}
              />
            </ul>

            <a
              href={CADASTUR_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--cor-primaria)',
                borderBottom: '2px solid rgba(16,121,151,0.25)',
                paddingBottom: '2px',
                textDecoration: 'none',
              }}
            >
              Verificar no portal do Cadastur →
            </a>
          </div>
        </div>
      </div>

      {/* ── Modal/Lightbox ── */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Certificado Cadastur ampliado"
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(9, 34, 56, 0.88)',
            backdropFilter: 'blur(8px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            cursor: 'zoom-out',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CERT_IMG}
            alt="Certificado oficial Cadastur ampliado"
            style={{
              maxWidth: '100%',
              maxHeight: '90vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
            }}
          />
          <button
            type="button"
            aria-label="Fechar"
            onClick={(e) => {
              e.stopPropagation()
              setOpen(false)
            }}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
      )}
    </section>
  )
}

/* ── Helpers ─────────────────────────────────────────────── */

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <li
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        paddingLeft: '14px',
        borderLeft: '3px solid var(--cor-borda)',
      }}
    >
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
        {label}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '15px',
          fontWeight: 500,
          color: 'var(--cor-texto-escuro)',
        }}
      >
        {value}
      </span>
    </li>
  )
}

function formatarData(iso: string) {
  // ISO esperado: AAAA-MM-DD
  const [a, m, d] = iso.split('-')
  return `${d}/${m}/${a}`
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
