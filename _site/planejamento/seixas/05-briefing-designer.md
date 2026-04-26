---
skill: briefing-designer
versao: 3.1
projeto_id: pagina-seixas-2026-04-26
etapa: 5 de 6
status: CONCLUÍDA — aguardando execução em Figma por designer + aprovação de Murillo
data: 2026-04-26
ponto_de_pausa: true
proxima_etapa: programador-de-site (somente após Figma aprovado por Murillo)
fontes_consultadas:
  - _site/planejamento/seixas/01-estrategia-site.md
  - _site/planejamento/seixas/02a-copywriter-vendas.md (v3.1)
  - _site/planejamento/seixas/02b-ux-ui-mobile-first.md (v1.2)
  - _site/planejamento/seixas/03-diretor-visual-turismo.md (v2.1)
  - _site/planejamento/seixas/04-seo-local-turismo.md (v1.1)
  - skills/briefing-designer/SKILL.md (v3.1)
tokens_confirmados:
  primary: "#FF6B35"
  secondary: "#004E89"
  dark: "#1a1a1a"
  whatsapp_green: "#25D366"
  white: "#FFFFFF"
  light: "#F5F5F5"
  amber_bg: "#FEF3C7"
  amber_border: "#F59E0B"
---

# Briefing de Designer — Piscinas Naturais do Seixas

**Entrega da Etapa 5 — `briefing-designer`**
**URL da página:** `/passeios/piscinas-naturais/seixas`
**Domínio:** `https://vempassearjampa.com.br`
**Próxima etapa:** Designer executa em Figma → Murillo aprova → Etapa 6 `programador-de-site`

> **Como usar este documento:** Leia uma vez do início ao fim antes de abrir o Figma. Cada seção explica a **intenção** do bloco — você executa o design. Lacunas marcadas com `[CONFIRMAR]` indicam dados que chegam depois; use os placeholders indicados e deixe espaço para substituição sem quebrar o layout.

> **Ponto de pausa obrigatório:** Esta etapa aguarda execução e aprovação do Figma por Murillo antes de acionar `programador-de-site`.

---

## 1. RESUMO EXECUTIVO

| Campo | Valor |
|-------|-------|
| **Página** | Piscinas Naturais do Seixas |
| **URL** | `/passeios/piscinas-naturais/seixas` |
| **Domínio** | `https://vempassearjampa.com.br` |
| **Objetivo central** | Converter turista que chegou pelo Google em reserva via WhatsApp em menos de 3 cliques |
| **Persona primária** | Turista chegando em João Pessoa pela primeira vez, nunca fez snorkel, quer experiência segura e autêntica |
| **Ação esperada** | Turista lê página → confia → clica botão WhatsApp → reserva |
| **Canal de conversão** | WhatsApp exclusivo: `https://wa.me/558399087830` |
| **Preço confirmado** | R$ 60 por pessoa |
| **Duração confirmada** | ~3h30 |
| **Embarque confirmado** | Praia de Tambaú, João Pessoa |
| **Stack** | Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS |
| **Fase** | 1 — mobile-first, sem vídeo, sem animações pesadas |

---

## 2. OBJETIVO DA PÁGINA

A página tem **uma única missão:** converter leitura em reserva via WhatsApp.

Não é página de branding. Não é portfólio. É uma página de vendas que converte com honestidade — mostra o preço, avisa sobre a maré, apresenta o guia real, e dá ao turista um motivo sólido para confiar antes de clicar.

**O fluxo que o design precisa garantir:**

```
Turista busca "seixas joão pessoa"
        ↓
Chega na página (via Google — 70-80% no mobile)
        ↓
5 segundos: vê foto + H1 + preço + botão verde
        ↓
Scroll: vê Cadastur + 4.9/5 + Murillo (confiança estabelecida)
        ↓
Scroll: lê o que vai fazer, o que está incluso, FAQ (objeções quebradas)
        ↓
Clica WhatsApp → reserva
```

**Critério de sucesso:** Turista com 30 segundos disponíveis encontra o botão de WhatsApp sem fricção, sem confusão, sem precisar fazer scroll reverso.

---

## 3. PÚBLICO-ALVO E INTENÇÃO DO USUÁRIO

**Persona primária:** Casal ou grupo de amigos, 25–50 anos, primeira vez em João Pessoa, 2–3 dias livres, nunca fez snorkel.

**Três intenções mapeadas:**

| Estágio | O que o turista quer | Bloco que resolve |
|---------|---------------------|-------------------|
| Decisão (principal) | Confirmar preço, duração, confiança | Info Card + Por Que Confiar |
| Consideração | Entender o que vai fazer | Descrição sensorial + Roteiro |
| Barreira | Resolver dúvida específica | FAQ accordion (7 perguntas) |

**O que pode travar essa pessoa — e onde o design resolve:**

- "Quanto custa?" → Info Card logo após o hero — R$ 60 visível sem scroll
- "A maré vai estar baixa?" → Aviso de Maré com tom tranquilizador (âmbar, não vermelho)
- "Nunca mergulhei" → FAQ P1 resolve
- "Posso confiar nessa agência?" → TrustBlock (Cadastur + 4.9/5 + Murillo) resolve acima da dobra

O design remove essas barreiras na **ordem em que aparecem no scroll**, não empilhadas no final.

---

## 4. CONCEITO VISUAL APROVADO

**"Mar como está — não como nos vendem."**

A página não quer parecer resort de luxo. Quer parecer **João Pessoa de verdade** — água translúcida sem filtro exagerado, coral ao alcance da mão, um guia que conhece cada maré. O design reforça **honestidade e confiança**, não luxo inacessível.

**Três tensões visuais a equilibrar:**

| Tensão | Resolução visual aprovada |
|--------|--------------------------|
| Alegria turística × confiança séria | Foto viva + TrustBlock escuro — contraste intencional |
| Copy acolhedora × eficiência mobile | Parágrafos curtos, espaçamento generoso, nunca texto apertado |
| Urgência de CTA × tom sem pressão | CTA sempre visível (sticky) mas nunca piscando ou pulsando |

---

## 5. ATMOSFERA VISUAL DESEJADA

| Atributo | Como expressar |
|----------|---------------|
| **Claro** | Fundo branco dominante — seções escuras pontuais e intencionais (TrustBlock, CTA Final) |
| **Honesto** | Aviso de Maré em destaque âmbar — não escondido, não minimizado |
| **Humano** | Murillo com nome e foto/avatar no bloco de confiança |
| **Local** | Foto real de Seixas (água verde-azul translúcida com coral) — não stock photo genérico |
| **Acessível** | Tipografia ≥16px, contraste alto, espaço generoso entre elementos, tap targets grandes |

**Anti-padrões que este site NÃO tem:**
- ❌ Fotos com filtro HDR exagerado
- ❌ Overlay vermelho "OFERTA LIMITADA" ou "ÚLTIMAS VAGAS"
- ❌ Texto pequeno em fundo complexo
- ❌ Cards com imagens distorcidas
- ❌ Múltiplas cores sem hierarquia na mesma seção

---

## 6. REFERÊNCIAS INTERNAS QUE DEVEM GUIAR O DESIGNER

Leia os quatro documentos abaixo antes de abrir o Figma. Este briefing é o consolidado — os arquivos têm detalhes adicionais.

| Documento | O que extrair |
|-----------|-------------|
| `02a-copywriter-vendas.md` (v3.1) | **Copy exata por bloco** — não alterar, não resumir |
| `02b-ux-ui-mobile-first.md` (v1.2) | **Wireframe ASCII** com dimensões, grids e comportamentos |
| `03-diretor-visual-turismo.md` (v2.1) | **Paleta, tipografia, specs por bloco, estados interativos** |
| `04-seo-local-turismo.md` (v1.1) | **H1, H2s, H3s, breadcrumb labels exatos, alt texts** |

**Hierarquia em caso de conflito:** `03` (direção visual) > `02b` (wireframe) > `02a` (copy). Registrar qualquer conflito no Figma como `[CONFIRMAR COM MURILLO]`.

---

## 7. ESTRUTURA COMPLETA DA PÁGINA POR BLOCOS

**Sequência aprovada por Murillo (2026-04-26) — mobile, de cima para baixo:**

| # | ID | Bloco | Conteúdo principal |
|---|----|-------|--------------------|
| — | C1 | Header | Logo + botão WhatsApp, sticky |
| 1 | C2 | Hero | Foto Seixas + H1 + subtítulo + CTA primário verde |
| — | — | Breadcrumb | Home > Piscinas Naturais > Seixas |
| 2 | C3 | Info Card | R$ 60 / ~3h30 / Tambaú — 3 colunas |
| 3 | C4 | Aviso de Maré | Bloco âmbar educativo |
| 4 | C5 | Por Que Confiar | Cadastur + 4.9/5 + Murillo — fundo dark |
| 5 | I1 | Lead | Gancho textual, 3 parágrafos — sem título visual |
| 6 | I2 | O Que Você Vai Fazer | Descrição sensorial + imagem opcional |
| 7 | I3 | Roteiro Narrativo | 5 etapas com ícone + label + parágrafo |
| 8 | I4 | Incluso / Não Incluso | Dois blocos: checklist verde e checklist cinza |
| 9 | I5 | FAQ Accordion | 7 perguntas (2 com placeholder) |
| 9.5 | I5.5 | CTA Secundário | Botão WhatsApp leve, pós-FAQ |
| 10 | S1 | Depoimento | Quote block + avatar, fundo `#F5F5F5` |
| 11 | S2 | Informações Práticas | O que levar + ponto de embarque + horário |
| 12 | S3 | CTA Final | Seção fundo `#004E89` + botão WhatsApp grande |
| 13 | S4 | Passeios Similares | 2–3 cards (ver nota de conflito abaixo) |
| — | S5 | Footer | Logo branco + Cadastur + links + WhatsApp |
| — | — | CTA Sticky | Botão fixo no bottom, mobile only |

> **[CONFIRMAR COM MURILLO] — Conflito entre etapas:** `02a-copywriter-vendas.md` especifica **2 cards** em Passeios Similares (Penha + Picãozinho). `04-seo-local-turismo.md` recomenda **3 cards** (Areia Vermelha + Penha + Picãozinho). Designer prepara layout para 2 e para 3 cards — Murillo decide quantidade final.

---

## 8. PRIORIDADE VISUAL DE CADA BLOCO

| Prioridade | Bloco | Por quê |
|-----------|-------|---------|
| 🔴 CRÍTICO | Header (C1) | Botão WhatsApp sempre acessível em todo scroll |
| 🔴 CRÍTICO | Hero (C2) | Primeira impressão — foto + H1 + CTA definem se turista fica |
| 🔴 CRÍTICO | Info Card (C3) | Responde preço / duração / saída antes de qualquer copy |
| 🔴 CRÍTICO | Por Que Confiar (C5) | Prova de confiança acima da dobra — turista decide aqui |
| 🔴 CRÍTICO | CTA Sticky | Garante acesso ao WhatsApp durante todo o scroll |
| 🟠 IMPORTANTE | Aviso de Maré (C4) | Honestidade que gera confiança — posição e cor corretas são essenciais |
| 🟠 IMPORTANTE | Lead + Descrição (I1+I2) | Cria desejo — texto, não decoração |
| 🟠 IMPORTANTE | FAQ (I5) | Quebra objeções finais — turista próximo de converter |
| 🟠 IMPORTANTE | CTA Secundário (I5.5) | Captura quem terminou o FAQ |
| 🟡 SUPORTE | Roteiro (I3) | Clareza operacional |
| 🟡 SUPORTE | Incluso / Não Incluso (I4) | Reduz surpresas |
| 🟡 SUPORTE | Depoimento (S1) | Prova social final |
| 🟡 SUPORTE | CTA Final (S3) | Última captura |
| 🟢 RETENÇÃO | Passeios Similares (S4) | Quem não converteu pode considerar outro passeio |
| 🟢 RETENÇÃO | Footer (S5) | Navegação + redundância de Cadastur |

---

## 9. INSTRUÇÕES — HERO (C2)

### Dimensões por breakpoint

| Breakpoint | Altura | Largura |
|-----------|--------|---------|
| Mobile (320–767px) | 350px | 100% viewport |
| Tablet (768–1023px) | 480px | 100% viewport |
| Desktop (≥1024px) | 600px | 100% viewport |

### Imagem

- **`object-fit`:** `cover`
- **`object-position`:** `center 30%` — prioriza água e coral, não céu
- **`loading`:** `eager` (LCP crítico — nunca lazy no hero)
- **Formato:** WebP principal + JPG fallback
- **Tamanho máximo:** <200KB após compressão
- **`[CONFIRMAR COM MURILLO: foto real de Seixas disponível? tirada de manhã, nível do mar, água translúcida com coral]`**
- **Placeholder até foto real:** gradiente `#004E89 → #1a1a1a` com caption `[FOTO SEIXAS — PLACEHOLDER]` em branco/30%, centralizado

**O que mostrar na foto real:** água verde-azul translúcida, coral visível, pessoas em postura relaxada, luz de manhã.
**Evitar na foto real:** filtro HDR, pôr do sol, coqueiro genérico, pose de grife.

### Overlay

```css
background: linear-gradient(
  to top,
  rgba(0,0,0,0.75) 0%,
  rgba(0,0,0,0.25) 60%,
  transparent 100%
)
```

Gradiente de baixo para cima — texto e CTA ficam no terço inferior sobre a área mais escura.

### Elementos sobre o hero (de cima para baixo)

**H1 — único na página:**
- Texto exato: `Piscinas Naturais do Seixas, João Pessoa — Snorkel em Água Cristalina`
- Fonte: Lora, `font-weight: 700`
- Tamanho: `1.75rem` (28px) mobile / `2.75rem` (44px) desktop
- Cor: `#FFFFFF`
- `word-break: break-word`, `overflow-wrap: anywhere`
- Posição: terço inferior da imagem, sobre o overlay

**CTA Hero — posição entre H1 e subtítulo (intencional):**
- Texto: `Reservar no WhatsApp`
- Fundo: `#25D366`
- Texto: branco bold
- Altura: 52px mobile / 48px desktop
- Largura: 100% mobile / min-width 240px desktop
- Ícone WhatsApp SVG 20px à esquerda, `gap: 8px`
- Link: `https://wa.me/558399087830?text=Oi, quero saber sobre o passeio de Seixas`

**Subtítulo:**
- Texto exato: `No ponto mais oriental das Américas, a maré baixa revela piscinas naturais de coral com água tão clara que parece aquário. Com a gente, você só aproveita.`
- Fonte: Inter, `1rem` mobile / `1.125rem` desktop, `rgba(255,255,255,0.9)`

### Breadcrumb (abaixo do hero, fora do overlay)

Texto exato (labels confirmados pelo SEO — não alterar):
```
Início  >  Piscinas Naturais em João Pessoa  >  Piscinas Naturais do Seixas
```

- Links: `color: #004E89` (secondary)
- Item ativo (Seixas): `color: #FF6B35` (primary), não clicável
- Fonte: Inter, `0.75rem`, `padding: 8px 16px`
- Fundo branco

---

## 10. INSTRUÇÕES — INFO CARD (C3)

### Objetivo

Eliminar "quanto custa?" antes que o turista faça a pergunta. Aparece logo após o hero.

### Layout — 3 colunas fixas (nunca empilhar)

```
┌──────────┬──────────┬──────────┐
│  💰       │  ⏱       │  📍      │
│  R$ 60   │  ~3h30   │  Tambaú  │
│por pessoa │          │ embarque │
└──────────┴──────────┴──────────┘
```

| Elemento | Especificação |
|---------|--------------|
| Fundo | `#FFFFFF`, `box-shadow: 0 2px 8px rgba(0,0,0,0.08)` |
| Ícone | 24px mobile / 32px desktop, `color: #FF6B35` |
| Valor | Inter Bold, `1.125rem` (18px), `#111827` |
| Label | Inter Regular, `0.75rem` (12px), `#6B7280` |
| Padding | 16px mobile / 24px desktop — simétrico |
| Altura | ~100px mobile |

**Atenção em 320px:** Se 3 colunas apertarem, reduzir label para `0.6875rem` (11px) e usar `overflow: hidden; text-overflow: ellipsis`. Nunca empilhar — quebra a lógica de comparação rápida.

---

## 11. INSTRUÇÕES — AVISO DE MARÉ (C4)

### Tom visual

- **Não vermelho** — vermelho cria medo, não educação
- **Não modal** — inline, na sequência do scroll
- **Não minimizado** — tem destaque próprio; faz parte da proposta de valor

### Especificação

| Elemento | Valor |
|---------|-------|
| Fundo | `#FEF3C7` (amber-100) |
| Border-left | `4px solid #F59E0B` (amber-500) |
| `role` | `"note"` |
| Padding | `16px` |
| Border-radius | `4px` |

**Tipografia:**
- Ícone ⚠️: `1.25rem`, inline à esquerda do título
- Título: Inter SemiBold (600), `1rem`, `#111827`
- Texto: Inter Regular, `0.875rem`, `#374151`

**Texto exato (de 02a — não alterar):**

> **"⚠️ Este passeio acontece na maré baixa — e isso é exatamente o que torna ele especial."**
>
> As piscinas naturais só aparecem quando a maré está baixa. É assim com Seixas, com Penha e com Picãozinho — é a natureza de João Pessoa.
>
> Antes de confirmar sua data, a gente consulta a tábua de marés e te avisa o melhor horário. Você não precisa se preocupar com isso. Esse é o nosso trabalho.
>
> *Se a maré não estiver favorável na data que você quer, a gente te sugere outra opção — ou remarca sem custo.*

---

## 12. INSTRUÇÕES — POR QUE CONFIAR / TRUSTBLOCK (C5)

### Objetivo

Bloco que decide se o turista continua ou sai. **Deve estar acima da dobra mobile** (posição 4 na sequência). Fundo escuro cria contraste intencional.

### Especificação

| Elemento | Valor |
|---------|-------|
| Fundo | `#1a1a1a` (dark) |
| Texto | `#FFFFFF` |
| Layout mobile | Stack vertical (3 itens empilhados) |
| Layout desktop | Grid 3 colunas horizontais |
| Padding | `24px 16px` mobile / `40px 24px` desktop |

### 3 Itens — especificação individual

**Item 1 — Cadastur:**
- Ícone ✅ verde (28px) em div circular `background: rgba(255,255,255,0.10)`, `padding: 8px`, `gap: 12px`
- Texto: `"Cadastur 52.077.577 — Ativo"` | Inter Bold (700), `1rem`, branco
- Subtext: `"Agência registrada no Ministério do Turismo. Operação legal, segura, verificada."` | `0.875rem`, `#9CA3AF`

**Item 2 — Rating:**
- Ícone ⭐ âmbar (28px), mesma div circular
- Texto: `"4.9/5 no Google"` | mesmas specs
- Subtext placeholder (até número confirmado): `"O que os clientes sempre dizem: atendimento rápido, organização impecável, confiança."` | `0.875rem`, `#9CA3AF`
- `[CONFIRMAR COM MURILLO: número exato de avaliações Google]`

**Item 3 — Murillo:**
- Avatar: foto 48×48px, `border-radius: 50%` — **ou** iniciais "MA" em `background: #FF6B35`, texto branco (fallback)
- Texto: `"Murillo — Guia Local"` | mesmas specs
- Subtext: `"[CONFIRMAR: anos de experiência] | Conhece cada maré, cada coral e cada canto de Seixas. Atendimento direto no WhatsApp — você fala comigo, não com atendente."` — usar a partir de "Conhece" como placeholder
- `[CONFIRMAR COM MURILLO: foto real de Murillo disponível?]`

**Nota para o designer:** projetar item 3 com avatar de iniciais como estado padrão. Substituição por foto não deve quebrar o layout.

---

## 13. INSTRUÇÕES — LEAD E DESCRIÇÃO (I1 + I2)

### Lead (I1) — texto puro, gancho emocional

**Posição aprovada por Murillo:** após Por Que Confiar (não antes). Sem título visual, sem imagem, sem ícone.

| Elemento | Valor |
|---------|-------|
| Fundo | `#FFFFFF` |
| Padding | `24px 16px` |
| Fonte | Inter Regular, `1rem`, `line-height: 1.7`, `#374151` |

**Texto exato (de 02a — não alterar):**

> Chegou em João Pessoa e quer ver as piscinas naturais de verdade — não em foto?
>
> Seixas fica no ponto mais a leste das Américas. Quando a maré baixa, corais formam piscinas naturais de água morna e cristalina. Você flutua, vê peixes coloridos passando do lado, e fica achando que está num aquário — mas é a natureza mesmo.
>
> A gente parte de Tambaú em catamarã, checa a maré antes, e cuida de tudo. Você só aproveita.

### Descrição (I2)

- **H2:** `"O que espera por você em Seixas"` | Lora SemiBold (600), `1.25rem` mobile / `1.5rem` desktop
- Imagem opcional (se foto disponível): `width: 100%`, `height: 200px`, `object-fit: cover`, `border-radius: 8px`, `loading="lazy"`
- `[CONFIRMAR COM MURILLO: foto descritiva de Seixas — pode ser galeria subaquática diferente do hero]`
- Desktop: split 60/40 (texto à esquerda, imagem à direita)

**Texto exato (de 02a):** ver bloco 6 de `02a-copywriter-vendas.md`.

---

## 14. INSTRUÇÕES — ROTEIRO NARRATIVO (I3)

### Estrutura

- **H2:** `"Como é o passeio — passo a passo"` | Lora SemiBold (600), `1.25rem` mobile / `1.5rem` desktop
- 5 etapas com ícone emoji + label bold + parágrafo
- `border-bottom: 1px solid #E5E7EB` entre etapas
- `padding: 16px 0` por etapa
- Desktop: `max-width: 720px`

### Tipografia por elemento

| Elemento | Especificação |
|---------|--------------|
| Ícone emoji | `1.25rem`, inline à esquerda do label |
| Label | Inter SemiBold (600), `1rem`, `#111827` |
| Texto | Inter Regular, `0.9375rem` (15px), `#6B7280` |

### 5 Etapas (texto de 02a — não alterar)

**🚢 Embarque em Tambaú**
> Ponto de encontro na Praia de Tambaú, próximo ao Hotel Tambaú. A localização exata é enviada no voucher após a confirmação da reserva. Horário conforme tábua de marés — confirmamos no WhatsApp na véspera.

**🌊 Travessia de catamarã**
> Cerca de 15 minutos de barco. O litoral de João Pessoa visto de outro ângulo.

**🐠 Nas piscinas naturais de Seixas**
> A maré baixou. As piscinas estão abertas. Coral vivo, colorido, repleto de vida marinha.

**⚡ Catamarã é sua base**
> Toboágua, trampolim e caiaque disponíveis. Bar a bordo `[CONFIRMAR COM MURILLO: alimentos ou só bebidas?]`. Banheiro a bordo.

**🚢 Retorno para Tambaú**
> Total: ~3h30 desde o embarque.

**Instrução para o designer:** nunca colocar etapas lado a lado em mobile — sempre stack. Ícone emoji é intencional (autêntico) — não substituir por SVG no roteiro.

---

## 15. INSTRUÇÕES — FAQ ACCORDION (I5)

### Estrutura

- **H2:** `"Perguntas sobre o passeio de Seixas"` | Lora SemiBold, `1.25rem` mobile / `1.5rem` desktop
- 7 perguntas — **1 item aberto por vez**
- `border-bottom: 1px solid #E5E7EB` entre itens
- Fundo branco

### Especificação por item

| Elemento | Valor |
|---------|-------|
| Item `min-height` | `52px` (tap target full-width) |
| Pergunta | Inter SemiBold (600), `1rem`, `#111827` |
| Chevron | `color: #FF6B35`, rota 180° ao abrir |
| Resposta | Inter Regular, `0.9375rem`, `#374151`, `padding: 0 16px 16px` |
| Acessibilidade | `aria-expanded`, `aria-controls`, `role="button"` |

### 7 Perguntas (texto de 02a — não alterar)

| # | Pergunta | Status |
|---|---------|--------|
| P1 | Nunca mergulhei na vida. Posso fazer este passeio? | ✅ Copy aprovada |
| P2 | O passeio realmente depende de maré baixa? E se a maré não estiver boa? | ✅ Copy aprovada |
| P3 | O que exatamente está incluso nos R$ 60? | ✅ Copy aprovada |
| P4 | De onde a gente sai? E como chego até lá? | ✅ Copy aprovada — Praia de Tambaú, próximo ao Hotel Tambaú |
| P5 | Quanto tempo dura o passeio no total? | ✅ Copy aprovada |
| P6 | Posso levar crianças? | ✅ Copy aprovada — sem idade mínima, acompanhados por responsável |
| P7 | Qual é a política de cancelamento? | ⏳ Base em `_conhecimento/politica-cancelamento-base.md` — aguarda aprovação de Murillo |

**P7 — placeholder visual:** itálico cinza `"Nossa política de cancelamento está sendo publicada. Para mais informações, fale com a gente no WhatsApp."` — aguarda aprovação de Murillo antes de exibir texto final. P4 e P6 têm copy aprovada.

**Instrução:** design deve acomodar resposta curta (1 linha) e longa (4+ linhas) — `height: auto`, nunca altura fixa.

---

## 16. INSTRUÇÕES — CTAs DE WHATSAPP

**Link padrão (todos os CTAs desta página):**
```
https://wa.me/558399087830?text=Oi, quero saber sobre o passeio de Seixas
```

### CTA Hero (no bloco C2)

| Campo | Valor |
|-------|-------|
| Texto | `Reservar no WhatsApp` |
| Background | `#25D366` |
| Texto | `#FFFFFF`, bold |
| Altura | `52px` mobile / `48px` desktop |
| Largura | `100%` mobile / `auto, min-width: 240px` desktop |
| Border-radius | `8px` |
| Ícone | SVG WhatsApp branco, `20px`, à esquerda, `gap: 8px` |

### CTA Sticky (mobile only)

| Campo | Valor |
|-------|-------|
| Posição | `fixed; bottom: 0; left: 0; right: 0` |
| Background | `#25D366` |
| Altura | `56px` |
| `z-index` | `999` |
| `box-shadow` | `0 -2px 8px rgba(0,0,0,0.15)` |
| `aria-label` | `"Reservar no WhatsApp"` |
| Aparece | Quando CTA Hero sai do viewport (`transform: translateY(0)`) |
| Some | Quando CTA Final (S3) entra no viewport (`transform: translateY(100%)`) |
| Desktop | **`display: none`** — nunca visível |

### CTA Secundário — pós-FAQ (I5.5)

- Fundo: `#FFFFFF` (transição leve, não seção destacada)
- Texto acima: `"Ficou com alguma dúvida que não está aqui? Fala com a gente — é rápido."` | Inter, `0.875rem`, `#6B7280`
- Botão: mesmas specs do CTA Hero
- Padding: `16px` — discreto

### CTA Final (S3)

- Fundo da seção: `#004E89` (azul oceano — mais temático que dark)
- H2: `"Vamos te ajudar a escolher a melhor data para o seu passeio em Seixas."` | Lora, `1.5rem`, branco
- Subtexto: `"Atendimento rápido. Preço justo. Roteiro organizado."` | Inter, `0.9375rem`, `rgba(255,255,255,0.85)`
- Botão: mesmas specs do CTA Hero, `height: 52px`, `width: 100%` mobile
- Padding da seção: `40px 16px`
- Desktop: `max-width: 600px`, centralizado

### Header — botão WhatsApp

- Sempre visível, canto direito
- Texto: `WhatsApp` (compacto)
- `min-height: 44px`, fundo `#25D366`, texto branco

---

## 17. INSTRUÇÕES — DEPOIMENTO (S1)

### Especificação

| Elemento | Valor |
|---------|-------|
| Fundo | `#F5F5F5` (light) |
| Aspas decorativas | `font-size: 4rem`, `color: #FF6B35`, `opacity: 0.3`, position absolute acima do texto |
| Texto da frase | Inter Italic, `1.125rem`, `#111827`, `line-height: 1.6` |
| Autor | Inter SemiBold, `0.875rem`, `#374151` |
| Rating fonte | `"⭐ Google | [Mês/Ano]"`, `#6B7280` |
| Avatar | 48×48px, `border-radius: 50%` |
| Desktop | `max-width: 600px`, centralizado |

### Placeholder (até depoimento real)

```
[CONFIRMAR COM MURILLO: depoimento real — texto, nome, cidade, data, foto cliente]
```

**Estado placeholder no Figma:** bloco `#F5F5F5` com aspas decorativas + texto itálico cinza `"Depoimento em breve."` — **nunca inventar frase ou nome.**

**Avatar sem foto real do cliente:** iniciais em `background: #FF6B35`, texto branco, `border-radius: 50%`.

---

## 18. INSTRUÇÕES — PASSEIOS SIMILARES (S4)

### H2

`"Outras piscinas naturais em João Pessoa"` | Lora SemiBold, `1.25rem` mobile / `1.5rem` desktop

### Card de Passeio

```
┌─────────────────────────────┐
│  [IMAGEM 160px]             │  object-fit: cover, border-radius: 8px 8px 0 0
│                  [R$ XX]    │  badge: absolute top:8 right:8, bg #FF6B35, branco, 0.75rem, border-radius 4px
├─────────────────────────────┤
│  Nome do Passeio            │  H3, Inter SemiBold, 1rem, #111827
│  Descrição (max 2 linhas)   │  0.875rem, #6B7280
│  Ver passeio →              │  0.875rem, color: #004E89
└─────────────────────────────┘
box-shadow: 0 2px 8px rgba(0,0,0,0.08)
border-radius: 8px
background: #FFFFFF
```

**Layout:** 1 coluna mobile / 2 colunas desktop (gap 24px, `align-items: stretch`)

**Hover state (desktop):** `box-shadow: 0 4px 16px rgba(0,0,0,0.12)`, nome em `#004E89`, `transition: 200ms ease`

**Passeios aprovados (de 02a):**

| Card | URL | Preço |
|------|-----|-------|
| Piscinas Naturais da Penha | `/passeios/piscinas-naturais/penha` | R$ 60 |
| Piscinas Naturais de Picãozinho | `/passeios/piscinas-naturais/picaozinho` | R$ 60 |

> **[CONFIRMAR COM MURILLO]: incluir card de Areia Vermelha? 04-seo recomenda 3 cards. Designer prepara layout para 2 e para 3.**

---

## 19. COMPORTAMENTO MOBILE-FIRST

**Versão base: 320px–767px. Tudo que funciona em 320px funciona em qualquer tela maior.**

### Checklist por bloco (mobile)

| Bloco | Layout mobile |
|-------|--------------|
| Header | Logo + botão WA, 56px, sticky top |
| Hero | Full-width, 350px, H1 1.75rem |
| Breadcrumb | Full-width, 0.75rem, links clicáveis |
| Info Card | 3 colunas fixas, ~100px, nunca empilhar |
| Aviso Maré | Full-width, border-left 4px, padding 16px |
| TrustBlock | Stack vertical, 3 itens, fundo dark |
| Lead + Descrição | 1 coluna, padding 24px 16px |
| Roteiro | 1 coluna, etapas empilhadas, border-bottom |
| Incluso | Stack — incluso primeiro, não incluso segundo |
| FAQ | 1 coluna, min-height 52px por item |
| CTA Secundário | Botão width 100% |
| Depoimento | Full-width, fundo claro |
| Info Prática | 1 coluna |
| CTA Final | Full-width, padding 40px 16px |
| Similares | 1 coluna, cards full-width |
| Footer | Stack vertical |
| CTA Sticky | Fixed bottom, height 56px, visível |

### Os 5 primeiros segundos no mobile

1. Header com logo + botão WhatsApp visível
2. Foto do hero (LCP — `loading="eager"`, WebP)
3. H1 legível sem zoom (28px)
4. CTA verde grande — uma ação óbvia
5. Info Card: R$ 60 / ~3h30 / Tambaú

### Problemas comuns — com solução

| Problema | Solução |
|---------|---------|
| H1 muito longo | `word-break: break-word`, `overflow-wrap: anywhere` |
| Hero distorcido | `aspect-ratio: 16/9` mobile, `object-fit: cover` |
| FAQ apertado para toque | `min-height: 52px` por item |
| CTA hero sumindo | CTA Sticky resolve — sem scroll reverso |
| Info Card colapsando em 320px | `font-size: 0.6875rem` no label, `overflow: hidden; text-overflow: ellipsis` |
| Imagem quebrando layout | Nunca `width` fixo em mobile — sempre `width: 100%` com `height` definido |

---

## 20. ADAPTAÇÃO DESKTOP (≥1024px)

**Container:** `max-width: 1200px; margin: 0 auto; padding: 0 24px` (já existe no codebase).

| Bloco | Mobile | Desktop |
|-------|--------|---------|
| Header | Logo + WA button | Logo + nav links + CTA |
| Hero | 350px, H1 1.75rem | 600px, H1 2.75rem |
| Info Card | 3 cols, padding 16px | 3 cols, padding 32px, ícones 32px |
| Aviso Maré | Full-width | max-width 800px, centralizado |
| TrustBlock | Stack vertical | Grid 3 colunas horizontais |
| Lead | Full-width | max-width 720px, centralizado |
| Descrição + Imagem | Texto + imagem abaixo | Split 60/40 |
| Roteiro | 1 coluna | 1 coluna, max-width 720px |
| Incluso | Stack 1 col | 2 colunas lado a lado, mesmo height |
| FAQ | 1 coluna, full-width | 1 coluna, max-width 720px |
| CTA Secundário | Full-width | max-width 480px, centralizado |
| Depoimento | Full-width | max-width 600px, centralizado |
| CTA Final | Full-width | max-width 600px, centralizado |
| Similares | 1 coluna | 2 colunas grid |
| **CTA Sticky** | **Visível** | **`display: none` — sempre oculto** |

**Desktop — sem sidebar CTA flutuante:** não implementar na fase 1. Header sticky + CTA hero + CTA pós-FAQ + CTA final cobrem o desktop. Revisar com analytics após lançamento.

---

## 21. COMPONENTES QUE O DESIGNER PRECISA PREVER

Criar cada componente como átomo reutilizável no Figma. Nomes exatos — o programador usa esses nomes na implementação.

| Componente | Reutilizável em | Prioridade |
|-----------|----------------|-----------|
| `Header` | Todas as páginas | P0 |
| `HeroBlock` | Páginas de passeio (props: foto, H1, subtítulo, CTA) | P0 |
| `Breadcrumb` | Todas as páginas internas | P0 |
| `InfoCard` | Páginas de passeio (props: 3 itens) | P0 |
| `MaréAlert` | Seixas, Penha, Picãozinho, Areia Vermelha | P1 |
| `TrustBlock` | Todas as páginas de passeio | P0 |
| `LeadText` | Páginas de passeio | P1 |
| `DescricaoBlock` | Páginas de passeio (texto + imagem opcional) | P1 |
| `RoteiroBullets` | Páginas de passeio (array de etapas) | P1 |
| `IncluidoBlock` | Páginas de passeio (2 arrays) | P0 |
| `FAQAccordion` | Passeios + FAQ centralizada | P0 |
| `CTASecundario` | Páginas de passeio | P1 |
| `DepoimentoBlock` | Páginas de passeio (quote + autor + avatar) | P1 |
| `InfoPratica` | Páginas de passeio | P1 |
| `CTAFinal` | Todas as páginas | P0 |
| `PasseioCard` | Clusters + similares + home | P0 |
| `CTASticky` | Páginas de passeio (mobile only) | P0 |
| `Footer` | Todas as páginas | P0 |

**P0 = necessário para lançar Seixas | P1 = importante, pode vir logo após**

---

## 22. IMAGENS NECESSÁRIAS

| Imagem | Uso | Dimensão mínima | Formato | Status |
|--------|-----|----------------|---------|--------|
| `hero-seixas` | Hero (C2) | 1920×600px | WebP + JPG | `[CONFIRMAR COM MURILLO]` |
| `descricao-seixas` | Bloco I2 (opcional) | 800×400px | WebP + JPG | `[CONFIRMAR COM MURILLO]` |
| `avatar-murillo` | TrustBlock (C5) | 96×96px | WebP | `[CONFIRMAR COM MURILLO]` |
| `avatar-cliente` | Depoimento (S1) | 96×96px | WebP | `[CONFIRMAR COM MURILLO]` |
| `card-penha` | Similares (S4) | 600×320px | WebP + JPG | `[CONFIRMAR COM MURILLO]` |
| `card-picaozinho` | Similares (S4) | 600×320px | WebP + JPG | `[CONFIRMAR COM MURILLO]` |
| `logo-vem-passear` | Header (colorida) + Footer (branca) | SVG | SVG | Confirmar se versão branca existe |

### Alt text por imagem (de 04-seo — não alterar labels)

| Imagem | Alt text exato |
|--------|---------------|
| Hero | `Piscinas naturais de Seixas com coral e água cristalina durante maré baixa em João Pessoa` |
| Descrição I2 | `Turistas flutuando nas piscinas naturais de Seixas durante maré baixa em João Pessoa, Paraíba` |
| Murillo | `Murillo, guia local da Vem Passear em Jampa, com turistas no passeio de Seixas em João Pessoa` |
| Card Penha | `Piscinas Naturais da Penha em João Pessoa — passeio exclusivo` |
| Card Picãozinho | `Picãozinho em João Pessoa — aquário natural a 1.500m de Tambaú` |

**Regras:** toda imagem de conteúdo com alt descritivo (nunca vazio, nunca `"praia"`). Mencionar localidade em todos os alts.

### Specs técnicas

- WebP (principal) + JPG (fallback)
- < 200KB por imagem após compressão
- Hero: `loading="eager"` (LCP)
- Galeria e cards: `loading="lazy"`
- `width` e `height` sempre definidos — evita CLS

---

## 23. ÍCONES NECESSÁRIOS

| Ícone | Onde | Estilo | Tamanho | Cor |
|-------|------|--------|---------|-----|
| WhatsApp SVG | Todos os botões CTA | SVG branco | 20px | `#FFFFFF` |
| 💰 Dinheiro | Info Card (C3) | Outline ou emoji | 24px | `#FF6B35` |
| ⏱ Relógio | Info Card (C3) | Outline ou emoji | 24px | `#FF6B35` |
| 📍 Pin | Info Card (C3) + Info Prática | Outline ou emoji | 24px | `#FF6B35` |
| ⚠️ Aviso | Aviso de Maré (C4) | Filled | 20px | `#F59E0B` |
| ✅ Check | TrustBlock (C5) + Incluso (I4) | Filled | 28px (C5) / 16px (I4) | Verde |
| ⭐ Estrela | TrustBlock (C5) | Filled | 28px | Âmbar |
| 👤 Avatar | TrustBlock (C5) fallback | — | 48px | `#FF6B35` bg |
| Chevron ▾ | FAQ accordion | Outline | 20px | `#FF6B35` |
| ❌ Cruz | Não Incluso (I4) | Outline | 16px | `#9CA3AF` |
| → Seta | Cards similares (S4) | Inline | 14px | `#004E89` |
| 🚢🌊🐠⚡ | Roteiro (I3) | Emoji padrão (não SVG) | 20px | — |

**Nota sobre ícones do Info Card:** preferir SVG (Lucide Icons ou Heroicons são compatíveis com Next.js) em vez de emoji — maior controle e acessibilidade. **Roteiro usa emoji propositalmente** — autenticidade, não substituir por SVG.

---

## 24. ESTADOS VISUAIS

### Botões CTA WhatsApp

| Estado | Comportamento |
|--------|--------------|
| Default | `background: #25D366`, texto branco bold |
| Hover (desktop) | `background: #1EA952` (verde mais escuro), `transition: background 200ms ease` |
| Focus | `outline: 2px solid #25D366; outline-offset: 2px` |
| Active | `background: #167A3C` |

### FAQ Accordion

| Estado | Comportamento |
|--------|--------------|
| Fechado | Pergunta + chevron ↓ em `#FF6B35` |
| Aberto | Chevron ↑ (rotado 180°, `transition: transform 300ms ease`) + resposta |
| Resposta | `max-height` transition 300ms ease — sem JS pesado |
| Hover (desktop) | `background: #F9FAFB` na linha da pergunta |
| Focus | `outline: 2px solid #FF6B35` na pergunta |
| Abertura | **1 item por vez** — abrir um fecha o anterior |

### CTA Sticky (mobile)

| Estado | Comportamento |
|--------|--------------|
| Oculto (default) | `transform: translateY(100%)` |
| Visível (após hero) | `transform: translateY(0)`, `transition: transform 300ms ease` |
| Desativado (CTA Final no viewport) | `transform: translateY(100%)` novamente |
| Desktop | `display: none` permanentemente |

### Cards de Passeio (S4)

| Estado | Comportamento |
|--------|--------------|
| Default | `box-shadow: 0 2px 8px rgba(0,0,0,0.08)` |
| Hover (desktop) | `box-shadow: 0 4px 16px rgba(0,0,0,0.12)`, nome em `#004E89`, `transition: 200ms ease` |
| Focus | `outline: 2px solid #004E89; outline-offset: 2px` |

### Header sticky

| Estado | Comportamento |
|--------|--------------|
| No topo | `border-bottom: 1px solid #E5E7EB` |
| Com scroll | `box-shadow: 0 2px 8px rgba(0,0,0,0.08)` sutil |

---

## 25. O QUE EVITAR VISUALMENTE

### Por tom de marca

- ❌ "ÚLTIMAS VAGAS", "SÓ HOJE", "OFERTA LIMITADA" — urgência falsa, fora do tom da Vem Passear
- ❌ CTA piscando ou pulsando — agressivo, não converte melhor
- ❌ Filtro HDR exagerado nas fotos — promessa que a natureza não entrega
- ❌ Fundo colorido em seções de texto longo
- ❌ Mais de 4 cores principais em uma mesma seção sem hierarquia
- ❌ Texto pequeno em fundo de foto sem overlay suficiente

### Por usabilidade mobile

- ❌ `overflow-x: scroll` não intencional em qualquer container
- ❌ Largura fixa em px para imagens em mobile
- ❌ Tap targets menores que 44px
- ❌ Accordion que abre somente com hover
- ❌ Modal para o Aviso de Maré — usar inline

### Por SEO e acessibilidade

- ❌ Segundo H1 na página — existe apenas um
- ❌ `alt=""` vazio em imagens de conteúdo
- ❌ Cor como único diferenciador de estado (sempre combinar com ícone ou texto)
- ❌ Breadcrumb labels diferentes dos definidos no SEO — têm que ser idênticos ao schema BreadcrumbList

### Por integridade de dados

- ❌ Inventar depoimento, endereço, anos de experiência, política de cancelamento
- ❌ Exibir preço diferente de R$ 60
- ❌ Mostrar número de rua sem confirmação de Murillo

---

## 26. CHECKLIST DE QUALIDADE DO DESIGN

O designer verifica cada item antes de entregar o Figma para aprovação de Murillo.

### Conteúdo

- [ ] H1 exato: `"Piscinas Naturais do Seixas, João Pessoa — Snorkel em Água Cristalina"` — não alterar
- [ ] Preço visível: `R$ 60 por pessoa`
- [ ] Duração visível: `~3h30`
- [ ] Embarque visível: `Tambaú`
- [ ] Cadastur `52.077.577` no TrustBlock
- [ ] Rating `4.9/5` no TrustBlock
- [ ] Link WhatsApp em todos os CTAs: `https://wa.me/558399087830?text=Oi, quero saber sobre o passeio de Seixas`
- [ ] Breadcrumbs com labels exatos: `Início > Piscinas Naturais em João Pessoa > Piscinas Naturais do Seixas`
- [ ] Lacunas `[CONFIRMAR]` visíveis como placeholders — não ocultar

### Visual e paleta

- [ ] Paleta restrita: branco, `#1a1a1a`, `#FF6B35`, `#004E89`, `#25D366`, `#F5F5F5`, âmbar pontual
- [ ] Fonte body: Inter — fonte headings: Lora
- [ ] `font-size` body: mínimo `1rem`; labels: mínimo `0.75rem`
- [ ] Aviso de Maré em âmbar — não vermelho, não verde
- [ ] CTA Final com fundo `#004E89` (azul) — não `#1a1a1a` (dark)

### Mobile (320px)

- [ ] Info Card com 3 colunas — nunca empilhado
- [ ] Hero com H1 legível sem zoom
- [ ] Todos os botões ≥ 44px de altura
- [ ] CTA Sticky visível e com estado de transição
- [ ] FAQ accordion com `min-height: 52px` por item
- [ ] Nenhum overflow horizontal

### Acessibilidade

- [ ] Contraste texto/fundo ≥ 4.5:1 para body (WCAG AA)
- [ ] Focus states visíveis em todos os elementos interativos
- [ ] `aria-expanded` e `aria-controls` previstos no FAQ
- [ ] `role="note"` no Aviso de Maré
- [ ] CTA Sticky com `aria-label="Reservar no WhatsApp"`

### Componentes

- [ ] 18 componentes nomeados exatamente como na seção 21
- [ ] Props de cada componente explicitadas nos frames
- [ ] Placeholder hero (gradiente azul escuro) aprovado visualmente
- [ ] Placeholder depoimento (texto cinza neutro) presente
- [ ] Fallback avatar Murillo (iniciais em círculo primary) presente

---

## 27. LACUNAS [CONFIRMAR COM MURILLO]

Dados ausentes que bloqueiam a aprovação final — não bloqueiam o Figma (designer usa placeholders).

| # | Dado | Onde impacta | Placeholder no Figma | Urgência |
|---|------|-------------|---------------------|---------|
| 1 | **Foto real de Seixas (hero + descrição)** | Hero (C2), Bloco I2 | Gradiente `#004E89→#1a1a1a` + caption `[FOTO SEIXAS]` | 🔴 Alta |
| ~~2~~ | ~~**Endereço exato de embarque em Tambaú**~~ | ~~Roteiro (I3), FAQ P4, Info Prática (S2)~~ | — | ✅ **Confirmado: Praia de Tambaú, próximo ao Hotel Tambaú (localização exata no voucher)** |
| 3 | **Política de cancelamento** | FAQ P7 | `"Nossa política de cancelamento está sendo publicada. Fale no WhatsApp."` itálico cinza | 🟠 Média — base criada em `_conhecimento/politica-cancelamento-base.md`; aguarda aprovação Murillo |
| ~~4~~ | ~~**Idade mínima para crianças**~~ | ~~FAQ P6~~ | — | ✅ **Confirmado: sem idade mínima, crianças acompanhadas por responsável** |
| 5 | **Depoimento real** (texto + nome + cidade + data) | Depoimento (S1) | `"Depoimento em breve."` itálico cinza | 🟠 Média |
| 6 | **Foto/avatar de Murillo** | TrustBlock (C5) | Iniciais "MA" em `#FF6B35`, texto branco | 🟠 Média |
| 7 | **Número exato de avaliações Google** | TrustBlock (C5) | Frase substituta: `"O que os clientes sempre dizem: atendimento rápido..."` | 🟡 Baixa |
| 8 | **Anos de experiência de Murillo** | TrustBlock (C5) | Usar a partir de: `"Conhece cada maré..."` | 🟡 Baixa |
| 9 | **Bar a bordo: alimentos ou só bebidas?** | Roteiro (I3) | `[CONFIRMAR]` inline no texto do catamarã | 🟡 Baixa |
| 10 | **Protetor solar mineral recomendado?** | Info Prática (S2) | `"biodegradável"` genérico como placeholder | 🟡 Baixa |
| 11 | **Número de cards em Passeios Similares** | S4 | Designer prepara layout para 2 e para 3 | 🟠 Média |
| 12 | **Intenção final da cor primária** | Toda a paleta de acentos | Manter `#FF6B35` (token Tailwind atual) — não mudar sem aprovação | 🟠 Média — afeta identidade visual |

---

## 28. HANDOFF PARA PROGRAMADOR-DE-SITE (ETAPA 6)

> **Handoff só ocorre após Figma aprovado por Murillo.**

### Do designer (via Figma)

- [ ] Telas: mobile 375px + desktop 1280px para todos os blocos
- [ ] Componentes em frames separados (18 componentes — seção 21)
- [ ] Estados interativos documentados (hover, focus, active, sticky, accordion)
- [ ] Tokens de espaçamento (gaps, paddings internos)
- [ ] Assets exportados: ícones SVG, logos, imagens comprimidas (<200KB)

### Do planejamento (já disponível no repositório)

| Documento | O que o programador usa |
|-----------|------------------------|
| `01-estrategia-site.md` | URLs, links internos, anchor texts |
| `02a-copywriter-vendas.md` (v3.1) | Copy exata por bloco — não alterar |
| `02b-ux-ui-mobile-first.md` (v1.2) | Dimensões, grids, comportamentos |
| `04-seo-local-turismo.md` (v1.1) | Title tag, meta description, canonical, schemas JSON-LD |
| Este documento (05) | Componentes, estados, alt texts, mobile/desktop |

### Especificações técnicas para o programador

| Campo | Valor |
|-------|-------|
| Framework | Next.js 14 App Router |
| Rota | `app/passeios/[categoria]/[slug]/page.tsx` |
| Renderização | `generateStaticParams()` + SSG — não SSR |
| Dados | `data/passeios.ts` via `getPasseioBySlug()` |
| **Campo roteiro** | **`rotario`** (typo no codebase — não corrigir sem testar) |
| Canonical | `https://vempassearjampa.com.br/passeios/piscinas-naturais/seixas` |
| Title tag | `Piscinas Naturais do Seixas em João Pessoa \| Vem Passear` |
| Meta description | `Conheça as piscinas naturais de Seixas em João Pessoa. Maré baixa, corais e água cristalina. R$ 60 por pessoa. Cadastur ativo. Reserve pelo WhatsApp!` |
| WhatsApp link | `https://wa.me/558399087830?text=Oi, quero saber sobre o passeio de Seixas` |
| CTA Sticky JS | IntersectionObserver: aparece quando #hero-cta sai, some quando S3 entra |
| Token amber | Adicionar `tide-warning-bg: #FEF3C7` e `tide-warning-border: #F59E0B` ao `tailwind.config.ts` (ou usar arbitrary values temporariamente) |
| Schemas | LocalBusiness + TouristAttraction + FAQPage + BreadcrumbList (specs completas em `04-seo-local-turismo.md`) |
| LCP hero | `<Image priority />`, WebP + JPG, `object-position: center 30%` |

---

## DIAGRAMA ASCII CONSOLIDADO — MOBILE (320px)

```
┌──────────────────────────────────────┐
│ [Logo VP]             [WhatsApp 📲]  │  ← Header (C1) — sticky
├──────────────────────────────────────┤
│                                      │
│  [FOTO SEIXAS — 350px height]        │  ← Hero (C2)
│   overlay: gradiente dark base→topo  │
│                                      │
│   H1 (Lora 1.75rem, branco, bold)    │
│   "Piscinas Naturais do Seixas,      │
│    João Pessoa — Snorkel em          │
│    Água Cristalina"                  │
│                                      │
│   [━ Reservar no WhatsApp 🟢 ━━━━━]  │  ← CTA primário (entre H1 e sub)
│                                      │
│   subtítulo (Inter 1rem, branco/90%) │
│                                      │
│  Início > Piscinas Naturais > Seixas │  ← Breadcrumb
├──────────────────────────────────────┤
│ 💰 R$ 60 │ ⏱ ~3h30 │ 📍 Tambaú     │  ← Info Card (C3) — 3 col
│por pessoa │          │ embarque      │
├──────────────────────────────────────┤
│ ⚠️ Este passeio acontece na maré...  │  ← Aviso Maré (C4) — âmbar
│  borda-left amber, fundo #FEF3C7     │
├──────────────────────────────────────┤
│  fundo #1a1a1a                       │  ← Por Que Confiar (C5)
│  ✅ Cadastur 52.077.577 — Ativo      │
│  ⭐ 4.9/5 no Google                  │
│  👤 Murillo — Guia Local             │
├──────────────────────────────────────┤
│  [Lead — 3 parágrafos, Inter 1rem]   │  ← Lead (I1) — sem título
├──────────────────────────────────────┤
│  O que espera por você em Seixas     │  ← Descrição (I2)
│  [3 parágrafos sensoriais]           │
│  [imagem 200px — lazy, se disponível]│
├──────────────────────────────────────┤
│  Como é o passeio — passo a passo    │  ← Roteiro (I3)
│  🚢 Embarque em Tambaú              │
│  🌊 Travessia de catamarã           │
│  🐠 Nas piscinas naturais            │
│  ⚡ Catamarã é sua base              │
│  🚢 Retorno para Tambaú             │
├──────────────────────────────────────┤
│  ✅ ESTÁ INCLUSO                     │  ← Incluso (I4)
│  • Passeio em catamarã               │
│  • Toboágua, caiaque, trampolim      │
│  • Bar e cozinha a bordo             │
│  ❌ NÃO ESTÁ INCLUSO                 │
│  • Alimentação                       │
│  • Snorkel/máscara (opcional)        │
├──────────────────────────────────────┤
│  Perguntas sobre o passeio de Seixas │  ← FAQ (I5)
│  [▾] Nunca mergulhei. Posso fazer?   │
│  [▾] Depende de maré? E se não?      │
│  [▾] O que está incluso nos R$ 60?   │
│  [▾] Onde é o embarque?              │
│  [▾] Quanto tempo dura?              │
│  [▾] Posso levar crianças?           │
│  [▾] Política de cancelamento? [CONF]│
├──────────────────────────────────────┤
│  "Ficou com dúvida? Fala c/ a gente" │  ← CTA Secundário (I5.5)
│  [━━ Reservar no WhatsApp 🟢 ━━━━━]  │
├──────────────────────────────────────┤
│  fundo #F5F5F5                       │  ← Depoimento (S1)
│  ❝ [frase cliente — CONFIRMAR] ❞     │
│  — Nome, Cidade ⭐ Google | Mês/Ano  │
│  [avatar 48px]                       │
├──────────────────────────────────────┤
│  Antes de ir                         │  ← Info Prática (S2)
│  • Roupa de banho                    │
│  • Protetor solar biodegradável      │
│  • Toalha                            │
│  📍 Praia de Tambaú [Abrir no Maps]  │
│  ⏱ Horário: conforme maré           │
├──────────────────────────────────────┤
│  fundo #004E89                       │  ← CTA Final (S3)
│  "Vamos te ajudar a escolher         │
│   a melhor data para seu passeio."   │
│  "Atendimento rápido. Preço justo."  │
│  [━ Falar com Murillo no WhatsApp ━] │
│   52px, verde #25D366, 100% width    │
├──────────────────────────────────────┤
│  Outras piscinas naturais em JP      │  ← Similares (S4)
│  ┌─────────────────────────────┐     │
│  │ [Penha 160px]  [R$ 60]      │     │
│  │ Piscinas Naturais da Penha  │     │
│  │ Ver passeio →               │     │
│  └─────────────────────────────┘     │
│  ┌─────────────────────────────┐     │
│  │ [Picãozinho 160px] [R$ 60]  │     │
│  │ Piscinas de Picãozinho      │     │
│  │ Ver passeio →               │     │
│  └─────────────────────────────┘     │
├──────────────────────────────────────┤
│  fundo #1a1a1a                       │  ← Footer (S5)
│  [Logo VP branco]                    │
│  Vem Passear em Jampa                │
│  Cadastur 52.077.577 | JP — PB       │
│  📲 +55 83 9908-7830                 │
│  Home | Piscinas Naturais | Sobre    │
└──────────────────────────────────────┘

[━━━━━━ Reservar no WhatsApp 🟢 ━━━━━━]  ← CTA Sticky — fixed bottom
 position: fixed; bottom: 0; height: 56px  (visível após hero; some no CTA Final)
```

---

## CHECKLIST FINAL — ETAPA 5

| Item | Status |
|------|--------|
| 1. Resumo executivo | ✅ |
| 2. Objetivo da página | ✅ |
| 3. Público-alvo e intenção | ✅ |
| 4. Conceito visual aprovado | ✅ |
| 5. Atmosfera visual | ✅ |
| 6. Referências internas | ✅ |
| 7. Estrutura completa por blocos (16+) | ✅ |
| 8. Prioridade visual por bloco | ✅ |
| 9. Instruções Hero (C2) | ✅ |
| 10. Instruções Info Card (C3) | ✅ |
| 11. Instruções Aviso de Maré (C4) | ✅ |
| 12. Instruções Por Que Confiar (C5) | ✅ |
| 13. Instruções Lead + Descrição (I1+I2) | ✅ |
| 14. Instruções Roteiro (I3) | ✅ |
| 15. Instruções FAQ (I5) | ✅ |
| 16. Instruções CTAs WhatsApp (4 contextos) | ✅ |
| 17. Instruções Depoimento (S1) | ✅ |
| 18. Instruções Passeios Similares (S4) | ✅ |
| 19. Comportamento mobile-first | ✅ |
| 20. Adaptação desktop | ✅ |
| 21. Componentes (18 itens, P0/P1) | ✅ |
| 22. Imagens necessárias (7 itens + alt texts) | ✅ |
| 23. Ícones necessários (15 itens) | ✅ |
| 24. Estados visuais (5 categorias) | ✅ |
| 25. O que evitar (3 categorias) | ✅ |
| 26. Checklist de qualidade do design | ✅ |
| 27. Lacunas [CONFIRMAR] (12 itens) | ✅ |
| 28. Handoff para programador-de-site | ✅ |
| Diagrama ASCII consolidado | ✅ |

---

**Fontes de dados confirmados neste documento:**
- Copy exata: `02a-copywriter-vendas.md` v3.1
- Wireframe e dimensões: `02b-ux-ui-mobile-first.md` v1.2
- Paleta, specs e estados: `03-diretor-visual-turismo.md` v2.1
- URLs, schemas, alt texts, H1/H2/H3: `04-seo-local-turismo.md` v1.1
- Sequência de blocos aprovada por Murillo: `01-estrategia-site.md`
- WhatsApp `+55 83 9908-7830`: `_memoria/decisoes-estrategicas.md` (Decisão 22)
- Domínio `https://vempassearjampa.com.br`: `_memoria/decisoes-estrategicas.md` (Decisão 26)
- Lead após Por Que Confiar: `_memoria/decisoes-estrategicas.md` (Decisão 21)
- Typo `rotario` (não `roteiro`): `CEREBRO.JAMPA/CLAUDE.md`

---

*Versão: 3.1 | Data: 2026-04-26 | Skill: briefing-designer*
*Ponto de pausa obrigatório: aguardar Figma executado + aprovação de Murillo antes de acionar Etapa 6 (programador-de-site)*
