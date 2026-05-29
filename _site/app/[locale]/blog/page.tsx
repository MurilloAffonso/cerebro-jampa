/**
 * /blog — hub editorial
 *
 * Comportamento:
 *   - Se houver posts published → lista os posts
 *   - Se não houver → mostra "Guias em preparação" com clusters planejados
 *
 * Drafts NUNCA aparecem nesta página.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPublishedPosts, listClusters } from "@/lib/blog";
import { localizarPosts, getClusterMetaLocalized } from "@/lib/blog-i18n";
import { buildLocaleAlternates, buildLocalizedUrl } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASticky } from "@/components/CTASticky";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const WA_URL = buildWhatsAppUrl("blog");

const BLOG_META: Record<string, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  pt: {
    title: "Blog — Guias de João Pessoa | Vem Passear em Jampa",
    description:
      "Guias práticos sobre João Pessoa: piscinas naturais, roteiros, marés e dicas locais com orientação direta de Murillo.",
    ogTitle: "Blog — Guias de João Pessoa",
    ogDescription:
      "Guias práticos sobre João Pessoa escritos por quem vive aqui. Piscinas naturais, roteiros, marés e dicas locais.",
  },
  en: {
    title: "Blog — João Pessoa Guides | Vem Passear em Jampa",
    description:
      "Practical guides to João Pessoa: natural pools, itineraries, tides and local tips with direct guidance from Murillo.",
    ogTitle: "Blog — João Pessoa Guides",
    ogDescription:
      "Practical João Pessoa guides written by someone who lives here. Natural pools, itineraries, tides and local tips.",
  },
  es: {
    title: "Blog — Guías de João Pessoa | Vem Passear em Jampa",
    description:
      "Guías prácticas sobre João Pessoa: piscinas naturales, itinerarios, mareas y consejos locales con orientación directa de Murillo.",
    ogTitle: "Blog — Guías de João Pessoa",
    ogDescription:
      "Guías prácticas sobre João Pessoa escritas por quien vive aquí. Piscinas naturales, itinerarios, mareas y consejos locales.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const alternates = buildLocaleAlternates(params.locale, "/blog");
  const copy = BLOG_META[params.locale] ?? BLOG_META.pt;
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates,
    openGraph: {
      title: copy.ogTitle,
      description: copy.ogDescription,
      url: alternates.canonical,
      type: "website",
    },
  };
}

export default async function BlogIndexPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const t = await getTranslations("Blog");
  const tNav = await getTranslations("Nav");

  const published = localizarPosts(getPublishedPosts(), params.locale);
  const clusters = listClusters().map((c) => ({
    ...c,
    ...getClusterMetaLocalized(c.key, params.locale),
  }));
  const totalPlanejados = clusters.reduce((acc, c) => acc + c.count, 0);
  const emPreparacao = published.length === 0;

  return (
    <div className="bg-white">
      <CTASticky whatsappUrl={WA_URL} />

      {/* Breadcrumb (emite schema BreadcrumbList automaticamente) */}
      <Breadcrumb
        items={[
          { label: tNav("inicio"), href: "/" },
          { label: "Blog" },
        ]}
        currentUrl={buildLocalizedUrl(params.locale, "/blog")}
        locale={params.locale}
      />

      {/* Header */}
      <section id="hero-section" className="bg-[#F7F8F7] py-16 md:py-20">
        <div className="container-safe max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            {t("kicker")}
          </p>
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-dark leading-tight mb-5">
            {t("titulo")}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            {t("subtitulo")}
          </p>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="py-14 md:py-20">
        <div className="container-safe max-w-5xl">
          {emPreparacao ? (
            <div className="bg-[#F7F8F7] border border-gray-200 rounded-2xl p-8 md:p-12 mb-10">
              <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
                {t("emPreparacao")}
              </p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-dark mb-4 leading-tight">
                {t("guiasEmBreve")}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                {t("preparandoGuias")}
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white font-bold px-6 py-3 rounded-full min-h-[44px] transition-colors"
              >
                {t("falarMurillo")}
              </a>
            </div>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {published.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block border border-gray-200 hover:border-primary rounded-2xl p-6 transition-colors h-full"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">
                      {post.category}
                    </p>
                    <h3 className="font-serif font-bold text-xl text-dark leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {post.description}
                    </p>
                    <p className="text-xs text-gray-400">
                      {t("minLeitura", { min: post.readingTime, data: post.updatedAt })}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Clusters editoriais */}
          <div>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-dark mb-2 leading-tight">
              {t("temasCobrimos")}
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              {totalPlanejados > 0
                ? totalPlanejados === 1
                  ? t("guiaPublicado", { count: totalPlanejados })
                  : t("guiasPublicados", { count: totalPlanejados })
                : t("emPreparacaoCluster")}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {clusters.map((cluster) => (
                <li
                  key={cluster.key}
                  className="border border-gray-200 rounded-xl p-5 bg-white"
                >
                  <h3 className="font-serif font-bold text-base text-dark leading-snug mb-1">
                    {cluster.nome}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-2">
                    {cluster.descricao}
                  </p>
                  <p className="text-xs text-gray-400">
                    {cluster.count === 0
                      ? t("emPreparacao")
                      : cluster.count === 1
                      ? t("guiaPublicado", { count: cluster.count })
                      : t("guiasPublicados", { count: cluster.count })}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <BlogIndexCta />
    </div>
  );
}

async function BlogIndexCta() {
  const t = await getTranslations("Blog");
  return (
    <section
        id="cta-final"
        className="py-14 md:py-20"
        style={{ background: "#092238" }}
      >
        <div className="container-safe text-center max-w-2xl">
          <h2 className="font-serif font-bold text-white text-2xl md:text-3xl mb-3 leading-tight">
            {t("ctaPrefereConversar")}
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            {t("ctaMurilloResponde")}
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white font-extrabold px-8 py-4 rounded-full min-h-[56px] transition-all"
          >
            {t("ctaChamarMurillo")}
          </a>
        </div>
      </section>
  );
}
