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

**Registrado em:** 2026-04-27  
**Branch:** `main` — limpa, sincronizada com `origin/main`  
**Último commit:** `01519a3` — `docs(inspecao): descobre arquivos PDF falsos (Cloudflare) e mapeia parser surfguru`

### Estado atual

- ✅ Skill `tabua-mares-turismo` criada e atualizada (v1.2)
- ✅ Spike técnico de fontes realizado e commitado
- ✅ Inspeção técnica realizada e commitada: `03-inspecao-layout-pdf-cabedelo.md`
- ⚠️ **DESCOBERTA CRÍTICA:** Os arquivos `.pdf` no repositório são páginas Cloudflare, NÃO são PDFs reais:
  - `_site/planejamento/tabua-mares/2026-PORTO-DE-CABEDELO.pdf` → HTML de desafio Cloudflare
  - `_site/planejamento/tabua-mares/cabedelo-2025.pdf` → idem
- ✅ Parser HTML surfguru.com.br **funcional** — 31/31 dias de maio/2026 extraídos
- ✅ Classe CSS `celula_mare_baixa` confirma semântica explícita de baixa-mar no surfguru
- ✅ Todos os 31 dias de maio/2026 processados com regras operacionais aplicadas (19 dias com passeio)
- ✅ Schema `SaidaDia[]`, funções runtime e funções de importação definidas em `references/estrutura-dados.md`

### Bloqueio atual

**Murillo precisa baixar o PDF real no browser** antes de implementar `parseTabuaMaresOficial()`.

Passos para Murillo:
1. Abrir `https://www.marinha.mil.br/cppb/tabuas_de_mare` no Chrome/Edge
2. Clicar no link PDF "2026-PORTO-DE-CABEDELO.pdf"
3. Substituir `_site/planejamento/tabua-mares/2026-PORTO-DE-CABEDELO.pdf` pelo arquivo baixado
4. Confirmar que o arquivo começa com `%PDF-` (não `<!DOCTYPE`)

### O que está pronto para implementar (não precisa de PDF)

- ✅ **Parser surfguru** (`parseTabuaMaresSurfguru(html)`) — estrutura mapeada, classes confirmadas, lógica definida no relatório de inspeção
- ✅ Regras operacionais todas validadas pelo parser de prova de conceito
- ✅ Dados de maio/2026 prontos para `data/tabua-mares.ts` de desenvolvimento

### Próxima ação exata

**Duas opções — Murillo decide:**

**Opção A (recomendada se Murillo tiver 10 min):**
1. Murillo baixa o PDF real
2. Claude inspeciona o layout do PDF real → implementa `parseTabuaMaresOficial(pdfBuffer)`
3. Claude implementa `importarTabuaMaresCabedelo(ano)` usando PDF como fonte primária

**Opção B (se quiser avançar agora sem PDF):**
1. Claude implementa `parseTabuaMaresSurfguru(html)` + `importarTabuaMaresSurfguru(mes, ano)` como fonte de desenvolvimento
2. Gera `_site/data/tabua-mares.ts` com dados de maio/2026 (`revisadoPorMurillo: false`)
3. Murillo valida manualmente os horários contra a tábua visual
4. Parser PDF fica pendente para quando o arquivo real estiver disponível

### O que NÃO fazer na próxima sessão

- ❌ Não alterar a página Seixas (`app/passeios/piscinas-naturais/seixas/`)
- ❌ Não criar `ProximaSaidaCard` ainda (depende do `data/tabua-mares.ts` validado)
- ❌ Não criar calendário completo ainda
- ❌ Não publicar dados sem `revisadoPorMurillo: true`

### Instrução para o próximo Claude

> Abrir sessão com `/abrir-sessao`.  
> Ler este bloco de retomada.  
> Perguntar a Murillo: "Opção A (PDF real) ou Opção B (parser surfguru agora)?".  
> Executar conforme a escolha. Relatório de inspeção completo em `03-inspecao-layout-pdf-cabedelo.md`.

---

**Última atualização:** 2026-04-27 | Próxima revisão: início da próxima sessão (feature tábua de marés)
