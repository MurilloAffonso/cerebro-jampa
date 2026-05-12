# PROMPT — Claude Design / IA Design — Direção Visual Vem Passear v1

> **Como usar:** abra https://claude.ai com Sonnet 4.6 ou Opus 4.7, anexe os 3 arquivos MD desta pasta + os assets da pasta `assets/`, e cole o prompt abaixo. O Claude vai devolver a análise visual + 2-3 variações.

---

## Prompt para colar

```
Você é diretor de arte sênior especializado em sites de turismo no Brasil. Vou te dar uma agência que já tem identidade visual implementada e quero que você refine a direção visual — sem redesign, sem trocar a paleta, sem mexer no logo.

═══════════════════════════════════════════════
CONTEXTO
═══════════════════════════════════════════════
Marca: Vem Passear em Jampa
Site: https://vempassearjampa.com.br
Negócio: agência de turismo receptivo em João Pessoa, Paraíba (Brasil)
Rosto da marca: Murilo (fundador). Atendimento direto por WhatsApp, sem central.
Posicionamento: parceria, preço justo, qualidade e confiança.
Promessa: ajudar o turista a escolher o passeio certo, no melhor momento da viagem, com parceiros legalizados.
Credenciais: Cadastur ativo + 4,9★ Google em 63 avaliações.
Stack técnica: Next.js 14 + Tailwind CSS. Mobile-first (70-80% dos acessos vêm de mobile).

═══════════════════════════════════════════════
DOCUMENTOS ANEXOS (leia antes de propor)
═══════════════════════════════════════════════
1. BRIEFING-DESIGN.md — paleta, tipografia, tokens, restrições
2. REFERENCIAS-PROJETO.md — decisões estratégicas, tom, frases-âncora
3. componentes-analisar.md — lista do que avaliar
4. assets/ — logos, certificado Cadastur, foto de parceiro

═══════════════════════════════════════════════
O QUE QUERO QUE VOCÊ FAÇA
═══════════════════════════════════════════════

A) ANÁLISE VISUAL (1ª entrega)
   1. Avaliar a Home (`/`) e a página `/sobre` em duas camadas:
      - macro: hierarquia, ritmo entre seções, respiração, fluxo do olho do usuário
      - micro: contraste de cor, peso tipográfico, tamanho de CTA, alinhamento de cards
   2. Avaliar cada componente listado em componentes-analisar.md com 3 bullets cada: o que está bom, o que melhora, como melhora (mantendo tokens existentes)
   3. Apontar inconsistências visuais entre componentes (ex.: card de parceiro vs card de review vs card de passeio)

B) DIREÇÃO VISUAL GERAL (2ª entrega)
   Proponha UMA direção visual coesa, dentro da paleta atual, descrevendo:
   - personalidade visual em 3 palavras
   - como a paleta é distribuída (peso de cada cor por área da página)
   - como o movimento é usado (transições, scroll reveal, marquee — sutil ou ativo?)
   - como ícones e emojis aparecem (se aparecem; nada amador)
   - como a foto se integra ao desenho (Murilo, passeios, parceiros)

C) PALETA — REFINAMENTO (não substituição)
   Mantenha:
   • `#107997` ocean — principal
   • `#092238` navy — escuro
   • `#D97706` acento laranja — CTA conversão
   • `#FBBF24` amarelo — estrelas
   • `#F7F8F7` bone — fundo
   • `#C5B7A3` areia — bordas/separadores
   Você pode:
   • Sugerir gradiente sutil entre ocean e ocean-clara (#128AAD) em hero ou divisores
   • Sugerir tom de overlay para vídeo do hero
   • Sugerir uma cor de glass/backdrop para o header sticky
   • NÃO trocar hex já aprovado.

D) MOVIMENTO LEVE NO SITE
   Sugira onde adicionar (ou tirar) animação para reforçar elegância sem cansar:
   - hero: vídeo loop já existe — propor overlay e ritmo de entrada do título
   - categorias: cards entram em cascata?
   - Google Reviews: marquee horizontal já existe (12 cards rolando) — velocidade ideal?
   - parceiros: marquee horizontal já existe — diferenciar visualmente do de reviews?
   - Cadastur: certificado clicável com lightbox — entrada do bloco em scroll-reveal?
   Princípio: `prefers-reduced-motion: reduce` deve sempre cair em estado estático.

E) EMOJIS / ÍCONES
   Hoje o site usa SVG inline minimalista (palmeira, estrela, check, WhatsApp). Algumas seções usam emoji bruto (📷, 📍 no /sobre).
   Avalie:
   - Onde manter SVG (consistência)
   - Onde permitir emoji nativo (humanização — ex.: na narrativa Sobre, frases de review)
   - Padronizar tamanho e cor

F) CTAs WHATSAPP
   Existem 4 variantes hoje:
   1. Hero — botão grande laranja "Falar com o Murillo agora" + microcopy "Resposta em até 5 minutos"
   2. CTASticky — flutuante no rodapé mobile
   3. CTAFinal — bloco escuro de fechamento de página
   4. Header — pill verde WhatsApp no canto superior direito
   Avalie: posição, frequência, hierarquia visual, redundância. Proponha ajuste de peso (não duplicar mensagem). Microcopy deve continuar humana (não inventar SLA).

G) BLOCOS DE CONFIANÇA
   Hoje:
   - 3 selos no hero (Cadastur ativo · 4,9★ · Atendimento direto)
   - GoogleReviewsBlock (marquee de 12 reviews com fotos reais)
   - CadasturCertificate (imagem real do certificado + lightbox + CNPJ + validade)
   - MurilloBlock (rosto humano + diferenciais + assinatura manuscrita)
   - Footer (Cadastur + rating + Instagram + Google)
   Avalie:
   - Excesso ou repetição?
   - Hierarquia entre os 4 blocos
   - Tom dos selos (sóbrios vs animados)
   - Ordem na página: faz o turista crescer em confiança ao rolar?

H) COMPONENTES INDIVIDUAIS
   Para cada um listado em componentes-analisar.md, devolva uma micro-análise:
   - Header (logo 150px, menu, CTA WhatsApp pill verde)
   - Hero (vídeo loop, h1 serif grande, selos, 2 CTAs)
   - Cards de passeio (PasseioCard com next/image)
   - TrustBlock (legacy — verificar se ainda é usado)
   - MurilloBlock (foto placeholder + lista de diferenciais + assinatura)
   - GoogleReviewsBlock (marquee de cards estilo print Maps)
   - CadasturCertificate (certificado + lightbox + InfoRows)
   - PartnersMarquee (marquee de 8 cards, 1 com logo real)
   - Footer (logo branca, missão curta, links, redes)
   - CTAs de WhatsApp

I) VARIAÇÕES
   Devolva 2 OU 3 variações visuais possíveis dentro da mesma marca:
   - Variação A — Sóbria e institucional (peso navy + bone, animação mínima)
   - Variação B — Equilíbrio atual (proposta de refinamento da versão de hoje)
   - Variação C — Mais sensorial (peso ocean vivo + areia, mais movimento, fotos maiores)
   Para cada uma: 1 frase de personalidade + 3 ajustes-chave + 1 risco.

J) RECOMENDAÇÕES EM NEXT.JS / TAILWIND
   Toda sugestão precisa ser implementável no stack atual:
   - Usar tokens CSS já definidos em globals.css (`var(--cor-*)`) ou classes Tailwind do tailwind.config.ts
   - Componentes em `_site/components/*.tsx` (React Server Components quando possível, Client só onde precisa)
   - Animações via CSS keyframes + `prefers-reduced-motion`
   - Sem dependência externa nova (já temos `next/image`, `next/font/google`)
   Se precisar de novo token de cor, marque "[NOVA COR — pedir aprovação a Murilo]" antes de adicionar.

═══════════════════════════════════════════════
REGRAS DURAS
═══════════════════════════════════════════════
1. NÃO PROPOR redesign total. O site já está em produção e funcional.
2. NÃO TROCAR hex da paleta aprovada.
3. NÃO MEXER no desenho do logo (palmeira + "VemPassear Jampa") nem na fonte da wordmark.
4. NÃO INVENTAR copy. Texto institucional é decisão de Murilo.
5. NÃO INVENTAR parceiro. Só Quiosque Pé na Areia está confirmado.
6. NÃO USAR clichê turístico: "paraíso tropical", "magia das areias", "cartão postal", "ÚLTIMAS VAGAS".
7. RESPEITAR `prefers-reduced-motion`. Toda animação tem fallback estático.
8. MOBILE-FIRST: 320px é o ponto de partida. Tudo escala pra cima.
9. CADA SUGESTÃO precisa indicar (a) componente impactado, (b) token a usar, (c) custo estimado de implementação (baixo/médio/alto).

═══════════════════════════════════════════════
FORMATO DE ENTREGA
═══════════════════════════════════════════════
1. Análise macro+micro (texto corrido, ~600 palavras)
2. Tabela componente × bom × melhora × como (markdown)
3. Direção visual escolhida (1 parágrafo + 3 palavras-chave)
4. 2-3 variações em cards lado a lado (use bullets)
5. Lista de "quick wins" (≤30 min cada) em ordem de impacto
6. Lista de "investimentos médios" (1-3h cada) em ordem de impacto
7. Nenhum redesign na lista. Se algo só fizer sentido com redesign, marque "[OUT OF SCOPE]" e explique por quê.

Comece pela análise. Quando terminar, pergunte se posso ver os assets antes de avançar para variações.
```

---

## Checklist de validação ao receber o retorno do Claude Design

- [ ] Manteve paleta aprovada sem trocar hex?
- [ ] Manteve logo e tipografia?
- [ ] Toda sugestão referencia componente real do site?
- [ ] Indicou token CSS ou classe Tailwind a usar?
- [ ] Distinguiu quick wins (≤30 min) de investimentos (1-3h)?
- [ ] Respeitou as 7 proibições (clichê, urgência falsa, inventar parceiro)?
- [ ] Devolveu 2-3 variações com risco explícito de cada uma?
- [ ] Considerou mobile-first em todas as sugestões?

Se algum item falhar: rejeitar a entrega e pedir refinamento citando o item exato.
