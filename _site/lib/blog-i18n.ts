/**
 * Localização de BlogPost + clusters.
 *
 * Tradução fiel: nomes próprios, datas, valores e citações preservados.
 * Pontos pendentes devem permanecer fora dos posts publicados.
 */

import type { BlogPost, BlogCluster } from "@/data/blog";
import { blogClusters as blogClustersPt } from "@/data/blog";
import {
  blogPostsTranslations,
  blogClustersTranslations,
} from "@/data/blog.i18n";

export type Locale = "pt" | "en" | "es";

function normalizeLocale(locale: string): Locale {
  if (locale === "en" || locale === "es") return locale;
  return "pt";
}

export function localizarPost(post: BlogPost, locale: string): BlogPost {
  const lang = normalizeLocale(locale);
  if (lang === "pt") return post;
  const overrides = blogPostsTranslations[post.slug]?.[lang];
  if (!overrides) return post;
  return { ...post, ...overrides };
}

export function localizarPosts(lista: BlogPost[], locale: string): BlogPost[] {
  return lista.map((p) => localizarPost(p, locale));
}

export function getClusterMetaLocalized(
  cluster: BlogCluster,
  locale: string,
): { nome: string; descricao: string } {
  const lang = normalizeLocale(locale);
  if (lang === "pt") return blogClustersPt[cluster];
  return blogClustersTranslations[lang]?.[cluster] ?? blogClustersPt[cluster];
}
