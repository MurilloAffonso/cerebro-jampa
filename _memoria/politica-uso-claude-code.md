# Memória: Política Oficial de Uso de Claude Code

**Consolidado em:** 2026-04-25  
**Escopo:** Configurações operacionais de uso de Claude Code para o projeto Vem Passear em Jampa  
**Vigência:** Fase 1+ (até revisão explícita)

**📌 IMPORTANTE:** Esta política é uma parte de `politica-ferramentas-ia.md` (v1.0).  
Para entender a relação entre Claude Code e Claude Design, consulte esse arquivo.

---

## 1. Modo de Trabalho

### Modo Principal: Claude Code

**Decisão:** Claude Code (CLI + environment local) é o modo padrão de trabalho para todas as tarefas do projeto.

**Aplicação:**
- ✅ Desenvolvimento de site
- ✅ Criação de skills e templates
- ✅ Estrutura técnica do vault
- ✅ Execução de páginas do site
- ✅ Implementação de componentes
- ✅ Otimização SEO técnica

**Por quê:** Contexto persistente, acesso direto a arquivos do vault, integração com git, continuidade entre sessões.

---

## 2. Modelo de IA — Hierarquia de Uso

### 2.1 Modelo Padrão: Sonnet 4.6

**Modelo:** `claude-sonnet-4-6`  
**Quando usar:** 99% do tempo  
**Tarefas:**
- Criação de conteúdo (copy, briefing, templates)
- Execução de páginas (estrutura, componentes)
- Análise e otimização SEO
- Refatoração de código
- Decisões de arquitetura média
- Tudo que não se enquadra em Opus ou Haiku

**Características:** Balanço ideal entre velocidade, qualidade e custo. Suficiente para 95% das demandas.

**Comando:** Sem especificar modelo (padrão) ou `/fast` para modo mais rápido com Opus 4.6.

---

### 2.2 Modelo Pesado: Opus 4.7

**Modelo:** `claude-opus-4-7`  
**Quando usar:** ~1% do tempo — situações específicas  
**Tarefas:**
- Decisões estratégicas difíceis (arquitetura, posicionamento)
- Análise profunda de problema complexo
- Benchmark competitivo avançado
- Consolidação de raciocínio multi-camadas
- Revisão de estratégia inteira do site
- Quando Sonnet 4.6 não consegue resolver

**Características:** Melhor qualidade, mais lento, custo maior. Use apenas quando realmente necessário.

**Comando:** `/fast` (se FastMode disponível) ou solicitação explícita ao Claude.

---

### 2.3 Modelo Leve: Haiku 4.5

**Modelo:** `claude-haiku-4-5-20251001`  
**Quando usar:** ~5% do tempo — tarefas triviais  
**Tarefas:**
- Renomeação de arquivos/variáveis
- Listagem simples (índices, catálogos)
- Organização de estrutura
- Ajustes pontuais (uma linha)
- Manutenção rápida (update campo, remover arquivo)
- Resposta a dúvida óbvia
- Tarefas que não requerem raciocínio

**Características:** Muito rápido, economiza tokens, qualidade OK para trivial.

**Comando:** Não há seleção automática — somente se Claude oferecer opção.

---

## 3. Pesquisa Aberta (Web Search)

### 3.1 Quando Usar Pesquisa Aberta

**Usar APENAS para:**
- ✅ Benchmark de concorrentes (site, copy, UX)
- ✅ Pesquisa de mercado (tendências SEO, turismo)
- ✅ Validação de dados externos (clima JP, eventos, maré)
- ✅ Referências públicas (artigos, guias, plataformas tipo TripAdvisor)
- ✅ SEO local (busca por keywords, posições, gaps de ranqueamento)
- ✅ Integração de ferramentas (Viator, Google Maps, schema.org)
- ✅ Padrões de UX/CRO modernos (exemplos de sites de turismo)

---

### 3.2 Quando NÃO Usar Pesquisa Aberta

**Evitar SEMPRE:**
- ❌ Dentro de tarefas de execução (gerar página, criar skill, escrever template)
- ❌ Para dados que estão no vault (`_conhecimento/`, `_memoria/`)
- ❌ Para decisões que já foram tomadas (leia `decisoes-estrategicas.md`)
- ❌ Para fazer "confirmação desnecessária" de fato local (preço, passeio, Murillo)
- ❌ Para procrastinar: "vou pesquisar antes de começar" (comece com vault!)

---

### 3.3 Fluxo Recomendado

1. **Prioridade 1:** Consulte `_conhecimento/` + `_memoria/`
2. **Prioridade 2:** Se falta informação → pesquise
3. **Prioridade 3:** Se achou → registre em `_conhecimento/` ou `_memoria/` para futuro

**Regra:** Vault é fonte de verdade. Pesquisa é suplemento.

---

## 4. Stack Oficial: Next.js

### 4.1 Decisão

**Stack oficial:** Next.js (React, TypeScript, App Router, Tailwind CSS)

**Não é:**
- ❌ Wix (plataforma no-code)
- ❌ WordPress (CMS)
- ❌ Webflow (design-driven)
- ❌ Qualquer outro builder

---

### 4.2 Versão

**Next.js:** Versão LTS atual (14.0+)  
**TypeScript:** Obrigatório  
**CSS:** Tailwind CSS (recomendado) ou styled-components  
**Componentes:** Shadcn/UI (opcional, se necessário)

---

### 4.3 Implicações

**Implementação:**
- Skill `programador-de-site` opera 100% em Next.js
- Todas páginas seguem estrutura Next.js App Router
- Dados vêm de `data/passeios.ts`, não de API externa
- Imagens otimizadas com `next/image`
- SEO via `next/metadata` ou `next/head`

**Deployment:**
- Vercel (recomendado) ou Netlify
- Zero configuração se Vercel (Next.js nativo)
- Analytics automático (opcional Vercel Analytics)

---

## 5. Integração: Claude Code + Sonnet 4.6 + Next.js

### Fluxo Padrão

```
1. ABRIR SESSÃO
   ↓
2. CONSULTAR VAULT
   (_conhecimento/, _memoria/, templates/)
   ↓
3. ESCOLHER SKILL ou TASK
   (estrategista, copywriter, seo, etc.)
   ↓
4. USAR SONNET 4.6 (padrão)
   - Se decisão complexa → considerar Opus
   - Se trivial → pode usar Haiku
   ↓
5. IMPLEMENTAR EM NEXT.JS
   (usando skill programador-de-site)
   ↓
6. TESTAR LOCALMENTE
   ↓
7. FECHAR SESSÃO
   (atualizar memória)
```

---

## 6. Checklist de Operação

### Antes de Começar a Tarefa

- [ ] Qual modelo devo usar? (padrão: Sonnet 4.6)
- [ ] Devo pesquisar algo? (priorize vault primeiro)
- [ ] Vou implementar em Next.js? (se código novo: sim)
- [ ] Consultei o vault já? (sempre primeiro)
- [ ] Tenho dados suficientes? (se não: pesquise ou marque [CONFIRMAR])

### Durante a Tarefa

- [ ] Estou usando o tom de voz correto? (leia `tom-de-voz.md`)
- [ ] Os dados estão corretos? (dados de `passeios.md`, `empresa.md`)
- [ ] Mobile-first? (sempre)
- [ ] SEO checklist? (H1, meta, alt text, links internos)
- [ ] CTA é WhatsApp? (sempre)

### Após a Tarefa

- [ ] Testei em mobile?
- [ ] Verifiquei links internos?
- [ ] Sem erros no console?
- [ ] Performance OK (< 3s mobile)?
- [ ] Copy está exato (não reescreveu)?

---

## 7. Matriz de Decisão: Qual Modelo Usar?

| Situação | Modelo | Tempo Est. |
|----------|--------|-----------|
| Escrever página de passeio | Sonnet | 10-15min |
| Criar estratégia site inteira | Opus | 30-45min |
| Renomear variável | Haiku | 2min |
| Análise competitiva profunda | Opus | 45-60min |
| Gerar copy landing persona | Sonnet | 15-20min |
| Listar passeios por categoria | Haiku | 5min |
| Decidir arquitetura de clusters | Opus | 20-30min |
| Implementar componente React | Sonnet | 20-25min |
| Organizar estrutura pasta | Haiku | 5min |
| Validar SEO de página | Sonnet | 10-15min |

**Default:** Sonnet 4.6 cobre 90% dos casos.

---

## 8. Pesquisa Aberta: Exemplos de Uso

### ✅ Usar Pesquisa

```
"Benchmarking: Como Viator estrutura página de tour em turismo?"
→ Pesquise padrões, copie o bom, adapte para JP

"Qual é a maré hoje em João Pessoa?"
→ Pesquise (dado local, muda diariamente)

"Qual ranking SEO para 'passeios praia João Pessoa'?"
→ Pesquise (validar oportunidade de ranqueamento)

"Como é a experiência de usuário em TripAdvisor para tours?"
→ Pesquise (referência de plataforma concorrente)
```

### ❌ NÃO Usar Pesquisa

```
"Qual é o preço do passeio Seixas?"
→ NÃO pesquise! Leia passeios.md (já está lá)

"Como falar sobre confiança na Vem Passear?"
→ NÃO pesquise! Leia tom-de-voz.md + provas-de-confianca.md

"Qual é a política de decisões do projeto?"
→ NÃO pesquise! Leia decisoes-estrategicas.md

"Qual é a próxima prioridade?"
→ NÃO pesquise! Leia proximos-passos.md ou estado-atual.md
```

---

## 9. Exceções e Casos Especiais

### Opus é Obrigatório Quando

- Murillo pede revisão estratégica completa
- Há conflito entre duas abordagens (exemplo: 7 vs. 10 clusters)
- Performance SEO está ruim (precisa análise profunda)
- Precisa "validação independente" de decisão já tomada

### Pesquisa Aberta é Obrigatória Quando

- Murillo pede benchmark competitivo específico
- Precisa validar opportunity cost (qual prioridade primeiro?)
- Quer dados sobre plataforma externa (Viator, TripAdvisor, Instagram)
- Precisa consultar `plano-seo-prioridades.md` (que cita oportunidades)

---

## 10. Documentação e Comunicação

### Ao Murillo

- Sempre cite qual arquivo de `_conhecimento/` foi usado
- Se pesquisou web, cite a fonte
- Se usou Opus ou Haiku, pode não mencionar (detalhe técnico)
- Se faltam dados: marque `[CONFIRMAR COM MURILLO: ...]` e aguarde

### Ao Claude Futuro

- Se mudou decisão: atualize `decisoes-estrategicas.md`
- Se descobriu oportunidade nova: registre em `perguntas-abertas.md`
- Se aprendeu algo: considere se vai para `_aprendizados/` ou `_conhecimento/`
- Ao fechar sessão: rode `/fechar-sessao` para atualizar estado

---

## 11. Próxima Revisão

**Revisar esta política quando:**
- Murillo pedir mudança de modelo padrão
- Se Next.js não funcionar ou trocar para outra stack
- Se descobrir que pesquisa aberta economiza mais que planejado
- Fim de Fase 1 (check-in 2026-05-25)

---

**Status:** ✅ Ativa e vinculante  
**Versão:** 1.0  
**Criada:** 2026-04-25  
**Próximo checkpoint:** 2026-05-25 (fim Fase 1)

---
