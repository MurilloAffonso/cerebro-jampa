# Estrutura de Dados — Tábua de Marés

Schema definitivo, funções utilitárias e funções de importação automática. Consultar no Passo 5 da skill.

**Versão:** 1.2 | **Atualizada:** 2026-04-26

---

## 1. Schema do Registro de Saída (definitivo)

Cada dia processado pela skill (manual ou via importador) gera um registro com os seguintes campos:

| Campo | Tipo | Visibilidade | Descrição |
|-------|------|--------------|-----------|
| `data` | string (ISO `YYYY-MM-DD`) | pública | Data da saída |
| `diaSemana` | string | pública | Nome completo do dia (ex: "Segunda-feira") |
| `horarioBaixaMareInterno` | string (`HH:MM`) | **INTERNA — nunca exibir** | Horário da baixa-mar da manhã — base para cálculo |
| `horarioSaidaBarco` | string (`HH:MM`) | pública | Calculado: `horarioBaixaMareInterno − 60min` |
| `alturaMare` | number (metros, 1 casa decimal) | pública | Altura da baixa-mar (ex: 0.6) |
| `statusOperacional` | enum | pública | `"excelente"` \| `"boa"` \| `"consultar"` \| `"sem-passeio"` |
| `temPasseio` | boolean | pública | `true` se status é `"excelente"` ou `"boa"` |
| `passeiosAfetados` | string[] | interna | Slugs: `["seixas", "picaozinho", "areia-vermelha"]` |
| `fonte` | string | interna | Ex: `"CHM — Porto de Cabedelo/PB — 2026"` |
| `urlFonte` | string | interna | URL exata de onde os dados foram importados |
| `dataImportacao` | string (ISO datetime) | interna | Quando o importador rodou (ex: `"2026-04-26T14:23:00-03:00"`) |
| `revisadoPorMurillo` | boolean | interna | `false` por padrão; `true` após checklist humano |
| `observacao` | string \| null | interna | Comentário operacional opcional |

> **Regra absoluta:** `horarioBaixaMareInterno` é dado interno. **NÃO renderizar em nenhum componente exibido ao cliente.** Existe apenas para cálculo, auditoria e validação manual.

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

/**
 * Registro de uma saída diária.
 * `horarioBaixaMareInterno` é INTERNO — nunca renderizar ao cliente.
 */
export interface SaidaDia {
  data: string;                    // "2026-05-27"
  diaSemana: string;               // "Segunda-feira"
  horarioBaixaMareInterno: string; // "08:30" — INTERNO
  horarioSaidaBarco: string;       // "07:30" — público
  alturaMare: number;              // 0.6
  statusOperacional: StatusOperacional;
  temPasseio: boolean;
  passeiosAfetados: PasseioMareSlug[];
  fonte: string;                   // "CHM — Porto de Cabedelo/PB — 2026"
  urlFonte: string;                // URL exata da CHM
  dataImportacao: string;          // ISO datetime
  revisadoPorMurillo: boolean;
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

### 3.1 `calcularHorarioSaida(horarioBaixaMareInterno)`

```typescript
/**
 * Aplica a regra: saída = baixa-mar - 60 minutos.
 * Pure function. Input e output em formato "HH:MM".
 */
function calcularHorarioSaida(horarioBaixaMareInterno: string): string;
```

**Exemplos:** `"08:30"` → `"07:30"`, `"07:12"` → `"06:12"`, `"11:30"` → `"10:30"`

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
      — {proximaSaida.horarioSaidaBarco}
    </div>
  ) : (
    <a href={whatsappUrl}>Consulte próximas saídas</a>
  )
)}
```

> **Lembrete:** componente **NUNCA** acessa `proximaSaida.horarioBaixaMareInterno`, `urlFonte`, `dataImportacao` ou `revisadoPorMurillo`. Esses campos existem no objeto, mas é proibido renderizar.

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

*Estrutura v1.2 | 2026-04-26 | Importador é o caminho principal; manual é fallback*
