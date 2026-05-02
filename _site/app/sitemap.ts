/**
 * Sitemap — /sitemap.xml
 *
 * Inclui:
 *   - Páginas comerciais estáticas
 *   - 6 categorias + 22 passeios
 *   - Hub /blog/ (mesmo sem posts publicados — endpoint válido)
 *   - Posts de blog com status === "published"
 *
 * Exclui:
 *   - /sobre (notFound)
 *   - /passeios/piscinas-naturais/calendario (página interna não SEO)
 *   - Posts com status === "draft"
 */

import type { MetadataRoute } from "next";
import { passeios } from "@/data/passeios";
import { empresa } from "@/data/empresa";
import { getPublishedPosts } from "@/lib/blog";

const BASE = `https://${empresa.dominio}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Páginas estáticas
  const estaticas: MetadataRoute.Sitemap = [
    { url: `${BASE}/`,                      lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/passeios/`,             lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/blog/`,                 lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/faq/`,                  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/servicos/transfer-24h/`,lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  // Categorias (6)
  const categorias = [...new Set(passeios.map((p) => p.categoria))];
  const paginasCategorias: MetadataRoute.Sitemap = categorias.map((cat) => ({
    url: `${BASE}/passeios/${cat}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Páginas individuais de passeio (22)
  const paginasPasseios: MetadataRoute.Sitemap = passeios.map((p) => ({
    url: `${BASE}/passeios/${p.categoria}/${p.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p.prioritario ? 0.9 : 0.7,
  }));

  // Posts de blog publicados (drafts ficam fora)
  const postsBlog: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...estaticas, ...paginasCategorias, ...paginasPasseios, ...postsBlog];
}
