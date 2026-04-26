# Padrões Visuais — Vem Passear Jampa

**Referência:** Biblioteca de padrões visuais aprovados para cada tipo de página/seção  
**Mantido por:** Diretor Visual de Turismo  
**Atualizado:** 2026-04-25

---

## 1. Padrão: Home Page (Full Page)

### Estrutura Visual Completa

```
┌─────────────────────────────────────────────────────┐
│ HEADER                                              │
│ [VP Logo] [Nav] [🌊 WhatsApp]                       │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ HERO SECTION (400px mobile, 500px desktop)          │
│ Fundo: Gradiente azul → branco                      │
│                                                     │
│     "O Que Fazer em João Pessoa?"                   │
│                                                     │
│   Descubra praias incríveis, piscinas               │
│   naturais e experiências que você                  │
│   nunca esquecerá.                                  │
│                                                     │
│        [💬 Vamos Montar Seu Passeio]               │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ PROVA SOCIAL (Dark background #1a1a1a)             │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │  4.9/5   │  │ Cadastur │  │  Murillo │          │
│  │ 150+     │  │52.077... │  │ Espe-    │          │
│  │Reviews   │  │ Ativo    │  │cialista  │          │
│  └──────────┘  └──────────┘  └──────────┘          │
│                                                     │
│  [Mobile: stacked vertical]                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ FEATURED TOURS SECTION (Padding 60px top/bottom)   │
│                                                     │
│   "Passeios em Destaque"                            │
│                                                     │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐       │
│  │ [🌊 IMG]  │  │ [🌊 IMG]  │  │ [🌊 IMG]  │       │
│  │ Seixas    │  │ Areia     │  │ Litoral   │       │
│  │ Descrição │  │ Vermelha  │  │ Sul       │       │
│  │ R$60      │  │ Descrição │  │ Descrição │       │
│  │ 3h        │  │ R$80      │  │ R$100     │       │
│  └───────────┘  └───────────┘  └───────────┘       │
│                                                     │
│  [Mobile: 1 coluna, stacked]                       │
│  [Card width: 300px desktop, 100% mobile]          │
│                                                     │
│  2-3 cards adicionais em carrossel ou              │
│  grid continuado                                    │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ TESTIMONIAL (Light background #F5F5F5)             │
│                                                     │
│  "Não conhecíamos nada de João Pessoa e            │
│   Murillo nos guiou para os melhores               │
│   passeios. Voltamos apaixonados..."               │
│                                                     │
│              — Marina & Carlos (SP)                 │
│              Após Litoral Sul + Piscinas            │
│                                                     │
│  [Itálico, tipografia destaque]                    │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ FAQ ACCORDION (White background)                    │
│                                                     │
│   "Dúvidas Frequentes"                              │
│                                                     │
│   ▼ Como faço para reservar?                        │
│     Mande mensagem no WhatsApp...                  │
│                                                     │
│   ► Qual a melhor época?                            │
│   ► E se chover?                                    │
│   ► Pode levar criança?                            │
│   ► Qual o mais barato?                            │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ CTA FINAL (Primary blue background)                │
│                                                     │
│   Vamos Montar o Roteiro que Você Sonha            │
│                                                     │
│   Mande uma mensagem para Murillo e                │
│   vamos ajudar com orientação local,               │
│   preço justo e atendimento rápido.                │
│                                                     │
│        [Chamar Murillo no WhatsApp]                │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ FOOTER (Dark background #1a1a1a)                   │
│ [Brand] [Links] [Contact]                          │
│ Mobile: stacked 1 col                              │
│ Desktop: 3 cols                                     │
└─────────────────────────────────────────────────────┘
```

### Dimensões Críticas

| Elemento | Mobile | Desktop | Notas |
|----------|--------|---------|-------|
| Hero height | 400px | 500px | Não gigante, não pequeno |
| Hero padding | 24px | 48px | Respira bem |
| H1 font-size | 2.5rem | 3.5rem | Alto contraste |
| Featured cards width | 100% | 300px | 3 colunas grid |
| Card image height | auto (16:9) | 180px | Proporcional |
| CTA button height | 44px | 50px | Thumb-friendly |
| Section padding | 40px 24px | 60px 48px | Respira entre seções |

### Cores

- **Primary (Azul Confiança):** `#0066CC`
- **Secondary (Laranja Energia):** `#FF6B35`
- **Dark (Fundo escuro):** `#1a1a1a`
- **Neutral Light:** `#FFFFFF`
- **Neutral BG:** `#F5F5F5`
- **Neutral Text:** `#666666`

---

## 2. Padrão: Página de Passeio (Detail Page)

### Estrutura Recomendada

```
[Hero: Foto grande (1200x600) ou emoji placeholder]
        ↓
[Bloco "Por Que Escolher Este Passeio"]
  3 cards com ícones (piscinas cristalinas, guia experiente, preço justo)
        ↓
[Grid de Detalhes]
  Preço | Duração | Embarque | Maré (se aplicável)
        ↓
[Seção "O Que Está Incluído"]
  Checklist com ✓ visual
        ↓
[Gallery (opcional)]
  3-5 fotos adicionais em grid ou carrossel
        ↓
[Roteiro Passo a Passo (opcional)]
  Timeline visual de horários
        ↓
[Depoimento Cliente]
  Quote + nome + contexto
        ↓
[FAQ Específica]
  5-7 accordion items
        ↓
[CTA Principal]
  "Vamos montar o passeio que você sonha"
  [Botão grande: "Reservar no WhatsApp"]
```

### Validação de Conversão

✅ **Obrigatório acima da dobra (mobile):**
- Foto/emoji
- H1 (nome do passeio)
- Preço destacado
- Rating/Cadastur (se home já mostrou, menos crítico aqui)
- 1 CTA para WhatsApp

✅ **Obrigatório antes de footer:**
- FAQ (mínimo 3 perguntas)
- Depoimento (se houver)
- CTA novamente (segunda chance)

---

## 3. Padrão: Card de Passeio (Componente)

### Especificação Visual

```
┌──────────────────────────┐
│                          │
│   [🌊 Imagem 300×180]   │  ← 16:9 ratio, emoji ou foto real
│                          │
├──────────────────────────┤
│ Seixas                   │  ← H3, 1.25rem, preto, semibold
│                          │
│ Piscinas naturais com    │  ← Body text, cinza médio
│ peixinhos coloridos...   │  ← max 2 linhas, line-clamp
│                          │
│ Preço:    R$ 60          │  ← Grid 2 col, pequeno, alinhado
│ Duração:  3h             │
│                          │
└──────────────────────────┘
```

### Comportamento Interativo

- **Default:** Border cinza leve, sem sombra
- **Hover:** Sombra aumenta, H3 vira cor primária (azul)
- **Mobile:** Link full-card, sem hover (touch)

### Dimensões

| Propriedade | Valor | Notas |
|-------------|-------|-------|
| Width | 300px (desktop), 100% (mobile) | Responsivo |
| Image height | 180px | 16:9 ratio |
| Padding interno | 24px | Respira |
| Border radius | 8px | Suave, não 0 |
| Border | 1px solid #CCCCCC | Cinza leve |
| Font title | 1.25rem, semibold | Destaque |
| Font body | 1rem, regular | Legível |
| Font details | 0.875rem, small | Secundário |

---

## 4. Padrão: Hero Block

### Formato Padrão

```
┌─────────────────────────────────────────────────────┐
│ [Fundo: Gradiente azul ou foto + overlay]          │
│                                                     │
│        Título Grande e Claro                        │
│        (2.5rem mobile, 3.5rem desktop)             │
│                                                     │
│        Subtítulo explicativo (opcional)            │
│        Uma ou duas linhas de contexto              │
│                                                     │
│         [BOTÃO PRIMÁRIO - CTA]                     │
│                                                     │
└─────────────────────────────────────────────────────┘
Height: 400px mobile, 500px desktop
```

### Variações

**Hero com Foto:**
- Fundo = foto da praia/atividade
- Overlay = semi-opaco (rgba(0, 0, 0, 0.3))
- Texto = branco para contraste

**Hero com Gradiente:**
- Fundo = azul → branco (top to bottom)
- Texto = branco em cima (dark area), preto em baixo (light area)
- Mais consistent, menos dependente de foto

---

## 5. Padrão: Seção de Confiança / Prova Social

### Layout 3 Colunas (Desktop)

```
┌─────────────────────────────────────────────────────┐
│ FUNDO DARK #1a1a1a, TEXTO BRANCO                   │
│                                                     │
│ ┌──────────────┐  ┌──────────────┐  ┌───────────┐  │
│ │    4.9/5     │  │  Cadastur    │  │ Murillo   │  │
│ │    ⭐⭐⭐⭐⭐    │  │ 52.077.577   │  │ Especia-  │  │
│ │  150+ avaliações  │  │ Ativo até 2026 │  │lista local │  │
│ │  Verificadas │  │   Governo    │  │ de JP     │  │
│ └──────────────┘  └──────────────┘  └───────────┘  │
│                                                     │
└─────────────────────────────────────────────────────┘

Mobile: 1 coluna stacked, ou 2+1
Font: Números grandes (3rem), descrição pequenininha (0.875rem)
Cada coluna deve ter altura similar (não desigual)
```

---

## 6. Padrão: CTA (Botão Call-to-Action)

### Especificação

```
Texto: "Reservar no WhatsApp" ou "Chamar Murillo no WhatsApp"
Cor: Verde WhatsApp (#25D366) OU Azul Primário (#0066CC)
Altura: 44px (minimum touch target)
Width: 100% mobile, auto (max 300px) desktop
Font: 1rem, bold, branco
Padding: 12px 24px (interno)
Border radius: 6px
Hover: Escurece 10%, cursor pointer
Focus: Outline 2px, contraste claro
```

### Contexto de Texto

**Antes do botão, SEMPRE deve haver uma frase:**

```
"Vamos montar o passeio que você sonha."

[BOTÃO AQUI]
```

Sem frase acima = CTA órfão = baixa conversão

---

## 7. Padrão: Accordion / FAQ

### Componente Expandível

```
┌─────────────────────────────────────────────────────┐
│ ▼ Como faço para reservar um passeio?               │
│                                                     │
│ Mande uma mensagem no WhatsApp para Murillo.       │
│ Ele vai entender seu perfil e indicar o melhor     │
│ roteiro pra você.                                   │
│                                                     │
├─────────────────────────────────────────────────────┤
│ ► Qual é a melhor época para visitar?               │
│                                                     │
├─────────────────────────────────────────────────────┤
│ ► E se chover, posso remarcar?                      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Comportamento

- **Closed:** Branco, border cinza leve
- **Expanded:** Fundo azul primário (muito sutil), texto legível
- **Animação:** 200ms ease, chevron rotaciona
- **Múltiplos:** Um expandido por vez (ou múltiplos abertos OK)

---

## 8. Padrão: Footer

### Layout 3 Colunas Desktop

```
┌─────────────────────────────────────────────────────┐
│ FUNDO DARK #1a1a1a, TEXTO BRANCO                   │
│                                                     │
│ Vem Passear em Jampa      │ Navegação       │ Contato  │
│                            │                 │          │
│ Agência de turismo em     │ • Home          │ Murillo  │
│ João Pessoa. Confiança,   │ • Passeios      │ JP, PB   │
│ atendimento rápido e      │ • Sobre         │ WhatsApp │
│ orientação local.         │ • Blog (futuro) │ Instagram│
│                            │                 │ Maps     │
├─────────────────────────────────────────────────────┤
│ © 2026 Vem Passear em Jampa │ Cadastur 52.077... | Válido 2026
└─────────────────────────────────────────────────────┘
```

### Mobile Layout

Stacked vertical, mesma ordem, padding respeitoso

---

## 9. Padrão: Testimonial / Depoimento

### Formato

```
┌─────────────────────────────────────────────────────┐
│ FUNDO LIGHT #F5F5F5                                 │
│                                                     │
│  "Não conhecíamos nada de João Pessoa e            │
│   Murillo nos guiou para os melhores passeios.     │
│   Voltamos apaixonados pela cidade!                │
│   Você ganhou clientes para a vida."               │
│                                                     │
│              — Marina & Carlos, Casal (SP)          │
│              Após Litoral Sul + Piscinas Naturais   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Propriedades

- Quote: Itálico, 1.25rem, máx 500px width
- Author: Semibold, 1rem, abaixo da quote
- Context: Small, 0.875rem, cinza médio
- Max width: 600px (não quer ser pequeno demais)
- Text align: Center
- Padding: 40px 24px (respira bem)

---

## 10. Padrão: Detalhe em Grid

### Cards Informativos

Quando precisa exibir múltiplos detalhes (Preço, Duração, Embarque, Maré):

```
Desktop (4 colunas):
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Preço       │ │ Duração     │ │ Embarque    │ │ Maré        │
│ R$ 60       │ │ 3 horas     │ │ Downtown    │ │ Baixa req.  │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘

Mobile (2 colunas):
┌─────────────┐ ┌─────────────┐
│ Preço       │ │ Duração     │
│ R$ 60       │ │ 3 horas     │
└─────────────┘ └─────────────┘
┌─────────────┐ ┌─────────────┐
│ Embarque    │ │ Maré        │
│ Downtown    │ │ Baixa req.  │
└─────────────┘ └─────────────┘
```

### Propriedades

- Border: Cinza leve, 1px
- Padding: 24px
- Espaço entre: 16px
- Font title: 0.875rem, semibold, cinza
- Font value: 1.125rem, bold, azul primária

---

**Documento mantido por:** Diretor Visual de Turismo  
**Última atualização:** 2026-04-25  
**Próxima revisão:** Quando nova página for implementada
