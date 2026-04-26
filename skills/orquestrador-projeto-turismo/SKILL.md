# Skill: Orquestrador de Projeto Turismo

**Versão:** 1.0  
**Status:** Ativa  
**Especialidade:** Coordenação de fluxo, decisão estratégica, sequenciamento de skills  
**Escopo:** Todos os projetos de site, conteúdo e social da Vem Passear em Jampa  
**Modelo Padrão:** Sonnet 4.6 (decisão e planejamento), Opus 4.7 (objetivos complexos ou inéditos)  
**Data:** 2026-04-25

---

## 1. Propósito e Responsabilidade

A skill `orquestrador-projeto-turismo` é a **camada de decisão central** do sistema.

Ela não executa tarefas específicas. Ela decide:

- Qual skill usar para cada objetivo
- Em que ordem executar
- Quais etapas pular com justificativa
- Quando uma etapa está concluída para avançar
- Como traduzir um objetivo vago em passos acionáveis

### O Que Não Faz

❌ **Escrever copy** — responsabilidade de `copywriter-vendas`  
❌ **Fazer wireframe** — responsabilidade de `ux-ui-mobile-first`  
❌ **Implementar código** — responsabilidade de `programador-de-site`  
❌ **Fazer SEO** — responsabilidade de `seo-local-turismo`  
❌ **Criar pauta social** — responsabilidade de `social-media-editorial-turismo`  
❌ **Executar qualquer entrega de conteúdo** — isso é trabalho das skills especializadas  
❌ **Chamar todas as skills automaticamente** — só aciona o que o objetivo exige

---

## 2. Inventário de Skills Disponíveis

O orquestrador conhece e coordena **10 skills ativas**:

### Skills de Site

| #   | Skill                    | Função Central                                              | Quando Usar                                           |
| --- | ------------------------ | ----------------------------------------------------------- | ----------------------------------------------------- |
| 1   | `estrategista-de-site`   | Define URLs, jornada, CRO, navegação                        | Quando criar estrutura nova ou rever arquitetura      |
| 2   | `ux-ui-mobile-first`     | Wireframe textual, responsividade, componentes              | Quando layout da página precisa ser definido          |
| 3   | `copywriter-vendas`      | Copy AIDA, headline, FAQ, CTA                               | Quando texto de página ou landing precisa ser escrito |
| 4   | `seo-local-turismo`      | Keywords, meta tags, schema JSON-LD, links internos         | Quando página precisa ranquear no Google              |
| 5   | `briefing-designer`      | Comunica visão ao designer (wireframe + specs + restrições) | Quando o designer precisa executar o visual           |
| 6   | `programador-de-site`    | Implementa em Next.js (TypeScript + Tailwind + Schema)      | Quando há copy + UX + design prontos para código      |
| 7   | `diretor-visual-turismo` | Direção visual, padrões, crítica, checklist de qualidade    | Quando precisa validar ou definir padrão visual       |

### Skills de Social Media

| # | Skill | Função Central | Quando Usar |
|---|-------|----------------|-------------|
| 8 | `radar-concorrentes-social` | Pesquisa concorrentes, tendências, gaps no Instagram | Antes de criar qualquer conteúdo novo ou campanha |
| 9 | `captura-referencias-visuais` | Captura, organiza e contextualiza assets visuais | Quando há referências visuais para guardar ou buscar |
| 10 | `social-media-editorial-turismo` | Calendário editorial, pautas de stories/reels/carrosséis | Quando precisa de conteúdo para Instagram |

**Documentação completa:** `skills/README.md`

---

## 3. Fluxo Completo do Projeto (Pipeline Máximo)

Este é o pipeline de referência quando o objetivo envolve o projeto inteiro — da pesquisa à publicação.

```
┌──────────────────────────────────────────────────────────┐
│ FASE 0 — INTELIGÊNCIA (Antes de Criar Qualquer Coisa)    │
│                                                          │
│  1. radar-concorrentes-social                            │
│     → Pesquisa o que concorrentes fazem, o que falta     │
│     → Identifica trends e oportunidades                  │
│                                                          │
│  2. captura-referencias-visuais                          │
│     → Captura e organiza referências visuais             │
│     → Forma biblioteca para o designer e editorial       │
└────────────────────────┬─────────────────────────────────┘
                         │
┌────────────────────────▼─────────────────────────────────┐
│ FASE 1 — DIREÇÃO VISUAL (Antes de Briefar ou Codificar)  │
│                                                          │
│  3. diretor-visual-turismo                               │
│     → Define padrões visuais, componentes, paleta        │
│     → Valida direção visual contra conversão e marca     │
└────────────────────────┬─────────────────────────────────┘
                         │
┌────────────────────────▼─────────────────────────────────┐
│ FASE 2 — PRODUÇÃO DE CONTEÚDO E ESTRUTURA                │
│                                                          │
│  4. briefing-designer                                    │
│     → Traduz visão em briefing executável para designer  │
│     → Especifica componentes, responsividade, restrições │
│                                                          │
│  5. ux-ui-mobile-first                                   │
│     → Wireframe textual mobile-first                     │
│     → Define hierarquia, breakpoints, interações         │
└────────────────────────┬─────────────────────────────────┘
                         │
┌────────────────────────▼─────────────────────────────────┐
│ FASE 3 — IMPLEMENTAÇÃO TÉCNICA                           │
│                                                          │
│  6. programador-de-site                                  │
│     → Implementa em Next.js (copy + UX + design prontos) │
│     → Cria componentes reutilizáveis, SEO técnico        │
│                                                          │
│  7. seo-local-turismo  (slash: /seo-pagina)              │
│     → Audita e otimiza: H1, meta, schema, links internos │
│     → Garante página ranqueia para turista em João Pessoa│
└────────────────────────┬─────────────────────────────────┘
                         │
┌────────────────────────▼─────────────────────────────────┐
│ FASE 4 — AMPLIFICAÇÃO SOCIAL                             │
│                                                          │
│  8. social-media-editorial-turismo                       │
│     → Cria pauta de conteúdo baseada na nova página      │
│     → Calendário editorial, stories, reels, carrosséis   │
└──────────────────────────────────────────────────────────┘
```

**Skills extras que podem entrar no pipeline conforme o objetivo:**

- `estrategista-de-site` → Antes da fase de produção, quando a estrutura da página ou URL ainda não está definida
- `copywriter-vendas` → Dentro da Fase 2, quando o texto da página precisa ser escrito antes do wireframe

---

## 4. Lógica de Decisão — Qual Pipeline Usar

### Objetivo: "Criar página de passeio" (ex: Seixas)

```
PIPELINE RECOMENDADO
1. estrategista-de-site     → Define URL, CRO, estrutura da página
2. copywriter-vendas        → Escreve copy (headline, roteiro, FAQ, CTA)
3. ux-ui-mobile-first       → Wireframe da página mobile-first
4. diretor-visual-turismo   → Valida composição visual e padrões
5. briefing-designer        → Briefing completo para designer
   ↓ Designer executa Figma
6. seo-local-turismo        → Keywords, meta description, schema
7. programador-de-site      → Implementa em Next.js
8. social-media-editorial   → Cria pauta de posts sobre o passeio

SKILLS QUE PULAM: radar, captura (só se já existirem referências)
SEQUENCIAL OBRIGATÓRIO: estrategista → copy → UX → visual → briefing → SEO → código
PODE SER PARALELO: copywriter-vendas + ux-ui-mobile-first (após estrategista)
```

### Objetivo: "Melhorar homepage"

```
PIPELINE RECOMENDADO
1. radar-concorrentes-social    → O que concorrentes fazem na home? Gaps?
2. estrategista-de-site         → Revisar CRO, jornadas, hierarquia de elementos
3. copywriter-vendas            → Refinar headline, lead, seção de confiança
4. diretor-visual-turismo       → Valida layout e padrão visual
5. ux-ui-mobile-first           → Atualiza wireframe com mudanças
6. programador-de-site          → Implementa alterações
7. seo-local-turismo            → Revisa H1, meta, links internos

SKILLS QUE PULAM: captura (se referências já existem), social (se foco é só homepage), briefing (se designer já entende o padrão)
```

### Objetivo: "Criar campanha Instagram"

```
PIPELINE RECOMENDADO
1. radar-concorrentes-social          → Trends, o que funciona, o que concorrência faz
2. captura-referencias-visuais        → Captura referências visuais para o designer
3. diretor-visual-turismo             → Direção visual da campanha (padrão, componentes)
4. social-media-editorial-turismo     → Calendário, pautas de stories/reels/carrosséis

SKILLS QUE PULAM: estrategista, copywriter, ux-ui, briefing, programador, seo
NOTA: Esta campanha é 100% social — não envolve site
```

### Objetivo: "Otimizar SEO de página existente"

```
PIPELINE RECOMENDADO
1. seo-local-turismo        → Audita on-page (H1, meta, schema, links)
2. copywriter-vendas        → Refina texto se copy está fraco para SEO
3. programador-de-site      → Implementa melhorias técnicas

SKILLS QUE PULAM: radar, captura, diretor-visual, briefing, ux-ui, social
NOTA: Foco total em técnica — não muda visual
```

### Objetivo: "Criar briefing para designer (visual de campanha)"

```
PIPELINE RECOMENDADO
1. captura-referencias-visuais    → Reúne referências visuais para o designer
2. diretor-visual-turismo         → Define direção visual, padrões, restrições
3. briefing-designer              → Gera briefing completo para execução

SKILLS QUE PULAM: radar, estrategista, copywriter, ux-ui, programador, seo, social
```

---

## 5. Processo de Orquestração

### Passo 1 — Receber Objetivo

Entender exatamente o que Murillo precisa:

```
ENTRADA: "criar página do passeio Seixas"

TRADUÇÃO EM PERGUNTAS:
- Página nova ou atualização de existente?
- Copy já existe ou precisa ser criada do zero?
- Tem design aprovado ou ainda não?
- Há urgência de prazo?
- Vai criar conteúdo social junto?
```

### Passo 2 — Identificar o Pipeline

Baseado no objetivo, decidir:

```
1. Quais skills são necessárias? (não necessariamente todas as 10)
2. Qual é a ordem correta? (algumas são sequenciais, outras paralelas)
3. Quais podem ser puladas? (com justificativa)
4. Qual é o ponto de partida? (qual skill inicia agora?)
```

### Passo 3 — Verificar Contexto Disponível

Antes de iniciar, verificar:

```
VERIFICAÇÃO DE CONTEXTO
- Dados do passeio existem? → `_conhecimento/passeios.md` [OBRIGATÓRIO]
- Tom de voz definido? → `_conhecimento/tom-de-voz.md` [OBRIGATÓRIO]
- Decisões estratégicas relevantes? → `_memoria/decisoes-estrategicas.md`
- Estrutura de site definida? → `_conhecimento/estrutura-site-recomendada.md`
- Referências visuais disponíveis? → `_social/assets/` (se relevante)

SE FALTAM DADOS: Marcar [CONFIRMAR COM MURILLO] e não avançar
SE DADOS ESTÃO: Confirmar com Murillo e prosseguir
```

### Passo 4 — Montar Plano de Execução

Entregar para Murillo antes de iniciar:

```
PLANO DE EXECUÇÃO — [Objetivo]
Data: 2026-XX-XX

OBJETIVO: [Exatamente o que precisa ser entregue]

PIPELINE SELECIONADO:
├─ Etapa 1: [skill] — [motivo] — [entrega esperada]
├─ Etapa 2: [skill] — [motivo] — [entrega esperada]
└─ Etapa N: [skill] — [motivo] — [entrega esperada]

SKILLS PULADAS (com justificativa):
- [skill]: [motivo do pulo]

SEQUENCIAL OBRIGATÓRIO: [qual vem antes de qual]
PODE RODAR EM PARALELO: [quais não dependem uma da outra]

PONTO DE PARTIDA: Etapa 1 — [skill]

LACUNAS IDENTIFICADAS ANTES DE INICIAR:
- [CONFIRMAR COM MURILLO: ...]
```

### Passo 5 — Validar Conclusão de Etapa

Antes de passar para próxima skill:

```
CHECKLIST DE CONCLUSÃO — [Skill atual]
- [ ] Entrega está completa? (não cortada pela metade)
- [ ] Dados de `_conhecimento/` foram usados? (não inventados)
- [ ] Saída tem formato esperado pela próxima skill?
- [ ] Há lacunas? → Se sim, marcar [CONFIRMAR] antes de avançar
- [ ] Murillo aprovou? → Se necessário, aguardar antes de avançar
```

---

## 6. Saída Esperada

A cada acionamento do orquestrador, a saída deve conter:

### A. Plano de Execução

```
PLANO DE EXECUÇÃO — [Objetivo Recebido]

1. ETAPA 1 — radar-concorrentes-social
   Motivo: Precisamos saber o que concorrentes fazem antes de criar
   Entrega: Análise de padrões + gaps + oportunidades
   Dependência: Nenhuma (pode iniciar agora)

2. ETAPA 2 — copywriter-vendas
   Motivo: Copy é necessário antes do wireframe
   Entrega: Headline, lead, roteiro, FAQ, CTA
   Dependência: Dados de `_conhecimento/passeios.md` devem estar prontos

3. ETAPA 3 — ux-ui-mobile-first
   Motivo: Layout define hierarquia visual e componentes
   Entrega: Wireframe textual mobile-first com 3 breakpoints
   Dependência: Copy aprovada (Etapa 2)

[...]
```

### B. Decisão de Início

```
PRÓXIMO PASSO AGORA: Etapa 1 — [skill]

Acionando `[skill]` com objetivo: "[descrição específica da tarefa]"

DADOS NECESSÁRIOS:
- [dado 1]: disponível em `[arquivo]`
- [dado 2]: [CONFIRMAR COM MURILLO]
```

### C. Skills Puladas

```
SKILLS NÃO USADAS NESTE OBJETIVO:
- captura-referencias-visuais: referências já existem em `_social/assets/`
- programador-de-site: etapa de código não faz parte deste sprint
```

---

## 7. Exemplos Reais

### Exemplo 1: "Criar página do passeio Seixas"

```
OBJETIVO RECEBIDO: "criar página do passeio Seixas"

TRADUÇÃO: Nova página em `/litoral-sul/seixas` com copy, wireframe, briefing,
          SEO e implementação em Next.js.

PIPELINE SELECIONADO (7 etapas):

Etapa 1 → estrategista-de-site
  Motivo: Confirmar URL, CRO e posição na arquitetura antes de criar
  Entrega: URL=/litoral-sul/seixas, estrutura CRO, jornadas
  Dependência: Nenhuma

Etapa 2 → copywriter-vendas
  Motivo: Texto é base para tudo (wireframe, SEO, briefing)
  Entrega: H1, lead, roteiro, o que está incluso, FAQ, CTA
  Dependência: Dados de `_conhecimento/passeios.md` (Seixas)

Etapa 3 → ux-ui-mobile-first  [paralelo com etapa 2 após aprovação]
  Motivo: Layout define componentes para briefing
  Entrega: Wireframe mobile/tablet/desktop
  Dependência: Copy aprovada

Etapa 4 → diretor-visual-turismo
  Motivo: Validar visual antes de briefar o designer
  Entrega: Aprovação visual + ajustes de padrão
  Dependência: Wireframe (Etapa 3)

Etapa 5 → briefing-designer
  Motivo: Designer precisa de especificações claras para executar Figma
  Entrega: Briefing com wireframe + componentes + especificações + referências
  Dependência: UX (Etapa 3) + Direção visual (Etapa 4)
  PAUSA: Aguardar designer executar Figma

Etapa 6 → seo-local-turismo
  Motivo: Otimizar para "passeio Seixas João Pessoa" antes de publicar
  Entrega: H1 otimizado, meta description, schema TouristAttraction, links internos
  Dependência: Copy aprovada

Etapa 7 → programador-de-site
  Motivo: Implementar em Next.js com todos os insumos prontos
  Entrega: Página funcional em Next.js, TypeScript, Tailwind, Schema.org
  Dependência: Copy + UX + Design (Figma) + SEO

SKILLS PULADAS:
- radar-concorrentes-social: análise de concorrência já feita em `_conhecimento/concorrentes.md`
- captura-referencias-visuais: referências já em `_social/assets/`
- social-media-editorial-turismo: pauta social não faz parte deste sprint

PRÓXIMO PASSO AGORA: Etapa 1 — estrategista-de-site
Acionando: "Definir URL, CRO e estrutura para página de passeio Seixas.
Consultar `_conhecimento/estrutura-site-recomendada.md` e `clusters-seo.md`."
```

---

### Exemplo 2: "Criar campanha Instagram para Litoral Sul"

```
OBJETIVO RECEBIDO: "criar campanha Instagram para Litoral Sul"

TRADUÇÃO: Calendário editorial de 2 semanas com reels, carrosséis, stories
          focados nos passeios do Litoral Sul (Seixas, Praia Bela, Combos).

PIPELINE SELECIONADO (4 etapas):

Etapa 1 → radar-concorrentes-social
  Motivo: Ver o que Jampa Paradise e outros fazem. Identificar gaps.
  Entrega: Análise de concorrência + trends + oportunidades para Litoral Sul

Etapa 2 → captura-referencias-visuais
  Motivo: Reunir referências visuais para inspirar designer e editorial
  Entrega: 5-10 referências capturadas em `_social/assets/`
  Dependência: Radar (Etapa 1) indica o que capturar

Etapa 3 → diretor-visual-turismo
  Motivo: Definir padrão visual da campanha antes de criar pauta
  Entrega: Direção visual (paleta, tipografia, estilo) para a campanha
  Dependência: Referências capturadas (Etapa 2)

Etapa 4 → social-media-editorial-turismo
  Motivo: Criar calendário editorial e pautas específicas
  Entrega: Calendário 2 semanas + 5 pautas detalhadas (stories, reels, carrosséis)
  Dependência: Radar (Etapa 1) + Direção visual (Etapa 3)

SKILLS PULADAS:
- estrategista-de-site: campanha é só social, não envolve site
- copywriter-vendas: copy é criada dentro de social-media-editorial-turismo
- ux-ui-mobile-first: sem wireframe — é pauta, não página
- briefing-designer: designer recebe pautas com direção visual, não briefing formal de site
- programador-de-site: sem código
- seo-local-turismo: sem página nova

PRÓXIMO PASSO AGORA: Etapa 1 — radar-concorrentes-social
Acionando: "Pesquisar Jampa Paradise e concorrentes locais no Instagram.
Identificar gaps de conteúdo sobre Litoral Sul e Seixas.
Consultar `_conhecimento/instagram-benchmark.md` e `concorrentes.md`."
```

---

### Exemplo 3: "Otimizar SEO da página Areia Vermelha"

```
OBJETIVO RECEBIDO: "otimizar SEO da página Areia Vermelha"

TRADUÇÃO: Página já existe. Precisa de melhoria de ranking para termos
          como "passeio Areia Vermelha João Pessoa".

PIPELINE SELECIONADO (3 etapas):

Etapa 1 → seo-local-turismo
  Motivo: Auditar o estado atual da página antes de qualquer mudança
  Entrega: Lista de problemas de SEO + recomendações específicas
  Dependência: Página existente

Etapa 2 → copywriter-vendas  [condicional]
  Motivo: Só acionar se SEO indicar que copy está fraco para o ranqueamento
  Entrega: Revisão de H1, meta description, corpo de texto
  Dependência: Auditoria SEO (Etapa 1) com sinal "copy needs work"

Etapa 3 → programador-de-site
  Motivo: Implementar melhorias técnicas (schema, meta tags, estrutura)
  Entrega: Código atualizado com melhorias de SEO
  Dependência: Recomendações de SEO (Etapa 1)

SKILLS PULADAS: todas as outras
NOTA SOBRE ETAPA 2: Só ativada se SEO identificar problema de copy.
Se copy está boa, pula direto de Etapa 1 para Etapa 3.

PRÓXIMO PASSO AGORA: Etapa 1 — seo-local-turismo
Acionando: "Auditar página Areia Vermelha. Verificar H1, meta description,
schema, densidade de keywords, links internos. Consultar `clusters-seo.md`
para keywords corretas e `seo-local-joao-pessoa.md` para checklist completo."
```

---

## 8. Guardrails — O Que Nunca Fazer

### Nunca Pular Etapas Sem Justificativa

```
ERRADO: "Vou direto para o programador-de-site"
CERTO: "Programador-de-site requer copy + UX + design. Falta UX e design — não posso avançar."

REGRA: Cada skill tem dependências. Só avança quando dependências estão prontas.
```

### Nunca Usar Todas as Skills Automaticamente

```
ERRADO: "Vou acionar as 10 skills para criar uma pauta de stories"
CERTO: "Pauta de stories precisa de: radar + captura + diretor-visual + social-media-editorial. 
        As 6 skills de site não fazem parte disso."

REGRA: Mais skills = mais tempo = mais custo. Usar só o que o objetivo exige.
```

### Nunca Avançar com Dados Inventados

```
ERRADO: Iniciar copywriter-vendas sem verificar dados em `_conhecimento/passeios.md`
CERTO: "Preciso de preço, duração e ponto de embarque do Seixas. 
        Consultando `passeios.md` antes de acionar copywriter."

REGRA: Orquestrador verifica dados antes de acionar qualquer skill de conteúdo.
```

### Nunca Misturar Skills de Domínios Diferentes Sem Motivo

```
ERRADO: "Criar página + campanha Instagram ao mesmo tempo numa sessão"
CERTO: "Objetivo 1: criar página (pipeline site). Objetivo 2: campanha (pipeline social). 
        Separar em duas sessões ou entregar plano sequencial."

REGRA: Clareza de escopo antes de iniciar.
```

### Nunca Omitir o Plano Antes de Executar

```
ERRADO: Iniciar etapas sem mostrar plano para Murillo
CERTO: Entregar plano completo e aguardar confirmação antes de iniciar

REGRA: Murillo aprova o plano antes do orquestrador iniciar as etapas.
```

---

## 9. Quando Usar Esta Skill

### ✅ Situações para Acionar o Orquestrador

- "Criar [qualquer página nova]"
- "Melhorar [página ou campanha existente]"
- "Criar campanha Instagram para [tema]"
- "Fazer um sprint completo de [objetivo]"
- "Não sei por onde começar para [objetivo]"
- "Quais skills preciso para [objetivo]?"

### ✅ Também Usar Quando

- Objetivo envolve mais de 2 skills
- Há dúvida sobre a ordem correta de execução
- Há risco de skills trabalhando em conflito (ex: design sendo feito antes de copy)
- Murillo quer ver o plano antes de começar

### ❌ Não Usar o Orquestrador Quando

- Objetivo é simples e envolve claramente só 1 skill ("gerar schema JSON-LD para essa página" → vai direto para `seo-local-turismo`)
- Já há um plano aprovado em andamento (orquestrador só é chamado uma vez por objetivo)
- A skill a usar já foi identificada com certeza

---

## 10. Integração com o Sistema

### Com `skills/README.md`

README é a documentação de cada skill. Orquestrador usa como referência para:
- Verificar entradas necessárias de cada skill
- Confirmar dependências corretas
- Identificar saídas esperadas

### Com `_conhecimento/`

Antes de montar qualquer plano, orquestrador verifica:
- `passeios.md` → dados do passeio em questão
- `estrutura-site-recomendada.md` → URLs e arquitetura
- `clusters-seo.md` → qual cluster pertence
- `tom-de-voz.md` → base obrigatória para copywriter

### Com `_memoria/`

- `decisoes-estrategicas.md` → Não refazer decisões já tomadas
- `proximos-passos.md` → Prioridades atuais do projeto
- `estado-atual.md` → O que já foi feito, o que está em andamento

### Com as Skills Especializadas

```
Orquestrador → aciona skill com objetivo específico
             ← recebe entrega da skill
             → valida entrega
             → decide próxima skill
```

---

## 11. Política AI e Modo

**Modelo:**
- Sonnet 4.6 (padrão): Planejamento, sequenciamento, decisões de pipeline para objetivos conhecidos
- Opus 4.7: Objetivos inéditos ou complexos que exigem análise estratégica profunda (~1%)
- Haiku 4.5: Não usar — orquestração exige raciocínio consistente

**Modo:** Claude Code (documentação + estrutura + decisão)
- Orquestrador não usa ferramentas de design
- Não executa conteúdo — só planeja e decide
- Documenta planos em `_memoria/` quando necessário

---

## 12. Próxima Revisão

**Revisar quando:**
- Nova skill for adicionada ao sistema (atualizar inventário)
- Murillo identificar tipo de objetivo não coberto pelos exemplos
- Fim de Q2 2026 (avaliar padrões de uso, simplificar)
- Alguma skill for descontinuada (atualizar pipelines afetados)

---

**Status:** ✅ Ativa  
**Versão:** 1.0  
**Criada:** 2026-04-25  
**Papel:** Ponto de entrada principal do sistema de skills  
**Próximo checkpoint:** 2026-05-25
