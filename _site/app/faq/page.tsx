/**
 * Página: FAQ — /faq/
 * ISSUE-14
 * Fonte: _conhecimento/objecoes.md + base-operacional-comercial.md
 * Regra: nenhuma resposta inventada — dados do vault apenas.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
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
      "Sim. Colete salva-vidas disponível a bordo durante todo o passeio — recomendado para não-nadadores e crianças. Murillo é guia credenciado com Cadastur ativo (número 52.077.577). A operação segue normas de segurança marítima e os passeios são conduzidos por profissionais capacitados.",
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
      {/* Schema FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="container-safe py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-primary">Home</Link>
        {" / "}
        <span className="text-gray-700 font-medium">Perguntas Frequentes</span>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-safe text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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

      {/* CTA WhatsApp */}
      <section className="section-padding bg-primary text-white">
        <div className="container-safe text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ainda tem dúvida?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Mande uma mensagem para Murillo — ele responde rápido e sem enrolação.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            💬 Perguntar no WhatsApp
          </a>
        </div>
      </section>

      {/* Link de volta */}
      <div className="container-safe py-6 text-center">
        <Link href="/passeios" className="text-sm text-primary hover:text-accent font-medium transition-colors">
          ← Ver todos os passeios em João Pessoa
        </Link>
      </div>
    </>
  );
}
