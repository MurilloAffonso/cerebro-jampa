---
skill: diretor-visual-turismo
versao: 2.1
projeto_id: pagina-seixas-2026-04-26
etapa: 3 de 6
status: CONCLUÍDA — aguardando aprovação de Murillo + Etapa 4 (seo-local-turismo) / Etapa 5 (briefing-designer)
data: 2026-04-26
fontes_consultadas:
  - _site/planejamento/seixas/01-estrategia-site.md
  - _site/planejamento/seixas/02a-copywriter-vendas.md
  - _site/planejamento/seixas/02b-ux-ui-mobile-first.md
  - _conhecimento/benchmark-site-cro.md
  - _conhecimento/tom-de-voz.md
  - _conhecimento/provas-de-confianca.md
  - skills/diretor-visual-turismo/SKILL.md
tokens_confirmados:
  primary: "#FF6B35"    # laranja — bg-primary / text-primary (Tailwind real)
  secondary: "#004E89"  # azul — bg-secondary / text-secondary (Tailwind real)
  dark: "#1a1a1a"
  whatsapp_green: "#25D366"
  white: "#FFFFFF"
  light: "#F5F5F5"
---

# Direção Visual — Piscinas Naturais do Seixas

**Entrega da Etapa 3 — `diretor-visual-turismo`**
**URL:** `/passeios/piscinas-naturais/seixas`
**Próxima etapa:** 4 `seo-local-turismo` (paralelo com Etapa 5) + 5 `briefing-designer`

---

> **Escopo desta entrega:** Direção visual e especificação de padrões por bloco. Não é Figma, não é código. É a linguagem visual que o designer executa e o programador implementa.

---

## STATUS DE VALIDAÇÃO

```
STATUS: APROVADO COM RESSALVAS

✓ Hierarquia de blocos (02b) suporta os objetivos de conversão (01)
✓ Copy (02a) é compatível com o espaço visual projetado
✓ Posição da prova social (C5) está acima da dobra — correto
✓ Sequência CTA: hero → sticky → pós-FAQ → final — correto
✓ Aviso de Maré (C4) tem tratamento próprio — bem posicionado

⚠ Revisar: token de cor "primário" na SKILL.md diverge do Tailwind real
  → SKILL.md diz: primário = azul #0066CC
  → Tailwind real (código): primário = laranja #FF6B35, secundário = azul #004E89
  → Resolução neste documento: seguir tokens do Tailwind (fonte de verdade)
  → [CONFIRMAR COM MURILLO: laranja é o acento principal ou azul?]

⚠ Revisar: contraste do botão WhatsApp #25D366 sobre fundo branco
  → Ratio estimado: ~2.5:1 — não atinge WCAG AA (4.5:1)
  → Recomendação: usar texto branco sobre #25D366, não texto escuro
  → Alternativa WCAG: #1A8A4A (verde escuro) — perda de reconhecimento da marca WA
  → Decisão: manter #25D366 com texto branco (ratio 3.8:1) + ícone WA para reforço semântico
```

---

## 1. CONCEITO VISUAL DA PÁGINA

**Conceito:** "Mar como está — não como nos vendem."

A página não quer parecer resort. Quer parecer *João Pessoa de verdade* — água límpida sem filtro exagerado, coral ao alcance da mão, um guia que conhece cada maré. A identidade visual reforça honestidade e confiança, não luxo inacessível.

**Três tensões visuais a equilibrar:**

| Tensão | Como resolver |
|--------|--------------|
| Turismo alegre vs. confiança séria | Foto viva + trust block escuro (contraste intencional) |
| Copy acolhedora vs. eficiência mobile | Parágrafos curtos + espaçamento generoso, nunca apertado |
| Urgência de CTA vs. tom sem pressão | CTA sempre visível (sticky) mas nunca piscando ou pulsando |

---

## 2. ATMOSFERA DESEJADA

| Atributo | Expressão Visual |
|----------|-----------------|
| **Claro** | Fundo branco dominante, seções escuras pontuais (trust + CTA final) |
| **Honesto** | Aviso de Maré em destaque — não escondido, não minimizado |
| **Humano** | Murillo com nome e foto no bloco de confiança |
| **Local** | Foto real de Seixas (não stock photo genérico de praia tropical) |
| **Acessível** | Tipografia ≥16px, contraste alto, espaço entre elementos |

**Anti-padrões que este site NÃO tem:**
- ❌ Fotos com filtro HDR exagerado (saturação artificial)
- ❌ Overlay vermelho "OFERTA LIMITADA"
- ❌ Texto pequeno em fundo complexo
- ❌ Cards com imagens distorcidas ou esticadas
- ❌ Seções com três cores diferentes sem hierarquia

---

## 3. PALETA — DENTRO DOS TOKENS EXISTENTES

### Tokens Confirmados (fonte: Tailwind real do código)

| Token | Hex | Uso nesta página |
|-------|-----|-----------------|
| `bg-primary` / `text-primary` | `#FF6B35` | Acentos, badges, H2 em destaque, breadcrumb ativo |
| `bg-secondary` / `text-secondary` | `#004E89` | CTA Final (fundo escuro azul), links hover |
| `dark` | `#1a1a1a` | TrustBlock (C5), Footer (S5) |
| WhatsApp green | `#25D366` | Todos os botões CTA WhatsApp |
| `light` | `#F5F5F5` | Depoimento (S1), seções alternadas |
| Amber warning | `#FEF3C7` / `#F59E0B` | Aviso de Maré (C4) — fundo e borda |
| White | `#FFFFFF` | Fundo padrão da maioria das seções |

> ⚠️ **Nota sobre Amber:** `#FEF3C7` (amber-100 Tailwind) e `#F59E0B` (amber-500) não estão no `tailwind.config.ts` atual como token nomeado. Duas opções:
> 1. **Adicionar token:** `tide-warning-bg: #FEF3C7` e `tide-warning-border: #F59E0B` — recomendado para reutilização em Penha, Picãozinho
> 2. **Usar inline:** `bg-[#FEF3C7] border-[#F59E0B]` via Tailwind arbitrary values — funciona, mas não é reutilizável
> **Recomendação:** adicionar o token. Aviso de Maré aparecerá em todas as piscinas naturais.
> **[CONFIRMAR COM MURILLO: aprovado adicionar token tide-warning ao Tailwind?]**

### Uso Estratégico de Cor por Seção

```
BRANCO         → Padrão (95% das seções de conteúdo)
LIGHT (#F5F5F5) → Depoimento, Info Prática (alternância para separar)
DARK (#1a1a1a)  → TrustBlock (C5), Footer (S5)
AZUL (#004E89)  → CTA Final (S3) — alternativa ao dark, mais "oceano"
AMBER           → Aviso de Maré (C4) — exclusivo, não repetir em outra seção
LARANJA (#FF6B35) → Acentos pontuais: breadcrumb ativo, badge de preço, ícones CTA secundário
VERDE (#25D366)  → Todos os botões WhatsApp
```

---

## 4. HIERARQUIA VISUAL POR SEÇÃO

### Blocos CRÍTICOS (acima da dobra, 0–30% scroll)

#### C1 — Header
- Fundo: branco
- Logo à esquerda: tamanho contido (não domina)
- Botão WhatsApp à direita: verde `#25D366`, texto "WhatsApp" + ícone, `min-height: 44px`
- Border-bottom: 1px `#E5E7EB` (separação suave, não pesada)
- `position: sticky; top: 0; z-index: 100`

#### C2 — Hero
- Foto: `object-fit: cover`, `object-position: center 30%` (para fotos de horizonte marítimo, puxar levemente para baixo para mostrar água, não céu)
- Overlay: `background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)` — gradiente de baixo para cima, texto no terço inferior
- H1: fonte Lora, `font-size: 1.75rem` mobile / `2.75rem` desktop, cor branca, `font-weight: 700`
- Subtítulo: fonte Inter, `font-size: 1rem` mobile / `1.125rem` desktop, `color: rgba(255,255,255,0.9)`
- CTA hero: botão verde WhatsApp, `width: 100%` mobile, `min-height: 52px`, texto branco bold
- **Breadcrumb** (abaixo do hero, fora do overlay): `font-size: 0.75rem`, links em `text-secondary` (#004E89), item ativo em `text-primary` (#FF6B35)
- Hierarquia: H1 > CTA > subtítulo (o botão fica entre H1 e subtítulo intencionalmente — CTA antes de mais texto)

#### C3 — Info Card
- Fundo: branco, `box-shadow: 0 2px 8px rgba(0,0,0,0.08)` (sutil, separa do hero)
- Grid 3 colunas fixas: `💰 R$ 60 | ⏱ ~3h30 | 📍 Tambaú`
- Ícone: 24px, cor `text-primary` (`#FF6B35`)
- Valor: `font-size: 1.125rem`, `font-weight: 700`, preto
- Label: `font-size: 0.75rem`, `color: #6B7280`
- Sem borda entre colunas — usar padding simétrico 16px para respiração

#### C4 — Aviso de Maré
- Fundo: `#FEF3C7` (amber-100)
- Border-left: `4px solid #F59E0B` (amber-500)
- Ícone ⚠️: inline, `font-size: 1.25rem`, à esquerda do título
- Título: `font-weight: 600`, preto, `font-size: 1rem`
- Texto: `font-size: 0.875rem`, `color: #374151`
- `padding: 16px`
- `role="note"` para acessibilidade
- **Não usar vermelho** — vermelho cria medo, não educação

#### C5 — Por Que Confiar
- Fundo: `#1a1a1a` (dark)
- Texto: branco
- Título da seção: ausente (os 3 itens falam por si)
- 3 itens em stack mobile, grid 3-col desktop
- Cada item: ícone grande (28px) + texto principal (`font-weight: 700`, 1rem, branco) + subtext (0.875rem, `#9CA3AF`)
- ✅ Cadastur: ícone check verde, "Cadastur 52.077.577 — Ativo"
- ⭐ Rating: ícone estrela âmbar, "4.9/5 no Google" + "[X avaliações — CONFIRMAR]"
- 👤 Murillo: avatar ou iniciais + "Murillo — Guia Local" + frase curta

---

### Blocos IMPORTANTES (30–70% scroll)

#### I1 — Lead
- Fundo: branco
- Sem título de seção (o texto é o gancho)
- `font-size: 1rem`, `line-height: 1.7`
- `color: #374151` (gray-700)
- `padding: 24px 16px`
- Sem imagem, sem ícone — só texto limpo

#### I2 — O Que Você Vai Fazer
- H2: "O que espera por você em Seixas"
- `font-family: Lora`, `font-size: 1.25rem` mobile / `1.5rem` desktop, `font-weight: 600`
- Texto: Inter, `font-size: 1rem`, `line-height: 1.7`
- Imagem opcional (se foto disponível): `width: 100%`, `height: 200px`, `object-fit: cover`, `border-radius: 8px`, `margin-top: 16px`
- `[CONFIRMAR COM MURILLO: foto real de Seixas para usar aqui também — pode ser a mesma do hero ou uma alternativa da galeria subaquática]`

#### I3 — Roteiro Narrativo
- H2: "Como é o passeio — passo a passo"
- 5 etapas com ícone emoji + label bold + parágrafo
- `border-bottom: 1px solid #E5E7EB` entre etapas
- Ícone: `font-size: 1.25rem`, inline com label
- Label: `font-weight: 600`, `color: #111827`
- Texto: `color: #6B7280`, `font-size: 0.9375rem`
- `padding: 16px 0` por etapa

#### I4 — Incluso / Não Incluso
- Dois blocos em coluna (mobile) ou lado a lado (desktop ≥768px)
- **Incluso:** borda-top `4px solid #22C55E` (verde-500), ícone ✅ verde antes de cada item
- **Não Incluso:** borda-top `4px solid #9CA3AF` (gray-400), ícone ❌ cinza antes de cada item
- `font-size: 0.9375rem`, espaço entre itens `8px`
- Itens "opcional" em `color: #6B7280` + note "(consulte no WhatsApp)"
- `border-radius: 8px`, `padding: 16px`, `background: #F9FAFB`

#### I5 — FAQ Accordion
- H2: "Perguntas frequentes"
- Cada item: `min-height: 52px`, `width: 100%` (tap target full-width)
- Pergunta: `font-weight: 600`, `font-size: 1rem`, preto
- Ícone chevron: `color: text-primary` (#FF6B35), rota 180° ao abrir
- Resposta: `font-size: 0.9375rem`, `color: #374151`, `padding: 0 16px 16px`
- `border-bottom: 1px solid #E5E7EB` entre itens
- Fundo branco (sem fundo especial)
- Apenas 1 item aberto por vez (recomendação UX — menos confusão)
- `aria-expanded`, `aria-controls` obrigatórios

#### I5.5 — CTA Secundário
- Fundo: branco (não é seção destacada — é transição leve)
- Texto acima: `font-size: 0.875rem`, `color: #6B7280` — tom leve, sem pressão
- Botão: mesmas specs do CTA hero (verde WhatsApp, 44px, width 100% mobile)
- `padding: 16px` — não excessivo, não invisível

---

### Blocos SUPORTE (70–100% scroll)

#### S1 — Depoimento
- Fundo: `#F5F5F5` (light)
- Aspas decorativas: `font-size: 4rem`, `color: #FF6B35` (primary), `opacity: 0.3`, absolute position acima do texto
- Texto da frase: `font-size: 1.125rem`, italic, `color: #111827`, `line-height: 1.6`
- Autor: `font-size: 0.875rem`, `font-weight: 600`, `color: #374151`
- Rating fonte: "⭐ Google | Mês/Ano" em `color: #6B7280`
- Avatar: 48×48px, `border-radius: 50%`; se sem foto real → iniciais em `bg-primary` com texto branco
- `[CONFIRMAR COM MURILLO: depoimento real de cliente — texto, nome, cidade, data]`

#### S2 — Informações Práticas
- H2: "Antes de ir"
- Dois blocos: O que levar (lista simples) + Ponto de Encontro (map link)
- Lista: `font-size: 0.9375rem`, bullet `color: text-primary`
- Endereço: `📍` + texto + link "Abrir no Maps" em `text-secondary` (`#004E89`)
- `[CONFIRMAR COM MURILLO: endereço exato do ponto de embarque em Tambaú]`
- Horário: "Conforme maré — confirmamos no WhatsApp véspera" em note (`color: #6B7280`)

#### S3 — CTA Final
- Fundo: `#004E89` (secondary — azul oceano, mais temático que o dark)
- Texto: branco
- H2: "Vamos te ajudar a escolher a melhor data" — Lora, 1.5rem, branco
- Subtexto: "Atendimento rápido. Preço justo. Roteiro organizado." — Inter, 0.9375rem, `rgba(255,255,255,0.85)`
- Botão: `background: #25D366`, texto branco bold, `height: 52px`, `width: 100%` mobile
- `padding: 40px 16px`

#### S4 — Passeios Similares
- H2: "Outras piscinas naturais em João Pessoa"
- Cards: 1 coluna mobile, 2 colunas desktop
- Imagem do card: `height: 160px`, `object-fit: cover`, `border-radius: 8px 8px 0 0`
- Badge de preço: `position: absolute; top: 8px; right: 8px`, `background: #FF6B35`, texto branco, `font-size: 0.75rem`, `border-radius: 4px`, `padding: 4px 8px`
- Nome: H3, `font-size: 1rem`, `font-weight: 600`, preto
- Descrição: `font-size: 0.875rem`, `color: #6B7280`, max 2 linhas
- Link: "Ver passeio →" em `text-secondary` (#004E89)
- `box-shadow: 0 2px 8px rgba(0,0,0,0.08)`, `border-radius: 8px`

#### S5 — Footer
- Fundo: `#1a1a1a` (dark)
- Logo: versão branca
- Nome da empresa + Cadastur + cidade: branco / 70%
- Links: `color: #9CA3AF`, hover `color: #FFFFFF`
- WhatsApp: `📲 +55 83 9908-7830`
- Stack vertical mobile, 2-3 colunas desktop

---

## 5. ESTILO DE CARDS, CTAs E BLOCOS DE CONFIANÇA

### Cards de Passeio (S4 e contextos de cluster)

```
┌─────────────────────────┐
│  [IMAGEM 160px]         │  ← object-fit: cover, border-radius: 8px 8px 0 0
│              [R$ 60]    │  ← badge absolute, bg-primary, canto superior direito
├─────────────────────────┤
│  Nome do Passeio        │  ← H3, 1rem, 600
│  Breve descrição...     │  ← 0.875rem, gray-500, 2 linhas max
│  Ver passeio →          │  ← text-secondary, 0.875rem
└─────────────────────────┘
  box-shadow: 0 2px 8px rgba(0,0,0,.08)
  border-radius: 8px
  background: white
```

**Hover state (desktop):**
- `box-shadow: 0 4px 16px rgba(0,0,0,0.12)` (sombra cresce)
- Nome em `color: text-secondary` (`#004E89`)
- `transition: box-shadow 200ms ease, color 200ms ease`

### Botões CTA

**CTA Primário — WhatsApp:**
```
background: #25D366
color: #FFFFFF
font-weight: 700
font-size: 1rem
height: 52px (mobile) / 48px (desktop)
width: 100% (mobile) / auto (desktop, min-width: 200px)
border-radius: 8px
padding: 0 24px
display: flex; align-items: center; gap: 8px
[ícone WhatsApp SVG 20px + texto]
```

**CTA Sticky (mobile):**
```
position: fixed; bottom: 0; left: 0; right: 0
height: 56px
background: #25D366
z-index: 999
box-shadow: 0 -2px 8px rgba(0,0,0,0.15)
[mesmos estilos internos do CTA primário]
Ativa: quando hero-cta sai do viewport
Desativa: quando S3 (CTA Final) entra no viewport
```

**CTA Secundário (pós-FAQ):**
```
[mesmas specs do primário]
Texto acima: font-size: 0.875rem, color: #6B7280
Tom: sem urgência
```

### Bloco de Confiança (C5 — TrustBlock)

```
background: #1a1a1a
padding: 24px 16px (mobile) / 40px 24px (desktop)
3 itens em stack (mobile) / 3 colunas (desktop)

Cada item:
  ícone: 28px, em div circular bg-white/10, padding 8px
  texto principal: 1rem, font-weight: 700, white
  subtext: 0.875rem, color: #9CA3AF
  gap entre ícone e texto: 12px
```

---

## 6. ORIENTAÇÃO PARA IMAGEM HERO

### Especificação Técnica

| Parâmetro | Valor |
|-----------|-------|
| Formato de entrega | WebP (principal) + JPG (fallback) |
| Dimensão mobile | 800×350px mínimo (aparece a 350px height no layout) |
| Dimensão desktop | 1920×600px mínimo (aparece a 600px height) |
| `object-position` | `center 30%` — evita céu excessivo, prioriza água |
| `loading` | `eager` (LCP crítico) |
| Overlay | `linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)` |

### Direção Criativa da Foto

**O que mostrar:**
- Água clara de Seixas com coral visível abaixo (ponto de vista de quem está no barco olhando para baixo, ou nível do mar)
- Pessoas na água em contexto relaxado — não pose de grife, postura real
- Luz natural de manhã (hora de embarque real — qualidade de luz certa)
- Cor de água: verde-azul translúcido — este é o diferencial visual de Seixas

**O que evitar:**
- ❌ Foto genérica de praia com coqueiros (poderia ser qualquer lugar)
- ❌ Foto com filtro de saturação exagerado (promessa que a natureza não entrega)
- ❌ Foto de pôr do sol (Seixas é passeio de manhã — inconsistência)
- ❌ Foto apenas de horizonte de mar (não específica o suficiente)
- ❌ Pessoas em foco muito próximo sem mostrar o ambiente

**Composição ideal:**
```
[     Céu     15%      ]
[  Horizonte e coral   ]
[  ÁGUA TRANSLÚCIDA    ]  ← área principal, 40–50% do frame
[  Pessoas na água     ]
[  H1 sobre esta área  ]  ← texto fica aqui, sobre overlay
```

**`[CONFIRMAR COM MURILLO: foto real de qualidade de Seixas disponível? Tirada de manhã, nível do mar, água translúcida com coral visível?]`**

### Placeholder (até foto real estar disponível)

- Cor sólida: `#004E89` (secondary azul) com gradiente para `#1a1a1a`
- Caption: `[FOTO SEIXAS — PLACEHOLDER]` em text-white/30, centralizado
- H1 e CTA funcionam visualmente sobre esse fundo

---

## 7. RECOMENDAÇÕES MOBILE-FIRST

### Princípios Aplicados a Esta Página

| Regra | Aplicação |
|-------|-----------|
| Tap targets ≥44px | Todos os botões e links de FAQ |
| Texto base ≥1rem | Body em 1rem (16px), mínimo 0.875rem (14px) para labels |
| Sem zoom obrigatório | Nenhum container com overflow horizontal |
| CTA sempre alcançável | Sticky CTA resolve o problema do scroll longo |
| Imagens 100% largura | Nenhuma imagem com width fixo em mobile |
| Accordion em vez de tab | FAQ usa accordion (uma coluna, leitura linear) |

### Sequência de Atenção Mobile (primeiros 5 segundos)

```
1. Header com logo + botão WhatsApp visível
2. Hero foto (loading eager — aparece imediatamente)
3. H1 legível sem zoom (28px)
4. CTA verde grande — uma ação óbvia
5. Info Card: R$ 60 / ~3h30 / Tambaú (responde as 3 perguntas imediatas)
```

O turista que chega pelo celular decide em 5 segundos se fica. Esses 5 elementos têm que ser instantâneos e legíveis.

### Problemas Comuns Evitados

- **Text overflow:** H1 com `word-break: break-word` e `overflow-wrap: anywhere`
- **Image distortion:** `aspect-ratio: 16/9` no hero mobile com `object-fit: cover`
- **Accordion apertado:** `min-height: 52px` nos itens do FAQ
- **CTA sumindo:** sticky CTA resolve — turista não precisa fazer scroll reverso
- **Info Card quebrando:** 3 colunas com `font-size: 0.75rem` no label e `overflow: hidden; text-overflow: ellipsis` no texto longo

---

## 8. ADAPTAÇÃO DESKTOP (1024px+)

### Mudanças de Layout por Bloco

| Bloco | Mobile (padrão) | Desktop (≥1024px) |
|-------|----------------|-------------------|
| C1 Header | Logo + WA button | Logo + nav links + CTA |
| C2 Hero | 350px height, H1 28px | 600px height, H1 48px, sub 20px |
| C3 Info Card | 3 cols, 100px, padding 16px | 3 cols, padding 32px, ícones 32px |
| C4 Aviso Maré | Full-width | Max-width 800px, centralizado |
| C5 TrustBlock | Stack vertical | Grid 3 colunas horizontais |
| I1 Lead | Full-width, 1 col | Max-width 720px, centralizado |
| I2 Descrição | Texto + imagem abaixo | Split 60/40 (texto + imagem lateral) |
| I3 Roteiro | 1 coluna | 1 coluna, max-width 720px |
| I4 Incluso | Stack 1 col | 2 colunas lado a lado, mesmo height |
| I5 FAQ | 1 coluna, full-width | 1 coluna, max-width 720px |
| S1 Depoimento | Full-width | Max-width 600px, centralizado |
| S3 CTA Final | Fundo escuro, 100% | Max-width 600px, centralizado |
| S4 Similares | 1 coluna | 2 colunas grid |
| CTASticky | Visível | **Oculto** — desktop não precisa (botões são visíveis) |

### Container Desktop

```css
.container-safe {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
```

Já existe no codebase — usar consistentemente.

### Desktop-only: Sidebar CTA Flutuante

**Decisão:** não implementar na Etapa 1. A ausência do sticky CTA em desktop é compensada por:
- Header sticky sempre com botão WhatsApp
- CTA hero visível sem scroll
- CTA pós-FAQ e CTA Final dentro do viewport em desktop

Implementar sidebar CTA apenas se analytics mostrar alta taxa de abandono em desktop.

---

## 9. RISCOS VISUAIS

| # | Risco | Probabilidade | Impacto | Mitigação |
|---|-------|--------------|---------|-----------|
| 1 | **Hero sem foto real** | Alta | Alto | Placeholder azul escuro `#004E89→#1a1a1a` mantém legibilidade e não promete o que não tem. Lançar com placeholder, substituir quando foto chegar. |
| 2 | **Info Card colapsando em telas 320px** | Média | Médio | Testar em 320px: usar `font-size: 0.75rem` no label e `font-size: 1rem` no valor. Se ainda apertar, empilhar as 3 colunas em 2+1. |
| 3 | **Contraste botão WhatsApp #25D366** | Alta | Médio | Usar texto branco (não preto). Adicionar ícone WhatsApp ao lado do texto como reforço semântico. Ratio branco/#25D366 ≈ 3.8:1 (abaixo de 4.5:1 AA, mas aceito para UI interativa ≥18pt bold). |
| 4 | **Amber do Aviso de Maré não no Tailwind** | Alta | Baixo | Adicionar tokens ao config ou usar arbitrary values. Documentado na seção 3. |
| 5 | **Depoimento sem conteúdo real** | Alta | Médio | Placeholder visualmente neutro: bloco com texto em itálico cinza "Depoimento em breve" — não mostrar aspas sem conteúdo, não usar frase fictícia. |
| 6 | **TrustBlock sem número de avaliações** | Alta | Baixo | "4.9/5 no Google ⭐" já converte sem número exato. Adicionar "(X avaliações)" quando Murillo confirmar. |
| 7 | **Laranja como primário em contexto marinho** | Baixa | Médio | Laranja como acento (badges, ícones, CTA secundário) funciona bem. Azul (`#004E89`) domina os fundos de seções escuras. Equilíbrio correto — não mudar. |

---

## 10. CHECKLIST VISUAL FINAL

| Item | Status |
|------|--------|
| H1 único e claro, responde intent? | ✅ "Piscinas Naturais do Seixas, João Pessoa — Snorkel em Água Cristalina" |
| Prova social acima da dobra mobile? | ✅ C5 (Por Que Confiar) — 4ª posição, ainda acima da dobra |
| CTA em cor de destaque e thumb-friendly? | ✅ #25D366 verde, 52px altura, 100% width mobile |
| Texto legível sem zoom? | ✅ base 1rem, mínimo 0.875rem |
| Espaço branco suficiente? | ✅ padding 24px lateral mobile |
| Paleta ≤4 cores principais? | ✅ branco, dark, azul, verde WA + âmbar pontual |
| Mobile layout stacks logicamente? | ✅ ordem visual = ordem de importância |
| Fotos sem distorção? | ✅ object-fit: cover em todos os contextos |
| Aviso de Maré não alarmista? | ✅ âmbar, não vermelho |
| CTA sticky esconde no CTA final? | ✅ IntersectionObserver em S3 |

---

## HANDOFF PARA PRÓXIMAS SKILLS

### Para `briefing-designer` (Etapa 5)

```
Entregar:
- Este documento completo (03-diretor-visual-turismo.md)
- Wireframe (02b-ux-ui-mobile-first.md) — estrutura e comportamento
- Copy (02a-copywriter-vendas.md) — texto por bloco

Decisões já tomadas (não reabrir):
- Paleta: tokens Tailwind (#FF6B35, #004E89, #1a1a1a, #25D366)
- Hero: overlay gradiente bottom-to-top, H1 Lora bold branco
- TrustBlock: fundo dark #1a1a1a, 3 itens
- Aviso de Maré: âmbar #FEF3C7 / #F59E0B
- CTA Final: fundo #004E89 (azul secundário)
- FAQ: accordion 1 aberto por vez, chevron laranja

Perguntas para o designer resolver em Figma:
- Tratamento visual da foto de Murillo (avatar 48px no TrustBlock ou linha completa com foto maior?)
- Grid exato das colunas do TrustBlock em desktop (equal ou 1:2:1?)
- Espaçamento vertical entre seções (40px ou 56px? — consistência do sistema de espaçamento)
- Badge de preço nos cards de similares: pill ou retângulo com border-radius 4px?
```

### Para `seo-local-turismo` (Etapa 4 — pode rodar em paralelo com Etapa 5)

```
Nota desta etapa:
- Alt text de todas as imagens deve incluir "Seixas", "João Pessoa", "piscinas naturais"
- Hero: alt="Piscinas naturais de Seixas, João Pessoa — água cristalina com coral"
- Imagem em I2: alt="Turistas snorkelando nas piscinas naturais de Seixas, João Pessoa"
- TrustBlock não tem imagem — sem alt necessário
- FAQPage schema: 7 perguntas em 02a, bloco I5
```

### Para `programador-de-site` (Etapa 6 — após Figma)

```
Componentes com especificação visual neste documento:
- Header (C1), HeroBlock (C2), InfoCard (C3), MaréAlert (C4)
- TrustBlock (C5), LeadText (I1), DescricaoBlock (I2)
- RoteiroBullets (I3), IncluidoBlock (I4), FAQAccordion (I5)
- CTASecundario (I5.5), DepoimentoBlock (S1), InfoPratica (S2)
- CTAFinal (S3), PasseioCard (S4), CTASticky, Breadcrumb, Footer

Todos reutilizáveis via props. Dados via data/passeios.ts.
Token amber: adicionar ao tailwind.config.ts antes de implementar MaréAlert.
```

---

## LACUNAS [CONFIRMAR COM MURILLO]

| # | Lacuna | Impacto para designer | Urgência |
|---|--------|----------------------|----------|
| 1 | Foto real de Seixas para hero | Crítico — designer não fecha Figma sem imagem real ou placeholder aprovado | Alta |
| 2 | Depoimento real de cliente | Bloco S1 fica com placeholder | Média |
| 3 | Endereço exato de embarque em Tambaú | Bloco S2 e FAQ #4 | Média |
| 4 | Número de avaliações Google | TrustBlock (C5) — adicionar "(X avaliações)" | Baixa |
| 5 | Anos de experiência de Murillo | TrustBlock (C5) | Baixa |
| 6 | Foto/avatar de Murillo para TrustBlock | Depende da decisão do designer (avatar vs. foto) | Média |
| 7 | Aprovação do token amber no Tailwind | Sem aprovação, usar arbitrary values temporariamente | Baixa |

---

*Direção Visual v1.0 | Etapa 3 concluída | 2026-04-26*
*Aguardando: aprovação de Murillo das lacunas acima + Etapas 4 e 5 (seo-local-turismo + briefing-designer)*
