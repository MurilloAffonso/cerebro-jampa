/**
 * Página de Categoria — /passeios/[categoria]/
 * ISSUE-10
 */

import type { Metadata } from "next";
import Link from "next/link";
import { passeios, getPasseiosByCategoria } from "@/data/passeios";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { empresa } from "@/data/empresa";
import { PasseioCard } from "@/components/PasseioCard";
import { CTAFinal } from "@/components/CTAFinal";
import { CTASticky } from "@/components/CTASticky";
import { Breadcrumb } from "@/components/Breadcrumb";

interface CategoriaPageProps {
  params: { categoria: string };
}

const CATEGORIAS_META: Record<string, {
  nome: string;
  descricao: string;
  bgGradient: string;
  cor: string;
  icon: React.ReactNode;
}> = {
  pacotes: {
    nome: "Pacotes",
    descricao: "Combine os melhores passeios de João Pessoa em um só roteiro. Praias, piscinas naturais e cultura — tudo com transfer e condutores credenciados.",
    bgGradient: "linear-gradient(135deg, #001a3d 0%, #163149 55%, #003d6b 100%)",
    cor: "#004E89",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <rect x="8" y="16" width="32" height="24" rx="3" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
        <path d="M16 16V12a8 8 0 0 1 16 0v4" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
        <path d="M24 26v4M20 28h8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.9" />
      </svg>
    ),
  },
  "litoral-sul": {
    nome: "Litoral Sul",
    descricao: "Praias desertas, falésias coloridas e quadriciclo nas dunas. O Litoral Sul de João Pessoa é a saída favorita de quem quer aventura.",
    bgGradient: "linear-gradient(135deg, #041f13 0%, #163149 55%, #0d4d2e 100%)",
    cor: "#1A6B52",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <path d="M4 34 C10 26 16 38 24 30 C32 22 38 36 44 28" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round" />
        <circle cx="24" cy="16" r="7" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
        <path d="M24 9V4M24 28v5M9 16H4M44 16h-5" stroke="white" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
      </svg>
    ),
  },
  "litoral-norte": {
    nome: "Litoral Norte",
    descricao: "Pôr do sol no Jacaré, Areia Vermelha e catamarã no Atlântico. O Litoral Norte combina natureza e uma das paisagens mais fotografadas da Paraíba.",
    bgGradient: "linear-gradient(135deg, #1e1007 0%, #163149 55%, #4a2c0a 100%)",
    cor: "#7B4F12",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <path d="M8 36 L24 12 L40 36" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" strokeLinejoin="round" />
        <path d="M14 36 L24 20 L34 36" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" strokeLinejoin="round" />
        <path d="M4 40h40" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
      </svg>
    ),
  },
  "piscinas-naturais": {
    nome: "Piscinas Naturais",
    descricao: "Recifes de coral a poucos minutos de João Pessoa. Água morna, transparente e fauna marinha — experiência única no litoral nordestino.",
    bgGradient: "linear-gradient(135deg, #021826 0%, #163149 55%, #073d5c 100%)",
    cor: "#0E5E8A",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <circle cx="24" cy="22" r="12" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
        <circle cx="24" cy="22" r="5" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
        <path d="M6 38 C12 32 18 42 24 36 C30 30 36 40 42 34" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round" />
      </svg>
    ),
  },
  "city-tour": {
    nome: "City Tour",
    descricao: "Conheça a história e a arquitetura de João Pessoa — a segunda cidade mais antiga do Brasil — com guia especializado.",
    bgGradient: "linear-gradient(135deg, #0f0b22 0%, #163149 55%, #2a1e55 100%)",
    cor: "#4A3580",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <rect x="6" y="24" width="12" height="16" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
        <rect x="18" y="16" width="14" height="24" stroke="white" strokeWidth="2.5" strokeOpacity="0.8" />
        <rect x="32" y="20" width="10" height="20" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
        <path d="M4 40h40" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
        <rect x="22" y="28" width="6" height="8" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
      </svg>
    ),
  },
  interestaduais: {
    nome: "Interestaduais",
    descricao: "Porto de Galinhas, Praia de Pipa e Natal a partir de João Pessoa. Destinos imperdíveis do Nordeste em excursões com saída garantida.",
    bgGradient: "linear-gradient(135deg, #200511 0%, #163149 55%, #550f23 100%)",
    cor: "#8B1A3A",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <path d="M8 24 C8 15 15 8 24 8 C33 8 40 15 40 24" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
        <path d="M8 24 C8 33 15 40 24 40 C33 40 40 33 40 24" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
        <path d="M24 8 C18 14 16 20 16 24 C16 28 18 34 24 40" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M24 8 C30 14 32 20 32 24 C32 28 30 34 24 40" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M8 24h32" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
      </svg>
    ),
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
  });
}

export default function CategoriaPage({ params }: CategoriaPageProps) {
  const itens = getPasseiosByCategoria(params.categoria);
  const meta = CATEGORIAS_META[params.categoria];
  const nome = meta?.nome ?? params.categoria.replace(/-/g, " ");
  const descricao = meta?.descricao ?? null;
  const bgGradient = meta?.bgGradient ?? "linear-gradient(135deg, #092238 0%, #163149 55%, #092238 100%)";
  const cor = meta?.cor ?? "#004E89";
  const icon = meta?.icon ?? null;

  const waUrl = `${empresa.contato.whatsappLink}?text=Oi%2C+quero+saber+sobre+os+passeios+de+${encodeURIComponent(nome)}+em+Jo%C3%A3o+Pessoa`;

  return (
    <>
      <CTASticky whatsappUrl={waUrl} label="Reservar no WhatsApp" />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Passeios", href: "/passeios" },
          { label: nome },
        ]}
      />

      {/* Hero da categoria */}
      <section
        id="hero-section"
        className="relative overflow-hidden flex flex-col"
        style={{ minHeight: "min(55vh, 480px)", background: bgGradient }}
      >
        {/* Blob da cor da categoria */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-15%", right: "-8%",
            width: "50%", paddingBottom: "50%",
            background: `radial-gradient(circle, ${cor}55 0%, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(55px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "0%", left: "-5%",
            width: "35%", paddingBottom: "35%",
            background: "radial-gradient(circle, rgba(255,107,53,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(45px)",
          }}
          aria-hidden="true"
        />

        {/* Overlay */}
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
          <div className="mb-5 opacity-85">{icon}</div>

          {/* Badge de contagem */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4 self-start"
            style={{ background: `${cor}44`, border: `1px solid ${cor}66`, color: "rgba(255,255,255,0.85)" }}
          >
            {itens.length} {itens.length === 1 ? "passeio" : "passeios"}
          </div>

          <h1
            className="font-serif font-bold text-white max-w-2xl mb-3"
            style={{ fontSize: "clamp(32px, 5vw, 62px)", lineHeight: 1.08, letterSpacing: "-1px" }}
          >
            {nome} em João Pessoa
          </h1>

          {descricao && (
            <p
              className="text-white/75 max-w-xl leading-relaxed"
              style={{ fontSize: "clamp(14px, 1.6vw, 17px)" }}
            >
              {descricao}
            </p>
          )}
        </div>
      </section>

      {/* Grid de passeios */}
      <section className="section-padding" style={{ background: "#F7F8F7" }}>
        <div className="container-safe">
          {itens.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted text-base">Nenhum passeio disponível nesta categoria ainda.</p>
              <Link href="/passeios" className="text-primary font-semibold text-sm mt-4 inline-block hover:text-accent">
                Ver todos os passeios →
              </Link>
            </div>
          ) : (
            <>
              <p className="text-xs font-bold uppercase tracking-[2.5px] text-primary mb-3">
                {nome}
              </p>
              <h2 className="mb-8">
                {itens.length} {itens.length === 1 ? "passeio disponível" : "passeios disponíveis"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {itens.map((p) => (
                  <PasseioCard key={p.id} passeio={p} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTAFinal
        whatsappUrl={waUrl}
        variante="laranja"
        titulo="Ficou com dúvida sobre algum passeio?"
        subtitulo="Mande mensagem para Murillo — ele responde rápido e ajuda a montar o roteiro ideal para o seu tempo e orçamento."
        textoBotao="Falar com Murillo no WhatsApp"
        label="Planejamento gratuito"
      />
    </>
  );
}
