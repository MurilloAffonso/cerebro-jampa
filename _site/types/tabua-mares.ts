export type StatusOperacional =
  | "excelente"   // 0.0m – 0.5m
  | "boa"         // 0.6m – 0.7m
  | "consultar"   // 0.8m
  | "sem-passeio"; // 0.9m+

export type PasseioMareSlug = "seixas" | "picaozinho" | "areia-vermelha";

export type FonteTipo =
  | "oficial-marinha"        // CHM — Porto de Cabedelo (confiança alta)
  | "operacional-referencia" // tabuademares.com — referência prática (confiança média)
  | "manual";                // entrada manual por Murillo

export type ConfiancaFonte = "alta" | "media" | "baixa";

/**
 * Registro de uma saída diária.
 *
 * Campos INTERNOS — nunca renderizar ao cliente:
 *   horarioBaixaMareInterno, horarioSaidaSugerido, horarioSaidaConfirmado,
 *   fonteTipo, confiancaFonte, urlFonte, dataImportacao, revisadoPorMurillo, overrideManual
 *
 * Campo PÚBLICO de horário: horarioSaidaExibido = horarioSaidaConfirmado ?? horarioSaidaSugerido
 */
export interface SaidaDia {
  // --- campos públicos ---
  data: string;                       // "2026-05-27"
  diaSemana: string;                  // "Segunda-feira"
  horarioSaidaExibido: string | null; // confirmado ?? sugerido — único campo de horário público
  alturaMare: number | null;          // 0.6
  statusOperacional: StatusOperacional;
  temPasseio: boolean;

  // --- campos internos de cálculo ---
  horarioBaixaMareInterno: string | null; // "09:03" — INTERNO
  horarioSaidaSugerido: string | null;    // "08:30" — calculado, INTERNO
  horarioSaidaConfirmado: string | null;  // override manual; null se sem override — INTERNO

  // --- metadados ---
  passeiosAfetados: PasseioMareSlug[];
  fonte: string;
  fonteTipo: FonteTipo;
  confiancaFonte: ConfiancaFonte;
  urlFonte: string;
  dataImportacao: string;          // ISO datetime "2026-04-27T14:00:00-03:00"
  revisadoPorMurillo: boolean;
  overrideManual: boolean;
  observacao: string | null;
}

export interface JanelaSaida {
  cicloId: string;     // "mai-2026-ciclo-1"
  mesAno: string;      // "Maio 2026"
  dataInicio: string;  // "2026-05-01"
  dataFim: string;     // "2026-05-05"
  saidas: SaidaDia[];
}

export interface CalendarioMare {
  passeioSlug: PasseioMareSlug;
  mesAno: string;           // "mai-2026"
  janelas: JanelaSaida[];
  proximaSaida: SaidaDia | null;
  atualizadoEm: string;
}

export interface ProximaSaidaCard {
  diaSemana: string;
  dataFormatada: string;   // "27/05"
  horarioSaida: string;    // horarioSaidaExibido já resolvido
  alturaMare: number;
  statusOperacional: StatusOperacional;
}
