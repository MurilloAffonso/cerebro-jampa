# _automacao/logs/ — Histórico de Execuções do Jarvis

## Propósito

Registro auditável de toda execução do Jarvis. Nenhuma ação ocorre sem log correspondente.

Este diretório é **append-only**: logs nunca são editados após geração. Se um log estiver errado, o próximo log registra a correção.

---

## Nomenclatura

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Ciclo diário | `YYYY-MM-DD-HHh-diario.log` | `2026-05-01-08h-diario.log` |
| Execução de tarefa | `YYYY-MM-DD-HHh-tarefa.log` | `2026-05-01-14h-tarefa.log` |
| Bloqueio | `YYYY-MM-DD-bloqueio.log` | `2026-05-01-bloqueio.log` |
| Aprendizado semanal | `YYYY-WW-aprendizado.log` | `2026-18-aprendizado.log` |
| QA de entrega | `YYYY-MM-DD-HHh-qa.log` | `2026-05-01-14h-qa.log` |

---

## Formato de Log

Cada arquivo `.log` segue este cabeçalho mínimo:

```
=== JARVIS LOG ===
Ciclo: [diario|tarefa|bloqueio|aprendizado|qa]
Timestamp: 2026-05-01T08:00:00-03:00
TarefaId: [id da tarefa ou "n/a" para ciclo diário]
Risco: [auto|aprovacao|bloqueado]
Status: [iniciado|concluido|falhou|bloqueado]

--- DETALHE ---
[saída do script ou resultado da skill]

--- FIM ---
Duração: Xs
ProximosCiclos: [lista de próximos eventos previstos]
```

---

## Retenção

- Logs de ciclo diário: manter 30 dias
- Logs de tarefa: manter indefinidamente (rastreabilidade)
- Logs de bloqueio: manter indefinidamente (auditoria de risco)
- Logs de aprendizado: manter indefinidamente (histórico de evolução)

Organização futura (quando volume crescer):
```
logs/
├── 2026-05/          # Por mês
│   ├── diario/
│   ├── tarefas/
│   └── bloqueios/
└── aprendizado/
```

---

## Logs Existentes

_(nenhum log gerado ainda — execute `jarvis-status.bat` para criar o primeiro)_

---

## Como Ler um Log

```bash
# No terminal (Git Bash / PowerShell):
cat _automacao/logs/2026-05-01-08h-diario.log

# Para o log mais recente:
ls -t _automacao/logs/*.log | head -1 | xargs cat
```

---

## Regras de Ouro

- **Nunca editar** um log após geração — criar novo log com correção
- **Nunca deletar** log de bloqueio ou tarefa
- **Sempre incluir** `TarefaId` no log (mesmo que `n/a`)
- **Nunca gravar** credencial, senha ou token em log
