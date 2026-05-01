# Briefing Visual — Site Fase 1
**Vem Passear em Jampa** | vempassearjampa.com.br
Gerado em: 2026-05-01 | Stack: Next.js 14, Tailwind CSS

---

## 1. Objetivo do Site

Converter turistas em leads qualificados via WhatsApp. O site não processa reservas nem pagamentos — é a vitrine que orienta o turista e direciona para Murillo no WhatsApp.

Meta única: turista chega → entende os passeios → clica em "Falar com Murillo no WhatsApp".

---

## 2. Público-alvo

| Perfil | Característica |
|--------|---------------|
| Principal | Turistas de fora de João Pessoa (lazer, 25–55 anos) chegando de avião |
| Secundário | Moradores locais buscando experiências e transfer |
| Dispositivo | Mobile-first — 70%+ do tráfego esperado via celular |
| Jornada | Pesquisa "passeios João Pessoa" → site → WhatsApp → reserva |

---

## 3. Páginas Existentes (Fase 1)

| URL | Propósito |
|-----|-----------|
| `/` | Home — apresentação geral, categorias, destaques, confiança |
| `/passeios/` | Hub — todos os 22 passeios agrupados por categoria |
| `/passeios/pacotes/` | Listagem: Pacotes (3 itens) |
| `/passeios/litoral-sul/` | Listagem: Litoral Sul (6 itens) |
| `/passeios/litoral-norte/` | Listagem: Litoral Norte (5 itens) |
| `/passeios/piscinas-naturais/` | Listagem: Piscinas Naturais (4 itens) |
| `/passeios/city-tour/` | Listagem: City Tour (1 item) |
| `/passeios/interestaduais/` | Listagem: Interestaduais (3 itens) |
| `/passeios/[categoria]/[slug]/` | Página individual (22 ao total) |
| `/servicos/transfer-24h/` | Serviço de transfer aeroporto/hotéis 24h |
| `/faq/` | Perguntas frequentes (accordion, schema FAQPage) |
| `/sobre` | Retorna 404 — fora da Fase 1 |
| `/sitemap.xml` | 32 URLs (gerado automaticamente) |
| `/robots.txt` | Indexação completa, bloqueia `/sobre/` |

---

## 4. Estrutura da Home (`/`)

```
[HEADER — sticky, logo VP + nav + CTA WhatsApp]

1. HERO
   Gradiente azul claro → branco
   H1: "O Que Fazer em João Pessoa?"
   Subtítulo: texto orientador (praias, corais, quadriciclo, catamarã, pôr do sol)
   CTA: [💬 Montar Meu Roteiro no WhatsApp] — laranja, grande, sombra

2. PROVA SOCIAL (fundo escuro #1A1A2E)
   3 colunas: ★ 4.9/5 | Cadastur 52.077.577 | WhatsApp direto
   Texto em laranja (#FF6B35), labels em cinza claro

3. CATEGORIAS (fundo branco)
   H2 + subtítulo centralizados
   Grid 1→2→3 colunas: 6 cards com emoji + nome + descricao curta
   Hover: borda laranja + sombra leve
   Link "Ver todos os passeios →" abaixo

4. PASSEIOS PRIORITÁRIOS (fundo #F8F9FA)
   H2 "Os Mais Procurados"
   Grid 1→2→3: PasseioCard (3 cards de passeios marcados prioritario:true)

5. BLOCO MURILLO
   Avatar circular "M" laranja (placeholder para foto real)
   H2 + missão da empresa (de data/empresa.ts)
   Lista de diferenciais com checkmarks laranjas
   Assinatura "— Affonso Murillo..."

6. CTA FINAL (fundo #FF6B35)
   H2 + parágrafo + botão branco com texto laranja

[FOOTER — 3 colunas: sobre, nav, contato]
```

**Lacunas visuais que precisam de decisão:**
- Foto real de Murillo (atualmente: avatar "M" circular)
- Imagem hero (atualmente: gradiente — sem foto)

---

## 5. Estrutura da Página Individual de Passeio (`/passeios/[categoria]/[slug]/`)

```
[Schemas JSON-LD: TouristAttraction + BreadcrumbList + FAQPage]
[CTASticky — botão fixo no bottom mobile, some ao ver CTA final]

C2  HERO (HeroBlock)
    Imagem full-width com overlay escuro
    H1 + subtítulo + CTA WhatsApp sobre a imagem

    Breadcrumb: Home / Categoria / Nome do Passeio

C3  INFO CARD (InfoCard)
    3 colunas: Preço | Duração | Saída
    Campos indisponíveis → link "Consultar pelo WhatsApp"

C4  AVISO DE MARÉ (condicional — apenas passeios dependeDeMare:true)
    MareAlert: aviso textual sobre maré
    ProximaSaidaCard: próxima janela de saída ou fallback WhatsApp

C5  POR QUE CONFIAR (TrustBlock)
    Cadastur + Google 4.9 + Atendimento direto

C5.5 AVALIAÇÕES (ReviewsBlock — condicional)
    Grid de avaliações reais do Google

I1  LEAD / INTRO (texto do passeio)
I2  ROTEIRO (lista de etapas — campo rotario[])
I3  O QUE ESTÁ INCLUSO (IncluidoBlock — campo incluso[])
I4  GALERIA (Experience360Block — imagens do passeio)
I5  DEPOIMENTO (DepoimentoBlock — condicional, não renderiza placeholder)
I6  PASSEIOS RELACIONADOS (PasseioCard — mesma categoria)
I7  FAQ (FAQAccordion — campo faq[])
    CTA Final (CTAFinal — fundo azul escuro)
```

**Imagens por passeio:**
- `coverImage`: hero principal
- Galeria: `public/images/passeios/[slug]/galeria-0N.svg` (atualmente SVG placeholder)
- Passeios com imagem real: seixas, picaozinho, areia-vermelha, litoral-sul-classico, por-do-sol-jacare (todos ainda como SVG)

---

## 6. Estrutura do Hub de Passeios (`/passeios/`)

```
Breadcrumb: Home / Passeios

HERO
  H1: "Todos os Passeios em João Pessoa"
  Subtítulo com total (22 passeios, 6 categorias)
  Âncoras de categoria: chips clicáveis (Pacotes | Litoral Sul | ...)

LISTAGEM (por categoria, repetida 6×)
  Emoji + H2 categoria + contagem
  Linha divisória
  Grid 1→2→3: cards com nome, descrição, duração, preço, "Ver detalhes →"

CTA FINAL WhatsApp (fundo laranja)
```

---

## 7. Estrutura das Categorias (`/passeios/[categoria]/`)

```
Breadcrumb: Home / Passeios / [Categoria]

HERO
  Emoji grande + H1 "[Categoria] em João Pessoa"
  Descrição da categoria
  Contagem de passeios

GRID DE PASSEIOS
  1→2→3 colunas: cards com nome, descrição, duração, preço
  Hover: borda laranja, sombra

CTA FINAL WhatsApp (fundo laranja)
```

---

## 8. Estrutura do FAQ (`/faq/`)

```
Breadcrumb: Home / FAQ

HERO
  H1 + subtítulo

ACCORDION (10+ perguntas)
  Cada item: botão clicável (48px+) + resposta expansível
  Schema FAQPage injetado via JSON-LD

CTA FINAL WhatsApp
```

---

## 9. Estrutura do Transfer (`/servicos/transfer-24h/`)

```
Breadcrumb: Home / Transfer 24h

HERO
  Ícone 🚗 + H1 + descrição + CTA cotação WhatsApp

CARDS DE DESTAQUE (grid 2×2)
  Atendimento 24h | Cobertura JP/PB | Cobrado por trajeto | Valor sob consulta

POR QUE CONTRATAR
  Lista de 5 diferenciais com checkmark laranja

TRAJETOS MAIS SOLICITADOS
  Grid 2 colunas: 4 trajetos exemplo

COMO CONTRATAR
  3 passos numerados (círculos laranjos)

CTA FINAL WhatsApp
Link "← Ver todos os passeios"
```

---

## 10. CTAs Principais

| CTA | Texto | Destino | Onde aparece |
|-----|-------|---------|-------------|
| Primário | 💬 Montar Meu Roteiro no WhatsApp | wa.me/558399087830 | Home Hero |
| Header | 💬 Reservar no WhatsApp | wa.me/... | Todas as páginas |
| Sticky mobile | Reservar no WhatsApp | wa.me/... | Páginas de passeio (mobile) |
| Categorias/Hub | 💬 Falar com Murillo pelo WhatsApp | wa.me/... | Final de listagens |
| Transfer | 💬 Solicitar cotação pelo WhatsApp | wa.me/...transfer | Transfer |
| Final genérico | 💬 Chamar Murillo no WhatsApp | wa.me/... | Home final |

**Regra:** todo CTA abre wa.me — nunca email, nunca formulário.

---

## 11. Identidade Visual

| Token | Valor |
|-------|-------|
| Primário (laranja) | `#FF6B35` |
| Secundário (azul) | `#004E89` |
| Escuro | `#1A1A2E` |
| Fundo claro | `#F8F9FA` |
| Texto principal | `#1F2937` (gray-800) |
| Fonte body | Inter (sans-serif) |
| Fonte títulos | Lora (serif) |
| Border radius card | `rounded-lg` (8px) |
| Sombra card | `shadow-sm` / `hover:shadow-md` |
| Touch target mínimo | 44px (48px em mobile) |

---

## 12. Tom Visual

- **Caloroso e local** — não corporativo, não resort genérico
- **Confiança sem exagero** — badges reais (Cadastur, Google), sem "Melhor da Paraíba!"
- **Nordestino autêntico** — cores vibrantes mas não excessivas, sem clichê de coqueiro
- **Mobile-first** — hierarquia clara em tela pequena, texto legível sem zoom
- **Orientador** — o site ajuda a decidir, não pressiona com urgência falsa

---

## 13. Seções que Precisam de Imagem Real

| Seção | Página | Placeholder atual | Prioridade |
|-------|--------|------------------|-----------|
| Hero principal | Home | Gradiente CSS | Alta |
| Foto de Murillo | Home (bloco Murillo) | Avatar "M" circular | Alta |
| Hero do passeio | Cada página de passeio | placeholder-passeio.svg | Alta |
| Galeria do passeio | Cada página de passeio | galeria-0N.svg (SVG) | Média |
| OG Image | Todas (meta tag) | og-image.svg (SVG gerado) | Média |
| Hero categorias | Cada categoria | Gradiente CSS | Baixa |

**Passeios com subdiretório de imagem já criado (aguardando foto real):**
`seixas/`, `picaozinho/`, `areia-vermelha/`, `litoral-sul-classico/`, `por-do-sol-jacare/`

---

## 14. Placeholders Atuais

| Arquivo | Tipo | Substituto esperado |
|---------|------|-------------------|
| `public/images/placeholders/placeholder-passeio.svg` | SVG genérico | Foto real do passeio |
| `public/images/passeios/*/hero-01.svg` | SVG | Foto hero do passeio específico |
| `public/images/passeios/*/galeria-0N.svg` | SVG | Fotos da galeria do passeio |
| `public/og-image.svg` | SVG | JPG/PNG 1200×630 com foto real |
| Avatar "M" (Home, bloco Murillo) | CSS circle | Foto profissional de Murillo |

---

## 15. Componentes Existentes

Ver `mapa-tecnico-componentes.md` para detalhe completo.

Componentes disponíveis para redesign visual:
`HeroBlock`, `InfoCard`, `PasseioCard`, `TrustBlock`, `DepoimentoBlock`, `ReviewsBlock`, `CTAFinal`, `ButtonPrimary`

Componentes estruturais — não alterar sem coordenação técnica:
`FAQAccordion`, `CTASticky`, `MareAlert`, `ProximaSaidaCard`, `Breadcrumb`, `Header`, `Footer`

---

## 16. Recomendações de Melhoria Visual

| Item | Recomendação |
|------|-------------|
| Hero Home | Substituir gradiente por foto real de praia/passeio com overlay escuro semitransparente |
| Bloco Murillo | Foto circular profissional de Murillo substituindo avatar "M" |
| Cards de categoria | Adicionar foto de capa pequena (thumbnail) no topo do card |
| PasseioCard (prioritários) | Adicionar imagem thumbnail no topo do card — atualmente só texto |
| OG Image | Criar versão JPG 1200×630 com foto real para compartilhamento |
| Galeria passeio | Mínimo 3 fotos reais por passeio prioritário (Seixas, Areia Vermelha, Litoral Sul) |
| Footer | Logo/imagem da marca no lugar do texto "VP" |

---

## 17. O Que o Designer NÃO Deve Alterar

- URLs e rotas (alterar slug quebra SEO)
- Textos de copy — foram escritos com dados do vault aprovados por Murillo
- Dados de preço, duração, saída — vêm de `data/passeios.ts`, não do HTML
- Tokens de cor no `tailwind.config.ts` — alterar quebra todo o site
- Schema JSON-LD (`TouristAttraction`, `FAQPage`, `BreadcrumbList`)
- Estrutura do `Header` e `Footer` (navegação aprovada)
- Link do WhatsApp — sempre via `empresa.contato.whatsappLink`
- Ordem das seções da página de passeio (C2→C3→C5→I1→I7→CTA)
- Sitemap e robots.txt

---

*Fonte: código em `_site/`, dados em `_conhecimento/`, decisões em `_memoria/decisoes-estrategicas.md`*
