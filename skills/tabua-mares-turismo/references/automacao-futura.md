# Automação Futura — Tábua de Marés

Roadmap em 6 fases. **Não implementar agora** — referência para decisão e execução futura.

**Versão:** 1.3 | **Atualizada:** 2026-04-27

---

## Visão Geral

A solução final **não é manual**. A skill orienta a construção de um pipeline automatizado:
**CHM → Importador → calcular saída sugerida → validação/override → `data/tabua-mares.ts` → Site**, com validação humana entre o importador e a publicação.

```
Fase 1  Importar eventos de maré (todos os eventos do dia — preamar e baixa-mar)
Fase 2  Identificar baixa-mar operacional e calcular saída sugerida (grade 30min)
Fase 3  Validação manual por Murillo — revisadoPorMurillo + override se necessário
Fase 4  Integração com cards (próxima saída automática via horarioSaidaExibido)
Fase 5  Integração com calendário mensal nas páginas internas
Fase 6  Geração de conteúdo SEO indexável
```

Cada fase agrega capacidade. **Fase 3 (validação) é inviolável** — nenhuma fase posterior publica direto sem aprovação de Murillo.

---

## Fase 1 — Importar Eventos de Maré

**Objetivo:** baixar e parsear todos os eventos de maré do dia (preamar e baixa-mar) para Porto de Cabedelo/PB. O parser retorna dados brutos — seleção de qual usar e cálculo de saída acontecem na Fase 2.

### 1.1 Fonte de dados

| Canal | URL | Formato | Prioridade | `fonteTipo` |
|-------|-----|---------|------------|-------------|
| CHM (PDF manual) | `marinha.mil.br/cppb/tabuas_de_mare` — baixar no browser | PDF tabulado | **Primária** | `"oficial-marinha"` |
| tabuademares.com | `tabuademares.com/br/paraiba/joao-pessoa` | HTML | Referência operacional | `"operacional-referencia"` |
| SGBD-Hidro (HTML) | `marinha.mil.br/chm/dados-do-sgbd-hidro/tabuas-de-mare` | HTML interativo | Secundária (se acessível) | `"oficial-marinha"` |

**Atenção:** o site da Marinha usa Cloudflare. Download manual no browser é o método garantido. Não tentar burlar por script.

### 1.2 Spec do script

```typescript
// scripts/import-tabua-mares.ts
// Uso: npm run import-mares -- --ano=2026

import { parseTabuaMaresOficial } from "./tabua-mares-core";

// Fluxo:
// 1. Recebe PDF (buffer) ou HTML da fonte
// 2. parseTabuaMaresOficial() → array de DiaRaw com TODOS os eventos do dia
//    (preamar e baixa-mar separados — não filtrar aqui)
// 3. Exporta DiaRaw[] para Fase 2 processar
// 4. Marca fonte, urlFonte, fonteTipo, confiancaFonte, dataImportacao
```

### 1.3 Saída da Fase 1

```typescript
interface EventoMare {
  tipo: "baixa" | "preamar";
  hora: string;   // "HH:MM"
  altura: number; // metros
}

interface DiaRaw {
  data: string;           // "2026-05-01"
  eventos: EventoMare[];  // todos os eventos do dia (tipicamente 4)
}
```

### 1.4 Critério de saída

- Parser retorna 365 dias (ou 366) com 4 eventos cada
- Nenhum evento inventado ou interpolado
- Erros tratados graciosamente com log claro

---

## Fase 2 — Identificar Baixa-Mar Operacional e Calcular Saída Sugerida

**Objetivo:** processar o `DiaRaw[]` da Fase 1, selecionar a baixa-mar operacional de cada dia, calcular `horarioSaidaSugerido` pela grade de 30 minutos e gerar `SaidaDia[]` pronto para validação.

### 2.1 Algoritmo

```
Para cada DiaRaw:
  1. Filtrar eventos de tipo "baixa" na janela 05:00–14:59
  2. Se múltiplas baixas na janela: selecionar a de menor altura
     (provavelmente a baixa-mar mais favorável da manhã)
  3. Se nenhuma baixa na janela: statusOperacional = "sem-passeio", horarioSaidaSugerido = null
  4. Aplicar calcularSaidaSugerida(hora): max(floor30(hora − 15min), 07:00)
  5. Aplicar getStatusMare(altura)
  6. Preencher SaidaDia com horarioSaidaConfirmado = null, overrideManual = false
  7. horarioSaidaExibido = horarioSaidaConfirmado ?? horarioSaidaSugerido
```

### 2.2 Gatilho de execução

| Opção | Prós | Contras |
|-------|------|---------|
| Manual (`npm run import-mares`) | Controle total | Requer ação manual |
| **GitHub Action mensal (dia 25)** | Automático | Requer revisão do PR |
| GitHub Action anual (janeiro) | 1 vez/ano | Janela de divergência grande |

**Recomendação:** GitHub Action mensal abre PR no dia 25 → Murillo revisa → merge → deploy.

### 2.3 Critério de saída

- `SaidaDia[]` com 365 registros, `horarioSaidaSugerido` preenchido ou `null` com motivo em `observacao`
- Todos os `revisadoPorMurillo: false` — validação é Fase 3
- Arquivo nunca vai direto para main — sempre via PR

---

## Fase 3 — Validação Manual e Override por Murillo

**Objetivo:** garantir que nenhum dado vai ao site sem Murillo confirmar. Se `horarioSaidaSugerido` estiver errado para algum dia, Murillo define `horarioSaidaConfirmado`. **Transversal e inviolável.**

### 3.1 Como funciona

1. PR aberto pelo importador contém:
   - Diff do `_site/data/tabua-mares.ts`
   - Tabela comparativa: data | baixa-mar | saída sugerida | status
   - Checklist do §10 de `regras-operacionais.md`
   - Link para a fonte original (`urlFonte`)
2. Murillo abre o PR, compara saídas sugeridas com o que os barcos vão fazer de fato
3. Para dias onde a saída sugerida diverge da operação real:
   - Define `horarioSaidaConfirmado` no registro específico
   - Marca `overrideManual: true`
   - Anota motivo em `observacao`
4. Marca `revisadoPorMurillo: true` em cada registro validado
5. Aprova e faz merge

### 3.2 Detecção de anomalias automáticas

O importador deve sinalizar automaticamente:

- `horarioSaidaSugerido` antes de 07:00 (mínimo não aplicado — bug de cálculo)
- Dia sem baixa-mar na janela operacional (pode ser correto — sempre comentar no PR)
- Datas faltantes no mês
- Mudança brusca de altura (>0.5m vs semana anterior equivalente do ciclo)

**Cada anomalia vira comentário no PR** para Murillo decidir caso a caso.

### 3.3 Lint customizado (regra inviolável)

- Build do site **falha** se algum dado em `data/tabua-mares.ts` estiver com `revisadoPorMurillo: false` E `data >= hoje`
- Garantia técnica: dado não revisado nunca chega ao público

---

## Fase 4 — Integração com Cards (Próxima Saída Automática)

**Objetivo:** todos os cards de passeios dependentes de maré mostram próxima saída calculada dinamicamente.

### 4.1 Pontos de integração

| Local | Componente | Comportamento |
|-------|-----------|---------------|
| Card no grid da home | `PasseioCard` | "Próxima saída: Terça, 28/04 — 07h30" |
| Card no cluster `/piscinas-naturais/` | `PasseioCard` | Idem |
| Hero da página de passeio | `ProximaSaidaCard` | Dado destacado abaixo do InfoCard |

### 4.2 Função consumida

```typescript
import { getProximaSaida } from "@/lib/tabua-mares";

const proximaSaida = passeio.dependeDeMare
  ? getProximaSaida(passeio.slug)
  : null;

// Exibir: proximaSaida.horarioSaidaExibido (nunca .horarioSaidaSugerido diretamente)
```

### 4.3 Fallback obrigatório

- Sem `proximaSaida` → "Consulte próximas saídas" com link WhatsApp
- Sem `data/tabua-mares.ts` carregado → mesmo fallback (não quebra build)

### 4.4 Critério de saída

- 0 hardcodes de data em cards
- Murillo não atualiza cards entre publicações de tábua

---

## Fase 5 — Calendário Mensal nas Páginas Internas

**Objetivo:** página `/passeios/piscinas-naturais/calendario` exibe grade completa do mês com janelas/ciclos.

### 5.1 Estrutura

- H1: "Tábua de Marés em João Pessoa — Próximas Saídas"
- Grade mensal por passeio (ou consolidada com filtro)
- Legenda visual (✅ Excelente, 🟡 Boa, 🔴 Consultar, ❌ Sem passeio)
- Janelas/ciclos visualmente agrupadas (cor de fundo ou borda)
- FAQ schema embutido (ver `seo-tabua-mares.md`)
- CTA WhatsApp

### 5.2 Função consumida

```typescript
import { getSaidasDoMes, agruparJanelasDeSaida } from "@/lib/tabua-mares";

const saidas = getSaidasDoMes("seixas", 5, 2026);
const janelas = agruparJanelasDeSaida(saidas);
```

### 5.3 URLs adicionais (opcional Fase 3+)

- `/calendario/maio-2026`, `/calendario/junho-2026` — páginas mensais para SEO específico
- Sitemap inclui URLs mensais
- `noindex` automático em meses passados

---

## Fase 6 — Conteúdo SEO Indexável

**Objetivo:** páginas de calendário e blocos de maré ranqueiam para keywords primárias.

### 6.1 Geração automática

O importador também gera (ou alimenta):

- **FAQ schema** dinâmico com dados do mês corrente (ex: "Quantas saídas temos em maio de 2026?")
- **Texto indexável** com janelas do mês (gerado a partir das janelas calculadas)
- **Schema `Event`** para cada saída confirmada (com `eventStatus` apropriado)
- **Meta tags dinâmicas** por mês

### 6.2 Keywords-alvo

- "tábua de marés João Pessoa"
- "tábua de maré Porto de Cabedelo"
- "maré baixa Seixas"
- "próxima saída Picãozinho"
- "calendário piscinas naturais João Pessoa"
- "melhores dias para Areia Vermelha"

(detalhes em `seo-tabua-mares.md`)

### 6.3 Critério de saída

- Ranqueia em até 60 dias para "tábua de marés João Pessoa"
- Página `/calendario` recebe tráfego orgânico mensurável
- FAQ schema aparece em rich results para 2+ perguntas

---

## Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| **PDF/HTML da CHM difícil de parsear** | Média | Médio | Parser primário em HTML; fallback em PDF; último fallback manual |
| **CHM muda layout da fonte oficial** | Média-Alta | Alto | Testes de integridade; alerta automático para Murillo se parser falhar; fallback manual sempre disponível |
| **Divergência entre tábua oficial e operação real** | Baixa-Média | Alto | Validação obrigatória por Murillo; campo `observacao` permite override pontual |
| **Fonte oficial fora do ar** | Baixa | Médio | Cache local da última versão importada; alerta se importador falhar 2x consecutivos |
| **Promessa de saída sem confirmação** | Alta se automatizado mal | Crítico | `temPasseio: true` é orientativo; Murillo confirma cada saída no WhatsApp |
| **Fuso horário errado** | Média | Médio | Trabalhar sempre em UTC−3; validar no output |
| **Dados expirados no site** | Média | Médio | Fallback "Consulte próximas saídas"; lint bloqueia build com dado >30 dias futuro vazio |
| **Importador publica direto sem revisão** | Crítico se permitido | Crítico | PR sempre obrigatório; lint bloqueia `revisadoPorMurillo: false` em produção |

---

## Critérios para Avançar de Fase

| Critério | F1 → F2 | F2 → F3 | F3 → F4 | F4 → F5 | F5 → F6 |
|----------|---------|---------|---------|---------|---------|
| Importador roda sem erro | ✅ | — | — | — | — |
| 2+ ciclos publicados via PR | — | ✅ | — | — | — |
| Cards consomem getProximaSaida | — | — | — | ✅ | — |
| Página /calendario publicada | — | — | — | — | ✅ |

> **Fase 3 (validação) não é etapa sequencial** — é trilho lateral que acompanha todas as outras desde a Fase 2.

---

## Regra Final

> **Coleta automática é o objetivo.** Validação manual é a segurança. **Não prometer saída sem confirmação operacional** em nenhuma das fases.

---

*Automação v1.3 | 2026-04-27 | Fase 0 atual | Pipeline redesenhado: importar eventos → identificar baixa operacional → calcular saída sugerida → validação/override → cards → calendário → SEO*
