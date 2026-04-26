# Pasta _social — Conteúdo Social Media

**Escopo:** Estratégia, conteúdo, referências e assets de Instagram  
**Data Criação:** 2026-04-25  
**Skills Relacionadas:** 
- `social-media-editorial-turismo` (editorial)
- `radar-concorrentes-social` (pesquisa)
- `captura-referencias-visuais` (assets)

---

## Estrutura

```
_social/
├── editorial/
│   ├── calendarios/
│   ├── pautas/
│   └── campanhas/
│
├── referencias/
│   ├── instagram/
│   ├── websites/
│   └── pinterest/
│
├── concorrentes/
│   ├── jampa-paradise/
│   ├── outras-agencias/
│   └── influenciadores/
│
├── assets/
│   ├── heroimages/
│   ├── stories/
│   ├── reels/
│   ├── carrosels/
│   ├── colors/
│   └── typography/
│
└── README.md (este arquivo)
```

---

## Pastas Explicadas

### `editorial/`
Calendários, pautas e campanhas de conteúdo planejadas.

**Subpastas:**
- `calendarios/` — Calendário editorial mensal/semanal
- `pautas/` — Pautas estruturadas (stories, reels, carrosséis)
- `campanhas/` — Conteúdo para campanhas temáticas

**Quem alimenta:** `social-media-editorial-turismo`

### `referencias/`
Análises e links de referências visuais/editoriais.

**Subpastas:**
- `instagram/` — Referências de contas Instagram (concorrentes, influenciadores)
- `websites/` — Referências de websites de turismo
- `pinterest/` — Referências visuais Pinterest

**Quem alimenta:** `radar-concorrentes-social`

### `concorrentes/`
Análises detalhadas de concorrentes diretos.

**Subpastas:**
- `jampa-paradise/` — Análise de Jampa Paradise
- `outras-agencias/` — Outras agências de turismo
- `influenciadores/` — Influenciadores de viagem

**Quem alimenta:** `radar-concorrentes-social`

### `assets/`
Imagens, paletas e referências visuais capturadas.

**Subpastas:**
- `heroimages/` — Heroes de página/post (paisagem, layout)
- `stories/` — Padrões de story series (frames, sequências)
- `reels/` — Frames ou storyboards de reels viralizados
- `carrosels/` — Estrutura e layout de carrosséis
- `colors/` — Paletas de cores inspiradoras
- `typography/` — Font pairings e tipografias boas

**Quem alimenta:** `captura-referencias-visuais`

---

## Como Usar

### Gerar Calendário Editorial
```
1. Abra social-media-editorial-turismo
2. Gere calendário.md
3. Salve em _social/editorial/calendarios/
4. Estrutura: YYYY-MM-calendario.md
```

### Pesquisar Concorrentes
```
1. Abra radar-concorrentes-social
2. Pesquise perfil/site específico
3. Salve análise em _social/concorrentes/ ou _social/referencias/
4. Estrutura: nomeconcorrente-YYYY-MM-DD.md
```

### Capturar Referência Visual
```
1. Abra captura-referencias-visuais
2. Capture imagem + contexto
3. Salve em _social/assets/<tipo>/
4. Estrutura: tipo-origem-YYYY-MM-DD.jpg + .md de contexto
```

---

## Convenções de Nomeação

### Calendários
- `calendario-editorial-2026-04.md` (mensal)
- `calendario-semanal-2026-04-25.md` (semanal)

### Pautas
- `pauta-stories-2026-04-28.md` (dia específico)
- `pauta-reels-semana-2026-04-25.md` (semana)
- `pauta-carrossel-tema-2026-04-25.md` (por tema)

### Análises de Concorrentes
- `concorrente-jampa-paradise-2026-04-25.md`
- `referencia-visual-brasildescobertas-2026-04-25.md`

### Assets
- `hero-brasildescobertas-2026-04-25.jpg`
- `story-viajantesocial-2026-04-25.jpg`
- `reel-descobrindojp-2026-04-25.mp4`
- `palette-visualbrazil-2026-04-25.jpg`
- `typography-siteturismo-2026-04-25.jpg`

---

## Fluxo de Trabalho

```
DESCOBERTA
  ↓
radar-concorrentes-social
  (Pesquisa, encontra referência)
  ↓
  Salva em _social/referencias/ ou _social/concorrentes/
  ↓
captura-referencias-visuais
  (Captura imagem + contexto)
  ↓
  Salva em _social/assets/
  ↓
social-media-editorial-turismo
  (Consome insights, gera pauta)
  ↓
  Salva em _social/editorial/
  ↓
diretor-visual-turismo (opcional)
  (Valida visual, aprova padrões)
  ↓
Designer
  (Executa design final)
  ↓
Murillo
  (Publica no Instagram)
```

---

## Checklist de Uso Correto

### Antes de Salvar Arquivo

- [ ] Arquivo tem nome padrão?
- [ ] Tem data (YYYY-MM-DD)?
- [ ] Tem contexto (arquivo .md ou dentro do arquivo)?
- [ ] Tem tags/categoria?
- [ ] Origem está documentada (URL, @usuario)?
- [ ] Utilidade prática está clara?
- [ ] Está em pasta correta?

### Manutenção

- [ ] Revisar `editorial/` quinzenalmente (remover pautas passadas)
- [ ] Revisar `assets/` mensalmente (remover obsoletos)
- [ ] Revisar `concorrentes/` mensalmente (atualizar análises)
- [ ] Fazer backup de principais (fotos importantes)

---

## Integração com Vault

### Relacionamento com Outras Pastas

- `_conhecimento/instagram-benchmark.md` — Padrões iniciais (ler antes de pesquisar)
- `_conhecimento/tom-de-voz.md` — Tom editorial (ler antes de gerar pauta)
- `_conhecimento/publico-alvo.md` — Personas (ler antes de pensar conteúdo)
- `_memoria/decisoes-estrategicas.md` — Pilares (ler antes de direcionar)

### Skills Que Alimentam

1. `social-media-editorial-turismo` → `editorial/`
2. `radar-concorrentes-social` → `referencias/` + `concorrentes/`
3. `captura-referencias-visuais` → `assets/`

---

## Exemplo de Estrutura Mínima

Começar com:
- ✅ `editorial/` com 1 calendário
- ✅ `concorrentes/` com análise de Jampa Paradise
- ✅ `assets/` com 5-10 imagens de referência
- ✅ `referencias/` com 3-5 links úteis

Expandir conforme uso.

---

**Pasta criada:** 2026-04-25  
**Skills associadas:** 3  
**Status:** Pronta para usar  
**Próximo passo:** Começar a alimentar com pautas e referências

