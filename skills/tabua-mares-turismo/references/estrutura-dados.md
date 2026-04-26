# Estrutura de Dados — Tábua de Marés

Spec TypeScript e arquitetura do data layer. Consultar ao executar Passo 5 da skill.

---

## 1. Interfaces TypeScript

### 1.1 `SaidaDia` — Registro de uma saída diária

```typescript
// _site/data/tabua-mares.ts

export type StatusMare =
  | "excelente"    // 0.0m–0.5m
  | "boa"          // 0.6m–0.7m
  | "consultar"    // 0.8m
  | "sem-passeio"; // 0.9m+

export interface SaidaDia {
  data: string;           // ISO date: "2026-05-03"
  diaSemana: string;      // "Sábado"
  horarioBaixaMar: string; // "09:40" — dado INTERNO, não exibir ao cliente
  alturaMar: number;      // 0.4 — em metros
  horarioSaida: string;   // "08:40" — horario público
  status: StatusMare;
  ativo: boolean;         // true = saída confirmada em princípio
}
```

### 1.2 `JanelaSaida` — Ciclo/janela de dias favoráveis

```typescript
export interface JanelaSaida {
  cicloId: string;       // "mai-2026-ciclo-1"
  mesAno: string;        // "Maio 2026"
  dataInicio: string;    // ISO date da primeira saída ativa
  dataFim: string;       // ISO date da última saída ativa
  saidas: SaidaDia[];    // Todos os dias (incluindo inativos) do período
}
```

### 1.3 `CalendarioMare` — Mês completo por passeio

```typescript
export interface CalendarioMare {
  passeioSlug: string;   // "seixas" | "picaozinho" | "areia-vermelha"
  mesAno: string;        // "mai-2026"
  janelas: JanelaSaida[];
  proximaSaida: SaidaDia | null; // Calculado: primeiro ativo >= hoje
  atualizadoEm: string;  // ISO date
}
```

### 1.4 `ProximaSaidaCard` — Dado simplificado para card/hero

```typescript
export interface ProximaSaidaCard {
  diaSemana: string;     // "Sábado"
  dataFormatada: string; // "3 de maio" ou "03/05"
  horario: string;       // "08:40"
  status: StatusMare;
  statusLabel: string;   // "Excelente" | "Boa" | "Consultar" | "Esgotado"
}
```

---

## 2. Data Layer — `data/tabua-mares.ts`

### 2.1 Estrutura do arquivo

```typescript
// _site/data/tabua-mares.ts
// FONTE: Tábua de marés — Marinha do Brasil / CHM — Porto de Cabedelo/PB
// GERADO POR: skill tabua-mares-turismo
// VALIDADO POR: Murillo (data da validação)

import type { CalendarioMare, SaidaDia, ProximaSaidaCard } from "@/types/tabua-mares";

// =============================================
// CALENDÁRIOS POR PASSEIO
// =============================================

export const calendarioSeixas: CalendarioMare = {
  passeioSlug: "seixas",
  mesAno: "mai-2026",
  janelas: [
    {
      cicloId: "mai-2026-ciclo-1",
      mesAno: "Maio 2026",
      dataInicio: "2026-05-01",
      dataFim: "2026-05-03",
      saidas: [
        {
          data: "2026-05-01",
          diaSemana: "Sexta-feira",
          horarioBaixaMar: "07:12",
          alturaMar: 0.4,
          horarioSaida: "06:12",
          status: "excelente",
          ativo: true,
        },
        // ... demais dias
      ],
    },
    // ... ciclo 2
  ],
  proximaSaida: null, // Calculado em runtime — ver getProximaSaida()
  atualizadoEm: "2026-04-26",
};

// Repetir para calendarioPicaozinho e calendarioAreiaVermelha
```

### 2.2 Funções utilitárias

```typescript
// Retorna próxima saída ativa >= hoje para um calendário
export function getProximaSaida(calendario: CalendarioMare): SaidaDia | null {
  const hoje = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"
  
  const todasAsSaidas = calendario.janelas
    .flatMap((j) => j.saidas)
    .filter((s) => s.ativo && s.data >= hoje)
    .sort((a, b) => a.data.localeCompare(b.data));

  return todasAsSaidas[0] ?? null;
}

// Retorna ProximaSaidaCard para uso em componentes
export function getProximaSaidaCard(
  calendario: CalendarioMare
): ProximaSaidaCard | null {
  const saida = getProximaSaida(calendario);
  if (!saida) return null;

  const statusLabels: Record<StatusMare, string> = {
    excelente: "Excelente",
    boa: "Boa",
    consultar: "Consultar",
    "sem-passeio": "Indisponível",
  };

  return {
    diaSemana: saida.diaSemana,
    dataFormatada: formatarData(saida.data), // "3 de maio de 2026"
    horario: saida.horarioSaida,
    status: saida.status,
    statusLabel: statusLabels[saida.status],
  };
}

function formatarData(isoDate: string): string {
  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ];
  const [, mes, dia] = isoDate.split("-").map(Number);
  return `${dia} de ${meses[mes - 1]}`;
}
```

---

## 3. Integração com `data/passeios.ts`

Adicionar campo `proximaSaida` na interface `Passeio` (opcional — calculado em runtime):

```typescript
// Em data/passeios.ts — adicionar à interface Passeio:

import type { ProximaSaidaCard } from "@/types/tabua-mares";

export interface Passeio {
  // ... campos existentes ...

  // Maré — apenas para passeios dependentes de maré
  dependeDeMare?: boolean;  // true para seixas, picaozinho, areia-vermelha
  // proximaSaida é calculada em runtime, não armazenada aqui
  // usar getProximaSaidaCard(calendario[passeio.slug]) nos componentes
}
```

### Padrão de uso em componente:

```typescript
// Em PasseioCard.tsx ou page.tsx
import { calendarioSeixas, getProximaSaidaCard } from "@/data/tabua-mares";

// No componente:
const proximaSaida = passeio.slug === "seixas"
  ? getProximaSaidaCard(calendarioSeixas)
  : null;

// Render:
{proximaSaida ? (
  <div>
    <span>{proximaSaida.diaSemana}, {proximaSaida.dataFormatada}</span>
    <span>{proximaSaida.horario}</span>
    <span>{proximaSaida.statusLabel}</span>
  </div>
) : (
  <span>Consulte próximas saídas</span>
)}
```

---

## 4. Novo Arquivo de Tipos

Criar `_site/types/tabua-mares.ts` (ou exportar de `types/index.ts`):

```typescript
// _site/types/tabua-mares.ts

export type StatusMare = "excelente" | "boa" | "consultar" | "sem-passeio";

export interface SaidaDia { ... }
export interface JanelaSaida { ... }
export interface CalendarioMare { ... }
export interface ProximaSaidaCard { ... }
```

---

## 5. Spec de Componentes (Handoff para `programador-de-site`)

### 5.1 `ProximaSaidaCard` (novo componente)

**Localização:** `_site/components/ProximaSaidaCard.tsx`

**Props:**
```typescript
interface ProximaSaidaCardProps {
  proximaSaida: ProximaSaidaCard | null;
  whatsappUrl: string;
}
```

**Comportamento:**
- Se `proximaSaida` preenchida: exibir dia/data/horário/status
- Se `null`: exibir "Consulte próximas saídas →" como link para WhatsApp
- Cores por status: excelente=verde, boa=amarelo, consultar=laranja
- Mobile-first, compacto para caber no InfoCard existente ou abaixo dele

### 5.2 `CalendarioMaresPage` (nova página/seção)

**Localização sugerida:** `_site/app/passeios/piscinas-naturais/calendario/page.tsx`

**Conteúdo:**
- Hero com H1 "Calendário de Marés — Piscinas Naturais de João Pessoa"
- Tabela ou cards por janela/ciclo, mês atual + próximo
- Legenda de status (✅ Excelente, 🟡 Boa, 🔴 Consultar, ❌ Sem passeio)
- FAQ de maré (schema FAQPage)
- CTA WhatsApp

**Dados de entrada:** `calendarioSeixas`, `calendarioPicaozinho`, `calendarioAreiaVermelha`

---

## 6. Checklist de Implementação (para `programador-de-site`)

- [ ] Criar `_site/types/tabua-mares.ts` com as 4 interfaces
- [ ] Criar `_site/data/tabua-mares.ts` com os calendários do mês
- [ ] Adicionar `dependeDeMare?: boolean` em `Passeio` interface
- [ ] Criar componente `ProximaSaidaCard.tsx`
- [ ] Integrar `ProximaSaidaCard` na `page.tsx` de passeio (abaixo do InfoCard)
- [ ] Integrar `ProximaSaidaCard` no `PasseioCard.tsx` (cards de listagem)
- [ ] Criar página `/passeios/piscinas-naturais/calendario/page.tsx`
- [ ] Registrar página no `generateStaticParams` e sitemap
- [ ] Testar cálculo de `proximaSaida` com data atual

---

*Estrutura v1.0 | 2026-04-26 | Aguarda implementação por programador-de-site*
