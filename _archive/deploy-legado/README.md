# Deploy Legado — Netlify

**Consolidado em:** 2026-05-29 (Fase 3 — consolidação)
**Status:** Histórico append-only. Deploy oficial é Vercel.

## Decisão canônica (Fase 1, confirmada Fase 3)

- **Deploy oficial:** **Vercel**
- **Domínio oficial:** `https://www.vempassearjampa.com`
- **Confirmação:** headers HTTP retornaram `server: Vercel`, `x-vercel-id: gru1` (São Paulo) em 2026-05-29
- **Documentação canônica:** `../../FONTE-DA-VERDADE.md` (raiz)

## Arquivos arquivados

| Arquivo | Data original | Origem | Conteúdo |
|---|---|---|---|
| `netlify-2026-05-14.toml` | 2026-05-14 | Estava em `_archive/netlify.toml` desde maio | `[build] command = "npm run build"` + `publish = ".next"` + plugin `@netlify/plugin-nextjs`. Versão inicial pós-migração de raiz. |
| `netlify-2026-05-22.toml` | 2026-05-22 | Era `netlify.toml` na raiz; movido aqui na Fase 2 (2026-05-29) | `[build] base = "_site"` + `command = "npm run build"` + `publish = ".next"` + `NODE_VERSION = "20"`. Versão final pré-migração para Vercel. |

## Linha do tempo

1. **2026-05-14:** primeiro `netlify.toml` no projeto, com plugin Next.js.
2. **2026-05-22:** revisão para apontar `base = "_site"` (build no diretório certo) + Node 20.
3. **2026-05-29 (Fase 1):** decisão de Vercel como oficial; `netlify.toml` raiz documentado como legado.
4. **2026-05-29 (Fase 2):** `git mv` da raiz para `_archive/deploy-legado/`.
5. **2026-05-29 (Fase 3):** consolidação das duas versões em um único diretório com nomes datados.

## Como reverter (improvável)

```bash
# Voltar para Netlify versão final
git mv _archive/deploy-legado/netlify-2026-05-22.toml netlify.toml
```

Depois: reconfigurar integração Netlify no dashboard, desligar deploy Vercel, atualizar DNS de `www.vempassearjampa.com` para Netlify.

## Não deletar este diretório sem aprovação explícita de Murillo.
