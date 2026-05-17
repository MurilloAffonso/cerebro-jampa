/**
 * PoliticaCancelamento — bloco de transparência exibido no rodapé das páginas
 * de passeio. Texto restrito ao que está confirmado em
 * `_conhecimento/politica-cancelamento-base.md` (cenário de maré/clima).
 *
 * Demais cenários (cancelamento pelo cliente, no-show, prazos exatos) ficam
 * sob "avalie comigo no WhatsApp" enquanto a Decisão #29 segue pendente.
 * Não inventar prazo, percentual ou exceção sem aprovação de Murillo.
 */

"use client";

import { useTranslations } from "next-intl";

interface PoliticaCancelamentoProps {
  whatsappUrl: string;
}

export function PoliticaCancelamento({ whatsappUrl }: PoliticaCancelamentoProps) {
  const t = useTranslations("Politica");

  return (
    <section className="container-safe max-w-3xl py-8 md:py-10" aria-label={t("titulo")}>
      <div className="rounded-2xl border border-[#C5B7A3]/50 bg-[#F7F8F7] p-6 md:p-7">
        <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
          {t("kicker")}
        </p>
        <h2 className="font-serif font-bold text-secondary text-lg md:text-xl mb-4">
          {t("titulo")}
        </h2>

        <ul className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
          <PoliticaItem label={t("mareLabel")} texto={t("mareTexto")} />
          <PoliticaItem label={t("outrasLabel")} texto={t("outrasTexto")} />
          <PoliticaItem label={t("canalLabel")} texto={t("canalTexto")} />
        </ul>

        <div className="mt-5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-secondary hover:text-primary transition-colors border-b-2 border-secondary/30 hover:border-primary pb-0.5"
          >
            {t("consultarCta")}
          </a>
        </div>
      </div>
    </section>
  );
}

function PoliticaItem({ label, texto }: { label: string; texto: string }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: "rgba(16,121,151,0.12)" }}
        aria-hidden="true"
      >
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 6l3 3 5-5"
            stroke="#107997"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>
        <strong className="text-dark">{label}</strong> {texto}
      </span>
    </li>
  );
}
