import type {
  SaidaDia,
  JanelaSaida,
  PasseioMareSlug,
  StatusOperacional,
  ProximaSaidaCard,
} from "@/types/tabua-mares";

// ---------------------------------------------------------------------------
// Cálculo de saída — grade operacional de 30 minutos
// Fórmula: max( floor30(baixaMar − 15min), 07:00 )
// ---------------------------------------------------------------------------

function floor30(totalMinutos: number): number {
  return Math.floor(totalMinutos / 30) * 30;
}

function minutosParaHorario(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function horarioParaMinutos(horario: string): number {
  const [h, m] = horario.split(":").map(Number);
  return h * 60 + m;
}

/**
 * Calcula o horário de saída sugerido para um barco dado o horário da baixa-mar.
 * Grade operacional de 30 minutos com mínimo de 07:00.
 *
 * Exemplos:
 *   "07:14" → "07:00"  (mínimo aplicado)
 *   "07:54" → "07:30"
 *   "08:30" → "08:00"
 *   "09:03" → "08:30"
 *   "09:35" → "09:00"
 */
export function calcularSaidaSugerida(horarioBaixaMare: string | null): string | null {
  if (!horarioBaixaMare) return null;
  const totalMin = horarioParaMinutos(horarioBaixaMare) - 15;
  const sugerido = floor30(totalMin);
  const efetivo = Math.max(sugerido, 7 * 60); // mínimo 07:00
  return minutosParaHorario(efetivo);
}

/**
 * Retorna o horário a exibir ao cliente.
 * Usa o confirmado (override manual) se existir; caso contrário usa o sugerido.
 */
export function resolverHorarioExibido(
  sugerido: string | null,
  confirmado: string | null
): string | null {
  return confirmado ?? sugerido;
}

// ---------------------------------------------------------------------------
// Classificação operacional por altura de maré
// ---------------------------------------------------------------------------

/**
 * Classifica a altura da maré em status operacional.
 */
export function getStatusMare(alturaMare: number): StatusOperacional {
  if (alturaMare <= 0.5) return "excelente";
  if (alturaMare <= 0.7) return "boa";
  if (alturaMare <= 0.8) return "consultar";
  return "sem-passeio";
}

// ---------------------------------------------------------------------------
// Formatação para exibição ao cliente
// ---------------------------------------------------------------------------

const STATUS_LABEL: Record<StatusOperacional, string> = {
  excelente: "Excelente",
  boa: "Boa",
  consultar: "Consultar disponibilidade",
  "sem-passeio": "Indisponível",
};

export function getStatusLabel(status: StatusOperacional): string {
  return STATUS_LABEL[status];
}

export function formatarDataCurta(dataISO: string): string {
  const [, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}`;
}

export function formatarHorario(horario: string): string {
  return horario.replace(":", "h");
}

// ---------------------------------------------------------------------------
// Funções de consulta — recebem o array de saídas como parâmetro
// (importar de data/tabua-mares.ts no componente e passar aqui)
// ---------------------------------------------------------------------------

/**
 * Retorna a próxima saída disponível (>= hoje) para o passeio informado.
 * Nunca retorna data passada. Retorna null se não houver saída cadastrada.
 */
export function getProximaSaida(
  passeioSlug: PasseioMareSlug,
  saidas: SaidaDia[]
): SaidaDia | null {
  const hoje = new Date().toISOString().slice(0, 10);
  return (
    saidas.find(
      (s) =>
        s.temPasseio &&
        s.data >= hoje &&
        s.passeiosAfetados.includes(passeioSlug) &&
        s.revisadoPorMurillo
    ) ?? null
  );
}

/**
 * Retorna todas as saídas de um mês/ano para o passeio informado.
 * Inclui dias inativos (temPasseio: false) para montar o calendário completo.
 */
export function getSaidasDoMes(
  passeioSlug: PasseioMareSlug,
  mes: number,
  ano: number,
  saidas: SaidaDia[]
): SaidaDia[] {
  const prefixo = `${ano}-${String(mes).padStart(2, "0")}`;
  return saidas.filter(
    (s) => s.data.startsWith(prefixo) && s.passeiosAfetados.includes(passeioSlug)
  );
}

/**
 * Agrupa um array de SaidaDia (ordenado por data) em janelas/ciclos.
 * Janela = sequência contínua de dias com temPasseio: true.
 */
export function agruparJanelasDeSaida(saidas: SaidaDia[]): JanelaSaida[] {
  const janelas: JanelaSaida[] = [];
  let cicloN = 0;
  let atual: SaidaDia[] = [];

  const fecharJanela = () => {
    if (atual.length === 0) return;
    cicloN++;
    const [ano, mesNum] = atual[0].data.split("-");
    const mesNome = new Date(`${ano}-${mesNum}-01`).toLocaleString("pt-BR", {
      month: "long",
      timeZone: "America/Recife",
    });
    const mesAbrev = mesNome.slice(0, 3).toLowerCase();
    janelas.push({
      cicloId: `${mesAbrev}-${ano}-ciclo-${cicloN}`,
      mesAno: `${mesNome.charAt(0).toUpperCase()}${mesNome.slice(1)} ${ano}`,
      dataInicio: atual[0].data,
      dataFim: atual[atual.length - 1].data,
      saidas: [...atual],
    });
    atual = [];
  };

  for (const saida of saidas) {
    if (saida.temPasseio) {
      atual.push(saida);
    } else {
      fecharJanela();
    }
  }
  fecharJanela();

  return janelas;
}

// ---------------------------------------------------------------------------
// Montar ProximaSaidaCard para uso direto em componente
// ---------------------------------------------------------------------------

/**
 * Monta o objeto ProximaSaidaCard pronto para renderização.
 * Retorna null se não houver próxima saída ou se horarioSaidaExibido for null.
 */
export function buildProximaSaidaCard(
  passeioSlug: PasseioMareSlug,
  saidas: SaidaDia[]
): ProximaSaidaCard | null {
  const proxima = getProximaSaida(passeioSlug, saidas);
  if (!proxima || !proxima.horarioSaidaExibido || proxima.alturaMare === null) {
    return null;
  }
  return {
    diaSemana: proxima.diaSemana,
    dataFormatada: formatarDataCurta(proxima.data),
    horarioSaida: formatarHorario(proxima.horarioSaidaExibido),
    alturaMare: proxima.alturaMare,
    statusOperacional: proxima.statusOperacional,
  };
}
