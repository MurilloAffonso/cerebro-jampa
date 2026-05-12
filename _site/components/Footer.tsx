"use client";

import Image from "next/image";
import Link from "next/link";
import { empresa, paginasInfo } from "@/data/empresa";

const CADASTUR_URL = "https://cadastur.turismo.gov.br/cadastur/#!/public/qrcode/52077577000103";

export function Footer() {
  return (
    <footer style={{ background: 'var(--cor-primaria)', color: '#fff' }}>
      <div className="container-safe py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 mb-12">

          {/* ── Col 1: Institucional ── */}
          <div>
            {/* Logo (versão branca transparente — combina com fundo azul do footer) */}
            <div className="mb-6">
              <Link href="/" aria-label="Vem Passear em Jampa — Página inicial">
                <Image
                  src="/images/logo/logo-transparente.png"
                  alt="Vem Passear em Jampa"
                  width={280}
                  height={94}
                  style={{ height: '88px', width: 'auto', display: 'block' }}
                />
              </Link>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'rgba(197, 183, 163, 0.82)',
                marginBottom: '20px',
                maxWidth: '280px',
              }}
            >
              Turismo receptivo em João Pessoa, Paraíba. Murillo atende direto
              pelo WhatsApp — sem intermediários, com conhecimento local de quem vive aqui.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a
                  href={empresa.rede.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver ${empresa.rating.totalAvaliacoes} avaliações reais no Google`}
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    color: 'rgba(197, 183, 163, 0.72)',
                    textDecoration: 'none',
                    transition: 'color 150ms',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--cor-acento-suave)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(197, 183, 163, 0.72)')}
                >
                  <span style={{ color: 'var(--cor-acento-suave)' }}>★</span>{' '}
                  <strong style={{ color: '#fff' }}>{empresa.rating.valor}/5</strong>{' '}
                  no Google ({empresa.rating.totalAvaliacoes} avaliações)
                </a>
              </li>
              <li>
                <a
                  href={CADASTUR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Verificar registro Cadastur no portal do Ministério do Turismo"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    color: 'rgba(197, 183, 163, 0.72)',
                    textDecoration: 'none',
                    transition: 'color 150ms',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--cor-acento-suave)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(197, 183, 163, 0.72)')}
                >
                  Cadastur{' '}
                  <strong style={{ color: '#fff' }}>{empresa.cadastur}</strong>
                  {' '}— ativo até {empresa.cadasturValido}
                </a>
              </li>
            </ul>
          </div>

          {/* ── Col 2: Navegação ── */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '12px',
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: 'var(--cor-acento)',
                marginBottom: '16px',
              }}
            >
              Navegação
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Início',                  href: '/' },
                { label: 'Passeios em João Pessoa', href: '/passeios' },
                { label: 'Perguntas Frequentes',    href: '/faq' },
                { label: 'Transfer 24h',            href: '/servicos/transfer-24h' },
                { label: 'Excursões e Grupos',      href: '/servicos/excursoes-e-grupos' },
                { label: 'Sobre a Vem Passear',     href: '/sobre' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '14px',
                      color: 'rgba(197, 183, 163, 0.75)',
                      textDecoration: 'none',
                      transition: 'color 150ms',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(197, 183, 163, 0.75)')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contato ── */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '12px',
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: 'var(--cor-acento)',
                marginBottom: '16px',
              }}
            >
              Contato
            </h4>

            <a
              href={`${empresa.contato.whatsappLink}?text=Oi%2C+quero+informações+sobre+os+passeios`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com Murillo no WhatsApp"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--cor-acento)',
                color: '#fff',
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '14px',
                padding: '12px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                marginBottom: '20px',
                boxShadow: 'var(--sombra-cta)',
                transition: 'all 200ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <IconWhatsApp />
              {paginasInfo.whatsappDisplay}
            </a>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {empresa.rede.instagram.url && (
                <li>
                  <a
                    href={empresa.rede.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram da Vem Passear"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '14px',
                      color: 'rgba(197, 183, 163, 0.75)',
                      textDecoration: 'none',
                      transition: 'color 150ms',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(197, 183, 163, 0.75)')}
                  >
                    Instagram{' '}
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
                      {empresa.rede.instagram.handle}
                    </span>
                  </a>
                </li>
              )}
              {empresa.rede.googleMaps && (
                <li>
                  <a
                    href={empresa.rede.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver no Google Maps"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '14px',
                      color: 'rgba(197, 183, 163, 0.75)',
                      textDecoration: 'none',
                      transition: 'color 150ms',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(197, 183, 163, 0.75)')}
                  >
                    Google Maps
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'flex-start',
          }}
          className="sm:flex-row sm:justify-between sm:items-center"
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.35)',
              margin: 0,
            }}
          >
            © 2026 {empresa.nome}. CNPJ {empresa.cnpj}. Todos os direitos reservados.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              fontFamily: 'var(--font-inter)',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            <Link
              href="/faq"
              style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 150ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              FAQ
            </Link>
            <Link
              href="/servicos/transfer-24h"
              style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 150ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              Transfer 24h
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function IconWhatsApp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
