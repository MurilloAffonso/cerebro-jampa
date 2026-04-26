# Pipelines Canônicos

Referência operacional dos 7 pipelines canônicos do orquestrador. Consultar ao classificar objetivo (Passo 2) e selecionar pipeline (Passo 4) do `SKILL.md`.

---

## Inventário das 11 Skills Disponíveis

**Skills de Site (7):**
1. `estrategista-de-site` — URLs, jornada, CRO, navegação
2. `ux-ui-mobile-first` — Wireframe textual, responsividade
3. `copywriter-vendas` — Copy AIDA, headline, FAQ, CTA
4. `seo-local-turismo` — Keywords, meta tags, schema, links internos
5. `briefing-designer` — Briefing executável para designer
6. `programador-de-site` — Implementação Next.js
7. `diretor-visual-turismo` — Padrões visuais, crítica, checklist

**Skills de Social (3):**
8. `radar-concorrentes-social` — Pesquisa concorrentes, gaps, trends
9. `captura-referencias-visuais` — Captura e organiza assets
10. `social-media-editorial-turismo` — Calendário e pautas

**Skills Operacionais (1):**
11. `tabua-mares-turismo` — Tábua de marés CHM → saídas calculadas + status + janelas + TypeScript

**Gatilhos de acionamento da skill #11:**
- Objetivo menciona: tábua de marés, próxima saída, calendário de piscinas
- Passeios: Seixas, Picãozinho, Areia Vermelha
- Keywords SEO: maré baixa, disponibilidade, datas disponíveis
- Murillo fornece dados brutos da CHM e pede para processar

---

## Pipeline A — Página de Passeio (NOVA)

**Quando usar:** "criar página do passeio X"

```
Etapa 1 → estrategista-de-site
  Saída: URL, posição na arquitetura, jornada, CRO
  Depende de: _conhecimento/estrutura-site-recomendada.md, clusters-seo.md

Etapa 2a → copywriter-vendas        ┐
  Saída: H1, lead, roteiro, FAQ, CTA │ PARALELO
                                      │ após Etapa 1
Etapa 2b → ux-ui-mobile-first       ┘
  Saída: Wireframe textual mobile/tablet/desktop

Etapa 3 → diretor-visual-turismo
  Saída: Validação de padrão visual + ajustes
  Depende de: Etapa 2b

Etapa 4 → seo-local-turismo
  Saída: Meta tags, schema TouristAttraction, links internos
  Depende de: Etapa 2a (copy)

Etapa 5 → briefing-designer
  Saída: Briefing completo + componentes + restrições
  Depende de: Etapas 2b + 3
  PAUSA: aguardar designer executar Figma

Etapa 6 → programador-de-site
  Saída: Página em Next.js + TypeScript + Tailwind + Schema
  Depende de: Etapas 2a + 4 + 5 (com Figma)
```

**Skills geralmente puladas neste pipeline:**
- `radar-concorrentes-social` (já consolidado em `_conhecimento/concorrentes.md`)
- `captura-referencias-visuais` (referências em `_social/assets/`)
- `social-media-editorial-turismo` (não é parte do escopo de página)

---

## Pipeline B — Página de Categoria

**Quando usar:** "criar/melhorar página da categoria X" (litoral sul, cultural, gastronômico)

```
Etapa 1 → estrategista-de-site
  Saída: Estrutura da categoria, lista de passeios, jornada

Etapa 2 → seo-local-turismo
  Saída: Cluster de keywords + arquitetura de links internos
  Depende de: Etapa 1

Etapa 3a → copywriter-vendas      ┐
  Saída: Hero da categoria, intro │ PARALELO
                                   │ após Etapas 1+2
Etapa 3b → ux-ui-mobile-first    ┘
  Saída: Wireframe da listagem (cards, filtros)

Etapa 4 → diretor-visual-turismo
Etapa 5 → briefing-designer
Etapa 6 → programador-de-site
```

**Diferença vs Pipeline A:** SEO entra cedo (cluster define copy) e foco em listagem, não em conversão de passeio único.

---

## Pipeline C — Otimização SEO (Página Existente)

**Quando usar:** "otimizar SEO de", "melhorar ranking de"

```
Etapa 1 → seo-local-turismo (auditoria)
  Saída: Diagnóstico (H1, meta, schema, densidade, links)

Etapa 2 → copywriter-vendas  [CONDICIONAL]
  Acionar SE: auditoria indicar copy fraca para keyword
  Saída: Revisão de H1, lead, corpo, FAQ
  Pular SE: copy já está alinhada a keyword

Etapa 3 → programador-de-site
  Saída: Implementação de melhorias técnicas
  Depende de: Etapa 1 (sempre) + Etapa 2 (se acionada)
```

**Skills puladas:** todas as outras (foco técnico).

---

## Pipeline D — Briefing Visual de Campanha

**Quando usar:** "briefar designer para X", "direção visual de Y"

```
Etapa 1 → captura-referencias-visuais
  Saída: 5-10 referências em _social/assets/

Etapa 2 → diretor-visual-turismo
  Saída: Direção visual (paleta, tipo, estilo, restrições)
  Depende de: Etapa 1

Etapa 3 → briefing-designer
  Saída: Briefing completo para execução
  Depende de: Etapas 1+2
```

---

## Pipeline E — Campanha Social

**Quando usar:** "criar campanha Instagram", "calendário editorial"

```
Etapa 1 → radar-concorrentes-social
  Saída: Análise de concorrentes + trends + gaps

Etapa 2 → captura-referencias-visuais
  Saída: Referências para o tema da campanha
  Depende de: Etapa 1

Etapa 3 → diretor-visual-turismo
  Saída: Direção visual da campanha
  Depende de: Etapa 2

Etapa 4 → social-media-editorial-turismo
  Saída: Calendário + pautas (stories, reels, carrosséis)
  Depende de: Etapas 1+3
```

**Skills puladas:** todas as 6 skills de site.

---

## Pipeline F — Inteligência (Pesquisa)

**Quando usar:** "pesquisar concorrentes", "capturar referências", "atualizar benchmark"

```
Etapa 1 → radar-concorrentes-social
  Saída: Atualização de _conhecimento/concorrentes.md ou instagram-benchmark.md

Etapa 2 → captura-referencias-visuais  [opcional]
  Acionar SE: pesquisa identificar referências valiosas
  Saída: Assets em _social/assets/
```

**Sem entrega de produto** — só atualiza fontes de verdade para futuros pipelines.

---

## Pipeline H — Disponibilidade de Maré (Recorrente)

**Quando usar:** "gerar calendário de maio", "atualizar próxima saída de Seixas", "dados de maré para [mês]", objetivo envolve tábua de marés ou disponibilidade de piscinas naturais.

**Gatilhos específicos:** tábua de marés, próxima saída, Seixas, Picãozinho, Areia Vermelha, calendário de piscinas, maré baixa, horário de saída.

```
Etapa 1 → tabua-mares-turismo
  Entrada: Dados de maré de Murillo (Marinha/CHM — Porto de Cabedelo/PB)
  Saída: data/tabua-mares.ts + janelas/ciclos + checklist de validação

  PAUSA: Murillo valida o output (confere horários e status)

Etapa 2 → seo-local-turismo  [CONDICIONAL]
  Acionar SE: objetivo inclui criar/atualizar página de calendário
  Saída: meta tags, FAQ schema, H2s para /passeios/piscinas-naturais/calendario

Etapa 3 → programador-de-site
  Saída: data/tabua-mares.ts commitado + componente ProximaSaidaCard + página /calendario (se etapa 2 acionada)
  Depende de: Etapa 1 (sempre) + Etapa 2 (se acionada)
```

**Skills geralmente puladas neste pipeline:**
- `estrategista-de-site` (arquitetura já definida)
- `copywriter-vendas` (dados operacionais, não copy de venda)
- `ux-ui-mobile-first` (componentes já especificados em `references/estrutura-dados.md`)
- `briefing-designer` (sem entregável visual novo)
- `diretor-visual-turismo` (sem novo componente visual)
- `radar-concorrentes-social`, `captura-referencias-visuais`, `social-media-editorial-turismo` (fora do escopo)

---

## Pipeline G — Custom (Objetivo Inédito)

**Quando usar:** objetivo não encaixa em A–F.

Processo:
1. Decompor objetivo em sub-objetivos
2. Mapear cada sub-objetivo a uma skill
3. Aplicar regras de `references/regras-de-decisao.md` (sequencial vs paralelo, dependências)
4. Sinalizar explicitamente que é pipeline custom no OUTPUT
5. Sugerir, ao final, atualização desta skill para incluir o novo padrão

---

## Pipeline Máximo (Referência)

Sequência completa quando o objetivo cobre **todas as fases** (raríssimo — só sprint inicial de marca):

```
FASE 0 — INTELIGÊNCIA
  1. radar-concorrentes-social
  2. captura-referencias-visuais

FASE 1 — DIREÇÃO VISUAL
  3. diretor-visual-turismo

FASE 2 — ESTRUTURA E CONTEÚDO
  4. estrategista-de-site
  5. copywriter-vendas || ux-ui-mobile-first
  6. briefing-designer

FASE 3 — IMPLEMENTAÇÃO
  7. seo-local-turismo
  8. programador-de-site

FASE 4 — AMPLIFICAÇÃO
  9. social-media-editorial-turismo
```
