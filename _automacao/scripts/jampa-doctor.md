# jampa-doctor

Health-check do CEREBRO.JAMPA. Detecta desalinhamentos entre manifest, skills, schema, CLAUDE.md, CRM e site.

## Uso

```bash
node _automacao/scripts/jampa-doctor.mjs            # saída completa + log
node _automacao/scripts/jampa-doctor.mjs --quiet    # só resumo
node _automacao/scripts/jampa-doctor.mjs --no-log   # não grava log
```

Requer Node ≥ 18. Sem dependências externas.

## O que verifica

| # | Check | Falha / Aviso |
|---|-------|---------------|
| 1 | `skills/` ↔ `skills/manifest.json` | erro: pasta sem entrada ou entrada sem pasta |
| 2 | Cada `SKILL.md` tem YAML frontmatter com `name` e `description` | erro: faltando; aviso: name diverge do id da pasta |
| 3 | Enum `skill_primaria` em `_automacao/schemas/tarefa-jarvis.schema.json` cobre o manifest | aviso: skills faltando ou enum órfão |
| 4 | `CLAUDE.md` declara contagem correta de skills | aviso: divergência |
| 5 | `_crm/leads.csv` parseável (header + colunas consistentes) | aviso: linhas com nº de colunas inconsistente |
| 6 | Placeholders perigosos (`TODO`, `FIXME`, `[CONFIRMAR ...]`, `[CONSULTAR ...]`) em `_site/app/`, `_site/components/`, `_site/data/` | aviso: lista até 8 hits |
| 7 | Skills fora do diretório padrão (`.claude/skills/`) | aviso: lista skills órfãs |
| 8 | `_automacao/logs/` existe | aviso: criar |
| 9 | Conhecimento crítico (passeios, tom-de-voz, provas, empresa, catálogo) presente | erro: arquivo ausente |

## Exit codes

- `0` — zero erros (avisos OK)
- `1` — pelo menos um erro

## Logs

Por padrão grava em `_automacao/logs/doctor-YYYY-MM-DD-HH.log`. Use `--no-log` para desabilitar.

## Como adicionar um check novo

1. Criar função `checkXyz()` em `jampa-doctor.mjs` usando os helpers `rec(level, check, msg, hint)` e `ok(check, msg)`.
2. Chamar a função na seção "Run" no fim do arquivo.
3. Atualizar a tabela acima.

## Quando rodar

- Antes de commit que toca em `skills/`, `_automacao/schemas/`, `CLAUDE.md`, `_crm/leads.csv`
- Após criar/remover skill
- Em rotina semanal de manutenção
