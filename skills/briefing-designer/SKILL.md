# Skill: Briefing Designer

**Versão:** 3.0
**Status:** Ativa
**Especialidade:** Briefing visual acionável, especificação de componentes, responsividade
**Escopo:** Páginas de site e campanha da Vem Passear em Jampa
**Modelo Padrão:** Sonnet 4.6
**Atualizado:** 2026-04-25

---

## RESPONSABILIDADE

### O Que Faz
- Traduz copy + wireframe + direção visual em briefing acionável para designer
- Mapeia blocos lógicos da página (Hero, Info Card, Descrição, FAQ, CTA...)
- Especifica comportamentos interativos (estados de button, accordion, cards)
- Define responsividade por bloco (mobile / tablet / desktop)
- Comunica requisitos de acessibilidade e performance ao designer
- Documenta restrições e referências visuais

### O Que NÃO Faz
- ❌ Escrever copy → `copywriter-vendas`
- ❌ Definir arquitetura de site → `estrategista-de-site`
- ❌ Otimizar SEO → `seo-local-turismo`
- ❌ Escolher cores, tipografia ou logo final → designer (ele executa)
- ❌ Implementar código → `programador-de-site`

### Quando Usar
- Copy + wireframe UX aprovados → designer precisa especificação
- Alinhamento visual entre múltiplas páginas
- Designer novo chegando no projeto
- Retomando design inacabado

### Quando NÃO Usar
- Copy ainda não aprovada
- Wireframe UX não foi criado
- Designer não está disponível (não vale criar briefing sem executor)

---

## INPUT

| Campo | Obrigatório | Fonte | Descrição |
|-------|-------------|-------|-----------|
| objetivo | Sim | Murillo/Orquestrador | Ex: "briefing para página Seixas" |
| copy aprovada | Sim | `copywriter-vendas` | Texto final da página |
| wireframe UX | Sim | `ux-ui-mobile-first` | Especificação de blocos e layout |
| direção visual | Recomendado | `diretor-visual-turismo` | Paleta, tipografia, componentes aprovados |
| persona | Não | `_conhecimento/publico-alvo.md` | Quem vai usar a página |
| restrições do projeto | Não | Murillo | Ex: "sem vídeo na fase 1", "mobile-only" |

### Dados do `_conhecimento/` (Obrigatórios Antes de Executar)

| Arquivo | Por Que Consultar |
|---------|------------------|
| `empresa.md` | Identidade da marca, informações institucionais |
| `provas-de-confianca.md` | Posição visual de Cadastur, rating, depoimento |

### Fallback se Faltar Dado
- Se copy não está aprovada → não gerar briefing (designer vai executar copy errada)
- Se direção visual não foi validada → gerar briefing com `[AGUARDAR DIREÇÃO VISUAL]` nas specs de cor/tipografia
- Se referências visuais não existem → indicar no briefing como `[REFERÊNCIAS VISUAIS PENDENTES]`

---

## PROCESSO

### Etapa 1 — Mapear Blocos Lógicos

Leia a página completa. Identifique blocos naturais.

Exemplo para página de passeio:
1. Hero (imagem + H1)
2. Breadcrumb (navegação)
3. Info Card (preço, duração, saída)
4. Lead + Descrição
5. "O Que Está Incluso"
6. Roteiro/Timeline
7. FAQ
8. Depoimentos
9. CTA Final
10. Footer

**Regra:** Cada bloco é uma "seção" visual. Designer vai desenhar cada uma separadamente.

### Etapa 2 — Definir Objetivo e Persona

**Objetivo:**
❌ "Página de passeio"
✅ "Converter turista chegando em JP em agendamento de snorkel em Seixas"

**Persona:**
❌ "Turista"
✅ "Casal 30-40 anos, primeira vez em JP, 2 dias livres, nunca fez snorkel"

### Etapa 3 — Especificar Blocos (Intenção, Não Design)

```markdown
### 1. Hero
- Full-width imagem Seixas ao entardecer
- Overlay escuro (60%) para legibilidade
- H1 branco, grande (visual prominence)
- Subtitle cinza claro
- Button primário (laranja) com WhatsApp icon
- Altura: 350px mobile, 500px tablet, 600px desktop

### 2. Info Card
- Logo após hero
- 3 informações em grid: Preço | Duração | Saída
- Cada cell: ícone + valor (bold) + label (small)
- Background claro (contraste com hero)
```

### Etapa 4 — Comportamentos Interativos

Para cada elemento interativo:

**Buttons (primária/secundária):**
- Default: fundo laranja, texto branco
- Hover: laranja mais escuro (desktop)
- Focus: outline 2px
- Active: escurece ainda mais

**Accordion (FAQ):**
- Ícone muda ao abrir/fechar?
- Animação: fade/slide?
- Pode abrir múltiplas ou só uma por vez?

**Regra:** Interatividade apoia conversão — evitar animações pesadas que prejudiquem mobile.

### Etapa 5 — Responsividade (3 Layouts)

**Mobile (320-768px):** 100% - 16px padding, 1-col, buttons full-width
**Tablet (769-1024px):** Max-width 90%, 2-col onde fizer sentido
**Desktop (1025px+):** Max-width 1200px, 3-col onde fizer sentido

### Etapa 6 — Acessibilidade (Comunicar ao Designer)

- Contraste mínimo WCAG AA (4.5:1 body, 7:1 titles)
- Focus states claros em buttons
- Touch targets ≥44px
- Sem cor como único indicador

### Etapa 7 — Performance

- Imagens otimizadas (Webp + fallback)
- Lazy-load abaixo do fold
- Animações leves (CSS)
- Máximo 2 fontes

### Etapa 8 — Referências e Restrições

**Referências:**
- "Inspirar em site X para cards" (se disponível em `_social/assets/`)
- "Tipografia humana, não corporativa"

**Restrições:**
- "Sem vídeo na fase 1"
- "Sem animações complexas"
- "Mobile-first (desktop depois)"

---

## REGRAS

- **Briefing é acionável:** Designer lê uma vez, entende, executa sem perguntas
- **Específico > Genérico:** "Use paleta de azul-mar e areia, tom quente mas sereno" vs "Use cores quentes"
- **Conversão guia design:** CTA em destaque, não decoração
- **Prova de confiança visível:** Rating, Cadastur, depoimento em posição de destaque
- **Contexto de JP:** Design deve evocar local (praia, sol, norte — sem caricatura)
- **Sem presunção:** Designer pode sugerir; briefing define intenção, não impõe visual

---

## OUTPUT

### Resultado Estruturado

Documento markdown com 6 seções:

**1. Executive Summary**
```
Objetivo: "Converter turista chegando em JP em agendamento de snorkel"
Persona: "Casal 30-45, primeira vez em JP, 2 dias livres"
Ação esperada: "Lê page → quer agendar → clica WhatsApp"
Prazo: [CONFIRMAR COM MURILLO]
```

**2. Especificação de Blocos**
Cada bloco com dimensões, conteúdo, comportamento, altura por breakpoint

**3. Wireframe ASCII**
```
┌──────────────────────────┐
│   Hero 350px             │
│ [Foto + H1 + Button]     │
└──────────────────────────┘
┌──────────────────────────┐
│ Info Card 120px          │
│ Preço | Duracao | Saida  │
└──────────────────────────┘
[...]
```

**4. Componentes Reutilizáveis (Design System)**
Button Primary, Card Passeio, Accordion — especificação de cada um

**5. Responsividade**
Por bloco, como adapta em mobile / tablet / desktop

**6. Restrições + Referências**
O que não fazer + links para referências em `_social/assets/`

### Arquivos Gerados

| Arquivo | Pasta | Quando |
|---------|-------|--------|
| `briefing-designer-[pagina]-[data].md` | `_pipeline/` | Entrega desta skill |

### Próximos Passos (Handoff)

Esta skill alimenta:
- **Designer** com: briefing completo para execução em Figma
- `programador-de-site` com: especificação de componentes e comportamentos após Figma aprovado

---

## COMPATIBILIDADE COM ORQUESTRADOR

| Propriedade | Valor |
|-------------|-------|
| Pipelines que usam | Pipeline A, B, D (Briefing Visual) |
| Depende de (skills) | `copywriter-vendas` (copy), `ux-ui-mobile-first` (wireframe), `diretor-visual-turismo` (validação visual) |
| Depende de (arquivos) | `empresa.md`, `provas-de-confianca.md` |
| Alimenta (skills) | `programador-de-site` (após designer executar Figma) |
| Pode rodar em paralelo com | Nenhuma — depende de UX + direção visual |
| Posição típica no pipeline | Etapa 5 do Pipeline A / Etapa 3 do Pipeline D |
| Ponto de pausa | Sim — aguarda designer executar Figma antes de programador |

---

*Skill v3.0 | Atualizado 2026-04-25 | Adicionado INPUT/OUTPUT/COMPATIBILIDADE padronizados*
