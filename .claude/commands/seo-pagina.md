# /seo-pagina

**Descrição:** Analisa página existente e devolve plano de otimização SEO local (palavras-chave, headings, meta, links internos, schema, ATL text).

**Quando usar:**
- Página foi criada e precisa de otimização SEO
- Quer validar se está estruturada corretamente para "São Paulo + João Pessoa"
- Retomando página com baixo desempenho em busca local
- Antes de publicar no site

**Entradas necessárias:**
- Arquivo `.md` da página ou URL
- Qual é a palavra-chave alvo (ex.: "passeios de praia João Pessoa")
- Histórico de performance (se houver)

**Processo:**
1. Lê conteúdo da página
2. Extrai H1, H2, H3 e valida estrutura (H1 único? sequência lógica?)
3. Verifica presença de "João Pessoa" no texto
4. Analisa meta tags (title, description, OG)
5. Valida atributos alt em imagens
6. Lista links internos (aponta para categorias relacionadas? para home?)
7. Verifica schema (LocalBusiness, Trip, Event)
8. Sugere palavras-chave relacionadas baseado em `_conhecimento/seo/palavras-chave.md`
9. Devolve checklist de otimização

**Saída esperada:**
- Checklist markdown com ✓ (feito) e ✗ (precisa fazer)
- Sugestões específicas de rewording (ex.: "Trocar 'praias bonitas' por 'melhores praias para snorkel em João Pessoa'")
- Diagnóstico de estrutura H1-H3
- Sugestão de meta title e meta description otimizados
- Sugestão de 3-5 palavras-chave relacionadas
- Mapa de links internos recomendados
- Código de schema sugerido (JSON-LD)
- Tamanho: 1-2 páginas markdown

**Exemplo:**
```
# Análise SEO: Página "Praia do Seixas"

## Checklist de Otimização

### Estrutura
- ✓ H1 único
- ✓ H2 para seções principais
- ✗ Faltam H3 em seções largas (agrupar FAQ)

### Palavra-chave e Conteúdo
- ✗ "João Pessoa" não aparece no H1 (sugestão: "Praia do Seixas em João Pessoa: O Passeio da Aurora")
- ✓ Menção de "ponto mais oriental" (diferencial)
- ✗ Faltam long-tail keywords: "Seixas em João Pessoa", "farol Seixas", "mergulho Seixas"

### Meta Tags
- ✗ Title: "Praia do Seixas" (muito genérico) → Sugestão: "Praia do Seixas em João Pessoa: Passeio Guiado | Vem Passear em Jampa"
- ✗ Meta description não tem CTA → Sugestão: "Conheça o farol centenário, água morna e almoço local. Agende seu passeio no WhatsApp →"

### Imagens
- ✗ Imagem do farol sem alt text → Sugestão: "Farol do Seixas ao entardecer em João Pessoa"
- ✓ Imagem de mergulho com alt ok

### Links Internos
- ✗ Não aponta para "Litoral Sul" (categoria pai)
- ✗ Não aponta para "Passeios de Mergulho" (relacionado)
- Sugestão: Adicionar 2-3 links internos no texto

### Schema
- ✗ Faltam schema LocalBusiness e Trip
- JSON-LD sugerido:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "TouristActivity",
    "name": "Praia do Seixas",
    "areaServed": "João Pessoa, Brazil"
  }
  ```

## Palavras-chave Relacionadas Sugeridas
1. Mergulho Seixas João Pessoa
2. Farol João Pessoa passeio
3. Litoral Sul João Pessoa praias
4. Passeios guiados Seixas
5. Ponto mais oriental do Brasil

## Ação Imediata
1. Reescrever H1 com "João Pessoa"
2. Adicionar meta description com CTA
3. Descrever imagens com alt text
4. Adicionar links internos para categoria pai
5. Inserir schema LocalBusiness
```
