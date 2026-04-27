# Templates de Prompt — Lovable.dev

**Uso:** Selecionar o template pelo tipo de página, preencher com dados do Pacote de Dados, e colar no chat do Lovable.dev.
**Regra:** Substituir todos os `[CAMPO]` por dados reais do Pacote de Dados antes de colar. Nunca colar template com campos em branco.

---

## Template A — Página de Passeio

```
Crie a página do passeio "[NOME DO PASSEIO]" para o site da Vem Passear em Jampa (vempassearjampa.com.br).

## Contexto
Empresa de passeios turísticos em João Pessoa — PB, operada por Murillo (rosto da marca).
Cadastur: 52.077.577. Avaliação Google: [NOTA]/5.
CTA principal: WhatsApp — https://wa.me/558399087830

## Stack técnica
Next.js 14 (App Router) + TypeScript + Tailwind CSS + React 18.
Design tokens:
- Primário (laranja): #FF6B35
- Secundário (azul): #004E89
- Fonte body: Inter | Fonte headings: Lora
Mobile-first: construir para 320px, breakpoints em 768px e 1024px.

## URL desta página
https://vempassearjampa.com.br/passeios/[CATEGORIA]/[SLUG]

## SEO
title: "[TITLE]"
meta description: "[META DESCRIPTION]"
H1: "[H1]"

## Dados do passeio
- Preço: R$ [PREÇO] (compartilhado) | R$ [PREÇO] (privativo, se houver)
- Duração: [DURAÇÃO] horas
- Saída: Praia de Tambaú, próximo ao Hotel Tambaú (endereço exato enviado no voucher)
- Sem idade mínima — crianças com responsável

## Blocos da página (ordem mobile, de cima para baixo)

### B1 — Hero
- Imagem: [FOTO REAL ou "placeholder hero de [local]"]
- Headline: "[HEADLINE]"
- Subheadline: "[SUBHEADLINE]"
- CTA primário (botão verde #25D366): "Quero reservar meu passeio →"
  Link: https://wa.me/558399087830?text=Oi%2C+quero+saber+sobre+o+passeio+de+[NOME+URL+ENCODED]
- CTA secundário (link): "Ver próximas datas" → âncora #calendario (se dependeDeMare)

### B2 — InfoCard (linha horizontal em mobile, 4 ícones)
- Duração: [DURAÇÃO]h
- Saída: Tambaú
- Grupo: Compartilhado / Privativo
- [CAMPO EXTRA se houver, ex: Inclui snorkel]

### B3 — Aviso de Maré (apenas se dependeDeMare: true)
- Ícone: ondas
- Texto: "[TEXTO DO MAREALERT — ou: 'Passeio sujeito à tábua de marés. Confirme disponibilidade.']"
- CTA: "Ver calendário de saídas"

### B4 — Por Que Confiar (3 pilares)
- Pilares: Cadastur ativo (52.077.577) | 4.9/5 no Google | Murillo, guia local
- Foto de Murillo à direita (desktop) / topo (mobile)

### B4.5 — Avaliações Google Maps (se temAvaliacoes: true)
- Título: "O que dizem nossos passageiros"
- Cards de avaliação (máx 3):
  - "[TEXTO AVALIAÇÃO 1]" — [NOME] · [MÊS/ANO] · Google Maps
  - "[TEXTO AVALIAÇÃO 2]" — [NOME] · [MÊS/ANO] · Google Maps
- Link: "Ver todas as avaliações →" → [URL PERFIL GOOGLE MAPS] (target="_blank")
- NÃO criar avaliações fictícias. Se não houver dados reais, omitir bloco.

### B5 — Lead / Descrição Principal
- Texto: "[COPY DO LEAD — 2-3 parágrafos]"
- Tom: acolhedor, local, orientador — não corporativo

### B6 — O Que Você Vai Fazer
- Lista de atividades: [ATIVIDADE 1], [ATIVIDADE 2], [ATIVIDADE 3]...
- Layout: cards horizontais com ícone + texto curto

### B6.5 — Experiência 360° (se tem360: true)
- Preview estática com botão "Explorar em 360°"
- O iframe só carrega após clique do usuário — NÃO carregamento automático
- Embed: [URL 360° — YouTube/Street View/Matterport]

### B7 — Roteiro
- Título H2: "Como é o passeio"
- Lista numerada com horários aproximados:
  [ITEM 1], [ITEM 2], [ITEM 3]...

### B8 — Informações Práticas (4 cards)
- O que está incluso: [LISTA]
- O que levar: [LISTA]
- Restrições: [LISTA]
- Política de cancelamento: [PLACEHOLDER SE PENDENTE]

### B9 — Próxima Saída (apenas se dependeDeMare: true)
- Card "Próxima Saída":
  [DIA DA SEMANA] [DATA] — Saída [HORÁRIO] — Maré [ALTURA]m — [STATUS]
- Fallback (se sem data): "Consulte próximas saídas" → WhatsApp
- NÃO hardcodar data no código — esse dado é dinâmico no Next.js

### B10 — FAQ
- Título H2: "Perguntas frequentes"
- [PERGUNTA 1] / [RESPOSTA 1]
- [PERGUNTA 2] / [RESPOSTA 2]
- [PERGUNTA 3] / [RESPOSTA 3]
- Implementar como accordion (aberto/fechado)

### B11 — Depoimento (se existir dado real)
- Texto: "[DEPOIMENTO REAL]"
- Autor: [NOME] — [CONTEXTO ex: "Família de São Paulo"]
- NÃO criar depoimento fictício. Se ausente, omitir bloco.

### B12 — CTA Final
- Fundo: #004E89 (azul secundário)
- Título: "Pronto para conhecer [LOCAL]?"
- Subtítulo: "Fale com Murillo no WhatsApp — resposta rápida"
- Botão: "Reservar meu passeio →" → https://wa.me/558399087830?text=[TEXTO]

## Restrições obrigatórias
- NÃO usar email como CTA — apenas WhatsApp
- NÃO inventar avaliações ou depoimentos
- NÃO hardcodar datas de saída de barco
- NÃO usar frases genéricas ("paraíso tropical", "magia das areias")
- NÃO usar urgência falsa ("últimas vagas", "só hoje")
- CTA WhatsApp: botão grande, thumb-friendly, visível sem scroll em mobile
- Exportar para GitHub ao concluir para revisão no Claude Code
```

---

## Template B — Homepage

```
Crie a homepage do site da Vem Passear em Jampa (vempassearjampa.com.br).

## Contexto
Empresa de passeios turísticos em João Pessoa — PB, operada por Murillo (rosto da marca).
Cadastur: 52.077.577. Avaliação Google: [NOTA]/5.
CTA principal: WhatsApp — https://wa.me/558399087830

## Stack técnica
Next.js 14 (App Router) + TypeScript + Tailwind CSS + React 18.
Design tokens:
- Primário (laranja): #FF6B35 | Secundário (azul): #004E89
- Fonte body: Inter | Fonte headings: Lora
Mobile-first: 320px → 768px → 1024px.

## SEO
title: "[TITLE HOMEPAGE]"
meta description: "[META DESCRIPTION HOMEPAGE]"
H1: "[H1 HOMEPAGE — ex: Passeios em João Pessoa com quem conhece a cidade]"

## Blocos da homepage (ordem mobile)

### H1 — Hero
- Imagem de fundo: [FOTO PANORÂMICA DE JOÃO PESSOA / PRAIAS]
- Headline: "[HEADLINE]"
- Subheadline: "[SUBHEADLINE]"
- 2 CTAs:
  - Primário: "Ver passeios →" → /passeios/
  - WhatsApp: "Falar com Murillo" → https://wa.me/558399087830

### H2 — Prova Social Institucional
- Cadastur: 52.077.577 — ativo
- Avaliação: [NOTA]/5 ⭐ ([N] avaliações no Google)
- Foto de Murillo + "Olá, sou Murillo. Vou te ajudar a escolher o passeio certo."

### H3 — Passeios em Destaque (Top 3)
- Card 1: [NOME PASSEIO 1] — [PREÇO] — [LINK]
- Card 2: [NOME PASSEIO 2] — [PREÇO] — [LINK]
- Card 3: [NOME PASSEIO 3] — [PREÇO] — [LINK]
- Botão: "Ver todos os passeios →"

### H4 — Categorias / Clusters
- [CLUSTER 1]: Piscinas Naturais → /passeios/piscinas-naturais/
- [CLUSTER 2]: Litoral Sul → /passeios/litoral-sul/
- [CLUSTER 3]: [CONFIRMAR COM MURILLO]

### H5 — Como Funciona
- Passo 1: Escolha seu passeio
- Passo 2: Fale com Murillo no WhatsApp
- Passo 3: Confirme e aproveite

### H6 — FAQ Rápida (3-5 perguntas)
- [PERGUNTA 1] / [RESPOSTA 1]
- [PERGUNTA 2] / [RESPOSTA 2]

### H7 — CTA Final
- "Pronto para explorar João Pessoa?"
- Botão WhatsApp grande

## Restrições obrigatórias
[MESMAS DO TEMPLATE A]
```

---

## Template C — Calendário / Tábua de Marés

```
Crie a página de calendário de saídas para passeios de piscinas naturais em João Pessoa.
URL: https://vempassearjampa.com.br/passeios/piscinas-naturais/calendario

## Contexto
Passeios de piscinas naturais (Seixas, Picãozinho, Areia Vermelha) dependem da maré baixa.
Esta página mostra o calendário de saídas do mês e explica como funciona a maré.

## Stack técnica
[MESMA DO TEMPLATE A]

## SEO
title: "[TITLE CALENDARIO]"
meta description: "[META DESCRIPTION — inclui: tábua de marés João Pessoa, piscinas naturais]"
H1: "[H1 — ex: Calendário de Saídas — Piscinas Naturais em João Pessoa]"

## Blocos

### C1 — Hero Simplificado
- Título: "[H1]"
- Subtítulo explicativo: "As piscinas naturais de João Pessoa só ficam visíveis na maré baixa..."

### C2 — Legenda de Status
- Verde: Boa (maré ≤ 0.4m) | Amarelo: Regular (0.4–0.6m) | Cinza: Sem passeio (> 0.6m)

### C3 — Grid do Mês (calendário visual)
- Mês: [MÊS] / [ANO]
- Para cada dia com temPasseio: true → mostrar: [DIA DA SEMANA] [DATA] | Saída: [HORÁRIO] | Maré: [ALTURAm] | [STATUS]
- Dias sem passeio: cinza/desabilitado
- IMPORTANTE: o grid é visual apenas — a lógica de dados fica no Next.js. Não hardcodar datas.

### C4 — CTA por ciclo
- Para cada janela/ciclo: botão "Reservar saídas de [DATA INÍCIO] a [DATA FIM] →" → WhatsApp

### C5 — FAQ de Maré (4-5 perguntas)
- Como funciona a maré em piscinas naturais?
- Por que o horário de saída muda todo mês?
- O que acontece se a maré não estiver boa?
- [OUTRAS PERGUNTAS DO PLANEJAMENTO SEO]

### C6 — Navegação entre meses
- Botões: ← [MÊS ANTERIOR] | [MÊS ATUAL] | [PRÓXIMO MÊS] →
- IMPORTANTE: lógica de navegação dinâmica fica no Next.js — Lovable cria layout estático

### C7 — CTA Final
- "Ficou com dúvida? Fale com Murillo"

## Restrições
- NÃO hardcodar datas de saída — dados vêm de _site/data/tabua-mares.ts (gerado e revisado por Murillo)
- NÃO usar fonte de maré diferente de CHM / Porto de Cabedelo
- NÃO exibir horarioBaixaMareInterno ao cliente — apenas horarioSaidaExibido
```

---

## Template D — Ajustes Visuais (Revisão de Página Existente)

```
Revise a página [NOME DA PÁGINA] que já existe no Lovable e aplique os seguintes ajustes:

## Ajustes solicitados

### Mobile (320px)
- [AJUSTE 1 — ex: CTA WhatsApp não está visível sem scroll — subir para acima da dobra]
- [AJUSTE 2]

### Desktop (1024px+)
- [AJUSTE 1]
- [AJUSTE 2]

### Copy
- [AJUSTE 1 — ex: headline do hero está genérica — substituir por: "[NOVA HEADLINE]"]

### Visual
- [AJUSTE 1 — ex: botão WhatsApp não está usando cor #25D366 — corrigir]

## O que NÃO alterar
- Estrutura de blocos (ordem já aprovada)
- Dados do passeio
- Links de WhatsApp
- Design tokens (#FF6B35 / #004E89)

## Confirmar ao concluir
- Screenshot mobile 320px
- Screenshot desktop 1024px
- Exportar para GitHub
```

---

## Template E — Revisão Mobile (Checklist de Responsividade)

```
Revise a responsividade da página [NOME] com foco em mobile (320px–430px).

## Checklist de revisão

### CTA
[ ] Botão WhatsApp visível sem scroll (above the fold) no iPhone SE (375px)
[ ] Botão tem altura mínima de 48px (thumb-friendly)
[ ] Texto do botão legível: mínimo 16px

### Tipografia
[ ] H1 máximo 28px em mobile (sem overflow horizontal)
[ ] Body mínimo 16px
[ ] Lora em headings, Inter em body

### Imagem Hero
[ ] Imagem não corta rosto de pessoa ou ponto de interesse em 320px
[ ] Sem lazy-loading para hero (carregamento imediato)
[ ] Alt text descritivo presente

### Navegação
[ ] Menu hamburger funcional
[ ] Links tocáveis com área mínima 44x44px

### FAQ Accordion
[ ] Cada item abre/fecha corretamente no touch
[ ] Texto da resposta não ultrapassa a largura da tela

## Entregar
- Screenshot 320px (iPhone SE)
- Screenshot 375px (iPhone 14)
- Screenshot 768px (tablet)
- Exportar para GitHub após aprovação
```

---

## Como Usar os Templates

```
1. Selecionar template pelo tipo de página (A=passeio, B=home, C=calendário, D=ajuste, E=mobile)
2. Abrir references/pacote-dados-passeio.md com os dados preenchidos
3. Substituir TODOS os [CAMPOS] pelos dados reais
4. Verificar: nenhum [CONFIRMAR COM MURILLO] remanescente no prompt final
   → Se houver: parar, confirmar com Murillo, só então gerar prompt
5. Colar no chat do Lovable.dev
6. Após resultado: usar references/checklist-validacao-lovable.md
```

---

*Versão: 1.0 | Criado: 2026-04-27 | Skill: lovable-site-builder*
