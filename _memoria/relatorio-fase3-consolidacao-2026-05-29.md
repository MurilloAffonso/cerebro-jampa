# Relatório — Fase 3: Consolidação Operacional

**Data:** 2026-05-29
**Branch:** `main`
**HEAD:** `9bd97e4 fix(media): corrige isolamento e nomenclatura SEO das fotos por passeio`
**Escopo:** consolidar skills espalhadas, roadmaps paralelos, pastas vazias, doctor, deploy legado, estado atual. **Não tocadas:** lógica do site, dados, componentes React, SEO, conteúdo comercial, decisões da Fase 1, fotos `r-*`.
**Doctor antes:** 0 erros, 2 avisos. **Doctor depois:** 0 erros, 1 aviso (HITL — placeholder foto Murillo / parceiros).

---

## 1. Backup (Fase 3)

`_archive/backup-fase3-2026-05-29/` com 10 arquivos + README de reversão:

| Backup | Origem |
|---|---|
| `manifest.json` | `skills/manifest.json` |
| `jampa-doctor.mjs` | `_automacao/scripts/jampa-doctor.mjs` |
| `_memoria-estado-atual.md` | `_memoria/estado-atual.md` |
| `planejamento-sprint-atual.md` | `planejamento/sprint-atual.md` |
| `_conhecimento-clusters-seo.md` | `_conhecimento/clusters-seo.md` |
| `_conhecimento-estrutura-site-recomendada.md` | `_conhecimento/estrutura-site-recomendada.md` |
| `lovable-homepage.md` | `_automacao/outputs/lovable/homepage-vem-passear-jampa.md` |
| `pipeline-copy-excursoes.md` | `_pipeline/copy-excursoes-e-grupos-2026-05-08.md` |
| `agents-executar-issue-SKILL.md` | `.agents/skills/executar-issue/SKILL.md` |
| `_memoria-indice-mestre.md` | `_memoria/indice-mestre.md` (preventivo, não editado) |

---

## 2. Skills consolidadas

### Diagnóstico

| Localização | Skill | Decisão |
|---|---|---|
| `.claude/skills/executar-issue/` | `executar-issue` (canônica) | Manter — registrada no manifest |
| `.agents/skills/executar-issue/` | `executar-issue` (duplicata byte-a-byte) | **Arquivada** em `_archive/skills-duplicadas/.agents/skills/` |
| `_site/.claude/skills/grill-with-docs/` (+ ADR-FORMAT.md, CONTEXT-FORMAT.md) | `grill-with-docs` | Manter no escopo `_site` — **registrada** no manifest como externa |
| `_site/.claude/skills/to-issues/` | `to-issues` | Manter no escopo `_site` — **registrada** no manifest como externa |
| `_site/.claude/skills/to-prd/` | `to-prd` | Manter no escopo `_site` — **registrada** no manifest como externa |

### Padrão oficial definido (Fase 3)

```
Skills internas de turismo  →  skills/<id>/SKILL.md          + manifest.skills[]
Skills externas de engenharia (vault) → .claude/skills/<id>/  + manifest.skills_externas[]
Skills externas de engenharia (_site) → _site/.claude/skills/ + manifest.skills_externas[] (mesma raiz)
Slash commands              →  .claude/commands/<comando>.md
```

### Manifest atualizado

`skills/manifest.json` ganhou:
- 3 novas entradas em `skills_externas[]` (`grill-with-docs`, `to-issues`, `to-prd`) com `categoria: "engenharia"`, `escopo: "_site"`, `status: "registrada-fase3"`
- `executar-issue` atualizada (status `registrada-fase3` + nota da deduplicação)
- Bloco `consolidacao_fase3_2026_05_29` documentando o padrão oficial

---

## 3. Doctor atualizado

### Mudanças em `_automacao/scripts/jampa-doctor.mjs`

#### a) `checkLeadsCsv()` — parser RFC 4180

Substituí a `split(",")` ingênua (linha 248 do original) por `parseCsvLineRfc4180(line, sep)`: percorre o texto respeitando aspas duplas, escape `""` interno e separador. Sem dependência externa.

```js
function parseCsvLineRfc4180(line, sep) {
  const out = [];
  let cur = "";
  let i = 0;
  let inQuotes = false;
  while (i < line.length) {
    const c = line[i];
    if (inQuotes) {
      if (c === '"') {
        if (line[i + 1] === '"') { cur += '"'; i += 2; continue; }
        inQuotes = false; i++; continue;
      }
      cur += c; i++; continue;
    }
    if (c === '"') { inQuotes = true; i++; continue; }
    if (c === sep) { out.push(cur); cur = ""; i++; continue; }
    cur += c; i++;
  }
  out.push(cur);
  return out;
}
```

Bonus: mensagem de aviso agora cita amostra das linhas com problema.

#### b) `checkSkillsForaDoPadrao(manifest)` — verifica 3 localizações + cruza com manifest

Antes: verificava apenas `.claude/skills/` e avisava qualquer skill ali.
Depois: verifica `.claude/skills/`, `.agents/skills/`, `_site/.claude/skills/`. Cruza com `manifest.skills_externas[].id`. Só avisa **skills não registradas**.

### Resultado do doctor

```
── 1. Skills: pasta vs manifest ──            ✓ 21 skills sincronizadas
── 2. SKILL.md: existência + frontmatter ──   ✓ 21 SKILL.md válidos
── 3. Schema tarefa-jarvis: enum ──           ✓ enum sincronizado
── 4. CLAUDE.md: contagem ──                  ✓ contagem 21 consistente
── 5. CRM: leads.csv parseável ──             ✓ 18 leads, 12 colunas, sep=","
                                                (parser RFC 4180)
── 6. Site: placeholders perigosos ──         ⚠ 3 placeholder(s) HITL
    → MurilloBlock.tsx:39  (foto Murillo placeholder — HOME-PRT-02)
    → MurilloBlock.tsx:55  (title TODO)
    → PartnersMarquee.tsx:13  (parceiros placeholder)
── 7. Skills fora do diretório padrão ──      ✓ 4 skill(s) externa(s) registradas
                                                (executar-issue + grill-with-docs +
                                                 to-issues + to-prd)
── 8. Logs e outputs do Jarvis ──             ✓ _automacao/logs/ existe
── 9. Conhecimento crítico ──                 ✓ 5 arquivos críticos presentes

── Resumo ──
OK — erros: 0 · avisos: 1 · info: 0
```

**Antes da Fase 3:** 0 erros, 2 avisos (CSV falso positivo + executar-issue fora do padrão).
**Depois:** 0 erros, 1 aviso (HITL — Murillo precisa fornecer foto + parceiros reais).

---

## 4. Pastas vazias — execução

### Arquivadas (registradas em `_archive/estrutura-inicial-vazia/README.md`)

| Pasta original | Conteúdo | Ação |
|---|---|---|
| `src/` (+ `src/types/`) | 100% vazia | `rmdir` |
| `_site/paginas/` | 100% vazia | `rmdir` |
| `_site/seo/` | 100% vazia | `rmdir` |
| `How to use Claude/` | 100% vazia | `rmdir` |
| `media/` | Vazia após Fase 1 (downloads.png.md já arquivado) | `rmdir` |
| `.agents/` (+ `.agents/skills/`) | Continha duplicata `executar-issue` (arquivada acima) | `rmdir` |
| `_automacao/outputs/` (+ `lovable/`) | Continha output Lovable (arquivado em `_archive/lovable-outputs/`) | `rmdir` |
| `_pipeline/` | Continha copy já incorporada (arquivada em `_archive/pipeline-incorporado/`) | `rmdir` |

Todas reversíveis com `mkdir` simples. Conteúdo, quando existia, está em `_archive/`.

### Mantidas com `.gitkeep` + README

| Pasta | Função futura |
|---|---|
| `.github/` | GitHub Actions/CI (quando ativar) — README explicativo + `.gitkeep` |
| `_social/editorial/` | Calendários e pautas Instagram (fase social) — `.gitkeep` |
| `_social/assets/` (+ `carrosels/`, `colors/`, `heroimages/`, `reels/`, `stories/`, `typography/`) | Assets sociais — 7 `.gitkeep` |
| `_social/concorrentes/` | Análises competitivas — `.gitkeep` |
| `_social/referencias/` | Refs externas — `.gitkeep` |

Total: 10 `.gitkeep` em `_social/` + 1 em `.github/` + 2 READMEs novos.

---

## 5. Roadmaps paralelos — resolvidos

### Diagnóstico

| Arquivo | Última edição | Estado |
|---|---|---|
| `planejamento/sprint-atual.md` | 2026-05-05 | Sprint S1–S7, vários itens já concluídos (HomeVideoHero, TrustBlock); **superada** |
| `_memoria/proximos-passos.md` | 2026-05-28 | Sprint vigente — frente "Fotos reais nas galerias" |
| `_memoria/estado-atual.md` | 2026-05-28 | Citava 29 passeios, Fase 2 do Squad Comercial; **desatualizado** |

### Ação

| Arquivo | Operação |
|---|---|
| `planejamento/sprint-atual.md` | `git mv` para `_archive/sprint-anterior/sprint-2026-05-05.md` + README explicativo |
| `_memoria/proximos-passos.md` | **Mantido como roadmap único ativo** |
| `_memoria/estado-atual.md` | **Reescrito do zero** (12 seções) refletindo: domínio Vercel, catálogo 22+1, paleta v2, Fases 1+2+3 concluídas, bloqueios HITL atuais, padrão de skills, estrutura pós-limpeza |
| `planejamento/backlog-principal.md` | **Mantido** — é backlog geral, não sprint |

### Roadmap ativo declarado

**`_memoria/proximos-passos.md`** é a única fonte vigente de prioridades. Estado e identidade ficam em `_memoria/estado-atual.md`. Backlog amplo em `planejamento/backlog-principal.md`.

---

## 6. Referência a "29 passeios" — resolvida

### Arquivos com referência ativa antes da Fase 3

| Arquivo | Tratamento |
|---|---|
| `_memoria/estado-atual.md` | ✅ Reescrito — agora cita "22 passeios + 1 serviço" |
| `_conhecimento/clusters-seo.md` | ✅ Topo marcado **DEPRECATED em catálogo** + ponteiro para FONTE-DA-VERDADE; conteúdo histórico preservado |
| `_conhecimento/estrutura-site-recomendada.md` | ✅ Mesmo tratamento |
| `_site/CONTEXT.md`, `_site/README.md`, `FONTE-DA-VERDADE.md` | ✅ Já alinhados (Fase 1) — citam 29 apenas como histórico |
| `_memoria/indice-mestre.md` | Não modificado — cita 29 em "Consolidação de 16 arquivos de conhecimento" (referência histórica, não catálogo) |
| `_memoria/decisoes-estrategicas.md` | Não modificado — Decisão 10 cita "29 passeios em 7 clusters" como histórico de decisão; manter como registro |
| `_memoria/perguntas-abertas.md` | Não modificado — histórico, sem impacto operacional |
| `_memoria/gmb-auditoria-2026-05.md` | Não modificado — auditoria pontual, sem impacto |
| `_conhecimento/passeios.md` | Não modificado — conteúdo comercial, regra Fase 3 não permite |
| `_conhecimento/plano-seo-prioridades.md`, `oportunidades-ranqueamento.md`, `tripadvisor-viator-plataformas.md`, `seo-local-joao-pessoa.md`, `mercado-e-concorrencia.md` | Não modificados — conteúdo comercial, regra Fase 3 |
| `_aprendizados/plataformas-2026-04-25.md`, `seo-local-2026-04-25.md` | Não modificados — históricos de aprendizado |
| `_design/cloud-design/homepage-vem-passear/*.md` | Não modificados — outputs de design |
| `_archive/...` | Não modificados — congelados intencionalmente |

### Resultado

Documentos **ativos** sem referência conflitante. Documentos **históricos/comerciais** marcados ou preservados conforme regra.

---

## 7. Deploy legado consolidado

### Antes (após Fase 2)

```
_archive/netlify.toml                            (versão 2026-05-14)
_archive/deploy-legado/netlify.toml              (versão 2026-05-22 — vinda da raiz na Fase 2)
_archive/deploy-legado/README.md                 (mencionava ambos mas não consolidava)
```

### Depois (Fase 3)

```
_archive/deploy-legado/
├── README.md                       (reescrito — linha do tempo completa + reversão)
├── netlify-2026-05-14.toml         (versão inicial pós-migração de raiz)
└── netlify-2026-05-22.toml         (versão final pré-migração para Vercel)
```

`git mv` usado para preservar histórico das duas versões.

---

## 8. `_pipeline/` — analisada e resolvida

### Conteúdo

- 1 arquivo: `copy-excursoes-e-grupos-2026-05-08.md` — rascunho da copy para `/servicos/excursoes-e-grupos`

### Verificação

A página `_site/app/[locale]/servicos/excursoes-e-grupos/page.tsx` existe e usa `getTranslations({ namespace: "ExcursoesPage" })` em `_site/messages/{pt,en,es}.json` — **copy já foi incorporada**.

### Decisão

**c) Arquivada.** Movido para `_archive/pipeline-incorporado/copy-excursoes-e-grupos-2026-05-08.md` com README explicando o critério: quando copy do pipeline for incorporada à página viva, mover para `_archive/pipeline-incorporado/`.

Pasta `_pipeline/` removida (vazia). Documentação em `_archive/estrutura-inicial-vazia/README.md` permite recriação se for usada novamente.

---

## 9. Resultado do doctor

```
$ node _automacao/scripts/jampa-doctor.mjs --no-log

╔═══════════════════════════════════════════════╗
║  CEREBRO.JAMPA — jampa-doctor                 ║
╚═══════════════════════════════════════════════╝

✓ [manifest]          21 skills sincronizadas com pastas
✓ [skill-md]          21 SKILL.md válidos
✓ [schema-enum]       enum sincronizado com manifest
✓ [claude-md]         contagem 21 consistente
✓ [crm]               18 leads, 12 colunas, sep="," (parser RFC 4180)
⚠ [site-placeholders] 3 placeholder(s) em código público (HITL — foto Murillo + parceiros)
✓ [skills-externas]   4 skill(s) externa(s) registrada(s) no manifest
✓ [logs]              _automacao/logs/ existe
✓ [conhecimento]      5 arquivos críticos presentes

OK — erros: 0 · avisos: 1 · info: 0
```

**O único aviso restante é HITL** (depende de Murillo enviar foto profissional + lista de parceiros reais) — não é erro técnico.

---

## 10. Pendências para Fase 4

### Conteúdo / Produto (HITL — depende de Murillo)

1. **Foto profissional de Murillo** (`MurilloBlock.tsx:39,55`) — pendência mais antiga e mais visível
2. **Logos de parceiros reais** (`PartnersMarquee.tsx:13`)
3. **Vídeo hero** (`_site/public/videos/home/hero-jampa.{webm,mp4}` + `hero-poster.jpg`)
4. **Fotos reais Seixas / Areia Vermelha / Picãozinho** — galerias
5. **Promoção das fotos `r-*`** de `_design/refs/candidatos-assets-passeios/` para `_site/public/images/passeios/{slug}/` — confirmar autoria, slug, padrão de nome
6. **Depoimentos reais** (mínimo 2, nome + cidade + data)
7. **Preço Transfer 24h** em `_site/data/servicos.ts` (atualmente `null`)
8. **Validar tábua maio/2026** (`revisadoPorMurillo: false`)
9. **Publicar 10 posts de blog em draft** (1 por semana)
10. **Otimização GMB** (descrição + 5 fotos + Q&A — checklist em `_memoria/gmb-otimizacao-2026-05.md`)
11. **Registrar leads no CRM** até atingir 30+ (extrair KPIs)
12. **Resolver lead Picãozinho** sem retorno desde 30/04 (linha 15)
13. **Estorno Jair+Ana** (linha 17)

### Técnico / Organizacional (já não-bloqueante)

14. Decidir destino da página `/sobre` (atualmente `notFound()` — ISSUE-22)
15. Configurar CI GitHub Actions quando time crescer (`.github/`)
16. Popular `_social/` quando ativar fase social (estrutura pronta com `.gitkeep`)
17. Atualizar Jarvis n8n (workflows estão prontos, instalação pendente)

---

## 11. Comandos executados

```bash
# Backup
mkdir -p _archive/backup-fase3-2026-05-29 _archive/deploy-legado \
         _archive/sprint-anterior _archive/lovable-outputs \
         _archive/estrutura-inicial-vazia \
         _archive/skills-duplicadas/.agents/skills \
         _archive/pipeline-incorporado
cp skills/manifest.json _archive/backup-fase3-2026-05-29/
cp _automacao/scripts/jampa-doctor.mjs _archive/backup-fase3-2026-05-29/
cp _memoria/estado-atual.md _archive/backup-fase3-2026-05-29/_memoria-estado-atual.md
cp planejamento/sprint-atual.md _archive/backup-fase3-2026-05-29/planejamento-sprint-atual.md
cp _conhecimento/clusters-seo.md _archive/backup-fase3-2026-05-29/_conhecimento-clusters-seo.md
cp _conhecimento/estrutura-site-recomendada.md _archive/backup-fase3-2026-05-29/_conhecimento-estrutura-site-recomendada.md
cp _automacao/outputs/lovable/homepage-vem-passear-jampa.md _archive/backup-fase3-2026-05-29/lovable-homepage.md
cp _pipeline/copy-excursoes-e-grupos-2026-05-08.md _archive/backup-fase3-2026-05-29/pipeline-copy-excursoes.md
cp .agents/skills/executar-issue/SKILL.md _archive/backup-fase3-2026-05-29/agents-executar-issue-SKILL.md
cp _memoria/indice-mestre.md _archive/backup-fase3-2026-05-29/_memoria-indice-mestre.md

# Skills consolidadas
git mv .agents/skills/executar-issue _archive/skills-duplicadas/.agents/skills/executar-issue
# Editado: skills/manifest.json (+3 entradas em skills_externas; +bloco consolidacao_fase3)

# Doctor
# Editado: _automacao/scripts/jampa-doctor.mjs
#   - +parseCsvLineRfc4180(line, sep)
#   - reescrito checkLeadsCsv()
#   - reescrito checkSkillsForaDoPadrao(manifest)
#   - ajustado callsite para passar manifest

# Pastas vazias arquivadas
git mv _automacao/outputs/lovable/homepage-vem-passear-jampa.md _archive/lovable-outputs/homepage-vem-passear-jampa-2026-04-27.md
git mv _pipeline/copy-excursoes-e-grupos-2026-05-08.md _archive/pipeline-incorporado/copy-excursoes-e-grupos-2026-05-08.md
rmdir _automacao/outputs/lovable _automacao/outputs _pipeline media src/types src "How to use Claude" _site/paginas _site/seo

# Pastas mantidas
touch .github/.gitkeep
find _social -type d -empty -exec touch {}/.gitkeep \;
# Criados: .github/README.md

# Sprint legacy
git mv planejamento/sprint-atual.md _archive/sprint-anterior/sprint-2026-05-05.md

# Estado atual reescrito (Write)

# Docs DEPRECATED no topo (Edit)
# - _conhecimento/clusters-seo.md
# - _conhecimento/estrutura-site-recomendada.md

# Deploy legado consolidado
git mv _archive/netlify.toml _archive/deploy-legado/netlify-2026-05-14.toml
git mv _archive/deploy-legado/netlify.toml _archive/deploy-legado/netlify-2026-05-22.toml
# Reescrito: _archive/deploy-legado/README.md

# READMEs criados
# - _archive/estrutura-inicial-vazia/README.md
# - _archive/lovable-outputs/README.md
# - _archive/pipeline-incorporado/README.md
# - _archive/skills-duplicadas/README.md
# - _archive/sprint-anterior/README.md
# - _archive/backup-fase3-2026-05-29/README.md
# - .github/README.md

# Doctor rodado 2x (verificação intermediária + final) — saída ok
node _automacao/scripts/jampa-doctor.mjs --no-log
```

---

## 12. `git status --short` final (63 entradas)

### Modificados (10)
```
 M .gitignore                                ← Fase 2
 M _automacao/scripts/jampa-doctor.mjs       ← Fase 3 (parser + check skills)
 M _conhecimento/clusters-seo.md             ← Fase 3 (DEPRECATED no topo)
 M _conhecimento/estrutura-site-recomendada.md ← Fase 3 (DEPRECATED no topo)
 M _memoria/MEMORY.md                        ← Fase 1
 M _memoria/estado-atual.md                  ← Fase 3 (reescrito)
 M _memoria/gmb-otimizacao-2026-05.md        ← pré-existente
 M _site/CONTEXT.md                          ← Fase 1
 M _site/ESTRUTURA.md                        ← Fase 1
 M _site/README.md                           ← Fase 1
 M docs/handoff-tecnico.md                   ← Fase 1
 M skills/manifest.json                      ← Fase 3 (skills externas + consolidacao)
```

### Renomeados (33 — todos via `git mv`)

```
Fase 1 (7):
R  Bem-vindo.md / Sem título.base / crie um link.md / .verb.md / media/downloads.png.md → _archive/legado-obsidian/
R  _memoria/auditoria-estado-atual-site.md / _memoria/decisoes.md → _memoria/_arquivo/

Fase 2 (21):
R  netlify.toml → _archive/deploy-legado/netlify-2026-05-22.toml  (renomeado depois na Fase 3)
R  r-*.jpg (10) → _design/refs/candidatos-assets-passeios/
R  *.{png,jpg,jpeg} (10) → _design/refs/screenshots-2026-05/

Fase 3 (5):
R  _archive/netlify.toml → _archive/deploy-legado/netlify-2026-05-14.toml
R  .agents/skills/executar-issue → _archive/skills-duplicadas/.agents/skills/
R  _automacao/outputs/lovable/* → _archive/lovable-outputs/
R  _pipeline/copy-excursoes-e-grupos-2026-05-08.md → _archive/pipeline-incorporado/
R  planejamento/sprint-atual.md → _archive/sprint-anterior/sprint-2026-05-05.md
```

### Untracked (20)
```
?? FONTE-DA-VERDADE.md
?? .github/                              (.gitkeep + README)
?? _archive/backup-fase1-2026-05-29/
?? _archive/backup-fase2-2026-05-29/
?? _archive/backup-fase3-2026-05-29/
?? _archive/deploy-legado/README.md
?? _archive/estrutura-inicial-vazia/     (README)
?? _archive/legado-obsidian/README.md
?? _archive/lovable-outputs/README.md
?? _archive/pipeline-incorporado/README.md
?? _archive/skills-duplicadas/README.md
?? _archive/sprint-anterior/README.md
?? _design/refs/README.md
?? _design/refs/screenshots-2026-05/seixas-full.png
?? _design/refs/validacao-layouts-2026-05/
?? _social/{assets,concorrentes,editorial,referencias}/   (.gitkeep)
?? _memoria/gmb-auditoria-2026-05.md           (pré-existente)
?? _memoria/gmb-auditoria-dados-reais-2026-05.md   (pré-existente)
?? _memoria/relatorio-fase1-limpeza-2026-05-29.md
?? _memoria/relatorio-fase2-limpeza-tecnica-2026-05-29.md
?? _memoria/relatorio-fase3-consolidacao-2026-05-29.md  ← este arquivo
```

**Distribuição:** 12 modified · 33 renamed · 20 untracked · **0 deleted** · **0 commits**.

---

## 13. Validações

| Verificação | Comando / método | Resultado |
|---|---|---|
| Backup antes de qualquer alteração | `cp` para `_archive/backup-fase3-2026-05-29/` | ✅ 10 arquivos + README |
| Doctor executado | `node _automacao/scripts/jampa-doctor.mjs --no-log` | ✅ 0 erros, 1 aviso (HITL) |
| Doctor reconhece 4 externas | mesma execução | ✅ Listadas: executar-issue, grill-with-docs, to-issues, to-prd |
| CSV passa sem falso positivo | mesma execução | ✅ "18 leads, 12 colunas, sep=',' (parser RFC 4180)" |
| Skills duplicadas eliminadas | `diff` antes + `git status` mostra `R` | ✅ `.agents/skills/executar-issue/` movido |
| Lógica do site intacta | `_site/{data,lib,components,app}/`, `tailwind.config.ts`, `next.config.js`, `vercel.json` não modificados | ✅ Confere |
| Decisões Fase 1 preservadas | `FONTE-DA-VERDADE.md` intacto; domínio e deploy mantidos | ✅ Confere |
| Fotos `r-*` não promovidas | Continuam em `_design/refs/candidatos-assets-passeios/` | ✅ Confere |
| Nenhum arquivo deletado | `git status` mostra `R/M/??` — nenhum `D` | ✅ Confere |
| Catálogo 22+1 uniformizado | estado-atual reescrito; clusters-seo + estrutura-site-recomendada DEPRECATED no topo | ✅ Confere |
| Roadmap único | sprint-atual.md arquivada; proximos-passos.md mantido | ✅ Confere |
| Deploy legado consolidado | 2 toml em `_archive/deploy-legado/` com nomes datados + README | ✅ Confere |

---

## 14. Riscos

| Risco | Mitigação |
|---|---|
| Algum agente continuar lendo `_conhecimento/clusters-seo.md` como catálogo | Nota DEPRECATED no topo + ponteiro explícito para FONTE-DA-VERDADE.md |
| Skills externas crescerem sem ser registradas | Doctor agora detecta automaticamente e avisa |
| Fotos `r-*` serem assumidas como assets reais | README explícito em `_design/refs/candidatos-assets-passeios/`; verificação prévia mostrou zero referências no código |
| Reverter `_memoria/estado-atual.md` sem backup | Backup em `_archive/backup-fase3-2026-05-29/_memoria-estado-atual.md` + instruções no README |
| Pastas vazias recriadas acidentalmente | `_archive/estrutura-inicial-vazia/README.md` documenta cada uma |

---

## 15. Resumo executivo

| Métrica | Antes Fase 3 | Depois Fase 3 |
|---|---|---|
| Skills externas registradas | 1 (executar-issue) | 4 (registradas) |
| Skills duplicadas | 1 (`executar-issue` em 2 lugares) | 0 (duplicata arquivada) |
| Avisos do doctor | 2 (CSV + executar-issue) | 1 (HITL apenas) |
| Pastas vazias na estrutura ativa | 8 | 0 (todas arquivadas ou removidas) |
| `.gitkeep` em pastas reservadas | 0 | 11 (1 `.github` + 10 `_social/*`) |
| Sprints ativas | 2 (sprint-atual.md + proximos-passos.md) | 1 (`proximos-passos.md`) |
| Roadmap ativo declarado | Implícito | Explícito (`proximos-passos.md`) |
| `_memoria/estado-atual.md` desatualizado | Sim (29 passeios, Fase 2 Squad Comercial) | Não (reescrito para 22+1, Fases 1+2+3) |
| Docs com "29 passeios" como verdade ativa | 1 (`_memoria/estado-atual.md`) | 0 |
| Docs históricos com "29 passeios" marcados | 0 | 2 (clusters-seo, estrutura-site-recomendada) |
| Versões de Netlify no `_archive/` | 2 (uma na raiz, outra em deploy-legado) | 2 (ambas em deploy-legado, datadas) |
| Pipeline com rascunhos não incorporados | 1 (já incorporado mas não arquivado) | 0 |
| Backups novos | — | 1 (`backup-fase3-2026-05-29/` com 10 arquivos) |

---

*Relatório gerado por Claude Code (Opus 4.7) em 2026-05-29.*
*Nenhum commit foi executado. Aguardando aprovação para Fase 4 (execução comercial/produto — bloqueios HITL com Murillo).*
