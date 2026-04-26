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
 */

import { cn } from "@/lib/utils";

interface InfoCardProps {
  preco: string;
  duracao: string;
  saida: string;
  observacao?: string;
  className?: string;
}

export function InfoCard({
  preco,
  duracao,
  saida,
  observacao,
  className,
}: InfoCardProps) {
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
          <p className="text-3xl font-bold text-primary">{preco}</p>
        </div>

        {/* Duração */}
        <div className="text-center border-t md:border-t-0 md:border-l border-gray-300 pt-6 md:pt-0 md:pl-8">
          <p className="text-sm text-gray-600 mb-2">Duração</p>
          <p className="text-2xl font-semibold text-dark">{duracao}</p>
        </div>

        {/* Saída */}
        <div className="text-center border-t md:border-t-0 md:border-l border-gray-300 pt-6 md:pt-0 md:pl-8">
          <p className="text-sm text-gray-600 mb-2">Saída</p>
          <p className="text-2xl font-semibold text-dark">{saida}</p>
        </div>
      </div>

      {/* Observação (ex: restrição de maré) */}
      {observacao && (
        <div className="mt-6 pt-6 border-t border-gray-300">
          <p className="text-sm text-gray-700 italic">{observacao}</p>
        </div>
      )}
    </div>
  );
}
