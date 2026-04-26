# Handoffs Entre Skills

Cada etapa do pipeline produz dados estruturados que a próxima skill precisa como input. O orquestrador descreve essas transferências no plano para garantir que nenhum dado seja perdido entre etapas. Consultar ao validar dependências (Passo 5) do `SKILL.md`.

---

## Formato do Handoff

```
[SKILL ORIGEM] →
  entrega:
    - dado 1
    - dado 2

[SKILL DESTINO] →
  usa:
    - dado 1 → para quê
    - dado 2 → para quê
```

---

## Handoffs de Site

### estrategista-de-site →
```
entrega:
  - URL definitiva da página
  - Posição na arquitetura do site
  - Seções recomendadas (nome + objetivo de cada)
  - Jornada do usuário (entrada → conversão)
  - Pontos de CRO (onde converter)
```

### copywriter-vendas ← estrategista-de-site
```
usa:
  - URL → slug para H1 e keywords principais
  - Seções → quais blocos de copy escrever
  - Jornada → tom por seção (descoberta → decisão)
```

### ux-ui-mobile-first ← estrategista-de-site
```
usa:
  - Seções → componentes do wireframe
  - Jornada → ordem vertical no mobile
  - CRO → posicionamento de CTAs
```

---

### copywriter-vendas →
```
entrega:
  - Headline (H1)
  - Lead (subtítulo de conversão)
  - Corpo de copy por seção (roteiro, incluso, FAQ)
  - CTAs formulados
  - Prova social (texto de avaliação real)
```

### seo-local-turismo ← copywriter-vendas
```
usa:
  - H1 → validar alinhamento de keyword / propor ajuste
  - Lead + corpo → densidade semântica
  - FAQ → estruturar FAQ schema (JSON-LD)
```

### programador-de-site ← copywriter-vendas
```
usa:
  - Copy completa → preencher componentes React
  - CTAs → configurar botões WhatsApp
  - FAQ → componente acordeão
```

---

### ux-ui-mobile-first →
```
entrega:
  - Wireframe textual (mobile / tablet / desktop)
  - Componentes identificados (card, hero, acordeão, etc.)
  - Regras de responsividade por breakpoint
```

### diretor-visual-turismo ← ux-ui-mobile-first
```
usa:
  - Wireframe → validar consistência com padrões visuais da marca
  - Componentes → especificar visual de cada um
```

### briefing-designer ← ux-ui-mobile-first
```
usa:
  - Wireframe → estrutura que o designer executa em Figma
  - Componentes → lista do que precisa ser desenhado
```

---

### diretor-visual-turismo →
```
entrega:
  - Validação do wireframe (aprovado / ajustes)
  - Especificação visual por componente (cor, espaçamento, tipo)
  - Restrições de marca
```

### briefing-designer ← diretor-visual-turismo
```
usa:
  - Especificação visual → incluir no briefing com precisão
  - Restrições → seção "O Que Não Fazer" do briefing
```

---

### seo-local-turismo →
```
entrega:
  - Meta title e meta description (finais)
  - Schema JSON-LD (TouristAttraction / LocalBusiness / FAQPage)
  - Alt texts para imagens
  - Links internos recomendados (âncora + destino)
```

### programador-de-site ← seo-local-turismo
```
usa:
  - Meta tags → <Head> da página Next.js
  - Schema → <script type="application/ld+json"> no layout
  - Alt texts → atributo alt nos componentes de imagem
  - Links internos → âncoras nos componentes de texto
```

---

### briefing-designer → *(após execução do Figma)*
```
entrega:
  - Link do Figma com frames aprovados
  - Tokens de design (cores, tipografia, espaçamentos)
  - Especificação de componentes com estados (hover, mobile, dark)
```

### programador-de-site ← briefing-designer
```
usa:
  - Figma → referência visual para implementação dos componentes
  - Tokens → variáveis Tailwind / CSS custom properties
  - Estados → lógica de interação nos componentes React
```

---

## Handoffs de Social

### radar-concorrentes-social →
```
entrega:
  - Formatos com maior engajamento (tipo + exemplo)
  - Gaps de conteúdo dos concorrentes
  - Temas recorrentes e sazonais
```

### captura-referencias-visuais ← radar-concorrentes-social
```
usa:
  - Formatos identificados → define o que capturar (story, reel, carrossel)
  - Exemplos relevantes → orienta qual conta/post buscar
```

### social-media-editorial-turismo ← radar-concorrentes-social
```
usa:
  - Gaps → oportunidades de pauta que concorrentes não exploram
  - Temas recorrentes → valida ou evita na editorial
  - Formatos de alto engajamento → priorizar na cadência
```

---

### captura-referencias-visuais →
```
entrega:
  - Arquivos de mídia em _social/assets/[tipo]/
  - Arquivo .md de contexto por captura (utilidade, como usar)
```

### diretor-visual-turismo ← captura-referencias-visuais
```
usa:
  - Referências → validar alinhamento com identidade da marca
  - Arquivo .md → entender intenção editorial de cada referência
```

### social-media-editorial-turismo ← captura-referencias-visuais
```
usa:
  - Assets disponíveis → embasar direção visual nas pautas
  - Arquivo .md → indicar ao designer qual referência usar por pauta
```

---

### diretor-visual-turismo → *(para social)*
```
entrega:
  - Direção visual da campanha (paleta, estilo, elementos permitidos)
  - Restrições para o designer social
```

### social-media-editorial-turismo ← diretor-visual-turismo
```
usa:
  - Direção visual → incluir em cada pauta como instrução para designer
```

---

## Regra de Handoff Incompleto

Se uma skill não entrega todos os dados esperados pela próxima:

```
1. Identificar lacuna no plano: "[CONFIRMAR COM MURILLO: skill X não entregou Y]"
2. NÃO avançar para a etapa seguinte sem o dado
3. Propor: re-executar skill anterior OU Murillo confirma o valor manualmente
```
