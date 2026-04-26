---
skill: briefing-designer
versao: 1.0
projeto_id: pagina-seixas-2026-04-26
etapa: 5b de 6
tipo: resumo-operacional-figma
status: PRONTO — para execução no Figma
data: 2026-04-26
fonte: _site/planejamento/seixas/05-briefing-designer.md (v3.1)
---

# Resumo Operacional — Figma · Piscinas Naturais do Seixas

**URL da página:** `/passeios/piscinas-naturais/seixas`
**Domínio:** `https://vempassearjampa.com.br`
**Canal de conversão:** WhatsApp `https://wa.me/558399087830`
**Preço:** R$ 60 por pessoa · **Duração:** ~3h30 · **Embarque:** Praia de Tambaú, próximo ao Hotel Tambaú

> Para detalhes completos de cada bloco (copy exata, specs de cor, comportamento JS), consultar `05-briefing-designer.md`.

---

## 1. Ordem dos Blocos da Página

Mobile, de cima para baixo:

| Posição | ID | Nome | Observação |
|---------|----|------|-----------|
| sticky | C1 | Header | Logo + botão WhatsApp — sempre visível |
| 1 | C2 | Hero | Foto + H1 + CTA primário verde |
| — | — | Breadcrumb | Abaixo do hero, fora do overlay |
| 2 | C3 | Info Card | R$ 60 / ~3h30 / Tambaú — 3 colunas |
| 3 | C4 | Aviso de Maré | Bloco âmbar educativo |
| 4 | C5 | Por Que Confiar | Cadastur + 4.9/5 + Murillo — fundo escuro |
| 5 | I1 | Lead | Gancho textual, sem título visual |
| 6 | I2 | O Que Você Vai Fazer | Descrição sensorial + imagem opcional |
| 7 | I3 | Roteiro Narrativo | 5 etapas com ícone emoji |
| 8 | I4 | Incluso / Não Incluso | Dois checklists |
| 9 | I5 | FAQ Accordion | 7 perguntas |
| 9.5 | I5.5 | CTA Secundário | Botão WhatsApp leve, pós-FAQ |
| 10 | S1 | Depoimento | Quote block, fundo `#F5F5F5` |
| 11 | S2 | Informações Práticas | O que levar + embarque + horário |
| 12 | S3 | CTA Final | Fundo `#004E89` + botão WhatsApp grande |
| 13 | S4 | Passeios Similares | 2 ou 3 cards (ver seção 7) |
| — | S5 | Footer | Logo branco + Cadastur + links + WhatsApp |
| fixed | — | CTA Sticky | Botão fixo no bottom — mobile only |

---

## 2. Prioridade Visual de Cada Bloco

| Prioridade | Blocos |
|-----------|--------|
| 🔴 CRÍTICO | Header (C1), Hero (C2), Info Card (C3), Por Que Confiar (C5), CTA Sticky |
| 🟠 IMPORTANTE | Aviso de Maré (C4), Lead + Descrição (I1+I2), FAQ (I5), CTA Secundário (I5.5) |
| 🟡 SUPORTE | Roteiro (I3), Incluso/Não Incluso (I4), Depoimento (S1), CTA Final (S3) |
| 🟢 RETENÇÃO | Passeios Similares (S4), Footer (S5) |

Perfeccionar blocos 🔴 antes de refinar blocos 🟡 e 🟢.

---

## 3. Componentes Principais

18 componentes — **usar estes nomes exatos no Figma**. O programador usará os mesmos nomes na implementação.

| Componente | Prioridade | Reutilizável em |
|-----------|-----------|----------------|
| `Header` | P0 | Todas as páginas |
| `HeroBlock` | P0 | Páginas de passeio |
| `Breadcrumb` | P0 | Todas as páginas internas |
| `InfoCard` | P0 | Páginas de passeio |
| `TrustBlock` | P0 | Todas as páginas de passeio |
| `IncluidoBlock` | P0 | Páginas de passeio |
| `FAQAccordion` | P0 | Passeios + FAQ centralizada |
| `CTAFinal` | P0 | Todas as páginas |
| `PasseioCard` | P0 | Clusters + similares + home |
| `CTASticky` | P0 | Páginas de passeio — mobile only |
| `MaréAlert` | P1 | Seixas, Penha, Picãozinho, Areia Vermelha |
| `LeadText` | P1 | Páginas de passeio |
| `DescricaoBlock` | P1 | Páginas de passeio |
| `RoteiroBullets` | P1 | Páginas de passeio |
| `CTASecundario` | P1 | Páginas de passeio |
| `DepoimentoBlock` | P1 | Páginas de passeio |
| `InfoPratica` | P1 | Páginas de passeio |
| `Footer` | P0 | Todas as páginas |

**P0** = obrigatório para lançar Seixas · **P1** = importante, pode vir logo após

Cada componente deve estar em frame separado com props explicitadas.

---

## 4. Imagens Necessárias

| ID | Uso | Dimensão mínima | Formato | Status |
|----|-----|----------------|---------|--------|
| `hero-seixas` | Hero (C2) | 1920×600px | WebP + JPG | 🔴 `[CONFIRMAR MURILLO]` |
| `descricao-seixas` | Bloco I2 (opcional) | 800×400px | WebP + JPG | 🔴 `[CONFIRMAR MURILLO]` |
| `avatar-murillo` | TrustBlock (C5) | 96×96px | WebP | 🟠 `[CONFIRMAR MURILLO]` |
| `avatar-cliente` | Depoimento (S1) | 96×96px | WebP | 🟠 `[CONFIRMAR MURILLO]` |
| `card-penha` | Similares (S4) | 600×320px | WebP + JPG | 🟠 `[CONFIRMAR MURILLO]` |
| `card-picaozinho` | Similares (S4) | 600×320px | WebP + JPG | 🟠 `[CONFIRMAR MURILLO]` |
| `logo-vem-passear` | Header (colorida) + Footer (branca) | SVG | SVG | Confirmar versão branca |

### Placeholders para o Figma

| Imagem | Placeholder |
|--------|------------|
| Hero | Gradiente `#004E89 → #1a1a1a` + caption `[FOTO SEIXAS]` em branco/30%, centralizado |
| Avatar Murillo | Iniciais "MA" em círculo `#FF6B35`, texto branco |
| Avatar cliente | Iniciais do nome em círculo `#FF6B35`, texto branco |
| Depoimento | Texto itálico cinza: *"Depoimento em breve."* |

### Alt texts exatos (não alterar)

| Imagem | Alt text |
|--------|---------|
| Hero | `Piscinas naturais de Seixas com coral e água cristalina durante maré baixa em João Pessoa` |
| Descrição I2 | `Turistas flutuando nas piscinas naturais de Seixas durante maré baixa em João Pessoa, Paraíba` |
| Avatar Murillo | `Murillo, guia local da Vem Passear em Jampa, com turistas no passeio de Seixas em João Pessoa` |
| Card Penha | `Piscinas Naturais da Penha em João Pessoa — passeio exclusivo` |
| Card Picãozinho | `Picãozinho em João Pessoa — aquário natural a 1.500m de Tambaú` |

### Specs técnicas de imagem

- Máximo < 200KB por imagem após compressão
- Hero: `loading="eager"` (LCP crítico) · demais: `loading="lazy"`
- `width` e `height` sempre definidos — evita CLS
- `object-fit: cover` em todas · hero: `object-position: center 30%`

---

## 5. Estados Mobile (base: 320px)

### Specs por bloco

| Bloco | Dimensão / Layout | Detalhe crítico |
|-------|------------------|----------------|
| Header | `height: 56px`, sticky top | Tap target botão WA ≥ 44px |
| Hero | Full-width, `height: 350px` | H1 `1.75rem` (28px) · CTA `height: 52px` · `loading: eager` |
| Breadcrumb | Full-width, `font-size: 0.75rem` | Item ativo em `#FF6B35`, não clicável · links anteriores em `#004E89` |
| Info Card | 3 colunas fixas, `height: ~100px` | **Nunca empilhar** — label `0.6875rem` se apertar em 320px |
| Aviso de Maré | Full-width, `padding: 16px` | Fundo `#FEF3C7` · borda-left `4px solid #F59E0B` · `role="note"` |
| Por Que Confiar | Stack vertical, fundo `#1a1a1a` | 3 itens empilhados · texto branco · padding `24px 16px` |
| Lead | Full-width, `padding: 24px 16px` | Sem título visual · sem imagem · `font-size: 1rem`, `line-height: 1.7` |
| Descrição | Full-width, imagem abaixo do texto | Imagem `height: 200px`, `border-radius: 8px`, `loading: lazy` |
| Roteiro | Stack, `border-bottom: 1px solid #E5E7EB` | Ícones emoji — não substituir por SVG |
| Incluso | Stack — incluso primeiro | ✅ verde (item incluso) · ❌ cinza `#9CA3AF` (não incluso) |
| FAQ | Full-width, `min-height: 52px` por item | Chevron `#FF6B35` · rota 180° ao abrir · 1 item aberto por vez |
| CTA Secundário | Botão `width: 100%` | `padding: 16px` · tom discreto — não seção em destaque |
| Depoimento | Full-width, fundo `#F5F5F5` | Aspas decorativas `#FF6B35`, opacidade 30% |
| Info Prática | 1 coluna | Endereço confirmado: *"Praia de Tambaú, próximo ao Hotel Tambaú"* |
| CTA Final | Full-width, `padding: 40px 16px` | Fundo `#004E89` · botão `#25D366` · `height: 52px` |
| Similares | 1 coluna, cards full-width | Layout para 2 e para 3 cards |
| Footer | Stack vertical, fundo `#1a1a1a` | Texto branco · links em coluna |
| CTA Sticky | `position: fixed; bottom: 0; height: 56px; width: 100%` | Fundo `#25D366` · `z-index: 999` |

### Lógica do CTA Sticky

| Estado | Comportamento |
|--------|--------------|
| Oculto (default) | `transform: translateY(100%)` |
| Visível (após hero sair do viewport) | `transform: translateY(0)` · `transition: 300ms ease` |
| Some (CTA Final entra no viewport) | `transform: translateY(100%)` |
| Desktop | `display: none` permanente |

### Os 5 primeiros segundos no mobile

1. Header com botão WhatsApp visível
2. Foto hero (ou placeholder gradiente) ocupando a tela
3. H1 legível sem zoom
4. CTA verde grande — ação óbvia
5. Info Card: R$ 60 / ~3h30 / Tambaú

---

## 6. Estados Desktop (≥ 1024px)

**Container global:** `max-width: 1200px; margin: 0 auto; padding: 0 24px`

| Bloco | Mudança em relação ao mobile |
|-------|----------------------------|
| Header | Adiciona links de navegação (Passeios / Sobre / Contato) |
| Hero | `height: 600px` · H1 `2.75rem` (44px) |
| Info Card | Padding `32px` · ícones `32px` |
| Aviso de Maré | `max-width: 800px`, centralizado |
| Por Que Confiar | Stack vertical → Grid 3 colunas horizontais |
| Lead | Full-width → `max-width: 720px`, centralizado |
| Descrição + Imagem | 1 coluna → Split 60/40 (texto esquerda, imagem direita) |
| Roteiro | `max-width: 720px` |
| Incluso | Stack 1 coluna → 2 colunas lado a lado, mesmo height |
| FAQ | `max-width: 720px` |
| CTA Secundário | `max-width: 480px`, centralizado |
| Depoimento | `max-width: 600px`, centralizado |
| CTA Final | `max-width: 600px`, centralizado |
| Similares | 1 coluna → Grid 2 colunas, `gap: 24px` |
| **CTA Sticky** | **`display: none` — sempre oculto** |

**Sem sidebar CTA flutuante** — não implementar nesta fase.

### Estados interativos a documentar no Figma

| Elemento | Hover | Focus | Active |
|---------|-------|-------|--------|
| Botão WhatsApp | `#1EA952` (verde mais escuro) | `outline: 2px solid #25D366; outline-offset: 2px` | `#167A3C` |
| FAQ item | Fundo `#F9FAFB` | `outline: 2px solid #FF6B35` | — |
| Card passeio | `box-shadow` mais pronunciado · nome em `#004E89` | `outline: 2px solid #004E89` | — |
| Header link | `color: #FF6B35` | `outline: 2px solid #0066CC` | — |

---

## 7. Itens que Ainda Estão como `[CONFIRMAR]`

| # | Dado | Onde impacta | Placeholder no Figma | Urgência |
|---|------|-------------|---------------------|---------|
| 1 | Foto real de Seixas (hero + I2) | Hero (C2), Bloco I2 | Gradiente `#004E89→#1a1a1a` + caption `[FOTO SEIXAS]` | 🔴 Alta — bloqueante para aprovação final |
| 2 | Aprovação do texto da política de cancelamento | FAQ P7 | *"Nossa política de cancelamento está sendo publicada. Fale com a gente no WhatsApp."* itálico cinza | 🟠 Média — base criada, aguarda Murillo |
| 3 | Depoimento real (texto + nome + cidade + data) | Depoimento (S1) | *"Depoimento em breve."* itálico cinza | 🟠 Média |
| 4 | Foto / avatar de Murillo | TrustBlock (C5) | Iniciais "MA" em círculo `#FF6B35` | 🟠 Média |
| 5 | Número de cards em Passeios Similares (2 ou 3?) | S4 | Designer prepara layout para 2 e para 3 | 🟠 Média |
| 6 | Número exato de avaliações Google | TrustBlock (C5) | *"O que os clientes sempre dizem: atendimento rápido..."* | 🟡 Baixa |
| 7 | Anos de experiência de Murillo | TrustBlock (C5) | Usar a partir de: *"Conhece cada maré, cada coral..."* | 🟡 Baixa |
| 8 | Bar a bordo: alimentos ou só bebidas? | Roteiro (I3) | `[CONFIRMAR]` inline no texto | 🟡 Baixa |
| 9 | Protetor solar mineral recomendado? | Info Prática (S2) | "biodegradável" genérico | 🟡 Baixa |

### Já confirmados — usar direto no Figma

| Dado | Valor confirmado |
|------|-----------------|
| Ponto de embarque | Praia de Tambaú, próximo ao Hotel Tambaú (localização exata no voucher) |
| Crianças / FAQ P6 | Sem idade mínima — crianças acompanhadas por responsável |
| WhatsApp | +55 83 9908-7830 · `https://wa.me/558399087830` |
| Cadastur | 52.077.577 — Ativo |
| Rating | 4.9/5 no Google |
| Preço | R$ 60 por pessoa |
| Duração | ~3h30 |

---

## 8. Checklist Final do Designer

Verificar cada item antes de entregar o Figma para aprovação de Murillo.

### Conteúdo

- [ ] H1 exato: `Piscinas Naturais do Seixas, João Pessoa — Snorkel em Água Cristalina` — não alterar
- [ ] Preço `R$ 60 por pessoa` no Info Card e FAQ P3
- [ ] Duração `~3h30` no Info Card e FAQ P5
- [ ] Embarque `Praia de Tambaú, próximo ao Hotel Tambaú` no Info Card, Roteiro e Info Prática
- [ ] Cadastur `52.077.577 — Ativo` no TrustBlock
- [ ] Rating `4.9/5 no Google` no TrustBlock
- [ ] Link WhatsApp em todos os CTAs: `https://wa.me/558399087830?text=Oi, quero saber sobre o passeio de Seixas`
- [ ] Breadcrumb labels exatos: `Início > Piscinas Naturais em João Pessoa > Piscinas Naturais do Seixas`
- [ ] Placeholders `[CONFIRMAR]` visíveis nos frames — nunca ocultar, nunca inventar conteúdo

### Visual e paleta

- [ ] Paleta restrita: `#FFFFFF`, `#1a1a1a`, `#FF6B35`, `#004E89`, `#25D366`, `#F5F5F5`, `#FEF3C7`, `#F59E0B`
- [ ] Fontes: Inter (body) + Lora (headings)
- [ ] Body mínimo `1rem` (16px) · labels mínimo `0.75rem` (12px)
- [ ] Aviso de Maré: fundo `#FEF3C7` (âmbar) — nunca vermelho, nunca verde
- [ ] CTA Final: fundo `#004E89` (azul oceano) — não `#1a1a1a`
- [ ] Botão WhatsApp padrão: `#25D366` · hover: `#1EA952`

### Mobile (320px)

- [ ] Info Card com 3 colunas — nunca empilhado
- [ ] Hero: H1 legível sem zoom · CTA primário visível sem scroll
- [ ] Todos os botões e links interativos ≥ 44px de altura (tap target)
- [ ] CTA Sticky documentado com estado visível e oculto
- [ ] FAQ: `min-height: 52px` por item · abre com toque (não hover)
- [ ] Nenhum overflow horizontal em 320px

### Acessibilidade

- [ ] Contraste texto/fundo ≥ 4.5:1 (WCAG AA) em todos os blocos
- [ ] Focus states visíveis em todos os elementos interativos
- [ ] FAQ: `aria-expanded` e `aria-controls` anotados nos frames
- [ ] Aviso de Maré: `role="note"` anotado
- [ ] CTA Sticky: `aria-label="Reservar no WhatsApp"` anotado
- [ ] Incluso/Não Incluso: ícone ✅❌ presente — cor nunca é o único diferenciador

### Componentes

- [ ] 18 componentes nomeados exatamente como na seção 3
- [ ] Props de cada componente explicitadas nos frames
- [ ] Placeholder hero (gradiente azul escuro) aprovado visualmente
- [ ] Placeholder depoimento presente e identificado
- [ ] Fallback avatar Murillo (iniciais "MA" em círculo `#FF6B35`) presente
- [ ] Layout de Passeios Similares preparado para 2 E para 3 cards

### Entrega do Figma

- [ ] Telas mobile 375px + desktop 1280px para todos os 18 blocos
- [ ] Componentes em frames separados com nomenclatura exata
- [ ] Estados interativos documentados: hover, focus, active, sticky, accordion
- [ ] Tokens de espaçamento (gaps, paddings) explicitados
- [ ] Assets exportados: ícones SVG, logo colorida + branca, imagens < 200KB

---

**Ponto de pausa obrigatório:** Designer entrega Figma → Murillo aprova → Etapa 6 `programador-de-site` começa.

O único bloqueante real para aprovação final é a **foto hero real de Seixas**. Todo o restante pode ser executado com os placeholders documentados acima.

---

*Versão: 1.0 | Data: 2026-04-26 | Fonte: 05-briefing-designer.md v3.1*
*Não alterar arquivos 01 a 05 — este documento é derivado, não fonte de verdade.*
