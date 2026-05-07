# Handoff para Claude Code — Home Vem Passear em Jampa

> **Versão:** 1.0 · **Data:** 2026-05-01  
> **Referência visual:** `Home Vem Passear Jampa.html`  
> **Stack:** Next.js 14 · Tailwind CSS · TypeScript  
> **Objetivo:** Implementar redesign visual da Home sem alterar dados, URLs, schema ou lógica de negócio.

---

## Direção Visual

**Nome:** Editorial Tropical Refinado

Posicionamento entre revista de viagem de qualidade e autenticidade nordestina. Não resort genérico, não panfleto de turismo. Caloroso, confiável, direto. Hierarquia tipográfica agressiva com serif nos títulos e sans-serif refinado no corpo. Uso dramático e cirúrgico da cor — laranja como acento de conversão, azul como âncora de confiança, fundo quase-branco levemente quente.

---

## Tokens Visuais

### Paleta de cores

| Token | Nome | Hex | Uso |
|-------|------|-----|-----|
| `primary` | Laranja CTA | `#FF6B35` | CTAs, badges, destaques, checkmarks, acento H1 |
| `secondary` | Azul principal | `#004E89` | Links, botão secundário, CTA Final variante |
| `dark` | Azul escuro | `#1A1A2E` | Fundo hero, footer, texto escuro |
| `whatsapp` | Verde WhatsApp | `#25D366` | CTA header e mobile menu exclusivamente |
| `bg-light` | Fundo claro | `#FAFAF8` | Fundo seções alternadas — levemente quente, não branco puro |
| `surface` | Branco | `#FFFFFF` | Cards, blockquotes, badges flutuantes |
| `text` | Texto principal | `#1F2937` | Corpo de texto em fundos claros |
| `muted` | Texto secundário | `#6B7280` | Subtítulos, labels, textos de apoio |

**Cores de categoria** (aplicar via `style=` inline — não criar tokens Tailwind novos):

| Categoria | Hex |
|-----------|-----|
| Pacotes | `#004E89` |
| Litoral Sul | `#1A6B52` |
| Litoral Norte | `#7B4F12` |
| Piscinas Naturais | `#0E5E8A` |
| City Tour | `#4A3580` |
| Interestaduais | `#8B1A3A` |

### Tipografia

**Importar no `layout.tsx` via `next/font/google`:**

```
Lora — weights: 400, 700 — uso: títulos (serif)
DM Sans — weights: 400, 500, 600, 700, 800 — uso: corpo, labels, CTAs
DM Mono — weight: 400 — uso: placeholders técnicos (remover em produção)
```

**Escala por seção:**

| Elemento | Família | Peso | Tamanho mobile | Tamanho desktop | Letter-spacing |
|----------|---------|------|---------------|----------------|----------------|
| H1 Hero | Lora | 700 | 44px | 84px (`clamp(44px,7.5vw,84px)`) | −2px |
| H2 seções | Lora | 700 | 28px | 46px (`clamp(28px,4vw,46px)`) | −1px |
| H3 cards | Lora | 700 | 20px | 26px | −0.3px |
| Kicker / label | DM Sans | 700 | 11px | 11px | +2.5px, uppercase |
| Body principal | DM Sans | 400 | 16px | 17–18px | 0 |
| Body secundário | DM Sans | 400 | 14px | 14–15px | 0 |
| CTA botão | DM Sans | 800 | 16px | 17–18px | −0.2px |
| Nav links | DM Sans | 500 | 14px | 14px | 0 |
| Footer links | DM Sans | 400 | 14px | 14px | 0 |

**Line-height:** H1/H2 → `1.07–1.12` · Body → `1.6–1.65` · Cards → `1.5`

---

## Alterações por Seção

### Header
- Altura: `64px` fixo (`h-16`), sticky, `backdrop-blur-md bg-[#FAFAF8]/95`
- Borda inferior: `1px solid rgba(31,41,55,0.07)`
- Logo: bloco `36×36px` `rounded-lg bg-primary` com "VP" em Lora bold 15px branco + texto "Vem Passear / em Jampa" ao lado
- Nav desktop: links em DM Sans 14px/500, hover `text-primary`, `gap-7`
- CTA header: `bg-[#25D366] text-white rounded-full px-4 py-2.5 font-bold text-sm` com sombra verde
- Mobile: hamburger 22×22px, menu dropdown com links 16px e CTA verde full-width

### Hero
- `min-height: min(100svh, 800px)`, fundo escuro, conteúdo centralizado verticalmente
- **Variação A (sem foto):** `background: linear-gradient(145deg, #003d6b 0%, #1A1A2E 50%, #0a2a45 100%)` + dois blobs decorativos com `filter: blur(70px)` + wave SVG no bottom
- **Variação B (com foto):** `<Image fill className="object-cover">` + overlay `bg-gradient-to-t from-[#0a101e]/97 via-[#0a101e]/45 to-transparent`
- Sequência de conteúdo: badge → H1 com `<span className="text-primary">` → subtítulo → CTA laranja → stats bottom
- **Stats bottom:** `★ 4.9/5 · 61 avaliações Google` | `Cadastur · 52.077.577` | `WhatsApp · Atendimento direto` — separados por `border-t border-white/10 pt-7 mt-14`
- Animações de entrada: `fadeUp` com delays escalonados 0.05s → 0.45s por elemento

### Prova Social
- **Removida como seção separada.** Dados integrados nos stats do Hero.
- O componente `TrustBlock` é mantido para páginas de passeio individual — não remover.

### Categorias
- `background: #FAFAF8`
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5`
- Cards: `rounded-2xl p-[30px_26px]` com cor de fundo da categoria + overlay radial interno sutil
- Ícone SVG no topo (40×40px, stroke white, opacidade 0.75)
- Título: Lora 700 21px branco · Descrição: DM Sans 14px `rgba(255,255,255,0.7)`
- Hover: `translateY(-3px)` + `shadow-2xl`
- Seta: `ArrowRight` absolute bottom-right no modo grid, `ml-auto` no modo lista
- Link "Ver todos os 22 passeios" abaixo do grid: `text-secondary font-semibold border-b-2`

### Passeios Prioritários
- `background: white`, separado por wave SVG antes e depois
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]`
- Cards: `aspect-ratio: 3/4`, `rounded-[20px]`, fundo por gradiente do passeio
- Overlay: `bg-gradient-to-t from-black/90 via-black/30 to-transparent`
- Conteúdo: badge categoria (cor da categoria) → H3 Lora → descrição (visível no hover) → duração + CTA laranja
- Hover: `translateY(-5px)` + sombra maior + descrição expande

### Bloco Murillo
- `background: #FAFAF8`
- Layout: `grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center`
- **Avatar placeholder:** círculo `clamp(150px,20vw,220px)` com fundo listrado + círculo laranja "M" centralizado + badge Cadastur flutuante `bottom-2.5 -right-3.5`
- **Quando foto real chegar:** substituir div por `<Image fill className="object-cover object-top">` no mesmo wrapper circular — sem alterar layout
- Assinatura: Lora bold → DM Sans muted → `<blockquote>` com `border-l-[3px] border-primary`
- Diferenciais: 4 itens com `w-7 h-7 rounded-lg bg-primary/12` + checkmark SVG `#FF6B35`
- Botão secundário: `bg-secondary text-white rounded-full`

### CTA Final
- `id="cta-final"` — obrigatório para o `CTASticky` funcionar via IntersectionObserver
- Variante laranja: `background: #FF6B35` · botão `bg-white text-primary`
- Variante azul: `background: #004E89` · botão `bg-primary text-white`
- Padding: `py-16 md:py-20 lg:py-24`
- Blob decorativo: `radial-gradient` absolute top-right, `filter: blur(50px)`
- Botão: `text-lg font-extrabold px-9 py-[18px] rounded-full`, hover `scale(1.02) translateY(-3px)`
- Label acima do H2: 11px DM Sans 700 uppercase tracking-widest
- Texto abaixo do botão: "Resposta em minutos · Sem compromisso" em 13px muted

### Footer
- `background: #1A1A2E`
- 3 colunas: `grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14`
- Coluna 1: logo VP + nome + descrição + Cadastur
- Coluna 2: nav com todos os links aprovados
- Coluna 3: WhatsApp + localização
- Bottom bar: `border-t border-white/8 pt-5` com copyright e URL

### Menu Mobile
- Dropdown abaixo do header fixo, `background: #FAFAF8`
- Links: 16px DM Sans 500, `border-b border-black/6`, padding `py-[11px]`
- CTA WhatsApp: botão verde full-width `rounded-full` no final da lista
- Tap target mínimo: `44px` (usar `py-3` no mínimo em todos os links)

---

## Componentes Afetados

| Componente | Arquivo | Tipo de alteração | Prioridade |
|-----------|---------|------------------|-----------|
| `HeroBlock` | `HeroBlock.tsx` | Redesign completo | Alta |
| `PasseioCard` | `PasseioCard.tsx` | Redesign completo — adicionar imagem full-bleed | Alta |
| `CTAFinal` | `CTAFinal.tsx` | Redesign visual — manter props | Alta |
| `Footer` | `Footer.tsx` | Ajuste parcial — logo e espaçamentos | Média |
| `Header` | `Header.tsx` | Ajuste de estilo — sem alterar nav | Média |
| `ButtonPrimary` | `ButtonPrimary.tsx` | `rounded-full` + sombra colorida | Baixa |
| `MurilloBlock` | `MurilloBlock.tsx` (novo) | Extrair de `app/page.tsx` para componente | Alta |
| `CategoryCard` | `CategoryCard.tsx` (novo) | Criar — cards coloridos por categoria | Alta |
| `WaveDivider` | `WaveDivider.tsx` (novo) | SVG wave utilitário entre seções | Baixa |

**Componentes sem alteração:** `FAQAccordion` · `Breadcrumb` · `CTASticky` · `MareAlert` · `ProximaSaidaCard` · `InfoCard` · `DepoimentoBlock` · `ReviewsBlock` · `IncluidoBlock` · `Experience360Block` · `TrustBlock`

---

## Regras de Implementação

### O que implementar

1. Usar `next/font/google` para Lora e DM Sans — nunca CDN externo em produção
2. `clamp()` para escala tipográfica responsiva — não usar breakpoints fixos para fontes
3. `aspect-ratio: 3/4` nos PasseioCards — definir no CSS, não altura fixa
4. Blob decorativos do Hero: CSS puro com `position: absolute` + `filter: blur()` — não usar imagem
5. Wave dividers: SVG inline com `preserveAspectRatio="none"` — não usar imagem
6. Animações de entrada: `@keyframes fadeUp` com `animation-fill-mode: both` e delays escalonados
7. Hover nos cards via `group` + `group-hover:` do Tailwind
8. `id="hero-section"` no HeroBlock e `id="cta-final"` no CTAFinal — obrigatório para CTASticky

### O que manter sem alterar

| Item | Motivo |
|------|--------|
| Todos os textos de copy | Aprovados por Murillo — não editar |
| Dados dos passeios (`data/passeios.ts`) | Fonte única de verdade |
| WhatsApp link | Sempre `empresa.contato.whatsappLink` de `data/empresa.ts` |
| Número Cadastur | `52.077.577` — fixo, vem de `data/empresa.ts` |
| Avaliação Google | `★ 4.9/5 · 61 avaliações` — fixo, vem de `data/empresa.ts` |
| URLs e slugs | Alterar quebra SEO e sitemap |
| Schema JSON-LD | `TouristAttraction`, `FAQPage`, `BreadcrumbList` — não tocar |
| `tailwind.config.ts` tokens | Não renomear nem remover — usados em todo o site |
| Lógica `isCampoIndisponivel()` | Manter no `InfoCard` |
| Guarda `texto.startsWith("[")` | Manter no `DepoimentoBlock` |
| IntersectionObserver do `CTASticky` | Depende dos IDs `hero-section` e `cta-final` |

### Placeholders — instruções explícitas

| Elemento | Placeholder atual | Como implementar | Quando substituir |
|----------|------------------|-----------------|------------------|
| Foto do Hero | Gradiente CSS | `Variação A`: manter gradiente. `Variação B`: `<Image fill>` + overlay | Quando foto real de JP estiver disponível |
| Foto de Murillo | Avatar "M" circular laranja | Div com fundo listrado + círculo laranja "M" | Quando foto profissional de Murillo estiver disponível — layout não muda, só trocar o div por `<Image>` |
| Fotos dos passeios | Gradiente por passeio | Gradiente colorido por passeio no fundo do card | Quando fotos reais chegarem — inserir como `<Image fill>` preservando o overlay |
| Galeria de passeios | SVG placeholder | Manter SVG existente | Fotos reais por passeio prioritário |

---

## Checklist de Validação

### Visual
- [ ] H1 do Hero quebra corretamente em mobile (44px) e desktop (84px)
- [ ] `<span className="text-primary">João Pessoa?</span>` aparece em laranja
- [ ] Badge "João Pessoa, Paraíba" com ponto laranja visível
- [ ] Stats bottom do Hero separados por linha branca translúcida
- [ ] Cards de categoria com cor distinta por categoria (6 cores diferentes)
- [ ] Cards de passeio com `aspect-ratio: 3/4` em todos os breakpoints
- [ ] Descrição do card de passeio **não visível** no estado normal — aparece só no hover
- [ ] Avatar de Murillo com badge Cadastur flutuando `bottom-right`
- [ ] Blockquote com `border-left: 3px solid #FF6B35`
- [ ] CTA Final com blob decorativo visível

### Funcional
- [ ] `id="hero-section"` presente no HeroBlock
- [ ] `id="cta-final"` presente no CTAFinal
- [ ] CTASticky aparece após hero sair do viewport e some ao chegar no CTAFinal
- [ ] Todos os links de WhatsApp abrem `wa.me/558399087830`
- [ ] Nenhum link para `/sobre` no menu nem no footer
- [ ] Menu mobile funciona (abrir/fechar) com tap target ≥ 44px
- [ ] Hover nos cards funciona em desktop; sem hover state quebrado em mobile

### Mobile-first
- [ ] Padding horizontal mínimo: `px-6` (24px) em todas as seções
- [ ] Grid de categorias: 1 coluna em mobile, 2 em tablet, 3 em desktop
- [ ] Grid de passeios: 1 coluna em mobile, 3 em desktop
- [ ] Botão CTA Hero: full-width em mobile (`w-full`) ou `flex-wrap` no container
- [ ] Tap targets: todos os botões e links com altura mínima de 44px
- [ ] Fontes legíveis sem zoom em 375px (mínimo 14px para body)

### SEO / Dados
- [ ] H1 único por página — apenas no Hero
- [ ] Dados de `empresa.ts` (Cadastur, WhatsApp, Google) não hardcoded no componente
- [ ] Schema JSON-LD intacto — validar com Google Rich Results Test
- [ ] `next/image` com `priority` no HeroBlock
- [ ] `alt` text em todas as imagens

### Código
- [ ] Nenhum `console.log` ou `TODO` no código entregue
- [ ] Props existentes de todos os componentes mantidas (não remover `whatsappUrl`, `titulo`, `isH1`, etc.)
- [ ] `"use client"` mantido nos componentes que já tinham (Header, CTASticky, FAQAccordion)
- [ ] Lora e DM Sans carregadas via `next/font/google` — não CDN

---

*Referência visual completa: `Home Vem Passear Jampa.html`*  
*Mapa de componentes: `mapa-tecnico-componentes.md`*  
*Briefing: `site-fase-1-briefing-visual.md`*
