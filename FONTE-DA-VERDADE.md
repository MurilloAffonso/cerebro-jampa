# FONTE-DA-VERDADE — CEREBRO.JAMPA

**Versão:** 1.0
**Fixado em:** 2026-05-29 (Fase 1 — limpeza e verdade única)
**Status:** Canônico — quando qualquer documento divergir deste arquivo, **este arquivo vence**.

> Antes de gerar copy, código, SEO, schema, briefing ou qualquer entrega — abrir este arquivo. Se a dúvida persistir, marcar `[CONFIRMAR COM MURILLO: ...]` e parar.

---

## 1. O que é o CEREBRO.JAMPA

Sistema híbrido em duas camadas para a agência **Vem Passear em Jampa**, em João Pessoa/PB:

1. **Vault de IA estruturado** (`_conhecimento/`, `_memoria/`, `skills/`, `_automacao/`) — fonte de verdade de empresa, passeios, tom, SEO, decisões. 21 skills especializadas orquestradas por `orquestrador-projeto-turismo`. Modelo: `Objetivo → Orquestrador → Pipeline → Skills → Resultado`. IA rascunha; Murillo aprova e envia.
2. **Site Next.js 14 multilíngue** (`_site/`) — produto digital principal, publicado em produção. Catálogo de passeios, blog, tábua de marés, captação por WhatsApp.

**O que NÃO é:** sistema autônomo de reservas; sistema que envia mensagens a clientes sem aprovação humana; CRM completo (usa um CSV mínimo). O canal central de conversão é o **WhatsApp +55 83 9908-7830**.

---

## 2. Identidade Oficial

| Campo | Valor | Fonte |
|---|---|---|
| Nome jurídico | Vem Passear em Jampa | `_conhecimento/empresa.md` |
| Proprietário | Affonso Murillo Soledade de Oliveira | idem |
| CNPJ | 52.077.577/0001-03 | idem |
| Cadastur | 52.077.577 (válido até 16/12/2026) | idem |
| Localização | João Pessoa, Paraíba, Brasil | idem |
| WhatsApp oficial | `+55 83 9908-7830` → `https://wa.me/558399087830` | `CLAUDE.md` + Decisão 22 |
| Email | vempassearjampa@gmail.com | auto-memory |
| Google rating | 4,9★ com 61 avaliações | `_conhecimento/provas-de-confianca.md` |

**Vocabulário oficial** (nunca reverter — Ciclo 2 / `_conhecimento/retrospectiva.md`):

| Errado | Certo |
|---|---|
| Vem Passear Jampa | **Vem Passear em Jampa** |
| Murillo guia / guia local / guia turístico | **orientação local** / **curadoria dos passeios** |
| Murillo — Guia Local | **Murillo — Atendimento e Curadoria** |
| +70 avaliações | **Google 4,9/5 com 61 avaliações** |
| guia credenciado | **operação com parceiros e condutores regularizados** |

---

## 3. Domínio Oficial

**Canônico:** `https://www.vempassearjampa.com`

| Variante | Status | Tratamento |
|---|---|---|
| `https://www.vempassearjampa.com` | ✅ **Oficial em produção** | Usar em `SITE_URL`, `metadataBase`, schemas JSON-LD, sitemap, OG, hreflang |
| `https://vempassearjampa.com` (sem www) | 🔁 Redirect 308 → www | Configurado em `_site/next.config.js:22-28` |
| `https://vempassearjampa.com.br` | ⏳ Não configurado | Domínio reservado; **não usar** até DNS pronto |
| `https://vempassearjampa.netlify.app` | ❌ Aposentado | Era válido na fase Netlify; remover de qualquer doc |

**Onde manter em sincronia:**
- `_site/data/empresa.ts` → `empresa.dominio`
- `_site/lib/seo.ts` → `SITE_URL`, `BRAND_NAME`
- `_site/app/[locale]/layout.tsx` → `metadataBase`
- `_site/app/sitemap.ts`
- `_site/public/robots.txt`
- `_site/public/og-image.svg`
- `_site/next.config.js` (canonical Link header + redirects)

---

## 4. Deploy Oficial

**Plataforma:** **Vercel** (confirmado 2026-05-29 — headers HTTP retornam `server: Vercel`, `x-vercel-id: gru1`).

| Item | Estado |
|---|---|
| Arquivo de config Vercel | `_site/vercel.json` ✅ ativo |
| Plugin Vercel Analytics | `@vercel/analytics ^2.0.1` em `_site/package.json` ✅ |
| `netlify.toml` (raiz) | ⚠️ Legado da fase Netlify — **não usar para deploy**, manter como histórico até confirmar remoção |
| `_archive/netlify.toml` | ✅ Histórico antigo já arquivado |
| Branches Vercel ativas | `vercel/install-vercel-web-analytics-7rqwap`, `vercel/install-vercel-web-analytics-aia7fw` (em `origin/`) |

**Build/Deploy:** push para `main` → Vercel detecta Next.js → build com `_site/` como root → deploy automático.

**Comandos locais (dentro de `_site/`):**

```bash
npm run dev          # http://localhost:3000
npm run build        # build de produção
npm run type-check   # tsc --noEmit — rodar antes de commitar
npm run lint
```

---

## 5. Catálogo Oficial (ADR 0001)

**23 itens comerciais = 22 passeios + 1 serviço**

Fonte de verdade do detalhamento: `_conhecimento/base-operacional-comercial.md` (consolidação 2026-04-30). Sobre referências antigas: `clusters-seo.md` e `estrutura-site-recomendada.md` ainda citam **29 passeios** com URLs `/cluster/` e `/passeio/` — **considerar legado**; URL canônica é `/passeios/[categoria]/[slug]/`.

### 6 categorias de passeios

| Categoria | URL slug | Qtd |
|---|---|---|
| Pacotes | `pacotes` | 3 |
| Litoral Sul | `litoral-sul` | 6 |
| Litoral Norte | `litoral-norte` | 5 |
| Piscinas Naturais | `piscinas-naturais` | 4 |
| City Tour | `city-tour` | 1 |
| Interestaduais | `interestaduais` | 3 |
| **Total passeios** | | **22** |

### Serviço

| Serviço | URL | Estado |
|---|---|---|
| Transfer 24h | `/servicos/transfer-24h` | ⚠️ `preco: null` em `_site/data/servicos.ts` — pendente confirmação Murillo |

### Passeios prioritários (página completa)

1. `/passeios/piscinas-naturais/seixas/`
2. `/passeios/litoral-norte/areia-vermelha-catamara/`
3. `/passeios/litoral-sul/roteiro-classico/`

### Estrutura completa de URLs Fase 1

```
/                                                  Home
/passeios/                                         Hub
/passeios/{categoria}/                             6 hubs de categoria
/passeios/{categoria}/{slug}/                      22 passeios
/passeios/piscinas-naturais/calendario/            calendário de marés
/servicos/transfer-24h/                            1 serviço
/servicos/excursoes-e-grupos/                      lead alternativo
/faq/                                              FAQ centralizada
/tabua-de-mares-joao-pessoa/                       SEO de maré
/blog/                                             hub (10 posts em draft)
/sobre/                                            retorna notFound() — ISSUE-22 pendente
```

Todas as rotas vivem em `_site/app/[locale]/...` com `locale ∈ {pt, en, es}`.

---

## 6. Paleta Oficial (v2 — aprovada 2026-05-09)

Fonte canônica: `_site/tailwind.config.ts:11-44`. Qualquer documento que cite as cores antigas (#FF6B35 laranja, #004E89 azul, Inter) está desatualizado.

### Cores

| Token Tailwind | Hex | Uso |
|---|---|---|
| `primary` | `#107997` (ocean) | Links, CTAs, headings principais |
| `primary-light` | `#128AAD` | Hover do primary, gradientes |
| `accent` (alias) | `#128AAD` | Idem |
| `secondary` | `#092238` (navy profundo) | Header/footer fundo, texto escuro |
| `deep` / `dark` | `#163149` | Títulos em fundo claro |
| `areia` | `#C5B7A3` | Bordas, separadores |
| `acento` | `#D97706` (laranja-falésia) | CTAs de conversão, badges |
| `acento-suave` | `#FBBF24` | Estrelas, ícones |
| `texto-escuro` | `#0D1F2D` | Body |
| `texto-medio` | `#374151` | Texto secundário |
| `texto-claro` | `#6B7280` | Meta, legendas |
| `fundo` / `bg-soft` / `bg-warm` | `#F7F8F7` | Fundo de página |
| `fundo-puro` / `surface` | `#FFFFFF` | Cards, modais |
| `borda` | `#DDD5C8` | Bordas suaves |
| `whatsapp` | `#25D366` | CTA WhatsApp |
| `sucesso` | `#10B981` | Feedback positivo |
| `erro` | `#DC2626` | Feedback negativo |

### Fontes

- **Body / sans:** **DM Sans** (`var(--font-dm-sans)`)
- **Headings / serif:** **Lora** (`var(--font-lora)`)
- **Mono:** `ui-monospace`
- Carregadas via `next/font/google` no `_site/app/[locale]/layout.tsx`.
- ❌ Inter **não** é mais a fonte body (era v1).

### Escala tipográfica e tokens

Definidos em `_site/tailwind.config.ts` (`fontSize`, `boxShadow`, `maxWidth`, `borderRadius`, `transitionDuration`). Mobile-first sempre: base (320px) → `md:` (768px) → `lg:` (1024px).

---

## 7. Stack Oficial

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework | Next.js (App Router) | 14.x |
| UI | React | 18.x |
| Linguagem | TypeScript | 5.x — `strict: true` |
| Estilo | Tailwind CSS | 3.x |
| i18n | next-intl | 4.12.x — locales: pt, en, es |
| Fontes | DM Sans + Lora | via `next/font/google` |
| Analytics | @vercel/analytics | 2.x |
| Imagens | sharp + `next/image` (`unoptimized: true`) | 0.34.x |
| Deploy | Vercel | — |
| Package manager | npm | — |

❌ **Não é** Wix, WordPress, Webflow, Lovable (congelada — Decisão 38).

---

## 8. Modelos de IA

| Tarefa | Modelo | ID |
|---|---|---|
| Padrão (~99%) | Sonnet 4.6 | `claude-sonnet-4-6` |
| Decisões estratégicas complexas | Opus 4.7 | `claude-opus-4-7` |
| Tarefas mecânicas triviais | Haiku 4.5 | `claude-haiku-4-5-20251001` |

---

## 9. Skills e Pipelines

**Manifest canônico:** `skills/manifest.json` (21 skills + 1 arquivada).

**Categorias:** orquestração (1) · site (7) · visual (2) · social (3) · comercial (7) · operacional (1) · dados (1) · experimental (1 — Lovable, congelada).

**Pipelines A–M** documentados em `skills/README.md`. Validar com `node _automacao/scripts/jampa-doctor.mjs` antes de commit que toque em `skills/` ou `_automacao/schemas/`.

---

## 10. Hierarquia de Fontes

| Nível | Pasta | Mutabilidade |
|---|---|---|
| 1 — Fixo | `_conhecimento/` | Só muda com confirmação de Murillo |
| 2 — Vivo | `_memoria/` | Atualizar ao fim de cada sessão |
| 3 — Entrega | `_site/planejamento/`, `_pipeline/` | Em desenvolvimento, aguardando aprovação |
| 4 — Histórico | `_archive/`, `_memoria/_arquivo/` | Append-only |
| 5 — Dados sensíveis | `_seguro/` | Gitignored — só Murillo |

**Consulta obrigatória antes de qualquer conteúdo de passeio:**
1. `_conhecimento/passeios.md`
2. `_conhecimento/catalogo_vempassear_estruturado.md`
3. `_conhecimento/base-operacional-comercial.md` (preço/roteiro/duração/saída)
4. `_conhecimento/empresa.md`
5. `_memoria/decisoes-estrategicas.md`

**Campos que NUNCA se inventa:** preço, roteiro/itinerário, duração, ponto de embarque, depoimentos, parcerias.

---

## 11. Status Atual do Projeto (snapshot 2026-05-29)

### O que está vivo em produção

- Site Next.js multilíngue (PT/EN/ES) em `www.vempassearjampa.com`
- 22 passeios renderizados via template único `_site/app/[locale]/passeios/[categoria]/[slug]/page.tsx`
- 6 categorias com hub próprio
- Tábua de marés ao vivo (`/tabua-de-mares-joao-pessoa/`)
- FAQ centralizada, sitemap, robots, schemas (LocalBusiness, TouristAttraction, FAQPage, BreadcrumbList, Article)
- CTA WhatsApp em todas as páginas
- 39 componentes React funcionais
- Squad Comercial completo (Pipelines I–M) operando manual via CSV

### O que está pendente (bloqueia conversão)

| Bloqueio | Onde | Responsável |
|---|---|---|
| Vídeo hero (`/videos/home/hero-jampa.{webm,mp4}` + `hero-poster.jpg`) | `_site/public/videos/home/` (vazia) | Murillo |
| Fotos reais Seixas / Areia Vermelha / Picãozinho | `_site/public/images/passeios/{slug}/` | Murillo |
| Foto profissional de Murillo | `MurilloBlock` | Murillo |
| Depoimentos reais (mínimo 2) | `ReviewsBlock` | Murillo |
| `preco: null` em Transfer 24h | `_site/data/servicos.ts` | Murillo confirma valor |
| 10 posts de blog em `draft` | `_site/data/blog.ts` | Revisão Murillo |
| Tábua de maio/2026 com `revisadoPorMurillo: false` | `_site/data/tabua-mares.ts` | Murillo |
| GMB otimização (descrição + 5 fotos + Q&A) | painel GMB | Murillo |
| CRM com 18 leads (meta 30+) | `_crm/leads.csv` | uso diário |

### Fase atual

**Fase 1 (Site e SEO Local)** — em consolidação. Sprint anterior (`planejamento/sprint-atual.md` de 2026-05-05) está superada pelo `_memoria/proximos-passos.md` de 2026-05-28 (frente "Fotos reais nas galerias").

---

## 12. Regra Ouro

> **Nunca invente fato sobre empresa, passeio, preço, prazo, parceria ou depoimento.**
> Se não está em `_conhecimento/` e Murillo não confirmou, marque `[CONFIRMAR COM MURILLO: ...]` e pare.

---

## 13. Como manter este arquivo

- Mudou domínio, deploy, paleta, stack, contagem, identidade? → atualizar aqui **primeiro**, depois propagar.
- Versionar mudanças no rodapé (ver abaixo).
- Quando qualquer doc divergir, este vence — atualizar o doc divergente.

### Histórico

| Versão | Data | Mudança |
|---|---|---|
| 1.0 | 2026-05-29 | Criação — consolida domínio (`www.vempassearjampa.com`), deploy (Vercel), catálogo (22+1, ADR 0001), paleta v2 (#107997), stack (Next.js 14 + DM Sans/Lora) |
