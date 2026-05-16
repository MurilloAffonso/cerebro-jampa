/**
 * Página de Categoria — /passeios/[categoria]/
 */

import type { Metadata } from "next";
import Link from "next/link";
import { passeios, getPasseiosByCategoria } from "@/data/passeios";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { empresa } from "@/data/empresa";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASticky } from "@/components/CTASticky";
import { CTAFinal } from "@/components/CTAFinal";
import { CategoryIcon } from "@/components/CategoryIcon";
import { PasseioCard } from "@/components/PasseioCard";

interface CategoriaPageProps {
  params: { categoria: string };
}

const CATEGORIAS_META: Record<string, { nome: string; descricao: string }> = {
  pacotes: {
    nome: "Pacotes",
    descricao:
      "Combine os melhores passeios de João Pessoa em um só roteiro. Praias, piscinas naturais e cultura — tudo com transfer e condutores credenciados.",
  },
  "litoral-sul": {
    nome: "Litoral Sul",
    descricao:
      "Praias desertas, falésias coloridas e quadriciclo nas dunas. O Litoral Sul de João Pessoa é a saída favorita de quem quer aventura.",
  },
  "litoral-norte": {
    nome: "Litoral Norte",
    descricao:
      "Pôr do sol no Jacaré, Areia Vermelha e catamarã no Atlântico. O Litoral Norte combina natureza e uma das paisagens mais fotografadas da Paraíba.",
  },
  "piscinas-naturais": {
    nome: "Piscinas Naturais",
    descricao:
      "Recifes de coral a poucos minutos de João Pessoa. Água morna, transparente e fauna marinha — experiência única no litoral nordestino.",
  },
  "city-tour": {
    nome: "City Tour",
    descricao:
      "Conheça a história e a arquitetura de João Pessoa — a segunda cidade mais antiga do Brasil — com guia especializado.",
  },
  interestaduais: {
    nome: "Interestaduais",
    descricao:
      "Porto de Galinhas, Praia de Pipa e Natal a partir de João Pessoa. Destinos imperdíveis do Nordeste em excursões com saída garantida.",
  },
};

export function generateStaticParams() {
  const categorias = Array.from(new Set(passeios.map((p) => p.categoria)));
  return categorias.map((categoria) => ({ categoria }));
}

export async function generateMetadata({ params }: CategoriaPageProps): Promise<Metadata> {
  const meta = CATEGORIAS_META[params.categoria];
  const nome = meta?.nome ?? params.categoria.replace(/-/g, " ");
  return generateSeoMetadata({
    title: `Passeios ${nome} em João Pessoa | Vem Passear em Jampa`,
    description: meta?.descricao ?? `Descubra os passeios de ${nome.toLowerCase()} em João Pessoa. Agende pelo WhatsApp.`,
    keywords: [nome, "João Pessoa", "passeios", "turismo", "Paraíba"],
    ogImage: "/og-image.svg",
    canonical: `/passeios/${params.categoria}/`,
  });
}

export default function CategoriaPage({ params }: CategoriaPageProps) {
  const itens = getPasseiosByCategoria(params.categoria);
  const meta  = CATEGORIAS_META[params.categoria];
  const nome  = meta?.nome ?? params.categoria.replace(/-/g, " ");
  const descricao = meta?.descricao ?? null;
  const mostraExcursoesCallout = params.categoria === "pacotes" || params.categoria === "interestaduais";

  const waUrl = `${empresa.contato.whatsappLink}?text=Oi%2C+quero+saber+sobre+os+passeios+de+${encodeURIComponent(nome)}+em+Jo%C3%A3o+Pessoa`;

  return (
    <div style={{ background: 'var(--cor-fundo)' }}>
      <CTASticky whatsappUrl={waUrl} label="Falar com Murillo no WhatsApp" />

      <Breadcrumb
        items={[
          { label: "Home",     href: "/" },
          { label: "Passeios", href: "/passeios" },
          { label: nome },
        ]}
        currentUrl={`https://${empresa.dominio}/passeios/${params.categoria}/`}
      />

      {/* ── Hero ── */}
      <section
        style={{
          background: 'var(--cor-primaria)',
          padding: '64px 24px 80px',
          textAlign: 'center',
        }}
      >
        <div className="container-safe" style={{ maxWidth: '640px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '64px',
              height: '64px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '16px',
              color: 'var(--cor-acento-suave)',
              marginBottom: '20px',
            }}
          >
            <CategoryIcon slug={params.categoria} size={36} strokeWidth={1.5} />
          </div>

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
            {nome} em João Pessoa
          </h1>

          {descricao && (
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '17px',
                color: 'var(--cor-areia)',
                lineHeight: 1.65,
                marginBottom: '16px',
              }}
            >
              {descricao}
            </p>
          )}

          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.05em',
            }}
          >
            {itens.length} {itens.length === 1 ? 'passeio disponível' : 'passeios disponíveis'}
          </p>
        </div>
      </section>

      {/* ── Grid de passeios ── */}
      <section className="section-padding">
        <div className="container-safe">
          {itens.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <p style={{ color: 'var(--cor-texto-claro)' }}>Nenhum passeio disponível nesta categoria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itens.map((passeio) => (
                <PasseioCard key={passeio.id} passeio={passeio} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cross-link Excursões (só pacotes e interestaduais) */}
      {mostraExcursoesCallout && (
        <div className="container-safe" style={{ paddingBottom: '64px' }}>
          <div
            style={{
              borderRadius: '16px',
              border: '1px solid var(--cor-borda)',
              background: 'var(--cor-fundo-puro)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
            className="md:flex-row md:items-center md:justify-between"
          >
            <div>
              <span className="section-kicker">Vai trazer um grupo?</span>
              <h3
                className="font-serif"
                style={{
                  fontSize: 'clamp(18px, 2vw, 22px)',
                  fontWeight: 600,
                  color: 'var(--cor-primaria)',
                  margin: '0 0 8px',
                }}
              >
                Excursões e grupos têm operação dedicada
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '15px',
                  color: 'var(--cor-texto-medio)',
                  maxWidth: '480px',
                  margin: 0,
                }}
              >
                Roteiro, transporte local, van/ônibus e apoio em campo para igreja, escola, família grande ou agência parceira.
              </p>
            </div>
            <Link
              href="/servicos/excursoes-e-grupos"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--cor-primaria)',
                color: '#fff',
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '15px',
                padding: '14px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'background 200ms',
              }}
              className="hover:opacity-90 transition-opacity"
            >
              Ver Excursões e Grupos →
            </Link>
          </div>
        </div>
      )}

      {/* ── CTA Final ── */}
      <CTAFinal
        whatsappUrl={waUrl}
        label="Ficou com dúvida?"
        titulo={`Qual passeio de ${nome} combina com você?`}
        subtitulo="Murillo orienta direto pelo WhatsApp — ele ajuda você a montar o roteiro certo, com preço justo."
        textoBotao="Falar com Murillo no WhatsApp"
        microcopy="Atendimento direto · Sem script · Resposta rápida"
      />
    </div>
  );
}
