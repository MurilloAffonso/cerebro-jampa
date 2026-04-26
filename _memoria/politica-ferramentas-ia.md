# Memória: Política Oficial de Uso de Ferramentas IA

**Consolidado em:** 2026-04-25  
**Escopo:** Uso integrado de Claude Code, Claude Design, modelos AI e pesquisa aberta  
**Vigência:** Fase 1+ (até revisão explícita)

---

## 1. Panorama: Arquitetura de Ferramentas

O projeto Vem Passear Jampa usa uma **arquitetura de 2 ferramentas IA**, cada uma com responsabilidade clara:

```
┌─────────────────────────────────────────────────┐
│ Vem Passear Jampa — Arquitetura de Ferramentas │
└─────────────────────────────────────────────────┘

┌─────────────────────────┐       ┌──────────────────────┐
│   CLAUDE CODE           │       │  CLAUDE DESIGN       │
│   (Ferramenta Principal)│       │  (Ferramenta Secundária)
│                         │       │                      │
│ - Arquitetura site      │       │ - Exploração visual  │
│ - Skills + templates    │       │ - Prototipagem       │
│ - Memória + vault       │       │ - Variantes de layout│
│ - Next.js implementação │       │ - Material para brief │
│ - Dados + estrutura     │       │ - Direção visual     │
│ - Git + filesystem      │       │ - Handoff visual     │
│                         │       │                      │
│ 85-90% do trabalho      │       │ 10-15% do trabalho   │
└──────────┬──────────────┘       └──────────┬───────────┘
           │                               │
           └───────────────┬───────────────┘
                           ↓
            ┌──────────────────────────────┐
            │  Modelos AI (Sonnet/Opus)   │
            │  Pesquisa Aberta (Web)      │
            │  Next.js (Stack)            │
            └──────────────────────────────┘
```

---

## 2. Claude Code — Ferramenta Principal

### 2.1 Responsabilidade

Claude Code é a **ferramenta central de execução** do projeto. Ela gerencia:
- Estrutura do vault (`_conhecimento/`, `_memoria/`, `templates/`, `skills/`)
- Implementação de código (Next.js, componentes, páginas)
- Integridade de dados (passeios, empresa, configurações)
- Continuidade de projeto (git, histórico, decisões)
- Comunicação com Murillo (relatórios, decisões)

### 2.2 Uso de Claude Code

**Quando usar Claude Code:**
- ✅ Criar ou editar estrutura técnica do vault
- ✅ Criar ou atualizar skills especializadas
- ✅ Gerar templates (página, componente, email)
- ✅ Implementar em Next.js (páginas, componentes, dados)
- ✅ Organizar ou atualizar memória estratégica
- ✅ Registrar decisões (arquivo de memória)
- ✅ Executar mudanças no filesystem
- ✅ Coordenar com git (commits, branches)
- ✅ Trabalhar com dados estruturados (passeios.ts, empresa.ts)

**Não fazer em Claude Code:**
- ❌ Exploração visual pura (sem objetivo estrutural)
- ❌ Prototipar múltiplas variantes de layout (usar Design)
- ❌ Pesquisar benchmark apenas para inspiração visual
- ❌ Fazer brainstorm visual sem direcionamento claro

---

## 3. Claude Design — Ferramenta Secundária e Especializada

### 3.1 Responsabilidade

Claude Design é a **ferramenta de exploração visual e prototipagem** do projeto. Ela apoia:
- Exploração de direção visual (cores, tipografia, espaço)
- Prototipagem de layout (hero, cards, seções)
- Validação de composição visual
- Variantes e alternativas visuais
- Material de briefing para designer real
- Handoff visual de implementação

### 3.2 Uso de Claude Design

**Quando usar Claude Design:**
- ✅ Explorar direção visual de Home (composição, cores, espaço)
- ✅ Explorar padrão de hero (variantes de tamanho, fundo)
- ✅ Explorar cards de passeio (layout, proporções, hierarquia)
- ✅ Explorar seções de confiança (3-col vs 2-col, cards vs números)
- ✅ Explorar composição de CTA (posição, tamanho, contexto)
- ✅ Testar alternativas de accordion/FAQ (expandido vs colapsado)
- ✅ Gerar frames para briefing ao designer
- ✅ Validar responsividade visual (mobile vs desktop em wireframe)
- ✅ Estudar variantes de seções antes de investir em design final
- ✅ Criar deck visual de apresentação para Murillo

**Não fazer em Claude Design:**
- ❌ Definir arquitetura de site (é decisão de estrategista)
- ❌ Organizar vault ou memória
- ❌ Criar ou editar skills (é trabalho Claude Code)
- ❌ Escrever copy definitivo (é trabalho de copywriter)
- ❌ Decidir SEO keywords (é trabalho de SEO)
- ❌ Implementar código (é trabalho de programador)
- ❌ Substituir briefing designer (é suplemento, não substituto)

### 3.3 Fluxo de Uso de Claude Design

```
1. Claude Code Define Estrutura
   (estrategista, skill briefing-designer)
   ↓
2. Copy está pronto? SIM
   ↓
3. UX/UI fez wireframe?
   ├─ SIM → Passar para Claude Design
   └─ NÃO → Esperar wireframe
   ↓
4. Claude Design (Exploração Visual)
   - Testa 2-3 variantes de layout
   - Valida mobile-first
   - Gera frames para briefing
   - Cria material visual para Designer
   ↓
5. Designer Real (Figma)
   - Usa frames de Design como referência
   - Cria design final em alta fidelidade
   - Ativa componentes, estilos, variantes
   ↓
6. Claude Code (Implementação)
   - Recebe design final
   - Implementa em Next.js
   - Valida contra frames de Design
   ↓
7. Resultado
   - Página live no site
   - Coerente com exploração visual feita
```

---

## 4. Modelos AI — Hierarquia de Uso

### 4.1 Sonnet 4.6 — Modelo Padrão (90% dos casos)

**Modelo:** `claude-sonnet-4-6`  
**Quando usar:** Padrão absoluto para Code e Design  
**Tarefas em Code:**
- Gerar páginas, componentes, skills
- Análise SEO, copy, briefing
- Decisões de arquitetura média

**Tarefas em Design:**
- Exploração visual de layouts
- Prototipagem de seções
- Variantes de componentes visuais
- Geração de frames para briefing

**Características:** Qualidade excelente, velocidade boa, custo eficiente.

---

### 4.2 Opus 4.7 — Modelo Pesado (5% dos casos)

**Modelo:** `claude-opus-4-7`  
**Quando usar:** Situações específicas de decisão profunda  
**Tarefas em Code:**
- Decisões estratégicas complexas (7 vs 10 clusters)
- Benchmark competitivo profundo
- Revisão de arquitetura inteira
- Consolidação de raciocínio multi-camadas

**Tarefas em Design:**
- Exploração de direção visual inteira (não só layout)
- Análise de psicologia visual em profundidade
- Comparação de 4+ variantes complexas
- Validação de sistema visual coeso

**Características:** Melhor qualidade, mais lento, custo maior. Use apenas quando realmente necessário.

---

### 4.3 Haiku 4.5 — Modelo Leve (5% dos casos)

**Modelo:** `claude-haiku-4-5-20251001`  
**Quando usar:** Tarefas triviais  
**Tarefas:**
- Renomear variáveis
- Listar items
- Manutenção simples (um campo)
- Respostas óbvias

**Características:** Muito rápido, economiza tokens, qualidade OK para trivial.

---

## 5. Pesquisa Aberta (Web Search)

### 5.1 Quando Usar

**Usar APENAS para:**
- ✅ Benchmark de concorrentes visuais (sites de turismo)
- ✅ Referências de UX/CRO modernos
- ✅ Padrões de design em turismo
- ✅ Dados externos (clima JP, maré, eventos)
- ✅ SEO local (keywords, rankings)
- ✅ Integração de plataformas (Google Maps, TripAdvisor)

**Prioridade 1:** Vault (`_conhecimento/`, `_memoria/`)  
**Prioridade 2:** Se falta → Pesquise web  
**Prioridade 3:** Registre aprendizado para futuro

---

## 6. Stack Oficial: Next.js

**Decisão:** Next.js (React, TypeScript, App Router, Tailwind CSS)

**Implicação para Claude Code:**
- 100% da implementação em Next.js
- Componentes reutilizáveis
- Dados em TypeScript (passeios.ts, empresa.ts)
- SEO via next/metadata ou schema JSON-LD
- Imagens otimizadas via next/image

**Implicação para Claude Design:**
- Prototipar respeitando constraints Next.js
- Frames devem ser implementáveis em Tailwind
- Componentes visuais devem ser componentizados
- Responsividade deve seguir Next.js breakpoints

---

## 7. Relação com Skills

### Skills e Suas Ferramentas

| Skill | Ferramenta Principal | Suporte Design | Uso |
|-------|----------------------|---|---|
| `estrategista-de-site` | Code | - | Define arquitetura, CRO |
| `ux-ui-mobile-first` | Code | Usa Design | Wireframe, validação |
| `copywriter-vendas` | Code | - | Copy conversão |
| `seo-local-turismo` | Code | - | SEO, keywords, schema |
| `briefing-designer` | Code | Cria a partir de | Comunica ao designer |
| `diretor-visual-turismo` | Design | Especialista | Crítica, padrões, treino |
| `programador-de-site` | Code | - | Implementa Next.js |

**Dinâmica:**
- `diretor-visual-turismo` trabalha 100% em Design
- Outras skills trabalham em Code
- `ux-ui-mobile-first` usa saídas de Design como referência
- `briefing-designer` transforma exploração de Design em briefing

---

## 8. Fluxo Integrado: Code + Design + Skills

```
FASE 1: ESTRATÉGIA (Claude Code)
    ↓
Estrategista Define
- Arquitetura de site
- Clusters, URLs, CRO
- Navegação
    ↓
FASE 2: CONTEÚDO (Claude Code)
    ↓
Copywriter Escreve
- Copy conversão
- Prova social
- CTAs
    ↓
UX/UI Faz Wireframe
- Layout estrutural
- Responsividade
- Fluxo de clique
    ↓
FASE 3: VISUAL (Claude Design + Code)
    ↓
Diretor Visual Explora
- Direção visual
- Padrões de layout
- Variantes de composição
- Material para brief
    ↓
Briefing Designer Comunica
- Transforma em briefing
- Wireframe + visual + specs
- Pronto para designer real
    ↓
FASE 4: DESIGN (Designer Real em Figma)
    ↓
Designer Executa
- Design final em alta fidelidade
- Componentes, variantes, tokens
- Handoff em Figma
    ↓
FASE 5: IMPLEMENTAÇÃO (Claude Code)
    ↓
Programador Implementa
- Código Next.js
- Componentes React
- Dados TypeScript
- SEO técnico
    ↓
FASE 6: VALIDAÇÃO (Claude Code + Design)
    ↓
Diretor Visual Valida
- Checklist de qualidade
- Coerência com design
- Conversão visual

    ↓
RESULTADO
- Página live no site
- Coerente visualmente
- Otimizada para conversão
```

---

## 9. Checklist de Operação Integrada

### Antes de Começar Qualquer Tarefa

- [ ] É uma decisão estratégica? → Use Code + Opus se complexo
- [ ] É geração de estrutura? → Use Code sempre
- [ ] É criação de skill? → Use Code sempre
- [ ] É exploração visual pura? → Use Design
- [ ] É prototipagem de layout? → Use Design
- [ ] É implementação em código? → Use Code sempre
- [ ] Devo consultar vault? → SIM, sempre primeiro
- [ ] Devo pesquisar web? → Apenas se vault não tem resposta

### Durante a Tarefa

**Em Claude Code:**
- [ ] Consultei vault antes de começar?
- [ ] Estou usando tom de voz correto?
- [ ] Dados estão corretos (passeios.md, empresa.md)?
- [ ] Mobile-first?
- [ ] CTA é WhatsApp?

**Em Claude Design:**
- [ ] Respeitei wireframe de UX/UI?
- [ ] Explorei 2-3 variantes?
- [ ] Validei mobile vs desktop?
- [ ] Deixei claro o que é frame vs implementação?

### Após a Tarefa

**Em Claude Code:**
- [ ] Testei em mobile?
- [ ] Verifiquei links internos?
- [ ] Sem erros no console?
- [ ] Performance OK (<3s mobile)?

**Em Claude Design:**
- [ ] Frames estão claros para designer?
- [ ] Anotações (cores, tamanhos) estão presentes?
- [ ] Responsividade está óbvia?

---

## 10. Exemplos: Quando Usar Qual Ferramenta

### Cenário 1: Criar Página de Passeio Inteira

```
1. Claude Code (Estrategista)
   - Define: URL, CRO, navegação
   
2. Claude Code (Copywriter)
   - Escreve: Copy AIDA
   
3. Claude Code (UX/UI)
   - Cria: Wireframe estrutural
   
4. Claude Design (Diretor Visual)
   - Explora: 2-3 layouts, cores, espaço
   - Gera: Frames para briefing
   
5. Designer Real (Figma)
   - Cria: Design final
   
6. Claude Code (Programador)
   - Implementa: Next.js componentes
   
7. Claude Design (Diretor Visual Valida)
   - Valida: Checklist de qualidade vs Figma
```

---

### Cenário 2: Refatorar Home Existente

```
1. Claude Code (Copywriter)
   - Reescreve: Copy (sem quebrar conversão)
   
2. Claude Design (Diretor Visual)
   - Testa: Novas variantes de layout
   - Valida: Mobile vs desktop
   
3. Claude Code (Programador)
   - Atualiza: Código HTML + CSS
   
4. Claude Design (Validação)
   - Confirma: Coerência visual
```

---

### Cenário 3: Explorar Novo Padrão Visual

```
1. Claude Design (Diretor Visual)
   - Explora: Hero block (3 variantes)
   - Testa: Cores (azul vs laranja primária)
   - Valida: Mobile vs desktop
   
2. Claude Code (Briefing Designer)
   - Comunica: Padrão ao designer
   
3. Designer Real (Figma)
   - Executa: Componente final
```

---

## 11. Integração com `diretor-visual-turismo`

A skill `diretor-visual-turismo` vive em Claude Design mas se integra com Code:

### Em Claude Design
- Exploração visual de layouts
- Prototipagem de componentes
- Variantes e alternativas
- Análise de conversão visual
- Geração de frames

### Em Claude Code
- SKILL.md (documentação da skill)
- references/ (padrões, checklist, princípios)
- templates/ (especificação de componentes)
- Integração com briefing-designer
- Validação de implementação

### Fluxo
```
Design Explora Layout
    ↓
Code (Briefing Designer) Comunica
    ↓
Designer Real Executa
    ↓
Code Implementa
    ↓
Design Valida Implementação
```

---

## 12. Próxima Revisão

**Revisar esta política quando:**
- Murillo pedir mudança no uso de ferramentas
- Se Claude Design não entregar valor esperado
- Se descobrir que fluxo Code+Design não é eficiente
- Fim de Fase 1 (check-in 2026-05-25)

---

**Status:** ✅ Ativa e vinculante  
**Versão:** 1.0  
**Criada:** 2026-04-25  
**Próximo checkpoint:** 2026-05-25 (fim Fase 1)

---

## Referências Relacionadas

- `politica-uso-claude-code.md` — Política anterior (Claude Code apenas)
- `decisoes-estrategicas.md` — Decisões de projeto
- `skills/diretor-visual-turismo/SKILL.md` — Skill que trabalha em Design
- `skills/briefing-designer/SKILL.md` — Skill que comunica ao designer
- `skills/ux-ui-mobile-first/SKILL.md` — Skill que cria wireframes

---
