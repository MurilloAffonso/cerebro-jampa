/**
 * Página: FAQ — /faq/
 * ISSUE-14
 * Fonte: _conhecimento/objecoes.md + base-operacional-comercial.md
 * Regra: nenhuma resposta inventada — dados do vault apenas.
 */

import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASticky } from "@/components/CTASticky";
import { CTAFinal } from "@/components/CTAFinal";
import { generateFAQSchema, buildLocaleAlternates } from "@/lib/seo";
import { empresa } from "@/data/empresa";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const alternates = buildLocaleAlternates(params.locale, "/faq");
  return {
    title: "Perguntas Frequentes sobre Passeios em João Pessoa | Vem Passear em Jampa",
    description:
      "Reservas, pagamento, política de cancelamento, tábua de marés, segurança e crianças nos passeios em João Pessoa. Atendimento direto com Murillo no WhatsApp.",
    alternates,
    openGraph: {
      title: "Perguntas Frequentes — Passeios em João Pessoa",
      description:
        "Tudo que você precisa saber antes de reservar passeio em João Pessoa: pagamento, cancelamento, marés, segurança e mais.",
      url: alternates.canonical,
      images: [
        { url: "/og-image.svg", width: 1200, height: 630, alt: "Vem Passear em Jampa — FAQ" },
      ],
    },
  };
}

const WA_URL = `${empresa.contato.whatsappLink}?text=Oi%2C+tenho+uma+d%C3%BAvida+sobre+os+passeios`;

const FAQ_ITEMS = [
  {
    pergunta: "Como faço para reservar um passeio?",
    resposta:
      "Pelo WhatsApp — é o canal direto com Murillo. Você manda mensagem com o passeio que quer, a data e o número de pessoas. Ele verifica disponibilidade, confirma maré (quando necessário) e te passa as instruções de pagamento. Simples assim, sem formulário nem intermediário.",
  },
  {
    pergunta: "Quais formas de pagamento são aceitas?",
    resposta:
      "Aceitamos cartão de crédito e débito. O parcelamento é possível, mas a taxa fica por conta do cliente — número de parcelas e plataforma confirmados na hora do pagamento. Qualquer dúvida, é só perguntar pelo WhatsApp antes de fechar.",
  },
  {
    pergunta: "Criança paga? Tem desconto para crianças?",
    resposta:
      "Crianças abaixo de 5 anos não pagam. De 5 a 11 anos: 20% de desconto sobre o valor adulto. A partir de 12 anos: valor adulto. Para passeios de quadriciclo há restrição de idade mínima de 7 anos — confirme no WhatsApp antes de reservar.",
  },
  {
    pergunta: "O que acontece se chover no dia do passeio?",
    resposta:
      "Chuva leve não cancela — João Pessoa tem clima que muda rápido e o passeio segue normalmente. Se houver chuva forte ou condição de mar ruim, o passeio não sai. Nesse caso, você recebe aviso com pelo menos 2 horas de antecedência e pode remarcar sem custo adicional. Se não for possível remarcar: devolução de 100% do valor pago.",
  },
  {
    pergunta: "Qual é a política de cancelamento?",
    resposta:
      "Cancelamento com mais de 24 horas de antecedência: remarcação sem custo. No-show ou cancelamento em cima da hora: sem reembolso. Caso o passeio seja cancelado pela operadora por condições climáticas ou de maré: remarcação gratuita ou reembolso integral. Dúvidas específicas, consulte pelo WhatsApp.",
  },
  {
    pergunta: "O que é tábua de marés e como ela afeta meu passeio?",
    resposta:
      "A tábua de marés é o calendário oficial da Marinha que indica os horários de maré baixa e alta de cada dia. Passeios de piscinas naturais (Seixas, Picãozinho, Areia Vermelha) dependem de maré baixa para funcionar. Antes de confirmar sua reserva, Murillo já verifica se o dia tem condição de maré adequada — você nunca agenda sem essa confirmação.",
  },
  {
    pergunta: "Os passeios são seguros? Tem colete salva-vidas?",
    resposta:
      "Sim. Colete salva-vidas disponível a bordo durante todo o passeio — recomendado para não-nadadores e crianças. A Vem Passear em Jampa tem Cadastur ativo (número 52.077.577). A operação segue normas de segurança marítima e os passeios são conduzidos por profissionais regularizados e capacitados.",
  },
  {
    pergunta: "É possível fazer um passeio privativo (só para o meu grupo)?",
    resposta:
      "Sim — todos os passeios têm opção privativa. No modo privativo, apenas o seu grupo vai no passeio. O valor depende do passeio, da data e da quantidade de pessoas — nunca é um preço fixo, é sempre consultado caso a caso. Mande mensagem no WhatsApp com detalhes do grupo e Murillo passa a opção.",
  },
  {
    pergunta: "A Vem Passear tem registro oficial no Ministério do Turismo?",
    resposta:
      "Sim. CNPJ 52.077.577/0001-03, Cadastur número 52.077.577 — válido até 16/12/2026. Você pode verificar o registro no site oficial do Ministério do Turismo a qualquer momento.",
  },
  {
    pergunta: "Onde posso ver avaliações de clientes reais?",
    resposta:
      "No Google — a Vem Passear em Jampa tem nota 4.9/5 com 61 avaliações de clientes reais. Murillo pode enviar o link direto das avaliações pelo WhatsApp se preferir conferir antes de reservar.",
  },
  {
    pergunta: "Não sei nadar. Posso fazer os passeios de piscinas naturais?",
    resposta:
      "Sim. A maioria das piscinas naturais tem água rasa — você fica em pé ou usa colete salva-vidas. O guia fica próximo durante todo o passeio. Muitas pessoas que nunca nadaram fazem o passeio tranquilamente. Se tiver dúvida sobre um passeio específico, é só perguntar no WhatsApp.",
  },
  {
    pergunta: "O passeio inclui transfer do hotel?",
    resposta:
      "Depende do passeio. A maioria inclui transfer para pontos de saída em Tambaú, Cabo Branco, Manaíra e Bessa. Para outros bairros ou hotéis fora desses pontos, consulte disponibilidade pelo WhatsApp. A Vem Passear também oferece Transfer 24h separado para aeroporto e qualquer ponto da cidade.",
  },
];

const faqSchema = generateFAQSchema(FAQ_ITEMS);

export default function FaqPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return (
    <>
      {/* Schema FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb (emite schema BreadcrumbList automaticamente) */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Perguntas Frequentes" },
        ]}
        currentUrl={`https://${empresa.dominio}/faq/`}
      />

      <CTASticky whatsappUrl={WA_URL} />

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
            Sem segredo
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
            Perguntas Frequentes
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '17px',
              color: 'var(--cor-areia)',
              lineHeight: 1.65,
            }}
          >
            Dúvidas sobre reserva, pagamento, segurança e mais — respondidas com dados reais.
            Não encontrou o que procura? Fale direto com Murillo.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-safe max-w-3xl">
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA Final — componente reutilizável (id="cta-final" embutido) */}
      <CTAFinal
        whatsappUrl={WA_URL}
        variante="laranja"
        label="Ainda tem dúvida?"
        titulo="Pergunta direto pelo WhatsApp"
        subtitulo="Murillo atende, esclarece e ajuda você a decidir com calma — sem pressão."
        textoBotao="Perguntar no WhatsApp"
      />

      {/* Link de volta */}
      <div className="container-safe py-6 text-center">
        <Link href="/passeios" className="text-sm text-primary hover:text-accent font-medium transition-colors">
          ← Ver todos os passeios em João Pessoa
        </Link>
      </div>
    </>
  );
}
