# Auditoria — Estado Atual do Site
**Data:** 2026-05-01
**Branch:** main
**Último commit local:** `47527bc feat(site): adiciona robots e página 404`
**Remote:** https://github.com/MurilloAffonso/cerebro-jampa.git

---

## 1. Estado Geral: ⚠️ ATENÇÃO

Build passa, type-check limpo, 32 rotas renderizadas. Dois problemas menores antes do deploy.

---

## 2. Issues Concluídas

| Issue | Descrição | Commit |
|---|---|---|
| ISSUE-06 | Header dropdown + menu mobile | `5723e0e` |
| ISSUE-08 | Home (`/`) | `1333209` |
| ISSUE-09 | Hub `/passeios/` | `2522c50` |
| ISSUE-10 | Páginas de categoria | `b590f14` |
| ISSUE-11 | Template individual dos 3 prioritários | `b9a7520` |
| ISSUE-12 | Validação 19 passeios restantes | (sem alteração) |
| ISSUE-13 | Página `/servicos/transfer-24h/` | `4fc1714` |
| ISSUE-14 | Página `/faq/` | `4e3e9f2` |
| ISSUE-15 | `sitemap.ts` (32 URLs) | `2c1a499` |
| ISSUE-16 | `robots.ts` + `not-found.tsx` | `47527bc` |
| ISSUE-17 | Audit CTA WhatsApp | (sem alteração) |

---

## 3. Próxima Issue Correta

**ISSUE-18 — Audit de responsividade mobile 320px**
Após ISSUE-18: ISSUE-19 (QA final + build). Depois: ISSUE-22 e ISSUE-23 (decisão sobre `/sobre` e `/calendario`).

---

## 4. Arquivos Modificados Não Commitados

| Arquivo | Situação |
|---|---|
| `_conhecimento/objecoes.md` | M — modificado |
| `_crm/leads.csv` | M — modificado |
| `skills/agente-atendimento-pre-passeio/SKILL.md` | M — modificado |
| `skills/agente-comercial-jampa/SKILL.md` | M — modificado |
| `skills/proposta-passeio/SKILL.md` | M — modificado |

---

## 5. Arquivos Novos Não Rastreados (??)

- `_conhecimento/base-operacional-comercial.md`
- `_conhecimento/scripts-atendimento-whatsapp.md`
- `_crm/matriz-pendencias.md`
- `_crm/resumo-executivo.md`
- `_design/cloud-design/homepage-vem-passear/checklist-preenchido.md`
- `_memoria/checkpoint-site-issue-08.md`
- `_memoria/checkpoint-site-urls-e-skills.md`
- `_memoria/plano-instalacao-skills-site.md`
- `_site/.claude/` (pasta de configuração local)

---

## 6. Problemas Encontrados

### P1 — `[CONSULTAR]` cru no Hub `/passeios/` ⚠️
**Arquivo:** `_site/app/passeios/page.tsx` linhas 103 e 107
**Problema:** Usa `{p.duracao || "[CONSULTAR]"}` e `{p.preco || "[CONSULTAR]"}`. O operador `||` não detecta a string `"[CONSULTAR]"` (que é truthy) — ela passa diretamente para o JSX.
**Passeios afetados:** `quadriciclo-coqueirinho`, `quadriciclo-praia-bela`, `mergulho` (preco e duracao = "[CONSULTAR]").
**Correção:** substituir por `isCampoIndisponivel` (já disponível em `lib/consultar.ts`), igual ao que foi feito em `[categoria]/page.tsx`.

### P2 — Commits não enviados ao GitHub ⚠️
**Situação:** 8 commits locais ainda não foram enviados ao remote.
**Correção:** `git push` antes do deploy.

### P3 — `/sobre` e `/calendario` aparecem no build (esperado) ℹ️
**Situação:** Ambas as rotas existem no código e são renderizadas. Estão fora do sitemap e bloqueadas no robots.txt. ISSUE-22 e ISSUE-23 pendentes de decisão (HITL).

### P4 — `empresa.avaliacao` não existe (campo é `empresa.rating`) ℹ️
**Situação:** O campo correto é `empresa.rating.valor` (4.9) e `empresa.rating.totalAvaliacoes` (61). Nenhuma página usa `empresa.avaliacao` — não há bug ativo.

---

## 7. Melhorias Recomendadas

1. **Corrigir P1** antes de deploy — substituir `||` por `isCampoIndisponivel` no hub `/passeios/`.
2. **`git push`** para sincronizar remote com os 8 commits locais.
3. **Decidir ISSUE-22 e ISSUE-23** (sobre e calendario) antes do lançamento.
4. **Obter depoimento real para Seixas** (ISSUE-21 — HITL) — atualmente o bloco está suprimido.
5. **Obter fotos reais** (ISSUE-20 — HITL) — hero usando placeholder nos 3 prioritários.

---

## 8. Risco Antes de Deploy

| Item | Risco | Status |
|---|---|---|
| Build passa | ✅ | OK |
| type-check limpo | ✅ | OK |
| 32 URLs acessíveis | ✅ | OK |
| CTA WhatsApp em todas as páginas | ✅ | OK |
| `[CONSULTAR]` cru no hub | ⚠️ Médio | Corrigir antes |
| Commits não enviados | ⚠️ Médio | `git push` antes do deploy |
| Fotos placeholder no hero | ⚠️ Médio | HITL pendente |
| Depoimento Seixas ausente | ℹ️ Baixo | Bloco suprimido automaticamente |
| `/sobre` e `/calendario` vivos | ℹ️ Baixo | Bloqueados no robots, fora do sitemap |

---

## 9. Próximo Passo Exato

1. Corrigir P1: substituir `||` por `isCampoIndisponivel` em `_site/app/passeios/page.tsx` (linhas 103 e 107).
2. Commitar a correção como ajuste da ISSUE-09.
3. `git push` para sincronizar o remote.
4. Executar ISSUE-18 (audit mobile 320px).
5. Executar ISSUE-19 (QA final + build oficial).
