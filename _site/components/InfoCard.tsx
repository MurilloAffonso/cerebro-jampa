/**
 * InfoCard Component
 *
 * Card informacional com 3 colunas:
 * - Preço (destaque)
 * - Duração
 * - Horário/Saída
 *
 * Sempre visível na página de passeio (CRO: preço transparente)
 * Responsivo: stack mobile, grid desktop
 *
 * Campos "[CONSULTAR]" ou null → exibe CTA WhatsApp em vez do valor ausente.
 */

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
  const label = "Consultar pelo WhatsApp →";
  if (!whatsappUrl) {
    return <span className="text-sm font-semibold text-[#25D366]">{label}</span>;
  }
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-semibold text-[#25D366] hover:underline"
    >
      {label}
    </Link>
  );
}

export function InfoCard({
  preco,
  duracao,
  saida,
  observacao,
  whatsappUrl,
  className,
}: InfoCardProps) {
  const precoIndisponivel = isCampoIndisponivel(preco);
  const duracaoIndisponivel = isCampoIndisponivel(duracao);
  const saidaIndisponivel = isCampoIndisponivel(saida);

  const observacaoLimpa = observacao ? limparConsultar(observacao) : "";

  return (
    <div
      className={cn(
        "bg-light rounded-lg p-6 md:p-8",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Preço */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Preço a partir de</p>
          {precoIndisponivel ? (
            <CTAInline whatsappUrl={whatsappUrl} />
          ) : (
            <p className="text-3xl font-bold text-primary">{preco}</p>
          )}
        </div>

        {/* Duração */}
        <div className="text-center border-t md:border-t-0 md:border-l border-gray-300 pt-6 md:pt-0 md:pl-8">
          <p className="text-sm text-gray-600 mb-2">Duração</p>
          {duracaoIndisponivel ? (
            <CTAInline whatsappUrl={whatsappUrl} />
          ) : (
            <p className="text-2xl font-semibold text-dark">{duracao}</p>
          )}
        </div>

        {/* Saída */}
        <div className="text-center border-t md:border-t-0 md:border-l border-gray-300 pt-6 md:pt-0 md:pl-8">
          <p className="text-sm text-gray-600 mb-2">Saída</p>
          {saidaIndisponivel ? (
            <CTAInline whatsappUrl={whatsappUrl} />
          ) : (
            <p className="text-2xl font-semibold text-dark">{saida}</p>
          )}
        </div>
      </div>

      {/* Observação — exibe apenas o texto confirmado (remove cláusulas [CONSULTAR]) */}
      {observacaoLimpa && (
        <div className="mt-6 pt-6 border-t border-gray-300">
          <p className="text-sm text-gray-700 italic">{observacaoLimpa}</p>
        </div>
      )}
    </div>
  );
}
