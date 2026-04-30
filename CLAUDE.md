# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Identidade

**O que é este repositório:** Vault de IA da Vem Passear em Jampa — base de conhecimento estruturada para produzir conteúdo de site, copy de venda, SEO local e briefings para designer. Todo conteúdo passa pela revisão de Murillo (fundador) antes de publicar.

**O que NÃO é:** sistema autônomo de reservas ou envio direto de mensagens sem aprovação humana. **O que É TAMBÉM:** camada comercial assistida — IA rascunha qualificação, proposta, follow-up e objeção; Murillo aprova e envia. WhatsApp +55 83 9908-7830 é o canal central de conversão.

**Modelo central:** `Objetivo → Orquestrador → Pipeline → Skills → Resultado`

---

## Site — Comandos de Desenvolvimento

Todos os comandos rodam dentro de `_site/`:

```bash
cd _site
npm run dev          # Dev server em http://localhost:3000
npm run build        # Build de produção
npm run type-check   # Validação TypeScript (rodar antes de commitar)
npm run lint         # ESLint
```

---

## Site — Arquitetura

**Stack:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS

**Rota de passeio:** `app/passeios/[categoria]/[slug]/page.tsx` — template único para todos os passeios. Não criar arquivos por passeio.

**Fluxo de dados:** `_conhecimento/` → `data/passeios.ts` → componentes. Dados de passeio **nunca** são hardcoded em componentes.

**Tipos principais (`types/index.ts`):** `SeoMeta`, `Categoria`, `Depoimento`, `InfoCard`, `BreadcrumbItem`

**Interface `Passeio` (`data/passeios.ts`):** campos incluem `id`, `nome`, `categoria`, `slug`, `preco`, `duracao`, `saida`, `rotario` (array de strings), `incluso`, `faq` (`{pergunta, resposta}[]`), `depoimento` (`{texto, autor, avatar?}`). Atenção: o campo é `rotario` (não `roteiro`) — typo do codebase, não corrigir sem testar.

**Utilitários de SEO (`lib/seo.ts`):** `generateMetadata()`, `generateLocalBusinessSchema()`, `generateFAQSchema()`, `generateTouristAttractionSchema()`, `slugify()`, `gerarUrlPasseio()`. O domínio `SITE_URL` e o telefone estão marcados `[CONFIRMAR COM MURILLO]` — não alterar sem confirmação.

**Design tokens (Tailwind):**
- Primário: `#FF6B35` → `text-primary` / `bg-primary`
- Secundário: `#004E89` → `text-secondary` / `bg-secondary`
- Fontes: Inter (body), Lora (headings) via `next/font/google`
- Mobile-first: `md:` a 768px, `lg:` a 1024px — sempre partir de 320px

**Componentes existentes:** `HeroBlock`, `InfoCard`, `ButtonPrimary`, `FAQAccordion`. Vários blocos na `page.tsx` de passeio ainda são placeholders comentados — ver arquivo para ver o que falta implementar.

**CTA padrão:** toda página termina com CTA para WhatsApp. Nunca usar email como canal único.

---

## Vault — Fluxo de Trabalho (Sessão)

```
/abrir-sessao    # Lê _memoria/ — rodar sempre primeiro
/fechar-sessao   # Salva estado em _memoria/ — rodar antes de encerrar
```

1. Abrir sessão
2. Ler `_conhecimento/` para fatos comprovados
3. **Objetivo envolve 2+ skills?** → acionar `orquestrador-projeto-turismo` primeiro; ele gera plano para aprovação antes de qualquer execução. **1 skill apenas?** → ir direto à skill.
4. Produzir entrega com lacunas `[CONFIRMAR COM MURILLO: ...]`
5. Citar qual arquivo de `_conhecimento/` foi a fonte
6. Aguardar revisão de Murillo
7. Fechar sessão

---

## Vault — Hierarquia de Fontes de Verdade

| Nível | Localização | Regra |
|-------|-------------|-------|
| 1 — fixo | `_conhecimento/` | Só muda com confirmação explícita de Murillo |
| 2 — vivo | `_memoria/` | Atualizar ao fim de cada sessão |
| 3 — entrega | `_site/planejamento/`, `_pipeline/` | Em desenvolvimento, aguardando aprovação |

**Consulta obrigatória antes de qualquer conteúdo de passeio:**
1. `_conhecimento/passeios.md` → índice e dados de referência
2. `_conhecimento/catalogo_vempassear_estruturado.md` → preço, roteiro, duração, saída
3. `_conhecimento/empresa.md` → CNPJ, Cadastur, fatos institucionais

**Campos que NUNCA se inventa:** preço, roteiro/itinerário, duração, ponto de embarque, depoimentos, parcerias.

---

## Vault — Orquestrador e Skills

### Ponto de Entrada: Orquestrador

| Componente | Papel |
|-----------|-------|
| `orquestrador-projeto-turismo` | **Camada de decisão central.** Recebe objetivos, seleciona skills necessárias, define ordem (sequencial/paralelo) e devolve **plano para aprovação antes de executar**. Nunca executa entregas — apenas planeja. |

**Regras do orquestrador:**
- Acionar sempre que o objetivo envolver 2+ skills ou for vago ("criar página", "campanha X")
- Ir direto à skill apenas quando o objetivo envolve claramente 1 skill ("gera schema FAQ")
- Consultar `skills/orquestrador-projeto-turismo/SKILL.md` antes de objetivos amplos
- O orquestrador gera plano → Murillo aprova → skills executam

### Skills Especializadas (10)

**Pipeline de Site:**

| Skill | Responsabilidade | Saída |
|-------|-----------------|-------|
| `estrategista-de-site` | Arquitetura, URLs, CRO, jornadas | Árvore de URLs, fluxos, blocos CRO |
| `ux-ui-mobile-first` | Wireframe visual, responsividade | Wireframe textual, componentes, breakpoints |
| `copywriter-vendas` | Copy AIDA que converte | Blocos de copy, FAQ, provas de confiança |
| `seo-local-turismo` | Busca local, schemas | Keywords, meta tags, JSON-LD |
| `briefing-designer` | Comunicar ao designer | Specs visuais, componentes, Figma |
| `programador-de-site` | Implementar em Next.js | Páginas, componentes, SEO técnico |

**Pipeline Social (Pipeline E):**

| Skill | Responsabilidade | Saída |
|-------|-----------------|-------|
| `radar-concorrentes-social` | Monitorar e analisar concorrentes | Relatório de gaps e oportunidades |
| `captura-referencias-visuais` | Capturar e organizar referências | Assets em `_social/assets/` com metadados |
| `diretor-visual-turismo` | Validar padrão visual | Guia visual, paleta aprovada, direção |
| `social-media-editorial-turismo` | Calendário e pautas Instagram | Calendário editorial, pautas detalhadas |

Cada skill tem `SKILL.md` próprio em `skills/[nome]/`. Consultar antes de acionar.

**Fluxo típico de site:** Estrategista → (UX/UI + Copywriter em paralelo) → SEO → Briefing → Programador

---

## Regras de Conteúdo

### Tom e Voz
- Acolhedor, local, humano — não corporativo
- Nordestino sem caricatura — autenticidade sem clichê
- Orientador, não vendedor — ajuda o turista a decidir
- Sem urgência falsa ("ÚLTIMAS VAGAS", "só hoje")

### O Que Evitar
- Clichê turístico: "paraíso tropical", "magia das areias", "cartão postal"
- Copy genérica: qualquer frase que funcionaria em Natal, Recife ou Fortaleza
- Promessa vaga: sempre específico (qual praia, qual atividade, qual horário)

### Regras de SEO Local
- Incluir "João Pessoa" no H1 ou meta description sempre que não estiver no slug
- H1 único, H2 para seções, H3 para subseções — estrutura semântica clara
- Meta description com CTA: "Descubra [X] em João Pessoa. Agende seu passeio →"
- `alt` descritivo em todas as imagens: o que está na cena + contexto local
- Schemas: `LocalBusiness` + `TouristAttraction` + `FAQPage` (gerados por `lib/seo.ts`)

---

## Regra Ouro

> **Nunca invente fato sobre empresa, passeio, preço, prazo, parceria ou depoimento.**
> Se não está em `_conhecimento/` e Murillo não confirmou, marque `[CONFIRMAR COM MURILLO: ...]` e pare.

---

## Modelos de IA

| Tarefa | Modelo |
|--------|--------|
| Padrão (99% do trabalho) | Sonnet 4.6 |
| Decisões estratégicas complexas | Opus 4.7 |
| Tarefas mecânicas triviais | Haiku 4.5 |

Stack do site é Next.js — não Wix, WordPress ou Webflow.

---

## Aprendizado Contínuo

Após cada execução, registrar em `_conhecimento/`:

```markdown
## Aprendizado — [data] — [tema]
- **Funcionou:** [o que]
- **Falhou:** [o que e por quê]
- **Ajuste:** [mudança proposta]
```

Atualizar `_memoria/decisoes-estrategicas.md` se uma decisão de conteúdo mudou. Atualizar `_memoria/proximos-passos.md` se surgiu nova prioridade.

---

*Versão: 2.1 | Atualizado: 2026-04-26 | Fase: 1 (Site e SEO Local)*
