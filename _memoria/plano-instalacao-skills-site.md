# Plano de Instalação — Skills de Engenharia no `_site/`

**Criado:** 2026-04-30
**Status:** Aguardando aprovação de Murillo — nenhum arquivo foi alterado
**Fonte das skills:** `Desktop/skills-main (2)/skills-main/`
**Destino:** `CEREBRO.JAMPA/_site/`

---

## Estado atual do `_site/`

| Item | Estado |
|------|--------|
| Package manager | npm (`package-lock.json` presente) |
| Scripts disponíveis | `dev`, `build`, `start`, `lint`, `type-check` |
| Script `test` | ❌ Não existe |
| `.prettierrc` | ❌ Não existe |
| `.husky/` | ❌ Não existe |
| `_site/.claude/` | ❌ Não existe |
| `_site/.claude/commands/` | ❌ Não existe |
| `_site/CLAUDE.md` | ❌ Não existe |
| Git repo | ❌ Não é um repositório git |

---

## Localização dos slash commands

Todas as skills instaladas como slash commands ficam em:

```
CEREBRO.JAMPA/_site/.claude/commands/
```

Esta pasta é lida pelo Claude Code quando a sessão opera dentro de `_site/`. Não interfere com os slash commands comerciais do Jampa que ficam em:

```
CEREBRO.JAMPA/.claude/commands/   ← skills comerciais — NÃO TOCAR
```

---

## FASE 1 — SEGURANÇA

### 1A — `git-guardrails-claude-code`

**Objetivo:** Bloquear comandos git destrutivos antes de Claude Code executar.

| Campo | Detalhe |
|-------|---------|
| **Origem** | `skills-main/skills/misc/git-guardrails-claude-code/` |
| **Arquivos a copiar** | `SKILL.md` → `.claude/commands/git-guardrails-claude-code.md` |
| | `scripts/block-dangerous-git.sh` → `.claude/hooks/block-dangerous-git.sh` |
| **Arquivos a ignorar** | Nenhum nesta skill (só 2 arquivos) |
| **Destino do comando** | `CEREBRO.JAMPA/_site/.claude/commands/git-guardrails-claude-code.md` |
| **Destino do script** | `CEREBRO.JAMPA/_site/.claude/hooks/block-dangerous-git.sh` |
| **Destino do settings** | `CEREBRO.JAMPA/_site/.claude/settings.json` (criar novo — não existe) |

**O que a skill faz ao ser executada:**

1. Cria a pasta `_site/.claude/hooks/` (nova)
2. Copia o script `block-dangerous-git.sh` para ela
3. Executa `chmod +x` no script
4. Cria `_site/.claude/settings.json` com o bloco de hook `PreToolUse`
5. Pergunta se escopo é projeto ou global

**O que é bloqueado após instalação:**

```
git push (todas as variantes, incluindo --force)
git reset --hard
git clean -f / git clean -fd
git branch -D
git checkout .
git restore .
```

**O que NÃO é bloqueado:** `git commit`, `git add`, `git status`, `git log`, `git diff` — operações seguras e locais.

**Risco:**

| Risco | Nível | Mitigação |
|-------|-------|-----------|
| `settings.json` novo — se Claude Code já tiver configurações globais | Baixo | Skill faz merge, não sobrescreve. Mas não há settings existente no `_site/` |
| Bloquear push legítimo de Murillo | Baixo | Murillo pode fazer push pelo terminal fora do Claude Code a qualquer momento |
| `_site/` não é git repo — hook fica inativo | Nenhum | Hook só é acionado quando Claude Code tenta `Bash` com git — se não há git, não há colisão |

**Altera:**

- ✅ Cria: `_site/.claude/hooks/block-dangerous-git.sh`
- ✅ Cria: `_site/.claude/settings.json`
- ❌ Não altera: `package.json`, arquivos do projeto, vault, skills comerciais

**Adaptação para o Jampa:** Nenhuma. Script é genérico e funciona sem modificação.

---

### 1B — `setup-pre-commit`

**Objetivo:** Garantir que Claude Code nunca commita código sem formatação Prettier ou com erro de TypeScript.

| Campo | Detalhe |
|-------|---------|
| **Origem** | `skills-main/skills/misc/setup-pre-commit/` |
| **Arquivos a copiar** | `SKILL.md` → `.claude/commands/setup-pre-commit.md` |
| **Arquivos a ignorar** | Nenhum (skill tem só `SKILL.md`) |
| **Destino** | `CEREBRO.JAMPA/_site/.claude/commands/setup-pre-commit.md` |

**O que a skill faz ao ser executada:**

1. Detecta package manager → `npm` (confirma `package-lock.json`)
2. Instala devDependencies: `husky lint-staged prettier`
3. Roda `npx husky init` → cria `.husky/` e adiciona `prepare` no `package.json`
4. Cria `.husky/pre-commit` com:
   ```
   npx lint-staged
   npm run typecheck
   ```
   *(sem `npm run test` — script `test` não existe no `_site/`)*
5. Cria `.lintstagedrc`
6. Cria `.prettierrc` (não existe — será criado com defaults padrão)
7. Faz um commit de confirmação

**Adaptação necessária para o Jampa:**

> ⚠️ `_site/package.json` não tem script `test`. A skill deve OMITIR a linha `npm run test` do `.husky/pre-commit`. Isso deve ser informado explicitamente ao executar.

**Risco:**

| Risco | Nível | Mitigação |
|-------|-------|-----------|
| `npm install` adiciona devDependencies ao `package.json` | Baixo | São só ferramentas de dev, não afetam build de produção |
| `.prettierrc` criado pode conflitar com formatação existente no `_site/` | Baixo | Sem `.prettierrc` atual, não há conflito. Defaults do Prettier são compatíveis com Next.js/TypeScript |
| Commit automático ao final | Médio | Skill tenta fazer commit de `Add pre-commit hooks`. git-guardrails NÃO bloqueia commit — só push. Commit ficará local. |
| `_site/` não é git repo → `npx husky init` falha | Alto | **Pré-condição crítica:** `setup-pre-commit` só deve ser executado depois que `_site/` tiver um git repo inicializado. Verificar antes de executar. |

**Altera:**

- ✅ Instala: `husky`, `lint-staged`, `prettier` em `devDependencies`
- ✅ Modifica: `package.json` (adiciona `prepare: "husky"` e devDeps)
- ✅ Cria: `.husky/pre-commit`, `.lintstagedrc`, `.prettierrc`
- ❌ Não altera: código do site, vault, skills comerciais, `_conhecimento/`

---

## FASE 2 — PLANEJAMENTO

### 2A — `grill-with-docs`

**Objetivo:** Sessão de alinhamento técnico antes de estruturar o site. Cria `CONTEXT.md` e ADRs enquanto decisões surgem.

| Campo | Detalhe |
|-------|---------|
| **Origem** | `skills-main/skills/engineering/grill-with-docs/` |
| **Arquivos a copiar** | `SKILL.md` → `.claude/commands/grill-with-docs.md` |
| | `ADR-FORMAT.md` → `.claude/commands/grill-with-docs/ADR-FORMAT.md` |
| | `CONTEXT-FORMAT.md` → `.claude/commands/grill-with-docs/CONTEXT-FORMAT.md` |
| **Arquivos a ignorar** | Nenhum (todos os 3 são necessários) |
| **Destino** | `CEREBRO.JAMPA/_site/.claude/commands/grill-with-docs.md` |
| | `CEREBRO.JAMPA/_site/.claude/commands/grill-with-docs/ADR-FORMAT.md` |
| | `CEREBRO.JAMPA/_site/.claude/commands/grill-with-docs/CONTEXT-FORMAT.md` |

**O que a skill faz ao ser executada:**

1. Entrevista Murillo sobre o plano/arquitetura do site (uma pergunta por vez)
2. Consulta o codebase de `_site/` para verificar contradições
3. Cria `_site/CONTEXT.md` quando o primeiro termo é resolvido (arquivo novo)
4. Cria `_site/docs/adr/` quando a primeira decisão irreversível surge (pasta nova)
5. Atualiza `CONTEXT.md` inline conforme decisões cristalizam

**Adaptação para o Jampa:**

> ⚠️ A skill buscará `CONTEXT.md` no `_site/`. Como não existe, ela o criará. Ao iniciar a sessão, informar à skill que o glossário do projeto está em `../_conhecimento/` (vault) e que o `CLAUDE.md` principal está em `CEREBRO.JAMPA/CLAUDE.md` — para que ela não reinvente termos já definidos.

**Risco:**

| Risco | Nível | Mitigação |
|-------|-------|-----------|
| Criar `CONTEXT.md` em `_site/` com termos que conflitam com vault | Médio | Informar à skill para ler `_conhecimento/` antes de criar glossário |
| ADRs criados em `_site/docs/adr/` entrarem em conflito com `_memoria/decisoes-estrategicas.md` | Baixo | São contextos diferentes: ADRs de `_site/` são técnicos (Next.js); decisões estratégicas do vault são comerciais |

**Altera:**

- ✅ Cria (quando executada): `_site/CONTEXT.md`, `_site/docs/adr/`
- ❌ Não altera: `package.json`, skills comerciais, vault, `_conhecimento/`

---

### 2B — `to-prd`

**Objetivo:** Transformar o contexto atual (vault comercial + catálogo + decisões estratégicas) em PRD técnico estruturado para o site.

| Campo | Detalhe |
|-------|---------|
| **Origem** | `skills-main/skills/engineering/to-prd/` |
| **Arquivos a copiar** | `SKILL.md` → `.claude/commands/to-prd.md` |
| **Arquivos a ignorar** | Nenhum (skill tem só `SKILL.md`) |
| **Destino** | `CEREBRO.JAMPA/_site/.claude/commands/to-prd.md` |

**O que a skill faz ao ser executada:**

1. Lê o contexto da conversa e o codebase de `_site/`
2. Esboça módulos a construir/modificar
3. Confirma módulos com Murillo
4. Gera PRD com: Problem Statement, Solution, User Stories, Implementation Decisions, Testing Decisions, Out of Scope
5. Publica no issue tracker configurado (GitHub ou local markdown)

**Pré-requisito:** `setup-matt-pocock-skills` deve ter rodado para definir onde fica o issue tracker. Se não foi configurado, a skill avisa.

**Adaptação para o Jampa:**

> ⚠️ Issue tracker não está configurado ainda. Duas opções:
> - **GitHub:** requer que o projeto tenha remote configurado
> - **Local markdown (recomendado para agora):** issues ficam em `_site/docs/issues/` — sem depender de GitHub
>
> Escolha deve ser feita em `setup-matt-pocock-skills` antes de executar `to-prd`.

**Risco:**

| Risco | Nível | Mitigação |
|-------|-------|-----------|
| Publicar PRD em GitHub sem aprovação de Murillo | Médio | Skill pergunta antes de publicar. Para local markdown, cria arquivos locais |
| PRD inventar dados de passeios que não estão no catálogo | Alto | Skill deve ler vault (`_conhecimento/`) como fonte. Instruir explicitamente ao executar |

**Altera:**

- ✅ Cria (quando executada): arquivo PRD no issue tracker configurado
- ❌ Não altera: código do site, vault, skills comerciais

---

### 2C — `to-issues`

**Objetivo:** Quebrar o PRD aprovado em issues verticais (tracer bullets), cada uma end-to-end e acionável de forma independente.

| Campo | Detalhe |
|-------|---------|
| **Origem** | `skills-main/skills/engineering/to-issues/` |
| **Arquivos a copiar** | `SKILL.md` → `.claude/commands/to-issues.md` |
| **Arquivos a ignorar** | Nenhum (skill tem só `SKILL.md`) |
| **Destino** | `CEREBRO.JAMPA/_site/.claude/commands/to-issues.md` |

**O que a skill faz ao ser executada:**

1. Lê o PRD (contexto ou referência de issue)
2. Quebra em fatias verticais — cada uma com: título, tipo (HITL/AFK), blockers, user stories cobertas
3. Confirma granularidade com Murillo
4. Publica issues no tracker em ordem de dependência

**Pré-requisito:** PRD aprovado + `setup-matt-pocock-skills` configurado.

**Risco:**

| Risco | Nível | Mitigação |
|-------|-------|-----------|
| Issues publicados em GitHub sem revisão de Murillo | Médio | Skill apresenta lista e pede aprovação antes de publicar |
| Issues muito granulares ou muito grosseiros | Baixo | Skill pede confirmação de granularidade explicitamente |

**Altera:**

- ✅ Cria (quando executada): issues no tracker configurado
- ❌ Não altera: código, vault, skills comerciais

---

## FASE 3 — AUXILIAR

### 3A — `setup-matt-pocock-skills`

**Objetivo:** Configurar contexto de engenharia no `CLAUDE.md` do `_site/` para que `to-prd`, `to-issues` e outras skills engineering saibam onde fica o issue tracker, os labels e os docs de domínio.

| Campo | Detalhe |
|-------|---------|
| **Origem** | `skills-main/skills/engineering/setup-matt-pocock-skills/` |
| **Arquivos a copiar** | `SKILL.md` → `.claude/commands/setup-matt-pocock-skills.md` |
| **Arquivos a ignorar** | Nenhum (skill tem só `SKILL.md`) |
| **Destino** | `CEREBRO.JAMPA/_site/.claude/commands/setup-matt-pocock-skills.md` |

**O que a skill faz ao ser executada:**

1. Lê `.git/config`, `CLAUDE.md`, `CONTEXT.md`, `docs/adr/` do `_site/`
2. Pergunta 3 coisas (uma por vez):
   - Issue tracker: GitHub / GitLab / local markdown (`docs/issues/`)
   - Labels de triage: propõe defaults, Murillo confirma ou ajusta
   - Localização dos docs de domínio: onde fica `CONTEXT.md` e ADRs
3. Escreve bloco `## Agent skills` no `_site/CLAUDE.md` (cria o arquivo se não existir)
4. Cria `_site/docs/agents/` com config do issue tracker

**Por que é Fase 3 (opcional por enquanto):**

`to-prd` e `to-issues` recomendam que `setup-matt-pocock-skills` rode antes. Mas se a escolha for **local markdown**, as skills conseguem funcionar sem o setup formal — elas apenas criam os arquivos em `docs/issues/` por padrão. O setup formal só se torna bloqueante se usar GitHub como tracker.

**Adaptação para o Jampa:**

> ⚠️ A skill escreve no `_site/CLAUDE.md` (arquivo novo — não existe). NÃO toca no `CEREBRO.JAMPA/CLAUDE.md` raiz. Verificar esse escopo ao executar.

**Risco:**

| Risco | Nível | Mitigação |
|-------|-------|-----------|
| Criar `_site/CLAUDE.md` com instruções que conflitam com `CEREBRO.JAMPA/CLAUDE.md` | Médio | `_site/CLAUDE.md` deve conter apenas instruções de engenharia de site (não comerciais). Confirmar escopo ao executar. |
| Configurar GitHub como tracker sem remote configurado | Baixo | Skill verifica `git remote -v` antes de propor GitHub. Sem remote → sugere local markdown |

**Altera:**

- ✅ Cria (quando executada): `_site/CLAUDE.md`, `_site/docs/agents/`
- ❌ Não altera: vault, skills comerciais, `CEREBRO.JAMPA/CLAUDE.md`

---

## RESUMO VISUAL

### Arquivos criados por fase (ao instalar os comandos — antes de executar as skills)

```
CEREBRO.JAMPA/
└── _site/
    └── .claude/
        ├── commands/
        │   ├── git-guardrails-claude-code.md     ← Fase 1
        │   ├── setup-pre-commit.md               ← Fase 1
        │   ├── grill-with-docs.md                ← Fase 2
        │   ├── grill-with-docs/
        │   │   ├── ADR-FORMAT.md                 ← Fase 2 (auxiliar)
        │   │   └── CONTEXT-FORMAT.md             ← Fase 2 (auxiliar)
        │   ├── to-prd.md                         ← Fase 2
        │   ├── to-issues.md                      ← Fase 2
        │   └── setup-matt-pocock-skills.md       ← Fase 3
        └── hooks/
            └── block-dangerous-git.sh            ← Fase 1 (criado ao executar git-guardrails)
```

### Arquivos criados ao EXECUTAR cada skill (pós-aprovação)

| Quando executar | Skill | Cria |
|----------------|-------|------|
| Fase 1 | `git-guardrails` | `.claude/hooks/block-dangerous-git.sh` + `.claude/settings.json` |
| Fase 1 | `setup-pre-commit` | `.husky/pre-commit`, `.lintstagedrc`, `.prettierrc`, modifica `package.json` |
| Fase 2 | `grill-with-docs` | `_site/CONTEXT.md`, `_site/docs/adr/` (lazily) |
| Fase 2 | `to-prd` | PRD no issue tracker escolhido |
| Fase 2 | `to-issues` | Issues no issue tracker escolhido |
| Fase 3 | `setup-matt-pocock-skills` | `_site/CLAUDE.md`, `_site/docs/agents/` |

---

## REGRAS DE SEPARAÇÃO

| Camada | Localização | Toca? |
|--------|-------------|-------|
| Skills comerciais Jampa | `CEREBRO.JAMPA/.claude/commands/` | ❌ Nunca |
| Vault de conhecimento | `CEREBRO.JAMPA/_conhecimento/` | ❌ Nunca |
| CRM | `CEREBRO.JAMPA/_crm/` | ❌ Nunca |
| Skills de site (novas) | `CEREBRO.JAMPA/_site/.claude/commands/` | ✅ Destino das instalações |
| Código do site | `CEREBRO.JAMPA/_site/app/`, `components/`, `data/` | ❌ Fase 1 e 2 não tocam |

---

## DECISÃO PENDENTE — ANTES DE FASE 1

**Escopo do `git-guardrails`:** projeto ou global?

| Opção | Arquivo | Efeito |
|-------|---------|--------|
| **Projeto** (recomendado) | `_site/.claude/settings.json` | Bloqueia apenas quando Claude Code opera em `_site/` |
| **Global** | `~/.claude/settings.json` | Bloqueia em todos os projetos do sistema |

Recomendação: **projeto** (`_site/.claude/settings.json`). Mais controlado. Murillo confirma antes de executar.

---

*v1.0 | Criado 2026-04-30 | Aguardando aprovação de Murillo para Fase 1*
*Nenhum arquivo foi modificado, copiado ou instalado durante a criação deste plano.*
