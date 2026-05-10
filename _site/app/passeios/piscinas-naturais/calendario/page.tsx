import type { Metadata } from "next";
import Link from "next/link";
import { TABUA_MARES_2026 } from "@/data/tabua-mares";
import { empresa } from "@/data/empresa";
import {
  getSaidasDoMes,
  agruparJanelasDeSaida,
  buildProximaSaidaCard,
  getStatusLabel,
  formatarDataCurta,
  formatarHorario,
} from "@/lib/tabua-mares";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { ProximaSaidaCard } from "@/components/ProximaSaidaCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTAFinal } from "@/components/CTAFinal";
import { CTASticky } from "@/components/CTASticky";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PoliticaCancelamento } from "@/components/PoliticaCancelamento";

const SITE_URL = "https://vempassearjampa.com.br";
const WA_BASE = "https://wa.me/558399087830";
const PAGE_URL = `${SITE_URL}/passeios/piscinas-naturais/calendario`;

const WA_URL = `${WA_BASE}?text=Oi%2C+quero+saber+sobre+as+datas+dispon%C3%ADveis+para+as+piscinas+naturais`;

export const metadata: Metadata = {
  title: "Calendário de Marés — Piscinas Naturais de João Pessoa | Vem Passear",
  description:
    "Veja as datas de saída para Seixas, Picãozinho e Areia Vermelha em João Pessoa. Horários baseados na tábua de marés. Agende pelo WhatsApp.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Calendário de Marés — Piscinas Naturais de João Pessoa",
    description:
      "Veja as datas de saída para Seixas, Picãozinho e Areia Vermelha em João Pessoa. Horários baseados na tábua de marés.",
    url: PAGE_URL,
    type: "website",
    locale: "pt_BR",
  },
};

const STATUS_STYLE = {
  excelente: {
    bg: "bg-green-50",
    border: "border-green-200",
    badge: "bg-green-100 text-green-800 border-green-300",
    dot: "bg-green-500",
    icon: "✅",
  },
  boa: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-800 border-emerald-300",
    dot: "bg-emerald-500",
    icon: "🟢",
  },
  consultar: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-800 border-amber-300",
    dot: "bg-amber-400",
    icon: "🟡",
  },
  "sem-passeio": {
    bg: "bg-gray-50",
    border: "border-gray-200",
    badge: "bg-gray-100 text-gray-500 border-gray-200",
    dot: "bg-gray-300",
    icon: "❌",
  },
} as const;

const FAQ_ITEMS = [
  {
    pergunta: "Quantas saídas têm em maio de 2026 para as piscinas naturais?",
    resposta:
      "Em maio de 2026, há 18 dias com saída confirmada para as piscinas naturais — divididos em 3 ciclos de maré. Os melhores dias são entre 13 e 20 de maio, quando a maré atinge condição excelente (abaixo de 0,5m), com destaque para 16, 17 e 18/05 com maré histórica de 0,2m (sizígia).",
  },
  {
    pergunta: "Por que os passeios de piscinas naturais dependem da maré?",
    resposta:
      "As piscinas naturais do Seixas, Picãozinho e Areia Vermelha só aparecem quando a maré baixa. Com água acima de 0,8m o acesso fica comprometido. Por isso os passeios saem apenas em determinados dias do mês, sempre na janela da maré baixa da manhã.",
  },
  {
    pergunta: "O que significa maré 'excelente', 'boa' e 'consultar'?",
    resposta:
      "Excelente (0,0–0,5m): piscinas bem expostas, experiência completa. Boa (0,6–0,7m): piscinas acessíveis com boa visibilidade. Consultar (0,8m): condições reduzidas — verificar com Murillo antes de reservar. Sem passeio (acima de 0,9m): piscinas submersas, passeio não realizado.",
  },
  {
    pergunta: "Posso reservar uma data específica do calendário?",
    resposta:
      "Sim. Escolha a data desejada no calendário e entre em contato pelo WhatsApp com Murillo. Ele confirma a disponibilidade, o horário exato de saída e o ponto de encontro. As saídas partem de Tambaú, João Pessoa.",
  },
  {
    pergunta: "Os dados do calendário são oficiais da Marinha?",
    resposta:
      "Os horários são baseados na tábua de marés do Porto de Cabedelo/PB e revisados por Murillo antes de cada publicação. Pequenas variações podem ocorrer — sempre confirme o horário final pelo WhatsApp na véspera do passeio.",
  },
];

export default function CalendarioPage() {
  const saidas = getSaidasDoMes("seixas", 5, 2026, TABUA_MARES_2026);
  const janelas = agruparJanelasDeSaida(saidas);
  const proximaSaida = buildProximaSaidaCard("seixas", TABUA_MARES_2026);

  const faqSchema = generateFAQSchema(FAQ_ITEMS);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Início", item: SITE_URL },
    { name: "Piscinas Naturais", item: `${SITE_URL}/passeios/piscinas-naturais` },
    { name: "Calendário de Marés", item: PAGE_URL },
  ]);

  // Summary counts for the month
  const comPasseio = saidas.filter((s) => s.temPasseio).length;
  const excelentes = saidas.filter((s) => s.statusOperacional === "excelente").length;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Piscinas Naturais", href: "/passeios/piscinas-naturais" },
          { label: "Calendário de Marés" },
        ]}
      />

      <CTASticky whatsappUrl={WA_URL} label="Falar com Murillo no WhatsApp" />

      {/* HERO */}
      <section id="hero-section" className="bg-secondary text-white">
        <div className="container-safe py-10 md:py-14">
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-2xl">
            Tábua de Marés em João Pessoa — Piscinas Naturais
          </h1>
          <p className="text-white/80 text-base md:text-lg mt-3 max-w-xl">
            Calendário atualizado com os melhores dias para visitar Seixas, Picãozinho
            e Areia Vermelha. Saídas baseadas na maré baixa do Porto de Cabedelo.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-white/10 rounded-lg px-4 py-3 text-center">
              <p className="text-2xl font-bold text-white">{comPasseio}</p>
              <p className="text-white/70 text-xs mt-0.5">dias com saída</p>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-3 text-center">
              <p className="text-2xl font-bold text-white">{excelentes}</p>
              <p className="text-white/70 text-xs mt-0.5">dias excelentes</p>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-3 text-center">
              <p className="text-2xl font-bold text-white">{janelas.length}</p>
              <p className="text-white/70 text-xs mt-0.5">ciclos de maré</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRÓXIMA SAÍDA */}
      <ProximaSaidaCard card={proximaSaida} whatsappUrl={WA_URL} />

      {/* LEGENDA */}
      <div className="container-safe py-4">
        <div className="flex flex-wrap gap-3">
          {(["excelente", "boa", "consultar", "sem-passeio"] as const).map(
            (status) => (
              <div key={status} className="flex items-center gap-1.5 text-xs text-gray-600">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${STATUS_STYLE[status].dot}`}
                  aria-hidden="true"
                />
                {STATUS_STYLE[status].icon} {getStatusLabel(status)}
              </div>
            )
          )}
        </div>
      </div>

      {/* CALENDÁRIO — ciclos de maio */}
      <section className="container-safe pb-10">
        <h2 className="text-xl md:text-2xl font-bold text-dark mb-6">
          Maio 2026 — {comPasseio} dias com saída
        </h2>

        {janelas.length === 0 && (
          <p className="text-gray-500 text-sm">
            Nenhuma saída disponível neste mês. Consulte o próximo mês pelo WhatsApp.
          </p>
        )}

        <div className="space-y-8">
          {janelas.map((janela) => (
            <div key={janela.cicloId} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Cabeçalho do ciclo */}
              <div className="bg-secondary/5 border-b border-gray-200 px-4 py-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-dark text-sm md:text-base">
                    {janela.mesAno} — Ciclo {janela.cicloId.split("-ciclo-")[1]}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {formatarDataCurta(janela.dataInicio)} a {formatarDataCurta(janela.dataFim)}{" "}
                    ({janela.saidas.length} dia{janela.saidas.length !== 1 ? "s" : ""})
                  </span>
                </div>
              </div>

              {/* Dias do ciclo */}
              <div className="divide-y divide-gray-100">
                {janela.saidas.map((saida) => {
                  const style = STATUS_STYLE[saida.statusOperacional];
                  return (
                    <div
                      key={saida.data}
                      className={`flex items-center justify-between px-4 py-3 ${style.bg}`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-2 h-2 rounded-full flex-shrink-0 ${style.dot}`}
                          aria-hidden="true"
                        />
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
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${style.badge}`}
                        >
                          {getStatusLabel(saida.statusOperacional)}
                        </span>
                        <Link
                          href={`${WA_URL}+para+${encodeURIComponent(saida.data)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-[#25D366] hover:text-[#1ea355] transition-colors whitespace-nowrap"
                          aria-label={`Reservar saída de ${formatarDataCurta(saida.data)}`}
                        >
                          Reservar →
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

      {/* PASSEIOS DESTE CALENDÁRIO */}
      <section className="bg-light section-padding">
        <div className="container-safe max-w-3xl">
          <h2>Passeios que seguem este calendário</h2>
          <div className="mt-4 space-y-3">
            {[
              {
                slug: "seixas",
                nome: "Piscinas Naturais do Seixas",
                desc: "A maré mais baixa de João Pessoa. Piscinas suspensas sobre o recife.",
              },
              {
                slug: "picaozinho",
                nome: "Piscinas Naturais de Picãozinho",
                desc: "Piscinas naturais no mar aberto, a 2km da Praia de Tambaú.",
              },
              {
                slug: "areia-vermelha",
                nome: "Areia Vermelha — Passeio de Catamarã",
                desc: "Ilha de areia que aparece com a maré baixa no litoral norte.",
              },
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
          <h2>Perguntas sobre a tábua de marés em João Pessoa</h2>
          <div className="mt-6">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* Política de cancelamento — relevante para passeios dependentes de maré */}
      <PoliticaCancelamento whatsappUrl={WA_URL} />

      {/* CTA FINAL */}
      <CTAFinal
        whatsappUrl={WA_URL}
        titulo="Escolheu a data? Fala com Murillo para confirmar a reserva."
        subtitulo="Atendimento direto, preço justo e roteiro organizado."
      />
    </>
  );
}
