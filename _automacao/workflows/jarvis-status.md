# Workflow: jarvis-status

**Versão:** 0.1
**Criado:** 2026-04-27
**Risco:** AUTO
**Frequência:** Diário (08:00) ou manual

---

## Descrição

Ciclo diário de leitura de estado. Captura git status, conta tarefas pendentes, lê topo do backlog e grava log. Nenhuma escrita fora de `_automacao/logs/`.

---

## Diagrama n8n

```
┌─────────────────────┐
│   Manual Trigger    │  ◄─── ou Cron (08:00)
│   (n8n node)        │
└────────┬────────────┘
         │
         ▼
┌─────────────────────┐
│  Execute Command    │
│                     │
│  Command:           │
│  cmd /c "C:\Users\  │
│  noteacer\Documents\│
│  CEREBRO.CLAUDE\    │
│  CEREBRO.JAMPA\     │
│  _automacao\scripts\│
│  jarvis-status.bat" │
└────────┬────────────┘
         │
         ▼
┌─────────────────────┐
│   IF (exitCode)     │
│   exitCode == 0?    │
└──┬──────────────┬───┘
   │ true         │ false
   ▼              ▼
┌──────┐    ┌──────────────────┐
│  No  │    │  Set Variable    │
│Operation│  │  status = "falhou"│
│(fim) │    │  (log de erro)   │
└──────┘    └──────────────────┘
```

---

## Configuração no n8n

### Node 1: Manual Trigger (ou Schedule Trigger)

**Tipo:** `n8n-nodes-base.manualTrigger` (para iniciar com botão)

Para modo cron, usar `n8n-nodes-base.scheduleTrigger`:
```json
{
  "rule": {
    "interval": [{ "field": "cronExpression", "expression": "0 8 * * *" }]
  }
}
```

---

### Node 2: Execute Command

**Tipo:** `n8n-nodes-base.executeCommand`

**Parâmetros:**
```json
{
  "command": "cmd /c \"C:\\Users\\noteacer\\Documents\\CEREBRO.CLAUDE\\CEREBRO.JAMPA\\_automacao\\scripts\\jarvis-status.bat\""
}
```

**Saídas esperadas:**
- `exitCode`: 0 (sucesso)
- `stdout`: output do terminal (JARVIS STATUS + caminho do log)
- `stderr`: vazio (em operação normal)

---

### Node 3: IF (Verificação de Sucesso)

**Tipo:** `n8n-nodes-base.if`

**Condição:**
```json
{
  "conditions": {
    "number": [{ "value1": "={{ $json.exitCode }}", "operation": "equal", "value2": 0 }]
  }
}
```

- **true** → fim do workflow (log já gravado pelo script)
- **false** → registrar falha (nó de debug/log de erro)

---

## Como Importar no n8n

> Quando n8n estiver instalado localmente:

1. Abrir n8n → `Workflows` → `New`
2. Importar JSON abaixo (futuro: gerar JSON exportável)
3. Testar com `Execute Workflow`
4. Verificar se `_automacao/logs/` tem arquivo novo

---

## JSON de Importação (Esboço)

```json
{
  "name": "jarvis-status",
  "nodes": [
    {
      "name": "Manual Trigger",
      "type": "n8n-nodes-base.manualTrigger",
      "position": [250, 300],
      "parameters": {}
    },
    {
      "name": "Execute Command",
      "type": "n8n-nodes-base.executeCommand",
      "position": [450, 300],
      "parameters": {
        "command": "cmd /c \"C:\\Users\\noteacer\\Documents\\CEREBRO.CLAUDE\\CEREBRO.JAMPA\\_automacao\\scripts\\jarvis-status.bat\""
      }
    },
    {
      "name": "Sucesso?",
      "type": "n8n-nodes-base.if",
      "position": [650, 300],
      "parameters": {
        "conditions": {
          "number": [{ "value1": "={{ $json.exitCode }}", "operation": "equal", "value2": 0 }]
        }
      }
    }
  ],
  "connections": {
    "Manual Trigger": { "main": [[{ "node": "Execute Command", "type": "main", "index": 0 }]] },
    "Execute Command": { "main": [[{ "node": "Sucesso?", "type": "main", "index": 0 }]] }
  }
}
```

---

## Como Testar Sem n8n

Execute diretamente no terminal (CMD ou PowerShell):

```bat
cd C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA
_automacao\scripts\jarvis-status.bat
```

Verificar resultado:
```bat
dir _automacao\logs\
type _automacao\logs\[nome-do-log-gerado].log
```

---

## Critérios de Sucesso

- [ ] Arquivo `.log` criado em `_automacao/logs/`
- [ ] Log contém git status (branch, alterações)
- [ ] Log contém contagem de tarefas pendentes
- [ ] Log contém topo de `proximos-passos.md`
- [ ] `exitCode` = 0 no n8n
- [ ] Nenhum arquivo alterado fora de `_automacao/logs/`

---

## Próximo Workflow

Depois de `jarvis-status` funcionando: `tabua-mares-importar` (risco: APROVAÇÃO)
Ver: `_automacao/workflows/tabua-mares-importar.md` (a criar)
