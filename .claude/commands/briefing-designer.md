# /briefing-designer

**Descrição:** Traduz página ou campanha em briefing acionável para designer com objetivo, persona, referências visuais, requisitos mobile e restrições.

**Quando usar:**
- Página foi aprovada textualmente e precisa de diagramação
- Precisa comunicar requisitos de UX mobile-first
- Quer alinhamento visual entre múltiplas páginas
- Retomando briefing inacabado

**Entradas necessárias:**
- Arquivo `.md` da página (ou descrição)
- Qual é o objetivo da página (vender passeio? educar? construir confiança?)
- Qual é a ação esperada do usuário (clicar em CTA? ler depoimento? escolher data?)

**Processo:**
1. Carrega `templates/briefing-designer.md`
2. Lê conteúdo da página
3. Extrai blocos lógicos (hero, descrição, FAQ, CTA, depoimentos, etc.)
4. Mapeia ordem mobile-first (o que vem primeiro na tela pequena?)
5. Define tap targets, espaçamentos, hierarquia de cor/tamanho
6. Lista referências visuais (de concorrentes, referências locais, etc.)
7. Devolve em formato estruturado (JSON ou Markdown)

**Saída esperada:**
- Briefing estruturado com: objetivo, persona, ação esperada, blocos da página, referências, restrições, entregáveis, prazo
- Wireframe textual descrevendo ordem mobile (ex.: "Hero 100vh → Breadcrumb → H1 + lead → Blocos de features → FAQ → CTA sticky footer")
- Requisitos de acessibilidade básica (contraste, ARIA, alt text)
- Tamanho: 1-2 páginas markdown
- Citação: "Baseado em: `_site/paginas/[nome].md`"

**Exemplo:**
```
# Briefing Designer: Página de Praia do Seixas

## Objetivo
Vender o passeio, criar urgência (estoque limitado), credibilizar (depoimentos), facilitar WhatsApp.

## Persona
Turista de 28-45 anos, em mobile, chegando em João Pessoa amanhã.

## Ação Esperada
Clicar em "Quero Saber Mais no WhatsApp".

## Blocos da Página (Mobile-First)

1. **Hero 100vh** — Imagem de praia ao fundo, overlay semi-transparente, H1 branco, tamanho 32px
2. **Breadcrumb** — Navegação de contexto
3. **Preço + Disponibilidade** — Card destacado, CTA proeminente
4. **O Que Está Incluso** — Cards com ícones
5. **Roteiro** — Timeline visual
6. **FAQ Comprimido** — Accordion
7. **Depoimentos** — Carrossel ou stack vertical
8. **CTA Sticky** — Botão branco fixo no rodapé mobile

## Requisitos
- ✓ Mobile 320px até desktop
- ✓ Imagens otimizadas (Webp com fallback)
- ✓ Sem animações muito pesadas
- ✓ CTA sempre acessível (não scroll para encontrar)
- ✓ 1 cor principal (azul?), 1 secundária (local brand)
- ✓ Tipografia: title font + body font (legível)

## Referências
- [Referência 1]: ...
- [Referência 2]: ...

## Entregáveis
- [ ] Wireframe Figma mobile
- [ ] Prototype interativo
- [ ] Especificação de cores/tipografia
- [ ] Guia de componentes

## Prazo
[CONFIRMAR COM MURILLO]
```
