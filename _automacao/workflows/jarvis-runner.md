# Workflow: jarvis-runner

**Versão:** 0.2
**Atualizado:** 2026-04-27
**Risco:** AUTO
**Frequência:** Manual (fase atual) → Cron diário (após n8n instalado)
**Script:** `_automacao/scripts/jarvis-runner.bat`
**Log gerado:** `_automacao/logs/YYYY-MM-DD-HHh-runner.log`

---

## Para Que Serve

`jarvis-runner` é o **leitor de estado** do Jarvis. Ele escaneia todas as tarefas JSON em `_automacao/tasks/`, classifica por risco e gera um relatório antes de qualquer execução real. Nada é executado. Nada é alterado.

**Analogia:** É o despachante que organiza a pilha de trabalho e reporta o que está esperando — sem tocar em nada.

**Este workflow é o pré-requisito para todos os outros.** Qualquer workflow futuro que executar tarefas reais começa chamando este.

---

## 1. Workflow Manual Inicial

O fluxo atual (fase de fundação) não requer n8n. Basta rodar o `.bat` diretamente.

```
MURILLO (manual)
    │
    ▼
Duplo clique em jarvis-runner.bat
    │
    ├─ PASSO 1: Git Status
    │       └─ Sujo? → [ALERTA] no console e no log (runner continua)
    │       └─ Limpo? → [OK] + último commit
    │
    ├─ PASSO 2: Scan de Tarefas
    │       └─ Para cada .json em _automacao/tasks/:
    │               └─ Chama PowerShell p/ extrair 7 campos
    │               └─ Valida 10 campos obrigatórios do schema
    │               └─ Agrupa: AUTO / APROVACAO / BLOQUEADO / INVALIDO
    │               └─ Registra skills envolvidas
    │
    └─ PASSO 3: Relatório
            └─ Totais por risco no console
            └─ Lista detalhada no log
            └─ Próxima ação recomendada
            └─ Limpa arquivos temporários

Resultado: _automacao/logs/YYYY-MM-DD-HHh-runner.log
```

### Como Rodar Agora (Sem n8n)

**Opção A — Duplo clique:**
Navegar até `_automacao/scripts/` → clicar duas vezes em `jarvis-runner.bat`

**Opção B — CMD:**
```cmd
cd C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA
_automacao\scripts\jarvis-runner.bat
```

**Opção C — PowerShell (para capturar saída):**
```powershell
Start-Process -FilePath 'cmd.exe' `
  -ArgumentList '/c "C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA\_automacao\scripts\jarvis-runner.bat"' `
  -Wait -NoNewWindow
```

**Ler o log gerado:**
```cmd
dir _automacao\logs\*runner* /o-d
type _automacao\logs\2026-04-27-03h-runner.log
```

### Fluxo Futuro com n8n (Fase 2)

```
n8n (Manual Trigger ou Schedule 08:00)
    │
    ▼
Execute Command
    command: cmd /c "C:\...\jarvis-runner.bat"
    │
    ▼
IF exitCode == 0 ?
    │ true                      │ false
    ▼                           ▼
Read File (log)             Set Variable
    │                       status = "falhou"
    ▼                       (notificar Murillo)
IF tarefas AUTO > 0 ?
    │                           │
    ▼                           ▼
[futuro: Claude Code]     IF APROVACAO > 0?
                               │
                               ▼
                        Notifica Murillo (Telegram)
                        aguarda aprovado_por_murillo: true
```

### Diagrama n8n (Fase 2)

```
┌─────────────────────────┐
│  Manual Trigger         │  ◄── ou Schedule: 0 8 * * *
│  (n8n-nodes-base)       │
└──────────┬──────────────┘
           │
           ▼
┌─────────────────────────────────────────────────┐
│  Execute Command                                │
│                                                 │
│  Command:                                       │
│  cmd /c "C:\Users\noteacer\Documents\           │
│  CEREBRO.CLAUDE\CEREBRO.JAMPA\_automacao\       │
│  scripts\jarvis-runner.bat"                     │
│                                                 │
│  Working Directory: (deixar vazio)              │
└──────────┬──────────────────────────────────────┘
           │
           ▼
┌──────────────────────────┐
│  IF: exitCode == 0       │
└──┬───────────────────┬───┘
   │ true              │ false
   ▼                   ▼
┌──────────────┐  ┌──────────────────┐
│ No Operation │  │ Set Variable     │
│ (fim por ora)│  │ status = "erro"  │
└──────────────┘  └──────────────────┘
```

---

## 2. Comando Windows para o n8n

### Campo "Command" no nó Execute Command

```
cmd /c "C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA\_automacao\scripts\jarvis-runner.bat"
```

### Por Que `cmd /c` e Não Só o Caminho

O n8n no Windows executa processos via Node.js `child_process`. Arquivos `.bat` não são executáveis diretamente pelo Node — precisam ser chamados via `cmd.exe`. O `/c` encerra o `cmd.exe` assim que o bat terminar (sem deixar processo residual).

### Variações Seguras

**Com PowerShell (captura saída mais limpa no n8n):**
```
powershell.exe -NoProfile -Command "& 'C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA\_automacao\scripts\jarvis-runner.bat'"
```

**Verificar se funcionou antes de configurar no n8n:**
```cmd
cmd /c "C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA\_automacao\scripts\jarvis-runner.bat" && echo SUCESSO || echo FALHOU
```

### Campo "Working Directory" no n8n

**Deixar vazio.** O bat define o working directory internamente com `cd /d "%VAULT_ROOT%"`. Definir no n8n pode causar conflito de caminho.

### Campos do nó Execute Command no n8n

| Campo | Valor |
|-------|-------|
| Command | `cmd /c "C:\...\jarvis-runner.bat"` |
| Working Directory | *(vazio)* |
| Environment Variables | *(vazio — nenhuma credencial)* |
| Timeout | `60000` (60 segundos — suficiente para 20 tarefas) |

---

## 3. Travas de Segurança

O runner tem **8 travas permanentes**. Removê-las exige reescrever o script e documentar a mudança em `_memoria/decisoes-estrategicas.md`.

| # | Trava | Como é implementada | O Que Impede |
|---|-------|---------------------|--------------|
| 1 | **Sem execução de tarefa** | Nenhuma chamada a `claude`, `node`, skills ou APIs | Rodar tarefa sem aprovação |
| 2 | **Sem alteração de arquivos** | Só grava em `_automacao/logs/` e `%TEMP%` | Modificar código, vault ou site |
| 3 | **Sem commit / push** | Nenhuma chamada a `git add`, `git commit`, `git push` | Alterar histórico do projeto |
| 4 | **Git check obrigatório** | `git status --porcelain` é o Passo 1 antes de tudo | Executar APROVACAO com estado inconsistente |
| 5 | **Sem credenciais** | Nenhuma leitura de `.env`, senhas ou tokens | Vazar segredos |
| 6 | **PowerShell sandboxado** | `-NoProfile` + `-File` (sem `-ExecutionPolicy Bypass`) | Execução arbitrária de módulos externos |
| 7 | **Temp limpo** | `del /q "%TMP_DIR%\*.tmp"` e `*.ps1` ao finalizar | Deixar dados temporários em disco |
| 8 | **exitCode explícito** | `exit /b 0` (sucesso) — n8n verifica este código | Silenciar falhas que o n8n não detectaria |

**Git sujo NÃO para o runner** — o runner continua e gera o log completo, mas marca as tarefas APROVACAO como bloqueadas. Isso é intencional: Murillo precisa ver o relatório mesmo com git sujo.

---

## 4. Resultado Esperado

A saída abaixo é da execução real com os 8 exemplos de tarefas (2026-04-27).

### Console (saída real)

```
 ============================================================
  JARVIS RUNNER v0.2    2026-04-27 03:23
  Modo: LEITURA - nenhuma tarefa sera executada
 ============================================================

 [1/3] Verificando Git...
 [ALERTA] Git sujo
        Tarefas APROVACAO nao podem rodar.
        Resolva as alteracoes pendentes primeiro.

 [2/3] Escaneando tarefas...

  [bloqueado] 2026-05-20-acessar-meta-ads-token
     skill: bloqueado-sem-skill
     status: bloqueada -- validacao: OK

  [auto] 2026-05-01-linha-editorial-instagram-maio
     skill: social-media-editorial-turismo
     skills+: copywriter-vendas
     status: pendente -- validacao: OK

  [aprovacao] 2026-05-10-pagina-completa-areia-vermelha
     skill: orquestrador-projeto-turismo
     skills+: copywriter-vendas, ux-ui-mobile-first, seo-local-turismo, briefing-designer
     status: pendente -- validacao: OK

  [aprovacao] 2026-05-05-implementar-cluster-piscinas-naturais
     skill: programador-de-site
     skills+: seo-local-turismo
     status: pendente -- validacao: OK

  [auto] 2026-05-02-planejamento-cluster-piscinas-naturais
     skill: orquestrador-projeto-turismo
     skills+: estrategista-de-site, ux-ui-mobile-first
     status: pendente -- validacao: OK

  [auto] 2026-05-01-status-diario
     skill: jarvis-status
     status: pendente -- validacao: OK

  [aprovacao] 2026-06-01-importar-tabua-mares-junho
     skill: tabua-mares-turismo
     skills+: tabua-mares-importar, tabua-mares-validar
     status: pendente -- validacao: OK

  [aprovacao] 2026-05-15-campanha-meta-ads-piscinas
     skill: manual
     skills+: copywriter-vendas, diretor-visual-turismo
     status: pendente -- validacao: OK

 [3/3] Gerando relatorio...

 ============================================================
  RELATORIO JARVIS - 2026-04-27 03:23
 ============================================================

  Total de tarefas:   8
  Pendentes:          7
  AUTO:               3
  APROVACAO:          4
  BLOQUEADO:          1

  [ALERTA] Git sujo - resolver antes de executar tarefas APROVACAO

  Log: ..._automacao\logs\2026-04-27-03h-runner.log
 ============================================================
```

### O Que Cada Seção do Relatório Significa

| Seção | O Que Fazer |
|-------|-------------|
| **AUTO** | Prontas para rodar assim que n8n estiver ativo. Nenhuma ação de Murillo necessária. |
| **APROVACAO** | Revisar o JSON de cada tarefa e setar `"aprovado_por_murillo": true` para liberar. |
| **BLOQUEADO** | Ler `motivo_bloqueio` no JSON. Nunca executar. Criar tarefa alternativa se necessário. |
| **Invalidos** | Verificar o JSON contra `_automacao/schemas/tarefa-jarvis.schema.json`. |
| **Skills envolvidas** | Confirmar que `skills/[nome]/SKILL.md` existe para cada skill listada. |
| **Proxima acao** | Seguir a recomendação do runner. Ela leva em conta git status + contagem de tarefas. |

### Log Completo (estrutura)

```
=== JARVIS RUNNER LOG ===
Timestamp: 2026-04-27T03:23-03:00
Risco: AUTO

--- 1. GIT STATUS ---
[ALERTA] Git sujo / [OK] Git limpo: [ultimo commit]
[git status completo se sujo]

--- 2. TAREFAS ENCONTRADAS ---
[para cada arquivo .json:]
  id, status, risco, skill_primaria, skills_rec, objetivo (75 chars), validacao

--- 3. RELATORIO POR RISCO ---
TOTAIS: [contagens]
=== AUTO [N] [lista]
=== APROVACAO [N] [lista + alerta se git sujo]
=== BLOQUEADO [N] [lista]
--- SKILLS ENVOLVIDAS --- [lista única ordenada]
--- PROXIMA ACAO RECOMENDADA --- [recomendação contextual]
--- FIM ---
```

---

## 5. Erros Comuns

### Erro 1 — Caminho errado do .bat

**Sintoma no n8n:** `The system cannot find the path specified` ou `is not recognized`

**Causa:** O caminho do `.bat` no Execute Command está incorreto ou usa barras `/` em vez de `\`.

**Solução:**
```cmd
REM Verificar o caminho correto:
dir "C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA\_automacao\scripts\jarvis-runner.bat"

REM Testar o comando exato antes de configurar no n8n:
cmd /c "C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA\_automacao\scripts\jarvis-runner.bat"
```

**No n8n:** Sempre usar barras invertidas `\` no caminho do Windows, não `/`.

---

### Erro 2 — n8n sem permissão para executar CMD

**Sintoma no n8n:** `spawn cmd ENOENT` ou `EPERM` ou processo termina imediatamente com exitCode ≠ 0

**Causa:** O n8n está rodando como um usuário sem permissão de executar processos do sistema, ou está em modo sandbox.

**Solução:**
1. Verificar que o n8n está instalado localmente (não em container com restrições)
2. No Windows, rodar o n8n como o mesmo usuário que roda o CMD (usuário `noteacer`)
3. Verificar que o antivírus não está bloqueando a execução do `.bat`
4. Se usando Docker: montar o volume e usar `exec` com permissões corretas

**Teste rápido:** Se `cmd /c echo teste` funciona no Execute Command do n8n, o problema não é de permissão.

---

### Erro 3 — Git não encontrado no PATH do n8n

**Sintoma no log:** `'git' is not recognized as an internal or external command`

**Causa:** O n8n foi iniciado em um ambiente onde o `git` não está no PATH, mesmo que funcione no CMD normal.

**Solução:**
```cmd
REM Verificar onde git está instalado:
where git

REM Resultado típico:
REM C:\Program Files\Git\cmd\git.exe

REM Adicionar ao PATH do sistema:
REM Painel de Controle → Sistema → Variáveis de Ambiente → Path → Adicionar caminho
```

**No bat:** Se o PATH do n8n for diferente, adicionar no início do bat:
```bat
REM Adicionar Git ao PATH se necessário:
set PATH=%PATH%;C:\Program Files\Git\cmd
```

---

### Erro 4 — Pasta de trabalho errada (working directory)

**Sintoma:** O bat roda mas não encontra `_automacao/tasks/` ou não gera o log no lugar certo.

**Causa:** O n8n definiu um Working Directory diferente no nó Execute Command, sobrescrevendo o `cd /d "%VAULT_ROOT%"` do bat.

**Solução:** Deixar o campo "Working Directory" do nó Execute Command **vazio**. O bat gerencia seu próprio working directory internamente.

**Verificação:** O log deve ser gerado em:
```
C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA\_automacao\logs\
```
Se estiver em outro lugar, o Working Directory está configurado errado.

---

### Erro 5 — Encoding quebrado no log (acentos como `?`)

**Sintoma:** Caracteres acentuados (ã, ç, é, ú) aparecem como `?` ou `ǭ` no log.

**Causa:** O CMD do Windows usa o code page 850 (OEM) por padrão. O log gerado pelo `.bat` tem encoding OEM, mas ferramentas que o leem (VS Code, n8n) esperam UTF-8.

**Impacto:** Apenas cosmético. Os dados JSON originais (lidos pelo PowerShell) são UTF-8 e ficam íntegros. Só o display no log é afetado.

**Solução futura:** Adicionar `chcp 65001` no início do bat (muda para UTF-8). Não implementado ainda por possível impacto em outros outputs do CMD.

**Workaround imediato:** Ler o log direto no CMD (que usa o mesmo encoding):
```cmd
type _automacao\logs\2026-04-27-03h-runner.log
```
Em vez de abrir no VS Code ou outro editor UTF-8.

---

### Erro 6 — PowerShell não encontrado ou versão incorreta

**Sintoma:** `'powershell.exe' is not recognized` ou `The term 'ConvertFrom-Json' is not recognized`

**Causa:** PowerShell 5.1 não está disponível no PATH, ou o sistema tem apenas PowerShell Core (pwsh.exe) sem o Windows PowerShell (powershell.exe).

**Verificação:**
```cmd
where powershell.exe
powershell.exe -NoProfile -Command "Write-Output 'OK'"
```

**Requisito mínimo:** PowerShell 5.1 (incluso no Windows 10/11 por padrão).

**Diferença importante:**
- `powershell.exe` = Windows PowerShell 5.1 (o que o bat usa)
- `pwsh.exe` = PowerShell Core 7.x (diferente, pode ter comportamento distinto)

---

## 6. Workflow n8n Importável

**Status: criado.** O arquivo está em `_automacao/workflows/jarvis-runner.workflow.json`.

### Como Importar

1. Abrir n8n em `http://localhost:5678`
2. Menu lateral → **Workflows** → **+ New Workflow**
3. Menu superior direito → `⋮` → **Import from file**
4. Selecionar `_automacao/workflows/jarvis-runner.workflow.json`
5. Workflow abre com 2 nós: **Executar Runner** (Manual Trigger) → **Rodar jarvis-runner.bat** (Execute Command)

### Ajustes Necessários Após Importar

**Campo Command no nó `Rodar jarvis-runner.bat`:**
```
cmd /c "C:\Users\noteacer\Documents\CEREBRO.CLAUDE\CEREBRO.JAMPA\_automacao\scripts\jarvis-runner.bat"
```
Se o vault estiver em outro diretório, ajustar o caminho neste campo.

### Critérios para Ativar (Toggle Active)

- [ ] n8n instalado e acessível em `http://localhost:5678`
- [ ] Workflow importado e caminho do `.bat` verificado
- [ ] Teste manual via **Execute Workflow** retornou exitCode 0
- [ ] Log gerado em `_automacao/logs/` após o teste
- [ ] Git encontrado no PATH do n8n

### Sequência de Instalação do n8n (Referência)

```cmd
REM Opção 1 — npm global (mais simples para Windows):
npm install -g n8n
n8n

REM Opção 2 — npx (sem instalar globalmente):
npx n8n

REM Após iniciar, acessar: http://localhost:5678
REM Criar conta local (sem conta n8n.io necessária)
```

### Próximo Workflow — Status via Telegram

Workflow de status via Telegram já criado:
- **JSON:** `_automacao/workflows/jarvis-status-telegram.workflow.json`
- **Documentação:** `_automacao/workflows/jarvis-status-telegram.md`
- **Dependência extra:** bot Telegram + credencial configurada no n8n

---

## Por Que o Runner Não Executa Claude Code Ainda

**Razão 1 — Validação de fundação:** Schema, runner e logs precisam funcionar de forma confiável antes de qualquer execução real. Rodar Claude Code sem esses alicerces seria risco operacional.

**Razão 2 — Gate de aprovação ausente:** Tarefas APROVACAO exigem `aprovado_por_murillo: true`. O mecanismo de aprovação (futuro: Telegram) ainda não existe. Sem ele, executar seria ignorar a regra central do sistema.

**Razão 3 — n8n ainda não instalado:** O runner é o pré-requisito. Claude Code entra na Fase 3 — depois que o n8n estiver ativo e o primeiro workflow manual for validado.

**Razão 4 — Segurança por design:** Adicionar Claude Code ao `.bat` sem o pipeline n8n seria uma chamada sem auditoria, sem log separado por tarefa e sem possibilidade de interrupção. O n8n é o ponto de controle.

---

## Histórico de Versões

| Versão | Data | Mudança |
|--------|------|---------|
| 0.1 | 2026-04-27 | Versão inicial — fluxo básico, travas, saída esperada |
| 0.2 | 2026-04-27 | Comando Windows exato, saída real do teste, erros comuns, JSON importável planejado |
| 0.3 | 2026-04-27 | JSON importável criado (`jarvis-runner.workflow.json`), seção 6 atualizada, referência ao workflow Telegram |
