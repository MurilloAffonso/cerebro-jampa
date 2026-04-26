# Skill: Radar Concorrentes Social

**Versão:** 2.0
**Status:** Ativa
**Especialidade:** Inteligência competitiva, análise de Instagram, monitoramento de trends
**Escopo:** Instagram, turismo receptivo, João Pessoa e referências gerais
**Modelo Padrão:** Sonnet 4.6 (pesquisa), Opus 4.7 (análise competitiva profunda)
**Atualizado:** 2026-04-25

---

## RESPONSABILIDADE

### O Que Faz
- Pesquisa concorrentes locais (outros tours em JP — Jampa Paradise e similares)
- Estuda referências visuais de marcas que inspiram
- Analisa padrões de conteúdo (o que funciona, o que não funciona)
- Identifica gaps e oportunidades (o que ninguém está fazendo em JP)
- Monitora trends de Instagram em turismo
- Valida o diferencial da Vem Passear vs. concorrência

### O Que NÃO Faz
- ❌ Gerar pauta editorial → `social-media-editorial-turismo`
- ❌ Capturar imagens → `captura-referencias-visuais`
- ❌ Executar conteúdo no Instagram → Murillo
- ❌ Copiar direto concorrentes → analisa princípios, não copia
- ❌ Fazer benchmarks genéricos → foco é turismo receptivo local

### Quando Usar
- Antes de criar campanha ou linha editorial nova
- Quando precisar validar diferencial competitivo
- Quando identificar trends relevantes para turismo JP
- Monitoramento periódico (mensal/quinzenal)

### Quando NÃO Usar
- Já há análise recente em `_social/concorrentes/` e nada mudou
- Objetivo é só criar pauta (ir direto para `social-media-editorial-turismo`)

---

## INPUT

| Campo | Obrigatório | Fonte | Descrição |
|-------|-------------|-------|-----------|
| objetivo | Sim | Murillo/Orquestrador | Ex: "analisar Jampa Paradise", "trends turismo JP" |
| foco da pesquisa | Não | Murillo | Concorrente específico / trend / gaps |
| período | Não | Murillo | Ex: "últimas 2 semanas" |

### Dados do `_conhecimento/` (Obrigatórios Antes de Executar)

| Arquivo | Por Que Consultar |
|---------|------------------|
| `instagram-benchmark.md` | Padrões já analisados (evitar duplicar) |
| `concorrentes.md` | Análise já feita de Jampa Paradise |
| `mercado-e-concorrencia.md` | Contexto de mercado local |

### Fallback se Faltar Dado
- Se ambiente não permite acesso ao Instagram → pedir link/print a Murillo ou registrar como "análise manual necessária"
- Se concorrente pesquisado não existe → registrar e perguntar a Murillo por nome correto
- Nunca inventar dados de engajamento ou padrões de concorrente

---

## PROCESSO

### Passo 1 — Definir Objetivo

- O que pesquisar? (concorrente específico, trend geral, gaps de conteúdo?)
- Por quê? (gerar ideias, validar diferencial, aprender padrão?)
- Período de análise? (últimas 2 semanas, último mês?)

### Passo 2 — Verificar Vault Antes de Pesquisar

Consultar `_conhecimento/instagram-benchmark.md` e `concorrentes.md`:
- O que já se sabe?
- O que mudou desde a última análise?
- Faz sentido pesquisar de novo?

### Passo 3 — Executar Análise

**Para concorrente direto (ex: Jampa Paradise):**

```
1. IDENTIDADE VISUAL
   - Paleta, tipografia, tom
   - O que Vem Passear faz melhor?

2. CADÊNCIA DE CONTEÚDO
   - Stories: frequência?
   - Reels: quantos por semana?
   - Carrosséis: quantos por semana?
   - OPORTUNIDADE: onde Vem Passear pode superar?

3. TEMAS DE CONTEÚDO
   - O que falam? (passeios, depoimentos, dicas, admin)
   - GAPS: o que não fazem? (bastidor, Murillo, culinária local?)

4. COPY STYLE
   - Tom: formal ou coloquial?
   - CTA: específico ou genérico?
   - DIFERENCIAL: como Vem Passear pode ser mais humano/direto?

5. OPORTUNIDADES
   - O que copiar como PRINCÍPIO (não design)
   - O que evitar
```

**Para referência visual (ex: @brasildescobertas):**

```
1. PADRÕES OBSERVADOS
   - Formatos (stories / reels / carrosséis)
   - Visual (composição, cores, tipografia)
   - Copy (tom, CTAs, emojis)

2. APLICÁVEL À VEM PASSEAR?
   - ✓ O que adaptar
   - ✗ O que não faz sentido (mantém CTA WhatsApp, preço transparente)

3. RECOMENDAÇÃO
   - Princípio extraído
   - Como aplicar na próxima pauta
```

**Para trends:**

```
1. BUSCA
   - Hashtags: #joaopessoa #turismojp
   - Reels mais vistos nas últimas 2 semanas

2. PADRÕES
   - Som trending?
   - Formato em alta? (antes/depois, "um dia em", etc.)
   - Visual dominante? (golden hour, drone?)

3. RECOMENDAÇÃO
   - Som/formato/visual para usar
   - Estimativa de impacto (baseada em observação)
```

### Passo 4 — Registrar Aprendizado

Salvar em `_social/concorrentes/` ou `_social/referencias/` com estrutura:
```
nome-da-fonte-data.md
├─ Data da análise
├─ Categoria (concorrente direto / referência visual / trend)
├─ Análise estruturada
├─ Oportunidades para Vem Passear
├─ O que copiar (princípios)
├─ O que evitar
└─ Tags: turismo, instagram, visual, etc.
```

### Passo 5 — Comunicar Achados

- Resumo executivo para Murillo
- Insights para `social-media-editorial-turismo` consumir
- Sugestões para `captura-referencias-visuais` capturar

---

## REGRAS

- **Analisa princípios, não copia design:** Vem Passear cria próprio conteúdo
- **Foco em JP:** Referências gerais ajudam, mas turismo receptivo local é o foco
- **Não monitorar obsessivamente:** Pesquisa mensal/quinzenal é suficiente
- **Meta é superar, não imitar:** "Como Vem Passear é MELHOR que Jampa Paradise?"
- **Vault primeiro:** Consultar análises anteriores antes de pesquisar de novo

---

## OUTPUT

### Resultado Estruturado

**Relatório de Pesquisa (formato completo):**
```
CONCORRENTE / REFERÊNCIA: [Nome]
URL: [se disponível]
Data: 2026-XX-XX
Categoria: [concorrente direto / referência / trend]

1. Identidade Visual
2. Cadência de Conteúdo
3. Temas e Copy
4. Gaps Identificados
5. Oportunidades para Vem Passear
6. O Que Copiar (princípio)
7. O Que Evitar
```

**Resumo Executivo (para Murillo):**
```
CONCORRENTES EM JP
- Jampa Paradise: [observação + oportunidade]

REFERÊNCIAS VISUAIS
- @perfil: [padrão + como aplicar]

TRENDS
- [trend]: [ação recomendada]

RECOMENDAÇÃO IMEDIATA
- [1 ação concreta para próxima semana]
```

### Arquivos Gerados

| Arquivo | Pasta | Quando |
|---------|-------|--------|
| `concorrente-[nome]-[data].md` | `_social/concorrentes/` | Análise de concorrente |
| `referencia-[nome]-[data].md` | `_social/referencias/` | Análise de referência visual |
| `trend-turismo-[data].md` | `_social/referencias/` | Análise de trend |

### Próximos Passos (Handoff)

Esta skill alimenta:
- `social-media-editorial-turismo` com: insights sobre o que funciona, gaps, trends
- `captura-referencias-visuais` com: indicação do que capturar
- `diretor-visual-turismo` com: padrões visuais observados para validar diferencial

---

## COMPATIBILIDADE COM ORQUESTRADOR

| Propriedade | Valor |
|-------------|-------|
| Pipelines que usam | Pipeline E (Campanha Social), Pipeline F (Inteligência) |
| Depende de (skills) | Nenhuma — é ponto de entrada dos pipelines sociais |
| Depende de (arquivos) | `instagram-benchmark.md`, `concorrentes.md`, `mercado-e-concorrencia.md` |
| Alimenta (skills) | `social-media-editorial-turismo`, `captura-referencias-visuais`, `diretor-visual-turismo` |
| Pode rodar em paralelo com | `captura-referencias-visuais` (após definir o que capturar) |
| Posição típica no pipeline | Etapa 1 dos Pipelines E e F |

---

*Skill v2.0 | Atualizado 2026-04-25 | Adicionado INPUT/OUTPUT/COMPATIBILIDADE padronizados*
