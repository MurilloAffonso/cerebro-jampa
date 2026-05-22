/**
 * not-found.tsx — Página 404 customizada
 * ISSUE-16
 */

import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const WA_URL = buildWhatsAppUrl("faq");

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center container-safe py-16">
      <p className="text-6xl font-bold text-primary mb-4">404</p>
      <h1 className="text-2xl font-bold text-secondary mb-3">
        Página não encontrada
      </h1>
      <p className="text-gray-600 max-w-md mb-10">
        O endereço que você acessou não existe ou foi movido.
        Use os links abaixo para continuar navegando.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
        <Link
          href="/"
          className="flex-1 border border-gray-300 hover:border-primary text-dark hover:text-primary font-medium px-6 py-3 rounded-lg text-center transition-colors"
        >
          Ir para o início
        </Link>
        <Link
          href="/passeios"
          className="flex-1 bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-lg text-center transition-colors"
        >
          Ver passeios
        </Link>
      </div>

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-primary hover:bg-accent text-white font-bold px-8 py-3 rounded-lg transition-colors"
      >
        💬 Falar com Murillo no WhatsApp
      </a>
    </div>
  );
}
