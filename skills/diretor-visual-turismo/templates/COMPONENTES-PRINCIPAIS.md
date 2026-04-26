# Componentes Principais — Especificação Visual

**Uso:** Template de especificação para designer criar em Figma  
**Mantido por:** Diretor Visual de Turismo  
**Atualizado:** 2026-04-25

---

## 1. Hero Block (Componente)

### Responsabilidade

Responder a pergunta principal do turista em <2 segundos:
**"O que posso fazer em João Pessoa agora?"**

### Estrutura

```
┌────────────────────────────────────────────────────┐
│ [Background: Gradiente azul → branco OU foto]    │
│                                                    │
│                                                    │
│           O Que Fazer em João Pessoa?             │
│           (H1, 2.5rem mobile, 3.5rem desktop)    │
│                                                    │
│           Descubra praias incríveis, piscinas    │
│           naturais e experiências que você        │
│           nunca esquecerá. A gente conhece        │
│           cada canto e quer te ajudar.            │
│           (body, 1rem, max 3 linhas)              │
│                                                    │
│          [💬 Vamos Montar Seu Passeio]           │
│          (botão 44px altura, verde WhatsApp)     │
│                                                    │
└────────────────────────────────────────────────────┘

Height: 400px mobile, 500px desktop (não gigante)
Padding: 24px mobile, 48px desktop (respira)
```

### Especificação Detalhada

| Propriedade | Mobile | Desktop | Notas |
|-------------|--------|---------|-------|
| **Height** | 400px | 500px | Proporcional ao viewport |
| **Background** | Gradiente #0066CC → #FFFFFF | Idem | Top: azul, bottom: branco |
| **H1 Font Size** | 2.5rem (40px) | 3.5rem (56px) | Bold, sem serifa |
| **H1 Color** | #FFFFFF em área azul | Idem | Alto contraste |
| **H1 Line Height** | 1.2 | 1.2 | Compacto, destaque |
| **Subtitle Font Size** | 1rem | 1.125rem | Regular, não bold |
| **Subtitle Color** | rgba(255,255,255,0.9) | Idem | Levemente transparente |
| **Subtitle Max Width** | 90vw | 600px | Confortável ler |
| **Button Height** | 44px | 50px | Thumb-friendly |
| **Button Width** | 90% | auto | Mobile: full width, desktop: auto |
| **Button Padding** | 12px 24px | 14px 32px | Interno |
| **Button Font Size** | 1rem | 1.125rem | Bold |
| **Button Color** | #FFFFFF texto, #25D366 fundo | Idem | Verde WhatsApp |
| **Button Hover** | Escurece 10% | Idem | #1e9c51 (darker green) |
| **Button Radius** | 6px | 6px | Suave |

### Estados

- **Default:** Mostrado
- **Hover (desktop):** Botão escurece
- **Ativo:** Após clique, cor muda feedback

### Responsividade

- **Mobile (≤425px):** Coluna única, padding reduzido
- **Tablet (425-768px):** Coluna única ainda
- **Desktop (>768px):** Pode ter 2 colunas (imagem + texto) se houver foto

### Acessibilidade

- [ ] H1 semanticamente H1 (não div com classe "h1")
- [ ] Botão é `<button>` ou `<a>` com role="button"
- [ ] Alt text em imagem de fundo (se for foto)
- [ ] Contraste branco em azul: 4.5:1 ✅

---

## 2. Card de Passeio (Componente)

### Responsabilidade

Mostrar passeio em uma olhada:
**Nome | Foto | Descrição curta | Preço | Duração**

### Estrutura

```
┌─────────────────────┐
│  ┌───────────────┐  │
│  │   🌊 [IMG]    │  │ ← 16:9, 300×180
│  └───────────────┘  │
│                     │
│ Seixas              │ ← H3, 1.25rem
│                     │
│ Piscinas naturais   │ ← Body, 1rem, cinza
│ com peixinhos...    │   (2 linhas max)
│                     │
│ Preço:    R$ 60     │ ← Small, grid 2 col
│ Duração:  3h        │
│                     │
└─────────────────────┘
```

### Especificação Detalhada

| Propriedade | Valor | Notas |
|-------------|-------|-------|
| **Width** | 300px (desktop), 100% (mobile) | Responsivo |
| **Height** | auto | Cresce conforme conteúdo |
| **Border** | 1px solid #CCCCCC | Cinza leve |
| **Border Radius** | 8px | Suave |
| **Shadow** | none | Default |
| **Shadow Hover** | 0 4px 12px rgba(0,0,0,0.1) | Leve |
| **Image Aspect Ratio** | 16:9 | 300×180px |
| **Image Object Fit** | cover | Não distorce |
| **Image Height** | 180px | Fixo |
| **Padding Internal** | 24px | Respira |
| **Padding Bottom Extra** | 8px | Último item respira |
| **H3 Font Size** | 1.25rem | Semibold |
| **H3 Color** | #1a1a1a | Preto |
| **H3 Line Height** | 1.4 | 2 linhas max |
| **H3 Hover** | #0066CC | Azul (visual feedback) |
| **Description Font Size** | 1rem | Regular |
| **Description Color** | #666666 | Cinza médio |
| **Description Line Height** | 1.5 | Legível |
| **Description Line Clamp** | 2 | CSS: line-clamp: 2 |
| **Detail Grid** | 2 columns | Preço | Duração |
| **Detail Font Size** | 0.875rem | Small |
| **Detail Label Color** | #999999 | Cinza claro |
| **Detail Value Color** | #0066CC | Azul (destaque) |
| **Detail Value Font** | bold | Destaque |

### Estados

- **Default:** Border cinza, sem sombra
- **Hover:** Sombra aumenta, H3 vira azul, cursor pointer
- **Active/Focus:** Outline azul, 2px

### Responsividade

- **Mobile:** 100% width, margem 8px ao redor
- **Tablet:** Grid 2 colunas
- **Desktop:** Grid 3 colunas, 300px width

### Acessibilidade

- [ ] Card é `<Link>` ou `<a>` (clickable)
- [ ] Alt text em imagem: "Seixas, passeio em João Pessoa"
- [ ] Contraste texto em fundo: 4.5:1 ✅

---

## 3. Seção de Confiança (Componente)

### Responsabilidade

Responder em <3s: **"Essa empresa é legítima? Gente avaliou?"**

### Estrutura

```
DESKTOP (3 colunas):
┌──────────────────────────────────────────────────┐
│ [Fundo dark #1a1a1a, texto white]                │
│                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────┐ │
│  │    4.9/5    │  │  Cadastur   │  │ Murillo │ │
│  │  ⭐⭐⭐⭐⭐  │  │ 52.077.577  │  │ Especia-│ │
│  │ 150+ avaliações │  │ Ativo 2026  │  │lista local │ │
│  │ verificadas │  │   Governo   │  │ de JP   │ │
│  └─────────────┘  └─────────────┘  └─────────┘ │
│                                                  │
└──────────────────────────────────────────────────┘

MOBILE (1 coluna, stacked):
┌──────────────────────────────────────────────────┐
│ [Fundo dark]                                     │
│                                                  │
│        4.9/5 ⭐⭐⭐⭐⭐                           │
│   150+ avaliações verificadas                    │
│                                                  │
│        Cadastur 52.077.577                       │
│        Ativo até dez/2026                        │
│                                                  │
│        Murillo — Especialista local de JP        │
│                                                  │
└──────────────────────────────────────────────────┘
```

### Especificação Detalhada

| Propriedade | Valor | Notas |
|-------------|-------|-------|
| **Background Color** | #1a1a1a | Dark (não preto puro) |
| **Padding** | 40px 24px (mobile), 60px 48px (desktop) | Respira |
| **Grid Desktop** | 3 columns, equal width | Não desigual |
| **Grid Mobile** | 1 column, stacked | Vertical |
| **Gap** | 24px desktop, 32px mobile | Espaço entre |
| **Text Color** | #FFFFFF | Branco |
| **Number Font Size** | 3rem | Grande |
| **Number Font** | bold | Destaque |
| **Number Color** | #0066CC | Azul primária |
| **Label Font Size** | 1rem | Regular |
| **Label Font** | regular | Normal |
| **Label Color** | #FFFFFF | Branco |
| **Small Text Font Size** | 0.875rem | Pequeno |
| **Small Text Color** | rgba(255,255,255,0.8) | Branco com transparência |
| **Each Column Text Align** | center | Centralizado |
| **Min Height Per Column** | 200px | Balanced |

### Variações

**Versão com Ícones:**
```
🏛️ Cadastur 52.077.577
⭐ 4.9/5 — 150+ avaliações
👤 Murillo — Especialista Local
```

**Sem Ícones (Minimalista):**
```
Cadastur 52.077.577
4.9/5 — 150+ avaliações
Murillo — Especialista Local
```

### Acessibilidade

- [ ] Números têm labels descritivos
- [ ] Contraste branco em dark: 12.6:1 ✅
- [ ] Semântica: `<section>` com heading

---

## 4. CTA Button (Componente)

### Responsabilidade

Gatilho de conversão.
**Uma coisa: leva turista do site para WhatsApp de Murillo**

### Estrutura

```
[Texto contextual acima]
"Vamos montar o passeio que você sonha"

[BOTÃO AQUI]
"💬 Reservar no WhatsApp"
```

### Especificação Detalhada

| Propriedade | Valor | Notas |
|-------------|-------|-------|
| **Element** | `<a href="https://wa.me/...">` | Link para WhatsApp |
| **Display** | inline-block ou button | Semântica |
| **Height** | 44px minimum | Thumb-friendly |
| **Width** | 100% (mobile), auto (desktop) | Responsivo |
| **Min Width** | 120px | Não muito pequeno |
| **Max Width** | 300px | Não gigante em desktop |
| **Padding** | 12px 24px | Interno |
| **Background Color** | #25D366 | Verde WhatsApp |
| **Text Color** | #FFFFFF | Branco |
| **Font Size** | 1rem | Legível |
| **Font Weight** | bold | Destaque |
| **Text Transform** | none | Não ALL CAPS |
| **Border Radius** | 6px | Suave |
| **Border** | none | Limpo |
| **Cursor** | pointer | Feedback |
| **Hover Color** | #1e9c51 | Mais escuro 10% |
| **Hover State** | Escurece + sombra leve | Visual feedback |
| **Focus Color** | #0066CC outline 2px | Acessibilidade |
| **Active/Pressed** | Escurece 15% | Feedback imediato |
| **Icon (Emoji)** | 💬 antes do texto | Contextual |
| **Icon Spacing** | 8px entre emoji e texto | Respira |
| **Transition** | all 200ms ease | Smooth |

### Contexto Obrigatório

**Antes do botão, SEMPRE:**
```html
<p>Vamos montar o passeio que você sonha.</p>
<button class="btn-primary">💬 Reservar no WhatsApp</button>
```

**Sem contexto acima = CTA órfão = conversão cai**

### Href Correto

```html
href="https://wa.me/5583990878330?text=Oi!%20Quero%20agendar%20um%20passeio%20em%20João%20Pessoa"
target="_blank"
rel="noopener noreferrer"
```

### Acessibilidade

- [ ] Button semanticamente `<button>` ou `<a role="button">`
- [ ] Label descritivo: "Reservar no WhatsApp" (não "OK")
- [ ] Focus state visível: outline 2px azul
- [ ] Teclado funciona: Enter/Space ativa

---

## 5. Accordion / FAQ Item (Componente)

### Responsabilidade

Responder perguntas comuns sem sobrecarregar página visualmente.
Expandível para resposta completa.

### Estrutura (Closed)

```
┌────────────────────────────────────────────┐
│ ▼ Como faço para reservar um passeio?      │
└────────────────────────────────────────────┘
```

### Estrutura (Expanded)

```
┌────────────────────────────────────────────┐
│ ▼ Como faço para reservar um passeio?      │
├────────────────────────────────────────────┤
│                                            │
│ Mande uma mensagem no WhatsApp para        │
│ Murillo. Ele vai entender seu perfil       │
│ e indicar o melhor roteiro pra você.       │
│                                            │
└────────────────────────────────────────────┘
```

### Especificação Detalhada

| Propriedade | Valor | Notas |
|-------------|-------|-------|
| **Background Closed** | #FFFFFF | Branco |
| **Background Expanded** | rgba(0,102,204,0.05) | Azul muito sutil |
| **Border** | 1px solid #CCCCCC | Cinza leve |
| **Border Radius** | 6px | Suave |
| **Padding** | 20px 24px | Respira |
| **Margin Bottom** | 12px | Gap entre items |
| **Question Font Size** | 1.125rem | Semibold |
| **Question Color** | #1a1a1a | Preto |
| **Question Hover** | #0066CC | Azul (feedback) |
| **Chevron Icon** | ▼ ou → | Rotaciona ao expandir |
| **Chevron Size** | 20px | Visível |
| **Chevron Rotation Closed** | 0deg | Aponta para baixo (ou direita) |
| **Chevron Rotation Expanded** | 180deg | Aponta para cima (ou baixo) |
| **Answer Font Size** | 1rem | Regular |
| **Answer Color** | #666666 | Cinza médio |
| **Answer Line Height** | 1.6 | Legível |
| **Answer Padding Top** | 16px | Espaço acima resposta |
| **Separator** | 1px #CCCCCC | Entre Q e A |
| **Animation Duration** | 200ms | Smooth |
| **Animation Easing** | ease | Natural |

### Comportamento

- **Inicialmente:** Todos fechados (salvo primeira na home)
- **Clicável:** A pergunta inteira é clicável (não só o ícone)
- **Multiple Open:** Múltiplos podem estar abertos OR um por vez (decide por padrão)
- **Smooth Expand:** Altura anima de 0 para auto (não instant)

### Acessibilidade

- [ ] Botão expandir é `<button>` com aria-expanded
- [ ] aria-controls aponta para conteúdo
- [ ] Contraste pergunta: 4.5:1 ✅
- [ ] Keyboard: Tab + Enter/Space abre

---

## 6. Footer (Componente)

### Responsabilidade

Informação de contato + Links secundários + Copyright

### Estrutura

```
DESKTOP (3 colunas):
┌────────────────────────────────────────────────┐
│ [Fundo dark #1a1a1a, texto white]              │
│                                                │
│ BRAND | NAVIGATION | CONTACT                   │
│ Vem Passear... | • Home | Murillo             │
│ Agência em JP | • Passeios | 83 99087-830     │
│               | • Sobre | Instagram           │
│               | • Blog | Google Maps          │
│                                                │
├────────────────────────────────────────────────┤
│ © 2026 | Cadastur 52.077... | Válido até 2026 │
└────────────────────────────────────────────────┘

MOBILE (1 coluna):
┌────────────────────────────────────────────────┐
│ Vem Passear em Jampa                           │
│ Agência em João Pessoa...                      │
│                                                │
│ NAVEGAÇÃO                                      │
│ • Home | • Passeios | • Sobre | • Blog        │
│                                                │
│ CONTATO                                        │
│ Murillo                                        │
│ João Pessoa, PB                                │
│ 83 99087-830 (WhatsApp)                        │
│ Instagram / Google Maps                        │
│                                                │
│ © 2026 Vem Passear em Jampa                    │
│ Cadastur 52.077.577 — Válido até dez/2026     │
└────────────────────────────────────────────────┘
```

### Especificação Detalhada

| Propriedade | Valor | Notas |
|-------------|-------|-------|
| **Background** | #1a1a1a | Dark |
| **Padding** | 40px 24px (mobile), 60px 48px (desktop) | Respira |
| **Grid Desktop** | 3 columns | Brand | Nav | Contact |
| **Grid Mobile** | 1 column, stacked | Vertical |
| **Gap** | 40px | Espaço entre colunas |
| **Text Color** | #FFFFFF | Branco |
| **Secondary Text Color** | rgba(255,255,255,0.7) | Branco 70% transparente |
| **Link Color** | #FFFFFF | Branco, underline on hover |
| **Link Hover Color** | #0066CC | Azul primária |
| **H4 Font Size** | 1.125rem | Semibold |
| **Body Font Size** | 1rem | Regular |
| **Small Font Size** | 0.875rem | Copyright, info |
| **Border Top** | 1px #333333 | Cinza muito escuro |
| **Border Top Padding** | 24px top | Espaço acima border |
| **Bottom Bar Padding** | 24px top | Espaço logo abaixo border |
| **Bottom Bar Text Align** | space-between | Flex justify |

### Acessibilidade

- [ ] Links têm labels claros
- [ ] Contraste branco em dark: 12.6:1 ✅
- [ ] Email/WhatsApp são `<a href="mailto:/wa.me">`
- [ ] Headings semânticas em footer

---

## Resumo Rápido

| Componente | Quando Usar | Key Prop |
|-----------|------------|----------|
| Hero | Topo de página | H1 claro, CTA botão |
| Card | Lista de passeios | 300px, 16:9 imagem, preço destaque |
| Trust | Home, seções críticas | 3 col desktop, dark bg, números grandes |
| CTA Button | Multiple vezes | 44px mín, verde, contexto acima |
| Accordion | FAQ, detalhes | Expand 200ms, chevron rotaciona |
| Footer | Topo do rodapé | Dark, 3 col desktop, contato claro |

---

**Templates mantidos por:** Diretor Visual de Turismo  
**Última atualização:** 2026-04-25  
**Próxima atualização:** Quando novo componente for necessário
