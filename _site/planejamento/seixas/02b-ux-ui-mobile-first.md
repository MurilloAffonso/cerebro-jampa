---
skill: ux-ui-mobile-first
versao: 3.1
projeto_id: pagina-seixas-2026-04-26
etapa: 2b de 6
status: REVISADA — decisões de Murillo aplicadas 2026-04-26. Pronta para Etapa 3.
data: 2026-04-26
fontes_consultadas:
  - _site/planejamento/seixas/01-estrategia-site.md
  - _conhecimento/provas-de-confianca.md
  - _conhecimento/benchmark-site-cro.md
  - _conhecimento/publico-alvo.md
  - skills/ux-ui-mobile-first/SKILL.md
referencia_copy: 02a-copywriter-vendas.md (blocos 1–13)
---

# Wireframe — Piscinas Naturais do Seixas

**Entrega da Etapa 2b — `ux-ui-mobile-first`**
**URL:** `/passeios/piscinas-naturais/seixas`
**Próxima etapa:** 3 `diretor-visual-turismo` (valida padrão visual) + 5 `briefing-designer`

---

> **Nota:** Este wireframe descreve estrutura, hierarquia e comportamento — não cores, não tipografia, não imagens finais. Essas decisões são da Etapa 3 (`diretor-visual-turismo`) e do designer.

---

## 1. HIERARQUIA DE BLOCOS

### Classificação por Prioridade Mobile

```
CRÍTICO — Aparecem nos primeiros 30% da tela (acima da dobra)
  C1  Header com CTA WhatsApp
  C2  Hero (foto + H1 + CTA primário)
  C3  Info Card (Preço / Duração / Embarque)
  C4  Aviso de Maré
  C5  Por Que Confiar (Cadastur + rating + Murillo)

IMPORTANTE — Aparecem entre 30-70% (leitura e consideração)
  I1  Lead (texto de abertura)
  I2  O Que Você Vai Fazer (sensorial)
  I3  Roteiro Narrativo
  I4  Incluso / Não Incluso
  I5  FAQ Accordion
  I5.5 CTA Secundário (exigido pela estratégia — após FAQ)

SUPORTE — Aparecem nos últimos 30% (conversão e retenção)
  S1  Depoimento
  S2  Informações Práticas
  S3  CTA Final
  S4  Passeios Similares
  S5  Footer
```

**Regra de scroll:** turista encontra CTA primário sem scrollar (hero). CTA sticky está disponível assim que o hero sai do viewport. CTA secundário aparece após FAQ (bloco I5). CTA final no bloco S3.

---

## 2. WIREFRAME TEXTUAL — BLOCO A BLOCO

### C1 — HEADER

```
Mobile (320px):
┌──────────────────────────────────────┐
│ [Logo VP]          [WhatsApp 📲]     │
│ 16px                    44px min-h   │
│ height: 56px, fundo: branco/primário │
│ position: sticky top                 │
└──────────────────────────────────────┘
```

**Comportamento:**
- Sticky no topo em todo scroll
- Botão WhatsApp no canto direito — sempre visível
- Logo clicável → home `/`
- Sem menu hambúrguer nesta fase (mobile só header + sticky CTA)
- Desktop: adicionar links de navegação (Passeios / Sobre / contato)

**Tap target:** botão WhatsApp ≥44×44px obrigatório

---

### C2 — HERO

```
Mobile (320px):
┌──────────────────────────────────────┐
│                                      │
│  [FOTO SEIXAS — full-width]          │
│   height: 350px                      │
│   overlay: gradiente escuro 60%      │
│                                      │
│   H1 (28px, branco, bold)            │
│   "Piscinas Naturais do Seixas,      │
│    João Pessoa — Snorkel em          │
│    Água Cristalina"                  │
│                                      │
│   [━━━━ Reservar no WhatsApp 🟢 ━━━━] │
│    44px altura, 100% largura         │
│    fundo: verde WhatsApp             │
└──────────────────────────────────────┘

Breadcrumb logo abaixo do hero:
│ Home > Piscinas Naturais > Seixas   │
│ 12px, gray, links clicáveis         │
```

**Comportamento:**
- Foto: `object-fit: cover`, `object-position: center`
- H1: posicionado no terço inferior da imagem (sobre o overlay)
- CTA botão: `width: 100%` em mobile, `min-height: 44px`
- Ao carregar: hero = `loading: eager` (LCP crítico)
- Breadcrumb: logo abaixo do hero, fora do overlay

**Desktop (1024px+):** hero height 600px, H1 48px

---

### C3 — INFO CARD

```
Mobile (320px) — 3 colunas iguais:
┌──────────┬──────────┬──────────────┐
│    💰    │    ⏱    │      📍      │
│   R$ 60  │  ~3h30   │    Tambaú    │
│ por pessoa│          │  (embarque)  │
│  height: 100px       fundo: branco  │
└──────────┴──────────┴──────────────┘
```

**Comportamento:**
- Grid 3 colunas fixas (não colapsa em mobile — é curto o suficiente)
- Ícone: 24px, cor primária
- Valor: bold, 18px, preto
- Label: 12px, gray
- Fundo: branco ou cinza muito claro (contraste com hero escuro acima)
- Sombra leve separando do hero

**Desktop:** aumentar padding 24px, ícones 32px

---

### C4 — AVISO DE MARÉ

```
Mobile (320px):
┌──────────────────────────────────────┐
│ ⚠️  Este passeio acontece na maré   │
│      baixa — e isso é o que torna   │
│      ele especial.                   │
│                                      │
│ [texto explicativo 2-3 linhas]       │
│ fundo: âmbar claro / amarelo suave   │
│ borda-left: 4px âmbar               │
│ padding: 16px                        │
└──────────────────────────────────────┘
```

**Comportamento:**
- Componente inline — não modal, não popup
- Destaque visual (fundo âmbar) mas não alarmante (não vermelho)
- Texto: 14px, preto sobre fundo claro
- Ícone ⚠️: 20px, inline esquerda
- `role="note"` para acessibilidade

*Nota para diretor-visual (Etapa 3): validar a cor — âmbar suave comunica "atenção" sem gerar medo. Confirmar com paleta da marca.*

---

### C5 — POR QUE CONFIAR

```
Mobile (320px) — stack vertical:
┌──────────────────────────────────────┐
│  fundo: dark (#1a1a1a), texto branco │
│                                      │
│  ✅ Cadastur 52.077.577              │
│     Agência registrada               │
│     Ministério do Turismo            │
│                                      │
│  ⭐ 4.9/5 no Google                 │
│     [X] avaliações [CONFIRMAR]       │
│                                      │
│  👤 Murillo — Guia Local             │
│     [X] anos em João Pessoa          │
│     Atendimento direto no WhatsApp   │
│                                      │
└──────────────────────────────────────┘
```

**Comportamento:**
- Fundo escuro (#1a1a1a) ou azul escuro — contraste forte com seções claras acima/abaixo
- 3 items em stack (mobile) — sem separator entre eles, padding 16px
- Cada item: ícone (28px) + texto principal (16px bold) + subtext (14px gray)
- Desktop: 3 colunas grid horizontais

---

### I1 — LEAD

```
Mobile (320px):
┌──────────────────────────────────────┐
│  padding: 24px 16px                  │
│  fundo: branco                       │
│                                      │
│  [2 parágrafos de lead]              │
│  16px, line-height: 1.6              │
│  preto/gray-800                      │
└──────────────────────────────────────┘
```

**Comportamento:** Bloco de texto limpo, sem destaque visual além de espaçamento generoso. Sem imagem.

---

### I2 — O QUE VOCÊ VAI FAZER

```
Mobile (320px):
┌──────────────────────────────────────┐
│  H2: "O que espera por você"         │
│  20px, bold, preto                   │
│  padding: 24px 16px 0                │
│                                      │
│  [3 parágrafos sensoriais]           │
│  16px, line-height: 1.7              │
│                                      │
│  [Imagem opcional — vida marinha]    │
│  width: 100%, height: 200px          │
│  border-radius: 8px                  │
└──────────────────────────────────────┘
```

---

### I3 — ROTEIRO NARRATIVO

```
Mobile (320px):
┌──────────────────────────────────────┐
│  H2: "Como é o passeio"              │
│  padding: 24px 16px 0                │
│                                      │
│  🚢 Embarque em Tambaú              │
│     [1 parágrafo]                    │
│                                      │
│  🌊 Travessia de catamarã           │
│     [1 parágrafo]                    │
│                                      │
│  🐠 Nas piscinas naturais            │
│     [1 parágrafo]                    │
│                                      │
│  ⚡ Catamarã é sua base              │
│     [1 parágrafo]                    │
│                                      │
│  🚢 Retorno                          │
│     [1 linha]                        │
└──────────────────────────────────────┘
```

**Comportamento:**
- Cada etapa: ícone emoji (24px) + bold label + texto 14px
- Separador visual leve entre etapas (border-bottom 1px gray-200)
- Não usar timeline horizontal (colapsa mal em mobile)

---

### I4 — INCLUSO / NÃO INCLUSO

```
Mobile (320px) — stack vertical:
┌──────────────────────────────────────┐
│  ✅ ESTÁ INCLUSO                     │
│  • Passeio em catamarã               │
│  • Toboágua, caiaque, trampolim      │
│  • Bar e cozinha a bordo             │
│  • Banheiro a bordo                  │
│  • Som com microfone                 │
│  • Orientação do guia                │
│                                      │
│  ──────────────────────────          │
│                                      │
│  ❌ NÃO ESTÁ INCLUSO                 │
│  • Alimentação                       │
│  • Snorkel/máscara (opcional)        │
│  • Fotógrafo subaquático (opcional)  │
│  • Mergulho com cilindro (opcional)  │
│  • Transfer até Tambaú (consultar)   │
└──────────────────────────────────────┘
```

**Comportamento:**
- Mobile: 2 blocos em coluna (incluso primeiro, não incluso segundo)
- Desktop: 2 colunas lado a lado, mesmo height
- Fundo branco, borda sutil
- ✅ verde, ❌ vermelho/cinza

---

### I5 — FAQ ACCORDION

```
Mobile (320px):
┌──────────────────────────────────────┐
│  H2: "Perguntas frequentes"          │
│  padding: 24px 16px 0                │
│                                      │
│  ┌────────────────────────────── ▾┐  │
│  │ Nunca mergulhei. Posso fazer?   │  │
│  └─────────────────────────────────┘  │
│  ┌────────────────────────────── ▾┐  │
│  │ O passeio depende de maré?      │  │
│  └─────────────────────────────────┘  │
│  [+ 5 perguntas]                     │
│  cada item: min-height 44px          │
│  padding: 16px                       │
│  tap target: full-width              │
└──────────────────────────────────────┘
```

**Comportamento:**
- Accordion: apenas 1 aberto por vez (ou múltiplos — confirmar com diretor-visual)
- Chevron: roda 180° ao abrir (CSS transform)
- Animação: `max-height` transition 300ms ease — sem JS pesado
- `aria-expanded` correto para acessibilidade
- FAQPage schema JSON-LD embutido neste componente (Etapa 4 define o JSON)

---

### I5.5 — CTA SECUNDÁRIO (após FAQ)

```
Mobile (320px):
┌──────────────────────────────────────┐
│  padding: 24px 16px                  │
│  fundo: branco                       │
│  text-align: center                  │
│                                      │
│  "Ficou com dúvida? Fala com a gente"│
│  14px, gray                          │
│                                      │
│  [━ Reservar no WhatsApp 🟢 ━━━━━━]  │
│  height: 44px, width: 100%           │
│  fundo: verde #25D366 (ou #1A8A4A)   │
└──────────────────────────────────────┘
```

**Comportamento:**
- Tom minimalista — não é um bloco em destaque, é uma oferta leve
- Aparece logo após o accordion do FAQ ser exibido (ou o último item aberto)
- Não repete todo o texto do CTA Final (S3) — mantém simples
- `href` igual ao CTA Final: `wa.me/[NÚMERO]?text=...`

**Justificativa (01-estratégia-site.md):** CTA secundário exigido após FAQ — turista que chegou até aqui já superou as objeções e está pronto para agir.

---

### S1 — DEPOIMENTO

```
Mobile (320px):
┌──────────────────────────────────────┐
│  fundo: cinza claro (#F5F5F5)        │
│  padding: 24px 16px                  │
│                                      │
│  " [Frase do cliente sobre Seixas]" │
│  18px, italic, preto                 │
│                                      │
│  — Nome do cliente, Cidade           │
│  ⭐ Google | Mês/Ano                 │
│  14px, gray                          │
│                                      │
│  [Foto do cliente — avatar 48x48px]  │
│  [INSERIR REAL]                      │
└──────────────────────────────────────┘
```

**Comportamento:**
- Bloco único (1 depoimento em destaque) — não carrossel nesta fase
- Aspas grandes ou borda-left 4px primária para identidade visual do quote
- Se não houver foto: mostrar iniciais em círculo colorido

---

### S2 — INFORMAÇÕES PRÁTICAS

```
Mobile (320px):
┌──────────────────────────────────────┐
│  H2: "Antes de ir"                  │
│  padding: 24px 16px 0               │
│                                      │
│  O que levar:                        │
│  • Roupa de banho                    │
│  • Protetor solar biodegradável      │
│  • Toalha                            │
│  • Água ou compre a bordo            │
│                                      │
│  📍 Embarque:                        │
│  Praia de Tambaú, próximo ao         │
│  Hotel Tambaú — João Pessoa, PB      │
│  (localização exata no voucher)      │
│  [Abrir no Maps] (link externo)      │
│                                      │
│  ⏱ Horário: conforme maré           │
│  Confirmamos no WhatsApp véspera     │
└──────────────────────────────────────┘
```

---

### S3 — CTA FINAL

```
Mobile (320px):
┌──────────────────────────────────────┐
│  fundo: primário escuro (azul/dark)  │
│  padding: 32px 16px                  │
│  text-align: center                  │
│                                      │
│  "Vamos te ajudar a escolher a       │
│   melhor data para o seu passeio."  │
│  18px, branco, line-height 1.5       │
│                                      │
│  "Atendimento rápido.                │
│   Preço justo. Roteiro organizado."  │
│  14px, branco/70%                    │
│                                      │
│  [Falar com Murillo no WhatsApp 🟢]  │
│  width: 100%, height: 52px           │
│  fundo: verde #25D366                │
│  texto branco, 16px bold             │
└──────────────────────────────────────┘
```

**Comportamento:**
- Seção de fundo escuro para contraste máximo
- Botão WhatsApp: cor #25D366, texto branco
- `href="https://wa.me/558399087830?text=Oi, quero saber sobre Seixas"`
- `rel="noopener"`, `target="_blank"`

---

### S4 — PASSEIOS SIMILARES

```
Mobile (320px) — 1 coluna:
┌──────────────────────────────────────┐
│  H2: "Outras piscinas naturais"      │
│  padding: 24px 16px 0               │
│                                      │
│  ┌──────────────────────────────┐    │
│  │  [Imagem Penha — 160px]       │    │
│  │  Piscinas Naturais da Penha   │    │
│  │  R$ 60 · ~3h                  │    │
│  │  [Ver passeio →]              │    │
│  └──────────────────────────────┘    │
│                                      │
│  ┌──────────────────────────────┐    │
│  │  [Imagem Picãozinho — 160px]  │    │
│  │  Piscinas de Picãozinho       │    │
│  │  R$ 60                        │    │
│  │  [Ver passeio →]              │    │
│  └──────────────────────────────┘    │
└──────────────────────────────────────┘
```

**Comportamento:**
- Mobile: 1 coluna
- Desktop: 2 colunas grid
- Imagem: `object-fit: cover`, `loading: lazy`
- Link: ancora da página para `/passeios/piscinas-naturais/[slug]`

---

### S5 — FOOTER

```
Mobile (320px):
┌──────────────────────────────────────┐
│  fundo: dark (#1a1a1a)               │
│  padding: 32px 16px                  │
│                                      │
│  [Logo VP — branco]                  │
│                                      │
│  Vem Passear em Jampa                │
│  Cadastur 52.077.577                 │
│  João Pessoa — PB                    │
│                                      │
│  Links:                              │
│  Home | Piscinas Naturais | Sobre   │
│  (stack vertical no mobile)          │
│                                      │
│  📲 WhatsApp: +55 83 9908-7830       │
└──────────────────────────────────────┘
```

---

## 3. CTA STICKY — COMPORTAMENTO DETALHADO

```
Trigger: hero (C2) sai do viewport (scroll > 350px)
Disappear: CTA Final (S3) entra no viewport

Estilo (mobile):
┌──────────────────────────────────────┐
│  [Reservar no WhatsApp 🟢]           │
│  position: fixed; bottom: 0;         │
│  width: 100%;                        │
│  height: 52px;                       │
│  background: #25D366;                │
│  color: white; font-weight: bold;    │
│  z-index: 1000;                      │
│  box-shadow: 0 -2px 8px rgba(0,0,0,.15) │
└──────────────────────────────────────┘
```

**Lógica JavaScript (mínima):**
```
- Observar visibility de #hero-cta e #cta-final via IntersectionObserver
- Mostrar sticky: quando #hero-cta sai do viewport
- Esconder sticky: quando #cta-final entra no viewport
- Sem animação pesada — apenas opacity transition 200ms
```

**Desktop:** Sticky CTA não aparece (botões são visíveis sem scroll em desktop). Substituir por sidebar CTA flutuante (opcional — Etapa 3 decide).

---

## 4. RESPONSIVIDADE — 3 BREAKPOINTS

### Mobile (320px – 767px) — Versão Base

| Bloco | Layout |
|-------|--------|
| Header | Logo + botão WhatsApp, 56px, sticky |
| Hero | full-width, 350px, H1 28px |
| Info Card | 3 colunas, 100px height |
| Aviso Maré | full-width, 16px padding |
| Por Que Confiar | stack vertical, fundo escuro |
| Lead / Descrição | full-width, 16px padding |
| Incluso/Não Incluso | 1 coluna (incluso → não incluso) |
| FAQ | accordion full-width |
| Depoimento | full-width, fundo claro |
| CTA Final | full-width, 52px botão |
| Passeios Similares | 1 coluna |
| Footer | stack vertical |

### Tablet (768px – 1023px)

| Bloco | Layout |
|-------|--------|
| Hero | 500px height, H1 36px |
| Por Que Confiar | 3 colunas horizontal |
| Incluso/Não Incluso | 2 colunas lado a lado |
| Passeios Similares | 2 colunas grid |
| Footer | 2 colunas |

### Desktop (1024px+)

| Bloco | Layout |
|-------|--------|
| Container | max-width: 1200px, margem auto |
| Header | logo + nav links + CTA |
| Hero | 600px height, H1 48px, H2 sub 20px |
| Info Card | 3 colunas, padding 32px |
| Por Que Confiar | 3 colunas, mais espaço |
| Descrição + Imagem | 60/40 split (texto + imagem lateral) |
| Incluso/Não Incluso | 2 colunas mesmo nível |
| FAQ | 2 colunas (desktop pode dividir FAQ em 2 cols) |
| CTA Final | max-width 600px, centralizado |
| Passeios Similares | 2 colunas |

---

## 5. ACESSIBILIDADE (WCAG AA)

| Requisito | Especificação |
|-----------|---------------|
| Contraste H1 (branco sobre hero dark) | ≥7:1 — overlay 60% garante (validar com ferramenta) |
| Contraste body (preto sobre branco) | ≥4.5:1 ✅ |
| Contraste botão WhatsApp (branco sobre verde) | Validar: #25D366 pode não atingir 4.5:1 — usar #1A8A4A se necessário |
| Tap targets | Todos os botões e links ≥44×44px |
| FAQ accordion | `aria-expanded`, `aria-controls`, `role="button"` |
| Imagens | `alt` descritivo em todas (definido na Etapa 4 pelo SEO) |
| Focus states | `focus-visible: outline 2px solid #0066CC; outline-offset: 2px` |
| Sem cor como único indicador | ✅ (incluso/não incluso usa ícone ✅❌ além de cor) |
| Aviso de Maré | `role="note"` |
| CTA sticky | `aria-label="Reservar no WhatsApp"` |

---

## 6. PERFORMANCE (ALVO: <3s MOBILE)

| Ativo | Especificação |
|-------|---------------|
| Foto Hero | WebP + JPG fallback, 1200×350px mobile / 1920×600px desktop, `loading: eager` (LCP) |
| Demais imagens | WebP + JPG fallback, `loading: lazy` |
| Foto depoimento | 48×48px, WebP, `loading: lazy` |
| Imagens Passeios Similares | 400×200px, WebP, `loading: lazy` |
| Fontes | Máximo 2 (Inter + Lora via `next/font`), subset `latin`, `display: swap` |
| FAQ animação | `max-height` CSS transition — sem JS pesado |
| CTA sticky | IntersectionObserver — sem setInterval/polling |
| Sem usar | Lottie, GSAP, carrosséis com autoplay, vídeo autoplay |

---

## 7. MATRIZ DE COMPONENTES NECESSÁRIOS

| Componente | Usado em | Reutilizável? | Prioridade |
|-----------|----------|---------------|-----------|
| `Header` | Todas as páginas | ✅ Alto reuso | P0 |
| `HeroBlock` | Páginas de passeio | ✅ Reuso com props | P0 |
| `InfoCard` | Páginas de passeio | ✅ Reuso com props | P0 |
| `MaréAlert` | Passeios com maré | ✅ Reuso condicional | P1 |
| `TrustBlock` | Home + passeios | ✅ Reuso com props | P0 |
| `RoteiroBullets` | Páginas de passeio | ✅ Reuso com array | P1 |
| `IncluidoBlock` | Páginas de passeio | ✅ Reuso com arrays | P0 |
| `FAQAccordion` | Passeios + FAQ page | ✅ Alto reuso | P0 |
| `DepoimentoBlock` | Passeios + home | ✅ Reuso com props | P1 |
| `CTAFinal` | Todas as páginas | ✅ Alto reuso | P0 |
| `PasseioCard` | Similares + cluster | ✅ Alto reuso | P0 |
| `CTASticky` | Páginas de passeio | ✅ Reuso com lógica JS | P0 |
| `Breadcrumb` | Passeios + categorias | ✅ Alto reuso | P1 |
| `Footer` | Todas as páginas | ✅ Alto reuso | P0 |

**P0 = necessário para lançar Seixas | P1 = importante mas pode vir logo após**

---

## 8. DIAGRAMA ASCII — MOBILE (320px)

```
┌──────────────────────────────────────┐
│ [Logo]             [WhatsApp 📲]     │  ← Header sticky (C1)
├──────────────────────────────────────┤
│                                      │
│  [FOTO SEIXAS — 350px height]        │  ← Hero (C2)
│  overlay 60%                         │
│  H1 (28px, branco)                   │
│  [━━ Reservar no WhatsApp 🟢 ━━]     │
│                                      │
│  Home > Piscinas Naturais > Seixas   │  ← Breadcrumb
├──────────────────────────────────────┤
│  💰 R$ 60 │ ⏱ ~3h30 │ 📍 Tambaú    │  ← Info Card (C3)
├──────────────────────────────────────┤
│  ⚠️ Este passeio acontece na maré...│  ← Aviso Maré (C4)
│   fundo âmbar claro                  │
├──────────────────────────────────────┤
│  fundo escuro                        │  ← Por Que Confiar (C5)
│  ✅ Cadastur 52.077.577              │
│  ⭐ 4.9/5 no Google                  │
│  👤 Murillo — Guia Local             │
├──────────────────────────────────────┤
│  Chegou em JP e quer praia diferente │  ← Lead (I1)
│  do comum? Seixas é onde o sol...    │
├──────────────────────────────────────┤
│  O que espera por você               │  ← Descrição (I2)
│  [texto sensorial]                   │
├──────────────────────────────────────┤
│  Como é o passeio                    │  ← Roteiro (I3)
│  🚢 Embarque em Tambaú              │
│  🌊 Travessia de catamarã           │
│  🐠 Nas piscinas naturais            │
│  ⚡ Catamarã é sua base              │
│  🚢 Retorno                          │
├──────────────────────────────────────┤
│  ✅ ESTÁ INCLUSO                     │  ← Incluso (I4)
│  • Passeio em catamarã               │
│  • Toboágua, caiaque...              │
│  ❌ NÃO ESTÁ INCLUSO                 │
│  • Alimentação                       │
│  • Snorkel (opcional)                │
├──────────────────────────────────────┤
│  Perguntas frequentes                │  ← FAQ (I5)
│  [▾] Nunca mergulhei. Posso fazer?   │
│  [▾] Depende de maré?                │
│  [▾] O que está incluso nos R$ 60?   │
│  [▾] Onde é o embarque?              │
│  [▾] Quanto tempo dura?              │
│  [▾] Posso levar crianças?           │
│  [▾] Política de cancelamento?       │
├──────────────────────────────────────┤
│  "Ficou com dúvida? Fala com a gente"│  ← CTA Secundário (I5.5)
│  [━ Reservar no WhatsApp 🟢 ━━━━━━]  │
├──────────────────────────────────────┤
│  fundo cinza claro                   │  ← Depoimento (S1)
│  " [frase cliente] "                 │
│  — Nome, Cidade ⭐ Google            │
├──────────────────────────────────────┤
│  Antes de ir                         │  ← Info Prática (S2)
│  • Roupa de banho                    │
│  • Protetor solar...                 │
│  📍 Praia de Tambaú [Maps]           │
├──────────────────────────────────────┤
│  fundo escuro (primário)             │  ← CTA Final (S3)
│  "Vamos te ajudar a escolher..."     │
│  [━ Falar com Murillo no WhatsApp ━] │
│   52px altura, verde WhatsApp        │
├──────────────────────────────────────┤
│  Outras piscinas naturais            │  ← Similares (S4)
│  ┌──────────────────────────────┐   │
│  │ [Penha]    R$ 60  Ver →      │   │
│  └──────────────────────────────┘   │
│  ┌──────────────────────────────┐   │
│  │ [Picãozinho] R$ 60  Ver →    │   │
│  └──────────────────────────────┘   │
├──────────────────────────────────────┤
│  fundo dark                          │  ← Footer (S5)
│  [Logo VP]                           │
│  Cadastur 52.077.577                 │
│  Home | Piscinas | Sobre             │
│  📲 WhatsApp                         │
└──────────────────────────────────────┘

[━━━━ Reservar no WhatsApp 🟢 ━━━━]     ← CTA Sticky (fixed bottom)
(visível após hero sair do viewport)
```

---

## 9. LACUNAS [CONFIRMAR]

| # | Lacuna | Impacto | Status |
|---|--------|---------|--------|
| 1 | Cor exata do Aviso de Maré | Diretor Visual (Etapa 3) valida se âmbar está alinhado com paleta | ⏳ Etapa 3 decide |
| 2 | Contraste do botão WhatsApp verde #25D366 | Pode precisar de variante #1A8A4A para WCAG AA | ⏳ Etapa 3 decide |
| 3 | Foto real de Seixas para hero | Sem imagem real, placeholder em uso | ⏳ Pendente Murillo |
| ~~4~~ | ~~Número de WhatsApp~~ | — | ✅ **Confirmado: +55 83 9908-7830** |
| ~~7~~ | ~~Endereço exato do ponto de embarque~~ | — | ✅ **Confirmado: Praia de Tambaú, próximo ao Hotel Tambaú (localização exata no voucher)** |
| 5 | FAQ: accordion abre múltiplos ou um por vez? | Decisão de UX — recomendo 1 por vez | ⏳ Etapa 3 decide |
| 6 | Sidebar CTA flutuante no desktop? | Diretor Visual (Etapa 3) decide | ⏳ Etapa 3 decide |

### ✅ CONFLITO DE ORDENAÇÃO RESOLVIDO — 2026-04-26

| Questão | Decisão de Murillo |
|---------|-------------------|
| Posição do bloco "Lead" | **Posição I1 — após Por Que Confiar** (recomendação do wireframe 02b aprovada) |

02a e 02b agora estão alinhados. Lead na posição 5 da sequência de blocos, após trust signals.

---

## 10. HANDOFF PARA PRÓXIMAS SKILLS

### Para `diretor-visual-turismo` (Etapa 3)

```
Validar:
- Cor do Aviso de Maré (âmbar claro — alinhado com paleta?)
- Fundo do TrustBlock (dark #1a1a1a ou azul escuro da marca?)
- Contraste do botão WhatsApp (#25D366 — atingir WCAG AA?)
- CTA sticky estilo e posição
- Sidebar CTA no desktop: necessário ou não?
- Depoimento: aspas grandes ou borda-left colorida?

Componentes que precisam de especificação visual detalhada:
- HeroBlock (overlay, tipografia, posição dos elementos)
- InfoCard (ícones, tipografia, separadores)
- MaréAlert (fundo, ícone, borda)
- TrustBlock (grid, ícones, tipografia)
- FAQAccordion (chevron, estados aberto/fechado)
- CTAFinal (fundo, botão, tipografia)
```

### Para `briefing-designer` (Etapa 5)

```
Entrada desta etapa:
- Wireframe textual completo (este arquivo)
- Diagrama ASCII de todos os blocos
- Responsividade por bloco (3 breakpoints)
- Matriz de componentes (14 componentes, prioridade P0/P1)
- Comportamento do CTA sticky (JavaScript mínimo especificado)
- Requisitos WCAG AA por bloco

Perguntas para o designer resolver em Figma:
- Tratamento visual da foto hero (overlay estático ou gradiente?)
- Foto de Murillo (avatar pequeno no TrustBlock ou bloco completo?)
- Cards de Passeios Similares: com ou sem badge de preço destacado?
```

### Para `programador-de-site` (Etapa 6 — após Figma)

```
Componentes criados por este wireframe:
Header, HeroBlock, InfoCard, MaréAlert, TrustBlock, RoteiroBullets,
IncluidoBlock, FAQAccordion, DepoimentoBlock, InfoPratica, CTAFinal,
PasseioCard, CTASticky, Breadcrumb, Footer

Todos os componentes devem ser reutilizáveis via props.
Dados do passeio entram por `data/passeios.ts` — nunca hardcoded.
```

---

*Wireframe v1.3 | decisões de Murillo aplicadas | Etapa 2b pronta para Etapa 3 | 2026-04-26*
*Aplicado: Lead em I1 (após Por Que Confiar) aprovado. WhatsApp +55 83 9908-7830 confirmado. Embarque confirmado: Praia de Tambaú, próximo ao Hotel Tambaú.*
*Aguardando: Etapa 3 (`diretor-visual-turismo`) para validar padrão visual antes de briefar designer.*
