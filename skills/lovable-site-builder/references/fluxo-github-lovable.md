# Fluxo GitHub ↔ Lovable ↔ Claude Code

**Uso:** Guia de como Lovable, GitHub e Claude Code trabalham juntos — responsabilidades de cada um e o que revisar em cada etapa.
**Princípio:** Lovable gera a interface visual. GitHub mantém o histórico e a fonte de verdade do código. Claude Code revisa, integra e garante qualidade antes de qualquer coisa ir para produção.

---

## Visão Geral do Fluxo

```
CEREBRO.JAMPA (vault)
        │
        ▼
lovable-site-builder
(monta pacote + prompt)
        │
        ▼
Murillo cola prompt
no Lovable.dev
        │
        ▼
Lovable gera interface visual
        │
        ▼
Murillo revisa visualmente
(checklist-validacao-lovable.md)
        │
   ┌────┴────────────────┐
   │ Aprovado            │ Ajustar
   ▼                     ▼
GitHub (export)    Ajuste no Lovable
        │
        ▼
Claude Code revisa código
(skill: programador-de-site)
        │
   ┌────┴────────────────┐
   │ Aprovado            │ Corrigir
   ▼                     ▼
Integrar em _site/    Corrigir + re-exportar
(Next.js oficial)
        │
        ▼
Build + Type Check
npm run type-check
npm run build
        │
        ▼
Deploy (Vercel ou equivalente)
```

---

## Responsabilidades por Ferramenta

### Lovable.dev — Faz

- Gera interface visual a partir do prompt
- Protótipo funcional para validação visual
- Estrutura HTML/CSS básica dos blocos
- Layout responsivo visual (ajustar com Template E se necessário)
- Exporta código para GitHub

### Lovable.dev — NÃO Faz / NÃO Deixar Fazer

| Proibição | Motivo |
|-----------|--------|
| Alterar lógica de maré (`lib/tabua-mares.ts`) | Lógica crítica e auditada — qualquer toque quebra validação |
| Alterar `data/passeios.ts` | Fonte de dados oficial — mudanças só pelo vault |
| Alterar `data/tabua-mares.ts` | Dados operacionais com `revisadoPorMurillo` — intocável |
| Alterar `lib/seo.ts` | Funções de schema e SEO técnico — só via Claude Code |
| Gerar schemas JSON-LD | Lovable não conhece as regras de schema do projeto |
| Criar novas rotas (app/) | Roteamento é definido pela arquitetura Next.js do projeto |
| Adicionar bibliotecas externas sem revisão | Pode conflitar com dependências existentes |
| Hardcodar dados operacionais (preços, datas, WhatsApp) | Dados vêm do vault — hardcode é fonte de inconsistência |

---

### GitHub — Papel

- **Histórico de todas as versões** — incluindo o que o Lovable gerou
- **Ponto de integração** — onde código Lovable encontra código Next.js
- **Branch de revisão** — criar branch separada para código Lovable antes de integrar em `main`
- **Auditoria** — Claude Code revisa o diff gerado pelo Lovable antes de merge

**Fluxo de branches recomendado:**

```
main (produção)
  └── lovable/[nome-da-pagina]-YYYY-MM-DD
        └── (código exportado do Lovable)
              └── revisado pelo Claude Code
                    └── merge para main após aprovação
```

---

### Claude Code — Papel na Revisão

Após exportação do Lovable para GitHub, Claude Code (com skill `programador-de-site`) revisa:

#### O Que Revisar

| Área | O Que Checar |
|------|--------------|
| **Componentes** | Lovable criou componentes novos? São compatíveis com os existentes (HeroBlock, InfoCard, FAQAccordion, ButtonPrimary, ProximaSaidaCard)? |
| **Dados** | Lovable hardcodou algum dado que deveria vir de `data/passeios.ts` ou `data/tabua-mares.ts`? |
| **SEO** | Lovable gerou `<head>` com meta tags? Se sim, compatível com `generateMetadata()` de `lib/seo.ts`? |
| **Schema** | Lovable gerou JSON-LD? Se sim, revisar — provavelmente precisa ser substituído pelo schema de `lib/seo.ts` |
| **TypeScript** | O código passa em `npm run type-check`? |
| **Tailwind** | Classes usadas estão no `tailwind.config.js` do projeto? Não criou CSS-in-JS ou styled-components? |
| **WhatsApp** | Link WhatsApp usa `https://wa.me/558399087830` (correto) ou gerou outro número? |
| **Maré** | Qualquer dado de maré está hardcodado? Se sim, substituir por chamada ao `getProximaSaida()` |
| **Performance** | Iframes (360°) carregam automaticamente? Devem ser lazy (clique do usuário) |

#### O Que NÃO Reescrever

- Layout visual que Murillo aprovou na checklist — não alterar sem motivo técnico
- Copy aprovada — não reescrever durante revisão de código
- Estrutura de blocos aprovada — não reordenar durante revisão

---

## Handoff Padrão (Entrega 5 da Skill)

Quando `lovable-site-builder` entrega o pacote, o Handoff para Claude Code tem este formato:

```markdown
# Handoff para Claude Code — Revisão Pós-Lovable

**Página:** [nome da página]
**Branch a criar:** lovable/[slug]-YYYY-MM-DD
**Exportado do Lovable em:** [data]
**Checklist de validação:** [aprovada por Murillo em: data]

## O Que o Lovable Gerou
- Componentes novos: [lista ou "nenhum"]
- Estilos: [Tailwind / CSS puro / misto]
- Dados hardcodados (verificar): [lista ou "nenhum identificado"]
- Schema JSON-LD: [presente / ausente]

## Checklist de Revisão Claude Code

### Obrigatório (não integrar sem resolver)
- [ ] `npm run type-check` passa sem erros
- [ ] `npm run build` completa sem erros
- [ ] Link WhatsApp = `https://wa.me/558399087830`
- [ ] Nenhum dado de maré hardcodado
- [ ] Schema JSON-LD compatível com `lib/seo.ts` (ou ausente e a ser adicionado)
- [ ] Nenhum componente duplica o que já existe em `components/`

### Importante (resolver antes de merge)
- [ ] Dados do passeio vêm de `data/passeios.ts` (não hardcodados)
- [ ] Classes Tailwind compatíveis com `tailwind.config.js`
- [ ] Iframe 360° (se houver): só instancia após clique do usuário
- [ ] `generateMetadata()` de `lib/seo.ts` cobre o `<head>` da página

### Handoff de Integração
Após aprovação: merge `lovable/[slug]` → `main`
Responsável pela revisão: Claude Code + programador-de-site
Responsável pelo merge: Murillo

## Lacunas que Precisam de Implementação Adicional
- [ ] Schema JSON-LD: adicionar via `lib/seo.ts` após merge
- [ ] ProximaSaidaCard: conectar a `getProximaSaida()` após merge
- [ ] [outras lacunas técnicas identificadas]
```

---

## Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Lovable hardcoda dados de maré | Alta | Alto | Checar obrigatório na revisão Claude Code — substituir por `getProximaSaida()` |
| Lovable gera schema JSON-LD incorreto | Média | Alto | Substituir pelo schema de `lib/seo.ts` após merge |
| Lovable adiciona biblioteca CSS que conflita com Tailwind | Média | Médio | Remover durante revisão e replicar estilo em Tailwind puro |
| Copy inventada pelo Lovable (sem usar o prompt) | Baixa | Alto | Conferir cada texto contra o Pacote de Dados antes de aprovar |
| WhatsApp com número errado | Baixa | Crítico | Item 3.1 da checklist — crítico |
| Iframe 360° carregando automaticamente | Alta | Médio | Item 10.1 da checklist — crítico para performance |
| Lovable altera arquivos de dados ou lib | Muito baixa | Crítico | Verificar diff do GitHub antes de qualquer merge |

---

## Regra de Ouro

> **O Lovable cria a interface. O CEREBRO.JAMPA define o conteúdo. O Claude Code garante a qualidade.**
>
> Nenhum código gerado pelo Lovable vai para produção sem passar pela revisão do Claude Code com `programador-de-site`.
> Nenhum dado gerado pelo Lovable substitui o vault — CEREBRO.JAMPA é e sempre será a fonte da verdade.

---

*Versão: 1.0 | Criado: 2026-04-27 | Skill: lovable-site-builder*
