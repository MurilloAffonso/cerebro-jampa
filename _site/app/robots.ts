/**
 * robots.ts — /robots.txt
 * ISSUE-16
 * Permite indexação do site público.
 * Bloqueia rotas fora do sitemap aprovado da Fase 1.
 */

import type { MetadataRoute } from "next";
import { empresa } from "@/data/empresa";

const BASE = `https://${empresa.dominio}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/sobre/",
        "/blog/",
        "/passeios/piscinas-naturais/calendario/",
      ],
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
