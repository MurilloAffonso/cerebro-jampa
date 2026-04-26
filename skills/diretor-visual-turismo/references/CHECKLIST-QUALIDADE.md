# Checklist de Qualidade Visual — Diretor Visual de Turismo

**Uso:** Validação final antes de aprovar layout / wireframe / implementação  
**Quando usar:** Antes de repassar para designer, programador ou publicar  
**Quem usa:** Diretor Visual, UX/UI, Programador

---

## SEÇÃO A: Estrutura de Conteúdo (Hierarquia)

- [ ] **H1 é único e claro?**
  - Cada página tem 1 H1 único
  - H1 responde a pergunta do turista (ex: "O Que Fazer em JP?" não "Bem-vindo")
  - H1 usa linguagem de benefício, não corporativo

- [ ] **H2 agrupa seções logicamente?**
  - Cada seção maior (Passeios, FAQ, Confiança) tem H2
  - H2 deixa claro o propósito (ex: "Dúvidas Frequentes" não "Mais Info")
  - Máximo 5-6 H2 por página (não fragmenta demais)

- [ ] **H3 subdivide quando necessário?**
  - Card titles são H3 (não muito pequenos)
  - Subtítulos de seção são H3
  - Nunca H4 ou mais fundo (simplifica hierarquia)

- [ ] **Sequência fluxo de leitura é lógica?**
  - Mobile: Home → Prova Social → Tours → Testimonial → FAQ → CTA
  - Desktop: Mesma ordem (não inverte por desktop)
  - Não tem "saltos" estranhos

---

## SEÇÃO B: Prova Social e Confiança

- [ ] **Cadastur e avaliação são visíveis acima da dobra?**
  - Home: Seção Prova Social dentro de 400px (mobile) ou 500px (desktop)
  - Página de Passeio: Pode estar logo após hero
  - Não enterrado em footer ou lado (turista não vai procurar)

- [ ] **Cadastur está destacado visualmente?**
  - Número grande e legível
  - Fundo contrasta (dark background, white text)
  - Label claro: "Ativo até dez/2026" (não vago)

- [ ] **Avaliação (4.9/5) está clara?**
  - Número em destaque
  - Estrelas visuais (⭐) ou rating indicator
  - Quantidade de reviews: "150+ avaliações verificadas"

- [ ] **Murillo (rosto da marca) aparece onde apropriado?**
  - Home: Seção Prova Social menciona ou tem foto
  - Página de Passeio: Em seção de confiança (opcional)
  - Footer: Contato de Murillo claro
  - **Futuro:** Foto real de Murillo (quando disponível)

- [ ] **Depoimento de cliente é destacado?**
  - Quote em itálico e maior que body text
  - Autor claro (nome + contexto, ex: "Marina & Carlos, Casal SP")
  - Relacionado ao passeio específico (ex: "Após Litoral Sul")
  - Fundo diferente (light gray) para destacar

---

## SEÇÃO C: CTA e Conversão

- [ ] **CTAs estão em cores de destaque?**
  - Verde WhatsApp (#25D366) ou Azul Primária (#0066CC)
  - Não cinza, não invisível
  - Consistente em todas as páginas

- [ ] **Botões de CTA são thumb-friendly?**
  - Altura mínima 44px (mobile acessibility standard)
  - Width 100% mobile, auto desktop
  - Padding interno respeitoso (não apertado)
  - Ícone ou emoji (opcional mas bom): 💬 antes de "WhatsApp"

- [ ] **CTA aparece múltiplas vezes (Home, Passeio, Footer)?**
  - Home: Hero + Featured tours section + CTA Final (3×)
  - Página Passeio: Hero + Detail section + Footer (3×)
  - Não é "uma chance só"

- [ ] **Frase de contexto aparece antes de CTA?**
  - "Vamos montar o roteiro que você sonha" (ou similar)
  - Texto acima do botão, não misturado
  - Não deixa CTA órfão

- [ ] **WhatsApp link está funcional?**
  - Clicável (href= link correto)
  - Abre WhatsApp do turista (target="_blank")
  - Número está correto: 83 99087-830
  - Mobile e desktop ambos funcionam

---

## SEÇÃO D: Imagens e Media

- [ ] **Imagens estão em proporção correta?**
  - Hero: 16:9 (1200×600) ou 2:1
  - Card image: 16:9 (300×180)
  - Nenhuma distorção (não espremida, não esticada)

- [ ] **Imagens carregam rápido (performance)?**
  - WebP ou otimizado para web (não 5MB raw)
  - Lazy-load para imagens abaixo da dobra
  - Srcset responsive (não gigante em mobile)

- [ ] **Placeholders funcionam bem (quando imagem real não existe)?**
  - Emoji (🌊) é profissional e contextual
  - SVG placeholder é neutro (não stock photo genérico)
  - Mensagem "Imagem em breve" é clara
  - Cor de fundo não conflita com resto da página

- [ ] **Emojis são usados com moderação?**
  - 🌊 para mar/passeios
  - ☀️ para sol/energia
  - 📍 para localização
  - Não mais de 1-2 por seção
  - Não enche de emoji (bagunça)

- [ ] **Alt text está descritivo?**
  - Cada imagem tem alt text
  - Alt descreve o que está vendo (não "imagem")
  - Contexto local (ex: "Piscina natural de Seixas, João Pessoa")

---

## SEÇÃO E: Tipografia e Legibilidade

- [ ] **H1 é grande e legível?**
  - Mobile: 2.5rem ou maior
  - Desktop: 3.5rem ou maior
  - Fonte: Sans-serif (Inter, Poppins, Roboto, similar)
  - Cor: Branco (em fundo escuro) ou preto (em fundo claro)
  - Contraste: WCAG AA mínimo (4.5:1)

- [ ] **Body text é legível?**
  - Tamanho: 1rem (16px) mobile, 1.125rem desktop
  - Nunca menor que 0.875rem (muito pequeno)
  - Line-height: 1.5-1.6 (respira)
  - Max-width: 65 chars (não uma linha gigante)

- [ ] **Cor de texto contrasta com fundo?**
  - Preto texto em fundo branco: ✅
  - Branco texto em fundo azul: ✅
  - Cinza médio em fundo light: ✅
  - Cinza claro em fundo white: ❌ (muito baixo contraste)
  - WCAG AA: 4.5:1 mínimo para body

- [ ] **Fonte não muda a cada seção?**
  - Máximo 2 famílias (ex: Inter + Lora)
  - Consistência em todo site
  - Não toca em fonte a cada página

- [ ] **Links são distinguíveis?**
  - Cor diferente (azul primária, underline)
  - Hover state claro (muda cor, underline)
  - Não é "texto normal que por acaso é link"

---

## SEÇÃO F: Layout e Espaçamento

- [ ] **Há espaço branco suficiente (breathing room)?**
  - Seções não estão coladas (padding 40-60px entre)
  - Cards têm padding interno (20-30px)
  - Não é apertado/claustrofóbico

- [ ] **Mobile layout stacks logicamente?**
  - 3 colunas desktop → 1 coluna mobile
  - Não quebra sem motivo
  - Ordem é óbvia (top to bottom)

- [ ] **Desktop layout não fica muito largo (excessive width)?**
  - Container max-width ~1200px
  - Não usa 100% tela indefinidamente
  - Confortável para ler

- [ ] **Padding é consistente?**
  - Section padding: 40px (mobile), 60px (desktop)
  - Card padding: 24px
  - Header/Footer padding: 16-24px
  - Não aleatório

- [ ] **Grid é limpo e alinhado?**
  - Cards alinham em colunas (não tremendo)
  - Espaço entre cards é regular
  - Responsivo (não quebra em 768px, 1024px)

---

## SEÇÃO G: Cores e Contraste

- [ ] **Paleta é respeitada?**
  - Azul Primária: #0066CC (confiança, backgrounds)
  - Laranja Secundária: #FF6B35 (destaque, energia)
  - Dark: #1a1a1a (backgrounds dark)
  - Neutros: Branco, cinza leve, cinza médio
  - Não inventa cor fora da paleta

- [ ] **Cores têm propósito?**
  - Azul = fundo, navegação (confiança)
  - Laranja = CTA, destaque (chamativa)
  - Cinza = texto secondary, borders (reduz ruído)
  - Não coloca cores aleatoriamente

- [ ] **Contraste atende WCAG AA?**
  - Black on white: 21:1 ✅
  - Dark blue on white: 8.6:1 ✅
  - Gray on white: 4.5:1 (check, pode ser baixo)
  - Usar ferramenta: contrast-ratio.com

- [ ] **Dark mode não é necessário, mas se existir, é testado?**
  - Não é escopo atual
  - Cores ficam legíveis em light mode
  - Se dark for adicionado futuro, será planejado

---

## SEÇÃO H: Mobile-First e Responsividade

- [ ] **Mobile layout é prioridade (not afterthought)?**
  - Testado primeiro em mobile
  - Desktop é expansão, não contração
  - Não "esconde elementos em mobile"

- [ ] **Touch targets são grandes?**
  - Botões ≥44px altura
  - Links ≥44×44px area
  - Espaço entre clicáveis: 16px mínimo
  - Thumb pode acertar sem errar

- [ ] **Não há horizontal scroll?**
  - Tudo cabe em 375px width (menor mobile)
  - Imagens não overflow
  - Texto não transborda
  - Grid collapsa para 1 coluna

- [ ] **Página carrega rápido em 4G mobile?**
  - <3s First Contentful Paint
  - Lazy-load de imagens abaixo da dobra
  - Não há 50 requests desnecessários

- [ ] **Breakpoints são sensatos?**
  - 375px (mobile pequeno)
  - 768px (tablet)
  - 1200px (desktop)
  - Não quebra entre eles

---

## SEÇÃO I: Animação e Interação

- [ ] **Animações são smooth (<400ms)?**
  - Hover: 200ms ease
  - Expand/collapse: 200-300ms ease
  - Fade: 200-300ms ease
  - Não é instantâneo (parece travado)
  - Não é lento demais (parece moroso)

- [ ] **Loading states são claros?**
  - Skeleton screens ou spinner
  - Não é invisível "vai carregar"
  - User sabe que algo está acontecendo

- [ ] **Focus states são visíveis?**
  - Tab navigation funciona (for accessibility)
  - Focus outline é claro (não invisível)
  - Focus color contrasta (azul primária)

- [ ] **Transições não causam layout shift?**
  - Animação não muda tamanho de elemento
  - Cumulative Layout Shift (CLS) = 0
  - Não "pula" ao interagir

---

## SEÇÃO J: Acessibilidade Básica

- [ ] **Cores não são a única forma de comunicar?**
  - ✅ Botão vermelho: vermelho + label "Erro" ou ✗
  - ❌ Botão vermelho: só vermelho, sem texto
  - Inclusive para daltônico

- [ ] **Todos os inputs têm labels?**
  - Label visível ou aria-label
  - Não tem placeholders sem label
  - Form é preenchível

- [ ] **Headings não pulam níveis?**
  - H1 → H2 → H3 (não H1 → H3)
  - Order lógica
  - Screen reader entende estrutura

- [ ] **Links têm descrição clara?**
  - "Saiba mais" → "Saiba mais sobre Seixas"
  - Não deixa ambíguo onde leva
  - aria-label se necessário

---

## SEÇÃO K: Conteúdo e Copy (Visual Support)

- [ ] **Copy suporta conversão visual?**
  - CTA texto é claro ("Reservar no WhatsApp" não "OK")
  - Descrição é específica (não "vários passeios")
  - Sem jargão corporativo
  - Preço está visível (não "consulte")

- [ ] **Não há informação desnecessária acima da dobra?**
  - Mobile: Hero + 1 CTA (pronto)
  - Não coloca menu, links secundários, chat bot, tudo de uma vez

- [ ] **Tone of voice é consistente?**
  - Copy é acolhedora, não corporativa
  - Menciona "ajudar", "orientar", não "vender"
  - Referências locais ("Jampa", "maré")

---

## SEÇÃO L: Padrões do Turismo (Best Practices)

- [ ] **Preço é visível em cards?**
  - R$ 60, R$ 80, R$ 100 (claro)
  - Não "Consulte WhatsApp"
  - Reduz fricção

- [ ] **Duração está clara?**
  - "3 horas", "Meia volta", "Dia inteiro"
  - Turista sabe quanto tempo vai gastar

- [ ] **Ponto de embarque está explícito?**
  - "Downtown", "Centro", "Marina"
  - Onde turista começa (GPS-like)

- [ ] **Maré ou condições operacionais estão alertas (se aplicável)?**
  - "Sujeito à maré baixa"
  - "Operacional o ano todo"
  - Honestidade > Surpresa

- [ ] **Avaliação de verdade aparece (quando houver)?**
  - Depoimento real (nome, contexto)
  - Não genérico ("Maria, 30, SP" é OK)
  - Rating real (4.9/5, não 5/5 fake)

---

## SEÇÃO M: Integração Multilíngue (Futuro)

- [ ] **Layout não quebra com textos mais longos (EN, ES)?**
  - "Vamos montar" em PT
  - "Let's plan" em EN (mais curto OK)
  - "Planeemos" em ES (mais longo, ainda cabe?)
  - Teste em tamanho maior de fonte

- [ ] **Espaço para bandeiras/seletor de idioma?**
  - Header tem lugar para language switcher
  - Não conflita com logo/nav
  - Mobile: colapsado, desktop: expandido

---

## APROVAÇÃO FINAL

Se **90%+** dos checkboxes acima estão marcados:
✅ **Aprovado** — repassar para próxima etapa

Se **70-90%**:
⚠️ **Condicionado** — listar principais issues, dev corrige

Se **<70%**:
❌ **Rejeitar** — voltar para UX/UI ou designer, refaz layout

---

**Checklist mantido por:** Diretor Visual de Turismo  
**Última atualização:** 2026-04-25  
**Próxima revisão:** Quinzenalmente ou nova página publicada
