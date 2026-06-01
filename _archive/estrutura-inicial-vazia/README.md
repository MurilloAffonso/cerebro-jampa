# Estrutura Inicial Vazia — Pastas Removidas (Fase 3)

**Arquivado em:** 2026-05-29
**Motivo:** Pastas vazias herdadas da criação inicial do projeto, sem conteúdo e sem uso operacional. Removidas para despoluir a estrutura.

## Pastas removidas

| Pasta original | Propósito original (suposto) | Status real | Como recriar |
|---|---|---|---|
| `src/` (+ `src/types/`) | Estrutura inicial pre-`_site/` | 100% vazia desde sempre — código real vive em `_site/` | `mkdir -p src/types` |
| `_site/paginas/` | Reservada para páginas pré-App-Router | 100% vazia — rotas vivem em `_site/app/[locale]/` | `mkdir _site/paginas` |
| `_site/seo/` | Reservada para schemas/utilitários SEO | 100% vazia — lógica vive em `_site/lib/seo.ts` | `mkdir _site/seo` |
| `How to use Claude/` | Origem desconhecida (nome em inglês destoa do padrão pt-BR) | 100% vazia | `mkdir "How to use Claude"` |
| `media/` | Continha apenas `downloads.png.md` (movido para `_archive/legado-obsidian/` na Fase 1) | Vazia após Fase 1 | `mkdir media` |
| `.agents/` (+ `.agents/skills/`) | Padrão alternativo de skills (Cursor/Codex) | Continha duplicata byte-a-byte de `executar-issue` (movida para `_archive/skills-duplicadas/.agents/skills/executar-issue/`) | Já documentada em `_archive/skills-duplicadas/` |
| `_automacao/outputs/` (+ `lovable/`) | Outputs de skills | Continha apenas `lovable/homepage-vem-passear-jampa.md` (movido para `_archive/lovable-outputs/`) | `mkdir -p _automacao/outputs/lovable` |
| `_pipeline/` | Rascunhos de copy aguardando aprovação antes de virar página | Único arquivo (`copy-excursoes-e-grupos-2026-05-08.md`) já incorporado à página `/servicos/excursoes-e-grupos` — movido para `_archive/pipeline-incorporado/` | `mkdir _pipeline` |

## Regra

Se voltar a precisar de qualquer uma dessas pastas, recriar localmente e popular antes de commitar. Não criar pasta vazia "para o futuro".

## Não deletar este registro sem aprovação explícita de Murillo.
