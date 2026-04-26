---
skill: seo-local-turismo
versao: 1.0
projeto_id: pagina-seixas-2026-04-26
etapa: 4 de 6
status: ENTREGUE — aguardando revisão de Murillo
data: 2026-04-26
fontes_consultadas:
  - _conhecimento/seo-local-joao-pessoa.md
  - _conhecimento/oportunidades-ranqueamento.md
  - _conhecimento/clusters-seo.md
  - _conhecimento/empresa.md
  - _conhecimento/catalogo_vempassear_estruturado.md (linhas 341–364)
  - _site/planejamento/seixas/01-estrategia-site.md
  - _site/planejamento/seixas/02a-copywriter-vendas.md (v3.1)
  - _site/planejamento/seixas/02b-ux-ui-mobile-first.md (v1.2)
  - _site/planejamento/seixas/03-diretor-visual-turismo.md (v1.0)
  - _site/lib/seo.ts (funções disponíveis)
dependencias_anteriores:
  - "02a: H1 aprovado, 7 FAQ questions, blocos de copy"
  - "02b: estrutura de blocos, wireframe mobile"
  - "03: specs de imagem, hero WebP+JPG, alt text context"
---

# SEO — Piscinas Naturais do Seixas

**Entrega da Etapa 4 — `seo-local-turismo`**  
**URL:** `/passeios/piscinas-naturais/seixas`  
**Próxima etapa:** 5 `briefing-designer` (recebe especificações visuais + SEO para comunicar ao designer)

---

> **Nota de uso:** Este documento é a especificação SEO completa para a página `/passeios/piscinas-naturais/seixas`. Lacunas marcadas com `[CONFIRMAR COM MURILLO: ...]` bloqueiam a implementação dos campos correspondentes — o `programador-de-site` não deve inventar esses valores.

---

## 1. KEYWORD PRINCIPAL

| Campo | Valor |
|-------|-------|
| **Keyword** | `seixas joão pessoa` |
| **Volume estimado** | 220–550 buscas/mês (gap entre fontes; médio conservador: ~300/mês) |
| **Posição no ranking top 10** | #5 (fonte: `clusters-seo.md`) |
| **Estágio de intenção** | Consideração + Decisão (turista já sabe que quer Seixas, está validando) |
| **Dificuldade competitiva** | Baixa–média (conteúdo existente é genérico, sem profundidade) |
| **Tempo estimado de ranking** | 1–3 meses (passeios específicos têm menos concorrência) |
| **Potencial de impacto** | +30–50 clientes/mês quando ranquear (score 56.0 — maior entre passeios individuais) |

**Por que esta é a keyword principal:**  
Turista que busca "seixas joão pessoa" já passou da descoberta. Está comparando opções, verificando preço, maré e confiança. É o perfil com maior propensão a converter em reserva no WhatsApp — exatamente o perfil-alvo desta página.

---

## 2. KEYWORDS SECUNDÁRIAS

### 2.1 Cluster — Piscinas Naturais

| Keyword | Volume (est.) | Papel na Página | Tipo |
|---------|--------------|----------------|------|
| `piscinas naturais joão pessoa` | 380+ / mês | Suporte — mencionar em body, H2 | Cluster |
| `piscinas naturais seixas` | 80–120 / mês | Variação — mencionar em lead e FAQ | Específica |
| `passeio seixas` | 80–120 / mês | Variação curta — mencionar no H1 e meta | Específica |
| `piscinas naturais paraíba` | 60–100 / mês | Long-tail de descoberta — body copy | Regional |

### 2.2 Long-tail de Decisão

| Keyword | Volume (est.) | Papel na Página | Tipo |
|---------|--------------|----------------|------|
| `passeio piscinas naturais joão pessoa` | 60–100 / mês | H1 + meta description | Conversão |
| `tour seixas joão pessoa` | 30–60 / mês | Mencionar em body como sinônimo | Conversão |
| `seixas snorkel joão pessoa` | 20–40 / mês | Body copy — opcionais do passeio | Específica |
| `piscinas naturais maré baixa joão pessoa` | 20–40 / mês | Bloco de aviso de maré | Educacional |
| `embarque tambaú piscinas naturais` | 10–30 / mês | FAQ #4 + informações práticas | Operacional |

### 2.3 Long-tail Educacional (alimenta blog links)

| Keyword | Papel |
|---------|-------|
| `como funciona maré piscinas naturais` | Mencionar no bloco aviso maré → link para blog |
| `o que ver seixas joão pessoa` | Bloco "O que espera por você em Seixas" |
| `seixas ponto mais oriental das américas` | Diferencial geográfico — lead e body |
| `snorkel seixas joão pessoa` | Bloco opcionais |

---

## 3. INTENÇÕES DE BUSCA MAPEADAS

A página precisa atender três perfis simultâneos:

### Estágio 2 — Consideração (turista comparando opções)

**Intenção:** "Quero saber mais sobre Seixas antes de decidir."  
**O que busca:** fotos, preço, o que está incluso, duração, diferencial vs. outras piscinas  
**Satisfeito por:** Info Card (R$ 60 / 3h30 / Tambaú), Bloco 6 (descrição sensorial), Bloco 8 (incluso/não incluso)

### Estágio 3 — Decisão (turista pronto para reservar)

**Intenção:** "Quero agendar Seixas — como funciona?"  
**O que busca:** CTA claro, Cadastur, reviews, horário de saída, onde embarcar  
**Satisfeito por:** CTA Hero (WhatsApp), Por Que Confiar (Bloco 4), FAQ Bloco 9, Informações Práticas (Bloco 11)

### Estágio de Barreira (turista com objeção)

**Intenção:** "Nunca mergulhei / Vou com criança / E se a maré não estiver boa?"  
**O que busca:** resposta direta, sem julgamento, sem urgência falsa  
**Satisfeito por:** FAQ accordion — perguntas 1, 2, 6; Bloco 3 (aviso de maré tranquilizador)

---

## 4. TITLE TAG

```
Piscinas Naturais do Seixas em João Pessoa | Vem Passear
```

**Análise:**
- **Caracteres:** 56 (dentro do limite de 60 para não cortar no Google)
- **Contém keyword principal:** ✅ "seixas" + "joão pessoa" + "piscinas naturais"
- **Contém marca:** ✅ "Vem Passear"
- **Tom:** descritivo, não forçado

**Alternativa para teste A/B (fase futura):**
```
Passeio Seixas — Piscinas Naturais em João Pessoa | Vem Passear
```
(63 chars — marginalmente longo, mas "Passeio" como primeira palavra pode aumentar CTR para intent de decisão)

**Implementação:** campo `title` em `generateMetadata()` → `lib/seo.ts`

---

## 5. META DESCRIPTION

```
Conheça as piscinas naturais de Seixas em João Pessoa. Maré baixa, corais e água cristalina. R$ 60 por pessoa. Cadastur ativo. Reserve pelo WhatsApp!
```

**Análise:**
- **Caracteres:** 151 (dentro de 150–160)
- **Contém location:** ✅ "João Pessoa" + "Seixas"
- **Contém diferencial:** ✅ "maré baixa, corais e água cristalina"
- **Contém preço:** ✅ "R$ 60 por pessoa" (reduz fricção — turista sabe antes de clicar)
- **Contém prova de confiança:** ✅ "Cadastur ativo"
- **Termina com CTA:** ✅ "Reserve pelo WhatsApp!"

**Implementação:** campo `description` em `generateMetadata()` → `lib/seo.ts`

---

## 6. SLUG CONFIRMADO

| Campo | Valor |
|-------|-------|
| **Slug** | `seixas` |
| **URL completa** | `/passeios/piscinas-naturais/seixas` |
| **Estrutura** | `/passeios/[categoria]/[slug]` (rota dinâmica Next.js — App Router) |
| **Categoria** | `piscinas-naturais` |
| **Status** | ✅ Confirmado — não alterar |

**Notas de implementação:**
- Slug gerado por `slugify()` em `lib/seo.ts`
- Canonical tag deve apontar para `[SITE_URL]/passeios/piscinas-naturais/seixas`
- `gerarUrlPasseio()` retorna a URL completa a partir do slug

---

## 7. ESTRUTURA H1 / H2 / H3

### H1 (único por página)

```
Piscinas Naturais do Seixas, João Pessoa — Snorkel em Água Cristalina
```

**Aprovado em 02a-copywriter-vendas.md (v3.1)**  
**Análise:** 68 chars. Inclui keyword "seixas joão pessoa" + "piscinas naturais" + diferencial sensorial ("snorkel", "água cristalina"). Lê natural.  
**Localização na página:** Bloco 1 — Hero, logo abaixo da foto.

---

### H2 — Mapa Completo (por bloco)

| Bloco | H2 | Keyword(s) Presentes |
|-------|-----|---------------------|
| Bloco 3 | "Este passeio acontece na maré baixa — e isso é exatamente o que torna ele especial" | maré baixa, passeio |
| Bloco 4 | "Por que confiar na Vem Passear em Jampa?" | Vem Passear, confiança |
| Bloco 6 | "O que espera por você em Seixas" | Seixas, experiência |
| Bloco 7 | "Como é o passeio — passo a passo" | passeio, roteiro |
| Bloco 8 | "O que está incluso (e o que não está)" | incluso, preço |
| Bloco 9 | "Perguntas sobre o passeio de Seixas" | seixas, passeio |
| Bloco 11 | "Informações práticas para o dia do passeio" | passeio, joão pessoa |
| Bloco 13 | "Outros passeios em piscinas naturais em João Pessoa" | piscinas naturais joão pessoa |

**Nota:** Bloco 13 (passeios relacionados) usa o H2 de cluster — é o ponto de maior densidade de keyword de cluster. Estratégico para link juice interno.

---

### H3 — Subcabeçalhos por Bloco

**Bloco 4 — Por Que Confiar:**
- H3: "Cadastur 52.077.577 — Ativo"
- H3: "4.9/5 no Google"
- H3: "Murillo — Guia Local"

**Bloco 7 — Roteiro:**
- H3: "Embarque em Tambaú"
- H3: "Travessia de catamarã"
- H3: "Nas piscinas naturais de Seixas"
- H3: "Catamarã é sua base"
- H3: "Retorno para Tambaú"

**Bloco 9 — FAQ:**  
Cada pergunta do accordion pode ser `<h3>` ou elemento semântico equivalente — decisão de implementação do programador.

---

## 8. FAQ SEO — PERGUNTAS PARA FAQPAGE SCHEMA

7 perguntas identificadas no Bloco 9 de 02a. **Status de confirmação:**

| # | Pergunta | Resposta | Status Schema |
|---|---------|----------|--------------|
| 1 | Nunca mergulhei na vida. Posso fazer este passeio? | As piscinas naturais de Seixas são rasas — você fica de pé em boa parte delas. Não é necessário saber nadar ou mergulhar. Se quiser usar snorkel e máscara, a gente orienta na hora. É mais fácil do que parece. | ✅ Pronta para schema |
| 2 | O passeio realmente depende de maré baixa? E se a maré não estiver boa? | Sim — e é exatamente isso que torna o passeio especial. Piscinas naturais só aparecem com maré baixa. Antes de confirmar sua data, a gente consulta a tábua de marés de João Pessoa. Se o dia que você quer não tiver maré favorável, avisamos antes e sugerimos outra data — sem custo. | ✅ Pronta para schema |
| 3 | O que exatamente está incluso nos R$ 60? | O valor cobre o passeio compartilhado em catamarã, com uso de toboágua, caiaque, trampolim, bar e banheiro a bordo. Snorkel, máscara, fotógrafo subaquático e mergulho com cilindro são opcionais pagos à parte. Alimentação não está inclusa. | ✅ Pronta para schema |
| 4 | De onde a gente sai? E como chego até lá? | O embarque é na Praia de Tambaú, em João Pessoa. [CONFIRMAR COM MURILLO: endereço exato e ponto de referência do embarque] Se precisar de transfer de hotel até Tambaú, consulte a gente no WhatsApp — verificamos disponibilidade. | ⏳ Schema parcial — "Praia de Tambaú" disponível; endereço exato aguarda confirmação |
| 5 | Quanto tempo dura o passeio no total? | Em torno de 3h30, contando embarque, travessia de ida, tempo nas piscinas e retorno. O horário de saída varia conforme a tábua de marés — a gente confirma com você na véspera. | ✅ Pronta para schema |
| 6 | Posso levar crianças? | [CONFIRMAR COM MURILLO: há idade mínima? há restrições para crianças neste passeio?] | ⛔ Bloqueia schema desta pergunta |
| 7 | Qual é a política de cancelamento? | [CONFIRMAR COM MURILLO: política oficial — prazo, reembolso, renegociação por maré] | ⛔ Bloqueia schema desta pergunta |

**Estratégia de schema:** Implementar FAQPage com perguntas 1, 2, 3, 5 imediatamente (dados confirmados). Adicionar perguntas 4, 6 e 7 assim que Murillo confirmar. Perguntas 6 e 7 têm alto potencial de featured snippet — priorizá-las na confirmação.

---

## 9. SCHEMAS JSON-LD

Todos os schemas são gerados via `lib/seo.ts`. Os blocos abaixo são a **especificação dos valores** a preencher — não código final.

---

### 9.1 LocalBusiness (empresa — inserir na Home e referenciar na página)

```json
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Vem Passear em Jampa",
  "legalName": "AFFONSO MURILLO SOLEDADE DE OLIVEIRA",
  "taxID": "52.077.577/0001-03",
  "url": "[CONFIRMAR COM MURILLO: domínio do site]",
  "telephone": "+55 83 9908-7830",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "João Pessoa",
    "addressRegion": "PB",
    "addressCountry": "BR"
  },
  "image": "[CONFIRMAR COM MURILLO: URL da foto de Murillo para schema]",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "ratingCount": "[CONFIRMAR COM MURILLO: número exato de avaliações Google]"
  },
  "hasCredential": "Cadastur 52.077.577 — Ativo"
}
```

**Nota:** `generateLocalBusinessSchema()` em `lib/seo.ts` já existe — verificar se aceita `hasCredential` ou adaptar para `description` com Cadastur.

---

### 9.2 TouristAttraction (passeio Seixas — inserir nesta página)

```json
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Piscinas Naturais do Seixas — Passeio em João Pessoa",
  "description": "Passeio em catamarã até as piscinas naturais de Seixas, no ponto mais oriental das Américas. Maré baixa revela corais coloridos e água cristalina. R$ 60 por pessoa, saída de Tambaú, ~3h30 de duração.",
  "url": "[SITE_URL]/passeios/piscinas-naturais/seixas",
  "image": "[CONFIRMAR COM MURILLO: URL da foto hero do Seixas]",
  "touristType": ["Família", "Casal", "Grupo de amigos"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Seixas",
    "addressRegion": "João Pessoa, Paraíba",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-7.1519",
    "longitude": "-34.7929"
  },
  "offers": {
    "@type": "Offer",
    "price": "60.00",
    "priceCurrency": "BRL",
    "url": "[SITE_URL]/passeios/piscinas-naturais/seixas",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "[CONFIRMAR COM MURILLO: data de validade do preço]"
  },
  "provider": {
    "@type": "TravelAgency",
    "name": "Vem Passear em Jampa",
    "telephone": "+55 83 9908-7830"
  }
}
```

**Nota:** `generateTouristAttractionSchema()` em `lib/seo.ts` já existe — verificar campos disponíveis e completar com `geo`, `touristType`, `provider` se não existirem.

**Coordenadas de Seixas:** Latitude -7.1519, Longitude -34.7929 (ponta mais oriental — confirmar precisão se necessário).

---

### 9.3 FAQPage (inserir nesta página — bloco 9 do accordion)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Nunca mergulhei na vida. Posso fazer o passeio de Seixas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. As piscinas naturais de Seixas são rasas — você fica de pé em boa parte delas. Não é necessário saber nadar ou mergulhar. Se quiser usar snorkel e máscara, a gente orienta na hora. É mais fácil do que parece."
      }
    },
    {
      "@type": "Question",
      "name": "O passeio de Seixas realmente depende de maré baixa? E se a maré não estiver boa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim — e é exatamente isso que torna o passeio especial. Piscinas naturais só aparecem com maré baixa. Antes de confirmar sua data, a gente consulta a tábua de marés de João Pessoa. Se o dia que você quer não tiver maré favorável, avisamos antes e sugerimos outra data — sem custo."
      }
    },
    {
      "@type": "Question",
      "name": "O que está incluso nos R$ 60 do passeio de Seixas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O valor cobre o passeio compartilhado em catamarã, com uso de toboágua, caiaque, trampolim, bar e banheiro a bordo. Snorkel, máscara, fotógrafo subaquático e mergulho com cilindro são opcionais pagos à parte. Alimentação não está inclusa."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo dura o passeio de Seixas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Em torno de 3h30, contando embarque, travessia de ida, tempo nas piscinas e retorno. O horário de saída varia conforme a tábua de marés — a gente confirma com você na véspera."
      }
    }
  ]
}
```

**Perguntas a adicionar quando Murillo confirmar:**
- Pergunta 4 (endereço exato Tambaú)
- Pergunta 6 (crianças — idade mínima)
- Pergunta 7 (política de cancelamento)

**Nota:** `generateFAQSchema()` em `lib/seo.ts` já existe e aceita array `{pergunta, resposta}[]` — mapear para o formato correto da interface.

---

### 9.4 BreadcrumbList (navegação estruturada — inserir nesta página)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Início",
      "item": "[SITE_URL]"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Piscinas Naturais em João Pessoa",
      "item": "[SITE_URL]/passeios/piscinas-naturais"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Piscinas Naturais do Seixas",
      "item": "[SITE_URL]/passeios/piscinas-naturais/seixas"
    }
  ]
}
```

**Nota visual:** O BreadcrumbList SEO reflete a hierarquia visual dos breadcrumbs do site. Os labels devem ser idênticos ao texto exibido na UI para consistência (Google compara os dois).

---

## 10. LINKS INTERNOS

### 10.1 Links que esta página RECEBE (link juice de entrada)

| Página de origem | Anchor text recomendado | Prioridade |
|-----------------|------------------------|------------|
| Home | "Piscinas Naturais" ou "Ver passeio Seixas" | CRÍTICO — base da pirâmide |
| Cluster Piscinas Naturais | "Passeio Seixas — piscinas naturais com corais" | CRÍTICO — autoridade temática |
| FAQ Centralizada | "passeio de Seixas" (dentro de respostas sobre piscinas) | ALTO |
| Blog "Como Funciona Maré" | "passeio de Seixas" (exemplo de passeio maré-dependente) | ALTO |
| Blog "O Que Levar em Passeio de Praia" | "Seixas" (como exemplo) | MÉDIO |
| Blog "Melhor Época para Visitar JP" | "Seixas" (recomendação sazonal) | MÉDIO |

**Nota:** Home e Cluster Piscinas Naturais ainda não existem — são dependências críticas. Sem esses links de entrada, o ranking de Seixas será mais lento. Prioridade de implementação: Home (semana 1) → Cluster (semana 2) → Blogs (semana 2-3).

---

### 10.2 Links que esta página ENVIA (link juice de saída)

| Destino | Anchor text | Localização na página | Propósito SEO |
|---------|------------|----------------------|---------------|
| `/passeios/piscinas-naturais` | "ver outros passeios em piscinas naturais" | Bloco 13 (Passeios Relacionados) | Sobe autoridade do cluster |
| `/passeios/piscinas-naturais/areia-vermelha` | "Areia Vermelha" | Bloco 13 | Link cruzado entre passeios irmãos |
| `/passeios/piscinas-naturais/picaozinho` | "Picãozinho" | Bloco 13 | Link cruzado entre passeios irmãos |
| `/passeios/piscinas-naturais/penha` | "Penha" | Bloco 13 | Link cruzado entre passeios irmãos |
| `/blog/como-funciona-mare` (a criar) | "como funciona a maré" | Bloco 3 (Aviso de Maré) | Suporta blog educativo |
| `/faq` (a criar) | "outras dúvidas comuns" | Bloco 9 (FAQ) ou Bloco 9.5 | Suporta FAQ centralizada |

**Total de links de saída internos:** 6 (dentro do recomendado de 3–8 por página).

---

### 10.3 Anchor Text — Regras

- ✅ Usar texto descritivo: "passeio Seixas piscinas naturais", "Areia Vermelha"
- ❌ Nunca: "clique aqui", "saiba mais", "acesse"
- Variar entre exata ("seixas joão pessoa") e natural ("o passeio de Seixas") para não parecer spam

---

## 11. ALT TEXT — DIRETRIZES

As fotos da página de Seixas ainda aguardam confirmação de Murillo (foto hero pendente, galeria não definida). As diretrizes abaixo são aplicadas quando as fotos chegarem.

### 11.1 Padrão de ALT Text para Seixas

**Fórmula:** `[O que está na imagem] + [contexto local] + [ponto de vista]`

| Imagem | ALT text recomendado |
|--------|---------------------|
| Foto hero (piscina natural com coral) | `Piscinas naturais de Seixas com coral e água cristalina durante maré baixa em João Pessoa` |
| Catamarã navegando | `Catamarã partindo de Tambaú em direção às piscinas naturais de Seixas, João Pessoa` |
| Turistas flutuando | `Turistas flutuando nas piscinas naturais de Seixas durante maré baixa em João Pessoa, Paraíba` |
| Coral colorido submerso | `Coral roxo e amarelo nas piscinas naturais de Seixas, ponto mais oriental das Américas` |
| Toboágua no catamarã | `Toboágua no catamarã do passeio Seixas — atividade inclusa no passeio de piscinas naturais` |
| Murillo com turistas | `Murillo, guia local da Vem Passear em Jampa, com turistas no passeio de Seixas em João Pessoa` |

### 11.2 Checklist de Imagem para Programador

- [ ] Toda imagem tem `alt` descritivo (nunca vazio, nunca genérico como "praia")
- [ ] Imagens comprimidas: < 200 KB cada
- [ ] Formato: WebP com fallback JPG (conforme 03-diretor-visual-turismo.md)
- [ ] Hero: `object-position: center 30%` para enquadramento ideal no mobile
- [ ] Galeria: lazy loading via `loading="lazy"` no `<Image>` Next.js
- [ ] `width` e `height` definidos em todo `<Image>` para evitar CLS

---

## 12. INDEXAÇÃO

| Campo | Valor | Justificativa |
|-------|-------|---------------|
| **robots meta** | `index, follow` | Página de conversão — deve ser indexada |
| **canonical** | `[SITE_URL]/passeios/piscinas-naturais/seixas` | Evita duplicação por parâmetros de URL |
| **sitemap** | ✅ Incluir | Página prioritária (Tier 1 do roadmap) |
| **sitemap priority** | `0.9` | Alta prioridade (abaixo apenas da home — `1.0`) |
| **sitemap changefreq** | `monthly` | Dados estáveis (preço, roteiro) — atualizar ao alterar dados |
| **Open Graph** | ✅ Implementar | Compartilhamento social (WhatsApp preview) |
| **Twitter Card** | `summary_large_image` | Foto do hero em preview |

### 12.1 Open Graph Tags

```html
<meta property="og:title" content="Piscinas Naturais do Seixas em João Pessoa | Vem Passear" />
<meta property="og:description" content="Conheça as piscinas naturais de Seixas. Maré baixa, corais e água cristalina. R$ 60 por pessoa. Reserve pelo WhatsApp!" />
<meta property="og:image" content="[CONFIRMAR COM MURILLO: URL da foto hero do Seixas]" />
<meta property="og:url" content="[SITE_URL]/passeios/piscinas-naturais/seixas" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="pt_BR" />
```

---

## 13. SEO TÉCNICO — RECOMENDAÇÕES

### 13.1 Performance (Core Web Vitals)

| Métrica | Meta | Como atingir |
|---------|------|-------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Hero WebP < 200KB, priority loading no `<Image>` Next.js |
| **CLS** (Cumulative Layout Shift) | < 0.1 | `width`/`height` definidos em todos os `<Image>`, nenhum elemento sem dimensão fixa |
| **FID/INP** | < 100ms | Accordion FAQ sem JS bloqueante, CTASticky com IntersectionObserver leve |
| **TTFB** | < 600ms | Next.js SSG (geração estática) — página estática não depende de API runtime |

**Recomendação de renderização:** `generateStaticParams()` + `getPasseioBySlug()` em build time — não SSR. Dados de passeio não mudam em tempo real.

---

### 13.2 Estrutura de Cabeçalhos — Validação

Checklist para o programador antes de deploy:

- [ ] **Exatamente 1 H1** por página — "Piscinas Naturais do Seixas, João Pessoa — Snorkel em Água Cristalina"
- [ ] **H2s seguem hierarquia** — nenhum H2 está dentro de outro H2
- [ ] **H3s só dentro de H2s** — subcabeçalhos do roteiro e Bloco 4 são H3 de seus respectivos H2
- [ ] **Nenhum salto de nível** — não ir de H2 direto para H4

---

### 13.3 Dados Estruturados — Validação

- [ ] Testar schemas no [Google Rich Results Test](https://search.google.com/test/rich-results) antes de deploy
- [ ] Schemas no `<head>` via `next/head` ou `generateMetadata()` do App Router
- [ ] Verificar que FAQPage aceita perguntas com respostas longas (até ~300 chars) sem cortar
- [ ] BreadcrumbList matches a UI visual dos breadcrumbs na página

---

### 13.4 NAP — Consistência Local

O NAP (Name, Address, Phone) deve ser **idêntico** em 5 lugares:

| Lugar | Nome | Endereço | Telefone |
|-------|------|---------|---------|
| Site (rodapé) | Vem Passear em Jampa | [CONFIRMAR COM MURILLO: endereço] | +55 83 9908-7830 |
| GMB | Vem Passear em Jampa | [CONFIRMAR COM MURILLO: endereço] | +55 83 9908-7830 |
| TripAdvisor | Vem Passear em Jampa | [CONFIRMAR COM MURILLO: endereço] | +55 83 9908-7830 |
| Viator (se aplicável) | Vem Passear em Jampa | [CONFIRMAR COM MURILLO: endereço] | +55 83 9908-7830 |
| Instagram bio | Vem Passear em Jampa | [CONFIRMAR COM MURILLO: endereço] | +55 83 9908-7830 |

**Crítico:** Qualquer divergência no telefone ou nome da empresa reduz o sinal de localidade local (NAP inconsistente = Google desconfia).

---

### 13.5 Mobile-First — Checklist SEO

- [ ] Title tag < 60 chars (não corta em mobile — ✅ 56 chars)
- [ ] Meta description ≤ 160 chars (✅ 151 chars)
- [ ] CTA WhatsApp visível acima da dobra no mobile (320px)
- [ ] Texto corpo ≥ 16px (legível sem zoom)
- [ ] Botões ≥ 44px de altura (thumb-friendly)
- [ ] Nenhum elemento com `overflow-x: scroll` não intencional
- [ ] FAQ accordion funciona com toque único (sem hover-only)

---

### 13.6 Robots.txt e Sitemap

- [ ] Verificar que `/passeios/piscinas-naturais/seixas` não está bloqueado em `robots.txt`
- [ ] Confirmar que `next-sitemap` (ou equivalente) inclui rotas dinâmicas de `/passeios/[categoria]/[slug]`
- [ ] Sitemap deve incluir `lastmod` com data da última atualização de dados

---

## 14. LACUNAS PARA CONFIRMAR COM MURILLO

| # | Campo | Impacto | Bloqueia |
|---|-------|---------|---------|
| 1 | Domínio do site (`SITE_URL`) | Todos os schemas e canonical tags | ⛔ Schemas, canonical, OG:url |
| 2 | Número exato de avaliações Google (ex: "147 avaliações") | LocalBusiness schema + copy rating | ⏳ Schema parcial (4.9/5 disponível) |
| 3 | Anos de operação de Murillo | Copy Bloco 4 (H3 Murillo) | ⏳ Não bloqueia SEO técnico |
| 4 | Endereço exato ponto de embarque em Tambaú | FAQ #4 + schema LocalBusiness + NAP | ⛔ NAP inconsistente sem isso |
| 5 | Foto hero de Seixas (URL após upload) | OG:image, schema TouristAttraction > image | ⛔ Open Graph sem prévia |
| 6 | Foto de Murillo (URL após upload) | Schema LocalBusiness > image | ⏳ Schema funciona sem imagem |
| 7 | Política de cancelamento | FAQ #7 + FAQPage schema | ⛔ Bloqueia FAQ schema completa |
| 8 | Idade mínima para crianças | FAQ #6 + FAQPage schema | ⛔ Bloqueia FAQ schema completa |
| 9 | Data de validade do preço R$ 60 | Schema TouristAttraction > `priceValidUntil` | ⏳ Schema funciona sem esse campo |
| 10 | Bar a bordo vende alimentos ou só bebidas? | Bloco 7 copy (não SEO diretamente) | ⏳ Não bloqueia SEO |

**Prioridade de confirmação:**
1. 🔴 **Crítico agora:** itens 1 (domínio), 4 (endereço Tambaú), 7 (cancelamento), 8 (crianças)
2. 🟠 **Importante antes do deploy:** itens 2 (avaliações), 5 (foto hero)
3. 🟡 **Pode vir depois:** itens 3, 6, 9, 10

---

## 15. HANDOFF PARA ETAPA 5 — BRIEFING DESIGNER

### O que a Etapa 5 (`briefing-designer`) precisa receber deste documento:

**Meta tags para layout:**
- Title: `Piscinas Naturais do Seixas em João Pessoa | Vem Passear` (56 chars)
- Meta description: 151 chars (nenhum elemento visual, mas contexto de messaging)

**Hierarquia visual de cabeçalhos:**
- H1 único: "Piscinas Naturais do Seixas, João Pessoa — Snorkel em Água Cristalina"
- 8 H2s mapeados (ver seção 7) — briefing deve garantir que designer diferencie visualmente H1 > H2 > H3
- H3s como subcabeçalhos internos dos blocos

**Imagens — specs SEO críticas para designer:**
- Toda imagem precisa de campo `alt` descritivo (comunicar ao designer ao entregar assets)
- Hero: orientação `center 30%` no objeto (para não cortar rosto/coral no mobile)
- Tamanho máximo: < 200 KB por imagem (designer precisa exportar comprimido)
- Formato: WebP + fallback JPG

**Breadcrumbs visuais — label exato:**
- Início → Piscinas Naturais em João Pessoa → Piscinas Naturais do Seixas
- (Itens devem ser clicáveis e exatamente iguais ao BreadcrumbList schema)

**FAQ — estrutura visual:**
- 7 perguntas em accordion
- Perguntas 6 e 7 com placeholder visual (serão preenchidas após confirmação de Murillo)
- Nenhum "hover only" — accordion abre com toque em mobile

**CTA — requisitos SEO:**
- Link CTA primário: `https://wa.me/558399087830?text=Oi, quero saber sobre o passeio de Seixas`
- Link CTA secundário (Bloco 9.5): mesmo link
- Texto WhatsApp visível no botão: reforça confiança (turista vê que é WhatsApp antes de clicar)

**Passeios relacionados (Bloco 13):**
- 3 cards: Areia Vermelha + Picãozinho + Penha
- Cada card deve ter link clicável (anchor text descritivo — não "Ver mais")

---

### Lacunas que a Etapa 5 herda (não resolvidas aqui):

| Lacuna | Impacto no briefing designer |
|--------|----------------------------|
| Foto hero pendente | Designer trabalha com placeholder; heroBlock precisa receber foto real antes de aprovação final |
| Endereço Tambaú | Mapa ou indicação visual de embarque fica como placeholder |
| Depoimento pendente | Bloco 10 (depoimento) fica como placeholder visual |

---

## CHECKLIST FINAL — ETAPA 4

| Item | Status |
|------|--------|
| Keyword principal definida | ✅ "seixas joão pessoa" |
| Keywords secundárias mapeadas | ✅ 9 keywords (4 cluster + 5 long-tail) |
| Intenções de busca mapeadas | ✅ 3 estágios (consideração, decisão, barreira) |
| Title tag definida | ✅ 56 chars |
| Meta description definida | ✅ 151 chars |
| Slug confirmado | ✅ `/passeios/piscinas-naturais/seixas` |
| H1/H2/H3 mapeados | ✅ 1 H1, 8 H2s, 12 H3s |
| FAQ para schema (perguntas confirmadas) | ✅ 4 prontas / 3 aguardando [CONFIRMAR] |
| Schema LocalBusiness especificado | ✅ com [CONFIRMAR] para domínio e ratingCount |
| Schema TouristAttraction especificado | ✅ com [CONFIRMAR] para imagem e domínio |
| Schema FAQPage especificado | ✅ 4 perguntas confirmadas |
| Schema BreadcrumbList especificado | ✅ com [CONFIRMAR] para domínio |
| Links internos de entrada | ✅ 6 origens mapeadas |
| Links internos de saída | ✅ 6 destinos mapeados |
| Diretrizes de alt text | ✅ 6 exemplos específicos de Seixas |
| Regras de indexação | ✅ index/follow, canonical, sitemap |
| SEO técnico | ✅ Core Web Vitals, estrutura H, NAP, mobile |
| Lacunas documentadas | ✅ 10 itens com prioridade |
| Handoff para Etapa 5 | ✅ |

---

**Fonte de dados confirmados neste documento:**
- Preço R$ 60: `_conhecimento/catalogo_vempassear_estruturado.md` (linhas 341–364)
- Duração ~3h30: `_conhecimento/catalogo_vempassear_estruturado.md`
- Embarque Tambaú: `_conhecimento/catalogo_vempassear_estruturado.md`
- Cadastur 52.077.577: `_conhecimento/empresa.md`
- Rating 4.9/5: `_conhecimento/empresa.md`
- Keywords e volumes: `_conhecimento/clusters-seo.md` + `_conhecimento/seo-local-joao-pessoa.md`
- H1 aprovado: `_site/planejamento/seixas/02a-copywriter-vendas.md` (v3.1)
- FAQ questions: `_site/planejamento/seixas/02a-copywriter-vendas.md` (Bloco 9)
- WhatsApp +55 83 9908-7830: `_memoria/decisoes-estrategicas.md` (Decisão 22)

---

*Versão: 1.0 | Data: 2026-04-26 | Skill: seo-local-turismo | Próxima etapa: 05-briefing-designer.md*
