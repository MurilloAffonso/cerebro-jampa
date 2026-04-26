
# Skill: Briefing Designer

## 1. Função

Traduzir página aprovada (copy + estrutura UX) em **briefing estruturado e acionável** para designer, detalhando objetivo, persona, comportamentos esperados, blocos visuais, referências, requisitos mobile-first e restrições de design.

Você não faz design (cores, tipografia, logo). Você **documenta a intenção** para que designer execute com autonomia.

## 2. Quando Usar

✅ Página foi aprovada textualmente (copy + wireframe UX) e designer precisa especificação  
✅ Quer alinhamento visual entre múltiplas páginas  
✅ Precisa comunicar requisitos UX/UI mobile-first ao designer  
✅ Novo designer chegando no projeto  
✅ Retomando design de página inacabado  

## 3. Quando NÃO Usar

❌ Para definir conteúdo/copy (use `copywriter-vendas`)  
❌ Para arquitetura de site (use `estrategista-de-site`)  
❌ Para otimização SEO (use `seo-local-turismo`)  
❌ Para escolher cores/tipografia/logo final (designer lidera)  

## 4. Entradas Necessárias

Antes de começar, tenha:

- **Página markdown aprovada:** Copy final, estrutura de headings, blocos lógicos (já passou por Copywriter + UX/UI)
- **Objetivo principal:** Vender passeio? Educar? Construir confiança? Coletar email?
- **Persona:** Quem é o usuário? (idade, contexto, dispositivo primário)
- **Comportamento esperado:** O que turista faz ao final? (clica CTA, lê depoimento, compartilha?)
- **Referências visuais (opcional):** "Parece com site X", "cores quentes como Y", "tipografia como Z"
- **Restrições:** "Sem vídeo", "mobile-only fase 1", "sem animações pesadas"

## 5. Processo

### Etapa 1: Mapear Blocos Lógicos

Leia página markdown inteira. Identifique blocos naturais:

**Exemplo página passeio:**
1. Hero (imagem + H1)
2. Breadcrumb (navegação)
3. Info Card (preço, duração, saída)
4. Lead + Descrição
5. "O Que Está Incluso"
6. Roteiro/Timeline
7. FAQ
8. Depoimentos
9. CTA Final
10. Footer

**Regra:** Cada bloco é uma "seção" visual. Designer vai desenhar cada uma.

### Etapa 2: Definir Objetivo + Persona

**Objetivo:** Uma frase clara.

❌ "Página de passeio"  
✅ "Converter turista chegando em JP em agendamento de snorkel em Seixas"

❌ "Informar sobre praia"  
✅ "Quebrar objeção 'nunca mergulhei' e gerar confiança em pegar equipamento pela primeira vez"

**Persona:** Quem usa isto?

❌ "Turista"  
✅ "Casal 30-40 anos, primeira vez em JP, chegou de avião, tem 2 dias livres, quer praia diferente, nunca fez snorkel"

### Etapa 3: Especificar Wireframe Textual

Para cada bloco, descreva visualmente:

**Não é design, é intenção.** Exemplo:

```markdown
### 1. Hero
- Full-width imagem Seixas ao entardecer
- Overlay escuro (60% opacidade) para legibilidade
- H1 branco, grande (visual prominence)
- Subtitle cinza claro
- Button primário (laranja) com WhatsApp icon
- Total altura: 350px mobile, 500px tablet, 600px desktop

### 2. Info Card
- Vem logo após hero
- 3 informações em grid: Preço | Duração | Saída
- Cada uma: ícone + valor (bold) + label (small)
- Background claro (contraste com hero)
- Padding e spacing generoso (não apertado)

### 3. Descrição
- Max-width 800px centrado (legibilidade)
- Tipografia: lead em bold, corpo em regular
- Espaçamento entre parágrafos: generoso (respiro visual)
- Sem imagens inline (apenas abaixo se apoio)
```

### Etapa 4: Especificar Comportamentos Interativos

Para cada elemento interativo da página, defina estados:

**Buttons (primária/secundária):**
- Estado default: como aparece
- Estado hover: feedback visual (desktop)
- Estado focus: outline claro (accessibility)
- Estado active: visual ao clicar

**Exemplo:**
```
Button Primário (Agendar no WhatsApp)
- Default: fundo laranja, texto branco
- Hover: laranja mais escuro (desktop)
- Focus: outline 2px
- Active: escurece ainda mais
```

**Cards interativas (passeio em home):**
- Feedback ao hover (lightbox, sombra, zoom?)
- Clica em qualquer lugar do card ou só no link?

**Accordion (FAQ):**
- Ícone muda ao abrir/fechar?
- Animação (fade, slide)?
- Pode abrir múltiplas ou só uma por vez?

**Regra:** Interatividade deve apoiar conversão, não distrair. Evitar animações pesadas que prejudiquem performance mobile.

### Etapa 5: Especificar Responsividade

3 layouts: Mobile, Tablet, Desktop

**Mobile (320px-768px):**
- Todos blocos 100% - 16px padding
- Imagens 100%
- Grid 1-col
- Buttons full-width
- Tipografia menor

**Tablet (769px-1024px):**
- Max-width 90% centrado
- Grid 2-col onde fizer sentido
- Imagens responsive

**Desktop (1025px+):**
- Max-width 1200px
- Grid 3-col onde fizer sentido
- Tipografia maior (melhor legibilidade tela grande)

### Etapa 6: Requisitos de Acessibilidade

Comunique esperados (designer valida e implementa):

- Contraste mínimo WCAG AA (4.5:1 body, 7:1 titles)
- Focus states claros em buttons
- Alt text em imagens (coloca você, não designer)
- Sem cor como único indicador
- Touch targets ≥ 44px

### Etapa 7: Requisitos de Performance

Oriente otimizações:

- Imagens otimizadas (Webp + fallback)
- Lazy-load em imagens abaixo do fold
- Animações leves (CSS, não JS pesado)
- Fontes: máximo 2, carregadas eficientemente
- Sem videos auto-play

### Etapa 8: Referências e Restrições

Se tem:

**Referências:**
- "Inspirar em site X para cards"
- "Tipografia quente/humana, não corporativa"
- "Cores naturais de João Pessoa (azul mar, areia)"

**Restrições:**
- "Sem vídeo na fase 1"
- "Mobile-only na fase 1 (desktop desktop depois)"
- "Sem animações complexas (só fade-in)"
- "Dentro da brand guideline existente (ou cria novo)"

## 6. Regras Específicas

- **Briefing é acionável:** Designer lê uma vez, entende o que fazer, não precisa perguntar
- **Específico > Genérico:** "Use cores quentes" ❌ vs "Use paleta de azul-mar e areia, tom quente mas sereno" ✅
- **Contexto de João Pessoa:** Mencione se design deve evocar local (praia, sol, norte)
- **Conversão guia design:** Se objetivo é vender, design destaca CTA, não mascara
- **Prova de confiança visível:** Rating, Cadastur, depoimento devem estar em posição visual de destaque
- **Sem presunção:** Designer pode sugerir ajustes; você aprova/rejeita, não impõe visual

## 7. Saída Esperada

Um arquivo markdown com **mínimo** 6 seções:

### Seção 1: Executive Summary

```markdown
## Briefing Visual — Página Seixas

**Objetivo:** Converter turista chegando em JP em agendamento de snorkel

**Persona:** Casal 30-45, primeira vez em JP, 2 dias livres, quer praia diferente, nunca fez snorkel

**Ação esperada:** Turista lê page, quer agendar, clica WhatsApp e fala com Murillo

**Prazo:** 1-2 semanas
```

### Seção 2: Especificação de Blocos

```markdown
## Blocos Visuais

### 1. Hero
- Background: Seixas ao entardecer (imagem real)
- Overlay: gradiente escuro 60% opacidade
- Conteúdo: H1 branco 32px (mobile), breadcrumb cinza 12px
- Button primário (laranja) 44px, "Agendar Passeio" com WhatsApp icon
- Altura: 350px (mobile), 500px (tablet), 600px (desktop)
- Comportamento: Button sticky quando scroll? Não, hero é curto

### 2. Info Card
- 3 colunas: Preço (R$XXX) | Duração (2h) | Saída (10h)
- Cada célula: ícone 32px + valor bold + label gray
- Background: light-gray ou white (contrast com hero dark)
- Padding: 24px (mobile), 32px (tablet)

[... continua para cada bloco ...]
```

### Seção 3: Wireframe ASCII

```
┌──────────────────────────┐
│   Hero 350px             │
│ [Foto + H1 + Button]     │
└──────────────────────────┘
┌──────────────────────────┐
│ Breadcrumb 40px          │
└──────────────────────────┘
┌──────────────────────────┐
│ Info Card 120px          │
│ Preço | Duracao | Saida  │
└──────────────────────────┘
┌──────────────────────────┐
│ Descrição 200px          │
│ Lead + 2 parágrafos      │
└──────────────────────────┘
[... etc ...]
```

### Seção 4: Componentes Reutilizáveis

```markdown
## Design System

### Button Primary (CTA)
- Background: laranja primary (#FFA500 ou marca)
- Texto: branco, 16px bold
- Altura: 44px mínimo
- Padding: 12px 24px
- Border-radius: 4px
- Icon: WhatsApp 20px esquerda
- Hover: Escurece 10%
- Mobile: full-width
- Desktop: auto-width

### Card Passeio (Home)
- Layout: imagem (300x200) + overlay + título branco + preço + CTA
- Hover: imagem zoom 5%, overlay mais escuro
- Mobile: full-width, 2-col em tablet
- Texto: H3 20px branco, preço 16px cinza, CTA button pequeno

[... componentes usados em múltiplas páginas ...]
```

### Seção 5: Responsividade

```markdown
## Breakpoints

### Mobile (320px-768px)
- Full-width blocos (100% - 16px padding)
- Tipografia: H1 32px, H2 24px, body 16px
- Grids: 1-col ou 2-col max
- Images: 100% responsivo
- Buttons: full-width ou auto (se caber)

### Tablet (769px-1024px)
- Max-width 90% centrado
- Tipografia: H1 40px, H2 28px, body 16px
- Grids: 2-col onde possível
- Info Card: 3-col em vez de stack

### Desktop (1025px+)
- Max-width 1200px centrado
- Tipografia: H1 48px, H2 32px, body 16px
- Grids: 3-col onde possível
- Info Card: 4-col (preço, duração, saída, inclusões)
```

### Seção 6: Restrições + Referências

```markdown
## Restrições

- Sem vídeo na Fase 1
- Sem animações complexas (fade-in ok, parallax não)
- Mobile-first (depois escala para desktop)
- Dentro brand guidelines (ou criar novo se não houver)

## Referências Visuais

- **Inspiração de cards:** Site X (cleanliness, spacing)
- **Tom de cores:** Paleta natural (azul-mar, areia, verde-floresta)
- **Tipografia:** Sem-serifa humana (não corporativa), ex: Inter, Poppins
- **Fotografia:** Real, não stock photos genéricas

## Notas para Designer

- Confiança é visual: mostra rating/Cadastur/depoimento em posição clara
- Conversão é visual: CTA é destaque, não escondido
- Mobile-first: comportamento OK no phone, depois expande para tablet/desktop
- Teste em mobile real (não só DevTools)
```

**Tamanho esperado:** 4-6 páginas markdown (resumo + blocos + wireframe + componentes + responsividade + restrições).

## 8. Critério de Qualidade

✅ **Bom briefing:** Designer lê, entende propósito, sabe quais componentes usar, como responsivo fica, aprova sem dúvida  
❌ **Ruim:** Briefing genérico ("faça um design legal"), designer precisa perguntar tudo, propósito não é claro  

## 9. Próximas Skills na Cadeia

Depois disso:

1. **Designer:** Usa briefing para fazer design real (Figma, etc)
2. **`programador-de-site`:** Usa design + briefing para implementar em Next.js
3. **QA/Testing:** Valida que visual ficou conforme especificação

---

*Skill v2.0 | Refinada 2026-04-25 | Fase Briefing Visual*
