/**
 * Blog — helpers
 *
 * Toda lógica de filtragem por status mora aqui.
 * Templates de página usam apenas estes getters — nunca acessam blogPosts direto.
 */

import { blogPosts, blogClusters, type BlogPost, type BlogCluster } from "@/data/blog";
import { passeios, type Passeio } from "@/data/passeios";

export function getPublishedPosts(): BlogPost[] {
  return blogPosts
    .filter((p) => p.status === "published")
    .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
}

export function getDraftPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.status === "draft");
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPublishedPostBySlug(slug: string): BlogPost | undefined {
  return getPublishedPosts().find((p) => p.slug === slug);
}

export function getPostsByCluster(cluster: BlogCluster): BlogPost[] {
  return getPublishedPosts().filter((p) => p.cluster === cluster);
}

export function getRelatedPasseios(post: BlogPost): Passeio[] {
  if (!post.relatedPasseios?.length) return [];
  const map = new Map(passeios.map((p) => [p.id, p]));
  return post.relatedPasseios
    .map((id) => map.get(id))
    .filter((p): p is Passeio => Boolean(p));
}

export function getClusterMeta(cluster: BlogCluster) {
  return blogClusters[cluster];
}

export function listClusters() {
  return (Object.keys(blogClusters) as BlogCluster[]).map((key) => ({
    key,
    ...blogClusters[key],
    count: getPostsByCluster(key).length,
  }));
}
