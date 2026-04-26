---
name: seo-local-turismo
description: Otimiza páginas para busca local em João Pessoa. Gera meta tags, schema JSON-LD e links internos. Nunca quebra copy de venda para forçar keyword.
version: "3.1"
status: ativa
modelo_padrao: Sonnet 4.6
atualizado: "2026-04-26"
pipelines: [A, B, C, G]
posicao: etapa-4
---

# Skill: SEO Local Turismo

**Versão:** 3.1
**Status:** Ativa
**Especialidade:** SEO on-page, meta tags, schema JSON-LD, keywords turismo local
**Escopo:** Páginas do site vempassearjampa.com — João Pessoa
**Modelo Padrão:** Sonnet 4.6
**Atualizado:** 2026-04-25

---

## RESPONSABILIDADE

### O Que Faz
- Pesquisa palavras-chave por intent de turista (descoberta / consideração / decisão)
- Audita estrutura on-page (H1, H2s, lead, densidade de keywords)
- Otimiza H1, meta title, meta description com keywords naturais
- Gera schema JSON-LD (LocalBusiness, TouristAttraction, FAQPage)
- Define links internos entre páginas (arquitetura SEO)
- Especifica alt text para todas as imagens

### O Que NÃO Faz
- ❌ Escrever copy nova → `copywriter-vendas`
- ❌ Criar wireframe ou layout → `ux-ui-mobile-first`
- ❌ Definir arquitetura do site → `estrategista-de-site`
- ❌ SEO técnico agressivo (canonicals, robots.txt, redirecionamentos em massa) → programador
- ❌ Quebrar copy de venda para forçar keyword

### Quando Usar
- Página aprovada (copy + UX) e precisa otimização antes de publicar
- Auditoria de página existente com baixo ranking
- Validar estrutura de headings e schema

### Quando NÃO Usar
- Copy ainda não aprovada (SEO otimiza o que já existe)
- Objetivo é design ou implementação de código

---

## INPUT

| Campo | Obrigatório | Fonte | Descrição |
|-------|-------------|-------|-----------|
| objetivo | Sim | Murillo/Orquestrador | Ex: "otimizar SEO da página Seixas" |
| copy aprovada | Sim | `copywriter-vendas` ou Murillo | Texto final da página em markdown |
| keyword alvo | Não | `_conhecimento/clusters-seo.md` | Ex: "mergulho Seixas João Pessoa" |
| intent do turista | Não | contexto | Descoberta / Consideração / Decisão |
| contexto local | Não | `_conhecimento/seo-local-joao-pessoa.md` | Bairros, marcos, referências de JP |

### Dados do `_conhecimento/` (Obrigatórios Antes de Executar)

| Arquivo | Por Que Consultar |
|---------|------------------|
| `seo-local-joao-pessoa.md` | Checklist de SEO local + princípios |
| `oportunidades-ranqueamento.md` | Keywords específicas com oportunidade |
| `clusters-seo.md` | Arquitetura de keywords por cluster/categoria |

### Fallback se Faltar Dado
- Se copy não está aprovada → não otimizar (SEO não escreve copy nova)
- Se keyword alvo não está em `clusters-seo.md` → propor keyword e marcar `[CONFIRMAR COM MURILLO]`
- Se dados de endereço/telefone faltam para schema → marcar `[CONFIRMAR: endereço, WhatsApp]`

---

## PROCESSO

### Etapa 1 — Pesquisar Keywords por Intent

Pensar como turista digitando:

**DESCOBERTA:** "O que fazer em João Pessoa?", "Passeios João Pessoa", "Tours João Pessoa"
**CONSIDERAÇÃO:** "Mergulho Seixas", "Snorkel João Pessoa", "Passeios com crianças João Pessoa"
**DECISÃO:** "Agendar passeio Seixas", "Preço snorkel João Pessoa", "Como chegar Seixas"

Fonte: `seo-local-joao-pessoa.md` + `oportunidades-ranqueamento.md`

### Etapa 2 — Auditar Estrutura On-Page

**H1 (único e obrigatório):**
- ❌ "Bem-vindo ao Seixas" / ❌ "Litoral"
- ✅ "Mergulho em Seixas, João Pessoa: Snorkel em Água Cristalina"
- ✅ "Praias do Litoral Sul em João Pessoa: Seixas, Tambaú, Jacaré"

**H2, H3 (hierarquia lógica):**
- H2 para seções principais (máx 6)
- H3 para subseções
- Nenhum pulado (H2 → H3 ok, H2 → H4 ❌)

**Lead (primeiro parágrafo):**
- Primeira frase responde: "Por que ler isto?"
- Deve incluir contexto local (João Pessoa, bairro)

### Etapa 3 — Verificar Contexto Local

- [ ] "João Pessoa" aparece no H1 ou lead?
- [ ] Bairro/localização específica mencionada?
- [ ] Informação específica de JP (ex: "maré de JP baixa às 14h")?
- [ ] Nenhuma referência poderia valer para Recife/Natal/Fortaleza?

### Etapa 4 — Meta Tags

**Title (50-60 chars):** `[Keyword] em João Pessoa | Vem Passear em Jampa`
✅ "Mergulho Seixas João Pessoa | Vem Passear em Jampa"

**Meta Description (150-160 chars):** `[O que você faz] em João Pessoa. [Diferencial]. [CTA]`
✅ "Mergulho em Seixas com snorkel e piscinas naturais. Agua cristalina, guia local. Agende no WhatsApp →"

**OG Tags (compartilhamento social):**
```html
<meta property="og:title" content="Mergulho Seixas — João Pessoa">
<meta property="og:description" content="Snorkel em água cristalina...">
<meta property="og:image" content="[URL imagem do passeio]">
```

### Etapa 5 — Schema Markup (JSON-LD)

**LocalBusiness (Home):**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Vem Passear em Jampa",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "João Pessoa",
    "addressRegion": "PB"
  },
  "telephone": "[WhatsApp]",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "[CONFIRMAR]"
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "[CONFIRMAR]"
  }
}
```

**FAQPage (se tem FAQ):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Preciso saber mergulhar?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Não, a gente ensina do zero..."
    }
  }]
}
```

### Etapa 6 — Links Internos

Cada página deve apontar para:
- Categoria pai (volta, breadcrumb)
- 2-3 passeios similares (mesmo bairro/tipo)
- Home (navegação)
- Blog de apoio (quando existir)

### Etapa 7 — Alt Text

❌ "imagem.jpg" / ❌ "Seixas"
✅ "Praia do Seixas com piscina natural ao entardecer"
✅ "Cliente mergulhando em água cristalina com peixe colorido próximo"

### Etapa 8 — Validar Contra Fontes

- [ ] `seo-local-joao-pessoa.md` checado?
- [ ] `oportunidades-ranqueamento.md` checado?
- [ ] `clusters-seo.md` checado?
- [ ] Schema é JSON válido?
- [ ] Links internos fazem sentido para o turista?

---

## REGRAS

- **Conversão > Ranking:** Nunca quebrar copy para forçar keyword
- **"João Pessoa" sempre presente:** Turista busca local
- **Keywords naturais:** Sem keyword-stuffing
- **Schema obrigatório:** Google precisa entender: negócio, atração ou passeio?
- **Links cruzados ajudam:** Rede interna = melhor ranking
- **Alt text = acessibilidade + SEO:** Não é hack, é necessidade

---

## OUTPUT

### Resultado Estruturado

Documento markdown com 4 seções:

**1. Análise de Keywords**
```
Primária: "Mergulho Seixas João Pessoa" — Decisão — usar em H1, meta title
Secundárias: "Snorkel João Pessoa", "Seixas praia" — H2, corpo
Long-tail: "Como chegar Seixas", "Preço mergulho Seixas" — FAQ, blog
```

**2. Estrutura On-Page Otimizada**
```
H1: "Mergulho em Seixas, João Pessoa: Snorkel em Água Cristalina"
Meta Title: "Mergulho Seixas João Pessoa | Vem Passear em Jampa"
Meta Description: "Snorkel em agua cristalina em Seixas. Piscinas naturais, guia local. Agende no WhatsApp →"
```

**3. Schema Markup (JSON-LD)**
Schema completo e válido para o tipo de página

**4. Links Internos + Alt Text**
Lista de links que a página deve ter + alt text para cada imagem

### Arquivos Gerados

| Arquivo | Pasta | Quando |
|---------|-------|--------|
| `seo-[pagina]-[data].md` | `_pipeline/` | Entrega desta skill |

### Próximos Passos (Handoff)

Esta skill alimenta:
- `programador-de-site` com: meta tags, schema JSON-LD, alt text, links internos para implementar
- Google: indexa e rankeia conforme qualidade + autoridade

---

## HANDOFF PARA PRÓXIMA SKILL

| Destino | O Que Entrega | Para Quê |
|---------|--------------|----------|
| `programador-de-site` | Meta tags, schema JSON-LD, alt text de imagens e lista de links internos | Implementar exatamente — SEO técnico não é responsabilidade do programador criar |

---

## CRITÉRIOS DE QUALIDADE

- [ ] H1 inclui keyword primária + "João Pessoa" (ou localidade específica)?
- [ ] Meta title entre 50-60 caracteres?
- [ ] Meta description entre 150-160 caracteres com CTA?
- [ ] Schema JSON-LD correto e válido para o tipo de página (LocalBusiness / TouristAttraction / FAQPage)?
- [ ] Links internos definidos: categoria pai + 2-3 similares + home?
- [ ] Alt text descritivo em todas as imagens (não "imagem.jpg")?
- [ ] Nenhuma keyword forçada que prejudica leitura ou conversão?
- [ ] Verificado em `clusters-seo.md` e `oportunidades-ranqueamento.md`?
- [ ] "João Pessoa" aparece no H1 ou lead?

---

## LIMITES DA SKILL

- Não reescreve copy para forçar keyword — conversão > ranking sempre
- Não faz SEO técnico avançado (canonicals em massa, robots.txt, redirecionamentos) — responsabilidade do programador
- Não começa sem copy aprovada — SEO otimiza o que existe, não cria do zero
- Não inventa keywords — usa `clusters-seo.md` e `oportunidades-ranqueamento.md` como fonte
- Não define estrutura de site — `estrategista-de-site` já fez isso

---

## COMPATIBILIDADE COM ORQUESTRADOR

| Propriedade | Valor |
|-------------|-------|
| Pipelines que usam | Pipeline A, B, C (principal), G (custom) |
| Depende de (skills) | `copywriter-vendas` (copy aprovada) |
| Depende de (arquivos) | `seo-local-joao-pessoa.md`, `oportunidades-ranqueamento.md`, `clusters-seo.md` |
| Alimenta (skills) | `programador-de-site` |
| Pode rodar em paralelo com | `ux-ui-mobile-first` (após copy aprovada) |
| Posição típica no pipeline | Etapa 4 do Pipeline A / Etapa 2 do Pipeline C |

---

*Skill v3.1 | Atualizado 2026-04-26 | Adicionado HANDOFF, CRITÉRIOS DE QUALIDADE e LIMITES para interoperabilidade com orquestrador*
