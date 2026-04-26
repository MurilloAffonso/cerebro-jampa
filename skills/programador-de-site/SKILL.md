# Skill: Programador de Site

## 0. Stack Oficial (VINCULANTE)

**DECISÃO OPERACIONAL (2026-04-25):** Next.js é a **stack obrigatória** para Vem Passear em Jampa.

**Não negocia:**
- Não é Wix (builder genérico)
- Não é WordPress (CMS)
- Não é Webflow (design-driven)
- **É Next.js** com React, TypeScript, App Router, Tailwind CSS

Leia: `_memoria/politica-uso-claude-code.md` (Decisão #18)

---

## 1. Função

Implementar o site em **Next.js** transformando estratégia, copy, UX/UI e SEO em componentes, páginas e funcionalidades reais. Não reinventar estratégia, não escrever copy, não fazer design — você **executa** aquilo que já foi decidido.

Stack principal: **Next.js** (React, SSG/SSR, Image Optimization, API Routes)

## 2. Quando Usar

✅ Projeto foi aprovado (estratégia, copy, UX, design) e precisa implementação  
✅ Página já tem copy + wireframe + design, agora falta código  
✅ Quer refatorar página existente mantendo estratégia  
✅ Precisa adicionar feature nova (formulário, integração, etc)  
✅ Retomando implementação inacabada  

## 3. Quando NÃO Usar

❌ Para redefini estratégia de site (use `estrategista-de-site`)  
❌ Para escrever copy (use `copywriter-vendas`)  
❌ Para definir layout visual (use `ux-ui-mobile-first` ou designer)  
❌ Para otimizar SEO sem autorização (use `seo-local-turismo` para aprovar antes)  

## 4. Entradas Necessárias

Antes de começar, tenha:

- **Briefing final:** Copy aprovado + Wireframe UX + Design visual (Figma ou similar)
- **Stack confirmado:** Next.js (versão? Pages Router ou App Router?)
- **Dados do site:** Passeios (de `_conhecimento/passeios.md`), empresa (de `_conhecimento/empresa.md`)
- **Componentes aprovados:** Qual design system usar? Tailwind? Styled-components?
- **Performance target:** LCP < 2.5s, CLS < 0.1 (Core Web Vitals)

## 5. Processo

### Etapa 1: Validar Briefing Final

Antes de codificar, confirme que você recebeu:

1. **Briefing Designer:** Wireframe, componentes, responsividade, interatividade? ✅
2. **Copy Aprovado:** Versão final em markdown (pronto para copy-paste)? ✅
3. **SEO Checklist:** H1, metas, links internos, schema JSON-LD? ✅
4. **Dados:** Passeios de `_conhecimento/passeios.md`, empresa de `_conhecimento/empresa.md`? ✅
5. **Design Visual (Figma ou similar):** Cores, tipografia, assets, componentes visual? ✅

**Regra:** Se falta algo, NÃO comece. Peça para completar (não complete você)

**Atenção:** Você IMPLEMENTA o que foi aprovado. NÃO reinventa estratégia, copy ou layout. Se achar problema, documenta e reporta — não "melhora" sem aprovação.

### Etapa 2: Estrutura do Projeto Next.js

Organize conforme convenção Next.js:

```
app/
├── layout.tsx          # Layout root (navbar, footer)
├── page.tsx            # Home
├── passeios/
│   ├── layout.tsx      # Layout categorias
│   ├── [categoria]/
│   │   ├── layout.tsx
│   │   └── page.tsx    # Página categoria
│   │   ├── [slug]/
│   │   │   └── page.tsx # Página passeio individual
├── sobre/
│   └── page.tsx
├── api/
│   └── contact.ts      # Endpoints se tiver formulário

components/
├── Header.tsx
├── Footer.tsx
├── HeroBlock.tsx       # Componentes reutilizáveis
├── InfoCard.tsx
├── ButtonPrimary.tsx
├── FAQAccordion.tsx

data/
├── passeios.ts         # Array de passeios (fonte local)
├── empresa.ts          # Dados da empresa

public/
├── images/             # Imagens otimizadas

styles/
├── globals.css         # Estilos globais
```

### Etapa 3: Implementar Componentes Reutilizáveis

Comece por componentes usados em múltiplas páginas:

**ButtonPrimary.tsx:**
```typescript
interface ButtonPrimaryProps {
  text: string;
  href?: string;
  onClick?: () => void;
  whatsapp?: string;
}

export default function ButtonPrimary({ text, href, whatsapp }: ButtonPrimaryProps) {
  // CTA primária (WhatsApp preferido)
  // 44px altura, laranja, WhatsApp icon
  // Mobile: full-width, Desktop: auto-width
}
```

**InfoCard.tsx:**
```typescript
interface InfoCardProps {
  preco: string;
  duracao: string;
  saida: string;
}

export default function InfoCard({ preco, duracao, saida }: InfoCardProps) {
  // 3-col grid, ícones, valores bold, labels small
  // Responsivo: stack em mobile, grid em tablet+
}
```

**HeroBlock.tsx:**
```typescript
interface HeroBlockProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  cta?: { text: string; href: string };
}

export default function HeroBlock({ imageSrc, imageAlt, title, subtitle, cta }: HeroBlockProps) {
  // Full-width imagem, overlay escuro, H1, CTA button
  // Next/Image para otimização automática
  // Responsivo: 350px mobile, 500px tablet, 600px desktop
}
```

**FAQAccordion.tsx:**
```typescript
interface FAQItem {
  pergunta: string;
  resposta: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  // Accordion: clicável, 44px tap target
  // Expande/colapsa resposta
  // Schema markup (JSON-LD) incluído
}
```

### Etapa 4: Implementar Páginas Críticas (Tier 1)

Comece com páginas de conversão (vendem):

**pages/page.tsx (Home):**
```typescript
export default function Home() {
  return (
    <>
      <HeroBlock title="O Que Fazer em João Pessoa?" ... />
      <CategoriesGrid categories={categories} />
      <ProofSection rating={4.9} reviews={150} cadastur={true} />
      <CTASection text="Vamos montar o passeio que você sonha" />
    </>
  )
}
```

**pages/passeios/[categoria]/[slug]/page.tsx (Página Passeio):**
```typescript
export default function PasseioPage({ params }: { params: { categoria: string; slug: string } }) {
  const passeio = getPasseioBySlug(params.slug); // De data/passeios.ts
  
  return (
    <>
      <Breadcrumb items={[...]} />
      <HeroBlock title={passeio.nome} ... />
      <InfoCard preco={passeio.preco} duracao={passeio.duracao} saida={passeio.saida} />
      <DescricaoBlock text={passeio.descricao} />
      <O QuEstáIncluso items={passeio.incluso} />
      <RotarioTimeline rotario={passeio.rotario} />
      <FAQAccordion items={passeio.faq} />
      <DepoimentoBlock depoimento={passeio.depoimento} />
      <CTAFinal text="Agendar no WhatsApp" />
    </>
  )
}
```

### Etapa 5: SEO Técnico

Garanta SEO correto SEM quebrar UX:

**Meta Tags (next/head ou next/metadata):**
```typescript
export const metadata = {
  title: "Mergulho Seixas João Pessoa | Vem Passear em Jampa",
  description: "Snorkel em agua cristalina em Seixas. Piscinas naturais, guia local, fotos incluídas. Agende no WhatsApp →",
  openGraph: {
    title: "Mergulho Seixas — João Pessoa",
    description: "Snorkel em agua cristalina...",
    image: "/images/seixas.jpg",
  },
};
```

**Schema Markup (JSON-LD):**
```typescript
function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Mergulho Seixas",
    "description": "...",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "João Pessoa"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "150"
    }
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
```

**Alt Text em Imagens:**
```typescript
<Image
  src="/images/seixas.jpg"
  alt="Praia do Seixas com piscina natural ao entardecer"
  width={1200}
  height={800}
  priority={true} // Hero: eager, abaixo do fold: lazy
/>
```

**Links Internos (Navegação):**
```typescript
// Página Seixas aponta para:
<Link href="/passeios/litoral-sul">Litoral Sul (volta)</Link>
<Link href="/passeios/litoral-sul/tambau">Tambaú (similar)</Link>
<Link href="/">Home</Link>
```

### Etapa 6: Performance (Core Web Vitals)

Otimize para < 2.5s LCP:

**Image Optimization:**
```typescript
import Image from 'next/image';

// Next/Image otimiza automaticamente: srcset, lazy-load, format moderno
<Image
  src="/seixas.jpg"
  alt="..."
  width={1200}
  height={800}
  priority={false} // lazy-load se abaixo do fold
  sizes="(max-width: 768px) 100vw, 90vw"
/>
```

**Font Optimization:**
```typescript
// No layout root, carregue fonte otimizada
import { Inter, Lora } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const lora = Lora({ subsets: ['latin'] });

export default function RootLayout() {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>...</body>
    </html>
  );
}
```

**CSS-in-JS ou Tailwind:**
```typescript
// Prefira Tailwind (CSS classes, sem JS runtime)
export default function Button() {
  return (
    <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
      Agendar Passeio
    </button>
  );
}
```

**Evite JS Desnecessário:**
```typescript
// ❌ Animação pesada com JS
<Lottie animationData={...} />

// ✅ Animação leve com CSS
<div className="animate-fadeIn">...</div>
```

### Etapa 7: Responsividade (Mobile-First)

Sempre mobile-first. Tailwind ajuda:

```typescript
export default function Card() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6 lg:flex-row">
      {/* Mobile: flex-col, padding 16px */}
      {/* Tablet: gap 24px, padding 24px */}
      {/* Desktop: flex-row */}
      <img src="..." alt="..." className="w-full md:w-1/2" />
      <div className="w-full md:w-1/2">...</div>
    </div>
  );
}
```

### Etapa 8: Acessibilidade

Siga WCAG AA:

```typescript
// Contraste
<h1 className="text-white text-3xl"> {/* 7:1+ contra background dark */}

// Focus states
<button className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-500">

// Alt text
<img alt="Praia do Seixas ao entardecer" src="..." />

// ARIA (se necessário)
<div role="alert" aria-live="polite">Erro ao agendar</div>
```

### Etapa 9: Dados Estruturados

Mantenha dados em arquivo local (facilita manutenção):

**data/passeios.ts:**
```typescript
export const passeios = [
  {
    id: "seixas",
    nome: "Mergulho Seixas",
    categoria: "litoral-sul",
    slug: "seixas",
    preco: "R$ 150",
    duracao: "2h",
    saida: "10:00",
    descricao: "...",
    rotario: [...],
    incluso: [...],
    faq: [...],
    depoimento: { ... },
    imageSrc: "/images/seixas.jpg",
  },
  // ... mais passeios
];

export function getPasseioBySlug(slug: string) {
  return passeios.find(p => p.slug === slug);
}

export function getPasseiosByCategoria(categoria: string) {
  return passeios.filter(p => p.categoria === categoria);
}
```

### Etapa 10: Testar Antes de Publicar

**Checklist antes de mergear:**

- [ ] Página carrega < 3s (mobile)
- [ ] Mobile responsivo (teste em iPhone 12, 6, etc)
- [ ] Todos Links funcionam
- [ ] Imagens carregam (não quebradas)
- [ ] Copy está idêntico ao aprovado (não reescreveu)
- [ ] CTA WhatsApp funciona e usa link correto
- [ ] Schema markup é válido (schema.org validator)
- [ ] Alt text em todas imagens
- [ ] Buttons são 44px+ (acessibilidade)
- [ ] Contraste ≥ 4.5:1 (acessibilidade)
- [ ] Sem console errors

## 6. Regras Específicas

- **Não reinvente:** Se estratégia diz X, implementa X — não muda porque "seria melhor assim"
- **Copy é sagrado:** Use exatamente como aprovado, nem adicione nem remova palavras
- **Dados de passeios:** Pegue de `_conhecimento/passeios.md`, não invente preço/duração
- **Mobile-first sempre:** Se não funciona bem em 320px, volte
- **Performance é feature:** Se página fica > 3s, refatore (imagens, componentes, etc)
- **SEO sem sacrificar UX:** Nunca quebre conversão para forçar keyword
- **Componentes reutilizáveis:** Se usa mesmo componente em 2+ páginas, cria componente
- **Sem bibliotecas pesadas:** Prefira Tailwind a Styled-components, prefira HTML a JS

## 7. Saída Esperada

### Commits Claros

Cada commit deve ser atômico e descritivo:

```
feat: add home page with category grid
feat: implement Seixas tour page (copy + UX + SEO)
fix: improve image loading performance (lazy-load, srcset)
chore: organize passeios data structure
```

### Documentação (README.md do projeto)

```markdown
# Vem Passear em Jampa — Site

## Stack
- Next.js 14+ (App Router)
- Tailwind CSS
- TypeScript
- `next/image` para otimização

## Como Rodar
```bash
npm install
npm run dev # http://localhost:3000
```

## Estrutura
- `app/` — Páginas e layouts
- `components/` — Componentes reutilizáveis
- `data/` — Dados estruturados (passeios, empresa)
- `public/` — Assets estáticos (imagens)
- `styles/` — Estilos globais

## Performance
- LCP target: < 2.5s
- CLS target: < 0.1
- Imagens otimizadas (Next/Image)
- Fontes carregadas eficientemente

## SEO
- Meta tags corretos
- Schema markup (JSON-LD)
- Alt text em imagens
- Links internos entre páginas
- Mobile-first responsive

## Acessibilidade
- WCAG AA (mínimo)
- 44px tap targets
- Contraste 4.5:1+ (body)
- Focus states claros
```

## 8. Critério de Qualidade

✅ **Bom programador:** Implementou conforme aprovado, performance ótima, mobile-first funciona, sem erros, copy intacto, dados corretos  
❌ **Ruim:** Reinventou estratégia, quebrou copy, dados incorretos, performance ruim, mobile não funciona, erros no console  

## 9. Stack Recomendado

**Obrigatório:**
- Next.js (versão LTS atual)
- TypeScript
- Tailwind CSS ou styled-components

**Opcional (conforme necessidade):**
- Shadcn/UI (componentes acessíveis prontos)
- React Query (se tiver dados dinâmicos)
- Zod (validação de formulários)

**Evitar:**
- jQuery, GSAP para animações (prefira CSS)
- Redux (a menos que estado complexo)
- CSS Modules (Tailwind é suficiente)

## 10. Próximas Skills na Cadeia

Depois de implementar:

1. **QA/Testing:** Valida que site funciona conforme aprovado
2. **DevOps:** Deploy em produção (Vercel, Netlify, etc)
3. **Analytics:** Monitora performance, conversão, tráfego

---

*Skill v1.0 | Criada 2026-04-25 | Fase Implementação Next.js*
