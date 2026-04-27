# Pacote Lovable — Homepage Vem Passear em Jampa

**Gerado em:** 2026-04-27
**Skill:** `lovable-site-builder` v1.0
**Página:** Homepage — `https://vempassearjampa.com.br/`
**Status:** Pronto para colar no Lovable.dev — aguardando substituição dos placeholders de foto e avaliações

**Fontes consultadas:**
- `_conhecimento/empresa.md`
- `_conhecimento/passeios.md`
- `_conhecimento/tom-de-voz.md`
- `_conhecimento/clusters-seo.md`
- `_conhecimento/provas-de-confianca.md`
- `_conhecimento/estrutura-site-recomendada.md`
- `_conhecimento/publico-alvo.md`
- `_memoria/decisoes-estrategicas.md` §3, §22, §26, §31, §33
- `_site/data/tabua-mares.ts`

---

## PARTE 1 — DADOS CONFIRMADOS

| Campo | Valor | Fonte |
|-------|-------|-------|
| Domínio | `https://vempassearjampa.com.br` | decisoes-estrategicas.md §26 |
| WhatsApp | `https://wa.me/558399087830` | decisoes-estrategicas.md §22 |
| Cadastur | 52.077.577 (ativo até 16/12/2026) | empresa.md, provas-de-confianca.md |
| Avaliação Google | 4.9/5 | provas-de-confianca.md |
| Total de passeios | 29 | passeios.md |
| Categorias | 7 (Pacotes, Litoral Sul, Litoral Norte, Piscinas Naturais, City Tour, Interestaduais, Serviços) | passeios.md |
| Preço mínimo | R$ 60 (Piscinas Naturais compartilhado) | passeios.md §índice |
| Preço Areia Vermelha | R$ 70 | passeios.md §índice |
| Preço Litoral Sul Clássico | R$ 80 | passeios.md §índice |
| Passeios com maré | Seixas, Penha, Picãozinho, Areia Vermelha | passeios.md §condições operacionais |
| Transfer incluído | Tambaú, Cabo Branco, Manaíra, Bessa | passeios.md §transfer |
| Rosto da marca | Murillo (proprietário, atendimento direto) | empresa.md, decisoes-estrategicas.md §3 |
| Top 3 passeios (SEO) | Seixas, Areia Vermelha, Litoral Sul Clássico | clusters-seo.md §Quick Wins |
| Cor primária | #FF6B35 | CLAUDE.md |
| Cor secundária | #004E89 | CLAUDE.md |
| Cor WhatsApp | #25D366 | padrão oficial |
| Fontes | Inter (body), Lora (headings) | CLAUDE.md |
| Tom de voz | Acolhedor, orientador, humano, local | tom-de-voz.md |
| Missão da marca | "Tornar a viagem em João Pessoa mais simples, segura, bem organizada, com atendimento rápido e preço justo." | empresa.md |
| CTA único | WhatsApp — nunca email, nunca formulário | decisoes-estrategicas.md §1 |

---

## PARTE 2 — LACUNAS [CONFIRMAR COM MURILLO]

| # | Lacuna | Impacto | Comportamento no prompt |
|---|--------|---------|------------------------|
| L1 | Número exato de avaliações Google (ex: "147 avaliações") | Médio | Placeholder: "4.9/5 ⭐ no Google" sem número |
| L2 | Anos em operação (ex: "desde 2019") | Médio | Campo omitido — não menciona |
| L3 | Foto real de Murillo (ambiente de praia ou embarcação) | Alto | Placeholder descritivo no prompt |
| L4 | Fotos reais dos 3 passeios em destaque (cards) | Alto | Placeholder por passeio: "foto aérea de Seixas", etc. |
| L5 | Avaliações reais transcritas do Google Maps (texto + nome) | Alto | Cards de avaliação como placeholder visual — sem texto inventado |
| L6 | Depoimentos reais de clientes (nome + texto autorizado) | Médio | Bloco marcado como placeholder explícito |
| L7 | URL do perfil Google Maps | Baixo | Placeholder: `[CONFIRMAR COM MURILLO: link perfil Google Maps]` |
| L8 | Dados de maré maio/2026 revisados por Murillo (`revisadoPorMurillo: true`) | Crítico | Card de maré renderizado como estático — fallback "Consulte no WhatsApp" |
| L9 | Foto hero principal da homepage (panorâmica João Pessoa) | Alto | Placeholder: "foto panorâmica das praias de João Pessoa" |

**Total:** 9 lacunas — nenhuma impede geração do prompt. Todas marcadas com placeholder. Nenhum dado inventado.

---

## PARTE 3 — BRIEFING DA HOMEPAGE

### Objetivo da Página

Capturar turista que está em João Pessoa agora, eliminar desconfiança em 5 segundos, e converter para WhatsApp com Murillo.

**Arquitetura:** Hub central — linka para 7 clusters, 29 passeios, FAQ e blog.
**Jornada:** Descoberta → Confiança → Orientação → Contato WhatsApp.
**Dispositivo prioritário:** Mobile 320px (70–80% do tráfego estimado).

---

### Estrutura de Blocos (Ordem Exata)

```
H1  — Hero Principal
H2  — Prova Social Rápida (above the fold mobile)
H3  — Top 3 Passeios em Destaque
H4  — Clusters / Categorias
H5  — Como Funciona Reservar (3 passos)
H6  — Diferenciais da Vem Passear (com foto de Murillo)
H7  — Passeios com Tábua de Maré (explicação)
H8  — Próximas Saídas Disponíveis (card estático)
H9  — Avaliações / Prova Social
H10 — FAQ Rápida (6 perguntas, accordion)
H11 — CTA Final (fundo #004E89)
H12 — Rodapé
[STICKY] — Botão WhatsApp fixo no bottom (mobile only)
```

---

### Conteúdo Detalhado por Bloco

**H1 — Hero Principal**
- Fundo: foto panorâmica João Pessoa + overlay escuro gradiente (opacity 0.55)
- Headline (Lora, bold, branco): "Passeios em João Pessoa com quem conhece Jampa de verdade"
- Subtítulo (Inter, regular, branco 90%): "29 roteiros organizados, atendimento rápido no WhatsApp e preço justo. Curta Jampa com a gente."
- CTA primário: botão verde #25D366 + ícone WhatsApp — "Falar com Murillo no WhatsApp →"
- CTA secundário: link branco — "Ver todos os passeios ↓" → âncora #passeios-destaque

**H2 — Prova Social Rápida** *(barra imediatamente abaixo do hero)*
- 3 itens: Cadastur 52.077.577 ✓ | 4.9/5 ⭐ no Google | Respondemos rápido (WhatsApp)
- Mobile: empilhado | Desktop: linha horizontal

**H3 — Top 3 Passeios em Destaque** *(id="passeios-destaque")*
- 3 cards (stack mobile / 3 colunas desktop):
  - **Seixas**: R$ 60 · ~3h30 · Tambaú · Maré · "Pise nas piscinas de coral no ponto mais oriental das Américas."
  - **Areia Vermelha**: R$ 70 · ~3h · Conforme maré · "O banco de areia que aparece no meio do mar."
  - **Litoral Sul Clássico**: R$ 80 · 8h · 8h–9h · "4 praias ao sul de João Pessoa — Gramame, Amor, Tambaba, Coqueirinho."
- Botão outline: "Ver todos os 29 passeios →" → /passeios/

**H4 — Categorias (Onde Você Quer Ir?)**
- Fundo: #F8F8F8
- 5 cards: 🐠 Piscinas Naturais (4) | 🏖️ Litoral Sul (6) | 🌅 Litoral Norte (5) | 🏛️ City Tour (1) | ✈️ Interestaduais (3)
- Grid 2×3 mobile | linha 5 desktop

**H5 — Como Funciona Reservar**
- 3 passos: Escolha → Fale no WhatsApp → Apareça e aproveite
- Botão: "Falar com Murillo agora →" → WhatsApp

**H6 — Diferenciais** *(fundo #004E89, texto branco)*
- Foto de Murillo à direita (desktop) / topo (mobile)
- 4 diferenciais: 🛡️ Cadastur | 📲 Atendimento Rápido | 💰 Preço Justo | 🧭 Você Sai Orientado

**H7 — Passeios com Tábua de Maré** *(fundo #EBF5FB)*
- Explicação de como funciona a maré
- 4 badges: Seixas · Penha · Picãozinho · Areia Vermelha
- CTA: "Consultar próximas saídas" → WhatsApp

**H8 — Próximas Saídas Disponíveis**
- Card visual estático (lógica dinâmica injetada pelo Next.js em produção)
- Fallback: "Consulte no WhatsApp — respondemos rápido"
- Link: "Ver calendário completo →" → /passeios/piscinas-naturais/calendario

**H9 — Avaliações / Prova Social**
- "4.9/5 ⭐ no Google"
- 3 cards placeholder (sem texto inventado)
- Link: "Ver todas as avaliações →" → [CONFIRMAR COM MURILLO: link Google Maps]

**H10 — FAQ Rápida** *(fundo #F8F8F8, accordion)*
- P1: Como funciona a reserva?
- P2: Quanto custa um passeio?
- P3: O que está incluso?
- P4: O que é a tábua de marés e por que importa?
- P5: Posso levar crianças?
- P6: Vocês são uma agência oficial?

**H11 — CTA Final** *(fundo #004E89)*
- "Pronto para conhecer João Pessoa?"
- "Fale com Murillo no WhatsApp — te ajudo a escolher o melhor roteiro, com atendimento rápido e preço justo."
- Botão: "Falar com Murillo agora →" (verde #25D366)

**H12 — Rodapé** *(fundo #1a1a1a)*
- 4 colunas desktop / stack mobile
- Marca | Passeios | Navegação | Institucional
- "Cadastur 52.077.577 · CNPJ 52.077.577/0001-03 · João Pessoa — PB"

**[STICKY] Botão WhatsApp fixo**
- Mobile only (hidden ≥768px)
- Fixed bottom-0, fundo #25D366, altura 56px
- Aparece após 30% de scroll

---

### Direção Visual

| Elemento | Decisão |
|----------|---------|
| Clima geral | Tropical premium — confiança nordestina. Mar azul-turquesa + laranja de pôr-do-sol. |
| Hero | Foto de praia água cristalina (Seixas/Areia Vermelha). Overlay escuro gradiente. |
| Paleta primária | #FF6B35 — CTAs secundários, destaques, ícones, badges de preço |
| Paleta secundária | #004E89 — rodapé, CTA final, bloco de diferenciais, elementos de contraste |
| WhatsApp | Sempre #25D366 — nunca laranja, nunca azul |
| Cards | rounded-2xl, shadow-md, foto 16:9 no topo, badge de preço em laranja |
| Tipografia | Lora em headings (elegância local), Inter em body (legibilidade) |
| Espaçamento | Generoso — não sobrecarregado. Mobile respira. |
| Fotos | Reais, quentes, naturais — sem stock genérico |
| Mobile sticky | CTA WhatsApp fixo no bottom, thumb-friendly (min 52px) |

---

## PARTE 4 — PROMPT FINAL PARA LOVABLE.DEV

<!-- INÍCIO DO BLOCO: PROMPT FINAL PARA LOVABLE -->

```
Crie a homepage do site da Vem Passear em Jampa.

## Contexto do negócio
Vem Passear em Jampa é uma agência de turismo receptivo em João Pessoa — PB, operada por Murillo (proprietário e atendimento direto). Missão: tornar a viagem em João Pessoa mais simples, segura e bem organizada, com atendimento rápido e preço justo.

- Site oficial: https://vempassearjampa.com.br
- WhatsApp: https://wa.me/558399087830
- Cadastur: 52.077.577 (ativo, Ministério do Turismo)
- Avaliação Google: 4.9/5 ⭐
- 29 passeios em 7 categorias
- CTA principal e ÚNICO: WhatsApp. Nunca email, nunca formulário.

## Stack técnica
Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS

Design tokens:
- Primário (laranja): #FF6B35 → usar em CTAs secundários, destaques, ícones
- Secundário (azul): #004E89 → usar em rodapé, CTA final, contraste
- WhatsApp: #25D366 (verde oficial) → APENAS nos botões de WhatsApp
- Fonte headings: Lora (Google Fonts, serif)
- Fonte body: Inter (Google Fonts, sans-serif)
- Border radius padrão: rounded-2xl nos cards
- Sombra padrão: shadow-md nos cards

Breakpoints:
- Mobile-first: projetar para 320px primeiro
- Tablet: 768px
- Desktop: 1024px

## Estrutura da homepage (ordem exata, de cima para baixo)

---

### BLOCO H1 — HERO PRINCIPAL

Ocupa 100vh em mobile e ~90vh em desktop.

Conteúdo:
- Imagem de fundo: [PLACEHOLDER: foto panorâmica das praias de João Pessoa — Seixas ou Areia Vermelha — água azul-turquesa. Foto horizontal, quente, natural. Adicionar overlay escuro gradiente de baixo para cima com opacity 0.55 para o texto respirar]
- Headline (Lora, bold, branco): "Passeios em João Pessoa com quem conhece Jampa de verdade"
  — Em mobile: máx 28px, em desktop: 48px
- Subtítulo (Inter, regular, branco 90%): "29 roteiros organizados, atendimento rápido no WhatsApp e preço justo. Curta Jampa com a gente."
  — Em mobile: 16px | desktop: 20px
- CTA primário (botão grande, fundo #25D366, texto branco, ícone WhatsApp à esquerda):
  Texto: "Falar com Murillo no WhatsApp →"
  Link: https://wa.me/558399087830?text=Oi%2C+quero+saber+sobre+os+passeios+em+Jo%C3%A3o+Pessoa
  Altura mínima: 52px. Largura total em mobile.
- CTA secundário (link, branco, sublinhado suave):
  Texto: "Ver todos os passeios ↓"
  Link: âncora #passeios-destaque

Comportamento mobile:
- Texto centralizado
- Botão WhatsApp ocupa 100% da largura
- CTAs empilhados verticalmente

---

### BLOCO H2 — PROVA SOCIAL RÁPIDA

Barra horizontal logo abaixo do hero. Fundo branco. Padding vertical: 16px.

3 itens em linha (desktop) / coluna (mobile):
1. Ícone escudo + texto: "Cadastur 52.077.577 ✓" (cor: #004E89)
2. Ícone estrela + texto: "4.9/5 ⭐ no Google" (cor: #FF6B35)
3. Ícone WhatsApp verde + texto: "Respondemos rápido" (cor: #25D366)

Mobile: os 3 itens empilhados, centralizados, separados por linha divisória suave.
Desktop: linha horizontal, separados por divisor vertical.

---

### BLOCO H3 — TOP 3 PASSEIOS EM DESTAQUE

id="passeios-destaque"

Título (Lora, H2, #1a1a1a): "Os Passeios Mais Procurados"
Subtítulo (Inter, regular, cinza): "Nossos roteiros mais escolhidos pelos turistas que chegam em João Pessoa"

3 cards de passeio. Layout: stack em mobile / 3 colunas em desktop.

Estrutura de cada card (rounded-2xl, shadow-md, fundo branco):
- Topo: foto do passeio (aspect-ratio 16:9, object-cover)
  — Badge no canto superior direito (fundo #FF6B35, texto branco): preço (ex: "R$ 60")
  — Badge no canto superior esquerdo (fundo #004E89, texto branco, apenas se dependeDeMare): "🌊 Sujeito à maré"
- Corpo do card: padding 16px
  — Nome do passeio (Lora, bold, 18px)
  — Linha de info (Inter, 14px, cinza): ícone relógio + duração | ícone pin + local de saída
  — Descrição curta (Inter, 14px, 2 linhas max)
- Rodapé do card:
  — Botão "Quero ir →" (fundo #FF6B35, texto branco, rounded-xl, width 100%)
  — Link: https://wa.me/558399087830?text=[texto pré-preenchido do passeio]

CARD 1 — Piscinas Naturais do Seixas
- Foto: [PLACEHOLDER: foto aérea ou horizontal do Seixas — piscinas de coral, água turquesa, João Pessoa]
- Preço: R$ 60
- Duração: ~3h30
- Saída: Praia de Tambaú
- dependeDeMare: true (mostrar badge azul)
- Descrição: "Pise nas piscinas de coral no ponto mais oriental das Américas. Experiência única."
- CTA link: https://wa.me/558399087830?text=Oi%2C+quero+saber+sobre+o+passeio+de+Seixas

CARD 2 — Areia Vermelha — Catamarã
- Foto: [PLACEHOLDER: foto do banco de areia de Areia Vermelha — catamarã, pessoas, mar azul]
- Preço: R$ 70
- Duração: ~3h
- Saída: Conforme tábua de marés
- dependeDeMare: true (mostrar badge azul)
- Descrição: "O banco de areia que aparece no meio do mar. As piscinas de coral mais fotogênicas do litoral."
- CTA link: https://wa.me/558399087830?text=Oi%2C+quero+saber+sobre+o+passeio+de+Areia+Vermelha

CARD 3 — Litoral Sul — Roteiro Clássico
- Foto: [PLACEHOLDER: foto de praia do litoral sul — Coqueirinho ou Tambaba — natureza, verde, mar]
- Preço: R$ 80
- Duração: 8h
- Saída: 8h–9h
- dependeDeMare: false (sem badge de maré)
- Descrição: "Um dia percorrendo as praias mais bonitas ao sul de João Pessoa — Gramame, Amor, Tambaba, Coqueirinho."
- CTA link: https://wa.me/558399087830?text=Oi%2C+quero+saber+sobre+o+Litoral+Sul+Cl%C3%A1ssico

Abaixo dos cards: botão outline (borda #FF6B35, texto #FF6B35):
"Ver todos os 29 passeios →" → /passeios/

---

### BLOCO H4 — CATEGORIAS (ONDE VOCÊ QUER IR?)

Fundo: cinza muito claro (#F8F8F8).
Título (Lora, H2): "Para Onde Você Quer Ir?"

5 cards de categoria em grid 2×3 mobile / linha 5 desktop (rounded-2xl, fundo branco, shadow-sm):
- Ícone grande centralizado (60px)
- Nome da categoria (Lora, bold)
- Quantidade de passeios (Inter, cinza, pequeno)
- Card clicável → link para cluster

1. 🐠 Piscinas Naturais — 4 passeios → /passeios/piscinas-naturais/
2. 🏖️ Litoral Sul — 6 passeios → /passeios/litoral-sul/
3. 🌅 Litoral Norte — 5 passeios → /passeios/litoral-norte/
4. 🏛️ City Tour — 1 passeio → /passeios/city-tour/
5. ✈️ Interestaduais — 3 destinos → /passeios/interestaduais/

---

### BLOCO H5 — COMO FUNCIONA RESERVAR

Título (Lora, H2): "Reservar é Simples"

3 passos em linha (desktop) / coluna (mobile). Número grande (72px, #FF6B35) + título + descrição:

PASSO 1 — "Escolha seu passeio"
"Navegue pelos roteiros ou me conta o que você quer — eu te ajudo a escolher o melhor para o seu dia."

PASSO 2 — "Fale com Murillo no WhatsApp"
"Respondo rápido. Te explico horário, o que levar, condição da maré. Sem robô, sem espera."

PASSO 3 — "Apareça e aproveite"
"Transfer incluso em muitos passeios. Você só precisa chegar no ponto de embarque combinado."

Botão abaixo dos passos (fundo #25D366, texto branco):
"Falar com Murillo agora →" → https://wa.me/558399087830?text=Oi%2C+quero+reservar+um+passeio+em+Jo%C3%A3o+Pessoa

---

### BLOCO H6 — DIFERENCIAIS DA VEM PASSEAR

Fundo: #004E89 (azul escuro). Texto: branco.
Layout desktop: foto de Murillo à direita (50%) + diferenciais à esquerda (50%).
Layout mobile: diferenciais empilhados.

Foto de Murillo: [PLACEHOLDER: foto de Murillo em ambiente de praia ou embarcação — sorrindo, casual, confiante. Aspecto 3:4 ou quadrado]

Título (Lora, H2, branco): "Por Que Turistas Escolhem a Vem Passear Jampa"
Subtítulo (Inter, branco 80%): "4.9/5 ⭐ no Google — e os comentários sempre dizem a mesma coisa:"

4 diferenciais (ícone branco 32px + título bold branco + descrição branco 80%):

🛡️ Cadastur Oficial
"Agência registrada no Ministério do Turismo. Cadastur 52.077.577. Você verifica — é real."

📲 Atendimento Rápido
"Murillo responde no WhatsApp. Sem robô, sem call center, sem demora. Pessoa real, resposta real."

💰 Preço Justo
"O que você vê é o que você paga. Sem taxa escondida, sem surpresa na hora de reservar."

🧭 Você Sai Orientado
"Não empurramos passeio. Te ajudamos a escolher o roteiro certo para o seu tempo e seu grupo."

---

### BLOCO H7 — PASSEIOS COM TÁBUA DE MARÉ

Fundo: azul muito claro (#EBF5FB). Borda top/bottom suave.
Título (Lora, H2, #004E89): "Piscinas Naturais: o que você precisa saber"

Texto explicativo (Inter, 16px, #1a1a1a, máx 600px de largura):
"Seixas, Penha, Picãozinho e Areia Vermelha são piscinas de coral que só ficam visíveis quando a maré está baixa. Quando acontece, a água fica cristalina e dá para caminhar sobre os recifes. Murillo acompanha a tábua de marés e avisa quando o momento é ideal."

Ícone de ondas grande centralizado (80px, cor #004E89).

4 badges dos passeios dependentes:
- 🐠 Seixas
- ⛵ Penha
- 🌊 Picãozinho
- 🏖️ Areia Vermelha

CTA (botão outline borda #004E89, texto #004E89):
"Consultar próximas saídas disponíveis →" → https://wa.me/558399087830?text=Oi%2C+quero+saber+as+pr%C3%B3ximas+sa%C3%ADdas+das+piscinas+naturais

---

### BLOCO H8 — PRÓXIMAS SAÍDAS DISPONÍVEIS

Título (Lora, H2): "Próximas Saídas — Piscinas Naturais"

Card visual estático (rounded-2xl, sombra, fundo branco, borda esquerda 4px #FF6B35):
Linha: ícone ondas | "Seixas · Picãozinho · Areia Vermelha" | "Saída: [HORÁRIO]" | "Maré: [ALTURA]m" | badge verde "Boa"

Fallback (visível quando dados não disponíveis):
"Consulte disponibilidade direto no WhatsApp — respondemos rápido."
Botão: "Consultar no WhatsApp →" → https://wa.me/558399087830?text=Oi%2C+quais+as+pr%C3%B3ximas+sa%C3%ADdas%3F

Nota visual (Inter, 12px, cinza): "Datas e horários sujeitos à tábua de marés da Marinha do Brasil."

Link abaixo do card (Inter, #FF6B35, sublinhado):
"Ver calendário completo de saídas →" → /passeios/piscinas-naturais/calendario

IMPORTANTE PARA O LOVABLE: este card é visual/estático. Os dados reais (horário, altura, status) serão injetados dinamicamente pelo Next.js em produção. Construir o componente como layout visual apenas — não inventar datas reais.

---

### BLOCO H9 — AVALIAÇÕES / PROVA SOCIAL

Título (Lora, H2): "O Que Nossos Passageiros Dizem"
Estrelas centralizadas: "⭐⭐⭐⭐⭐ 4.9/5 no Google"

3 cards de avaliação (rounded-2xl, shadow-sm, fundo branco):
- Texto: [PLACEHOLDER: "Avaliação real de cliente — aguardando transcrição por Murillo"]
- Autor: [PLACEHOLDER: "Nome · Mês/Ano · Google Maps"]
- Estrelas: ⭐⭐⭐⭐⭐

REGRA: NÃO criar avaliações fictícias. Manter placeholder visual claramente identificado.

Link abaixo dos cards (Inter, #004E89):
"Ver todas as avaliações →" → [PLACEHOLDER: link do perfil Google Maps — confirmar com Murillo]

---

### BLOCO H10 — FAQ RÁPIDA

Fundo: #F8F8F8.
Título (Lora, H2): "Perguntas Frequentes"

6 perguntas em accordion (abrir/fechar ao clicar):

P1: "Como funciona a reserva?"
R: "Você escolhe o passeio, fala com a gente no WhatsApp e confirmamos tudo por lá. Simples assim — sem formulário, sem espera."

P2: "Quanto custa um passeio?"
R: "Os passeios compartilhados começam em R$ 60. O preço varia conforme o roteiro e o formato (compartilhado ou privativo). Todos com preço claro — sem surpresa."

P3: "O que está incluso?"
R: "Transfer de Tambaú, Cabo Branco, Manaíra e Bessa está incluso em muitos passeios. Alimentação fica por conta. Confirmamos tudo no WhatsApp antes de reservar."

P4: "O que é a tábua de marés e por que importa?"
R: "Os passeios de piscinas naturais (Seixas, Penha, Picãozinho, Areia Vermelha) dependem da maré baixa. Quando a maré está certa, as piscinas ficam visíveis e a água cristalina. Murillo acompanha a tábua e avisa quando o momento é ideal."

P5: "Posso levar crianças?"
R: "Sim! A maioria dos passeios aceita crianças de qualquer idade acompanhadas de responsável. A exceção é o quadriciclo, que tem restrição para menores de 7 anos. Fale conosco que indicamos o melhor roteiro para sua família."

P6: "Vocês são uma agência oficial?"
R: "Sim. A Vem Passear Jampa é registrada no Cadastur (Ministério do Turismo), número 52.077.577. Você pode verificar diretamente no site oficial do Ministério do Turismo."

---

### BLOCO H11 — CTA FINAL

Fundo: #004E89 (azul escuro). Texto: branco.
Padding vertical generoso: 80px desktop / 60px mobile.

Título (Lora, H2, branco, centralizado): "Pronto para conhecer João Pessoa?"
Subtítulo (Inter, 18px, branco 85%, centralizado, máx 480px):
"Fala com Murillo no WhatsApp — te ajudo a escolher o melhor roteiro, com atendimento rápido e preço justo."

Botão grande (fundo #25D366, texto branco, ícone WhatsApp, rounded-2xl, height 56px, min-width 280px):
"Falar com Murillo agora →"
Link: https://wa.me/558399087830?text=Oi%2C+quero+saber+sobre+os+passeios+em+Jo%C3%A3o+Pessoa

Texto abaixo do botão (Inter, 13px, branco 60%):
"Resposta rápida · Sem robô · Sem compromisso"

---

### BLOCO H12 — RODAPÉ

Fundo: #1a1a1a (quase preto). Texto: branco / cinza claro.

Layout desktop: 4 colunas | Mobile: stack.

Coluna 1 — Marca:
- Logo Vem Passear Jampa (versão branca/clara)
- Tagline: "Curta Jampa com a gente."
- Ícone WhatsApp + link: wa.me/558399087830

Coluna 2 — Passeios:
- Links: Piscinas Naturais | Litoral Sul | Litoral Norte | City Tour | Interestaduais | Pacotes

Coluna 3 — Navegação:
- Links: Início | FAQ | Calendário de Marés | Sobre

Coluna 4 — Institucional:
- "Cadastur 52.077.577"
- "CNPJ: 52.077.577/0001-03"
- "João Pessoa — Paraíba — Brasil"

Linha final (borda top cinza escura, padding 16px):
"© 2026 Vem Passear em Jampa · Todos os direitos reservados"
Link direito: "Política de Privacidade" → /politica-de-privacidade

---

### COMPONENTE STICKY — CTA WHATSAPP FIXO EM MOBILE

Visível APENAS em mobile (esconder em 768px+).
Posição: fixed bottom-0 left-0 right-0. z-index: 50. Padding: 12px 16px.
Fundo: #25D366.
Botão completo: ícone WhatsApp (branco, 24px) + "Falar com Murillo" (Inter, bold, 16px, branco).
Altura: 56px. Toque amigável.
Aparecer após o usuário rolar 30% da página (para não bloquear o hero).

---

## RESTRIÇÕES ABSOLUTAS

❌ NÃO usar email como CTA — apenas WhatsApp
❌ NÃO usar urgência falsa ("últimas vagas", "só hoje", "corra")
❌ NÃO usar clichê turístico ("paraíso tropical", "magia das areias", "cartão postal")
❌ NÃO criar avaliações fictícias — manter placeholder marcado
❌ NÃO criar depoimentos fictícios — manter placeholder marcado
❌ NÃO hardcodar datas ou horários de saída de barco (componente de maré é estático)
❌ NÃO usar stock photo genérico de praia — manter placeholder descritivo
❌ NÃO alterar número do WhatsApp — sempre 558399087830

✅ Exportar para GitHub ao concluir para revisão no Claude Code
✅ Responsividade testada em 320px, 375px, 768px e 1024px
✅ CTA WhatsApp sticky em mobile (aparece após 30% de scroll)
```

<!-- FIM DO BLOCO: PROMPT FINAL PARA LOVABLE -->

---

## PARTE 5 — CHECKLIST DE VALIDAÇÃO

Usar após visualizar o resultado no Lovable. Exportar para GitHub somente após itens 🔴 todos marcados.

### Mobile (320px — testar em DevTools ou celular real)

- [ ] 🔴 Botão WhatsApp verde visível sem scroll (above the fold)
- [ ] 🔴 Sticky WhatsApp no bottom aparece após rolar ~30% da página
- [ ] 🔴 Headline do hero legível (máx 28px, sem overflow horizontal)
- [ ] 🔴 Nenhum texto cortado ou elemento saindo da tela
- [ ] 🟡 Body text mínimo 16px em toda a página
- [ ] 🟡 Cards dos 3 passeios empilhados (stack, não 3 colunas)
- [ ] 🟡 FAQ accordion abre e fecha ao toque
- [ ] 🟡 Grid de categorias em 2 colunas (não 5 em linha)
- [ ] 🟡 Espaçamento entre blocos respirando (não apertado)

### Desktop (1024px)

- [ ] 🔴 Layout não quebra em largura maior que 1024px
- [ ] 🟡 Cards dos 3 passeios em 3 colunas lado a lado
- [ ] 🟡 Foto de Murillo ao lado dos diferenciais (coluna direita)
- [ ] 🟡 Barra de prova social em linha horizontal (não empilhada)
- [ ] 🟡 Rodapé em 4 colunas

### CTA e WhatsApp

- [ ] 🔴 Link do botão hero: `wa.me/558399087830` (confirmar número exato)
- [ ] 🔴 Link do sticky mobile: mesmo número (558399087830)
- [ ] 🔴 Link do CTA final: mesmo número
- [ ] 🔴 Cor de todos os botões WhatsApp: `#25D366` (verde) — não laranja, não azul
- [ ] 🔴 Nenhum link de email em nenhum lugar da página

### Dados e Copy

- [ ] 🔴 Cadastur `52.077.577` visível em pelo menos 2 lugares
- [ ] 🔴 Avaliação `4.9/5` aparece corretamente
- [ ] 🔴 Preços corretos: Seixas R$60 | Areia Vermelha R$70 | Litoral Sul R$80
- [ ] 🔴 Nenhuma avaliação fictícia — só placeholder marcado `[PLACEHOLDER]`
- [ ] 🔴 Card de maré sem data/horário hardcodado — fallback "Consulte no WhatsApp"
- [ ] 🔴 Nenhum clichê ("paraíso tropical", "magia das areias", "cartão postal")
- [ ] 🟡 Tom acolhedor e local — não corporativo, não genérico

### Lacunas a substituir antes de publicar

- [ ] 🔴 `[PLACEHOLDER: foto panorâmica hero]` → foto real aprovada por Murillo
- [ ] 🔴 `[PLACEHOLDER: foto de Murillo]` → foto real de Murillo
- [ ] 🔴 `[PLACEHOLDER: foto Seixas]` → foto real do passeio
- [ ] 🔴 `[PLACEHOLDER: foto Areia Vermelha]` → foto real do passeio
- [ ] 🔴 `[PLACEHOLDER: foto Litoral Sul]` → foto real do passeio
- [ ] 🔴 `[PLACEHOLDER: avaliações reais]` → avaliações transcritas por Murillo
- [ ] 🟡 `[CONFIRMAR: link perfil Google Maps]` → URL real do perfil

### Pré-exportação para GitHub

- [ ] 🔴 Todos os itens 🔴 acima marcados como concluídos
- [ ] 🟡 Screenshot mobile 375px salvo para referência
- [ ] 🟡 Screenshot desktop 1280px salvo para referência
- [ ] ✅ Exportar para GitHub — branch sugerida: `lovable/homepage-2026-04-27`
- [ ] ✅ Avisar Claude Code para revisão técnica com `programador-de-site`

### O que o Claude Code vai revisar após exportação

Após exportação para GitHub, abrir sessão no Claude Code com `programador-de-site` e verificar:

1. Link WhatsApp usa `wa.me/558399087830` em todos os botões
2. Nenhum dado de maré hardcodado — card é estático
3. Schema JSON-LD ausente (Lovable não gera) → adicionar via `lib/seo.ts`
4. CSS não conflita com Tailwind do Next.js
5. Componentes novos não duplicam `HeroBlock`, `InfoCard`, `FAQAccordion`, `ButtonPrimary`
6. `npm run type-check` passa sem erros
7. `npm run build` completa sem erros

---

**Arquivo gerado por:** `lovable-site-builder` v1.0
**Gerado em:** 2026-04-27
**Próxima ação:** Murillo abre o Lovable.dev, cola o conteúdo da PARTE 4 e inicia a construção da homepage.
