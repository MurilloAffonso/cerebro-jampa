/**
 * Tipos globais do projeto
 */

export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  canonical?: string;
}

export interface Categoria {
  id: string;
  nome: string;
  slug: string;
  descricao: string;
  imagemSrc?: string;
  passeiosIds: string[];
}

export interface Depoimento {
  texto: string;
  autor: string;
  relacao?: string; // "turista", "morador", "casal", etc
  avatar?: string;
  data?: string;
}

export interface InfoCard {
  preco: string;
  duracao: string;
  saida: string;
  maxPessoas?: number;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
