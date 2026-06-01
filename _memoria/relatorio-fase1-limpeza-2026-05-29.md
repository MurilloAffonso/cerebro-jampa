# Relatório — Fase 1: Limpeza e Verdade Única

**Data:** 2026-05-29
**Branch:** `main`
**HEAD na execução:** `9bd97e4 fix(media): corrige isolamento e nomenclatura SEO das fotos por passeio`
**Escopo:** organização, documentação e fonte da verdade — **não** foi tocada lógica do site, código de produção, conteúdo comercial, paleta `tailwind.config.ts`, dados `data/*.ts`, configs de deploy (`next.config.js`, `vercel.json`, `netlify.toml`).
**Aprovações HITL desta sessão:** domínio oficial → `vempassearjampa.com`; deploy oficial → Vercel.

---

## 1. Decisões fixadas (input do Murillo)

| Tema | Valor canônico | Onde foi propagado |
|---|---|---|
| Domínio oficial | `https://www.vempassearjampa.com` | `FONTE-DA-VERDADE.md`, `_site/README.md`, `_site/CONTEXT.md`, `docs/handoff-tecnico.md`, auto-memory |
| Deploy oficial | Vercel | mesmos arquivos + nota legado sobre `netlify.toml` |
| Catálogo oficial | 22 passeios + 1 serviço (ADR 0001) | `FONTE-DA-VERDADE.md`, `_site/README.md`, `_site/ESTRUTURA.md` |
| Paleta oficial | v2 — `#107997` ocean + `#092238` navy + `#D97706` acento | `FONTE-DA-VERDADE.md`, `_site/ESTRUTURA.md`, `docs/handoff-tecnico.md` |
| Fontes oficiais | DM Sans (body) + Lora (headings) | mesmos |
| Stack | Next.js 14 + React 18 + TS 5 + Tailwind 3 + next-intl 4.12 | mesmos |

---

## 2. Arquivos criados

| Caminho | Função |
|---|---|
| `FONTE-DA-VERDADE.md` (raiz) | **Documento âncora.** Identidade, domínio, deploy, catálogo (22+1), paleta v2, stack, modelos IA, skills, hierarquia, status, regra ouro, histórico |
| `_archive/backup-fase1-2026-05-29/` (+ `README.md`) | Snapshot dos 12 arquivos antes da edição/movimentação |
| `_archive/legado-obsidian/README.md` | Explica o conteúdo dos 5 arquivos do template Obsidian movidos |
| `_memoria/relatorio-fase1-limpeza-2026-05-29.md` | este arquivo |
| `C:\Users\noteacer\.claude\projects\…\memory\reference_fonte_da_verdade.md` | Memo do auto-memory apontando para o FONTE-DA-VERDADE |

---

## 3. Arquivos alterados (editados in-place)

| Caminho | Mudança |
|---|---|
| `_site/README.md` | Ponteiro para FONTE-DA-VERDADE no topo; stack atualizada (Next.js 14, next-intl, sharp, Vercel Analytics); estrutura real (rotas sob `[locale]/`, 39 componentes, dados reais); catálogo 22+1 com nota sobre legado de 29; variáveis de ambiente com domínio `www.vempassearjampa.com`; seção Deploy com Vercel + nota sobre `netlify.toml`; status snapshot 2026-05-29 com bloqueios HITL; WhatsApp corrigido |
| `_site/ESTRUTURA.md` | Ponteiro para FONTE-DA-VERDADE; tabela de rotas refeita com `[locale]/` real (12 rotas vivas) e status; lista de 39 componentes; tabela de 10 arquivos de dados com estado real; paleta v2 completa + nota sobre v1 fora de uso; fontes DM Sans/Lora |
| `_site/CONTEXT.md` | Ponteiro para FONTE-DA-VERDADE; `SITE_URL` atualizado para `https://www.vempassearjampa.com`; adicionado Deploy + Cadastur + CNPJ; nota explícita sobre `.com.br` reservado e `.netlify.app` aposentado |
| `docs/handoff-tecnico.md` | Ponteiro para FONTE-DA-VERDADE; HEAD atualizado; stack com versões reais + Vercel + DM Sans/Lora + i18n; paleta v2 com mapa Token→Uso e nota sobre v1; Estado da Home reflete v4 real (HomeVideoHero + Categorias + GoogleReviewsBlock + CadasturCertificate + HomePasseiosSection + MurilloBlock + PartnersMarquee + CTAFinal/CTASticky); Estado das Páginas de Passeio reflete TrustBlock já integrado; snapshot de arquivos não commitados atualizado para 2026-05-29 |
| `_memoria/MEMORY.md` | Reescrito — removida referência a `prioridades.md` (inexistente); adicionados ponteiros para FONTE-DA-VERDADE, GMB (3 arquivos), checkpoints; ordem de leitura ajustada para começar pelo FONTE-DA-VERDADE |

---

## 4. Arquivos arquivados (movidos via `git mv` — histórico preservado)

### Restos do template Obsidian → `_archive/legado-obsidian/`

| Origem | Destino |
|---|---|
| `Bem-vindo.md` | `_archive/legado-obsidian/Bem-vindo.md` |
| `crie um link.md` | `_archive/legado-obsidian/crie um link.md` |
| `Sem título.base` | `_archive/legado-obsidian/Sem título.base` |
| `.verb.md` | `_archive/legado-obsidian/dot-verb.md` |
| `media/downloads.png.md` | `_archive/legado-obsidian/media-downloads.png.md` |

### Memória superada → `_memoria/_arquivo/`

| Origem | Destino | Motivo |
|---|---|---|
| `_memoria/auditoria-estado-atual-site.md` | `_memoria/_arquivo/auditoria-estado-atual-site-2026-05-01.md` | Datado 2026-05-01, citava commit `47527bc`; HEAD hoje é `9bd97e4` (≥ 10 commits depois) |
| `_memoria/decisoes.md` | `_memoria/_arquivo/decisoes-2026-04-25.md` | Versão curta (4 KB) superada por `decisoes-estrategicas.md` (47 KB, 44+ decisões) |

---

## 5. Conflitos resolvidos

| Conflito original | Resolução |
|---|---|
| **Domínio em 3 valores** (`.com` em `next.config.js`, `.com.br` em `CONTEXT.md`/`empresa.md`, `.netlify.app` na auto-memory) | Fixado em `www.vempassearjampa.com` (Vercel); auto-memory atualizada; `.com.br` marcado como reservado/não configurado; `.netlify.app` marcado como aposentado |
| **Deploy ambíguo** (`netlify.toml` raiz + `vercel.json` + `_site/README.md` dizia Vercel) | Fixado em **Vercel** (confirmado via headers HTTP); `netlify.toml` raiz marcado como legado (sem mover ainda — Fase 2) |
| **Paleta divergente** (`_site/README.md`, `_site/ESTRUTURA.md`, `docs/handoff-tecnico.md` mostravam v1 #FF6B35/#004E89/Inter; `tailwind.config.ts` já era v2) | Paleta v2 sincronizada em todos os 3 docs com nota explícita "v1 fora de uso desde 2026-05-09" |
| **Catálogo divergente** (`_site/README.md` dizia 29 placeholder; `_memoria/estado-atual.md` 29; `CONTEXT.md` 22+1; `clusters-seo.md` 29) | Fixado em **22+1** com nota explícita sobre legado de "29" em `clusters-seo.md` e `estrutura-site-recomendada.md` |
| **MEMORY.md quebrado** apontava para `prioridades.md` inexistente | Removida a entrada; novo índice aponta para `proximos-passos.md`, FONTE-DA-VERDADE e arquivos GMB |
| **Documentação desatualizada** (`docs/handoff-tecnico.md` dizia `TrustBlock` pendente, `HomeVideoHero` aguardando commit; `_memoria/auditoria-estado-atual-site.md` 28 dias parado) | Handoff atualizado para refletir TrustBlock já integrado e Home v4; auditoria movida para `_arquivo/` |
| **Restos Obsidian poluindo a raiz** (5 arquivos vazios/template) | Movidos para `_archive/legado-obsidian/` com README |

---

## 6. Conflitos ainda pendentes (Fase 2 ou pedem decisão)

| # | Item | Tipo | Risco | Recomendação |
|---|---|---|---|---|
| 1 | `netlify.toml` na raiz | Legado | Baixo (build é Vercel) | Mover para `_archive/` (sem deletar) — exige aprovação para mexer em arquivo de deploy |
| 2 | `next.config.js` faz canonical para `https://www.vempassearjampa.com/` (já correto), mas o redirect `vempassearjampa.com → www` precisa confirmação se há outras variantes (`.com.br`?) sem redirect | Lógica do site | Baixo | Aceitar como está; revisar quando `.com.br` for configurado |
| 3 | 26 imagens soltas na raiz (`hero-desktop.png`, `home-1440.png`, `r-*.jpg` ×10, `val-*-1440.png` ×4, etc.) | Entulho | Baixo | Mover para `_design/refs/` ou `_archive/screenshots-2026-05/`; adicionar `*.png`/`*.jpg` da raiz ao `.gitignore` |
| 4 | `_site/out.zip` (65 MB) + `_site/out/` (71 MB) versionados | Inflação do repo | Médio | Remover do tracking + adicionar a `.gitignore` |
| 5 | `_site/paginas/`, `_site/seo/`, `src/types/`, `.github/`, `How to use Claude/`, `media/` (agora vazia após mover `.md`) | Pastas vazias | Baixo | Remover ou criar `.gitkeep` com README explicativo |
| 6 | `executar-issue` skill em `.claude/skills/` + `.agents/skills/` + `skills_externas[]` do manifest | Inconsistência de skill | Baixo | Decisão: mover para `skills/` (padrão) ou registrar exceção definitiva |
| 7 | 3 skills externas em `_site/.claude/skills/` (`grill-with-docs`, `to-issues`, `to-prd`) sem registro no manifest | Inconsistência | Baixo | Mover para `skills/` ou documentar como skills locais do _site |
| 8 | Doctor avisa CSV com parser ingênuo (falso positivo recorrente em `_crm/leads.csv`) | Doctor desalinhado | Baixo | Atualizar `jampa-doctor.mjs` para parser RFC 4180 |
| 9 | `planejamento/sprint-atual.md` (2026-05-05) descreve sprint diferente da `_memoria/proximos-passos.md` (2026-05-28) | Roadmap duplicado | Médio | Arquivar `planejamento/sprint-atual.md` e consolidar tudo em `_memoria/proximos-passos.md` |
| 10 | `_pipeline/` e `_social/` subutilizadas (1 arquivo / pastas vazias) | Organizacional | Baixo | Manter ou arquivar conforme decisão de uso futuro |
| 11 | `_memoria/estado-atual.md` ainda diz "29 passeios catalogados" | Doc desatualizado | Baixo | Atualizar para 22+1 (Fase 2 — fora do escopo desta limpeza para não tocar conteúdo comercial sem revisão) |
| 12 | 8 arquivos PNG não rastreados na raiz (`home-1440.png`, `val-*.png`) | Working tree sujo | Baixo | Mover ou commitar; ver item 3 |

---

## 7. Validação

| Verificação | Resultado |
|---|---|
| Backup criado antes de qualquer alteração | ✅ `_archive/backup-fase1-2026-05-29/` com 12 arquivos |
| Nenhum arquivo deletado | ✅ Todos movidos via `git mv` ou arquivados |
| `git status` esperado (5 modified + 7 renamed + novos) | ✅ Confere |
| Lógica do site não tocada | ✅ `_site/data/*`, `_site/lib/*`, `_site/components/*`, `tailwind.config.ts`, `next.config.js`, `vercel.json` intactos |
| Conteúdo comercial não alterado | ✅ `_conhecimento/` intacto; `_crm/leads.csv` intacto |
| Auto-memory atualizada | ✅ `reference_dominio_oficial.md` já estava certo (Vercel/.com); `MEMORY.md` índice atualizado; novo memo `reference_fonte_da_verdade.md` criado |
| FONTE-DA-VERDADE.md criado | ✅ raiz |

---

## 8. Próximos passos recomendados

### Fase 2 — Limpeza técnica (com aprovação por bloco)

1. **Entulho da raiz** (item 3): mover 26 imagens para `_design/refs/screenshots-2026-05/`; adicionar regra ao `.gitignore`.
2. **Build versionado** (item 4): `git rm --cached _site/out _site/out.zip _site/tsconfig.tsbuildinfo`; adicionar ao `.gitignore`.
3. **Deploy single-source** (item 1): mover `netlify.toml` (raiz) para `_archive/`.
4. **Pastas vazias** (item 5): decisão `.gitkeep`+README vs. remoção.
5. **Skills externas** (itens 6 e 7): consolidar `executar-issue` + `grill-with-docs` + `to-issues` + `to-prd` em `skills/` ou registrar formalmente como externas.
6. **Doctor CSV** (item 8): atualizar parser para RFC 4180.

### Fase 3 — Reconciliação de roadmap

7. **Roadmap único** (item 9): arquivar `planejamento/sprint-atual.md`; consolidar tudo em `_memoria/proximos-passos.md`.
8. **`_memoria/estado-atual.md` atualizado** (item 11): reescrever para refletir 22+1, Fase 1 em produção, bloqueios HITL atuais.

### Fase 4 — Execução de produto (depende de Murillo)

9. Fotos reais (Seixas, Areia Vermelha, Picãozinho), foto Murillo, depoimentos.
10. Vídeo hero (`/videos/home/hero-jampa.{webm,mp4}` + poster).
11. `preco` do Transfer 24h.
12. Validar tábua de maio/2026 (`revisadoPorMurillo: true`).
13. Publicar 1 post de blog por semana (10 em draft).
14. Otimização GMB (descrição + 5 fotos + Q&A — checklist em `_memoria/gmb-otimizacao-2026-05.md`).
15. Registrar leads no `_crm/leads.csv` até atingir 30+.

---

## 9. Riscos

| Risco | Mitigação |
|---|---|
| Algum agente IA continuar lendo as cores antigas | Os 3 docs principais foram corrigidos + FONTE-DA-VERDADE existe + auto-memory atualizada — risco baixo |
| Domínio `.com.br` ainda referenciado em código que não foi inspecionado | Pesquisa adicional recomendada na Fase 2 (Grep nos arquivos `_site/data/*.ts`, `_site/lib/seo.ts`, `messages/*.json`) — fora do escopo desta fase pois é lógica |
| Arquivos arquivados serem deletados acidentalmente | READMEs explicativos em `_archive/legado-obsidian/` e `_archive/backup-fase1-2026-05-29/` |
| `netlify.toml` raiz causar confusão futura | Marcado como legado em FONTE-DA-VERDADE e `_site/README.md`; remoção fica para Fase 2 |

---

*Relatório gerado por Claude Code (Opus 4.7) em 2026-05-29.*
*Próxima sessão: aguardar aprovação para iniciar Fase 2 (limpeza técnica).*
