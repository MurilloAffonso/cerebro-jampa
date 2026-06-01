# Pipeline Incorporado — Arquivados

**Arquivado em:** 2026-05-29 (Fase 3)
**Motivo:** A pasta `_pipeline/` continha rascunhos de copy aguardando aprovação antes de virar página. Como a única copy presente já foi incorporada ao site, os arquivos foram movidos para cá.

## Arquivos

| Arquivo | Data original | Destino no site |
|---|---|---|
| `copy-excursoes-e-grupos-2026-05-08.md` | 2026-05-08 | Incorporado em `_site/app/[locale]/servicos/excursoes-e-grupos/page.tsx` via `messages/{pt,en,es}.json` (namespace `ExcursoesPage`) |

## Como verificar incorporação

```bash
grep -l "ExcursoesPage" _site/app/[locale]/servicos/excursoes-e-grupos/page.tsx _site/messages/pt.json
```

## Regra

Quando uma copy do pipeline for incorporada à página viva, mover para cá. Não deixar rascunhos vivos competindo com o site.

## Não deletar este diretório sem aprovação explícita de Murillo.
