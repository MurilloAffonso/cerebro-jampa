# Backup — Fase 1: Limpeza e Verdade Única

**Criado em:** 2026-05-29
**Motivo:** snapshot dos arquivos editados/movidos na Fase 1 antes de qualquer alteração, para reversibilidade.

## Conteúdo

| Backup | Arquivo de origem | Operação aplicada |
|---|---|---|
| `_site-README.md` | `_site/README.md` | Editado — paleta v2, fontes DM Sans/Lora, contagem 22+1, domínio `www.vempassearjampa.com`, deploy Vercel |
| `_site-ESTRUTURA.md` | `_site/ESTRUTURA.md` | Editado — paleta v2, fontes corretas, rotas reais sob `[locale]/`, componentes (39), dados |
| `_site-CONTEXT.md` | `_site/CONTEXT.md` | Editado — `SITE_URL` para `www.vempassearjampa.com`, ponteiro para FONTE-DA-VERDADE |
| `docs-handoff-tecnico.md` | `docs/handoff-tecnico.md` | Editado — paleta v2, fontes, domínio, deploy, estado real Home e Passeios, arquivos modificados snapshot 2026-05-29 |
| `_memoria-MEMORY.md` | `_memoria/MEMORY.md` | Reescrito — referência a `prioridades.md` (inexistente) removida; adicionados ponteiros para FONTE-DA-VERDADE, GMB, checkpoints |
| `_memoria-auditoria-estado-atual-site.md` | `_memoria/auditoria-estado-atual-site.md` | Movido para `_memoria/_arquivo/auditoria-estado-atual-site-2026-05-01.md` (estava desatualizado em 28 dias) |
| `_memoria-decisoes.md` | `_memoria/decisoes.md` | Movido para `_memoria/_arquivo/decisoes-2026-04-25.md` (superado por `decisoes-estrategicas.md`) |
| `Bem-vindo.md` | raiz | Movido para `_archive/legado-obsidian/` |
| `crie-um-link.md` | `crie um link.md` (raiz) | Movido para `_archive/legado-obsidian/crie um link.md` |
| `Sem-titulo.base` | `Sem título.base` (raiz) | Movido para `_archive/legado-obsidian/Sem título.base` |
| `dot-verb.md` | `.verb.md` (raiz) | Movido para `_archive/legado-obsidian/dot-verb.md` |
| `media-downloads.png.md` | `media/downloads.png.md` | Movido para `_archive/legado-obsidian/media-downloads.png.md` |

## Como reverter

Para qualquer arquivo editado:

```bash
cp _archive/backup-fase1-2026-05-29/<arquivo>.md <caminho original>
```

Para qualquer arquivo movido (preserva histórico do git):

```bash
git mv _archive/legado-obsidian/<arquivo> <caminho original>
# ou
git mv _memoria/_arquivo/<arquivo> _memoria/<nome original>
```

## Não deletar este diretório sem aprovação explícita de Murillo.
