/**
 * Página de Passeio Individual
 * Rota dinâmica: /passeios/[categoria]/[slug]
 * Ex: /passeios/piscinas-naturais/seixas
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { passeios, getPasseioBySlug, getPasseiosByCategoria } from "@/data/passeios";
import { localizarPasseio, localizarPasseios } from "@/lib/passeios-i18n";
import { TABUA_MARES_2026 } from "@/data/tabua-mares";
import { buildProximaSaidaCard } from "@/lib/tabua-mares";
import type { PasseioMareSlug } from "@/types/tabua-mares";
import {
  generateFAQSchema,
  generateTouristAttractionSchema,
  generateBreadcrumbSchema,
  buildLocaleAlternates,
  buildLocalizedUrl,
} from "@/lib/seo";
import { isCampoIndisponivel } from "@/lib/consultar";
import { getPasseioBadges } from "@/lib/badges";
import { HeroBlock } from "@/components/HeroBlock";
import { FichaTecnica } from "@/components/FichaTecnica";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MareAlert } from "@/components/MareAlert";
import { ProximaSaidaCard } from "@/components/ProximaSaidaCard";
import { TrustBlock } from "@/components/TrustBlock";
import { ReviewsBlock } from "@/components/ReviewsBlock";
import { Experience360Block } from "@/components/Experience360Block";
import { IncluidoBlock } from "@/components/IncluidoBlock";
import { DepoimentoBlock } from "@/components/DepoimentoBlock";
import { CTAFinal } from "@/components/CTAFinal";
import { PoliticaCancelamento } from "@/components/PoliticaCancelamento";
import { CTASticky } from "@/components/CTASticky";
import { PasseioCard } from "@/components/PasseioCard";
import { ReservationIntentForm } from "@/components/ReservationIntentForm";
import { PasseioGallery } from "@/components/PasseioGallery";
import { ClientesReviewsBlock } from "@/components/ClientesReviewsBlock";
import { getPasseioGalleryImages } from "@/lib/gallery";
import { getCronograma } from "@/data/cronogramas";
import { PasseioCronograma } from "@/components/PasseioCronograma";
import { buildWhatsAppUrl, resolvePasseioWhatsAppIntent } from "@/lib/whatsapp";

interface PasseioPageProps {
  params: {
    locale: string;
    categoria: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  return passeios.map((p) => ({
    categoria: p.categoria,
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PasseioPageProps): Promise<Metadata> {
  const passeioRaw = getPasseioBySlug(params.slug, params.categoria);
  if (!passeioRaw) return {};
  const passeio = localizarPasseio(passeioRaw, params.locale);

  const path = `/passeios/${params.categoria}/${params.slug}`;
  const alternates = buildLocaleAlternates(params.locale, path);
  const titleSuffix =
    params.locale === "en" ? "in João Pessoa" : params.locale === "es" ? "en João Pessoa" : "em João Pessoa";
  // title.absolute evita que o template raiz "%s | Vem Passear em Jampa" duplique a marca
  const titleStr = `${passeio.nome} ${titleSuffix} | Vem Passear em Jampa`;
  const precoMeta = isCampoIndisponivel(passeio.preco) ? "valor sob consulta" : `${passeio.preco} por pessoa`;
  const duracaoMeta = isCampoIndisponivel(passeio.duracao) ? "" : ` Duração: ${passeio.duracao}.`;
  const description =
    passeio.metaDescription ||
    `Conheça ${passeio.nome} em João Pessoa. ${precoMeta}.${duracaoMeta} Cadastur ativo. Reserve pelo WhatsApp!`;

  return {
    title: { absolute: titleStr },
    description,
    alternates,
    openGraph: {
      title: titleStr,
      description,
      url: alternates.canonical,
      type: "website",
      images: passeio.coverImage
        ? [
            {
              url: passeio.coverImage,
              width: 1200,
              height: 630,
              alt: passeio.imagemAlt || passeio.nome,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: titleStr,
      description,
    },
  };
}

export default async function PasseioPage({ params }: PasseioPageProps) {
  const { locale, categoria, slug } = params;
  setRequestLocale(locale);

  const t    = await getTranslations('Passeio');
  const tNav = await getTranslations('Nav');

  const passeioRaw = getPasseioBySlug(slug, categoria);
  if (!passeioRaw) notFound();
  const passeio = localizarPasseio(passeioRaw, locale);

  const pageUrl = buildLocalizedUrl(locale, `/passeios/${categoria}/${slug}`);
  const whatsappIntent = resolvePasseioWhatsAppIntent(passeio);
  const whatsappUrl = buildWhatsAppUrl(whatsappIntent, { passeioNome: passeio.nome });

  const MARE_SLUGS: PasseioMareSlug[] = ["seixas", "picaozinho", "areia-vermelha-catamara"];
  const mareSlug = MARE_SLUGS.find((s) => s === passeio.slug) ?? null;
  const proximaSaidaCard =
    passeio.dependeDeMare && mareSlug
      ? buildProximaSaidaCard(mareSlug, TABUA_MARES_2026)
      : null;

  const similares = localizarPasseios(
    getPasseiosByCategoria(categoria).filter((p) => p.slug !== slug).slice(0, 3),
    locale,
  );

  const h1Text =
    passeio.h1 ||
    (locale === "en"
      ? `${passeio.nome} in João Pessoa`
      : locale === "es"
      ? `${passeio.nome} en João Pessoa`
      : `${passeio.nome} em João Pessoa`);
  const badges = getPasseioBadges(passeio);
  const cronograma = getCronograma(categoria, slug);

  const categoriaLabel = categoria
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const touristAttractionSchema = generateTouristAttractionSchema({
    nome: passeio.nome,
    descricao: passeio.descricao,
    url: pageUrl,
    imagemUrl: passeio.coverImage,
    preco: passeio.preco,
    virtualTourUrl: passeio.tem360 ? passeio.url360 : undefined,
  });

  const faqItems = passeio.faq || [];
  const faqSchema = faqItems.length > 0 ? generateFAQSchema(faqItems) : null;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: tNav("inicio"), item: buildLocalizedUrl(locale, "/") },
    { name: categoriaLabel, item: buildLocalizedUrl(locale, `/passeios/${categoria}`) },
    { name: passeio.nomeCurto || passeio.nome, item: pageUrl },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <CTASticky
        whatsappUrl={whatsappUrl}
        label={t('ctaStickyLabel')}
        price={isCampoIndisponivel(passeio.preco) ? undefined : passeio.preco}
      />

      <div id="hero-section">
        <HeroBlock
          imageSrc={passeio.coverImage || "/images/placeholders/placeholder-passeio.svg"}
          imageAlt={passeio.imagemAlt || passeio.nome}
          title={h1Text}
          subtitle={passeio.subtituloHero}
          badges={badges}
          breadcrumbItems={[
            { label: tNav("inicio"), href: "/" },
            { label: categoriaLabel, href: `/passeios/${categoria}` },
            { label: passeio.nomeCurto || passeio.nome },
          ]}
          cta={{ text: t('heroCta'), href: whatsappUrl }}
          isH1
        />
      </div>

      <FichaTecnica passeio={passeio} />

      <ReservationIntentForm passeioNome={passeio.nome} />

      {cronograma && <PasseioCronograma cronograma={cronograma} />}

      <Breadcrumb
        items={[
          { label: tNav("inicio"), href: "/" },
          { label: categoriaLabel, href: `/passeios/${categoria}` },
          { label: passeio.nome },
        ]}
        currentUrl={pageUrl}
        locale={locale}
      />

      <PasseioGallery
        images={getPasseioGalleryImages(passeio)}
        passeioNome={passeio.nome}
      />

      {passeio.observacoes && !passeio.observacoes.includes("[CONSULTAR") && (
        <section style={{ background: '#F7F8F7', padding: '12px 16px' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            color: '#5A6B78',
            lineHeight: 1.55,
            margin: 0,
            maxWidth: 680,
          }}>
            ℹ️ {passeio.observacoes}
          </p>
        </section>
      )}

      {passeio.dependeDeMare && (
        <>
          <MareAlert texto={passeio.alertaMare} />
          <ProximaSaidaCard card={proximaSaidaCard} whatsappUrl={whatsappUrl} />
        </>
      )}
      {!passeio.dependeDeMare && passeio.alertaMare && (
        <MareAlert texto={passeio.alertaMare} />
      )}

      <TrustBlock />

      {passeio.temAvaliacoes && passeio.avaliacoes && passeio.avaliacoes.length > 0 && (
        <ReviewsBlock
          avaliacoes={passeio.avaliacoes}
          googleMapsUrl={passeio.googleMapsUrl}
        />
      )}

      {passeio.lead && (
        <section className="container-safe max-w-3xl py-8 md:py-12">
          <div className="space-y-4">
            {passeio.lead.split("\n\n").map((paragrafo, i) => (
              <p key={i} className="text-gray-700 text-base md:text-lg leading-relaxed">
                {paragrafo}
              </p>
            ))}
          </div>
        </section>
      )}

      {(passeio.descricaoSensorial || passeio.descricaoLonga) && (
        <section className="section-padding bg-white">
          <div className="container-safe max-w-3xl">
            <h2>{t('oQueEspera', { nome: passeio.nomeCurto || passeio.nome })}</h2>
            <div className="space-y-4 mt-4">
              {(passeio.descricaoSensorial || passeio.descricaoLonga || "")
                .split("\n\n")
                .map((paragrafo, i) => (
                  <p key={i} className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {paragrafo}
                  </p>
                ))}
            </div>
            {passeio.gallery && passeio.gallery[0] && (
              <div className="mt-6 rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={passeio.gallery[0]}
                  alt={passeio.imagemAlt || `${passeio.nome} em João Pessoa, Paraíba`}
                  className="w-full object-cover rounded-lg"
                  style={{ maxHeight: "400px" }}
                  loading="lazy"
                  width={800}
                  height={400}
                />
              </div>
            )}
          </div>
        </section>
      )}

      {passeio.tem360 && passeio.url360 && (
        <Experience360Block
          url360={passeio.url360}
          previewSrc={passeio.gallery?.[0]}
          previewAlt={passeio.imagemAlt}
        />
      )}

      {passeio.roteiroNarrativo && passeio.roteiroNarrativo.length > 0 && (
        <section className="section-padding bg-light">
          <div className="container-safe max-w-3xl">
            <h2>{t('passoPasso')}</h2>
            <div className="mt-6 space-y-6">
              {passeio.roteiroNarrativo.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0"
                >
                  <span className="text-2xl flex-shrink-0" aria-hidden="true">
                    {step.emoji}
                  </span>
                  <div>
                    <h3 className="font-bold text-dark text-base mb-1">{step.titulo}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{step.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {!passeio.roteiroNarrativo && passeio.rotario && passeio.rotario.length > 0 && (
        <section className="section-padding bg-light">
          <div className="container-safe max-w-3xl">
            <h2>{t('roteiro')}</h2>
            <div className="space-y-3 mt-6">
              {passeio.rotario.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">{index + 1}.</span>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <IncluidoBlock incluso={passeio.incluso} naoIncluso={passeio.naoIncluso} />

      <ClientesReviewsBlock />

      {faqItems.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-safe max-w-3xl">
            <h2>{t('perguntasTitle', { nome: passeio.nome.split(" ").pop() ?? passeio.nome })}</h2>
            <div className="mt-6">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>
      )}

      {passeio.depoimento && (
        <DepoimentoBlock
          texto={passeio.depoimento.texto}
          autor={passeio.depoimento.autor}
          avatar={passeio.depoimento.avatar}
        />
      )}

      {passeio.informacoesPraticas && (
        <section className="section-padding bg-white">
          <div className="container-safe max-w-3xl">
            <h2>{t("informacoesPraticas")}</h2>

            <div className="mt-6 space-y-6">
              {passeio.informacoesPraticas.oqueLevar &&
                passeio.informacoesPraticas.oqueLevar.length > 0 && (
                  <div>
                    <h3 className="font-bold text-dark text-base mb-3">{t("oQueLevar")}</h3>
                    <ul className="space-y-2">
                      {passeio.informacoesPraticas.oqueLevar.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {passeio.informacoesPraticas.pontoEncontro && (
                <div>
                  <h3 className="font-bold text-dark text-base mb-2">
                    📍 {t("pontoEncontro")}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {passeio.informacoesPraticas.pontoEncontro}
                  </p>
                  {passeio.informacoesPraticas.pontoEncontroUrl && (
                    <a
                      href={passeio.informacoesPraticas.pontoEncontroUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-accent mt-1 inline-block"
                    >
                      {t("abrirMaps")}
                    </a>
                  )}
                </div>
              )}

              {passeio.informacoesPraticas.horario && (
                <div>
                  <h3 className="font-bold text-dark text-base mb-2">⏱ {t("horarioSaida")}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {passeio.informacoesPraticas.horario}
                  </p>
                </div>
              )}

              <div>
                <h3 className="font-bold text-dark text-base mb-2">📲 Contato direto</h3>
                <p className="text-gray-700 text-sm">
                  Fala com Murillo pelo WhatsApp —{" "}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold"
                  >
                    +55 83 9908-7830
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <PoliticaCancelamento whatsappUrl={whatsappUrl} />

      <CTAFinal whatsappUrl={whatsappUrl} />

      {similares.length > 0 && (
        <section className="section-padding bg-light">
          <div className="container-safe">
            <h2>{t('outrosPasseios', { categoria: categoriaLabel.toLowerCase() })}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {similares.map((p) => (
                <PasseioCard key={p.id} passeio={p} />
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href={`/passeios/${categoria}`}
                className="text-primary hover:text-accent font-semibold text-sm transition-colors"
              >
                {t('verTodosCategoria', { categoria: categoriaLabel.toLowerCase() })}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
