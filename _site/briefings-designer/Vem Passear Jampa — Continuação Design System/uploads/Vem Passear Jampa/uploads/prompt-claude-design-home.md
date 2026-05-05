# Prompt para Claude Design — Home Vem Passear em Jampa

> Copie o bloco abaixo integralmente e cole no Claude Design.

---

## INÍCIO DO PROMPT

Você é um designer de produto especializado em sites de turismo mobile-first. Vou te apresentar a estrutura atual da Home de um site real e pedir um redesign visual completo, entregue como handoff para um desenvolvedor Next.js/Tailwind.

**NÃO gere código final ainda.** Entregue apenas o design decision document (especificações visuais, diretrizes e handoff para dev).

---

### Contexto do Projeto

**Empresa:** Vem Passear em Jampa
**Site:** vempassearjampa.com.br
**Stack:** Next.js 14, React, Tailwind CSS
**Objetivo:** Site de turismo que converte turistas em leads qualificados via WhatsApp. Não processa reserva nem pagamento — é vitrine + orientador.

**Público:** Turistas de fora de João Pessoa, 25–55 anos, chegando de avião. 70%+ do tráfego via celular.

**Meta única da Home:** turista chega → entende os passeios → clica em "Falar com Murillo no WhatsApp".

---

### Identidade Visual Atual (não alterar tokens sem justificativa)

| Token | Valor |
|-------|-------|
| Primário | `#FF6B35` (laranja) |
| Secundário | `#004E89` (azul) |
| Escuro | `#1A1A2E` |
| Fundo claro | `#F8F9FA` |
| Texto | `#1F2937` |
| Fonte body | Inter (sans-serif) |
| Fonte títulos | Lora (serif) |

---

### Estrutura Atual da Home (6 seções)

```
[HEADER sticky — logo "VP" + nav desktop + CTA "Reservar no WhatsApp"]

1. HERO
   - Fundo: gradiente CSS azul claro → branco (sem foto)
   - H1: "O Que Fazer em João Pessoa?"
   - Subtítulo: "Praias paradisíacas, piscinas de corais, quadriciclo, catamarã
     e o pôr do sol mais emocionante do Brasil. Murillo te orienta do jeito certo."
   - CTA: botão laranja grande "💬 Montar Meu Roteiro no WhatsApp"

2. PROVA SOCIAL
   - Fundo escuro (#1A1A2E)
   - 3 colunas: [★ 4.9/5 — 61 avaliações Google] [Cadastur 52.077.577 — ativo] [WhatsApp direto]
   - Números em laranja (#FF6B35), labels em cinza claro

3. CATEGORIAS
   - Fundo branco
   - H2 "Passeios em João Pessoa"
   - Grid 1→2→3 colunas: 6 cards (emoji + nome + descrição curta)
   - Categorias: Pacotes 🎒 | Litoral Sul 🏖️ | Litoral Norte ⛵ | Piscinas Naturais 🤿 | City Tour 🏛️ | Interestaduais 🗺️
   - Hover: borda laranja + sombra
   - Link "Ver todos os passeios →" abaixo do grid

4. PASSEIOS PRIORITÁRIOS
   - Fundo #F8F9FA
   - H2 "Os Mais Procurados"
   - Grid 1→2→3: 3 cards com nome, descrição, duração, preço, "Ver detalhes →"
   - Passeios: [Seixas — piscinas naturais] [Areia Vermelha — catamarã] [Litoral Sul Clássico]
   - Cards atualmente sem imagem (só texto)

5. BLOCO MURILLO
   - Fundo branco
   - Avatar circular laranja com letra "M" (placeholder — foto real não disponível ainda)
   - H2 "Por que a Vem Passear em Jampa?"
   - Missão: "Ajudar turistas a descobrir João Pessoa com atendimento rápido, confiança e orientação prática."
   - Lista de diferenciais: Confiança + Atendimento rápido + Preço justo + Conhecimento local profundo
   - Assinatura: "— Affonso Murillo Soledade de Oliveira, fundador"

6. CTA FINAL
   - Fundo laranja (#FF6B35)
   - H2 "Vamos Montar o Roteiro que Você Sonha"
   - Parágrafo + botão branco com texto laranja
   - CTA: "💬 Chamar Murillo no WhatsApp"

[FOOTER — 3 colunas: sobre, navegação, contato + CNPJ/Cadastur no bottom]
```

---

### O Que Preciso de Você

**1. Diagnóstico Visual**
Avalie a Home atual. Quais são os principais problemas de hierarquia visual, conversão e experiência mobile? Seja direto: o que está errado hoje.

**2. Melhorias de Hierarquia Visual**
Proponha ajustes de hierarquia: tamanhos de título, peso de fonte, espaçamento entre seções, contraste de fundo. O objetivo é que o olhar do usuário chegue naturalmente ao CTA do WhatsApp.

**3. Layout Mobile-First**
Detalhe como cada seção deve se comportar em 375px (iPhone SE/padrão). Tamanho de fonte, padding, tap targets (mínimo 44px), quebras de grid. Depois descreva como expande para 768px e 1024px.

**4. Direção de Cores, Tipografia e Espaçamento**
Proponha refinamentos nos tokens existentes se necessário. Justifique qualquer mudança de cor. Recomende escala tipográfica (tamanhos H1/H2/H3/body/small) para a Home.

**5. Redesign do Hero**
O hero atual usa gradiente CSS sem foto. Proponha duas variações:
- **Variação A:** sem foto — apenas cor/gradiente/formas geométricas
- **Variação B:** com foto hero full-width + overlay (assumindo que foto real de João Pessoa estará disponível)

Para cada variação: layout, posição do H1, do subtítulo e do CTA, e como se comporta em mobile.

**6. Redesign dos Cards de Categoria**
6 categorias em grid. O que mudar: dimensões, proporção, uso de cor de fundo por categoria, imagem thumbnail opcional, tipografia interna. Como deve ficar a hover state?

**7. Redesign dos 3 Passeios Prioritários**
Cards de passeio atualmente sem imagem. Proponha:
- card com espaço reservado para imagem thumbnail (aspect ratio)
- hierarquia de informação dentro do card (nome → descrição → duração/preço → CTA)
- como indicar visualmente "mais procurado" / destaque

**8. Redesign do Bloco Murillo**
Sem foto real disponível agora. Proponha:
- layout que funcione bem com avatar placeholder
- como o layout deve mudar quando a foto real chegar (indicar onde entra a foto)
- apresentação dos diferenciais (ícones? lista? pills?)

**9. Redesign do CTA Final**
Avalie o fundo laranja atual. É o correto para conversão ou há alternativa melhor? Proponha: cor, tipografia, tamanho do botão, padding da seção, comportamento mobile.

**10. Lista de Componentes Afetados**
Liste cada componente do site que precisará de atualização e o que muda em cada um:
- `HeroBlock` — o que muda
- `PasseioCard` — o que muda
- `InfoCard` — se afetado
- `TrustBlock` — se afetado
- `CTAFinal` — o que muda
- Outros componentes identificados

**11. Handoff para Dev (Claude Code / Next.js + Tailwind)**
Para cada seção modificada, entregue:
- classe Tailwind sugerida ou token de design (ex: `text-4xl font-bold` → `text-5xl font-extrabold`)
- valores exatos de padding/gap/margin em unidades Tailwind (ex: `py-16 md:py-24`)
- variações de breakpoint (mobile → md → lg)
- qualquer novo componente necessário que não existe ainda
- o que o dev NÃO deve mudar (estrutura semântica, props de dados, schema JSON-LD)

---

### Restrições que Não Podem Ser Violadas

- WhatsApp é o único CTA — nunca email, nunca formulário
- Dados de confiança fixos: **★ 4.9 | 61 avaliações Google | Cadastur 52.077.577**
- Estrutura das 6 seções da Home permanece (pode reordenar, mas justifique)
- URLs do site não mudam (`/passeios/`, slugs de categorias, etc.)
- `/sobre` não aparece no menu nem no footer como link de página
- Não inventar novos passeios, preços ou depoimentos
- Componentes `Header` e `Footer` têm estrutura de navegação aprovada — não alterar links

---

### Formato de Entrega Esperado

Estruture sua resposta assim:

1. **Diagnóstico** — problemas encontrados na Home atual
2. **Decisões de Design** — o que muda e por quê (uma decisão por parágrafo)
3. **Especificações por Seção** — Hero / Prova Social / Categorias / Prioritários / Murillo / CTA Final
4. **Escala Tipográfica** — tabela com tamanhos propostos
5. **Paleta Refinada** — se propuser mudança em tokens
6. **Handoff para Dev** — specs Tailwind por componente
7. **Componentes Afetados** — lista com descrição do que muda
8. **O que NÃO mudar** — lista clara para o dev

---

## FIM DO PROMPT
