# Estado do Projeto e Ciclo de Vida

Como o orquestrador rastreia projetos via `projeto_id` e como esse identificador evolui durante a execução. Consultar antes de gerar qualquer plano.

---

## 1. Verificar se Já Existe Plano Ativo

Antes de gerar qualquer plano, consultar `_memoria/estado-atual.md`:

```
VERIFICAÇÃO:
- Há projeto_id registrado para este objetivo?
- Há etapas já concluídas?
- Há entrega em `_pipeline/` relacionada?

SE SIM → continuar de onde parou (ver § 2)
SE NÃO → iniciar novo plano (ver § 3)
```

---

## 2. Retomar Plano Existente

```
AÇÃO:
1. Identificar última etapa concluída
2. Listar entregas já existentes em `_pipeline/`
3. Validar se contexto mudou desde a última sessão
   (novo dado em _conhecimento/? decisão mudou?)
4. Devolver plano de RETOMADA — apenas etapas restantes
   NÃO replanejar tudo do zero

FORMATO:
RETOMANDO: [projeto_id]
Última etapa concluída: Etapa X — [skill]
Próxima etapa: Etapa X+1 — [skill]
Contexto alterado desde última sessão: [sim/não + o quê]
```

---

## 3. Iniciar Novo Plano

Se não existe plano ativo para o objetivo, gerar novo e registrar identificador:

```
projeto_id: <slug-do-objetivo>-<data>

Exemplos:
  pagina-seixas-2026-04-25
  campanha-litoral-sul-2026-05-10
  seo-areia-vermelha-2026-04-28
```

O `projeto_id` é registrado em `_memoria/estado-atual.md` ao iniciar e removido ao concluir.

---

## 4. Ciclo de Vida do `projeto_id`

```
NOVO       → plano gerado, aguardando aprovação
   ↓ (Murillo aprova)
ATIVO      → execução em andamento, etapas sendo concluídas
   ↓ (Murillo pausa OU sessão encerra com etapas restantes)
PAUSADO    → estado preservado em _memoria/estado-atual.md
   ↓ (Murillo retoma)
ATIVO      → continua de onde parou (ver § 2)
   ↓ (todas etapas concluídas e validadas)
CONCLUÍDO  → registrado em _memoria/decisoes.md, removido de estado-atual.md
   ↓ (alimenta aprendizado contínuo)
ARQUIVADO  → disponível como aprendizado para projetos futuros similares
```

**Regras de transição:**
- `NOVO → ATIVO`: requer aprovação explícita de Murillo
- `ATIVO → PAUSADO`: automático ao fechar sessão sem concluir
- `ATIVO → CONCLUÍDO`: requer validação de todas as entregas
- `CONCLUÍDO → ARQUIVADO`: automático após registro em `references/aprendizado-continuo.md`

**Estados nunca pulados:**
- Não existe `NOVO → CONCLUÍDO` direto (sem execução)
- Não existe `PAUSADO → ARQUIVADO` direto (deve passar por CONCLUÍDO)

---

## 5. Regra Anti-Retrabalho

```
❌ NUNCA regenerar do zero se plano já existe
❌ NUNCA re-executar etapa já concluída e entregue
✅ SEMPRE consultar _memoria/estado-atual.md antes de propor pipeline
✅ SEMPRE verificar _pipeline/ por entregas anteriores do mesmo objetivo
```
