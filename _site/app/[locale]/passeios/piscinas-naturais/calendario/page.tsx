import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { TABUA_MARES_2026 } from "@/data/tabua-mares";
import {
  getSaidasDoMes,
  agruparJanelasDeSaida,
  buildProximaSaidaCard,
  getStatusLabel,
  formatarDataCurta,
  formatarHorario,
} from "@/lib/tabua-mares";
import { generateFAQSchema, generateBreadcrumbSchema, buildLocaleAlternates } from "@/lib/seo";
import { ProximaSaidaCard } from "@/components/ProximaSaidaCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTAFinal } from "@/components/CTAFinal";
import { CTASticky } from "@/components/CTASticky";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PoliticaCancelamento } from "@/components/PoliticaCancelamento";

const SITE_URL = "https://vempassearjampa.netlify.app";
const WA_BASE = "https://wa.me/558399087830";
const TABUA_URL = `${SITE_URL}/tabua-de-mares-joao-pessoa`;

const WA_URL = `${WA_BASE}?text=Oi%2C+quero+saber+sobre+as+datas+dispon%C3%ADveis+para+as+piscinas+naturais`;

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "CalendarioPage" });
  const alternates = buildLocaleAlternates(params.locale, "/tabua-de-mares-joao-pessoa");
  return {
    title: t("seoTitle"),
    description: t("seoDescription"),
    alternates,
    robots: { index: false, follow: true },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: alternates.canonical,
      type: "website",
    },
  };
}

const STATUS_STYLE = {
  excelente: { bg: "bg-green-50", border: "border-green-200", badge: "bg-green-100 text-green-800 border-green-300", dot: "bg-green-500", icon: "✅" },
  boa: { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-800 border-emerald-300", dot: "bg-emerald-500", icon: "🟢" },
  consultar: { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100 text-amber-800 border-amber-300", dot: "bg-amber-400", icon: "🟡" },
  "sem-passeio": { bg: "bg-gray-50", border: "border-gray-200", badge: "bg-gray-100 text-gray-500 border-gray-200", dot: "bg-gray-300", icon: "❌" },
} as const;

export default async function CalendarioPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations("CalendarioPage");

  const saidas = getSaidasDoMes("seixas", 5, 2026, TABUA_MARES_2026);
  const janelas = agruparJanelasDeSaida(saidas);
  const proximaSaida = buildProximaSaidaCard("seixas", TABUA_MARES_2026);

  const faqItems = t.raw("faq") as Array<{ pergunta: string; resposta: string }>;
  const faqSchema = generateFAQSchema(faqItems);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t("crumbHome"), item: SITE_URL },
    { name: t("crumbPiscinas"), item: `${SITE_URL}/passeios/piscinas-naturais` },
    { name: t("crumbCalendario"), item: TABUA_URL },
  ]);

  const comPasseio = saidas.filter((s) => s.temPasseio).length;
  const excelentes = saidas.filter((s) => s.statusOperacional === "excelente").length;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb
        items={[
          { label: t("crumbHome"), href: "/" },
          { label: t("crumbPiscinas"), href: "/passeios/piscinas-naturais" },
          { label: t("crumbCalendario") },
        ]}
      />

      {/* Banner */}
      <div className="container-safe" style={{ paddingTop: "12px", paddingBottom: "0" }}>
        <div
          style={{
            background: "var(--cor-fundo)",
            border: "1px solid var(--cor-borda)",
            borderRadius: "12px",
            padding: "14px 16px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <p
            style={{ fontFamily: "var(--font-inter)", fontSize: "14px", color: "var(--cor-texto-medio)", margin: 0, lineHeight: 1.5 }}
            dangerouslySetInnerHTML={{ __html: t.raw("bannerTexto") as string }}
          />
          <Link
            href="/tabua-de-mares-joao-pessoa"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              fontSize: "14px",
              color: "var(--cor-primaria)",
              textDecoration: "none",
              padding: "8px 14px",
              borderRadius: "999px",
              border: "1px solid var(--cor-primaria)",
            }}
          >
            {t("bannerCta")}
          </Link>
        </div>
      </div>

      <CTASticky whatsappUrl={WA_URL} />

      {/* HERO */}
      <section id="hero-section" className="bg-secondary text-white">
        <div className="container-safe py-10 md:py-14">
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-2xl">
            {t("heroTitulo")}
          </h1>
          <p className="text-white/80 text-base md:text-lg mt-3 max-w-xl">
            {t("heroSubtitulo")}
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-white/10 rounded-lg px-4 py-3 text-center">
              <p className="text-2xl font-bold text-white">{comPasseio}</p>
              <p className="text-white/70 text-xs mt-0.5">{t("statDias")}</p>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-3 text-center">
              <p className="text-2xl font-bold text-white">{excelentes}</p>
              <p className="text-white/70 text-xs mt-0.5">{t("statExcelentes")}</p>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-3 text-center">
              <p className="text-2xl font-bold text-white">{janelas.length}</p>
              <p className="text-white/70 text-xs mt-0.5">{t("statCiclos")}</p>
            </div>
          </div>
        </div>
      </section>

      <ProximaSaidaCard card={proximaSaida} whatsappUrl={WA_URL} />

      {/* LEGENDA */}
      <div className="container-safe py-4">
        <div className="flex flex-wrap gap-3">
          {(["excelente", "boa", "consultar", "sem-passeio"] as const).map((status) => (
            <div key={status} className="flex items-center gap-1.5 text-xs text-gray-600">
              <span className={`w-2.5 h-2.5 rounded-full ${STATUS_STYLE[status].dot}`} aria-hidden="true" />
              {STATUS_STYLE[status].icon} {getStatusLabel(status)}
            </div>
          ))}
        </div>
      </div>

      {/* CALENDÁRIO */}
      <section className="container-safe pb-10">
        <h2 className="text-xl md:text-2xl font-bold text-dark mb-6">
          {t("calendarioTitulo", { count: comPasseio })}
        </h2>

        {janelas.length === 0 && (
          <p className="text-gray-500 text-sm">
            {t("calendarioVazio")}
          </p>
        )}

        <div className="space-y-8">
          {janelas.map((janela) => (
            <div key={janela.cicloId} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-secondary/5 border-b border-gray-200 px-4 py-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-dark text-sm md:text-base">
                    {janela.mesAno} — {t("cicloLabel", { n: janela.cicloId.split("-ciclo-")[1] })}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {formatarDataCurta(janela.dataInicio)} a {formatarDataCurta(janela.dataFim)}{" "}
                    ({janela.saidas.length}{" "}
                    {janela.saidas.length !== 1 ? t("diasSuffixPlural") : t("diasSuffix")})
                  </span>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {janela.saidas.map((saida) => {
                  const style = STATUS_STYLE[saida.statusOperacional];
                  return (
                    <div key={saida.data} className={`flex items-center justify-between px-4 py-3 ${style.bg}`}>
                      <div className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${style.dot}`} aria-hidden="true" />
                        <div>
                          <span className="text-sm font-semibold text-dark">
                            {formatarDataCurta(saida.data)}
                          </span>
                          <span className="text-xs text-gray-500 ml-2">
                            {saida.diaSemana.slice(0, 3)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {saida.horarioSaidaExibido && (
                          <span className="text-sm font-bold text-dark">
                            {formatarHorario(saida.horarioSaidaExibido)}
                          </span>
                        )}
                        {saida.alturaMare !== null && (
                          <span className="text-xs text-gray-500">
                            {saida.alturaMare}m
                          </span>
                        )}
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${style.badge}`}>
                          {getStatusLabel(saida.statusOperacional)}
                        </span>
                        <Link
                          href={`${WA_URL}+para+${encodeURIComponent(saida.data)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-[#25D366] hover:text-[#1ea355] transition-colors whitespace-nowrap"
                          aria-label={t("reservarSaidaAria", { data: formatarDataCurta(saida.data) })}
                        >
                          {t("reservar")}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PASSEIOS */}
      <section className="bg-light section-padding">
        <div className="container-safe max-w-3xl">
          <h2>{t("passeiosCalendarioTitulo")}</h2>
          <div className="mt-4 space-y-3">
            {[
              { slug: "seixas", nome: t("passeio1Nome"), desc: t("passeio1Desc") },
              { slug: "picaozinho", nome: t("passeio2Nome"), desc: t("passeio2Desc") },
              { slug: "areia-vermelha", nome: t("passeio3Nome"), desc: t("passeio3Desc") },
            ].map((p) => (
              <Link
                key={p.slug}
                href={`/passeios/piscinas-naturais/${p.slug}`}
                className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-sm transition-all group"
              >
                <span className="text-primary font-bold text-lg group-hover:scale-110 transition-transform">🌊</span>
                <div>
                  <p className="font-semibold text-dark text-sm group-hover:text-primary transition-colors">
                    {p.nome}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-safe max-w-3xl">
          <h2>{t("faqTitulo")}</h2>
          <div className="mt-6">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <PoliticaCancelamento whatsappUrl={WA_URL} />

      <CTAFinal
        whatsappUrl={WA_URL}
        titulo={t("ctaFinalTitulo")}
        subtitulo={t("ctaFinalSub")}
      />
    </>
  );
}
