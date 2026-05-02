# Blog SEO — Plano Fase 2

**Status:** infraestrutura técnica pronta (rotas, schemas, modelo, helpers, sitemap) · 10 posts em `draft` aguardando texto + foto + revisão de Murillo
**Fase atual:** 1 (site institucional + páginas de passeio + blog em draft)
**Ativação prevista:** Fase 2 — começa quando primeiro post sair de `draft`
**Fonte estratégica:** `_site/docs/dossie-externo-seo-concorrencia-conversao.md` (priority sobre planos genéricos de SEO)

---

## 1. Objetivo do Blog

Gerar tráfego orgânico de longo prazo via conteúdo educativo sobre turismo em João Pessoa e no litoral paraibano.

Metas:
- Capturar buscas informacionais ("o que fazer em João Pessoa", "tábua de marés Cabo Branco") e converter para páginas de passeio
- Posicionar Murillo como guia local de referência — não apenas prestador de serviço
- Criar rede de links internos que fortaleça a autoridade das páginas de passeio no Google
- Diferenciar da concorrência que não produz conteúdo editorial

---

## 2. Por Que o Blog Fica Para Fase 2

| Motivo | Detalhe |
|--------|---------|
| Prioridade atual | Fase 1 = converter quem já busca passeio. Blog = capturar quem ainda está descobrindo. |
| Conteúdo raso prejudica | Google penaliza posts curtos sem substância. Melhor não ter blog do que ter blog ruim. |
| Custo de manutenção | Post publicado exige atualização periódica (marés, preços, eventos). Murillo precisa ter banda. |
| Velocidade de resultado | Blog leva 3–6 meses para ranquear. Páginas de passeio convertem em semanas. |
| Infra mínima primeiro | CMS, imagens reais e sistema de deploy estável precisam estar prontos. |

Ativar somente quando:
- [ ] Site Fase 1 publicado e indexado pelo Google
- [ ] Murillo tem rotina de publicação (pelo menos 1 post/mês)
- [ ] Pelo menos 10 posts prontos e revisados antes de abrir `/blog`
- [ ] Imagens reais disponíveis para todos os posts iniciais

---

## 3. Arquitetura Futura

```
/blog/                          <- listagem de todos os posts
/blog/[slug]/                   <- artigo individual

Exemplos de URL:
  /blog/o-que-fazer-em-joao-pessoa
  /blog/tabua-de-mares-joao-pessoa-2025
  /blog/melhor-epoca-para-visitar-joao-pessoa
  /blog/piscinas-naturais-paraiba-guia-completo
```

### Categorias Editoriais

| Categoria | Intenção do Leitor | Volume Estimado |
|-----------|-------------------|-----------------|
| Guias de Praia | descoberta / planejamento | alto |
| Roteiros | planejamento detalhado | alto |
| Natureza e Marés | informacional / sazonalidade | médio-alto |
| Dicas Práticas | pré-viagem | médio |
| Passeios e Atividades | consideração / decisão | médio |
| Famílias e Grupos | segmentação | médio |

### Stack Técnica (proposta)

- Rota: `app/blog/page.tsx` + `app/blog/[slug]/page.tsx`
- Fonte de conteúdo: MDX em `_content/blog/` ou CMS headless (Contentful, Sanity) — decidir em Fase 2
- Metadados: `generateMetadata()` via `lib/seo.ts` (mesmo padrão das páginas de passeio)
- Schema: `Article` + `FAQPage` + `BreadcrumbList`
- Sitemap: incluir `/blog/**` em `sitemap.ts` quando ativar

---

## 4. Clusters de SEO

### Cluster 1 — O Que Fazer em João Pessoa
Âncora: `/blog/o-que-fazer-em-joao-pessoa`  
Intenção: turista na fase de descoberta  
Links internos: todas as categorias de passeio

### Cluster 2 — Piscinas Naturais
Âncora: `/blog/piscinas-naturais-joao-pessoa-guia`  
Intenção: turista que busca piscinas naturais  
Links internos: `/passeios/piscinas-naturais/seixas`, `/passeios/piscinas-naturais/picaozinho`, `/passeios/piscinas-naturais/penha`

### Cluster 3 — Litoral Sul
Âncora: `/blog/litoral-sul-joao-pessoa-o-que-fazer`  
Intenção: turista que quer explorar praias ao sul  
Links internos: `/passeios/litoral-sul/*`

### Cluster 4 — Litoral Norte
Âncora: `/blog/litoral-norte-joao-pessoa-o-que-fazer`  
Intenção: turista que quer explorar praias ao norte  
Links internos: `/passeios/litoral-norte/*`

### Cluster 5 — Roteiros de 3 Dias
Âncora: `/blog/roteiro-3-dias-joao-pessoa`  
Intenção: planejamento de viagem curta  
Links internos: `/passeios/pacotes/*`, passeios individuais de destaque

### Cluster 6 — Tábua de Marés
Âncora: `/blog/tabua-de-mares-joao-pessoa`  
Intenção: turista pesquisando melhor horário/dia para passeio  
Links internos: piscinas naturais, litoral sul, litoral norte  
Observação: post de alto valor — poucos concorrentes entregam isso bem

### Cluster 7 — Transfer Aeroporto
Âncora: `/blog/transfer-aeroporto-joao-pessoa`  
Intenção: turista chegando, buscando logística  
Links internos: passeios, página inicial  
[CONFIRMAR COM MURILLO: a Vem Passear oferece transfer?]

### Cluster 8 — Viagem com Crianças
Âncora: `/blog/joao-pessoa-com-criancas`  
Intenção: família planejando viagem segura  
Links internos: passeios seguros para crianças  
[CONFIRMAR COM MURILLO: quais passeios são recomendados para crianças?]

### Cluster 9 — Passeio Privativo
Âncora: `/blog/passeio-privativo-joao-pessoa`  
Intenção: casal, família ou grupo buscando exclusividade  
Links internos: `/passeios/litoral-norte/lancha-privativa`, pacotes

---

## 5. Lista de 30 Ideias de Posts

| # | Título Sugerido | Cluster | Prioridade |
|---|----------------|---------|-----------|
| 1 | O que fazer em João Pessoa: guia completo para turistas | Cluster 1 | ALTA |
| 2 | Tábua de marés João Pessoa 2025: quando visitar as piscinas naturais | Cluster 6 | ALTA |
| 3 | Roteiro 3 dias em João Pessoa: o que ver, fazer e comer | Cluster 5 | ALTA |
| 4 | Piscinas naturais da Paraíba: guia completo com marés e dicas | Cluster 2 | ALTA |
| 5 | Litoral Sul de João Pessoa: guia de praias e passeios | Cluster 3 | ALTA |
| 6 | Pôr do sol no Jacaré: o que é, como chegar e o que esperar | Cluster 4 | ALTA |
| 7 | João Pessoa com crianças: passeios seguros e dicas práticas | Cluster 8 | ALTA |
| 8 | Areia Vermelha Paraíba: tudo sobre a ilha que some na maré alta | Cluster 4 | ALTA |
| 9 | Passeio de catamará em João Pessoa: o que esperar | Cluster 4 | ALTA |
| 10 | Quadriciclo em Coqueirinho: trilha, praia e dunas | Cluster 3 | ALTA |
| 11 | Melhor época para visitar João Pessoa: clima, marés e eventos | Cluster 1 | MÉDIA |
| 12 | Praia de Coqueirinho: como chegar e o que fazer | Cluster 3 | MÉDIA |
| 13 | Praia Bela Paraíba: piscinas, recifes e dicas do guia local | Cluster 3 | MÉDIA |
| 14 | Litoral Norte de João Pessoa: praias, acesso e dicas | Cluster 4 | MÉDIA |
| 15 | Piscinas de Seixas: guia completo com horário e marés | Cluster 2 | MÉDIA |
| 16 | Piscinas do Picãozinho: como chegar, horários e o que levar | Cluster 2 | MÉDIA |
| 17 | Mergulho em João Pessoa: onde, quando e como fazer | Cluster 2 | MÉDIA |
| 18 | Passeio privativo em João Pessoa: lancha, roteiro e preço | Cluster 9 | MÉDIA |
| 19 | O que levar para passeio de barco na Paraíba | Cluster 1 | MÉDIA |
| 20 | Roteiro litoral sul completo: praias de João Pessoa ao sul | Cluster 3 | MÉDIA |
| 21 | Roteiro litoral norte completo: praias de João Pessoa ao norte | Cluster 4 | MÉDIA |
| 22 | Quanto custa uma viagem a João Pessoa: roteiro com preços reais | Cluster 5 | MÉDIA |
| 23 | Porto de Galinhas saindo de João Pessoa: guia de passeio | Cluster 1 | BAIXA |
| 24 | Praia de Pipa saindo de João Pessoa: guia de passeio | Cluster 1 | BAIXA |
| 25 | Natal saindo de João Pessoa: o que ver em 1 dia | Cluster 1 | BAIXA |
| 26 | City Tour João Pessoa: centro histórico, igrejas e pontos imperdíveis | Cluster 1 | BAIXA |
| 27 | Diferença entre passeio de lancha e catamará: qual escolher | Cluster 9 | BAIXA |
| 28 | Segurança nos passeios de barco: o que saber antes de embarcar | Cluster 1 | BAIXA |
| 29 | Melhores praias da Paraíba para quem vai a João Pessoa | Cluster 1 | BAIXA |
| 30 | Como funciona a Vem Passear em Jampa: quem somos e como trabalhamos | Institucional | BAIXA |

---

## 6. Top 10 Posts Prioritários Para Começar

Ordenados por volume de busca estimado + facilidade de conversão:

1. **O que fazer em João Pessoa** — post âncora, captura tráfego de topo do funil
2. **Tábua de marés João Pessoa 2025** — alta busca, baixa concorrência de qualidade
3. **Roteiro 3 dias em João Pessoa** — intenção de compra alta, direto para os pacotes
4. **Piscinas naturais da Paraíba: guia completo** — âncora do cluster mais forte
5. **Pôr do sol no Jacaré** — busca alta, conteúdo real que só Murillo tem
6. **Areia Vermelha Paraíba: tudo sobre a ilha** — curiosidade + conversão para passeio
7. **Litoral Sul de João Pessoa** — âncora para cluster com mais passeios no catálogo
8. **João Pessoa com crianças** — segmento de alta conversão, pouca concorrência local
9. **Piscinas de Seixas: guia completo** — busca específica, direto para a página do passeio
10. **Quadriciclo em Coqueirinho** — atividade diferenciada, pouco concorrente

---

## 7. Estrutura Padrão de Artigo

```
H1: keyword principal no título
  ex: "Piscinas Naturais de João Pessoa: guia completo"

Introdução (2 parágrafos max)
  Sem rodeios. Contexto + por que o leitor está no lugar certo.

## Resposta rápida
  1 parágrafo com a resposta objetiva à intenção da busca.
  Otimizado para snippet do Google.

## Seção H2 — conteúdo com experiência local
  Fatos concretos: nomes de praias, horários, dicas de acesso.

## Seção H2 — mais conteúdo
  ...

## Dicas do Murillo
  Parágrafo em primeira pessoa com dica que só quem conhece a região sabe.
  Assinado por Murillo.

## Passeios Relacionados
  Lista de passeios com links para páginas internas.
  CTA: "Quer fazer esse passeio? Fale com Murillo no WhatsApp"

## Perguntas Frequentes
  3-5 perguntas respondidas.
  Schema FAQPage gerado via generateFAQSchema().
```

---

## 8. Regras Editoriais

| Regra | Detalhe |
|-------|---------|
| Não inventar | Nenhum fato, preço, horário ou dado sem confirmação de Murillo |
| Conteúdo local | Toda frase precisa ser específica de João Pessoa — não serve para Natal ou Recife |
| Sem posts rasos | Mínimo 800 palavras. Posts com menos de 600 não sobem. |
| Sempre linkar | Pelo menos 2 links internos para páginas de passeio por post |
| Experiência como diferencial | Voz de guia local, não de copywriter genérico |
| Atualização periódica | Datas, marés e preços revisados a cada 6 meses |
| Sem urgência falsa | Proibido: "ÚLTIMAS VAGAS", "só hoje", "promoção relâmpago" |
| Foto real obrigatória | Nenhum post sobe sem pelo menos 1 foto real do local |

---

## Quando Ativar `/blog`

Todos os gatilhos precisam estar verdes:

- [ ] Site Fase 1 publicado, indexado e sem erros no Search Console
- [ ] Mínimo 10 posts revisados por Murillo, com foto real, prontos para publicar
- [ ] Murillo comprometido com pelo menos 1 post novo por mês
- [ ] Rota `/blog` implementada e testada (type-check + build passando)
- [ ] Sitemap atualizado para incluir `/blog/**`
- [ ] Schema `Article` implementado via `lib/seo.ts`

**Estimativa:** 3–4 meses após publicação do site Fase 1, se produção de conteúdo começar imediatamente.

---

## Próximos Passos (quando Murillo confirmar Fase 2)

1. ~~**SEO-BLOG-02** — implementar rota `/blog` + `/blog/[slug]` + schema Article~~ ✅ feito em 2026-05-02 (ESTRUTURA-SITE-COMPLETA-01)
2. **SEO-BLOG-03** — escrever os 10 posts prioritários (1 por vez, revisão de Murillo entre cada um)
3. ~~**SEO-BLOG-04** — atualizar sitemap para incluir blog~~ ✅ feito em 2026-05-02 (hub `/blog/` no sitemap; posts published entram automaticamente)
4. **SEO-BLOG-05** — submeter no Google Search Console após 5 posts publicados

---

## Estado Atual (2026-05-02)

A arquitetura do blog está **pronta tecnicamente**:

| Item | Status |
|------|--------|
| Rota `/blog/` | ✅ implementada — mostra "Guias em preparação" enquanto não houver posts published |
| Rota `/blog/[slug]/` | ✅ implementada — só renderiza posts com status `"published"` |
| Modelo de dados (`data/blog.ts`) | ✅ tipado: `BlogPost`, `BlogStatus`, `BlogCluster` |
| Helpers (`lib/blog.ts`) | ✅ `getPublishedPosts`, `getPostBySlug`, `getRelatedPasseios`, etc. |
| Sitemap | ✅ inclui hub `/blog/` + posts published; drafts excluídos |
| Schema Article + FAQPage + Breadcrumb | ✅ injetados no `[slug]` |
| 10 posts em status `"draft"` | ✅ slugs reservados, sem conteúdo inventado |

**Posts em draft** (URLs reservadas, não acessíveis publicamente):

1. `o-que-fazer-em-joao-pessoa`
2. `piscinas-naturais-joao-pessoa-guia`
3. `passeio-praia-do-seixas`
4. `areia-vermelha-vale-a-pena`
5. `roteiro-3-dias-joao-pessoa`
6. `litoral-sul-joao-pessoa-o-que-fazer`
7. `litoral-norte-joao-pessoa-o-que-fazer`
8. `tabua-de-mares-piscinas-naturais`
9. `joao-pessoa-com-criancas`
10. `transfer-aeroporto-joao-pessoa`

---

## Checklist Antes de Marcar um Post como `"published"`

Cada post precisa passar por TODOS estes itens antes de mudar `status: "draft"` para `status: "published"` em `data/blog.ts`:

### Conteúdo
- [ ] Texto escrito e revisado por Murillo (sem placeholders editoriais)
- [ ] Mínimo 800 palavras de conteúdo real
- [ ] Resposta rápida (1 parágrafo objetivo) no início — para Google snippet
- [ ] Pelo menos 3 seções H2 com substância
- [ ] Bloco "Dicas do Murillo" assinado em primeira pessoa
- [ ] Nenhum dado inventado (preço, horário, parceria, depoimento)
- [ ] Links para passeios relacionados em `relatedPasseios` (mínimo 1)

### SEO
- [ ] Title contém keyword principal + "João Pessoa" (ou cidade)
- [ ] Description com 140–160 caracteres + CTA implícito
- [ ] Keywords em `keywords[]` (3 a 8 termos relevantes)
- [ ] Slug curto, sem stopwords, com keyword principal
- [ ] FAQ com 3–5 perguntas (gera schema FAQPage automático)

### Técnico
- [ ] `relatedPasseios` referenciam IDs reais de `data/passeios.ts`
- [ ] `updatedAt` no formato `YYYY-MM-DD`
- [ ] `readingTime` calculado (≈200 palavras/min)
- [ ] `cluster` de `BlogCluster` válido
- [ ] `npm run type-check` passa
- [ ] `npm run build` passa

### Validação Final
- [ ] Preview da página em ambiente local
- [ ] Schema validado em [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Pelo menos 1 imagem real (quando assets estiverem disponíveis)

Após publicar, registrar em `_memoria/decisoes-estrategicas.md` a data e KPIs iniciais.

---

*Documento gerado em 2026-05-01. Atualizado em 2026-05-02 com arquitetura técnica e checklist de publicação.*
