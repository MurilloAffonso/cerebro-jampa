# Roadmap — Gestão GBP via API

**Decisão atual (2026-05-12):** seguir pela **Opção B (enxuta)** — apenas leitura, relatórios e alertas. Mutações (Opção A) ficam reservadas para reavaliação após 30-60 dias de operação da Opção B.

---

## Opção A — Completa (referência)

Leitura + relatórios + sugestões + execução aprovada.

| Fase | Objetivo | APIs | Pré-requisitos | Risco | Esforço | Entregáveis |
|---|---|---|---|---|---|---|
| **1** | Documentação | — | Nenhum | Zero | 4-6h | `README.md`, `docs/*`, `.gitignore`, `config.example.env` (em andamento) |
| **2** | Leitura via API | Account Management, Business Information, Q&A, Performance, GMB v4.9 (read) | Cloud Project + aprovação v4.9 | Baixo | 12-20h | `scripts/auth/login.ts`, `scripts/read/*`, primeiro snapshot |
| **3** | Relatórios automáticos | Performance, Q&A, GMB v4.9 read, Notifications | Fase 2 estável | Baixo | 6-10h | Relatório semanal, alertas de review/pergunta |
| **4** | Sugestões de otimização | Nenhuma (escreve em fila local) | Fase 3 + skills existentes | Baixo | 10-15h | `scripts/propor/*`, CLI `revisar-fila.ts` |
| **5** | Atualizações com aprovação | Business Information, Q&A, GMB v4.9 (write), Place Actions | Fase 4 + 14 dias dry-run | **Médio** | 15-25h | `scripts/executar/*`, log estruturado, rollback |
| **6** | Rotina mensal sustentável | Todas em produção | Fase 5 estável por 14 dias | Baixo | 30 min/sem para Murillo | Operação contínua, relatório mensal |

**Calendário Opção A:** 8-10 semanas, ~80-100h dev.

---

## Opção B — Enxuta (decidida)

Apenas leitura, relatórios automáticos e alertas. **Nenhuma mutação via API.** Todas as edições no perfil continuam manuais no painel `business.google.com`.

| Fase | Objetivo | APIs | Pré-requisitos | Risco | Esforço | Entregáveis |
|---|---|---|---|---|---|---|
| **1** | Documentação | — | Nenhum | Zero | 4-6h | `README.md`, `docs/*`, `.gitignore`, `config.example.env` |
| **2** | Leitura via API | Account Management, Business Information (read), Q&A (read), Performance, GMB v4.9 (reviews/media list) | Cloud Project + aprovação v4.9 | Baixo | 12-20h | Auth + scripts de leitura + primeiro snapshot |
| **3** | Relatórios + alertas | Performance, GMB v4.9 read, Q&A read, Notifications | Fase 2 estável | Baixo | 6-10h | Relatório semanal, alerta de review/Q&A novos via Pub/Sub ou e-mail |

**Calendário Opção B:** 3-5 semanas, ~25-35h dev.

**Fronteira clara:** Opção B nunca chama endpoint de mutação. Se em algum momento for preciso responder review automaticamente, publicar post ou mudar serviço, **promover para Opção A** com decisão formal registrada em `_memoria/decisoes-estrategicas.md`.

---

## Detalhamento da Opção B

### Fase 1 — Documentação (semana 0-1)

**Objetivo:** consolidar tudo o que se sabe sobre o projeto, APIs e fluxos, para que Murillo possa decidir e a Fase 2 começar com base sólida.

**Entregáveis (todos em `google-business-profile/`):**
- `README.md` — visão geral, escopo, regra central, status
- `config.example.env` — modelo de variáveis (sem dados reais)
- `.gitignore` — bloqueio de segredos
- `docs/api-map.md` — mapa das 10 APIs oficiais
- `docs/permissions-and-risks.md` — Tiers 1-4, riscos transversais
- `docs/workflow-aprovacao.md` — fluxo de governança (referência para Opção A)
- `docs/oauth-setup.md` — passo a passo do setup Cloud
- `docs/roadmap.md` — este documento

**Status:** em andamento. Nenhum código, nenhuma credencial, nenhuma chamada à API.

---

### Fase 2 — Leitura via API (semana 2-5, condicionada à aprovação Google)

**Pré-condições:**
- Cloud Project criado (passo 1 de `oauth-setup.md`)
- 7 APIs modernas habilitadas (passo 2)
- Solicitação de acesso v4.9 enviada (passo 3)
- OAuth consent screen + credencial Desktop (passos 4-5)
- Murillo confirmado como Proprietário (passo 6)

**APIs usadas (apenas leitura):**
- `mybusinessaccountmanagement.googleapis.com` — descobrir `accountId` e `locationId`
- `mybusinessbusinessinformation.googleapis.com` — snapshot do estado do perfil
- `mybusinessqanda.googleapis.com` — listar Q&A
- `businessprofileperformance.googleapis.com` — métricas e palavras-chave
- `mybusiness` v4.9 — listar reviews e mídia (read-only)

**Scripts a implementar:**

```
scripts/
├── auth/
│   ├── login.ts          # OAuth flow inicial, gera refresh_token
│   └── refresh.ts        # Renova access_token sob demanda
└── read/
    ├── identificar-perfil.ts    # Descobre account_id + location_id
    ├── snapshot-perfil.ts       # Salva estado completo em data/snapshots/
    ├── listar-reviews.ts        # Lista reviews → data/cache/reviews.json
    ├── listar-qa.ts             # Lista perguntas → data/cache/qa.json
    └── puxar-metricas.ts        # Performance API → data/cache/metrics.json
```

**Validação de fim de fase:**
- [ ] Snapshot do perfil salvo em `data/snapshots/2026-XX-XX.json`
- [ ] Reviews atuais listadas em JSON
- [ ] Métricas dos últimos 28 dias salvas
- [ ] Nenhuma escrita feita
- [ ] Auditoria de log: zero chamadas a endpoints `patch`, `create`, `update`, `delete`

**Risco:** baixo. Read-only.

**Esforço estimado:** 12-20h.

---

### Fase 3 — Relatórios automáticos + alertas (semana 5-7)

**Pré-condições:** Fase 2 funcionando há pelo menos 7 dias sem erro.

**APIs adicionadas:** Notifications v1.2 (para webhook Pub/Sub).

**Funcionalidades:**

| Função | Frequência | Saída |
|---|---|---|
| Relatório semanal | Segunda 8h | `reports/relatorio-semanal-{YYYY}-W{WW}.md` |
| Relatório mensal | Dia 1 do mês 8h | `reports/relatorio-mensal-{YYYY}-{MM}.md` |
| Alerta de review nova | Webhook (realtime) | E-mail/WhatsApp para Murillo |
| Alerta de pergunta nova | Webhook (realtime) | Mesmo canal |
| Auditoria NAP | Semanal | Item no relatório semanal |
| Auditoria de consistência (Cadastur, telefone, site vs `_conhecimento/empresa.md`) | Semanal | Mesmo lugar |

**Conteúdo do relatório semanal:**
- Métricas: visualizações, interações, pesquisas (diff vs semana anterior)
- Top 5 palavras-chave
- Reviews novas: nº, nota média, link para texto
- Perguntas novas: nº, status (respondida/não)
- Anomalias detectadas
- "O que mexer manualmente esta semana" (curadoria humana, gerada por IA com base nos dados)

**Validação de fim de fase:**
- [ ] 2 relatórios semanais entregues
- [ ] 1 alerta de review nova disparado e recebido
- [ ] Auditoria NAP rodando

**Risco:** baixo.

**Esforço estimado:** 6-10h.

---

## Critérios para promover de Opção B → Opção A

Reavaliar promoção após Fase 3 estável, condicionada a:

1. **Volume justifica:** ≥10 reviews/semana ou ≥3 perguntas/semana — automatizar resposta vira ganho real de tempo
2. **Fluxo de aprovação valida-se manualmente primeiro:** Murillo testa por 30 dias respondendo manualmente seguindo a estrutura da auditoria. Se a estrutura funciona, automação faz sentido
3. **Confiança na infraestrutura:** zero erro em 30 dias de Fase 3
4. **Decisão registrada:** em `_memoria/decisoes-estrategicas.md`

---

## O que NÃO entra em nenhuma das opções (segue manual permanentemente)

- Mudança de nome do perfil
- Mudança de categoria primária
- Mudança de endereço
- Mudança de telefone
- Mudança de site
- Q&A "do proprietário" — **mantém manual até validação técnica** (ver `api-map.md` seção 5 e `permissions-and-risks.md` Tier 2)

---

## Marcos visíveis (Opção B)

```
S0 ────────── Fase 1 entregue (documentação)
        │
        ↓
S1-2 ── Cloud Project criado + aprovação v4.9 solicitada
        │     (aguardando Google: 5-30 dias)
        ↓
S3-5 ── Fase 2 (leitura) implementada e validada
        │
        ↓
S6-7 ── Fase 3 (relatórios + alertas) em produção
        │
        ↓
S8+ ─── Operação contínua. Reavaliar promoção para Opção A em S12.
```

---

*Roadmap revisado a cada fim de fase. Promoção para Opção A exige decisão formal.*
