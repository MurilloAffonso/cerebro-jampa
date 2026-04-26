---
name: social-media-editorial-turismo
description: Gera calendário editorial e pautas estruturadas para Instagram. Entrega é pauta — copy final e publicação são de Murillo. Última etapa do pipeline social.
version: "2.1"
status: ativa
modelo_padrao: Sonnet 4.6
atualizado: "2026-04-26"
pipelines: [E]
posicao: etapa-final
---

# Skill: Social Media Editorial Turismo

**Versão:** 2.1
**Status:** Ativa
**Especialidade:** Calendário editorial, pautas de stories/reels/carrosséis, linha editorial
**Escopo:** Instagram da Vem Passear em Jampa
**Modelo Padrão:** Sonnet 4.6
**Atualizado:** 2026-04-25

---

## RESPONSABILIDADE

### O Que Faz
- Define linha editorial coerente com marca e público
- Gera calendário editorial semanal/mensal
- Cria pautas de conteúdo (stories, reels, carrosséis, posts)
- Estrutura copy, CTA e direção visual de cada pauta
- Organiza por objetivo de funil (descoberta / consideração / decisão / relacionamento)
- Valida qualidade editorial contra tom de marca

### O Que NÃO Faz
- ❌ Capturar referências → `captura-referencias-visuais`
- ❌ Pesquisar concorrentes → `radar-concorrentes-social`
- ❌ Executar design final → designer social
- ❌ Publicar no Instagram → Murillo
- ❌ Community management (respostas a DMs/comentários) → Murillo
- ❌ Analytics e performance → análise pós-publicação

### Quando Usar
- Criar calendário editorial para o mês/semana
- Estruturar pauta de campanha específica (Páscoa, alta temporada, etc.)
- Revisar linha editorial
- Criar ideias de reel, carrossel ou story

### Quando NÃO Usar
- Sem dados de passeios confirmados (não inventa preço)
- Sem tom de voz consultado
- Objetivo é só capturar referências ou pesquisar concorrentes

---

## INPUT

| Campo | Obrigatório | Fonte | Descrição |
|-------|-------------|-------|-----------|
| objetivo | Sim | Murillo/Orquestrador | Ex: "calendário de abril", "pauta reel Litoral Sul" |
| período | Não | Murillo | Semana / mês / campanha específica |
| tema da campanha | Não | Murillo | Ex: "Litoral Sul", "Família", "Autoridade" |
| insights de concorrência | Não | `radar-concorrentes-social` | O que funciona, gaps identificados |
| referências visuais | Não | `captura-referencias-visuais` | Assets disponíveis em `_social/assets/` |

### Dados do `_conhecimento/` (Obrigatórios Antes de Executar)

| Arquivo | Por Que Consultar |
|---------|------------------|
| `tom-de-voz.md` | **BLOQUEANTE** — identidade verbal (acolhedor, humano, sem clichê) |
| `passeios.md` | Índice de passeios para base de conteúdo |
| `catalogo_vempassear_estruturado.md` | Preço, duração, saída — nunca inventar |
| `publico-alvo.md` | Personas, jornadas, sazonalidade |
| `provas-de-confianca.md` | Cadastur, avaliação, depoimentos reais |
| `instagram-benchmark.md` | Padrões visuais e de copy que ressoam |

### Fallback se Faltar Dado
- Se preço/dado de passeio não está em `catalogo_vempassear_estruturado.md` → marcar `[CONFIRMAR COM MURILLO: preço do passeio X]`
- Se tom de voz não foi consultado → consultar antes de escrever qualquer copy
- Entrega é PAUTA (ideias + estrutura) — copy final é ajustada por Murillo e designer

---

## LINHA EDITORIAL

### Identidade Editorial
- **Humana** — Mostra Murillo, comunidade, relacionamento real
- **Acolhedora** — Convida turista a descobrir, não pressiona venda
- **Prática** — Dicas úteis, informações claras
- **Especialista Local** — Conhece cada canto de JP
- **Alegre e Local** — Celebra JP, não genérica, tom Nordeste autêntico

### Objetivos por Fase do Funil

| Fase | Intent | Conteúdo | CTA |
|------|--------|----------|-----|
| DESCOBERTA | "O que tem em JP?" | Passeios em destaque, dicas, comparações | "Você conhecia?" |
| CONSIDERAÇÃO | "Qual passeio é bom pra mim?" | Roteiros detalhados, o que esperar | "Qual combinação faz sentido?" |
| DECISÃO | "Vou reservar — como?" | Depoimentos, Cadastur, procedimento | "Chama a gente no WhatsApp!" |
| RELACIONAMENTO | Pós-compra | Fotos de clientes, histórias, comunidade | "Próxima vez você já sabe!" |

---

## PROCESSO

### Passo 1 — Consultar Vault

Antes de qualquer pauta:
- `tom-de-voz.md` (obrigatório)
- `passeios.md` + `catalogo_vempassear_estruturado.md` (dados reais)
- `publico-alvo.md` (quem vai ver)
- `instagram-benchmark.md` (o que ressoa)
- Insights de `radar-concorrentes-social` (se disponíveis)

### Passo 2 — Definir Objetivo e Período

- Qual período? (semana, mês, campanha)
- Qual tema? (passeios, autoridade, prova social, promoção)
- Qual fase do funil? (descoberta → decisão)

### Passo 3 — Estruturar Calendário

Cadência recomendada:

| Tipo | Frequência | Melhor Horário | Objetivo |
|------|-----------|-----------------|----------|
| Stories | Diárias | 08h, 12h, 19h | Bastidor + top of mind |
| Reels | 3x/semana | Terça, Quinta, Sábado 19h | Descoberta + alcance |
| Carrosséis | 1x/semana | Quarta 19h | Consideração |
| Posts Estáticos | 2x/semana | Segunda, Sexta 19h | Confiança + conversão |

### Passo 4 — Criar Pautas Detalhadas

**Story Series:**
```
PAUTA — Story Series
Horário: 08h, 12h, 19h
Tema: "Dia de Passeio — Bastidor"

1. ABERTURA (08h)
   Visual: Murillo preparando o dia
   Copy: "Bora! Mais um dia de passeios em JP 🌊"
   CTA: "Quer vir na próxima?" + Enquete

2. PROCESSO (12h)
   Visual: Turistas chegando, embarque
   Copy: "Olha como é legal o encontro na marina"
   CTA: Quiz "Qual é seu vibe de praia?"

3. EXPERIÊNCIA (19h)
   Visual: Clientes na água
   Copy: "Piscinas cristalinas, peixinhos coloridos. Essa é a experiência Vem Passear 🌊"
   CTA: "Quer marcar a sua?" + Link WhatsApp
```

**Reel:**
```
PAUTA — Reel
Duração: 15-30s
Tema: "Piscinas Naturais em Movimento"

HOOK (primeiros 2s): "Vocês vão acreditar? Piscinas NATURAIS em JP!"
SEQUÊNCIA: Embarque → Viagem → Piscinas → Mergulho → Pôr do sol
CAPTIONS: "Saída: Downtown" / "Destino: Piscinas Naturais" / "Preço: [CONFIRMAR]"
CTA FINAL: "Chama a gente! 🌊"
TRENDING AUDIO: [validar o que está em alta]
```

**Carrossel:**
```
PAUTA — Carrossel (8-10 slides)
Tema: "Seixas — Passo a Passo"

SLIDE 1 (Hook): "Quer saber COMO é um passeio em Seixas? Passa pra cá! 👉"
SLIDE 2 (Saída): "1️⃣ SAÍDA — Downtown, JP, 07h30"
SLIDE 3 (Barco): "2️⃣ BARCO — 30min até Seixas, aproveita a vista"
SLIDE 4 (Piscinas): "3️⃣ PISCINAS NATURAIS — água cristalina, peixinhos coloridos"
[SLIDES 5-7: Experiência]
SLIDE 8 (Tudo Incluso + Preço + Reserva)
SLIDE 9 ou 10 (CTA): "Avaliação: 4.9/5 ⭐ — Chama no WhatsApp 👉 [link]"
```

### Passo 5 — Validar Contra Checklist

Ver seção REGRAS abaixo.

---

## REGRAS

### Tom de Voz (Obrigatório)
- [ ] Parece orientação, não venda agressiva?
- [ ] Parece Murillo falando, não empresa impessoal?
- [ ] Sem clichê turístico ("paraíso", "irreal", "cartão postal")?
- [ ] Sem pressão falsa ("ÚLTIMAS VAGAS", "compra logo")?

### Conteúdo
- [ ] Dados de passeio estão corretos (preço, duração, embarque)?
- [ ] Prova social é real (Cadastur, avaliação verdadeira)?
- [ ] CTA é WhatsApp (não email)?

### Estratégia
- [ ] Alinhado com objetivo editorial (fase do funil)?
- [ ] Um objetivo por conteúdo (não tudo ao mesmo tempo)?

### Técnica Instagram
- [ ] Primeiros 2 segundos prendem atenção?
- [ ] Texto legível em mobile (não pequeno demais)?
- [ ] Captions com 8-10 linhas máximo?

---

## OUTPUT

### Resultado Estruturado

**Calendário Editorial (quando solicitado semana/mês):**
```
CALENDÁRIO EDITORIAL — [Mês/Período]

Semana 1: Passeios em Destaque
├─ Segunda: Post estático (Seixas — destaque) — objetivo: conversão
├─ Terça-Quinta: Stories diários (bastidor)
├─ Quarta: Carrossel (Seixas passo a passo) — objetivo: consideração
├─ Quinta: Reel (Piscinas naturais) — objetivo: descoberta
├─ Sexta: Post estático (Avaliação 4.9/5) — objetivo: confiança
└─ Sábado: Reel (Comparação: qual escolher?) — objetivo: consideração
```

**Pautas Detalhadas (por conteúdo):**
Cada pauta com: tipo, data/horário, tema, estrutura de copy, direção visual, CTA

### Arquivos Gerados

| Arquivo | Pasta | Quando |
|---------|-------|--------|
| `calendario-[mes]-[data].md` | `_social/editorial/` | Calendário mensal/semanal |
| `pauta-[tipo]-[tema]-[data].md` | `_social/editorial/` | Pauta específica |

### Próximos Passos (Handoff)

Esta skill alimenta:
- **Designer social** com: pautas estruturadas para executar visual em ferramentas
- **Murillo** com: calendário para aprovar e publicar

---

## HANDOFF PARA PRÓXIMA SKILL

| Destino | O Que Entrega | Para Quê |
|---------|--------------|----------|
| Designer social | Pautas estruturadas com tipo, tema, estrutura de copy e direção visual | Executar artes em ferramentas de design (Canva, Figma) |
| Murillo | Calendário editorial aprovado com pautas prontas | Revisar, publicar e fazer community management |

> **Última etapa do pipeline social:** Nenhuma skill recebe entrega desta. O ciclo social encerra aqui.

---

## CRITÉRIOS DE QUALIDADE

- [ ] `tom-de-voz.md` consultado antes de escrever qualquer copy?
- [ ] Dados de passeio vieram de `catalogo_vempassear_estruturado.md` (não inventados)?
- [ ] Preços ausentes marcados `[CONFIRMAR COM MURILLO: preço do passeio X]`?
- [ ] Checklist de tom de voz verificado (sem clichê, sem pressão falsa)?
- [ ] CTA é WhatsApp (não email)?
- [ ] Hook dos primeiros 2 segundos de reel/story prende atenção?
- [ ] Calendário organizado por fase do funil (descoberta / consideração / decisão / relacionamento)?
- [ ] Cadência recomendada respeitada (stories diários, reels 3x/sem, carrosséis 1x/sem)?

---

## LIMITES DA SKILL

- Não captura referências visuais — indica necessidade, `captura-referencias-visuais` executa
- Não pesquisa concorrentes — usa insights de `radar-concorrentes-social` como input
- Não executa design final — entrega pauta, designer social e Murillo executam
- Não publica no Instagram — Murillo publica e gerencia a comunidade
- Não começa sem consultar `tom-de-voz.md` — identidade verbal é bloqueante
- Não inventa preço ou dado operacional de passeio

---

## COMPATIBILIDADE COM ORQUESTRADOR

| Propriedade | Valor |
|-------------|-------|
| Pipelines que usam | Pipeline E (Campanha Social — etapa final) |
| Depende de (skills) | `radar-concorrentes-social` (insights), `captura-referencias-visuais` (assets), `diretor-visual-turismo` (direção visual) |
| Depende de (arquivos) | `tom-de-voz.md`, `passeios.md`, `catalogo_vempassear_estruturado.md`, `publico-alvo.md` |
| Alimenta (skills) | Nenhuma (é a última etapa do pipeline social) |
| Pode rodar em paralelo com | Nenhuma — depende de radar + direção visual |
| Posição típica no pipeline | Etapa 4 do Pipeline E |

---

*Skill v2.1 | Atualizado 2026-04-26 | Adicionado HANDOFF, CRITÉRIOS DE QUALIDADE e LIMITES para interoperabilidade com orquestrador*
