# Permissões e Riscos por Área do Perfil

**Princípio:** se a ação **adiciona sinal** (foto, post, resposta), pode ser assistida com aprovação por item. Se a ação **muda identidade** ou **diminui sinal** (nome, categoria, endereço, exclusão), decisão é sempre manual.

---

## Tier 1 — Pode automatizar 100% (leitura)

Sem aprovação humana necessária. Sem mutação no perfil.

| Ação | API | Frequência sugerida | Risco |
|---|---|---|---|
| Snapshot do estado completo do perfil | Business Information v1 | Diário 7h | Zero |
| Listar avaliações novas desde último check | GMB v4.9 (reviews.list) | A cada 4h | Zero |
| Listar perguntas novas | Q&A v1 (questions.list) | A cada 4h | Zero |
| Coletar métricas diárias | Performance v1 | Diário 8h | Zero |
| Coletar palavras-chave do mês | Performance v1 | Mensal dia 1 | Zero |
| Auditar consistência NAP vs `_conhecimento/empresa.md` | Business Information v1 (leitura) | Semanal | Zero |
| Listar administradores do perfil | Account Management v1.1 | Mensal | Zero |
| Receber webhook de evento (Pub/Sub) | Notifications v1.2 | Realtime | Zero |

---

## Tier 2 — Pode automatizar **com aprovação humana por item**

IA gera rascunho → fica em `data/fila/pendentes/` → Murillo revisa via CLI → após aprovar, script executa.

| Ação | API | Risco | Quem aprova |
|---|---|---|---|
| Publicar resposta a avaliação | GMB v4.9 (reviews.updateReply) | Médio | Murillo, por item |
| Publicar resposta a pergunta (Q&A) | Q&A v1 (answers.upsert) | Médio | Murillo, por item |
| Criar pergunta como proprietário (Q&A) | Q&A v1 (questions.create) ou v4.9 equivalente | **Validar em teste real antes** — ver `api-map.md` seção 5 | Murillo, por item, **somente após teste de validação** |
| Publicar post/atualização | GMB v4.9 (localPosts.create) | Baixo | Murillo, por item |
| Upload de foto | GMB v4.9 (media.create) | Baixo | Murillo, por item |
| Atualizar serviço cadastrado | Business Information v1 (locations.patch) | Médio | Murillo, por item |
| Adicionar categoria secundária | Business Information v1 | Baixo | Murillo, por item |
| Marcar atributo | Business Information v1 | Baixo | Murillo, por item |
| Atualizar link de ação "Reservar" | Place Actions v1 | Médio | Murillo, por item |

**Regra de fluxo:** mesmo nas ações Tier 2, o script de execução roda no modo `--dry-run` por padrão durante as duas primeiras semanas em produção. Modo real só após `--apply` explícito.

---

## Tier 3 — Não automatizar (ações raras, decisão manual no painel)

| Ação | Por quê | Como fazer |
|---|---|---|
| Apagar foto | Irreversível, impacta histórico | Manual no painel GBP |
| Apagar post | Irreversível | Manual |
| Apagar resposta a review | Pode ser interpretado como cover-up | Manual, decisão pontual |
| Apagar serviço inteiro | Perde sinal de ranqueamento já consolidado | Manual, com análise |
| Apagar Q&A | Pode violar política — Google pode penalizar | Manual, só em caso extremo |

---

## Tier 4 — Nunca mexer sem aprovação explícita e registrada

Estes campos só devem ser alterados após:
1. Murillo explicitar a intenção em conversa
2. Decisão registrada em `_memoria/decisoes-estrategicas.md`
3. Snapshot pré-mudança salvo em `data/snapshots/`
4. Plano de rollback documentado

| Campo | Risco se errado |
|---|---|
| Nome do perfil | Perde keywords / pode disparar revisão do Google / pode suspender |
| Categoria primária | Reset parcial de sinais de ranqueamento |
| Endereço | Dispara reverificação (perfil pode sair do ar até 5-14 dias) |
| Telefone principal | Perda de histórico de chamadas e sinais |
| Site | Reset de validação cruzada NAP |
| Horário | Impacto direto em cliente real (liga fora do horário) |

**Default:** **não mexer**. O perfil atual está validado e performando. Mudança nesses campos só com motivo de força maior.

---

## Riscos transversais

### R1 — Vazamento de credenciais
- **Mitigação:** `.gitignore` rigoroso desde commit 0, 2FA obrigatório, refresh token só em `.env` local, revisão semanal em `myaccount.google.com/permissions`.
- **Em caso de vazamento:** revogar imediatamente em Cloud Console → Credenciais.

### R2 — Bug em escrita destrutiva
- **Mitigação:** snapshot pré-mutação obrigatório, modo `--dry-run` padrão por 14 dias, log estruturado de toda chamada.
- **Rollback:** restaurar snapshot via `Business Information v1.patch` com payload do snapshot anterior.

### R3 — API legacy v4.9 descontinuada
- **Mitigação:** monitorar `developers.google.com/my-business/release-notes` mensalmente, abstrair chamadas em camada de serviço para trocar versão num arquivo só.
- **Sinal de alerta:** Google sempre anuncia depreciação com 12+ meses de antecedência.

### R4 — Suspensão por uso indevido
- **Mitigação:** frequência de mutação humana (1 post/semana, não 5/dia), delay aleatório entre chamadas, nunca para escalar manipulação de avaliações.
- **Sinal de alerta:** queda súbita em visualizações sem mudança óbvia → checar mensagens no Cloud Console e no painel GBP.

### R5 — Q&A automatizada vista como manipulação
- **Mitigação:** validar em teste antes de produção. Manter Q&A do proprietário em volume baixo (3-5/mês máximo). Misturar com respostas a perguntas reais de usuários.
- **Sinal de alerta:** perguntas/respostas removidas pelo Google após publicação.

---

## Matriz síntese

| Área | Tier | API | Frequência |
|---|---|---|---|
| Métricas | 1 | Performance v1 | Diário |
| Reviews — leitura | 1 | GMB v4.9 | 4h |
| Reviews — resposta | 2 | GMB v4.9 | Por item |
| Q&A — leitura | 1 | Q&A v1 | 4h |
| Q&A — resposta a usuário | 2 | Q&A v1 | Por item |
| Q&A — pergunta do proprietário | 2 (após validação) | Q&A v1 ou v4.9 | Por item |
| Posts/Atualizações | 2 | GMB v4.9 | Semanal |
| Fotos | 2 | GMB v4.9 (media) | 1-2/dia |
| Serviços | 2 | Business Information v1 | Mensal |
| Descrição | 2 | Business Information v1 | Trimestral |
| Categoria secundária | 2 | Business Information v1 | Eventual |
| Atributos | 2 | Business Information v1 | Eventual |
| Link de ação | 2 | Place Actions v1 | Eventual |
| Nome / categoria primária / endereço / telefone / site / horário | 4 | — | Manual |
| Apagar qualquer coisa | 3 | — | Manual |

---

*Lista revisada antes de cada nova fase do roadmap.*
