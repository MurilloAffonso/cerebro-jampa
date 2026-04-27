# Jampa Jarvis — Ciclos Operacionais

**Versão:** 0.1
**Criado:** 2026-04-27

Define os cinco ciclos de operação do Jarvis. Cada ciclo tem trigger, duração, responsável e entrega esperada.

---

## Ciclo 1 — Diário (Status Check)

**Frequência:** 1× por dia (sugestão: 08:00)
**Classificação de risco:** AUTO
**Trigger:** Cron n8n ou execução manual de `jarvis-status.bat`

**O que faz:**
1. Captura `git status` e último commit
2. Lê `_memoria/proximos-passos.md` (prioridades do dia)
3. Conta tarefas pendentes em `_automacao/tasks/`
4. Conta tarefas concluídas nas últimas 24h (via logs)
5. Grava `_automacao/logs/YYYY-MM-DD-08h-diario.log`

**Entrega:**
```
=== JARVIS STATUS — 2026-05-01 08:00 ===
Git: main, limpo, 3 commits atrás do remoto
Próximo passo (vault): Confirmar preços de passeios
Tarefas pendentes: 2
Tarefas concluídas (24h): 0
Último log: 2026-04-30-22h-tarefa.log
```

**Responsável:** Jarvis (sem intervenção de Murillo)
**Murillo vê:** Log gerado — lê quando quiser

---

## Ciclo 2 — Tarefa (Execução de Skill)

**Frequência:** Sob demanda (manual ou acionado por Murillo)
**Classificação de risco:** APROVAÇÃO (default) ou AUTO (se skill for só leitura)
**Trigger:** Murillo cria arquivo `_automacao/tasks/YYYY-MM-DD-[slug].json`

**O que faz:**
1. Jarvis detecta novo arquivo em `tasks/`
2. Valida schema (ver `schemas/tarefa-jarvis.schema.json`)
3. Verifica classificação de risco no campo `risco`
4. Se `risco: "auto"` → executa skill imediatamente
5. Se `risco: "aprovacao"` → prepara entrega em staging, pausa
6. Se `risco: "bloqueado"` → registra bloqueio, para
7. Grava `_automacao/logs/YYYY-MM-DD-HH-tarefa.log`

**Entrega:**
- Log detalhado da execução
- Arquivo de resultado em `_automacao/tasks/resultado-[slug].md` (se APROVAÇÃO)
- Notificação de bloqueio (se BLOQUEADO)

**Responsável:** Jarvis executa, Murillo aprova resultado

---

## Ciclo 3 — QA (Verificação de Qualidade)

**Frequência:** Antes de qualquer entrega para `_site/` ou publicação
**Classificação de risco:** APROVAÇÃO
**Trigger:** Automático ao fim de Ciclo 2 com `tipoEntrega: "codigo"` ou `"conteudo"`

**O que faz:**
1. Verifica se há `[CONFIRMAR COM MURILLO]` em qualquer campo da entrega
2. Verifica se `revisadoPorMurillo: false` em dados de maré
3. Verifica se há preço, depoimento ou itinerário inventado (não rastreável a `_conhecimento/`)
4. Verifica se entrega altera `_site/` (proibido sem aprovação)
5. Grava resultado de QA no log da tarefa correspondente

**Entrega:**
```
=== QA RESULT ===
Status: APROVADO / REPROVADO
Bloqueios encontrados: [lista ou "nenhum"]
Ação necessária: [descrição ou "nenhuma"]
```

**Responsável:** Jarvis executa QA, Murillo decide após resultado

---

## Ciclo 4 — Aprovação (Gate de Publicação)

**Frequência:** Após Ciclo 3 aprovado, para tarefas com `tipoEntrega` externo
**Classificação de risco:** BLOQUEADO até aprovação manual
**Trigger:** Murillo seta `aprovadoPorMurillo: true` no JSON da tarefa

**O que faz:**
1. Jarvis detecta `aprovadoPorMurillo: true` na tarefa
2. Verifica novamente se QA passou (Ciclo 3)
3. Aplica entrega no destino correto (ex: move staging para `_site/data/`)
4. Grava log de aplicação com timestamp e hash de conteúdo
5. Marca tarefa como `status: "concluida"`

**Entrega:**
- Arquivo aplicado no destino
- Log de conclusão com: tarefa, resultado, quem aprovou, quando

**Responsável:** Jarvis aplica apenas após `aprovadoPorMurillo: true` explícito

---

## Ciclo 5 — Aprendizado (Registro de Padrão)

**Frequência:** Semanal (sugestão: sexta, 18:00) ou após falha relevante
**Classificação de risco:** AUTO
**Trigger:** Cron semanal ou manual

**O que faz:**
1. Lê todos os logs da semana em `_automacao/logs/`
2. Identifica tarefas bloqueadas repetidamente (padrão de problema)
3. Identifica tarefas com override manual recorrente (regra desatualizada)
4. Gera relatório de aprendizado para revisão de Murillo
5. Grava `_automacao/logs/YYYY-WW-aprendizado.log`

**Entrega:**
```
=== APRENDIZADO SEMANA 18/2026 ===
Tarefas executadas: 5
Bloqueios: 2 (ambos por revisadoPorMurillo: false)
Overrides manuais: 1 (horário de saída ajustado por Murillo)
Sugestão: atualizar regras-operacionais.md para refletir override recorrente
```

**Responsável:** Jarvis gera, Murillo decide se atualiza regras

---

## Calendário de Ciclos (Referência)

| Horário | Ciclo | Frequência | Risco |
|---------|-------|-----------|-------|
| 08:00 | Diário | Diário | AUTO |
| Sob demanda | Tarefa | Variável | APROVAÇÃO |
| Após tarefa | QA | Por tarefa | APROVAÇÃO |
| Sob demanda | Aprovação | Por tarefa | BLOQUEADO→liberado |
| Sexta 18:00 | Aprendizado | Semanal | AUTO |
