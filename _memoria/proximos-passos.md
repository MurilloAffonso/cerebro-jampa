# Memória: Próximos Passos (Roadmap Executável)

**Consolidado em:** 2026-04-29 (Arquitetura 2.0 — Squad Comercial)
**Escopo:** Roadmap 30/60/90 dias baseado na Análise Estratégica 2.0

---

## PRIORIDADE IMEDIATA — Squad Comercial (Semana 1: até 2026-05-06)

| Etapa | Ação | Resultado esperado | Prioridade |
|-------|------|--------------------|-----------|
| ETAPA 1 | Atualizar CLAUDE.md — expandir escopo para camada comercial assistida | CEREBRO desbloqueado para Squad Comercial | Crítica |
| ETAPA 2 | Criar `_crm/` + `leads.csv` (15 campos) + `_crm/README.md` | CRM mínimo existindo | Crítica |
| ETAPA 3 | Criar `_conhecimento/objecoes.md` (mín. 15 objeções) | Base para skill objecoes-turismo-jampa | Crítica |
| ETAPA 4 | Criar `_conhecimento/fornecedores.md` | Risco operacional documentado | Alta |
| ETAPA 5 | Criar `_conhecimento/motivos-de-perda.md` | Registro vivo de perdas | Alta |
| ETAPA 6 | Criar 4 skills comerciais (SKILL.md de cada) | Squad Comercial operacional | Crítica |
| ETAPA 7 | Criar `agente-comercial-jampa` | Ponto de entrada comercial | Crítica |
| ETAPA 8 | Criar `agente-atendimento-pre-passeio` | Confirmação D-1 | Alta |
| ETAPA 9 | Criar `agente-pos-venda` | Avaliações Google | Alta |
| ETAPA 10 | Criar `painel-kpi-vempassear` | 5 KPIs semanais | Alta |
| ETAPA 11 | Atualizar `skills/README.md` com Squad Comercial e Pipelines I-M | Inventário atualizado | Alta |
| ETAPA 12 | Atualizar orquestrador com gatilhos comerciais | Roteamento comercial ativo | Crítica |
| ETAPA 13 | Registrar Decisão #40 (Squad Comercial) | Histórico documentado | Alta |
| ETAPA 14 | Atualizar `estado-atual.md` e `proximos-passos.md` | Memória atualizada | Alta |

---

## PRÓXIMOS 30 DIAS (até 2026-05-29)

| Semana | Ação | Resultado esperado | Prioridade |
|--------|------|--------------------|-----------|
| Sem 2 | Ativar Ciclo 1 (status diário 08:00 via n8n) | Relatório diário no Telegram | Alta |
| Sem 2-3 | Registro manual de **todos** os leads (Murillo cola conversa → Claude gera ficha) | 30+ leads em `_crm/leads.csv` | Crítica |
| Sem 3 | Implementar páginas Top 3 passeios (Areia Vermelha, Litoral Sul Clássico) | 3 passeios completos no site (Seixas já completo) | Alta |
| Sem 3 | Preencher `_conhecimento/fornecedores.md` em sessão de 1h com Murillo | Parceiros documentados | Alta |
| Sem 4 | Ativar Ciclo 5 (relatório semanal sexta 17:00) | Painel de 5 KPIs toda sexta | Alta |
| Sem 4 | Otimização GMB completa (descrição + 5 fotos + 5 Q&A + push de avaliação) | +20% visibilidade GMB esperado | Alta |

---

## PRÓXIMOS 60 DIAS (até 2026-06-29)

| Mês | Ação | Resultado esperado | Prioridade |
|-----|------|--------------------|-----------|
| Mês 2 | Ativar mensagem D-1 manual via `agente-atendimento-pre-passeio` | Reduzir no-shows e dúvidas | Alta |
| Mês 2 | Ativar D+1 e D+3 via `agente-pos-venda` (manual) | +avaliações Google | Alta |
| Mês 2 | Implementar próximos 5 passeios (total 8 de 29) | Catálogo SEO ganhando massa | Alta |
| Mês 2 | 1 reel/semana + 1 carrossel/quinzena (skill `social-media-editorial-turismo`) | Calendário editorial vivo | Média |
| Mês 2 | 3 blog posts publicados (Maré, Época, O Que Levar) | Massa SEO inicial | Média |
| Mês 2 | Revisar 30 dias de leads — identificar padrão #1 de perda. Atualizar `objecoes.md` | Melhoria contínua real | Crítica |

---

## PRÓXIMOS 90 DIAS (até 2026-07-29)

| Mês | Ação | Resultado esperado | Prioridade |
|-----|------|--------------------|-----------|
| Mês 3 | Sprint de passeios — implementar os 21 restantes (3-4/semana) | 100% catálogo SEO | Alta |
| Mês 3 | Ativar painel-kpi semanal completo com histórico de 60 dias | Dado consolidado para decisão | Alta |
| Mês 3 | Decidir: TripAdvisor sim/não (análise de comissão e tempo de cadastro) | Decisão estratégica registrada | Média |
| Mês 3 | Avaliar Evolution API com base em 90 dias de dado real | Decisão informada, não impulsiva | Média |
| Mês 3 | i18n EN para 3 passeios mais procurados (teste — não os 29) | Teste internacional mínimo | Baixa |
| Mês 3 | Importador automático CHM real (skill `tabua-mares-turismo` v2.0) | Marés saindo do surfguru | Média |
| Mês 3 | Reunião retrospectiva 90 dias: o que rolou, o que mudaria, próxima fase | Recalibragem | Crítica |

---

## O QUE NÃO FAZER (Descartado da Análise 2.0)

- ❌ "58 agentes" inspirado no material de referência — inviável e desnecessário
- ❌ 7-touch follow-up de 19h — vira spam; usar 4 toques em 5 dias
- ❌ Kill rule R$140 CPA, auditoria de campanhas — não há mídia paga
- ❌ Tracking CAPI 96% precisão — overengineering; GA4 + Pixel básico bastam
- ❌ Envio automático de WhatsApp nos primeiros 90 dias — IA rascunha, Murillo envia
- ❌ Mídia paga antes de 250+ avaliações Google consolidadas

---

---

## PONTO DE RETOMADA — DIREÇÃO VISUAL (2026-04-27)

### Decisão Tomada
- Claude Design = ferramenta visual principal
- Lovable = congelada (preservada)
- Base Murillo (`referencia-prompt-visual-murillo.md`) = régua de qualidade ativa

### Antes de Qualquer Trabalho Visual
1. Ler `_conhecimento/branding/referencia-prompt-visual-murillo.md`
2. Ler `_automacao/workflows/cloud-design-builder.md`
3. Acionar orquestrador para pipelines com 2+ skills

### Próximo Passo Visual Recomendado
- **Homepage:** pipeline completo (orquestrador → copywriter + ux-ui + seo → diretor-visual → briefing-designer → prompt Claude Design)
- **Antes da homepage:** confirmar foto de Murillo para hero e 3 depoimentos reais para o bloco de avaliações
- **Pendente de Murillo:** esboço de logo ou referências visuais preferidas (ver `referencia-prompt-visual-murillo.md §5.4`)

### O Que NÃO Fazer Agora
- ❌ Não acionar Lovable sem nova decisão de Murillo
- ❌ Não alterar `_site/` visualmente sem resultado Claude Design aprovado
- ❌ Não gerar logo sem tarefa explícita aprovada

---

## PONTO DE RETOMADA — FEATURE TÁBUA DE MARÉS

**Atualizado em:** 2026-04-26
**Branch:** `main` — limpa, sincronizada com `origin/main`
**Último commit:** `7c2d29d` — `feat(tabua-mares): implementa calendário de marés completo — dados, componentes e página`

### Estado atual — FASE 4 CONCLUÍDA

- ✅ Skill `tabua-mares-turismo` criada e atualizada (v1.3)
- ✅ `_site/types/tabua-mares.ts` — schema completo (`SaidaDia`, `JanelaSaida`, `ProximaSaidaCard`, etc.)
- ✅ `_site/lib/tabua-mares.ts` — funções de cálculo, consulta e formatação
- ✅ `_site/data/tabua-mares.ts` — 31 dias maio/2026 via surfguru (`revisadoPorMurillo: false`)
- ✅ `_site/data/passeios.ts` — campo `dependeDeMare: true` em seixas, picaozinho, areia-vermelha
- ✅ `_site/components/ProximaSaidaCard.tsx` — exibe próxima saída ou fallback WhatsApp
- ✅ `_site/components/PasseioCard.tsx` — linha "Próxima saída" para passeios de maré
- ✅ `_site/app/passeios/[categoria]/[slug]/page.tsx` — integra MareAlert + ProximaSaidaCard (C4)
- ✅ `_site/app/passeios/piscinas-naturais/calendario/page.tsx` — calendário mensal com ciclos, legenda, FAQ, CTA
- ✅ Build: 14/14 páginas estáticas, TypeScript limpo

### O que está aguardando Murillo

1. **Validação dos dados de maio/2026:** Conferir a tabela em `03-inspecao-layout-pdf-cabedelo.md §3.2`
   contra a operação real. Para cada dia aprovado, setar `revisadoPorMurillo: true`
   em `_site/data/tabua-mares.ts`.
   - Enquanto `revisadoPorMurillo: false`, o card mostra "Consulte próximas saídas" (comportamento correto)
   - Assim que um registro for marcado `true`, o ProximaSaidaCard exibirá o dado real

2. **PDF real da CHM/Marinha:** Download manual em `marinha.mil.br/cppb/tabuas_de_mare`
   → substituir o arquivo falso em `_site/planejamento/tabua-mares/2026-PORTO-DE-CABEDELO.pdf`
   → Claude implementa `parseTabuaMaresOficial()` para substituir dados surfguru por dados oficiais

3. **Conteúdo da página Seixas:** `alertaMare` e outros campos opcionais ainda estão em branco
   — preencher no passeio de Seixas em `data/passeios.ts` para o MareAlert mostrar texto customizado

### Próximas fases do roadmap de automação

Ver `skills/tabua-mares-turismo/references/automacao-futura.md`:
- **Fase 5:** `/calendario/junho-2026`, `/calendario/julho-2026` — páginas mensais para SEO
- **Fase 6:** FAQ schema dinâmico, texto indexável, schema `Event` por saída confirmada

### O que NÃO fazer ainda

- ❌ Não publicar `data/tabua-mares.ts` com `revisadoPorMurillo: false` como "dados oficiais"
- ❌ Não criar parser surfguru automatizado sem revisão do fluxo por Murillo
- ❌ Não criar `/calendario/junho` sem dados de junho importados e validados

---

## PONTO DE RETOMADA — CLAUDE DESIGN (2026-04-27)

### Estado atual: PAUSADO

O pacote de contexto da homepage foi criado, validado e commitado.
A frente visual fica pausada até Murillo decidir retomar.

### O que está pronto (não mexer)

- ✅ `_design/cloud-design/homepage-vem-passear/prompt-final-claude-design.md` — pronto para colar no Claude Design
- ✅ `_design/cloud-design/homepage-vem-passear/checklist-preenchido.md` — lacunas classificadas, nenhuma bloqueia o rascunho
- ✅ `_design/cloud-design/homepage-vem-passear/` — 7 arquivos do pacote commitados em `87032dc`

### Lacunas bloqueantes para publicação (aguardam Murillo)

1. **L1** — Foto de Murillo (alta qualidade, uso profissional)
2. **L3** — Depoimentos reais com texto + nome + cidade + data (mínimo 2) — **principal bloqueante**
3. **L2** — Foto hero — cena icônica de JP real
4. **L6** — Fotos reais dos 5 passeios dos cards

### O que NÃO fazer enquanto pausado

- ❌ Não refinar nem alterar `prompt-final-claude-design.md`
- ❌ Não abrir Claude Design
- ❌ Não alterar `_site/` por razão visual
- ❌ Não acionar orquestrador para pipeline de design

### Para retomar

Murillo decide retomar → colar `prompt-final-claude-design.md` no Claude Design → avaliar com `checklist-validacao.md §2` → iterar → aprovar → `programador-de-site`

---

## PONTO DE RETOMADA — AUTOMAÇÃO JAMPA JARVIS (2026-04-27)

### Estado atual: FOCO ATIVO

Scripts locais testados e estabilizados. Próximo passo: importar e testar no n8n.

### O que está pronto

- ✅ `_automacao/scripts/jarvis-runner.bat` v0.3 — testado localmente, exitCode 0, 8 tasks lidas
- ✅ `_automacao/scripts/jarvis-status.bat` v0.3 — testado localmente, exitCode 0, path resolution corrigido
- ✅ `_automacao/workflows/jarvis-runner.workflow.json` — workflow de execução manual pronto para importar
- ✅ `_automacao/workflows/jarvis-status-telegram.workflow.json` — workflow Telegram pronto (Telegram não configurado ainda)
- ✅ `_automacao/workflows/n8n-local-setup.md` — guia completo de setup

### Próximo passo exato (n8n)

1. Abrir n8n local (`http://localhost:5678`)
2. Importar `jarvis-runner.workflow.json`
3. Executar manualmente o nó "Rodar jarvis-runner.bat"
4. Confirmar `exitCode: 0` e `stdout` com resumo de tasks no n8n
5. Importar `jarvis-status-telegram.workflow.json` (para teste de estrutura — Telegram ainda desativado)

### O que NÃO fazer ainda

- ❌ Não configurar Telegram ainda (fase Telegram não iniciada)
- ❌ Não ativar workflows automáticos sem testar manualmente primeiro
- ❌ Não alterar `_site/`

---

**Última atualização:** 2026-04-29 | Foco: Squad Comercial (FASE 2 — 14 etapas)
