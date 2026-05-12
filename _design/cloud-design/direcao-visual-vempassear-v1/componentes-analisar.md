# COMPONENTES A ANALISAR — Vem Passear em Jampa

Lista detalhada dos componentes visuais ativos hoje. Para cada um, Claude Design deve devolver: **o que está bom**, **o que pode melhorar**, **como melhorar (com token CSS / classe Tailwind a usar)**.

---

## 1. Header (`_site/components/Header.tsx`)

**Estado atual:**
- Sticky no topo com `backdropFilter: blur(12px)`, fundo `rgba(250, 250, 247, 0.95)`, borda inferior 1px `var(--cor-borda)`
- Logo `logo-azul-transparente.png` em **150px** de altura (PNG transparente gerado via chroma-key)
- Menu desktop: Início · Passeios (dropdown 6 categorias) · Serviços (dropdown 2 itens) · Sobre · FAQ
- CTA WhatsApp pill verde `#25D366` no canto direito ("Reservar no WhatsApp" desktop / "WhatsApp" mobile)
- Hamburger no mobile (≤768px), abre menu vertical sob o header

**Analisar:**
- Tamanho da logo (150px é correto para essa marca, ou perde elegância em desktop?)
- Hierarquia visual entre logo + nav + CTA
- Contraste do backdrop blur em diferentes cores de hero
- Comportamento do dropdown em mobile (acessibilidade do toque)
- O Sobre foi adicionado recentemente — está balanceado com FAQ ao lado?
- O CTA verde compete visualmente com o CTA laranja do hero?

---

## 2. HomeVideoHero (`_site/components/HomeVideoHero.tsx`)

**Estado atual:**
- Altura `min(100svh, 860px)`, vídeo loop em `<video autoplay muted loop>` (`hero-jampa.webm/mp4`)
- Poster estático para `prefers-reduced-motion`
- Overlay gradiente `linear-gradient(160deg, rgba(9,34,56,0.72), rgba(16,121,151,0.38), rgba(9,34,56,0.22))`
- Label uppercase amarelo `#FBBF24` "João Pessoa · Paraíba · Desde 2022"
- H1 `clamp(40px, 7vw, 68px)` serif Fraunces, 2 linhas: *"O mar daqui tem hora certa."* / *"A gente conhece ela."* (segunda linha em cor areia)
- Subtítulo Inter 17-19px: *"Receptivo boutique em João Pessoa. Curadoria pessoal do Murilo, roteiros que respeitam a maré e o seu ritmo."*
- 3 selos de confiança em linha: Cadastur · 4,9★ · Atendimento direto
- 2 CTAs: primário laranja "Falar com o Murillo agora" + microcopy "Resposta em até 5 minutos" / secundário outline branco "Ver passeios mais procurados"
- Micro-bloco no rodapé do hero: avatar circular "M" + "— Murillo, fundador" + assinatura italic *"Eu mesmo respondo no WhatsApp"*
- Scroll hint animado embaixo

**Analisar:**
- Contraste entre vídeo + overlay + texto branco — está legível em qualquer frame?
- Hierarquia visual entre h1, subtítulo e CTAs
- Os 3 selos em linha estão equilibrados ou poluem?
- O micro-bloco do Murilo no fim do hero compete com os CTAs?
- Animação fade-up em cascata (delays 100/200/250/350/450) está suave ou pesa?
- O scroll-hint "Role para descobrir" funciona ou é distração?
- Em mobile (375px), tudo cabe sem aperto?

---

## 3. CategoryCard / Categorias (`_site/components/CategoryCard.tsx`)

**Estado atual (na home, seção 2):**
- 6 cards em grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`
- Cada card tem nome + descrição curta + cor de borda lateral (cada categoria com hex diferente: Pacotes `#107997`, Litoral Sul `#1A6B52`, Litoral Norte `#7B4F12`, Piscinas `#0E5E8A`, City Tour `#4A3580`, Interestaduais `#8B1A3A`)

**Analisar:**
- 6 cores diferentes nas categorias quebra a paleta ou enriquece?
- Hierarquia tipográfica dentro do card (nome vs descrição)
- Hover state (existe? está sutil?)
- O link "Ver todos os 22 passeios →" abaixo do grid tem peso correto

---

## 4. PasseioCard (`_site/components/PasseioCard.tsx`)

**Estado atual:**
- Usado nos "Passeios prioritários" da home e nos índices de categoria
- Estrutura: imagem com `next/image`, nome, duração, preço a partir de, botão CTA
- 19 dos 22 passeios já têm `coverImage` real (commit `92fc4b9`)

**Analisar:**
- Proporção da imagem (4:3? 16:9? 5:4?)
- Onde aparece o preço (canto sobre imagem? abaixo do título?)
- Estado hover (eleva? muda borda?)
- Skeleton state pra imagem em loading

---

## 5. TrustBlock (`_site/components/TrustBlock.tsx`)

**Estado atual:**
- Componente LEGADO, com cor `bg-dark` e copy "Por que confiar na Vem Passear em Jampa?"
- **Verificar se ainda é renderizado em alguma rota** — pode ter sido substituído por CadasturCertificate + GoogleReviewsBlock

**Analisar:**
- Se ainda for usado: faz sentido manter junto com os 2 novos blocos de confiança?
- Se for legado: deletar ou refatorar para algo complementar (ex.: bloco de FAQ rápida)?
- Marcar resposta clara: **manter / refatorar / deletar**

---

## 6. MurilloBlock (`_site/components/MurilloBlock.tsx`)

**Estado atual:**
- Seção com fundo `var(--cor-primaria)` (ocean teal escuro)
- Grid 5fr/7fr: foto à esquerda + texto à direita
- Foto: placeholder 4:5 com letra "M" central (`HOME-PRT-02` aguarda foto real)
- Badge "Cadastur Ativo" sobreposto no canto inferior direito da foto
- H2 serif branco: *"Murillo. Não é atendente, não é central."*
- Quote da missão com borda lateral laranja
- Lista de 3 diferenciais com check laranja em círculo
- Assinatura manuscrita Caveat "— Murillo"
- CTA "Falar com o Murillo →" laranja

**Analisar:**
- Foto placeholder com letra "M" — proposta de tratamento até foto real chegar
- O badge Cadastur sobreposto à foto compete com o CadasturCertificate mais abaixo?
- Hierarquia: H2 → quote → diferenciais → assinatura → CTA — ordem ideal?
- Cor de fundo (ocean) — está OK ou seria melhor navy?
- A frase "Não é atendente, não é central" tem tom forte — funciona ou soa defensivo?

---

## 7. GoogleReviewsBlock (`_site/components/GoogleReviewsBlock.tsx`)

**Estado atual:**
- Cabeçalho centralizado: kicker "Provas reais" + H2 *"O que dizem no Google"* + chip com logo Google colorido + ★★★★★ 4,9 · 63 avaliações
- Marquee horizontal infinito de 12 cards (duplicados pra loop sem corte)
- Velocidade: `googleReviews.length × 7s = 84s` para ciclo completo
- Pausa no `:hover`
- Cada card: avatar real + nome + estrelas amarelas + tempo + texto (até 6 linhas) + grid de fotos (até 3)
- CTA underline: "Ler as 63 avaliações no Google →"

**Analisar:**
- Velocidade do marquee — 84s é confortável ou cansa?
- Tamanho do card (360px width) em mobile (375px viewport) — fica colado nas bordas?
- Contraste entre estrelas amarelas e texto preto
- Grid de fotos: 3 colunas é OK ou 2 mais respirado?
- Avatares circulares 44px — tamanho ideal?
- "+N" overlay para mais fotos — necessário ou poluição?

---

## 8. CadasturCertificate (`_site/components/CadasturCertificate.tsx`)

**Estado atual:**
- Grid 5fr/7fr no desktop, 1col no mobile
- Imagem real do certificado clicável (cursor-zoom-in)
- Hover na imagem: `translateY(-3px)` + sombra mais profunda
- Lightbox: clique abre overlay `rgba(9,34,56,0.88)` com `backdropFilter: blur(8px)` + imagem ampliada + botão × no canto
- Texto à direita: badge verde "Registro Ativo" → H2 *"Empresa legal, certificada pelo Ministério do Turismo."* → parágrafo de 3 linhas → InfoRows (CNPJ + Validade) → link verificar no portal

**Analisar:**
- Peso visual do bloco — está muito grande ou correto?
- O certificado em si é uma imagem com muita info — visual está limpo?
- A frase H2 sobre "Empresa legal" — tom institucional, está pesado ou OK?
- O lightbox abre direito em mobile (toque na imagem)?
- O botão × tem alvo de toque suficiente (44px)?
- Falta um indicador visual de "clica pra ampliar" (lupa? texto?)

---

## 9. PartnersMarquee (`_site/components/PartnersMarquee.tsx`)

**Estado atual:**
- Cabeçalho: kicker "Quem caminha com a gente" + H2 *"Parceiros em João Pessoa"* + subtítulo de 1 linha
- Fundo `var(--cor-areia)` (`#C5B7A3`)
- Marquee 36s linear infinito, pausa no hover
- 8 cards 220×140px, gap 20px
- 1 card real (Quiosque Pé na Areia com logo + link Maps clicável + hover translateY)
- 7 placeholders "Parceiro 2..8" sem logo (só nome + tipo)

**Analisar:**
- Coexistência entre 1 card com logo real + 7 placeholders — visualmente OK ou denuncia que falta conteúdo?
- Fundo areia se diferencia bem do bloco de reviews acima (que é fundo bone)?
- Velocidade 36s (mais rápido que reviews) — propósito ou inconsistência?
- Card hover state apenas no que tem link — confunde o usuário?
- Tamanho ideal do card de parceiro vs card de review

---

## 10. Footer (`_site/components/Footer.tsx`)

**Estado atual:**
- Fundo `var(--cor-primaria)` (ocean teal) com texto branco
- 3 colunas no desktop / 1 coluna no mobile
- Col 1 (Institucional): logo branca `logo-transparente.png` em **88px** + missão curta + links (rating Google, Cadastur)
- Col 2 (Navegação): provavelmente passeios, serviços, blog, FAQ
- Col 3 (Contato): WhatsApp, Instagram, GMB

**Analisar:**
- Cor ocean teal vs navy profundo — qual seria mais "footer"?
- Tamanho da logo 88px — está OK ou poderia ser maior?
- Contraste do texto sobre fundo ocean
- Hierarquia entre os 3 grupos de links

---

## 11. CTAFinal (`_site/components/CTAFinal.tsx`)

**Estado atual:**
- Bloco escuro de fechamento, geralmente fundo navy ou ocean
- H2 grande: *"O melhor de João Pessoa começa numa conversa."*
- Subtítulo: *"Manda mensagem. O Murillo responde rápido, sem script, sem enrolação."*
- Botão laranja "Conversar com o Murillo agora"
- Microcopy: *"Atende de 7h às 22h, todos os dias · Resposta em até 5 minutos"*
- Variante `laranja` permite background com a cor de acento

**Analisar:**
- A repetição de CTA WhatsApp (hero + CTASticky + CTAFinal + Header pill) — está bem distribuída ou redundante?
- Cor de fundo (qual variante usar onde?)
- Microcopy abaixo do botão — está informativo sem soar comercial?
- Hierarquia entre H2 e botão

---

## 12. CTASticky (`_site/components/CTASticky.tsx`)

**Estado atual:**
- Botão flutuante WhatsApp no rodapé do mobile
- Aparece após scroll do hero
- Cor `#25D366` (verde WhatsApp oficial)

**Analisar:**
- Esconde conteúdo em mobile (overlay com o card de passeio embaixo)?
- Pode ser dispensado em desktop?
- Aparece em todas as páginas ou só na home?

---

## 13. WaveDivider (`_site/components/WaveDivider.tsx`)

**Estado atual:**
- SVG de onda usado entre seções (Hero → Categorias, Categorias → Reviews)
- Cor preenchida com `var(--cor-fundo)` ou `var(--cor-fundo-puro)` para transição suave

**Analisar:**
- A onda combina com a personalidade da marca ("Vem Passear em Jampa")?
- Ou está soando "tropical demais" e poderia ser substituído por divisor mais sóbrio?

---

## Cross-cutting (avaliar entre componentes)

- **Consistência de cards** entre PasseioCard, ReviewCard (do GoogleReviewsBlock), PartnerCard, CategoryCard — usam o mesmo radius, sombra, transição? Devem usar `.card-base`?
- **Consistência de CTAs** — quantos botões laranja aparecem na home? Estão todos com microcopy igual ou variam?
- **Tipografia em escala** — H2 da home é maior, igual ou menor que H2 da /sobre?
- **Espaçamento entre seções** — `.section-padding` é usado em todas? Ou alguns blocos usam padding custom inline?

---

*Lista canônica para análise visual. Cada bullet deve receber resposta de Claude Design no formato: bom / melhora / como.*
