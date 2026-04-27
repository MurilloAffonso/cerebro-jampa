# Workflow: jarvis-status-telegram

**Versão:** 1.0
**Atualizado:** 2026-04-27
**Risco:** AUTO (leitura + resposta Telegram)
**Arquivo JSON:** `_automacao/workflows/jarvis-status-telegram.workflow.json`
**Script:** `_automacao/scripts/jarvis-status.bat`
**Dependência:** Bot Telegram + credencial configurada no n8n

---

## O Que Faz

Escuta mensagens enviadas ao bot no Telegram. Aceita apenas três comandos:

| Mensagem | Resultado |
|----------|-----------|
| `/status` | Roda `jarvis-status.bat` → responde com saída |
| `status` | Idem (case insensitive) |
| `Jarvis, status` | Idem |
| Qualquer outra coisa | Responde: "Comando não autorizado. Use /status." |

**O que NÃO faz:** não executa tarefas, não altera arquivos além do log gerado pelo bat, não chama Claude Code, não faz commit/push, não aceita comandos livres.

---

## 1. Fluxo do Workflow

```
Telegram (qualquer mensagem)
    │
    ▼
Filtrar Comando
    regex: ^(\/status|status|jarvis,\s*status)$
    │
    ├── [true — comando reconhecido]
    │       │
    │       ▼
    │   Rodar jarvis-status.bat
    │       │
    │       ▼
    │   Responder — Status
    │       (envia stdout do bat para o chat)
    │
    └── [false — comando não reconhecido]
            │
            ▼
        Responder — Nao Autorizado
            "Comando não autorizado. Use /status."
```

### Diagrama n8n

```
┌──────────────────────┐
│  Telegram Trigger    │  ◄── escuta mensagens (updates: message)
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Filtrar Comando     │  regex case-insensitive
│  IF: texto == /status│  true → output 0
│         status       │  false → output 1
│         Jarvis,status│
└──────┬───────────────┘
       │                        │
       │ output 0 (true)        │ output 1 (false)
       ▼                        ▼
┌─────────────────┐    ┌──────────────────────────┐
│ Rodar           │    │ Responder — Nao Autorizado│
│ jarvis-status   │    │ "Comando não autorizado.  │
│ .bat            │    │  Use /status."            │
└────────┬────────┘    └──────────────────────────┘
         │
         ▼
┌─────────────────────┐
│ Responder — Status  │
│ envia $json.stdout  │
│ para o chat         │
└─────────────────────┘
```

---

## 2. Pré-Requisitos

### 2.1 — n8n instalado

```cmd
REM Opção 1 — instalar globalmente:
npm install -g n8n
n8n

REM Opção 2 — sem instalar:
npx n8n
```

Acessar: `http://localhost:5678`

### 2.2 — Bot Telegram criado (uma vez só)

1. Abrir **@BotFather** no Telegram
2. Enviar `/newbot`
3. Escolher nome: ex. `Jarvis Jampa`
4. Escolher username: ex. `jarvis_jampa_bot` (deve terminar em `bot`)
5. Copiar o **token** gerado — formato: `123456789:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`
6. **Não salvar o token em nenhum arquivo do vault** — vai apenas no n8n

### 2.3 — Credencial Telegram configurada no n8n

1. Abrir n8n em `http://localhost:5678`
2. Menu lateral esquerdo → **Credentials**
3. Botão **+ Add Credential**
4. Buscar por `Telegram` → selecionar **Telegram API**
5. Campo **Access Token**: colar o token do BotFather
6. Clicar em **Save**
7. Anotar o **ID numérico** da credencial (visível na URL ao editar: `.../credentials/123`)

---

## 3. Como Importar o Workflow

1. Abrir n8n em `http://localhost:5678`
2. Menu lateral → **Workflows**
3. Botão **+ New Workflow** (canto superior direito)
4. No editor, menu superior direito → ícone `⋮` (três pontos)
5. Selecionar **Import from file**
6. Navegar até `_automacao/workflows/jarvis-status-telegram.workflow.json`
7. Confirmar importação

O workflow abre no editor com 5 nós. Todos os nós Telegram mostrarão aviso de credencial — isso é esperado.

---

## 4. Ajustes Obrigatórios Após Importar

### A — Vincular a credencial do bot (obrigatório)

Para cada nó Telegram (Trigger + 2 Send):

1. Clicar no nó
2. Campo **Credential** → selecionar a credencial criada
3. Salvar

**Os 3 nós que precisam da credencial:**
- `Telegram Trigger`
- `Responder — Status`
- `Responder — Nao Autorizado`

**Alternativa: editar o JSON antes de importar**

Abrir `jarvis-status-telegram.workflow.json` e substituir o placeholder:

```json
"credentials": {
  "telegramApi": {
    "id": "CONFIGURAR_NO_N8N",   ← substituir pelo ID numérico real
    "name": "Jarvis Bot — Telegram"
  }
}
```

Substituir `"CONFIGURAR_NO_N8N"` por `"123"` (o ID real da credencial).
Fazer a substituição nos 3 lugares onde aparece.

### B — Configurar whitelist de chat_id (obrigatório antes de ativar)

O nó **Filtrar Comando** tem duas condições AND:

1. Texto da mensagem bate com `/status`, `status` ou `Jarvis, status`
2. `chat.id` da conversa é igual a `[SEU_CHAT_ID]`

**Como obter o chat_id:**

1. Abrir o workflow no n8n → clicar em **Execute Workflow** (modo teste)
2. No Telegram, enviar qualquer mensagem para @Gabriel_VempassearJampa_bot
3. No n8n, inspecionar o output do nó `Telegram Trigger`
4. Anotar o campo `message → chat → id` (número inteiro, ex: `123456789`)

**Como substituir o placeholder:**

1. Clicar no nó **Filtrar Comando**
2. Segunda condição → campo **Value 2**: substituir `[SEU_CHAT_ID]` pelo número real
3. Salvar

**Expressão equivalente para referência:**
```
{{ $json.message.chat.id == SEU_CHAT_ID }}
```

Enquanto `[SEU_CHAT_ID]` não for substituído, nenhuma mensagem do Telegram passará pelo filtro. Isso é proposital — o workflow fica inativo até a configuração estar completa.

### C — Verificar caminho do .bat (se necessário)

O nó **Rodar jarvis-status.bat** usa o comando:
```
cmd.exe /d /s /c "cd /d C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA && call _automacao\scripts\jarvis-status.bat"
```

Se o vault estiver em outro diretório, ajustar o `cd /d` para o caminho correto.

**Por que `cmd.exe /d /s /c "cd /d ... && call ..."`:**
- `/d` — desabilita AutoRun do registro (evita execução de comandos indesejados)
- `/s` — modo compatível com shell scripts
- `/c` — encerra cmd.exe após o bat terminar
- `cd /d` — muda drive + diretório (necessário se o vault estiver em drive diferente do n8n)
- `call` — chama o bat corretamente dentro do cmd já aberto

---

## 5. Como Testar

### Passo 1 — Iniciar o workflow em modo teste

1. No editor do n8n, clicar em **Execute Workflow** (NÃO em "Active")
2. O n8n fica aguardando o trigger do Telegram

### Passo 2 — Testar `/status`

1. No Telegram, abrir conversa com o bot criado
2. Enviar: `/status`
3. Resultado esperado no n8n:
   - Nó `Filtrar Comando`: output pelo branch `true`
   - Nó `Rodar jarvis-status.bat`: executa e retorna `exitCode: 0`
   - Nó `Responder — Status`: bot responde no Telegram com o status
4. Resultado esperado no Telegram:
   ```
   ================================================
    JARVIS STATUS — YYYY-MM-DD HH:MM
   ================================================
   
    Git: verificado (ver log)
    Tarefas pendentes: N
    Log gerado: [caminho]
   ...
   ```

### Passo 3 — Testar comando não autorizado

1. Enviar qualquer outra mensagem para o bot: ex. `oi`, `rodar tarefa`, `/help`
2. Resultado esperado:
   - Nó `Filtrar Comando`: output pelo branch `false`
   - Nó `Responder — Nao Autorizado`: bot responde "Comando não autorizado. Use /status."
3. Nenhuma execução de bat ocorre

### Passo 4 — Ativar o workflow

Só após os Passos 2 e 3 terem passado:

1. Fechar o modo teste
2. Toggle **Active** (canto superior direito) → ligar
3. O workflow passa a escutar mensagens automaticamente, sem precisar do n8n aberto na tela

---

## 6. Travas de Segurança

| # | Trava | Implementação | O Que Impede |
|---|-------|---------------|--------------|
| 1 | **Filtro estrito de comandos** | Regex `^(\/status\|status\|jarvis,\s*status)$` no nó IF | Qualquer texto fora dos 3 padrões vai para "não autorizado" |
| 2 | **Token fora do JSON** | Credencial no n8n, não no arquivo do workflow | Vazar token no git ou em arquivos do vault |
| 3 | **Bat não aceita argumentos do usuário** | `jarvis-status.bat` ignora qualquer argumento de linha de comando | Injeção de comando via texto do Telegram |
| 4 | **Sem execução de tarefas** | `jarvis-status.bat` só lê e gera log | Rodar tarefas APROVACAO ou AUTO sem controle |
| 5 | **Sem chamada a Claude Code** | Nenhum nó executa `claude` ou APIs de LLM | IA autônoma sem supervisão |
| 6 | **Sem commit/push** | `jarvis-status.bat` não chama `git add/commit/push` | Alterar histórico do projeto automaticamente |
| 7 | **Resposta explícita para não reconhecido** | Nó `Responder — Nao Autorizado` com mensagem fixa | Execução silenciosa de texto desconhecido |

---

## 7. Riscos Atuais

| Risco | Nível | Mitigação Atual |
|-------|-------|----------------|
| Qualquer pessoa com acesso ao bot envia `/status` | Médio | Bot privado (link não divulgado) — risco aceitável |
| Token do bot vaza pelo n8n | Baixo | n8n roda local, sem porta exposta externamente |
| Output do bat expõe caminhos Windows | Baixo | Apenas caminhos do vault, zero credenciais |
| n8n parado = bot silencioso | Baixo | Comportamento esperado — bot não responde sem n8n ativo |
| Encoding quebrado na mensagem Telegram | Baixo | CMD/OEM vs UTF-8 — cosmético, dados intactos |

**Risco médio — sem filtro por `chat.id`:**
O workflow aceita `/status` de qualquer conversa com o bot. Para uso pessoal com bot privado (link não compartilhado), o risco é baixo. Se desejar restringir a um único `chat_id`, adicionar condição extra no nó `Filtrar Comando`:

```
$json.message.chat.id == SEU_CHAT_ID
```

O `chat_id` pode ser obtido enviando qualquer mensagem ao bot e inspecionando o output no n8n (campo `message.chat.id`).

---

## 8. Checklist Antes de Ativar

- [ ] n8n instalado e acessível em `http://localhost:5678`
- [ ] Bot @Gabriel_VempassearJampa_bot com token em mãos
- [ ] Credencial **Telegram API** criada no n8n (token inserido lá, **nunca em arquivo do vault**)
- [ ] Workflow importado com sucesso (5 nós visíveis no editor)
- [ ] Credencial vinculada nos 3 nós Telegram (Trigger + 2 Send — sem avisos vermelhos)
- [ ] `[SEU_CHAT_ID]` substituído pelo chat_id real no nó **Filtrar Comando** (§4.B)
- [ ] Nó **Rodar jarvis-status.bat** testado em isolamento → `exitCode: 0`
- [ ] Caminho do `.bat` verificado ou ajustado no nó `Rodar jarvis-status.bat`
- [ ] Teste de `/status` passou — bot respondeu com saída do bat
- [ ] Teste de comando não autorizado passou — bot respondeu "Comando não autorizado. Use /status."
- [ ] Log gerado em `_automacao/logs/` após o teste de `/status`
- [ ] Toggle **Active** ligado somente após todos os itens acima

**Guia completo de setup:** `_automacao/workflows/n8n-local-setup.md`

---

## 9. Erros Comuns

### Erro 1 — Credential not found / nó Telegram com aviso vermelho

**Causa:** Credencial `CONFIGURAR_NO_N8N` não substituída pelo ID real.

**Solução:** Ir em cada nó Telegram → campo Credential → selecionar a credencial criada.

---

### Erro 2 — Telegram Trigger não recebe mensagens

**Causa:** Bot não ativado corretamente ou token errado.

**Verificação:**
```
https://api.telegram.org/bot[TOKEN]/getMe
```
Se retornar `{"ok":true,...}`, o token está correto e o bot existe.

---

### Erro 3 — `spawn cmd ENOENT` no Execute Command

**Causa:** n8n sem permissão para executar CMD no Windows.

**Solução:** Rodar o n8n como o usuário `noteacer` (mesmo usuário do sistema). Verificar antivírus.

---

### Erro 4 — Regex não filtra corretamente

**Sintoma:** `/status` vai para o branch "não autorizado".

**Causa:** Mensagem do Telegram tem espaço extra ou caractere invisível.

**Verificação:** Inspecionar `$json.message.text` no output do nó Telegram Trigger no n8n.

**Regex usada:** `^(\/status|status|jarvis,\s*status)$`
- Começa e termina com os termos exatos
- `\s*` aceita zero ou mais espaços após a vírgula em "Jarvis, status"

---

### Erro 5 — Bot responde mas mensagem vem quebrada (encoding)

**Causa:** `jarvis-status.bat` usa code page OEM 850. Caracteres acentuados aparecem como `?`.

**Impacto:** Cosmético. Dados corretos.

**Solução futura:** Adicionar `chcp 65001` no início do `jarvis-status.bat`.

---

## Histórico de Versões

| Versão | Data | Mudança |
|--------|------|---------|
| 1.0 | 2026-04-27 | Versão inicial — Telegram Trigger, filtro regex, status, resposta não autorizado |
