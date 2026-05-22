/**
 * /blog/[slug] — artigo individual
 *
 * Comportamento:
 *   - Apenas posts published geram páginas
 *   - generateStaticParams retorna apenas posts published
 *   - Acessar slug de draft → notFound() (404)
 *   - Schemas: Article + FAQPage (se houver FAQ) + BreadcrumbList
 */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  getPublishedPostBySlug,
  getPublishedPosts,
  getRelatedPasseios,
} from "@/lib/blog";
import { localizarPost, getClusterMetaLocalized } from "@/lib/blog-i18n";
import { localizarPasseios } from "@/lib/passeios-i18n";
import { empresa } from "@/data/empresa";
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
  buildLocaleAlternates,
} from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const SITE_URL = `https://${empresa.dominio}`;
const WA_URL = buildWhatsAppUrl("blog");

const HTML_LANG: Record<string, string> = { pt: "pt-BR", en: "en", es: "es" };

interface BlogArticleProps {
  params: { locale: string; slug: string };
}

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogArticleProps): Metadata {
  const raw = getPublishedPostBySlug(params.slug);
  if (!raw) return { title: "Guia não encontrado" };
  const post = localizarPost(raw, params.locale);

  const alternates = buildLocaleAlternates(params.locale, `/blog/${post.slug}`);
  return {
    title: { absolute: `${post.title} | Vem Passear em Jampa` },
    description: post.description,
    keywords: post.keywords.join(", "),
    alternates,
    openGraph: {
      title: post.title,
      description: post.description,
      url: alternates.canonical,
      type: "article",
      publishedTime: post.updatedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticleProps) {
  const { locale, slug } = params;
  setRequestLocale(locale);
  const t = await getTranslations("Blog");

  const raw = getPublishedPostBySlug(slug);
  if (!raw) notFound();
  const post = localizarPost(raw, locale);

  const cluster = getClusterMetaLocalized(post.cluster, locale);
  const relatedPasseios = localizarPasseios(getRelatedPasseios(post), locale);
  const url = `${SITE_URL}/blog/${post.slug}`;
  const inLanguage = HTML_LANG[locale] ?? "pt-BR";

  const homeLabel = locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.updatedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: empresa.nome,
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage,
    keywords: post.keywords.join(", "),
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: homeLabel, item: SITE_URL },
    { name: "Blog", item: `${SITE_URL}/blog` },
    { name: post.title, item: url },
  ]);

  return (
    <article className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {post.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(post.faq)) }}
        />
      )}

      {/* Cabeçalho */}
      <section id="hero-section" className="bg-[#F7F8F7] py-14 md:py-20">
        <div className="container-safe max-w-3xl">
          <nav className="text-xs text-gray-500 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary">{homeLabel}</Link>
            <span aria-hidden="true"> · </span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span aria-hidden="true"> · </span>
            <span className="text-gray-700">{cluster.nome}</span>
          </nav>

          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            {post.category}
          </p>
          <h1 className="font-serif font-bold text-3xl md:text-5xl text-dark leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            {post.description}
          </p>
          <p className="text-xs text-gray-400">
            {t("porAutor", { autor: post.author, min: post.readingTime, data: post.updatedAt })}
          </p>
        </div>
      </section>

      {/* Corpo */}
      <section className="py-14 md:py-20">
        <div className="container-safe max-w-3xl">
          {post.sections.map((section) => (
            <div key={section.heading} className="mb-10">
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-dark leading-tight mb-4">
                {section.heading}
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
                {section.body}
              </p>
            </div>
          ))}

          {post.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-dark leading-tight mb-6">
                {t("perguntasFrequentes")}
              </h2>
              <ul className="space-y-5">
                {post.faq.map((item) => (
                  <li
                    key={item.pergunta}
                    className="border border-gray-200 rounded-xl p-5"
                  >
                    <h3 className="font-bold text-dark mb-2 text-base">
                      {item.pergunta}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.resposta}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {relatedPasseios.length > 0 && (
            <div className="mt-12 border-t border-gray-200 pt-10">
              <h2 className="font-serif font-bold text-xl md:text-2xl text-dark mb-5">
                {t("passeiosMencionados")}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedPasseios.map((passeio) => (
                  <li key={passeio.id}>
                    <Link
                      href={`/passeios/${passeio.categoria}/${passeio.slug}`}
                      className="block border border-gray-200 hover:border-primary rounded-xl p-4 transition-colors"
                    >
                      <p className="font-bold text-dark text-sm leading-tight mb-1">
                        {passeio.nome}
                      </p>
                      <p className="text-xs text-gray-500">
                        {t("verDetalhes")}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section
        id="cta-final"
        className="py-14 md:py-20"
        style={{ background: "var(--cor-primaria)" }}
      >
        <div className="container-safe text-center max-w-2xl">
          <h2 className="font-serif font-bold text-white text-2xl md:text-3xl mb-3 leading-tight">
            {t("ctaAjudaRoteiro")}
          </h2>
          <p className="text-white/85 mb-8 leading-relaxed">
            {t("ctaMurilloOrientacao")}
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-orange-50 font-extrabold px-8 py-4 rounded-full min-h-[56px] transition-colors"
          >
            {t("ctaChamarMurillo")}
          </a>
        </div>
      </section>
    </article>
  );
}
