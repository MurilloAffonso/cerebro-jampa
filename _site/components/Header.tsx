/**
 * Header / Navigation
 *
 * Responsabilidades:
 * - Logo + Brand
 * - Menu navegação (Home, Passeios, Sobre, Blog quando existir)
 * - CTA WhatsApp (botão destaque em mobile)
 * - Mobile hamburger menu
 * - Sticky em scroll (para acesso rápido ao CTA)
 *
 * [PLACEHOLDER: Menu completo será implementado com dados de passeios]
 */

import Link from "next/link";
import { paginasInfo } from "@/data/empresa";

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-safe py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              VP
            </div>
            <span className="font-bold text-dark hidden sm:inline">
              Vem Passear
            </span>
          </Link>

          {/* Navigation (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-primary transition">
              Home
            </Link>
            <Link href="/passeios" className="hover:text-primary transition">
              Passeios
            </Link>
            <Link href="/sobre" className="hover:text-primary transition">
              Sobre
            </Link>
          </nav>

          {/* CTA WhatsApp */}
          <a
            href={paginasInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm md:text-base"
            aria-label="Agendar no WhatsApp"
          >
            💬 WhatsApp
          </a>

          {/* Mobile Menu Button (placeholder) */}
          <button className="md:hidden ml-4" aria-label="Menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
