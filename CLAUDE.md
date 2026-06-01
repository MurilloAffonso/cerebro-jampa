# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Identidade

**O que é este repositório:** Vault de IA da Vem Passear em Jampa — base de conhecimento estruturada para produzir conteúdo de site, copy de venda, SEO local e briefings para designer. Todo conteúdo passa pela revisão de Murillo (fundador) antes de publicar.

**O que NÃO é:** sistema autônomo de reservas ou envio direto de mensagens sem aprovação humana. **O que É TAMBÉM:** camada comercial assistida — IA rascunha qualificação, proposta, follow-up e objeção; Murillo aprova e envia. WhatsApp +55 83 99908-7830 é o canal central de conversão.

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
- Primário: `#107997` (teal) → `text-primary` / `bg-primary` — paleta v2 aprovada 2026-05-09 (ver decisão 41 em `_memoria/decisoes-estrategicas.md`)
- Secundário: `#092238` (navy profundo) → `text-secondary` / `bg-secondary`
- Accent (hover do primary): `#0E8FA8` → `text-accent` / `bg-accent`
- Fundo alternado: `#F7F8F7` → `bg-soft` / `bg-warm`
- Fontes: DM Sans (body), Lora (headings) via `next/font/google`
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

### Skills Especializadas (21)

**Fonte de verdade:** `skills/manifest.json` — registro canônico (id, categoria, papel, status, risco, gatilhos, arquivos relacionados, pipeline). Cada skill tem `SKILL.md` próprio em `skills/[nome]/`. Visão humana em `skills/README.md`.

**Pipeline de Site (7):**

| Skill | Responsabilidade |
|-------|-----------------|
| `estrategista-de-site` | Arquitetura, URLs, CRO, jornadas |
| `ux-ui-mobile-first` | Wireframe visual, responsividade, WCAG AA |
| `copywriter-vendas` | Copy AIDA, FAQ, provas de confiança |
| `seo-local-turismo` | Keywords, meta tags, JSON-LD |
| `diretor-visual-turismo` | Padrão visual, crítica de layout |
| `briefing-designer` | Specs para designer executar em Figma |
| `programador-de-site` | Implementação Next.js (App Router, TS, Tailwind) |

**Pipeline Social (3):**

| Skill | Responsabilidade |
|-------|-----------------|
| `radar-concorrentes-social` | Inteligência competitiva, gaps |
| `captura-referencias-visuais` | Biblioteca de referências com metadados |
| `social-media-editorial-turismo` | Calendário e pautas Instagram |

**Squad Comercial (7):**

| Skill | Responsabilidade |
|-------|-----------------|
| `agente-comercial-jampa` | Router do squad — recebe objetivo e direciona |
| `qualificacao-lead` | Ficha estruturada do lead em 7 campos |
| `proposta-passeio` | Proposta WhatsApp personalizada |
| `objecoes-turismo-jampa` | Resposta empática a objeção recorrente |
| `follow-up-comercial` | T1-T4 em 5 dias para lead sem resposta |
| `agente-atendimento-pre-passeio` | Mensagem D-1 (embarque, horário, o que levar) |
| `agente-pos-venda` | D+1 agradecimento + D+3 pedido de avaliação |

**Operacional / Dados (2) + Experimental (1) + Orquestrador (1):**

| Skill | Responsabilidade |
|-------|-----------------|
| `tabua-mares-turismo` | Inteligência de maré, importação CHM, próxima saída |
| `painel-kpi-vempassear` | Relatório semanal de 5 KPIs (sexta 17h) |
| `lovable-site-builder` | Briefing + prompt para Lovable.dev (experimental) |
| `orquestrador-projeto-turismo` | Camada de decisão central, gera plano para aprovação |

**Fluxo típico de site:** Estrategista → (UX/UI + Copywriter em paralelo) → Diretor Visual → SEO + Briefing → Programador

**Validação:** rodar `node _automacao/scripts/jampa-doctor.mjs` antes de commit que toque em `skills/` ou `_automacao/schemas/`. Doc: `_automacao/scripts/jampa-doctor.md`.

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

## Protocolo de Execução Disciplinada

Aplica-se a toda skill que altera arquivo (especialmente `programador-de-site`, `orquestrador-projeto-turismo`, automação Jarvis).

1. **Pensar antes de alterar.** Surface premissas, declare o que assume. Se confuso, perguntar — não adivinhar. Skills de site lêem `_conhecimento/` antes de escrever.
2. **Simplicidade primeiro.** Mínimo de código, sem abstração especulativa. Três linhas parecidas é melhor que abstração prematura. Sem feature flag para cenário hipotético.
3. **Mudanças cirúrgicas.** Tocar apenas o pedido. Match do estilo existente. Limpar só o próprio resto. Não refatorar de carona.
4. **Validar contra objetivo.** Definir critério de sucesso verificável antes de começar (type-check, doctor, linha de copy específica). Comparar entrega com critério antes de declarar concluído.

---

## Protocolo Econômico de Execução

- Não repetir contexto já documentado no projeto.
- Antes de responder, consultar arquivos relevantes quando necessário.
- Executar somente a issue ou tarefa solicitada.
- Não abrir discussão longa se a decisão já estiver no vault, PRD, ADR ou CONTEXT.
- Usar comandos compactos:
  - `git status --short`
  - `git diff --stat`
  - `git diff --name-only`
  - `git log -3 --oneline`
  - `npm run type-check`
  - `npm run build`
- Não mostrar logs longos. Se comando passar, responder só "passou". Se falhar, mostrar apenas o erro relevante.
- Não ler arquivo inteiro sem necessidade. Usar busca antes de leitura completa.
- Entregar respostas finais curtas, com: (1) o que foi feito; (2) arquivos alterados; (3) validações; (4) riscos; (5) próxima ação.
- Sugerir commit, mas não executar commit/push sem pedido explícito.
- Nunca fazer `git push` automaticamente.
- Nunca instalar dependências sem autorização.
- Nunca alterar `.env`.
- Parar e perguntar se precisar sair do escopo.

---

*Versão: 2.3 | Atualizado: 2026-05-04 | Fase: 1 (Site e SEO Local) | Skills: 21 (manifest em `skills/manifest.json`)*
