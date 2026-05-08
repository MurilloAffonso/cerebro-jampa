import { empresa } from "@/data/empresa";

interface MurilloBlockProps {
  whatsappUrl: string;
}

const DIFERENCIAIS = [
  {
    titulo: "Confiança comprovada",
    desc: "Cadastur ativo, Google 4.9 e centenas de turistas atendidos com segurança.",
  },
  {
    titulo: "Atendimento rápido",
    desc: "Resposta direta pelo WhatsApp — sem formulário, sem intermediário.",
  },
  {
    titulo: "Preço justo",
    desc: "Transparência total: preço, duração e o que está incluso. Sem surpresas.",
  },
  {
    titulo: "Conhecimento local",
    desc: "Murillo é paraibano, conhece cada maré, cada praia, cada horário certo.",
  },
];

export function MurilloBlock({ whatsappUrl }: MurilloBlockProps) {
  return (
    <section className="section-padding" style={{ background: "#F7F8F7" }}>
      <div className="container-safe">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center max-w-5xl mx-auto">

          {/* Lado esquerdo — avatar + nome + blockquote */}
          <div className="flex flex-col items-start gap-8">
            {/* Avatar placeholder */}
            <div className="relative">
              <div
                className="rounded-full overflow-hidden flex flex-col items-center justify-center gap-1.5 border-4 border-white"
                style={{
                  width: "clamp(150px, 20vw, 220px)",
                  height: "clamp(150px, 20vw, 220px)",
                  background: "repeating-linear-gradient(135deg, #e8e0d8 0px, #e8e0d8 2px, #f0ebe4 2px, #f0ebe4 14px)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                }}
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-serif font-bold text-2xl select-none">
                  M
                </div>
              </div>

              {/* Badge Cadastur flutuante */}
              <div
                className="absolute -bottom-1 -right-3 bg-white rounded-xl px-3 py-2 text-xs font-bold text-secondary whitespace-nowrap"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
              >
                <p className="text-[9px] font-normal text-muted mb-0.5">Cadastur</p>
                {empresa.cadastur}
              </div>
            </div>

            {/* Nome + blockquote */}
            <div>
              <p className="font-serif font-bold text-dark leading-tight mb-1" style={{ fontSize: "clamp(20px, 3vw, 28px)" }}>
                Affonso Murillo
              </p>
              <p className="text-sm text-muted mb-5">
                Fundador · Curadoria e Atendimento · João Pessoa
              </p>
              <blockquote
                className="m-0 pl-5 border-l-[3px] border-primary bg-white rounded-r-xl py-4 pr-5"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                <p className="font-serif italic text-base text-dark leading-relaxed m-0">
                  &ldquo;{empresa.missao}&rdquo;
                </p>
              </blockquote>
            </div>
          </div>

          {/* Lado direito — diferenciais + CTA */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
              Por que a Vem Passear em Jampa?
            </p>

            <h2 className="font-serif font-bold text-dark mb-9 leading-tight" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", letterSpacing: "-0.6px" }}>
              Um atendimento que você vai querer recomendar
            </h2>

            <ul className="space-y-5 mb-9">
              {DIFERENCIAIS.map((d) => (
                <li key={d.titulo} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-bold text-dark text-sm mb-1">{d.titulo}</p>
                    <p className="text-muted text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-secondary hover:bg-secondary/90 text-white font-bold px-6 py-3.5 rounded-full min-h-[48px] transition-all hover:-translate-y-0.5 text-sm"
              style={{ boxShadow: "0 4px 20px rgba(0,78,137,0.3)" }}
              aria-label="Falar com Murillo no WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.118 1.522 5.848L.057 23.292a.5.5 0 0 0 .651.651l5.444-1.465A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.535-5.209-1.462l-.374-.224-3.876 1.044 1.044-3.876-.224-.374A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
              Falar com Murillo agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
