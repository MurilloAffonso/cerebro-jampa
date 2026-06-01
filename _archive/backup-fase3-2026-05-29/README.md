# Backup — Fase 3: Consolidação Operacional

**Criado em:** 2026-05-29
**Motivo:** snapshot dos arquivos alterados/movidos na Fase 3 antes de qualquer alteração.

## Conteúdo

| Backup | Original | Operação aplicada |
|---|---|---|
| `manifest.json` | `skills/manifest.json` | Editado — adicionadas 3 skills externas (`grill-with-docs`, `to-issues`, `to-prd`); `executar-issue` atualizada (status `registrada-fase3`); bloco `consolidacao_fase3_2026_05_29` adicionado |
| `jampa-doctor.mjs` | `_automacao/scripts/jampa-doctor.mjs` | Editado — parser CSV substituído por `parseCsvLineRfc4180()`; `checkSkillsForaDoPadrao(manifest)` reescrito para verificar 3 localizações e cruzar com `skills_externas[]` |
| `_memoria-estado-atual.md` | `_memoria/estado-atual.md` | **Reescrito** — refletindo Fase 1+2+3, catálogo 22+1, domínio Vercel, paleta v2, status atual de bloqueios HITL |
| `planejamento-sprint-atual.md` | `planejamento/sprint-atual.md` | Movido para `_archive/sprint-anterior/sprint-2026-05-05.md` |
| `_conhecimento-clusters-seo.md` | `_conhecimento/clusters-seo.md` | Topo marcado DEPRECATED em catálogo (Fase 3); conteúdo histórico preservado |
| `_conhecimento-estrutura-site-recomendada.md` | `_conhecimento/estrutura-site-recomendada.md` | Topo marcado DEPRECATED em catálogo (Fase 3); conteúdo histórico preservado |
| `lovable-homepage.md` | `_automacao/outputs/lovable/homepage-vem-passear-jampa.md` | Movido para `_archive/lovable-outputs/homepage-vem-passear-jampa-2026-04-27.md` |
| `pipeline-copy-excursoes.md` | `_pipeline/copy-excursoes-e-grupos-2026-05-08.md` | Movido para `_archive/pipeline-incorporado/copy-excursoes-e-grupos-2026-05-08.md` (copy já incorporada à página viva) |
| `agents-executar-issue-SKILL.md` | `.agents/skills/executar-issue/SKILL.md` | Movido para `_archive/skills-duplicadas/.agents/skills/executar-issue/SKILL.md` (duplicata byte-a-byte de `.claude/skills/`) |
| `_memoria-indice-mestre.md` | `_memoria/indice-mestre.md` | Backup preventivo (não foi editado nesta fase) |

## Como reverter

### Reverter manifest e doctor
```bash
cp _archive/backup-fase3-2026-05-29/manifest.json skills/manifest.json
cp _archive/backup-fase3-2026-05-29/jampa-doctor.mjs _automacao/scripts/jampa-doctor.mjs
```

### Reverter estado-atual
```bash
cp _archive/backup-fase3-2026-05-29/_memoria-estado-atual.md _memoria/estado-atual.md
```

### Reverter docs DEPRECATED
```bash
cp _archive/backup-fase3-2026-05-29/_conhecimento-clusters-seo.md _conhecimento/clusters-seo.md
cp _archive/backup-fase3-2026-05-29/_conhecimento-estrutura-site-recomendada.md _conhecimento/estrutura-site-recomendada.md
```

### Reverter movimentações
```bash
git mv _archive/sprint-anterior/sprint-2026-05-05.md planejamento/sprint-atual.md
git mv _archive/lovable-outputs/homepage-vem-passear-jampa-2026-04-27.md _automacao/outputs/lovable/homepage-vem-passear-jampa.md
git mv _archive/pipeline-incorporado/copy-excursoes-e-grupos-2026-05-08.md _pipeline/copy-excursoes-e-grupos-2026-05-08.md
git mv _archive/skills-duplicadas/.agents/skills/executar-issue .agents/skills/executar-issue
```

## Não deletar este diretório sem aprovação explícita de Murillo.

## Ver também
- `../backup-fase1-2026-05-29/`
- `../backup-fase2-2026-05-29/`
- `../../_memoria/relatorio-fase3-consolidacao-2026-05-29.md`
