/**
 * not-found.tsx — Página 404 customizada
 * ISSUE-16
 */

import Link from "next/link";
import { empresa } from "@/data/empresa";

const WA_URL = `${empresa.contato.whatsappLink}?text=Oi%2C+preciso+de+ajuda+para+encontrar+um+passeio`;

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center container-safe py-16">
      <p className="text-6xl font-bold text-primary mb-4">404</p>
      <h1 className="text-2xl font-bold text-secondary mb-3">
        Página não encontrada
      </h1>
      <p className="text-muted max-w-md mb-10">
        O endereço que você acessou não existe ou foi movido.
        Use os links abaixo para continuar navegando.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
        <Link
          href="/"
          className="flex-1 border border-black/[0.12] hover:border-primary text-dark hover:text-primary font-medium px-6 py-3 rounded-full text-center transition-colors"
        >
          Ir para o início
        </Link>
        <Link
          href="/passeios"
          className="flex-1 bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-full text-center transition-colors"
        >
          Ver passeios
        </Link>
      </div>

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 bg-whatsapp hover:bg-[#1ea355] text-white font-bold px-8 py-3 rounded-full transition-colors"
        style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.3)" }}
      >
        💬 Falar com Murillo no WhatsApp
      </a>
    </div>
  );
}
