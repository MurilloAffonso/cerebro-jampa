# MCP + Sessão Herdada — Guia de Configuração Futura

**Versão:** 1.0  
**Status:** Planejamento — Não implementado ainda  
**Objetivo:** Documentar como configurar MCP browser para que a skill captura-referencias-visuais use sessão herdada do Instagram  
**Data:** 2026-04-25  
**Próximo Review:** Quando a skill precisar de MCP em produção (Fase 2+)

---

## Introdução

O Fluxo B da skill `captura-referencias-visuais` menciona "MCP browser com sessão logada — futuro". Este documento explica O QUÉ isso significa, COMO fazer, E QUANDO realmente funciona.

**Regras desta documentação:**
- ✅ Honesto sobre limites e riscos
- ✅ Sem implementação de automação ainda
- ✅ Sem credenciais no código
- ✅ Pronto para execução manual quando necessário

---

## 1. Glossário: O Que Cada Termo Significa

### MCP (Model Context Protocol)

Protocolo criado pela Anthropic para que Claude se integre com ferramentas externas.

- **O quê:** Um padrão de comunicação entre Claude e servidores especializados
- **Como:** Claude faz pedidos → MCP server executa → Claude recebe resultado
- **Exemplo:** "MCP browser server" = servidor que controla um navegador real
- **Vantagem:** Claude pode navegar, clicar, tirar screenshots de sites reais

---

### Navegador Controlado

Um browser real (Chrome, Firefox) que Claude controla via protocolo MCP, diferente do seu navegador pessoal.

**Característica chave:** Claude vê a tela (screenshots, DOM) e pode fazer ações (navegar, clicar, esperar), mas:
- NÃO é você clicando — é automação via código
- NÃO é Selenium ou Puppeteer genérico — é Playwright/Puppeteer via MCP
- Pode fazer o que um humano faz em um browser, mas programaticamente

**Implementação usual:**
- Playwright MCP server (Python/Node.js) ou similar
- Conectado ao Chrome via protocolo CDP (Chrome DevTools Protocol)
- Claude envia comandos → browser executa → Claude vê resultado

---

### Sessão Herdada

Quando o navegador controlado já tem uma sessão ativa de uma conta (ex: Instagram), e Claude a herda para fazer requisições autenticadas.

**Como funciona:**
1. Você abre Chrome manualmente
2. Faz login no Instagram (normalmente)
3. Deixa a sessão ativa (cookies salvos)
4. Fecha o browser
5. Claude depois abre o MESMO browser com a MESMA sessão
6. Claude pode acessar conteúdo que requer login

**Importante:** Claude NUNCA vê nem armazena sua senha. Só usa a sessão já autenticada (cookies).

---

### Browser Isolado (Perfil Dedicado)

Um Chrome Profile separado do seu navegador pessoal, criado especificamente para a skill.

**Vantagem:** Não mistura sessões. Exemplo:
- Seu Chrome pessoal: você, suas contas, histórico
- Chrome perfil "claudecode-social": APENAS contas de trabalho para a skill

**Segurança:** Se algo der errado, só afeta esse perfil. Você está protegido.

**Criação:**
```bash
# Windows: Chrome cria automaticamente
chrome.exe --profile-directory="claudecode-social"
```

---

### Fallback Manual

Quando MCP browser NÃO está disponível ou falha, a skill volta para Fluxo C/D/E:
- **C:** Print do usuário (você faz screenshot e envia)
- **D:** Link compartilhado (você envia URL, Claude tenta acessar)
- **E:** Link-apenas (salva URL para futuro)

Já documentado no SKILL.md — este documento é PARA quando você QUER usar MCP.

---

## 2. Arquitetura: Como Claude Code → MCP Browser → Instagram Se Conectam

```
┌────────────────────────────────────────────────────────────┐
│                    Claude Code Session                       │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Skill: captura-referencias-visuais                 │   │
│  │                                                     │   │
│  │  1. Verificar: MCP tool ativado?                   │   │
│  │  2. Chamar: MCP browser tool                       │   │
│  │  3. Comando: "Abre instagram.com e tira screenshot"│   │
│  │  4. Aguardar: resultado (imagem)                   │   │
│  │  5. Processar: salvar, metadados, .md             │   │
│  └────────────────┬────────────────────────────────────┘   │
└─────────────────┼──────────────────────────────────────────┘
                  │ MCP Protocol (websocket/stdio)
                  ↓
        ┌──────────────────────────────────┐
        │  MCP Browser Server              │
        │  (playwright-mcp ou similar)     │
        │                                  │
        │ - Executa comandos do Claude    │
        │ - Controla Chrome via CDP        │
        │ - Retorna screenshots/DOM        │
        └─────────────┬────────────────────┘
                      │ CDPProtocol
                      ↓
        ┌──────────────────────────────────┐
        │  Chrome (headless ou normal)     │
        │                                  │
        │ Profile: "claudecode-social"    │
        │ [Cookies do Instagram]          │
        └─────────────┬────────────────────┘
                      │ Browser Navigation
                      ↓
        ┌──────────────────────────────────┐
        │  instagram.com (logado)         │
        │                                  │
        │ - Feed (private, requer sessão) │
        │ - Stories (private, requer sessão)
        │ - Posts públicos (qualquer um)  │
        └──────────────────────────────────┘
```

**Fluxo Real:**
1. Claude chama MCP tool (já está configurado no Claude Code settings)
2. MCP server recebe pedido: "Tira screenshot de instagram.com/p/XYZ"
3. Chrome (com sessão herdada) navega e renderiza
4. MCP server tira screenshot ou lê DOM
5. MCP server retorna imagem ao Claude
6. Claude salva arquivo + metadados + .md

---

## 3. Pré-Requisitos de Software

**Seu computador:**
- ✅ Windows 11 (ou outro SO — Mac/Linux similar)
- ✅ Claude Code CLI instalado e funcionando
- ✅ Acesso admin para instalar packages

**Software a instalar:**

### 3.1 Node.js (se não tiver)
```bash
# Windows: baixar em nodejs.org e instalar
# Depois verificar:
node --version  # v18+ recomendado
npm --version
```

### 3.2 MCP Browser Server
```bash
# Option A: Playwright MCP (recomendado)
npm install -g @anthropic-sdk/playwright-mcp

# Option B: Puppeteer MCP
npm install -g puppeteer-mcp

# Verificar:
which playwright-mcp  # (ou puppeteer-mcp)
```

### 3.3 Chrome/Chromium
- Já instalado em Windows 11? Provavelmente sim
- Caso contrário: baixar de google.com/chrome

### 3.4 Configurar Claude Code

**Arquivo:** `~/.claude/settings.json` (ou via Claude Code UI settings)

```json
{
  "mcp_servers": [
    {
      "name": "playwright",
      "command": "playwright-mcp",
      "args": []
    }
  ]
}
```

Ou via Claude Code UI:
1. Claude Code > Settings > MCP Tools
2. Adicionar novo tool
3. Name: `playwright`
4. Command: `playwright-mcp`

---

## 4. Fluxo de Configuração — Passo a Passo

### Fase 1: Setup do Ambiente (30 min, uma vez)

**Passo 1: Instalar Node.js (se necessário)**
```bash
# Windows
# Baixar em nodejs.org → instalar → reiniciar terminal
node --version  # confirmar v18+
```

**Passo 2: Instalar MCP Browser Server**
```bash
npm install -g @anthropic-sdk/playwright-mcp
# Ou
npm install -g puppeteer-mcp

# Verificar
playwright-mcp --version
```

**Passo 3: Criar Chrome Profile Dedicado**
```bash
# Windows: Chrome cria automaticamente
# Abrir Chrome com novo profile
"C:\Program Files\Google\Chrome\Application\chrome.exe" --profile-directory="claudecode-social"

# Se não existir, Chrome cria
# Deixar abrir, depois fechar (profile criado)
```

**Passo 4: Configurar Claude Code (MCP Tool)**
- Abrir Claude Code settings
- Ou editar `~/.claude/settings.json`
- Adicionar:
  ```json
  "mcp_servers": {
    "playwright": {
      "command": "playwright-mcp"
    }
  }
  ```
- Reiniciar Claude Code

---

### Fase 2: Login Manual Prévio (5 min, depois de Fase 1)

**Passo 1: Abrir Chrome com Perfil Dedicado**
```bash
"C:\Program Files\Google\Chrome\Application\chrome.exe" --profile-directory="claudecode-social"
```

**Passo 2: Fazer Login no Instagram**
- Navegar para instagram.com
- Logar com conta de TRABALHO (não pessoal)
  - Recomendado: criar conta separada para a skill ou usar conta de negócio
- Verificar: consegue ver feed, stories, DMs?

**Passo 3: Fechar Browser**
- Sair do Chrome (sessão fica salva no perfil)
- Instagram agora está autenticado nesse perfil

---

### Fase 3: Testes de Validação (10 min, antes de usar em produção)

**Teste 1: Sessão Ativa?**

Claude Code (Haiku, rápido):
```
Abra o MCP browser com perfil "claudecode-social"
Navegue para instagram.com
Tirar screenshot
Perguntar: consegue ver feed logado (não login page)?
```

Resultado esperado: Screenshot mostra feed privado (você está logado)

**Teste 2: Post Público?**

Claude Code:
```
Abra MCP browser com perfil "claudecode-social"
Navegue para instagram.com/p/[ID_POST_PUBLICO]
Tirar screenshot
```

Resultado esperado: Post é acessível e visível

**Teste 3: Story?**

Claude Code:
```
Abra MCP browser com perfil "claudecode-social"
Navegue para instagram.com/stories/bianoutur/
Tirar screenshot (ou esperar video)
```

Resultado esperado: Story é acessível (requer sessão logada, e você tem)

---

## 5. Quando Funciona / Quando Não Funciona

### ✅ Funciona Quando

Todas essas condições são verdadeiras:

1. **MCP server está ativo**
   - Processo `playwright-mcp` rodando
   - Claude Code reconhece o tool (aparece em settings)

2. **Chrome profile existe e é acessível**
   - Perfil "claudecode-social" criado
   - Não foi deletado ou corrompido

3. **Sessão do Instagram é válida**
   - Você fez login manualmente em Fase 2
   - Cookies não expiraram
   - Instagram não detectou comportamento suspeito

4. **Internet está funcionando**
   - Conexão disponível para o browser acessar instagram.com

5. **Instagram não mudou de forma drasticamente**
   - DOM (estrutura HTML) é compatível
   - Seletores CSS que MCP usa ainda funcionam

---

### ❌ NÃO Funciona Quando

Se qualquer uma dessas for verdadeira:

1. **MCP server não está ativado no Claude Code**
   - Solução: Voltar para Fase 1, Passo 4

2. **Sessão do Instagram expirou**
   - Solução: Repetir Fase 2 (fazer login novamente)
   - **Quando isso acontece:** Instagram força logout a cada 30-60 dias, ou por inatividade, ou por suspeita de automação

3. **Instagram detectou automação → bloqueou temporariamente**
   - Solução: Esperar 24-48h, ou fazer Fluxo C (print manual)
   - **Por quê acontece:** Muitas requisições rápidas, padrão não humano, ou uso suspeito

4. **Chrome profile foi corrompido ou deletado**
   - Solução: Deletar perfil corrompido, recriar do zero (Fase 1, Passo 3 + Fase 2)

5. **Sem conexão internet**
   - Solução: Reconectar internet (óbvio, mas às vezes é isso)

6. **Instagram mudou estrutura do DOM**
   - Solução: MCP server pode ficar desatualizado. Testar manualmente, atualizar package se necessário
   - **Raro:** Instagram não muda estrutura básica frequentemente

---

### O Que Depende Do Ambiente (Claude Code)

Fora do seu controle — depende da máquina onde Claude Code roda:

- ✅ MCP tool configurado no settings
- ✅ Processo MCP server rodando
- ✅ Claude Code com permissão para usar o tool
- ✅ Sistema operacional compatível
- ✅ Versão de Claude Code atualizada

**Se algo quebra aqui:** atualizar Claude Code, reinstalar MCP package, revisar settings.

---

### O Que Depende Do Usuário (Murillo)

Tudo que você precisa fazer manualmente:

- ✅ Criar e manter Chrome Profile "claudecode-social"
- ✅ Fazer login manual no Instagram nesse perfil (Fase 2)
- ✅ Renovar login quando sessão expirar (todo ~30-60 dias)
- ✅ **NUNCA** usar o perfil "claudecode-social" para navegação pessoal (mantém clean)
- ✅ Testar antes de cada sessão longa de captura (Fase 3, Teste 1)

**Se algo quebra aqui:** você faz Fase 2 de novo (login manual) e tudo volta.

---

## 6. Riscos e Mitigações

Cinco riscos realistas e como evitar:

### Risco 1: Instagram Detecta Automação → Bloqueia Temporariamente

**Causa:** Muitas requisições rápidas de um mesmo IP/usuário, padrão não humano

**Como se manifesta:**
- Claude tenta capturar e recebe "Too many requests" (429)
- Ou conta fica "temporariamente bloqueada"
- Ou é pedido confirmar identidade

**Mitigação:**
- ✅ Limitar capturas: não automatizar em massa (ex: não capturar 100 stories em 1 hora)
- ✅ Adicionar delays: esperar alguns segundos entre capturas
- ✅ Usar como humano: 1-2 capturas por sessão, não 50+
- ✅ Ter Fluxo C como backup: se MCP falhar, fazer print manual (Fluxo C não ativa Instagram)

---

### Risco 2: Sessão Expira → Acesso Para Silenciosamente

**Causa:** Instagram força logout por inatividade (~60 dias) ou por suspeita

**Como se manifesta:**
- Claude tenta capturar story mas recebe login page
- Story não é acessível porque a sessão morreu

**Mitigação:**
- ✅ Testar sessão antes de captura longa: fazer Teste 1 (screenshot de feed) antes de 10+ capturas
- ✅ Renovar login periodicamente: a cada 30-45 dias, fazer Fase 2 de novo
- ✅ Ter Fluxo C como backup: sempre pronto para fallback manual

---

### Risco 3: Credenciais No Código → Vazamento de Segurança

**Causa:** Alguém colocar usuário/senha no SKILL.md ou settings por acidente

**Como se manifesta:**
- Arquivo do vault fica público
- Credenciais são descobertas
- Conta do Instagram é comprometida

**Mitigação:**
- ✅ **NUNCA** colocar usuário/senha em arquivos do vault
- ✅ **NUNCA** colocar em settings.json
- ✅ **ÚNICO método permitido:** Login manual humano no Chrome
- ✅ Revisar: antes de fazer commit, verificar se não tem credenciais

---

### Risco 4: Chrome Profile Corrompido

**Causa:** Atualização do Chrome, crash, corrupção do disco, etc.

**Como se manifesta:**
- Perfil não abre, ou abre mas sem a sessão
- Chrome com erro ao tentar usar perfil

**Mitigação:**
- ✅ Fazer backup do perfil periodicamente (copiar pasta do Windows)
- ✅ Documentar processo de recriação (está em Fase 1, Passo 3)
- ✅ Se falhar: deletar e recriar perfil do zero (leva 5 min, Fase 2)

---

### Risco 5: MCP Server Quebra Com Atualização

**Causa:** npm package `playwright-mcp` tem update incompatível, ou dependência quebra

**Como se manifesta:**
- Claude tenta usar MCP tool mas recebe erro
- Erro tipo "MCP server not found" ou crash silencioso

**Mitigação:**
- ✅ Fixar versão do package no package.json
- ✅ Testar antes de atualizar: antes de `npm update`, fazer Teste 1
- ✅ Ter Fluxo C como backup: pode sempre fazer print manual

---

## 7. Checklist Operacional

Use este checklist para implementação futura.

### Configuração Inicial (Fazer Uma Vez)

- [ ] Node.js instalado? Verificar com `node --version` (v18+)
- [ ] MCP browser server instalado? Verificar com `playwright-mcp --version`
- [ ] Chrome Profile "claudecode-social" criado? Verificar em `chrome://version` > perfil
- [ ] Instagram logado no perfil dedicado? Abrir Chrome + perfil + confirmar logged in
- [ ] MCP tool adicionado no Claude Code settings? Editar `~/.claude/settings.json`
- [ ] Claude Code reiniciado após changes? Fechar e reabrir
- [ ] **Teste 1 (Sessão Ativa) Passou?** MCP browser vê feed privado
- [ ] **Teste 2 (Post Público) Passou?** MCP browser acessa post específico
- [ ] **Teste 3 (Story) Passou?** MCP browser vê story (requer sessão)

✅ **Se todos acima: Fase 1-3 completa, MCP está pronto**

---

### Manutenção (Verificar Mensalmente)

- [ ] Sessão do Instagram ainda ativa no perfil "claudecode-social"? Abrir Chrome + profile, ir em instagram.com, vê feed?
- [ ] MCP server instalado e na versão correta? Verificar `playwright-mcp --version`
- [ ] Claude Code reconhece MCP tool? Settings > MCP Tools > aparece "playwright"?
- [ ] Teste rápido antes de usar: fazer Teste 1 (screenshot de feed) funciona?

✅ **Se todos acima: tudo pronto para capturar**

---

### Antes de Cada Sessão de Captura

- [ ] Confirmar que MCP tool está ativo (Claude vê o tool disponível em settings)
- [ ] Testar acesso rápido: "Claude, consegue ver instagram.com logado?" → screenshot de feed
- [ ] Se SIM: podem capturar stories com Fluxo B
- [ ] Se NÃO: fazer Fluxo C/D/E (manual) e avisar Murillo para renovar sessão (Fase 2)

✅ **Se consegue ver feed logado: pode capturar com MCP**

---

## 8. Conexão com a Skill `captura-referencias-visuais`

### Como o SKILL.md Muda Quando MCP Estiver Configurado

**Antes (agora, 2026-04-25):**
```
## FLUXO B — MCP Browser Com Sessão Logada (Futuro)

**Quando estiver configurado:** ...
PRÉ-REQUISITO (para Murillo):
1. Ativar MCP browser tool no Claude Code settings
2. Logar no Instagram ANTES de chamar a skill
...
```

**Depois (quando MCP estiver ativo):**
```
## FLUXO B — MCP Browser Com Sessão Logada (Disponível)

**Status:** ✅ Configurado (veja MCP-SETUP.md para verificação)

PRÉ-REQUISITO (Já feito, verificar):
- [ ] MCP tool ativado no Claude Code settings? (Seção 3 de MCP-SETUP.md)
- [ ] Chrome profile "claudecode-social" com sessão ativa? (Fazer Teste 1)
- [ ] Teste passou: consegue ver feed logado?

SE SIM: Use Fluxo B
SE NÃO: Fallback para Fluxo C (manual print)
```

---

### Que Campos de Metadata Aparecem

**Fluxo B ativo — Exemplo de captura:**

```yaml
---
tipo: story
origem: @bianoutur (Instagram)
tipo_midia: image
extensao: .jpg
acesso_tipo: mcp_com_sessao    ← Novo: MCP foi usado
metodo_captura: automatico_mcp_sessao  ← Novo: automação via MCP
usuario_sessao: [nome da conta Instagram]  ← Novo: qual conta fez login
data_captura: 2026-04-25
url_original: https://instagram.com/stories/bianoutur/
observacao: "Capturado via MCP browser com sessão herdada"
tags: [bianoutur, story, imagem, mcp, automacao]
---
```

---

### Quando Você Volta para Fluxo A/C/D/E

A skill automaticamente **fallback** para Fluxo C (manual) se:
- MCP tool não está respondendo
- Sessão expirou
- Instagram bloqueou temporariamente
- Erro de conexão

**Behavior esperado:**
1. Claude tenta Fluxo B
2. MCP retorna erro
3. Claude automaticamente registra no metadata: `acesso_tipo: manual_fallback_de_mcp`
4. Claude avisa você: "MCP falhou, usar Fluxo C (print manual)?"

---

## Próximos Passos

### Agora (2026-04-25): Planejamento
- ✅ Documentação criada (este arquivo)
- ✅ Referenciado no SKILL.md
- ✅ Pronto para execução quando necessário

### Futura (Fase 2, quando SKill precisar de MCP): Implementação
1. Seguir Fase 1-3 deste documento
2. Fazer Testes 1-3
3. Ativar Fluxo B no SKILL.md
4. Começar a usar capturas automáticas de stories

---

## Suporte e Troubleshooting

**Se algo quebrar:**

| Problema | Solução |
|---|---|
| MCP server não inicia | Reinstalar: `npm install -g @anthropic-sdk/playwright-mcp` |
| Chrome profile não abre | Recriar: Fase 1, Passo 3 |
| Sessão expirou | Fazer login novamente: Fase 2 |
| Instagram está bloqueando | Esperar 24h ou usar Fluxo C (manual) |
| "Claude não reconhece MCP tool" | Reiniciar Claude Code, verificar settings.json |

---

**Status:** ✅ Documentação Completa — Pronto para Implementação Futura  
**Versão:** 1.0  
**Próximo Review:** Quando Murillo estiver pronto para configurar MCP (Fase 2+)
