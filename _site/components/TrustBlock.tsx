import { empresa } from "@/data/empresa";

const CADASTUR_URL = "https://cadastur.turismo.gov.br/hotsite/#!/public/inicio";

export function TrustBlock() {
  return (
    <section className="bg-dark text-white" aria-label="Por que confiar na Vem Passear">
      <div className="container-safe py-8 md:py-12">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Por que confiar na Vem Passear em Jampa?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Cadastur — clicável para verificação no portal oficial */}
          <a
            href={CADASTUR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 group"
            aria-label="Verificar registro Cadastur no portal do Ministério do Turismo"
          >
            <span className="text-2xl flex-shrink-0" aria-hidden="true">✅</span>
            <div>
              <h3 className="text-white font-bold text-base md:text-lg group-hover:text-primary transition-colors">
                Cadastur {empresa.cadastur} — Ativo
              </h3>
              <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                Agência registrada no Ministério do Turismo. Verifique o registro no portal oficial.
              </p>
            </div>
          </a>

          {/* Rating — clicável para o perfil real do Google */}
          <a
            href={empresa.rede.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 group"
            aria-label={`Ver as ${empresa.rating.totalAvaliacoes} avaliações reais no Google`}
          >
            <span className="text-2xl flex-shrink-0" aria-hidden="true">⭐</span>
            <div>
              <h3 className="text-white font-bold text-base md:text-lg group-hover:text-primary transition-colors">
                {empresa.rating.valor}/5 no Google
              </h3>
              <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                {empresa.rating.totalAvaliacoes} avaliações reais. Atendimento rápido, organização e confiança são os pontos mais citados.
              </p>
            </div>
          </a>

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
