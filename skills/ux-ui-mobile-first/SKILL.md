# Skill: UX/UI Mobile-First

**Versão:** 3.0
**Status:** Ativa
**Especialidade:** Wireframe textual, responsividade, hierarquia visual, acessibilidade
**Escopo:** Site da Vem Passear em Jampa
**Modelo Padrão:** Sonnet 4.6
**Atualizado:** 2026-04-25

---

## RESPONSABILIDADE

### O Que Faz
- Transforma estratégia e copy em especificação visual clara
- Define hierarquia de blocos por importância (crítico / importante / suporte)
- Especifica wireframe textual por seção com dimensões e comportamentos
- Define 3 breakpoints (mobile / tablet / desktop) para cada bloco
- Especifica tap targets, acessibilidade WCAG AA, performance mobile

### O Que NÃO Faz
- ❌ Escrever copy → `copywriter-vendas`
- ❌ Definir estratégia ou arquitetura → `estrategista-de-site`
- ❌ Escolher cores, tipografia ou logo → `diretor-visual-turismo` / designer
- ❌ Otimizar SEO → `seo-local-turismo`
- ❌ Implementar código → `programador-de-site`

### Quando Usar
- Copy e estrutura aprovados → precisa especificação visual
- Designer precisa entender requisitos UX antes de abrir Figma
- Página tem baixa conversão mobile
- Retomando design inacabado

### Quando NÃO Usar
- Copy ainda não aprovada (este passo vem antes)
- Objetivo é só otimizar SEO ou escrever texto

---

## INPUT

| Campo | Obrigatório | Fonte | Descrição |
|-------|-------------|-------|-----------|
| objetivo | Sim | Murillo/Orquestrador | Ex: "wireframe da página Seixas" |
| copy aprovada | Sim | `copywriter-vendas` | Texto final em markdown |
| objetivo da página | Sim | `estrategista-de-site` | Vender? Educar? Construir confiança? |
| ação esperada do turista | Sim | `estrategista-de-site` | Clicar CTA? Ler depoimento? |
| dados do passeio | Condicional | `_conhecimento/passeios.md` | Se for página de passeio |
| provas de confiança | Não | `_conhecimento/provas-de-confianca.md` | Onde colocar Cadastur, rating, depoimento |

### Dados do `_conhecimento/` (Obrigatórios Antes de Executar)

| Arquivo | Por Que Consultar |
|---------|------------------|
| `passeios.md` | Preço, duração, saída (se página de passeio) |
| `provas-de-confianca.md` | Posição e formato de Cadastur, rating, depoimento |

### Fallback se Faltar Dado
- Se copy não foi aprovada → não criar wireframe (copy define hierarquia de blocos)
- Se estrutura da página não foi definida → consultar `estrategista-de-site` primeiro
- Se dados do passeio estão ausentes → marcar `[CONFIRMAR: preço, duração, saída]`

---

## PROCESSO

### Etapa 1 — Hierarquizar Blocos

Leia a copy e classifique cada bloco:

**CRÍTICO (primeiros 30% da tela mobile):**
- Hero + headline, CTA primária (44px mín), Preço, Rating/Proof

**IMPORTANTE (30-70%):**
- Descrição curta, O que está incluso, Roteiro, FAQ (accordion fechado)

**SUPORTE (70%+):**
- Depoimentos, Logos/parceiros, Links relacionados, Footer

### Etapa 2 — Definir Ordem Mobile

Sequência padrão para página de passeio:
1. Hero (imagem + H1 + CTA) — 350px mobile
2. Info Card (Preço | Duração | Saída) — 3-col grid
3. Lead (1 frase)
4. Descrição (2-3 parágrafos)
5. "Incluso" (4 items, stack vertical)
6. Roteiro (timeline vertical)
7. FAQ (accordion, 44px tap target)
8. Depoimentos (stack vertical)
9. CTA Final (botão grande WhatsApp)
10. Footer

**Regra:** No mobile, turista não deve scrollar mais de 5-6 seções antes de encontrar CTA.

### Etapa 3 — Tap Targets

- Buttons: mínimo 44×44px (Apple HIG, WCAG)
- Links clicáveis: mínimo 48×48px
- Espaçamento entre buttons: mínimo 8px
- Texto clicável: mínimo 16px

### Etapa 4 — Wireframe Textual por Bloco

Para cada bloco:
```
Hero Block (Mobile: 350px)
- Background: imagem full-width (Webp + JPG fallback)
- Overlay: gradiente escuro 60% opacidade
- H1: "Praia do Seixas" (32px, branco, bold)
- Subtitle: "Snorkel em água cristalina" (16px, cinza claro)
- Button: "Agendar no WhatsApp" (44px, laranja, WhatsApp icon 20px)

Tablet (768px+): Hero 500px, H1 40px
Desktop (1024px+): Hero 600px, H1 48px
```

### Etapa 5 — Responsividade (3 Breakpoints)

**Mobile (320-768px):** 100% - 16px padding, 1-col, H1 32px, body 16px, buttons full-width
**Tablet (769-1024px):** Max-width 90%, 2-col onde possível, H1 40px
**Desktop (1025px+):** Max-width 1200px, 3-col onde possível, H1 48px, H2 32px

### Etapa 6 — Acessibilidade (WCAG AA)

- Contraste: H1/H2 branco sobre escuro ≥7:1, body ≥4.5:1
- Alt text descritivo em todas imagens
- Focus states: buttons com outline 2px quando tabbed
- Sem cor como único indicador

### Etapa 7 — Performance (Alvo <3s mobile)

- Imagens: Webp + JPG fallback, dimensionadas corretamente
- Lazy-load: hero = eager, imagens abaixo = lazy
- Animações: Fade-in CSS, não JS pesado
- Fontes: máximo 2, system-first se possível

---

## REGRAS

- **Mobile é versão 1.0:** Desktop é expansão, não o contrário
- **CTA sempre acessível:** Botão WhatsApp visível com 1-2 scrolls no mobile
- **Imagens servem copy:** Cada imagem tem propósito, não é decoração
- **Hierarquia tipográfica:** H1 > H2 > H3 > body
- **Sem hover states críticos:** Mobile não tem hover — estados: default, focus, active

---

## OUTPUT

### Resultado Estruturado

Documento markdown com 5 seções:

**1. Wireframe Textual (por bloco)**
Cada seção descrita com dimensões, conteúdo, comportamento

**2. Diagrama ASCII**
```
┌─────────────────────┐
│   Hero (350px)      │
│  [Foto + H1 + CTA]  │
└─────────────────────┘
┌─────────────────────┐
│   Info Card (120px) │
│ Preço | Dur | Saída │
└─────────────────────┘
[...]
```

**3. Responsividade (3 breakpoints)**
Por bloco, como adapta em mobile / tablet / desktop

**4. Acessibilidade**
Contraste, alt text, focus states, touch targets

**5. Performance**
Imagens, lazy-load, animações, fontes

### Arquivos Gerados

| Arquivo | Pasta | Quando |
|---------|-------|--------|
| `wireframe-[pagina]-[data].md` | `_pipeline/` | Entrega desta skill |

### Próximos Passos (Handoff)

Esta skill alimenta:
- `diretor-visual-turismo` com: wireframe para validação de padrão visual
- `briefing-designer` com: especificação de blocos, comportamentos, responsividade
- `programador-de-site` com: estrutura de componentes e breakpoints

---

## COMPATIBILIDADE COM ORQUESTRADOR

| Propriedade | Valor |
|-------------|-------|
| Pipelines que usam | Pipeline A (Página Passeio), Pipeline B (Categoria) |
| Depende de (skills) | `estrategista-de-site` (estrutura), `copywriter-vendas` (copy) |
| Depende de (arquivos) | `passeios.md`, `provas-de-confianca.md` |
| Alimenta (skills) | `diretor-visual-turismo`, `briefing-designer`, `programador-de-site` |
| Pode rodar em paralelo com | `copywriter-vendas` (após `estrategista-de-site`) |
| Posição típica no pipeline | Etapa 2b dos Pipelines A e B |

---

*Skill v3.0 | Atualizado 2026-04-25 | Adicionado INPUT/OUTPUT/COMPATIBILIDADE padronizados*
