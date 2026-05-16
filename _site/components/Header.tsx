"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { empresa } from "@/data/empresa";
import { LanguageSelector } from "@/components/LanguageSelector";

const WA_URL = `${empresa.contato.whatsappLink}?text=Oi%2C+quero+informações+sobre+os+passeios`;

const CATEGORIA_SLUGS = [
  { key: "pacotes",           slug: "pacotes" },
  { key: "litoralSul",       slug: "litoral-sul" },
  { key: "litoralNorte",     slug: "litoral-norte" },
  { key: "piscinasNaturais", slug: "piscinas-naturais" },
  { key: "cityTour",         slug: "city-tour" },
  { key: "interestaduais",   slug: "interestaduais" },
] as const;

const SERVICO_SLUGS = [
  { key: "transfer24h",      slug: "transfer-24h" },
  { key: "excursoesGrupos",  slug: "excursoes-e-grupos" },
] as const;

export function Header() {
  const t  = useTranslations("Nav");
  const tC = useTranslations("Categorias");
  const tS = useTranslations("Servicos");

  const [mobileOpen, setMobileOpen]     = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicosOpen, setServicosOpen] = useState(false);
  const [scrolled, setScrolled]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const linkColor      = scrolled ? "var(--cor-texto-escuro)" : "rgba(255,255,255,0.92)";
  const linkHoverColor = scrolled ? "var(--cor-primaria)"     : "#fff";
  const lineColor      = scrolled ? "var(--cor-primaria)"     : "rgba(255,255,255,0.9)";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "var(--header-h)",
        display: "flex",
        alignItems: "center",
        transition: "background 280ms ease, border-color 280ms ease",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        background: scrolled ? "rgba(250,250,247,0.97)" : "transparent",
        borderBottom: `1px solid ${scrolled ? "var(--cor-borda)" : "transparent"}`,
      }}
    >
      <div className="container-safe w-full">
        <div className="flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="shrink-0"
            onClick={closeMobile}
            aria-label="Vem Passear em Jampa — Página inicial"
          >
            <Image
              src={scrolled
                ? "/images/logo/logo-azul-transparente.png"
                : "/images/logo/logo-transparente.png"
              }
              alt="Vem Passear em Jampa"
              width={500}
              height={167}
              style={{
                height: "180px",
                width: "auto",
                objectFit: "contain",
                transition: "opacity 180ms",
              }}
              priority
            />
          </Link>

          {/* ── Nav desktop ── */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">

            <NavLink href="/" color={linkColor} hoverColor={linkHoverColor}>{t("inicio")}</NavLink>

            {/* Passeios dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href="/passeios"
                className="flex items-center gap-1 py-2 transition-colors"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: linkColor,
                  textDecoration: "none",
                  transition: "color 150ms",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = linkHoverColor)}
                onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
              >
                {t("passeios")}
                <span style={{ fontSize: "10px", opacity: 0.5 }} aria-hidden="true">▾</span>
              </Link>

              {dropdownOpen && (
                <ul
                  className="absolute top-full left-0 py-2"
                  role="menu"
                  style={{
                    background: "var(--cor-fundo-puro)",
                    border: "1px solid var(--cor-borda)",
                    borderRadius: "12px",
                    minWidth: "220px",
                    boxShadow: "var(--sombra-hover)",
                  }}
                >
                  {CATEGORIA_SLUGS.map(({ key, slug }) => (
                    <li key={slug} role="none">
                      <Link
                        href={`/passeios/${slug}`}
                        role="menuitem"
                        onClick={() => setDropdownOpen(false)}
                        style={{
                          display: "block",
                          padding: "10px 16px",
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "var(--cor-texto-medio)",
                          textDecoration: "none",
                          transition: "color 150ms, background 150ms",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = "var(--cor-primaria)";
                          e.currentTarget.style.background = "var(--cor-fundo)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = "var(--cor-texto-medio)";
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        {tC(key)}
                      </Link>
                    </li>
                  ))}

                  <li role="separator" aria-hidden="true">
                    <hr style={{ border: "none", borderTop: "1px solid var(--cor-borda)", margin: "6px 12px" }} />
                  </li>
                  <li role="none">
                    <Link
                      href="/tabua-de-mares-joao-pessoa"
                      role="menuitem"
                      onClick={() => setDropdownOpen(false)}
                      style={{
                        display: "block",
                        padding: "10px 16px",
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--cor-primaria)",
                        textDecoration: "none",
                        transition: "color 150ms, background 150ms",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = "var(--cor-fundo)"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                    >
                      {t("tabuaMare")}
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Serviços dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicosOpen(true)}
              onMouseLeave={() => setServicosOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicosOpen}
                aria-haspopup="menu"
                className="flex items-center gap-1 py-2"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: linkColor,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 0",
                  transition: "color 150ms",
                }}
              >
                {t("servicos")}
                <span style={{ fontSize: "10px", opacity: 0.5 }} aria-hidden="true">▾</span>
              </button>

              {servicosOpen && (
                <ul
                  className="absolute top-full left-0 py-2"
                  role="menu"
                  style={{
                    background: "var(--cor-fundo-puro)",
                    border: "1px solid var(--cor-borda)",
                    borderRadius: "12px",
                    minWidth: "210px",
                    boxShadow: "var(--sombra-hover)",
                  }}
                >
                  {SERVICO_SLUGS.map(({ key, slug }) => (
                    <li key={slug} role="none">
                      <Link
                        href={`/servicos/${slug}`}
                        role="menuitem"
                        onClick={() => setServicosOpen(false)}
                        style={{
                          display: "block",
                          padding: "10px 16px",
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "var(--cor-texto-medio)",
                          textDecoration: "none",
                          transition: "color 150ms, background 150ms",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = "var(--cor-primaria)";
                          e.currentTarget.style.background = "var(--cor-fundo)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = "var(--cor-texto-medio)";
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        {tS(key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <NavLink href="/sobre" color={linkColor} hoverColor={linkHoverColor}>{t("sobre")}</NavLink>
            <NavLink href="/faq" color={linkColor} hoverColor={linkHoverColor}>{t("faq")}</NavLink>
            <NavLink href="/blog" color={linkColor} hoverColor={linkHoverColor}>{t("blog")}</NavLink>
          </nav>

          {/* ── CTA + Language Selector + Hamburger ── */}
          <div className="flex items-center gap-2 shrink-0">

            {/* Seletor de idioma */}
            <LanguageSelector scrolled={scrolled} />

            {/* WhatsApp CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reservar no WhatsApp"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "var(--cor-whatsapp)",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "13px",
                padding: "10px 16px",
                borderRadius: "999px",
                minHeight: "40px",
                textDecoration: "none",
                boxShadow: "0 2px 12px rgba(37,211,102,0.3)",
                transition: "background 200ms",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#1ea355")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--cor-whatsapp)")}
            >
              <IconWhatsApp />
              <span className="hidden sm:inline">{t("reservarWhatsapp")}</span>
              <span className="sm:hidden">{t("whatsappShort")}</span>
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg"
              aria-label={mobileOpen ? t("fecharMenu") : t("abrirMenu")}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              style={{ background: "transparent", border: "none", cursor: "pointer" }}
            >
              <span style={{ display: "block", width: "20px", height: "2px", background: lineColor, borderRadius: "2px", transition: "transform 200ms", transform: mobileOpen ? "rotate(45deg) translate(3px, 5px)" : "none" }} />
              <span style={{ display: "block", width: "20px", height: "2px", background: lineColor, borderRadius: "2px", transition: "opacity 200ms", opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: "20px", height: "2px", background: lineColor, borderRadius: "2px", transition: "transform 200ms", transform: mobileOpen ? "rotate(-45deg) translate(3px, -5px)" : "none" }} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0"
          style={{
            borderTop: "1px solid var(--cor-borda)",
            background: "var(--cor-fundo-puro)",
          }}
        >
          <nav className="container-safe py-4 flex flex-col gap-1" aria-label="Menu mobile">
            <MobileLink href="/" onClick={closeMobile}>{t("inicio")}</MobileLink>

            <div>
              <MobileLink href="/passeios" onClick={closeMobile}>{t("passeios")}</MobileLink>
              <div className="pl-5 mt-1 flex flex-col gap-0.5">
                {CATEGORIA_SLUGS.map(({ key, slug }) => (
                  <Link
                    key={slug}
                    href={`/passeios/${slug}`}
                    onClick={closeMobile}
                    style={{
                      display: "block",
                      padding: "8px 12px",
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      color: "var(--cor-texto-medio)",
                      textDecoration: "none",
                      borderRadius: "8px",
                    }}
                  >
                    {tC(key)}
                  </Link>
                ))}
                <Link
                  href="/tabua-de-mares-joao-pessoa"
                  onClick={closeMobile}
                  style={{
                    display: "block",
                    padding: "8px 12px",
                    marginTop: "4px",
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--cor-primaria)",
                    textDecoration: "none",
                    borderRadius: "8px",
                    borderTop: "1px solid var(--cor-borda)",
                    paddingTop: "12px",
                  }}
                >
                  {t("tabuaMare")}
                </Link>
              </div>
            </div>

            <div>
              <p style={{ padding: "10px 12px", fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "15px", color: "var(--cor-texto-escuro)" }}>
                {t("servicos")}
              </p>
              <div className="pl-5 mt-1 flex flex-col gap-0.5">
                {SERVICO_SLUGS.map(({ key, slug }) => (
                  <Link
                    key={slug}
                    href={`/servicos/${slug}`}
                    onClick={closeMobile}
                    style={{
                      display: "block",
                      padding: "8px 12px",
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      color: "var(--cor-texto-medio)",
                      textDecoration: "none",
                      borderRadius: "8px",
                    }}
                  >
                    {tS(key)}
                  </Link>
                ))}
              </div>
            </div>

            <MobileLink href="/sobre" onClick={closeMobile}>{t("sobre")}</MobileLink>
            <MobileLink href="/faq" onClick={closeMobile}>{t("faq")}</MobileLink>
            <MobileLink href="/blog" onClick={closeMobile}>{t("blog")}</MobileLink>

            {/* Language selector no mobile */}
            <div style={{ padding: "8px 12px", marginTop: "4px" }}>
              <LanguageSelector scrolled={true} />
            </div>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginTop: "12px",
                background: "var(--cor-whatsapp)",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "15px",
                padding: "14px 20px",
                borderRadius: "999px",
                minHeight: "48px",
                textDecoration: "none",
              }}
            >
              <IconWhatsApp />
              {t("reservarWhatsapp")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ── Helpers ────────────────────────────────────────────── */
function NavLink({
  href,
  children,
  color,
  hoverColor,
}: {
  href: string;
  children: React.ReactNode;
  color: string;
  hoverColor: string;
}) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        fontSize: "14px",
        color,
        textDecoration: "none",
        transition: "color 150ms",
      }}
      onMouseEnter={e => (e.currentTarget.style.color = hoverColor)}
      onMouseLeave={e => (e.currentTarget.style.color = color)}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{
        display: "block",
        padding: "10px 12px",
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        fontSize: "15px",
        color: "var(--cor-texto-escuro)",
        textDecoration: "none",
        borderRadius: "8px",
      }}
    >
      {children}
    </Link>
  );
}

function IconWhatsApp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
