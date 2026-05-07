# Backlog Principal — Vem Passear em Jampa

**Criado em:** 2026-05-05
**Fonte:** `_site/docs/proximos-passos-site.md`, `_memoria/proximos-passos.md`, dossiê SEO/concorrência, auditoria de estado do projeto.
**Política:** nenhum item entra em execução sem aprovação de Murillo.

---

## Conversão

| ID | Tarefa | Status | Prioridade | Bloqueio |
|----|--------|--------|-----------|---------|
| A3 | Integrar `TrustBlock` em todas as páginas de passeio | 🔲 EM ABERTO | Alta | Nenhum (componente pronto) |
| A5 | Resolver `preco: null` em `/servicos/transfer-24h` | 🔲 EM ABERTO | **P1 — Crítico** | Murillo confirmar preço por trajeto e incluso |
| A6 | Filtros em `/passeios/` (categoria, maré, faixa de preço) | 🔲 EM ABERTO | Média | Nenhum |
| A4 | Revisar FAQ por passeio com as 12 objeções mapeadas | 🔲 EM ABERTO | Média | Revisão de Murillo |
| — | CTASticky: verificar se está ativo nas páginas de passeio | 🔲 EM ABERTO | Baixa | Nenhum |

---

## SEO

| ID | Tarefa | Status | Prioridade | Bloqueio |
|----|--------|--------|-----------|---------|
| A7 | Intro editorial por categoria (`/passeios/[categoria]/`) | 🔲 EM ABERTO | Alta | Nenhum |
| C1 | OG images por passeio (`og-{slug}.webp` 1200×630) | 🔲 EM ABERTO | Alta | Nenhum |
| C2 | Validar schemas com Rich Results Test pós-deploy | 🔲 EM ABERTO | Alta | Requer deploy |
| C3 | Submeter sitemap no Google Search Console | 🔲 EM ABERTO | Alta | Requer deploy + acesso GSC |
| C4 | Otimizar Google Business Profile (descrição + 5 fotos + Q&A) | 🔲 EM ABERTO | Alta | Acesso GMB de Murillo |
| — | Páginas de calendário junho/julho 2026 (maré) | 🔲 EM ABERTO | Média | Dados de maré de junho/julho |

---

## CRM

| ID | Tarefa | Status | Prioridade | Bloqueio |
|----|--------|--------|-----------|---------|
| CRM-1 | Auditoria técnica `_crm/leads.csv` | ✅ CONCLUÍDO | Alta | — |
| CRM-2 | Registrar alerta P2 como falso positivo (ausência de correção técnica) | ✅ CONCLUÍDO | Alta | — |
| CRM-3 | Verificar estorno pendente — Jair e Ana (linha 17) | 🔲 EM ABERTO | Alta | Ação manual de Murillo |
| CRM-4 | Retomar lead Picaozinho "Não identificado" (linha 15, contato 30/04) | 🔲 EM ABERTO | Alta | Ação manual de Murillo |
| CRM-5 | Registro manual de todos os leads (Murillo cola conversa → Claude gera ficha) | 🔲 EM ABERTO | Alta | Dedicação de 1 sessão com Murillo |
| CRM-6 | Ativar ciclo diário de status via n8n (Sem 2) | 🔲 EM ABERTO | Média | n8n configurado e testado |

---

## Conteúdo

| ID | Tarefa | Status | Prioridade | Bloqueio |
|----|--------|--------|-----------|---------|
| B1 | Publicar post 1: `o-que-fazer-em-joao-pessoa` | 🔲 EM ABERTO | Alta | Texto final + 1 foto real |
| B2 | Publicar post 2: `tabua-de-mares-piscinas-naturais` | 🔲 EM ABERTO | Alta | Texto final |
| B3 | Publicar post 3: `piscinas-naturais-joao-pessoa-guia` | 🔲 EM ABERTO | Média | Texto + foto Seixas |
| B4–B10 | Demais posts do blog (7 restantes) | 🔲 EM ABERTO | Média | Texto + revisão de Murillo cada um |
| — | Implementar páginas individuais Top 3 passeios (Areia Vermelha, Litoral Sul Clássico) | 🔲 EM ABERTO | Alta | Murillo confirma dados completos |
| — | Implementar os 21 passeios restantes (batch, 3–4/semana) | 🔲 EM ABERTO | Média | Dados completos no vault |

---

## Técnico

| ID | Tarefa | Status | Prioridade | Bloqueio |
|----|--------|--------|-----------|---------|
| — | Importar e testar `jarvis-runner.workflow.json` no n8n | 🔲 EM ABERTO | Alta | n8n local rodando |
| — | Importar `jarvis-status-telegram.workflow.json` (estrutura) | 🔲 EM ABERTO | Alta | n8n + teste manual |
| P3 | Verificar P3: workflows n8n que referenciam ids órfãos do Jarvis | 🔲 EM ABERTO | Média | Antes de rodar Jarvis em produção |
| P1 | Skill `executar-issue` fora do diretório padrão — decidir: mover ou documentar exceção | 🔲 EM ABERTO | Baixa | Decisão de Murillo |
| — | Validar dados de maré maio/2026 (`revisadoPorMurillo: false`) | 🔲 EM ABERTO | Alta | Murillo confere tabela |
| — | PDF real CHM/Marinha para dados oficiais de maré | 🔲 EM ABERTO | Média | Download manual por Murillo |

---

## Documentação

| ID | Tarefa | Status | Prioridade | Bloqueio |
|----|--------|--------|-----------|---------|
| — | `planejamento/sprint-atual.md` | ✅ CONCLUÍDO | Alta | — |
| — | `planejamento/backlog-principal.md` | ✅ CONCLUÍDO | Alta | — |
| — | `docs/handoff-tecnico.md` | ✅ CONCLUÍDO | Alta | — |
| — | `_conhecimento/retrospectiva.md` | ✅ CONCLUÍDO | Alta | — |
| — | Preencher `_conhecimento/fornecedores.md` (sessão 1h com Murillo) | 🔲 EM ABERTO | Alta | Sessão com Murillo |
| — | Preencher `_conhecimento/motivos-de-perda.md` | 🔲 EM ABERTO | Alta | Dados históricos com Murillo |
| — | Revisão dos 30 dias de leads para identificar padrão de perda | 🔲 EM ABERTO | Alta | CRM com 30+ leads registrados |

---

## Design / Assets

| ID | Tarefa | Status | Prioridade | Bloqueio |
|----|--------|--------|-----------|---------|
| S7 | Criar placeholder/poster do hero (`/videos/home/hero-poster.jpg`) | 🔲 EM ABERTO | **Urgente** | Murillo fornece ou aprova imagem |
| — | Vídeo hero real (`hero-jampa.webm`, `hero-jampa.mp4`) | 🔲 EM ABERTO | Alta | Produção de vídeo com Murillo |
| A1 | Fotos reais de 3 passeios prioritários (Seixas, Areia Vermelha, Litoral Sul Clássico) | 🔲 EM ABERTO | Alta | Sessão fotográfica |
| A2 | Foto profissional de Murillo | 🔲 EM ABERTO | Alta | Sessão fotográfica |
| — | Depoimentos reais (texto + nome + cidade + data, mín. 2) | 🔲 EM ABERTO | Alta | Murillo coleta e aprova |
| — | Design Fase D: redesign visual (retomar Claude Design quando Murillo decidir) | 🔲 PAUSADO | Baixa | Decisão de Murillo |

---

## Itens Descartados (não fazer nos próximos 90 dias)

- ❌ Envio automático de WhatsApp sem Murillo — IA rascunha, Murillo envia
- ❌ Mídia paga antes de 250+ avaliações Google
- ❌ 7-touch follow-up (usar 4 toques em 5 dias via `follow-up-comercial`)
- ❌ Tracking CAPI — GA4 + Pixel básico bastam
- ❌ i18n EN antes de catálogo em PT completo
- ❌ TripAdvisor sem análise de custo-benefício (decidir no mês 3)
- ❌ Lovable sem nova decisão de Murillo
