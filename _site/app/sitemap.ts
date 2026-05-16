/**
 * Sitemap — /sitemap.xml
 *
 * Cada rota emite uma entrada por idioma (PT padrão sem prefixo, /en/ e /es/).
 * `alternates.languages` instrui buscadores a entender a versão por idioma (hreflang).
 *
 * V1: blog suprimido enquanto não houver post `published`.
 */

import type { MetadataRoute } from "next";
import { passeios } from "@/data/passeios";
import { empresa } from "@/data/empresa";
import { getPublishedPosts } from "@/lib/blog";
import { routing, type Locale } from "@/i18n/routing";

const BASE = `https://${empresa.dominio}`;

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function urlFor(locale: Locale, path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === routing.defaultLocale) {
    return `${BASE}${cleanPath}`;
  }
  return `${BASE}/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}

function buildAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    const key = locale === "pt" ? "pt-BR" : locale;
    languages[key] = urlFor(locale, path);
  }
  languages["x-default"] = urlFor(routing.defaultLocale, path);
  return languages;
}

interface RouteSpec {
  path: string;
  changeFrequency: ChangeFreq;
  priority: number;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const postsPublicados = getPublishedPosts();

  const rotasEstaticas: RouteSpec[] = [
    { path: "/",                              changeFrequency: "weekly",  priority: 1.0 },
    { path: "/passeios",                      changeFrequency: "weekly",  priority: 0.9 },
    { path: "/faq",                           changeFrequency: "monthly", priority: 0.7 },
    { path: "/sobre",                         changeFrequency: "monthly", priority: 0.6 },
    { path: "/tabua-de-mares-joao-pessoa",    changeFrequency: "weekly",  priority: 0.7 },
    { path: "/servicos/transfer-24h",         changeFrequency: "monthly", priority: 0.6 },
    { path: "/servicos/excursoes-e-grupos",   changeFrequency: "monthly", priority: 0.6 },
  ];

  if (postsPublicados.length > 0) {
    rotasEstaticas.push({ path: "/blog", changeFrequency: "weekly", priority: 0.7 });
  }

  const categorias = [...new Set(passeios.map((p) => p.categoria))];
  const rotasCategorias: RouteSpec[] = categorias.map((cat) => ({
    path: `/passeios/${cat}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const rotasPasseios: RouteSpec[] = passeios.map((p) => ({
    path: `/passeios/${p.categoria}/${p.slug}`,
    changeFrequency: "monthly",
    priority: p.prioritario ? 0.9 : 0.7,
  }));

  const rotasBlog: RouteSpec[] = postsPublicados.map((post) => ({
    path: `/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const todasRotas = [
    ...rotasEstaticas,
    ...rotasCategorias,
    ...rotasPasseios,
    ...rotasBlog,
  ];

  const sitemap: MetadataRoute.Sitemap = [];
  for (const route of todasRotas) {
    const alternates = buildAlternates(route.path);
    for (const locale of routing.locales) {
      sitemap.push({
        url: urlFor(locale, route.path),
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages: alternates },
      });
    }
  }

  return sitemap;
}
