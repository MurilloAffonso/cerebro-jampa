/**
 * Hub de Passeios — /passeios/
 * ISSUE-09
 */

import type { Metadata } from "next";
import Link from "next/link";
import { passeios } from "@/data/passeios";
import { empresa } from "@/data/empresa";
import { PasseioCard } from "@/components/PasseioCard";
import { CTAFinal } from "@/components/CTAFinal";
import { CTASticky } from "@/components/CTASticky";

export const metadata: Metadata = {
  title: "Passeios em João Pessoa — Vem Passear em Jampa",
  description:
    "Explore os 22 passeios em João Pessoa: piscinas naturais, litoral sul e norte, city tour, pacotes e interestaduais. Agende pelo WhatsApp.",
};

const CATEGORIAS: {
  slug: string;
  nome: string;
  cor: string;
  bgGradient: string;
}[] = [
  { slug: "pacotes",           nome: "Pacotes",           cor: "#107997", bgGradient: "linear-gradient(160deg, #092238, #163149)" },
  { slug: "litoral-sul",       nome: "Litoral Sul",       cor: "#1A6B52", bgGradient: "linear-gradient(160deg, #0d4d2e, #1A6B52)" },
  { slug: "litoral-norte",     nome: "Litoral Norte",     cor: "#7B4F12", bgGradient: "linear-gradient(160deg, #4a2c0a, #7B4F12)" },
  { slug: "piscinas-naturais", nome: "Piscinas Naturais", cor: "#0E5E8A", bgGradient: "linear-gradient(160deg, #073d5c, #0E5E8A)" },
  { slug: "city-tour",         nome: "City Tour",         cor: "#4A3580", bgGradient: "linear-gradient(160deg, #2a1e55, #4A3580)" },
  { slug: "interestaduais",    nome: "Interestaduais",    cor: "#8B1A3A", bgGradient: "linear-gradient(160deg, #550f23, #8B1A3A)" },
];

export default function PasseiosPage() {
  const categorias = CATEGORIAS.map((cat) => ({
    ...cat,
    itens: passeios.filter((p) => p.categoria === cat.slug),
  }));

  const total = passeios.length;
  const waUrl = `${empresa.contato.whatsappLink}?text=Oi%2C+quero+informações+sobre+os+passeios+em+Jo%C3%A3o+Pessoa`;

  return (
    <>
      <CTASticky whatsappUrl={waUrl} label="Reservar no WhatsApp" />

      {/* Breadcrumb */}
      <nav className="container-safe py-3 text-sm text-muted" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1">
          <li className="flex items-center gap-1">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span aria-hidden="true" className="text-muted/50">/</span>
          </li>
          <li>
            <span className="text-dark font-medium" aria-current="page">Passeios</span>
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section
        id="hero-section"
        className="relative overflow-hidden flex flex-col"
        style={{ minHeight: "min(50vh, 420px)", background: "linear-gradient(135deg, #092238 0%, #163149 55%, #092238 100%)" }}
      >
        {/* Blobs */}
        <div
          className="absolute pointer-events-none"
          style={{ top: "-10%", right: "-5%", width: "45%", paddingBottom: "45%", background: "radial-gradient(circle, rgba(197,183,163,0.30) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(55px)" }}
          aria-hidden="true"
        />
        <div
          className="absolute pointer-events-none"
          style={{ bottom: "0%", left: "-5%", width: "30%", paddingBottom: "30%", background: "radial-gradient(circle, rgba(16,121,151,0.45) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(45px)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 100%)" }} aria-hidden="true" />

        <div
          className="relative container-safe flex flex-col justify-end text-white pb-10 pt-16 flex-1"
          style={{ minHeight: "min(50vh, 420px)" }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4 self-start"
            style={{ background: "rgba(16,121,151,0.2)", border: "1px solid rgba(16,121,151,0.4)", color: "#107997" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" aria-hidden="true" />
            João Pessoa, Paraíba
          </div>

          <h1
            className="font-serif font-bold text-white max-w-2xl mb-3"
            style={{ fontSize: "clamp(30px, 5vw, 58px)", lineHeight: 1.08, letterSpacing: "-1px" }}
          >
            Todos os Passeios em João Pessoa
          </h1>
          <p className="text-white/70 mb-8" style={{ fontSize: "clamp(14px, 1.5vw, 17px)" }}>
            {total} passeios · {categorias.length} categorias · Curadoria local de confiança
          </p>

          {/* Âncoras de categoria */}
          <div className="flex flex-wrap gap-2">
            {categorias.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{ background: `${cat.cor}55`, border: `1px solid ${cat.cor}88` }}
              >
                {cat.nome}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Listagem por categoria */}
      <div className="section-padding" style={{ background: "#F7F8F7" }}>
        <div className="container-safe space-y-20">
          {categorias.map((cat) => (
            <div key={cat.slug} id={cat.slug}>
              {/* Cabeçalho da categoria */}
              <div className="flex items-center justify-between gap-4 mb-8 pb-5 border-b border-black/[0.07]">
                <div className="flex items-center gap-3">
                  {/* Dot de cor */}
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ background: cat.cor }} aria-hidden="true" />
                  <div>
                    <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.4px" }}>
                      {cat.nome}
                    </h2>
                    <p className="text-muted text-xs mt-0.5">
                      {cat.itens.length} {cat.itens.length === 1 ? "passeio" : "passeios"}
                    </p>
                  </div>
                </div>
                <Link
                  href={`/passeios/${cat.slug}`}
                  className="text-xs font-semibold text-secondary hover:text-primary transition-colors border-b border-secondary/30 hover:border-primary pb-0.5 whitespace-nowrap shrink-0"
                >
                  Ver todos →
                </Link>
              </div>

              {/* Grid de passeios */}
              {cat.itens.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.itens.map((p) => (
                    <PasseioCard key={p.id} passeio={p} />
                  ))}
                </div>
              ) : (
                <p className="text-muted text-sm py-4">Em breve.</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <CTAFinal
        whatsappUrl={waUrl}
        variante="laranja"
        titulo="Ficou com dúvida sobre qual passeio escolher?"
        subtitulo="Mande mensagem para Murillo — ele indica o roteiro certo para o seu tempo e orçamento."
        textoBotao="Falar com Murillo no WhatsApp"
        label="Planejamento gratuito"
      />
    </>
  );
}
