import { empresa } from "@/data/empresa";

interface MurilloBlockProps {
  whatsappUrl: string;
}

export function MurilloBlock({ whatsappUrl }: MurilloBlockProps) {
  const diferenciais = empresa.diferencial.split(" + ");

  return (
    <section className="section-padding" style={{ background: "#FAFAF8" }}>
      <div className="container-safe">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center max-w-5xl mx-auto">

          {/* Avatar */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div
                className="rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  width: "clamp(150px, 20vw, 220px)",
                  height: "clamp(150px, 20vw, 220px)",
                  background: "repeating-linear-gradient(45deg, #f0f4f8 0px, #f0f4f8 10px, #e2e8f0 10px, #e2e8f0 20px)",
                }}
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-serif font-bold text-2xl select-none">
                  M
                </div>
              </div>

              {/* Cadastur badge */}
              <div className="absolute bottom-2.5 -right-3.5 bg-white border border-gray-200 rounded-full px-3 py-1 shadow-md text-xs font-bold text-secondary whitespace-nowrap">
                Cadastur ✓
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
              Quem está por trás
            </p>

            <h2 className="font-serif font-bold text-3xl md:text-4xl text-dark mb-5 leading-tight">
              Por que a Vem Passear em Jampa?
            </h2>

            <blockquote className="border-l-[3px] border-primary pl-4 mb-6">
              <p className="text-gray-600 leading-relaxed italic text-base !text-gray-600">
                {empresa.missao}
              </p>
            </blockquote>

            <ul className="space-y-3 mb-7">
              {diferenciais.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7l3.5 3.5L12 3.5" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-400 mb-5">— {empresa.proprietario}, fundador</p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold px-6 py-3 rounded-full min-h-[44px] transition-colors text-sm"
              aria-label="Falar com Murillo no WhatsApp"
            >
              💬 Falar com Murillo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
