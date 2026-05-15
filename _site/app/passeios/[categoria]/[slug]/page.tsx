/**
 * Página de Passeio Individual
 * Rota dinâmica: /passeios/[categoria]/[slug]
 * Ex: /passeios/piscinas-naturais/seixas
 *
 * Etapa 6 — programador-de-site
 * Baseado em: 01-estrategia-site.md, 02a-copywriter-vendas.md,
 *             02b-ux-ui-mobile-first.md, 03-diretor-visual-turismo.md,
 *             04-seo-local-turismo.md, 05-briefing-designer.md
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { passeios, getPasseioBySlug, getPasseiosByCategoria } from "@/data/passeios";
import { empresa } from "@/data/empresa";
import { TABUA_MARES_2026 } from "@/data/tabua-mares";
import { buildProximaSaidaCard } from "@/lib/tabua-mares";
import type { PasseioMareSlug } from "@/types/tabua-mares";
import {
  generateFAQSchema,
  generateTouristAttractionSchema,
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

const SITE_URL = `https://${empresa.dominio}`;
const WA_BASE = empresa.contato.whatsappLink;

interface PasseioPageProps {
  params: {
    categoria: string;
    slug: string;
  };
}

// SSG: pré-renderiza todas as páginas de passeio em build time
export async function generateStaticParams() {
  return passeios.map((p) => ({
    categoria: p.categoria,
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PasseioPageProps): Promise<Metadata> {
  const passeio = getPasseioBySlug(params.slug, params.categoria);
  if (!passeio) return {};

  const pageUrl = `${SITE_URL}/passeios/${params.categoria}/${params.slug}`;
  const title = `${passeio.nome} em João Pessoa | Vem Passear`;
  const precoMeta = isCampoIndisponivel(passeio.preco) ? "valor sob consulta" : `${passeio.preco} por pessoa`;
  const duracaoMeta = isCampoIndisponivel(passeio.duracao) ? "" : ` Duração: ${passeio.duracao}.`;
  const description =
    passeio.metaDescription ||
    `Conheça ${passeio.nome} em João Pessoa. ${precoMeta}.${duracaoMeta} Cadastur ativo. Reserve pelo WhatsApp!`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: "website",
      locale: "pt_BR",
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
      title,
      description,
    },
  };
}

export default function PasseioPage({ params }: PasseioPageProps) {
  const passeio = getPasseioBySlug(params.slug, params.categoria);
  if (!passeio) notFound();

  const pageUrl = `${SITE_URL}/passeios/${params.categoria}/${params.slug}`;
  const whatsappUrl = `${WA_BASE}?text=Oi%2C+quero+saber+sobre+o+passeio+de+${encodeURIComponent(passeio.nome)}`;

  // Próxima saída (tábua de marés) — somente para passeios dependentes de maré
  const MARE_SLUGS: PasseioMareSlug[] = ["seixas", "picaozinho", "areia-vermelha-catamara"];
  const mareSlug = MARE_SLUGS.find((s) => s === passeio.slug) ?? null;
  const proximaSaidaCard =
    passeio.dependeDeMare && mareSlug
      ? buildProximaSaidaCard(mareSlug, TABUA_MARES_2026)
      : null;

  // Passeios similares: mesma categoria, excluindo o atual
  const similares = getPasseiosByCategoria(params.categoria)
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3);

  // Hero H1 — usa h1 customizado ou nome do passeio
  const h1Text = passeio.h1 || `${passeio.nome} em João Pessoa`;

  // Badges do passeio (sistema Cloud Design)
  const badges = getPasseioBadges(passeio);

  // Cronograma do passeio (accordion timeline)
  const cronograma = getCronograma(params.categoria, params.slug);

  // Rótulo legível da categoria para breadcrumb e schema
  const categoriaLabel = params.categoria
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  // Schemas JSON-LD
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

  return (
    <>
      {/* Schemas JSON-LD — Breadcrumb sai automaticamente do <Breadcrumb> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* CTA Sticky — fixed bottom, mobile only, aparece após hero sair do viewport */}
      <CTASticky
        whatsappUrl={whatsappUrl}
        label="Reservar com Murillo no WhatsApp"
        price={isCampoIndisponivel(passeio.preco) ? undefined : passeio.preco}
      />

      {/* C2 — HERO com breadcrumb overlay + badges + CTA */}
      <div id="hero-section">
        <HeroBlock
          imageSrc={passeio.coverImage || "/images/placeholders/placeholder-passeio.svg"}
          imageAlt={passeio.imagemAlt || passeio.nome}
          title={h1Text}
          subtitle={passeio.subtituloHero}
          badges={badges}
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: categoriaLabel, href: `/passeios/${params.categoria}` },
            { label: passeio.nomeCurto || passeio.nome },
          ]}
          cta={{ text: "💬 Reservar com Murillo no WhatsApp", href: whatsappUrl }}
          isH1
        />
      </div>

      {/* C2.1 — FICHA TÉCNICA (duração, saída, preço, categoria) */}
      <FichaTecnica passeio={passeio} />

      {/* C2.2 — CRONOGRAMA (accordion timeline) */}
      {cronograma && <PasseioCronograma cronograma={cronograma} />}

      {/* Breadcrumb SEO schema — visualmente mínimo */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: categoriaLabel, href: `/passeios/${params.categoria}` },
          { label: passeio.nome },
        ]}
        currentUrl={pageUrl}
      />

      {/* C2.5 — GALERIA */}
      <PasseioGallery
        images={getPasseioGalleryImages(passeio)}
        passeioNome={passeio.nome}
      />

      {/* C3 — OBSERVAÇÕES (apenas se houver texto confirmado, sem redundar com FichaTecnica) */}
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

      {/* C4 — AVISO DE MARÉ + PRÓXIMA SAÍDA */}
      {passeio.dependeDeMare && (
        <>
          <MareAlert texto={passeio.alertaMare} />
          <ProximaSaidaCard card={proximaSaidaCard} whatsappUrl={whatsappUrl} />
        </>
      )}
      {!passeio.dependeDeMare && passeio.alertaMare && (
        <MareAlert texto={passeio.alertaMare} />
      )}

      {/* C5 — POR QUE CONFIAR */}
      <TrustBlock />

      {/* C5.5 — AVALIAÇÕES GOOGLE MAPS (condicional) */}
      {passeio.temAvaliacoes && passeio.avaliacoes && passeio.avaliacoes.length > 0 && (
        <ReviewsBlock
          avaliacoes={passeio.avaliacoes}
          googleMapsUrl={passeio.googleMapsUrl}
        />
      )}

      {/* I1 — LEAD */}
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

      {/* I2 — O QUE VOCÊ VAI FAZER */}
      {(passeio.descricaoSensorial || passeio.descricaoLonga) && (
        <section className="section-padding bg-white">
          <div className="container-safe max-w-3xl">
            <h2>O que espera por você em {passeio.nomeCurto || passeio.nome}</h2>
            <div className="space-y-4 mt-4">
              {(passeio.descricaoSensorial || passeio.descricaoLonga || "")
                .split("\n\n")
                .map((paragrafo, i) => (
                  <p key={i} className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {paragrafo}
                  </p>
                ))}
            </div>
            {/* Galeria imagem 01 (opcional, se existir) */}
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

      {/* I2.5 — EXPERIÊNCIA 360° (condicional) */}
      {passeio.tem360 && passeio.url360 && (
        <Experience360Block
          url360={passeio.url360}
          previewSrc={passeio.gallery?.[0]}
          previewAlt={passeio.imagemAlt}
        />
      )}

      {/* I3 — ROTEIRO NARRATIVO */}
      {passeio.roteiroNarrativo && passeio.roteiroNarrativo.length > 0 && (
        <section className="section-padding bg-light">
          <div className="container-safe max-w-3xl">
            <h2>Como é o passeio — passo a passo</h2>
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

      {/* Fallback roteiro simples (se não tiver narrativo) */}
      {!passeio.roteiroNarrativo && passeio.rotario && passeio.rotario.length > 0 && (
        <section className="section-padding bg-light">
          <div className="container-safe max-w-3xl">
            <h2>Roteiro</h2>
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

      {/* I4 — INCLUSO / NÃO INCLUSO */}
      <IncluidoBlock incluso={passeio.incluso} naoIncluso={passeio.naoIncluso} />

      {/* I4.5 — PRÉ-RESERVA WHATSAPP (todos os passeios) */}
      <ReservationIntentForm passeioNome={passeio.nome} />

      {/* I4.7 — O QUE DIZEM NOSSOS CLIENTES (reviews reais do Google) */}
      <ClientesReviewsBlock />

      {/* I5 — FAQ ACCORDION */}
      {faqItems.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-safe max-w-3xl">
            <h2>Perguntas sobre o passeio de {passeio.nome.split(" ").pop()}</h2>
            <div className="mt-6">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>
      )}

      {/* I5.5 — CTA SECUNDÁRIO (após FAQ) */}
      <section className="bg-white">
        <div className="container-safe max-w-3xl py-6 text-center">
          <p className="text-gray-600 text-sm mb-4">
            Ficou com alguma dúvida que não está aqui? Fala com a gente — é rápido.
          </p>
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ea355] text-white font-bold text-base px-6 py-3 rounded-lg min-h-[44px] w-full max-w-xs transition-colors"
            aria-label="Reservar no WhatsApp"
          >
            💬 Reservar no WhatsApp
          </Link>
        </div>
      </section>

      {/* S1 — DEPOIMENTO */}
      {passeio.depoimento && (
        <DepoimentoBlock
          texto={passeio.depoimento.texto}
          autor={passeio.depoimento.autor}
          avatar={passeio.depoimento.avatar}
        />
      )}

      {/* S2 — INFORMAÇÕES PRÁTICAS */}
      {passeio.informacoesPraticas && (
        <section className="section-padding bg-white">
          <div className="container-safe max-w-3xl">
            <h2>Informações práticas para o dia do passeio</h2>

            <div className="mt-6 space-y-6">
              {passeio.informacoesPraticas.oqueLevar &&
                passeio.informacoesPraticas.oqueLevar.length > 0 && (
                  <div>
                    <h3 className="font-bold text-dark text-base mb-3">O que levar</h3>
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
                    📍 Ponto de Encontro
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
                      Abrir no Maps ↗
                    </a>
                  )}
                </div>
              )}

              {passeio.informacoesPraticas.horario && (
                <div>
                  <h3 className="font-bold text-dark text-base mb-2">⏱ Horário de Saída</h3>
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
                    href={WA_BASE}
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

      {/* Política de cancelamento — transparência antes do CTA final */}
      <PoliticaCancelamento whatsappUrl={whatsappUrl} />

      {/* S3 — CTA FINAL */}
      <CTAFinal whatsappUrl={whatsappUrl} />

      {/* S4 — PASSEIOS SIMILARES */}
      {similares.length > 0 && (
        <section className="section-padding bg-light">
          <div className="container-safe">
            <h2>Outros passeios em {categoriaLabel.toLowerCase()} em João Pessoa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {similares.map((p) => (
                <PasseioCard key={p.id} passeio={p} />
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href={`/passeios/${params.categoria}`}
                className="text-primary hover:text-accent font-semibold text-sm transition-colors"
              >
                Ver todos os passeios em {categoriaLabel.toLowerCase()} →
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
