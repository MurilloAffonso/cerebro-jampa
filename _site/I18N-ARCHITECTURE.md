# i18n Architecture — Vem Passear Jampa Website

**Date:** 2026-04-25  
**Status:** Planning (not yet implemented)  
**Framework:** Next.js 14 (App Router)  
**Languages:** Portuguese (BR), English, Spanish

---

## Overview

This document defines the technical architecture to support 3-language site structure with:
- ✅ Dynamic `[lang]` routing segment
- ✅ Centralized translation JSON files
- ✅ Language-agnostic data (passeios, empresa)
- ✅ SEO-optimized hreflang and metadata per language
- ✅ No language mixing (complete URL separation)
- ✅ Portuguese as base language

---

## 1. File Structure — Before & After

### Current Structure (Portuguese only)

```
_site/
  app/
    page.tsx                  → /
    passeios/
      page.tsx               → /passeios
      [categoria]/
        [slug]/
          page.tsx           → /passeios/[categoria]/[slug]
    sobre/
      page.tsx               → /sobre
    layout.tsx               → Root metadata
```

### Target Structure (Multilingual)

```
_site/
  app/
    [lang]/                          ← NEW: Dynamic language segment
      layout.tsx                     ← Language-specific metadata
      page.tsx                       → /:lang/
      passeios/                      ← PT only (EN → tours, ES → paseos)
        page.tsx                     → /:lang/passeios
        [categoria]/
          [slug]/
            page.tsx                 → /:lang/passeios/:categoria/:slug
      sobre/                         ← PT only (EN → about, ES → sobre-nosotros)
        page.tsx                     → /:lang/sobre
  
  data/
    translations/                    ← NEW: Translation files
      pt.json                        ← Portuguese (complete)
      en.json                        ← English (template + translations)
      es.json                        ← Spanish (template + translations)
    passeios.ts                      ← Unchanged (language-agnostic)
    empresa.ts                       ← Unchanged (language-agnostic)
  
  lib/
    i18n.ts                          ← NEW: i18n helper functions
    seo.ts                           ← Update: Add hreflang generation
  
  components/
    LanguageSwitcher.tsx             ← NEW: Language selector dropdown
    Header.tsx                       ← Update: Receive lang prop
    Footer.tsx                       ← Update: Receive lang prop
    (other components remain mostly unchanged)
```

---

## 2. Step-by-Step Implementation

### Step 1: Create i18n Helper Library

**File:** `_site/lib/i18n.ts`

```typescript
type Language = 'pt-br' | 'en' | 'es';

const TRANSLATIONS = {
  'pt-br': () => require('@/data/translations/pt.json'),
  'en': () => require('@/data/translations/en.json'),
  'es': () => require('@/data/translations/es.json'),
};

const LANGUAGE_META = {
  'pt-br': { locale: 'pt_BR', label: 'Português', flag: '🇧🇷' },
  'en': { locale: 'en_US', label: 'English', flag: '🇺🇸' },
  'es': { locale: 'es_ES', label: 'Español', flag: '🇪🇸' },
};

export function loadTranslation(lang: Language) {
  try {
    return TRANSLATIONS[lang]();
  } catch (e) {
    console.warn(`Translation not found for ${lang}, falling back to pt-br`);
    return TRANSLATIONS['pt-br']();
  }
}

export function getLanguageMeta(lang: Language) {
  return LANGUAGE_META[lang] || LANGUAGE_META['pt-br'];
}

export function getLocale(lang: Language) {
  return getLanguageMeta(lang).locale;
}

export const SUPPORTED_LANGUAGES: Language[] = ['pt-br', 'en', 'es'];

export function isValidLanguage(lang: unknown): lang is Language {
  return SUPPORTED_LANGUAGES.includes(lang as Language);
}
```

### Step 2: Create Translation Files

**File:** `_site/data/translations/pt.json` (Portuguese — base language)

```json
{
  "common": {
    "nav.home": "Home",
    "nav.tours": "Passeios",
    "nav.about": "Sobre",
    "cta.whatsapp": "💬 WhatsApp",
    "footer.rights": "© 2026 Vem Passear em Jampa. Todos os direitos reservados.",
    "footer.nav": "Navegação",
    "footer.contact": "Contato"
  },
  "pages": {
    "home": {
      "title": "O Que Fazer em João Pessoa | Passeios e Tours",
      "h1": "O Que Fazer em João Pessoa?",
      "hero_subtitle": "Descubra praias incríveis, piscinas naturais e experiências que você nunca esquecerá. A gente conhece cada canto e quer te ajudar.",
      "cta_button": "💬 Vamos Montar Seu Passeio",
      "featured_title": "Passeios em Destaque",
      "testimonial": "Não conhecíamos nada de João Pessoa e Murillo nos guiou para os melhores passeios. Voltamos apaixonados pela cidade! Você ganhou clientes para a vida.",
      "testimonial_author": "Marina & Carlos, Casal (SP)",
      "testimonial_context": "Após Litoral Sul + Piscinas Naturais",
      "cta_final": "Vamos Montar o Roteiro que Você Sonha",
      "cta_final_desc": "Mande uma mensagem para Murillo e vamos ajudar com orientação local, preço justo e atendimento rápido.",
      "cta_final_button": "Chamar Murillo no WhatsApp"
    },
    "tours": {
      "title": "Tours by Category",
      "h1": "Explore Tours in João Pessoa",
      "categories": {
        "praias": "Beaches",
        "piscinas-naturais": "Natural Pools",
        "cultura": "Culture",
        "trilhas": "Hikes",
        "experiencias": "Experiences"
      }
    }
  },
  "passeios": {
    "seixas": {
      "nome": "Seixas",
      "descricao": "Piscinas naturais cristalinas com peixinhos coloridos. Passseio meia volta com tudo incluído."
    },
    "areia-vermelha": {
      "nome": "Areia Vermelha",
      "descricao": "Formação de areia vermelha única em JP. Piscinas naturais em maré baixa."
    }
  },
  "faq": {
    "how_to_book": {
      "pergunta": "Como faço para reservar um passeio?",
      "resposta": "Mande uma mensagem pelo WhatsApp para Murillo. Ele vai entender seu perfil e indicar o melhor roteiro pra você."
    },
    "best_season": {
      "pergunta": "Qual é a melhor época para visitar João Pessoa?",
      "resposta": "O ano todo é bom! Alta estação: dezembro a fevereiro e julho. Mas cada mês tem seu charme. Consulte Murillo pra saber qual passeio é melhor conforme a época."
    },
    "cheapest_tour": {
      "pergunta": "Qual é o passeio mais barato?",
      "resposta": "Piscinas naturais (Seixas, Penha, Picãozinho) saem por R$ 60. São meia volta e bem completos."
    },
    "children": {
      "pergunta": "Posso levar criança?",
      "resposta": "Sim! A maioria dos passeios é segura para crianças. Consulte Murillo sobre idade mínima e restrições específicas."
    },
    "rain": {
      "pergunta": "E se chover? Posso remarcar?",
      "resposta": "Sim, sem problema. A gente remarca pra outra data ou devolve o dinheiro. Confiança primeiro."
    }
  }
}
```

**File:** `_site/data/translations/en.json` (English — template)

```json
{
  "common": {
    "nav.home": "Home",
    "nav.tours": "Tours",
    "nav.about": "About",
    "cta.whatsapp": "💬 WhatsApp",
    "footer.rights": "© 2026 Vem Passear em Jampa. All rights reserved.",
    "footer.nav": "Navigation",
    "footer.contact": "Contact"
  },
  "pages": {
    "home": {
      "title": "What to Do in João Pessoa | Tours & Experiences",
      "h1": "What to Do in João Pessoa?",
      "hero_subtitle": "[TRANSLATE: Discover incredible beaches...]",
      "cta_button": "[TRANSLATE: Let's Plan Your Tour]",
      "featured_title": "Featured Tours",
      "testimonial": "[TRANSLATE: We didn't know anything about...]",
      "testimonial_author": "[TRANSLATE: Marina & Carlos, Couple (SP)]",
      "testimonial_context": "[TRANSLATE: After South Coast + Natural Pools]",
      "cta_final": "[TRANSLATE: Let's Build Your Dream Itinerary]",
      "cta_final_desc": "[TRANSLATE: Send a message to Murillo...]",
      "cta_final_button": "Call Murillo on WhatsApp"
    },
    "tours": {
      "title": "Tours by Category",
      "h1": "Explore Tours in João Pessoa",
      "categories": {
        "praias": "Beaches",
        "piscinas-naturais": "Natural Pools",
        "cultura": "Culture",
        "trilhas": "Hikes",
        "experiencias": "Experiences"
      }
    }
  },
  "passeios": {
    "seixas": {
      "nome": "[TRANSLATE: Seixas]",
      "descricao": "[TRANSLATE: Crystal clear natural pools...]"
    }
  },
  "faq": {
    "how_to_book": {
      "pergunta": "[TRANSLATE: How do I book a tour?]",
      "resposta": "[TRANSLATE: Send a WhatsApp message to Murillo...]"
    }
  }
}
```

**File:** `_site/data/translations/es.json` (Spanish — template)

```json
{
  "common": {
    "nav.home": "Inicio",
    "nav.tours": "Paseos",
    "nav.about": "Sobre Nosotros",
    "cta.whatsapp": "💬 WhatsApp",
    "footer.rights": "© 2026 Vem Passear em Jampa. Todos los derechos reservados.",
    "footer.nav": "Navegación",
    "footer.contact": "Contacto"
  },
  "pages": {
    "home": {
      "title": "Qué Hacer en João Pessoa | Tours y Experiencias",
      "h1": "¿Qué Hacer en João Pessoa?",
      "hero_subtitle": "[TRADUCIR: Descubre playas increíbles...]",
      "cta_button": "[TRADUCIR: Planifiquemos Tu Tour]",
      "featured_title": "Tours Destacados",
      "testimonial": "[TRADUCIR: No sabíamos nada sobre...]",
      "testimonial_author": "[TRADUCIR: Marina & Carlos, Pareja (SP)]",
      "testimonial_context": "[TRADUCIR: Después de Costa Sur + Piscinas Naturales]",
      "cta_final": "[TRADUCIR: Construyamos Tu Itinerario de Ensueño]",
      "cta_final_desc": "[TRADUCIR: Envía un mensaje a Murillo...]",
      "cta_final_button": "Llamar a Murillo en WhatsApp"
    },
    "tours": {
      "title": "Tours por Categoría",
      "h1": "Explora Tours en João Pessoa",
      "categories": {
        "praias": "Playas",
        "piscinas-naturais": "Piscinas Naturales",
        "cultura": "Cultura",
        "trilhas": "Senderismo",
        "experiencias": "Experiencias"
      }
    }
  },
  "passeios": {
    "seixas": {
      "nome": "[TRADUCIR: Seixas]",
      "descricao": "[TRADUCIR: Piscinas naturales cristalinas...]"
    }
  },
  "faq": {
    "how_to_book": {
      "pergunta": "[TRADUCIR: ¿Cómo reservo un paseo?]",
      "resposta": "[TRADUCIR: Envía un mensaje de WhatsApp a Murillo...]"
    }
  }
}
```

### Step 3: Update Root Layout for Language Routing

**File:** `_site/app/layout.tsx` (Root — keep as minimal wrapper)

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://vempassearjampa.com.br"),
  title: "Vem Passear em Jampa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html>{children}</html>;
}
```

### Step 4: Create Language-Specific Layout

**File:** `_site/app/[lang]/layout.tsx` (NEW)

```typescript
import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { loadTranslation, getLocale, isValidLanguage } from "@/lib/i18n";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  if (!isValidLanguage(params.lang)) {
    return {};
  }

  const t = loadTranslation(params.lang);
  const locale = getLocale(params.lang);

  return {
    metadataBase: new URL("https://vempassearjampa.com.br"),
    title: {
      default: t.pages.home.title || "Vem Passear em Jampa",
      template: "%s | Vem Passear em Jampa",
    },
    description: t.pages.home.hero_subtitle || "Tours and experiences in João Pessoa",
    openGraph: {
      type: "website",
      locale,
      url: `https://vempassearjampa.com.br/${params.lang}/`,
      siteName: "Vem Passear em Jampa",
    },
  };
}

export function generateStaticParams() {
  return [
    { lang: 'pt-br' },
    { lang: 'en' },
    { lang: 'es' },
  ];
}

export default function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isValidLanguage(params.lang)) {
    redirect('/pt-br/');
  }

  const locale = getLocale(params.lang);

  return (
    <html lang={locale}>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header lang={params.lang} />
        <main className="flex-1">{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
```

### Step 5: Update Home Page Component

**File:** `_site/app/[lang]/page.tsx` (Refactor from `_site/app/page.tsx`)

```typescript
import type { Metadata } from "next";
import Link from "next/link";
import { passeios } from "@/data/passeios";
import { paginasInfo } from "@/data/empresa";
import { FAQAccordion } from "@/components/FAQAccordion";
import { loadTranslation, isValidLanguage } from "@/lib/i18n";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  if (!isValidLanguage(params.lang)) {
    return {};
  }

  const t = loadTranslation(params.lang);

  return {
    title: t.pages.home.title,
    description: t.pages.home.hero_subtitle,
  };
}

export default function Home({ params }: { params: { lang: string } }) {
  if (!isValidLanguage(params.lang)) {
    redirect('/pt-br/');
  }

  const t = loadTranslation(params.lang);
  const topPasseios = passeios.slice(0, 5);

  // Map FAQ items from translation
  const faqItems = Object.entries(t.faq).map(([key, item]: [string, any]) => ({
    pergunta: item.pergunta,
    resposta: item.resposta,
  }));

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-b from-blue-50 to-white">
        <div className="container-safe text-center">
          <h1 className="mb-4">{t.pages.home.h1}</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.pages.home.hero_subtitle}
          </p>
          <a
            href={paginasInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent transition-colors shadow-lg hover:shadow-xl min-h-[44px] flex items-center justify-center"
          >
            {t.pages.home.cta_button}
          </a>
        </div>
      </section>

      {/* Featured Tours Grid */}
      <section className="section-padding">
        <div className="container-safe">
          <h2 className="text-center mb-12">{t.pages.home.featured_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPasseios.map((p) => (
              <Link
                key={p.id}
                href={`/${params.lang}/${params.lang === 'en' ? 'tours' : params.lang === 'es' ? 'paseos' : 'passeios'}/${p.categoria}/${p.slug}`}
                className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-48 bg-gradient-to-b from-blue-200 to-blue-50 flex items-center justify-center text-4xl">
                  🌊
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition">
                    {t.passeios[p.slug]?.nome || p.nome}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {t.passeios[p.slug]?.descricao || p.descricao}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Preço:</span>
                      <span className="font-bold text-primary">{p.preco}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-safe max-w-2xl">
          <h2 className="text-center mb-12">FAQ</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-primary text-white">
        <div className="container-safe text-center">
          <h2>{t.pages.home.cta_final}</h2>
          <p className="text-lg mt-4 mb-8">{t.pages.home.cta_final_desc}</p>
          <a
            href={paginasInfo.whatsappHref}
            className="btn-primary bg-white text-primary hover:bg-gray-100"
          >
            {t.pages.home.cta_final_button}
          </a>
        </div>
      </section>
    </div>
  );
}
```

### Step 6: Refactor Passeios Routes

Move `_site/app/passeios/` → `_site/app/[lang]/passeios/`

Update `_site/app/[lang]/passeios/[categoria]/[slug]/page.tsx` to:
- Accept `params.lang`
- Load translations
- Use `t.passeios[slug]` for translated names/descriptions

### Step 7: Create Language Switcher Component

**File:** `_site/components/LanguageSwitcher.tsx` (NEW)

```typescript
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { SUPPORTED_LANGUAGES } from '@/lib/i18n';

interface LanguageSwitcherProps {
  currentLang: string;
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  function handleLanguageChange(newLang: string) {
    // Replace lang segment: /pt-br/about → /en/about
    const segments = pathname.split('/');
    segments[1] = newLang;
    const newPath = segments.join('/');
    router.push(newPath);
  }

  return (
    <div className="flex gap-2">
      {SUPPORTED_LANGUAGES.map((lang) => (
        <button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`px-3 py-1 rounded text-sm transition ${
            currentLang === lang
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {lang === 'pt-br' ? '🇧🇷 PT' : lang === 'en' ? '🇺🇸 EN' : '🇪🇸 ES'}
        </button>
      ))}
    </div>
  );
}
```

### Step 8: Update Header & Footer to Accept Lang Prop

**File:** `_site/components/Header.tsx` (Update)

```typescript
import Link from "next/link";
import { paginasInfo } from "@/data/empresa";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface HeaderProps {
  lang: string;
}

export function Header({ lang }: HeaderProps) {
  const navLinks = {
    'pt-br': [
      { href: `/${lang}/`, label: 'Home' },
      { href: `/${lang}/passeios`, label: 'Passeios' },
      { href: `/${lang}/sobre`, label: 'Sobre' },
    ],
    'en': [
      { href: `/${lang}/`, label: 'Home' },
      { href: `/${lang}/tours`, label: 'Tours' },
      { href: `/${lang}/about`, label: 'About' },
    ],
    'es': [
      { href: `/${lang}/`, label: 'Inicio' },
      { href: `/${lang}/paseos`, label: 'Paseos' },
      { href: `/${lang}/sobre-nosotros`, label: 'Sobre Nosotros' },
    ],
  };

  const links = navLinks[lang as keyof typeof navLinks] || navLinks['pt-br'];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-safe py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${lang}/`} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              VP
            </div>
            <span className="font-bold text-dark hidden sm:inline">
              Vem Passear
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher currentLang={lang} />
            <a
              href={paginasInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm md:text-base"
              aria-label="WhatsApp"
            >
              💬 WhatsApp
            </a>
          </div>

          <button className="md:hidden ml-4" aria-label="Menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
```

---

## 3. Routing Reference

### URL Mapping

| Purpose | PT-BR URL | EN URL | ES URL |
|---------|-----------|--------|--------|
| Home | `/pt-br/` | `/en/` | `/es/` |
| Tours List | `/pt-br/passeios` | `/en/tours` | `/es/paseos` |
| Tour Category | `/pt-br/passeios/praias` | `/en/tours/beaches` | `/es/paseos/playas` |
| Tour Detail | `/pt-br/passeios/praias/seixas` | `/en/tours/beaches/seixas` | `/es/paseos/playas/seixas` |
| About | `/pt-br/sobre` | `/en/about` | `/es/sobre-nosotros` |
| Blog (future) | `/pt-br/blog` | `/en/blog` | `/es/blog` |

### Root Behavior

```
vempassearjampa.com.br/
  → Detect browser locale
  → Redirect to /pt-br/ (default) or /en/ or /es/
```

---

## 4. SEO Considerations

### Hreflang Implementation

In `lib/seo.ts`:

```typescript
export function generateHreflang(
  pageSlug: string,
  baseUrl = 'https://vempassearjampa.com.br'
) {
  const langs = ['pt-br', 'en', 'es'];
  
  return langs.map(lang => ({
    rel: 'alternate',
    hreflang: lang === 'pt-br' ? 'pt-BR' : lang === 'es' ? 'es-ES' : 'en-US',
    href: `${baseUrl}/${lang}${pageSlug}`,
  }));
}
```

### Metadata per Language

Each page's `generateMetadata` includes:
- Language-specific title
- Language-specific description
- OpenGraph locale: `pt_BR` | `en_US` | `es_ES`
- Hreflang links to alternative language versions

---

## 5. Translation Workflow

**Immediate:** Populate `pt.json` with 100% Portuguese content (current site content)

**Phase 2:** Professional translation for `en.json` and `es.json`
- Use qualified translator for tourism vocabulary
- Maintain tone and voice across languages
- Localize currency/measurements where relevant (e.g., hours → hours, R$ → USD estimates)

**Phase 3+:** Continuous updates to translations as new passeios/blog added

---

## 6. Testing Checklist

- [ ] `/pt-br/` loads with Portuguese
- [ ] `/en/` loads with English template
- [ ] `/es/` loads with Spanish template
- [ ] `/passeios` → `/pt-br/passeios` works
- [ ] Language switcher changes URL and content
- [ ] Hreflang tags present in head
- [ ] Meta tags localized per language
- [ ] No language mixing on same page
- [ ] Fallback to PT on invalid language

---

## 7. Dependencies

No new npm packages required. Uses:
- Next.js built-in `[lang]` dynamic segment
- JSON files for translations (no external i18n library)
- Standard Next.js metadata APIs

---

## Migration Path

1. Create `[lang]` layout and lib/i18n.ts
2. Move/refactor existing pages under `[lang]/`
3. Create translation JSON files
4. Update all components to accept lang prop
5. Test routing and metadata
6. Deploy to staging
7. Begin translation phase when ready

---

Prepared by: Claude Code  
Review by: Murillo (pending)
