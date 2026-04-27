# Direção Visual — Homepage Vem Passear em Jampa

**Fonte:** `_conhecimento/branding/referencia-prompt-visual-murillo.md`  
**Versão:** 1.0 | Criado: 2026-04-27  
**Uso:** Alimentar o prompt para Claude Design (ver `prompt-final-claude-design.md`)  

---

## 1. Personalidade Visual da Marca

| Atributo | O Que Significa Visualmente | O Que NÃO É |
|----------|----------------------------|-------------|
| **Local** | Cores e fotos extraídas de JP — litoral paraibano reconhecível | Stock photo genérico, "praia qualquer" |
| **Humano** | Murillo visível, linguagem direta, foto real | Avatar, mascote, corporativo frio |
| **Confiável** | Cadastur e nota 4.9 acima da dobra, layout organizado | Vago, sem credenciais, animações que distraem |
| **Acolhedor** | Paleta quente no acento, espaçamento generoso, copy informal | Comprimido, denso, frio |
| **Claro** | Uma ação por tela, CTA sempre em destaque | Múltiplos CTAs, informação empilhada |

**Teste anti-genérico:** Cubra o nome da empresa. Um turista planejando ir a João Pessoa reconheceria que é sobre Vem Passear em Jampa? Se não → design precisa de mais identidade.

---

## 2. Paleta de Cores

| Nome | Hex | Uso |
|------|-----|-----|
| Primário (Azul Confiança) | `#004E89` | Fundo hero, navbar ativa, faixa prova social, CTA final, footer |
| Destaque (Laranja Ação) | `#FF6B35` | CTA principal, badges, hover state, destaques de preço |
| Branco | `#FFFFFF` | Fundo padrão, texto sobre fundos escuros |
| Cinza Claro (Superfície) | `#F5F5F5` | Seções alternadas, fundo de cards, seção FAQ |
| Texto | `#1A1A1A` | Body, H2, H3 em fundo claro |
| Verde WhatsApp | `#25D366` | Botões WhatsApp exclusivamente — nunca usar para outro fim |

**Regra de uso:** Máximo 3 cores por seção (exceto white + text que são neutros). Laranja e azul nunca lado a lado com peso igual — um é fundo, outro é acento.

**Nota:** O header usa fundo branco + texto azul primário. A faixa de prova social (#3) usa fundo azul primário com texto branco. Seções alternadas entre branco e #F5F5F5.

---

## 3. Tipografia

| Nível | Família | Peso | Mobile | Desktop | Uso |
|-------|---------|------|--------|---------|-----|
| H1 | Lora | Bold (700) | 2rem (32px) | 2.75rem (44px) | Um por página |
| H2 | Lora | SemiBold (600) | 1.5rem (24px) | 2rem (32px) | Título de seção |
| H3 | Inter | SemiBold (600) | 1.125rem (18px) | 1.25rem (20px) | Subtítulo de card |
| Body | Inter | Regular (400) | 1rem (16px) | 1rem (16px) | Textos corridos |
| Caption / Label | Inter | Regular (400) | 0.875rem (14px) | 0.875rem (14px) | Metadados, badges |
| CTA Botão | Inter | Bold (700) | 1rem (16px) | 1rem (16px) | Texto de botão |

**Lora para:** H1 e H2 — autoridade, presença, identidade visual marcante  
**Inter para:** tudo operacional — preços, horários, labels, botões, corpo  
**Não misturar:** Nunca mais de 2 famílias. Nunca fonte decorativa.

---

## 4. Layout e Espaçamento

### Grelha
- Max-width: **1200px**, centralizado
- Padding lateral: **16px** mobile / **32px** tablet / **48px** desktop
- Gutter entre colunas: **24px**

### Espaçamento Vertical
- Entre elementos dentro de uma seção: **16-24px**
- Entre seções: **48px** mobile / **72px** desktop
- Sem "respiração" insuficiente — cada seção precisa de espaço próprio

### Breakpoints
- **Mobile:** 320–767px (design começa aqui)
- **Tablet:** 768–1023px
- **Desktop:** 1024px+

### Grid de Cards
- Mobile: 1 coluna (100% width)
- Tablet: 2 colunas
- Desktop: 3 colunas (último card centralizado se total de 5)

---

## 5. Componentes Principais

### Header
```
Altura: 64px fixo
Fundo: branco (#FFFFFF) + sombra sutil (0 2px 8px rgba(0,0,0,0.08))
Logo: esquerda, altura 36px
Nav: centro, Inter Regular 0.9rem, links #1A1A1A, hover #004E89
Botão WhatsApp: direita, fundo #25D366, texto branco, border-radius 8px, padding 10px 20px
Mobile: nav colapsa em hamburguer, botão WhatsApp permanece visível
```

### Hero
```
Altura: 380px mobile / 480px tablet / 560px desktop
Imagem de fundo: foto real JP (full cover, object-fit: cover)
Overlay: #004E89 com opacity 0.38 (mantém foto visível mas garante legibilidade)
H1: Lora Bold, branco, centrado mobile / alinhado esquerda desktop
Subtítulo: Inter Regular, rgba(255,255,255,0.9), font-size 1rem
CTA Primário: fundo #FF6B35, texto branco, padding 14px 28px, border-radius 8px, texto "Ver Passeios"
CTA Secundário: borda branca, texto branco, padding 14px 28px, border-radius 8px, "Falar com Murillo"
Mobile: CTAs full-width empilhados com gap 12px
Desktop: CTAs side by side com gap 16px
```

### Faixa de Prova Social
```
Fundo: #004E89
Padding: 24px mobile / 32px desktop
3 colunas (desktop) / 1 coluna (mobile)
Cada coluna: número grande (Inter Bold, 2rem, branco) + label pequeno (Inter Regular, 0.85rem, rgba(255,255,255,0.8))
Divisor entre colunas (desktop): linha vertical rgba(255,255,255,0.2)
```

### Card de Passeio
```
Fundo: branco
Border-radius: 12px
Sombra: 0 2px 12px rgba(0,0,0,0.08)
Hover (desktop): sombra aumenta para 0 4px 20px rgba(0,78,137,0.15)
Imagem: 200px altura, object-fit: cover, border-radius 12px 12px 0 0
Padding interno: 16px
Badge categoria: pill superior esquerdo, fundo #004E89, texto branco, 0.75rem
Nome: H3 Inter SemiBold #1A1A1A, máx 2 linhas
Preço: Inter Bold #FF6B35, 1.25rem
Duração: Inter Regular #666, 0.875rem
CTA: "Ver passeio →", #004E89, sem botão — link texto com hover underline
Mobile: card 100% width, imagem 180px
```

### Botão Primário (CTA Laranja)
```
Fundo: #FF6B35
Texto: branco, Inter Bold 1rem
Padding: 14px 28px (mínimo 44px altura)
Border-radius: 8px
Hover: #E55A24 (10% mais escuro)
Focus: outline 3px solid #FF6B35 com offset 2px
Active: escurece 15%
Full-width no mobile
```

### Botão WhatsApp
```
Fundo: #25D366
Texto: branco, Inter Bold 1rem
Ícone WhatsApp: SVG branco, 20px, à esquerda do texto
Padding: 14px 28px (mínimo 44px altura)
Border-radius: 8px
Hover: #1EA856
Mobile: full-width (100%)
```

### Accordion (FAQ)
```
Fundo: #F5F5F5 (seção) / branco (cada item)
Item: padding 20px 24px, border-bottom 1px solid #E5E5E5
Pergunta: Inter SemiBold 1rem #1A1A1A
Ícone: chevron rotaciona 180° ao abrir
Resposta: Inter Regular 0.9rem #4A4A4A, max-height animado
Animação: ease-in-out 200ms
```

### ProximaSaidaCard (Bloco 7)
```
Fundo: branco
Border: 2px solid (VERDE #22C55E se boa / AMARELO #F59E0B se consultar / CINZA #D1D5DB se sem dado)
Border-radius: 12px
Padding: 20px
Topo: badge status (Boa / Consultar / Sem saídas disponíveis)
Nome passeio: Inter SemiBold #1A1A1A
Data/hora: Inter Bold #004E89 (quando disponível) ou "Consulte próximas saídas"
Preço: Inter Regular #666
CTA: link WhatsApp (cinza) ou "Ver saída no calendário" (azul)
```

---

## 6. Hierarquia Visual por Bloco

| Bloco | O Que o Olho Vê Primeiro | Segundo | Terceiro |
|-------|--------------------------|---------|----------|
| Hero | H1 (Lora Bold branco) | CTA laranja | Subtítulo |
| Prova Social | Número grande (4.9) | Label | Ícone |
| Cards | Imagem | Nome + preço | CTA |
| Como Reservar | Ícone + número do passo | Título do passo | Corpo |
| Diferenciais | Ícone + título | Corpo | Foto Murillo |
| FAQ | Pergunta | Ícone expand | Resposta (hidden) |
| CTA Final | Texto principal | Botão WhatsApp | Subtexto |

---

## 7. Mobile-First — Regras Invioláveis

- Todos os botões: **mínimo 44px** de altura e largura para toque
- Texto body: **nunca abaixo de 16px** (0.875rem só para labels/captions)
- CTAs no mobile: **100% width** em contextos de ação principal
- Nenhum elemento horizontal que precise de scroll horizontal
- Imagens: **100% width**, nunca overflow, sempre aspect-ratio preservado
- Espaçamento: **nunca abaixo de 16px** entre elementos tocáveis
- Hero no mobile: **H1 em 2 linhas máximo**, subtítulo em 3 linhas máximo

---

## 8. Imagens e Placeholders

| Bloco | Imagem Necessária | Status | Dimensão ideal |
|-------|------------------|--------|----------------|
| Hero | Foto panorâmica JP (piscinas ou areia branca) | [CONFIRMAR COM MURILLO] | 1440×560px |
| Card Seixas | Piscinas naturais, corais, água cristalina | [CONFIRMAR COM MURILLO] | 640×360px |
| Card Areia Vermelha | Banco de areia com água esmeralda | [CONFIRMAR COM MURILLO] | 640×360px |
| Card Litoral Sul | Praia de Gramame ou Coqueirinho | [CONFIRMAR COM MURILLO] | 640×360px |
| Card Picãozinho | Recife com peixes coloridos | [CONFIRMAR COM MURILLO] | 640×360px |
| Card Pôr do Sol Jacaré | Pôr do sol no Rio Paraíba | [CONFIRMAR COM MURILLO] | 640×360px |
| Foto Murillo (Bloco 6) | Foto profissional, sorrindo, ao ar livre | [CONFIRMAR COM MURILLO] | 480×480px (quadrado) |

**Regra para placeholders:** Claude Design pode usar placeholders de cor sólida (azul claro ou gradiente) enquanto fotos reais não chegam. A estrutura do layout não muda quando a foto for inserida.

---

## 9. Animações e Interatividade

- **Scroll animations:** Fade-in suave (200ms, ease-out) para seções abaixo do fold
- **Hover em cards:** sombra aumenta (200ms, ease)
- **Accordion FAQ:** max-height animado (200ms, ease-in-out)
- **Botões:** escurecimento de cor no hover (150ms)
- **Proibido:** parallax pesado, animações com > 400ms, transições que movem layout

**Regra de performance:** Nenhuma animação deve fazer o CLS (Cumulative Layout Shift) aumentar. Sempre reservar espaço para imagens com aspect-ratio explícito.

---

*Versão: 1.0 | Criado: 2026-04-27 | Fonte: `referencia-prompt-visual-murillo.md`*
