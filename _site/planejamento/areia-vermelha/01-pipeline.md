# Pipeline aplicado — Página Areia Vermelha

**Data:** 2026-05-06
**Sprint:** única até 2026-05-20
**Reaproveita:** template `app/passeios/[categoria]/[slug]/page.tsx` + estrutura de Seixas

---

## Orquestrador → decisão

Acionar pipeline curto reusando template existente. Não recriar 5 arquivos por etapa (Seixas) — condensar aqui. Skills aplicadas em sequência mental:
estrategista → copywriter → SEO → programador.

URL final: `/passeios/litoral-norte/areia-vermelha-catamara`
Já gerada via SSG por `generateStaticParams` em `data/passeios.ts`.

---

## Estrategista de site

- **Categoria:** `litoral-norte` (decisão histórica — Areia Vermelha é catamarã saindo de Cabedelo, faz parte do litoral norte). Mantida.
- **Hierarquia de blocos** (ordem do template, ativada por presença de campos):
  1. Hero (H1 + subtítulo + CTA WhatsApp)
  2. Breadcrumb
  3. InfoCard (preço/duração/saída/observações)
  4. MareAlert + ProximaSaidaCard (passeio depende de maré)
  5. TrustBlock
  6. Lead (AIDA — atenção)
  7. Descrição sensorial (+ imagem galeria 01)
  8. Roteiro narrativo (5 passos)
  9. Incluso / Não incluso
  10. FAQ (7 itens)
  11. CTA secundário
  12. Depoimento (`[CONFIRMAR COM MURILLO]`)
  13. Informações práticas (o que levar / ponto de encontro / horário)
  14. CTA final
  15. Passeios similares (litoral-norte)

- **Crosslink:** "Outros passeios em litoral-norte" preenche-se sozinho a partir da categoria. Sem links manuais nesta sprint.

---

## Copywriter de vendas

- **Tom:** acolhedor, local, orientador. Sem clichê turístico ("paraíso", "mágico"). Expressões diretas: "a gente leva você no horário certo", "você só aproveita".
- **AIDA:**
  - Atenção: lead começa com pergunta visual ("Você já viu fotos daquele banco de areia…")
  - Interesse: descrição sensorial 4 parágrafos (saída → cenário → estrutura → tempo)
  - Desejo: roteiro narrativo passo a passo, info prática completa
  - Ação: 3 CTAs WhatsApp (sticky, secundário pós-FAQ, final) + InfoCard
- **Provas:** Cadastur ativo (TrustBlock global), R$ 70/pessoa explícito, "lugar mais procurado da Paraíba" (do catálogo).
- **Lacunas marcadas `[CONFIRMAR COM MURILLO]`:** depoimento real, fotos reais (3 mínimas).

---

## SEO local turismo

- **H1:** `Areia Vermelha em João Pessoa — Catamarã até o Banco de Areia em Cabedelo` — keyword principal + cidade no H1.
- **Meta description:** ~150 chars, com cidade ("Cabedelo, a 20 min de João Pessoa"), preço, prova ("Cadastur ativo") e CTA WhatsApp.
- **Title:** `Areia Vermelha — Passeio de Catamarã em João Pessoa | Vem Passear` (gerado pelo template).
- **Schemas JSON-LD** (auto via `lib/seo.ts` no template):
  - `TouristAttraction` (nome, descricao, url, imagem, preço)
  - `BreadcrumbList`
  - `FAQPage` (7 perguntas)
- **Alt tags:** `imagemAlt` descritivo com cena + cidade.
- **Keywords-alvo (passivas, no copy):** "areia vermelha cabedelo", "passeio de catamarã joão pessoa", "banco de areia areia vermelha", "piscinas naturais cabedelo", "areia vermelha maré baixa".
- **Slug mantido:** `areia-vermelha-catamara` (já indexado no SSG, não renomear).

---

## Programador de site

- **Arquivo único alterado:** `_site/data/passeios.ts` (entry `areia-vermelha-catamara`).
- **Campos novos preenchidos:** `h1`, `metaDescription`, `subtituloHero`, `lead`, `descricaoSensorial`, `roteiroNarrativo` (5), `alertaMare`, `nomeCurto`, `informacoesPraticas`, `temAvaliacoes`, `tem360`, `avaliacoes`, `url360`.
- **Campos expandidos:** `incluso` (5 itens), `naoIncluso` (2), `imagemAlt` (mais descritivo), `faq` (4 → 7).
- **Imagens:** README criado em `public/images/passeios/areia-vermelha/` listando os 3 assets pendentes. Template já faz fallback para placeholder SVG.
- **Tábua de marés:** `areia-vermelha-catamara` já está em `PasseioMareSlug` (`types/tabua-mares.ts`) — `ProximaSaidaCard` já funciona com os dados de maio/2026 marcados `revisadoPorMurillo: false` (mostra fallback "Consulte próximas saídas").
- **Não tocado:** template `app/passeios/[categoria]/[slug]/page.tsx`, `lib/seo.ts`, componentes. Tudo reaproveitado.

---

## Pendências (não bloqueiam publicação)

- [ ] Murillo enviar 3 fotos reais (`capa.webp`, `galeria-01.webp`, `galeria-02.webp`)
- [ ] Murillo confirmar 1 depoimento real
- [ ] Marcar dias de maio/2026 com `revisadoPorMurillo: true` em `data/tabua-mares.ts` para o ProximaSaidaCard mostrar dado real
