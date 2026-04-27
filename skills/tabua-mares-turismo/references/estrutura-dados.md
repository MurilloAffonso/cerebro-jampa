# Estrutura de Dados — Tábua de Marés

Schema definitivo, funções utilitárias e funções de importação automática. Consultar no Passo 5 da skill.

**Versão:** 1.3 | **Atualizada:** 2026-04-27

---

## 1. Schema do Registro de Saída (definitivo)

Cada dia processado pela skill (manual ou via importador) gera um registro com os seguintes campos:

| Campo | Tipo | Visibilidade | Descrição |
|-------|------|--------------|-----------|
| `data` | `string` (ISO `YYYY-MM-DD`) | pública | Data da saída |
| `diaSemana` | `string` | pública | Nome completo do dia (ex: "Segunda-feira") |
| `horarioBaixaMareInterno` | `string \| null` (`HH:MM`) | **INTERNA — nunca exibir** | Horário da baixa-mar operacional (manhã) — base para cálculo |
| `horarioSaidaSugerido` | `string \| null` (`HH:MM`) | **INTERNA — nunca exibir direto** | Calculado: `max(floor30(baixaMar − 15min), 07:00)` |
| `horarioSaidaConfirmado` | `string \| null` (`HH:MM`) | **INTERNA — nunca exibir direto** | Override manual por Murillo/operador; `null` se não houve override |
| `horarioSaidaExibido` | `string \| null` (`HH:MM`) | **pública** | `horarioSaidaConfirmado ?? horarioSaidaSugerido` — único campo de horário público |
| `alturaMare` | `number \| null` (metros, 1 decimal) | pública | Altura da baixa-mar operacional (ex: 0.6) |
| `statusOperacional` | enum | pública | `"excelente"` \| `"boa"` \| `"consultar"` \| `"sem-passeio"` |
| `temPasseio` | `boolean` | pública | `true` se status é `"excelente"` ou `"boa"` |
| `passeiosAfetados` | `string[]` | interna | Slugs: `["seixas", "picaozinho", "areia-vermelha"]` |
| `fonte` | `string` | interna | Ex: `"CHM — Porto de Cabedelo/PB — 2026"` |
| `fonteTipo` | enum | interna | `"oficial-marinha"` \| `"operacional-referencia"` \| `"manual"` |
| `confiancaFonte` | enum | interna | `"alta"` (CHM) \| `"media"` (tabuademares.com) \| `"baixa"` (surfguru/terceiros) |
| `urlFonte` | `string` | interna | URL exata de onde os dados foram importados |
| `dataImportacao` | `string` (ISO datetime) | interna | Quando o importador rodou (ex: `"2026-04-27T14:23:00-03:00"`) |
| `revisadoPorMurillo` | `boolean` | interna | `false` por padrão; `true` após checklist humano |
| `overrideManual` | `boolean` | interna | `true` se `horarioSaidaConfirmado` foi definido manualmente |
| `observacao` | `string \| null` | interna | Comentário operacional opcional |

### Regras absolutas de visibilidade

> `horarioBaixaMareInterno`, `horarioSaidaSugerido` e `horarioSaidaConfirmado` são **dados internos**. **NÃO renderizar em nenhum componente exibido ao cliente.**
>
> O cliente vê **apenas** `horarioSaidaExibido` — que já aplica o override se existir.
>
> `fonteTipo`, `confiancaFonte`, `urlFonte`, `dataImportacao`, `revisadoPorMurillo`, `overrideManual` são **metadados de rastreabilidade** — nunca exibir ao público.

---

## 2. Interfaces TypeScript (proposta)

```typescript
// _site/types/tabua-mares.ts

export type StatusOperacional =
  | "excelente"     // 0.0m – 0.5m
  | "boa"           // 0.6m – 0.7m
  | "consultar"     // 0.8m
  | "sem-passeio";  // 0.9m+

export type PasseioMareSlug = "seixas" | "picaozinho" | "areia-vermelha";

export type FonteTipo =
  | "oficial-marinha"        // CHM — Porto de Cabedelo (alta confiança)
  | "operacional-referencia" // tabuademares.com — referência prática (confiança média)
  | "manual";                // Murillo digitou manualmente (confiança alta, mas não automática)

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
  data: string;                        // "2026-05-27"
  diaSemana: string;                   // "Segunda-feira"
  horarioSaidaExibido: string | null;  // PÚBLICO: confirmado ?? sugerido
  alturaMare: number | null;           // 0.6
  statusOperacional: StatusOperacional;
  temPasseio: boolean;

  // --- campos internos de cálculo ---
  horarioBaixaMareInterno: string | null; // "09:03" — INTERNO
  horarioSaidaSugerido: string | null;    // "08:30" — calculado, INTERNO
  horarioSaidaConfirmado: string | null;  // "08:00" — override manual, INTERNO; null se sem override

  // --- metadados ---
  passeiosAfetados: PasseioMareSlug[];
  fonte: string;                       // "CHM — Porto de Cabedelo/PB — 2026"
  fonteTipo: FonteTipo;
  confiancaFonte: ConfiancaFonte;
  urlFonte: string;
  dataImportacao: string;              // ISO datetime
  revisadoPorMurillo: boolean;
  overrideManual: boolean;             // true se horarioSaidaConfirmado foi definido
  observacao: string | null;
}

export interface JanelaSaida {
  cicloId: string;       // "mai-2026-ciclo-1"
  mesAno: string;        // "Maio 2026"
  dataInicio: string;
  dataFim: string;
  saidas: SaidaDia[];
}

export interface CalendarioMare {
  passeioSlug: PasseioMareSlug;
  mesAno: string;             // "mai-2026"
  janelas: JanelaSaida[];
  proximaSaida: SaidaDia | null;
  atualizadoEm: string;
}

export interface ProximaSaidaCard {
  diaSemana: string;
  dataFormatada: string;
  horarioSaida: string;
  alturaMare: number;
  statusOperacional: StatusOperacional;
  statusLabel: string;
}
```

---

## 3. Funções Utilitárias (runtime — consumidas pelo site)

Localização sugerida: `_site/lib/tabua-mares.ts`.

### 3.1 `calcularSaidaSugerida(horarioBaixaMare)`

```typescript
/**
 * Aplica a grade operacional de 30 minutos:
 *   saídaSugerida = max(floor30(baixaMar − 15min), 07:00)
 * Pure function. Input e output em formato "HH:MM". Retorna null se input for null.
 */
function calcularSaidaSugerida(horarioBaixaMare: string | null): string | null;
```

**Exemplos:**
- `"07:14"` → `"07:00"` (mínimo aplicado)
- `"07:54"` → `"07:30"`
- `"08:30"` → `"08:00"`
- `"09:03"` → `"08:30"`
- `"09:35"` → `"09:00"`
- `"11:30"` → `"11:00"`

### 3.1b `resolverHorarioExibido(sugerido, confirmado)`

```typescript
/**
 * Retorna o horário a exibir ao cliente.
 * Pure function: confirmado ?? sugerido.
 */
function resolverHorarioExibido(
  sugerido: string | null,
  confirmado: string | null
): string | null;
```

### 3.2 `getStatusMare(alturaMare)`

```typescript
/**
 * Classifica altura da maré em status operacional. Pure function.
 */
function getStatusMare(alturaMare: number): StatusOperacional;
```

**Tabela:**
- `0.0 – 0.5` → `"excelente"`
- `0.6 – 0.7` → `"boa"`
- `0.8` → `"consultar"`
- `>= 0.9` → `"sem-passeio"`

### 3.3 `getProximaSaida(passeioSlug)`

```typescript
/**
 * Retorna a próxima saída ativa (>= hoje) para o passeio informado.
 * Nunca retorna data passada. Retorna null se não houver saída cadastrada.
 */
function getProximaSaida(passeioSlug: PasseioMareSlug): SaidaDia | null;
```

**Uso:** card do passeio chama esta função. Se `null`, exibe "Consulte próximas saídas".

### 3.4 `getSaidasDoMes(passeioSlug, mes, ano)`

```typescript
/**
 * Retorna todas as saídas de um mês específico para o passeio.
 * Inclui dias inativos para calendário completo.
 */
function getSaidasDoMes(
  passeioSlug: PasseioMareSlug,
  mes: number,
  ano: number
): SaidaDia[];
```

**Uso:** página `/passeios/piscinas-naturais/calendario` consome esta função.

### 3.5 `agruparJanelasDeSaida(saidas)`

```typescript
/**
 * Agrupa array de saídas (ordenado por data) em janelas/ciclos.
 * Janela = sequência contínua de dias com temPasseio: true.
 */
function agruparJanelasDeSaida(saidas: SaidaDia[]): JanelaSaida[];
```

---

## 4. Funções de Importação Automática (build-time / script)

Localização sugerida: `scripts/import-tabua-mares.ts`. Executadas **fora do runtime do site** (build, GitHub Action ou comando manual).

### 4.1 `importarTabuaMaresCabedelo(ano)`

```typescript
/**
 * Função principal do importador.
 * Baixa a tábua oficial da Marinha/CHM para Porto de Cabedelo no ano informado,
 * faz parse, aplica regras operacionais e retorna SaidaDia[] com 365 (ou 366) registros.
 *
 * - Faz fetch da fonte oficial (HTML/PDF)
 * - Chama parseTabuaMaresOficial() internamente
 * - Aplica calcularHorarioSaida() + getStatusMare()
 * - Marca passeiosAfetados, fonte, urlFonte, dataImportacao
 * - revisadoPorMurillo sempre começa false
 *
 * Lança erro se CHM mudou layout, está fora do ar ou retornou dados incompletos.
 */
async function importarTabuaMaresCabedelo(ano: number): Promise<SaidaDia[]>;
```

### 4.2 `parseTabuaMaresOficial(arquivo)`

```typescript
/**
 * Recebe o conteúdo bruto da CHM (HTML, PDF buffer ou texto) e devolve
 * dados estruturados antes da aplicação das regras operacionais.
 *
 * Suporta:
 * - HTML do SGBD-Hidro (parser primário)
 * - PDF mensal/anual da CHM (fallback)
 * - Conteúdo manual colado (último fallback)
 */
function parseTabuaMaresOficial(
  arquivo: string | Buffer
): Array<{
  data: string;
  horarios: Array<{ tipo: "baixa" | "preamar"; hora: string; altura: number }>;
}>;
```

**Saída:** lista de dias com TODOS os horários de baixa-mar e preamar do dia. A seleção de "qual usar" (baixa-mar da manhã) é feita por `importarTabuaMaresCabedelo()`, não pelo parser.

---

## 5. Integração com `data/passeios.ts`

```typescript
import type { PasseioMareSlug } from "@/types/tabua-mares";

export interface Passeio {
  // ... campos existentes ...
  dependeDeMare?: boolean;
}
```

Marcar como `true` apenas em: `seixas`, `picaozinho`, `areia-vermelha`.

---

## 6. Padrão de Uso em Componente

```typescript
// Em PasseioCard.tsx
import { getProximaSaida } from "@/lib/tabua-mares";

const proximaSaida = passeio.dependeDeMare
  ? getProximaSaida(passeio.slug as PasseioMareSlug)
  : null;

{passeio.dependeDeMare && (
  proximaSaida ? (
    <div>
      Próxima saída: {proximaSaida.diaSemana}, {formatarData(proximaSaida.data)}
      — {proximaSaida.horarioSaidaExibido}
    </div>
  ) : (
    <a href={whatsappUrl}>Consulte próximas saídas</a>
  )
)}
```

> **Lembrete:** componente **NUNCA** acessa `horarioBaixaMareInterno`, `horarioSaidaSugerido`, `horarioSaidaConfirmado`, `fonteTipo`, `confiancaFonte`, `urlFonte`, `dataImportacao`, `revisadoPorMurillo` ou `overrideManual`. O único campo de horário público é `horarioSaidaExibido`.

---

## 7. Estrutura do Arquivo de Dados

```typescript
// _site/data/tabua-mares.ts
// FONTE: Marinha do Brasil / CHM — Porto de Cabedelo/PB
// GERADO POR: importador automático (skill tabua-mares-turismo)
// VALIDADO POR: Murillo em [data]

import type { CalendarioMare } from "@/types/tabua-mares";

export const calendarioSeixas: CalendarioMare = { /* ... */ };
export const calendarioPicaozinho: CalendarioMare = { /* ... */ };
export const calendarioAreiaVermelha: CalendarioMare = { /* ... */ };

export const calendariosPorPasseio = {
  seixas: calendarioSeixas,
  picaozinho: calendarioPicaozinho,
  "areia-vermelha": calendarioAreiaVermelha,
} as const;
```

---

## 8. Fluxo Completo (importador → site)

```
┌─────────────────────────────────────────┐
│  CHM — Porto de Cabedelo (HTML/PDF)     │
└────────────────┬────────────────────────┘
                 │ fetch
                 ▼
┌─────────────────────────────────────────┐
│  parseTabuaMaresOficial(arquivo)        │
│  → dados brutos por dia                 │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│  importarTabuaMaresCabedelo(ano)        │
│  - seleciona baixa-mar da manhã         │
│  - calcularHorarioSaida()               │
│  - getStatusMare()                      │
│  - marca metadados (fonte, url, data)   │
│  → SaidaDia[]                           │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│  agruparJanelasDeSaida(saidas)          │
│  → CalendarioMare por passeio           │
└────────────────┬────────────────────────┘
                 │ escreve
                 ▼
┌─────────────────────────────────────────┐
│  _site/data/tabua-mares.ts              │
│  (PR aberto — Murillo revisa)           │
└────────────────┬────────────────────────┘
                 │ revisado e aprovado
                 ▼
┌─────────────────────────────────────────┐
│  Site (runtime)                         │
│  getProximaSaida(slug) → cards          │
│  getSaidasDoMes(slug, m, a) → /calendario│
└─────────────────────────────────────────┘
```

---

## 9. Spec de Componentes (Handoff para `programador-de-site`)

### 9.1 `ProximaSaidaCard`
- **Localização:** `_site/components/ProximaSaidaCard.tsx`
- **Props:** `{ passeioSlug: PasseioMareSlug; whatsappUrl: string; }`
- **Comportamento:** chama `getProximaSaida()`; fallback se `null`.
- **Cores por status:** excelente=verde, boa=âmbar, consultar=laranja.

### 9.2 `CalendarioMaresPage`
- **Localização sugerida:** `_site/app/passeios/piscinas-naturais/calendario/page.tsx`
- **Conteúdo:** H1, grade mensal, legenda, FAQ schema, CTA WhatsApp.
- **Dados:** `calendariosPorPasseio` consumido via `getSaidasDoMes()`.

---

## 10. Checklist de Implementação

### Importador (Fase 1–2)
- [ ] Criar `scripts/import-tabua-mares.ts` com `importarTabuaMaresCabedelo` e `parseTabuaMaresOficial`
- [ ] Adicionar `cheerio` e (se necessário) `pdf-parse` em devDependencies
- [ ] Criar comando `npm run import-mares -- --ano=2026`
- [ ] Testar com tábua atual e validar saída contra dados conhecidos

### Site (Fase 4–5)
- [ ] Criar `_site/types/tabua-mares.ts`
- [ ] Criar `_site/lib/tabua-mares.ts` com 5 funções runtime
- [ ] Criar `_site/data/tabua-mares.ts` (gerado pelo importador)
- [ ] Adicionar `dependeDeMare?: boolean` em `Passeio`
- [ ] Marcar Seixas, Picãozinho, Areia Vermelha
- [ ] Criar `ProximaSaidaCard.tsx`
- [ ] Integrar em `page.tsx` de passeio e em listagens
- [ ] Criar `/passeios/piscinas-naturais/calendario`
- [ ] Adicionar ao sitemap
- [ ] Testar fallback "Consulte próximas saídas"

---

*Estrutura v1.3 | 2026-04-27 | Grade operacional de 30min; override manual formalizado; horarioSaidaExibido é o único campo público de horário*
