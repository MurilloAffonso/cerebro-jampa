# Skill: Captura Referências Visuais

**Versão:** 2.0  
**Status:** Ativa — Refinada com Suporte a Vídeo + Sessão Logada Honesta + Nomeação Segura  
**Especialidade:** Captura, organização e armazenamento de conteúdo visual (imagem + vídeo) com contexto  
**Escopo:** Instagram, websites, Pinterest — turismo e design visual — imagem e vídeo  
**Modelo Padrão:** Haiku 4.5 (organização), Sonnet 4.6 (contexto, análise de vídeo)  
**Data Atualização:** 2026-04-25

---

## 1. Propósito e Responsabilidade

A skill `captura-referencias-visuais` é a **bibliotecária de inspiração visual** do projeto.

Ela existe para:
- 📸 **Capturar imagens** de referências aprovadas
- 🎬 **Capturar vídeos** (stories, reels, posts em movimento)
- 💾 **Armazenar com contexto** (não arquivo solto)
- 🏷️ **Organizar por categoria** (hero, story-imagem, story-vídeo, reel, carrossel, cor, etc.)
- 📝 **Registrar metadados** (origem, data, tipo_midia, duração, utilidade)
- 🔍 **Tornando fácil encontrar** (quando designer precisar)
- 🎨 **Apoiar diretor visual e editorial** (material para inspirar)
- 📚 **Manter biblioteca viva** (atualizar, adicionar, revisar)

### O Que Não Faz

❌ **Gerar pauta editorial** — responsabilidade de `social-media-editorial-turismo`  
❌ **Pesquisar concorrentes** — responsabilidade de `radar-concorrentes-social`  
❌ **Executar design final** — trabalho do designer  
❌ **Fazer análise profunda de referência** — responsabilidade de `radar-concorrentes-social`  
❌ **Publicar conteúdo** — isso é implementação no Instagram  

---

## 2. Tipos de Capturas

### A. Visual de Componente (UI/Design)

```
Tipo: Hero Block
Fonte: @thefemalefoundry (Instagram)
Visual: Imagem grande + título + CTA
Tamanho Tipo: 1200×600 (landscape)
Paleta: Azul + branco + texto escuro
Tipografia: Sans-serif bold + regular
Utilidade: Inspirar hero de página de passeio
```

### B. Story com Imagem

```
Tipo: Story Series (imagem)
Fonte: @viajantesocial (Instagram)
Visual: Sequência 3-4 slides com progressão
Pattern: Abertura + processo + resultado
Copy: Captions curtos, emojis contextualizados
Tipo Mídia: image
Utilidade: Estruturar story bastidor Vem Passear
```

### C. Story com Vídeo

```
Tipo: Story Series (vídeo)
Fonte: @descobrindojp (Instagram)
Visual: Vídeo curto (3-15 segundos) com movimento
Duração: 3-15 segundos
Som: Trending audio ou natural
Tipo Mídia: video
Extensão: .mp4, .mov, ou .webm
Utilidade: Inspirar story de passeio com movimento/ação
```

### D. Post com Imagem

```
Tipo: Feed Post (imagem)
Fonte: @brasildescobertas (Instagram)
Visual: Imagem grande (landscape ou portrait)
Composição: Foto + caption + CTA
Tipo Mídia: image
Utilidade: Inspirar post estático com visual forte
```

### E. Post com Vídeo

```
Tipo: Feed Post (vídeo)
Fonte: @descobrindo.jp (Instagram)
Visual: Vídeo de 15-60 segundos
Duração: 15-60 segundos
Som: Trending ou original
Tipo Mídia: video
Extensão: .mp4 ou .mov
Utilidade: Inspirar post com movimento/narrativa
```

### F. Reel (Vídeo Curto)

```
Tipo: Reel Motion
Fonte: @descobrindojp (Instagram)
Visual: Vídeo rápido com cortes + transições (15-30s)
Duração: 15-30 segundos
Som: Trending audio identificado
Tipo Mídia: video
Extensão: .mp4
Utilidade: Inspirar reel de passeio em movimento
```

### G. Carrossel Misto (Imagem + Vídeo)

```
Tipo: Carousel (misto)
Fonte: @viajadasmulheres (Instagram)
Visual: Slides alternando imagem + vídeo
Estrutura: Capa + slides temáticos + CTA
Tipo Mídia: mixed
Arquivo Frame 1: carousel-origem-data-01.jpg
Arquivo Frame 2: carousel-origem-data-02.mp4
Arquivo Frame 3: carousel-origem-data-03.jpg
Utilidade: Estruturar carrossel educacional com dinamismo
```

### D. Padrão de Carrossel

```
Tipo: Carousel Guide
Fonte: @viajadasmulheres (Instagram)
Visual: Slides com grid visual (2-3 colunas)
Estrutura: Capa + slides temáticos + CTA
Copy: Hook + 8-10 slides de informação + call
Utilidade: Estruturar carrossel "Guia de Passeio"
```

### E. Paleta de Cores

```
Tipo: Color Palette
Fonte: @brasilvisuals (Instagram)
Visual: Cores dominantes extraídas
Cores: Primária (azul), Secundária (laranja), Neutros
Utilidade: Validar paleta de Vem Passear
```

### F. Tipografia/Font Pairing

```
Tipo: Typography
Fonte: Website de turismo X
Visual: Display font + body font
Pairing: Serif + sans-serif (ex)
Utilidade: Inspirar tipografia site/social
```

---

## 3. Processo de Captura

### Pré-Requisitos

✅ **Ambiente permite captura?**
- Navegador em Claude (se houver)
- Sessão do Instagram já logada (recomendado)
- Permissão para screenshot

❌ **Se NÃO permitir:**
- Pedir link direto
- Pedir print ao usuário
- Registrar "captura manual necessária"
- Indicar passo alternativo

### Fluxo de Captura

```
1. DEFINIR OBJETIVO
   - Qual tipo de visual? (hero, story, reel, carrossel, cor)
   - De onde? (Instagram, website, Pinterest)
   - Por quê? (inspirar editorial, validar padrão, aprender)

2. ABRIR FONTE
   - Encontrar post/perfil específico
   - Abrir em full screen (se possível)
   - Validar permissão de captura

3. CAPTURAR
   - Screenshot/foto da imagem
   - Salvar em alta qualidade (se possível)
   - Ou pedir arquivo .jpg ao usuário

4. METADADOS OBRIGATÓRIOS
   - Nome arquivo: tipo-origem-data.ext (ex: story-bianoutur-2026-04-25-01.jpg)
   - Propriedade original: @usuario / sitio.com
   - Data captura: 2026-04-25
   - Tipo: hero / story / reel / carrossel / cor / tipografia
   - Tipo Mídia: image / video / mixed
   - Extensão: .jpg, .png, .webp (imagem) ou .mp4, .mov, .webm (vídeo)
   - Duração: [segundos, se vídeo] (ex: 15)
   - Frames Count: [número, se carrossel] (ex: 8)
   - Tags: turismo, instagram, visual, referencia, etc.

5. REGISTRAR CONTEXTO
   - Por que foi capturado? (qual problema resolve)
   - Qual utilidade prática?
   - Como Vem Passear pode usar?
   - Se há restrições (licença, permissão)

6. ORGANIZAR
   - Salvar em `_social/assets/` ou `_social/referencias/`
   - Criar arquivo .md de contexto
   - Adicionar a índice/biblioteca
```

---

## 4. Estrutura de Armazenamento

### Pastas Principais

```
_social/
├── assets/
│   ├── heroimages/
│   ├── stories/
│   ├── reels/
│   ├── carrosels/
│   ├── colors/
│   └── typography/
│
├── referencias/
│   ├── instagram/
│   ├── websites/
│   └── pinterest/
│
└── concorrentes/
    ├── jampa-paradise/
    ├── outras-agencias/
    └── influenciadores/
```

### Nome de Arquivo

Padrão: `<tipo>-<origem>-<data>-<numero>.<ext>`

```
Exemplos — Imagem:
hero-brasildescobertas-2026-04-25.jpg
story-viajantesocial-2026-04-25-01.jpg
palette-visualbrazil-2026-04-25.jpg

Exemplos — Vídeo:
story-descobrindojp-2026-04-25-01.mp4
reel-descobrindojp-2026-04-25.mp4
post-bianoutur-2026-04-25-video.mp4

Exemplos — Carrossel Misto:
carousel-viajadasmulheres-2026-04-25-01.jpg  (imagem 1)
carousel-viajadasmulheres-2026-04-25-02.mp4  (vídeo 2)
carousel-viajadasmulheres-2026-04-25-03.jpg  (imagem 3)
```

### Regra de Nomeação — Origem Segura

**A origem (handle/@usuario/sitio) NO ARQUIVO só pode ser usada se for CONFIRMADA.**

#### Nível 1 — Origem CONFIRMADA

Você viu o handle na fonte (URL, perfil visível, etc.):

```
✅ story-bianoutur-2026-04-25-01.jpg
✅ hero-brasildescobertas-2026-04-25.jpg
✅ post-turismo.com-2026-04-25.jpg
```

#### Nível 2 — Origem AMBÍGUA

Você não tem certeza do handle exato:

```
✅ story-CONFIRMAR_ORIGEM-2026-04-25-01.jpg
✅ reel-CONFIRMAR_ORIGEM-2026-04-25.mp4
```

No .md: `origem: [CONFIRMAR_ORIGEM] — handle não identificado com certeza`

Não use: `story-viagem-lindas-2026-04-25-01.jpg` ← parece handle mas foi inventado

#### Nível 3 — Origem DESCONHECIDA

Não tem como saber quem é o autor/origem:

```
✅ story-origem_desconhecida-2026-04-25-01.jpg
✅ hero-origem_desconhecida-2026-04-25.jpg
```

No .md: `origem: desconhecida — sem URL ou identificação disponível`

#### Regras Negativas Explícitas

❌ **Nunca inventar @handle que não foi visto na fonte**
- Errado: Ver uma foto linda e nomeá-la `story-viajantesocial` só porque parece nome de perfil
- Certo: Só usar `viajantesocial` se souber que existe e é daquela fonte

❌ **Nunca usar nome descritivo que parece handle**
- Errado: `story-praias-nordestinas-2026-04-25.jpg` ← parece @praias.nordestinas mas você inventou
- Certo: Se origem é incerta, use `story-CONFIRMAR_ORIGEM-2026-04-25.jpg`

❌ **Nunca completar nome de arquivo com origem "chutada"**
- Errado: Pedir referência ao usuário, usuário envia print sem identificar, você inventa handle
- Certo: Usar Nível 2 ou Nível 3

#### Validação Obrigatória

Antes de salvar arquivo:
- [ ] Origem está visível na fonte? (URL, perfil, website)
- [ ] Tem certeza do handle/nome exato?
- [ ] Se não tem certeza: usou `CONFIRMAR_ORIGEM`?
- [ ] Metadata `.md` tem `origem:` documentada?

### Arquivo de Contexto

Para cada captura, criar `.md`:

```
---
tipo: hero
origem: @brasildescobertas (Instagram)
tipo_midia: image
extensao: .jpg
data_captura: 2026-04-25
url_original: https://instagram.com/p/XXXXX/
acesso_tipo: webfetch_publico
tags: [turismo, hero, layout, cor, tipografia]
---

# Hero — Brasildescobertas

## Visual Capturado
Imagem grande (landscape 1200×600) com:
- Foto de praia em golden hour
- Título branco com drop shadow
- CTA "Saiba Mais" em destaque
- Paleta: Azul + branco + texto escuro

## Por Que Capturado?
Inspirar hero de página de passeio com:
- Composição de imagem (golden hour é diferente)
- Contraste título (branco em foto escura)
- CTA placement (canto inferior direito)

## Como Vem Passear Pode Usar?
- Usar golden hour em fotos de destino (mais visual que azul primária)
- CTA com drop shadow (legível sobre qualquer fundo)
- Título branco (não azul) quando houver foto de fundo

## Licença/Permissão
- Fonte: Conta pública Instagram
- Uso: Inspiração, não reprodução direta
- Crédito se implementado: "Inspirado em @brasildescobertas"

## Implementação
- [ ] Referenciar em pauta editorial
- [ ] Mostrar para diretor visual
- [ ] Designer usa como inspiração
- [ ] Programador implementa padrão similar

## Status
- [ ] Capturado ✓
- [ ] Contextualizado ✓
- [ ] Organizado ✓
- [ ] Pronto para usar ✓
```

---

## 5. Quando Usar Esta Skill

### ✅ Situações para Chamar

**Você quer:**
- "Captura de @brasildescobertas — como eles fazem hero?"
- "Busca: 3 exemplos de story trending turismo"
- "Achar paleta de cores de @viajantesocial (para inspirar)"
- "Coletar 5 carrosséis de turismo para biblioteca"
- "Organizar referências visuais em `_social/assets/`"
- "Montagem: moodboard para briefing designer"
- "Guardar: print de reel que viralizou (para aprender)"

**Você NÃO quer:**
- Gerar pauta (→ `social-media-editorial-turismo`)
- Analisar padrões (→ `radar-concorrentes-social`)
- Fazer design final (→ designer)
- Executar no Instagram (→ Murillo)

---

## 6. Fluxo Padrão de Captura

```
1. DEFINIR NECESSIDADE
   - Que tipo visual preciso? (hero, story, cor)
   - De qual fonte? (específico ou exploratório)
   - Para qual objetivo? (inspirar editorial, direção visual)

2. PESQUISAR FONTE
   - Instagram: buscar hashtag + scroll
   - Website: navegar e encontrar
   - Pinterest: buscar palavra-chave
   - Se restrito: pedir link ou print

3. CAPTURAR
   - Screenshot/foto em boa qualidade
   - Salvar com nome padrão
   - OU: pedir arquivo original ao usuário

4. METADADOS
   - Arquivo .md de contexto
   - Propriedade original
   - Utilidade prática
   - Tags para busca futura

5. ORGANIZAR
   - Mover para pasta correta `_social/assets/` ou `_social/referencias/`
   - Adicionar a índice
   - Referenciar em skill apropriada

6. COMUNICAR
   - Informar `social-media-editorial-turismo` (tem referência nova)
   - Informar `diretor-visual-turismo` (visual para validar)
   - Adicionar a biblioteca para futuro
```

---

## 7. Guardrails de Captura

### Captura Sempre Permitida ✅

- Contas públicas do Instagram
- Websites públicos
- Pinterest (rede de sharing)
- Screenshots de artigos/blogs
- Imagens créditos públicos

### Captura Deve Pedir Permissão ⚠️

- Se for DM/conteúdo privado de alguém
- Se for arquivo licenciado específico
- Se houver restrição de uso (© copyright)
- Se precisar de autorização da marca

### Captura Não Permitida ❌

- Conteúdo privado de outros usuários
- Fotografias sem crédito (roubo de direitos autorais)
- Conteúdo removido/deletado
- Dados pessoais visíveis

### Validações Obrigatórias

- [ ] Origem está clara (URL, @usuario, website)?
- [ ] Permissão de captura? (público = sim)
- [ ] Metadados completos?
- [ ] Utilidade prática registrada?
- [ ] Organizado em `_social/`?
- [ ] Tags estão presentes?

---

## 9. O Que Nunca Fazer — Guardrails Operacionais

Antes de capturar, leia **obrigatoriamente**. Essas ações quebram a integridade da biblioteca e não são permitidas.

### ❌ NUNCA Fazer

#### A. Salvamento e Armazenamento
- ❌ **Nunca salvar imagem sem arquivo `.md` de contexto**
  - Imagem solta sem metadata é inútil para futuro
  - SEMPRE crie `tipo-origem-data.md` junto com a imagem
  - Exemplo errado: Salvar `hero-instagram-01.jpg` e nada mais
  - Exemplo certo: Salvar `hero-instagram-2026-04-25.jpg` + `hero-instagram-2026-04-25.md`

- ❌ **Nunca salvar arquivo sem link ou origem quando eles existem**
  - Se você tem a URL, sempre registre em `url_original: https://...`
  - Se você tem o perfil (@usuario), sempre coloque em `origem:`
  - Se você tem o website (sitio.com), sempre documente
  - Deixar isso de fora torna impossível validar a referência depois

- ❌ **Nunca jogar tudo em pasta solta ou raiz**
  - Sempre use: `_social/assets/<subcategoria>/` ou `_social/referencias/<fonte>/`
  - Nunca salve direto em `_social/` ou `_social/assets/` (sem subfolder)
  - Organização deficiente = busca impossível futura

#### B. Integridade de Captura
- ❌ **Nunca fingir captura automática se não aconteceu**
  - Se você pedir link/print ao usuário = fluxo manual
  - Registre claramente no .md: `metodo_captura: manual` ou `metodo_captura: automatico`
  - Não misture: "capturei automaticamente" quando na verdade o usuário passou o print

- ❌ **Nunca misturar captura automática com manual sem marcar a diferença**
  - Se você capturou 5 imagens: 3 automáticas + 2 manuais, marque cada uma
  - Exemplo no .md:
    ```
    imagens:
      - arquivo: reel-instagram-frame-01.jpg
        metodo: automatico
      - arquivo: reel-instagram-frame-02.jpg
        metodo: automatico
      - arquivo: reel-instagram-frame-03.jpg
        metodo: manual (print fornecido pelo usuário)
    ```

#### C. Sobrescrita e Duplicação
- ❌ **Nunca sobrescrever referência antiga sem critério**
  - Se já existe `hero-instagram-2026-04-20.jpg`, NÃO sobrescreva com nova versão
  - Crie novo arquivo com nova data: `hero-instagram-2026-04-25.jpg`
  - Referências antigas podem ter valor histórico ou contexto diferente

- ❌ **Nunca baixar conteúdo (imagem, vídeo, arquivo) e deixar sem metadata**
  - Todo download OBRIGATORIAMENTE vem com:
    - arquivo .md de contexto
    - link original documentado
    - data de captura
    - tags relevantes
    - observação de por que foi salvo

#### D. Escopo e Responsabilidade
- ❌ **Nunca usar essa skill para estratégia editorial ou copy final**
  - Captura de referências ≠ Planejamento de conteúdo
  - Captura de referências ≠ Geração de pauta
  - Captura de referências ≠ Redação de copy
  - Se você quer fazer essas coisas, chame `social-media-editorial-turismo`

- ❌ **Nunca analisar profundamente padrões de concorrentes nessa skill**
  - Análise competitiva é responsabilidade de `radar-concorrentes-social`
  - Essa skill captura. Aquela skill analisa.
  - Exemplo errado: "Capturei hero de Jampa Paradise e estou analisando por que funciona"
  - Exemplo certo: "Capturei hero de Jampa Paradise. Compartilho com radar-concorrentes-social para análise."

#### E. Permissões e Legais
- ❌ **Nunca capturar conteúdo privado/restrito sem permissão explícita**
  - Somente contas públicas Instagram/websites/Pinterest públicos
  - Se há restrição de direitos autorais (©), não capture
  - Se é DM ou conteúdo privado, não capture
  - Quando em dúvida sobre permissão, registre como `acesso: restrito_confirmar_permissao`

### ✅ O Que Fazer em Cada Situação

**Se você capturou automaticamente:**
- Registre `metodo_captura: automatico`
- Inclua data/hora se possível
- URL original sempre presente

**Se você recebeu link/print/arquivo do usuário:**
- Registre `metodo_captura: manual`
- Credite origem do arquivo no .md
- Documente exatamente como recebeu

**Se você não tem certeza sobre permissão:**
- Registre `acesso: validar` no .md
- Não procrastine — valide ANTES de colocar em uso
- Consulte diretor-visual-turismo se necessário

**Se encontrou referência excelente mas não conseguiu capturar:**
- NÃO force a captura sem metadata
- Crie arquivo .md com apenas URL + observação
- Registre `status: link_apenas_sem_imagem`
- Exemplo:
  ```
  tipo: hero
  origem: @brasildescobertas (Instagram)
  status: link_apenas_sem_imagem
  url_original: https://instagram.com/p/XXXXX/
  observacao: "Referência excelente de hero com golden hour. Imagem não foi capturada pois requer login. Usar como inspiração textual."
  ```

---

## 8. Integração com Outras Skills

### Com `social-media-editorial-turismo`
- Editorial procura referência ("como fazer story?")
- Design apresenta captura relevante
- Editorial adapta padrão para pauta

### Com `radar-concorrentes-social`
- Radar identifica "referência vale capturar"
- Design captura e contextualiza
- Editorial e diretor visual usam

### Com `diretor-visual-turismo`
- Visual valida se captura diferencia Vem Passear
- Visual aprova paleta/tipografia extraída
- Visual usa para definir padrões

---

## 9. Exemplo de Captura Completa

```
OBJETIVO
Capturar heroe de site de turismo para inspirar hero de página Vem Passear

BUSCA
Site: viator.com → página de tour destacado
Encontrou: Tour "Piscinas Naturais Caribe"

CAPTURA
Arquivo: hero-viator-piscinas-2026-04-25.jpg
Qualidade: 1200×800px

CONTEXTO
---
tipo: hero
origem: viator.com (tour details page)
data_captura: 2026-04-25
url_original: https://viator.com/en/tours/...
tags: [hero, turismo, layout, cor, cta]
---

# Hero — Viator Piscinas

## Visual
- Foto de água cristalina (full width)
- Título branco overlay com shadow
- Rating destacado (4.9★)
- Preço em destaque
- CTA "Reserve Agora" (verde)
- Reviews count "(150+ reviews)"

## Utilidade para Vem Passear
✓ Prova social (rating + reviews) acima da dobra
✓ Preço visível (não "consulte")
✓ Foto real (não emoji placeholder)
✓ CTA claro (verde, destaque)
✓ Copy conciso (não gigante)

## Como Implementar
1. Hero de passeio em Vem Passear
2. Foto real de destino (full width)
3. Cadastur + avaliação sobrepostos
4. Preço em destaque
5. CTA WhatsApp (verde)
6. Responsivo (mobile-first)

## Status
✓ Capturado
✓ Contextualizado
✓ Pronto para designer

---

PRÓXIMO PASSO
Compartilhar com diretor-visual-turismo:
"Referência para hero de passeio — Viator faz bem,
podemos adaptar para Vem Passear (trocar CTA para WhatsApp,
adicionar Cadastur ao lado de avaliação)"
```

---

## 10. Fluxo com Acesso — 5 Cenários Realistas

Esta seção é **honesta** sobre o que a skill consegue fazer e quando. Não promete acesso mágico — detalha cada cenário real e como proceder.

### Contexto: Realidade Técnica

**A verdade:** A skill NUNCA herda sessão logada automaticamente. Isso requer configuração específica via MCP browser tool no Claude Code. Sem essa configuração, a skill só acessa conteúdo público.

**5 estados possíveis do ambiente:**

| Estado | O Que Consegue | Metadata |
|---|---|---|
| **Fluxo A** | WebFetch público (padrão) | `acesso_tipo: webfetch_publico` |
| **Fluxo B** | MCP browser com sessão logada (configurado) | `acesso_tipo: mcp_com_sessao` |
| **Fluxo C** | Manual — print do usuário | `acesso_tipo: manual_print` |
| **Fluxo D** | Manual — link compartilhado | `acesso_tipo: manual_link` |
| **Fluxo E** | Link-apenas, sem imagem | `acesso_tipo: link_apenas` |

---

### FLUXO A — WebFetch Público (Padrão Agora)

Você acessa conteúdo **público** do Instagram/websites sem precisa estar logado. Stories e reels restritos (não públicos) **NÃO são acessíveis**.

```
1. DEFINIR OBJETIVO
   ├─ Que tipo visual? (hero, post, imagem pública)
   ├─ É conteúdo público? (post visível sem login)
   └─ É story/reel/privado? → Vai para Fluxo C/D/E

2. ACESSAR VIA WEBFETCH
   ├─ Abrir URL pública da fonte
   ├─ Screenshot/captura da imagem
   └─ Qualidade: boa, mantém proporções

3. REGISTRAR CLARAMENTE
   ├─ acesso_tipo: webfetch_publico
   ├─ tipo_midia: image (ou video, se vídeo de post)
   ├─ metodo_captura: automatico_webfetch
   ├─ url_original: [URL pública completa]
   └─ data_captura: 2026-04-25

4. SALVAR
   ├─ Arquivo: tipo-origem-data.ext
   ├─ Contexto .md com metadados
   └─ Organizar em `_social/assets/tipo/`
```

**Exemplo:** Post público de @brasildescobertas no Instagram
```
story-brasildescobertas-2026-04-25-01.jpg
+ story-brasildescobertas-2026-04-25.md
```

---

### FLUXO B — MCP Browser Com Sessão Logada (Futuro)

**Quando estiver configurado:** Murillo configura MCP browser tool no Claude Code e fica logado no Instagram. A skill PODE herdar essa sessão para acessar stories, reels, conteúdo restrito a logados.

**⚠️ DOCUMENTAÇÃO COMPLETA:** Veja `MCP-SETUP.md` para guia profissional de:
- O que significa MCP, navegador controlado, sessão herdada
- Pré-requisitos de software (Node.js, playwright-mcp, etc.)
- Fluxo completo de configuração em 3 fases
- Quando funciona / quando não funciona
- Riscos e mitigações
- Checklist operacional
- Como isso conecta à skill

**PRÉ-REQUISITO (para Murillo) — Resumido aqui:**
1. Configurar MCP browser server (veja MCP-SETUP.md, Seção 3-4)
2. Fazer login no Instagram via Chrome Profile dedicado
3. Confirmar que está logado (testar com Teste 1 em MCP-SETUP.md)
4. Ativar MCP tool no Claude Code settings

```
1. VALIDAR SESSÃO
   ├─ MCP browser tool está ativado?
   ├─ Você está logado no Instagram?
   ├─ Consegue ver stories? (teste)
   └─ Se NÃO → volte para Fluxo A

2. NAVEGAR PARA REFERÊNCIA
   ├─ Via MCP browser, abrir Instagram.com
   ├─ Buscar @usuario ou URL específica
   ├─ Validar que vê o conteúdo (story, reel, etc.)

3. CAPTURAR
   ├─ MCP browser faz screenshot da imagem/vídeo
   ├─ Para vídeo: tira frame key (ex: frame 1)
   ├─ Salva em alta qualidade

4. REGISTRAR COMO SESSÃO HERDADA
   ├─ acesso_tipo: mcp_com_sessao
   ├─ tipo_midia: image (ou video)
   ├─ metodo_captura: automatico_mcp_sessao
   ├─ usuario_sessao: [seu usuario Instagram]
   ├─ data_captura: 2026-04-25
   └─ observacao: "Capturado em sessão logada de @seu_usuario"

5. SALVAR
   ├─ Arquivo: tipo-origem-data.ext
   ├─ Contexto .md com metadados
   └─ Organizar em `_social/assets/tipo/`
```

**Exemplo:** Story de @bianoutur (não público, só com sessão)
```
story-bianoutur-2026-04-25-01.jpg
+ story-bianoutur-2026-04-25.md
```
Metadata:
```yaml
acesso_tipo: mcp_com_sessao
tipo_midia: image
metodo_captura: automatico_mcp_sessao
usuario_sessao: murillo
```

---

### FLUXO C — Manual: Print do Usuário

Você pede para Murillo (ou outro usuário) fazer screenshot e enviar. Ideal para stories, reels, conteúdo privado, paywall.

```
1. SOLICITAR PRINT
   ├─ "Pode fazer print desse story e me enviar?"
   ├─ Ou: "Print do reel de @bianoutur, por favor"
   └─ Ou: "Imagem dessa página"

2. RECEBER ARQUIVO
   ├─ Usuário envia .jpg, .png, ou .mp4
   ├─ Você salva com nome padrão
   └─ Documenta origem no .md

3. REGISTRAR CLARAMENTE
   ├─ acesso_tipo: manual_print
   ├─ tipo_midia: image (ou video, se mp4)
   ├─ metodo_captura: manual_print_usuario
   ├─ usuario_fornecedor: murillo (quem enviou)
   ├─ origem: @bianoutur (ou desconhecida se não sabe)
   ├─ data_captura: 2026-04-25
   └─ observacao: "Print fornecido por murillo em 2026-04-25"

4. SALVAR
   ├─ Arquivo: tipo-origem-data-numero.ext
   ├─ Contexto .md com metadados
   └─ Organizar em `_social/assets/tipo/`
```

**Exemplo:** Story de @bianoutur via print
```
story-bianoutur-2026-04-25-01.jpg
+ story-bianoutur-2026-04-25.md
```
Metadata:
```yaml
acesso_tipo: manual_print
tipo_midia: image
metodo_captura: manual_print_usuario
usuario_fornecedor: murillo
origem: @bianoutur
```

---

### FLUXO D — Manual: Link Compartilhado

Murillo envia o link da referência. Você consegue acessar via link (às vezes tem acesso temporário ou é link público compartilhável).

```
1. RECEBER LINK
   ├─ Murillo envia: "https://instagram.com/p/XXXXX"
   ├─ Ou: "https://website.com/artigo-xyz"
   └─ Você tenta acessar

2. TENTAR ACESSAR
   ├─ Abrir link em browser (MCP, se disponível)
   ├─ Se consegue: screenshot do conteúdo
   ├─ Se não consegue: registrar como Fluxo E (link-apenas)

3. REGISTRAR CLARAMENTE
   ├─ acesso_tipo: manual_link_compartilhado
   ├─ tipo_midia: image (ou video, se conseguiu)
   ├─ metodo_captura: manual_link_compartilhado
   ├─ origem: [extraída do link ou desconhecida]
   ├─ url_original: [link que murillo enviou]
   ├─ data_captura: 2026-04-25
   └─ observacao: "Link compartilhado por murillo"

4. SALVAR
   ├─ Arquivo: tipo-origem-data.ext
   ├─ Contexto .md com metadados
   └─ Organizar em `_social/assets/tipo/`
```

**Exemplo:** Link de artigo compartilhado
```
hero-origem_desconhecida-2026-04-25.jpg
+ hero-origem_desconhecida-2026-04-25.md
```
Metadata:
```yaml
acesso_tipo: manual_link_compartilhado
tipo_midia: image
metodo_captura: manual_link_compartilhado
url_original: [link que recebeu]
origem: [extraída do link, se possível]
```

---

### FLUXO E — Fallback: Link-Apenas, Sem Imagem

Referência é interessante, mas você não consegue capturar a imagem (paywall, acesso bloqueado, etc.). Registra só a URL + observação.

```
1. IDENTIFICAR QUE NÃO CONSEGUE
   ├─ Tentou acessar conteúdo
   ├─ Sem acesso (paywall, privado, etc.)
   ├─ Mas URL é valiosa

2. REGISTRAR LINK
   ├─ Criar arquivo .md APENAS
   ├─ Nenhuma imagem/vídeo
   ├─ Documentar URL completamente

3. EXEMPLO: arquivo story-origem-desconhecida-2026-04-25.md
   ---
   tipo: story
   origem: [CONFIRMAR_ORIGEM]
   tipo_midia: desconhecido (sem captura)
   status: link_apenas_sem_imagem
   acesso_tipo: link_apenas
   url_original: https://instagram.com/stories/XXXXX/
   data_captura: 2026-04-25
   observacao: "Referência de story não acessível (requer login/sessão). URL preservada para futuro."
   ---
   
   # Story — [Origem]
   
   ## Status
   - [ ] Sem imagem capturada
   - [ ] URL documentada
   - [ ] Futuro: capturar quando tiver acesso
```

---

### FLUXO F: Fallback Mínimo — Captura Pendente

Você viu a referência, achou incrível, mas simplesmente não consegue capturar agora (sem acesso, sem sessão, usuário não respondeu). Registra como "pendente" para futuro.

```
1. CRIAR REGISTRO MÍNIMO
   ├─ arquivo: tipo-origem-data.md APENAS
   ├─ Nenhuma imagem
   ├─ Status: captura_pendente

2. EXEMPLO
   ---
   tipo: reel
   origem: @bianoutur (Instagram)
   status: captura_pendente
   acesso_tipo: sem_acesso_agora
   url_original: https://instagram.com/reel/XXXXX/
   data_identificacao: 2026-04-25
   observacao: "Reel interessante. Pendente captura quando tiver acesso."
   ---
   
   # Reel — Bianoutur
   
   ## Observação
   Visto em 2026-04-25 mas não capturado. Requer sessão logada.
   
   ## Ação Futura
   Capturar quando: [Murillo ativar MCP] ou [print enviado]
```

---

## 11. Política AI e Modo

**Modelo:**
- Haiku 4.5 (organização): renomear, organizar arquivos, listar
- Sonnet 4.6 (contexto): escrever contexto .md, extrair metadados
- Pesquisa aberta: SIM, para encontrar e acessar fontes

**Modo:** Claude Code (estrutura, organização, documentação)
- Não precisa Claude Design (é armazenamento, não criação)
- Usa pesquisa aberta para encontrar fontes

---

## 12. Biblioteca Inicial

Pastas `_social/assets/` já criadas e prontas:
- `heroimages/` — Heróis de página/post
- `stories/` — Padrões de story series
- `reels/` — Frames de reels viralizados
- `carrosels/` — Estrutura de carrosséis
- `colors/` — Paletas de cores inspiradoras
- `typography/` — Font pairings bons

---

## 13. Próxima Revisão

**Revisar quando:**
- Biblioteca ficar muito grande (organizar subpastas)
- Trends mudarem (atualizar referências outdated)
- Designer pedir novo tipo de visual
- Fim de Q2 2026 (limpeza de obsoletos)

---

**Status:** ✅ Ativa — Refinada com Suporte a Vídeo + Nomeação Segura + Fluxos Realistas  
**Versão:** 2.0  
**Data Atualização:** 2026-04-25  
**Próximo checkpoint:** 2026-05-25

---

## Mudanças na Versão 2.0 (2026-04-25)

✅ **Seção 1** — Adicionado suporte a vídeo nas capacidades  
✅ **Seção 2** — Expandido tipos de captura (C→G) com tipo_midia  
✅ **Seção 3** — Adicionado tipo_midia aos metadados obrigatórios  
✅ **Seção 4** — Expandido nomeação + nova subseção Regra de Nomeação Segura  
✅ **Seção 10** — Reescrita completa com 6 fluxos realistas (A-F) + honestidade técnica  
✅ **Metadata** — Novo campo `acesso_tipo` para clareza total sobre tipo de acesso
