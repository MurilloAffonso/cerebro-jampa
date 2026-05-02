# Handoff para Claude Design — Estrutura Atual do Site

**Data:** 2026-05-02 (atualizado pós-ESTRUTURA-SITE-COMPLETA-02)
**Projeto:** Vem Passear em Jampa
**Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS
**Diretório:** `_site/`
**Fonte estratégica obrigatória:** `_site/docs/dossie-externo-seo-concorrencia-conversao.md` — leia antes de propor qualquer redesign. Tem prioridade sobre intuições genéricas de UX/SEO/copy.

---

## Propósito Deste Documento

Você está recebendo um site **funcional, SEO-correto e tecnicamente sólido**, mas **visualmente cru**. A versão atual prioriza arquitetura, dados e SEO. Sua missão é **redesenhar a camada visual** sem quebrar a estrutura.

> O design atual é **base técnica de referência**, não referência estética.  
> Esperamos que você proponha um design substancialmente mais forte.

---

## Mapa Completo de Rotas (42 páginas)

| Rota | Tipo | Status | Objetivo |
|------|------|--------|----------|
| `/` | estática | ✅ ativa | Home — converter visitante em conversa no WhatsApp |
| `/passeios/` | estática | ✅ ativa | Listagem de todas as 6 categorias + 22 passeios |
| `/passeios/[categoria]/` | SSG | ✅ ativa (×6) | Listagem por categoria |
| `/passeios/[categoria]/[slug]/` | SSG | ✅ ativa (×22) | Página individual de cada passeio |
| `/passeios/piscinas-naturais/calendario/` | estática | ⚠️ interna | Tábua de marés (não SEO) — disallow no robots |
| `/faq/` | estática | ✅ ativa | Perguntas frequentes |
| `/servicos/transfer-24h/` | estática | ✅ ativa | Serviço de transfer 24h |
| `/blog/` | estática | ✅ ativa | Hub editorial — mostra "Guias em preparação" hoje |
| `/blog/[slug]/` | SSG | 🟡 sem páginas | 10 slugs reservados em status `draft` |
| `/sobre` | estática | ❌ 404 | Não tem página própria — só bloco no Footer |
| `/sitemap.xml` | gerada | ✅ ativa | Inclui hub `/blog/` + posts published |
| `/robots.txt` | gerada | ✅ ativa | Bloqueia `/sobre/` e `/passeios/piscinas-naturais/calendario/` |

---

## Objetivo de Cada Página (para redesign)

### `/` Home
**Função comercial:** converter visitante em conversa no WhatsApp em ≤30 segundos.  
**Sequência atual:** Hero → Categorias → 3 Passeios prioritários → Bloco Murillo → CTA Final.  
**Liberdade de redesign:** alta. A hierarquia funciona; o tratamento visual pode mudar tudo.

### `/passeios/`
**Função:** listagem completa para quem quer comparar opções.  
**Hoje:** lista simples com agrupamento por categoria.  
**Liberdade:** explorar filtros, agrupamentos visuais, mapa, ordenação.

### `/passeios/[categoria]/`
**Função:** apresentar cluster temático (ex: Piscinas Naturais) com identidade própria da categoria.  
**Hoje:** listagem básica.  
**Liberdade:** alta — usar cor da categoria, hero próprio, intro editorial.

### `/passeios/[categoria]/[slug]/`
**Função:** vender o passeio individual.  
**Componentes em uso:** `HeroBlock`, `Breadcrumb`, `InfoCard`, `IncluidoBlock`, `Experience360Block`, `MareAlert`, `ProximaSaidaCard`, `ReviewsBlock`, `DepoimentoBlock`, `FAQAccordion`, `TrustBlock`, `CTAFinal`, `CTASticky`.  
**Liberdade:** alta na composição visual. Não remover nenhum componente sem revisar com Murillo.

### `/blog/` e `/blog/[slug]/`
**Função:** SEO de longo prazo + autoridade editorial.  
**Hoje:** hub mostra "Guias em preparação" + lista de clusters; artigos individuais só renderizam se status === "published".  
**Liberdade:** alta — definir layout editorial, tipografia para leitura longa, cards de cluster.

### `/faq/`, `/servicos/transfer-24h/`
**Função:** páginas de suporte/conversão secundária.  
**Liberdade:** redesign completo permitido.

---

## Componentes Existentes

Localização: `_site/components/`

| Componente | Uso | Pode redesenhar? |
|-----------|-----|------------------|
| `Header` | Todas as páginas | ✅ visual sim, estrutura de nav não |
| `Footer` | Todas as páginas | ✅ visual sim, dados de empresa.ts não |
| `HeroBlock` | Páginas de passeio | ✅ |
| `PasseioCard` | Home, listagens | ✅ |
| `CategoryCard` | Home | ✅ |
| `MurilloBlock` | Home | ✅ |
| `CTAFinal` | Home, blog | ✅ |
| `CTASticky` | Página de passeio | ✅ visual sim, IDs `hero-section` e `cta-final` não |
| `WaveDivider` | Home | ✅ ou substituir |
| `Breadcrumb` | Página de passeio | ✅ |
| `InfoCard` | Página de passeio | ✅ visual sim, lógica `isCampoIndisponivel` não |
| `IncluidoBlock` | Página de passeio | ✅ |
| `ProximaSaidaCard` | Passeios com maré | ✅ |
| `MareAlert` | Passeios com maré | ✅ visual sim, conteúdo não |
| `Experience360Block` | Passeios com 360° | ✅ |
| `DepoimentoBlock` | Página de passeio | ✅ visual sim, guarda `texto.startsWith("[")` não |
| `ReviewsBlock` | Página de passeio | ✅ |
| `TrustBlock` | Página de passeio | ✅ |
| `FAQAccordion` | FAQ + Passeio + Blog | ✅ visual sim, semântica `<details>` não |
| `ButtonPrimary` | Genérico | ✅ |
| `PasseioImage` | Página de passeio | ✅ |

---

## Dados Disponíveis

Localização: `_site/data/`

| Arquivo | Conteúdo | Modificável? |
|---------|----------|--------------|
| `empresa.ts` | Nome, CNPJ, Cadastur, WhatsApp, Instagram, rating, missão, diferencial | ❌ apenas Murillo |
| `passeios.ts` | 22 passeios com ID, slug, preço, roteiro, FAQ, depoimentos, imagens | ❌ apenas Murillo |
| `servicos.ts` | Transfer 24h | ❌ apenas Murillo |
| `tabua-mares.ts` | Tábua de marés 2026 para 3 passeios | ❌ |
| `blog.ts` | 10 posts em draft + clusters | 🟡 conteúdo só após Murillo escrever |

**Helpers:** `_site/lib/seo.ts`, `_site/lib/blog.ts`, `_site/lib/consultar.ts`, `_site/lib/tabua-mares.ts`, `_site/lib/utils.ts`

---

## SEO Já Implementado

- `generateMetadata` em todas as páginas (title + description + OpenGraph)
- Schemas:
  - `LocalBusiness` / `TravelAgency` no layout
  - `TouristAttraction` em cada página de passeio
  - `FAQPage` em cada FAQ
  - `BreadcrumbList` em páginas internas
  - `Article` em posts published do blog
- Canonical URLs
- Sitemap dinâmico que respeita status `published`/`draft` do blog
- robots.txt bloqueando rotas internas

**Não tocar:** estrutura de schemas. Pode redesenhar tudo ao redor, mas as funções `generateXxxSchema()` continuam sendo a fonte.

---

## Tokens Visuais Atuais (referência, não dogma)

Tailwind tokens em `_site/tailwind.config.ts`:

```
primary    #FF6B35   (laranja CTA)
secondary  #004E89   (azul confiança)
accent     #F77F00   (hover laranja)
dark       #1A1A2E   (fundo dramático, texto escuro)
surface    #FFFFFF
bg-warm    #FAFAF8   (off-white seções alternadas)
whatsapp   #25D366
muted      #6B7280
body       #1F2937
```

Cores de categoria (inline, ver `app/page.tsx`):

| Categoria | Hex |
|-----------|-----|
| Pacotes | `#004E89` |
| Litoral Sul | `#1A6B52` |
| Litoral Norte | `#7B4F12` |
| Piscinas Naturais | `#0E5E8A` |
| City Tour | `#4A3580` |
| Interestaduais | `#8B1A3A` |

Fontes (via `next/font/google` em `app/layout.tsx`):
- **Lora** (serif) — títulos
- **DM Sans** (sans) — corpo, CTAs

**Liberdade:** trocar tokens, adicionar tokens, refinar paleta. Cores de categoria precisam continuar visualmente distintas.

---

## O Que NÃO Pode Mudar

| Item | Por quê |
|------|---------|
| URLs e slugs | Sitemap submetido, SEO já indexa |
| Dados de `data/*.ts` | Confirmados com Murillo — alteração só com aprovação |
| WhatsApp link | Sempre via `empresa.contato.whatsappLink` — nunca string literal |
| Cadastur, Google rating, CNPJ | Vêm de `empresa.ts` — não hardcoded |
| Schemas JSON-LD | Funções em `lib/seo.ts` — refatorar visual sem tocar saída |
| `notFound()` em `/sobre` | Decisão estratégica — sobre vira bloco no Footer, não página |
| Status `draft` dos posts do blog | Só sobem após Murillo revisar |
| Acessibilidade | `min-h-[44px]` em CTAs, alt text, prefers-reduced-motion |
| Mobile-first | Todo redesign começa em 320px, depois sm/md/lg |

---

## O Que PODE (e deve) Ser Redesenhado

- Toda a camada visual da Home
- Todo o tratamento das páginas de categoria e passeio
- Tipografia (escala, weight, contrast)
- Sistema de cards (passeio, categoria, post)
- Hero (atualmente gradiente CSS — pode virar foto, vídeo, animação leve)
- Componentes auxiliares (badges, divisores, ilustrações)
- Sistema de motion (com `prefers-reduced-motion`)
- Padrões de espaçamento e ritmo vertical
- Identidade visual do blog (estilo editorial)
- Footer (respeitando dados de empresa.ts)
- Header (respeitando estrutura de navegação aprovada)

---

## Padrões Não-Negociáveis

1. **CTA WhatsApp obrigatório em toda página** — link via `empresa.contato.whatsappLink`
2. **Touch target ≥ 44px** em CTAs e elementos interativos
3. **Mobile-first** — base 320px, scaling para cima
4. **`alt` text descritivo** em todas as imagens
5. **`min-h-screen` no `<body>` + `<main>` flex-1** para footer fixo no fundo
6. **`prefers-reduced-motion: reduce`** já implementado em `globals.css` — manter
7. **`container-safe` + `section-padding`** como utilitários base — pode renomear, mas centralizar
8. **Nenhum dado inventado** — se faltar foto ou texto, usar fallback bem feito
9. **Sem dependências novas** sem aprovação (já temos Tailwind + next/font; sem Framer Motion, GSAP, etc.)

---

## Estado Visual Honesto (autoavaliação)

| Aspecto | Nota | Observação |
|--------|------|------------|
| Arquitetura de informação | 9/10 | Hierarquia clara, navegação previsível |
| SEO técnico | 9/10 | Schemas, sitemap, robots, metadata ok |
| Performance base | 8/10 | Páginas com First Load JS ~96 kB |
| Mobile-first | 8/10 | Todos os breakpoints testados |
| Estética visual | **5/10** | Funcional mas seco. Falta sofisticação tipográfica, ritmo, presença de marca |
| Diferenciação visual | **4/10** | Difícil distinguir visualmente da concorrência |
| Identidade de marca | **5/10** | Logo simples, paleta correta mas pouco explorada |

**O que esperamos da próxima iteração:** elevar estética/identidade/diferenciação para 8+/10 sem perder os 9s da arquitetura e SEO.

---

## Como Iniciar o Redesign

1. **Diagnosticar:** rodar `cd _site && npm run dev`, navegar pelas 42 rotas em mobile e desktop, anotar pontos fracos.
2. **Definir direção visual:** propor 1–3 direções (ex: editorial premium, vibe local nordestina, minimal japonês com cor) com referências visuais.
3. **Validar com Murillo:** apresentar mockup da Home antes de tocar código.
4. **Implementar por componente:** começar por `Header`, `HeroBlock`, `PasseioCard` — eles definem 80% da percepção.
5. **Validar:** `npm run type-check && npm run build` precisa passar a cada commit.
6. **Documentar decisões:** atualizar `_site/briefings-designer/finais/` com handoff final.

---

## Documentos Relacionados

| Documento | O quê |
|-----------|-------|
| `_site/docs/dossie-externo-seo-concorrencia-conversao.md` | **Fonte estratégica primária** — concorrência, intenção de busca, blog, fotos, objeções, plano de implementação |
| `_site/docs/prd-site-fase-1.md` | PRD da Fase 1 |
| `_site/docs/seo-blog-fase-2.md` | Plano editorial do blog + checklist de publicação |
| `_site/docs/plano-assets-fotos.md` | Plano de captura e organização de fotos |
| `_site/docs/proximos-passos-site.md` | Roadmap pós-ESTRUTURA-SITE-COMPLETA-02 |
| `_site/docs/adr/0001-estrutura-de-urls.md` | Decisão arquitetural de URLs |
| `_site/docs/adr/0003-sitemap-fase-1.md` | Decisão arquitetural do sitemap |
| `_site/briefings-designer/finais/Handoff Claude Code - Home.md` | Handoff anterior do designer |
| `_site/briefings-designer/finais/Design System - Vem Passear Jampa.html` | Design system anterior (referência, não dogma) |

---

*Documento gerado em 2026-05-02 após ESTRUTURA-SITE-COMPLETA-01. Revisado em 2026-05-02 após ESTRUTURA-SITE-COMPLETA-02 (estrutura técnica fechada; redesign visual liberado).*
