# Prompt — Redesign Visual: Vem Passear em Jampa

---

## Contexto do projeto

Você vai redesenhar **todas as páginas e componentes visuais** de um site de turismo em operação chamado **Vem Passear em Jampa**, agência de passeios em João Pessoa, Paraíba.

O site já existe e está funcional — construído em **Next.js 14, TypeScript e Tailwind CSS**. Ele tem home, listagem de passeios por categoria, página individual de cada passeio, tábua de maré, página Sobre, galeria de fotos, avaliações e CTA para WhatsApp. O que falta é impacto visual, modernidade e força de conversão em **todo o site** — não apenas nas páginas principais.

Quero uma proposta visual completa que cubra **todas as páginas e todos os componentes** listados neste documento. Não crie uma proposta parcial.

**O negócio vende passeios pelo WhatsApp.** Todo clique deve conduzir a esse CTA. Nada mais importa se o visitante não apertar o botão.

---

## Identidade da marca (não alterar)

| Elemento | Valor |
|----------|-------|
| Nome | Vem Passear em Jampa |
| Tom | Acolhedor, local, humano — não corporativo. Nordestino autêntico, sem caricatura |
| Cor primária | `#107997` (teal) |
| Cor secundária | `#092238` (navy profundo) |
| Cor de destaque | `#0E8FA8` (hover do teal) |
| Fundo alternado | `#F7F8F7` (off-white quente) |
| Fonte headings | Lora (serif elegante) |
| Fonte corpo | DM Sans (sans limpo) |
| Contato central | WhatsApp — nenhum outro canal tem a mesma relevância |

**Proibido:** clichê turístico ("paraíso tropical", "cartão postal"), urgência falsa ("últimas vagas", "só hoje"), copy que funcionaria em Natal ou Recife.

---

## Catálogo completo — passeios e páginas do site

### Passeios prioritários (tratamento visual máximo)

| Passeio | Categoria | Preço | Diferencial |
|---------|-----------|-------|-------------|
| Piscinas Naturais do Seixas | piscinas-naturais | R$ 60 | Depende de maré baixa, catamarã com toboágua |
| Areia Vermelha — Catamarã | litoral-norte | R$ 70 | Banco de areia que surge na maré, Cabedelo |
| Picãozinho | piscinas-naturais | R$ 60 | Recifes a 1,5 km de Tambaú, aquário natural |
| Litoral Sul — Roteiro Clássico | litoral-sul | R$ 80 | 4 praias em 1 dia com transfer, Coqueirinho |

Esses quatro recebem hero mais imponente, badge, preço visível e CTA WhatsApp dominante.

### Demais passeios (tratamento padrão, mas consistente)

| Passeio | Categoria |
|---------|-----------|
| Litoral Norte — Roteiro Clássico | litoral-norte |
| Pôr do Sol no Rio Jacaré (Catamarã) | litoral-norte |
| City Tour João Pessoa | city-tour |
| Piscinas Naturais da Penha | piscinas-naturais |
| Mergulho (Piscinas Naturais) | piscinas-naturais |
| Coqueirinho | litoral-sul |
| Praia Bela | litoral-sul |
| Tambaba | litoral-sul |
| Quadriciclo Coqueirinho | litoral-sul |
| Lancha Privativa | litoral-norte |
| Combo Areia Vermelha | litoral-norte |

### Pacotes

| Pacote | Preço |
|--------|-------|
| Pacote 3 Dias Completo | R$ 400 individual / R$ 700 dupla |
| Pacote 3 Dias Básico | R$ 280 individual / R$ 430 dupla |
| Pacote Super Econômico | R$ 140 individual / R$ 260 dupla |

### Páginas estáticas e utilitárias

| Página | Função |
|--------|--------|
| Home | Primeira impressão, hero + filtro + cards |
| Listagem por categoria | `/passeios/litoral-norte`, `/passeios/litoral-sul` etc. |
| Tábua de Marés | Ferramenta técnica + CTA de reserva |
| Sobre a Vem Passear | Credibilidade institucional |
| Contato / WhatsApp | Direcionamento final para conversão |

### Componentes globais

Header (navegação), Footer, Card de passeio, Galeria de fotos, Bloco de avaliações, Badges comerciais, CTA sticky mobile, Bloco de preço e reserva, Bloco de confiança (Cadastur, guias credenciados).

---

## O que preciso que você crie

Crie **mockups/wireframes de alta fidelidade** (ou especificações CSS/Tailwind prontas para implementar) de **todas as páginas e componentes listados abaixo**. Não é uma proposta parcial — quero o site inteiro redesenhado com consistência visual.

Para cada item, entregue versão **mobile (375px)** e **desktop (1280px)**. Componentes globais (header, footer, card) só precisam ser desenhados uma vez — mas devem ser referenciados em todas as páginas onde aparecem.

---

### 1. Home — seção hero e listagem de passeios

**Situação atual:** hero com vídeo de fundo e chamada simples. Cards básicos abaixo.

**O que quero:**
- Hero com foto real de alta qualidade (não vídeo), título grande e impactante, subtítulo localizado ("João Pessoa, Paraíba"), e botão WhatsApp proeminente. Fundo pode ter gradiente sutil sobre a foto para garantir legibilidade.
- Abaixo do hero: filtro rápido por categoria (Piscinas Naturais / Litoral Sul / Litoral Norte / Pacotes) — estilo chip/pill, sem recarregar a página.
- Grid de cards de passeios — Mobile: 1 card por linha para cards completos com imagem, preço e CTA. Usar 2 colunas apenas em versão compacta sem dois botões. Desktop: 3 colunas.

---

### 2. Card de passeio — componente reutilizável

**Situação atual:** card simples com imagem, nome, preço e link.

**O que quero:**
- Imagem de capa ocupando 60% do card, com overlay de gradiente na base para legibilidade do texto.
- Nome do passeio em Lora, bold.
- Preço em destaque visual (não discreto).
- Badge comercial no canto superior — exemplos: `Mais vendido`, `Imperdível`, `Depende da maré`, `Promoção da semana`, `Vagas limitadas`. Cada badge com cor própria (teal, laranja, roxo, vermelho).
- Duração e ponto de saída em linha discreta abaixo do nome.
- Botão "Ver passeio" e botão secundário "Chamar no WhatsApp" — ambos visíveis sem scroll dentro do card.
- Estado hover no desktop: leve elevação com sombra e leve zoom na imagem.

---

### 3. Página de passeio individual — redesign de impacto

**Situação atual:** hero com foto, seção de incluso/não incluso, FAQ, galeria e CTA.

**O que quero:**

**Hero da página:**
- Foto real em fullwidth, altura mínima de 60vh no mobile.
- Gradiente escuro de baixo para cima sobre a foto.
- Sobre o gradiente: nome do passeio (Lora, grande), subtítulo de 1 linha, badge de preço com destaque visual (`A partir de R$ 60`), e botão CTA WhatsApp com ícone — fixo mesmo ao scrollar (sticky bottom no mobile).

**Barra de informações rápidas:**
- Logo abaixo do hero: 4 ícones horizontais — Duração / Saída / Preço / Nível de dificuldade (fácil/moderado). Visual de ficha técnica.

**Galeria:**
- Grade de 3 fotos no mobile (1 grande + 2 menores), 5 no desktop.
- Ao clicar, abre lightbox fullscreen com setas de navegação.
- Legenda opcional sob cada foto.

**Bloco "Por que reservar com a gente":**
- 3 a 4 ícones com argumento de confiança: Cadastur ativo · Guias credenciados · Pagamento seguro · Atendimento personalizado no WhatsApp.
- Visual clean, não poluído.

**Bloco de preço e CTA:**
- Caixa de destaque com preço, o que está incluso em bullet resumido, e dois botões: "Reservar pelo WhatsApp" (primário, cheio) e "Ver o que está incluso" (secundário, outline).
- Este bloco deve aparecer pelo menos duas vezes na página: após a galeria e ao final.

**CTA Sticky (mobile):**
- Barra fixa no rodapé do mobile com: preço + botão WhatsApp full-width. Desaparece ao chegar no CTA final da página.

---

### 4. Galeria de fotos — componente standalone

**Situação atual:** grade simples sem lightbox.

**O que quero:**
- Grade masonry ou 3 colunas com alturas variadas.
- Hover: overlay escuro com ícone de lupa e nome da foto.
- Lightbox ao clicar: fullscreen, fundo escuro, navegação com setas e teclado, contador (foto 3 de 8), botão fechar.
- Scroll suave entre fotos no mobile (swipe gesture).

---

### 5. Bloco de avaliações e prova social

**Situação atual:** avaliações do Google Maps em carrossel básico.

**O que quero:**
- Rating geral em destaque: estrelas grandes + nota (ex: "4,9") + número de avaliações.
- Cards de avaliação: foto do avaliador (inicial ou avatar gerado), nome, cidade de origem, estrelas, texto da avaliação (truncado com "ver mais"), data.
- Mobile: 1 avaliação por vez em carrossel limpo. Desktop: até 3 avaliações lado a lado.
- Abaixo dos cards: botão "Ver todas as avaliações no Google" com ícone Google.
- Logotipo Google visible e sutil para credibilidade.

---

### 6. Badges comerciais — sistema completo

Crie um sistema visual de badges reutilizáveis:

| Badge | Cor | Ícone sugerido |
|-------|-----|---------------|
| Mais vendido | teal `#107997` | 🔥 ou estrela |
| Imperdível | laranja `#E05C00` | ⚡ |
| Depende da maré | azul `#0056B3` | 🌊 |
| Promoção da semana | vermelho `#C0392B` | % |
| Vagas limitadas | roxo `#7D3C98` | ⏳ |
| Família | verde `#27AE60` | 👨‍👩‍👧 |

Cada badge: pill com ícone + texto, fonte pequena bold, fundo colorido, texto branco. Tamanho adequado para caber no canto do card sem cobrir a imagem.

---

### 7. Tábua de marés — página mais bonita e didática

**Situação atual:** tabela técnica funcional mas sem apelo visual.

**O que quero:**
- Destaque visual para o próximo horário de maré baixa (hoje ou amanhã) — caixa em evidência com horário, nível e se é favorável para o passeio.
- Gráfico de linha simples mostrando variação da maré ao longo do dia — estilo "wave" suave, azul/teal.
- Tabela abaixo com os horários do mês: linhas alternadas, coluna de maré baixa destacada em verde, maré alta em azul.
- Explicação simples: "Por que a maré baixa importa?" — 2 linhas, ícone de coral.
- CTA embaixo: "Consultar melhor data para seu passeio → WhatsApp".

---

### 8. Header — navegação global

**Situação atual:** header simples com logo e links de menu.

**O que quero:**
- Logo à esquerda (sem alterar a wordmark).
- Menu desktop: links de categoria (Piscinas Naturais / Litoral Norte / Litoral Sul / Pacotes / Sobre) — estilo limpo, sem dropdown pesado.
- Botão "Reservar pelo WhatsApp" no canto direito — sempre visível no desktop, sempre presente.
- Mobile: hambúrguer abre um drawer lateral ou menu sheet com os mesmos links + botão WhatsApp full-width na base.
- Header com fundo branco/semi-transparente ao scroll. Sem header colorido sobre hero — a foto deve respirar.
- Indicador visual de página ativa.

---

### 9. Footer — rodapé completo

**Situação atual:** footer mínimo com copyright.

**O que quero:**
- 3 colunas no desktop, empilhadas no mobile.
- Coluna 1: logo + slogan curto + Cadastur e número de registro.
- Coluna 2: links rápidos (passeios por categoria, tábua de marés, sobre, contato).
- Coluna 3: contato — botão WhatsApp grande, e-mail, redes sociais (ícones).
- Faixa inferior: copyright + "Agência credenciada pelo Cadastur".
- Fundo navy `#092238`, texto branco.

---

### 10. Listagem de passeios por categoria

**Páginas:** `/passeios`, `/passeios/litoral-norte`, `/passeios/litoral-sul`, `/passeios/piscinas-naturais`, `/passeios/pacotes`, `/passeios/city-tour`

**Situação atual:** grade de cards sem contexto visual de categoria.

**O que quero:**
- Hero de categoria: foto representativa da categoria, título da categoria em Lora, subtítulo de 1 linha com o que o turista vai encontrar.
- Filtro de badges acima da grade (ex: "Depende da maré" / "Com transfer" / "Privativo") — pill toggle.
- Grade de cards: 2 colunas mobile, 3 desktop — usando o novo card redesenhado.
- Sem paginação: scroll infinito ou "ver mais" com carregamento suave.
- Breadcrumb sutil acima do hero: `Passeios › Litoral Norte`.

---

### 11. Página de passeio — variações visuais por categoria

A estrutura da página individual é a mesma para todos os passeios (já definida na seção 3), mas cada categoria tem diferencial visual:

**Piscinas Naturais (Seixas, Picãozinho, Penha, Mergulho):**
- Hero com alerta de maré integrado — caixa sutil abaixo do título: "Passeio sujeito à maré baixa · Consulte data disponível".
- Bloco "Próxima saída favorável" logo após o hero, com horário e data.
- Badge `Depende da maré` proeminente.

**Litoral Norte (Areia Vermelha, Pôr do Sol Jacaré, Lancha Privativa):**
- Hero com localização geográfica em destaque: "Cabedelo · 20 min de João Pessoa".
- Pôr do Sol Jacaré: faixa de cores quentes (laranja/dourado) no hero — única exceção à paleta teal.

**Litoral Sul (Roteiro Clássico, Coqueirinho, Praia Bela, Quadriciclo):**
- Hero horizontal com sequência de praias do roteiro — visual de "jornada".
- Badge `Transfer incluso` visível no card e na página.

**City Tour:**
- Hero com foto do centro histórico de João Pessoa — arquitetura colonial.
- Seção de pontos do roteiro no estilo mapa visual simplificado (ícones de localização em linha).

**Pacotes:**
- Hero com colagem de 3 fotos (uma por dia do pacote) — grid 3:1 ou collage.
- Tabela comparativa entre os 3 pacotes (Básico / Completo / Super Econômico) — lado a lado no desktop, empilhada no mobile.
- Badge de economia em destaque: "Economize R$ X em relação ao avulso".

---

### 12. Página Sobre

**Situação atual:** texto institucional básico.

**O que quero:**
- Hero com foto do Murillo (fundador) ou da equipe em ação num passeio.
- Bloco de história: "Por que a Vem Passear existe" — tom pessoal, não corporativo.
- Bloco de credenciais: Cadastur ativo, anos de operação, número de turistas atendidos (se confirmado), passeios operados — visual de números grandes (ex: "500+ turistas em 2024").
- Depoimentos curtos de turistas — 2 ou 3 cards compactos.
- CTA final: "Fale com a gente antes de reservar" → botão WhatsApp.

---

### 13. Página de Contato / WhatsApp

**Situação atual:** não existe como página dedicada — o contato é via botões espalhados.

**O que quero (pode ser uma seção na home ou página `/contato`):**
- Headline: "Dúvida antes de reservar? A gente responde rápido."
- Botão WhatsApp grande e central, com texto: "Chamar no WhatsApp agora".
- Horário de atendimento abaixo do botão.
- Opção secundária: e-mail (menos proeminente).
- Fundo teal ou navy — página curta, direta ao ponto.

---

## Restrições visuais

- **Mobile-first obrigatório.** Toda decisão de layout parte de 375px.
- Nenhum componente pode esconder o CTA WhatsApp abaixo do dobramento no mobile.
- Imagens devem ter `alt` descritivo e respeitar proporção 16:9 ou 4:3 nos cards.
- Não usar animações pesadas. Transições máximo 300ms, `ease-in-out`.
- Acessibilidade mínima WCAG AA: contraste de texto sobre fundo, foco visível nos botões.
- Não usar fontes externas além de Lora e DM Sans (já carregadas via `next/font/google`).

---

## Referências de estilo (para inspiração — não copiar)

- Sites turísticos com visual limpo, fotos em destaque, CTAs claros
- Estética: tropical premium acessível — bonito, mas não elitista
- Paleta fria dominante (teal/navy) com pontos de calor em badges e CTAs
- Fotos reais de João Pessoa como hero — sem banco de imagem genérico

---

## Formato de entrega esperado

Para cada componente, entregue **nesta ordem**:

1. **Mockup visual** (print, imagem ou HTML/CSS renderizável)
2. **Especificação Tailwind** dos tokens principais (classes, cores, espaçamentos)
3. **Notas de implementação** — o que muda em relação ao componente atual, se houver restrição técnica, e qual arquivo Next.js seria afetado
4. **Prioridade de implementação** — qual componente implementar primeiro para maior impacto comercial

---

## Ordem de prioridade de implementação

### Fase 1 — Componentes globais (impacto imediato em todas as páginas)
1. Card de passeio redesenhado (aparece em home, listagens e relacionados)
2. Sistema de badges comerciais
3. Header — navegação + botão WhatsApp
4. Footer — completo com Cadastur e links

### Fase 2 — Páginas de passeio (onde a venda acontece)
5. Hero da página individual + barra de informações rápidas + CTA sticky mobile
6. Bloco de preço + CTA (duplicado no início e no fim da página)
7. Galeria com lightbox
8. Bloco de avaliações e prova social
9. Variações visuais por categoria: Piscinas Naturais (alerta maré), Litoral Norte (Pôr do Sol), Litoral Sul (roteiro visual), City Tour (mapa de pontos), Pacotes (tabela comparativa)

### Fase 3 — Home e listagens
10. Home — hero + filtro de categoria + grid de cards
11. Listagem por categoria — hero de categoria + filtro de badges

### Fase 4 — Páginas institucionais e utilitárias
12. Tábua de Marés — visual com gráfico e tabela destacada
13. Página Sobre — história, credenciais, depoimentos
14. Página de Contato / WhatsApp

---

## Entrega esperada — resumo

Ao finalizar, quero ter em mãos:

- Mockup visual de cada página e componente listados (mobile + desktop)
- Especificação Tailwind dos tokens visuais usados
- Notas de implementação por componente (qual arquivo Next.js é afetado)
- Ordem de implementação recomendada com justificativa comercial

Se precisar dividir a entrega em blocos por fase, siga a ordem das fases acima.
