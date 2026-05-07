# Checkpoint — Site Fase 1 — pós ISSUE-08

**Data:** 2026-05-01

## Status das Issues

| Issue | Descrição | Status |
|-------|-----------|--------|
| ISSUE-01 | Reconciliar constantes de empresa | ✅ concluída + push |
| ISSUE-03 | Expandir passeios.ts para 22 passeios | ✅ concluída + push |
| ISSUE-04 | Dados do serviço Transfer 24h | ✅ concluída + push |
| ISSUE-05 | Tratamento de [CONSULTAR] com CTA WhatsApp | ✅ concluída + push |
| ISSUE-06 | Header com dropdown e CTA WhatsApp | ✅ concluída (commit pendente) |
| ISSUE-07 | Footer com FAQ, Transfer, Sobre e confiança | ✅ concluída + push |
| ISSUE-08 | Home atualizada (hero, categorias, Murillo, CTA) | ✅ concluída — **commit e push pendentes** |

## Próximo passo imediato

Commit seletivo da ISSUE-06 e ISSUE-08:

```bash
git add _site/components/Header.tsx
git commit -m "feat(site): header com dropdown de categorias e CTA WhatsApp"

git add _site/app/page.tsx
git commit -m "feat(site): home com categorias, prova social e bloco Murillo"

git push origin main
```

## Depois do push

Executar **ISSUE-09** — Hub `/passeios/`: verificar listagem dos 22 passeios agrupados
por categoria com nomes legíveis, emojis e links corretos para `/passeios/[categoria]/`.

## Arquivos alterados sem commit

- `_site/components/Header.tsx` — ISSUE-06
- `_site/app/page.tsx` — ISSUE-08
