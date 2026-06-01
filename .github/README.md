# .github/ — GitHub Configuration

**Status:** Mantida para uso futuro (Fase 3 — 2026-05-29).

## Função futura

Esta pasta é reservada para configurações do GitHub:

- `.github/workflows/` — GitHub Actions (CI/CD): type-check, lint, build de PR, deploy preview
- `.github/ISSUE_TEMPLATE/` — Templates de issue
- `.github/PULL_REQUEST_TEMPLATE.md` — Template de PR
- `.github/CODEOWNERS` — Code owners

## Decisão de não usar agora

O deploy atual é Vercel com integração automática (build no push para `main` → publish em `www.vempassearjampa.com`). Nenhum workflow customizado é necessário hoje. Quando o time crescer ou for adicionado lint/test obrigatório em PR, ativar.

## Referência

Manter este README enquanto a pasta estiver vazia. O `.gitkeep` ao lado garante que a pasta seja rastreada pelo git mesmo sem outros arquivos.
