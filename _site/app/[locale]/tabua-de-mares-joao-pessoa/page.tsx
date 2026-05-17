/**
 * Página pública — Tábua de Maré em João Pessoa (versão MANUAL v1).
 *
 * Rota: `/tabua-de-mares-joao-pessoa`
 *
 * Foco SEO (keywords-alvo):
 *  - tábua de maré João Pessoa
 *  - tábua de marés João Pessoa 2026
 *  - maré baixa João Pessoa
 *  - piscinas naturais João Pessoa
 *  - Piscinas Naturais do Seixas / Areia Vermelha / Picãozinho
 *
 * Esta página NÃO se anuncia como "tábua oficial da Marinha". Usa linguagem
 * "consulte as melhores datas" e "confirme com Murillo no WhatsApp", e
 * funciona como porta de entrada editorial para os 3 passeios de maré.
 *
 * Co-existe com `/passeios/piscinas-naturais/calendario` (operacional, com
 * dados automáticos). A relação canônica entre as duas será decidida em
 * issue posterior.
 */

import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { empresa } from "@/data/empresa";
import {
  TABUA_MARES_MANUAL_2026,
  getMesAtual,
  buildMensagemWhatsApp,
} from "@/data/tabua-mares-manual";
import { generateFAQSchema, generateBreadcrumbSchema, buildLocaleAlternates } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTAFinal } from "@/components/CTAFinal";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TabuaMareMesTabs } from "@/components/TabuaMareMesTabs";
import { TabuaMareMensal } from "@/components/TabuaMareMensal";
import { TabuaMarePasseiosRelacionados } from "@/components/TabuaMarePasseiosRelacionados";

const SITE_URL = `https://${empresa.dominio}`;
const PAGE_URL = `${SITE_URL}/tabua-de-mares-joao-pessoa`;

const KEYWORDS = [
  "tábua de maré João Pessoa",
  "tábua de marés João Pessoa 2026",
  "maré baixa João Pessoa",
  "piscinas naturais João Pessoa",
  "Piscinas Naturais do Seixas",
  "Areia Vermelha",
  "Picãozinho",
];

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const alternates = buildLocaleAlternates(params.locale, "/tabua-de-mares-joao-pessoa");
  return {
    title:
      "Tábua de Maré João Pessoa 2026 — Seixas, Picãozinho e Areia Vermelha | Vem Passear em Jampa",
    description:
      "Consulte as melhores datas de maré baixa em João Pessoa para Piscinas Naturais do Seixas, Picãozinho e Areia Vermelha. Atendimento direto com Murillo no WhatsApp.",
    keywords: KEYWORDS.join(", "),
    alternates,
    openGraph: {
      title: "Tábua de Maré João Pessoa 2026 — Vem Passear em Jampa",
      description:
        "Veja as melhores datas para passeios de maré baixa em João Pessoa: Piscinas Naturais do Seixas, Picãozinho e Areia Vermelha.",
      url: alternates.canonical,
      type: "website",
      siteName: "Vem Passear em Jampa",
    },
  };
}

const FAQ_ITEMS: Array<{ pergunta: string; resposta: string }> = [
  {
    pergunta:
      "Qual a melhor maré para piscinas naturais em João Pessoa?",
    resposta:
      "A melhor condição é a maré bem baixa — quanto mais baixa, mais piscina de coral fica exposta e mais tranquilo é o mergulho. Em geral, alturas próximas de 0,5m ou menos rendem passeios mais bonitos. A altura varia todo dia, por isso é preciso consultar a tábua antes de marcar.",
  },
  {
    pergunta: "Quais passeios dependem da maré baixa?",
    resposta:
      "Os três principais são: Piscinas Naturais do Seixas, Picãozinho e Areia Vermelha. Outros passeios da costa de João Pessoa — Pôr do Sol do Jacaré, Litoral Sul Clássico, City Tour — não dependem da maré e operam todos os dias.",
  },
  {
    pergunta: "A Areia Vermelha sai todos os dias?",
    resposta:
      "Não. A Areia Vermelha é um banco de areia em Cabedelo que só aparece com a maré baixa. Algumas semanas têm vários dias de saída seguidos; outras não têm nenhum. Por isso o melhor é consultar a tábua e confirmar comigo no WhatsApp antes de fechar a data.",
  },
  {
    pergunta: "Picãozinho depende da maré?",
    resposta:
      "Sim. O Picãozinho é um conjunto de piscinas naturais a cerca de 1,5 km da praia de Tambaú, e só fica seguro para nado e snorkel quando a maré está baixa. Quando a maré sobe, as piscinas desaparecem.",
  },
  {
    pergunta: "Piscinas Naturais do Seixas dependem da maré?",
    resposta:
      "Sim. As Piscinas do Seixas ficam no ponto mais oriental do continente americano e só são visitáveis na maré baixa. Quando a maré está alta, a área fica coberta e o passeio não acontece.",
  },
  {
    pergunta: "Como saber o melhor dia para reservar?",
    resposta:
      "Olha a tábua nesta página para ter uma referência geral e me chama no WhatsApp com a data da sua viagem. Eu confirmo se a maré está favorável e indico qual o melhor passeio para o seu dia.",
  },
  {
    pergunta:
      "Posso reservar um passeio de piscinas naturais sem olhar a tábua de marés?",
    resposta:
      "Pode mandar mensagem mesmo sem consultar — eu cruzo a sua data com a maré e te oriento. Mas se você já consultou e tem flexibilidade de data, fica mais fácil escolher uma janela com a maré boa.",
  },
];

const FAQ_SCHEMA = generateFAQSchema(FAQ_ITEMS);
const BREADCRUMB_SCHEMA = generateBreadcrumbSchema([
  { name: "Início", item: SITE_URL },
  { name: "Tábua de Maré em João Pessoa", item: PAGE_URL },
]);

const WA_URL = `${empresa.contato.whatsappLink}?text=${encodeURIComponent(buildMensagemWhatsApp())}`;

export default function TabuaMaresJoaoPessoaPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const mesAtual = getMesAtual();

  return (
    <>
      {/* JSON-LD: FAQ + Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <Breadcrumb
        items={[
          { label: "Início", href: "/" },
          { label: "Tábua de Maré em João Pessoa" },
        ]}
        currentUrl={PAGE_URL}
      />

      {/* HERO */}
      <section
        style={{
          background: "var(--cor-fundo)",
          borderBottom: "1px solid var(--cor-borda)",
        }}
      >
        <div className="container-safe py-12 md:py-20">
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--cor-primaria)",
              marginBottom: "14px",
            }}
          >
            João Pessoa · Paraíba · 2026
          </span>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 600,
              lineHeight: 1.05,
              color: "var(--cor-texto-escuro)",
              maxWidth: "780px",
              marginBottom: "20px",
            }}
          >
            Tábua de Maré em João Pessoa
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(16px, 1.7vw, 19px)",
              lineHeight: 1.6,
              color: "var(--cor-texto-medio)",
              maxWidth: "640px",
              marginBottom: "28px",
            }}
          >
            Consulte as melhores datas para passeios que dependem da maré baixa —
            Piscinas Naturais do Seixas, Picãozinho e Areia Vermelha. Confirme a
            data ideal direto com Murillo no WhatsApp.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--cor-whatsapp)",
              color: "#fff",
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              fontSize: "16px",
              padding: "16px 24px",
              borderRadius: "999px",
              minHeight: "52px",
              textDecoration: "none",
              boxShadow: "0 4px 18px rgba(37,211,102,0.30)",
            }}
          >
            Consultar melhor dia no WhatsApp
          </a>
        </div>
      </section>

      {/* EXPLICAÇÃO EDITORIAL */}
      <section className="container-safe py-12 md:py-16">
        <div style={{ maxWidth: "720px" }}>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(22px, 2.5vw, 28px)",
              fontWeight: 600,
              color: "var(--cor-texto-escuro)",
              marginBottom: "16px",
            }}
          >
            Por que a maré importa
          </h2>
          <div
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              lineHeight: 1.75,
              color: "var(--cor-texto-medio)",
            }}
          >
            <p style={{ marginBottom: "14px" }}>
              Alguns passeios em João Pessoa dependem da{" "}
              <strong>maré baixa</strong> para acontecer no melhor momento. É o
              caso das <strong>Piscinas Naturais do Seixas</strong>,{" "}
              <strong>Picãozinho</strong> e <strong>Areia Vermelha</strong>.
            </p>
            <p>
              Quando a maré baixa, aparecem os corais, bancos de areia e
              piscinas naturais com água rasa e cristalina. Por isso, antes de
              reservar, confira o mês da sua viagem e confirme a melhor data
              pelo WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* SELETOR + PAINÉIS MENSAIS */}
      <section
        id="calendarios"
        className="py-8 md:py-12"
        style={{
          background: "var(--cor-fundo-puro)",
          borderTop: "1px solid var(--cor-borda)",
        }}
      >
        <div className="container-safe pb-2">
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(22px, 2.5vw, 28px)",
              fontWeight: 600,
              color: "var(--cor-texto-escuro)",
              marginBottom: "8px",
            }}
          >
            Tábua mês a mês — Maio a Dezembro de 2026
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "15px",
              color: "var(--cor-texto-medio)",
              marginBottom: "8px",
            }}
          >
            Selecione o mês para ver as janelas de maré baixa.
          </p>
        </div>

        <TabuaMareMesTabs
          meses={TABUA_MARES_MANUAL_2026}
          defaultMesSlug={mesAtual.mesSlug}
        />

        {/* Painéis renderizados todos no SSR — atributo hidden inicial
            é controlado pela prop `visivel`; o componente client alterna depois. */}
        {TABUA_MARES_MANUAL_2026.map((mes) => (
          <TabuaMareMensal
            key={mes.mesSlug}
            mes={mes}
            visivel={mes.mesSlug === mesAtual.mesSlug}
          />
        ))}
      </section>

      {/* CARDS DE PASSEIOS DE MARÉ */}
      <TabuaMarePasseiosRelacionados />

      {/* FAQ */}
      <section className="container-safe py-12 md:py-16">
        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 600,
            color: "var(--cor-texto-escuro)",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Perguntas frequentes sobre a tábua de maré
        </h2>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA FINAL */}
      <CTAFinal
        whatsappUrl={WA_URL}
        label="Tábua de maré"
        titulo="Vamos confirmar a melhor data para o seu passeio?"
        subtitulo="Manda mensagem com a data da sua viagem. Eu confirmo a maré e indico o passeio certo para o seu dia."
        microcopy="Resposta rápida durante o dia · sem compromisso"
      />
    </>
  );
}
