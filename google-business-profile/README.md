# Google Business Profile — Módulo de Gestão Assistida

**Status:** Fase 1 — documentação apenas. Sem API ativa. Sem código. Sem credenciais.
**Versão:** 0.1 (proposta)
**Atualizado:** 2026-05-12
**Decisão atual:** seguir pela Opção B (versão enxuta) — apenas leitura + relatórios + alertas.

---

## Objetivo

Operar o Google Business Profile (GBP) da Vem Passear Jampa com apoio das APIs oficiais do Google, mantendo decisões estratégicas com Murillo e reduzindo o tempo gasto em manutenção operacional manual.

**Perfil gerenciado:**
- Nome: VempassearJampa passeios e turismo João Pessoa
- Endereço: Av. Alm. Tamandaré — Tambaú, João Pessoa — PB, 58042-050
- Telefone: (83) 99908-7830
- Site: vempassearjampa.com.br
- Categoria primária: Agência de turismo
- Nota atual: 4,9 / 63 avaliações
- Força do perfil: 80%

---

## Escopo

**Dentro do escopo:**
- Leitura do estado do perfil via APIs oficiais
- Coleta automática de métricas (Performance API)
- Alertas de avaliações e perguntas novas
- Rascunhos gerados por IA para resposta a reviews, Q&A e posts
- Execução de mutações **somente após aprovação humana explícita**

**Fora do escopo:**
- Operações em perfis de terceiros (concorrentes)
- Manipulação de avaliações (criar, comprar, remover indevidamente)
- Automação sem revisão humana de campos sensíveis
- Integração com CRM, ERP ou agendamento (frentes futuras, projeto separado)

---

## Regra central

> **IA propõe → Murillo revisa → Murillo aprova → script executa → log → relatório.**

Nenhuma mutação no GBP acontece sem aprovação humana por item. Leitura é livre; escrita é gated. Detalhes em [`docs/workflow-aprovacao.md`](docs/workflow-aprovacao.md).

---

## O que pode ser automatizado

| Categoria | Automatizar? | Aprovação humana? |
|---|---|---|
| Leitura de métricas | ✅ Total | Não |
| Leitura de avaliações/perguntas | ✅ Total | Não |
| Snapshot do estado do perfil | ✅ Total | Não |
| Auditoria de consistência NAP | ✅ Total (só alerta) | Não |
| Rascunho de resposta a review | ✅ Total (rascunho fica em fila) | Sim, antes de publicar |
| Rascunho de Q&A | ✅ Total | Sim, antes de publicar |
| Rascunho de post semanal | ✅ Total | Sim, antes de publicar |
| Sugestão de foto a subir | ✅ Total | Sim, antes de subir |

## O que **não** automatizar

- Nome do perfil
- Categoria primária
- Endereço
- Telefone
- Site
- Horário
- Descrição
- Serviços (criar/editar/remover)
- Fotos (upload, exclusão)
- Respostas a avaliações (publicação)
- Perguntas e respostas (publicação)
- Links de ação

Lista detalhada em [`docs/permissions-and-risks.md`](docs/permissions-and-risks.md).

---

## Estrutura do módulo (projetada)

```
google-business-profile/
├── README.md                    # este arquivo
├── config.example.env           # variáveis fictícias — modelo
├── .gitignore                   # bloqueio de segredos
└── docs/
    ├── api-map.md               # mapa das 10 APIs oficiais
    ├── permissions-and-risks.md # o que automatizar, o que não
    ├── workflow-aprovacao.md    # fluxo IA→aprovação→execução
    ├── oauth-setup.md           # passo a passo Cloud Project
    └── roadmap.md               # opções A e B + decisão atual
```

Pastas que **serão** criadas em fases futuras (não agora):
- `scripts/` — código TypeScript de auth, leitura, proposta, execução
- `data/snapshots/` — JSON do estado do perfil ao longo do tempo
- `data/fila/{pendentes,aprovados,rejeitados}/` — drafts e aprovações
- `reports/` — relatórios .md gerados automaticamente
- `logs/{api-calls,erros,execucoes}/` — auditoria de toda chamada

---

## Status atual

- ✅ Fase 1 (documentação) — em andamento
- ⏸ Fase 2 (leitura via API) — aguardando aprovação Google v4.9 + criação do Cloud Project
- ⏸ Fases 3-6 — bloqueadas pela Fase 2

Roadmap completo em [`docs/roadmap.md`](docs/roadmap.md).

---

## Próximos passos

1. Murillo lê e valida os 5 documentos em `docs/`
2. Registrar decisão em `_memoria/decisoes-estrategicas.md`
3. Criar Google Cloud Project `vem-passear-jampa-gbp`
4. Solicitar acesso à GMB v4.9 (formulário Google — aprovação 5-30 dias)
5. Em paralelo, monitorar caixa do Cloud Console para liberação
6. Quando aprovado, iniciar Fase 2 (Opção B)

---

## Política de segurança

- `.env`, `credentials.json`, `token.json`, `refresh_token.json` **nunca** vão para o git
- Arquivos sensíveis listados em [`.gitignore`](.gitignore)
- 2FA obrigatório na conta Google de Murillo antes de criar credencial OAuth
- Revisão semanal de "Apps com acesso à conta" em `myaccount.google.com/permissions`
- Nenhum token sai da máquina local — sem GitHub Actions, sem cópia para chat, sem upload acidental

---

*Documento vivo. Atualizar sempre que houver mudança de fase, escopo ou decisão estratégica.*
