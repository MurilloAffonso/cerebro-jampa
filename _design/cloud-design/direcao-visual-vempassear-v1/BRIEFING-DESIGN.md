# BRIEFING DE DIREÇÃO VISUAL — Vem Passear em Jampa v1

**Pacote:** `_design/cloud-design/direcao-visual-vempassear-v1/`
**Destinatário:** Claude Design / IA Design
**Autor:** Murillo (validação) + Claude Code (extração técnica)
**Data:** 2026-05-11
**Versão:** v1

---

## 1. Resumo da marca

**Nome:** Vem Passear em Jampa
**Site:** https://vempassearjampa.com.br
**Negócio:** Agência de turismo receptivo em João Pessoa / Paraíba
**Fundador / rosto da marca:** Murilo (Affonso Murillo Soledade de Oliveira — grafia jurídica usada apenas em seções de Cadastur/CNPJ)
**Credenciais:** Cadastur ativo `52.077.577` (até 16/12/2026), CNPJ `52.077.577/0001-03`, 4,9★ no Google em 63 avaliações
**Cidades atendidas:** João Pessoa, litoral sul (Tambaba, Coqueirinho, Tambaú), litoral norte (Areia Vermelha, Camboinha), interestaduais a partir de JP

---

## 2. Público-alvo

| Persona | Quem é | O que procura |
|---|---|---|
| Família com crianças | Pais 30-50, viajando com 2-3 filhos | Segurança, conforto, conveniência, orientação |
| Casal em viagem romântica | 25-45, primeira ou segunda vez em JP | Curadoria, experiência sensorial, qualidade |
| Grupo de amigos | 5-12 pessoas, 22-40 anos | Preço justo, organização, parceiros confiáveis |
| Viajante solo / nômade | 25-40 | Atendimento humano, orientação local, autenticidade |

Padrão geral: **70-80% dos acessos vêm de mobile** (turistas já em João Pessoa pesquisando passeio do hotel/quiosque).

---

## 3. Personalidade visual desejada

- **Acolhedora e local** — Nordeste sem caricatura, sem clichê tropical
- **Confiável e organizada** — não é freelance de praia, é agência registrada
- **Humana, não corporativa** — Murilo é rosto, não logo institucional
- **Calma, com respiração** — espaço branco generoso, ritmo legível
- **Mobile-first puro** — começa em 320px e cresce

### Promessa central da marca

> *"A base da agência é simples: parceria, preço justo, qualidade e confiança."*

A marca **não vende só passeio**. Ela **orienta o turista a escolher o roteiro certo, no melhor momento da viagem, com parceiros confiáveis e atendimento direto no WhatsApp**.

---

## 4. Páginas que precisam ser analisadas

| Página | Rota | Status atual |
|---|---|---|
| Home | `/` | Ativa, recém-refinada (2026-05-11): Hero vídeo, categorias, Google Reviews em carrossel, passeios prioritários, parceiros, Cadastur, MurilloBlock, CTA final |
| Sobre | `/sobre` | Ativa, copy institucional definitiva aplicada em 2026-05-11 |
| FAQ | `/faq` | Ativa, com schema FAQPage |
| Passeios index | `/passeios` | Ativa, 22 passeios em 6 categorias |
| Categoria (template) | `/passeios/[categoria]` | Dinâmica |
| Passeio (template) | `/passeios/[categoria]/[slug]` | Dinâmica |
| Servicos | `/servicos/transfer-24h`, `/servicos/excursoes-e-grupos` | Ativas |
| Blog | `/blog` + `/blog/[slug]` | Ativa |

**Foco do briefing:** Home (`/`) e Sobre (`/sobre`) primeiro. Demais páginas em onda posterior.

---

## 5. Componentes principais

Listados em detalhe em `componentes-analisar.md`. Resumo dos blocos com responsabilidade visual mais alta:

- **Header** — `_site/components/Header.tsx`
- **HomeVideoHero** — `_site/components/HomeVideoHero.tsx`
- **CategoryCard** (na home) — `_site/components/CategoryCard.tsx`
- **PasseioCard** — `_site/components/PasseioCard.tsx`
- **GoogleReviewsBlock** — `_site/components/GoogleReviewsBlock.tsx`
- **PartnersMarquee** — `_site/components/PartnersMarquee.tsx`
- **CadasturCertificate** — `_site/components/CadasturCertificate.tsx`
- **MurilloBlock** — `_site/components/MurilloBlock.tsx`
- **CTAFinal** — `_site/components/CTAFinal.tsx`
- **CTASticky** — `_site/components/CTASticky.tsx`
- **Footer** — `_site/components/Footer.tsx`

---

## 6. Paleta de cores ATUAL (extraída de `_site/styles/globals.css` e `_site/tailwind.config.ts`)

### Cores principais
| Token | Hex | Uso |
|---|---|---|
| `--cor-primaria` (ocean) | `#107997` | Cor principal — links, headings, CTAs azuis |
| `--cor-primaria-clara` | `#128AAD` | Hover do primário, gradientes |
| `--cor-navy` (secondary) | `#092238` | Navy profundo — footer, header escuro, texto |
| `--cor-profunda` (deep) | `#163149` | Navy médio — destaques em fundo claro |
| `--cor-areia` (sand) | `#C5B7A3` | Bordas, fundos suaves, separadores |
| `--cor-acento` | `#D97706` | Laranja-falésia — CTAs de conversão (WhatsApp principal) |
| `--cor-acento-suave` | `#FBBF24` | Amarelo-sol — estrelas, ícones, detalhes |

### Texto
| Token | Hex | Uso |
|---|---|---|
| `--cor-texto-escuro` | `#0D1F2D` | Quase-preto levemente azulado |
| `--cor-texto-medio` | `#374151` | Corpo de texto, parágrafos |
| `--cor-texto-claro` | `#6B7280` | Meta, legendas, captions |

### Fundos
| Token | Hex | Uso |
|---|---|---|
| `--cor-fundo` (bone) | `#F7F8F7` | Fundo de página |
| `--cor-fundo-puro` | `#FFFFFF` | Cards, modais |
| `--cor-borda` | `#DDD5C8` | Borda suave harmoniza com areia |

### Feedback
| Token | Hex | Uso |
|---|---|---|
| `--cor-sucesso` | `#10B981` | Badges verdes (Cadastur ativo) |
| `--cor-erro` | `#DC2626` | Mensagens de erro |
| `--cor-whatsapp` | `#25D366` | Botões WhatsApp exclusivamente |

**Aprovação:** Paleta v2 aprovada em `2026-05-09` (registro `_memoria/decisoes-estrategicas.md`, decisão 41).

---

## 7. Tipografia ATUAL

| Família | Variável CSS | Fonte primária | Fallback | Uso |
|---|---|---|---|---|
| Heading (serif) | `--font-heading` / `--font-fraunces` | Fraunces | Georgia, serif | H1, H2, H3, H4 |
| Body (sans) | `--font-body` / `--font-inter` | Inter | system-ui | Parágrafos, UI, navegação |
| Manuscrita | `--font-caveat` | Caveat | cursive | Assinatura de Murilo em blocos institucionais |

**Importadas via** `next/font/google` (não link CDN). **Pesos** Fraunces 500/600/700; Inter 400/500/600; Caveat 600.

### Escala canônica (mobile-first com `clamp()`)
- `hero` → `clamp(38px, 6.5vw, 68px)` — letterSpacing -0.03em, weight 600
- `h2` → `clamp(28px, 3.5vw, 44px)` — letterSpacing -0.025em
- `h3` → `clamp(22px, 2vw, 30px)` — letterSpacing -0.015em
- `h4` → `clamp(18px, 1.5vw, 22px)`
- `kicker` → `12px` uppercase, letterSpacing `0.12em`, weight 600, cor laranja-falésia
- `body` → `17px` line-height `1.75`
- `body-lg` → `clamp(17px, 1.4vw, 20px)` line-height `1.65`

---

## 8. Estilo desejado de botões, cards, badges, seções e CTAs

### Botões (definidos em globals.css)
| Classe | Cor | Quando usar |
|---|---|---|
| `.btn-primary` | Fundo `#D97706` (acento laranja), texto branco | CTA principal de conversão — falar com Murilo, reservar |
| `.btn-ocean` | Fundo `#107997` (primário teal), texto branco | CTA secundário institucional |
| `.btn-outline` | Borda primário 1.5px, texto primário | CTA terciário, "ver mais", "saiba mais" |
| WhatsApp dedicado | Fundo `#25D366` | Sempre que rótulo for "WhatsApp" explicitamente |

**Altura mínima:** 56px (toque mobile-friendly). **Border-radius:** 8px. **Sombra CTA:** `0 4px 20px rgba(217, 119, 6, 0.40)`. **Hover:** `translateY(-2px)` + sombra mais profunda.

### Cards
- **`.card-base`** — fundo branco, border `1px solid var(--cor-borda)`, radius `16px`, sombra `0 2px 16px rgba(16,121,151,0.07)`
- **Hover:** `translateY(-6px)` + sombra `0 8px 32px rgba(16,121,151,0.16)` + borda muda para primário
- **Transição:** `cubic-bezier(0.22, 1, 0.36, 1)` em `280ms`

### Badges
- Border-radius `999px` (pill)
- Padding `6px 14px`
- Font-size `13px`, weight `500-600`
- Casos atuais: chips de elogio na seção Google ("Atendimento atencioso"), selo verde "Registro Ativo" no Cadastur, label de tipo no carrossel de parceiros

### Seções
- **Padding vertical:** `72px` mobile / `112px` desktop (`.section-padding`)
- **Container max-width:** `1200px` (`.container-safe`)
- **Kicker** (label uppercase) acima do `h2` de cada seção, cor laranja
- **Alternância** fundo bone `#F7F8F7` / branco `#FFFFFF` entre seções
- **Wave dividers** (`WaveDivider.tsx`) usados entre Hero → Categorias e Categorias → Reviews

### CTAs
- **CTA principal** (laranja) aparece em: hero, cards de prioritários, CTA final, sticky bottom mobile, MurilloBlock
- **Microcopy abaixo do CTA principal:** sempre 1 linha sutil tipo *"Resposta em até 5 minutos"* ou *"Atende de 7h às 22h, todos os dias"*
- **CTASticky:** flutua no rodapé mobile com texto "Falar com Murilo no WhatsApp"
- **Link genérico** (sem botão): underline `2px solid rgba(16,121,151,0.25)` cor primário

---

## 9. Cuidados com mobile-first

- **320px é o ponto de partida** — sempre testar nesse breakpoint primeiro
- Tipografia usa `clamp()` para escalar sem media query
- Toque mínimo: **44px** em qualquer elemento clicável (regra global `button, [role="button"] { min-height: 44px }`)
- Hero em mobile: `min-height: min(100svh, 860px)` (sv aware do barra do navegador iOS)
- Carrosséis (PartnersMarquee, GoogleReviewsBlock): em `prefers-reduced-motion` viram grid estático com `flex-wrap`
- Imagens com `aspect-ratio` definido para evitar CLS
- Lazy load em imagens fora do hero (atributo `loading="lazy"`)

---

## 10. Pontos que NÃO devem ser mudados

| Item | Por quê |
|---|---|
| **Paleta v2** (`#107997` + `#092238` + `#D97706`) | Aprovada formalmente em 2026-05-09 — qualquer mudança quebra branding consolidado |
| **Logo da Vem Passear** (fonte / desenho da palmeira) | Murilo deixou explícito (memória `feedback_logo_vempassear`) que estilo de letra e desenho NÃO mudam — só fundo e tamanho via CSS |
| **Cadastur, CNPJ e dados oficiais** | Dados jurídicos vivem em `_site/data/empresa.ts` — direção visual NÃO pode reescrever esses valores |
| **Reviews reais do Google** | Texto, nome, fotos e datas extraídos do Maps oficial em `_site/data/google-reviews.ts` — NÃO inventar nem editar |
| **Nome dos parceiros e logos** | Só pode mostrar parceiro confirmado por Murilo (atual: Quiosque Pé na Areia). Demais slots do carrossel são placeholders "Parceiro 2..8" aguardando lista oficial |
| **CTA WhatsApp como canal único** | Decisão estratégica nº 1 do projeto: não email, não formulário, não chat-bot |
| **Tom honesto sem urgência falsa** | Nada de "ÚLTIMAS VAGAS", "só hoje", "imperdível", "paraíso tropical" — proibições registradas em `CEREBRO.JAMPA/CLAUDE.md` |
| **Sprint atual** | Está pausado: redesign, blog novo, i18n, social editorial, Lovable, design system v1.2 (`_memoria/proximos-passos.md`) — direção visual NÃO pode pedir nada que entre em conflito |

---

## 11. Próximo passo (após Claude Design devolver proposta)

1. Murilo revisa as 2-3 variações visuais propostas
2. Aprova UMA direção
3. Claude Code implementa em Next.js/Tailwind respeitando tokens existentes
4. Validar via `npm run type-check` + `npm run build`
5. Commit temático separado de cada mudança visual

**Importante:** redesign total NÃO está autorizado nesta sprint. O briefing pede **refinamento dentro do sistema existente**, não substituição.
