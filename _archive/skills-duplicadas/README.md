# Skills Duplicadas — Arquivadas

**Arquivado em:** 2026-05-29 (Fase 3)
**Motivo:** Skills duplicadas em diretórios alternativos. Versão canônica permanece em outra localização.

## Duplicatas

| Arquivo arquivado | Versão canônica em produção | Confirmação |
|---|---|---|
| `.agents/skills/executar-issue/SKILL.md` | `.claude/skills/executar-issue/SKILL.md` | `diff -q` retornou idênticos (ambos 104 linhas, byte-a-byte) em 2026-05-29 |

## Decisão de padrão (Fase 3)

`.claude/` é o padrão oficial de skills externas do projeto (Claude Code). `.agents/` era padrão alternativo (Cursor/Codex) sem uso ativo. Manifest registra apenas a versão `.claude/`.

## Como reverter (improvável)

```bash
mkdir -p .agents/skills
git mv _archive/skills-duplicadas/.agents/skills/executar-issue .agents/skills/executar-issue
```

## Não deletar este diretório sem aprovação explícita de Murillo.
