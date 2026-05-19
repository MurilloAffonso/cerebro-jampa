/**
 * robots.ts — /robots.txt
 * Permite indexação do site público.
 */

import type { MetadataRoute } from "next";
import { empresa } from "@/data/empresa";

const BASE = `https://${empresa.dominio}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
