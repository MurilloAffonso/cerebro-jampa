/**
 * Página: FAQ — /faq/
 * ISSUE-14
 */

import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTAFinal } from "@/components/CTAFinal";
import { CTASticky } from "@/components/CTASticky";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TrustBlock } from "@/components/TrustBlock";
import { generateFAQSchema } from "@/lib/seo";
import { empresa } from "@/data/empresa";

export const metadata: Metadata = {
  title: "Perguntas Frequentes sobre Passeios em João Pessoa | Vem Passear em Jampa",
  description:
    "Dúvidas sobre passeios em João Pessoa? Veja respostas sobre reservas, pagamento, política de criança, cancelamento, tábua de marés e segurança.",
};

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

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <CTASticky whatsappUrl={WA_URL} label="Reservar no WhatsApp" />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Perguntas Frequentes" },
        ]}
      />

      {/* Hero */}
      <section
        id="hero-section"
        className="relative overflow-hidden flex flex-col"
        style={{ minHeight: "min(40vh, 320px)", background: "linear-gradient(135deg, #092238 0%, #163149 55%, #092238 100%)" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{ top: "-20%", right: "-5%", width: "40%", paddingBottom: "40%", background: "radial-gradient(circle, rgba(255,107,53,0.3) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(50px)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 100%)" }} aria-hidden="true" />

        <div className="relative container-safe flex flex-col justify-end text-white pb-10 pt-14 flex-1" style={{ minHeight: "min(40vh, 320px)" }}>
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-[#C5B7A3] mb-3">
            Antes de reservar
          </p>
          <h1
            className="font-serif font-bold text-white max-w-xl mb-3"
            style={{ fontSize: "clamp(28px, 4.5vw, 54px)", lineHeight: 1.08, letterSpacing: "-1px" }}
          >
            Perguntas Frequentes
          </h1>
          <p className="text-white/70 max-w-lg" style={{ fontSize: "clamp(14px, 1.5vw, 16px)" }}>
            Respostas sobre reserva, pagamento, segurança e mais — dados reais, sem enrolação.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-safe max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-[#107997] mb-3">
            {FAQ_ITEMS.length} perguntas respondidas
          </p>
          <h2 className="mb-8">Tudo que você precisa saber</h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* Trust */}
      <TrustBlock />

      {/* CTA */}
      <CTAFinal
        whatsappUrl={WA_URL}
        variante="laranja"
        titulo="Ainda tem dúvida?"
        subtitulo="Mande uma mensagem para Murillo — ele responde rápido e sem enrolação."
        textoBotao="Perguntar no WhatsApp"
        label="Atendimento direto"
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
