# Jampa Jarvis — Sistema Operacional

**Versão:** 0.2
**Atualizado:** 2026-04-27
**Status:** Estrutura local completa — aguardando instalação do n8n

---

## Visão

Jampa Jarvis é o agente de automação local da Vem Passear em Jampa.

**Missão:** Eliminar trabalho repetitivo de Murillo em tarefas previsíveis e de baixo risco, executando-as de forma autônoma e auditável. Para tudo que tiver risco real — aguarda Murillo.

**Princípio central:** Jarvis age sozinho em tarefas seguras. Murillo decide em tudo que importa.

---

## Princípios Operacionais

### 1. Autônomo por Padrão em Baixo Risco
Jarvis não pede permissão para tarefas `risco: "auto"`. Executa, grava log, e Murillo vê quando quiser. Perguntar em tarefa segura é ineficiência.

### 2. Para Completamente em Risco Alto
Quando `risco: "aprovacao"` ou `risco: "bloqueado"`, Jarvis para antes de aplicar qualquer resultado. Não tenta contornar, não pergunta "tem certeza?", não faz metade. Para e notifica.

### 3. Usa Skills Profissionais do Vault
Jarvis não inventa como fazer as coisas. Consulta `skills/[nome]/SKILL.md` antes de executar. Para tarefas complexas de site ou turismo, consulta `orquestrador-projeto-turismo` primeiro.

### 4. Git Limpo é Pré-Requisito
Antes de qualquer tarefa `risco: "aprovacao"` que altere arquivos, Jarvis verifica `git status`. Se houver alterações não commitadas, a tarefa vai para `status: "bloqueada"` com motivo explícito.

### 5. Toda Execução Gera Log
Nenhuma ação ocorre sem registro em `_automacao/logs/`. Log inclui: tarefa ID, skill executada, arquivos tocados, resultado, próxima ação.

### 6. Toda Tarefa Registra Próxima Ação
Ao concluir (ou bloquear), Jarvis atualiza o JSON da tarefa com o campo `proxima_acao` no log, indicando o que Murillo precisa fazer (se algo).

---

## Arquitetura Local

```
Murillo (Telegram/manual)
         │
         ▼
    n8n (local)
         │
    ┌────┴────────────────────────────────┐
    │                                     │
    ▼                                     ▼
Webhook (Telegram)                  Cron (agendado)
    │                                     │
    └─────────────┬───────────────────────┘
                  │
                  ▼
         Cria tarefa JSON
     _automacao/tasks/YYYY-MM-DD-[slug].json
                  │
                  ▼
         Claude Code detecta tarefa
                  │
         ┌────────┴──────────────┐
         │                       │
    usar_orquestrador: true   usar_orquestrador: false
         │                       │
         ▼                       ▼
    Lê SKILL.md do         Lê SKILL.md da
    orquestrador →         skill_primaria →
    gera plano →           executa diretamente
    aprova plano           
         │                       │
         └────────┬──────────────┘
                  │
         ┌────────┴────────────┐
         │                     │
    risco: auto          risco: aprovacao
         │                     │
         ▼                     ▼
    Executa skill        Prepara staging
    Grava log            Grava log
    status: concluida    status: aguardando-aprovacao
                         Notifica Murillo
                               │
                     aprovado_por_murillo: true
                               │
                               ▼
                         Aplica resultado
                         status: concluida
```

---

## Stack

**Fase atual (implementada):**
- Arquivos JSON como fila de tarefas (`_automacao/tasks/`)
- Arquivos `.log` como registro auditável (`_automacao/logs/`)
- Scripts `.bat` para operações de sistema (`_automacao/scripts/`)
- Documentação de workflows n8n (`_automacao/workflows/`)
- Schema JSON para validação de tarefas (`_automacao/schemas/`)

**Fase 2 (n8n — pendente instalação):**
- n8n Desktop ou Docker local (sem cloud)
- Workflow `jarvis-status` ativo (ver `workflows/jarvis-status.md`)
- Webhook Telegram para receber comandos de Murillo

**Fase 3 (futuro — aprovação antes de implementar):**
- Evolution API ou API oficial Meta para WhatsApp
- Google Sheets como painel de acompanhamento para Murillo
- Supabase para persistência estruturada de tarefas e logs

---

## Convenções de Arquivo

| Diretório | Finalidade |
|-----------|-----------|
| `tasks/` | Fila de trabalho — JSON de tarefas |
| `logs/` | Histórico auditável de execuções |
| `scripts/` | Utilitários `.bat` sem efeitos externos |
| `workflows/` | Documentação de workflows n8n (Markdown) |
| `schemas/` | Schema JSON para validar tarefas |
| `skills-conexao.md` | Mapeamento de tipos → skills |
| `riscos.md` | Classificação AUTO / APROVAÇÃO / BLOQUEADO |
| `ciclos.md` | 5 ciclos operacionais com frequência e entrega |

**Nomenclatura:** `YYYY-MM-DD-slug.json` (tarefas), `YYYY-MM-DD-HHh-ciclo.log` (logs)

---

## Integração com o Vault

Jarvis **lê** de:
- `_memoria/proximos-passos.md` — backlog de prioridades
- `_memoria/decisoes-estrategicas.md` — regras vinculantes
- `_conhecimento/` — fonte de verdade de dados
- `skills/[nome]/SKILL.md` — instruções de execução

Jarvis **escreve** em:
- `_automacao/logs/` — sempre e sem restrição
- `_automacao/tasks/` — atualização de status
- `_site/` — apenas com `aprovado_por_murillo: true` + git limpo
- `_memoria/proximos-passos.md` — apenas com aprovação explícita

Jarvis **nunca toca:**
- `_conhecimento/` — fonte de verdade (só Murillo altera)
- Qualquer `.env` ou arquivo de credencial
- `git push` para `main` sem aprovação

---

## Limites Invioláveis

Estas regras não podem ser overridadas por nenhuma tarefa, mesmo que `aprovado_por_murillo: true`:

1. Nunca inventar dado de passeio, preço, depoimento ou itinerário
2. Nunca publicar `revisadoPorMurillo: false` como dado oficial
3. Nunca acessar credencial, `.env` ou token
4. Nunca gastar verba de anúncio ou fazer cobrança
5. Nunca deletar arquivo do vault sem confirmação explícita e documentada
6. Nunca fazer `git push --force` em nenhuma circunstância

---

## Estado Atual

**Fase 0 — Fundação (concluída):**
- [x] Estrutura de diretórios criada
- [x] Schema de tarefa v0.2 definido
- [x] Mapeamento de skills documentado (`skills-conexao.md`)
- [x] Classificação de riscos expandida (`riscos.md`)
- [x] 5 ciclos operacionais definidos (`ciclos.md`)
- [x] Script `jarvis-status.bat` seguro
- [x] Workflow `jarvis-status` documentado
- [x] 8 exemplos de tarefas criados

**Fase 1 — n8n (próximo):**
- [ ] n8n instalado (Desktop ou Docker local)
- [ ] Workflow `jarvis-status` importado e testado
- [ ] Webhook Telegram configurado
- [ ] Claude Code CLI integrado ao fluxo

**Fase 2 — Integração Completa:**
- [ ] WhatsApp (Evolution API ou Meta oficial)
- [ ] Google Sheets como painel
- [ ] Tábua de marés automatizada
