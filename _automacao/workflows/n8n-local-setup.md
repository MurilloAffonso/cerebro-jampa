# n8n Local — Setup e Ativação do Jampa Jarvis

**Versão:** 1.0  
**Criado:** 2026-04-27  
**Contexto:** n8n já instalado e acessível em `http://localhost:5678`  
**Bot Telegram:** @Gabriel_VempassearJampa_bot  
**Fase atual:** somente `/status` liberado — execução de tarefas desativada

---

## 1. Abrir o n8n

```cmd
REM Se n8n foi instalado globalmente:
n8n

REM Se preferir sem instalar (npx):
npx n8n
```

Acessar: **http://localhost:5678**

Manter o terminal aberto enquanto usa o n8n. Fechar o terminal encerra o n8n e o bot Telegram para de responder.

---

## 2. Importar os Workflows

Importar **nesta ordem** (runner antes do Telegram):

### 2.1 — Importar jarvis-runner

1. Menu lateral esquerdo → **Workflows**
2. Botão **+ New Workflow** (canto superior direito)
3. No editor, menu superior direito → ícone `⋮` (três pontos) → **Import from file**
4. Navegar até:
   ```
   C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA\_automacao\workflows\jarvis-runner.workflow.json
   ```
5. Confirmar importação
6. Resultado esperado: 2 nós — **Executar Runner** → **Rodar jarvis-runner.bat**
7. Salvar o workflow (Ctrl+S)

### 2.2 — Importar jarvis-status-telegram

1. Menu lateral → **Workflows** → **+ New Workflow** → `⋮` → **Import from file**
2. Navegar até:
   ```
   C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA\_automacao\workflows\jarvis-status-telegram.workflow.json
   ```
3. Confirmar importação
4. Resultado esperado: 5 nós visíveis (ver diagrama em `jarvis-status-telegram.md §1`)
5. Os 3 nós Telegram mostrarão aviso de credencial — **isso é esperado**
6. Salvar o workflow (Ctrl+S)

---

## 3. Configurar a Credencial Telegram

Fazer **uma única vez** — a credencial será reutilizada nos 3 nós.

1. Menu lateral esquerdo → **Credentials**
2. Botão **+ Add Credential**
3. Buscar por `Telegram` → selecionar **Telegram API**
4. Campo **Access Token**: colar o token do @Gabriel_VempassearJampa_bot
   - ⚠️ **O token fica somente aqui, no n8n. Nunca salvar em arquivo do vault.**
5. Clicar em **Save**
6. Anotar o **ID numérico** da credencial (visível na URL ao editar: `.../credentials/123`)

### Vincular a credencial nos 3 nós do Telegram

No workflow `jarvis-status-telegram`, clicar em cada nó e vincular a credencial:

| Nó | Ação |
|----|------|
| `Telegram Trigger` | Campo Credential → selecionar a credencial criada |
| `Responder — Status` | Campo Credential → selecionar a credencial criada |
| `Responder — Nao Autorizado` | Campo Credential → selecionar a credencial criada |

Após vincular, os avisos vermelhos desaparecem. Salvar.

---

## 4. Verificar Caminho dos .bat

Os dois Execute Command já têm o caminho correto para este vault:

**jarvis-runner.workflow.json — Execute Command:**
```
cmd.exe /d /s /c "cd /d C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA && call _automacao\scripts\jarvis-runner.bat"
```

**jarvis-status-telegram.workflow.json — Execute Command:**
```
cmd.exe /d /s /c "cd /d C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA && call _automacao\scripts\jarvis-status.bat"
```

Se o vault estiver em outro diretório, editar o campo **Command** de cada Execute Command node.

**Campo Working Directory:** deixar **vazio**. Os bats gerenciam o working directory internamente.

---

## 5. Testar jarvis-runner (Sem Telegram)

1. Abrir o workflow `Jarvis — Runner Manual` no n8n
2. Clicar em **Execute Workflow** (botão no centro superior — NÃO o toggle "Active")
3. O nó `Executar Runner` dispara imediatamente (Manual Trigger não precisa de evento externo)
4. Aguardar ~5-10 segundos (o bat escaneia todos os JSONs em `_automacao/tasks/`)

**Resultado esperado:**
- Nó `Rodar jarvis-runner.bat`: status verde, `exitCode: 0`
- Output do nó: campo `stdout` com o relatório de tarefas
- Log gerado em `_automacao/logs/YYYY-MM-DD-HHh-runner.log`

**Se falhar (`exitCode ≠ 0`):**

| Sintoma | Causa | Solução |
|---------|-------|---------|
| `spawn cmd ENOENT` | n8n sem acesso ao CMD | Rodar n8n como usuário `noteacer` |
| `The system cannot find the path` | Caminho do .bat errado | Verificar campo Command do Execute Command |
| `'git' is not recognized` | Git não está no PATH do n8n | Adicionar Git ao PATH do sistema (`where git` para encontrar) |
| Exit code 1 + `powershell.exe nao encontrado` | PowerShell 5.1 ausente | Verificar `where powershell.exe` no CMD |

**Ler o log gerado:**
```cmd
cd C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA
dir _automacao\logs\*runner* /o-d
type _automacao\logs\2026-04-27-XXh-runner.log
```

---

## 6. Obter o chat_id e Configurar Whitelist

O workflow Telegram tem um filtro por `chat_id` com o placeholder `[SEU_CHAT_ID]`. Antes de ativar o workflow, substituir pelo ID real.

### Como obter o chat_id

1. Abrir o workflow `Jarvis — Status via Telegram` no n8n
2. Clicar no nó **Telegram Trigger** → **Execute step**
3. No Telegram, enviar qualquer mensagem para @Gabriel_VempassearJampa_bot (ex: `/status`)
4. No n8n, inspecionar o output do nó `Telegram Trigger`
5. Procurar o campo: `message → chat → id` (é um número, ex: `123456789`)

### Substituir o placeholder

1. No n8n, clicar no nó **Filtrar Comando**
2. Na segunda condição, campo **Value 2**: substituir `[SEU_CHAT_ID]` pelo número encontrado
3. Exemplo: `123456789` (sem aspas, sem colchetes)
4. Salvar

**Por que isso é importante:** sem o filtro por chat_id, qualquer pessoa que descubra o username do bot pode consultar o status do sistema. Com o filtro, somente o chat_id autorizado recebe resposta.

---

## 7. Testar jarvis-status via Execute Command

Antes de testar pelo Telegram, verificar que o bat roda corretamente em isolamento:

1. Abrir o workflow `Jarvis — Status via Telegram`
2. Clicar no nó **Rodar jarvis-status.bat** → **Execute step**
3. O nó executa o bat diretamente (sem precisar do Telegram)

**Resultado esperado:**
- `exitCode: 0`
- Campo `stdout`:
  ```
  ================================================
   JARVIS STATUS — YYYY-MM-DD HH:MM
  ================================================

   Git: verificado (ver log)
   Tarefas pendentes: N
   Log gerado: C:\..._automacao\logs\YYYY-MM-DD-HHh-diario.log
  ...
  ================================================
  ```

---

## 8. Testar /status no Telegram

Antes deste passo: credencial vinculada + chat_id configurado + jarvis-status bat testado.

1. Abrir o workflow `Jarvis — Status via Telegram`
2. Clicar em **Execute Workflow** (modo teste — aguarda evento do Telegram)
3. No Telegram, enviar `/status` para @Gabriel_VempassearJampa_bot

**Resultado esperado:**
- Nó `Filtrar Comando`: output pelo branch **true** (condições cumpridas)
- Nó `Rodar jarvis-status.bat`: `exitCode: 0`
- Nó `Responder — Status`: bot responde no Telegram com o resumo do status
- Log gerado em `_automacao/logs/`

### Testar comando não autorizado

1. Enviar qualquer outra mensagem ao bot: `oi`, `/help`, `rodar tarefa`
2. **Resultado esperado:**
   - Nó `Filtrar Comando`: output pelo branch **false**
   - Nó `Responder — Nao Autorizado`: bot responde `"Comando não autorizado. Use /status."`
   - Nenhum bat é executado

---

## 9. Verificar Logs

Após cada teste, um log é gerado em `_automacao/logs/`.

```cmd
REM Listar logs mais recentes:
dir "C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA\_automacao\logs\" /o-d

REM Ler log do runner:
type "C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA\_automacao\logs\YYYY-MM-DD-HHh-runner.log"

REM Ler log do status (diario):
type "C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA\_automacao\logs\YYYY-MM-DD-HHh-diario.log"
```

Cada execução gera um arquivo novo com timestamp. Logs não são sobreescritos.

---

## 10. Checklist Antes de Ativar

Completar esta lista antes de ligar o toggle **Active** em qualquer workflow:

### Infraestrutura

- [ ] n8n abre sem erro em `http://localhost:5678`
- [ ] Terminal com n8n fica aberto enquanto bot deve funcionar

### Runner (jarvis-runner.workflow.json)

- [ ] Workflow importado — 2 nós visíveis
- [ ] **Execute Workflow** retornou `exitCode: 0`
- [ ] Log gerado em `_automacao/logs/` com conteúdo correto
- [ ] Git encontrado no PATH (log mostra "Git limpo" ou "Git sujo" — não erro)

### Status Bat isolado

- [ ] Nó **Rodar jarvis-status.bat** executado em isolamento → `exitCode: 0`
- [ ] Campo `stdout` mostra cabeçalho correto com data/hora
- [ ] Log diário gerado em `_automacao/logs/`

### Telegram (jarvis-status-telegram.workflow.json)

- [ ] Credencial Telegram API criada no n8n (token do bot inserido lá, não em arquivo)
- [ ] Credencial vinculada nos 3 nós: Trigger, Responder Status, Responder Nao Autorizado
- [ ] `[SEU_CHAT_ID]` substituído pelo chat_id real no nó **Filtrar Comando**
- [ ] Teste `/status` passou — bot respondeu com resumo
- [ ] Teste comando não autorizado passou — bot respondeu "Comando não autorizado. Use /status."

### Segurança

- [ ] Token do bot não está em nenhum arquivo do vault (somente no n8n Credentials)
- [ ] Nenhuma tarefa real foi executada nos testes
- [ ] `_automacao/tasks/` contém somente JSONs de exemplo (nenhum com `aprovado_por_murillo: true` ainda)
- [ ] Toggle **Active** desligado até todos os itens acima estarem marcados

---

## 11. Riscos

| Risco | Nível | Situação atual |
|-------|-------|---------------|
| Qualquer pessoa com acesso ao bot envia `/status` | Médio | **Mitigado** após configurar `[SEU_CHAT_ID]` |
| Token do bot vaza pelo vault | Baixo | Seguro — token somente no n8n Credentials |
| n8n parado = bot silencioso | Baixo | Comportamento esperado — bot não responde sem n8n |
| Output do bat com encoding quebrado | Baixo | **Resolvido** — `chcp 65001` adicionado ao status bat |
| Execução de tarefas reais pelo Telegram | Nenhum | `jarvis-status.bat` só lê e gera log, sem execução |

---

## 12. O Que NÃO Fazer

- ❌ Não salvar o token do Telegram em nenhum arquivo do vault
- ❌ Não ativar o workflow Telegram antes de configurar o `chat_id`
- ❌ Não liberar comandos além de `/status` no workflow Telegram ainda
- ❌ Não chamar Claude Code pelo n8n nesta fase
- ❌ Não executar tarefas APROVACAO sem setar `aprovado_por_murillo: true` nos JSONs
- ❌ Não alterar `_site/` pelo runner ou pelo bat
- ❌ Não fazer commit/push pelo runner ou pelo bat

---

*Versão: 1.0 | Criado: 2026-04-27 | Referência: jarvis-runner.md + jarvis-status-telegram.md*
