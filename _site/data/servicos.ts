/**
 * Dados de serviços — FONTE: _conhecimento/base-operacional-comercial.md
 *
 * Regra: Serviços NÃO são passeios. Não entram em data/passeios.ts.
 * Campos null = dado ausente no vault — não exibir valor sem confirmação de Murillo.
 * "[CONSULTAR]" = verificar antes de confirmar com cliente.
 */

export interface Servico {
  id: string;
  slug: string;
  nome: string;
  descricao: string;
  // Operação
  cobertura: string;        // onde o serviço atua
  atendimento: string;      // ex: "24 horas"
  // Precificação
  preco: null;              // cobrado por trajeto — [CONSULTAR] com Murillo antes de publicar
  cobrancaPorTrajeto: true; // sempre true: NÃO é por pessoa
  valorCrianca: null;       // não se aplica — cobrado por trajeto, não por passageiro
  // Conteúdo da página (preenchido em ISSUE-13)
  incluso: string[] | null;    // null = [CONSULTAR]
  naoIncluso: string[] | null; // null = [CONSULTAR]
  // SEO (usado em ISSUE-13)
  h1: string;
  metaDescription: string;
  // CTA
  ctaTexto: string;
}

export const servicos: Servico[] = [
  {
    id: "transfer-24h",
    slug: "transfer-24h",
    nome: "Transfer Privativo 24h",
    descricao:
      "Transfer privativo de e para o aeroporto, hotéis e qualquer ponto de João Pessoa — 24 horas por dia. Valor por trajeto, sob consulta.",
    // Operação — fonte: base-operacional-comercial.md ✅
    cobertura: "Aeroporto ↔ Hotel ↔ Qualquer ponto da cidade",
    atendimento: "24 horas",
    // Precificação — fonte: base-operacional-comercial.md
    preco: null,             // [CONSULTAR COM MURILLO — valor por trajeto, não documentado]
    cobrancaPorTrajeto: true,
    valorCrianca: null,      // não se aplica — cobrado por trajeto, não por passageiro ✅
    // Incluso/Não incluso — não documentado no vault
    incluso: null,           // [CONSULTAR COM MURILLO]
    naoIncluso: null,        // [CONSULTAR COM MURILLO]
    // SEO
    h1: "Transfer 24h em João Pessoa — Aeroporto e Hotel",
    metaDescription:
      "Transfer privativo 24h em João Pessoa: aeroporto, hotéis e qualquer ponto da cidade. Solicite sua cotação pelo WhatsApp →",
    // CTA
    ctaTexto: "Solicitar cotação de transfer",
  },
];

export function getServico(slug: string): Servico | undefined {
  return servicos.find((s) => s.slug === slug);
}
