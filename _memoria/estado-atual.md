# Memória: Estado Atual

**Última atualização:** 2026-05-29 (Fase 3 — Consolidação Operacional)
**HEAD:** `9bd97e4 fix(media): corrige isolamento e nomenclatura SEO das fotos por passeio`
**Roadmap ativo:** `proximos-passos.md`
**Fonte canônica do projeto:** [`../FONTE-DA-VERDADE.md`](../FONTE-DA-VERDADE.md)

> Anteriores: backup desta página em `_archive/backup-fase3-2026-05-29/_memoria-estado-atual.md`.

---

## 1. Identidade Operacional (verdade fixada)

| Campo | Valor | Fonte |
|---|---|---|
| Domínio oficial | `https://www.vempassearjampa.com` | FONTE-DA-VERDADE.md (Fase 1) |
| Deploy oficial | **Vercel** (`server: Vercel`, `x-vercel-id: gru1`) | Fase 1 |
| Catálogo oficial | **22 passeios + 1 serviço** (ADR 0001) | `_site/CONTEXT.md` |
| Paleta oficial | v2 — `#107997` ocean / `#092238` navy / `#D97706` acento | `_site/tailwind.config.ts` |
| Fontes | DM Sans (body) + Lora (headings) | mesma |
| Stack | Next.js 14 + React 18 + TS 5 (strict) + Tailwind 3 + next-intl 4.12 | `_site/package.json` |
| WhatsApp | `+55 83 99908-7830` → `https://wa.me/5583999087830` | Decisão 22 |
| Cadastur | `52.077.577` (válido até 16/12/2026) | `_conhecimento/empresa.md` |
| CNPJ | `52.077.577/0001-03` | mesma |
| Google | 4,9★ com 61 avaliações | `_conhecimento/provas-de-confianca.md` |

---

## 2. Fases concluídas

### Fase 1 — Limpeza e Verdade Única (2026-05-29) ✅

- `FONTE-DA-VERDADE.md` criado na raiz (documento âncora)
- Domínio fixado em `www.vempassearjampa.com`; deploy em Vercel
- 5 docs sincronizados (`_site/README.md`, `_site/ESTRUTURA.md`, `_site/CONTEXT.md`, `docs/handoff-tecnico.md`, `_memoria/MEMORY.md`)
- 7 arquivos arquivados via `git mv` (5 restos Obsidian + 2 docs superados)
- Auto-memory atualizada
- Relatório: `_memoria/relatorio-fase1-limpeza-2026-05-29.md`

### Fase 2 — Limpeza Técnica (2026-05-29) ✅

- 26 imagens da raiz organizadas em `_design/refs/` (screenshots, validacao-layouts, candidatos-assets-passeios) com README
- `netlify.toml` raiz movido para `_archive/deploy-legado/`
- `.gitignore` raiz reescrito (bloco "Build artifacts" + regra `/*.png/jpg/jpeg/gif/webp` para raiz + entrada órfã removida)
- Build artifacts confirmados como já ignorados (`_site/out/`, `_site/out.zip`, `_site/tsconfig.tsbuildinfo`)
- Pastas vazias e skills externas **mapeadas** (sem ação)
- Falso positivo do doctor CSV **localizado**
- Relatório: `_memoria/relatorio-fase2-limpeza-tecnica-2026-05-29.md`

### Fase 3 — Consolidação Operacional (2026-05-29) ✅

- 4 skills externas registradas no manifest (`executar-issue`, `grill-with-docs`, `to-issues`, `to-prd`) — padrão oficial definido
- Duplicata `.agents/skills/executar-issue/` arquivada; pasta `.agents/` removida
- Doctor atualizado: parser CSV RFC 4180 + detecção de todas as externas registradas
- Doctor rodado: **0 erros, 1 aviso** (HITL — placeholder foto Murillo + parceiros pendentes; era 2 avisos antes)
- 8 pastas vazias removidas, registradas em `_archive/estrutura-inicial-vazia/`
- `.github/` e `_social/` mantidas com `.gitkeep` + README
- Sprint antiga arquivada (`_archive/sprint-anterior/sprint-2026-05-05.md`)
- Roadmap único definido: `_memoria/proximos-passos.md`
- Docs com "29 passeios" como conteúdo histórico marcadas DEPRECATED no topo
- Deploy legado consolidado em `_archive/deploy-legado/`
- Lovable output arquivado; pipeline incorporado arquivado
- Relatório: `_memoria/relatorio-fase3-consolidacao-2026-05-29.md`

---

## 3. Estrutura Atual (pós-limpeza)

```
CEREBRO.JAMPA/
├── FONTE-DA-VERDADE.md       ← documento âncora canônico
├── CLAUDE.md                 ← regras do agente
├── AGENTS.md                 ← especialidades
├── project-manifest.json     ← manifest do projeto
├── .gitignore                ← reescrito Fase 2
├── netlify.toml              ← REMOVIDO (arquivado em _archive/deploy-legado/)
│
├── _conhecimento/            ← fonte de verdade (31 .md de fatos + branding/)
├── _memoria/                 ← estado vivo + decisões + GMB + relatórios + _arquivo/
├── _aprendizados/            ← retrôs (3 .md)
├── _crm/                     ← leads.csv (18 leads, 12 colunas) + README
├── _design/                  ← cloud-design/ + refs/ (3 subpastas com 26 imagens)
├── _automacao/               ← scripts/, workflows/, schemas/, logs/, tasks/, ciclos.md, riscos.md
├── _sessoes/                 ← atas (2)
├── _seguro/                  ← gitignored, só Murillo
├── _social/                  ← 4 subpastas com .gitkeep (será populada na fase social)
├── _site/                    ← Next.js 14 (produto principal em produção)
├── _archive/                 ← histórico append-only
│   ├── backup-fase1/2/3-2026-05-29/    ← snapshots por fase
│   ├── deploy-legado/                  ← netlify.toml (2 versões consolidadas)
│   ├── estrutura-inicial-vazia/        ← registro de pastas vazias removidas
│   ├── legado-obsidian/                ← restos Obsidian (5 arquivos)
│   ├── lovable-outputs/                ← skill congelada
│   ├── pipeline-incorporado/           ← copy já no site
│   ├── skills-duplicadas/              ← executar-issue (.agents) duplicado
│   └── sprint-anterior/                ← sprint 2026-05-05 superada
│
├── skills/                   ← 21 skills + manifest.json (+ 4 externas registradas)
├── templates/                ← 6 templates de página/copy/SEO/briefing
├── planejamento/             ← backlog-principal.md (sprint-atual arquivada)
├── docs/                     ← handoff-tecnico, decision-log, approval-policy, project-context, adr/
├── configs/                  ← só README (vazio sem secrets)
├── google-business-profile/  ← cliente OAuth com credenciais (gitignored)
├── .claude/                  ← commands/ (9) + skills/executar-issue/ + settings.local.json
├── .github/                  ← .gitkeep + README (CI futura)
├── .obsidian/ .vscode/ .playwright-mcp/  ← caches de ferramentas
```

**Pastas removidas na Fase 3** (todas registradas em `_archive/estrutura-inicial-vazia/`): `src/`, `_site/paginas/`, `_site/seo/`, `How to use Claude/`, `media/`, `.agents/`, `_automacao/outputs/`, `_pipeline/`.

---

## 4. Site em Produção — Estado

### Rotas vivas (32+) — todas sob `_site/app/[locale]/` (pt | en | es)

- `/{locale}/` — Home (v4: HomeVideoHero + categorias + GoogleReviewsBlock + CadasturCertificate + HomePasseiosSection + MurilloBlock + PartnersMarquee + CTAFinal/CTASticky)
- `/{locale}/passeios/` — hub geral
- `/{locale}/passeios/[categoria]/` — 6 hubs de categoria
- `/{locale}/passeios/[categoria]/[slug]/` — 22 passeios via template único
- `/{locale}/servicos/transfer-24h/`
- `/{locale}/servicos/excursoes-e-grupos/`
- `/{locale}/faq/`
- `/{locale}/tabua-de-mares-joao-pessoa/`
- `/{locale}/blog/` + `/{locale}/blog/[slug]` (10 posts em `draft`, só `published` gera)
- `/{locale}/sobre/` — retorna `notFound()` (ISSUE-22 pendente)
- `sitemap.xml`, `robots.txt`, `icon.svg`

### Componentes (39)
Inventário em `_site/ESTRUTURA.md`.

### Schemas JSON-LD
LocalBusiness, TouristAttraction, FAQPage, BreadcrumbList, Article — gerados por `_site/lib/seo.ts`.

---

## 5. Skills Operacionais

### 21 skills internas (turismo) — `skills/manifest.json`

| Categoria | Qtd | Skills |
|---|---|---|
| Orquestração | 1 | `orquestrador-projeto-turismo` |
| Site | 7 | `estrategista-de-site`, `ux-ui-mobile-first`, `copywriter-vendas`, `seo-local-turismo`, `briefing-designer`, `programador-de-site`, `diretor-visual-turismo` |
| Visual | 2 | `captura-referencias-visuais`, `diretor-visual-turismo` (overlap) |
| Social | 3 | `radar-concorrentes-social`, `captura-referencias-visuais`, `social-media-editorial-turismo` |
| Comercial | 7 | `agente-comercial-jampa` (router), `qualificacao-lead`, `proposta-passeio`, `objecoes-turismo-jampa`, `follow-up-comercial`, `agente-atendimento-pre-passeio`, `agente-pos-venda` |
| Operacional | 1 | `tabua-mares-turismo` |
| Dados | 1 | `painel-kpi-vempassear` |
| Experimental | 1 | `lovable-site-builder` (🔒 congelada — Decisão 38) |

### 4 skills externas (engenharia) registradas

| Skill | Local | Função |
|---|---|---|
| `executar-issue` | `.claude/skills/executar-issue/` | Executor de issues do backlog (escopo: vault completo) |
| `grill-with-docs` | `_site/.claude/skills/grill-with-docs/` | Stress-test de plano contra docs (escopo: _site) |
| `to-issues` | `_site/.claude/skills/to-issues/` | Plano → issues (escopo: _site) |
| `to-prd` | `_site/.claude/skills/to-prd/` | Conversa → PRD (escopo: _site) |

---

## 6. CRM

- **Arquivo:** `_crm/leads.csv` — 18 leads, 12 colunas (sep `,`), parser RFC 4180 ✅
- **Doctor:** zero warnings sobre CSV após Fase 3
- **Meta:** 30+ leads para extrair KPIs reais
- **Pendências operacionais:** estorno Jair+Ana (linha 17), lead Picãozinho sem nome (linha 15, sem retorno desde 30/04)

---

## 7. GMB

- Cliente OAuth funcional em `google-business-profile/`
- Auditoria com dados reais em `_memoria/gmb-auditoria-dados-reais-2026-05.md`
- Checklist de otimização em `_memoria/gmb-otimizacao-2026-05.md`
- Execução manual no painel GMB (Murillo + IA)

---

## 8. Bloqueios HITL (depende de Murillo — Fase 4)

| Bloqueio | Impacto | Local |
|---|---|---|
| Foto profissional de Murillo | `MurilloBlock` sem foto real (doctor aponta TODO) | `_site/components/MurilloBlock.tsx:39,55` |
| Parceiros reais (logos confirmados) | `PartnersMarquee` com placeholders | `_site/components/PartnersMarquee.tsx:13` |
| Vídeo hero (`hero-jampa.{webm,mp4}` + `hero-poster.jpg`) | Home sem motion, fallback fundo escuro | `_site/public/videos/home/` (vazia) |
| Fotos reais Seixas/Areia Vermelha/Picãozinho | Galerias usam fallback ilustrativo | `_site/public/images/passeios/{slug}/` |
| Promoção das fotos `r-*` para asset real | Pendente confirmação autoria/passeio | `_design/refs/candidatos-assets-passeios/` |
| Depoimentos reais (mínimo 2) | `ReviewsBlock` sem prova social específica | bloqueio HITL |
| `preco: null` em Transfer 24h | Página mostra "Consultar", reduz conversão | `_site/data/servicos.ts` |
| 10 posts de blog em `draft` | Massa SEO zero | `_site/data/blog.ts` |
| Tábua maio/2026 `revisadoPorMurillo: false` | `ProximaSaidaCard` exibe fallback | `_site/data/tabua-mares.ts` |
| GMB otimização (descrição + 5 fotos + Q&A) | 4,9★ com apenas 61 reviews | painel GMB |
| Lead Picãozinho aberto há > 30 dias | Cliente perdido para concorrente? | `_crm/leads.csv` linha 15 |
| Estorno Jair+Ana | Risco financeiro/reputacional | `_crm/leads.csv` linha 17 |

---

## 9. Próximas frentes (ver `proximos-passos.md`)

1. **Fotos reais nas galerias** (frente atual): Seixas, Areia Vermelha, Picãozinho — bloqueio único: Murillo aprovar/enviar.
2. **GMB execução manual** — checklist em `gmb-otimizacao-2026-05.md`.
3. **Registro contínuo de leads** — atingir 30+ para KPIs.
4. **Validar deploy Vercel** das alterações de 2026-05-28.
5. **Solicitar indexação no Search Console** das páginas alteradas.

---

## 10. Decisões estratégicas mais recentes (referência rápida)

| # | Decisão | Data |
|---|---|---|
| 37 | Claude Design é a ferramenta visual principal | 2026-04-27 |
| 38 | Lovable congelada — preservada para reativação futura | 2026-04-27 |
| 39 | Prompt Murillo Visu como régua de qualidade interna | 2026-04-27 |
| 40 | Squad Comercial — camada comercial assistida no CEREBRO | 2026-04-29 |
| 41 | Paleta v2 aprovada (#107997 ocean + #092238 navy) | 2026-05-09 |
| 44 | Galeria v3 com fallback automático (≥ 4 fotos por passeio) | 2026-05-12 |
| — | (Fase 1) Domínio canônico `www.vempassearjampa.com`, deploy Vercel | 2026-05-29 |
| — | (Fase 3) Padrão oficial de skills externas: registradas no manifest, mantidas em escopo | 2026-05-29 |

---

## 11. Catálogo (snapshot — verdade canônica)

**22 passeios + 1 serviço = 23 itens comerciais (ADR 0001)**

| Categoria | Qtd | URL slug |
|---|---|---|
| Pacotes | 3 | `pacotes` |
| Litoral Sul | 6 | `litoral-sul` |
| Litoral Norte | 5 | `litoral-norte` |
| Piscinas Naturais | 4 | `piscinas-naturais` |
| City Tour | 1 | `city-tour` |
| Interestaduais | 3 | `interestaduais` |
| **Total passeios** | **22** | — |
| Serviço (Transfer 24h) | 1 | `servicos/transfer-24h` |

> ❌ Referências antigas a "29 passeios" (em `_conhecimento/clusters-seo.md`, `_conhecimento/estrutura-site-recomendada.md`) foram marcadas DEPRECATED no topo dos arquivos durante a Fase 3. Conteúdo dos arquivos foi preservado como histórico.

---

## 12. Fontes Verificadas

✅ Dados oficiais (CNPJ, Cadastur, WhatsApp, domínio, deploy)
✅ Catálogo estruturado (22 passeios + 1 serviço)
✅ Tom de voz validado
✅ Paleta + fontes consolidadas
✅ Vocabulário oficial fixado (Ciclo 2 da retrospectiva)

## Zero Invenção
- Nada foi fabricado
- Todas informações vêm de Murillo ou catálogo
- Lacunas marcadas com `[CONFIRMAR COM MURILLO]`

---

*Este arquivo é atualizado ao fechar cada sessão ou fase relevante. Próxima atualização esperada: Fase 4 ou primeira execução comercial real.*
