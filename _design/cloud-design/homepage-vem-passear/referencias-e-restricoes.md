# Referências e Restrições — Homepage Vem Passear em Jampa

**Fonte:** `_conhecimento/branding/referencia-prompt-visual-murillo.md §9`  
**Versão:** 1.0 | Criado: 2026-04-27  

---

## 1. Referências de Qualidade

### O Que Queremos Evocar (sem copiar)

**Sensação visual desejada:**
- Site de turismo boutique — não de operadora de massa
- Limpo, com respiração, premium sem ser frio
- Foto real de João Pessoa que você reconhece como JP — não Maldivas, não Ibiza
- Tipografia com personalidade (Lora nos títulos) sem virar editorial de revista

**Referências de qualidade de execução (padrão de detalhe e acabamento):**
- Cards com sombra sutil, hover elegante, sem bordas pesadas
- Header fixo que some em scroll down e reaparece em scroll up (opcional)
- Espaçamento generoso — never cramped
- Botão WhatsApp sempre green — é um sinal visual padrão no Brasil

**Inspiração de abordagem (não de estilo específico):**
- Turismo local com identidade forte, não agência genérica nacional
- "Murillo está aqui" — presença humana visível, não mascote ou estoque
- Prova social integrada ao layout (não um bloco de depoimentos genérico no final)

---

## 2. Restrições Visuais — O Que NÃO Fazer

### Cores Proibidas
- ❌ Amarelo-verde-azul juntos (parece bandeira/site governamental)
- ❌ Gradiente genérico de fundo sem foto real
- ❌ Rosa, roxo, vermelho — não fazem parte da identidade
- ❌ Azul turquesa claro genérico (parece Cancún, não João Pessoa)
- ❌ Preto como cor dominante (fria, corporativa)

### Tipografia Proibida
- ❌ Comic Sans, fontes decorativas, fontes de "script" cursivas
- ❌ ALL CAPS em blocos de texto corrido
- ❌ Texto menor que 14px em mobile (qualquer elemento)
- ❌ Mais de 2 famílias tipográficas na mesma página

### Elementos Visuais Proibidos
- ❌ Ondas estilizadas simples (clip-art de praia)
- ❌ Sol com rosto ou "sol tropical" genérico
- ❌ Âncora ou barco genérico sem refinamento
- ❌ Mapa do Brasil com ponteiro no Nordeste
- ❌ Fundo de praia desfocada como único elemento do hero
- ❌ Palmeiras estilizadas como elemento decorativo
- ❌ Textura de areia como background de seção

### Layout Proibido
- ❌ Sidebar lateral em nenhum breakpoint
- ❌ Marquee / texto em rolagem horizontal
- ❌ Pop-up de entrada (nenhum modal ao carregar a página)
- ❌ Contador regressivo de "vagas" ou "oferta termina em X horas"
- ❌ Badge "PROMOÇÃO" ou "OFERTA ESPECIAL" em qualquer card
- ❌ Mais de 2 CTAs concorrentes na mesma viewport

### Copy que NÃO deve aparecer no design
- ❌ "Paraíso tropical"
- ❌ "Magia das areias"
- ❌ "Cartão postal"
- ❌ "Últimas vagas"
- ❌ "Melhor preço garantido"
- ❌ "Aproveite já"
- ❌ Qualquer frase que funcionaria igualmente em Natal, Recife ou Fortaleza

---

## 3. O Teste do Genérico

Antes de aprovar qualquer elemento visual:

> **Cubra o nome "Vem Passear em Jampa" e o logo.**  
> Um turista que está planejando ir a João Pessoa reconheceria que este design é sobre turismo em JP especificamente?

- Se SIM → segue
- Se NÃO → precisa de mais identidade local: paleta mais fiel ao mar de JP, foto mais específica, copy mais localizada

---

## 4. Referências de Conteúdo Local (Para Guiar Escolha de Imagens)

| Elemento de JP | Como Aparece Visualmente | Para Usar Em |
|----------------|--------------------------|-------------|
| Piscinas naturais de Seixas | Água verde-esmeralda, corais, maré baixa, pessoas mergulhando | Hero, card Seixas, bloco de maré |
| Areia Vermelha | Banco de areia isolado no mar, água turquesa ao redor | Card Areia Vermelha |
| Litoral Sul | Areia branca, falésias baixas, pouca gente, natureza preservada | Card Litoral Sul |
| Pôr do sol do Jacaré | Laranja intenso refletindo no Rio Paraíba, catamarã silhueta | Card Pôr do Sol |
| Picãozinho | Recife raso, peixes coloridos, pessoas de pé na água | Card Picãozinho |
| Murillo | Foto real, ao ar livre, sorrindo, casual profissional | Bloco Diferenciais |

**Regra de imagem:** Toda foto deve ser reconhecível como João Pessoa / Paraíba. Sem stock photo de "praia tropical genérica".

---

## 5. Restrições Técnicas (Para Claude Design)

- Homepage é implementada em **Next.js 14 (App Router)** — o design deve ser componentizável
- Imagens: sempre formato que suporta WebP + fallback JPG
- Fontes: Lora e Inter carregadas via `next/font/google` — evitar peso de fonte customizada
- Nenhum elemento que dependa de JavaScript para ser visível (SSR-friendly)
- Nenhum background-image inlined — sempre via `next/image` ou CSS background com URL configurável
- Cards de passeio: dados vêm de `data/passeios.ts` — o design não pode hardcodar copy de passeio

---

## 6. Restrições de Negócio

- **WhatsApp é o único CTA de contato** — nunca email, nunca formulário como canal principal
- **Preços visíveis nos cards** — decisão estratégica #2, não esconder atrás de "consulte"
- **Murillo é o rosto** — não usar avatar genérico, não usar "equipe"
- **Cadastur sempre visível acima da dobra** — prova de legitimidade
- **Depoimentos só reais** — aguardar Murillo confirmar antes de incluir no design final
- **Fotos só reais de JP** — placeholders aceitos no design, mas indicar claramente onde a foto real vai

---

*Versão: 1.0 | Criado: 2026-04-27*
