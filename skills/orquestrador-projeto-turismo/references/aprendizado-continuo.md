# Aprendizado Contínuo

Após a execução de qualquer pipeline (completo ou parcial), o orquestrador registra o que funcionou, o que falhou e o que deve mudar — **e consulta aprendizados anteriores antes de planejar o próximo**.

---

## Loop Completo

```
PLANEJAR  → consultar _memoria/decisoes.md por projetos_id similares (§ 1)
   ↓
EXECUTAR  → seguir plano aprovado
   ↓
REGISTRAR → escrever aprendizado em _memoria/decisoes.md (§ 2)
   ↓
ATUALIZAR → se padrão recorrente, evoluir esta skill (§ 3)
   ↓
(retorna para PLANEJAR no próximo objetivo)
```

---

## 1. Consultar Aprendizados Antes de Planejar

Antes de gerar PLANO DE EXECUÇÃO (formato em `SKILL.md` § 5), o orquestrador deve:

```
1. Buscar em _memoria/decisoes.md por projetos_id com mesmo Pipeline (A–G)
2. Identificar:
   - Skills que falharam ou geraram retrabalho em projetos similares
   - Defaults (references/regras-de-decisao.md § 6) que foram contrariados em projetos passados
   - Handoffs que precisaram de ajuste
3. Refletir esses aprendizados no plano:
   - Seção "Aprendizados Consultados" do OUTPUT (SKILL.md § 5)
   - Ajuste preventivo de pipeline se padrão claro
```

**Exemplo:**
```
Objetivo atual: criar página do passeio Picãozinho (Pipeline A)
Aprendizado consultado: pagina-seixas-2026-04-25 mostrou que Etapa 3
  (diretor-visual-turismo) precisou ser executada ANTES da Etapa 2b
  (ux-ui-mobile-first) — wireframe sem direção visual gerou retrabalho.
Ajuste no novo plano: inverter ordem de Etapas 2b e 3 para Pipeline A.
```

---

## 2. Quando Registrar

```
Registrar ao final de:
  - Pipeline concluído (qualquer modo)
  - Pipeline interrompido com etapas entregues
  - Etapa que gerou erro, conflito ou retrabalho
  - Decisão de Murillo que contradiz um default atual
```

### O Que Registrar

**O que funcionou:**
```
- Skill que entregou além do esperado
- Handoff que fluiu sem lacunas
- Pipeline que encaixou no objetivo sem ajustes
- Default (references/regras-de-decisao.md § 6) que Murillo confirmou como correto
```

**O que falhou:**
```
- Skill que produziu entrega com [CONFIRMAR] em excesso
- Handoff incompleto que bloqueou etapa seguinte
- Pipeline que precisou ser replanejado no meio
- Dado ausente em _conhecimento/ que deveria estar lá
```

**Ajustes de pipeline:**
```
- Ordem de etapas que foi trocada na prática
- Skill que foi pulada e não fez falta
- Skill que faltou e precisou ser acrescentada
- Novo padrão recorrente que merece virar pipeline canônico
```

### Onde Registrar

| Tipo de aprendizado | Arquivo destino |
|---------------------|-----------------|
| Decisão estratégica de Murillo | `_memoria/decisoes.md` |
| Dado novo confirmado de passeio/empresa | `_conhecimento/` (com aprovação de Murillo) |
| Ajuste de pipeline ou ordem de etapas | `_memoria/decisoes.md` + `references/pipelines.md` |
| Lacuna recorrente em `_conhecimento/` | `_memoria/proximos-passos.md` |
| Padrão novo que merece pipeline canônico | `references/pipelines.md` (Pipeline G → novo nome) |

---

## 3. Quando Atualizar Regras de Decisão

Atualizar `references/regras-de-decisao.md` quando:

```
- Um default (§ 6 daquele arquivo) for contrariado 2+ vezes por Murillo
  → o default estava errado; atualizar para refletir preferência real

- Um conflito entre skills (§ 4 daquele arquivo) se repetir em projetos diferentes
  → formalizar a regra de prevalência que resolveu

- Uma combinação de skills aparecer 3+ vezes fora dos pipelines canônicos
  → criar Pipeline novo (A–G → novo identificador) em `references/pipelines.md`

- Um guardrail (§ 7 daquele arquivo) for contornado por necessidade legítima
  → avaliar se a regra é excessivamente rígida
```

---

## Formato do Registro em `_memoria/decisoes.md`

```markdown
## [data] — [projeto_id]

**Pipeline executado:** [A–G]
**Modo:** [Planejamento | Assistido | Completo]

**Funcionou:**
- [observação 1]

**Falhou / gerou retrabalho:**
- [observação 1]

**Ajuste aplicado:**
- [o que mudou na execução vs plano original]

**Proposta de melhoria (se houver):**
- [o que deve mudar em alguma skill ou pipeline]
```
