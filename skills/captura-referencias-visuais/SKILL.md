---
name: captura-referencias-visuais
description: Captura, organiza e contextualiza referências visuais com metadados obrigatórios. Nunca inventa handle de origem. Sempre cria arquivo .md junto com a captura.
version: "3.1"
status: ativa
modelo_padrao: Haiku 4.5 (organização), Sonnet 4.6 (contexto e análise)
atualizado: "2026-04-26"
pipelines: [D, E, F]
posicao: etapa-2
---

# Skill: Captura Referências Visuais

**Versão:** 3.1
**Status:** Ativa
**Especialidade:** Captura, organização e armazenamento de referências visuais com contexto
**Escopo:** Instagram, websites, Pinterest — turismo e design visual
**Modelo Padrão:** Haiku 4.5 (organização), Sonnet 4.6 (contexto e análise)
**Atualizado:** 2026-04-25

---

## RESPONSABILIDADE

### O Que Faz
- Captura imagens e vídeos de referências aprovadas
- Armazena com metadados obrigatórios (origem, data, tipo, utilidade)
- Organiza em `_social/assets/` por categoria (hero, story, reel, carrossel, cor)
- Cria arquivo `.md` de contexto para cada captura
- Mantém biblioteca viva (atualiza, adiciona, revisa)

### O Que NÃO Faz
- ❌ Gerar pauta editorial → `social-media-editorial-turismo`
- ❌ Pesquisar concorrentes → `radar-concorrentes-social`
- ❌ Executar design final → designer
- ❌ Análise profunda de concorrente → `radar-concorrentes-social`
- ❌ Publicar conteúdo no Instagram → Murillo

### Quando Usar
- Após `radar-concorrentes-social` indicar o que capturar
- Quando designer ou editorial pede referência visual específica
- Para construir biblioteca de inspiração antes de campanha

### Quando NÃO Usar
- Se o objetivo é analisar padrões de concorrentes (ir para `radar-concorrentes-social`)
- Se o objetivo é criar pauta (ir para `social-media-editorial-turismo`)

---

## INPUT

| Campo | Obrigatório | Fonte | Descrição |
|-------|-------------|-------|-----------|
| objetivo | Sim | Murillo/Orquestrador | Ex: "capturar exemplos de hero turismo" |
| tipo de visual | Sim | Murillo | hero / story / reel / carrossel / cor / tipografia |
| fonte | Não | Murillo ou radar | Instagram, website, Pinterest — conta específica |
| quantidade | Não | Murillo | Ex: "5 exemplos de story" |

### Dados do `_conhecimento/` (Obrigatórios Antes de Executar)

| Arquivo | Por Que Consultar |
|---------|------------------|
| `instagram-benchmark.md` | O que já foi analisado — evitar capturar o mesmo |

### Fallback se Faltar Dado
- Se acesso ao Instagram não está disponível → usar Fluxo C (pedir print a Murillo) ou Fluxo E (registrar link-apenas)
- Se origem da captura não é identificável com certeza → usar `CONFIRMAR_ORIGEM` no nome do arquivo
- Nunca inventar handle/nome de origem

---

## PROCESSO DE CAPTURA

### Fluxos Disponíveis (por tipo de acesso)

| Fluxo | Situação | Metadata |
|-------|----------|----------|
| **A** | WebFetch público (padrão) | `acesso_tipo: webfetch_publico` |
| **B** | MCP browser com sessão logada (configurado) | `acesso_tipo: mcp_com_sessao` |
| **C** | Print enviado por Murillo | `acesso_tipo: manual_print` |
| **D** | Link compartilhado por Murillo | `acesso_tipo: manual_link` |
| **E** | Link-apenas, sem imagem capturada | `acesso_tipo: link_apenas` |

### Fluxo Geral de Captura

```
1. DEFINIR OBJETIVO
   - Qual tipo visual? (hero, story, reel, carrossel, cor)
   - De onde? (Instagram, website, Pinterest)
   - Por quê? (inspirar editorial, validar padrão)

2. VERIFICAR ACESSO
   - Conteúdo público? → Fluxo A
   - Story/reel restrito e MCP disponível? → Fluxo B
   - Ambiente bloqueado? → Fluxo C (pedir print) ou D (link)
   - Não consegue capturar? → Fluxo E (link-apenas)

3. CAPTURAR
   - Screenshot ou receber arquivo
   - Validar qualidade mínima

4. METADADOS OBRIGATÓRIOS
   - Nome: tipo-origem-data(-numero).ext
   - Arquivo .md de contexto com campos abaixo

5. ORGANIZAR
   - Pasta correta em `_social/assets/[tipo]/`
   - Adicionar a índice se existir
```

### Regras de Nomeação

Formato: `<tipo>-<origem>-<data>(-numero).<ext>`

| Situação | Nome |
|----------|------|
| Origem confirmada | `story-bianoutur-2026-04-25-01.jpg` |
| Origem ambígua | `story-CONFIRMAR_ORIGEM-2026-04-25.jpg` |
| Origem desconhecida | `hero-origem_desconhecida-2026-04-25.jpg` |

❌ Nunca inventar @handle que não foi visto na fonte
❌ Nunca usar nome descritivo que parece handle (`story-praias-nordestinas` = parece inventado)

---

## ESTRUTURA DE ARMAZENAMENTO

```
_social/
├── assets/
│   ├── heroimages/    # Heróis de página/post
│   ├── stories/       # Padrões de story
│   ├── reels/         # Frames de reels
│   ├── carrosels/     # Estrutura de carrosséis
│   ├── colors/        # Paletas de cores
│   └── typography/    # Font pairings
│
├── referencias/
│   ├── instagram/
│   ├── websites/
│   └── pinterest/
│
└── concorrentes/
    ├── jampa-paradise/
    └── outras-agencias/
```

---

## ARQUIVO DE CONTEXTO (Obrigatório para Toda Captura)

Criar arquivo `.md` junto com cada captura:

```yaml
---
tipo: hero
origem: @brasildescobertas (Instagram)
tipo_midia: image
extensao: .jpg
data_captura: 2026-04-25
url_original: https://instagram.com/p/XXXXX/
acesso_tipo: webfetch_publico
tags: [turismo, hero, layout, cor]
---

# Hero — Brasildescobertas

## Visual Capturado
[Descrição do visual: composição, paleta, tipografia, elementos]

## Por Que Capturado?
[O problema que resolve ou oportunidade que aproveita]

## Como Vem Passear Pode Usar?
[Aplicação prática específica]

## Licença/Permissão
- Fonte: Conta pública Instagram
- Uso: Inspiração, não reprodução direta

## Status
- [ ] Capturado ✓
- [ ] Contextualizado ✓
- [ ] Pronto para usar ✓
```

---

## GUARDRAILS

### Capturas Sempre Permitidas
- Contas públicas do Instagram
- Websites públicos
- Pinterest (rede de sharing)

### Capturas que Requerem Permissão
- Conteúdo privado de alguém
- Arquivo com copyright explícito (©)

### Capturas Não Permitidas
- Conteúdo privado sem permissão
- Dados pessoais visíveis

### O Que Nunca Fazer
- ❌ Salvar imagem sem arquivo `.md` de contexto
- ❌ Salvar sem URL/origem quando eles existem
- ❌ Jogar tudo em pasta raiz `_social/` sem subfolder
- ❌ Fingir captura automática quando foi manual
- ❌ Sobrescrever captura antiga (criar nova com data)
- ❌ Inventar handle de origem

---

## OUTPUT

### Resultado Estruturado

Para cada captura:
- Arquivo de imagem/vídeo no local correto
- Arquivo `.md` de contexto com metadados completos

Resumo de sessão de capturas (quando múltiplas):
```
CAPTURAS DA SESSÃO — [Data]

1. hero-brasildescobertas-2026-04-25.jpg
   Utilidade: Inspirar hero com golden hour
   Status: ✓ Capturado + contextualizado

2. story-CONFIRMAR_ORIGEM-2026-04-25-01.jpg
   Utilidade: Story bastidor
   Status: ✓ Capturado | ⚠ Origem não confirmada

3. reel-bianoutur-2026-04-25.md (link-apenas)
   Status: ⚠ Sem captura (acesso bloqueado)
```

### Arquivos Gerados

| Arquivo | Pasta | Descrição |
|---------|-------|-----------|
| `[tipo]-[origem]-[data].[ext]` | `_social/assets/[tipo]/` | Arquivo de mídia |
| `[tipo]-[origem]-[data].md` | `_social/assets/[tipo]/` | Contexto da captura |

### Próximos Passos (Handoff)

Esta skill alimenta:
- `diretor-visual-turismo` com: referências visuais para validar padrão
- `social-media-editorial-turismo` com: assets disponíveis para inspirar pautas
- Designer com: biblioteca organizada para execução em Figma

---

## HANDOFF PARA PRÓXIMA SKILL

| Destino | O Que Entrega | Para Quê |
|---------|--------------|----------|
| `diretor-visual-turismo` | Referências organizadas com contexto em `_social/assets/` | Validar padrão visual com base em exemplos reais |
| `social-media-editorial-turismo` | Assets disponíveis por tipo (hero, story, reel, carrossel) | Inspirar pautas com referências concretas já organizadas |
| Designer | Biblioteca com metadados para execução em Figma | Executar design com referências contextualizadas |

---

## CRITÉRIOS DE QUALIDADE

- [ ] Todo arquivo de mídia tem arquivo `.md` de contexto correspondente?
- [ ] Metadados obrigatórios presentes (tipo, origem, data_captura, acesso_tipo)?
- [ ] Origem confirmada ou marcada `CONFIRMAR_ORIGEM`?
- [ ] Arquivo organizado na subpasta correta (`_social/assets/[tipo]/`)?
- [ ] Nomeação segue padrão (`tipo-origem-data.ext`)?
- [ ] Nenhum handle/@conta inventado?
- [ ] Utilidade prática descrita em "Como Vem Passear Pode Usar?"?

---

## LIMITES DA SKILL

- Não inventa handle de origem — usa `CONFIRMAR_ORIGEM` se houver qualquer dúvida
- Não captura conteúdo privado sem permissão explícita
- Não salva arquivo de mídia sem `.md` de contexto correspondente
- Não sobrescreve captura antiga — sempre cria nova com data atualizada
- Não analisa padrões de concorrente em profundidade — isso é `radar-concorrentes-social`
- Não gera pauta editorial — entrega referências organizadas para outras skills consumirem

---

## COMPATIBILIDADE COM ORQUESTRADOR

| Propriedade | Valor |
|-------------|-------|
| Pipelines que usam | Pipeline D (Briefing Visual), Pipeline E (Campanha Social), Pipeline F (Inteligência) |
| Depende de (skills) | `radar-concorrentes-social` (indica o que capturar) |
| Depende de (arquivos) | `instagram-benchmark.md` |
| Alimenta (skills) | `diretor-visual-turismo`, `social-media-editorial-turismo` |
| Pode rodar em paralelo com | `radar-concorrentes-social` (após ele indicar o que capturar) |
| Posição típica no pipeline | Etapa 2 do Pipeline E / Etapa 1 do Pipeline D |

---

*Skill v3.1 | Atualizado 2026-04-26 | Adicionado HANDOFF, CRITÉRIOS DE QUALIDADE e LIMITES para interoperabilidade com orquestrador*
