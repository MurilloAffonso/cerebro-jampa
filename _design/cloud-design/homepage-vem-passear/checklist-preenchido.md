# Checklist Preenchido — Homepage Vem Passear em Jampa

**Uso:** Verificação de dados antes de enviar prompt ao Claude Design  
**Fonte dos dados:** Vault CEREBRO.JAMPA — arquivos lidos em 2026-04-27  
**Versão:** 1.0 | Criado: 2026-04-27  
**Status geral:** ✅ PRONTO PARA ENVIAR AO CLAUDE DESIGN

---

## Legenda de Classificação

| Símbolo | Classificação | Significado |
|---------|--------------|-------------|
| ✅ CONFIRMADO | Dado existe e foi confirmado por Murillo | Usar sem restrição |
| 🔵 INFERIDO COM SEGURANÇA | Derivado de dados existentes — não inventado | Usar, anotar origem |
| 🟡 PLACEHOLDER ACEITO | Dado ausente, mas design avança sem ele | Usar placeholder explícito |
| 🔴 CONFIRMAR COM MURILLO | Bloqueia publicação final | Não usar como real; indicar claramente |

---

## Parte 1 — Checklist Antes de Enviar ao Claude Design

| # | Item | Status | Evidência |
|---|------|--------|-----------|
| 1 | Todas as lacunas resolvidas ou aceitas como placeholder? | ✅ SIM | Ver Parte 5 deste arquivo — todas as 8 lacunas classificadas |
| 2 | `prompt-final-claude-design.md` sem dados inventados? | ✅ SIM | Depoimentos do Bloco 8 são marcados explicitamente como placeholders; nenhum outro dado inventado |
| 3 | Paleta correta no prompt? (#004E89, #FF6B35, #FFFFFF, #F5F5F5, #1A1A1A) | ✅ SIM | Prompt contém todos os 5 hex — mais #25D366 (WhatsApp) e #666666 (texto secundário) |
| 4 | Tipografia (Lora + Inter) especificada? | ✅ SIM | Prompt detalha família, peso, tamanho mobile/desktop para cada nível tipográfico |
| 5 | Descrição mobile-first clara? | ✅ SIM | Prompt: "Design mobile-first obrigatório. Começar pelo layout em 375px, depois adaptar para 768px e 1200px." |
| 6 | 5 passeios dos cards com preço, duração e categoria corretos? | ✅ SIM | Ver seção "Dados dos 5 cards — verificação" abaixo |
| 7 | WhatsApp CTA usa link/número correto? | ✅ SIM | Prompt usa +55 83 9908-7830 — confirmado na decisão #22 de `decisoes-estrategicas.md` |
| 8 | Imagens são placeholder (não URLs reais)? | ✅ SIM | Prompt especifica cores sólidas por card e `[usar placeholder de cor #004E89 com gradiente]` para hero |

---

## Dados dos 5 Cards — Verificação Cruzada

Fonte: `_site/data/passeios.ts` (validado 2026-04-26)

| Card | Nome | Preço Prompt | Preço Real | Duração Prompt | Duração Real | Categoria Prompt | Categoria Real | Status |
|------|------|-------------|-----------|----------------|-------------|-----------------|----------------|--------|
| 1 | Piscinas Naturais do Seixas | R$ 60/pessoa | R$ 60 | ~3h30 | ~3h30 | 🐠 Piscinas Naturais | piscinas-naturais | ✅ CORRETO |
| 2 | Areia Vermelha — Catamarã | R$ 70/pessoa | R$ 70 | ~3h | ~3h | 📸 Litoral Norte | litoral-norte | ✅ CORRETO |
| 3 | Litoral Sul — Roteiro Clássico | R$ 80/pessoa | R$ 80 | 8h | 8h | 🌊 Litoral Sul | litoral-sul | ✅ CORRETO |
| 4 | Piscinas Naturais de Picãozinho | R$ 60/pessoa | R$ 60 | ~3h | ~3h | 🐠 Piscinas Naturais | piscinas-naturais | ✅ CORRETO |
| 5 | Pôr do Sol do Jacaré — Catamarã | R$ 90/pessoa | R$ 90 | ~1h30 | ~1h30 | 🌅 Litoral Norte | litoral-norte | ✅ CORRETO |

---

## Dados de Marca — Verificação Cruzada

| Campo | Valor no Prompt | Fonte no Vault | Status |
|-------|----------------|----------------|--------|
| Nome | Vem Passear em Jampa | `_conhecimento/empresa.md` | ✅ CONFIRMADO |
| Proprietário | Murillo Affonso | `_conhecimento/empresa.md` | ✅ CONFIRMADO |
| CNPJ | 52.077.577/0001-03 | `_conhecimento/empresa.md` + `provas-de-confianca.md` | ✅ CONFIRMADO |
| Cadastur | 52.077.577 (ativo até 2026) | `_conhecimento/empresa.md` (válido até 16/12/2026) | ✅ CONFIRMADO |
| Google | 4.9/5 ⭐ | `_conhecimento/empresa.md` + `provas-de-confianca.md` | ✅ CONFIRMADO |
| WhatsApp | +55 83 9908-7830 | `decisoes-estrategicas.md` #22 | ✅ CONFIRMADO |
| Domínio | vempassearjampa.com.br | `decisoes-estrategicas.md` #26 | ✅ CONFIRMADO |
| 29 Passeios | "🌊 29 Passeios" | `dados-passeios.md` (23 + variações = 29) | ✅ CONFIRMADO |
| Missão / Posicionamento | "Turismo receptivo..." | `_conhecimento/empresa.md` + `tom-de-voz.md` | ✅ CONFIRMADO |
| Dependência de maré: Seixas | ✅ mencionado no Bloco 7 e FAQ | `passeios.ts`: `dependeDeMare: true` | ✅ CONFIRMADO |
| Dependência de maré: Areia Vermelha | ✅ mencionado | `passeios.ts`: `dependeDeMare: true` | ✅ CONFIRMADO |
| Dependência de maré: Picãozinho | ✅ mencionado | `passeios.ts`: `dependeDeMare: true` | ✅ CONFIRMADO |
| Embarque Seixas | "Tambaú" mencionado no FAQ | `decisoes-estrategicas.md` #27: "Praia de Tambaú, próximo ao Hotel Tambaú" | ✅ CONFIRMADO |
| Cadastur válido até | "válido até 2026" no FAQ | empresa.md: "16/12/2024 a 16/12/2026" | ✅ CONFIRMADO |
| Idade mínima (Seixas) | FAQ P5: "não têm idade mínima" | `decisoes-estrategicas.md` #28 | ✅ CONFIRMADO |
| Tom de voz (orientador, não vendedor) | ✅ todos os blocos | `_conhecimento/tom-de-voz.md` | ✅ CONFIRMADO |
| Proibições copy | "paraíso tropical", urgência, etc. | `tom-de-voz.md` + `referencias-e-restricoes.md` | ✅ CONFIRMADO |

---

## Parte 5 — Lacunas: Classificação Definitiva

### L1 — Foto de Murillo

**Classificação:** 🔴 CONFIRMAR COM MURILLO

**O que existe na base:**
- `empresa.md`: Murillo é proprietário, rosto da marca, atendimento direto — dado confirmado
- Foto física: nenhum arquivo encontrado no vault
- Prompt: placeholder `[Placeholder: retângulo arredondado 480×480px com label "Foto Murillo — [AGUARDANDO]"]`

**Impacto no design:** Nenhum — o Bloco 6 usa placeholder explícito e bem dimensionado (480×480px)  
**Impacto na publicação:** Alto — bloqueia lançamento do Bloco 6 como definitivo  
**Ação:** Murillo envia foto profissional, ao ar livre, sorrindo, casual; substitui placeholder sem mudar estrutura

---

### L2 — Foto Hero (cena icônica de JP)

**Classificação:** 🟡 PLACEHOLDER ACEITO

**O que existe na base:**
- `direcao-visual.md §8`: placeholder de cor sólida é explicitamente aceito para design
- Prompt: `[usar placeholder de cor #004E89 com gradiente para indicar onde vai a foto]`
- `referencias-e-restricoes.md`: especifica visual desejado — piscinas naturais ou areia branca, reconhecível como JP

**Impacto no design:** Nenhum — estrutura definida, overlay de cor garantido  
**Impacto na publicação:** Alto — foto placeholder bloqueia publicação final  
**Ação (futura):** Murillo envia foto panorâmica JP 1440×560px (piscinas naturais ou areia branca, não stock genérico)

---

### L3 — Depoimentos Reais (texto + nome + cidade + data)

**Classificação:** 🔴 CONFIRMAR COM MURILLO

**O que existe na base:**
- `passeios.ts` contém depoimentos para 3 passeios sem marcador CONFIRMAR (Areia Vermelha: "Patricia, turista de SP"; Litoral Sul: "Roberto, turista de Brasília"; Pôr do Sol: "Marina & João, casal") — possível origem no catálogo de Murillo, mas sem datas e sem confirmação explícita para homepage
- `passeios.ts` Seixas: explicitamente `[CONFIRMAR COM MURILLO]`
- `decisoes-estrategicas.md` #24: "Depoimentos são prova social crítica — usar sem autorização é antiético e arriscado"
- Prompt Bloco 8: 2 placeholders claramente ficcionais (Marcos S. e Ana C.), marcados como "depoimentos reais a inserir"

**O que falta para a homepage:** texto + nome + cidade + data (campo `data` não existe nos depoimentos de passeios.ts)  
**Impacto no design:** Nenhum — placeholders ficcionais são explicitamente marcados como substitutos  
**Impacto na publicação:** Bloqueante — nenhum depoimento pode ser publicado sem confirmação de Murillo  
**Ação:** Murillo confirma mínimo 2 depoimentos reais com: texto + nome + cidade + mês/ano. Os 3 de passeios.ts podem servir de base se Murillo confirmar e fornecer datas

---

### L4 — Número Exato de Avaliações Google

**Classificação:** 🟡 PLACEHOLDER ACEITO

**O que existe na base:**
- `empresa.md`: "Nota 4.9 de 5 / [CONFIRMAR: quantas avaliações/reviews?]"
- `provas-de-confianca.md`: "[CONFIRMAR: Número exato de avaliações/reviews? Ex.: 147 avaliações]"
- Prompt: usa apenas "⭐ 4.9 de 5" sem contagem — número de reviews não aparece no design

**Impacto no design:** Nenhum — o prompt não inclui contagem de reviews, apenas a nota  
**Impacto na publicação:** Baixo — "4.9 de 5" já é suficiente; contagem é aprimoramento  
**Ação (opcional):** Murillo confirma número → incluir no Bloco 3 como "4.9 de 5 (XXX avaliações)"

---

### L5 — Anos de Operação ("atendendo desde 20XX")

**Classificação:** 🟡 PLACEHOLDER ACEITO

**O que existe na base:**
- `empresa.md`: "[CONFIRMAR: há quanto tempo opera? desde quando?]"
- `decisoes-estrategicas.md`: "[CONFIRMAR]: Anos que Murillo opera?"
- Pôr do Sol Jacaré em `passeios.ts`: "Experiência única que funciona há mais de 20 anos" — refere-se ao passeio do Jacaré (Jurandy do Sax), não à Vem Passear
- Cadastur: válido desde 16/12/2024 — indica registro formal, não necessariamente fundação

**Impacto no design:** Nenhum — o prompt não usa "desde 20XX" em nenhum bloco  
**Impacto na publicação:** Médio — copy de "tempo de experiência" seria diferencial, mas não está no design atual  
**Ação (futura):** Murillo confirma ano de fundação → inserir no Bloco 6 (diferenciais) ou hero copy

---

### L6 — Fotos Reais dos 5 Passeios dos Cards

**Classificação:** 🟡 PLACEHOLDER ACEITO

**O que existe na base:**
- `passeios.ts`: todos os 5 passeios têm paths de imagem (ex: `/images/passeios/seixas/hero-01.svg`, `/images/passeios/areia-vermelha/capa.webp`) — são placeholders SVG/WebP, sem arquivo real
- `dados-passeios.md`: todas as imagens marcadas como `[CONFIRMAR: foto real de...]`
- Prompt: especifica cores sólidas distintas por passeio — verde-água (Seixas), laranja-areia (Areia Vermelha), azul-médio (Litoral Sul), azul-claro (Picãozinho), laranja-entardecer (Pôr do Sol)
- `referencias-e-restricoes.md §4`: guia de imagens por passeio (piscinas de Seixas = água verde-esmeralda + corais, etc.)

**Impacto no design:** Nenhum — cores sólidas definem identidade visual por card  
**Impacto na publicação:** Bloqueante para lançamento visual definitivo  
**Ação (futura):** Murillo envia 5 fotos (640×360px por card) → substituem placeholders sem mudar estrutura

---

### L7 — URL do Perfil Google Maps da Empresa

**Classificação:** 🔵 INFERIDO COM SEGURANÇA

**O que existe na base:**
- `passeios.ts`, campo `googleMapsUrl` no passeio Seixas: `"https://maps.app.goo.gl/Q1Q8BNC5K1k9tiyX7"`
- Contexto: inserida no contexto do bloco `ReviewsBlock` (decisão #31 — "link para perfil do Google Maps")
- `decisoes-estrategicas.md` #31: "Lacunas 11 (avaliações) e 14 (URL Google Maps) pendentes com Murillo"
- Prompt: Bloco 8 usa "Ver todas as avaliações →" sem URL específica

**Incerteza:** A URL pode ser o perfil da empresa OU o local específico de Seixas. A decisão #31 a marca como lacuna pendente.  
**Impacto no design:** Nenhum — URL não aparece no design (é detalhe de implementação)  
**Ação:** Murillo confirma se `https://maps.app.goo.gl/Q1Q8BNC5K1k9tiyX7` é o perfil da empresa → usar em Bloco 8 e footer

---

### L8 — Dados de Maré Validados (revisadoPorMurillo: true)

**Classificação:** 🟡 PLACEHOLDER ACEITO

**O que existe na base:**
- `dados-passeios.md`: todos os 3 cards de maré com `revisadoPorMurillo: false`
- `decisoes-estrategicas.md` #33-35: regras operacionais detalhadas para tábua de marés
- `decisoes-estrategicas.md` #33.4: "Sem próxima saída cadastrada → fallback 'Consulte próximas saídas' com link WhatsApp"
- Prompt Bloco 7: já usa o fallback correto — cards com borda cinza (#D1D5DB), badge "Consulte próximas saídas", CTA WhatsApp

**Impacto no design:** Nenhum — o fallback é o estado padrão documentado e correto  
**Impacto na publicação:** Sem impacto imediato — o site funciona com fallback; dado de maré é atualização futura  
**Ação (futura):** Murillo valida dados da Marinha (Porto de Cabedelo) → `revisadoPorMurillo: true` → cards exibem próxima saída automaticamente

---

## Resumo das Lacunas

| # | Lacuna | Classificação | Bloqueia Design? | Bloqueia Publicação? |
|---|--------|--------------|-----------------|---------------------|
| L1 | Foto de Murillo | 🔴 CONFIRMAR COM MURILLO | ❌ Não | ✅ Sim |
| L2 | Foto hero JP | 🟡 PLACEHOLDER ACEITO | ❌ Não | ✅ Sim |
| L3 | Depoimentos reais | 🔴 CONFIRMAR COM MURILLO | ❌ Não | ✅ Sim (bloqueante principal) |
| L4 | Nº avaliações Google | 🟡 PLACEHOLDER ACEITO | ❌ Não | ❌ Não (aprimoramento) |
| L5 | Anos de operação | 🟡 PLACEHOLDER ACEITO | ❌ Não | ❌ Não (não aparece no design) |
| L6 | Fotos reais passeios | 🟡 PLACEHOLDER ACEITO | ❌ Não | ✅ Sim |
| L7 | URL Google Maps | 🔵 INFERIDO COM SEGURANÇA | ❌ Não | ❌ Não (URL em passeios.ts, confirmar) |
| L8 | Dados de maré | 🟡 PLACEHOLDER ACEITO | ❌ Não | ❌ Não (fallback já funciona) |

**Bloqueantes para publicação:** L1, L2 (foto hero), L3 (depoimentos), L6 (fotos passeios)  
**Bloqueantes para rascunho visual:** nenhum

---

## Critérios Bloqueantes — Avaliação Pré-Design

> Estes critérios são avaliados APÓS Claude Design gerar o resultado (Parte 2 do checklist-validacao.md).
> Com o prompt atual, cada critério está estruturalmente endereçado:

| Critério | Como está garantido no prompt |
|----------|-------------------------------|
| Identidade local | Copy específica de JP (piscinas naturais, Jacaré, Litoral Sul); restrição explícita "❌ Qualquer copy que funcionaria em Natal ou Recife" |
| CTA visível sem scroll (mobile) | Bloco 2: hero 380px mobile, botões full-width empilhados; WhatsApp visível no header fixo |
| Prova social acima da dobra | Bloco 3 (Faixa de Prova Social) imediatamente após hero: 4.9/5 + Cadastur + 29 passeios |
| Contraste WCAG AA | Prompt: overlay #004E89 38% no hero; texto branco sobre azul; acessibilidade como seção obrigatória |
| Mobile 320px funcional | Prompt especifica max-width 1200px centralizado, 16px padding mobile, nenhum scroll horizontal |

---

## Conclusão: Prompt Pronto para Claude Design?

### ✅ SIM

**Por quê:**
1. Todos os dados de marca confirmados (CNPJ, Cadastur, WhatsApp, Google, domínio, preços)
2. Todos os 5 cards verificados contra `passeios.ts`
3. Todas as lacunas têm placeholder aceito ou não aparecem no design
4. Copy do Bloco 8 (depoimentos) marcada explicitamente como placeholder
5. Fallback de maré tratado corretamente no Bloco 7
6. Estrutura mobile-first com breakpoints definidos
7. Paleta, tipografia e espaçamento documentados com precisão

**Condições para publicação (não para design):**
- Murillo confirma: foto de Murillo (L1), foto hero (L2), depoimentos reais com datas (L3), fotos dos 5 passeios (L6)

---

## Prompt-final-claude-design.md — Atualizado?

**NÃO foi necessário atualizar.**

O prompt está tecnicamente correto:
- Nenhum dado inventado
- Todos os placeholders explícitos e bem instruídos
- URLs de WhatsApp como número (+55 83 9908-7830) — correto para design (links são implementação)
- Google Maps URL ausente do prompt — correto (é detalhe de implementação, não de design)

---

## Dados Confirmados na Base — Referência Rápida

| Dado | Valor | Fonte |
|------|-------|-------|
| WhatsApp | +55 83 9908-7830 | `decisoes-estrategicas.md` #22 |
| CNPJ | 52.077.577/0001-03 | `empresa.md` |
| Cadastur | 52.077.577 (até 16/12/2026) | `empresa.md` |
| Google | 4.9/5 ⭐ | `empresa.md` + `provas-de-confianca.md` |
| Domínio | vempassearjampa.com.br | `decisoes-estrategicas.md` #26 |
| Catálogo | 29 passeios | `dados-passeios.md` |
| Seixas | R$ 60 · ~3h30 · Piscinas Naturais | `passeios.ts` |
| Areia Vermelha | R$ 70 · ~3h · Litoral Norte | `passeios.ts` |
| Litoral Sul Clássico | R$ 80 · 8h · Litoral Sul | `passeios.ts` |
| Picãozinho | R$ 60 · ~3h · Piscinas Naturais | `passeios.ts` |
| Pôr do Sol Jacaré | R$ 90 · ~1h30 · Litoral Norte | `passeios.ts` |
| Embarque Seixas/Picãozinho | Praia de Tambaú, próximo Hotel Tambaú | `decisoes-estrategicas.md` #27 |
| Idade mínima Seixas | Nenhuma (crianças com responsável) | `decisoes-estrategicas.md` #28 |
| Google Maps URL (possível) | `https://maps.app.goo.gl/Q1Q8BNC5K1k9tiyX7` | `passeios.ts` Seixas — confirmar Murillo |

---

*Versão: 1.0 | Criado: 2026-04-27 | Baseado em leitura completa do vault*
