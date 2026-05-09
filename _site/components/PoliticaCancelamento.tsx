/**
 * PoliticaCancelamento — bloco de transparência exibido no rodapé das páginas
 * de passeio. Texto restrito ao que está confirmado em
 * `_conhecimento/politica-cancelamento-base.md` (cenário de maré/clima).
 *
 * Demais cenários (cancelamento pelo cliente, no-show, prazos exatos) ficam
 * sob "avalie comigo no WhatsApp" enquanto a Decisão #29 segue pendente.
 * Não inventar prazo, percentual ou exceção sem aprovação de Murillo.
 */

interface PoliticaCancelamentoProps {
  whatsappUrl: string;
}

export function PoliticaCancelamento({ whatsappUrl }: PoliticaCancelamentoProps) {
  return (
    <section className="container-safe max-w-3xl py-8 md:py-10" aria-label="Política de cancelamento">
      <div
        className="rounded-2xl border border-[#C5B7A3]/50 bg-[#F7F8F7] p-6 md:p-7"
      >
        <p className="text-xs font-bold uppercase tracking-[2.5px] text-[#107997] mb-3">
          Cancelamento e remarcação
        </p>
        <h2 className="font-serif font-bold text-secondary text-lg md:text-xl mb-4">
          Como funciona se a viagem precisar mudar
        </h2>

        <ul className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
          <li className="flex items-start gap-3">
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: "rgba(16,121,151,0.12)" }}
              aria-hidden="true"
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#107997" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>
              <strong className="text-dark">Maré ou clima desfavorável:</strong>{" "}
              Murillo avisa com antecedência pelo WhatsApp e a remarcação é gratuita —
              sem cobrança de taxa.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: "rgba(16,121,151,0.12)" }}
              aria-hidden="true"
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#107997" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>
              <strong className="text-dark">Outras situações:</strong>{" "}
              cancelamento, mudança de data, número de pessoas — fale comigo no
              WhatsApp que avalio caso a caso, com transparência.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: "rgba(16,121,151,0.12)" }}
              aria-hidden="true"
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#107997" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>
              <strong className="text-dark">Canal único:</strong>{" "}
              tudo é combinado e registrado por WhatsApp — você fala direto comigo,
              sem intermediário.
            </span>
          </li>
        </ul>

        <div className="mt-5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-secondary hover:text-primary transition-colors border-b-2 border-secondary/30 hover:border-primary pb-0.5"
          >
            Consultar política específica do meu passeio no WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
