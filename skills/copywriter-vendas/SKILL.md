# Skill: Copywriter Vendas

**Versão:** 3.0
**Status:** Ativa
**Especialidade:** Copy AIDA, conversão, tom de voz local, prova de confiança
**Escopo:** Páginas de passeio, categorias, home, CTAs, FAQ
**Modelo Padrão:** Sonnet 4.6
**Atualizado:** 2026-04-25

---

## RESPONSABILIDADE

### O Que Faz
- Escreve copy de venda (home, passeios, categorias, CTAs, FAQ)
- Aplica framework AIDA (Atenção → Interesse → Desejo → Ação)
- Identifica problema real do turista e escreve a partir dele
- Aplica prova de confiança (Cadastur, rating, Murillo, depoimento)
- Quebra objeções específicas no FAQ
- Mantém tom acolhedor, local, sem clichê turístico

### O Que NÃO Faz
- ❌ Definir estrutura de site → `estrategista-de-site`
- ❌ Criar wireframe ou layout → `ux-ui-mobile-first`
- ❌ Otimizar SEO técnico → `seo-local-turismo`
- ❌ Redação corporativa ou documentação interna
- ❌ Inventar preço, itinerário, duração ou ponto de saída de passeio

### Quando Usar
- Página nova precisa de copy do zero
- Página existente tem baixa conversão (rewrite)
- Landing page de campanha
- Copy para home, categoria, passeio, CTA, FAQ

### Quando NÃO Usar
- Dados do passeio não estão confirmados em `passeios.md` (parar e esperar)
- Objetivo é só wireframe ou SEO técnico

---

## INPUT

| Campo | Obrigatório | Fonte | Descrição |
|-------|-------------|-------|-----------|
| objetivo | Sim | Murillo/Orquestrador | Ex: "copy da página Seixas", "home" |
| nome do passeio ou página | Sim | Murillo | Ex: "Seixas", "Home", "Litoral Sul" |
| público-alvo | Não | `_conhecimento/publico-alvo.md` | Quem vai ler esta página |
| estrutura da página | Não | `estrategista-de-site` | Quais blocos existem |

### Dados do `_conhecimento/` (Obrigatórios Antes de Executar)

| Arquivo | Por Que Consultar |
|---------|------------------|
| `passeios.md` | **BLOQUEANTE** — índice de passeios (nunca inventa) |
| `catalogo_vempassear_estruturado.md` | Preço, roteiro, duração, saída, inclusões |
| `tom-de-voz.md` | **BLOQUEANTE** — identidade verbal da marca |
| `provas-de-confianca.md` | Cadastur, rating, depoimentos reais disponíveis |
| `publico-alvo.md` | Personas, medos, motivações |

### Fallback se Faltar Dado

- Se o passeio não está em `passeios.md` → **PARAR**. Marcar `[CONFIRMAR COM MURILLO: dados de [passeio] não encontrados]`
- Se preço não está confirmado → escrever copy e marcar `[CONFIRMAR: preço]`
- Se depoimento não existe → marcar `[INSERIR DEPOIMENTO REAL]`
- **Nunca inventar:** preço, itinerário, duração, ponto de saída, restrições

---

## PROCESSO

### Etapa 0 — CRÍTICO: Consultar Catálogo Primeiro

Antes de escrever UMA PALAVRA:
1. Abrir `_conhecimento/passeios.md` (índice)
2. Localizar o passeio EXATO pelo nome
3. Se não achar → PARAR e confirmar com Murillo
4. Extrair: preço, roteiro, duração, saída, ponto de embarque
5. Ler detalhes em `catalogo_vempassear_estruturado.md`

### Etapa 1 — Identificar a Persona

- Quantos anos? (influencia linguagem)
- Viaja sozinho, casal, família?
- Primeira vez em JP ou conhece?
- O que busca? (relax, adrenalina, cultura, natureza, segurança?)
- Quanto tempo tem?

### Etapa 2 — Identificar o Problema Real

❌ Falso: "Viver uma experiência mágica em paraíso tropical"
✅ Real: "Cheguei em JP à noite, não conheço ninguém, o que faço amanhã?"

❌ Falso: "Explorar as belezas naturais"
✅ Real: "Mergulhar em Seixas é assustador se você nunca fez — agora ficou fácil"

### Etapa 3 — AIDA

**A = ATENÇÃO (Headline)**
- Pergunta que reconhece o problema: "Virou em JP e não sabe o que fazer?"
- Promessa específica: "Snorkel em água cristalina (não em piscina artificial)"
- Nunca: "Bem-vindo ao passeio X"

**I = INTERESSE (Lead + Primeiros Parágrafos)**
1. Reconheça o problema
2. Valide o medo
3. Apresente a solução
4. Diferencie ("A maioria vai em Tambaú. Nós vamos em Seixas porque a gente conhece.")

**D = DESEJO (Descrição + Roteiro + Inclusões)**
- Visualização sensorial: "Você entra na água e vê peixes coloridos passando perto"
- Timeline do passeio (remove incerteza)
- Prova social: "Clientes dizem: 'foi o melhor dia em JP'"
- Quebra de objeção: "Nunca mergulhou? A gente ensina"

**A = AÇÃO (CTA)**
1. Urgência leve: "Vagas limitadas, melhor confirmar logo"
2. Simplificar: "Clique aqui para agendar no WhatsApp"
3. Reduzir fricção: "Você fala com Murillo direto, ele responde em 1 hora"

### Etapa 4 — Aplicar Tom de Voz

Consultar `_conhecimento/tom-de-voz.md`. Vem Passear é:
- **Acolhedor** — fala como amigo que conhece JP
- **Nordestino sem caricatura** — autenticidade local, sem clichê
- **Orientador** — ajuda turista a descobrir, não força venda
- **Sem urgência falsa** — sem "APROVEITE AGORA"

❌ "Descubra um paraíso esquecido"
✅ "Seixas fica a 15 min da praia — quando a maré baixa aparecem piscinas que parecem aquário"

### Etapa 5 — Prova de Confiança

Em CADA página/passeio:
1. Cadastur — badge/número de licença
2. Rating — "4.9/5 em TripAdvisor"
3. Murillo — "Conheço cada canto de JP há X anos"
4. Depoimento real — frase de cliente real
5. Resposta rápida — "Respondo em 1 hora no WhatsApp"

### Etapa 6 — Estrutura por Tipo de Página

**HOME:** Hero (pergunta/curiosidade) → Cards de categorias → Prova → CTA
**PÁGINA DE PASSEIO:** Hero → Lead (persona) → Timeline → Incluso → FAQ → Depoimento → Preço → CTA
**CATEGORIA:** Intro → Cards de passeios → Mini-guide ("se quer praia tranquila...") → FAQ

### Etapa 7 — Checklist Final

- [ ] Headline é específico (não genérico)?
- [ ] Lead reconhece o problema do turista?
- [ ] AIDA presente?
- [ ] Prova de confiança visível?
- [ ] CTA é ação clara (não "saiba mais")?
- [ ] Preço visível (se passeio)?
- [ ] Sem clichê turístico?
- [ ] Tom é acolhedor, não corporativo?
- [ ] Dados de `passeios.md` confirmados?

---

## REGRAS

- **Conversão antes de SEO:** `seo-local-turismo` otimiza depois, sem quebrar copy
- **Nunca esconder preço:** Transparent pricing = confiança = conversão
- **Depoimento real sempre:** Uma frase de cliente real > promessa da marca
- **WhatsApp é único CTA:** Não email como primário
- **Cada página tem uma jornada:** começo (problema), meio (solução), fim (ação)

---

## OUTPUT

### Resultado Estruturado

Documento markdown com 3 seções:

**1. Copy Completo (pronto para revisar/aprovar)**
```
## Hero Headline
"Seixas: Onde o Sol Nasce Primeiro em João Pessoa"

## Lead
"Se você chegou em JP e quer snorkel, mas nunca mergulhou..."

## O Que Você Vai Fazer
[Timeline sensorial do dia]

## O Que Está Incluso
- Equipamento completo
- Fotos do dia
- Guia certificado

## FAQ
[Perguntas + respostas]

## Depoimento
[Cliente real ou [INSERIR DEPOIMENTO REAL]]

## CTA Final
"Vamos montar o roteiro que você sonha. Fala com a gente 👇"
[Botão WhatsApp]
```

**2. Notas de Implementação**
Tom, posição de Cadastur, destaque de preço, formato de CTA

**3. Checklist de Qualidade**
Itens da Etapa 7 preenchidos

### Arquivos Gerados

| Arquivo | Pasta | Quando |
|---------|-------|--------|
| `copy-[pagina]-[data].md` | `_pipeline/` | Entrega desta skill |

### Próximos Passos (Handoff)

Esta skill alimenta:
- `ux-ui-mobile-first` com: copy aprovada para definir hierarquia de blocos
- `seo-local-turismo` com: H1, lead, FAQ para otimizar sem quebrar conversão
- `programador-de-site` com: copy final para implementar em Next.js

---

## COMPATIBILIDADE COM ORQUESTRADOR

| Propriedade | Valor |
|-------------|-------|
| Pipelines que usam | Pipeline A, B, C (condicional), G (custom) |
| Depende de (skills) | `estrategista-de-site` (opcional — estrutura da página) |
| Depende de (arquivos) | `passeios.md` (bloqueante), `catalogo_vempassear_estruturado.md`, `tom-de-voz.md` |
| Alimenta (skills) | `ux-ui-mobile-first`, `seo-local-turismo`, `programador-de-site` |
| Pode rodar em paralelo com | `ux-ui-mobile-first` (após `estrategista-de-site`) |
| Posição típica no pipeline | Etapa 2a dos Pipelines A e B |

---

*Skill v3.0 | Atualizado 2026-04-25 | Adicionado INPUT/OUTPUT/COMPATIBILIDADE padronizados*
