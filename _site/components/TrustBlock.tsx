import { empresa, provasSociais } from "@/data/empresa";

export function TrustBlock() {
  return (
    <section className="bg-dark text-white" aria-label="Por que confiar na Vem Passear">
      <div className="container-safe py-8 md:py-12">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Por que confiar na Vem Passear em Jampa?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Cadastur */}
          <div className="flex gap-4">
            <span className="text-2xl flex-shrink-0" aria-hidden="true">✅</span>
            <div>
              <h3 className="text-white font-bold text-base md:text-lg">
                Cadastur {empresa.cadastur} — Ativo
              </h3>
              <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                Agência registrada no Ministério do Turismo. Operação legal, segura, verificada.
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex gap-4">
            <span className="text-2xl flex-shrink-0" aria-hidden="true">⭐</span>
            <div>
              <h3 className="text-white font-bold text-base md:text-lg">
                {empresa.rating.valor}/5 no Google
              </h3>
              <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                {empresa.rating.totalAvaliacoes} avaliações. O que os clientes sempre dizem: atendimento rápido, organização impecável, confiança.
              </p>
            </div>
          </div>

          {/* Murillo */}
          <div className="flex gap-4">
            <span className="text-2xl flex-shrink-0" aria-hidden="true">👤</span>
            <div>
              <h3 className="text-white font-bold text-base md:text-lg">
                Murillo — Atendimento e Curadoria
              </h3>
              <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                Conhece cada maré, cada coral e cada canto de João Pessoa. Atendimento direto no WhatsApp — você fala comigo, não com atendente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
