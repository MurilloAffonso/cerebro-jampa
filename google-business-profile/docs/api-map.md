# Mapa das APIs do Google Business Profile

**Fonte:** `developers.google.com/my-business/ref_overview` e `developers.google.com/my-business/content/overview`.
**Atualizado:** 2026-05-12

---

## Pré-condições oficiais

Para usar qualquer das APIs abaixo, conforme documentação oficial:

1. Conta Google válida
2. Motivo legítimo de uso
3. Google Cloud Project ativo
4. URL de site válida (✅ `vempassearjampa.com.br` atende)

> "As APIs Google Business Profile não estão disponíveis para todos os usuários." — Acesso é solicitado e aprovado pelo Google. Tempo típico: 5 a 30 dias.

**Escopo OAuth único para todas:** `https://www.googleapis.com/auth/business.manage`

---

## Tabela mestre

| API | Versão | Endpoint base | Finalidade resumida | Aplicável | Risco | Prioridade | Na Opção B? |
|---|---|---|---|---|---|---|---|
| Account Management | v1.1 | `/accountmanagement/rest/v1.1` | Contas, administradores, vínculos | ✅ | Baixo | P1 | ✅ Sim |
| Business Information | v1 | `/businessinformation/rest/v1` | Dados do local (nome, endereço, telefone, site, horário, categorias, atributos, serviços) | ✅ | Médio (mutação) | P1 | Parcial (somente leitura) |
| Business Calls | v1 | `/businesscalls/rest/v1` | Configuração e insights de chamadas | ⚠️ Marginal | Baixo | P3 | ❌ Não |
| Place Actions | v1 | `/placeactions/rest/v1` | Links de ação (reservar, agendar) | ✅ | Médio | P2 | ❌ Não |
| Q&A | v1 | `/qanda/rest/v1` | Perguntas e respostas do perfil | ✅ | Médio | P1 | Leitura + alertas |
| Verifications | v1 | `/verifications/rest/v1` | Verificação do local (Voice of Merchant) | ⚠️ | Alto | P3 | ❌ Não |
| Notifications | v1.2 | `/notifications/rest/v1.2` | Webhooks de eventos | ✅ | Baixo | P1 | ✅ Sim (alertas) |
| Business Profile Performance | v1 | `/performance/rest/v1` | Métricas, palavras-chave, visualizações | ✅ | Zero | P1 | ✅ Sim |
| Lodging | v1.2 | `/lodging/rest/v1.2` | Comodidades de hotelaria | ❌ | — | — | ❌ Não se aplica |
| Google My Business (legacy) | v4.9 | `/rest/v4.9` | Mídia, posts (Atualizações), reviews e respostas | ✅ | Médio | P1 | Leitura + alertas |
| Media (parte da v4.9) | v4.9 | `/rest/v4.9/...media` | Upload e listagem de fotos/vídeos | ✅ | Médio | P2 | ❌ Não (Opção B só lê) |

---

## Detalhamento por API

### 1. Account Management API v1.1

**Endpoints relevantes:** `accounts.list`, `accounts.locations.list`, `accounts.admins.list`, `accounts.invitations.list`.

**Para que serve aqui:** descobrir o `accountId` e o `locationId` do perfil Vem Passear Jampa (necessários em todas as outras APIs). Auditar quem tem acesso ao perfil (administradores e gerentes).

**Risco:** baixo. Mutações (convidar/remover admin) não estão no plano.

**Opção B:** sim — primeiro script da Fase 2 usa essa API para identificar o perfil.

---

### 2. Business Information API v1

**Endpoints relevantes:**
- `accounts.locations.get` — ler o local
- `accounts.locations.patch` — editar campos (descrição, telefone, site, horário, atributos)
- `accounts.locations.list` — listar locais
- `categories.batchGet`, `categories.list` — explorar categorias disponíveis
- `accounts.locations.attributes.list` — listar atributos aplicáveis

**Para que serve aqui:** editar descrição, atributos, categorias secundárias, serviços e horário. Em produção, só com aprovação humana via fluxo da seção 6.

**Risco:** médio. Erro de patch pode sobrescrever campos. Mitigação: snapshot antes de toda mutação.

**Opção B:** parcial. Usa para **leitura** (snapshot). Mutação só na Opção A.

---

### 3. Business Calls API v1

**Endpoints relevantes:** `locations.businessCallsSettings.get`, `locations.businessCallsInsights.list`.

**Para que serve aqui:** medir chamadas que entram pelo botão do GBP.

**Risco:** baixo.

**Opção B:** não. Vem Passear converte por WhatsApp, não por ligação. Marginal.

---

### 4. Place Actions API v1

**Endpoints relevantes:** `locations.placeActionLinks.create`, `.patch`, `.list`, `.delete`. `placeActionTypes.list`.

**Para que serve aqui:** criar ou atualizar o botão "Reservar" que aparece no perfil, apontando para um link de reserva próprio (WhatsApp, formulário, site).

**Risco:** médio. Botão visível no perfil — erro impacta CTA principal.

**Opção B:** não. Entra na Opção A (Fase 5).

---

### 5. Q&A API v1

**Endpoints relevantes:**
- `locations.questions.list` — listar perguntas
- `locations.questions.create` — criar pergunta no local
- `locations.questions.delete`
- `locations.questions.answers.upsert` — criar/atualizar resposta
- `locations.questions.answers.list`
- `locations.questions.answers.delete`

**Para que serve aqui:** automatizar a leitura de perguntas novas e o rascunho de respostas. **Quanto ao endpoint `locations.questions.create`:** existe oficialmente, mas o uso pela conta proprietária para criar "perguntas do proprietário" (autoperguntas para indexação de Q&A) **precisa ser validado em teste real**. A documentação oficial não detalha se a criação por owner é tratada diferente de criação por usuário comum, nem se há marcação automática como "do proprietário". Antes de incluir essa funcionalidade no workflow, testar em ambiente controlado e revisar a [Política do GBP sobre Q&A](https://support.google.com/business/answer/7039778).

**Risco:** médio. Mutação de Q&A é pública.

**Opção B:** sim para leitura e alertas. Criação/resposta fica para Opção A.

---

### 6. Verifications API v1

**Endpoints relevantes:** `locations.verifications.list`, `.complete`, `.fetchVerificationOptions`, `voiceOfMerchantState`.

**Para que serve aqui:** consultar estado de verificação. Mutação só se necessário reverificar o local (raro).

**Risco:** alto. Reverificação mal feita pode tirar perfil do ar.

**Opção B:** não.

---

### 7. Notifications API v1.2

**Endpoints relevantes:** `accounts.getNotificationSetting`, `accounts.updateNotificationSetting`.

**Para que serve aqui:** configurar webhook Pub/Sub para receber notificação de evento (review nova, pergunta nova, status do local mudou).

**Risco:** baixo. Configuração one-time. Mitigação: webhook só lê, não age.

**Opção B:** sim. Sem isso, "alertas em tempo real" viram polling caro.

---

### 8. Business Profile Performance API v1

**Endpoints relevantes:**
- `locations.fetchMultiDailyMetricsTimeSeries` — métricas diárias
- `locations.searchkeywords.impressions.monthly.list` — palavras-chave de busca por mês

**Para que serve aqui:** o coração da Opção B. Gera relatório semanal automático com:
- Visualizações (busca x mapa, mobile x desktop)
- Pesquisas pelo nome x descoberta
- Interações (cliques no site, em rota, em telefone)
- Top 20 palavras-chave do mês

**Risco:** zero (read-only).

**Opção B:** sim — central.

---

### 9. Lodging API v1.2

Não se aplica. Vem Passear é agência de turismo, não hotel/pousada.

---

### 10. Google My Business v4.9 (legacy)

**Endpoints relevantes:**
- `accounts.locations.reviews.list` — listar reviews
- `accounts.locations.reviews.updateReply` — responder review
- `accounts.locations.reviews.deleteReply` — apagar resposta
- `accounts.locations.localPosts.create` / `.patch` / `.list` / `.delete` — posts/atualizações
- `accounts.locations.media.create` / `.list` / `.delete` — fotos e vídeos
- `accounts.locations.questions.create` / `.list` — Q&A (também disponível aqui, ver nota na seção 5)

**Para que serve aqui:** **única forma oficial** de gerenciar reviews, fotos e posts via API. A documentação chama essa API de legacy porque o Google está migrando seus recursos para APIs modernas (Business Information, Q&A, etc.), mas reviews/media/posts ainda **não têm equivalente moderno**.

**Risco:** médio. API pode ser descontinuada em ondas — projeto precisa monitorar release notes em `developers.google.com/my-business/release-notes`.

**Opção B:** sim apenas para leitura de reviews (gerar alerta + métrica). Resposta a reviews fica na Opção A.

---

## Atenção: separação Media

Algumas referências chamam separadamente de "Media API" — na prática, no estado atual, mídia é gerenciada via endpoints `accounts.locations.media.*` dentro da v4.9 legacy. Não há produto "Media API" autônomo na referência v1 moderna. Para fins deste mapa, tratamos como parte da v4.9.

---

## Resumo por aplicabilidade

**Crítico para Vem Passear (P1):**
- Account Management v1.1
- Business Information v1
- Q&A v1
- Notifications v1.2
- Business Profile Performance v1
- GMB v4.9 (reviews + posts + media)

**Importante (P2):**
- Place Actions v1

**Marginal/futuro (P3):**
- Business Calls v1
- Verifications v1

**Não se aplica:**
- Lodging v1.2

---

*Documento atualizado a cada mudança na documentação oficial do Google ou descoberta em teste real.*
