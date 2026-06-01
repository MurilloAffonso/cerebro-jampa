# Handoff Técnico — Vem Passear em Jampa

**Gerado em:** 2026-05-05
**Estado de referência:** branch `main` — pós-commit BLOCO B, pré-commit HomeVideoHero.
**Finalidade:** visão consolidada do estado técnico do projeto para qualquer colaborador (IA ou humano) que retome o trabalho.

---

## Stack

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Framework | Next.js (App Router) | 14.x |
| UI | React | 18.x |
| Linguagem | TypeScript | 5.x |
| Estilo | Tailwind CSS | 3.x |
| Fontes | Inter (body), Lora (headings), DM Sans, DM Mono | via `next/font/google` |
| Deploy | — | [CONFIRMAR COM MURILLO] |
| Domínio | — | [CONFIRMAR COM MURILLO] |

**Comandos (rodar dentro de `_site/`):**

```bash
npm run dev          # Dev: http://localhost:3000
npm run build        # Build de produção
npm run type-check   # TypeScript — zero erros antes de commitar
npm run lint         # ESLint
```

---

## Rotas Principais

| Rota | Tipo | Status |
|------|------|--------|
| `/` | Home | ✅ Ativa |
| `/passeios` | Catálogo | ✅ Ativa |
| `/passeios/[categoria]` | Lista por categoria (6 categorias) | ✅ Ativa |
| `/passeios/[categoria]/[slug]` | Página de passeio (22 passeios) | ✅ Ativa |
| `/passeios/piscinas-naturais/calendario` | Calendário de marés | ✅ Ativa |
| `/faq` | FAQ geral | ✅ Ativa |
| `/servicos/transfer-24h` | Serviço de transfer | ✅ Ativa — `preco: null` (P1) |
| `/blog/` | Hub do blog | ✅ Ativa — fallback "Em preparação" |
| `/blog/[slug]` | Posts individuais | ✅ Só `published` gera — 10 em draft |
| `/sobre` | — | ✅ Retorna `notFound()` — intencional |

**Total de páginas geradas no build:** 42 (verificado em 2026-05-02).

---

## Fluxo de Dados

```
_conhecimento/ (vault) → _site/data/ → componentes → páginas
```

- `data/passeios.ts` — 22 passeios + funções `getPasseiosPrioritarios()`, `getPasseio()`, `isCampoIndisponivel()`
- `data/empresa.ts` — nome, CNPJ, Cadastur, WhatsApp, rating, `provasSociais`
- `data/blog.ts` — 10 posts (todos em `status: "draft"`)
- `data/tabua-mares.ts` — 31 dias de maio/2026 via surfguru (`revisadoPorMurillo: false`)

**Regra inviolável:** nunca hardcodar dados de passeio, preço, WhatsApp ou empresa em componente. Sempre via `data/`.

---

## Componentes Principais

| Componente | Arquivo | Usado em |
|-----------|---------|---------|
| `HomeVideoHero` | `components/HomeVideoHero.tsx` | Home |
| `CategoryCard` | `components/CategoryCard.tsx` | Home |
| `PasseioCard` | `components/PasseioCard.tsx` | Home, /passeios, /passeios/[cat] |
| `MurilloBlock` | `components/MurilloBlock.tsx` | Home |
| `CTAFinal` | `components/CTAFinal.tsx` | Home, passeios |
| `WaveDivider` | `components/WaveDivider.tsx` | Home |
| `TrustBlock` | `components/TrustBlock.tsx` | ⚠️ Criado, não integrado em passeios ainda (S4) |
| `HeroBlock` | `components/HeroBlock.tsx` | Páginas de passeio |
| `InfoCard` | `components/InfoCard.tsx` | Páginas de passeio |
| `FAQAccordion` | `components/FAQAccordion.tsx` | Páginas de passeio, /faq |
| `ProximaSaidaCard` | `components/ProximaSaidaCard.tsx` | Passeios com maré |
| `MareAlert` | `components/MareAlert.tsx` | Passeios com maré |
| `DepoimentoBlock` | `components/DepoimentoBlock.tsx` | Páginas de passeio |
| `ReviewsBlock` | `components/ReviewsBlock.tsx` | Páginas de passeio |
| `IncluidoBlock` | `components/IncluidoBlock.tsx` | Páginas de passeio |
| `Experience360Block` | `components/Experience360Block.tsx` | Páginas de passeio |
| `CTASticky` | `components/CTASticky.tsx` | Páginas de passeio |
| `PasseioImage` | `components/PasseioImage.tsx` | Páginas de passeio |
| `Breadcrumb` | `components/Breadcrumb.tsx` | Páginas de passeio |
| `Header` | `components/Header.tsx` | Layout global |
| `Footer` | `components/Footer.tsx` | Layout global |
| `ButtonPrimary` | `components/ButtonPrimary.tsx` | Vários |

---

## Utilitários

| Arquivo | Exportações principais |
|---------|----------------------|
| `lib/seo.ts` | `generateMetadata()`, `generateFAQSchema()`, `generateTouristAttractionSchema()`, `generateLocalBusinessSchema()`, `slugify()`, `gerarUrlPasseio()` |
| `lib/utils.ts` | `cn()`, `formatPreco()`, `getInitials()`, `isCampoIndisponivel()` |
| `lib/tabua-mares.ts` | `getProximaSaida()`, `getJanelasSaida()` |
| `types/index.ts` | `SeoMeta`, `Categoria`, `Passeio`, `Depoimento`, `InfoCard`, `BreadcrumbItem` |
| `types/tabua-mares.ts` | `SaidaDia`, `JanelaSaida`, `ProximaSaidaCard` |

---

## Design Tokens (Tailwind)

Definidos em `_site/tailwind.config.ts` — DS v1.2 (commitado no BLOCO B).

| Token | Valor |
|-------|-------|
| `primary` | `#FF6B35` (laranja) |
| `secondary` | `#004E89` (azul) |
| `accent` | `#F77F00` |
| `dark` | `#1A1A2E` |
| `whatsapp` | `#25D366` |
| `bg-soft` | `#FAFAF8` |
| `container-safe` | max-w-7xl, padding horizontal responsivo |
| `section-padding` | py-14 md:py-20 |

Mobile-first obrigatório: base (320px) → `sm:` → `md:` (768px) → `lg:` (1024px).

---

## Estado Atual da Home

A home (`_site/app/page.tsx`) foi redesenhada nesta sprint. Estrutura atual:

1. **HomeVideoHero** — vídeo em loop com overlay, H1, subtítulo, 2 CTAs, prova social
2. **WaveDivider** — transição hero → categorias
3. **Categorias** — 6 CategoryCards coloridos
4. **WaveDivider** — transição categorias → prioritários
5. **Passeios Prioritários** — grid de PasseioCards (`getPasseiosPrioritarios()`)
6. **MurilloBlock** — identidade do Murillo + CTA WhatsApp
7. **CTAFinal** — variante laranja, texto de fechamento

**Obs.:** `HomeVideoHero` referencia `/videos/home/hero-poster.jpg` e `/videos/home/hero-jampa.{webm,mp4}` — arquivos ainda não existem (S7).

---

## Estado Atual das Páginas de Passeio

Template único: `_site/app/passeios/[categoria]/[slug]/page.tsx`

Blocos implementados:
- HeroBlock (título, rating, badge de categoria)
- InfoCard (duração, preço, saída, pessoas)
- MareAlert (quando `dependeDeMare: true`)
- ProximaSaidaCard (quando `dependeDeMare: true`)
- Roteiro (lista de paradas)
- IncluidoBlock
- DepoimentoBlock
- ReviewsBlock
- FAQAccordion
- Experience360Block
- CTAFinal
- Breadcrumb + schemas SEO

**Faltando:** `TrustBlock` ainda não integrado (S4).

---

## Estado Atual do SEO

| Item | Status |
|------|--------|
| `LocalBusiness/TravelAgency` schema | ✅ no layout global |
| `TouristAttraction` schema | ✅ em cada página de passeio |
| `FAQPage` schema | ✅ em /faq e passeios |
| `BreadcrumbList` schema | ✅ em passeios |
| `Article` schema | ✅ no blog |
| Sitemap | ✅ exclui draft, /sobre, /calendario |
| robots.txt | ✅ bloqueia /sobre/, /calendario/ |
| OG images | ⚠️ genéricas — sem imagem por passeio ainda (C1) |
| Rich Results Test | 🔲 não validado (pós-deploy) |
| Google Search Console | 🔲 sitemap não submetido |

---

## Estado Atual do CRM

| Item | Status |
|------|--------|
| `_crm/leads.csv` | ✅ Válido — 18 leads, 12 campos por linha |
| Alerta P2 (jampa-doctor) | ✅ Falso positivo — sem correção técnica necessária |
| Estorno Jair e Ana | ⚠️ Verificar com Murillo (linha 17) |
| Lead Picaozinho sem nome | ⚠️ Retomar (linha 15, último contato 30/04) |
| Registro completo de leads | 🔲 Sessão 1h com Murillo pendente |

---

## Riscos Técnicos

| Risco | Impacto | Mitigação |
|-------|---------|----------|
| `preco: null` no Transfer 24h | Página não converte — exibe "Consultar" | Murillo confirma preço → Claude atualiza `data/servicos.ts` |
| `revisadoPorMurillo: false` na tábua de marés | ProximaSaidaCard exibe fallback WhatsApp | Murillo valida tabela de maio/2026 |
| Sem vídeo/poster no hero | Hero exibe fundo escuro apenas | Criar `hero-poster.jpg` placeholder (S7) |
| 10 posts de blog em draft | Massa SEO zero no blog | Publicar 1 por vez com checklist `docs/seo-blog-fase-2.md` |
| Workflows n8n com ids órfãos (P3) | Jarvis falha se executar task inexistente | Auditar `_automacao/workflows/*.json` antes de produção |
| `executar-issue` fora de `skills/` (P1) | Doctor emite aviso; inconsistência no manifest | Decisão de Murillo: mover ou documentar exceção |

---

## Arquivos Modificados Não Commitados

| Arquivo | Tipo | Mudança |
|---------|------|---------|
| `_site/app/page.tsx` | M (modificado) | Hero substituído por `<HomeVideoHero>` |
| `_site/public/images/README.md` | M (modificado) | Não identificado (pré-existente) |
| `_site/components/HomeVideoHero.tsx` | ?? (novo, não rastreado) | Componente de hero em vídeo |
| `_site/public/videos/` | ?? (novo, não rastreado) | Pasta de assets de vídeo |
| `planejamento/sprint-atual.md` | ?? (novo, não rastreado) | Este sprint |
| `planejamento/backlog-principal.md` | ?? (novo, não rastreado) | Backlog principal |
| `docs/handoff-tecnico.md` | ?? (novo, não rastreado) | Este arquivo |
| `_conhecimento/retrospectiva.md` | ?? (novo, não rastreado) | Registro de aprendizados |

**Não commitados (aguardam aprovação de Murillo).**

---

## Comandos Úteis

```bash
# Na raiz do projeto (CEREBRO.JAMPA/)
git status --short
git log -3 --oneline
git diff --stat

# Em _site/
npm run type-check    # TypeScript — deve passar com zero erros
npm run build         # Build completo — 42 páginas esperadas
npm run lint          # ESLint

# Doctor (antes de commitar skills/ ou schemas/)
node _automacao/scripts/jampa-doctor.mjs
```
