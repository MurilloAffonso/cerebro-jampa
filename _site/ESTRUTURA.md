# Estrutura Técnica do Site — Guia Rápido

## 🗂️ Onde Está o Quê?

### Páginas (Rotas)

| Rota | Arquivo | Objetivo | Status |
|------|---------|----------|--------|
| `/` (Home) | `app/page.tsx` | Porta de entrada, descobre | ⚠️ Placeholder |
| `/passeios/[categoria]` | `app/passeios/[categoria]/page.tsx` | Lista passeios da categoria | ⚠️ Placeholder |
| `/passeios/[categoria]/[slug]` | `app/passeios/[categoria]/[slug]/page.tsx` | Detalhe do passeio | ⚠️ Placeholder |
| `/sobre` | `app/sobre/page.tsx` | Murillo + empresa | ✅ Estrutura |
| `/blog` | — | Blog (Phase 2) | ❌ Não existe |

### Componentes Reutilizáveis

| Componente | Arquivo | Uso | Status |
|---|---|---|---|
| Header | `components/Header.tsx` | Navbar + logo + CTA | ✅ Básico |
| Footer | `components/Footer.tsx` | NAP + links + social | ✅ Básico |
| HeroBlock | `components/HeroBlock.tsx` | Seção hero com imagem | ✅ Pronto |
| InfoCard | `components/InfoCard.tsx` | Preço + duração + saída | ✅ Pronto |
| ButtonPrimary | `components/ButtonPrimary.tsx` | CTA padrão | ✅ Pronto |
| FAQAccordion | `components/FAQAccordion.tsx` | FAQ expandível + schema | ✅ Pronto |

### Dados

| Arquivo | Tipo | Conteúdo | Síncronia |
|---|---|---|---|
| `data/passeios.ts` | TypeScript | 29 passeios (placeholder) | ← Vault |
| `data/empresa.ts` | TypeScript | CNPJ, Cadastur, contato | ← Vault |

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

### Paleta de Cores

```
Primary  (ocean):    #107997   ← era laranja
Secondary (navy):    #092238   ← era azul
Accent  (ocean -10%): #0E6B85   ← hover
Dark    (navy):      #092238   ← era #1A1A2E
Navy:                #092238
Deep:                #163149
Ocean:               #107997
Sand:                #C5B7A3
Bone:                #F7F8F7
WhatsApp (verde):    #25D366   ← exclusivo botões/ações WhatsApp
Light (cinza neutro): #ECEFF1   ← apenas hover do menu
```

Use via Tailwind: `text-primary`, `bg-secondary`, `bg-navy`, `text-ocean`, etc.
Tokens legados `#FF6B35` / `#004E89` / `#1A1A2E` removidos da identidade — só sobrevivem em assets de placeholder/galeria.

### Fonts

- Sans (corpo): Inter
- Serif (títulos): Lora
- Carregadas via `next/font/google` (otimizadas)

### Spacing / Breakpoints

- Mobile: < 768px
- Tablet: 768px — 1024px
- Desktop: > 1024px

Use Tailwind responsivo: `px-4 md:px-6 lg:px-8`

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

**Versão:** 0.1.0 | **Data:** 2026-04-25 | **Status:** Base pronta para Fase 2
