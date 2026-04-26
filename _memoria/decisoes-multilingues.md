---
name: Decisão Multilíngue Oficial
description: Vem Passear Jampa será multilíngue em PT/EN/ES de ponta a ponta
type: project
---

# Decisão Multilíngue Oficial — Vem Passear Jampa

**Data:** 2026-04-25  
**Status:** Aprovado  
**Responsável:** Murillo (decisão), Claude Code (implementação arquitetural)

---

## 1. Decisão Estratégica

O site da Vem Passear Jampa será **totalmente multilíngue** suportando:

- 🇧🇷 **Português (Brasil)** — idioma base e nativo
- 🇺🇸 **English** — mercado de turistas internacionais (EUA, Canadá, Europa anglófona)
- 🇪🇸 **Español** — mercado hispano-americano (Argentina, Chile, Colômbia, etc.)

**Princípios:**
- Nenhuma mistura de idiomas na mesma página (separação completa de rotas)
- Português é o idioma base e primeira prioridade
- Cada idioma tem SEO próprio e otimizado para sua região
- Todas as seções: Home, Passeios, Sobre, Blog, FAQ
- Todas as interfaces: Header, Footer, Navegação, CTA, Breadcrumbs

**Why:**  
João Pessoa atrai turistas internacionais de todo o mundo. Multilíngue aumenta conversão, SEO para buscas internacionais e acessibilidade. Base PT garante que Murillo consiga gerenciar o conteúdo na língua nativa.

**How to apply:**  
Todo novo conteúdo deve ser criado pensando "como ficará em 3 idiomas?" Estrutura técnica pronta para recepcionar traduções. Não há urgência em traduzir hoje (prioridade: validar Home e catálogo em PT), mas arquitetura deve estar pronta.

---

## 2. Arquitetura de Rotas

### Padrão de URL

Prefix-based routing com idioma como primeiro segmento dinâmico:

```
https://vempassearjampa.com.br/pt-br/          → Home (PT)
https://vempassearjampa.com.br/pt-br/passeios  → Listagem (PT)
https://vempassearjampa.com.br/pt-br/passeios/praias/seixas  → Detalhe (PT)

https://vempassearjampa.com.br/en/              → Home (EN)
https://vempassearjampa.com.br/en/tours         → Listagem (EN)
https://vempassearjampa.com.br/en/tours/beaches/seixas  → Detalhe (EN)

https://vempassearjampa.com.br/es/              → Home (ES)
https://vempassearjampa.com.br/es/paseos        → Listagem (ES)
https://vempassearjampa.com.br/es/paseos/playas/seixas  → Detalhe (ES)
```

### Distribuição de Conteúdo

| Idioma | Slug Home | Passeios Plural | Detalhe | Sobre |
|--------|-----------|-----------------|---------|-------|
| PT-BR  | `/pt-br/` | `/passeios/` | `/passeios/[cat]/[slug]/` | `/sobre/` |
| EN     | `/en/`    | `/tours/`    | `/tours/[cat]/[slug]/`    | `/about/` |
| ES     | `/es/`    | `/paseos/`   | `/paseos/[cat]/[slug]/`   | `/sobre-nosotros/` |

### Redirect Root

```
vempassearjampa.com.br → redireciona para /pt-br/ (detectar locale do browser)
```

---

## 3. Estrutura de Dados

### Passeios Language-Agnostic

```typescript
// _site/data/passeios.ts — IDs e slugs únicos (não muda com idioma)
interface Passeio {
  id: string;           // "seixas" (único)
  categoria: string;    // "praias" (PT), "beaches" (EN), "playas" (ES)
  slug: string;         // "seixas" (único em todas as línguas)
  preco: number;        // valor não muda
  duracao: string;      // "3 horas" (traduzível, mas valor é o mesmo)
  coverImage?: string;  // imagem universal
  gallery?: string[];   // imagens universais
}
```

### Conteúdo Traduzível

```typescript
// _site/data/translations/[lang].json
{
  "common": {
    "nav.home": "Home",
    "nav.tours": "Tours",
    "nav.about": "About",
    "cta.whatsapp": "Chat on WhatsApp",
    "footer.rights": "All rights reserved"
  },
  "passeios": {
    "seixas": {
      "nome": "Seixas Beach",
      "descricao": "Beautiful natural pools with crystal clear water...",
      "itinerario": [
        "Meeting point: Downtown",
        "30 minutes by boat to Seixas",
        "2 hours at the beach",
        "Return by 4 PM"
      ]
    }
  },
  "pages": {
    "home": {
      "h1": "What to do in João Pessoa?",
      "hero": "Discover amazing beaches and natural experiences..."
    }
  },
  "faq": {
    "how_to_book": {
      "pergunta": "How do I book a tour?",
      "resposta": "Send a message on WhatsApp to Murillo..."
    }
  }
}
```

### Organização de Pastas

```
_site/
  data/
    translations/
      pt.json       ← Português (BR)
      en.json       ← English
      es.json       ← Español
    passeios.ts     ← Dados universais (ID, slug, preço, imagem)
    empresa.ts      ← Dados universais (contato, redes, CNPJ)
  
  app/
    [lang]/                          ← Dynamic language segment
      layout.tsx                     ← Meta tags, lang attribute, CSS
      page.tsx                       ← Home (PT/EN/ES)
      passeios/                      ← PT: /passeios, EN: /tours, ES: /paseos
        page.tsx                     ← Listagem por categoria
        [categoria]/
          [slug]/
            page.tsx                 ← Detalhe do passeio
      sobre/                         ← PT: /sobre, EN: /about, ES: /sobre-nosotros
        page.tsx
  
  components/
    LanguageSwitcher.tsx             ← Dropdown para mudar idioma
    Header.tsx                       ← Receive lang prop, renderiza links dinâmicos
    Footer.tsx                       ← Receive lang prop
    FAQAccordion.tsx                 ← Receive items array (traduzido)
    (outros componentes reutilizáveis)
  
  lib/
    i18n.ts                          ← Funções de suporte a traduções
    seo.ts                           ← Schema por idioma, hreflang
```

---

## 4. Fluxo de Dados

### Como Funciona a Tradução

1. **Route Params:** `params.lang` extraído da URL (`pt-br`, `en`, `es`)

2. **Load Translation:**
   ```typescript
   // lib/i18n.ts
   export function loadTranslation(lang: 'pt-br' | 'en' | 'es') {
     const file = require(`@/data/translations/${lang}.json`);
     return file;
   }
   ```

3. **Components Receive `lang` Prop:**
   ```typescript
   // app/[lang]/page.tsx
   export default function Home({ params }: { params: { lang: string } }) {
     const t = loadTranslation(params.lang);
     return <h1>{t.pages.home.h1}</h1>;
   }
   ```

4. **Passeios com Traduções:**
   ```typescript
   // app/[lang]/passeios/[categoria]/[slug]/page.tsx
   export default function PasseioDetail({ params }) {
     const { lang, slug } = params;
     const passeio = getPasseioBySlug(slug);           // Dados universais
     const t = loadTranslation(lang);                  // Traduções
     const descricao = t.passeios[slug].descricao;      // Texto traduzido
     return <h1>{t.passeios[slug].nome}</h1>;          // Nome traduzido
   }
   ```

---

## 5. Considerações de SEO

### Hreflang Tags

Cada página incluir link alternativo:

```html
<!-- /pt-br/passeios/praias/seixas -->
<link rel="alternate" hreflang="pt-BR" href="https://vempassearjampa.com.br/pt-br/passeios/praias/seixas" />
<link rel="alternate" hreflang="en" href="https://vempassearjampa.com.br/en/tours/beaches/seixas" />
<link rel="alternate" hreflang="es" href="https://vempassearjampa.com.br/es/paseos/playas/seixas" />
<link rel="alternate" hreflang="x-default" href="https://vempassearjampa.com.br/pt-br/" />
```

### Metadata por Idioma

```typescript
// app/[lang]/page.tsx — generateMetadata
export async function generateMetadata({ params }: { params: { lang: string } }) {
  const t = loadTranslation(params.lang);
  return {
    title: t.pages.home.h1,
    description: t.pages.home.description,
    openGraph: {
      locale: params.lang === 'pt-br' ? 'pt_BR' : params.lang === 'es' ? 'es_ES' : 'en_US',
      url: `https://vempassearjampa.com.br/${params.lang}/`,
    }
  };
}
```

### Sitemap.xml

Gerar sitemap para cada idioma:

```xml
<url>
  <loc>https://vempassearjampa.com.br/pt-br/</loc>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>
<url>
  <loc>https://vempassearjampa.com.br/en/</loc>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
<!-- ... -->
```

---

## 6. Implementação Timeline

**Fase 1 (Agora):**
- ✅ Documentar decisão multilíngue (este arquivo)
- ✅ Estruturar pastas e rotas
- ⏳ Implementar `lib/i18n.ts` e `[lang]` layout
- ⏳ Refatorar `app/` para dinâmico

**Fase 2 (Próximo Sprint):**
- Traduzir Home para EN e ES
- Traduzir Passeios (5 primeiros) para EN e ES
- Criar LanguageSwitcher component
- Validar SEO com Google Search Console

**Fase 3 (Posteriores):**
- Traduzir Blog quando existir
- Integrar com traduções automáticas (Tradutor, etc.) para Fase 4 (24+ passeios)
- Otimizar keywords por idioma/região

---

## 7. Próximos Passos

1. **Claude Code:** Refatorar estrutura `_site/` com `[lang]` dinâmico
2. **Claude Code:** Criar `lib/i18n.ts` com helper functions
3. **Claude Code:** Criar JSON de traduções com textos atuais (PT) + placeholders (EN/ES)
4. **Murillo:** Revisar estrutura e confirmar rotas (principalmente slugs em EN/ES)
5. **Murillo:** Designar tempo para traduções (ou indicar tradutor)
