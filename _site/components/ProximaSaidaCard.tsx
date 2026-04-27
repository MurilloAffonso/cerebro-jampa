import Link from "next/link";
import type { ProximaSaidaCard as ProximaSaidaCardData } from "@/types/tabua-mares";
import { getStatusLabel } from "@/lib/tabua-mares";

interface ProximaSaidaCardProps {
  card: ProximaSaidaCardData | null;
  whatsappUrl: string;
}

const STATUS_COLORS = {
  excelente: "bg-green-100 text-green-800 border-green-300",
  boa: "bg-emerald-100 text-emerald-800 border-emerald-300",
  consultar: "bg-amber-100 text-amber-800 border-amber-300",
  "sem-passeio": "bg-red-100 text-red-800 border-red-300",
} as const;

export function ProximaSaidaCard({ card, whatsappUrl }: ProximaSaidaCardProps) {
  if (!card) {
    return (
      <div className="container-safe">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6 my-4">
          <div className="flex gap-3 items-start">
            <span className="text-xl flex-shrink-0" aria-hidden="true">📅</span>
            <div className="flex-1">
              <p className="font-semibold text-blue-900 text-sm md:text-base leading-snug">
                Consulte as próximas saídas disponíveis
              </p>
              <p className="text-blue-700 text-sm mt-1 leading-relaxed">
                As saídas dependem da tábua de marés. Entre em contato para verificar
                as datas disponíveis para o seu passeio.
              </p>
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ea355] text-white font-semibold text-sm px-4 py-2 rounded-lg mt-3 transition-colors"
              >
                💬 Ver disponibilidade no WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const statusColor = STATUS_COLORS[card.statusOperacional];

  return (
    <div className="container-safe">
      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 my-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Próxima saída disponível
            </p>
            <p className="font-bold text-dark text-base md:text-lg leading-snug">
              {card.diaSemana}, {card.dataFormatada}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="flex items-center gap-1 text-sm font-semibold text-dark">
                <span aria-hidden="true">🕐</span> {card.horarioSaida}
              </span>
              <span className="text-gray-300" aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <span aria-hidden="true">🌊</span> Maré {card.alturaMare}m
              </span>
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${statusColor}`}
              >
                {getStatusLabel(card.statusOperacional)}
              </span>
            </div>
          </div>
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ea355] text-white font-bold text-sm px-5 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            💬 Reservar este dia
          </Link>
        </div>
      </div>
    </div>
  );
}
