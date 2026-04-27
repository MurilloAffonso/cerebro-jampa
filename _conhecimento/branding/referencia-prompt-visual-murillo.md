---
name: referencia-prompt-visual-murillo
description: Régua de qualidade visual extraída do Prompt Murillo Visu — padrão interno para briefing, identidade, site, Claude Design e materiais comerciais da Vem Passear em Jampa
tipo: regua-de-qualidade
versao: "1.0"
criado: "2026-04-27"
fonte: "Prompt Murillo Visu .docx — fornecido por Murillo Affonso"
uso: Consultar antes de qualquer briefing visual, definição de identidade, criação de prompt para Claude Design ou avaliação de material entregue
---

# Régua Visual Murillo — Vem Passear em Jampa

> **Para quê serve:** Evitar design genérico, raso e sem identidade. Todo trabalho visual do projeto — briefing, logo, site, Claude Design, materiais comerciais — é avaliado contra este documento antes de ser considerado pronto.

---

## 1. Objetivo da Referência

Este documento existe para transferir para o sistema de skills a profundidade, estrutura e nível de qualidade contidos no Prompt Visual de Murillo. Funciona como:

- **Régua de qualidade:** Qualquer entrega visual é medida aqui antes de chegar ao Murillo.
- **Base de briefing:** Skills de design (`diretor-visual-turismo`, `briefing-designer`) consultam este arquivo antes de produzir especificação.
- **Guia de prompt:** Toda instrução para Claude Design parte dos padrões definidos aqui.
- **Filtro anti-genérico:** Impede que o sistema produza identidade visual que poderia servir para qualquer empresa de turismo do Brasil.

O Prompt Visual de Murillo estabelece que Vem Passear em Jampa não é uma agência de viagens anônima — é o negócio de uma pessoa real, num lugar específico, com um jeito próprio de operar. O design precisa carregar isso.

---

## 2. O Que Reaproveitar

Da estrutura e profundidade do Prompt Visual de Murillo, preservar integralmente:

### Estrutura de Briefing em Camadas
O briefing visual deve seguir camadas progressivas:
1. Quem é a marca (valores, posicionamento, tom)
2. Para quem é o design (persona, contexto de uso)
3. O que o design precisa comunicar (não só "parecer bonito")
4. Onde vai ser usado (site, WhatsApp, impresso, redes)
5. O que não pode acontecer (restrições visuais explícitas)

### Riqueza de Referência
Toda diretriz visual deve ter exemplo ou contraexemplo concreto. Não "use azul", mas "azul como o mar de Areia Vermelha às 8h — intenso, não esverdeado, não pastel".

### Identidade Enraizada no Lugar
João Pessoa não é cenário — é personagem. O design de Vem Passear em Jampa deve ser reconhecível como JP mesmo sem texto. Luz, paleta, clima, textura devem evocar o litoral paraibano.

### Murillo como Âncora Visual
Decisão confirmada (#3 em `decisoes-estrategicas.md`): Murillo é o rosto da marca. O prompt reforça isso — o design não pode ser impessoal. Presença humana é padrão visual, não detalhe.

### Confiança como Hierarquia Visual
Cadastur, avaliação, tempo de operação — não são rodapé. São elementos de primeiro plano. O design deve orquestrar esses sinais de confiança antes de qualquer argumento de venda.

---

## 3. O Que Remover / Adaptar

### Remover (não aplicável ao contexto interno):
- Regras comerciais ou políticas de precificação externas
- CTAs promocionais de campanhas específicas
- Links para plataformas externas que mudam com frequência
- Qualquer linguagem de "pacote" que não reflete a operação real de Murillo

### Adaptar ao contexto Claude Code:
- **Avaliação visual:** No prompt original havia critérios de avaliação aplicados em toda resposta. Aqui, os critérios ficam disponíveis em § 8 para uso **opcional**, não obrigatório. A skill os aplica quando o objetivo é avaliar — não em toda entrega.
- **Escopo:** O prompt foi pensado para várias plataformas. Aqui, a prioridade é: site (Next.js) + Claude Design. Materiais impressos e redes são secundários nesta fase.

---

## 4. Padrão de Briefing Visual

Todo briefing gerado pela skill `briefing-designer` deve ter esta profundidade mínima:

### Estrutura Obrigatória de um Briefing Vem Passear
```
1. CONTEXTO DA ENTREGA
   - Para qual plataforma? (site, Claude Design, Instagram, impresso)
   - Qual página/elemento?
   - Quem é o usuário que vai ver isso? (persona + contexto)
   - Qual ação queremos que ele tome?

2. IDENTIDADE ATIVADA
   - Quais dos 5 atributos visuais (§ 5.1) são prioritários nesta peça?
   - Como Murillo aparece? (foto, assinatura, citação, ausente)
   - Qual prova de confiança fica em primeiro plano?

3. DIRETRIZES VISUAIS
   - Paleta específica (código hex ou referência de § 5.2)
   - Tipografia a usar (combinação de § 5.3)
   - Hierarquia de elementos (o que o olho deve ver primeiro, segundo, terceiro)
   - Componentes necessários (lista com spec mínima)

4. RESPONSIVIDADE
   - Mobile (320-480px): layout e comportamento
   - Tablet (769-1024px): ajuste
   - Desktop (1025px+): expansão

5. RESTRIÇÕES
   - O que NÃO fazer (lista explícita)
   - O que já foi rejeitado em iterações anteriores (se houver)

6. ENTREGA ESPERADA
   - Formato de arquivo
   - Resolução / tamanho
   - Quem valida antes de passar para programador
```

**Critério de qualidade de briefing:** Designer externo, sem conhecimento prévio do projeto, lê o briefing e executa sem precisar perguntar nada. Se precisar perguntar → briefing incompleto.

---

## 5. Padrão de Identidade Visual

### 5.1 Os 5 Atributos da Marca Vem Passear em Jampa

| Atributo | Tradução Visual | Oposto a Evitar |
|----------|----------------|-----------------|
| **Local** | Paleta extraída de JP, fotos reais do litoral PB | Stock photo genérico, "praia qualquer" |
| **Humano** | Rosto de Murillo, linguagem direta, sem corporativo | Avatar, mascote, robótico |
| **Confiável** | Cadastur visível, avaliação em destaque, detalhes precisos | Vago, sem credenciais, animações que distraem |
| **Acolhedor** | Temperatura quente na paleta, espaçamento generoso, tom informal | Frio, comprimido, "formal" |
| **Claro** | Uma ação por tela, hierarquia forte, CTA óbvio | Múltiplos CTAs, informação empilhada, decoração sem função |

### 5.2 Paleta Principal

| Nome | Hex | Uso |
|------|-----|-----|
| Primário (azul) | `#004E89` | Fundo de seção, H1, nav, confiança |
| Destaque (laranja) | `#FF6B35` | CTA principal, badges, hover state |
| Branco | `#FFFFFF` | Fundo padrão, texto sobre escuro |
| Cinza claro | `#F5F5F5` | Seções alternadas, cards |
| Texto | `#1A1A1A` | Body, H2, H3 |

**Paleta não é negociável** — qualquer adição de cor requer aprovação de Murillo antes de implementar.

### 5.3 Tipografia

| Nível | Família | Peso | Tamanho mobile | Tamanho desktop |
|-------|---------|------|---------------|-----------------|
| H1 | Lora | Bold | 2rem | 2.75rem |
| H2 | Lora | SemiBold | 1.5rem | 2rem |
| H3 | Inter | SemiBold | 1.125rem | 1.25rem |
| Body | Inter | Regular | 1rem | 1rem |
| Caption / Label | Inter | Regular | 0.875rem | 0.875rem |

**Regra de combinação:** Lora (serifa) para títulos que precisam de autoridade — H1 e H2 em páginas de passeio. Inter (sans) para tudo que precisa de clareza operacional — preços, horários, botões.

### 5.4 Logo — Diretrizes para Criação Futura

> **Status:** Não existe logo oficial ainda. Quando criada, deve seguir:

- Forma legível em 32px (favicon) e em banner de 1200px
- Versão escura (fundo branco) e versão clara (fundo azul ou escuro)
- Nome "Vem Passear" com "Jampa" como diferenciador visual (tamanho menor ou cor diferente)
- Sem elementos genéricos: âncora, sol com cara, onda estilizada — são caricatura
- Elemento opcional: forma geográfica de JP ou referência ao litoral PB — só se for sutil e não parecer clip-art
- Fontes da logo: Lora para "Vem Passear", Inter para "Jampa" ou vice-versa — a testar
- Cor principal: `#004E89` ou `#FF6B35` como destaque, nunca os dois juntos na logo

**[CONFIRMAR COM MURILLO: existe algum esboço de logo já aprovado ou referências visuais preferidas?]**

---

## 6. Padrão de Homepage / Site

### Sequência de Blocos da Homepage (Ordem Definida)

```
1. Header
   - Logo (esq.) | Nav (centro, collapsa em mobile) | Botão WhatsApp (dir.)
   - Fixo no topo, fundo branco com sombra mínima

2. Hero
   - Foto real de JP com overlay azul escuro 30-40%
   - H1: "Passeios em João Pessoa com quem conhece cada praia"
   - Subtítulo: contexto de confiança (Cadastur + anos de operação)
   - CTA primário: "Ver passeios" → ancora na seção de passeios
   - CTA secundário: WhatsApp direto
   - Mobile: hero 360px altura; desktop: 500px

3. Prova Social
   - 3 colunas: Nota Google (4.9/5) | Cadastur ativo | Passeios em JP
   - Fundo: azul primário (#004E89), texto branco
   - Não deve rolar — deve ser escaneável em 2 segundos

4. Passeios em Destaque
   - Título: "Nossos passeios mais procurados"
   - Grid: 3-col desktop, 1-col mobile (scroll horizontal ou stack)
   - Cada card: foto + nome + preço + duração + CTA

5. Por Que Escolher a Vem Passear
   - 3-4 razões com ícone + título curto + 1 linha de contexto
   - Fundo neutro (cinza claro #F5F5F5)
   - Foto de Murillo à direita (desktop) / acima (mobile)

6. Depoimentos
   - 2-3 depoimentos reais (não inventados — ver Decisão #24)
   - Nome + foto ou inicial | Mês/Ano | Fonte: Google Maps
   - Fundo branco, quote em Lora italic, autor em Inter regular

7. Tábua de Marés (destaque funcional)
   - Bloco compacto com próxima saída dos passeios de maré
   - Link para /passeios/piscinas-naturais/calendario
   - Só exibir se houver dado com revisadoPorMurillo: true

8. CTA Final
   - Fundo primário (#004E89)
   - "Pronto para conhecer João Pessoa? Fala com a gente"
   - Botão WhatsApp grande, texto branco, 100% mobile

9. Footer
   - Logo | Links principais | CNPJ 52.077.577/0001-03 | Cadastur | © Vem Passear em Jampa
```

### Regras Visuais do Site

- **Espaçamento:** 24px vertical entre elementos, 40px entre seções mobile, 64px desktop
- **Max-width:** 1200px, centralizado, padding lateral 16px mobile / 32px desktop
- **Imagens:** WebP com fallback JPG, lazy-load abaixo do fold, `alt` descritivo obrigatório
- **Touch targets:** Todos os botões e links ≥44px altura
- **Contraste:** WCAG AA no mínimo (4.5:1 para body, 7:1 para títulos)

---

## 7. Padrão de Prompt para Claude Design

Todo prompt enviado ao Claude Design deve seguir esta estrutura:

```
CONTEXTO DA MARCA
Nome: Vem Passear em Jampa
Tipo: Agência de passeios marítimos e terrestres em João Pessoa, PB
Tom: Acolhedor, local, humano — não corporativo
Rosto da marca: Murillo Affonso (fundador e guia)
Diferencial: Cadastur ativo, 4.9/5 no Google, conhecimento local profundo

PALETA
Primário: #004E89 (azul confiança)
Destaque: #FF6B35 (laranja CTA)
Neutros: #FFFFFF, #F5F5F5, #1A1A1A

TIPOGRAFIA
Títulos: Lora (serifa, autoridade)
Corpo e UI: Inter (sans, clareza)

ELEMENTO A CRIAR
[Descrever o elemento específico: hero, card, página, logo]

OBJETIVO DO ELEMENTO
[Qual ação queremos que o usuário tome ao ver isso]

PERSONA
[Quem vai ver este elemento — turista, morador local, casal, família]

RESPONSIVIDADE
[Mobile first — detalhar mobile antes do desktop]

RESTRIÇÕES
- Sem design genérico de praia (ondas, sol, âncora sem refinamento)
- Sem stock photo — só imagens reais de João Pessoa / Vem Passear
- Sem excesso de cores — máximo 3 da paleta por peça
- Sem animações pesadas — mobile primeiro
- CTA WhatsApp em toda peça que precisar de contato

REFERÊNCIAS
[Arquivos de referência em _social/assets/ ou _conhecimento/branding/]

RESULTADO ESPERADO
[Formato de saída: imagem, componente, layout, exportação]
```

**Regra:** Prompt sem contexto de marca → Claude Design produz resultado genérico. Sempre incluir pelo menos: nome, paleta, tom, objetivo e persona.

---

## 8. Critérios de Avaliação Visual

Usar quando o objetivo explícito for **avaliar** uma entrega visual (briefing, mockup, logo, página). Não aplicar automaticamente em toda resposta.

### Critérios Obrigatórios (Bloqueiam Aprovação)

- [ ] A peça pode ser confundida com outra empresa de turismo? → Se sim: **reprovar**
- [ ] CTA está visível sem scroll no mobile? → Se não: **reprovar**
- [ ] Prova social (Cadastur ou avaliação) está presente onde deveria? → Se não: **reprovar**
- [ ] Contraste atende WCAG AA? → Se não: **reprovar**
- [ ] Murillo ou elemento humano presente onde o briefing pedia? → Se não: **reprovar**

### Critérios de Qualidade (Orientam Ajuste)

- [ ] Paleta respeitada (máx. 3 cores de `#5.2`)?
- [ ] Tipografia segue combinação de `#5.3`?
- [ ] Hierarquia visual clara (o que o olho vê primeiro faz sentido)?
- [ ] Espaçamento generoso — não apertado?
- [ ] Mobile-first — funciona perfeitamente em 320px antes de testar desktop?
- [ ] Imagens reais de JP, sem distorção?
- [ ] Sem animações que prejudiquem performance mobile?

### Como Usar os Critérios

```
STATUS: [APROVADO / REQUER AJUSTES / REPROVADO]

Bloqueios (se houver):
- ✗ [critério bloqueante] — [o que está errado e como corrigir]

Ajustes (se aprovado com ressalvas):
- ⚠ [critério de qualidade] — [sugestão de melhoria]

Pontos fortes:
- ✓ [o que está bem — registrar para manter]
```

---

## 9. Restrições para Evitar Design Genérico

Lista de padrões que parecem "turismo" mas não comunicam Vem Passear em Jampa:

### Visuais Proibidos
- Ondas estilizadas simples sem refinamento (clip-art)
- Sol com rosto ou "sol tropical" genérico
- Mapa do Brasil com ponteiro no Nordeste
- Barco genérico sem contexto de JP
- Turista anônimo sem identidade
- "Fundo de praia desfocada" como único elemento de hero
- Paleta amarelo-verde-azul (parece bandeira ou site governamental)
- Fundo gradiente genérico sem foto real

### Frases Visuais Proibidas
Se o design depende de um destes textos para fazer sentido, é genérico demais:
- "Venha conhecer o paraíso"
- "Sua aventura começa aqui"
- "Descubra o nordeste"
- Qualquer frase que funcionaria em Natal, Recife ou Fortaleza

### O Teste do Genérico
> Cubra o nome da empresa na peça. Um turista que está planejando ir a João Pessoa reconheceria que é sobre Vem Passear em Jampa especificamente?

Se não reconhecer → design precisa de mais identidade.

---

## 10. Aplicação no Turismo / Receptivo em João Pessoa

### O Que Torna JP Visualmente Reconhecível

| Elemento | Descrição | Como Usar |
|---------|-----------|-----------|
| Luz | Luz nordestina intensa, sombras definidas, golden hour mais longa | Fotos em horário de saída (manhã cedo ou tarde) |
| Água | Azul-verde cristalino nas piscinas naturais, não azul mediterrâneo | Piscinas de Areia Vermelha, Seixas, Picãozinho |
| Areia | Branca e fina (diferencial — não amarela) | Close de areia com contexto de água |
| Pôr do sol | "Melhor pôr do sol do Brasil" (afirmação local, usar com cuidado) | Hero de campanhas sazonais |
| Arquitetura | Casario histórico de Tambaú, Picãozinho, orla | City tour, contexto local |
| Personagem | Murillo e os turistas reais — não modelos | Foto com rosto, interação real |

### Tom Visual por Tipo de Passeio

| Passeio | Tom Visual Dominante | Paleta de Apoio |
|---------|---------------------|-----------------|
| Seixas (snorkel) | Aventura tranquila, subaquático | Azul-verde intenso, branco |
| Areia Vermelha | Exclusividade, leveza, pôr do sol | Laranja natural, areia clara |
| Picãozinho | Família, acessível, alegre | Azul claro, verde, branco |
| Litoral Sul | Exploração, paisagem aberta | Verde, azul profundo |
| City Tour | Local, história, curiosidade | Terracota, branco antigo, azul |

### Regra para Materiais Comerciais (Vouchers, Impressos)
- CNPJ: 52.077.577/0001-03 — obrigatório em qualquer material oficial
- Cadastur: 52.077.577 — obrigatório em vouchers
- WhatsApp: +55 83 9908-7830 — único canal de contato principal
- Domínio: `https://vempassearjampa.com.br`
- Sem promessas de preço ou disponibilidade em material impresso — direcionar para WhatsApp

---

*Versão: 1.0 | Criado: 2026-04-27 | Fonte: Prompt Murillo Visu .docx*  
*Nível de hierarquia: `_conhecimento/` — só muda com confirmação explícita de Murillo*
