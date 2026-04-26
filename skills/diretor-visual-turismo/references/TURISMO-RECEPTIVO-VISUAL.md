# Princípios de Conversão Visual em Turismo Receptivo

**Objetivo:** Treinar e documentar por QUÊ certas decisões visuais funcionam em turismo  
**Escopo:** João Pessoa, agência receptiva, foco em WhatsApp/mobile  
**Atualizado:** 2026-04-25

---

## 1. Turista em JP é Principalmente Mobile

### O Contexto

- **70-80% dos turistas acessam via celular** (já em João Pessoa, buscando passeios)
- Maioria usa WhatsApp natively (não email)
- Tela é pequena (375-425px), conexão é 4G (não WiFi garantida)
- Turista está em hotel/praia quando decide passeio

### Implicações Visuais

✅ **Botões são GRANDES (≥44px)**
- Não 30px (acha com dedo)
- Não múltiplos botões lado-a-lado (confunde em tela pequena)
- Um CTA por vez é melhor que 3 CTAs grudados

✅ **Texto base é 1rem (16px), nunca menor**
- Sem "zoom" na leitura
- Não causa eyestrain
- Legível em sol (contraste importa)

✅ **Imagens carregam rápido**
- WebP, lazy-load
- Placeholder é emoji (não imagem vazia)
- Turista não espera >3s por imagem

❌ **Não coloca menu hamburger + sidebar complexo**
- Hamburger OK em mobile, mas submenu com 20 items = perde conversão
- Top nav é melhor (2-3 links máximo)

---

## 2. Confiança Visual é Gatilho de Conversão

### Por Quê

Turista chegou em JP, não conhece ninguém, quer saber:
1. "Essa empresa é legítima?" (Governo validou? Gente avaliou?)
2. "Eu vou ser enganado?" (Preço escondido? Reviews fake?)
3. "Vou ser bem tratado?" (Responde rápido? Tem pessoa por trás?)

**Visual comunica essas 3 perguntas em <5 segundos**

### Padrão de Confiança Visual

```
[Ícone ou badge OFICIAL] + [NÚMERO GRANDE] + [DESCRIÇÃO]

Exemplo 1 (Cadastur):
🏛️ Cadastur 52.077.577 — Ativo até dez/2026
(Governo validou, não é fraude)

Exemplo 2 (Avaliação):
⭐⭐⭐⭐⭐ 4.9/5 — 150+ avaliações verificadas
(Gente real avaliou, muitas vezes)

Exemplo 3 (Especialista):
👤 Murillo — Especialista local de JP desde 2015
(Pessoa real, experiência, rosto)
```

### Onde Colocar Visualmente

**Home:** Seção "Prova Social" acima da dobra (400px mobile)  
**Passeio:** Logo após hero, antes de descrição  
**Sem Cadastur visível = conversão cai 30-40%** (benchmark)

---

## 3. Preço Visível Reduz Fricção

### O Problema

Turista vê "Consulte WhatsApp para valor"
```
Thought process:
"Hmm, preço está escondido... será caro?"
"Vou ter que conversar 10 mensagens antes de saber"
"Talvez vejo outro site que mostra preço"
→ Sai do site, nunca volta
```

### A Solução

Turista vê "R$ 60 compartilhado, 3 horas"
```
Thought process:
"OK, R$ 60 é justo"
"3 horas é bom"
"Qual tipo de praia? Ah, piscinas naturais!"
"Chama Murillo pra confirmar?"
→ Manda WhatsApp
```

### Padrão Visual: Preço Destaque

```
┌─────────────────┐
│ Preço: R$ 60    │  ← Cor primária (azul) ou laranja
│ Duração: 3h     │
│ Embarque: Downtown
│ Maré: Sujeito à baixa
└─────────────────┘
```

- Preço em cor de destaque (azul ou laranja)
- Font bold (não regular)
- Alinhado à direita ou em destaque
- Visível no card (mobile scroll rápido não perde)

**Impacto:** Turista que vê preço é 2x mais provável de reservar

---

## 4. Foto Real > Emoji > Placeholder Vazio

### Hierarquia de Confiança

```
1. Foto Real (best)
   ↓
   "Eu vejo o que vou ficar"
   Confiança máxima
   Conversão máxima

2. Emoji Contextual (good)
   ↓
   "🌊 representa praia, é ok"
   Conversão média (melhor que vazio)
   Não nega confiança

3. Placeholder Genérico (bad)
   ↓
   "Imagem vazia = que site é esse?"
   Desconfiança
   Conversão baixa

4. Nada / Vazio (worst)
   ↓
   "Bug? Layout quebrou?"
   Saída imediata
```

### Decisão Prática para Vem Passear

- **Com foto real:** Usar foto otimizada (WebP, responsive)
- **Sem foto real (agora):** Usar emoji 🌊 (não genérico placeholder)
- **Quando tiver fotos:** Substituir emoji por foto
- **Nunca:** Layout vazio, espaço em branco onde deveria ter imagem

### Visual: Card com Emoji

```
┌──────────────┐
│     🌊       │  ← Emoji grande (48-64px)
│ Seixas       │
│ Piscinas ... │
│ R$ 60, 3h    │
└──────────────┘
```

---

## 5. Depoimento Real é Prova Social Mais Forte

### Hierarquia de Prova Social

```
1. Depoimento Real + Foto da Pessoa (best)
   "Marina & Carlos, Casal (SP)"
   Foto real ao lado do quote
   Conversão máxima

2. Depoimento Real (good)
   "Não conhecíamos nada de JP e Murillo..."
   — Marina & Carlos, Casal (SP)
   Conversão alta

3. Número Abstrato (medium)
   "150+ clientes satisfeitos"
   Sem face, sem história
   Conversão média

4. Sem Depoimento (bad)
   Página sem review de cliente
   Desconfiança
   Conversão baixa
```

### Decisão Prática

- **Com depoimento real:** Destacar em seção própria (itálico, fundo light)
- **Sem depoimento agora:** Não inventar (será adicionado quando houver)
- **Padrão:** Quote acima de 400px, contextualizado (qual passeio, quando)

---

## 6. Emojis Contextualizados Humanizam

### Regra de Ouro

Emoji = visual shortcut para significado universal.  
**Se turista não entende rapidinho, não usa.**

### Emojis que Funcionam em Turismo JP

| Emoji | Significado | Uso | Exemplo |
|-------|-------------|-----|---------|
| 🌊 | Mar, água, praia | Passeios aquáticos | "Passeios 🌊 em JP" |
| ☀️ | Sol, dia, energia | Tempo bom, diversão | "Venha aproveitar o ☀️" |
| 📍 | Localização, ponto | Onde é / embarque | "Saída 📍 Downtown" |
| 📲 | WhatsApp, contato | CTA WhatsApp | "Chama a gente 📲" |
| ✨ | Magia, especial | Experiência única | "Momento ✨" |
| ⭐ | Rating, qualidade | Avaliação | "4.9⭐" |
| 🚤 | Barco, passeio aquático | Tour específico | "Passeio 🚤 Litoral Sul" |
| 🏖️ | Praia relaxo | Beach relax | "Dia 🏖️" |

### Emojis que NÃO Funcionam

❌ 🎉 (festa, bagunça — muito genérico, soa venda fake)  
❌ 💰 (dinheiro — soa pressão)  
❌ 🔥 (trending — soa meme, não profissional)  
❌ 🎁 (presente/promo — soa armadilha)

### Regra: 1 emoji por sentença, máximo

```
✅ "Passeio 🌊 em piscinas naturais"
❌ "Passeio 🌊 em piscinas 💧 naturais ☀️ e LEGAL 🎉"
```

---

## 7. CTA Deve Ser Incômoda Demais para Ignorar

### Psicologia do Botão

Turista scrollando, vendo vários passeios:
- Se botão é cinzento / pequeno / pra baixo = ignora
- Se botão é verde / grande / visível = clica

### Padrão Visual: CTA Destaque

```
[Hero]
[Prova Social]
[Passeios]

← Aqui, turista pode não tomar ação

    [Fundo colored contraste]
    [Vamos montar...]
    [BOTÃO GRANDE VERDE]
    
← Aqui, CTA é impossível ignorar
```

### Especificação

- **Cor:** Verde WhatsApp (#25D366) OU Azul Primária (#0066CC)
  - Verde = reconhecível (WhatsApp nativo)
  - Azul = confiança, coerente com site

- **Tamanho:** 44-50px altura (thumb fits)

- **Texto:** "Reservar no WhatsApp" ou "Chamar Murillo"
  - Não "Contato", não "Saiba Mais"
  - Ação explícita

- **Posição:** 
  - Hero (primeira chance)
  - Fim da listagem de passeios (segunda chance)
  - Footer (terceira chance)
  - **Mínimo 2 CTAs por página** (turista sempre tem opção)

- **Contexto:**
  - Frase acima: "Vamos montar o passeio que você sonha"
  - Não deixa CTA órfão

---

## 8. Hierarquia de Cores = Hierarquia de Atenção

### Paleta Restrita Funciona Melhor

Mais cores = mais confusão = conversão cai

### Padrão de 4 Cores

```
1. PRIMÁRIA (Azul #0066CC)
   Uso: Backgrounds, headers, bodies, elementos neutros
   Sensação: Confiança, segurança
   
2. SECUNDÁRIA (Laranja #FF6B35)
   Uso: CTAs, destaque, energia
   Sensação: Ação, urgência (leve)
   
3. DARK (#1a1a1a)
   Uso: Backgrounds escuros, footers
   Sensação: Sério, profissional
   
4. NEUTROS (Branco, cinzas)
   Uso: Backgrounds leves, textos
   Sensação: Limpeza, respiro
```

### Decisão de Cor

**Em mobile:**
- Turista quer entender RÁPIDO
- Cores demais = caos
- Limite a 2 cores + neutros

**Nunca:**
```
❌ Azul background + Roxo texto + Vermelho CTA + Verde card
   (turista perde atenção, não sabe aonde clicar)
```

**Sempre:**
```
✅ Branco background + Azul texto + Verde CTA
   (claro, foco, ação)
```

---

## 9. Espaço Branco é Ferramenta de Conversão

### Por Quê

Turista em hotel em JP, stressado, buscando passeio.
Página apertada = caos visual = sai

Página respirável = clareza = fica

### Padrão

```
Section 1
[Padding 40-60px abaixo]

Section 2
[Padding 40-60px abaixo]

Section 3
```

**Não:**
```
Section 1[Padding 0]
Section 2[Padding 0]
Section 3
(looks cramped)
```

### Cards

Dentro de cada card:
- Padding 24px mínimo
- Não coloca texto até a borda
- Respira bem

---

## 10. Mobile-First Não Quer Dizer "Sem Desktop"

### O Mito

"Mobile-first = ignorar desktop?"  
**Falso.** Mobile-first = prioridade, não exclusividade.

### A Realidade

- **70% de turista é mobile** → prioridade
- **30% é desktop** → também importa
- Se desktop quebra, perdem conversão

### Padrão

1. Design para mobile (375px)
2. Teste em mobile (layout, botão, texto)
3. Expanda para tablet (768px) — adicione colunas
4. Expanda para desktop (1200px) — layout final

### Não faz:

```
❌ Página bonita em desktop, ruim em mobile
❌ Página boa em mobile, gigante em desktop
```

### Sempre faz:

```
✅ Mesmo layout, responsivo, lindo em ambos
```

---

## 11. Velocidade Visual = Conversão

### O Gatilho

Turista em 4G, esperando 3s por página.

Se página demora >5s:
- 25% saem imediatamente
- 50% saem se houver alternativa

### Padrão Visual para Velocidade

- **Skeleton screen:** Mostra placeholder cinzento de conteúdo (melhor que branco vazio)
- **Lazy-load:** Imagens só carregam quando visíveis (não todas de uma vez)
- **Progressive enhancement:** Conteúdo aparece de cima para baixo
- **Animações:** Smooth, não jarring (não causa delay perceived)

### Checklist de Performance

- [ ] Hero carrega em <2s
- [ ] Imagens em hero são <200kb (otimizadas)
- [ ] Skeleton screens para seções dinâmicas
- [ ] Nenhuma imagem >500kb no card
- [ ] Não há 50+ requests na página

---

## 12. Ton of Voice Visual (Design Suporta Copy)

### O Conceito

Tipografia, cores e espaço comunicam tom tanto quanto palavras.

### Padrão Vem Passear

**Copy:** "Vamos te ajudar a escolher o melhor roteiro"  
**Visual:** Deve comunicar: Acolhedor, Claro, Confiável, Humano

```
✅ Design que funciona:
   - Fontes sans-serif (moderno, claro)
   - Espaço respirável (acolhedor)
   - Cadastur visível (confiável)
   - Depoimento + Murillo (humano)
   - Cores calmantes (not screaming)

❌ Design que não funciona:
   - Fontes aleatórias (caótico)
   - Tudo apertado (suffocating)
   - Sem Cadastur/avaliação (desconfiado)
   - Nenhum rosto (corporativo)
   - Cores fluorescentes (stressante)
```

---

## Resumo de Princípios

| Princípio | Por Quê | Como Aplicar |
|-----------|--------|--------------|
| Mobile-First | 70-80% turista | Teste em 375px primeiro |
| Confiança Visual | Turista não conhece | Cadastur + rating acima da dobra |
| Preço Visível | Reduz fricção | R$ em cor, bold, destaque |
| Foto Real ou Emoji | Confiança + velocidade | Não vazio, não placeholder genérico |
| Depoimento Real | Prova social | Com contexto, nome real |
| Emoji Contextual | Humaniza, comunica rápido | 🌊 ☀️ 📍, máximo 1 por frase |
| CTA Incômodo | Conversão | Verde, 44px+, múltiplas vezes |
| 4 Cores | Clareza | Azul + Laranja + Dark + Neutros |
| Espaço Branco | Não caos | 40-60px entre seções |
| Velocidade | 4G, <3s | WebP, lazy-load, skeleton |
| Ton Visual | Suporta copy | Sans-serif, espaço, humanidade |
| H1 Claro | Responde intent | "O que fazer" não "Bem-vindo" |

---

**Documento mantido por:** Diretor Visual de Turismo  
**Última atualização:** 2026-04-25  
**Próxima atualização:** Quando novo learning chegar
