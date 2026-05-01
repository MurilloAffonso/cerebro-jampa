/**
 * Sitemap — /sitemap.xml
 * ISSUE-15: 32 URLs da Fase 1
 * Fonte: CONTEXT.md + data/passeios.ts + data/servicos.ts
 *
 * URLs excluídas: /sobre, /blog, /passeios/piscinas-naturais/calendario
 */

import type { MetadataRoute } from "next";
import { passeios } from "@/data/passeios";
import { servicos } from "@/data/servicos";
import { empresa } from "@/data/empresa";

const BASE = `https://${empresa.dominio}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Páginas estáticas (4)
  const estaticas: MetadataRoute.Sitemap = [
    { url: `${BASE}/`,                      lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/passeios/`,             lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
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

  return [...estaticas, ...paginasCategorias, ...paginasPasseios];
}
