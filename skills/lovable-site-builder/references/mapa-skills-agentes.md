# Mapa de Skills e Agentes — Lovable Site Builder

**Uso:** Consultar este mapa para saber qual skill acionar (ou o que extrair de seus outputs já produzidos) em cada etapa da montagem do briefing Lovable.
**Regra:** Não reexecutar skill cujo output já estiver aprovado em `_site/planejamento/`. Reutilizar o que já existe.

---

## Decisão Rápida: Preciso Rodar a Skill ou Já Tem Output?

```
Objetivo: coletar dados para o briefing Lovable

1. Verificar _site/planejamento/[passeio]/ — tem arquivos 01 a 05b?
   SIM → extrair dados dos arquivos existentes, não reexecutar skill
   NÃO → identificar quais etapas faltam (tabela abaixo) e recomendar execução

2. Se falta apenas um arquivo → acionar skill específica
3. Se falta 2+ → acionar orquestrador para planejar sequência
```

---

## Mapa Completo

### 0. Orquestrador — `orquestrador-projeto-turismo`

| | |
|-|-|
| **Quando acionar** | Objetivo envolve 2+ skills ou pipeline não está claro |
| **Contribuição para Lovable** | Plano ordenado de quais skills executar antes de montar o pacote |
| **Output que consome** | Aprova e sequencia → lovable-site-builder monta pacote após aprovação |
| **Arquivo de output** | Nenhum arquivo permanente — plano é apresentado no chat para aprovação |
| **Consultar SKILL.md** | `skills/orquestrador-projeto-turismo/SKILL.md` |

---

### 1. Estrategista de Site — `estrategista-de-site`

| | |
|-|-|
| **Quando acionar** | Arquitetura da página ainda não definida |
| **Contribuição para Lovable** | URL canônica, posição na hierarquia, links internos, jornada de conversão, cluster pai |
| **Output que consome** | `_site/planejamento/01-estrategista-de-site.md` |
| **Dados extraídos** | slug, URL, categoria, cluster pai, passeios relacionados, jornada (descoberta → decisão → contato) |
| **Consultar SKILL.md** | `skills/estrategista-de-site/SKILL.md` |
| **Bloco do pacote** | §1 Identificação, §10 Links Internos |

---

### 2. Copywriter de Vendas — `copywriter-vendas`

| | |
|-|-|
| **Quando acionar** | Copy da página não existe ou não está aprovada |
| **Contribuição para Lovable** | Headline, subheadline, lead, blocos de copy, CTA, argumentos de venda, FAQ copy, tom comercial |
| **Output que consome** | `_site/planejamento/02a-copywriter-vendas.md` |
| **Dados extraídos** | Hero copy, Por Que Confiar, Lead, O Que Você Vai Fazer, Roteiro, Informações Práticas, FAQ, Depoimento, CTAs |
| **Consultar SKILL.md** | `skills/copywriter-vendas/SKILL.md` |
| **Bloco do pacote** | §8 Copy por Bloco |

---

### 3. UX/UI Mobile-First — `ux-ui-mobile-first`

| | |
|-|-|
| **Quando acionar** | Wireframe não existe ou hierarquia de blocos não está definida |
| **Contribuição para Lovable** | Ordem dos blocos (mobile), sticky CTA, navegação, hierarquia visual, breakpoints, comportamento responsivo |
| **Output que consome** | `_site/planejamento/02b-ux-ui-mobile-first.md` |
| **Dados extraídos** | Sequência de blocos (S1→S12), comportamento sticky CTA, breakpoints (320/768/1024px) |
| **Consultar SKILL.md** | `skills/ux-ui-mobile-first/SKILL.md` |
| **Bloco do pacote** | Briefing Lovable §2 (Hierarquia de Blocos) |

---

### 4. SEO Local Turismo — `seo-local-turismo`

| | |
|-|-|
| **Quando acionar** | Meta tags e schema ainda não gerados |
| **Contribuição para Lovable** | title, meta description, H1/H2/H3, FAQ SEO, palavras-chave, schema JSON-LD, alt text de imagens |
| **Output que consome** | `_site/planejamento/04-seo-local-turismo.md` |
| **Dados extraídos** | title, meta description, H1 exato, lista de H2s, FAQ com schema, keywords primárias e secundárias |
| **Consultar SKILL.md** | `skills/seo-local-turismo/SKILL.md` |
| **Bloco do pacote** | §7 SEO |
| **Importante** | O Lovable não gera schema JSON-LD — esse dado vai para o handoff do programador |

---

### 5. Diretor Visual de Turismo — `diretor-visual-turismo`

| | |
|-|-|
| **Quando acionar** | Direção visual da página ainda não validada |
| **Contribuição para Lovable** | Paleta, clima visual, tipos de imagem, referências de cards, experiência emocional da página |
| **Output que consome** | Validação visual em `_site/planejamento/03-ux-ui-ou-visual.md` (se existir) |
| **Dados extraídos** | Paleta aprovada (#FF6B35, #004E89), clima (confiança + nordeste + mar), direção de imagem, componentes visuais |
| **Consultar SKILL.md** | `skills/diretor-visual-turismo/SKILL.md` |
| **Bloco do pacote** | Briefing Lovable §3 (Direção Visual) |

---

### 6. Briefing Designer — `briefing-designer`

| | |
|-|-|
| **Quando acionar** | Necessidade de instrução detalhada de componentes visuais para o Lovable |
| **Contribuição para Lovable** | Especificação de componentes, restrições de design, instruções para Figma/Lovable, estados de componente |
| **Output que consome** | `_site/planejamento/05-briefing-designer.md` |
| **Dados extraídos** | Componentes (HeroBlock, InfoCard, FAQAccordion, ProximaSaidaCard), especificações de padding/tipografia, estados |
| **Consultar SKILL.md** | `skills/briefing-designer/SKILL.md` |
| **Bloco do pacote** | Briefing Lovable §4 (Componentes) |
| **Nota** | briefing-designer e lovable-site-builder têm overlap — se briefing-designer já produziu output, extrair dali sem reexecutar |

---

### 7. Programador de Site — `programador-de-site`

| | |
|-|-|
| **Quando acionar** | Handoff pós-Lovable: revisar e adaptar código gerado pelo Lovable para Next.js |
| **Contribuição para Lovable** | Compatibilidade com Next.js, componentes existentes, rotas, dados em `data/passeios.ts` |
| **Output que consome** | Código exportado do Lovable via GitHub |
| **Dados extraídos (para o prompt)** | Stack: Next.js 14 App Router, Tailwind CSS, TypeScript; componentes: HeroBlock, InfoCard, FAQAccordion, ButtonPrimary |
| **Consultar SKILL.md** | `skills/programador-de-site/SKILL.md` |
| **Bloco do pacote** | §12 Dados Técnicos + Entrega 5 Handoff |
| **Posição no fluxo** | Após Lovable → GitHub → Claude Code revisa com programador-de-site |

---

### 8. Tábua de Marés Turismo — `tabua-mares-turismo`

| | |
|-|-|
| **Quando acionar** | Passeio tem `dependeDeMare: true` (Seixas, Picãozinho, Areia Vermelha) |
| **Contribuição para Lovable** | Próxima saída, calendário de ciclos, texto do MareAlert, componente ProximaSaidaCard |
| **Output que consome** | `_site/data/tabua-mares.ts`, `_site/planejamento/tabua-mares/` |
| **Dados extraídos** | horarioSaidaExibido, cicloId, janelas do mês, status operacional, texto MareAlert |
| **Consultar SKILL.md** | `skills/tabua-mares-turismo/SKILL.md` |
| **Bloco do pacote** | §5 Regra de Maré |
| **Regra inviolável** | Se `dependeDeMare: true` e dados ausentes → **parar e acionar tabua-mares-turismo antes de continuar** |
| **Importante para Lovable** | O Lovable pode renderizar o componente ProximaSaidaCard como card visual — mas a lógica de cálculo de maré fica no Next.js. Nunca hardcodar data de saída no prompt Lovable. |

---

### 9. Radar de Concorrentes Social — `radar-concorrentes-social`

| | |
|-|-|
| **Quando acionar** | Necessário benchmark visual/conteúdo antes de definir direção da página |
| **Contribuição para Lovable** | Referências públicas de concorrentes, gaps de posicionamento, ideias de seções diferenciadoras |
| **Output que consome** | `_conhecimento/concorrentes.md`, `_conhecimento/instagram-benchmark.md` |
| **Dados extraídos** | O que concorrentes têm que Vem Passear pode diferenciar na estrutura da página |
| **Consultar SKILL.md** | `skills/radar-concorrentes-social/SKILL.md` |
| **Bloco do pacote** | Opcional — enriquece Briefing Lovable §3 se houver análise recente |
| **Quando pular** | Análise de concorrentes não é necessária para todas as páginas — pular se objetivo é só montar prompt |

---

### 10. Social Media Editorial Turismo — `social-media-editorial-turismo`

| | |
|-|-|
| **Quando acionar** | Página tem conexão com Instagram ou conteúdo reaproveitável para social |
| **Contribuição para Lovable** | Linguagem social, tom de voz para copy curta, blocos de prova social (stories, depoimentos) |
| **Output que consome** | `_memoria/decisoes-estrategicas.md §16` (Instagram), `_conhecimento/tom-de-voz.md` |
| **Dados extraídos** | Tom social aprovado, referência de linguagem Instagram para CTAs informais |
| **Consultar SKILL.md** | `skills/social-media-editorial-turismo/SKILL.md` |
| **Bloco do pacote** | Opcional — enriquece §8 Copy nos CTAs informais |
| **Quando pular** | Para maioria das páginas de passeio, `copywriter-vendas` já cobre o tom. Pular se não houver integração social planejada. |

---

## Ordem Recomendada para Montar o Pacote Lovable

```
FASE 1 — Dados (paralelo permitido)
  ↓ 1. estrategista-de-site     → slug, URL, jornada, links internos
  ↓ 2. copywriter-vendas        → todo o copy por bloco
  ↓ 3. ux-ui-mobile-first       → hierarquia de blocos, wireframe
  ↓ 4. tabua-mares-turismo      → se dependeDeMare: true (obrigatório antes de copy)

FASE 2 — Validação Visual (sequencial)
  ↓ 5. diretor-visual-turismo   → paleta, clima, imagens
  ↓ 6. seo-local-turismo        → title, meta, H1/H2, FAQ schema

FASE 3 — Briefing (sequencial)
  ↓ 7. briefing-designer        → componentes, especificações
  ↓ 8. lovable-site-builder     → monta pacote + gera prompt Lovable

PÓS-LOVABLE
  ↓ 9. programador-de-site      → revisa código gerado pelo Lovable no Claude Code
```

---

*Versão: 1.0 | Criado: 2026-04-27 | Skill: lovable-site-builder*
