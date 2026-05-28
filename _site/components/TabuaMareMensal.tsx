/**
 * Painel mensal da Tábua de Maré — "calendário oficial Vem Passear" (server component).
 *
 * Cabeçalho do card:
 *  - logo Vem Passear (azul transparente, ~40px)
 *  - título "Tábua de Maré — {Mês}/{Ano}"
 *  - subtítulo "Seixas · Picãozinho · Areia Vermelha"
 *
 * Corpo:
 *  - resumo editorial ("Saídas previstas — confirme disponibilidade…")
 *  - tabela HTML semântica (Data · Dia · Saída · Maré · Status)
 *  - aviso fixo "Confirme sempre a disponibilidade pelo WhatsApp antes de reservar."
 *  - CTA WhatsApp "Confirmar disponibilidade no WhatsApp"
 *
 * Todos os meses são renderizados no SSR para indexação. O atributo `hidden`
 * inicial é definido pela prop `visivel`; o `<TabuaMareMesTabs>` alterna no
 * cliente.
 */

import Image from "next/image";
import {
  STATUS_LABEL,
  type MesMareManual,
  type StatusMareManual,
} from "@/data/tabua-mares-manual";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface Props {
  mes: MesMareManual;
  /** Mês inicialmente visível ao usuário (apenas 1 deve vir como `true`). */
  visivel: boolean;
}

const STATUS_STYLE: Record<
  StatusMareManual,
  { bg: string; color: string; border: string; rowBg: string }
> = {
  "tem-passeio": { bg: "#E6F4EA", color: "#1B5E20", border: "#A5D6A7", rowBg: "#F4FBF5" },
  consultar:    { bg: "#FFF4D9", color: "#7A5200", border: "#FFE08A", rowBg: "#FFFDF0" },
  "sem-saida":  { bg: "#F1F1F1", color: "#6B6B6B", border: "#D9D9D9", rowBg: "#FAFAFA" },
};

function formatarData(iso: string): string {
  const [, mes, dia] = iso.split("-");
  return `${dia}/${mes}`;
}

function formatarHorario(h: string): string {
  return h.replace(":", "h");
}

export function TabuaMareMensal({ mes, visivel }: Props) {
  const waUrl = buildWhatsAppUrl("mare");
  const preenchido = mes.status === "preenchido" && (mes.dias?.length ?? 0) > 0;

  return (
    <section
      id={`mes-${mes.mesSlug}`}
      role="tabpanel"
      aria-label={`Tábua de maré — ${mes.mesNome} de ${mes.ano}`}
      hidden={!visivel}
    >
      <div className="container-safe py-6">
        {/* Card "oficial Vem Passear" */}
        <article
          style={{
            background: "var(--cor-fundo-puro)",
            border: "1px solid var(--cor-borda)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(9, 34, 56, 0.04)",
          }}
        >
          {/* Cabeçalho com logo + título + subtítulo */}
          <header
            style={{
              padding: "20px 20px 18px",
              borderBottom: "1px solid var(--cor-borda)",
              background: "var(--cor-fundo)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "48px",
                height: "48px",
                flexShrink: 0,
              }}
            >
              <Image
                src="/images/logo/logo-azul-transparente.png"
                alt="Vem Passear em Jampa"
                fill
                sizes="48px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div style={{ minWidth: 0 }}>
              <h3
                className="font-serif"
                style={{
                  fontSize: "clamp(20px, 2.4vw, 26px)",
                  fontWeight: 600,
                  color: "var(--cor-texto-escuro)",
                  marginBottom: "4px",
                  lineHeight: 1.15,
                }}
              >
                Tábua de Maré — {mes.mesNome}/{mes.ano}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: "var(--cor-primaria)",
                  margin: 0,
                }}
              >
                Seixas · Picãozinho · Areia Vermelha
              </p>
            </div>
          </header>

          <div style={{ padding: "20px" }}>
            {mes.resumoEditorial && (
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "var(--cor-texto-medio)",
                  margin: "0 0 18px",
                  maxWidth: "640px",
                }}
              >
                {mes.resumoEditorial}
              </p>
            )}

            {/* Tabela de dias */}
            {preenchido && (
              <div className="overflow-x-auto">
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "separate",
                    borderSpacing: 0,
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    background: "var(--cor-fundo-puro)",
                    border: "1px solid var(--cor-borda)",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <caption className="sr-only">
                    Tábua de maré para passeios de piscinas naturais em João
                    Pessoa — {mes.mesNome} de {mes.ano}.
                  </caption>
                  <thead>
                    <tr style={{ background: "var(--cor-fundo)" }}>
                      <th scope="col" style={thStyle}>Data</th>
                      <th scope="col" style={thStyle}>Dia</th>
                      <th scope="col" style={thStyle}>Saída</th>
                      <th scope="col" style={thStyle}>Altura (m)</th>
                      <th scope="col" style={thStyle}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mes.dias!.map((d) => {
                      const s = STATUS_STYLE[d.status];
                      return (
                        <tr
                          key={d.data}
                          style={{
                            borderTop: "1px solid var(--cor-borda)",
                            background: s.rowBg,
                          }}
                        >
                          <td
                            style={{
                              ...tdStyle,
                              fontWeight: 700,
                              fontSize: "15px",
                              color: "var(--cor-texto-escuro)",
                            }}
                          >
                            {formatarData(d.data)}
                          </td>
                          <td style={{ ...tdStyle, fontSize: "15px" }}>{d.diaSemana}</td>
                          <td
                            style={{
                              ...tdStyle,
                              fontSize: "15px",
                              fontWeight: 600,
                              color: "var(--cor-texto-escuro)",
                            }}
                          >
                            {d.horarioSaida ? formatarHorario(d.horarioSaida) : "—"}
                          </td>
                          <td style={tdStyle}>
                            {d.alturaMare !== null
                              ? `${d.alturaMare.toFixed(1)}m`
                              : "—"}
                          </td>
                          <td style={tdStyle}>
                            <span
                              style={{
                                display: "inline-block",
                                padding: "5px 12px",
                                borderRadius: "999px",
                                fontSize: "13px",
                                fontWeight: 700,
                                background: s.bg,
                                color: s.color,
                                border: `1px solid ${s.border}`,
                              }}
                            >
                              {STATUS_LABEL[d.status]}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {/* Legenda */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "14px",
                  padding: "0 2px",
                }}>
                  {(Object.entries(STATUS_STYLE) as [StatusMareManual, typeof STATUS_STYLE[StatusMareManual]][]).map(([key, s]) => (
                    <span key={key} style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12px",
                      fontFamily: "var(--font-inter)",
                      color: "var(--cor-texto-medio)",
                    }}>
                      <span style={{
                        display: "inline-block",
                        width: "12px",
                        height: "12px",
                        borderRadius: "3px",
                        background: s.bg,
                        border: `1px solid ${s.border}`,
                        flexShrink: 0,
                      }} />
                      {STATUS_LABEL[key]}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Fallback quando o mês ainda não foi preenchido */}
            {!preenchido && (
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "var(--cor-texto-medio)",
                  margin: 0,
                }}
              >
                Em breve. Enquanto isso, fala comigo no WhatsApp que eu confirmo
                a melhor data.
              </p>
            )}

            {/* Aviso fixo */}
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
                lineHeight: 1.6,
                color: "var(--cor-texto-medio)",
                background: "var(--cor-fundo)",
                border: "1px solid var(--cor-borda)",
                borderRadius: "10px",
                padding: "12px 14px",
                margin: "18px 0 0",
              }}
            >
              <strong style={{ color: "var(--cor-texto-escuro)" }}>Aviso:</strong>{" "}
              Confirme sempre a disponibilidade pelo WhatsApp antes de reservar.
            </p>

            {/* CTA WhatsApp */}
            <div className="mt-5 text-center">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "var(--cor-whatsapp)",
                  color: "#fff",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 600,
                  fontSize: "15px",
                  padding: "14px 22px",
                  borderRadius: "999px",
                  minHeight: "48px",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(37,211,102,0.25)",
                }}
              >
                Confirmar disponibilidade no WhatsApp
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

const thStyle: React.CSSProperties = {
  padding: "10px 12px",
  textAlign: "left",
  fontWeight: 600,
  color: "var(--cor-texto-medio)",
  fontSize: "12px",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
};

const tdStyle: React.CSSProperties = {
  padding: "12px",
  color: "var(--cor-texto-medio)",
  verticalAlign: "middle",
};
