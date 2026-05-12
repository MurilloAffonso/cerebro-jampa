/**
 * Tábua de Marés — versão MANUAL / EDITORIAL (v2).
 *
 * Independente de `lib/tabua-mares.ts` e `data/tabua-mares.ts` (que servem
 * `/passeios/piscinas-naturais/calendario` com dados operacionais).
 *
 * Preenchida manualmente por Murillo a partir das tábuas de referência.
 * Não há `revisadoPorMurillo` por dia — o `status` do mês controla a exibição.
 *
 * Regras invioláveis (skill `tabua-mares-turismo` §5):
 *  - A página nunca se anuncia como "tábua oficial da Marinha".
 *  - Microcopy do status indisponível: "Sem saída" (nunca "Indisponível").
 *  - Sempre confirmar disponibilidade no WhatsApp antes de reservar.
 */

export type StatusMareManual = "tem-passeio" | "consultar" | "sem-saida";

export type StatusMes = "em-revisao" | "preenchido" | "parcial";

export interface DiaMareManual {
  /** Data ISO `"2026-05-01"` */
  data: string;
  /** Dia do mês `1..31` */
  dia: number;
  diaSemana: "Seg" | "Ter" | "Qua" | "Qui" | "Sex" | "Sáb" | "Dom";
  /** `"09:30"` — `null` quando `sem-saida` */
  horarioSaida: string | null;
  /** metros — `null` quando `sem-saida` */
  alturaMare: number | null;
  status: StatusMareManual;
  observacao?: string;
}

export interface JanelaMare {
  dataInicio: string;
  dataFim: string;
  destaque?: string;
}

export interface MesMareManual {
  ano: number;
  /** `5..12` */
  mes: number;
  /** `"Maio"` */
  mesNome: string;
  /** `"maio"` — usado em query string e anchor */
  mesSlug: string;
  status: StatusMes;
  resumoEditorial?: string;
  diasOperacionais?: number;
  janelas?: JanelaMare[];
  dias?: DiaMareManual[];
  /** ISO da última vez que Murillo validou. */
  ultimaRevisao?: string;
}

// ---------------------------------------------------------------------------
// Microcopy de status — texto exibido ao cliente
// ---------------------------------------------------------------------------

export const STATUS_LABEL: Record<StatusMareManual, string> = {
  "tem-passeio": "Tem passeio",
  consultar: "Consultar",
  "sem-saida": "Sem saída",
};

// ---------------------------------------------------------------------------
// Helpers de construção (mantêm os meses legíveis)
// ---------------------------------------------------------------------------

type DiaSemana = DiaMareManual["diaSemana"];

function dia(
  iso: string,
  diaSemana: DiaSemana,
  horario: string,
  altura: number,
): DiaMareManual {
  const [, mes, d] = iso.split("-");
  void mes;
  return {
    data: iso,
    dia: Number(d),
    diaSemana,
    horarioSaida: horario,
    alturaMare: altura,
    status: "tem-passeio",
  };
}

function semSaida(iso: string, diaSemana: DiaSemana): DiaMareManual {
  const [, , d] = iso.split("-");
  return {
    data: iso,
    dia: Number(d),
    diaSemana,
    horarioSaida: null,
    alturaMare: null,
    status: "sem-saida",
  };
}

// ---------------------------------------------------------------------------
// Dados — Maio a Dezembro/2026 (preenchidos manualmente)
// ---------------------------------------------------------------------------

const RESUMO_PADRAO =
  "Saídas previstas — confirme disponibilidade no WhatsApp antes de reservar.";

const DIAS_MAIO_2026: DiaMareManual[] = [
  dia("2026-05-01", "Sex", "09:00", 0.3),
  dia("2026-05-02", "Sáb", "09:30", 0.4),
  dia("2026-05-03", "Dom", "10:00", 0.4),
  dia("2026-05-04", "Seg", "10:30", 0.5),
  dia("2026-05-05", "Ter", "11:00", 0.6),
  dia("2026-05-06", "Qua", "11:30", 0.7),
  dia("2026-05-07", "Qui", "12:00", 0.8),
  dia("2026-05-08", "Sex", "12:00", 0.9),
  semSaida("2026-05-09", "Sáb"),
  semSaida("2026-05-10", "Dom"),
  semSaida("2026-05-11", "Seg"),
  semSaida("2026-05-12", "Ter"),
  semSaida("2026-05-13", "Qua"),
  dia("2026-05-14", "Qui", "07:30", 0.4),
  dia("2026-05-15", "Sex", "08:00", 0.3),
  dia("2026-05-16", "Sáb", "09:00", 0.2),
  dia("2026-05-17", "Dom", "09:30", 0.1),
  dia("2026-05-18", "Seg", "10:00", 0.1),
  dia("2026-05-19", "Ter", "11:00", 0.2),
  dia("2026-05-20", "Qua", "12:00", 0.3),
  dia("2026-05-21", "Qui", "12:00", 0.5),
  semSaida("2026-05-22", "Sex"),
  semSaida("2026-05-23", "Sáb"),
  semSaida("2026-05-24", "Dom"),
  semSaida("2026-05-25", "Seg"),
  semSaida("2026-05-26", "Ter"),
  semSaida("2026-05-27", "Qua"),
  dia("2026-05-28", "Qui", "07:30", 0.5),
  dia("2026-05-29", "Sex", "08:00", 0.5),
  dia("2026-05-30", "Sáb", "08:30", 0.4),
  dia("2026-05-31", "Dom", "09:00", 0.4),
];

const DIAS_JUNHO_2026: DiaMareManual[] = [
  dia("2026-06-01", "Seg", "10:00", 0.4),
  dia("2026-06-02", "Ter", "10:30", 0.5),
  dia("2026-06-03", "Qua", "11:00", 0.5),
  dia("2026-06-04", "Qui", "11:30", 0.6),
  dia("2026-06-05", "Sex", "12:00", 0.6),
  dia("2026-06-06", "Sáb", "12:00", 0.7),
  dia("2026-06-07", "Dom", "12:00", 0.7),
  semSaida("2026-06-08", "Seg"),
  semSaida("2026-06-09", "Ter"),
  semSaida("2026-06-10", "Qua"),
  semSaida("2026-06-11", "Qui"),
  dia("2026-06-12", "Sex", "07:00", 0.4),
  dia("2026-06-13", "Sáb", "07:30", 0.3),
  dia("2026-06-14", "Dom", "08:30", 0.2),
  dia("2026-06-15", "Seg", "09:30", 0.1),
  dia("2026-06-16", "Ter", "10:00", 0.1),
  dia("2026-06-17", "Qua", "11:00", 0.1),
  dia("2026-06-18", "Qui", "12:00", 0.2),
  dia("2026-06-19", "Sex", "12:00", 0.4),
  dia("2026-06-20", "Sáb", "12:00", 0.5),
  semSaida("2026-06-21", "Dom"),
  semSaida("2026-06-22", "Seg"),
  semSaida("2026-06-23", "Ter"),
  semSaida("2026-06-24", "Qua"),
  semSaida("2026-06-25", "Qui"),
  dia("2026-06-26", "Sex", "07:30", 0.7),
  dia("2026-06-27", "Sáb", "08:00", 0.6),
  dia("2026-06-28", "Dom", "08:30", 0.5),
  dia("2026-06-29", "Seg", "09:00", 0.5),
  dia("2026-06-30", "Ter", "09:30", 0.4),
];

const DIAS_JULHO_2026: DiaMareManual[] = [
  dia("2026-07-01", "Qua", "10:00", 0.4),
  dia("2026-07-02", "Qui", "10:30", 0.4),
  dia("2026-07-03", "Sex", "11:30", 0.4),
  dia("2026-07-04", "Sáb", "12:00", 0.4),
  dia("2026-07-05", "Dom", "12:00", 0.5),
  dia("2026-07-06", "Seg", "12:00", 0.6),
  semSaida("2026-07-07", "Ter"),
  semSaida("2026-07-08", "Qua"),
  semSaida("2026-07-09", "Qui"),
  semSaida("2026-07-10", "Sex"),
  dia("2026-07-11", "Sáb", "07:00", 0.5),
  dia("2026-07-12", "Dom", "07:30", 0.3),
  dia("2026-07-13", "Seg", "08:30", 0.2),
  dia("2026-07-14", "Ter", "09:00", 0.1),
  dia("2026-07-15", "Qua", "10:00", 0.0),
  dia("2026-07-16", "Qui", "11:00", 0.0),
  dia("2026-07-17", "Sex", "11:30", 0.1),
  dia("2026-07-18", "Sáb", "12:00", 0.3),
  dia("2026-07-19", "Dom", "12:00", 0.4),
  dia("2026-07-20", "Seg", "12:00", 0.6),
  semSaida("2026-07-21", "Ter"),
  semSaida("2026-07-22", "Qua"),
  semSaida("2026-07-23", "Qui"),
  dia("2026-07-24", "Sex", "07:00", 0.7),
  dia("2026-07-25", "Sáb", "07:00", 0.7),
  dia("2026-07-26", "Dom", "07:30", 0.6),
  dia("2026-07-27", "Seg", "08:00", 0.5),
  dia("2026-07-28", "Ter", "08:30", 0.4),
  dia("2026-07-29", "Qua", "09:30", 0.3),
  dia("2026-07-30", "Qui", "10:00", 0.3),
  dia("2026-07-31", "Sex", "10:30", 0.3),
];

const DIAS_AGOSTO_2026: DiaMareManual[] = [
  dia("2026-08-01", "Sáb", "11:00", 0.3),
  dia("2026-08-02", "Dom", "11:30", 0.3),
  dia("2026-08-03", "Seg", "12:00", 0.4),
  dia("2026-08-04", "Ter", "12:00", 0.5),
  dia("2026-08-05", "Qua", "12:00", 0.6),
  semSaida("2026-08-06", "Qui"),
  semSaida("2026-08-07", "Sex"),
  semSaida("2026-08-08", "Sáb"),
  semSaida("2026-08-09", "Dom"),
  dia("2026-08-10", "Seg", "07:30", 0.3),
  dia("2026-08-11", "Ter", "08:00", 0.2),
  dia("2026-08-12", "Qua", "09:00", 0.0),
  dia("2026-08-13", "Qui", "09:30", 0.0),
  dia("2026-08-14", "Sex", "10:30", 0.0),
  dia("2026-08-15", "Sáb", "11:00", 0.1),
  dia("2026-08-16", "Dom", "11:30", 0.3),
  dia("2026-08-17", "Seg", "12:00", 0.4),
  dia("2026-08-18", "Ter", "12:00", 0.6),
  dia("2026-08-19", "Qua", "12:00", 0.8),
  semSaida("2026-08-20", "Qui"),
  semSaida("2026-08-21", "Sex"),
  semSaida("2026-08-22", "Sáb"),
  semSaida("2026-08-23", "Dom"),
  dia("2026-08-24", "Seg", "07:30", 0.6),
  dia("2026-08-25", "Ter", "08:00", 0.5),
  dia("2026-08-26", "Qua", "08:30", 0.4),
  dia("2026-08-27", "Qui", "09:00", 0.3),
  dia("2026-08-28", "Sex", "09:30", 0.2),
  dia("2026-08-29", "Sáb", "10:00", 0.2),
  dia("2026-08-30", "Dom", "10:30", 0.2),
  dia("2026-08-31", "Seg", "11:00", 0.3),
];

const DIAS_SETEMBRO_2026: DiaMareManual[] = [
  dia("2026-09-01", "Ter", "11:30", 0.4),
  dia("2026-09-02", "Qua", "12:00", 0.6),
  dia("2026-09-03", "Qui", "12:00", 0.7),
  semSaida("2026-09-04", "Sex"),
  semSaida("2026-09-05", "Sáb"),
  semSaida("2026-09-06", "Dom"),
  dia("2026-09-07", "Seg", "07:00", 0.5),
  dia("2026-09-08", "Ter", "07:30", 0.3),
  dia("2026-09-09", "Qua", "08:00", 0.2),
  dia("2026-09-10", "Qui", "09:00", 0.1),
  dia("2026-09-11", "Sex", "09:30", 0.1),
  dia("2026-09-12", "Sáb", "10:00", 0.1),
  dia("2026-09-13", "Dom", "10:30", 0.2),
  dia("2026-09-14", "Seg", "11:00", 0.3),
  dia("2026-09-15", "Ter", "11:30", 0.5),
  dia("2026-09-16", "Qua", "12:00", 0.7),
  dia("2026-09-17", "Qui", "12:00", 0.9),
  semSaida("2026-09-18", "Sex"),
  semSaida("2026-09-19", "Sáb"),
  semSaida("2026-09-20", "Dom"),
  semSaida("2026-09-21", "Seg"),
  semSaida("2026-09-22", "Ter"),
  dia("2026-09-23", "Qua", "07:30", 0.5),
  dia("2026-09-24", "Qui", "08:00", 0.3),
  dia("2026-09-25", "Sex", "08:30", 0.2),
  dia("2026-09-26", "Sáb", "09:00", 0.2),
  dia("2026-09-27", "Dom", "09:30", 0.1),
  dia("2026-09-28", "Seg", "10:00", 0.2),
  dia("2026-09-29", "Ter", "10:30", 0.3),
  dia("2026-09-30", "Qua", "11:00", 0.4),
];

const DIAS_OUTUBRO_2026: DiaMareManual[] = [
  dia("2026-10-01", "Qui", "12:00", 0.6),
  dia("2026-10-02", "Sex", "12:00", 0.8),
  semSaida("2026-10-03", "Sáb"),
  semSaida("2026-10-04", "Dom"),
  semSaida("2026-10-05", "Seg"),
  semSaida("2026-10-06", "Ter"),
  dia("2026-10-07", "Qua", "07:30", 0.3),
  dia("2026-10-08", "Qui", "08:00", 0.2),
  dia("2026-10-09", "Sex", "08:30", 0.2),
  dia("2026-10-10", "Sáb", "09:00", 0.2),
  dia("2026-10-11", "Dom", "09:30", 0.2),
  dia("2026-10-12", "Seg", "10:00", 0.3),
  dia("2026-10-13", "Ter", "10:30", 0.4),
  dia("2026-10-14", "Qua", "11:00", 0.5),
  dia("2026-10-15", "Qui", "11:30", 0.7),
  dia("2026-10-16", "Sex", "12:00", 0.8),
  semSaida("2026-10-17", "Sáb"),
  semSaida("2026-10-18", "Dom"),
  semSaida("2026-10-19", "Seg"),
  semSaida("2026-10-20", "Ter"),
  semSaida("2026-10-21", "Qua"),
  semSaida("2026-10-22", "Qui"),
  dia("2026-10-23", "Sex", "07:30", 0.4),
  dia("2026-10-24", "Sáb", "08:00", 0.2),
  dia("2026-10-25", "Dom", "08:30", 0.2),
  dia("2026-10-26", "Seg", "09:00", 0.1),
  dia("2026-10-27", "Ter", "09:30", 0.2),
  dia("2026-10-28", "Qua", "10:30", 0.3),
  dia("2026-10-29", "Qui", "11:00", 0.4),
  dia("2026-10-30", "Sex", "12:00", 0.5),
  dia("2026-10-31", "Sáb", "12:00", 0.7),
];

const DIAS_NOVEMBRO_2026: DiaMareManual[] = [
  semSaida("2026-11-01", "Dom"),
  semSaida("2026-11-02", "Seg"),
  semSaida("2026-11-03", "Ter"),
  semSaida("2026-11-04", "Qua"),
  semSaida("2026-11-05", "Qui"),
  dia("2026-11-06", "Sex", "07:30", 0.3),
  dia("2026-11-07", "Sáb", "08:00", 0.3),
  dia("2026-11-08", "Dom", "08:30", 0.3),
  dia("2026-11-09", "Seg", "09:00", 0.3),
  dia("2026-11-10", "Ter", "09:30", 0.3),
  dia("2026-11-11", "Qua", "10:00", 0.4),
  dia("2026-11-12", "Qui", "10:30", 0.5),
  dia("2026-11-13", "Sex", "11:00", 0.6),
  dia("2026-11-14", "Sáb", "11:30", 0.7),
  dia("2026-11-15", "Dom", "12:00", 0.8),
  semSaida("2026-11-16", "Seg"),
  semSaida("2026-11-17", "Ter"),
  semSaida("2026-11-18", "Qua"),
  semSaida("2026-11-19", "Qui"),
  semSaida("2026-11-20", "Sex"),
  semSaida("2026-11-21", "Sáb"),
  dia("2026-11-22", "Dom", "07:30", 0.3),
  dia("2026-11-23", "Seg", "08:00", 0.2),
  dia("2026-11-24", "Ter", "08:30", 0.2),
  dia("2026-11-25", "Qua", "09:30", 0.2),
  dia("2026-11-26", "Qui", "10:00", 0.2),
  dia("2026-11-27", "Sex", "11:00", 0.3),
  dia("2026-11-28", "Sáb", "11:30", 0.4),
  dia("2026-11-29", "Dom", "12:00", 0.5),
  semSaida("2026-11-30", "Seg"),
];

const DIAS_DEZEMBRO_2026: DiaMareManual[] = [
  semSaida("2026-12-01", "Ter"),
  semSaida("2026-12-02", "Qua"),
  semSaida("2026-12-03", "Qui"),
  semSaida("2026-12-04", "Sex"),
  dia("2026-12-05", "Sáb", "07:00", 0.4),
  dia("2026-12-06", "Dom", "07:30", 0.4),
  dia("2026-12-07", "Seg", "08:00", 0.4),
  dia("2026-12-08", "Ter", "08:30", 0.4),
  dia("2026-12-09", "Qua", "09:00", 0.4),
  dia("2026-12-10", "Qui", "09:30", 0.4),
  dia("2026-12-11", "Sex", "10:00", 0.4),
  dia("2026-12-12", "Sáb", "10:30", 0.4),
  dia("2026-12-13", "Dom", "11:30", 0.5),
  dia("2026-12-14", "Seg", "12:00", 0.6),
  dia("2026-12-15", "Ter", "12:00", 0.6),
  semSaida("2026-12-16", "Qua"),
  semSaida("2026-12-17", "Qui"),
  semSaida("2026-12-18", "Sex"),
  semSaida("2026-12-19", "Sáb"),
  semSaida("2026-12-20", "Dom"),
  dia("2026-12-21", "Seg", "07:00", 0.3),
  dia("2026-12-22", "Ter", "07:30", 0.2),
  dia("2026-12-23", "Qua", "08:30", 0.1),
  dia("2026-12-24", "Qui", "09:00", 0.1),
  dia("2026-12-25", "Sex", "10:00", 0.1),
  dia("2026-12-26", "Sáb", "10:30", 0.1),
  dia("2026-12-27", "Dom", "11:30", 0.2),
  dia("2026-12-28", "Seg", "12:00", 0.3),
  dia("2026-12-29", "Ter", "12:00", 0.4),
  dia("2026-12-30", "Qua", "12:00", 0.5),
  semSaida("2026-12-31", "Qui"),
];

function contarOperacionais(dias: DiaMareManual[]): number {
  return dias.filter((d) => d.status === "tem-passeio").length;
}

export const TABUA_MARES_MANUAL_2026: MesMareManual[] = [
  {
    ano: 2026, mes: 5, mesNome: "Maio", mesSlug: "maio",
    status: "preenchido", resumoEditorial: RESUMO_PADRAO,
    dias: DIAS_MAIO_2026,
    diasOperacionais: contarOperacionais(DIAS_MAIO_2026),
  },
  {
    ano: 2026, mes: 6, mesNome: "Junho", mesSlug: "junho",
    status: "preenchido", resumoEditorial: RESUMO_PADRAO,
    dias: DIAS_JUNHO_2026,
    diasOperacionais: contarOperacionais(DIAS_JUNHO_2026),
  },
  {
    ano: 2026, mes: 7, mesNome: "Julho", mesSlug: "julho",
    status: "preenchido", resumoEditorial: RESUMO_PADRAO,
    dias: DIAS_JULHO_2026,
    diasOperacionais: contarOperacionais(DIAS_JULHO_2026),
  },
  {
    ano: 2026, mes: 8, mesNome: "Agosto", mesSlug: "agosto",
    status: "preenchido", resumoEditorial: RESUMO_PADRAO,
    dias: DIAS_AGOSTO_2026,
    diasOperacionais: contarOperacionais(DIAS_AGOSTO_2026),
  },
  {
    ano: 2026, mes: 9, mesNome: "Setembro", mesSlug: "setembro",
    status: "preenchido", resumoEditorial: RESUMO_PADRAO,
    dias: DIAS_SETEMBRO_2026,
    diasOperacionais: contarOperacionais(DIAS_SETEMBRO_2026),
  },
  {
    ano: 2026, mes: 10, mesNome: "Outubro", mesSlug: "outubro",
    status: "preenchido", resumoEditorial: RESUMO_PADRAO,
    dias: DIAS_OUTUBRO_2026,
    diasOperacionais: contarOperacionais(DIAS_OUTUBRO_2026),
  },
  {
    ano: 2026, mes: 11, mesNome: "Novembro", mesSlug: "novembro",
    status: "preenchido", resumoEditorial: RESUMO_PADRAO,
    dias: DIAS_NOVEMBRO_2026,
    diasOperacionais: contarOperacionais(DIAS_NOVEMBRO_2026),
  },
  {
    ano: 2026, mes: 12, mesNome: "Dezembro", mesSlug: "dezembro",
    status: "preenchido", resumoEditorial: RESUMO_PADRAO,
    dias: DIAS_DEZEMBRO_2026,
    diasOperacionais: contarOperacionais(DIAS_DEZEMBRO_2026),
  },
];

// ---------------------------------------------------------------------------
// Consultas
// ---------------------------------------------------------------------------

export function getMes(mesSlug: string): MesMareManual | undefined {
  return TABUA_MARES_MANUAL_2026.find((m) => m.mesSlug === mesSlug);
}

/**
 * Retorna o mês corrente se estiver no catálogo; senão, o primeiro mês.
 * Útil para selecionar o painel ativo por padrão.
 */
export function getMesAtual(): MesMareManual {
  const hoje = new Date();
  const mesNum = hoje.getMonth() + 1;
  return (
    TABUA_MARES_MANUAL_2026.find((m) => m.mes === mesNum) ??
    TABUA_MARES_MANUAL_2026[0]
  );
}

export function getMesesDisponiveis(): MesMareManual[] {
  return TABUA_MARES_MANUAL_2026;
}

// ---------------------------------------------------------------------------
// Builder de mensagem WhatsApp (template fixo aprovado por Murillo)
// ---------------------------------------------------------------------------

export interface MensagemTabuaOpts {
  mesNome?: string;
  passeioInteresse?: string;
}

export function buildMensagemWhatsApp(opts: MensagemTabuaOpts = {}): string {
  const linhas = [
    "Oi, Murillo! Quero confirmar a tábua de maré em João Pessoa.",
    `Mês: ${opts.mesNome ?? ""}`,
    `Passeio de interesse: ${opts.passeioInteresse ?? ""}`,
    "Datas da minha viagem:",
  ];
  return linhas.join("\n");
}
