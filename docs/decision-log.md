# decision-log.md

Índice de decisões estruturais do CEREBRO.JAMPA.

**Fonte de verdade completa:** `_memoria/decisoes.md` (decisões narrativas em Markdown)  
**Schema de decisão:** `_automacao/schemas/decision.schema.json`  
**Responsável final:** Murillo Affonso

---

## Como registrar uma decisão

1. Abrir `_memoria/decisoes.md`
2. Adicionar entrada com o template abaixo
3. Se afetar código: registrar também em `_memoria/decisoes-estrategicas.md`
4. Se afetar skills: rodar `node _automacao/scripts/jampa-doctor.mjs`

### Template de entrada

```markdown
## YYYY-MM-DD — [Título da decisão]

**Decisão:** O que foi decidido, em linguagem direta.

**Razão:** Por que esta decisão foi tomada.

**Impacto:** Quais arquivos, fluxos ou processos são afetados.

**Status:** ✅ Implementada | ⏳ Pendente | 🔄 Revisada | ❌ Cancelada

**Aprovado por:** Murillo
```

---

## Índice de decisões por categoria

### Infraestrutura / Vault

| Data | Título | Status | Arquivo |
|------|--------|--------|---------|
| 2026-04-25 | Vault Obsidian como memória persistente | ✅ | `_memoria/decisoes.md` |
| 2026-05-05 | Fundação mínima do CEREBRO.JAMPA | ✅ | `_memoria/decisoes.md` |

### Site

| Data | Título | Status | Arquivo |
|------|--------|--------|---------|
| 2026-04-25 | Fase 1 = Site e SEO Local (não automação) | ✅ | `_memoria/decisoes.md` |

### Comercial / CRM

*(adicionar decisões aqui conforme surgem)*

### Skills / Automação

*(adicionar decisões aqui conforme surgem)*

---

## Regras

- Decisões de conteúdo vão também em `_memoria/decisoes-estrategicas.md`
- Toda decisão deve ter `razão` — sem contexto, a decisão perde valor com o tempo
- Nunca deletar entradas — marcar como `❌ Cancelada` com justificativa
