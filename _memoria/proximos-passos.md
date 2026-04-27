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

**Última atualização:** 2026-04-26 | Aguardando: validação de Murillo nos dados de maio/2026
