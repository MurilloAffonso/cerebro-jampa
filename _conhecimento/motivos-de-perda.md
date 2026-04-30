# Conhecimento: Motivos de Perda

**Status:** v1.0 — base inicial inferida (2026-04-29)
**Fonte:** Inferido de `objecoes.md`, `concorrentes.md`, `publico-alvo.md`, `benchmark-concorrentes-2026-04-25.md` + Análise 2.0
**Regra:** Todo lead marcado `perdido` em `_crm/leads.csv` → confirmar e registrar o motivo aqui
**Skill que alimenta este arquivo:** `agente-comercial-jampa` ao fechar um lead como perdido

---

## Como Usar Este Registro

1. Lead entra em status `perdido` no CRM → Murillo preenche `motivo_perda` em `_crm/leads.csv`
2. A cada 30 dias: Claude lê o CSV, agrupa por motivo, compara com este catálogo
3. Motivo novo → adicionar ao final com [CONFIRMAR COM MURILLO]
4. Motivo com frequência alta → acionar ação corretiva correspondente
5. Revisão estratégica: se um motivo acumular > 3 ocorrências no mês → escalar para `_memoria/decisoes-estrategicas.md`

**Princípio:** motivo de perda não é derrota — é dado de melhoria. Registrar com objetividade, sem julgamento.

---

## CATEGORIA: PREÇO

---

### Motivo P1 — Achou caro / foi no concorrente mais barato

**Slug no CSV:** `preco-alto`
**Categoria:** Preço
**Frequência estimada:** Alta
**Impacto no funil:** Perda em fase de proposta ou após ver o valor

**O que pode ter causado:**
- Proposta não comunicou o que está incluído (seguro, guia, equipamento)
- Lead chegou comparando preço sem contexto de qualidade
- Concorrente praticando preço abaixo do custo ou com menos incluso

**Ação corretiva:**
- Revisar template de proposta: citar explicitamente o que está incluso *antes* do valor
- Confirmar com Murillo: há casos onde o concorrente é genuinamente mais barato? Por quê?
- Atualizar `objecoes.md` Objeção 2 com nova variação empática se frequência subir

**O que NÃO fazer:** baixar preço de forma impulsiva sem analisar margem real

---

### Motivo P2 — Fora do orçamento (sem comparação com concorrente)

**Slug no CSV:** `orcamento-insuficiente`
**Categoria:** Preço
**Frequência estimada:** Média
**Impacto no funil:** Perda em qualificação ou após pergunta de preço

**O que pode ter causado:**
- Lead não tinha orçamento para passeio guiado (queria ir por conta)
- Passeio escolhido tem preço acima do que o perfil costuma gastar
- Número de pessoas mudou e o valor total assustou

**Ação corretiva:**
- Oferecer alternativa de passeio menor (ex: quem não tem para lancha, oferecer passeio de praia simples)
- Ter opção de passeio compartilhado como alternativa ao privativo
- Perguntar orçamento antes de citar valor: "qual é a sua referência de quanto quer gastar?"

---

## CATEGORIA: TIMING

---

### Motivo T1 — Viagem cancelada ou reagendada

**Slug no CSV:** `viagem-cancelada`
**Categoria:** Timing
**Frequência estimada:** Baixa-média
**Impacto no funil:** Perda após qualificação (lead qualificado, data caiu)

**O que pode ter causado:**
- Imprevisto pessoal ou profissional do lead
- Mudança de destino de viagem
- Problema de saúde

**Ação corretiva:**
- Registrar como `perdido` mas manter observação: "candidato a reativar"
- Se possível, perguntar educadamente se há nova data prevista
- Não reclassificar como `perdido definitivo` — pode retornar

---

### Motivo T2 — Perdeu o prazo / já chegou na cidade sem reserva

**Slug no CSV:** `sem-tempo-habil`
**Categoria:** Timing
**Frequência estimada:** Baixa
**Impacto no funil:** Perda por operação (não por objeção)

**O que pode ter causado:**
- Lead demorou a responder e chegou a JP sem vaga disponível
- Maré só baixa em datas específicas e o lead chegou no período errado
- Feriado ou alta temporada com agenda cheia

**Ação corretiva:**
- Reforçar nas mensagens de follow-up: "as vagas para [data] costumam ser preenchidas com X dias de antecedência"
- Ter datas com disponibilidade aparente no template de proposta
- Para maré: sempre citar janela de datas favoráveis ao confirmar interesse

---

### Motivo T3 — Sumiu / sem resposta (lost by ghosting)

**Slug no CSV:** `ghosting`
**Categoria:** Timing / Comportamento
**Frequência estimada:** Alta
**Impacto no funil:** Perda após T1 ou T2 de follow-up sem retorno por 5+ dias

**O que pode ter causado:**
- Lead ainda está comparando e não quer dizer não
- Interesse baixo desde o início (lead frio que entrou por acidente)
- Vida pessoal impediu a decisão (esqueceu, adoeceu, etc.)
- Resposta demorada de Murillo que esfriou o interesse

**Ação corretiva:**
- Garantir resposta inicial em menos de 2h (KPI #2)
- Executar os 4 toques do follow-up antes de marcar como perdido (T1 → T4, não abandonar no T1)
- Último toque (T4): "se surgir nova data, é só me chamar — fico à disposição"
- Nunca reclassificar como perdido antes do T4

---

## CATEGORIA: CONCORRÊNCIA

---

### Motivo C1 — Foi para agência local ou operador direto

**Slug no CSV:** `concorrente-local`
**Categoria:** Concorrência
**Frequência estimada:** Média
**Impacto no funil:** Perda após comparação ativa

**O que pode ter causado:**
- Lead encontrou operador na praia que ofereceu preço menor
- Hotel ou pousada indicou outra agência como "parceiro"
- Lead já conhecia alguém no mercado local

**Ação corretiva:**
- Destacar diferencial de Cadastur e rastreabilidade (operador informal não tem)
- Perguntar onde está hospedado: se hotel tem parceria com concorrente, antecipar esse atrito
- Reforçar segurança e certificação antes de citar preço

---

### Motivo C2 — Comprou pacote com hospedagem incluído (passagem + hotel + passeio)

**Slug no CSV:** `pacote-hospedagem`
**Categoria:** Concorrência / Modelo
**Frequência estimada:** Baixa-média
**Impacto no funil:** Perda antes de chegar a JP (lead pesquisou antes)

**O que pode ter causado:**
- Lead comprou agência de viagem completa (CVC, Decolar, Hurb) com passeio incluso
- Não havia proposta de valor clara para o lead contratar passeios separados

**Ação corretiva:**
- Nos materiais de topo de funil: comunicar vantagem de contratar passeios locais separadamente (personalização, preço, qualidade)
- Identificar leads que ainda estão em fase de planejamento (pré-viagem) como oportunidade de captura antecipada

---

## CATEGORIA: CONFIANÇA

---

### Motivo CF1 — Desconfiança / medo de golpe (não converteu)

**Slug no CSV:** `desconfianca`
**Categoria:** Confiança
**Frequência estimada:** Média (maior em leads de fora do NE)
**Impacto no funil:** Perda em qualificação ou após primeira proposta

**O que pode ter causado:**
- Lead de outro estado, sem referência de Murillo ou de amigos
- Não viu o Cadastur ou avaliações no Google antes de perguntar
- Resposta inicial não transmitiu credenciais com suficiente antecedência

**Ação corretiva:**
- No primeiro contato: sempre enviar link das avaliações Google + número Cadastur antes de falar em preço
- Template de resposta inicial deve ter credenciais nos primeiros 2 parágrafos
- Verificar se avaliações Google estão visíveis e atualizadas (KPI #5)

---

### Motivo CF2 — Avaliação negativa vista pelo lead

**Slug no CSV:** `avaliacao-negativa`
**Categoria:** Confiança / Qualidade
**Frequência estimada:** Baixa
**Impacto no funil:** Perda antes ou durante qualificação

**O que pode ter causado:**
- Avaliação 1-3 estrelas no Google sem resposta de Murillo
- Print de reclamação circulando em grupo de viajantes

**Ação corretiva:**
- Murillo responder TODAS as avaliações negativas no Google (incluindo as antigas)
- Resposta de avaliação negativa = prova de seriedade para novos leads
- [CONFIRMAR COM MURILLO: existe alguma avaliação negativa não respondida? Qual foi o caso?]

---

## CATEGORIA: OPERACIONAL

---

### Motivo O1 — Data sem vaga / passeio sem disponibilidade

**Slug no CSV:** `sem-disponibilidade`
**Categoria:** Operacional
**Frequência estimada:** Baixa (pode aumentar em alta temporada)
**Impacto no funil:** Perda operacional, não por objeção

**O que pode ter causado:**
- Alta temporada com agenda lotada
- Fornecedor (barco, van) indisponível para a data solicitada
- Maré desfavorável na única data que o lead tinha

**Ação corretiva:**
- Oferecer datas alternativas antes de fechar como perdido
- Documentar substitutos em `_conhecimento/fornecedores.md` para evitar ponto único de falha
- Para maré: comunicar datas alternativas com maré favorável no mesmo período

---

### Motivo O2 — Restrição física / saúde incompatível com o passeio

**Slug no CSV:** `restricao-fisica`
**Categoria:** Operacional / Segurança
**Frequência estimada:** Baixa
**Impacto no funil:** Perda por adequação (não por falha)

**O que pode ter causado:**
- Lead com mobilidade reduzida e passeio escolhido sem acessibilidade
- Criança com idade abaixo do mínimo para atividade com quadriciclo
- Condição de saúde incompatível com barco ou esforço físico

**Ação corretiva:**
- Qualificar restrições físicas cedo (pergunta de qualificação padrão)
- Ter alternativa mais acessível para oferecer antes de perder o lead
- [CONFIRMAR COM MURILLO: quais passeios são acessíveis para mobilidade reduzida?]

---

## Registro de Novos Motivos

Quando Murillo identificar motivo não listado aqui, registrar no formato:

```
### Motivo [XX] — [descrição curta]

**Slug no CSV:** `[slug-kebab-case]`
**Categoria:** [Preço / Timing / Concorrência / Confiança / Operacional / Outro]
**Frequência estimada:** [primeira vez / baixa / média / alta]
**Impacto no funil:** [em qual etapa o lead caiu]

**O que pode ter causado:**
- [fator 1]
- [fator 2]

**Ação corretiva:**
- [o que mudar no processo ou na comunicação]
```

---

## Análise Mensal (Ciclo 5 — Toda Sexta 17h)

O `painel-kpi-vempassear` lê `_crm/leads.csv` e agrupa `motivo_perda` para gerar:

| Motivo | Ocorrências no mês | % do total perdido |
|--------|--------------------|--------------------|
| ghosting | — | — |
| preco-alto | — | — |
| viagem-cancelada | — | — |
| [outros] | — | — |

A tabela é preenchida automaticamente na skill. Este arquivo serve de catálogo de referência — a contagem viva está no CSV e no relatório semanal em `_automacao/relatorios/`.

---

*v1.0 | Criado 2026-04-29 | Fonte: inferido de objecoes.md, concorrentes.md, publico-alvo.md + Análise 2.0*
*Próxima revisão: após 30 dias de registro de leads em `_crm/leads.csv`*
