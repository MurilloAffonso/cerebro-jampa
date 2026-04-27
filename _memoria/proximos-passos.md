# Memória: Próximos Passos (Roadmap Executável)

**Consolidado em:** 2026-04-25  
**Escopo:** O que fazer agora, sequência real de execução

---

## FASE 1 — FUNDAÇÃO (Semana 1-2)

### Semana 1

**Dia 1-2: Validar Dados**
- [ ] Confirmar preço de cada passeio (entrar em `_conhecimento/passeios.md`)
- [ ] Confirmar duração de cada passeio
- [ ] Confirmar embarques (Tambaú, Cabo Branco, etc.)
- [ ] Confirmar qual passeio depende de maré baixa

**Dia 3-5: Criar Home + Top 3 Passeios**
- [ ] Home: "Passeios em João Pessoa" (layout básico)
- [ ] Passeio: Seixas
- [ ] Passeio: Areia Vermelha
- [ ] Passeio: Litoral Sul Clássico
- Estrutura: usar template `pagina-de-passeio.md`

**Paralelo (Dia 1-5): Otimizar GMB**
- [ ] Descrição otimizada (30 min)
- [ ] Foto de capa (1 dia)
- [ ] 5 fotos iniciais (1-2 dias)
- [ ] Q&A rápida (5 estratégicas, 2 horas)
- [ ] Pedir reviews (1 dia)

---

### Semana 2

**Dia 8-12: Criar 2 Clusters + FAQ**
- [ ] Cluster: Piscinas Naturais (linkando para Seixas, Areia Vermelha, Picãozinho, Penha)
- [ ] Cluster: Litoral Sul (linkando para Clássico, Praia Bela, Combos)
- [ ] FAQ Centralizada (15 perguntas, com schema)

**Dia 13-14: Blog Rápido (3 posts)**
- [ ] "Como Funciona Maré em Piscinas Naturais?"
- [ ] "Melhor Época para Visitar João Pessoa"
- [ ] "O Que Levar em Passeio de Praia — Checklist"

---

## FASE 2 — CRESCIMENTO (Semana 3-4)

**Semana 3**

**Dia 15-21: Expandir Passeios**
- [ ] 10-15 passeios adicionais (seguindo template)
- [ ] Cada linkado para cluster pai
- [ ] Cada consultando `_conhecimento/passeios.md`

**Dia 15-19: Criar Landing Personas**
- [ ] "Passeios para Famílias com Crianças"
- [ ] "Passeios Românticos — Lua de Mel"

---

**Semana 4**

**Dia 22-28: Consolidar Clusters**
- [ ] Completar 7 clusters (se houver mais)
- [ ] Garantir links internos: cluster ↔ passeios
- [ ] 5-10 blog posts adicionais

**Dia 22-28: TripAdvisor**
- [ ] Criar perfil (se não existir)
- [ ] Listar 29 passeios
- [ ] Validar informações (NAP)

---

## FASE 3 — OTIMIZAÇÃO (Mês 2-3)

**Mês 2**

**Semana 5-8:**
- [ ] Completar 29 passeios (todos)
- [ ] 20 blog posts (total)
- [ ] Landing personas (4 completas)
- [ ] Viator (se ROI for > 15%)

---

**Mês 3**

**Semana 9-12:**
- [ ] 30 blog posts (total)
- [ ] Otimização on-page (titles, metas, links)
- [ ] Análise de rankings (quais keywords estão ranqueando?)
- [ ] Campanha de reviews (GMB + TripAdvisor)

---

## MARCOS DE SUCESSO

**Fim Semana 2 (Fase 1):**
- ✅ Home publicada
- ✅ 3 passeios top ranqueando (ou pré-ranking)
- ✅ GMB otimizado (+15% tráfego esperado)
- ✅ 3 blog posts publicados
- ✅ FAQ com schema live

**Fim Semana 4 (Fase 2):**
- ✅ 20 passeios live
- ✅ 2 clusters funcionais
- ✅ TripAdvisor com presença
- ✅ 10 blog posts
- ✅ 2 landing personas

**Fim Mês 3 (Fase 3):**
- ✅ 29 passeios (100%)
- ✅ 7 clusters (100%)
- ✅ 30 blog posts (100%)
- ✅ 4 landing personas (100%)
- ✅ Viator (se aplicável)
- ✅ Rankings consolidados (50+ keywords em top 3)
- ✅ Tráfego mensal: 2000-5000 (estimado)

---

## PRIORIDADES IMEDIATAS

**HOJE (2026-04-25):**
1. Confirmar dados críticos (preço, duração, maré)
2. Confirmar domínio do site
3. Começar design/desenvolvimento da home

**ESTA SEMANA:**
1. Home + Top 3 passeios live
2. GMB otimizado
3. 3 blog posts live
4. FAQ com schema

---

---

## PONTO DE RETOMADA — FEATURE TÁBUA DE MARÉS

**Registrado em:** 2026-04-26  
**Branch:** `main` — limpa, sincronizada com `origin/main`  
**Último commit:** `0f800a4` — `docs(spike): investiga viabilidade importacao tabua mares CHM Cabedelo 2026`

### Estado atual

- ✅ Skill `tabua-mares-turismo` criada e atualizada (v1.2)
- ✅ Spike técnico de fontes realizado e commitado
- ✅ PDFs oficiais da Marinha/CHM no repositório:
  - `_site/planejamento/tabua-mares/2025-PORTO-DE-CABEDELO.pdf`
  - `_site/planejamento/tabua-mares/2026-PORTO-DE-CABEDELO.pdf`
- ✅ Dados de maio 2026 extraídos de fonte não-oficial (surfguru) para referência
- ✅ Schema `SaidaDia`, funções runtime e funções de importação definidas em `references/estrutura-dados.md`

### Próxima ação exata

**Inspecionar tecnicamente o PDF 2026 da tábua de marés de Porto de Cabedelo.**

- **Arquivo alvo:** `_site/planejamento/tabua-mares/2026-PORTO-DE-CABEDELO.pdf`
- **Relatório a criar:** `_site/planejamento/tabua-mares/03-inspecao-layout-pdf-cabedelo.md`
- **Objetivo:** Determinar se o PDF é parseável por `pdf-parse` ou `pdfjs-dist` sem OCR; extrair 5 a 10 registros reais de baixa-mar (mês, dia, hora, altura) como prova de conceito.
- **Ferramenta a tentar:** `mcp__ide__executeCode` com `pdf-parse` ou leitura direta do buffer — registrar resultado no relatório.

### O que NÃO fazer nesta próxima sessão

- ❌ Não iniciar o parser final (`parseTabuaMaresOficial`) — só validar layout primeiro
- ❌ Não alterar a página Seixas (`app/passeios/piscinas-naturais/seixas/`)
- ❌ Não alterar cards de passeio ainda
- ❌ Não criar o calendário mensal completo ainda
- ❌ Não implementar `ProximaSaidaCard` ainda

### Instrução para o próximo Claude

> Abrir sessão com `/abrir-sessao`.  
> Ler este bloco de retomada.  
> Objetivo único: inspecionar `_site/planejamento/tabua-mares/2026-PORTO-DE-CABEDELO.pdf` e criar `03-inspecao-layout-pdf-cabedelo.md` com layout confirmado e registros de exemplo reais. Se PDF não for parseável sem OCR, documentar o bloqueio e propor alternativa. Não avançar além disso.

---

**Última atualização:** 2026-04-26 | Próxima revisão: início da próxima sessão (feature tábua de marés)
