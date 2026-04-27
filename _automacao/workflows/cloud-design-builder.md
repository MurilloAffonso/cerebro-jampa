# Cloud Design Builder — Fluxo Visual CEREBRO.JAMPA → Claude Design

**Versão:** 1.0  
**Criado:** 2026-04-27  
**Status:** Claude Design = ferramenta principal ativa | Lovable = congelada  
**Escopo:** Produção visual do site, identidade e materiais da Vem Passear em Jampa

---

## 1. Claude Design como Ferramenta Visual Principal

Claude Design é a ferramenta visual primária a partir de 2026-04-27. Toda geração visual — layouts, componentes, mockups de página, identidade, logo — passa por Claude Design antes de qualquer implementação em Next.js.

### Por Que Claude Design

| Fator | Claude Design | Alternativa anterior |
|-------|--------------|---------------------|
| Integração com vault | Direta — briefing em markdown alimenta o prompt | Requer pipeline separado |
| Controle do prompt | Total — CEREBRO.JAMPA define cada detalhe | Limitado por UI de builder |
| Iteração | Rápida — ajusta prompt e regera | Drag-and-drop mais lento |
| Alinhamento com identidade | Alto — prompt carrega paleta, tom, persona | Risco de deriva visual |
| Custo | Incluso no plano Claude | Separado |

### O Que Claude Design Produz Neste Projeto

- Mockups de página (homepage, passeio, categoria, calendário de marés)
- Componentes isolados (hero, card, CTA, accordion, footer)
- Variações de logo (quando tarefa de logo for acionada)
- Assets para Instagram (story, carrossel, reels — frame estático)
- Validação visual antes de o programador implementar

### Regra de Uso

> Nenhum componente novo ou redesign de página vai para `programador-de-site` sem passar por Claude Design primeiro (ou por wireframe ASCII aprovado em `ux-ui-mobile-first`).

---

## 2. Lovable — Opção Futura / Congelada

### Status Atual

**Lovable está congelada.** A skill `lovable-site-builder` permanece no inventário mas não deve ser acionada no orquestrador ou planos de execução enquanto Claude Design for o caminho principal.

### Razão do Congelamento

A decisão foi tomada em 2026-04-27. Claude Design oferece mais controle sobre identidade visual e integração direta com CEREBRO.JAMPA. Lovable.dev pode ser reativado no futuro para:

- Prototipagem rápida de features complexas (ex: reserva online, calendário interativo)
- Exportação de código base quando o volume de páginas novas aumentar muito
- Validação de novo design system em ambiente isolado

### Como Reativar Lovable (Quando For o Momento)

1. Murillo decide reativar explicitamente
2. Registrar decisão em `_memoria/decisoes-estrategicas.md`
3. Remover status `CONGELADA` do frontmatter de `skills/lovable-site-builder/SKILL.md`
4. Atualizar gatilho no orquestrador (seção 7 do `SKILL.md`)
5. Executar Pipeline H conforme documentado

**Não deletar** arquivos de Lovable — ficam preservados para retomada futura.

---

## 3. Fluxo Completo: CEREBRO.JAMPA → Skills → Pacote Visual → Claude Design → Validação → Implementação

```
┌─────────────────────────────────────────────────────────────────┐
│  CEREBRO.JAMPA — Fontes de verdade                              │
│  _conhecimento/: empresa, passeios, catálogo, branding          │
│  _memoria/: decisões estratégicas, proximos passos              │
│  _conhecimento/branding/referencia-prompt-visual-murillo.md     │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│  ORQUESTRADOR                                                    │
│  orquestrador-projeto-turismo                                   │
│  → Interpreta objetivo visual de Murillo                        │
│  → Seleciona skills necessárias                                 │
│  → Gera plano para aprovação                                    │
└──────┬──────────────┬──────────────┬───────────────────────────┘
       │              │              │
       ▼              ▼              ▼
┌───────────┐  ┌────────────┐  ┌──────────────────────┐
│copywriter │  │ux-ui-       │  │seo-local-turismo     │
│-vendas    │  │mobile-first│  │(keywords, meta)       │
│(copy final│  │(wireframe  │  └──────────┬───────────┘
│aprovada)  │  │ASCII)      │             │
└─────┬─────┘  └────┬───────┘             │
      │             │                     │
      └──────┬──────┘─────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────────────┐
│  DIRETOR VISUAL + CAPTURA REFERÊNCIAS (paralelo)                │
│  diretor-visual-turismo                                         │
│  → Valida wireframe contra critérios de conversão               │
│  → Consulta referencia-prompt-visual-murillo.md                 │
│  → Define padrão visual aprovado para a peça                   │
│                                                                  │
│  captura-referencias-visuais                                    │
│  → Organiza referências em _social/assets/                      │
│  → Contextualiza para uso em prompt Claude Design               │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│  BRIEFING DESIGNER                                              │
│  briefing-designer                                              │
│  → Consolida: copy + wireframe + direção visual                 │
│  → Gera briefing completo (ver § 4 de referencia-prompt)        │
│  → Gera prompt estruturado para Claude Design (ver § 7)         │
│  ⚠ PONTO DE PAUSA — Murillo aprova briefing antes de continuar │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│  CLAUDE DESIGN                                                  │
│  → Recebe prompt estruturado de briefing-designer               │
│  → Gera mockup / componente / layout                            │
│  → Iterações até aprovação visual de Murillo                    │
│  ⚠ PONTO DE PAUSA — Murillo aprova resultado visual             │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│  VALIDAÇÃO VISUAL                                               │
│  diretor-visual-turismo                                         │
│  → Aplica critérios de § 8 de referencia-prompt-visual-murillo  │
│  → Aprova ou lista ajustes                                      │
│  → Se aprovado: handoff para programador                        │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│  IMPLEMENTAÇÃO                                                  │
│  programador-de-site                                            │
│  → Recebe: briefing aprovado + resultado Claude Design          │
│  → Implementa em Next.js (App Router, React, TypeScript, Tailwind)
│  → Consulta tabua-mares-turismo se passeio dependeDeMare: true  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4. Skills que Alimentam o Briefing para Claude Design

| Skill | O Que Entrega | Quando Entra |
|-------|--------------|-------------|
| `orquestrador-projeto-turismo` | Plano de execução aprovado, skills selecionadas | Sempre — ponto de entrada |
| `diretor-visual-turismo` | Padrão visual aprovado, componentes especificados, validação | Após wireframe; também na validação final |
| `briefing-designer` | Briefing completo + prompt estruturado para Claude Design | Após copy + wireframe + direção visual |
| `ux-ui-mobile-first` | Wireframe ASCII, comportamentos, responsividade | Em paralelo com copywriter |
| `copywriter-vendas` | Copy final aprovada por bloco de página | Em paralelo com ux-ui |
| `seo-local-turismo` | Keywords, meta description, schemas JSON-LD | Antes ou em paralelo com copywriter |
| `captura-referencias-visuais` | Referências organizadas em `_social/assets/` com contexto | Antes de briefing-designer |
| `tabua-mares-turismo` | Dados operacionais de maré para integração | Quando passeio tem `dependeDeMare: true` |

### Dependências do Pipeline Visual (Ordem)

```
orquestrador → [copywriter + ux-ui + seo em paralelo] → [diretor-visual + captura-refs em paralelo] → briefing-designer → Claude Design → validação → programador
```

**Regra:** `briefing-designer` nunca começa sem copy aprovada + wireframe. Claude Design nunca começa sem briefing aprovado por Murillo.

---

## 5. Saída Esperada do Pipeline Visual Completo

### 5.1 Briefing Visual Premium

Arquivo: `_pipeline/briefing-designer-[pagina]-[data].md`

Conteúdo mínimo:
- Executive summary (objetivo, persona, ação esperada)
- Especificação de todos os blocos da página
- Wireframe ASCII por breakpoint
- Componentes reutilizáveis com spec completa
- Comportamentos interativos
- Acessibilidade (WCAG AA)
- Restrições explícitas

### 5.2 Prompt para Claude Design

Arquivo: `_pipeline/prompt-claude-design-[pagina]-[data].md`

Estrutura conforme `_conhecimento/branding/referencia-prompt-visual-murillo.md § 7`:
- Contexto da marca (sempre incluso)
- Paleta (hex)
- Tipografia (família + peso + tamanho)
- Elemento a criar
- Objetivo do elemento
- Persona
- Responsividade
- Restrições
- Referências
- Resultado esperado

### 5.3 Checklist de Validação

Arquivo: `_pipeline/validacao-visual-[pagina]-[data].md`

Baseado em `referencia-prompt-visual-murillo.md § 8`:
- Critérios bloqueantes (5 itens)
- Critérios de qualidade (7 itens)
- Resultado: APROVADO / REQUER AJUSTES / REPROVADO
- Itens pendentes para Murillo

### 5.4 Handoff para Programador

Arquivo: `_pipeline/handoff-programador-[pagina]-[data].md`

Conteúdo:
- Link para resultado aprovado do Claude Design
- Componentes Next.js a criar ou atualizar
- Dados a adicionar em `data/passeios.ts` (se aplicável)
- Integração com tábua de marés (se `dependeDeMare: true`)
- Checklist de implementação técnica

---

## 6. Nomenclatura de Arquivos do Pipeline Visual

| Tipo | Pasta | Nome |
|------|-------|------|
| Briefing visual | `_pipeline/` | `briefing-designer-[pagina]-YYYY-MM-DD.md` |
| Prompt Claude Design | `_pipeline/` | `prompt-claude-design-[pagina]-YYYY-MM-DD.md` |
| Checklist validação | `_pipeline/` | `validacao-visual-[pagina]-YYYY-MM-DD.md` |
| Handoff programador | `_pipeline/` | `handoff-programador-[pagina]-YYYY-MM-DD.md` |
| Resultado Claude Design | `_pipeline/assets/` | `mockup-[pagina]-YYYY-MM-DD.[ext]` |

---

## 7. O Que NÃO Fazer Neste Fluxo

- ❌ Não chamar Claude Design sem briefing aprovado por Murillo
- ❌ Não acionar `programador-de-site` sem resultado visual aprovado (Claude Design ou wireframe)
- ❌ Não alterar `_site/` diretamente sem passar por `programador-de-site`
- ❌ Não usar Lovable enquanto estiver congelada — reavisar a decisão com Murillo primeiro
- ❌ Não inventar paleta nova, fonte nova ou componente visual sem base em `referencia-prompt-visual-murillo.md`
- ❌ Não gerar logo sem tarefa explícita de identidade visual aprovada por Murillo

---

*Versão: 1.0 | Criado: 2026-04-27 | Status: Claude Design ativa | Lovable congelada*
