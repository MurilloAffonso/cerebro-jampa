# Vem Passear em Jampa — Site Oficial

Site oficial da agência de turismo receptivo **Vem Passear em Jampa** em João Pessoa, Paraíba.

**Missão:** Ajudar turistas a descobrir João Pessoa com atendimento rápido, confiança e orientação prática.

> ⚓ **Fonte canônica deste projeto:** `../FONTE-DA-VERDADE.md` (raiz do CEREBRO.JAMPA). Quando este README divergir, o `FONTE-DA-VERDADE.md` vence.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript 5.x (strict)
- **Styling:** Tailwind CSS 3.x
- **i18n:** next-intl 4.12 — locales: `pt`, `en`, `es`
- **Analytics:** @vercel/analytics
- **Deployment:** **Vercel** (oficial)
- **Package Manager:** npm

---

## Estrutura do Projeto

```
_site/
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout pass-through
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── icon.svg
│   └── [locale]/                     # Locale dinâmico (pt | en | es)
│       ├── layout.tsx                # html lang + fonts + metadataBase
│       ├── page.tsx                  # Home
│       ├── not-found.tsx
│       ├── faq/page.tsx
│       ├── sobre/page.tsx            # retorna notFound() — ISSUE-22
│       ├── tabua-de-mares-joao-pessoa/page.tsx
│       ├── blog/
│       │   ├── page.tsx              # Hub
│       │   └── [slug]/page.tsx       # Posts (10 em draft)
│       ├── servicos/
│       │   ├── transfer-24h/page.tsx
│       │   └── excursoes-e-grupos/page.tsx
│       └── passeios/
│           ├── page.tsx              # Hub
│           └── [categoria]/
│               ├── page.tsx          # 6 hubs de categoria
│               └── [slug]/page.tsx   # 22 passeios — template único
│
├── components/                       # 39 componentes (Header, Footer, HomeVideoHero,
│                                     #  PasseioCard, PasseioGallery, FAQAccordion,
│                                     #  TabuaMareMensal, GoogleReviewsBlock,
│                                     #  CadasturCertificate, TrustBlock,
│                                     #  ReservationIntentForm, MurilloBlock,
│                                     #  CTAFinal, CTASticky, Breadcrumb, etc.)
│
├── data/                             # Dados estruturados (fonte: _conhecimento/)
│   ├── passeios.ts                   # 22 passeios — template canônico
│   ├── passeios.i18n.ts              # Traduções EN/ES
│   ├── empresa.ts                    # CNPJ, Cadastur, contatos
│   ├── servicos.ts                   # Transfer 24h (preco: null pendente)
│   ├── blog.ts / blog.i18n.ts        # 10 posts em draft
│   ├── cronogramas.ts
│   ├── descontos.ts
│   ├── google-reviews.ts
│   ├── tabua-mares.ts                # Maio/2026 (revisadoPorMurillo: false)
│   └── tabua-mares-manual.ts
│
├── lib/                              # Utilitários
│   ├── seo.ts                        # generateMetadata, schemas JSON-LD,
│   │                                 #  slugify, buildLocaleAlternates
│   ├── whatsapp.ts                   # buildWhatsAppUrl, intents por passeio
│   ├── gallery.ts                    # getPasseioGalleryImages + fallback
│   ├── tabua-mares.ts                # buildProximaSaidaCard, janelas
│   ├── badges.ts
│   ├── consultar.ts                  # isCampoIndisponivel
│   ├── navigation.ts                 # next-intl Link/redirect wrapper
│   ├── tracking.ts
│   ├── utils.ts                      # cn, formatPreco, getInitials
│   ├── passeios-i18n.ts
│   ├── blog.ts / blog-i18n.ts
│
├── i18n/                             # next-intl config
│   ├── request.ts
│   └── routing.ts
├── messages/                         # pt.json, en.json, es.json (~50 KB cada)
├── middleware.ts                     # next-intl middleware (locale routing)
│
├── types/                            # SeoMeta, Categoria, Passeio, etc.
│   ├── index.ts
│   └── tabua-mares.ts
│
├── styles/globals.css                # Tailwind base + camadas customizadas
├── public/                           # images/, videos/, parceiros/, credenciais/,
│                                     #  og-image.svg
│
├── docs/                             # PRD, ADRs (0001-3), issues, plano de assets,
│                                     #  fontes de imagens, dossiê SEO/concorrência
├── briefings-designer/               # Briefings do designer (entregas anteriores)
├── planejamento/                     # Pipelines de seixas, areia-vermelha,
│                                     #  litoral-sul-classico, tabua-mares
│
├── CONTEXT.md                        # Glossário canônico e decisões de domínio
├── ESTRUTURA.md                      # Mapa rápido de onde está o quê
├── I18N-ARCHITECTURE.md              # Decisão de arquitetura multilíngue
├── package.json
├── tsconfig.json
├── next.config.js                    # Redirects + headers + i18n plugin
├── tailwind.config.ts                # Paleta v2 oficial
├── postcss.config.js
├── vercel.json                       # Config de deploy
└── README.md                         # este arquivo
```

> Pastas vazias remanescentes: `paginas/`, `seo/`. Pendentes de remoção em fase de limpeza técnica.

---

## Como Rodar Localmente

### Instalação

```bash
cd _site
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

---

## Dados e Conteúdo

### Catálogo Oficial (ADR 0001)

**23 itens comerciais = 22 passeios + 1 serviço**

| Categoria | URL slug | Qtd |
|---|---|---|
| Pacotes | `pacotes` | 3 |
| Litoral Sul | `litoral-sul` | 6 |
| Litoral Norte | `litoral-norte` | 5 |
| Piscinas Naturais | `piscinas-naturais` | 4 |
| City Tour | `city-tour` | 1 |
| Interestaduais | `interestaduais` | 3 |
| **Total passeios** | | **22** |
| Serviço (Transfer 24h) | `transfer-24h` | 1 |

> Documentos que ainda citam "29 passeios" (ex.: `_conhecimento/clusters-seo.md`, `_conhecimento/estrutura-site-recomendada.md`) são legado pré-consolidação de 2026-04-30 — considerar `_conhecimento/base-operacional-comercial.md` como verdade.

### Fonte de Verdade

**Todos os dados são puxados do vault, na ordem:**

1. `_conhecimento/passeios.md` (índice)
2. `_conhecimento/catalogo_vempassear_estruturado.md` (preço, roteiro, duração, saída)
3. `_conhecimento/base-operacional-comercial.md`
4. `_conhecimento/empresa.md`
5. `_conhecimento/tom-de-voz.md`
6. `_conhecimento/seo-local-joao-pessoa.md`
7. `_memoria/decisoes-estrategicas.md`

### Como Atualizar Dados

1. **Passeios:** Edite `data/passeios.ts` (em sync com vault) — manter `passeios.i18n.ts` alinhado
2. **Empresa:** Edite `data/empresa.ts` (em sync com vault)
3. **Conteúdo textual:** Altere a página em `app/[locale]/...` e o respectivo `messages/{locale}.json`

**Regra:** NUNCA inventar preço, roteiro, duração, ponto de embarque, depoimento ou parceria. Sempre validar com `_conhecimento/`. Se faltar dado, marcar `[CONFIRMAR COM MURILLO: ...]`.

---

## SEO e Performance

### Otimizações Já Implementadas

- ✅ **Next/Image:** Otimização automática de imagens
- ✅ **Metadata dinâmica:** Meta tags corretas por página
- ✅ **Schema JSON-LD:** Estrutura de dados para Google
- ✅ **Mobile-first:** Design responsivo desde o início
- ✅ **Core Web Vitals:** Performance otimizada (LCP < 2.5s)

### Checklist antes de Deploy

- [ ] Todas imagens têm alt text descritivo
- [ ] Meta description e OG tags em cada página
- [ ] Links internos corretos (breadcrumb, navegação)
- [ ] Mobile responsivo (teste em 320px, 768px, 1024px)
- [ ] CTA WhatsApp funcional
- [ ] Sem console errors
- [ ] Schema.org validation OK

---

## Acessibilidade

- ✅ WCAG AA (mínimo)
- ✅ Contraste 4.5:1+ em body text
- ✅ Focus states em botões
- ✅ 44px+ tap targets
- ✅ Semantic HTML (h1, h2, nav, etc)

---

## Variáveis de Ambiente

Crie `.env.local` na raiz do `_site/` (não commitar — está no `.gitignore`):

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+5583990878300
NEXT_PUBLIC_DOMAIN=https://www.vempassearjampa.com
```

> WhatsApp oficial é **+55 83 9908-7830** (`https://wa.me/558399087830`) — Decisão 22.

---

## Deploy (Vercel)

Confirmado oficial em 2026-05-29 (headers HTTP retornam `server: Vercel`, `x-vercel-id: gru1`).

1. Push para `main` no repositório Git
2. Vercel já está conectado ao repositório, com `_site/` como root
3. Build automático: `npm run build` (Next.js detectado)
4. Deploy direto em `https://www.vempassearjampa.com`
5. Plugin `@vercel/analytics` ativo (`_site/components/Analytics.tsx`)

> `netlify.toml` na raiz é legado da fase Netlify — **não usar**.

### Domínio

- **Oficial:** `https://www.vempassearjampa.com` (canonical)
- `https://vempassearjampa.com` (sem www) → redirect 308 para www (`next.config.js:22-28`)
- `vempassearjampa.com.br` reservado, **não configurado** — não usar até DNS pronto
- `vempassearjampa.netlify.app` — **aposentado**

---

## Decisões Técnicas

Veja:
- `CLAUDE.md` (raiz do projeto) — Regras gerais
- `_memoria/politica-uso-claude-code.md` — Stack oficial (Next.js)
- `_memoria/decisoes-estrategicas.md` — Decisões de posicionamento
- `skills/programador-de-site/SKILL.md` — Padrões implementação

---

## Status (snapshot 2026-05-29)

Fase 1 (Site e SEO Local) — em consolidação. Site em produção em `www.vempassearjampa.com`.

### Vivo em produção

- 22 passeios + 1 serviço renderizados via template único, com i18n PT/EN/ES
- 6 hubs de categoria, hub geral `/passeios/`, `/faq/`, `/tabua-de-mares-joao-pessoa/`
- Schemas JSON-LD (LocalBusiness, TouristAttraction, FAQPage, BreadcrumbList, Article)
- CTA WhatsApp em todas as páginas
- Squad Comercial (Pipelines I–M) operando manualmente via `_crm/leads.csv`

### Bloqueios HITL (pendem de Murillo)

| Item | Local |
|---|---|
| Vídeo hero + poster | `public/videos/home/` (vazia) |
| Fotos reais Seixas / Areia Vermelha / Picãozinho | `public/images/passeios/{slug}/` |
| Foto profissional de Murillo | `MurilloBlock` |
| Depoimentos reais (mínimo 2) | `ReviewsBlock` |
| `preco: null` em Transfer 24h | `data/servicos.ts` |
| 10 posts de blog em `draft` | `data/blog.ts` |
| Tábua maio/2026 `revisadoPorMurillo: false` | `data/tabua-mares.ts` |

Próxima frente técnica documentada em `../_memoria/proximos-passos.md`.

---

## Contato e Dúvidas

**Proprietário:** Murillo Affonso Soledade de Oliveira
**Email:** vempassearjampa@gmail.com
**WhatsApp oficial:** [+55 83 9908-7830](https://wa.me/558399087830)
**Cadastur:** 52.077.577 (válido até 16/12/2026)
**CNPJ:** 52.077.577/0001-03

---

**Versão:** 0.2.0
**Última revisão:** 2026-05-29 (Fase 1 — limpeza e verdade única)
**Status:** Produção viva — Fase 1 em consolidação
