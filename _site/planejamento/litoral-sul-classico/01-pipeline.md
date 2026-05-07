# Pipeline aplicado — Página Litoral Sul Clássico

**Data:** 2026-05-06
**Sprint:** única até 2026-05-20
**Reaproveita:** decisões de Areia Vermelha + template `app/passeios/[categoria]/[slug]/page.tsx`

---

## Orquestrador → decisão

Mesma lógica da página Areia Vermelha: pipeline curto reusando template existente. Sem novos componentes. URL final: `/passeios/litoral-sul/roteiro-classico` (já gerada via SSG).

---

## Estrategista de site

- **Categoria:** `litoral-sul` (mantida).
- **Slug:** `roteiro-classico` (já indexado, não renomear). Convive com `litoral-norte/roteiro-classico` — categoria desambigua.
- **Hierarquia de blocos:** mesma da Areia Vermelha (Hero → Breadcrumb → InfoCard → TrustBlock → Lead → Sensorial → Roteiro narrativo → Incluso → FAQ → CTA secundário → Depoimento → Info prática → CTA final → Similares). Sem MareAlert/ProximaSaidaCard (passeio não depende de maré).
- **Crosslink:** "Outros passeios em litoral-sul" preenchido automaticamente.

---

## Copywriter de vendas

- **Tom:** mesmo padrão Areia Vermelha — direto, local, sem clichê. Frases-âncora: "a gente cuida do trajeto", "você só aproveita".
- **AIDA:**
  - Atenção: lead começa com pergunta-problema ("Quer conhecer o melhor do litoral sul em um único dia — sem dirigir, sem estacionar…").
  - Interesse: descrição sensorial em 5 parágrafos, uma praia por parágrafo.
  - Desejo: roteiro narrativo de 6 passos (transfer + 4 praias + retorno) com tempo, opção de pular Tambaba.
  - Ação: 3 CTAs WhatsApp.
- **Tratamento de objeções no copy:** Tambaba opcional explicitado em 4 lugares (subtítulo, lead, sensorial, FAQ); almoço não incluso explicitado em 3 lugares (incluso, sensorial, FAQ).
- **Lacunas marcadas `[CONFIRMAR COM MURILLO]`:** depoimento real, fotos reais (3).

---

## SEO local turismo

- **H1:** `Litoral Sul de João Pessoa — Roteiro Clássico por 4 Praias em 1 Dia` — keyword principal + cidade + número (4 praias) + tempo (1 dia).
- **Meta description:** ~150 chars, com 4 nomes de praia, preço, prova ("Cadastur ativo") e CTA.
- **Title:** `Litoral Sul — Roteiro Clássico em João Pessoa | Vem Passear` (gerado pelo template).
- **Schemas JSON-LD** (auto via `lib/seo.ts`): TouristAttraction + BreadcrumbList + FAQPage (7 itens).
- **Alt tag:** "Falésias coloridas e coqueiros na Praia de Coqueirinho, litoral sul de João Pessoa".
- **Keywords-alvo (passivas no copy):** "litoral sul joão pessoa", "roteiro clássico paraíba", "praia de tambaba", "praia de coqueirinho", "praia do amor", "praia de gramame", "passeio um dia litoral sul".

---

## Programador de site

- **Arquivo único alterado:** `_site/data/passeios.ts` (entry `litoral-sul-classico`).
- **Campos novos preenchidos:** `h1`, `metaDescription`, `subtituloHero`, `lead`, `descricaoSensorial`, `roteiroNarrativo` (6 passos), `nomeCurto`, `informacoesPraticas`, `temAvaliacoes`, `tem360`, `avaliacoes`, `url360`.
- **Campos expandidos:** `incluso` (2→3), `naoIncluso` (1→3), `imagemAlt` (mais descritivo), `faq` (5→7).
- **Correção de path:** `gallery` apontava para `litoral-sul-classico/` (legado) — corrigido para `litoral-sul/roteiro-classico/` (consistente com `coverImage`).
- **Depoimento marcado:** `[CONFIRMAR COM MURILLO]` (substituiu o anterior, que parecia genérico — Regra Ouro).
- **Imagens:** README em `public/images/passeios/litoral-sul/roteiro-classico/` reescrito no padrão da Areia Vermelha (3 assets pendentes).
- **Não tocado:** template, lib, componentes, tipos.

---

## Pendências (não bloqueiam publicação)

- [ ] Murillo enviar 3 fotos reais (`capa.webp`, `galeria-01.webp`, `galeria-02.webp`)
- [ ] Murillo confirmar 1 depoimento real
- [ ] Confirmar valor privativo (atualmente "consultar")
