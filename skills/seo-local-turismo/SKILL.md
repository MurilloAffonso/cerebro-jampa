# Skill: SEO Local Turismo

## 1. Função

Otimizar **páginas para turista digitando em Google** enquanto chega em João Pessoa. Aplicar estrutura on-page, meta tags, schema markup, links internos, conteúdo evergreen vs. sazonal com foco em **"João Pessoa" + intent turista local** sem quebrar copy de venda ou experiência.

SEO aqui é ferramenta de conversão, não fim em si. Prioridade: Conversão > Ranking.

## 2. Quando Usar

✅ Página foi aprovada (copy + UX) e precisa otimização SEO técnica  
✅ Quer validar estrutura de headings, keywords, schema  
✅ Precisa garantir "João Pessoa" contexto está visível  
✅ Página tem baixa performance em busca local  
✅ Antes de publicar no site  

## 3. Quando NÃO Usar

❌ Para design visual (use `ux-ui-mobile-first`)  
❌ Para escrever copy (use `copywriter-vendas`)  
❌ Para arquitetura de site (use `estrategista-de-site`)  
❌ Para SEO técnico agressivo (redirecionamentos, canonicals, robots.txt)  

## 4. Entradas Necessárias

Antes de começar, tenha:

- **Página em markdown** (copy já aprovado)
- **Palavra-chave alvo:** Qual turista busca para encontrar isto? (ex: "mergulho Seixas João Pessoa", "praias para crianças")
- **Intent do turista:** O que ele quer descobrir? (informação, praia específica, como chegar?)
- **Contexto local:** Que referências de JP devem aparecer? (bairros, ruas, marcos locais)

## 5. Processo

### Etapa 1: Pesquisar Palavras-Chave (Intent-Driven)

Não invente keywords. Pense como turista:

**DESCOBERTA (Fase 1):**
- "O que fazer em João Pessoa?"
- "Passeios João Pessoa"
- "Praias em João Pessoa"
- "Tours João Pessoa"

**CONSIDERAÇÃO (Fase 2):**
- "Mergulho Seixas"
- "Snorkel João Pessoa"
- "Litoral Sul João Pessoa"
- "Passeios com crianças João Pessoa"

**DECISÃO (Fase 3):**
- "Agendar passeio Seixas"
- "Preço snorkel João Pessoa"
- "Como chegar Seixas"

Fonte: `_conhecimento/seo-local-joao-pessoa.md`, `_conhecimento/oportunidades-ranqueamento.md`

### Etapa 2: Auditar Estrutura On-Page

**H1 (Único, obrigatório):**
- Deve existir só 1
- Deve ser descritivo
- Deve incluir palavra-chave primária se natural (não keyword-stuffing)
- Deve responder "O que é isto?" ou "Por que fazer isto?"

Exemplos:

❌ "Bem-vindo ao Seixas"  
✅ "Mergulho em Seixas, João Pessoa: Snorkel em Água Cristalina"

❌ "Litoral"  
✅ "Praias do Litoral Sul em João Pessoa: Seixas, Tambaú, Praia do Jacaré"

**H2, H3 (Hierarquia lógica):**
- H2 para seções principais (máx 6)
- H3 para subsseções
- Nenhum pulado (H2 → H3 ok, H2 → H4 ❌)

Exemplo válido:
```
H1: Seixas em João Pessoa
  H2: O Que Fazer em Seixas
    H3: Snorkel
    H3: Mergulho
  H2: Como Chegar
  H2: Melhor Época
```

**Parágrafo de Abertura (Lead):**
- Primeira frase deve responder: "Por que ler isto?"
- Deve incluir contexto local (bairro, João Pessoa)
- Deve dar pista de como siga

### Etapa 3: Incluir Contexto Local

Turista Google "mergulho João Pessoa". Vê 10 sites. Qual escolhe?

**Aquele que:**
1. Diz "João Pessoa" no H1 ou lead (não só "mergulho")
2. Menciona bairro/localização real (Seixas é em Altiplano, perto de...)
3. Referencia local autêntico (maré baixa em JP é X, acesso é Y)
4. Não é cópia genérica

**Checklist Local:**

- [ ] "João Pessoa" aparece no H1 ou lead?
- [ ] Bairro/localização específica mencionada? (ex: "Praia do Seixas, no bairro Altiplano")
- [ ] Endereço/ponto de referência? (ex: "próximo ao farol de Seixas")
- [ ] Informação específica de JP (ex: "maré de João Pessoa baixa às 14h, então 14h-17h é melhor")
- [ ] Nenhuma referência genérica poderia valer para Recife/Natal/Fortaleza?

### Etapa 4: Meta Tags

**Title (50-60 caracteres idealmente):**

Formato: `[Palavra-chave] em João Pessoa | Vem Passear`

Exemplos:

❌ "Seixas"  
✅ "Mergulho Seixas João Pessoa | Vem Passear em Jampa"

❌ "Passeios"  
✅ "Passeios em João Pessoa: Praias, Trilhas, Tours | Vem Passear"

**Meta Description (150-160 caracteres):**

Deve responder: "Por que clicar nisto?"

Formato: `[O que você faz] em João Pessoa. [Diferencial]. [CTA]`

Exemplo:

❌ "Confira nossos passeios em João Pessoa"  
✅ "Mergulho em Seixas com snorkel e piscinas naturais. Agua cristalina, guia local. Agende seu passeio no WhatsApp →"

**OG Tags (Compartilhamento Social):**

```html
<meta property="og:title" content="Mergulho Seixas — João Pessoa">
<meta property="og:description" content="Snorkel em água cristalina. Agua tranquila, acessível para todos.">
<meta property="og:image" content="[URL imagem boa do Seixas]">
```

### Etapa 5: Schema Markup (JSON-LD)

Estruture dados para Google entender página. Mínimo:

**LocalBusiness (Home):**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Vem Passear em Jampa",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[endereço]",
    "addressLocality": "João Pessoa",
    "addressRegion": "PB",
    "postalCode": "[CEP]"
  },
  "telephone": "[WhatsApp]",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "[n de reviews]"
  }
}
```

**TouristAttraction (Página Passeio):**
```json
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Mergulho Seixas",
  "description": "[descrição]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "João Pessoa",
    "addressRegion": "PB"
  },
  "image": "[URL imagem]",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "[n]"
  }
}
```

**FAQPage (se tem FAQ):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Preciso saber mergulhar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não, a gente ensina do zero..."
      }
    }
  ]
}
```

### Etapa 6: Links Internos (Arquitetura SEO)

Toda página deve apontar para outras páginas relacionadas. Exemplo:

**Página Seixas aponta para:**
- Litoral Sul (categoria volta)
- Outras praias (Tambaú, Jacaré — similares)
- Home (breadcrumb)
- Blog de apoio (ex: "Como chegar Seixas")

**Página Litoral Sul aponta para:**
- Home
- Seixas, Tambaú, Jacaré (passeios desta categoria)
- Outras categorias (Urbano, Trilhas)

**Benefício:** Ajuda Google entender estrutura + melhora UX (turista navega melhor).

### Etapa 7: Revisar Links Internos (SEO Local)

Links internos ajudam turista navegar E ajudam Google entender estrutura local:

**De cada página de passeio, apontar para:**
- Categoria pai (volta, breadcrumb)
- 2-3 passeios similares (mesmo bairro/tipo)
- Home (navegação)
- Blog de apoio (se existir)

**De página categoria, apontar para:**
- Home
- Todos passeios da categoria
- Outras categorias (não obrigatório)

**De home, apontar para:**
- Todas categorias
- Sobre Nós
- Blog (quando existir)

**Regra:** Links devem fazer sentido para TURISTA (não keyword optimization). Se é link natural, Google vê como votação de relevância.

### Etapa 8: Alt Text em Imagens

**Toda imagem precisa de alt text descritivo:**

❌ "imagem.jpg"  
❌ "Seixas"  
✅ "Praia do Seixas com piscina natural ao entardecer"

❌ "foto cliente"  
✅ "Cliente mergulhando em água cristalina, com peixe colorido próximo"

Benefício: Acessibilidade + SEO (Google entende contexto).

### Etapa 9: Validar Contra Fonte de Verdade

Antes de finalizar:

- [ ] Checou `seo-local-joao-pessoa.md`? (princípios gerais)
- [ ] Checou `oportunidades-ranqueamento.md`? (keywords específicas)
- [ ] Checou `clusters-seo.md`? (arquitetura de keywords)
- [ ] H1 é único e descritivo?
- [ ] "João Pessoa" aparece naturalmente?
- [ ] Schema está correto (JSON valid)?
- [ ] Links internos fazem sentido?

## 6. Regras Específicas

- **Conversão > Ranking:** Nunca quebre copy de venda para forçar keyword. Se "mergulho em Seixas" vende bem, ótimo; se "snorkel" converte mais, use "snorkel"
- **"João Pessoa" sempre presente:** Turista busca local, mostrar local
- **Keywords naturais:** Sem keyword-stuffing (repetir palavra chave 10x faz ranquear pior)
- **Schema é obrigatório:** Google precisa entender: isto é negócio? Atração? Passeio?
- **Links cruzados ajudam:** Página A aponta B, B aponta A = rede interna = melhor ranking
- **Alt text descritivo:** Não é SEO hack, é acessibilidade + contexto

## 7. Saída Esperada

Um arquivo markdown com **mínimo** 4 seções:

### Seção 1: Análise de Keywords

```markdown
## Keywords Alvo

### Primária (Objetivo principal)
- "Mergulho Seixas João Pessoa"
- Volume estimado: Alto
- Intent: Decisão (turista quer agendar)
- Onde usar: H1, lead, meta title

### Secundárias (Apoio)
- "Snorkel João Pessoa"
- "Seixas praia"
- "Passeios mergulho JP"
- Onde usar: H2, corpo do texto, alt text

### Long-tail (Específicas)
- "Como chegar Seixas João Pessoa"
- "Preço mergulho Seixas"
- "Mergulho com criança João Pessoa"
- Onde usar: FAQ, links internos, blog apoio
```

### Seção 2: Estrutura On-Page Otimizada

```markdown
## Estrutura Proposta

### H1
"Mergulho em Seixas, João Pessoa: Snorkel em Água Cristalina"

### Lead
"Se você chegou em JP e quer snorkel — Seixas é o melhor lugar. Agua cristalina, piscinas naturais, fácil de acessar. Vem Passear cuida de tudo, você só aproveita."

### H2
"O Que Você Vai Fazer em Seixas"

### H2
"Como Chegar e Melhor Época"

### H2
"Dúvidas Frequentes (FAQ)"

### Meta Title
"Mergulho Seixas João Pessoa | Vem Passear em Jampa"

### Meta Description
"Snorkel em agua cristalina em Seixas. Piscinas naturais, guia local, fotos incluídas. Agende no WhatsApp →"
```

### Seção 3: Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Mergulho Seixas",
  "description": "[Descrição]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "João Pessoa"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "150"
  }
}
```

### Seção 4: Links Internos + Alt Text

```markdown
## Links Internos

Esta página aponta para:
- [Litoral Sul](#) (categoria volta)
- [Tambaú](#) (praia similar)
- [Jacaré](#) (praia similar)
- [Home](#) (breadcrumb)
- [Blog: Como Chegar Seixas](#) (apoio)

## Alt Text Proposto

- Hero: "Praia do Seixas ao entardecer com piscina natural e farol ao fundo"
- Imagem 2: "Turista mergulhando com snorkel, vendo peixes coloridos"
- Depoimento: "Cliente sorrindo em agua com snorkel"
```

**Tamanho esperado:** 2-3 páginas markdown (análise + estrutura + schema + links).

## 8. Critério de Qualidade

✅ **Bom SEO Local:** H1 específico + João Pessoa presente + schema correto + links internos fazem sentido + keywords naturais + copy não foi quebrada  
❌ **Ruim:** Keywords stuffed, "João Pessoa" esquecido, schema genérico/errado, links aleatórios, copy lê como robô  

## 9. Próximas Skills na Cadeia

Depois disso:

1. **`programador-de-site`:** Implementa estrutura, schema, meta tags, alt text em Next.js
2. **Google:** Indexa página, rankeia conforme qualidade + autoridade

---

*Skill v2.0 | Refinada 2026-04-25 | Fase SEO Local + Turismo*
