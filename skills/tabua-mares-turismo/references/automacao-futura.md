# Automação Futura — Tábua de Marés

Roadmap em 6 fases. **Não implementar agora** — referência para decisão e execução futura.

**Versão:** 1.2 | **Atualizada:** 2026-04-26

---

## Visão Geral

A solução final **não é manual**. A skill orienta a construção de um pipeline automatizado:
**CHM → Importador → `data/tabua-mares.ts` → Site**, com validação humana entre o importador e a publicação.

```
Fase 1  Importador automático da Marinha/CHM (Porto de Cabedelo/PB)
Fase 2  Geração automática de _site/data/tabua-mares.ts
Fase 3  Validação manual — revisadoPorMurillo
Fase 4  Integração com cards (próxima saída automática)
Fase 5  Integração com calendário mensal nas páginas internas
Fase 6  Geração de conteúdo SEO indexável
```

Cada fase agrega capacidade. **Fase 3 (validação) é inviolável** — nenhuma fase posterior publica direto sem aprovação de Murillo.

---

## Fase 1 — Importador Automático CHM (Porto de Cabedelo)

**Objetivo:** baixar e ler automaticamente a tábua oficial da Marinha/CHM para Porto de Cabedelo/PB.

### 1.1 Fonte de dados

| Canal | URL | Formato | Prioridade |
|-------|-----|---------|------------|
| SGBD-Hidro (HTML) | `marinha.mil.br/chm/dados-do-sgbd-hidro/tabuas-de-mare` | HTML interativo | Primária |
| Tabela mensal CHM | Download por estação | HTML tabular | Secundária |
| Tábua em PDF | Download mensal/anual | PDF tabulado | Fallback |

### 1.2 Spec do script

```typescript
// scripts/import-tabua-mares.ts
// Uso: npm run import-mares -- --ano=2026

import { importarTabuaMaresCabedelo, parseTabuaMaresOficial } from "./tabua-mares-core";

// Fluxo:
// 1. Fetch da fonte oficial (HTML primário, PDF fallback)
// 2. parseTabuaMaresOficial() → dados brutos
// 3. importarTabuaMaresCabedelo() → seleciona baixa-mar da manhã, calcula saída, classifica
// 4. agruparJanelasDeSaida() → CalendarioMare por passeio
// 5. Escreve _site/data/tabua-mares.ts
// 6. Imprime checklist de validação
// 7. (opcional) abre PR no GitHub
```

### 1.3 Dependências técnicas

```json
{
  "devDependencies": {
    "ts-node": "^10.x",
    "cheerio": "^1.x",
    "pdf-parse": "^1.x"
  },
  "scripts": {
    "import-mares": "ts-node scripts/import-tabua-mares.ts"
  }
}
```

### 1.4 Critério de saída

- Importador roda com sucesso para 1 ano completo
- Saída validada manualmente contra a tábua original (amostragem de 10 dias)
- Erros de parser tratados graciosamente (logs claros, não silenciosos)

---

## Fase 2 — Geração Automática de `_site/data/tabua-mares.ts`

**Objetivo:** o output do importador alimenta diretamente o site, sem digitação manual intermediária.

### 2.1 Implementação

- Importador escreve `_site/data/tabua-mares.ts` com calendários dos 3 passeios (Seixas, Picãozinho, Areia Vermelha)
- Cada `SaidaDia` carrega `fonte`, `urlFonte`, `dataImportacao`, `revisadoPorMurillo: false`
- Arquivo é **commitado em PR** — nunca em main direto

### 2.2 Gatilho de execução

| Opção | Prós | Contras |
|-------|------|---------|
| Manual (`npm run import-mares`) | Controle total | Ainda requer ação |
| **GitHub Action mensal (dia 25)** | Automático | Requer revisão do PR |
| GitHub Action anual (janeiro) | 1 vez/ano | Janela de divergência grande |

**Recomendação:** GitHub Action mensal abre PR no dia 25 → Murillo revisa → merge → deploy.

### 2.3 Critério de saída

- 2 ou 3 ciclos mensais consecutivos publicados via PR sem retrabalho manual
- Tempo de Murillo: ≤10 minutos por ciclo (apenas validação)

---

## Fase 3 — Validação Manual (`revisadoPorMurillo`)

**Objetivo:** garantir que nenhum dado vai ao site sem Murillo confirmar — em todas as fases. **Transversal e inviolável.**

### 3.1 Como funciona

1. PR aberto pelo importador contém:
   - Diff do `_site/data/tabua-mares.ts`
   - Checklist do §10 de `regras-operacionais.md`
   - Link para a fonte original (`urlFonte`)
2. Murillo abre o PR, verifica diferenças com a tábua original (amostragem)
3. Marca `revisadoPorMurillo: true` em commit de revisão
4. Aprova e faz merge

### 3.2 Detecção de divergências

O importador deve sinalizar automaticamente:

- Mudança brusca na altura de maré entre meses (>0.5m de diferença em janela equivalente)
- Dia sem baixa-mar (anomalia da fonte)
- Datas faltantes no mês
- Saída calculada fora da janela operacional (06:00–14:00)

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

*Automação v1.2 | 2026-04-26 | Fase 0 atual | Implementação inicia pela Fase 1 (importador)*
