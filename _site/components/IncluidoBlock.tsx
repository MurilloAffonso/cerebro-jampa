interface IncluidoBlockProps {
  incluso?: string[];
  naoIncluso?: string[];
}

export function IncluidoBlock({ incluso, naoIncluso }: IncluidoBlockProps) {
  if (!incluso?.length && !naoIncluso?.length) return null;

  return (
    <section className="section-padding" style={{ background: "#F7F8F7" }}>
      <div className="container-safe max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
          O que inclui
        </p>
        <h2 className="mb-8">O que está incluso (e o que não está)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {incluso && incluso.length > 0 && (
            <div className="bg-white rounded-2xl p-6 border-l-[3px] border-l-[#1A6B52]" style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
              <h3 className="font-bold text-[15px] text-dark mb-4 flex items-center gap-2.5" style={{ fontSize: '15px' }}>
                <span className="w-6 h-6 rounded-lg bg-[#1A6B52]/10 flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1A6B52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                Está incluso
              </h3>
              <ul className="space-y-2.5">
                {incluso.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-dark/80 leading-relaxed">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A6B52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {naoIncluso && naoIncluso.length > 0 && (
            <div className="bg-white rounded-2xl p-6 border-l-[3px] border-l-[#C5B7A3]" style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
              <h3 className="font-bold text-dark mb-4 flex items-center gap-2.5" style={{ fontSize: '15px' }}>
                <span className="w-6 h-6 rounded-lg bg-black/5 flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
                Não está incluso
              </h3>
              <ul className="space-y-2.5">
                {naoIncluso.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" className="mt-0.5 shrink-0" aria-hidden="true">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
