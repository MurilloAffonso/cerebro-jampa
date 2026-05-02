# Próximos Passos — Site Vem Passear em Jampa

**Data:** 2026-05-02
**Origem:** Issue ESTRUTURA-SITE-COMPLETA-02
**Estado de partida:** estrutura técnica completa (42 rotas, blog em draft, schemas, sitemap, robots, 22 passeios, transfer 24h)
**Fonte estratégica:** `_site/docs/dossie-externo-seo-concorrencia-conversao.md`

---

## Estado Confirmado em 2026-05-02

| Camada | Status |
|--------|--------|
| Rotas comerciais (`/`, `/passeios`, `/passeios/[cat]`, `/passeios/[cat]/[slug]`, `/faq`, `/servicos/transfer-24h`) | ✅ ativas |
| `/sobre` retorna 404 | ✅ confirmado (`notFound()`) |
| `/blog/` hub | ✅ ativo, com fallback "Em preparação" |
| `/blog/[slug]/` | ✅ apenas `published` gera; `draft` cai em `notFound()` |
| 10 posts em draft | ✅ slugs reservados conforme dossiê |
| Sitemap | ✅ exclui draft, `/sobre`, `/calendario`; inclui hub `/blog/` |
| Robots | ✅ `disallow /sobre/` e `/calendario/` |
| Schemas | ✅ `LocalBusiness/TravelAgency` (layout) + `TouristAttraction` + `FAQPage` + `BreadcrumbList` + `Article` |
| Type-check | ✅ zero erros |
| Build de produção | ✅ 42 páginas geradas |

---

## Sequência Recomendada de Implementação (consolidação do dossiê §11)

### Fase A — Conversão imediata (sem novas rotas)

| # | Tarefa | Bloqueio | Saída esperada |
|---|--------|---------|----------------|
| A1 | Fotos reais para 3 prioritários (Seixas, Areia Vermelha, Litoral Sul Clássico) | sessão fotográfica | `coverImage`, `gallery[]` reais em `data/passeios.ts` |
| A2 | Foto profissional de Murillo | sessão fotográfica | substituir avatar circular em `MurilloBlock` |
| A3 | TrustBlock visível em todas as páginas (Cadastur + Google rating) | nenhum | bloco reutilizável injetado nas páginas-chave |
| A4 | Revisão de FAQ por passeio vs §8 do dossiê (12 objeções mapeadas) | revisão Murillo | FAQ atualizado em `data/passeios.ts` |
| A5 | Confirmação de preço por trajeto + incluso do Transfer 24h | **Murillo** | publicar valor em `data/servicos.ts` |
| A6 | Filtros em `/passeios/` (categoria, dependência de maré, faixa de preço) | nenhum | reduzir fricção MOFU |
| A7 | Intro editorial por categoria (`/passeios/[categoria]/`) | nenhum | SEO mid-funnel |

### Fase B — Conteúdo editorial (publicação progressiva do blog)

Publicar 1 post por vez, com revisão de Murillo entre cada um. Ordem do dossiê:

| Ordem | Slug | Bloqueio principal |
|------|------|--------------------|
| 1 | `o-que-fazer-em-joao-pessoa` | texto + 1 foto real |
| 2 | `tabua-de-mares-piscinas-naturais` | texto (tábua já em `data/tabua-mares.ts`) |
| 3 | `piscinas-naturais-joao-pessoa-guia` | texto + foto Seixas |
| 4 | `roteiro-3-dias-joao-pessoa` | texto + foto |
| 5 | `passeio-praia-do-seixas` | texto + foto |
| 6 | `areia-vermelha-vale-a-pena` | texto + foto Areia |
| 7 | `litoral-sul-joao-pessoa-o-que-fazer` | texto + foto + preço quad solto |
| 8 | `litoral-norte-joao-pessoa-o-que-fazer` | texto + foto + horário Jacaré por época |
| 9 | `joao-pessoa-com-criancas` | texto + confirmar idade mínima por passeio |
| 10 | `transfer-aeroporto-joao-pessoa` | texto + preço transfer (depende de A5) |

> **Como sair de draft:** alterar `status: "draft"` → `status: "published"` em `data/blog.ts` apenas após cumprir o checklist em `_site/docs/seo-blog-fase-2.md` §"Checklist Antes de Marcar um Post como published".

### Fase C — SEO técnico e social

| # | Tarefa |
|---|--------|
| C1 | Open Graph por passeio (gerar `og-{slug}.webp` 1200×630) |
| C2 | Validar todos os schemas com Rich Results Test pós-deploy |
| C3 | Submeter sitemap no Google Search Console |
| C4 | Configurar Google Business Profile (NAP + horário + fotos) |

### Fase D — Redesign visual (handoff Claude Design)

Estrutura técnica fechada. Liberado para começar redesign sem depender de novas decisões arquiteturais. Ler `_site/briefings-designer/estrutura-site-para-redesign.md` + dossiê §1, §4, §7 antes de propor direções.

---

## Pendências Bloqueadoras para Murillo

Mesma lista do dossiê §"Pendências para Murillo confirmar" — copiada aqui para acompanhamento operacional:

- [ ] Preço por trajeto do transfer 24h (`data/servicos.ts` → `preco: null`)
- [ ] Incluso/não incluso do transfer
- [ ] Horário exato do Pôr do Sol Jacaré por época
- [ ] Capacidade da lancha privativa
- [ ] Preço do quadriciclo solto (não combo) — 2 entradas `[CONSULTAR]`
- [ ] Preço do mergulho com cilindro
- [ ] Transfer disponível para Cabedelo (Areia, Jacaré) e Penha
- [ ] Depoimento real de cliente Seixas (placeholder hoje)
- [ ] Formas de pagamento aceitas (FAQ #12)
- [ ] `anos_operacao` da empresa (`data/empresa.ts` → `null`)

---

## Riscos Restantes (após esta issue)

| Risco | Mitigação atual | Próxima ação |
|------|-----------------|--------------|
| Publicar post sem revisão de Murillo | Drafts excluídos do sitemap + `notFound()` em `/blog/[slug]` para draft | Manter como invariante |
| Hardcode de preço/horário em componente | Code review obrigatório | Criar pre-commit hook (futuro) |
| Stock photo em página comercial | Placeholders bem feitos | Capturar fotos prioritárias (A1, A2) |
| Confusão de marca com "Vai Passear" | Title já fixa "— Vem Passear em Jampa" | Reforçar em footer + GBP |
| Sitemap sem `lastmod` real por página | `now` no build | Próxima iteração: usar `updatedAt` por entidade |
| `og-image` único para todas as páginas | OK na fase 1 | Fase C1 — gerar por passeio |
| Cadastur expira em 2026-12-16 | Data conhecida | Renovação operacional fora do site |

---

## Como Verificar Saúde do Site (smoke test rápido)

```bash
cd _site
npm run type-check    # zero erros
npm run build         # 42 páginas geradas
npm run dev           # navegar /, /passeios, /blog, /faq, /sobre (404), /sitemap.xml, /robots.txt
```

Validar manualmente:
- `/blog/` mostra "Guias em preparação"
- `/blog/o-que-fazer-em-joao-pessoa` retorna 404 (está draft)
- `/sitemap.xml` não contém nenhum `/blog/[slug]/` nem `/sobre/`
- `/robots.txt` tem `Disallow: /sobre/` e `/passeios/piscinas-naturais/calendario/`
- Cada página de passeio tem CTA WhatsApp via `empresa.contato.whatsappLink`

---

*Documento criado em 2026-05-02 após ESTRUTURA-SITE-COMPLETA-02. Atualizar quando uma fase for concluída ou bloqueio for desbloqueado.*
