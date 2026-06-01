# Sprint Atual — Vem Passear em Jampa

**Data de abertura:** 2026-05-05
**Responsável:** Murillo Affonso Soledade de Oliveira
**Agente:** Claude Code (Sonnet 4.6)
**Objetivo da sprint:** Fechar a base operacional do projeto, auditar o CRM, implementar o hero em vídeo da home e mapear os próximos itens de conversão e SEO.

---

## Tarefas da Sprint

| ID | Tarefa | Área | Status | Prioridade | Risco |
|----|--------|------|--------|-----------|-------|
| S1 | Criar base operacional (4 arquivos de planejamento e docs) | Documentação | ✅ CONCLUÍDO | Alta | Baixo |
| S2 | Auditar e fechar BLOCO B — Design System v1.2 e handoffs | Documentação | ✅ CONCLUÍDO | Alta | Baixo |
| S3 | Implementar HomeVideoHero na homepage | Documentação / Site | ✅ CONCLUÍDO (aguarda commit) | Alta | Baixo |
| S4 | Integrar TrustBlock nas páginas de passeio | Conversão | 🔲 EM ABERTO | Alta | Baixo |
| S5 | Adicionar intro editorial por categoria (`/passeios/[categoria]/`) | SEO | 🔲 EM ABERTO | Média | Baixo |
| S6 | Auditoria `_crm/leads.csv` | CRM | ✅ CONCLUÍDO (falso positivo) | Alta | Baixo |
| S7 | Criar placeholder visual do hero (poster + pasta `/videos/home/`) | Design/Assets | 🔲 EM ABERTO | **Urgente** | Médio |

---

## Detalhamento por Tarefa

### S1 — Base Operacional ✅
**Entregáveis:** `planejamento/sprint-atual.md`, `planejamento/backlog-principal.md`, `docs/handoff-tecnico.md`, `_conhecimento/retrospectiva.md`
**Critério de pronto:** arquivos criados, conteúdo coerente com o estado atual do projeto.
**Validação:** leitura manual + git status confirmando arquivos novos.

---

### S2 — BLOCO B Design System v1.2 ✅
**Entregáveis:** `tailwind.config.ts` com tokens DS v1.2 + 17 handoffs corrigidos em `_site/briefings-designer/`.
**Critério de pronto:** zero termos proibidos nos handoffs, type-check e build passando.
**Commit:** realizado por Murillo (push incluído).

---

### S3 — HomeVideoHero ✅
**Entregáveis:** `_site/components/HomeVideoHero.tsx` (novo) + `_site/app/page.tsx` (hero substituído).
**Critério de pronto:** componente com autoPlay, muted, loop, playsInline, prefers-reduced-motion, poster fallback, social proof, CTAs WhatsApp e /passeios.
**Observação:** arquivos prontos, aguardam commit de Murillo.
**Bloqueio visual:** assets `/videos/home/hero-jampa.webm`, `/videos/home/hero-jampa.mp4`, `/videos/home/hero-poster.jpg` ainda não existem (ver S7).

---

### S4 — TrustBlock nas Páginas de Passeio 🔲
**Próxima tarefa recomendada.**
**Contexto:** `_site/components/TrustBlock.tsx` já existe e está funcional. Falta incluí-lo no template de passeio (`_site/app/passeios/[categoria]/[slug]/page.tsx`), preferencialmente após o bloco de depoimento e antes do CTA Final.
**Critério de pronto:** `TrustBlock` visível em todas as 22 páginas de passeio, type-check limpo.
**Risco:** Baixo — componente autossuficiente, sem props.

---

### S5 — Intro Editorial por Categoria 🔲
**Contexto:** as páginas `/passeios/[categoria]/` existem mas carecem de copy introdutório para SEO mid-funnel (Fase A7 do dossiê).
**Critério de pronto:** cada uma das 6 categorias tem um parágrafo de 2–3 linhas contextual e único, sem clichê.
**Dados necessários:** nenhum bloqueio — texto pode ser gerado com base no vault.

---

### S6 — Auditoria CRM ✅
**Resultado:** `_crm/leads.csv` está tecnicamente válido.
- 18 leads, 12 campos por linha, todas as linhas corretas.
- Alerta P2 do `jampa-doctor` era falso positivo: o parser ingênuo do doctor não respeitava aspas duplas em campos com vírgula interna.
- **Decisão:** nenhuma correção técnica necessária no arquivo.
- **Ação recomendada operacional:** verificar estorno pendente de Jair e Ana (linha 17); retomar lead "Não identificado" do Picaozinho (linha 15).

---

### S7 — Placeholder Visual do Hero 🔲 ⚠️ URGENTE
**Contexto:** `HomeVideoHero` (S3) referencia `/videos/home/hero-poster.jpg` como poster e fallback estático. Sem esse arquivo, o hero exibe fundo escuro apenas (bg-dark). A pasta `/videos/home/` ainda não existe.
**Critério de pronto:** `_site/public/videos/home/hero-poster.jpg` criado — qualquer imagem de João Pessoa que sirva de placeholder até a foto profissional.
**Ação:** Murillo fornece ou aprova imagem placeholder. Não usar imagem sem direito de uso.

---

## Pendências Comerciais (Não são tasks da sprint, mas bloqueiam conversão)

| ID | Pendência | Responsável | Impacto |
|----|-----------|------------|---------|
| P1 | Transfer 24h com `preco: null` em `data/servicos.ts` | Murillo confirma preço | Página exibe "Consultar" — perde conversão direta |
| P2 | Foto profissional de Murillo | Murillo | MurilloBlock sem foto real |
| P3 | Depoimentos reais (nome + cidade + data, mín. 2) | Murillo | ReviewsBlock vazio |
| P4 | Fotos reais dos 5 passeios prioritários | Murillo | PasseioCard sem imagem real |
| P5 | Validação dados maré maio/2026 (`revisadoPorMurillo: false`) | Murillo | ProximaSaidaCard mostra fallback |
| P6 | Vídeo hero (`hero-jampa.webm`, `.mp4`) | Murillo / produção | HomeVideoHero sem vídeo |

---

## Próxima Tarefa Recomendada

**S4 — Integrar TrustBlock nas páginas de passeio.**
Impacto direto na conversão. Componente pronto. Zero risco. Aprovação de Murillo necessária antes de editar `_site/app/passeios/[categoria]/[slug]/page.tsx`.
