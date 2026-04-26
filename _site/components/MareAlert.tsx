interface MareAlertProps {
  titulo?: string;
  texto?: string;
}

export function MareAlert({
  titulo = "Este passeio acontece na maré baixa — e isso é exatamente o que torna ele especial.",
  texto,
}: MareAlertProps) {
  return (
    <div
      role="note"
      className="container-safe"
    >
      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4 md:p-6 my-2">
        <div className="flex gap-3">
          <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">
            ⚠️
          </span>
          <div>
            <p className="font-semibold text-amber-900 text-sm md:text-base leading-snug">
              {titulo}
            </p>
            {texto && (
              <p className="text-amber-800 text-sm mt-2 leading-relaxed">{texto}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
