/**
 * Página: Sobre — /sobre/
 *
 * Regra crítica:
 *   Esta página usa SOMENTE dados confirmados em data/empresa.ts.
 *   Anos de operação, formação e história pessoal NÃO existem aqui
 *   porque o vault marca esses campos como pendentes [CONFIRMAR COM MURILLO].
 *
 * Conteúdo:
 *   - Identidade (Cadastur, CNPJ, rating Google) — verificável
 *   - Missão e diferencial — texto já aprovado em data/empresa.ts
 *   - Como funciona o atendimento — descreve o canal real (WhatsApp direto)
 *   - CTA final WhatsApp
 */

import type { Metadata } from "next";
import Link from "next/link";
import { empresa } from "@/data/empresa";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASticky } from "@/components/CTASticky";
import { CTAFinal } from "@/components/CTAFinal";

const SITE_URL = "https://vempassearjampa.com.br";
const PAGE_URL = `${SITE_URL}/sobre/`;
const CADASTUR_URL = "https://cadastur.turismo.gov.br/cadastur/#!/public/qrcode/52077577000103";

const WA_URL = `${empresa.contato.whatsappLink}?text=Oi+Murilo%2C+quero+saber+mais+sobre+a+Vem+Passear+em+Jampa`;

export const metadata: Metadata = {
  title: "Sobre a Vem Passear em Jampa | Quem está por trás dos passeios em João Pessoa",
  description:
    "Vem Passear em Jampa é uma agência de turismo receptivo em João Pessoa com Cadastur ativo. Atendimento direto com Murilo pelo WhatsApp, sem central impessoal.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Sobre a Vem Passear em Jampa",
    description:
      "Agência receptiva em João Pessoa com Cadastur ativo. Atendimento direto com Murilo pelo WhatsApp.",
    url: PAGE_URL,
    images: [
      { url: "/og-image.svg", width: 1200, height: 630, alt: "Sobre a Vem Passear em Jampa" },
    ],
  },
};

export default function SobrePage() {
  const diferenciais = empresa.diferencial.split(" + ");

  return (
    <div className="bg-white">
      <CTASticky whatsappUrl={WA_URL} label="Falar com Murilo no WhatsApp" />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Sobre" },
        ]}
        currentUrl={PAGE_URL}
      />

      {/* HERO */}
      <section
        id="hero-section"
        style={{ background: 'var(--cor-primaria)', padding: '64px 24px 80px', textAlign: 'center' }}
      >
        <div className="container-safe" style={{ maxWidth: '660px' }}>
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
            Quem somos
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
            Vem Passear em Jampa — agência receptiva em João Pessoa
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '17px',
              color: 'var(--cor-areia)',
              lineHeight: 1.65,
            }}
          >
            Operação local, atendimento direto pelo WhatsApp e roteiro organizado
            sem intermediário. Murilo responde pessoalmente
            quem procura informação sobre passeios em João Pessoa.
          </p>
        </div>
      </section>

      {/* SOBRE A MARCA — quem é o Murilo (copy aprovada 2026-05-11) */}
      <section className="section-padding" style={{ background: 'var(--cor-fundo-puro)' }}>
        <div className="container-safe" style={{ maxWidth: '780px' }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-inter)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--cor-acento)',
              marginBottom: '12px',
              textAlign: 'center',
            }}
          >
            Sobre a marca
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(26px, 3.8vw, 38px)',
              color: 'var(--cor-primaria)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            Atendimento direto com quem ama viajar e conhece o Nordeste
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              fontFamily: 'var(--font-inter)',
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'var(--cor-texto-medio)',
            }}
          >
            <p>
              A Vem Passear em Jampa nasceu da paixão de{' '}
              <strong style={{ color: 'var(--cor-texto-escuro)' }}>
                Affonso Murillo Soledade de Oliveira, conhecido como Murilo
              </strong>{' '}
              por viagens, pelo Nordeste e por João Pessoa.
            </p>

            <p>
              Ex-atleta, viajante e apaixonado por conhecer novos lugares, Murilo carrega
              uma relação forte com o Nordeste. Depois de viver muitas experiências de
              viagem e conhecer diferentes destinos, ele decidiu transformar essa paixão
              em uma agência feita para ajudar outras pessoas a viverem João Pessoa com
              mais tranquilidade, segurança e orientação.
            </p>

            <p>
              Foi assim que nasceu a Vem Passear em Jampa: uma agência de passeios criada
              para conectar turistas aos melhores roteiros da Paraíba, sempre com
              atendimento humano, parceiros de confiança e cuidado em cada detalhe da
              experiência.
            </p>

            <p>
              Aqui, o atendimento é direto. Quem fala com você no WhatsApp é o próprio
              Murilo, entendendo seu perfil, sua data, seu orçamento e o tipo de passeio
              que faz mais sentido para a sua viagem.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-fraunces), var(--font-inter)',
                fontStyle: 'italic',
                fontSize: '20px',
                color: 'var(--cor-primaria)',
                borderLeft: '3px solid var(--cor-acento)',
                paddingLeft: '20px',
                margin: '8px 0',
              }}
            >
              A base da agência é simples: parceria, preço justo, qualidade e confiança.
            </p>

            <p>
              Por isso, a Vem Passear em Jampa trabalha com operadores locais legalizados
              e parceiros selecionados, buscando oferecer passeios organizados, seguros e
              bem orientados — seja para famílias, casais, grupos ou viajantes que estão
              conhecendo João Pessoa pela primeira vez.
            </p>

            <p>
              Mais do que vender passeios, a missão da Vem Passear em Jampa é ajudar
              cada cliente a escolher o roteiro certo, no melhor momento da viagem, com
              a tranquilidade de estar em boas mãos.
            </p>

            <p>
              Se você quer conhecer João Pessoa com quem ama viajar, conhece o Nordeste
              e valoriza uma experiência feita com responsabilidade, a Vem Passear em
              Jampa está pronta para te receber.
            </p>
          </div>
        </div>
      </section>

      {/* IDENTIDADE VERIFICÁVEL */}
      <section className="section-padding">
        <div className="container-safe max-w-4xl">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-dark mb-6 text-center">
            Identidade verificável
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Tudo que aparece aqui é checável em fonte oficial. Clique nas referências
            abaixo para confirmar antes de fechar qualquer passeio.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Cadastur */}
            <a
              href={CADASTUR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-gray-200 hover:border-primary rounded-xl p-5 transition-colors"
              aria-label="Verificar registro Cadastur no portal do Ministério do Turismo"
            >
              <p className="text-xs font-bold uppercase tracking-[2px] text-primary mb-2">Cadastur</p>
              <p className="text-2xl font-bold text-secondary mb-1">{empresa.cadastur}</p>
              <p className="text-sm text-gray-600">Ativo até {empresa.cadasturValido}</p>
              <p className="text-xs text-gray-500 mt-3 group-hover:text-primary transition-colors">
                Verificar no portal do Ministério do Turismo →
              </p>
            </a>

            {/* CNPJ */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-[2px] text-primary mb-2">CNPJ</p>
              <p className="text-2xl font-bold text-secondary mb-1">{empresa.cnpj}</p>
              <p className="text-sm text-gray-600">Pessoa jurídica regular — emite nota</p>
            </div>

            {/* Avaliação Google */}
            <a
              href={empresa.rede.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-gray-200 hover:border-primary rounded-xl p-5 transition-colors"
              aria-label="Ver avaliações no Google Maps"
            >
              <p className="text-xs font-bold uppercase tracking-[2px] text-primary mb-2">Avaliações Google</p>
              <p className="text-2xl font-bold text-secondary mb-1">
                {empresa.rating.valor}/5 ★ <span className="text-base font-normal text-gray-500">({empresa.rating.totalAvaliacoes})</span>
              </p>
              <p className="text-sm text-gray-600">Avaliações reais de turistas</p>
              <p className="text-xs text-gray-500 mt-3 group-hover:text-primary transition-colors">
                Ler todas no Google →
              </p>
            </a>

            {/* Localização */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-[2px] text-primary mb-2">Localização</p>
              <p className="text-2xl font-bold text-secondary mb-1">{empresa.localizacao.cidade}</p>
              <p className="text-sm text-gray-600">{empresa.localizacao.estado}, {empresa.localizacao.pais}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO E DIFERENCIAL */}
      <section className="section-padding" style={{ background: 'var(--cor-areia)' }}>
        <div className="container-safe max-w-3xl">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-dark mb-6 text-center">
            Por que existimos
          </h2>

          <blockquote className="border-l-[3px] border-primary pl-5 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed italic">
              {empresa.missao}
            </p>
            <p className="text-sm text-gray-500 mt-3">— Murilo, fundador</p>
          </blockquote>

          <h3 className="font-bold text-secondary text-lg mb-4">Como traduzimos isso na prática</h3>
          <ul className="space-y-3">
            {diferenciais.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7l3.5 3.5L12 3.5" stroke="#107997" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMO FUNCIONA O ATENDIMENTO */}
      <section className="section-padding">
        <div className="container-safe max-w-3xl">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-dark mb-6 text-center">
            Como funciona o atendimento
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Sem central impessoal, sem script padronizado. Quem responde no WhatsApp é
            quem organiza os passeios.
          </p>

          <ol className="space-y-5">
            {[
              {
                n: "1",
                t: "Você manda mensagem pelo WhatsApp",
                d: "Conte qual passeio te interessa, número de pessoas e a data prevista. Pode mandar dúvida solta também — ajuda a entender o que combina com o seu roteiro.",
              },
              {
                n: "2",
                t: "Murilo responde com orientação local",
                d: "Recebe sugestão de roteiro, esclarecimento sobre maré (quando o passeio depende disso), preço e disponibilidade.",
              },
              {
                n: "3",
                t: "Confirmação e instruções de embarque",
                d: "Após confirmar, você recebe instruções claras: ponto de encontro, horário, o que levar e contato do operador no dia.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-4">
                <span className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5">
                  {step.n}
                </span>
                <div>
                  <p className="font-bold text-dark mb-1">{step.t}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* LINKS REDES */}
      <section className="section-padding bg-bg-soft">
        <div className="container-safe max-w-2xl text-center">
          <h2 className="font-serif font-bold text-xl md:text-2xl text-dark mb-4">
            Acompanhe o dia a dia da operação
          </h2>
          <p className="text-gray-600 mb-6">
            Stories e conteúdo dos passeios em tempo real no Instagram.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={empresa.rede.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary text-secondary hover:text-primary font-semibold px-5 py-3 rounded-full text-sm transition-colors"
              aria-label="Abrir Instagram da Vem Passear em Jampa"
            >
              📷 Instagram {empresa.rede.instagram.handle}
            </a>
            <a
              href={empresa.rede.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary text-secondary hover:text-primary font-semibold px-5 py-3 rounded-full text-sm transition-colors"
              aria-label="Abrir perfil da empresa no Google Maps"
            >
              📍 Perfil no Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CTAFinal
        whatsappUrl={WA_URL}
        label="Quer conhecer a operação?"
        titulo="Fale direto com Murilo"
        subtitulo="Tire dúvidas sobre roteiros, datas e preços — atendimento direto, sem central impessoal."
        textoBotao="Falar com Murilo no WhatsApp"
      />

      <div className="container-safe py-6 text-center">
        <Link href="/passeios" className="text-sm text-primary hover:text-accent font-medium transition-colors">
          ← Ver todos os passeios em João Pessoa
        </Link>
      </div>
    </div>
  );
}
