/**
 * 3 cards dos passeios que dependem da maré baixa.
 *
 * Lê de `data/passeios.ts` — não duplica dado.
 * Slugs alvo: seixas · picaozinho · areia-vermelha-catamara.
 *
 * Cada card oferece dois caminhos:
 *  - "Ver passeio" → página interna do passeio
 *  - "Consultar melhor dia" → WhatsApp com mensagem pré-tagueada
 */

import Image from "next/image";
import Link from "next/link";
import { empresa } from "@/data/empresa";
import { passeios, type Passeio } from "@/data/passeios";

const SLUGS_MARE = ["seixas", "picaozinho", "areia-vermelha-catamara"] as const;

function urlPasseio(p: Passeio): string {
  return `/passeios/${p.categoria}/${p.slug}`;
}

function buildWaUrl(nome: string): string {
  const texto = `Oi, Murillo! Quero consultar a melhor data para o passeio ${nome}.`;
  return `${empresa.contato.whatsappLink}?text=${encodeURIComponent(texto)}`;
}

export function TabuaMarePasseiosRelacionados() {
  const lista = SLUGS_MARE
    .map((slug) => passeios.find((p) => p.slug === slug))
    .filter((p): p is Passeio => Boolean(p));

  if (lista.length === 0) return null;

  return (
    <section
      className="py-12 md:py-16"
      style={{ background: "var(--cor-fundo)" }}
      aria-labelledby="passeios-mare"
    >
      <div className="container-safe">
        <header className="mb-8 text-center">
          <h2
            id="passeios-mare"
            className="font-serif"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 600,
              color: "var(--cor-texto-escuro)",
              marginBottom: "10px",
            }}
          >
            Passeios que dependem da maré baixa
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              color: "var(--cor-texto-medio)",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Estes três passeios só rolam quando a maré está baixa. Confirme a
            melhor data com Murillo no WhatsApp.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {lista.map((p) => {
            const waUrl = buildWaUrl(p.nome);
            return (
              <article
                key={p.id}
                style={{
                  background: "var(--cor-fundo-puro)",
                  border: "1px solid var(--cor-borda)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {p.coverImage && (
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "3 / 2",
                      background: "var(--cor-fundo)",
                    }}
                  >
                    <Image
                      src={p.coverImage}
                      alt={p.imagemAlt ?? p.nome}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--cor-primaria)",
                      marginBottom: "8px",
                    }}
                  >
                    Depende de maré baixa
                  </span>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "var(--cor-texto-escuro)",
                      marginBottom: "10px",
                      lineHeight: 1.25,
                    }}
                  >
                    {p.nome}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "14px",
                      color: "var(--cor-texto-medio)",
                      lineHeight: 1.6,
                      flexGrow: 1,
                      marginBottom: "16px",
                    }}
                  >
                    {p.descricao}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <Link
                      href={urlPasseio(p)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "var(--cor-fundo-puro)",
                        color: "var(--cor-primaria)",
                        fontFamily: "var(--font-inter)",
                        fontWeight: 600,
                        fontSize: "14px",
                        padding: "11px 18px",
                        borderRadius: "999px",
                        minHeight: "44px",
                        textDecoration: "none",
                        border: "1px solid var(--cor-primaria)",
                      }}
                    >
                      Ver passeio
                    </Link>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "var(--cor-whatsapp)",
                        color: "#fff",
                        fontFamily: "var(--font-inter)",
                        fontWeight: 600,
                        fontSize: "14px",
                        padding: "11px 18px",
                        borderRadius: "999px",
                        minHeight: "44px",
                        textDecoration: "none",
                      }}
                    >
                      Consultar melhor dia
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
