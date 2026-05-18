/**
 * Página de Categoria — /passeios/[categoria]/
 */

import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { passeios, getPasseiosByCategoria } from "@/data/passeios";
import { localizarPasseios } from "@/lib/passeios-i18n";
import { generateMetadata as generateSeoMetadata, buildLocaleAlternates } from "@/lib/seo";
import { empresa } from "@/data/empresa";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASticky } from "@/components/CTASticky";
import { CTAFinal } from "@/components/CTAFinal";
import { CategoryIcon } from "@/components/CategoryIcon";
import { PasseioCard } from "@/components/PasseioCard";

interface CategoriaPageProps {
  params: { locale: string; categoria: string };
}

const CATEGORIA_TKEY: Record<string, string> = {
  pacotes: "pacotes",
  "litoral-sul": "litoralSul",
  "litoral-norte": "litoralNorte",
  "piscinas-naturais": "piscinasNaturais",
  "city-tour": "cityTour",
  interestaduais: "interestaduais",
};

export function generateStaticParams() {
  const categorias = Array.from(new Set(passeios.map((p) => p.categoria)));
  return categorias.map((categoria) => ({ categoria }));
}

export async function generateMetadata({ params }: CategoriaPageProps): Promise<Metadata> {
  const tkey = CATEGORIA_TKEY[params.categoria];
  const tCat = await getTranslations({ locale: params.locale, namespace: "Categorias" });
  const tCatDesc = await getTranslations({ locale: params.locale, namespace: "Categoria.descricoes" });
  const nome = tkey ? tCat(tkey) : params.categoria.replace(/-/g, " ");
  const descricao = tkey ? tCatDesc(tkey) : `${nome} — João Pessoa`;
  const titleSuffix =
    params.locale === "en" ? "in João Pessoa" : params.locale === "es" ? "en João Pessoa" : "em João Pessoa";
  const base = generateSeoMetadata({
    title: `${params.locale === "en" ? "Tours" : params.locale === "es" ? "Tours" : "Passeios"} ${nome} ${titleSuffix}`,
    description: descricao,
    keywords: [nome, "João Pessoa", "Paraíba"],
    ogImage: "/og-image.svg",
  });
  const alternates = buildLocaleAlternates(params.locale, `/passeios/${params.categoria}`);
  return {
    ...base,
    alternates,
    openGraph: {
      ...(base.openGraph ?? {}),
      url: alternates.canonical,
    },
  };
}

export default async function CategoriaPage({ params }: CategoriaPageProps) {
  const { locale, categoria } = params;
  setRequestLocale(locale);

  const t    = await getTranslations('Categoria');
  const tSt  = await getTranslations('CTASticky');
  const tWa  = await getTranslations('Whatsapp');
  const tNav = await getTranslations('Nav');

  const itens = localizarPasseios(getPasseiosByCategoria(categoria), locale);
  const tkey  = CATEGORIA_TKEY[categoria];
  const tCat  = await getTranslations("Categorias");
  const tCatDesc = await getTranslations("Categoria.descricoes");
  const nome  = tkey ? tCat(tkey) : categoria.replace(/-/g, " ");
  const descricao = tkey ? tCatDesc(tkey) : null;
  const mostraExcursoesCallout = categoria === "pacotes" || categoria === "interestaduais";

  const waUrl = `${empresa.contato.whatsappLink}?text=${tWa('mensagemGeral')}`;

  return (
    <div style={{ background: 'var(--cor-fundo)' }}>
      <CTASticky whatsappUrl={waUrl} label={tSt('label')} />

      <Breadcrumb
        items={[
          { label: tNav("inicio"),  href: "/" },
          { label: tNav("passeios"), href: "/passeios" },
          { label: nome },
        ]}
        currentUrl={`https://${empresa.dominio}/passeios/${categoria}/`}
      />

      {/* ── Hero ── */}
      <section
        style={{
          background: 'var(--cor-primaria)',
          padding: '64px 24px 80px',
          textAlign: 'center',
        }}
      >
        <div className="container-safe" style={{ maxWidth: '640px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '64px',
              height: '64px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '16px',
              color: 'var(--cor-acento-suave)',
              marginBottom: '20px',
            }}
          >
            <CategoryIcon slug={categoria} size={36} strokeWidth={1.5} />
          </div>

          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(28px, 4.5vw, 48px)',
              fontWeight: 600,
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            {nome} {t('emJoaoPessoa')}
          </h1>

          {descricao && (
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '17px',
                color: 'var(--cor-areia)',
                lineHeight: 1.65,
                marginBottom: '16px',
              }}
            >
              {descricao}
            </p>
          )}

          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.05em',
            }}
          >
            {itens.length === 1
              ? t('disponivel', { count: itens.length })
              : t('disponiveis', { count: itens.length })}
          </p>
        </div>
      </section>

      {/* ── Grid de passeios ── */}
      <section className="section-padding">
        <div className="container-safe">
          {itens.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <p style={{ color: 'var(--cor-texto-claro)' }}>{t('nenhumPasseio')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itens.map((passeio) => (
                <PasseioCard key={passeio.id} passeio={passeio} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cross-link Excursões (só pacotes e interestaduais) */}
      {mostraExcursoesCallout && (
        <div className="container-safe" style={{ paddingBottom: '64px' }}>
          <div
            style={{
              borderRadius: '16px',
              border: '1px solid var(--cor-borda)',
              background: 'var(--cor-fundo-puro)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
            className="md:flex-row md:items-center md:justify-between"
          >
            <div>
              <span className="section-kicker">{t('grupoKicker')}</span>
              <h3
                className="font-serif"
                style={{
                  fontSize: 'clamp(18px, 2vw, 22px)',
                  fontWeight: 600,
                  color: 'var(--cor-primaria)',
                  margin: '0 0 8px',
                }}
              >
                {t('grupoTitulo')}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '15px',
                  color: 'var(--cor-texto-medio)',
                  maxWidth: '480px',
                  margin: 0,
                }}
              >
                {t('grupoSubtitulo')}
              </p>
            </div>
            <Link
              href="/servicos/excursoes-e-grupos"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--cor-primaria)',
                color: '#fff',
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '15px',
                padding: '14px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'background 200ms',
              }}
              className="hover:opacity-90 transition-opacity"
            >
              {t('grupoCta')}
            </Link>
          </div>
        </div>
      )}

      {/* ── CTA Final ── */}
      <CTAFinal
        whatsappUrl={waUrl}
        label={t('ctaLabel')}
        titulo={t('ctaTitulo', { nome })}
        subtitulo={t('ctaSubtitulo')}
        textoBotao={t('ctaBotao')}
        microcopy={t('ctaMicrocopy')}
      />
    </div>
  );
}
