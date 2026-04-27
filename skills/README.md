# Skills — Vem Passear em Jampa

```
Objetivo → Orquestrador → Pipeline → Skills → Resultado
```

Toda entrega segue esse fluxo. O orquestrador recebe o objetivo, escolhe o pipeline, sequencia as skills, e devolve plano para aprovação antes de qualquer execução.

---

## Ponto de Entrada: Orquestrador

Quando o objetivo envolve 2+ skills ou não sabe por onde começar:

```
→ skills/orquestrador-projeto-turismo/SKILL.md
```

O orquestrador recebe o objetivo, seleciona o pipeline correto, define ordem e dependências, e devolve um plano para aprovação antes de qualquer execução.

---

## Inventário de Skills (11 ativas)

### Skills de Site (7)

| # | Skill | Responsabilidade | Entrada chave | Saída |
|---|-------|-----------------|---------------|-------|
| 1 | `estrategista-de-site` | Arquitetura, URLs, CRO, jornadas | `clusters-seo.md`, `passeios.md` | Árvore de URLs, jornadas, navegação |
| 2 | `ux-ui-mobile-first` | Wireframe textual, responsividade, acessibilidade | Copy aprovada + objetivo da página | Wireframe 3-breakpoint, diagrama ASCII |
| 3 | `copywriter-vendas` | Copy AIDA, headline, FAQ, CTA | `passeios.md`, `tom-de-voz.md` | Copy completo por seções |
| 4 | `seo-local-turismo` | Keywords, meta tags, schema, links internos | Copy aprovada, `clusters-seo.md` | Schema JSON-LD, meta tags, alt text |
| 5 | `briefing-designer` | Especificação para designer executar | Copy + wireframe + direção visual | Briefing com blocos, componentes, restrições |
| 6 | `programador-de-site` | Implementação Next.js | Copy + UX + design + SEO checklist | Páginas `.tsx`, componentes, dados estruturados |
| 7 | `diretor-visual-turismo` | Padrões visuais, crítica de layout, conversão visual | Wireframe ou referência para validar | Validação, especificação de componente |

### Skills de Social Media (3)

| # | Skill | Responsabilidade | Entrada chave | Saída |
|---|-------|-----------------|---------------|-------|
| 8 | `radar-concorrentes-social` | Inteligência competitiva, trends, gaps | `concorrentes.md`, `instagram-benchmark.md` | Relatório com oportunidades para Vem Passear |
| 9 | `captura-referencias-visuais` | Captura e organização de referências visuais | Objetivo + fonte | Arquivo de mídia + `.md` de contexto |
| 10 | `social-media-editorial-turismo` | Calendário editorial, pautas de stories/reels/carrosséis | `tom-de-voz.md`, `passeios.md`, insights de radar | Calendário + pautas estruturadas |

### Skills Operacionais (1)

| # | Skill | Responsabilidade | Entrada chave | Saída |
|---|-------|-----------------|---------------|-------|
| 11 | `tabua-mares-turismo` | **Inteligência de maré + importação futura automatizada.** Orienta importador automático CHM (Porto de Cabedelo/PB), calcula saída (`baixa-mar da manhã − 1h`), classifica status, gera janelas/ciclos, alimenta cards com próxima saída automática e apoia SEO de maré baixa. Coleta automática é o caminho principal; manual é fallback. | Tábua oficial CHM (importador) ou dados manuais de Murillo | `data/tabua-mares.ts`, calendário, FAQ schema, spec de importador, handoff para programador |

---

## Pipelines Canônicos

| Pipeline | Objetivo | Skills envolvidas |
|----------|----------|-------------------|
| **A** | Criar página de passeio | 1 → 2a+3 → 7 → 4 → 5 → designer → 6 |
| **B** | Criar página de categoria | 1 → 2 → 4 → 3 → 7 → 5 → designer → 6 |
| **C** | Otimizar SEO de página existente | 4 → 3 (condicional) → 6 |
| **D** | Briefar designer para campanha visual | 9 → 7 → 5 |
| **E** | Criar campanha Instagram | 8 → 9 → 7 → 10 |
| **F** | Pesquisa / inteligência | 8 → 9 (opcional) |
| **G** | Objetivo custom (não cobre A–F) | Orquestrador define |

---

## Fluxo de Execução

### Pipelines de Site (A e B)

```
estrategista-de-site
        ↓
   ┌────┴────┐
   ↓         ↓
copywriter  ux-ui-mobile-first
   └────┬────┘
        ↓
diretor-visual-turismo
        ↓
   ┌────┴────┐
   ↓         ↓
seo-local  briefing-designer
turismo         ↓
   │         designer (Figma)
   └────┬────┘
        ↓
programador-de-site
```

**Paralelo permitido:** `copywriter-vendas` + `ux-ui-mobile-first` (após estrategista)
**Sequencial obrigatório:** estrategista → (copy + UX) → visual → briefing → (SEO + design) → programador

### Pipeline de Social (E)

```
radar-concorrentes-social
        ↓
captura-referencias-visuais
        ↓
diretor-visual-turismo
        ↓
social-media-editorial-turismo
        ↓
designer social → Murillo publica
```

---

## Gatilhos Rápidos

| Objetivo | Skill de entrada |
|----------|-----------------|
| Criar estrutura de site / revisar arquitetura | `estrategista-de-site` |
| Escrever copy para página ou passeio | `copywriter-vendas` |
| Definir layout mobile-first | `ux-ui-mobile-first` |
| Ranquear no Google | `seo-local-turismo` |
| Briefar designer | `briefing-designer` |
| Implementar em Next.js | `programador-de-site` |
| Crítica ou padrão visual | `diretor-visual-turismo` |
| O que concorrentes fazem no Instagram | `radar-concorrentes-social` |
| Guardar referência visual | `captura-referencias-visuais` |
| Criar pauta ou calendário Instagram | `social-media-editorial-turismo` |
| Tábua de marés, maré baixa, calendário de saídas | `tabua-mares-turismo` |
| Próxima saída automática (Seixas/Picãozinho/Areia Vermelha) | `tabua-mares-turismo` |
| SEO de maré baixa, "tábua de marés João Pessoa" | `tabua-mares-turismo` |
| Piscinas naturais — disponibilidade e janelas/ciclos | `tabua-mares-turismo` |
| Não sei por onde começar | `orquestrador-projeto-turismo` |

---

## Regras Gerais

✅ Cada skill faz uma coisa — não invade responsabilidade de outra
✅ Consulta `_conhecimento/` como fonte de verdade antes de produzir
✅ Saída é acionável — próxima skill consegue pegar e rodar
✅ Lacunas marcadas com `[CONFIRMAR COM MURILLO: ...]`
✅ Regras do orquestrador em `_memoria/regras-orquestrador.md`

❌ Nunca inventa preço, roteiro, duração ou ponto de saída de passeio
❌ Nunca executa sem aprovação de Murillo (para entregas de produção)

---

## Skills Descontinuadas

| Skill | Status | Motivo |
|-------|--------|--------|
| `arquiteto-de-conteudo` | Arquivada 2026-04-25 | Sobreposição com `estrategista-de-site` |

---

*v4.1 | Atualizado 2026-04-26 | 11 skills ativas + 1 orquestrador | Pipelines A–G*
