# Handoff Visual — Home Vem Passear Jampa
**Para:** Claude Code / Dev Next.js + Tailwind CSS  
**Data:** 2026-05-01  
**Baseado em:** Mockup `Home Vem Passear Jampa.html`  
**Stack:** Next.js 14 · Tailwind CSS · `app/page.tsx`

---

## 1. Sistema de Design Aplicado

### Tipografia

| Uso | Família | Peso | Tamanho (mobile → desktop) | Tailwind |
|-----|---------|------|---------------------------|---------|
| H1 (Hero) | Lora (serif) | 700 | `clamp(44px, 7.5vw, 84px)` | `text-4xl md:text-6xl lg:text-7xl font-bold` |
| H2 (seções) | Lora (serif) | 700 | `clamp(28px, 4vw, 46px)` | `text-3xl md:text-4xl lg:text-5xl font-bold` |
| H3 (cards) | Lora (serif) | 700 | `clamp(20px, 2.4vw, 26px)` | `text-xl md:text-2xl font-bold` |
| Body principal | DM Sans | 400 | 17–18px | `text-lg` |
| Body secundário | DM Sans | 400 | 14–15px | `text-sm md:text-base` |
| Label / kicker | DM Sans | 700 | 11px, `letter-spacing: 2.5px`, uppercase | `text-xs font-bold uppercase tracking-widest` |
| Monospace (placeholders) | DM Mono | 400 | 9–11px | `font-mono text-[10px]` |

**Google Fonts a importar:**
```
Lora:wght@400;700
DM+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400
DM+Mono
```

### Paleta (sem alteração nos tokens existentes)

| Token | Valor | Uso no redesign |
|-------|-------|----------------|
| `primary` | `#FF6B35` | CTAs, badges, destaques, checkmarks, acento tipográfico |
| `secondary` | `#004E89` | Fundo CTA alternativo, links, botão secundário |
| `dark` | `#1A1A2E` | Fundo hero, footer, texto principal |
| `bg-light` | `#FAFAF8` | Fundo seções alternadas (levemente quente, não branco puro) |
| `text` | `#1F2937` | Corpo de texto |
| `muted` | `#6B7280` | Subtítulos, textos secundários |
| `surface` | `white` | Cards, blockquotes, badges flutuantes |

**Novas cores de categoria** (não alterar tokens do tailwind.config — aplicar via `style=` ou classes customizadas):

| Categoria | Hex |
|-----------|-----|
| Pacotes | `#004E89` |
| Litoral Sul | `#1A6B52` |
| Litoral Norte | `#7B4F12` |
| Piscinas Naturais | `#0E5E8A` |
| City Tour | `#4A3580` |
| Interestaduais | `#8B1A3A` |

### Espaçamento entre seções

| Breakpoint | Padding vertical das seções |
|------------|----------------------------|
| Mobile (< 768px) | `py-16` (64px) |
| Tablet (768px) | `py-20` (80px) |
| Desktop (1024px+) | `py-28` (112px) |

**Max-width do conteúdo:** `max-w-[1200px] mx-auto px-6`

---

## 2. Header (`Header.tsx`) — Sem redesign estrutural

O Header existente não muda de estrutura. Ajustes de estilo permitidos:

```
height: 64px  →  h-16
background: rgba(250,250,248,0.95) + backdrop-blur(14px)  →  bg-[#FAFAF8]/95 backdrop-blur-md
border-bottom: 1px solid rgba(31,41,55,0.07)  →  border-b border-gray-800/10
```

**Logo:** manter `VP` em bloco laranja `rounded-lg bg-primary`, adicionar subtítulo "em Jampa" em `DM Sans` uppercase abaixo de "Vem Passear".

**CTA Header:** manter link WhatsApp. Estilo: `bg-[#25D366] text-white rounded-full px-4 py-2.5 font-bold text-sm shadow-[0_2px_12px_rgba(37,211,102,0.28)]`

---

## 3. HeroBlock (`HeroBlock.tsx`) — Redesign Sim

### Variação A — Sem foto (padrão atual enquanto foto não chega)

```
background: linear-gradient(145deg, #003d6b 0%, #1A1A2E 50%, #0a2a45 100%)
```

**Elementos decorativos (CSS puro, não alterar sem aprovação):**
- Blob laranja: `position: absolute; top: -15%; right: -8%; width: 60%; aspect-ratio: 1/1; background: radial-gradient(circle, rgba(255,107,53,.3) 0%, transparent 65%); border-radius: 50%; filter: blur(70px);`
- Blob azul: `position: absolute; bottom: 0%; left: -10%; width: 50%; ...rgba(0,78,137,.5)...`
- Wave SVG bottom: opacidade 0.12, `fill="white"`

### Variação B — Com foto (quando foto real estiver disponível)

```tsx
// Em HeroBlock.tsx, trocar o fundo por:
<div className="absolute inset-0">
  <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101e]/97 via-[#0a101e]/45 to-[#0a101e]/15" />
</div>
```

### Layout do conteúdo (ambas as variações)

```
padding-top: clamp(80px, 10vw, 140px)  →  pt-20 md:pt-28 lg:pt-36
padding-bottom: 72px  →  pb-16 md:pb-20
min-height: min(100svh, 800px)  →  min-h-[min(100svh,800px)]
```

**Badge / kicker:**
```tsx
<div className="inline-flex items-center gap-1.5 bg-primary/20 border border-primary/40 rounded-full px-3.5 py-1.5 text-primary text-[11px] font-bold uppercase tracking-[.8px] mb-5">
  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
  João Pessoa, Paraíba
</div>
```

**H1:**
```tsx
<h1 className="font-serif text-[clamp(44px,7.5vw,84px)] font-bold leading-[1.07] text-white tracking-[-2px] max-w-[740px] text-pretty mb-5">
  O Que Fazer em<br />
  <span className="text-primary">João Pessoa?</span>
</h1>
```

**Subtítulo:**
```tsx
<p className="font-sans text-[clamp(16px,2vw,19px)] text-white/75 leading-[1.65] max-w-[500px] text-pretty mb-10">
  Praias paradisíacas, piscinas de corais, catamarã e o pôr do sol mais emocionante do Brasil. Murillo te orienta do jeito certo.
</p>
```

**CTA principal:**
```tsx
<a href={whatsappUrl} className="inline-flex items-center gap-2.5 bg-primary text-white font-sans text-[17px] font-extrabold px-7 py-4 rounded-full shadow-[0_6px_36px_rgba(255,107,53,.45)] tracking-[-0.2px] transition hover:-translate-y-0.5 hover:shadow-[0_10px_44px_rgba(255,107,53,.58)]">
  <WhatsAppIcon /> Montar Meu Roteiro no WhatsApp
</a>
```

**Stats (abaixo do CTA):**
```
margin-top: 56px; border-top: 1px solid rgba(255,255,255,.1); padding-top: 28px;
gap: 32px; flex-wrap: wrap;
```

Valores fixos: `★ 4.9/5 · 61 avaliações Google` | `Cadastur · 52.077.577 — ativo` | `WhatsApp · Atendimento direto`

---

## 4. TrustBlock (`TrustBlock.tsx`) — Redesign Sim

**Remover** a seção "Prova Social" como bloco separado (fundo `#1A1A2E`, 3 colunas). Os dados foram **integrados dentro do Hero** como stats bottom.

Se o `TrustBlock` for mantido em páginas de passeio, aplicar:
```
background: white; border: 1px solid rgba(0,0,0,.07); border-radius: 16px;
padding: 24px; gap: 24px; display: grid; grid-template-columns: repeat(3, 1fr);
```

---

## 5. PasseioCard na Home — Cards de Categoria (novo componente)

**Este é um novo componente** para a Home — não é o `PasseioCard` existente.

```tsx
// Novo: CategoryCard.tsx (ou inline em app/page.tsx)
interface CategoryCardProps {
  slug: string;
  nome: string;
  descricao: string;
  bg: string; // hex da cor de fundo da categoria
  href: string;
  icon: React.ReactNode;
}
```

**Layout:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5`

**Card:**
```
background: [cor da categoria]; border-radius: 16px;
padding: 30px 26px; position: relative; overflow: hidden;
box-shadow: 0 2px 16px rgba(0,0,0,.13);
transition: transform 200ms, box-shadow 200ms;
hover: translateY(-3px), box-shadow: 0 12px 40px rgba(0,0,0,.22);
```

**Overlay interno:** `radial-gradient(circle at 80% 20%, rgba(255,255,255,.09) 0%, transparent 60%)` — posição `absolute inset-0`.

---

## 6. PasseioCard (`PasseioCard.tsx`) — Redesign Sim

**Adicionar imagem full-bleed no card.** O `PasseioCard` existente tem `thumbnail: string | null` — usar quando disponível.

```tsx
// Estrutura do card redesenhado:
<article className="relative rounded-[20px] overflow-hidden aspect-[3/4] bg-[...cor do passeio...] shadow-md transition hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer">
  {/* Imagem (quando disponível) */}
  {thumbnail && (
    <Image src={thumbnail} alt={nome} fill className="object-cover transition-transform duration-300 hover:scale-105" />
  )}
  
  {/* Overlay gradiente bottom */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

  {/* Conteúdo */}
  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
    {/* Badge categoria */}
    <span className="inline-block bg-[...cor categoria...] text-white text-[10px] font-bold uppercase tracking-[.8px] px-3 py-1 rounded-full mb-2.5">
      {categoria}
    </span>
    
    {/* Nome */}
    <h3 className="font-serif text-xl md:text-2xl font-bold text-white tracking-[-0.3px] leading-tight mb-2">
      {nome}
    </h3>
    
    {/* Descrição — só visível no hover (CSS group-hover) */}
    <p className="font-sans text-[13px] text-white/70 leading-relaxed text-pretty mb-4 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300">
      {descricao}
    </p>
    
    {/* Footer do card */}
    <div className="flex items-center justify-between">
      <span className="font-sans text-[12px] text-white/50 flex items-center gap-1">
        <ClockIcon /> {duracao}
      </span>
      <Link href={href} className="inline-flex items-center gap-1.5 bg-primary text-white text-[13px] font-bold px-4 py-2 rounded-full">
        Ver detalhes <ArrowRightIcon />
      </Link>
    </div>
  </div>
</article>
```

**Adicionar `group` na tag `<article>` para o hover funcionar.**

---

## 7. InfoCard (`InfoCard.tsx`) — Não afetado na Home

O `InfoCard` só aparece em páginas de passeio individual. Se redesign visual for aprovado, aplicar:
- 3 colunas com borda separadora vertical
- Ícones SVG por campo (relógio, localização, preço)
- Manter lógica `isCampoIndisponivel()` e link WhatsApp como fallback

---

## 8. Bloco Murillo (novo componente `MurilloBlock.tsx`)

Este bloco não existia como componente separado — estava inline em `app/page.tsx`. Extrair para componente.

```tsx
// Layout: 2 colunas em md+, 1 coluna em mobile
<section className="bg-[#FAFAF8] py-16 md:py-20 lg:py-28 px-6">
  <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
    {/* Coluna avatar */}
    {/* Coluna diferenciais */}
  </div>
</section>
```

**Avatar placeholder → foto real:**
```tsx
// Enquanto foto não existe:
<div className="w-[clamp(150px,20vw,220px)] aspect-square rounded-full bg-[repeating-linear-gradient(135deg,#e8e0d8_0,#e8e0d8_2px,#ede8e2_2px,#ede8e2_14px)] border-4 border-white shadow-xl flex flex-col items-center justify-center gap-1.5">
  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center font-serif font-bold text-2xl text-white">M</div>
</div>

// Quando foto real chegar — só trocar este div por:
<div className="relative w-[clamp(150px,20vw,220px)] aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl">
  <Image src="/images/murillo.jpg" alt="Affonso Murillo" fill className="object-cover object-top" />
</div>
```

**Badge Cadastur flutuante:**
```tsx
<div className="absolute bottom-2.5 -right-3.5 bg-white rounded-xl px-3.5 py-2 shadow-lg">
  <div className="text-[9px] text-gray-400 uppercase tracking-[.5px] mb-0.5">Cadastur</div>
  <div className="text-[13px] font-bold text-secondary">52.077.577</div>
</div>
```

**Diferenciais:** 4 itens, cada um com `w-7 h-7 rounded-lg bg-primary/12` + checkmark laranja SVG.

---

## 9. CTAFinal (`CTAFinal.tsx`) — Redesign Sim

**Props existentes mantidas:** `whatsappUrl`, `titulo`, `subtitulo`, `textoBotao`

**Variação Laranja (padrão):**
```
background: #FF6B35
botão: bg-white text-primary
shadow: 0 8px 40px rgba(0,0,0,.14)
```

**Variação Azul Escuro (alternativa):**
```
background: #004E89
botão: bg-primary text-white
shadow: 0 8px 40px rgba(255,107,53,.35)
```

**Layout:**
```tsx
<section id="cta-final" className="relative overflow-hidden py-16 md:py-20 lg:py-24 px-6" style={{ background: bgColor }}>
  {/* Blob decorativo */}
  <div className="absolute -top-1/4 -right-[8%] w-[45%] aspect-square rounded-full blur-[50px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,.14) 0%, transparent 70%)' }} />
  
  <div className="relative z-10 max-w-[680px] mx-auto text-center">
    {/* kicker */}
    <p className="text-[11px] font-bold uppercase tracking-[2.5px] mb-3.5" style={{ color: labelColor }}>Pronto para conhecer João Pessoa?</p>
    
    <h2 className="font-serif text-[clamp(28px,5vw,54px)] font-bold leading-[1.1] text-white tracking-[-1px] text-pretty mb-4">
      {titulo}
    </h2>
    <p className="font-sans text-lg leading-relaxed mb-9" style={{ color: subtitleColor }}>
      {subtitulo}
    </p>
    <a href={whatsappUrl} className="inline-flex items-center gap-3 font-sans text-lg font-extrabold px-9 py-4.5 rounded-full tracking-[-0.2px] transition hover:-translate-y-1 hover:scale-[1.02]" style={{ background: btnBg, color: btnColor, boxShadow: btnShadow }}>
      <WhatsAppIcon size={22} /> {textoBotao}
    </a>
    <p className="font-sans text-[13px] mt-3.5" style={{ color: footerColor }}>Resposta em minutos · Sem compromisso</p>
  </div>
</section>
```

---

## 10. Footer (`Footer.tsx`) — Ajuste parcial

**O que muda:**
- Substituir texto "VP" por logo no bloco `VP` em `rounded-lg bg-primary`
- Adicionar subtítulo "em Jampa" abaixo de "Vem Passear"
- Espaçamento entre links: `gap-[9px]`
- Remover qualquer link para `/sobre` (já aprovado)

**O que NÃO muda:**
- Dados de `empresa.ts` — CNPJ, Cadastur, WhatsApp
- Links de navegação aprovados
- Estrutura de 3 colunas

---

## 11. Wave Dividers (novo componente utilitário)

Entre a seção Categorias e a seção Passeios, usar SVG wave como separador visual:

```tsx
// WaveDivider.tsx
export function WaveDivider({ fill, bg, flip = false }: { fill: string; bg: string; flip?: boolean }) {
  return (
    <div style={{ background: bg, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
           style={{ width: '100%', height: 56, display: 'block', transform: flip ? 'scaleY(-1)' : 'none' }}>
        <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z" fill={fill} />
      </svg>
    </div>
  );
}
```

Uso: `<WaveDivider fill="white" bg="#FAFAF8" />` antes da seção Passeios, `<WaveDivider fill="white" bg="#FAFAF8" flip />` depois.

---

## 12. Animações de entrada

Usar `animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both` com delays escalonados (0.05s → 0.45s) para as seções ao carregar. Em Next.js, usar `framer-motion` ou CSS `@keyframes` com `animation-fill-mode: both`.

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

Alternativamente, usar a IntersectionObserver para acionar quando a seção entra no viewport.

---

## 13. O que o dev NÃO deve mudar

| Item | Por quê |
|------|---------|
| URLs e slugs | Alterar quebra SEO |
| Schema JSON-LD | `TouristAttraction`, `FAQPage`, `BreadcrumbList` — não tocar |
| Props de dados dos componentes | `HeroBlock`, `PasseioCard`, `InfoCard` — interface de props mantida |
| Link do WhatsApp | Sempre via `empresa.contato.whatsappLink` de `data/empresa.ts` |
| Lógica `isCampoIndisponivel()` | Mantida no `InfoCard` |
| Guarda `texto.startsWith("[")` | Mantida no `DepoimentoBlock` |
| Estrutura do `Header` | Navegação aprovada — links já definidos |
| `CTASticky` | IntersectionObserver depende de IDs `hero-section` e `cta-final` — mantidos |
| Tokens no `tailwind.config.ts` | Não renomear — usados em todo o site |
| `MareAlert` | Dado de segurança — não esconder nem tornar opcional |

---

## 14. Componentes afetados — resumo

| Componente | Status | O que muda |
|-----------|--------|-----------|
| `HeroBlock` | **Redesign** | Layout, tipografia, badge, stats integrados, blobs decorativos, variação com/sem foto |
| `PasseioCard` | **Redesign** | Full-bleed com overlay, image thumbnail, badge de categoria, hover state |
| `TrustBlock` | **Integrado no Hero** | Dados migrados para stats bottom do hero. TrustBlock mantido para páginas de passeio |
| `CTAFinal` | **Redesign** | Tipografia maior, blob decorativo, variação laranja/azul |
| `Footer` | **Ajuste parcial** | Logo em bloco, espaçamentos |
| `CategoryCard` | **Novo** | Cards de categoria coloridos para a Home |
| `MurilloBlock` | **Novo** | Extrair de `app/page.tsx` para componente próprio |
| `WaveDivider` | **Novo** | SVG wave utilitário entre seções |
| `Header` | **Sem redesign estrutural** | Apenas ajuste de estilo do logo |
| `ButtonPrimary` | **Ajuste** | `rounded-full` (já era), sombra colorida com `rgba(255,107,53,.45)` |
| `IncluidoBlock` | **Sem alteração na Home** | Reavaliar quando página de passeio for redesenhada |
| `FAQAccordion` | **Sem alteração** | Estrutura semântica protegida |
| `Breadcrumb` | **Sem alteração** | Schema BreadcrumbList protegido |

---

*Documento gerado em 2026-05-01 com base no mockup HTML aprovado.*  
*Referência visual: `Home Vem Passear Jampa.html`*
