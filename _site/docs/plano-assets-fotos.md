# Plano de Assets — Fotos do Site

**Status:** estrutura pronta, fotos pendentes  
**Data:** 2026-05-02  
**Contexto:** O site funciona inteiramente com placeholders bem acabados. Esta etapa é separada da estrutura.

---

## Princípio

> **Site nunca quebra por falta de foto real.**  
> Cada componente que usa imagem tem fallback visual de qualidade aceitável para produção.

| Componente | Placeholder atual | Quando trocar |
|-----------|-------------------|---------------|
| `HeroBlock` (página de passeio) | `/images/placeholders/placeholder-passeio.svg` | Quando houver `coverImage` real do passeio |
| `PasseioCard` (home + listagens) | Gradiente colorido por categoria | Quando o passeio tiver `coverImage` no `data/passeios.ts` |
| `MurilloBlock` (home) | Avatar circular com "M" laranja sobre fundo listrado | Quando foto profissional de Murillo estiver pronta |
| `CategoryCard` (home) | Cor sólida + emoji + texto branco | Não troca — design final é sem foto |
| Hero da Home (variação A) | Gradiente azul + blobs decorativos | Opcional: variação B com `<Image>` se foto premium chegar |
| Open Graph | `/og-image.svg` | Quando capa social profissional estiver pronta |

---

## Estrutura de Pastas (já criada)

```
_site/public/images/
├── README.md                    ← guia editorial
├── brand/
│   ├── logo/                    ← logo principal (SVG/PNG)
│   ├── og/                      ← open graph (1200×630)
│   └── murillo/                 ← foto profissional do fundador
├── parceiros/                   ← logos de parceiros
├── placeholders/                ← fallbacks atuais
└── passeios/
    ├── pacotes/[slug]/
    ├── litoral-sul/[slug]/
    ├── litoral-norte/[slug]/
    ├── piscinas-naturais/[slug]/
    ├── city-tour/[slug]/
    └── interestaduais/[slug]/
```

Em cada pasta de passeio existe `.gitkeep` e `README.md` com nomes esperados.

---

## Padrão de Nomes (obrigatório)

Dentro de cada `passeios/[categoria]/[slug]/`:

| Arquivo | Dimensão | Uso |
|---------|----------|-----|
| `hero.jpg` | 1600×900 mínimo | Banner da página individual de passeio |
| `card.jpg` | 900×1200 (3:4) | Card na listagem (substitui o gradiente) |
| `gallery-01.jpg` | 1200×900 | Galeria — foto principal |
| `gallery-02.jpg` | 1200×900 | Galeria — foto 2 |
| `gallery-03.jpg` | 1200×900 | Galeria — foto 3 |

Brand:

| Arquivo | Pasta | Dimensão |
|---------|-------|----------|
| `logo.svg` | `brand/logo/` | livre (vetorial) |
| `logo-mono.svg` | `brand/logo/` | versão monocromática |
| `og-default.jpg` | `brand/og/` | 1200×630 |
| `murillo.jpg` | `brand/murillo/` | 800×800 mínimo, quadrado |

**Regras de nomes:**
- minúsculas, sem espaços, sem acentos
- separador hífen
- formato preferencial JPG (fotos) ou SVG (vetores)

---

## Prioridade de Captura

A ordem reflete onde cada foto gera mais impacto visual e SEO:

| # | Asset | Justificativa |
|---|------|--------------|
| **1** | Hero da Home — foto premium de João Pessoa | Primeira impressão, define autoridade visual da marca |
| **2** | Foto profissional de Murillo | Marca = Murillo. Atualmente é avatar circular. Diferencial chave de confiança. |
| **3** | Piscinas Naturais de Seixas (`hero` + `card` + galeria) | Passeio de maior tráfego SEO + página completa já implementada |
| **4** | Areia Vermelha Catamarã (`hero` + `card` + galeria) | Segundo passeio mais buscado, bandeira visual da operação |
| **5** | Litoral Sul Roteiro Clássico (`hero` + `card` + galeria) | Maior pacote em volume + amplitude de cenários (4+ praias) |
| **6** | Demais passeios (`card` + 1 galeria mínima) | Por ordem de procura: Pôr do Sol Jacaré, Quadriciclo Coqueirinho, City Tour, Pacotes 3 dias, Picãozinho, Penha, Mergulho, Praia Bela, Combos, Lancha, Interestaduais |

Para o **mínimo viável**, o passeio precisa pelo menos de `card.jpg`. Sem `card.jpg` ele continua bonito com o gradiente da categoria.

---

## Como Conectar a Foto Quando Chegar

### Para um passeio
Em `_site/data/passeios.ts`, no objeto do passeio, preencher:

```ts
coverImage: "/images/passeios/[categoria]/[slug]/card.jpg",
imagemAlt: "Descrição rica da cena com 'João Pessoa' ou nome do local",
```

A página individual usa automaticamente `card.jpg` como `coverImage`. Se quiser usar `hero.jpg` (resolução maior), basta apontar para `hero.jpg`.

### Para o Murillo
Em `_site/components/MurilloBlock.tsx`, substituir o `<div>` do placeholder por:

```tsx
<div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl"
     style={{ width: "clamp(150px,20vw,220px)", height: "clamp(150px,20vw,220px)" }}>
  <Image src="/images/brand/murillo/murillo.jpg" alt="Affonso Murillo, fundador da Vem Passear em Jampa" fill className="object-cover object-top" />
</div>
```

### Para o Hero da Home (variação B)
Trocar o `<div>` do gradiente por `<Image fill priority>` + overlay escuro, conforme handoff do designer (`_site/briefings-designer/finais/Handoff Claude Code - Home.md`, seção HeroBlock variação B).

### Para Open Graph
Substituir `/public/og-image.svg` por `/public/images/brand/og/og-default.jpg` (1200×630) e atualizar `app/layout.tsx` no campo `openGraph.images[0].url`.

---

## Regras de SEO Para Imagens

1. **Foto real obrigatória.** Nada de banco de imagem genérico. Google cada vez mais detecta e penaliza.
2. **Nome de arquivo descritivo.** `seixas-piscina-natural.jpg` > `IMG_4827.jpg`.
3. **Alt text obrigatório.** Descrever a cena + contexto local. Exemplo: `"Piscina natural de Seixas com turistas mergulhando, João Pessoa PB"`.
4. **Peso máximo 300 KB por imagem.** Comprimir antes de subir (Squoosh, TinyPNG).
5. **Formato JPG progressivo** para fotos. **SVG** para logos e ícones.
6. **next/image quando possível.** O Next otimiza automaticamente. Em casos onde já se usa `<img>` (ex: `PasseioCard`), considerar migrar quando houver muitas imagens.

---

## Próximos Passos Recomendados

1. **ASSETS-FOTOS-02 — Foto de Murillo:** sessão fotográfica profissional, 1 foto principal (800×800) + 2 alternativas. Maior ROI visual do site.
2. **ASSETS-FOTOS-03 — Hero da Home:** 1 foto premium horizontal de João Pessoa (Cabo Branco ao amanhecer ou jangada no Jacaré).
3. **ASSETS-FOTOS-04 — Top 5 passeios:** capturar `card.jpg` + `hero.jpg` para os 5 mais buscados (lista de prioridades acima).
4. **ASSETS-FOTOS-05 — Migração para `next/image`:** quando 80% dos passeios tiverem `coverImage`, migrar `PasseioCard` de `<img>` para `next/image` para ganho de performance.

---

*Documento gerado em 2026-05-02. Atualizar conforme fotos forem chegando.*
