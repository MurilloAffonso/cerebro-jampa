# Skill: UX/UI Mobile-First

## 1. Função

Transformar estratégia (estrutura, copy, SEO) em **especificação visual clara** para implementação. Priorizar mobile-first, definir layout com hierarquia visual, orientar design de hero/cards/seções/CTAs com foco em **confiança e conversão**, não em decoração.

Você não faz design (cores, fontes, logo), mas especifica **o quê** designer deve fazer. Você guia implementação técnica focando em conversão, acessibilidade, performance e experiência mobile.

## 2. Quando Usar

✅ Página foi aprovada textualmente (copy + estrutura) e precisa de especificação visual  
✅ Designer chegou no projeto e precisa entender requisitos UX/UI  
✅ Quer garantir que layout é mobile-first (não desktop adaptado para mobile)  
✅ Página tem baixa performance em mobile ou conversão baixa  
✅ Retomando design inacabado  

## 3. Quando NÃO Usar

❌ Para definir conteúdo/copy (use `copywriter-vendas`)  
❌ Para otimização SEO (use `seo-local-turismo`)  
❌ Para arquitetura de site (use `estrategista-de-site`)  
❌ Para escolher cores/tipografia/logo (designer lidera, você sugere contexto)  

## 4. Entradas Necessárias

Antes de começar, tenha:

- **Copy/conteúdo aprovado:** Em markdown ou documento (já foi por Copywriter)
- **Objetivo da página:** Vender? Educar? Construir confiança? (de `estrategista-de-site`)
- **Ação esperada do turista:** Clicar CTA? Ler depoimento? Escolher data?
- **Dados do passeio (se aplicável):** Preço, duração, horário (de `_conhecimento/passeios.md`)
- **Provas de confiança:** Rating, Cadastur, depoimentos (de `_conhecimento/provas-de-confianca.md`)

## 5. Processo

### Etapa 1: Hierarquizar Blocos por Importância

Leia o copy/conteúdo. Identifique:

**CRÍTICO (primeiro 30% da tela mobile):**
- Hero + headline (O que o turista vai encontrar)
- CTA primária (WhatsApp, óbvio, 44px altura mínima)
- Preço (se é passeio)
- Rating/Proof (se tem)

**IMPORTANTE (30-70% da tela):**
- Descrição curta
- O que está incluso
- Roteiro/itinerário
- FAQ (accordion, não expandido)

**SUPORTE (70%+ ou scroll longo):**
- Depoimentos/reviews
- Logos/parceiros
- Links relacionados
- Footer

### Etapa 2: Ordem Mobile (Small-First)

Defina o que turista vê **ao cair na página** em mobile:

1. **Hero:** Imagem grande (full-width ou 100vh se necessário) com overlay, headline, CTA sticky ou acima do fold
2. **Info Card:** Preço, Duração, Ponto Encontro em cards pequenos (3-col em mobile)
3. **Lead:** 1 frase que responde "por que fazer isso?"
4. **Descrição:** 2-3 parágrafos, espaçamento claro
5. **"Incluso":** Blocos de 4 items em stack vertical (mobile), grid em tablet
6. **Roteiro:** Timeline vertical (mobile), horizontal (tablet)
7. **FAQ:** Accordion (clicável, 44px tap target)
8. **Depoimentos:** Stack vertical (mobile), carousel (tablet+)
9. **CTA Final:** Botão grande "Agendar no WhatsApp"
10. **Footer:** Links, contato, redes

**Regra:** No mobile, turista NÃO deve scrollar mais de 5-6 seções antes de encontrar CTA.

### Etapa 3: Definir Tap Targets (Toque em Mobile)

Requisitos acessibilidade + UX:

- **Buttons:** Mínimo 44px × 44px (Apple HIG, WCAG)
- **Links clicáveis:** Mínimo 48px × 48px se possível
- **Espaçamento entre buttons:** Mínimo 8px
- **Texto clicável:** Mínimo 16px, não depender de hover

### Etapa 4: Especificar Wireframe Textual

Para cada bloco, descreva:

**Exemplo Hero:**
```
Hero Block (Mobile: 300px-400px altura)
- Background: imagem full-width (JPG com Webp fallback)
- Overlay: gradiente escuro de cima (0.6 opacity)
- Conteúdo centrado:
  - H1: "Praia do Seixas — Aurora no Atlântico" (32px, branco, bold)
  - Subtitle: "Snorkel em água cristalina" (16px, cinza claro)
  - Button: "Agendar no WhatsApp" (44px altura, laranja/primary, WhatsApp icon 20px)

Tablet (768px+): Hero altura 500px, H1 40px, subtitle 18px

Desktop (1024px+): Hero 600px, H1 48px
```

### Etapa 5: Responsividade — 3 Breakpoints

Defina como layout adapta:

**Mobile (320px-768px):**
- Todos blocos full-width (100% - 16px padding)
- Imagens 100% (lazy-load)
- Tipografia: H1 32px, H2 24px, H3 18px, body 16px
- Buttons full-width ou 100% do container
- Menu hambúrguer (não expandido)

**Tablet (769px-1024px):**
- Max-width 90% centrado
- Grids 2-col onde possível
- Tipografia: H1 40px, H2 28px, body 16px
- Menu parcialmente expandido ou mobile-like

**Desktop (1025px+):**
- Max-width 1200px centrado
- Grids 3-col onde possível
- Tipografia: H1 48px, H2 32px, body 16px
- Menu horizontal completo

### Etapa 6: Acessibilidade Básica

Requisitos WCAG AA (mínimo):

- **Contraste:** H1/H2 branco sobre escuro ≥ 7:1, body ≥ 4.5:1
- **Alt text:** Descritivo, não "imagem.jpg". Ex: "Praia do Seixas ao entardecer com farol ao fundo"
- **Focus states:** Buttons com outline 2px quando tabbed
- **Sem cor como único indicador:** Use cor + ícone ou cor + symbol
- **Labels em formulários:** Sempre presentes, conectadas via `for` attribute

### Etapa 7: Performance

Otimizações para mobile < 3s load:

- **Imagens:** Webp + JPG fallback, dimensionadas corretamente (não 2000px para mobile 320px)
- **Lazy-load:** Imagens abaixo do fold carreguem sob demanda
- **Animações:** Fade-in/slide ok, evitar JS pesado (AOS library etc)
- **CSS:** Critical path inline, resto deferred
- **Fontes:** Máximo 2 fonts, carrega system-first se possível
- **Videos:** Evitar auto-play, loop. Se usar, load sob demanda

## 6. Regras Específicas

- **Mobile é versão 1.0:** Desktop é expansão, não o oposto
- **CTA sempre acessível:** Botão WhatsApp deve estar visível com 1-2 scrolls no mobile
- **Imagens servem copy:** Cada imagem tem propósito, não é decoração
- **Espaço branco é legibilidade:** Padding entre seções, não aperto de conteúdo
- **Hierarquia tipográfica:** H1 > H2 > H3 > body, não tudo iguais
- **Sem hover states críticos:** Mobile não tem hover. Button estados: default, focus (outline), active (pressed)
- **Contexto > Estética:** Um design feio mas claro > design bonito mas confuso

## 7. Saída Esperada

Um arquivo markdown com **mínimo** 5 seções:

### Seção 1: Wireframe Textual (por bloco)

Descrição visual de cada seção. Exemplo:

```markdown
## Wireframe Textual — Página Seixas

### 1. Hero (Mobile: 350px altura)
- Background: imagem praia full-width (Webp 1200x350 + JPG fallback)
- Overlay: gradiente escuro 60% opacidade
- Conteúdo centrado com padding 16px:
  - Breadcrumb: "Home > Litoral Sul > Seixas" (12px cinza)
  - H1: "Praia do Seixas" (32px, branco, 1.2 line-height)
  - Subtitle: "Snorkel em água cristalina" (16px, cinza 200)
  - Button: "Agendar no WhatsApp" (44px, primary-orange, WhatsApp icon)

### 2. Info Card (post-hero)
- Grid 3-col (mobile stack): Preço | Duração | Saída
- Cada cell: icone (32px) + valor (14px bold) + label (12px)
- Background: light-gray, padding 16px

### 3. Descrição
- Lead: 1 frase (16px, bold)
- Corpo: 2-3 parágrafos (16px, line-height 1.6)
- Espaçamento entre parágrafos: 16px
```

### Seção 2: Diagrama ASCII (visual)

Ordem dos blocos em mobile:

```
┌─────────────────────┐
│   Hero (350px)      │
│  [Foto + H1 + CTA]  │
└─────────────────────┘
┌─────────────────────┐
│   Breadcrumb (40px) │
└─────────────────────┘
┌─────────────────────┐
│   Info Card (120px) │
│ Preço | Dur | Saída │
└─────────────────────┘
┌─────────────────────┐
│ Descrição (200px)   │
│ Lead + 2-3 parágr.  │
└─────────────────────┘
┌─────────────────────┐
│  Incluso (300px)    │
│  4 items em stack   │
└─────────────────────┘
┌─────────────────────┐
│ Roteiro (500px)     │
│  Timeline vertical  │
└─────────────────────┘
┌─────────────────────┐
│  FAQ (400px)        │
│ 3 perguntas accord  │
└─────────────────────┘
┌─────────────────────┐
│ Depoimento (200px)  │
│ Citação + foto      │
└─────────────────────┘
┌─────────────────────┐
│ CTA Final (60px)    │
│ Agendar WhatsApp    │
└─────────────────────┘
```

### Seção 3: Responsividade (3 Breakpoints)

```markdown
## Responsividade

### Mobile (320px-768px)
- Todos blocos 100% - 16px padding
- Info Card: 3-col tight
- Roteiro: vertical timeline
- H1: 32px, H2: 24px, body: 16px

### Tablet (769px-1024px)
- Max-width 90% centrado
- Info Card: 4-col (se 4 items)
- Roteiro: 2-col (dia + atividades lado a lado)
- H1: 40px, body: 16px

### Desktop (1025px+)
- Max-width 1200px
- Info Card: grid full 4-col
- Roteiro: timeline horizontal com linha conectora
- H1: 48px, H2: 32px
```

### Seção 4: Acessibilidade

```markdown
## Acessibilidade (WCAG AA)

- **Contraste:**
  - H1/H2 branco sobre overlay escuro ≥ 7:1
  - Body text cinza 600+ sobre branco ≥ 4.5:1
  
- **Alt text exemplos:**
  - Hero: "Praia do Seixas ao entardecer com farol ao fundo"
  - Cards: "Ícone de relógio indicando duração"
  
- **Focus states:**
  - Button: outline 2px solid (cor contrast)
  - Links: underline + outline
  
- **Sem cor única:**
  - "Incluso" usa ícone + texto, não cor só
```

### Seção 5: Performance

```markdown
## Performance (Alvo < 3s mobile)

- **Imagens:**
  - Hero: Webp 1200x350 (50KB), JPG fallback (80KB)
  - Cards: Webp 400x300 (20KB), lazy-load
  
- **Lazy-load:**
  - Hero: eager (acima do fold)
  - Depoimentos abaixo: loading="lazy"
  
- **Animações:** Fade-in no scroll (CSS, não JS)

- **Fontes:** 1-2 fonts máximo, system-first se possível
```

**Tamanho esperado:** 3-5 páginas markdown, wireframe visual claro, especificações concretas.

## 8. Critério de Qualidade

✅ **Bom UX/UI:** Definiu wireframe claro, mobile-first óbvio, CTA acessível, performance considerada, designer tem tudo que precisa  
❌ **Ruim:** Texto genérico "use boas práticas", não definiu layout específico, designer não sabe por onde começa  

## 9. Próximas Skills na Cadeia

Depois disso:

1. **Designer:** Usa seu wireframe para fazer visual real (cores, tipografia, assets)
2. **`programador-de-site`:** Usa wireframe + design para implementar em Next.js
3. **`seo-local-turismo`:** Otimiza SEO técnico (schema, meta tags, estrutura heading)

---

*Skill v2.0 | Refinada 2026-04-25 | Fase UX/UI Mobile-First + Conversão*
