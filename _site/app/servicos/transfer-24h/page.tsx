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

const servico = getServico("transfer-24h");

export const metadata: Metadata = servico
  ? {
      title: `${servico.h1} | Vem Passear em Jampa`,
      description: servico.metaDescription,
    }
  : {};

const WA_URL = `${empresa.contato.whatsappLink}?text=Oi%2C+quero+solicitar+cota%C3%A7%C3%A3o+de+transfer`;

export default function TransferPage() {
  if (!servico) notFound();

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="container-safe py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-primary">Home</Link>
        {" / "}
        <span className="text-gray-700 font-medium">Transfer 24h</span>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-safe text-center">
          <div className="text-5xl mb-4" aria-hidden="true">🚗</div>
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {servico.h1}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {servico.descricao}
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-accent text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
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

      {/* CTA Final */}
      <section className="section-padding bg-primary text-white">
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

      {/* Link de volta */}
      <div className="container-safe py-6 text-center">
        <Link href="/passeios" className="text-sm text-primary hover:text-accent font-medium transition-colors">
          ← Ver todos os passeios em João Pessoa
        </Link>
      </div>
    </div>
  );
}
