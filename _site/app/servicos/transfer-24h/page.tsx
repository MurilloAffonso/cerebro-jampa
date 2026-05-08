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
import { CTAFinal } from "@/components/CTAFinal";
import { CTASticky } from "@/components/CTASticky";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TrustBlock } from "@/components/TrustBlock";

const servico = getServico("transfer-24h");

export const metadata: Metadata = servico
  ? {
      title: `${servico.h1} | Vem Passear em Jampa`,
      description: servico.metaDescription,
    }
  : {};

const WA_URL = `${empresa.contato.whatsappLink}?text=Oi%2C+quero+solicitar+cota%C3%A7%C3%A3o+de+transfer`;

const INFO_CARDS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Atendimento",
    value: "24 horas",
    detalhe: "Todos os dias, qualquer horário",
    cor: "#107997",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Cobertura",
    value: "João Pessoa",
    detalhe: "Aeroporto · Hotel · Qualquer ponto",
    cor: "#1A6B52",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    label: "Cobrança",
    value: "Por trajeto",
    detalhe: "Não é por pessoa — um preço por corrida",
    cor: "#7B4F12",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97A9.963 9.963 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
    label: "Valor",
    value: "Sob consulta",
    detalhe: "Solicite cotação pelo WhatsApp",
    cor: "#C5B7A3",
  },
];

const DIFERENCIAIS = [
  "Motorista pontual — você não espera na chegada ao aeroporto",
  "Veículo privativo — só o seu grupo, sem dividir com desconhecidos",
  "Atendimento 24h — funciona para voos noturnos e de madrugada",
  "Cadastur ativo — empresa registrada no Ministério do Turismo",
  "Comunicação direta com Murillo — sem intermediários",
];

const TRAJETOS = [
  { de: "Aeroporto Castro Pinto", para: "Hotéis de Tambaú / Cabo Branco" },
  { de: "Hotel / Pousada", para: "Aeroporto (early check-out ou voo noturno)" },
  { de: "Aeroporto", para: "Qualquer ponto de João Pessoa" },
  { de: "Hotel / Pousada", para: "Ponto de embarque dos passeios" },
];

const STEPS = [
  {
    n: "1",
    titulo: "Mande mensagem no WhatsApp",
    desc: "Informe data, horário, trajeto e número de pessoas.",
  },
  {
    n: "2",
    titulo: "Receba a cotação",
    desc: "Murillo responde com o valor por trajeto e confirma disponibilidade.",
  },
  {
    n: "3",
    titulo: "Confirme e aguarde",
    desc: "O motorista chega no horário combinado. Sem surpresas.",
  },
];

export default function TransferPage() {
  if (!servico) notFound();

  return (
    <>
      <CTASticky whatsappUrl={WA_URL} label="Solicitar cotação" />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços" },
          { label: "Transfer 24h" },
        ]}
      />

      {/* Hero */}
      <section
        id="hero-section"
        className="relative overflow-hidden flex flex-col"
        style={{ minHeight: "min(55vh, 480px)", background: "linear-gradient(135deg, #092238 0%, #163149 55%, #092238 100%)" }}
      >
        {/* Blobs */}
        <div
          className="absolute pointer-events-none"
          style={{ top: "-15%", right: "-8%", width: "50%", paddingBottom: "50%", background: "radial-gradient(circle, rgba(16,121,151,0.5) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(55px)" }}
          aria-hidden="true"
        />
        <div
          className="absolute pointer-events-none"
          style={{ bottom: "0%", left: "-5%", width: "35%", paddingBottom: "35%", background: "radial-gradient(circle, rgba(197,183,163,0.25) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(45px)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 100%)" }}
          aria-hidden="true"
        />

        <div
          className="relative container-safe flex flex-col justify-end text-white pb-10 pt-16 flex-1"
          style={{ minHeight: "min(55vh, 480px)" }}
        >
          {/* Ícone */}
          <div className="mb-5 opacity-85">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <rect x="4" y="14" width="32" height="20" rx="4" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
              <path d="M36 22h6l4 7v5h-10V22z" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" strokeLinejoin="round" />
              <circle cx="12" cy="36" r="4" stroke="white" strokeWidth="2.5" strokeOpacity="0.9" />
              <circle cx="34" cy="36" r="4" stroke="white" strokeWidth="2.5" strokeOpacity="0.9" />
            </svg>
          </div>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4 self-start"
            style={{ background: "rgba(16,121,151,0.35)", border: "1px solid rgba(16,121,151,0.55)", color: "rgba(255,255,255,0.85)" }}
          >
            Serviço privativo · 24h
          </div>

          <h1
            className="font-serif font-bold text-white max-w-2xl mb-3"
            style={{ fontSize: "clamp(30px, 5vw, 58px)", lineHeight: 1.08, letterSpacing: "-1px" }}
          >
            {servico.h1}
          </h1>
          <p
            className="text-white/75 max-w-xl leading-relaxed"
            style={{ fontSize: "clamp(14px, 1.6vw, 17px)" }}
          >
            {servico.descricao}
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="section-padding bg-white">
        <div className="container-safe max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-[#107997] mb-3">
            Informações do serviço
          </p>
          <h2 className="mb-8">O que você precisa saber</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INFO_CARDS.map((card) => (
              <div
                key={card.label}
                className="rounded-2xl p-5 flex gap-4 items-start"
                style={{ background: "#F7F8F7", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${card.cor}18`, color: card.cor }}
                >
                  {card.icon}
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider font-semibold mb-0.5">{card.label}</p>
                  <p className="font-serif font-bold text-dark text-lg leading-tight" style={{ color: card.cor }}>{card.value}</p>
                  <p className="text-muted text-xs mt-0.5 leading-relaxed">{card.detalhe}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que contratar */}
      <section className="section-padding" style={{ background: "#F7F8F7" }}>
        <div className="container-safe max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-[#107997] mb-3">
            Vantagens
          </p>
          <h2 className="mb-8">Por que contratar com a Vem Passear?</h2>

          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ background: "white", border: "1px solid #C5B7A3", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
          >
            <ul className="space-y-4">
              {DIFERENCIAIS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(37,211,102,0.12)" }}
                    aria-hidden="true"
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#25D366" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-dark text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trajetos comuns */}
      <section className="section-padding bg-white">
        <div className="container-safe max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-[#107997] mb-3">
            Rotas
          </p>
          <h2 className="mb-8">Trajetos mais solicitados</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {TRAJETOS.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-4 flex flex-col gap-1"
                style={{ background: "#F7F8F7", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <p className="text-muted text-xs font-medium">{t.de}</p>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#107997" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <p className="text-dark text-sm font-semibold">{t.para}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted text-xs">
            Outros trajetos disponíveis — consulte disponibilidade pelo WhatsApp.
          </p>
        </div>
      </section>

      {/* Como contratar */}
      <section className="section-padding" style={{ background: "#F7F8F7" }}>
        <div className="container-safe max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-[#107997] mb-3">
            Passo a passo
          </p>
          <h2 className="mb-8">Como contratar</h2>

          <ol className="relative space-y-0">
            {STEPS.map((step, i) => (
              <li key={step.n} className="flex gap-5 relative">
                {/* Linha vertical conectora */}
                {i < STEPS.length - 1 && (
                  <div
                    className="absolute left-[18px] top-[44px] w-[2px]"
                    style={{ height: "calc(100% - 12px)", background: "#C5B7A3" }}
                    aria-hidden="true"
                  />
                )}

                {/* Círculo numerado */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 z-10"
                  style={{ background: "#107997", color: "white", boxShadow: "0 2px 12px rgba(16,121,151,0.3)" }}
                  aria-hidden="true"
                >
                  {step.n}
                </div>

                {/* Conteúdo */}
                <div className="pb-8">
                  <p className="font-semibold text-dark text-sm mb-1">{step.titulo}</p>
                  <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Trust */}
      <TrustBlock />

      {/* CTA */}
      <CTAFinal
        whatsappUrl={WA_URL}
        variante="laranja"
        titulo="Precisa de transfer em João Pessoa?"
        subtitulo="Mande data, horário e trajeto — Murillo envia a cotação na hora."
        textoBotao="Solicitar cotação no WhatsApp"
        label="Transfer privativo 24h"
      />

      {/* Link de volta */}
      <div className="bg-white container-safe py-6 text-center">
        <Link
          href="/passeios"
          className="text-sm font-semibold text-secondary hover:text-primary transition-colors border-b border-secondary/30 hover:border-primary pb-0.5"
        >
          ← Ver todos os passeios em João Pessoa
        </Link>
      </div>
    </>
  );
}
