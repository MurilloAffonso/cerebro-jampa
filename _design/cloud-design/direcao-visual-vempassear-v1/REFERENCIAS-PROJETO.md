# REFERÊNCIAS DO PROJETO — guia rápido para Claude Design

Documento de contexto que acompanha o briefing. Resume o que foi consultado, decisões importantes e o que está pausado.

---

## 1. Arquivos consultados (fonte da verdade)

### Código de produção
| Arquivo | Conteúdo extraído |
|---|---|
| `_site/styles/globals.css` | Tokens CSS de cor, tipografia, ritmo vertical, animações, classes `.btn-primary` / `.btn-ocean` / `.btn-outline` / `.card-base` / `.quote-poetica` / `.manuscrita` / `.section-kicker` |
| `_site/tailwind.config.ts` | Paleta Tailwind alias, escala tipográfica canônica (`hero`, `h2`, `h3`, `h4`, `kicker`, `body`, `body-lg`), boxShadow nomeadas, maxWidth, transitionTimingFunction |
| `_site/app/page.tsx` | Estrutura atual da Home: Hero → Categorias → Google Reviews → Passeios Prioritários → Parceiros → Cadastur → MurilloBlock → CTA Final |
| `_site/app/sobre/page.tsx` | Estrutura da página Sobre: Breadcrumb → Hero → "Sobre a marca" (copy institucional definitiva) → Identidade verificável → Missão → Como funciona → Redes → CTA |
| `_site/components/Header.tsx` | Logo `logo-azul-transparente.png` 150px alt, menu desktop (Início, Passeios dropdown, Serviços dropdown, Sobre, FAQ), CTA WhatsApp pill verde, hamburger mobile |
| `_site/components/Footer.tsx` | Logo branca `logo-transparente.png` 88px, missão curta, links (Cadastur, Google, Instagram), footer institucional |
| `_site/components/HomeVideoHero.tsx` | Hero com vídeo loop, h1 serif grande, label uppercase, subtítulo, 3 selos de confiança, 2 CTAs (laranja + outline), micro-bloco Murillo no canto |
| `_site/components/MurilloBlock.tsx` | Bloco escuro de fundo navy/primário, foto placeholder, h2 "Murillo. Não é atendente, não é central.", quote da missão, 3 diferenciais com check laranja, assinatura manuscrita |
| `_site/components/TrustBlock.tsx` | Componente legado de selos de confiança (verificar se ainda é renderizado em alguma rota) |
| `_site/components/GoogleReviewsBlock.tsx` | Cabeçalho com nota Google + carrossel infinito (marquee 7s/card) com 12 reviews reais (avatar, estrelas amarelas, tempo, texto, grid de fotos), CTA "Ler todas no Google" |
| `_site/components/CadasturCertificate.tsx` | Grid imagem + texto, certificado clicável com lightbox, selo verde "Registro Ativo", lista CNPJ + Validade, link para QR Code oficial do CNPJ |
| `_site/components/PartnersMarquee.tsx` | Marquee 36s, 8 cards 220×140px, suporta `logoSrc` opcional + `link`, atualmente Quiosque Pé na Areia + 7 placeholders |
| `_site/data/empresa.ts` | Dados confirmados: CNPJ `52.077.577/0001-03`, Cadastur `52.077.577` (até 16/12/2026), WhatsApp `83 99087-830`, rating 4,9/5 em 63 avaliações, Instagram `@vempassearjampa`, Google Maps URL oficial |
| `_site/data/google-reviews.ts` | 12 reviews reais extraídos do Google Maps em 2026-05-11 via Playwright (texto, nome, estrelas, tempo, fotos, avatar) |

### Memória estratégica
| Arquivo | Conteúdo |
|---|---|
| `_memoria/decisoes-estrategicas.md` | 41 decisões aprovadas, incluindo paleta v2 (decisão 41), WhatsApp como CTA único (decisão 1), Murilo como rosto (decisão 3), Cadastur acima da dobra (decisão 4), mobile-first obrigatório (decisão 6), competir por confiança não preço (decisões 7-8) |
| `_memoria/politica-ferramentas-ia.md` | Claude Code = 85-90% (estrutura, código, dados). Claude Design = 10-15% (exploração visual, prototipagem, direção visual, handoff). Este briefing está exatamente dentro do escopo de Claude Design |
| `_memoria/proximos-passos.md` | Sprint única 2026-05-06 → 2026-05-20. Foco: lead via passeio + GMB + CSV. Redesign está EXPLICITAMENTE pausado. Design system v1.2 também pausado |

---

## 2. Decisões estratégicas que importam ao design

| # | Decisão | Impacto visual |
|---|---|---|
| 1 | WhatsApp é o único CTA de conversão | Não criar formulário, não usar email como botão principal. Toda página termina em WhatsApp |
| 3 | Murilo é o rosto da marca | Espaço reservado pra foto (HOME-PRT-01 hero, HOME-PRT-02 MurilloBlock — hoje placeholder "M"). Visual NUNCA impessoal |
| 4 | Cadastur + rating acima da dobra | Selos no hero são obrigatórios. Visual deve dar peso a credenciais sem soar burocrático |
| 5 | Maré como diferencial operacional | Em páginas de passeio com dependência de maré, há aviso visual claro — design deve manter destaque |
| 6 | Mobile-first puro | Toda variação proposta tem que mostrar 320px primeiro |
| 7 | Não competir por preço | Visual sóbrio, sem "OFERTA", sem badge vermelho de promo, sem countdown |
| 8 | Competir por confiança | Selos, números, fotos reais, prova social com peso |
| 41 | Paleta v2 aprovada (2026-05-09) | Hex específicos `#107997` / `#092238` / `#0E8FA8` / `#D97706` / `#F7F8F7` |

---

## 3. Tom da marca

| Sim | Não |
|---|---|
| Acolhedor, local, humano | Corporativo, frio |
| Nordestino sem caricatura | Caricatura "ó, paraíba!" |
| Orientador (ajuda o turista a decidir) | Vendedor agressivo |
| Específico (qual praia, qual horário) | Genérico (que funcionaria em qualquer cidade) |
| Honesto sobre limites (maré, tempo, distância) | False scarcity ("últimas vagas") |
| Calmo, com respiração | Apressado, urgência forçada |
| Confiável (números reais, fotos reais) | Inflado (depoimento fake, foto stock) |

**Voz do narrador:** primeira pessoa do plural quando institucional (*"trabalhamos com operadores legalizados"*), terceira singular quando narrativa do fundador (*"Murilo responde direto"*).

---

## 4. Frases-âncora que guiam o design

São frases reais do site que carregam o posicionamento. O design deve dar a elas peso visual.

1. *"O mar daqui tem hora certa. A gente conhece ela."* — H1 do hero
2. *"Receptivo boutique em João Pessoa. Curadoria pessoal do Murilo, roteiros que respeitam a maré e o seu ritmo."* — subtítulo do hero
3. *"Murillo. Não é atendente, não é central."* — H2 do MurilloBlock
4. *"Eu mesmo respondo no WhatsApp"* — assinatura manuscrita do hero
5. *"A base da agência é simples: parceria, preço justo, qualidade e confiança."* — frase-âncora da página /sobre
6. *"O melhor de João Pessoa começa numa conversa."* — H2 do CTA Final
7. *"Atende de 7h às 22h, todos os dias · Resposta em até 5 minutos"* — microcopy do CTA Final

Use essas frases como ponto de calibragem visual: tudo na página deve servir a fazer essas frases respirarem.

---

## 5. Restrições do projeto

### Técnicas
- Stack fixa: **Next.js 14 (App Router) + React 18 + TypeScript + Tailwind**
- Não introduzir dependência nova sem aprovação
- Não usar `<img>` HTML se der pra usar `next/image` (exceto domínio externo já liberado: `lh3.googleusercontent.com`)
- Não usar fonte externa que não seja Google Fonts via `next/font/google`
- Type-check (`npm run type-check`) e build (`npm run build`) precisam passar antes de commit

### Editoriais
- Não inventar fato (preço, roteiro, parceria, depoimento)
- Não usar emoji desproporcional (📷📍 OK em microcopy; em CTA não)
- Não criar urgência falsa

### Operacionais
- Não fazer deploy sem aprovação de Murilo
- Não rodar `git push` sem aprovação
- Não alterar `.env`
- Cadastur e CNPJ vivem em `_site/data/empresa.ts` — não duplicar string em outro lugar

---

## 6. O que está PAUSADO (não deve virar nova frente)

Consolidado de `_memoria/proximos-passos.md` (sprint atual 2026-05-06 → 2026-05-20):

- **Redesign total** — explicitamente pausado, refinamento OK
- **Blog novo** (Maré, Época, O Que Levar) — pausado
- **Social media editorial** (reels, carrossel) — pausado
- **i18n inglês** — pausado
- **TripAdvisor / Viator / Evolution API** — pausado
- **Lovable** — congelado, descartado
- **Design system v1.2** — usar só o que existe; NÃO expandir
- **Importador automático CHM v2.0** — pausado

Se a direção visual proposta exigir qualquer dessas frentes, marcar como `[FORA DA SPRINT — agendar fase posterior]` e não bloquear a entrega principal.

---

## 7. Métricas de sucesso da direção visual

Pra Murilo aprovar a proposta, ela precisa:

1. **Conversão clara** — turista entende em 5 segundos que pode falar com Murilo direto no WhatsApp
2. **Credibilidade visível** — Cadastur e rating do Google ficam acima da dobra sem soar burocrático
3. **Humanização presente** — Murilo (rosto + voz + assinatura) está em pelo menos 3 pontos da página
4. **Respiração mobile** — em 320px, nada empilha demais nem aperta o toque
5. **Coerência entre seções** — cards de passeio, review, parceiro e Cadastur falam a mesma língua visual
6. **Movimento sutil** — vídeo do hero e marquee de reviews não competem com leitura; em reduced-motion tudo fica estático
7. **Zero clichê** — nenhuma palmeira coqueiro genérica, nenhum "paraíso", nenhuma urgência falsa

---

*Documento técnico-estratégico. Acompanha `BRIEFING-DESIGN.md`, `PROMPT-CLAUDE-DESIGN.md` e `componentes-analisar.md`. Atualização: 2026-05-11.*
