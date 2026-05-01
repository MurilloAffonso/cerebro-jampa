/**
 * Dados da Empresa — FONTE: _memoria/canais-oficiais.md
 *
 * ✅ CONFIRMADO COM MURILLO (2026-04-25)
 * Centralizado aqui para usar em múltiplos places (site, componentes, footer, etc)
 *
 * Regra: Atualizar APENAS se Murillo confirmar mudança.
 * Sincronização: Tudo deve estar consistente em todos os canais (site, Instagram, GMB, WhatsApp).
 */

/**
 * Informações oficiais da empresa
 */
export const empresa = {
  // Identidade
  nome: 'Vem Passear em Jampa',
  proprietario: 'Affonso Murillo Soledade de Oliveira',
  dominio: 'vempassearjampa.com.br',

  // Registros
  cnpj: '52.077.577/0001-03',
  cadastur: '52.077.577',
  cadasturValido: '2026-12-16',

  // Localização
  localizacao: {
    cidade: 'João Pessoa',
    estado: 'Paraíba',
    pais: 'Brasil',
  },

  // Contato Oficial (CONFIRMADO)
  contato: {
    whatsappNumero: '83 99087-830', // Formato visual
    whatsappLink: 'https://wa.me/558399087830', // Link clicável
    email: 'vempassearjampa@gmail.com',
  },

  // Redes Sociais Oficiais (CONFIRMADO)
  rede: {
    instagram: {
      handle: '@vempassearjampa',
      url: 'https://www.instagram.com/vempassearjampa?igsh=MTB1a2F5ZHRndmdtdQ%3D%3D&utm_source=qr',
    },
    googleMaps: 'https://maps.app.goo.gl/Q1Q8BNC5K1k9tiyX7?g_st=ic',
    googleMeuNegocio: 'vempassearjampa', // Para GMB
    tripAdvisor: '', // Phase 3
    viator: '', // Phase 3
  },

  // Informações Empresariais
  missao:
    'Ajudar turistas a descobrir João Pessoa com atendimento rápido, confiança e orientação prática.',
  diferencial:
    'Confiança + Atendimento rápido + Preço justo + Conhecimento local profundo',

  // Avaliação (CONFIRMADO — 2026-04-30)
  rating: {
    valor: 4.9,
    totalAvaliacoes: 61,
    plataforma: 'Google',
  },

  // Meta-informações
  anos_operacao: null, // [CONFIRMAR COM MURILLO: desde quando opera?]
};

/**
 * Provas Sociais — use em seções de confiança
 */
export const provasSociais = {
  cadastur: `${empresa.cadastur} — Ativo até ${empresa.cadasturValido}`,
  rating: `${empresa.rating.valor}/5 ⭐ (${empresa.rating.totalAvaliacoes} avaliações)`,
  murillo: 'Especialista local com expertise em cada praia de JP',
};

/**
 * Links Reutilizáveis — use em componentes
 *
 * Exemplo:
 * <a href={paginasInfo.whatsappHref}>Chamar Murillo</a>
 * <a href={paginasInfo.instagramUrl} target="_blank">Instagram</a>
 */
export const paginasInfo = {
  // WhatsApp
  whatsappHref: empresa.contato.whatsappLink,
  whatsappDisplay: empresa.contato.whatsappNumero,

  // Instagram
  instagramUrl: empresa.rede.instagram.url,
  instagramHandle: empresa.rede.instagram.handle,

  // Google Maps
  googleMapsUrl: empresa.rede.googleMaps,

  // Domínio
  domain: empresa.dominio,
};
