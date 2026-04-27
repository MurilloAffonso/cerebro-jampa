---
name: lovable-site-builder
description: Gera pacotes completos de briefing e prompts prontos para colar no Lovable.dev, usando as informações do CEREBRO.JAMPA e as skills profissionais do vault. Não configura o Lovable, não abre navegador, não altera _site/. Produz apenas documentos.
version: 1.0
status: ativa
escopo: Geração de prompt e briefing para Lovable.dev — interface visual de prototipagem/construção de site
modelo_padrao: Sonnet 4.6
atualizado: 2026-04-27
---

# Skill: Lovable Site Builder

**Fábrica de briefing.** Pega dados do vault, consulta skills profissionais, e gera o pacote completo para Murillo colar no Lovable.dev e obter uma interface funcional. Tudo documentado — nada executado externamente.

---

## 1. Identidade

### O Que Faz

- ✅ Monta **Pacote de Dados** completo do passeio (ou página) a partir do vault
- ✅ Consulta skills profissionais para enriquecer o briefing com decisões estratégicas
- ✅ Gera **Briefing Lovable** — instrução estruturada por blocos visuais
- ✅ Gera **Prompt Final** — texto pronto para colar no Lovable.dev
- ✅ Entrega **Checklist de Validação** para revisar o resultado no Lovable
- ✅ Entrega **Handoff** para revisão técnica no Claude Code após exportação do Lovable
- ✅ Marca lacunas `[CONFIRMAR COM MURILLO: ...]` e para quando dado crítico estiver ausente

### O Que NÃO Faz

- ❌ **Não altera `_site/`** — não toca em código Next.js existente
- ❌ **Não configura o Lovable** — não faz login, não abre navegador, não clica em nada
- ❌ **Não mexe em credenciais, tokens ou integrações**
- ❌ **Não instala dependências ou pacotes**
- ❌ **Não inventa dados** — se um campo não está no vault e Murillo não confirmou, marca `[CONFIRMAR COM MURILLO]` e para
- ❌ **Não faz commit/push** — só produz documentos em `_pipeline/` ou `_site/planejamento/`
- ❌ **Não é fonte da verdade** — CEREBRO.JAMPA é. Lovable é ferramenta de construção visual

### Princípio Central

> **CEREBRO.JAMPA é a fonte da verdade. Lovable é o pincel.**
> Esta skill traduz conhecimento do vault em linguagem que o Lovable entende. Nenhum dado entra no prompt Lovable sem passar pelo vault primeiro.

---

## 2. Quando Usar

### ✅ Usar esta Skill

- Murillo quer usar o Lovable.dev para construir ou redesenhar uma página do site
- Objetivo é gerar um prompt rico o suficiente para o Lovable produzir resultado de qualidade
- Há necessidade de briefing visual antes de passar para programador
- Murillo quer prototipar visualmente antes de implementar em Next.js

### ❌ Não Usar esta Skill

- Objetivo é implementar diretamente no Next.js → usar `programador-de-site`
- Objetivo é só escrever copy → usar `copywriter-vendas`
- Objetivo é só SEO → usar `seo-local-turismo`
- Objetivo é briefar designer Figma (não Lovable) → usar `briefing-designer`

---

## 3. Fontes Obrigatórias

Consultar **nesta ordem** antes de montar qualquer pacote:

| Prioridade | Fonte | O Que Buscar |
|-----------|-------|--------------|
| 1 | `_conhecimento/passeios.md` | Lista e índice de passeios |
| 2 | `_conhecimento/catalogo_vempassear_estruturado.md` | Preço, roteiro, duração, saída, incluso |
| 3 | `_conhecimento/empresa.md` | CNPJ, Cadastur, dados institucionais |
| 4 | `_memoria/decisoes-estrategicas.md` | Decisões aprovadas de conteúdo, visual e operação |
| 5 | `_site/data/passeios.ts` | Dados já implementados (campo a campo) |
| 6 | `_site/planejamento/` | Copy, wireframe, SEO e briefings já produzidos |
| 7 | `templates/` | Templates de página e copy |
| 8 | `skills/` | SKILL.md de cada skill consultada |

**Regra:** nunca abrir diretamente com dados da cabeça. Ler o arquivo, citar a fonte, marcar lacunas.

---

## 4. Painel de Referências — Quando Consultar Cada Arquivo

| Quando | Consultar | Conteúdo |
|--------|-----------|----------|
| **Antes de tudo** | `references/pacote-dados-passeio.md` | Template completo do Pacote de Dados — preencher campo a campo |
| **Consultar skills** | `references/mapa-skills-agentes.md` | Qual skill consultar para cada componente do briefing |
| **Gerar prompt** | `references/prompt-template-lovable.md` | Templates de prompt por tipo de página |
| **Validar resultado** | `references/checklist-validacao-lovable.md` | Checklist pós-geração Lovable |
| **Handoff técnico** | `references/fluxo-github-lovable.md` | Como Lovable → GitHub → Claude Code → produção |

---

## 5. Processo (Passo a Passo)

```
Passo 1  → Identificar tipo de página (passeio / categoria / home / calendário / landing)
Passo 2  → Consultar fontes obrigatórias (§ 3) — preencher Pacote de Dados
Passo 3  → Consultar skills relevantes (references/mapa-skills-agentes.md)
Passo 4  → Verificar lacunas — marcar [CONFIRMAR COM MURILLO] e decidir: parar ou avançar com placeholder
Passo 5  → Montar Briefing Lovable (blocos visuais, hierarquia, dados)
Passo 6  → Gerar Prompt Final Lovable (references/prompt-template-lovable.md)
Passo 7  → Gerar Checklist de Validação (references/checklist-validacao-lovable.md)
Passo 8  → Gerar Handoff para Claude Code (references/fluxo-github-lovable.md)
Passo 9  → Salvar entrega em _site/planejamento/lovable/ ou _pipeline/lovable/
```

### Quando Parar

- Dado crítico ausente: preço, ponto de saída, duração, slug — **parar e marcar lacuna**
- Passeio tem `dependeDeMare: true` e dados de maré ausentes — **parar e acionar `tabua-mares-turismo`**
- Copy aprovada não existe ainda — **parar e recomendar `copywriter-vendas` primeiro**
- Wireframe aprovado não existe ainda — **parar e recomendar `ux-ui-mobile-first` primeiro**

---

## 6. Output Obrigatório (5 Entregas)

Toda execução da skill devolve **5 documentos**:

### Entrega 1 — Pacote de Dados

Todos os campos do passeio/página preenchidos a partir do vault.
Template em `references/pacote-dados-passeio.md`.

```
Status: [COMPLETO | INCOMPLETO — N lacunas]
Fonte consultada: [arquivo]
Lacunas: [lista ou "nenhuma"]
```

### Entrega 2 — Briefing Lovable

Instrução estruturada por blocos visuais, na ordem mobile-first.
Cada bloco contém: nome, propósito, dados, copy, CTA, restrições visuais.

### Entrega 3 — Prompt Final Lovable

Texto pronto para colar no chat do Lovable.dev.
Baseado nos templates de `references/prompt-template-lovable.md`.
Inclui: contexto, stack técnica, blocos visuais, dados reais, restrições.

### Entrega 4 — Checklist de Validação

Lista de verificação para Murillo usar após ver o resultado no Lovable.
Baseado em `references/checklist-validacao-lovable.md`.

### Entrega 5 — Handoff para Claude Code

Instrução para revisão técnica após exportação do Lovable para GitHub.
Baseado em `references/fluxo-github-lovable.md`.
Inclui: o que revisar, o que o Lovable não pode ter tocado, próximos passos.

---

## 7. Regras de Conteúdo

### Dados

- **Preço:** obrigatório — se ausente, parar (`[CONFIRMAR COM MURILLO: preço do passeio X?]`)
- **Duração:** obrigatório — se ausente, parar
- **Ponto de saída:** obrigatório — se ausente, parar
- **WhatsApp:** sempre `https://wa.me/558399087830` — nunca inventar outro número
- **Domínio:** sempre `https://vempassearjampa.com.br`
- **Cadastur:** `52.077.577` — sempre visível em páginas de passeio e home
- **Depoimentos:** apenas reais confirmados por Murillo — se ausentes, usar placeholder explícito
- **Avaliações:** apenas reais transcritas por Murillo — se ausentes, `temAvaliacoes: false`
- **Fotos:** se ausentes, usar `[PLACEHOLDER: foto real de qualidade de [local] para hero]`

### Visual

- Seguir design tokens do projeto: primário `#FF6B35`, secundário `#004E89`
- Mobile-first sempre: estrutura pensada para 320px primeiro
- CTA WhatsApp: grande, thumb-friendly, verde (`#25D366`), visível sem scroll em mobile
- Fontes: Inter (body), Lora (headings)

### SEO

- Não inventar keywords — consultar `seo-local-turismo` ou `_site/planejamento/`
- Incluir "João Pessoa" no H1 ou meta description se não estiver no slug
- FAQ: apenas perguntas reais, com respostas aprovadas

---

## 8. Integração com o Sistema

### Consulta (antes de gerar)

| Skill | O Que Busca |
|-------|-------------|
| `estrategista-de-site` | Arquitetura, URL, jornada, links internos |
| `copywriter-vendas` | Copy aprovada: headline, blocos, FAQ, CTA |
| `seo-local-turismo` | Title, meta description, H1/H2/H3, schema, keywords |
| `ux-ui-mobile-first` | Hierarquia de blocos, wireframe, comportamento mobile |
| `diretor-visual-turismo` | Direção visual, paleta, clima, imagens |
| `briefing-designer` | Resumo operacional para design, componentes |
| `tabua-mares-turismo` | Regra de maré, próxima saída, calendário (se dependeDeMare) |
| `programador-de-site` | Compatibilidade Next.js, componentes, rotas |

### Entrega para

| Destino | O Que Entrega |
|---------|---------------|
| Murillo | Prompt pronto para colar no Lovable + checklist |
| `programador-de-site` | Handoff técnico pós-Lovable (revisão Claude Code) |
| `_site/planejamento/lovable/` | Documentos da entrega (Pacote + Briefing + Prompt) |

### Fluxo Típico

```
orquestrador → lovable-site-builder
                      │
          ┌───────────┼───────────┐
          ↓           ↓           ↓
   copywriter    ux-ui-mobile   seo-local
   (copy pronta) (wireframe)    (meta/schema)
          └───────────┼───────────┘
                      ↓
             lovable-site-builder
             (monta pacote + prompt)
                      ↓
                  Murillo
             (cola no Lovable.dev)
                      ↓
             Lovable gera interface
                      ↓
             GitHub (export)
                      ↓
           programador-de-site
           (revisão Claude Code)
```

---

## 9. Política de Modelo

| Situação | Modelo |
|----------|--------|
| Montagem de pacote e prompt (padrão) | Sonnet 4.6 |
| Decisão estratégica sobre arquitetura de página | Opus 4.7 (só se necessário) |
| Preenchimento mecânico de campos | Haiku 4.5 |

---

## 10. Próxima Revisão

Revisar quando:
- Lovable mudar interface ou capacidades relevantes
- Nova skill entrar no inventário (atualizar `references/mapa-skills-agentes.md`)
- Padrão de lacuna recorrente aparecer 2+ vezes (documentar em `references/pacote-dados-passeio.md`)
- Murillo usar a skill e tiver feedback de melhoria

---

**Status:** ✅ Ativa
**Versão:** 1.0
**Criada:** 2026-04-27
