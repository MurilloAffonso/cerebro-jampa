import Link from "next/link";
import { cn } from "@/lib/utils";
import { isCampoIndisponivel, limparConsultar } from "@/lib/consultar";

interface InfoCardProps {
  preco: string | null;
  duracao: string | null;
  saida: string | null;
  observacao?: string;
  whatsappUrl?: string;
  className?: string;
}

function CTAInline({ whatsappUrl }: { whatsappUrl?: string }) {
  const label = "Consultar no WhatsApp →";
  if (!whatsappUrl) return <span className="text-sm font-semibold text-whatsapp">{label}</span>;
  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-whatsapp hover:underline">
      {label}
    </Link>
  );
}

export function InfoCard({ preco, duracao, saida, observacao, whatsappUrl, className }: InfoCardProps) {
  const precoIndisponivel = isCampoIndisponivel(preco);
  const duracaoIndisponivel = isCampoIndisponivel(duracao);
  const saidaIndisponivel = isCampoIndisponivel(saida);
  const observacaoLimpa = observacao ? limparConsultar(observacao) : "";

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-black/[0.07]",
        className
      )}
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Preço */}
        <div className="flex items-start gap-4 p-6 md:p-8">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#107997" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-muted mb-1.5">Preço a partir de</p>
            {precoIndisponivel ? (
              <CTAInline whatsappUrl={whatsappUrl} />
            ) : (
              <p className="font-serif font-bold text-primary" style={{ fontSize: 'clamp(24px, 3vw, 32px)', lineHeight: 1 }}>
                {preco}
              </p>
            )}
          </div>
        </div>

        {/* Duração */}
        <div className="flex items-start gap-4 p-6 md:p-8 border-t md:border-t-0 md:border-l border-[#C5B7A3]/50">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#107997" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-muted mb-1.5">Duração</p>
            {duracaoIndisponivel ? (
              <CTAInline whatsappUrl={whatsappUrl} />
            ) : (
              <p className="font-serif font-bold text-dark" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: 1 }}>
                {duracao}
              </p>
            )}
          </div>
        </div>

        {/* Saída */}
        <div className="flex items-start gap-4 p-6 md:p-8 border-t md:border-t-0 md:border-l border-[#C5B7A3]/50">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#107997" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-muted mb-1.5">Saída</p>
            {saidaIndisponivel ? (
              <CTAInline whatsappUrl={whatsappUrl} />
            ) : (
              <p className="font-serif font-bold text-dark text-lg leading-tight">{saida}</p>
            )}
          </div>
        </div>
      </div>

      {observacaoLimpa && (
        <div className="px-6 md:px-8 pb-6 border-t border-black/[0.06]">
          <p className="text-sm text-muted italic pt-5">{observacaoLimpa}</p>
        </div>
      )}
    </div>
  );
}
