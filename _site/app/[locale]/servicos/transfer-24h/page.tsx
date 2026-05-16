/**
 * Página: Transfer 24h — /servicos/transfer-24h/
 * ISSUE-13
 * Fonte dos dados: _site/data/servicos.ts
 * Preço: cobrado por trajeto, valor sob consulta — não inventar.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServico } from "@/data/servicos";
import { empresa } from "@/data/empresa";
import { buildLocaleAlternates } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASticky } from "@/components/CTASticky";

const servico = getServico("transfer-24h");

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!servico) return {};
  const alternates = buildLocaleAlternates(params.locale, "/servicos/transfer-24h");
  return {
    title: `${servico.h1} | Vem Passear em Jampa`,
    description: servico.metaDescription,
    alternates,
    openGraph: {
      title: servico.h1,
      description: servico.metaDescription,
      url: alternates.canonical,
      images: [
        { url: "/og-image.svg", width: 1200, height: 630, alt: servico.h1 },
      ],
    },
  };
}

const WA_URL = `${empresa.contato.whatsappLink}?text=Oi%2C+quero+solicitar+cota%C3%A7%C3%A3o+de+transfer`;

const SERVICE_SCHEMA = servico
  ? {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Transfer privativo",
      name: servico.h1,
      description: servico.descricao,
      areaServed: {
        "@type": "City",
        name: "João Pessoa",
        addressRegion: "PB",
        addressCountry: "BR",
      },
      provider: {
        "@type": "TravelAgency",
        name: "Vem Passear em Jampa",
        telephone: "+55 83 9908-7830",
        url: "https://vempassearjampa.netlify.app",
      },
      url: "https://vempassearjampa.netlify.app/servicos/transfer-24h",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Turistas em João Pessoa, transfer de aeroporto, transfer entre hotéis",
      },
    }
  : null;

export default function TransferPage() {
  if (!servico) notFound();

  return (
    <div>
      {SERVICE_SCHEMA && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
        />
      )}

      <CTASticky whatsappUrl={WA_URL} label="Solicitar cotação no WhatsApp" />

      {/* Breadcrumb (emite schema BreadcrumbList automaticamente) */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços" },
          { label: "Transfer 24h" },
        ]}
        currentUrl={`https://${empresa.dominio}/servicos/transfer-24h/`}
      />

      {/* Hero */}
      <section
        id="hero-section"
        style={{ background: 'var(--cor-primaria)', padding: '64px 24px 80px', textAlign: 'center' }}
      >
        <div className="container-safe" style={{ maxWidth: '620px' }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-inter)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--cor-acento)',
              marginBottom: '16px',
            }}
          >
            Serviço
          </span>
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
            {servico.h1}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '17px',
              color: 'var(--cor-areia)',
              lineHeight: 1.65,
              marginBottom: '32px',
            }}
          >
            {servico.descricao}
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--cor-acento)',
              color: '#fff',
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              fontSize: '17px',
              padding: '18px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: 'var(--sombra-cta)',
            }}
          >
            💬 Solicitar cotação pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Informações do serviço */}
      <section className="section-padding">
        <div className="container-safe max-w-3xl">

          {/* Cards de destaque */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm text-gray-500 mb-1">Atendimento</p>
              <p className="text-xl font-bold text-secondary">{servico.atendimento}</p>
              <p className="text-sm text-gray-600 mt-1">Disponível todos os dias, qualquer horário</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm text-gray-500 mb-1">Cobertura</p>
              <p className="text-lg font-bold text-secondary">{servico.cobertura}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm text-gray-500 mb-1">Como é cobrado</p>
              <p className="text-xl font-bold text-secondary">Por trajeto</p>
              <p className="text-sm text-gray-600 mt-1">Não é por pessoa — um preço por corrida</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm text-gray-500 mb-1">Valor</p>
              <p className="text-lg font-bold text-primary">Sob consulta</p>
              <p className="text-sm text-gray-600 mt-1">Varia por trajeto — solicite cotação no WhatsApp</p>
            </div>
          </div>

          {/* Por que contratar */}
          <div className="bg-light rounded-lg p-6 mb-10">
            <h2 className="text-xl font-bold text-secondary mb-4">
              Por que contratar o transfer com a Vem Passear?
            </h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "Motorista pontual — você não fica esperando na chegada ao aeroporto",
                "Veículo privativo — só o seu grupo, sem dividir com desconhecidos",
                "Atendimento 24h — funciona para voos noturnos e madrugada",
                "Cadastur ativo — empresa registrada no Ministério do Turismo",
                "Comunicação direta com Murillo pelo WhatsApp — sem intermediários",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trajetos comuns */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-secondary mb-4">Trajetos mais solicitados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { de: "Aeroporto Castro Pinto", para: "Hotéis de Tambaú / Cabo Branco" },
                { de: "Hotel", para: "Aeroporto (early check-out ou voo noturno)" },
                { de: "Aeroporto", para: "Qualquer ponto de João Pessoa" },
                { de: "Hotel / pousada", para: "Ponto de embarque dos passeios" },
              ].map((t, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4 text-sm">
                  <p className="text-gray-500">{t.de}</p>
                  <p className="text-primary font-semibold">→ {t.para}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Outros trajetos disponíveis — consulte disponibilidade pelo WhatsApp.
            </p>
          </div>

          {/* Como contratar */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-secondary mb-4">Como contratar</h2>
            <ol className="space-y-4">
              {[
                { n: "1", t: "Mande uma mensagem no WhatsApp", d: "Informe: data, horário, trajeto e número de pessoas." },
                { n: "2", t: "Receba a cotação", d: "Murillo responde com o valor por trajeto e confirma disponibilidade." },
                { n: "3", t: "Confirme e aguarde", d: "O motorista chega no horário combinado. Sem surpresas." },
              ].map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    {step.n}
                  </span>
                  <div>
                    <p className="font-semibold text-dark">{step.t}</p>
                    <p className="text-sm text-gray-600">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </section>

      {/* CTA Final — id permite ao CTASticky recolher na area final */}
      <section id="cta-final" className="section-padding bg-primary text-white">
        <div className="container-safe text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Precisa de transfer em João Pessoa?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Mande uma mensagem com data, horário e trajeto — Murillo envia a cotação na hora.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            💬 Solicitar cotação pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Cross-link Excursões e Grupos */}
      <section className="container-safe py-10">
        <div className="rounded-2xl border border-[#C5B7A3]/50 bg-[#F7F8F7] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-1">Vai trazer um grupo?</p>
            <h3 className="font-serif font-bold text-secondary text-lg md:text-xl mb-1">Excursões e grupos têm operação dedicada</h3>
            <p className="text-sm text-gray-700 max-w-xl">Roteiro, transporte local, van/ônibus e apoio em campo para igreja, escola, família grande ou agência parceira.</p>
          </div>
          <Link
            href="/servicos/excursoes-e-grupos"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold px-5 py-3 rounded-full text-sm transition-colors whitespace-nowrap"
          >
            Ver Excursões e Grupos →
          </Link>
        </div>
      </section>

      {/* Link de volta */}
      <div className="container-safe py-6 text-center">
        <Link href="/passeios" className="text-sm text-primary hover:text-accent font-medium transition-colors">
          ← Ver todos os passeios em João Pessoa
        </Link>
      </div>
    </div>
  );
}
