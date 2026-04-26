# Meta Tags e Schema — [NOME DA PÁGINA]

## Meta Tags Básicas

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[150-160 chars. Responde por quê + CTA]">
<meta name="keywords" content="[palavra-chave 1, palavra-chave 2, palavra-chave 3]">
<meta name="author" content="Vem Passear em Jampa">
<meta name="robots" content="index, follow">
```

---

## Open Graph (Compartilhamento Social)

```html
<meta property="og:type" content="website">
<meta property="og:title" content="[Mesmo que title tag, 50-60 chars]">
<meta property="og:description" content="[Descrição social, 100-150 chars]">
<meta property="og:image" content="[URL imagem - 1200x630px recomendado]">
<meta property="og:image:alt" content="[Descrição da imagem]">
<meta property="og:url" content="[URL canônica]">
<meta property="og:site_name" content="Vem Passear em Jampa">
```

---

## Twitter Card (Compartilhamento Twitter)

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Título]">
<meta name="twitter:description" content="[Descrição]">
<meta name="twitter:image" content="[URL imagem]">
<meta name="twitter:site" content="[@conta_twitter]">
```

---

## Link Canônico

```html
<link rel="canonical" href="[URL completa desta página]">
```

---

## Schema Estruturado (JSON-LD)

### Opção 1: LocalBusiness (Agência/Lugar)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Vem Passear em Jampa",
  "description": "[Descrição curta da agência]",
  "image": "[URL logo ou foto agência]",
  "url": "https://vempassearjampa.com.br",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[CONFIRMAR: endereço]",
    "addressLocality": "João Pessoa",
    "addressRegion": "Paraíba",
    "postalCode": "[CONFIRMAR: CEP]",
    "addressCountry": "BR"
  },
  "telephone": "[CONFIRMAR: WhatsApp]",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "url": "https://wa.me/[CONFIRMAR: número]"
  }
}
```

### Opção 2: TouristActivity (Passeio)

```json
{
  "@context": "https://schema.org",
  "@type": "TouristActivity",
  "name": "[Nome do passeio]",
  "description": "[Descrição do passeio]",
  "image": "[URL imagem do passeio]",
  "areaServed": {
    "@type": "Place",
    "name": "João Pessoa, Paraíba, Brazil"
  },
  "provider": {
    "@type": "Organization",
    "name": "Vem Passear em Jampa",
    "url": "https://vempassearjampa.com.br"
  },
  "duration": "PT[XH]M",
  "priceCurrency": "BRL",
  "price": "[CONFIRMAR: preço]",
  "availableLanguage": "pt-BR"
}
```

### Opção 3: FAQSchema (Se tem FAQ)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Pergunta 1]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Resposta 1]"
      }
    },
    {
      "@type": "Question",
      "name": "[Pergunta 2]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Resposta 2]"
      }
    }
  ]
}
```

---

## Info Prática para Desenvolvedor

| Tag | Valor | Notas |
|-----|-------|-------|
| **Title** | [50-60 chars] | Inclui marca |
| **Meta Description** | [150-160 chars] | Com CTA |
| **Canonical** | [URL desta página] | Auto-referência |
| **OG Image** | [1200x630px] | Webp + fallback |
| **Keywords** | [Primária, long-tail 1, long-tail 2] | 3-5 máximo |
| **Schema** | [LocalBusiness ou TouristActivity] | JSON-LD no <head> |

---

**Página:** [Nome]  
**Slug:** [/caminho/url]  
**Data Criação:** [Data]  
**Status:** [Rascunho / Pronto / Publicado]

---
