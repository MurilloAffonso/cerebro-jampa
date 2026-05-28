# Memória: Próximos Passos

**Sprint única ativa:** 2026-05-06 → 2026-05-20
**Foco:** transformar tráfego em lead registrado = página de passeio + GMB + lead no CSV
**Histórico anterior:** ver `_memoria/_arquivo/`

---

## Trilha Única (ordem rígida)

| # | Ação | Critério de pronto | Status |
|---|------|--------------------|--------|
| 1 | Limpeza de git (~30 arquivos pendentes) | Working tree limpa, 1-2 commits temáticos | ✅ feito 2026-05-06 (`e350a31`, `7cf8e37`) |
| 2 | Arquivar `prioridades.md` + reescrever `proximos-passos.md` | Memória reflete sprint única | 🔄 em execução |
| 3 | Página **Areia Vermelha** | Live, type-check ✅, schema FAQ + TouristAttraction | ✅ feito 2026-05-06 |
| 4 | Página **Litoral Sul Clássico** | Live, type-check ✅, reusa decisões da #3 | ✅ feito 2026-05-06 |
| 5 | **GMB otimização completa** | Descrição + 5 fotos + 5 Q&A + push de avaliação. GMB Insights mostrando aumento de impressões em 7 dias | 🔄 conteúdo pronto em `_memoria/gmb-otimizacao-2026-05.md` — execução manual no painel GMB com Murillo |
| 6 | **Registro manual de leads no CSV** | 15+ leads em `_crm/leads.csv` ao final da sprint, gerados via skill `qualificacao-lead` | ⏳ |
| 7 | **Retrospectiva da sprint** | 30 min lendo o CSV. Atualizar `_conhecimento/objecoes.md` e `_conhecimento/motivos-de-perda.md` com padrão #1 real de cada | ⏳ |

---

## O Que Está Pausado (não tocar nesta sprint)

- ❌ Jarvis / n8n / `.bat` workflows
- ❌ Blog (Maré, Época, O Que Levar)
- ❌ Social media editorial (reel/carrossel)
- ❌ i18n EN
- ❌ TripAdvisor / Viator / Evolution API
- ❌ Lovable (já congelada)
- ❌ Design system v1.2 — usar só o que existe; não expandir
- ❌ Importador automático CHM v2.0
- ❌ Pendências doctor P1, P2, P3 (baixo impacto, retomar depois)
- ❌ Redesign

---

## Próximo Passo Imediato

**Frente nova — Fotos reais nas galerias** (consequência direta da Decisão 44 em `decisoes-estrategicas.md`).

**Contexto:** Decisão 44 publicada em `origin/main` no commit `77603b9` (2026-05-12). A galeria v3 já garante ≥ 4 fotos por passeio via fallback ilustrativo (helper `getPasseioGalleryImages` em `_site/lib/gallery.ts`). O fallback usa hero JPGs cruzados entre passeios com caption "Foto ilustrativa · Vem Passear em Jampa" — funciona, mas o ideal é cada passeio mostrar fotos da própria experiência.

**Critério de pronto:** pelo menos os 3 passeios prioritários da Fase 1 com `galleryImages` populado por ≥ 4 fotos reais específicas. Quando há ≥ 4 fotos reais, o helper para de injetar fallback automaticamente.

**Passeios prioritários (ordem):**
1. **Seixas** (piscinas-naturais/seixas) — hoje só tem hero SVG placeholder. Maior ganho visual.
2. **Areia Vermelha** (litoral-norte/areia-vermelha-catamara) — hoje tem hero JPG real + 3 fallback. Trocar 3 fallback por fotos do banco de areia.
3. **Picãozinho** (piscinas-naturais/picaozinho) — hoje tem hero JPG real + 3 fallback. Igual ao Areia Vermelha.

**Como executar (passo a passo já documentado):**
1. Subir JPG/WebP em `_site/public/images/passeios/[slug]/` seguindo o padrão de nomes do README (`[slug]-gallery-NN-descricao.jpg`).
2. Popular `galleryImages: [{ src, alt, caption? }, ...]` no `_site/data/passeios.ts` do passeio correspondente.
3. `npm run type-check` + `npm run build`.
4. Validar visualmente: `npm run dev` → abrir a página → conferir que a caption "Foto ilustrativa" sumiu e a galeria mostra só fotos do passeio.

**Bloqueio único:** dependemos de Murillo aprovar/enviar as fotos. Sem fotos reais aprovadas, não avança.

**Outras frentes anteriores ainda abertas (não bloqueiam):**
- **#5 GMB** — checklist em `_memoria/gmb-otimizacao-2026-05.md`, execução manual no painel.
- **#6 Registro de leads no CSV** — em paralelo.

---

---

## Sessão 2026-05-28 — Concluído (6 commits)

- ✅ robots.txt duplicado removido
- ✅ Snippets e FAQ de posts estratégicos melhorados
- ✅ Twitter cards + H2 SEO na home
- ✅ Altura da maré visível no mobile
- ✅ Tabela de marés responsiva (CSS card layout mobile)
- ✅ CTA humanizado, 2 FAQs novas, links de alternativa sem maré

## Próximo Passo Imediato (pós 2026-05-28)

1. **Validar GSC em 7–14 dias** — observar CTR, indexação, novas keywords
2. **Fotos reais** — Murillo envia JPGs → popular `galleryImages` (Seixas, Areia Vermelha, Picãozinho)
3. **GMB** — executar checklist em `_memoria/gmb-otimizacao-2026-05.md`
4. **Leads CSV** — registrar primeiros leads com skill `qualificacao-lead`
5. **Próxima frente técnica** — definir após validação Vercel/GSC

*Atualizado: 2026-05-28*
