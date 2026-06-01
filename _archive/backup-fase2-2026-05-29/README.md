# Backup — Fase 2: Limpeza Técnica

**Criado em:** 2026-05-29
**Motivo:** snapshot dos 3 arquivos alterados/movidos na Fase 2.

## Conteúdo

| Backup | Arquivo original | Operação |
|---|---|---|
| `root.gitignore` | `.gitignore` (raiz) | Reescrito — adicionado bloco "Build artifacts do Next.js", regra `/*.png/jpg/jpeg/gif/webp` para bloquear imagens na raiz, removida entrada órfã `seixas-full.png`, cabeçalho documentado |
| `_site.gitignore` | `_site/.gitignore` | Apenas inspecionado, não alterado |
| `netlify.toml` | `netlify.toml` (raiz) | Movido via `git mv` para `_archive/deploy-legado/netlify.toml` (Vercel é o deploy oficial) |

## Como reverter

### `.gitignore` raiz
```bash
cp _archive/backup-fase2-2026-05-29/root.gitignore .gitignore
```

### `netlify.toml`
```bash
git mv _archive/deploy-legado/netlify.toml netlify.toml
```

### Imagens da raiz (caso queira tudo de volta)
```bash
git mv _design/refs/screenshots-2026-05/*.{png,jpg,jpeg} ./
git mv _design/refs/candidatos-assets-passeios/*.jpg ./
mv _design/refs/validacao-layouts-2026-05/*.png ./
```

## Não deletar este diretório sem aprovação explícita de Murillo.

## Ver também

- `../backup-fase1-2026-05-29/` — backup da Fase 1 (12 arquivos)
- `../../_memoria/relatorio-fase2-limpeza-tecnica-2026-05-29.md` — relatório completo
