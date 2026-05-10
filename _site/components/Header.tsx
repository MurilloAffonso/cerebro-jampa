"use client";

/**
 * Header / Navigation
 *
 * Menu aprovado (CONTEXT.md / ISSUE-06):
 *   Desktop: Início | Passeios ▾ (6 categorias) | Serviços | [Reservar no WhatsApp]
 *   Mobile:  hamburger → lista com sub-itens de categoria
 *
 * Regras:
 *   - /sobre NÃO aparece no menu
 *   - Blog NÃO aparece no menu (Fase 2)
 *   - CTA WhatsApp sempre visível
 *   - Dados de contato vindos exclusivamente de data/empresa.ts
 */

import { useState } from "react";
import Link from "next/link";
import { empresa } from "@/data/empresa";

const WA_URL = `${empresa.contato.whatsappLink}?text=Oi%2C+quero+informações+sobre+os+passeios`;

const CATEGORIAS = [
  { nome: "Pacotes",          slug: "pacotes" },
  { nome: "Litoral Sul",      slug: "litoral-sul" },
  { nome: "Litoral Norte",    slug: "litoral-norte" },
  { nome: "Piscinas Naturais", slug: "piscinas-naturais" },
  { nome: "City Tour",        slug: "city-tour" },
  { nome: "Interestaduais",   slug: "interestaduais" },
] as const;

const SERVICOS = [
  { nome: "Transfer 24h",          slug: "transfer-24h" },
  { nome: "Excursões e Grupos",    slug: "excursoes-e-grupos" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicosOpen, setServicosOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F7F8F7]/95 border-b border-black/[0.07]">
      <div className="container-safe py-3">
        <div className="flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            onClick={closeMobile}
          >
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white font-serif font-bold text-sm select-none">
              VP
            </div>
            <div className="hidden sm:block leading-tight">
              <span className="font-bold text-dark text-sm block">Vem Passear</span>
              <span className="text-gray-500 text-[11px]">em Jampa</span>
            </div>
          </Link>

          {/* ── Nav desktop ── */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-dark hover:text-primary transition-colors">
              Início
            </Link>

            {/* Passeios + dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href="/passeios"
                className="flex items-center gap-1 text-dark hover:text-primary transition-colors py-2"
              >
                Passeios
                <span className="text-[10px] leading-none" aria-hidden="true">▾</span>
              </Link>

              {dropdownOpen && (
                <ul
                  className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[190px] border border-gray-100"
                  role="menu"
                >
                  {CATEGORIAS.map((cat) => (
                    <li key={cat.slug} role="none">
                      <Link
                        href={`/passeios/${cat.slug}`}
                        role="menuitem"
                        className="block px-4 py-2.5 text-sm text-dark hover:bg-light hover:text-primary transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {cat.nome}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Serviços + dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicosOpen(true)}
              onMouseLeave={() => setServicosOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-dark hover:text-primary transition-colors py-2"
                aria-expanded={servicosOpen}
                aria-haspopup="menu"
              >
                Serviços
                <span className="text-[10px] leading-none" aria-hidden="true">▾</span>
              </button>

              {servicosOpen && (
                <ul
                  className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[210px] border border-gray-100"
                  role="menu"
                >
                  {SERVICOS.map((srv) => (
                    <li key={srv.slug} role="none">
                      <Link
                        href={`/servicos/${srv.slug}`}
                        role="menuitem"
                        className="block px-4 py-2.5 text-sm text-dark hover:bg-light hover:text-primary transition-colors"
                        onClick={() => setServicosOpen(false)}
                      >
                        {srv.nome}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link
              href="/faq"
              className="text-dark hover:text-primary transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* ── CTA + hamburger ── */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ea355] text-white font-bold text-sm px-4 py-2.5 rounded-full min-h-[44px] flex items-center gap-1.5 transition-colors whitespace-nowrap shadow-[0_2px_12px_rgba(37,211,102,0.3)]"
              aria-label="Reservar no WhatsApp"
            >
              💬{" "}
              <span className="hidden sm:inline">Reservar no WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Hamburger button */}
            <button
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg hover:bg-light transition-colors"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span
                className={`block w-5 h-0.5 bg-dark transition-transform duration-200 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-dark transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-dark transition-transform duration-200 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="container-safe py-4 flex flex-col gap-1" aria-label="Menu mobile">
            <Link
              href="/"
              className="px-3 py-2.5 text-dark font-medium hover:bg-light hover:text-primary rounded-lg transition-colors"
              onClick={closeMobile}
            >
              Início
            </Link>

            {/* Passeios (expandido no mobile) */}
            <div>
              <Link
                href="/passeios"
                className="px-3 py-2.5 text-dark font-medium hover:bg-light hover:text-primary rounded-lg transition-colors block"
                onClick={closeMobile}
              >
                Passeios
              </Link>
              <div className="pl-5 mt-1 flex flex-col gap-0.5">
                {CATEGORIAS.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/passeios/${cat.slug}`}
                    className="px-3 py-2 text-sm text-gray-600 hover:bg-light hover:text-primary rounded-lg transition-colors"
                    onClick={closeMobile}
                  >
                    {cat.nome}
                  </Link>
                ))}
              </div>
            </div>

            {/* Serviços (expandido no mobile) */}
            <div>
              <p className="px-3 py-2.5 text-dark font-medium">Serviços</p>
              <div className="pl-5 mt-1 flex flex-col gap-0.5">
                {SERVICOS.map((srv) => (
                  <Link
                    key={srv.slug}
                    href={`/servicos/${srv.slug}`}
                    className="px-3 py-2 text-sm text-gray-600 hover:bg-light hover:text-primary rounded-lg transition-colors"
                    onClick={closeMobile}
                  >
                    {srv.nome}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/faq"
              className="px-3 py-2.5 text-dark font-medium hover:bg-light hover:text-primary rounded-lg transition-colors"
              onClick={closeMobile}
            >
              FAQ
            </Link>

            {/* CTA mobile */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-[#25D366] hover:bg-[#1ea355] text-white font-bold text-sm px-4 py-3 rounded-full flex items-center justify-center gap-2 min-h-[48px] transition-colors"
              onClick={closeMobile}
            >
              💬 Reservar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
