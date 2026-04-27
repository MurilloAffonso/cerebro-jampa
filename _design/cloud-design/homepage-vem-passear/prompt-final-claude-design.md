# Prompt Final — Claude Design

**Instrução:** Copie o bloco abaixo e cole diretamente no Claude Design.  
Antes de enviar, confirme o checklist em `checklist-validacao.md §1`.

---

```
Crie o design completo da homepage da Vem Passear em Jampa — agência de turismo receptivo em João Pessoa, Paraíba.

═══════════════════════════════════════
CONTEXTO DA MARCA
═══════════════════════════════════════

Nome: Vem Passear em Jampa
Tipo: Agência de turismo receptivo — passeios em João Pessoa, PB
Proprietário: Murillo Affonso (fundador, rosto da marca, atendimento direto)
CNPJ: 52.077.577/0001-03
Cadastur: 52.077.577 (ativo até 2026 — Ministério do Turismo)
Google: 4.9/5 ⭐
WhatsApp: +55 83 9908-7830
Site: vempassearjampa.com.br

Tom da marca: Acolhedor, local, humano — orientador, não vendedor. Fala como pessoa, não como corporação. Sem urgência falsa, sem clichê turístico.

Diferencial principal: Murillo atende diretamente no WhatsApp, orienta o turista a escolher o melhor roteiro, com preço justo e Cadastur ativo.

═══════════════════════════════════════
PÚBLICO-ALVO DA HOMEPAGE
═══════════════════════════════════════

Persona principal: Turista chegando em João Pessoa (SP/RJ/MG, 25–55 anos, celular na mão, buscando "o que fazer em JP").

Medo principal: cair em golpe, escolher passeio ruim, não ter suporte.
Fator de decisão: Confiança + atendimento rápido + preço justo.
Ação esperada: Clicar no botão WhatsApp e mandar mensagem para Murillo.

═══════════════════════════════════════
PALETA DE CORES — USAR EXATAMENTE ESTAS
═══════════════════════════════════════

Primário (Azul Confiança):  #004E89
Destaque (Laranja Ação):    #FF6B35
WhatsApp (Verde):           #25D366
Branco:                     #FFFFFF
Superfície (Cinza Claro):   #F5F5F5
Texto Principal:            #1A1A1A
Texto Secundário:           #666666

Regra: máximo 3 cores por seção. Azul e laranja nunca com peso igual lado a lado — um é fundo, outro é acento.

═══════════════════════════════════════
TIPOGRAFIA — USAR EXATAMENTE ESTAS
═══════════════════════════════════════

H1: Lora Bold 700 — mobile 32px / desktop 44px — branco quando sobre fundo escuro
H2: Lora SemiBold 600 — mobile 24px / desktop 32px — #1A1A1A
H3 / Card title: Inter SemiBold 600 — mobile 18px / desktop 20px
Body: Inter Regular 400 — 16px em qualquer breakpoint
Captions / Labels: Inter Regular 400 — 14px
Botões: Inter Bold 700 — 16px

═══════════════════════════════════════
LAYOUT GERAL
═══════════════════════════════════════

Design mobile-first obrigatório. Começar pelo layout em 375px, depois adaptar para 768px e 1200px.

Max-width: 1200px centralizado
Padding lateral: 16px mobile / 32px tablet / 48px desktop
Espaçamento entre seções: 48px mobile / 72px desktop

Breakpoints:
- Mobile: 320–767px (começar aqui)
- Tablet: 768–1023px
- Desktop: 1024px+

═══════════════════════════════════════
ESTRUTURA DA PÁGINA — 11 BLOCOS
═══════════════════════════════════════

────────────────────────────────────────
BLOCO 1: HEADER (fixo, sempre visível)
────────────────────────────────────────
Fundo: branco (#FFFFFF), sombra sutil
Altura: 64px
Esquerda: Logo "Vem Passear em Jampa" (texto como referência)
Centro: Nav links — Passeios · Como Funciona · Avaliações · Contato
Direita: Botão "Falar no WhatsApp" — fundo #25D366, texto branco, border-radius 8px

Mobile: nav colapsa em ícone hamburguer. Botão WhatsApp permanece visível.

────────────────────────────────────────
BLOCO 2: HERO (acima da dobra, primeiro impacto)
────────────────────────────────────────
Altura: 380px mobile / 480px tablet / 560px desktop
Fundo: foto de praia de João Pessoa [usar placeholder de cor #004E89 com gradiente para indicar onde vai a foto]
Overlay: #004E89 com opacidade 38% sobre a imagem (mantém foto visível, garante contraste do texto)

Conteúdo (alinhado à esquerda no desktop, centralizado no mobile):
H1 (Lora Bold, branco): "Passeios em João Pessoa com quem conhece cada praia"
Subtítulo (Inter Regular, rgba(255,255,255,0.9), 1rem): "Turismo receptivo com Cadastur ativo, 4.9 no Google e atendimento rápido no WhatsApp."

CTAs:
- Botão Primário: fundo #FF6B35, texto branco — "Ver Passeios ↓"
- Botão Secundário: borda branca 2px, texto branco — "Falar com Murillo no WhatsApp"
Mobile: botões empilhados, 100% width, gap 12px
Desktop: botões lado a lado, gap 16px, auto width

────────────────────────────────────────
BLOCO 3: FAIXA DE PROVA SOCIAL
────────────────────────────────────────
Fundo: #004E89 (azul escuro)
Padding: 28px mobile / 36px desktop

3 colunas (desktop) / empilhado (mobile):

Col 1: ⭐ 4.9 de 5 · "Avaliação média no Google"
Col 2: 🏅 Cadastur Ativo · "Registro Ministério do Turismo"
Col 3: 🌊 29 Passeios · "em João Pessoa e região"

Números: Inter Bold, 1.75rem, branco
Labels: Inter Regular, 0.85rem, rgba(255,255,255,0.8)
Divisores (desktop): linha vertical rgba(255,255,255,0.15)

────────────────────────────────────────
BLOCO 4: PASSEIOS EM DESTAQUE
────────────────────────────────────────
Fundo: branco (#FFFFFF)

H2 (Lora SemiBold): "Nossos passeios mais procurados"
Subtítulo (Inter Regular, #666): "Piscinas naturais, litoral sul, pôr do sol e muito mais — tudo com guia e preço justo."

GRID DE CARDS — 5 cards:
Mobile: 1 coluna
Tablet: 2 colunas
Desktop: 3 colunas (terceira linha: 2 cards centralizados)

Cada card:
- Border-radius: 12px
- Sombra: 0 2px 12px rgba(0,0,0,0.08)
- Hover (desktop): sombra 0 4px 20px rgba(0,78,137,0.15)
- Imagem topo: 200px altura, object-fit: cover [placeholder de cor sólida por passeio]
- Badge categoria: pill superior esquerdo — fundo #004E89, texto branco, 0.75rem
- Padding interno: 16px
- Nome: Inter SemiBold, #1A1A1A, máx 2 linhas
- Preço: Inter Bold, #FF6B35, 1.25rem
- Duração: Inter Regular, #666, 0.875rem
- CTA: "Ver passeio →" — link texto, #004E89, hover com underline

DADOS DOS 5 CARDS (usar exatamente):

Card 1: Piscinas Naturais do Seixas
  Badge: 🐠 Piscinas Naturais | Preço: R$ 60/pessoa | Duração: ~3h30
  Detalhe: "No ponto mais oriental das Américas — corais, peixinhos e maré baixa"
  [Placeholder: cor sólida verde-água para a imagem]

Card 2: Areia Vermelha — Catamarã
  Badge: 📸 Litoral Norte | Preço: R$ 70/pessoa | Duração: ~3h
  Detalhe: "Um banco de areia que surge do mar — e desaparece quando a maré sobe"
  [Placeholder: cor sólida laranja-areia para a imagem]

Card 3: Litoral Sul — Roteiro Clássico
  Badge: 🌊 Litoral Sul | Preço: R$ 80/pessoa | Duração: 8h
  Detalhe: "4 praias diferentes em um dia só — o melhor custo-benefício de João Pessoa"
  [Placeholder: cor sólida azul-médio para a imagem]

Card 4: Piscinas Naturais de Picãozinho
  Badge: 🐠 Piscinas Naturais | Preço: R$ 60/pessoa | Duração: ~3h
  Detalhe: "A 1.500m de Tambaú — piscinas rasas com peixes de todas as cores"
  [Placeholder: cor sólida azul-claro para a imagem]

Card 5: Pôr do Sol do Jacaré — Catamarã
  Badge: 🌅 Litoral Norte | Preço: R$ 90/pessoa | Duração: ~1h30
  Detalhe: "Bolero de Ravel ao vivo, forró e o pôr do sol mais bonito da Paraíba"
  [Placeholder: cor sólida laranja-entardecer para a imagem]

Link abaixo dos cards (Inter Regular, #004E89):
"Ver todos os 29 passeios →"

────────────────────────────────────────
BLOCO 5: COMO RESERVAR
────────────────────────────────────────
Fundo: #F5F5F5

H2 (Lora SemiBold): "Como reservar é simples"

3 passos em linha (desktop) / coluna (mobile):

Passo 1: 💬 "Escolha seu passeio"
  "Veja as opções e filtre pelo que quer viver: praia, piscina natural, pôr do sol, aventura."

Passo 2: 📲 "Fale com Murillo no WhatsApp"
  "Ele te orienta sem pressão. Tira dúvida, ajuda a escolher a data, confirma a maré."

Passo 3: ✅ "Confirme e aproveite"
  "Voucher enviado, tudo organizado. Você só precisa chegar no ponto de saída."

Entre passos (desktop): seta ou linha conectando
Cada passo: número grande em círculo #004E89, título Inter SemiBold, corpo Inter Regular

CTA do bloco: Botão #25D366 (verde WhatsApp) — "Falar no WhatsApp agora →"
Mobile: botão full-width

────────────────────────────────────────
BLOCO 6: POR QUE A VEM PASSEAR
────────────────────────────────────────
Fundo: branco (#FFFFFF)
Layout: 2 colunas desktop (grid de razões + foto Murillo) / 1 coluna mobile

H2 (Lora SemiBold): "Por que turistas escolhem a Vem Passear em Jampa"

4 razões em grid 2x2 (desktop) / lista (mobile):

Razão 1: 🏅 Cadastur ativo
  "Registro oficial no Ministério do Turismo. Agência legítima e auditada."

Razão 2: ⚡ Você fala direto com quem organiza
  "Atendimento com Murillo no WhatsApp. Responde rápido, conhece cada passeio."

Razão 3: 🗺️ Orientação, não venda
  "'Qual é melhor pra você?' — essa é a pergunta que a gente faz."

Razão 4: 💰 Preço justo, sem surpresa
  "Passeios a partir de R$ 60, com tudo incluso descrito antes de reservar."

Foto de Murillo (lado direito desktop / topo mobile):
  [Placeholder: retângulo arredondado 480×480px com label "Foto Murillo — [AGUARDANDO]"]
  Legenda abaixo: "Murillo Affonso — Fundador da Vem Passear em Jampa"

────────────────────────────────────────
BLOCO 7: PASSEIOS COM TÁBUA DE MARÉS
────────────────────────────────────────
Fundo: #F5F5F5

H2 (Lora SemiBold): "Passeios de piscinas naturais — quando a maré está boa, é espetacular"

Texto (Inter Regular, #666):
"Seixas, Picãozinho e Areia Vermelha só aparecem na maré baixa. A gente monitora a tábua e avisa o melhor horário antes de confirmar."

3 cards de próxima saída (lado a lado desktop / coluna mobile):

Cada card:
  - Border: 2px solid — ESTADO PADRÃO: #D1D5DB (cinza — sem dado)
  - Border-radius: 12px
  - Padding: 20px
  - Badge de status: "Consulte próximas saídas" (cinza, pill)
  - Nome do passeio: Inter SemiBold, #1A1A1A
  - Sub: "Disponibilidade conforme tábua de marés"
  - Preço: Inter Regular, #666
  - CTA: "Falar no WhatsApp →" (#25D366)

  Card 1: Piscinas Naturais do Seixas — R$ 60
  Card 2: Areia Vermelha — R$ 70
  Card 3: Piscinas Naturais de Picãozinho — R$ 60

Link abaixo: "Ver calendário completo de saídas →" (Inter Regular, #004E89)

────────────────────────────────────────
BLOCO 8: DEPOIMENTOS
────────────────────────────────────────
Fundo: branco (#FFFFFF)

H2 (Lora SemiBold): "O que dizem quem já foi"

2 depoimentos lado a lado (desktop) / empilhados (mobile):

Cada depoimento:
  - Avatar: círculo 56px [placeholder com inicial do nome]
  - Citação: Inter Italic 1rem, #1A1A1A, em aspas
  - Nome: Inter SemiBold 0.9rem
  - Cidade + Data: Inter Regular 0.85rem, #666
  - Fonte: "· Google Maps" com ícone estrela amarela

[Placeholder depoimento 1]: "Atendimento incrível, Murillo orientou cada detalhe. Melhor experiência da nossa viagem a JP." — Marcos S. · São Paulo · Março 2026 · Google Maps

[Placeholder depoimento 2]: "As piscinas de Seixas são mágicas. Valeu cada minuto. Super recomendo a Vem Passear!" — Ana C. · Rio de Janeiro · Abril 2026 · Google Maps

Nota: indicar claramente que estes são placeholders — depoimentos reais a inserir

Link abaixo: "⭐ 4.9 de 5 no Google · Ver todas as avaliações →"

────────────────────────────────────────
BLOCO 9: FAQ
────────────────────────────────────────
Fundo: #F5F5F5

H2 (Lora SemiBold): "Perguntas frequentes"

6 perguntas em accordion (expand/collapse com animação suave):

P1: "Como faço para reservar um passeio?"
R: "Fale com a gente no WhatsApp (+55 83 9908-7830). Murillo te orienta, tira dúvidas, confirma disponibilidade e envia o voucher. Sem formulário complicado."

P2: "Os passeios de piscinas naturais dependem de maré?"
R: "Sim. Seixas, Picãozinho e Areia Vermelha só ficam acessíveis na maré baixa. A gente consulta a tábua antes de confirmar sua data — você não precisa se preocupar."

P3: "Os preços incluem tudo ou há custos extras?"
R: "Os preços listados cobrem o passeio conforme descrito. O que está incluso fica claro em cada página. Alimentação em geral não está inclusa — mas avisamos antes."

P4: "A Vem Passear é uma agência oficial?"
R: "Sim. Somos registrados no Cadastur (Ministério do Turismo), número 52.077.577, válido até 2026. Agência legítima e auditada."

P5: "Posso levar crianças nos passeios?"
R: "Depende do passeio. Piscinas naturais não têm idade mínima (crianças acompanhadas). Para quadriciclo: mínimo 7 anos. Consulte Murillo para o passeio específico."

P6: "Qual é o melhor passeio para quem está em JP pela primeira vez?"
R: "Depende do que quer viver. Se a maré estiver boa, Seixas ou Areia Vermelha são as melhores escolhas. Para um dia inteiro de praia: Litoral Sul Clássico. Fale com Murillo — ele te ajuda a decidir."

Estilo accordion:
  Item fechado: padding 20px 24px, border-bottom 1px solid #E5E5E5
  Pergunta: Inter SemiBold 1rem, #1A1A1A
  Ícone: chevron que rotaciona 180° ao abrir
  Resposta: Inter Regular 0.9rem, #4A4A4A, aparece com fade

────────────────────────────────────────
BLOCO 10: CTA FINAL
────────────────────────────────────────
Fundo: #004E89 (azul primário)
Padding: 64px 24px mobile / 80px 48px desktop
Texto centralizado

Título (Lora Bold, branco, 1.75rem mobile / 2.25rem desktop):
"Pronto para conhecer João Pessoa do jeito certo?"

Subtítulo (Inter Regular, rgba(255,255,255,0.9), 1rem):
"Fala com a gente. Murillo responde rápido, te orienta sem pressão e monta o roteiro ideal."

Botão único — "Falar no WhatsApp →":
  Fundo: #25D366 (verde WhatsApp)
  Texto: Inter Bold, branco, 1rem
  Ícone WhatsApp SVG branco à esquerda
  Padding: 16px 36px
  Border-radius: 8px
  Mobile: 100% width, altura 52px

────────────────────────────────────────
BLOCO 11: FOOTER
────────────────────────────────────────
Fundo: #0A2540 (azul quase preto)
Padding: 40px 24px mobile / 56px 48px desktop

Conteúdo:
  Logo (branco ou versão clara)
  Links: Passeios · Como Funciona · FAQ · Contato
  WhatsApp: +55 83 9908-7830
  CNPJ: 52.077.577/0001-03 | Cadastur: 52.077.577 | Turismo Receptivo
  © 2026 Vem Passear em Jampa · vempassearjampa.com.br

Divisor: linha rgba(255,255,255,0.1) entre conteúdo e copyright

═══════════════════════════════════════
COMPONENTES INTERATIVOS — ESPECIFICAR
═══════════════════════════════════════

Header:
  - Scroll down: header some suavemente
  - Scroll up: header reaparece
  - Link ativo: cor #004E89 e underline

Cards de Passeio (hover — desktop apenas):
  - Sombra aumenta: 0 4px 20px rgba(0,78,137,0.15)
  - Transição: 200ms ease

Botões:
  - Default → Hover: escurece 10% (laranja: #E55A24 / verde: #1EA856)
  - Focus: outline 3px solid com offset 2px (acessibilidade)
  - Transição: 150ms

Accordion FAQ:
  - Ícone chevron: rotaciona 180° (200ms ease-in-out)
  - Resposta: max-height 0→auto com overflow hidden (200ms)

═══════════════════════════════════════
ACESSIBILIDADE — OBRIGATÓRIO
═══════════════════════════════════════

- Todos os botões e links: mínimo 44px de altura e largura
- Contraste: WCAG AA mínimo (4.5:1 para body, 7:1 para títulos)
- Focus states visíveis em todos os elementos interativos
- Sem cor como único indicador de estado
- Alt text descritivo em todas as imagens (indicar no design onde vai o alt)

═══════════════════════════════════════
RESTRIÇÕES — NÃO INCLUIR
═══════════════════════════════════════

❌ Pop-up de entrada
❌ Contador regressivo ou urgência artificial
❌ Badge "PROMOÇÃO" ou "OFERTA"
❌ Ondas estilizadas ou sol genérico como decoração
❌ Mais de 2 CTAs concorrentes na mesma viewport
❌ Scroll horizontal em qualquer breakpoint
❌ Textos menores que 14px em mobile
❌ Mais de 2 famílias de fonte (somente Lora + Inter)
❌ Qualquer copy que funcionaria em Natal ou Recife — tem que ser de João Pessoa

═══════════════════════════════════════
RESULTADO ESPERADO
═══════════════════════════════════════

Layout completo da homepage em visualização de desktop (1200px) e mobile (375px).
Mostrar os 11 blocos em sequência.
Usar placeholders de cor para imagens (indicar "FOTO REAL AQUI — [descrição]").
Indicar estados de interação nos componentes chave (hover, focus, expanded).
Manter a identidade de uma agência de turismo local premium — não genérica.
```

---

## Instruções Para Envio

1. Copie o bloco acima (entre os ``` e ```)
2. Cole diretamente no campo de prompt do Claude Design
3. Se Claude Design pedir para anexar referências: **não é necessário** para a primeira iteração — o prompt é autocontido
4. Após o primeiro resultado, use `checklist-validacao.md §2 e §3` para avaliar
5. Itere com instruções específicas: "ajuste o bloco X para Y" em vez de reiniciar do zero

---

## Iterações Típicas Esperadas

**Iteração 1:** Estrutura completa, placeholders de imagem, paleta aplicada  
**Iteração 2:** Ajuste de hierarquia, espaçamento, mobile vs desktop  
**Iteração 3 (com fotos reais):** Substituir placeholders e validar contraste  
**Iteração final:** Aprovação de Murillo → handoff para `programador-de-site`

---

*Versão: 1.0 | Criado: 2026-04-27 | Prompt pronto para colar no Claude Design*
