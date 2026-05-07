# Memória: Prioridades — Fase 1

**Data:** 2026-04-25  
**Fase:** 1 (Site e SEO Local)  
**Timeframe:** Próximas 2 semanas (até 2026-05-09)

---

## Prioridades em Ordem

### 1. 🔴 Preencher `_conhecimento/` com Murillo

**O quê:** Sessão de 1-2h para confirmar dados básicos  
**Por quê:** Bloqueia TUDO o resto (não posso gerar rascunho sem dados)  
**Arquivos:** empresa.md, passeios.md, publico-alvo.md, tom-de-voz.md  
**Responsável:** Murillo (input), Claude (documentar)  
**Status:** 🔴 Aguardando  
**Prazo:** ASAP (esta semana idealmente)

**Perguntas críticas:**
1. Qual é o passeio "herói" (mais importante para vender)?
2. Quantos passeios diferentes oferece? (nomes + preço)
3. Qual é a persona típica do cliente?
4. Tom de voz: formal ou conversacional? Exemplos?
5. Qual é o diferencial competitivo?

---

### 2. 🟡 Gerar arquitetura de site completa

**O quê:** Usar skill "Estrategista de Site" para mapear URLs, categorias, jornadas  
**Por quê:** Define ordem de produção (o que fazer primeiro?)  
**Arquivos:** `_site/arquitetura-informacao.md`  
**Responsável:** Claude (baseado em dados de Murillo)  
**Status:** ⏳ Aguardando #1  
**Prazo:** Dia 1-2 após preencher `_conhecimento/`

**Output:** Árvore de URLs, jornadas de turista, menu proposto, links internos

---

### 3. 🟡 Planejar conteúdo (roadmap editorial)

**O quê:** Usar skill "Arquiteto de Conteúdo" para listar páginas em ordem  
**Por quê:** Define cronograma de produção  
**Arquivos:** `_site/` (novo arquivo de roadmap)  
**Responsável:** Claude (baseado em #1 e #2)  
**Status:** ⏳ Aguardando #2  
**Prazo:** Dia 2-3

**Output:** Mapa editorial (crítico, alto, médio, baixo), cronograma, gaps

---

### 4. 🟡 Escrever rascunho de HOME

**O quê:** Página inicial (landing) do site  
**Por quê:** Porta de entrada, urgência alta  
**Skills:** Copywriter (copy) + Estrategista (estrutura)  
**Responsável:** Claude  
**Status:** ⏳ Aguardando #3  
**Prazo:** Semana 1 (na ordem de #3)

**Output:** Markdown pronto de `_site/paginas/home.md`

---

### 5. 🟡 Escrever rascunho de Passeio Hero #1

**O quê:** Página do passeio mais importante/diferente  
**Por quê:** Melhor converter venda, testar template  
**Skills:** Copywriter + Estrategista  
**Responsável:** Claude  
**Status:** ⏳ Aguardando #4  
**Prazo:** Semana 1 (após home)

**Output:** Markdown pronto de `_site/paginas/[passeio-hero].md`

---

### 6. 🟢 Gerar briefing de design para HOME

**O quê:** Especificação UX/UI para designer começar  
**Por quê:** Designer pode começar em paralelo  
**Skills:** UX-UI Mobile-First + Briefing Designer  
**Responsável:** Claude (após HOME pronto)  
**Status:** ⏳ Aguardando #4  
**Prazo:** Semana 1 (paralelo com #5)

**Output:** Briefing estruturado em `_site/briefings-designer/home.md`

---

### 7. 🟢 Gerar briefing de design para PASSEIO Hero

**O quê:** Briefing para página de passeio  
**Por quê:** Designer precisará disto para diagramar  
**Skills:** UX-UI + Briefing Designer  
**Responsável:** Claude (após passeio pronto)  
**Status:** ⏳ Aguardando #5  
**Prazo:** Semana 2

**Output:** Briefing em `_site/briefings-designer/passeio-hero.md`

---

## Métricas de Sucesso

Ao final de Fase 1 (2026-05-09):

- ✅ `_conhecimento/` 100% preenchido
- ✅ Arquitetura de site aprovada (4+ páginas críticas roadmapped)
- ✅ 2-3 rascunhos de página prontos (home, 1-2 passeios)
- ✅ 2-3 briefings de design entregues (designer pode começar)
- ✅ Sem dados inventados (0 mentiras)

---

## O Que NÃO Fazer Agora

❌ Começar a escrever páginas sem `_conhecimento/` preenchido  
❌ Fazer design antes do copy estar pronto  
❌ Publicar nada no site real  
❌ Começar Fase 2 (autom. n8n, WhatsApp) antes de Fase 1 aprovada  

---

## Mudanças Esperadas

**Esta lista é dinâmica.** Será atualizada em `/fechar-sessao` se:
- Murillo adicionar prioridade urgente
- Bloqueador aparecer
- Tarefa completada mais rápido que previsto

---

*Próxima revisão: 2026-04-30 (sessão 2)*

---
