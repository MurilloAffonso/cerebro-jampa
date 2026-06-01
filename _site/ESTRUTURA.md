# Estrutura Técnica do Site — Guia Rápido

> ⚓ **Fonte canônica:** `../FONTE-DA-VERDADE.md` (raiz). Quando este guia divergir, o FONTE-DA-VERDADE vence.

## 🗂️ Onde Está o Quê?

### Páginas (Rotas) — todas sob `app/[locale]/...` (locale ∈ pt | en | es)

| Rota | Arquivo | Status |
|------|---------|--------|
| `/{locale}` (Home) | `app/[locale]/page.tsx` | ✅ Vivo (HomeVideoHero, categorias, prioritários, MurilloBlock, CTAFinal) |
| `/{locale}/passeios` | `app/[locale]/passeios/page.tsx` | ✅ Vivo (hub geral) |
| `/{locale}/passeios/[categoria]` | `app/[locale]/passeios/[categoria]/page.tsx` | ✅ Vivo (6 hubs de categoria) |
| `/{locale}/passeios/[categoria]/[slug]` | `app/[locale]/passeios/[categoria]/[slug]/page.tsx` | ✅ Vivo (22 passeios via template único) |
| `/{locale}/servicos/transfer-24h` | `app/[locale]/servicos/transfer-24h/page.tsx` | ⚠️ Vivo — `preco: null` pendente |
| `/{locale}/servicos/excursoes-e-grupos` | `app/[locale]/servicos/excursoes-e-grupos/page.tsx` | ✅ Vivo (lead alternativo) |
| `/{locale}/faq` | `app/[locale]/faq/page.tsx` | ✅ Vivo |
| `/{locale}/tabua-de-mares-joao-pessoa` | `app/[locale]/tabua-de-mares-joao-pessoa/page.tsx` | ✅ Vivo |
| `/{locale}/blog` | `app/[locale]/blog/page.tsx` | ✅ Hub — 10 posts em `draft` |
| `/{locale}/blog/[slug]` | `app/[locale]/blog/[slug]/page.tsx` | ⏳ Gera só posts `published` |
| `/{locale}/sobre` | `app/[locale]/sobre/page.tsx` | ⚠️ Retorna `notFound()` — ISSUE-22 pendente |
| `sitemap.xml`, `robots.txt`, `icon.svg` | `app/sitemap.ts`, `app/robots.ts`, `app/icon.svg` | ✅ Globais |

### Componentes (39)

Principais: `Header`, `Footer`, `HomeVideoHero`, `HomePasseiosSection`, `HeroBlock`, `PasseioCard`, `PasseioGallery`, `PasseioCronograma`, `FichaTecnica`, `InfoCard`, `ButtonPrimary`, `FAQAccordion`, `MurilloBlock`, `MareAlert`, `ProximaSaidaCard`, `TabuaMareMensal`, `TabuaMareMesTabs`, `TabuaMarePasseiosRelacionados`, `TrustBlock`, `GoogleReviewsBlock`, `ReviewsBlock`, `ReviewSlider`, `ClientesReviewsBlock`, `CadasturCertificate`, `DepoimentoBlock`, `Experience360Block`, `IncluidoBlock`, `PoliticaCancelamento`, `CTAFinal`, `CTASticky`, `Breadcrumb`, `Analytics`, `PartnersMarquee`, `LanguageSelector`, `ReservationIntentForm`, `WaveDivider`, `HeroBadgePills`, `PasseioImage`, `CategoryCard`, `CategoryIcon`.

### Dados

| Arquivo | Conteúdo | Origem |
|---|---|---|
| `data/passeios.ts` | 22 passeios (template canônico) | `_conhecimento/catalogo_vempassear_estruturado.md` |
| `data/passeios.i18n.ts` | Traduções EN/ES dos passeios | mesma |
| `data/empresa.ts` | CNPJ, Cadastur, WhatsApp, rating, NAP | `_conhecimento/empresa.md` |
| `data/servicos.ts` | Transfer 24h (`preco: null` ⚠️) | `_conhecimento/base-operacional-comercial.md` |
| `data/blog.ts` / `blog.i18n.ts` | 10 posts (todos em `draft`) | redação interna |
| `data/cronogramas.ts` | Cronogramas por passeio | `_conhecimento/` |
| `data/google-reviews.ts` | Reviews extraídas do GMB | `google-business-profile/` |
| `data/tabua-mares.ts` | Maio/2026 (`revisadoPorMurillo: false` ⚠️) | CHM via importador |
| `data/tabua-mares-manual.ts` | Fallback manual | Murillo |
| `data/descontos.ts` | Descontos comerciais | `_memoria/` |

### Utilitários

| Arquivo | Uso |
|---|---|
| `lib/seo.ts` | `generateMetadata()`, `generateFAQSchema()`, `slugify()` |
| `lib/utils.ts` | `cn()`, `formatPreco()`, `getInitials()` |
| `types/index.ts` | Tipos globais (SeoMeta, Categoria, etc) |

### Estilos

| Arquivo | Tipo | Escopo |
|---|---|---|
| `styles/globals.css` | CSS | Base + @tailwind + componentes |
| `tailwind.config.ts` | Config | Cores, spacing, fonts |

### Configuração

| Arquivo | Para Quê |
|---|---|
| `next.config.ts` | Next.js config |
| `tsconfig.json` | TypeScript + path aliases |
| `package.json` | Dependencies + scripts |
| `tailwind.config.ts` | Tailwind customizado |
| `postcss.config.js` | PostCSS plugins |

---

## 🚀 Como Implementar Cada Tipo de Coisa

### Adicionar um Passeio Novo

1. Abra `_conhecimento/catalogo_vempassear_estruturado.md` (vault)
2. Copie dados: nome, preço, duração, rotário, etc
3. Adicione em `data/passeios.ts` (array de passeios)
4. Pronto — a rota dinâmica `/passeios/[categoria]/[slug]` já vai funcionar

### Atualizar Preço de um Passeio

1. Edite `data/passeios.ts`
2. Mude o campo `preco` no passeio específico
3. Confirme que está sincronizado com vault

### Criar uma Seção Nova na Home

1. Abra `app/page.tsx`
2. Adicione `<section>` novo
3. Use componentes do `components/` (HeroBlock, InfoCard, etc)
4. Aplique estilos com Tailwind (classes)

### Adicionar FAQ a Uma Página

1. Defina array de items: `[{ pergunta: "...", resposta: "..." }]`
2. Importe `FAQAccordion` de `components/FAQAccordion.tsx`
3. Use: `<FAQAccordion items={items} />`
4. Schema JSON-LD é automático

### Otimizar SEO de Uma Página

1. Abra `lib/seo.ts` — helpers prontos
2. Use `generateMetadata()` no Page
3. Adicione `<h1>`, `<h2>`, `<h3>` semânticos
4. Adicione `alt` em imagens (`<Image>`)
5. Links internos para outras páginas (breadcrumb, related)

---

## 🎨 Cores, Fontes, Spacing

### Paleta de Cores (v2 — oficial 2026-05-09, ver `tailwind.config.ts:11-44`)

```
primary       #107997  (ocean — links, CTAs, headings)
primary-light #128AAD  (hover, gradientes)
secondary     #092238  (navy profundo — header/footer fundo, texto escuro)
deep / dark   #163149  (títulos em fundo claro)
areia         #C5B7A3  (bordas, separadores)
acento        #D97706  (laranja-falésia — CTAs de conversão, badges)
acento-suave  #FBBF24  (estrelas, ícones)
texto-escuro  #0D1F2D  (body)
texto-medio   #374151  (texto secundário)
texto-claro   #6B7280  (meta, legendas)
fundo / bg-soft / bg-warm  #F7F8F7  (fundo de página)
fundo-puro    #FFFFFF  (cards, modais)
borda         #DDD5C8  (bordas suaves)
whatsapp      #25D366  (CTA WhatsApp)
sucesso       #10B981
erro          #DC2626
```

Use via Tailwind: `text-primary`, `bg-secondary`, `text-acento`, etc.

> ❌ Paleta antiga (#FF6B35 laranja / #004E89 azul) era v1, **fora de uso** desde 2026-05-09.

### Fonts

- **Body / sans:** **DM Sans** (`var(--font-dm-sans)`)
- **Headings / serif:** **Lora** (`var(--font-lora)`)
- **Mono:** `ui-monospace`
- Carregadas via `next/font/google` no `app/[locale]/layout.tsx`

> ❌ Inter **não** é mais a fonte body (era v1).

### Spacing / Breakpoints (mobile-first sempre)

- Base: 320px (mobile)
- `md:` 768px (tablet)
- `lg:` 1024px (desktop)

Use Tailwind responsivo: `px-4 md:px-6 lg:px-8`. Escala tipográfica canônica em `tailwind.config.ts` (`fontSize`: `hero`, `h2`, `h3`, `h4`, `kicker`, `body`, `body-lg`).

---

## ✅ Checklist: Pronto Para Home?

- [ ] `data/passeios.ts` tem pelo menos 3 passeios preenchidos
- [ ] `data/empresa.ts` tem dados corretos (WhatsApp, Cadastur)
- [ ] `app/page.tsx` tem todas as seções (hero, prova social, categorias, FAQ, CTA)
- [ ] Componentes (Header, Footer, HeroBlock, InfoCard) estão funcionando
- [ ] Estilos Tailwind aplicados (cores, spacing)
- [ ] Meta tags na home
- [ ] Mobile responsivo (teste em 320px)
- [ ] Sem erros TypeScript (`npm run type-check`)
- [ ] Links internos funcionam
- [ ] CTA WhatsApp clicável

---

## 🚨 Armadilhas Comuns

❌ **Inventar dados** → Sempre puxar de `_conhecimento/`  
❌ **Esquecer `alt` em imagens** → Adicionar sempre  
❌ **Mobile não responsivo** → Testar sempre em 320px  
❌ **Copy diferente do aprovado** → Copiar exato do vault  
❌ **Links quebrados** → Validar URLs dinâmicas  
❌ **Meta tags faltando** → Adicionar em toda página  

---

## 📚 Referências

- Skill `programador-de-site` — Padrões detalhados
- `_memoria/decisoes-estrategicas.md` — Decisões de conteúdo
- `_conhecimento/seo-local-joao-pessoa.md` — Otimizações SEO
- `skills/estrategista-de-site/SKILL.md` — Jornada do turista

---

**Versão:** 0.2.0 | **Data:** 2026-05-29 | **Status:** Site em produção, Fase 1 em consolidação
