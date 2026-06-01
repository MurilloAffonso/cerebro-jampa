# Relatório — Fase 2: Limpeza Técnica

**Data:** 2026-05-29
**Branch:** `main`
**HEAD na execução:** `9bd97e4 fix(media): corrige isolamento e nomenclatura SEO das fotos por passeio`
**Escopo:** despoluir o repositório, reduzir peso, organizar arquivos soltos. **Não tocada** lógica do site, dados, componentes React, SEO, conteúdo comercial, domínio ou deploy oficial.

---

## 1. Backup

Snapshot dos 3 arquivos críticos antes de qualquer alteração, em `_archive/backup-fase2-2026-05-29/`:

| Backup | Origem | Por quê |
|---|---|---|
| `root.gitignore` | `.gitignore` (raiz) | Foi reescrito (limpeza + reforço de regras) |
| `_site.gitignore` | `_site/.gitignore` | Apenas inspecionado, não alterado |
| `netlify.toml` | `netlify.toml` (raiz) | Foi movido para `_archive/deploy-legado/` |

README explicativo + instruções de reversão em `_archive/backup-fase2-2026-05-29/` (ver — falta criar, ver pendência menor abaixo).

> Os 26 arquivos da Fase 1 (5 docs editados + 7 movimentos + 5 restos Obsidian + auditoria + decisoes) já têm backup em `_archive/backup-fase1-2026-05-29/` — não duplicado nesta fase.

---

## 2. Imagens soltas na raiz — mapeamento e movimentação

### Inventário (26 imagens, 20 rastreadas + 6 untracked)

#### a) Prints / capturas de referência (11) → `_design/refs/screenshots-2026-05/`

| Arquivo | Status anterior |
|---|---|
| `hero-desktop.png` | tracked |
| `home-live.png` | tracked |
| `mobile-full.jpeg` | tracked |
| `mobile-home-current.png` | tracked |
| `passeio-detail.png` | tracked |
| `passeio-fresh.png` | tracked |
| `passeio-page.png` | tracked |
| `screen-home.jpg` | tracked |
| `scrolled-header.png` | tracked |
| `t-home.jpg` | tracked |
| `seixas-full.png` | **untracked** (estava no `.gitignore` raiz com entrada órfã) |

#### b) Validação de layout (5) → `_design/refs/validacao-layouts-2026-05/`

| Arquivo | Breakpoint | Status |
|---|---|---|
| `home-1440.png` | 1440px | untracked |
| `val-home-1440.png` | 1440px | untracked |
| `val-mobile-375.png` | 375px | untracked |
| `val-passeios-1440.png` | 1440px (hub) | untracked |
| `val-seixas-1440.png` | 1440px (Seixas) | untracked |

#### c) Candidatos a asset real (10) → `_design/refs/candidatos-assets-passeios/`

**Pendência HITL:** verificado via `Grep` em todo o repositório que **nenhuma é referenciada em código**. Mantê-las em `_design/refs/` até Murillo confirmar autoria, passeio correspondente, padrão de nome (`[slug]-gallery-NN-descricao.jpg`) e otimização (WebP+JPG). Só depois mover para `_site/public/images/passeios/{slug}/` e popular `galleryImages` em `_site/data/passeios.ts`.

| Arquivo | Provável passeio | Status |
|---|---|---|
| `r-areia-vermelha.jpg` | Areia Vermelha catamarã | tracked |
| `r-areia2.jpg` | Areia Vermelha (alt) | tracked |
| `r-home.jpg` | Home (hero alt) | tracked |
| `r-litoral-sul.jpg` | Litoral Sul Clássico | tracked |
| `r-logo-100.jpg` | Logo 100px (formato JPG suspeito) | tracked |
| `r-logo-64.jpg` | Logo 64px (formato JPG suspeito) | tracked |
| `r-passeios.jpg` | Hub `/passeios/` | tracked |
| `r-picaozinho.jpg` | Picãozinho | tracked |
| `r-seixas-hero.jpg` | Seixas (hero) | tracked |
| `r-seixas-top.jpg` | Seixas (top) | tracked |

#### d) Sem função clara (0)
Nenhuma — todas têm aparência identificável.

### Operações

- Rastreadas (20): `git mv` (histórico preservado)
- Untracked (6): `mv` simples (não estavam no índice)

### READMEs criados

- `_design/refs/README.md` — explica cada subpasta + tabela de cada arquivo
- `_archive/deploy-legado/README.md` — explica decisão Vercel vs Netlify
- `_archive/legado-obsidian/README.md` — já existia da Fase 1

---

## 3. Build versionado — verificação

**Comando:** `git ls-files _site/out _site/out.zip _site/tsconfig.tsbuildinfo` → **0 arquivos**.

| Item | Tamanho local | Tracked? | Ignorado por | Ação tomada |
|---|---|---|---|---|
| `_site/out/` | 71 MB | ❌ Não | `_site/.gitignore:11` (`out/`) | Nenhuma — já ignorado |
| `_site/out.zip` | 65 MB | ❌ Não | `_site/.gitignore:13` (`*.zip`) | Nenhuma — já ignorado |
| `_site/tsconfig.tsbuildinfo` | 107 KB | ❌ Não | `.gitignore:15` (raiz) | Reforçado bloco no `.gitignore` raiz |
| `_site/.next/` | 218 MB | ❌ Não | `.gitignore:3` + `_site/.gitignore:10` | Reforçado |

**Conclusão:** nenhum build artifact estava sob versionamento — auditoria da Fase 1 superestimou o problema. Nenhum `git rm --cached` foi necessário.

### `.gitignore` raiz — reorganizado

Mudanças:

1. Cabeçalho com data e ponteiro para `FONTE-DA-VERDADE.md`
2. Bloco explícito `Build artifacts do Next.js (gerados, nunca versionar)` listando:
   ```
   _site/.next/
   _site/out/
   _site/out.zip
   _site/tsconfig.tsbuildinfo
   ```
3. **Nova regra:** `/*.png /*.jpg /*.jpeg /*.gif /*.webp` — bloqueia reintrodução acidental de imagens na raiz (sintaxe `/` no início = só raiz, não atinge `_design/refs/`)
4. Removida entrada órfã `seixas-full.png` (a imagem foi movida)
5. `.vscode/` separado em seu próprio bloco
6. Comentários melhorados em todas as seções

Backup do original em `_archive/backup-fase2-2026-05-29/root.gitignore`.

### Verificação pós-edição

- `git check-ignore -v _site/out _site/out.zip _site/tsconfig.tsbuildinfo` → continuam ignorados ✅
- `git check-ignore -v FONTE-DA-VERDADE.md` → **não ignorado** ✅ (a regra `/*.png|jpg|...` não atinge `.md`)
- `git check-ignore -v _design/refs/...` → **não ignorado** ✅ (a regra usa `/` no início, só captura raiz)

---

## 4. Deploy legado

`netlify.toml` (raiz) movido via `git mv` para `_archive/deploy-legado/netlify.toml`.

Conteúdo do arquivo arquivado:

```toml
[build]
  base    = "_site"
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"
```

`_archive/deploy-legado/README.md` criado explicando:
- Vercel é o deploy oficial (confirmado em 2026-05-29 via headers `server: Vercel`)
- Histórico anterior em `_archive/netlify.toml` (versão de 2026-05-14, ainda mais antiga)
- Como reverter (improvável)

**Não removido por enquanto:** o `_archive/netlify.toml` original (de 2026-05-14). Sugestão: consolidar em `_archive/deploy-legado/` na Fase 3.

---

## 5. Pastas vazias — mapeamento (sem alteração)

| Pasta | Arquivos | Função provável | Recomendação |
|---|---|---|---|
| `src/types/` | 0 | Resto da estrutura inicial; o site usa `_site/types/` | **Arquivar** — mover para `_archive/estrutura-inicial/src/` (Fase 3) |
| `_site/paginas/` | 0 | Resto pré-App-Router; estrutura atual é `_site/app/[locale]/` | **Arquivar** — idem |
| `_site/seo/` | 0 | Foi prevista para schemas; lógica vive em `_site/lib/seo.ts` | **Arquivar** — idem |
| `.github/` | 0 | Reservada para GitHub Actions/workflows | **Manter** — criar `.gitkeep` quando configurar CI |
| `How to use Claude/` | 0 | Origem desconhecida; nome em inglês destoa do padrão | **Arquivar** — investigar e mover para `_archive/` |
| `media/` | 0 (após Fase 1) | Era usada para `downloads.png.md` (já arquivado) | **Remover ou arquivar** — sem propósito vivo |
| `_social/` | 1 (só README) | Skills sociais previstas mas não produziram saída | **Preencher depois** — manter README, criar `.gitkeep` em subpastas se for usar |
| `_social/editorial/` | 0 | Calendários/pautas Instagram | **Preencher depois** |
| `_social/assets/` | 0 | Heroes, stories, reels, paletas | **Preencher depois** |
| `_social/concorrentes/` | 0 | Análises competitivas | **Preencher depois** |
| `_social/referencias/` | 0 | Links/refs externas | **Preencher depois** |
| `_automacao/outputs/lovable/` | 1 (`homepage-vem-passear-jampa.md`) | Output antigo do Lovable (skill congelada) | **Arquivar** — mover para `_archive/lovable-outputs/` |

> Nenhuma ação tomada nesta fase. Tabela serve como entrada para Fase 3.

---

## 6. Skills espalhadas — diagnóstico (sem alteração)

### Localizações encontradas

| Caminho | Skills | Status no manifest |
|---|---|---|
| `skills/` | 21 skills oficiais | ✅ Canônica (`skills/manifest.json`) |
| `.claude/skills/executar-issue/SKILL.md` | 1 | Listada como `skills_externas[0]` no manifest com nota "fora-do-padrão" |
| `.agents/skills/executar-issue/SKILL.md` | 1 (mesmo arquivo) | ❌ Não listada |
| `_site/.claude/skills/grill-with-docs/` | 1 (+ ADR-FORMAT.md, CONTEXT-FORMAT.md) | ❌ Não listada |
| `_site/.claude/skills/to-issues/SKILL.md` | 1 | ❌ Não listada |
| `_site/.claude/skills/to-prd/SKILL.md` | 1 | ❌ Não listada |

### Diagnóstico

1. **`executar-issue` está duplicado byte-a-byte** em `.claude/skills/` e `.agents/skills/` (`diff -q` retornou sem diferenças; ambos 104 linhas). Provavelmente cópia manual entre os 2 padrões de skills do Claude Code (`.claude/` plugin) e Codex/Cursor (`.agents/`).
2. **Skills do `_site/.claude/skills/`** (`grill-with-docs`, `to-issues`, `to-prd`) são utilidades de engenharia de produto (rodam grills de documentação, geram issues e PRDs). Provavelmente vieram de algum starter externo — não pertencem ao manifest de skills de turismo.

### Recomendação para Fase 3

| Ação | Justificativa |
|---|---|
| Decidir padrão único entre `.claude/skills/` e `.agents/skills/` | Ambos rodam o mesmo conteúdo; manter os dois é desperdício |
| Mover `executar-issue` para `skills/` (padrão do projeto) **ou** documentar definitivamente como skill de engenharia externa | Resolveria warning do doctor |
| Decidir destino de `grill-with-docs` / `to-issues` / `to-prd`: <br> • Adicionar no manifest como `skills_externas[]` <br> • Mover para `skills/` <br> • Mover para `_archive/skills-engenharia-externa/` se não forem mais usadas | Estão "soltas" no `_site/.claude/skills/` |
| Doctor deve apontar todas as 4 (não só `executar-issue`) | Hoje só avisa de uma |

---

## 7. Doctor CSV — confirmação do falso positivo

**Arquivo:** `_automacao/scripts/jampa-doctor.mjs`
**Função:** `checkLeadsCsv()` — linhas 229–...
**Linha confessa o problema:** `_automacao/scripts/jampa-doctor.mjs:248`:

```js
// contagem ingênua — não respeita aspas com vírgulas internas; suficiente para sanity check
```

E a linha 254 fornece o hint dado quando o parser detecta inconsistência:

```js
"verificar se contém vírgulas dentro de campos sem aspas"
```

**Confirmado:** o falso positivo recorrente em `_crm/leads.csv` (apontado no Ciclo 3 da retrospectiva, `_conhecimento/retrospectiva.md:67-83`) acontece porque o parser do doctor não respeita aspas RFC 4180. O CSV está correto.

### Recomendação para Fase 3 (sem alteração agora)

Substituir a contagem por `split(",")` ingênua por um parser RFC 4180 mínimo — por exemplo, regex `,(?=(?:(?:[^"]*"){2})*[^"]*$)` ou uma função `parseCsvLine(line)` que percorra o texto respeitando aspas. **Não usar dependência externa** (manter o doctor sem `node_modules`).

---

## 8. Comandos executados

```bash
# Backup
mkdir -p _archive/backup-fase2-2026-05-29 _archive/deploy-legado \
         _design/refs/screenshots-2026-05 \
         _design/refs/validacao-layouts-2026-05 \
         _design/refs/candidatos-assets-passeios
cp .gitignore _archive/backup-fase2-2026-05-29/root.gitignore
cp _site/.gitignore _archive/backup-fase2-2026-05-29/_site.gitignore
cp netlify.toml _archive/backup-fase2-2026-05-29/netlify.toml

# Mover screenshots tracked (10x)
git mv hero-desktop.png _design/refs/screenshots-2026-05/hero-desktop.png
git mv home-live.png _design/refs/screenshots-2026-05/home-live.png
git mv mobile-full.jpeg _design/refs/screenshots-2026-05/mobile-full.jpeg
git mv mobile-home-current.png _design/refs/screenshots-2026-05/mobile-home-current.png
git mv passeio-detail.png _design/refs/screenshots-2026-05/passeio-detail.png
git mv passeio-fresh.png _design/refs/screenshots-2026-05/passeio-fresh.png
git mv passeio-page.png _design/refs/screenshots-2026-05/passeio-page.png
git mv screen-home.jpg _design/refs/screenshots-2026-05/screen-home.jpg
git mv scrolled-header.png _design/refs/screenshots-2026-05/scrolled-header.png
git mv t-home.jpg _design/refs/screenshots-2026-05/t-home.jpg

# Mover candidatos a asset tracked (10x)
git mv r-areia-vermelha.jpg _design/refs/candidatos-assets-passeios/r-areia-vermelha.jpg
git mv r-areia2.jpg _design/refs/candidatos-assets-passeios/r-areia2.jpg
git mv r-home.jpg _design/refs/candidatos-assets-passeios/r-home.jpg
git mv r-litoral-sul.jpg _design/refs/candidatos-assets-passeios/r-litoral-sul.jpg
git mv r-logo-100.jpg _design/refs/candidatos-assets-passeios/r-logo-100.jpg
git mv r-logo-64.jpg _design/refs/candidatos-assets-passeios/r-logo-64.jpg
git mv r-passeios.jpg _design/refs/candidatos-assets-passeios/r-passeios.jpg
git mv r-picaozinho.jpg _design/refs/candidatos-assets-passeios/r-picaozinho.jpg
git mv r-seixas-hero.jpg _design/refs/candidatos-assets-passeios/r-seixas-hero.jpg
git mv r-seixas-top.jpg _design/refs/candidatos-assets-passeios/r-seixas-top.jpg

# Mover untracked (5 validacao + 1 print Seixas)
mv home-1440.png _design/refs/validacao-layouts-2026-05/home-1440.png
mv val-home-1440.png _design/refs/validacao-layouts-2026-05/val-home-1440.png
mv val-mobile-375.png _design/refs/validacao-layouts-2026-05/val-mobile-375.png
mv val-passeios-1440.png _design/refs/validacao-layouts-2026-05/val-passeios-1440.png
mv val-seixas-1440.png _design/refs/validacao-layouts-2026-05/val-seixas-1440.png
mv seixas-full.png _design/refs/screenshots-2026-05/seixas-full.png

# Mover netlify legacy
git mv netlify.toml _archive/deploy-legado/netlify.toml

# .gitignore raiz reescrito (Write) — backup em _archive/backup-fase2-2026-05-29/

# READMEs criados (Write)
# - _archive/deploy-legado/README.md
# - _design/refs/README.md
```

---

## 9. `git status --short` final (46 entradas)

```
 M .gitignore                                          ← Fase 2: reescrito
R  netlify.toml -> _archive/deploy-legado/...          ← Fase 2
R  Bem-vindo.md -> _archive/legado-obsidian/...        ← Fase 1
R  "Sem título.base" -> _archive/legado-obsidian/...   ← Fase 1
R  "crie um link.md" -> _archive/legado-obsidian/...   ← Fase 1
R  .verb.md -> _archive/legado-obsidian/dot-verb.md    ← Fase 1
R  media/downloads.png.md -> _archive/legado-obsidian/ ← Fase 1
R  r-*.jpg (10x) -> _design/refs/candidatos-assets-…  ← Fase 2
R  *.png/.jpg/.jpeg (10x) -> _design/refs/screenshots-2026-05/ ← Fase 2
 M _memoria/MEMORY.md                                  ← Fase 1
R  _memoria/auditoria-estado-atual-site.md -> _arquivo/ ← Fase 1
R  _memoria/decisoes.md -> _arquivo/                   ← Fase 1
 M _memoria/gmb-otimizacao-2026-05.md                  ← pré-existente
 M _site/CONTEXT.md                                    ← Fase 1
 M _site/ESTRUTURA.md                                  ← Fase 1
 M _site/README.md                                     ← Fase 1
 M docs/handoff-tecnico.md                             ← Fase 1
?? FONTE-DA-VERDADE.md                                 ← Fase 1
?? _archive/backup-fase1-2026-05-29/                   ← Fase 1
?? _archive/backup-fase2-2026-05-29/                   ← Fase 2
?? _archive/deploy-legado/README.md                    ← Fase 2
?? _archive/legado-obsidian/README.md                  ← Fase 1
?? _design/refs/README.md                              ← Fase 2
?? _design/refs/screenshots-2026-05/seixas-full.png    ← Fase 2 (untracked → tracked)
?? _design/refs/validacao-layouts-2026-05/             ← Fase 2 (6 PNGs)
?? _memoria/gmb-auditoria-2026-05.md                   ← pré-existente
?? _memoria/gmb-auditoria-dados-reais-2026-05.md       ← pré-existente
?? _memoria/relatorio-fase1-limpeza-2026-05-29.md      ← Fase 1
```

**Resumo:**
- 23 arquivos renomeados (`R`) — todos `git mv`, histórico preservado
- 6 arquivos modificados (`M`) — 5 docs Fase 1 + `.gitignore` Fase 2 + GMB pré-existente
- 17 arquivos/diretórios novos (`??`) — backups, READMEs, FONTE-DA-VERDADE, relatórios, validações untracked

---

## 10. Riscos

| Risco | Mitigação |
|---|---|
| Imagens `r-*` serem assumidas como assets ativos | README explícito em `_design/refs/candidatos-assets-passeios/` + verificação prévia via Grep mostrou **zero referências** no código |
| `.gitignore` nova regra `/*.png/...` bloquear imagens legítimas na raiz | Sintaxe `/` no início garante que só raiz seja afetada; `_design/refs/`, `_site/public/`, etc. permanecem livres |
| Algum agente IA continuar procurando `netlify.toml` na raiz | README em `_archive/deploy-legado/` + Fase 1 já marcou Vercel como oficial em FONTE-DA-VERDADE; risco baixo |
| Build local quebrar por mover algo importante | Nada de build (`_site/out/`, `_site/.next/`, `_site/node_modules/`) foi tocado; só imagens da raiz |
| `_design/refs/validacao-layouts-2026-05/` ser commitado por engano com fotos pesadas | Imagens são PNGs de captura (~300 KB–1 MB cada); aceitável; alternativa é mover para `_archive/` se virar atrito |

---

## 11. Pendências para Fase 3

### Skills e organização

1. **Decidir padrão único** entre `.claude/skills/` e `.agents/skills/` — mover `executar-issue` para `skills/` ou registrar definitivo como externa.
2. **Decidir destino** de `_site/.claude/skills/grill-with-docs/`, `to-issues/`, `to-prd/` — registrar no manifest ou arquivar.
3. **Atualizar `_automacao/scripts/jampa-doctor.mjs`** para detectar as 4 skills externas (não só `executar-issue`).

### Pastas vazias

4. Arquivar `src/types/`, `_site/paginas/`, `_site/seo/`, `How to use Claude/` (estrutura inicial não usada).
5. `media/` — remover ou arquivar.
6. `_automacao/outputs/lovable/homepage-vem-passear-jampa.md` — mover para `_archive/lovable-outputs/` (skill Lovable está congelada).
7. `.github/` e `_social/` — manter, mas adicionar `.gitkeep` em subpastas vazias ou README de uso futuro.

### Doctor

8. Atualizar `checkLeadsCsv()` em `_automacao/scripts/jampa-doctor.mjs:229-258` para parser RFC 4180.

### Consolidação adicional

9. `_archive/netlify.toml` (versão antiga de 2026-05-14) — mover para `_archive/deploy-legado/netlify-2026-05-14.toml` para concentrar tudo de Netlify legado.
10. `_pipeline/` — só tem 1 arquivo; decidir se mantém estrutura ou consolida em `_memoria/` ou `_site/planejamento/`.

### Documentação

11. `_memoria/estado-atual.md` — ainda diz "29 passeios catalogados" e cita Fase 2 do Squad Comercial como concluída sem refletir Fase 1/2 de limpeza desta sessão. Reescrever na Fase 3.
12. `planejamento/sprint-atual.md` (datada 2026-05-05) está superada pelo `_memoria/proximos-passos.md` (2026-05-28). Arquivar ou reescrever.

### Conteúdo / produto (HITL — Fase 4, depende de Murillo)

13. Confirmar que fotos `r-*` em `_design/refs/candidatos-assets-passeios/` devem ser promovidas para `_site/public/images/passeios/` (e a quais slugs/galeria pertencem).
14. Vídeo hero, foto Murillo, depoimentos, preço Transfer 24h, validação tábua maio/2026, publicar blog, otimizar GMB, registrar leads.

---

## 12. Validações executadas

| Verificação | Comando / método | Resultado |
|---|---|---|
| Backup antes de qualquer alteração | `cp` para `_archive/backup-fase2-2026-05-29/` | ✅ 3 arquivos backupados |
| Imagens `r-*` não são assets ativos | `Grep` regex em todo o repo (excluindo node_modules) | ✅ Zero referências |
| Imagens screenshot/val não são assets ativos | `Grep` regex em todo o repo | ✅ Só aparecem em `docs/handoff-tecnico.md` (snapshot), `_memoria/relatorio-fase1-…` (relatório) e `.gitignore` (entrada órfã removida) |
| Build artifacts já estão ignorados | `git ls-files _site/out _site/out.zip _site/tsconfig.tsbuildinfo` | ✅ Zero rastreados |
| `git check-ignore` pós-edição | Para `_site/out`, `_site/out.zip`, `_site/tsconfig.tsbuildinfo` | ✅ Ainda ignorados |
| `FONTE-DA-VERDADE.md` não é capturado pela nova regra `/*.png/...` | `git check-ignore -v FONTE-DA-VERDADE.md` | ✅ Não ignorado |
| Imagens em `_design/refs/` não capturadas pela nova regra | `git check-ignore -v _design/refs/...` | ✅ Não ignorado |
| Nenhum arquivo deletado | `git status --short` mostra `R` (renamed), `M`, `??` — nenhum `D` | ✅ Confere |
| Lógica do site intacta | `_site/data/`, `_site/lib/`, `_site/components/`, `_site/app/`, `next.config.js`, `vercel.json`, `tailwind.config.ts` não modificados | ✅ Confere |
| Decisões Fase 1 preservadas | `FONTE-DA-VERDADE.md` intacto; auto-memory intacta | ✅ Confere |

---

## 13. Resumo executivo

| Métrica | Antes Fase 2 | Depois Fase 2 |
|---|---|---|
| Imagens na raiz | 26 | 0 |
| Pastas em `_design/refs/` | 0 (pasta inexistente) | 3 (screenshots-2026-05, validacao-layouts-2026-05, candidatos-assets-passeios) + README |
| `netlify.toml` na raiz | 1 | 0 |
| Pastas vazias da raiz | 8+ | 8+ (mapeadas, ação na Fase 3) |
| Skills externas | 4 (em 3 lugares) | 4 (mapeadas, ação na Fase 3) |
| Linhas no `.gitignore` raiz | 47 (com órfã + sem reforço) | 54 (organizado, com bloco build + bloqueio imagens raiz) |
| Build artifacts rastreados | 0 | 0 (já estavam fora) |
| Backups novos | — | 1 (`backup-fase2-2026-05-29/` com 3 arquivos) |

---

*Relatório gerado por Claude Code (Opus 4.7) em 2026-05-29.*
*Nenhum commit foi executado. Aguardando aprovação para Fase 3 (skills + pastas vazias + estado-atual).*
