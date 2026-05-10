/**
 * Footer
 *
 * Estrutura aprovada (ISSUE-07 / CONTEXT.md):
 *   Col 1 — Bloco institucional + dados de confiança
 *   Col 2 — Navegação (Início, Passeios, FAQ, Transfer, Excursões, Sobre)
 *   Col 3 — Contato + redes sociais
 *   Bottom — CNPJ · Cadastur · copyright
 *
 * Regras:
 *   - /sobre é página real (criada 2026-05-09) usando apenas dados confirmados
 *   - Blog aparece apenas no índice — slug individual ainda em preparação
 *   - Dados de confiança vindos exclusivamente de data/empresa.ts
 */

import Link from "next/link";
import { empresa, paginasInfo } from "@/data/empresa";

const CADASTUR_URL = "https://cadastur.turismo.gov.br/hotsite/#!/public/inicio";

export function Footer() {
  return (
    <footer className="text-white" style={{ background: "#092238" }}>
      <div className="container-safe py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14 mb-10">

          {/* ── Col 1: Sobre ── */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-serif font-bold text-xs select-none shrink-0">VP</div>
              <span className="font-bold text-white text-sm">{empresa.nome}</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Agência de turismo receptivo em João Pessoa, Paraíba. Murillo atende direto
              pelo WhatsApp — sem intermediários, com conhecimento local de quem vive aqui.
            </p>

            {/* Dados de confiança — links clicáveis */}
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li>
                <a
                  href={empresa.rede.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label={`Ver ${empresa.rating.totalAvaliacoes} avaliações reais no Google`}
                >
                  ⭐{" "}
                  <span className="text-white font-semibold">
                    {empresa.rating.valor}/5
                  </span>{" "}
                  no Google ({empresa.rating.totalAvaliacoes} avaliações)
                </a>
              </li>
              <li>
                <a
                  href={CADASTUR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Verificar registro Cadastur no portal do Ministério do Turismo"
                >
                  Cadastur{" "}
                  <span className="text-white font-semibold">{empresa.cadastur}</span>
                  {" "}— ativo até {empresa.cadasturValido}
                </a>
              </li>
            </ul>
          </div>

          {/* ── Col 2: Navegação ── */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-400 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/passeios" className="text-gray-300 hover:text-primary transition-colors">
                  Passeios em João Pessoa
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-primary transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/transfer-24h"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Transfer 24h
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/excursoes-e-grupos"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Excursões e Grupos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-primary transition-colors">
                  Sobre a Vem Passear
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Col 3: Contato ── */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-400 mb-4">
              Contato
            </h4>

            {/* CTA WhatsApp */}
            <a
              href={`${empresa.contato.whatsappLink}?text=Oi%2C+quero+informações+sobre+os+passeios`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors mb-5"
              aria-label="Falar no WhatsApp"
            >
              💬 {paginasInfo.whatsappDisplay}
            </a>

            {/* Redes sociais — somente as confirmadas em empresa.ts */}
            <ul className="space-y-2.5 text-sm">
              {empresa.rede.instagram.url && (
                <li>
                  <a
                    href={empresa.rede.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors"
                    aria-label="Instagram da Vem Passear"
                  >
                    Instagram{" "}
                    <span className="text-gray-500">{empresa.rede.instagram.handle}</span>
                  </a>
                </li>
              )}
              {empresa.rede.googleMaps && (
                <li>
                  <a
                    href={empresa.rede.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors"
                    aria-label="Ver no Google Maps"
                  >
                    Google Maps
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/[0.08] pt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-gray-500">
          <p>© 2026 {empresa.nome}. CNPJ {empresa.cnpj}. Todos os direitos reservados.</p>
          <p>
            <Link href="/faq" className="hover:text-gray-300 transition-colors">
              FAQ
            </Link>
            {" · "}
            <Link href="/servicos/transfer-24h" className="hover:text-gray-300 transition-colors">
              Transfer 24h
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
