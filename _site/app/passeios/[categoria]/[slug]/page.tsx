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
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { isCampoIndisponivel } from "@/lib/consultar";
import { HeroBlock } from "@/components/HeroBlock";
import { InfoCard } from "@/components/InfoCard";
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
import { CTASticky } from "@/components/CTASticky";
import { PasseioCard } from "@/components/PasseioCard";

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

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Início", item: SITE_URL },
    {
      name: `${categoriaLabel} em João Pessoa`,
      item: `${SITE_URL}/passeios/${params.categoria}`,
    },
    { name: passeio.nome, item: pageUrl },
  ]);

  return (
    <>
      {/* Schemas JSON-LD */}
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

      {/* CTA Sticky — fixed bottom, mobile only, aparece após hero sair do viewport */}
      <CTASticky whatsappUrl={whatsappUrl} label="Reservar no WhatsApp" />

      {/* C2 — HERO */}
      <div id="hero-section">
        <HeroBlock
          imageSrc={passeio.coverImage || "/images/placeholders/placeholder-passeio.svg"}
          imageAlt={passeio.imagemAlt || passeio.nome}
          title={h1Text}
          subtitle={passeio.subtituloHero}
          cta={{ text: "💬 Reservar no WhatsApp", href: whatsappUrl }}
          isH1
        />
      </div>

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: categoriaLabel, href: `/passeios/${params.categoria}` },
          { label: passeio.nome },
        ]}
      />

      {/* C3 — INFO CARD */}
      <section className="container-safe py-4">
        <InfoCard
          preco={passeio.preco}
          duracao={passeio.duracao}
          saida={passeio.saida}
          observacao={passeio.observacoes}
          whatsappUrl={whatsappUrl}
        />
      </section>

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
          <div className="space-y-5">
            {passeio.lead.split("\n\n").map((paragrafo, i) => (
              <p key={i} className={i === 0 ? "font-serif text-dark text-lg md:text-xl leading-relaxed" : "text-gray-600 text-base leading-relaxed"}>
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
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
              A experiência
            </p>
            <h2 className="mb-6">O que espera por você em {passeio.nomeCurto || passeio.nome}</h2>
            <div className="space-y-5">
              {(passeio.descricaoSensorial || passeio.descricaoLonga || "")
                .split("\n\n")
                .map((paragrafo, i) => (
                  <p key={i} className="text-gray-600 text-base leading-relaxed">
                    {paragrafo}
                  </p>
                ))}
            </div>
            {passeio.gallery && passeio.gallery[0] && (
              <div className="mt-8 rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={passeio.gallery[0]}
                  alt={passeio.imagemAlt || `${passeio.nome} em João Pessoa, Paraíba`}
                  className="w-full object-cover"
                  style={{ maxHeight: "420px" }}
                  loading="lazy"
                  width={800}
                  height={420}
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
        <section className="section-padding" style={{ background: "#F7F8F7" }}>
          <div className="container-safe max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
              O roteiro
            </p>
            <h2 className="mb-8">Como é o passeio — passo a passo</h2>
            <div className="space-y-0">
              {passeio.roteiroNarrativo.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-5 pb-7 last:pb-0 relative"
                >
                  {/* Linha vertical conectora */}
                  {index < passeio.roteiroNarrativo!.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-px bg-black/[0.08]" aria-hidden="true" />
                  )}
                  {/* Número */}
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 font-serif font-bold text-primary text-sm z-10">
                    {index + 1}
                  </div>
                  <div className="pt-1.5 pb-2">
                    <h3 className="font-bold text-dark text-base mb-1.5" style={{ fontSize: '15px', letterSpacing: 0 }}>
                      {step.emoji} {step.titulo}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Fallback roteiro simples */}
      {!passeio.roteiroNarrativo && passeio.rotario && passeio.rotario.length > 0 && (
        <section className="section-padding" style={{ background: "#F7F8F7" }}>
          <div className="container-safe max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
              O roteiro
            </p>
            <h2 className="mb-8">Roteiro</h2>
            <div className="space-y-4">
              {passeio.rotario.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* I4 — INCLUSO / NÃO INCLUSO */}
      <IncluidoBlock incluso={passeio.incluso} naoIncluso={passeio.naoIncluso} />

      {/* I5 — FAQ ACCORDION */}
      {faqItems.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-safe max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
              Dúvidas frequentes
            </p>
            <h2 className="mb-8">Perguntas sobre {passeio.nomeCurto || passeio.nome.split(" ").pop()}</h2>
            <FAQAccordion items={faqItems} />
          </div>
        </section>
      )}

      {/* I5.5 — CTA SECUNDÁRIO */}
      <section className="bg-white pb-10">
        <div className="container-safe max-w-3xl">
          <div className="rounded-2xl p-6 md:p-8 text-center" style={{ background: "rgba(255,107,53,0.06)", border: "1px solid rgba(255,107,53,0.15)" }}>
            <p className="text-dark text-sm mb-4 font-medium">
              Ficou com alguma dúvida? Fala com Murillo direto no WhatsApp — é rápido.
            </p>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white font-extrabold text-sm px-6 py-3.5 rounded-full min-h-[48px] transition-all hover:scale-[1.02]"
              style={{ boxShadow: '0 4px 20px rgba(255,107,53,0.35)' }}
              aria-label="Reservar no WhatsApp"
            >
              💬 Reservar no WhatsApp
            </Link>
          </div>
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
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
              Antes de ir
            </p>
            <h2 className="mb-8">Informações práticas para o dia do passeio</h2>

            <div className="space-y-6">
              {passeio.informacoesPraticas.oqueLevar && passeio.informacoesPraticas.oqueLevar.length > 0 && (
                <div className="bg-white rounded-2xl border border-black/[0.07] p-5" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                  <h3 className="font-bold text-dark flex items-center gap-2 mb-4" style={{ fontSize: '14px', letterSpacing: 0 }}>
                    <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <path d="M21 10H3M16 2v4M8 2v4M3 6h18v16H3z"/>
                      </svg>
                    </span>
                    O que levar
                  </h3>
                  <ul className="space-y-2">
                    {passeio.informacoesPraticas.oqueLevar.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {passeio.informacoesPraticas.pontoEncontro && (
                <div className="bg-white rounded-2xl border border-black/[0.07] p-5" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                  <h3 className="font-bold text-dark flex items-center gap-2 mb-3" style={{ fontSize: '14px', letterSpacing: 0 }}>
                    <span className="w-7 h-7 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#004E89" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    </span>
                    Ponto de Encontro
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{passeio.informacoesPraticas.pontoEncontro}</p>
                  {passeio.informacoesPraticas.pontoEncontroUrl && (
                    <a href={passeio.informacoesPraticas.pontoEncontroUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-semibold hover:text-accent mt-2 inline-block">
                      Abrir no Maps ↗
                    </a>
                  )}
                </div>
              )}

              {passeio.informacoesPraticas.horario && (
                <div className="bg-white rounded-2xl border border-black/[0.07] p-5" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                  <h3 className="font-bold text-dark flex items-center gap-2 mb-3" style={{ fontSize: '14px', letterSpacing: 0 }}>
                    <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                      </svg>
                    </span>
                    Horário de Saída
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{passeio.informacoesPraticas.horario}</p>
                </div>
              )}

              <div className="bg-white rounded-2xl border border-black/[0.07] p-5" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <h3 className="font-bold text-dark flex items-center gap-2 mb-3" style={{ fontSize: '14px', letterSpacing: 0 }}>
                  <span className="w-7 h-7 rounded-lg bg-whatsapp/10 flex items-center justify-center shrink-0">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.118 1.522 5.848L.057 23.292a.5.5 0 0 0 .651.651l5.444-1.465A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.535-5.209-1.462l-.374-.224-3.876 1.044 1.044-3.876-.224-.374A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                  </span>
                  Contato direto
                </h3>
                <p className="text-sm text-gray-600">
                  Fala com Murillo pelo WhatsApp —{" "}
                  <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-accent">
                    +55 83 9908-7830
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* S3 — CTA FINAL */}
      <CTAFinal whatsappUrl={whatsappUrl} />

      {/* S4 — PASSEIOS SIMILARES */}
      {similares.length > 0 && (
        <section className="section-padding" style={{ background: "#F7F8F7" }}>
          <div className="container-safe">
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
              Continue explorando
            </p>
            <h2 className="mb-8">Outros passeios em {categoriaLabel.toLowerCase()} em João Pessoa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {similares.map((p) => (
                <PasseioCard key={p.id} passeio={p} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href={`/passeios/${params.categoria}`}
                className="text-sm font-semibold text-secondary hover:text-primary transition-colors border-b-2 border-secondary/30 hover:border-primary pb-0.5"
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
