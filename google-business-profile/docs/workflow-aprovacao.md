# Workflow de Aprovação — Governança de Mutações no GBP

**Princípio invariável:** nenhuma chamada de escrita à API acontece sem aprovação humana explícita por item.

---

## Fluxo em 7 passos

```
┌─────────────────────────────────────────────────────────────┐
│ 1. IA ANALISA                                                │
│    Scripts de leitura rodam (cron) e coletam estado atual   │
│    APIs: Account Management, Business Information,           │
│          Performance, Q&A, GMB v4.9 (read)                  │
│        ↓                                                      │
│ 2. IA PROPÕE                                                │
│    Scripts geram drafts: respostas, posts, fotos, Q&A       │
│    Saída: data/fila/pendentes/{tipo}-{timestamp}.md         │
│        ↓                                                      │
│ 3. MURILLO REVISA                                           │
│    Recebe notificação: "X drafts pendentes"                 │
│    Roda CLI: npx tsx aprovar/revisar-fila.ts                │
│    Vê: arquivo, contexto, diff vs estado atual              │
│        ↓                                                      │
│ 4. MURILLO APROVA                                           │
│    Opções por item: [a]provar | [e]ditar | [r]ejeitar       │
│    Aprovar move: pendentes/ → aprovados/                     │
│    Rejeitar move: pendentes/ → rejeitados/ (com motivo)     │
│        ↓                                                      │
│ 5. SCRIPT EXECUTA                                            │
│    scripts/executar/* lê aprovados/                          │
│    Antes de chamar API: snapshot do estado atual            │
│    Chama API com payload aprovado                            │
│    Modo --dry-run nas primeiras 2 semanas                    │
│        ↓                                                      │
│ 6. LOG                                                       │
│    logs/api-calls/ — chamada bruta (request, response)      │
│    logs/execucoes/ — quem aprovou, quando, resultado        │
│    logs/erros/ — falhas 4xx/5xx                              │
│        ↓                                                      │
│ 7. RELATÓRIO                                                 │
│    reports/relatorio-semanal-YYYY-WW.md atualizado          │
│    Diff visível: o que mudou, antes/depois, link prova      │
└─────────────────────────────────────────────────────────────┘
```

---

## Detalhamento por passo

### 1. IA analisa

**Frequência:**
- Snapshot completo: diário às 7h
- Reviews/Q&A novos: a cada 4h
- Métricas: diário 8h
- Palavras-chave: mensal dia 1
- Auditoria NAP: semanal

**Sem mutação. Só leitura.**

---

### 2. IA propõe

**Tipos de draft gerados:**

| Tipo | Quando | Arquivo |
|---|---|---|
| Resposta a review | Toda review nova sem resposta | `resposta-review-{review_id}.md` |
| Resposta a pergunta | Toda pergunta nova sem resposta | `resposta-qa-{question_id}.md` |
| Post semanal | Toda segunda 6h | `post-semanal-{YYYY-WW}.md` |
| Upload de foto | Conforme calendário 30 dias | `foto-upload-{slot}.md` |
| Pergunta do proprietário (Q&A) | Quando falta cobertura de tópico no Q&A público (após validação) | `qa-proprietario-{tema}.md` |

**Estrutura padrão de cada draft:**

```markdown
---
tipo: resposta-review
review_id: ABC123
review_data: 2026-05-10
review_nota: 5
review_autor: Laís Moura
gerado_em: 2026-05-12T07:14:00-03:00
endpoint_alvo: GMB v4.9 reviews.updateReply
risco: medio
---

## Review original
> [texto da review do cliente]

## Resposta proposta
[texto gerado pela IA seguindo a estrutura da seção 8 da auditoria]

## Justificativa
- Citou passeio "Piscinas Naturais do Seixas" (sinal SEO)
- Estrutura: agradecimento + passeio + diferencial + convite
- Tom alinhado com `_conhecimento/tom-de-voz.md`

## Aprovação
- [ ] Aprovado por Murillo em _____
```

---

### 3. Murillo revisa

**Como é avisado:**
- Mensagem WhatsApp/Telegram automática (futuro)
- Por enquanto: e-mail diário com link/contagem
- Comando manual: `npx tsx aprovar/revisar-fila.ts` lista o que está pendente

**CLI interativa exibe:**
- Tipo do draft
- Contexto (review original, métricas, etc.)
- Diff vs estado atual
- Risco classificado (Tier)
- Endpoint que vai ser chamado

---

### 4. Murillo aprova / edita / rejeita

**Opções por draft:**

- `[a]` Aprovar como está → move para `aprovados/`
- `[e]` Editar no $EDITOR antes de aprovar
- `[r]` Rejeitar → move para `rejeitados/`, pede motivo (1 linha)
- `[s]` Skip → fica em pendentes para próxima revisão
- `[v]` Ver mais contexto (snapshot, histórico)
- `[q]` Sair sem salvar progresso

**Lote:** múltiplas revisões em uma sessão. Sem limite.

---

### 5. Script executa

**Pré-condições para execução:**
- ✅ Draft em `data/fila/aprovados/`
- ✅ Snapshot atual salvo em `data/snapshots/`
- ✅ Refresh token válido em `.env`
- ✅ Modo: `--dry-run` (default 14 dias) ou `--apply` (após período de teste)

**Fluxo de execução:**
1. Lê draft aprovado
2. Salva snapshot pré-mutação
3. Chama API (ou simula se `--dry-run`)
4. Lê resposta
5. Se sucesso (200/204): move draft para `aprovados/executados/`
6. Se erro: move para `aprovados/falhou/` + alerta para Murillo

**Em nenhum caso script executa sem o arquivo estar em `aprovados/`.**

---

### 6. Log

**Estrutura de cada chamada gravada em `logs/api-calls/`:**

```json
{
  "timestamp": "2026-05-12T14:32:11-03:00",
  "endpoint": "GMB v4.9 reviews.updateReply",
  "method": "PUT",
  "draft_id": "resposta-review-ABC123",
  "approved_by": "murillo",
  "approved_at": "2026-05-12T14:30:02-03:00",
  "dry_run": false,
  "request_payload_redacted": { "comment": "[...500 chars...]" },
  "response_code": 200,
  "response_summary": "Reply posted",
  "snapshot_pre": "data/snapshots/2026-05-12-pre-ABC123.json",
  "duration_ms": 412
}
```

**Importante:** payloads são redacted (sem dados sensíveis), tokens nunca aparecem em log.

---

### 7. Relatório semanal

**Arquivo:** `reports/relatorio-semanal-{YYYY}-W{WW}.md`

**Conteúdo:**
- Métricas da semana (visualizações, interações, pesquisas)
- Top 5 palavras-chave de busca
- Reviews recebidas (nº, nota média, com/sem resposta)
- Perguntas recebidas
- Drafts gerados / aprovados / rejeitados
- Mutações executadas (link para snapshot pré/pós)
- Anomalias detectadas pela auditoria NAP

Murillo lê em 5 minutos toda segunda-feira.

---

## Rollback

**Em caso de erro de execução:**

1. Identificar `draft_id` que causou problema
2. Localizar snapshot pré em `data/snapshots/`
3. Rodar `scripts/executar/rollback.ts --snapshot {path}`
4. Script aplica `Business Information v1.patch` (ou equivalente) com payload do snapshot
5. Logar rollback em `logs/execucoes/rollback-{timestamp}.json`

**Limites do rollback:**
- ✅ Mutações em Business Information (descrição, atributos, serviços, horário) — rollback funciona
- ❌ Reviews respondidas — não dá pra "des-responder", só editar ou apagar
- ❌ Posts publicados — só apagar
- ❌ Uploads de foto — só deletar pela API

Para esses casos, ação corretiva é manual.

---

## Princípios de segurança no workflow

1. **Default seguro:** `--dry-run` é o padrão. Apply é explícito.
2. **Aprovação rastreável:** todo arquivo em `aprovados/` carrega `approved_by` + timestamp.
3. **Nenhum loop infinito:** se 3 erros consecutivos no mesmo endpoint, o script pausa e alerta.
4. **Sem batch sem confirmação:** lote de 10+ mutações pede confirmação extra ("Confirma 10 publicações? y/N").
5. **Tokens nunca em log:** redactor automático antes de escrever em disco.

---

*Workflow imutável sem decisão registrada em `_memoria/decisoes-estrategicas.md`.*
