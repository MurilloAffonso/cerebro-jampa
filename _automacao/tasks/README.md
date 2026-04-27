# _automacao/tasks/ — Fila de Tarefas do Jarvis

**Versão:** 0.2
**Atualizado:** 2026-04-27

---

## O Que É uma Tarefa Jarvis

Uma tarefa Jarvis é um arquivo JSON que representa uma unidade de trabalho a ser executada pelo sistema Jarvis (n8n + Claude Code + skills do vault).

Cada tarefa tem:
- **O que fazer** (`objetivo`) — em linguagem natural
- **Como fazer** (`skill_primaria`, `skills_recomendadas`) — qual skill do vault consultar
- **Qual o risco** (`risco`, `autonomia`) — se Jarvis executa sozinho ou espera Murillo
- **O que pode tocar** (`arquivos_permitidos`, `arquivos_bloqueados`, `pode_commitar`, etc.)
- **O que é esperado** (`resultado_esperado`) — critério de sucesso para QA

---

## Como uma Mensagem do Telegram Vira Tarefa JSON

```
Murillo no Telegram:
"Jarvis, cria linha editorial de maio para o Instagram"
         │
         ▼
n8n recebe webhook do Telegram
         │
         ▼
n8n cria arquivo JSON em _automacao/tasks/
com tipo: "conteudo-instagram", risco: "auto", skill_primaria: "social-media-editorial-turismo"
         │
         ▼
Claude Code detecta novo arquivo em tasks/
         │
         ▼
Claude Code lê a tarefa, valida contra o schema
         │
         ├─ risco = auto → executa skill diretamente
         │                  grava rascunho em _automacao/logs/
         │                  atualiza status: "concluida"
         │
         └─ risco = aprovacao → prepara entrega
                                 atualiza status: "aguardando-aprovacao"
                                 notifica Murillo (Telegram/log)
```

---

## Ciclo de Vida de uma Tarefa

```
CRIADA (arquivo JSON salvo em tasks/)
    │
    ▼
PENDENTE ────────────────────────────────────────────────┐
    │                                                    │
    ├─ risco: auto                                       │
    │       │                                            │
    │       ▼                                            │
    │  EM-EXECUÇÃO                                       │
    │       │                                            │
    │       ▼                                            │
    │  CONCLUÍDA ◄───────────────────────────────────────┤
    │                                                    │
    ├─ risco: aprovacao                                  │
    │       │                                            │
    │       ▼                                            │
    │  EM-EXECUÇÃO → AGUARDANDO-APROVAÇÃO                │
    │                        │                           │
    │              aprovado_por_murillo: true             │
    │                        │                           │
    │                        ▼                           │
    │                   APROVADA → CONCLUÍDA ────────────┤
    │                                                    │
    ├─ risco: bloqueado                                  │
    │       │                                            │
    │       ▼                                            │
    │  BLOQUEADA (log + notificação) ────────────────────┤
    │                                                    │
    └─ qualquer estado                                   │
            │                                            │
            ▼                                            │
       CANCELADA ───────────────────────────────────────►┘
```

---

## Níveis de Autonomia

| Nível | Risco | O Que Jarvis Faz |
|-------|-------|-----------------|
| `total` | `auto` | Executa completamente. Grava log. Murillo vê depois. |
| `parcial` | `aprovacao` | Prepara entrega. Para. Aguarda `aprovado_por_murillo: true`. |
| `nenhuma` | `bloqueado` | Recusa executar. Grava motivo. Notifica Murillo. |

---

## Como Criar uma Tarefa (Manual)

1. Copiar um dos arquivos `exemplo-*.json` desta pasta
2. Renomear para `YYYY-MM-DD-slug.json`
3. Preencher campos obrigatórios (ver schema)
4. Salvar — Jarvis detecta e processa

**Campos obrigatórios:**

| Campo | Tipo | Exemplo |
|-------|------|---------|
| `id` | string | `"2026-05-01-linha-editorial-maio"` |
| `criado_em` | datetime | `"2026-05-01T09:00:00-03:00"` |
| `objetivo` | string | `"Criar 8 pautas de Instagram para maio/2026"` |
| `tipo` | enum | `"conteudo-instagram"` |
| `risco` | enum | `"auto"` |
| `status` | enum | `"pendente"` |
| `autonomia` | enum | `"total"` |
| `skill_primaria` | enum | `"social-media-editorial-turismo"` |
| `precisa_aprovacao` | boolean | `false` |
| `resultado_esperado` | string | `"Arquivo _automacao/logs/ com 8 pautas formatadas"` |

Schema completo: `_automacao/schemas/tarefa-jarvis.schema.json`

---

## Mapeamento Tipo → Skill

| `tipo` | `skill_primaria` | `usar_orquestrador` |
|--------|-----------------|---------------------|
| `status-check` | `jarvis-status` | `false` |
| `conteudo-instagram` | `social-media-editorial-turismo` | `false` |
| `conteudo-social` | `radar-concorrentes-social` | `false` |
| `site-planejamento` | `orquestrador-projeto-turismo` | `true` |
| `site-implementacao` | `programador-de-site` | `true` |
| `tabua-mares` | `tabua-mares-turismo` | `false` |
| `pagina-passeio` | `orquestrador-projeto-turismo` | `true` |
| `trafego-pago` | `manual` | `false` |
| `seo` | `seo-local-turismo` | `false` |
| `copy-vendas` | `copywriter-vendas` | `false` |
| `briefing` | `briefing-designer` | `false` |
| `pesquisa` | `radar-concorrentes-social` | `false` |
| `qa-local` | `manual` | `false` |
| `aprendizado-semanal` | `aprendizado-semanal` | `false` |
| `credenciais-bloqueado` | `bloqueado-sem-skill` | `false` |

---

## Regras de Ouro

- **Nunca deletar** arquivo de tarefa — mover para `_automacao/logs/tasks-arquivo/` (futuro)
- **Nunca editar** `aprovado_por_murillo: true` sem revisão real do resultado
- **Nunca criar** tarefa `risco: "auto"` com `pode_alterar_arquivos: true`
- **Nunca omitir** `motivo_bloqueio` em tarefas `risco: "bloqueado"`
- **Sempre preencher** `contexto` quando a tarefa tem dependências ou restrições não óbvias
- **Git limpo** (`git status` sem alterações não commitadas) é pré-requisito antes de qualquer tarefa `risco: "aprovacao"` que altere arquivos

---

## Tarefas Ativas

_(ver arquivos `exemplo-*.json` nesta pasta para referência)_

---

## Exemplos Disponíveis

| Arquivo | Tipo | Risco | Skill |
|---------|------|-------|-------|
| `exemplo-status.json` | status-check | auto | jarvis-status |
| `exemplo-conteudo-instagram.json` | conteudo-instagram | auto | social-media-editorial-turismo |
| `exemplo-site-planejamento.json` | site-planejamento | auto | orquestrador-projeto-turismo |
| `exemplo-site-implementacao.json` | site-implementacao | aprovacao | programador-de-site |
| `exemplo-tabua-mares-com-skills.json` | tabua-mares | aprovacao | tabua-mares-turismo |
| `exemplo-pagina-passeio-com-skills.json` | pagina-passeio | aprovacao | orquestrador-projeto-turismo |
| `exemplo-trafego-pago.json` | trafego-pago | aprovacao | manual |
| `exemplo-bloqueado-credenciais.json` | credenciais-bloqueado | bloqueado | bloqueado-sem-skill |
