# Mapa Técnico de Componentes
**Vem Passear em Jampa** | `_site/components/`
Gerado em: 2026-05-01

---

## Inventário Completo (18 componentes)

| Componente | Arquivo | Tipo | Redesign? |
|-----------|---------|------|-----------|
| `Breadcrumb` | Breadcrumb.tsx | Estrutural | Não |
| `ButtonPrimary` | ButtonPrimary.tsx | Visual | Sim |
| `CTAFinal` | CTAFinal.tsx | Visual | Sim |
| `CTASticky` | CTASticky.tsx | Estrutural | Não |
| `DepoimentoBlock` | DepoimentoBlock.tsx | Visual | Sim |
| `Experience360Block` | Experience360Block.tsx | Visual | Sim |
| `FAQAccordion` | FAQAccordion.tsx | Estrutural | Parcial |
| `Footer` | Footer.tsx | Estrutural | Parcial |
| `Header` | Header.tsx | Estrutural | Não |
| `HeroBlock` | HeroBlock.tsx | Visual | Sim |
| `InfoCard` | InfoCard.tsx | Visual | Sim |
| `IncluidoBlock` | IncluidoBlock.tsx | Visual | Sim |
| `MareAlert` | MareAlert.tsx | Estrutural | Não |
| `PasseioCard` | PasseioCard.tsx | Visual | Sim |
| `PasseioImage` | PasseioImage.tsx | Visual | Sim |
| `ProximaSaidaCard` | ProximaSaidaCard.tsx | Estrutural | Não |
| `ReviewsBlock` | ReviewsBlock.tsx | Visual | Sim |
| `TrustBlock` | TrustBlock.tsx | Visual | Sim |

---

## Mapa de Uso por Componente

### `Breadcrumb`
**Propósito:** Navegação secundária com schema BreadcrumbList.
**Usado em:**
- `app/passeios/[categoria]/[slug]/page.tsx`
- `app/faq/page.tsx`
- `app/servicos/transfer-24h/page.tsx`
- `app/passeios/page.tsx` (versão inline, não componente)
- `app/passeios/[categoria]/page.tsx` (versão inline, não componente)
**Redesign:** Não — altera apresentação do schema BreadcrumbList. Pode receber ajuste de cor/tamanho sem mudar estrutura HTML.

---

### `ButtonPrimary`
**Propósito:** Botão CTA reutilizável. Suporta `href`, `onClick`, variante `whatsapp`.
**Usado em:** Componentes internos e páginas que precisam de CTA parametrizado.
**Redesign:** Sim — visual apenas. Não alterar interface (`text`, `href`, `whatsapp`, `className`).

---

### `CTAFinal`
**Propósito:** Seção CTA de fechamento (fundo azul escuro `#004E89`). Props: `whatsappUrl`, `titulo`, `subtitulo`, `textoBotao`.
**Usado em:**
- `app/passeios/[categoria]/[slug]/page.tsx` (final da página de passeio)
**Redesign:** Sim — layout, tipografia, cor de fundo. Não alterar props nem lógica de link.

---

### `CTASticky`
**Propósito:** Botão fixo no bottom em mobile, visível apenas após o hero sair do viewport. Desaparece quando o `CTAFinal` entra em view.
**Usado em:**
- `app/passeios/[categoria]/[slug]/page.tsx`
**Redesign:** Não — lógica de scroll/visibility é estrutural. Ajuste de estilo do botão é seguro.
**Nota técnica:** Usa `IntersectionObserver` via `useEffect`. `"use client"`.

---

### `DepoimentoBlock`
**Propósito:** Exibe depoimento real de cliente. Não renderiza se o texto começa com `[` (placeholder).
**Usado em:**
- `app/passeios/[categoria]/[slug]/page.tsx`
**Redesign:** Sim — visual do blockquote, avatar, layout. Não remover a guarda `texto.startsWith("[")`.

---

### `Experience360Block`
**Propósito:** Galeria de imagens do passeio. Exibe até N fotos com `next/image`.
**Usado em:**
- `app/passeios/[categoria]/[slug]/page.tsx`
**Redesign:** Sim — layout de galeria (grid, carrossel, lightbox). Não alterar as props de dados.

---

### `FAQAccordion`
**Propósito:** Accordion de perguntas e respostas. `"use client"` — estado de abertura local.
**Usado em:**
- `app/faq/page.tsx`
- `app/passeios/[categoria]/[slug]/page.tsx`
- `app/passeios/piscinas-naturais/calendario/page.tsx`
**Redesign:** Parcial — pode ajustar cores, tipografia, ícone de abertura/fechamento. Não alterar a lógica de state nem a estrutura `<details>/<summary>` se houver (verificar).

---

### `Footer`
**Propósito:** Rodapé global. 3 colunas: sobre a empresa, navegação, contato. Bottom: CNPJ, Cadastur, copyright. Dados de `data/empresa.ts`.
**Usado em:** `app/layout.tsx` (todas as páginas)
**Redesign:** Parcial — layout das colunas, tipografia. Não remover links de navegação nem dados de `empresa.ts`. `/sobre` não aparece no Footer (decisão aprovada).

---

### `Header`
**Propósito:** Navegação principal sticky. Menu desktop + hamburger mobile. Dropdown de categorias. CTA WhatsApp sempre visível.
**Usado em:** `app/layout.tsx` (todas as páginas)
**Redesign:** Não — estrutura de navegação é aprovada (ISSUE-06/07). `/sobre` e `/blog` explicitamente fora do menu. Não alterar sem aprovação de Murillo.
**Nota técnica:** `"use client"` — usa estado para dropdown e mobile menu.

---

### `HeroBlock`
**Propósito:** Hero com imagem full-width, overlay escuro, título (H1 opcional), subtítulo, CTA. Usa `next/image`.
**Usado em:**
- `app/passeios/[categoria]/[slug]/page.tsx`
**Props:** `imageSrc`, `imageAlt`, `title`, `subtitle`, `cta`, `isH1`
**Fallback de imagem:** `/images/placeholders/placeholder-passeio.svg`
**Redesign:** Sim — overlay, tipografia sobre imagem, posição do CTA. Não alterar o fallback de imagem nem a prop `isH1` (afeta H1 semântico).

---

### `InfoCard`
**Propósito:** Card de informações do passeio: Preço | Duração | Saída. Campos indisponíveis exibem link "Consultar pelo WhatsApp". Remove cláusulas `[CONSULTAR]` via `limparConsultar()`.
**Usado em:**
- `app/passeios/[categoria]/[slug]/page.tsx`
**Redesign:** Sim — visual dos 3 blocos. Não alterar a lógica de `isCampoIndisponivel()` nem o link de fallback WhatsApp.

---

### `IncluidoBlock`
**Propósito:** Exibe lista "O que está incluso no passeio" (campo `incluso[]`).
**Usado em:**
- `app/passeios/[categoria]/[slug]/page.tsx`
**Redesign:** Sim — ícone, layout de lista, tipografia.

---

### `MareAlert`
**Propósito:** Alerta contextual sobre dependência de maré. Texto vem do campo `alertaMare` do passeio.
**Usado em:**
- `app/passeios/[categoria]/[slug]/page.tsx` (condicional: `dependeDeMare:true` ou `alertaMare` presente)
**Redesign:** Não — é dado informativo crítico para segurança do passeio. Ajuste de cores de alerta é aceitável.

---

### `PasseioCard`
**Propósito:** Card de passeio para listagens. Exibe nome, descrição, duração, preço. Para passeios de maré: exibe "Próxima saída" com status de condição.
**Usado em:**
- `app/page.tsx` (passeios prioritários)
- `app/passeios/[categoria]/[slug]/page.tsx` (relacionados)
**Redesign:** Sim — visual do card, thumbnail (atualmente sem imagem). Adicionar thumbnail de imagem é melhoria recomendada.

---

### `PasseioImage`
**Propósito:** Wrapper de `next/image` com fallback para placeholder. Centraliza tratamento de imagem de passeio.
**Usado em:** Componentes que exibem imagem de passeio.
**Redesign:** Sim — aspect ratio, border radius, comportamento de loading. Não remover o fallback.

---

### `ProximaSaidaCard`
**Propósito:** Card que mostra próxima janela de saída para passeios de maré (Seixas, Picaozinho, Areia Vermelha). Fallback: "Consulte próximas saídas" quando dados não validados por Murillo.
**Usado em:**
- `app/passeios/[categoria]/[slug]/page.tsx`
- `app/page.tsx` (via PasseioCard)
**Redesign:** Não — dados de maré são estruturais. Visual do card pode ser ajustado com cuidado.
**Nota:** Lógica depende de `data/tabua-mares.ts` (campo `revisadoPorMurillo`).

---

### `ReviewsBlock`
**Propósito:** Exibe avaliações reais de clientes do Google Maps. Não renderiza se array vazio.
**Usado em:**
- `app/passeios/[categoria]/[slug]/page.tsx` (condicional: `temAvaliacoes:true`)
**Redesign:** Sim — layout dos cards de avaliação, estrelas, tipografia. Não inventar avaliações.

---

### `TrustBlock`
**Propósito:** Seção "Por que confiar" com 3 pilares: Cadastur, Google 4.9/61 avaliações, WhatsApp direto. Dados de `data/empresa.ts`.
**Usado em:**
- `app/passeios/[categoria]/[slug]/page.tsx`
**Redesign:** Sim — layout dos 3 blocos, ícones, fundo. Não alterar os dados (vêm de `empresa.ts`).

---

## Páginas × Componentes (matriz de uso)

| Componente | Home | Hub | Categoria | Passeio | FAQ | Transfer | Calendário |
|-----------|:----:|:---:|:---------:|:-------:|:---:|:--------:|:----------:|
| Header | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Footer | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Breadcrumb | — | — | — | ✓ | ✓ | ✓ | ✓ |
| HeroBlock | — | — | — | ✓ | — | — | — |
| InfoCard | — | — | — | ✓ | — | — | — |
| CTAFinal | — | — | — | ✓ | — | — | — |
| CTASticky | — | — | — | ✓ | — | — | — |
| TrustBlock | — | — | — | ✓ | — | — | — |
| ReviewsBlock | — | — | — | ✓* | — | — | — |
| DepoimentoBlock | — | — | — | ✓* | — | — | — |
| IncluidoBlock | — | — | — | ✓ | — | — | — |
| Experience360Block | — | — | — | ✓ | — | — | — |
| FAQAccordion | — | — | — | ✓ | ✓ | — | ✓ |
| MareAlert | — | — | — | ✓* | — | — | — |
| ProximaSaidaCard | — | — | — | ✓* | — | — | — |
| PasseioCard | ✓ | — | — | ✓ | — | — | — |
| ButtonPrimary | — | — | — | — | — | — | — |
| PasseioImage | — | — | — | ✓ | — | — | — |

`*` Condicional — só renderiza se dados presentes.

---

## Componentes que Podem Receber Redesign Visual

Estes componentes podem ter layout, cores, tipografia e espaçamento alterados **sem risco técnico**, desde que as props e a lógica de dados não mudem:

1. `HeroBlock` — principal candidato: adicionar parallax ou overlay customizado
2. `PasseioCard` — adicionar thumbnail de imagem no topo
3. `InfoCard` — tornar o bloco mais visual (ícones por campo)
4. `TrustBlock` — ícones reais em vez de emoji
5. `CTAFinal` — testar variações de cor de fundo
6. `DepoimentoBlock` — aspas tipográficas, foto do autor
7. `ReviewsBlock` — cards com estrelas visuais (SVG)
8. `IncluidoBlock` — ícones por item incluso
9. `Experience360Block` — galeria com lightbox ou swipe mobile
10. `ButtonPrimary` — variações de tamanho e cor

---

## Componentes Estruturais — Não Alterar Sem Coordenação Técnica

| Componente | Por quê não alterar |
|-----------|-------------------|
| `Header` | Navegação aprovada, `/sobre` e `/blog` fora — qualquer link novo precisa de aprovação |
| `Footer` | Dados legais (CNPJ, Cadastur) devem vir de `empresa.ts` — não hardcodar |
| `FAQAccordion` | Schema FAQPage gerado via JSON-LD — estrutura de `<section>` afeta SEO |
| `CTASticky` | IntersectionObserver depende de IDs `hero-section` e `cta-final` existentes no DOM |
| `MareAlert` | Dado de segurança — não esconder ou tornar opcional visualmente |
| `ProximaSaidaCard` | Lógica de tábua de marés — não alterar condicionais de exibição |
| `Breadcrumb` | Gera schema BreadcrumbList — não alterar estrutura semântica |

---

*Fonte: `_site/components/`, `_site/app/`, `_site/data/`*
*Para detalhes de props de cada componente: ler o arquivo `.tsx` diretamente.*
