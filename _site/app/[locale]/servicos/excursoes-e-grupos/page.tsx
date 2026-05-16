/**
 * Página: Excursões e Grupos — /servicos/excursoes-e-grupos/
 * Vertical comercial separada para lead de grupo/excursão.
 * Conversão: WhatsApp com briefing pré-formatado. Sem preço público.
 *
 * Fonte da copy: _pipeline/copy-excursoes-e-grupos-2026-05-08.md
 * Versão enxuta: seções dependentes de dado não confirmado (frota, política
 * de pagamento, tamanho de grupo, histórico) foram removidas em vez de exibir
 * placeholder visível. Reativar quando Murillo confirmar.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { empresa } from "@/data/empresa";
import { generateMetadata as generateSeoMetadata, generateFAQSchema, buildLocaleAlternates } from "@/lib/seo";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTAFinal } from "@/components/CTAFinal";
import { CTASticky } from "@/components/CTASticky";
import { Breadcrumb } from "@/components/Breadcrumb";

const BRIEFING_TEMPLATE = `Oi Murillo, quero proposta para um grupo em João Pessoa.

• Tipo de grupo: (igreja / escola / família / empresa / agência / outro)
• Cidade de origem:
• Datas previstas:
• Número de pessoas:
• Faixa etária / observações:
• Já tem transporte? (sim — qual / não, preciso de van ou ônibus)
• Pretende ficar quantos dias em JP:
• Passeios de interesse:
• Hospedagem: (já tem / preciso de indicação)
• Orçamento aproximado:`;

const WA_URL = `${empresa.contato.whatsappLink}?text=${encodeURIComponent(BRIEFING_TEMPLATE)}`;

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const base = generateSeoMetadata({
    title: "Excursões em João Pessoa — Roteiros e Logística para Grupos",
    description:
      "Organize excursão, caravana ou grupo em João Pessoa com operação local Cadastur. Roteiros, transfer e van. Consultoria direta com Murillo pelo WhatsApp.",
    keywords: [
      "excursão João Pessoa",
      "excursão para João Pessoa",
      "fechar van João Pessoa",
      "ônibus turístico João Pessoa",
      "roteiro grupo Paraíba",
      "excursão grupo religioso João Pessoa",
      "excursão escolar João Pessoa",
      "receptivo João Pessoa",
    ],
    ogImage: "/og-image.svg",
  });
  const alternates = buildLocaleAlternates(params.locale, "/servicos/excursoes-e-grupos");
  return {
    ...base,
    alternates,
    openGraph: {
      ...(base.openGraph ?? {}),
      url: alternates.canonical,
    },
  };
}

const PERFIS = [
  "Igrejas e grupos religiosos",
  "Escolas e formaturas",
  "Famílias grandes e reuniões",
  "Empresas e equipes",
  "Agências parceiras pequenas",
  "Organizador autônomo",
];

const PILARES = [
  {
    titulo: "Planejamento da data",
    desc:
      "Maré certa para piscinas naturais, clima histórico do mês, dia que tem feira de artesanato, horário de pôr do sol no Jacaré. Você passa as datas possíveis, a gente devolve qual delas funciona melhor para o que o grupo quer ver.",
  },
  {
    titulo: "Montagem do roteiro",
    desc:
      "Combinação de praias, city tour, pôr do sol e piscinas naturais ajustada ao número de pessoas, perfil etário e tempo disponível. Não é catálogo pronto — é roteiro pensado pro seu grupo.",
  },
  {
    titulo: "Logística local",
    desc:
      "Van, micro-ônibus ou ônibus rodoviário para deslocamento dentro de João Pessoa. Ponto de embarque, paradas estratégicas, indicação de restaurante para grupo, suporte com hospedagem se precisar.",
  },
  {
    titulo: "Apoio em campo",
    desc:
      "Murillo acompanha pessoalmente os grupos sensíveis (idoso, escolar, primeira viagem) ou designa guia local credenciado para os demais. Você não fica sozinho com o motorista quando o grupo chega.",
  },
];

const PROCESSO = [
  {
    n: "1",
    titulo: "Você manda o briefing pelo WhatsApp",
    desc: "Origem, número de pessoas, datas possíveis, perfil do grupo, se já tem transporte. Quanto mais detalhe, mais rápido a proposta sai.",
  },
  {
    n: "2",
    titulo: "Murillo monta a proposta",
    desc: "Roteiro com horários, transporte recomendado, valor por pessoa ou valor fechado, o que está incluso e o que não está. Tudo escrito, tudo claro.",
  },
  {
    n: "3",
    titulo: "Ajustes até ficar redondo",
    desc: "Mudou o número de pessoas? Trocaram a data? Quer encaixar mais um passeio? Ajusta no WhatsApp sem custo.",
  },
  {
    n: "4",
    titulo: "Confirmação e operação no destino",
    desc: "Forma de pagamento e prazos são combinados por escrito antes de qualquer cobrança. No dia, a gente está em campo com você.",
  },
];

const ROTEIROS = [
  {
    nome: "1 dia em João Pessoa",
    desc:
      "City tour pela cidade mais antiga do Brasil + pôr do sol no Jacaré com Bolero de Ravel ao vivo. Para grupo de passagem que tem só uma tarde livre.",
  },
  {
    nome: "2 dias clássicos",
    desc:
      "Dia 1: piscinas naturais (Picãozinho ou Seixas, conforme maré). Dia 2: litoral norte com Areia Vermelha de catamarã + pôr do sol. Para fim de semana cheio sem desgaste.",
  },
  {
    nome: "3 dias completo",
    desc:
      "Piscinas naturais + litoral sul (Tambaba, Coqueirinho) + city tour + pôr do sol no Jacaré. Cobre o melhor da Paraíba sem precisar correr.",
  },
  {
    nome: "Excursão de fim de semana com hospedagem",
    desc:
      "Chegada com transfer do aeroporto ou rodoviária + 1 passeio âncora no sábado + retorno organizado domingo. Para igreja, escola e empresa que vem de cidade próxima.",
  },
];

const DIFERENCIAIS = [
  {
    titulo: "Cadastur ativo · 52.077.577",
    desc:
      "Registro oficial no Ministério do Turismo, válido até 16/12/2026. Você pode verificar no site oficial antes de fechar qualquer coisa.",
  },
  {
    titulo: `${empresa.rating.valor}/5 no Google · ${empresa.rating.totalAvaliacoes} avaliações reais`,
    desc:
      "Feedback recorrente: atendimento atencioso, organização, suporte rápido.",
  },
  {
    titulo: "Operação local",
    desc:
      "Moramos e trabalhamos em João Pessoa. Conhecemos maré, trânsito de feriadão, hotel com estacionamento de ônibus, restaurante que aguenta grupo de 40.",
  },
  {
    titulo: "Atendimento direto com Murillo",
    desc:
      "Sem call center, sem roteador de chamadas. Você fala com a pessoa que organiza, antes, durante e depois do grupo no destino.",
  },
];

const BRIEFING_CAMPOS = [
  "Tipo de grupo (igreja, escola, família, empresa, agência, outro)",
  "Cidade de origem",
  "Datas possíveis",
  "Número de pessoas",
  "Faixa etária ou observações (idoso, criança, mobilidade reduzida)",
  "Já tem transporte? (sim, qual / não, preciso de van ou ônibus)",
  "Quantos dias em João Pessoa",
  "Passeios de interesse (se já tiver ideia)",
  "Hospedagem (já tem / preciso de indicação)",
  "Orçamento aproximado (ajuda a montar opção real)",
];

const FAQ_ITEMS = [
  {
    pergunta: "A Vem Passear opera excursões fechadas vindas de outras cidades?",
    resposta:
      "Sim. Operamos a parte de João Pessoa — roteiro, transporte local, guias, suporte em campo. Você pode chegar com seu próprio ônibus de origem ou contratar transporte conosco a partir do aeroporto, rodoviária ou hotel.",
  },
  {
    pergunta: "Vocês fornecem o ônibus ou trabalham com o transporte que o grupo já tem?",
    resposta:
      "As duas opções. Se você já vem com ônibus da cidade de origem, a gente opera só o roteiro e o apoio em campo. Se precisa de transporte em João Pessoa, a gente fecha com parceiros operacionais credenciados — capacidade e formato são confirmados na proposta, conforme o tamanho do grupo.",
  },
  {
    pergunta: "Tem desconto para grupo grande?",
    resposta:
      "Não temos tabela fixa de desconto. O que existe é condição especial avaliada caso a caso a partir de 4 pessoas — depende de tamanho do grupo, datas, combinação de passeios. Vale perguntar no briefing.",
  },
  {
    pergunta: "Vocês cuidam de alimentação, hospedagem ou só do roteiro de passeios?",
    resposta:
      "Roteiro, transporte e suporte em campo são o foco. Hospedagem e restaurante: indicamos parceiros confiáveis para grupo, mas a contratação fica com você. Quem já organizou grupo sabe que misturar tudo numa única conta atrapalha mais do que ajuda.",
  },
  {
    pergunta: "Posso montar um roteiro 100% personalizado ou só os pré-prontos?",
    resposta:
      "100% personalizado. Os templates da página são pontos de partida, não pacote fechado. A proposta real é montada depois do briefing.",
  },
  {
    pergunta: "Como vocês lidam com data fechada que pega maré ruim?",
    resposta:
      "Para passeios de piscinas naturais (Seixas, Picãozinho, Areia Vermelha), Murillo confere a tábua de marés antes de aceitar a data. Se não tiver janela de maré boa no dia que o grupo já fechou, a gente ajusta o roteiro: troca para passeio que não depende de maré (city tour, litoral sul, pôr do sol, catamarã em maré alta) ou sugere outro horário do mesmo dia. Você nunca chega aqui e descobre que o passeio não tem como sair.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Excursões e Grupos",
  name: "Excursões e Grupos em João Pessoa",
  description:
    "Operação local em João Pessoa para excursões, caravanas, grupos religiosos, escolares, familiares e empresariais. Planejamento de roteiro, transporte, logística e apoio em campo.",
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
  url: "https://vempassearjampa.netlify.app/servicos/excursoes-e-grupos",
  audience: {
    "@type": "Audience",
    audienceType: "Grupos, igrejas, escolas, empresas, agências parceiras, famílias grandes",
  },
};

export default function ExcursoesGruposPage() {
  return (
    <div>
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQ_ITEMS)) }}
      />

      <CTASticky whatsappUrl={WA_URL} label="Proposta para grupo" />

      {/* Breadcrumb (emite schema BreadcrumbList automaticamente) */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços" },
          { label: "Excursões e Grupos" },
        ]}
        currentUrl={`https://${empresa.dominio}/servicos/excursoes-e-grupos/`}
      />

      {/* Hero */}
      <section
        id="hero-section"
        className="relative overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(135deg, var(--cor-primaria) 0%, #0d5f71 55%, var(--cor-primaria) 100%)",
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-15%",
            right: "-8%",
            width: "45%",
            paddingBottom: "45%",
            background: "radial-gradient(circle, rgba(27,107,124,0.4) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(55px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "-10%",
            left: "-5%",
            width: "35%",
            paddingBottom: "35%",
            background: "radial-gradient(circle, rgba(197,183,163,0.18) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(45px)",
          }}
          aria-hidden="true"
        />

        <div className="relative container-safe py-16 md:py-20 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-[#C5B7A3] mb-4">
            Operação local para grupos
          </p>
          <h1
            className="font-serif font-bold text-white max-w-3xl mb-5 leading-[1.08]"
            style={{ fontSize: "clamp(30px, 5vw, 56px)", letterSpacing: "-1px" }}
          >
            Vai trazer um grupo para João Pessoa? A gente organiza o roteiro com você.
          </h1>
          <p className="text-white/80 max-w-2xl mb-8 leading-relaxed text-base md:text-lg">
            Excursão de igreja, caravana, escola, família grande ou agência parceira. Você
            manda quantas pessoas, datas e cidade de origem. Murillo monta a proposta com
            roteiro, transfer e logística de João Pessoa — direto no seu WhatsApp.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ea355] text-white font-extrabold px-7 py-[17px] rounded-full min-h-[56px] transition-all hover:-translate-y-[2px] shadow-[0_4px_24px_rgba(37,211,102,0.35)]"
              style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}
              aria-label="Solicitar proposta para o meu grupo no WhatsApp"
            >
              💬 Solicitar proposta para o meu grupo
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-6 py-[17px] rounded-full min-h-[56px] transition-all"
              style={{ fontSize: "clamp(14px, 1.4vw, 16px)" }}
            >
              Ver como funciona →
            </a>
          </div>

          {/* Selos de confiança */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
            <li>✓ Cadastur ativo · {empresa.cadastur}</li>
            <li>✓ {empresa.rating.valor}/5 no Google ({empresa.rating.totalAvaliacoes} avaliações)</li>
            <li>✓ Atendimento direto com Murillo</li>
            <li>✓ Sem central impessoal — quem responde é quem opera</li>
          </ul>
        </div>
      </section>

      {/* Para quem é */}
      <section className="section-padding">
        <div className="container-safe max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            Para quem é
          </p>
          <h2 className="font-serif font-bold text-secondary mb-5" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", letterSpacing: "-0.5px" }}>
            Esta página é para quem está organizando o grupo, não para quem só quer um passeio
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Se você está chegando aqui é porque tem mais gente envolvida. Você sabe que organizar
            grupo em outra cidade não é só &quot;fechar um passeio&quot;. É data certa, transporte, ponto
            de embarque, comer onde, maré, número de pessoas que muda na última hora — e ninguém
            quer descobrir problema na hora que o ônibus chega em Tambaú.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {PERFIS.map((p) => (
              <span
                key={p}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-secondary bg-white border border-[#C5B7A3]/60"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="section-padding" style={{ background: "#F7F8F7" }}>
        <div className="container-safe max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            O que entra na operação
          </p>
          <h2 className="font-serif font-bold text-secondary mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", letterSpacing: "-0.5px" }}>
            A gente cuida da parte que você não consegue fazer de longe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PILARES.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#C5B7A3]/40"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
                    {i + 1}
                  </span>
                  <h3 className="font-bold text-dark text-lg">{p.titulo}</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="section-padding">
        <div className="container-safe max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            Passo a passo
          </p>
          <h2 className="font-serif font-bold text-secondary mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", letterSpacing: "-0.5px" }}>
            Como sai uma proposta para o seu grupo
          </h2>

          <ol className="relative space-y-6">
            {PROCESSO.map((step, i) => (
              <li key={step.n} className="flex gap-5 relative">
                {i < PROCESSO.length - 1 && (
                  <div
                    className="absolute left-[18px] top-[44px] w-[2px]"
                    style={{ height: "calc(100% - 12px)", background: "#C5B7A3" }}
                    aria-hidden="true"
                  />
                )}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 z-10"
                  style={{ background: "#107997", color: "white", boxShadow: "0 2px 12px rgba(16,121,151,0.30)" }}
                  aria-hidden="true"
                >
                  {step.n}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-dark text-base mb-1.5">{step.titulo}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Roteiros mais pedidos */}
      <section className="section-padding" style={{ background: "#F7F8F7" }}>
        <div className="container-safe max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            Templates de roteiro
          </p>
          <h2 className="font-serif font-bold text-secondary mb-3" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", letterSpacing: "-0.5px" }}>
            O que costumamos montar (e o que dá pra adaptar)
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl text-sm leading-relaxed">
            Esses são pontos de partida. O roteiro real é montado depois do briefing — a gente não
            vende pacote pronto, vende organização.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ROTEIROS.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#C5B7A3]/40"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
              >
                <h3 className="font-serif font-bold text-secondary text-xl mb-2">{r.nome}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding" style={{ background: "#F7F8F7" }}>
        <div className="container-safe max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            Por que confiar
          </p>
          <h2 className="font-serif font-bold text-secondary mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", letterSpacing: "-0.5px" }}>
            O que diferencia a operação
          </h2>

          <ul className="space-y-4">
            {DIFERENCIAIS.map((d, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[#C5B7A3]/40"
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(16,121,151,0.12)" }}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#107997" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-dark mb-1">{d.titulo}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Briefing-checklist */}
      <section className="section-padding">
        <div className="container-safe max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            Antes de mandar mensagem
          </p>
          <h2 className="font-serif font-bold text-secondary mb-3" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", letterSpacing: "-0.5px" }}>
            Adianta o atendimento mandando isso pelo WhatsApp
          </h2>
          <p className="text-gray-700 mb-7 leading-relaxed">
            Quanto mais campo preenchido, mais rápido a proposta sai. Não precisa ser tudo —
            manda o que souber agora:
          </p>

          <ul className="bg-white border border-[#C5B7A3]/50 rounded-2xl p-6 mb-8 space-y-2.5" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
            {BRIEFING_CAMPOS.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-dark">
                <span className="text-primary mt-0.5 shrink-0" aria-hidden="true">•</span>
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ea355] text-white font-extrabold px-7 py-[17px] rounded-full min-h-[56px] transition-all hover:-translate-y-[2px] shadow-[0_4px_24px_rgba(37,211,102,0.35)]"
            style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}
            aria-label="Mandar briefing para Murillo no WhatsApp"
          >
            💬 Mandar briefing para Murillo no WhatsApp
          </a>
          <p className="text-xs text-gray-500 mt-3">
            Murillo lê e responde pessoalmente — quanto antes você mandar, mais tempo temos para organizar a operação.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: "#F7F8F7" }}>
        <div className="container-safe max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
            Perguntas frequentes
          </p>
          <h2 className="font-serif font-bold text-secondary mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", letterSpacing: "-0.5px" }}>
            Dúvidas que sempre aparecem em organização de grupo
          </h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA Final */}
      <CTAFinal
        whatsappUrl={WA_URL}
        label="Pronto para começar?"
        titulo="Vamos montar o roteiro do seu grupo"
        subtitulo="Cadastur ativo · operação local · resposta em horas pelo WhatsApp."
        textoBotao="Falar com Murillo no WhatsApp"
        variante="azul"
      />

      {/* Link de volta */}
      <div className="container-safe py-8 text-center text-sm text-gray-500">
        <Link href="/servicos/transfer-24h" className="hover:text-primary transition-colors mr-4">
          ← Transfer 24h
        </Link>
        <Link href="/passeios" className="hover:text-primary transition-colors">
          Ver todos os passeios →
        </Link>
      </div>
    </div>
  );
}
