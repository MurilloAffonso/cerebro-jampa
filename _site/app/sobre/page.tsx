/**
 * Página: Sobre Nós
 *
 * Mostra:
 * - Quem é Murillo
 * - História da Vem Passear
 * - Diferencial
 * - Prova social (Cadastur, rating, depoimentos)
 *
 * Fonte: _conhecimento/empresa.md + _memoria/decisoes-estrategicas.md
 */

import type { Metadata } from "next";
import { empresa, provasSociais } from "@/data/empresa";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Sobre Nós — Conheça Murillo e a Vem Passear",
  description:
    "Conheça Murillo e a Vem Passear em Jampa. Especialista local com anos de experiência em turismo em João Pessoa. Confiança, atendimento rápido e preço justo.",
  keywords: ["Murillo", "Vem Passear", "agência turismo", "especialista local"],
});

export default function SobrePage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="container-safe text-center">
          <h1>Sobre Nós</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Conheça a história de Murillo e por que a Vem Passear em Jampa é sua melhor
            escolha para explorar João Pessoa.
          </p>
        </div>
      </section>

      {/* Murillo */}
      <section className="section-padding">
        <div className="container-safe max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Imagem placeholder */}
            <div className="w-full h-96 bg-light rounded-lg flex items-center justify-center text-4xl">
              📸
            </div>

            {/* Texto */}
            <div>
              <h2>Murillo — Especialista Local</h2>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Murillo é mais do que um guia de turismo. Ele é um especialista local que
                conhece cada canto de João Pessoa — cada praia, cada maré, cada história.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Sua missão é simples: ajudar você a descobrir João Pessoa da forma mais
                autêntica possível. Sem pressão de venda. Sem promessas falsas. Apenas
                orientação prática e confiança.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Com {empresa.anos_operacao || "vários"} anos de experiência, Murillo já
                ajudou centenas de turistas a criar roteiros inesquecíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="section-padding bg-light">
        <div className="container-safe">
          <h2 className="text-center mb-12">Por Que Confiar em Murillo?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
              <div className="text-4xl mb-4">🏆</div>
              <h3>Especialista Local</h3>
              <p className="text-gray-700 mt-4">
                Conhecimento profundo de cada praia, cada maré, cada evento em João Pessoa.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3>Atendimento Rápido</h3>
              <p className="text-gray-700 mt-4">
                Responde no WhatsApp de forma rápida e prática. Sua dúvida é prioridade.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
              <div className="text-4xl mb-4">💰</div>
              <h3>Preço Justo</h3>
              <p className="text-gray-700 mt-4">
                Não compete por preço ultra-baixo. Compete por qualidade, confiança e valor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="section-padding">
        <div className="container-safe">
          <h2 className="text-center mb-12">Confiabilidade</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Cadastur */}
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {empresa.cadastur}
              </div>
              <p className="text-gray-600">
                Cadastur Ativo
                <br />
                Registrado e licenciado
              </p>
            </div>

            {/* Rating */}
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {empresa.rating.valor}/5
              </div>
              <p className="text-gray-600">
                {empresa.rating.totalAvaliacoes}+ avaliações no Google
                <br />
                Avaliação real de clientes
              </p>
            </div>

            {/* Experiência */}
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-gray-600">
                Satisfação garantida
                <br />
                Ou a gente refaz o roteiro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="section-padding bg-light">
        <div className="container-safe max-w-2xl text-center">
          <p className="text-lg italic mb-4">
            &ldquo;Murillo não foi um guia turístico comum. Ele foi um amigo que nos mostrou
            João Pessoa com paixão. Voltamos apaixonados pela cidade — e por Murillo!&rdquo;
          </p>
          <p className="font-semibold">— Carla & Rafael, Brasil</p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-primary text-white">
        <div className="container-safe text-center">
          <h2>Vamos Começar Sua Aventura</h2>
          <p className="text-lg mt-4 mb-8">
            Mande uma mensagem para Murillo e vamos montar o roteiro perfeito.
          </p>
          <a href="#" className="btn-primary bg-white text-primary hover:bg-gray-100">
            Chamar Murillo no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
