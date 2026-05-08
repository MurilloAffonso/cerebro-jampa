import { empresa } from "@/data/empresa";

const ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: "#004E89",
    titulo: (e: typeof empresa) => `Cadastur ${e.cadastur} — Ativo`,
    desc: () => "Agência registrada no Ministério do Turismo. Operação legal, segura, verificada.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    color: "#FF6B35",
    titulo: (e: typeof empresa) => `${e.rating.valor}/5 no Google`,
    desc: (e: typeof empresa) => `${e.rating.totalAvaliacoes} avaliações. Atendimento rápido, organização e confiança — o que os turistas sempre comentam.`,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    color: "#1A6B52",
    titulo: () => "Murillo — Atendimento direto",
    desc: () => "Você fala com Murillo, não com atendente. Conhece cada maré, cada praia, cada horário certo.",
  },
];

export function TrustBlock() {
  return (
    <section className="bg-dark text-white" aria-label="Por que confiar na Vem Passear">
      <div className="container-safe py-10 md:py-14">
        <p className="text-xs font-bold uppercase tracking-[2.5px] text-[#C5B7A3] mb-3">
          Por que confiar
        </p>
        <h2 className="text-white mb-8 md:mb-10" style={{ fontSize: 'clamp(22px, 3vw, 34px)', letterSpacing: '-0.5px' }}>
          Segurança e confiança comprovadas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: `${item.color}33`, color: item.color }}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1.5" style={{ fontSize: '15px', letterSpacing: 0 }}>
                  {item.titulo(empresa)}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed" style={{ fontSize: '14px' }}>
                  {item.desc(empresa)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
