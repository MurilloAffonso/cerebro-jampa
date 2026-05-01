/**
 * Home Page
 *
 * Estrutura baseada em:
 * - _memoria/decisoes-estrategicas.md (decisões de posicionamento)
 * - _conhecimento/benchmark-site-cro.md (CRO)
 * - skills/estrategista-de-site/SKILL.md (jornada do turista)
 *
 * Seções:
 * 1. Hero: "O que fazer em João Pessoa?" + CTA
 * 2. Prova social: Cadastur + Rating + Murillo
 * 3. Passeios em destaque: Top 5 passeios prioritários
 * 4. Depoimento: Real de cliente
 * 5. CTA Final: "Vamos montar o passeio que você sonha"
 * 6. FAQ: Perguntas estratégicas
 */

import type { Metadata } from "next";
import Link from "next/link";
import { passeios } from "@/data/passeios";
import { empresa, paginasInfo } from "@/data/empresa";
import { isCampoIndisponivel } from "@/lib/consultar";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "O Que Fazer em João Pessoa | Passeios e Tours",
  description:
    "Descubra os melhores passeios em João Pessoa. De piscinas naturais a city tour com atendimento rápido. Agende no WhatsApp com Murillo.",
  openGraph: {
    title: "O Que Fazer em João Pessoa — Vem Passear em Jampa",
    description:
      "Passeios em João Pessoa com orientação local, preço justo e atendimento rápido.",
  },
};

export default function Home() {
  const topPasseios = passeios.slice(0, 5); // Top 5 passeios em destaque

  const faqItems = [
    {
      pergunta: "Como faço para reservar um passeio?",
      resposta:
        "Mande uma mensagem pelo WhatsApp para Murillo. Ele vai entender seu perfil e indicar o melhor roteiro pra você.",
    },
    {
      pergunta: "Qual é a melhor época para visitar João Pessoa?",
      resposta:
        "O ano todo é bom! Alta estação: dezembro a fevereiro e julho. Mas cada mês tem seu charme. Consulte Murillo pra saber qual passeio é melhor conforme a época.",
    },
    {
      pergunta: "Qual é o passeio mais barato?",
      resposta:
        "Piscinas naturais (Seixas, Penha, Picãozinho) saem por R$ 60. São meia volta e bem completos.",
    },
    {
      pergunta: "Posso levar criança?",
      resposta:
        "Sim! A maioria dos passeios é segura para crianças. Consulte Murillo sobre idade mínima e restrições específicas.",
    },
    {
      pergunta: "E se chover? Posso remarcar?",
      resposta:
        "Sim, sem problema. A gente remarca pra outra data ou devolve o dinheiro. Confiança primeiro.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-b from-blue-50 to-white">
        <div className="container-safe text-center">
          <h1 className="mb-4">O Que Fazer em João Pessoa?</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Descubra praias incríveis, piscinas naturais e experiências que você nunca esquecerá.
            A gente conhece cada canto e quer te ajudar.
          </p>
          <a
            href={paginasInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent transition-colors shadow-lg hover:shadow-xl min-h-[44px] flex items-center justify-center"
          >
            💬 Vamos Montar Seu Passeio
          </a>
        </div>
      </section>

      {/* Prova Social */}
      <section className="section-padding bg-dark text-white">
        <div className="container-safe">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <p>150+ avaliações verificadas</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Cadastur</div>
              <p>52.077.577 — Ativo até dez/2026</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Murillo</div>
              <p>Especialista local de JP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top 5 Passeios em Destaque */}
      <section className="section-padding">
        <div className="container-safe">
          <h2 className="text-center mb-12">Passeios em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPasseios.map((p) => (
              <Link
                key={p.id}
                href={`/passeios/${p.categoria}/${p.slug}`}
                className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Card Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-b from-blue-200 to-blue-50 flex items-center justify-center text-4xl">
                  🌊
                </div>

                {/* Card Content */}
                <div className="p-4 md:p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition">
                    {p.nome}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {p.descricao}
                  </p>

                  {/* Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Preço:</span>
                      {isCampoIndisponivel(p.preco) ? (
                        <span className="font-semibold text-gray-500 text-xs italic">Consultar</span>
                      ) : (
                        <span className="font-bold text-primary">{p.preco}</span>
                      )}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duração:</span>
                      {isCampoIndisponivel(p.duracao) ? (
                        <span className="text-gray-500 text-xs italic">Consultar</span>
                      ) : (
                        <span className="font-semibold">{p.duracao}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="section-padding bg-light">
        <div className="container-safe max-w-2xl text-center">
          <p className="text-lg italic mb-6 text-gray-700">
            &ldquo;Não conhecíamos nada de João Pessoa e Murillo nos guiou para os
            melhores passeios. Voltamos apaixonados pela cidade! Você ganhou
            clientes para a vida.&rdquo;
          </p>
          <p className="font-semibold text-dark">— Marina & Carlos, Casal (SP)</p>
          <p className="text-sm text-gray-600 mt-2">Após Litoral Sul + Piscinas Naturais</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-safe max-w-2xl">
          <h2 className="text-center mb-12">Dúvidas Frequentes</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-primary text-white">
        <div className="container-safe text-center">
          <h2>Vamos Montar o Roteiro que Você Sonha</h2>
          <p className="text-lg mt-4 mb-8">
            Mande uma mensagem para Murillo e vamos ajudar com orientação local,
            preço justo e atendimento rápido.
          </p>
          <a
            href={paginasInfo.whatsappHref}
            className="btn-primary bg-white text-primary hover:bg-gray-100"
          >
            Chamar Murillo no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
