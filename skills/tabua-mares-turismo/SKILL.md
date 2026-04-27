---
name: tabua-mares-turismo
description: Skill operacional que orienta a importação automática da tábua de marés oficial (Marinha/CHM — Porto de Cabedelo/PB), calcula horários de saída em grade de 30 minutos, classifica status, gera janelas/ciclos de saída e alimenta cards de próxima saída automática, calendários internos e SEO de maré baixa. Suporta saída sugerida automática e override manual por Murillo/operador. Coleta automatizada é o caminho principal; entrada manual é fallback.
version: "1.3"
status: ativa
modelo_padrao: Sonnet 4.6
passeios_dependentes: [seixas, picaozinho, areia-vermelha]
estacao_referencia: "Porto de Cabedelo/PB — Marinha do Brasil / CHM"
atualizado: "2026-04-27"
pipelines: [A, G]
posicao: pre-programador
---

# Skill: Tábua de Marés Turismo

**Versão:** 1.3
**Status:** Ativa
**Especialidade:** Importação automática CHM, grade operacional de saídas em 30 minutos, override manual, janelas de saída, próxima saída automática, SEO de disponibilidade
**Escopo:** Passeios de piscinas naturais — Vem Passear em Jampa
**Modelo Padrão:** Sonnet 4.6
**Atualizado:** 2026-04-26

---

## RESPONSABILIDADE

### O Que Faz

- **Orienta a construção de um importador automático** que baixa/lê a tábua oficial da Marinha/CHM para Porto de Cabedelo/PB
- Define schema, regras e funções (`importarTabuaMaresCabedelo`, `parseTabuaMaresOficial`, `calcularSaidaSugerida`, `getStatusMare`, `getProximaSaida`, `getSaidasDoMes`, `agruparJanelasDeSaida`)
- Calcula `horarioSaidaSugerido = floor30(baixa-mar − 15min)` com mínimo 07:00 (grade operacional real de barcos)
- Suporta `horarioSaidaConfirmado` para override manual por Murillo/operador quando necessário
- `horarioSaidaExibido` = confirmado se existir, caso contrário sugerido — é o único horário público
- Classifica status operacional por altura de maré (Excelente / Boa / Consultar / Sem passeio)
- Agrupa dias favoráveis em janelas/ciclos de saída (sem agenda fixa semanal)
- Determina próxima saída automaticamente (primeiro dia ativo ≥ hoje)
- Fornece dados para cards mostrarem "Próxima saída: Terça, 28/04 — 07h30" sem hardcode
- Gera estrutura para calendário mensal nas páginas internas
- Apoia SEO local (FAQ, H2s, keywords de maré)
- Entrega handoff para `programador-de-site`

### O Que NÃO Faz

- ❌ Publicar calendário sem validação de Murillo
- ❌ Assumir agenda fixa semanal ou mensal — cada mês é recalculado
- ❌ Mostrar ao cliente o horário da baixa-mar (dado interno)
- ❌ Inventar datas, alturas ou janelas — só processa dados oficiais
- ❌ Escrever copy da página — `copywriter-vendas` é responsável
- ❌ Implementar código diretamente no site — `programador-de-site` executa o importador e a integração

### O Que É Caminho Secundário (Fallback)

- Entrada manual de dados pelo Murillo só quando o importador falhar (CHM fora do ar, mudança de layout, correção pontual)
- Fluxo manual completo está em `references/regras-operacionais.md` §2 e §12

---

## QUANDO USAR (GATILHOS)

Esta skill **deve ser acionada** sempre que o objetivo do projeto envolver qualquer um dos itens abaixo:

### Gatilhos Diretos
- **Tábua de marés** — qualquer menção a marés operacionais ou tábua oficial
- **Importação automática da Marinha/CHM** — construir, manter ou debugar o importador
- **Porto de Cabedelo/PB** — estação de referência única
- **Maré baixa** — copy, FAQ, SEO ou regra que dependa de maré baixa
- **Baixa-mar operacional** — selecionar qual baixa-mar usar como referência de saída
- **Piscinas naturais** — quando o objetivo afeta passeios de piscinas naturais
- **Seixas** — qualquer trabalho na página, card ou conteúdo do passeio
- **Picãozinho** — idem
- **Areia Vermelha** — idem
- **Próxima saída automática** — card, hero ou bloco que precise mostrar próxima saída disponível
- **Calendário de saídas** — página ou bloco com calendário mensal de saídas
- **Dados de maré** — qualquer fluxo de coleta, parse ou validação
- **SEO de maré baixa** — keywords, FAQ schema, meta tags relacionadas a maré
- **Automação de dados de maré** — script, GitHub Action, lint customizado
- **tabuademares.com.br** — fonte operacional de referência para João Pessoa
- **Saída sugerida em grade de 30 minutos** — qualquer cálculo de horário de saída de barco
- **Override manual de horário de saída** — quando Murillo ou operador precisa confirmar horário diferente do sugerido

### Gatilhos Indiretos
- Atualizar cards de passeios de piscinas naturais (verificar se exibem próxima saída)
- Criar página `/passeios/piscinas-naturais/calendario`
- Gerar conteúdo educativo sobre operação dependente de maré
- Briefar designer para componente que dependa de dados de maré
- Validar consistência de horários de saída em copy ou roteiro

### Quando NÃO Usar
- Passeios independentes de maré (litoral sul clássico, city tour, passeios culturais)
- Sem dados de maré fornecidos por Murillo → solicitar dados antes
- Objetivo é apenas texto ou design sem componente de disponibilidade

---

## INPUT

| Campo | Obrigatório | Fonte | Descrição |
|-------|-------------|-------|-----------|
| `objetivo` | Sim | Murillo | Ex: "gerar calendário de maio 2026 para Seixas e Picãozinho" |
| `dados_mare` | Sim | Murillo (Marinha/CHM) | Lista de dias com baixa-mar e altura |
| `passeios_alvo` | Sim | Murillo | Quais passeios incluir: seixas, picaozinho, areia-vermelha |
| `mes_ano` | Sim | Murillo | Ex: "maio 2026" |
| `regras_operacionais` | Não | `references/regras-operacionais.md` | Carregar automaticamente |

### Formato de Input de Dados de Maré

```
Data       | Baixa-Mar | Altura (m)
-----------|-----------|----------
2026-05-01 | 07:12     | 0.4
2026-05-02 | 08:05     | 0.6
2026-05-03 | 08:58     | 0.3
...
```

Aceita também múltiplas baixas-mares por dia — usar a de menor altura (regra em `references/regras-operacionais.md`).

---

## PROCESSO

### Passo 1 — Validar Input
- [ ] Dados de maré fornecidos para o período completo?
- [ ] Passeios alvo identificados?
- [ ] Mês/ano definido?
- [ ] Se falta dado: marcar `[CONFIRMAR COM MURILLO: ...]` e parar

### Passo 2 — Calcular Saídas por Dia
- Selecionar a **baixa-mar da manhã** quando houver 2 no dia (regra única — ver `regras-operacionais.md` §4.1)
- Aplicar `horarioSaidaBarco = horarioBaixaMareInterno − 60min`
- Classificar `statusOperacional` pelas regras de altura
- Definir `temPasseio: true` para Excelente e Boa

### Passo 3 — Agrupar em Janelas/Ciclos
- Identificar sequências contínuas de dias com `temPasseio: true`
- Criar `cicloId` por janela: `"[mes-abbr]-[ano]-ciclo-[n]"`
- Janelas variam de 1 a ~5 dias consecutivos por ciclo lunar

### Passo 4 — Determinar Próxima Saída
- Por passeio: primeiro dia onde `temPasseio: true` E `data >= hoje`
- Se nenhum encontrado: `proximaSaida: null` → card exibe "Consulte próximas saídas"

### Passo 5 — Gerar Estrutura de Dados
- Produzir bloco TypeScript pronto para `data/tabua-mares.ts`
- Aplicar interfaces de `references/estrutura-dados.md`

### Passo 6 — Gerar Conteúdo SEO (se solicitado)
- Consultar `references/seo-tabua-mares.md`
- Produzir FAQ schema, H2s e meta description

### Passo 7 — Validação por Murillo
- Gerar checklist obrigatório (horários, status, janelas, próxima saída)
- **Dados só vão ao site após Murillo confirmar**

### Passo 8 — Handoff para `programador-de-site`
- Arquivo `data/tabua-mares.ts`
- Spec do componente `ProximaSaidaCard`
- Spec do componente/página `CalendarioMaresPage`
- Lista de campos a adicionar em `Passeio`

---

## OUTPUT

```
tabua-mares/
├── dados/[mes]-[ano]/
│   ├── saidas-calculadas.md
│   └── janelas-ciclos.md
├── data-ts/
│   └── tabua-mares-[mes]-[ano].ts
├── seo/
│   └── faq-mare-[mes]-[ano].md
└── handoff-programador.md
```

### Exemplo de linha exibida ao cliente

> **Segunda 27/05 — Saída 07h30 — Maré 0.6m — Boa**

O cliente nunca vê o horário da baixa-mar, apenas o horário de saída calculado.

---

## REGRAS INVIOLÁVEIS

1. **Coleta automática é o caminho principal** — manual é fallback de emergência.
2. **Nunca inventa dados** — só processa o que vem da CHM (ou Murillo no fallback).
3. **Cliente nunca vê baixa-mar** — `horarioBaixaMareInterno` é apenas para cálculo.
4. **Cliente vê:** dia da semana, data, horário de saída (`horarioSaidaExibido`), altura da maré, status.
5. **Saída sugerida = `floor30(baixa-mar − 15min)`, mínimo 07:00** — grade operacional real de barcos.
6. **Override manual é permitido** — `horarioSaidaConfirmado` sobrescreve a sugestão quando Murillo define diferente.
7. **`horarioSaidaExibido` = confirmado ?? sugerido** — sempre o que o cliente vê.
8. **Uma saída por dia** — mesmo com 2 baixas-mares favoráveis.
9. **Sem agenda fixa semanal** — cada mês é recalculado por janelas/ciclos.
10. **Validação por Murillo é obrigatória** antes de publicar — inclusive em dado importado.
11. **Cards usam próxima saída automática** — nunca data hardcoded.
12. **Importador nunca publica direto** — sempre via PR com checklist.
13. **Status orientativo, decisão final é do Murillo** — em caso de dúvida em "consultar" vs "sem-passeio".

---

## INTEGRAÇÃO COM ORQUESTRADOR

| Propriedade | Valor |
|-------------|-------|
| Pipelines que usa | Pipeline A (etapa pré-programador), Pipeline G |
| Gatilhos de acionamento | tábua de marés, importação automática da Marinha/CHM, Porto de Cabedelo/PB, maré baixa, piscinas naturais, Seixas, Picãozinho, Areia Vermelha, próxima saída automática, calendário de saídas, dados de maré, SEO de maré baixa, automação de dados de maré |
| Depende de (skills) | Nenhuma — entrada direta de Murillo |
| Depende de (arquivos) | `references/regras-operacionais.md` (automático) |
| Alimenta (skills) | `programador-de-site`, `seo-local-turismo`, `copywriter-vendas` (FAQ de maré) |
| Pode rodar em paralelo com | `copywriter-vendas`, `ux-ui-mobile-first` (após estrategista) |
| Posição no pipeline | Antes de `programador-de-site` para passeios dependentes de maré |

O orquestrador **deve acionar esta skill** sempre que o objetivo envolver qualquer um dos gatilhos listados em "QUANDO USAR" acima.

---

## PAINEL DE REFERÊNCIAS

| Quando | Consultar | Conteúdo |
|--------|-----------|----------|
| Antes de calcular saída | `references/regras-operacionais.md` | Fonte oficial, coleta automática vs fallback manual, grade operacional de 30min, saída sugerida vs confirmada, override manual, classificação, janelas, exibição cliente, validação Murillo |
| Ao gerar estrutura de dados | `references/estrutura-dados.md` | Schema completo (incl. horarioSaidaSugerido, horarioSaidaConfirmado, horarioSaidaExibido, fonteTipo, confiancaFonte, overrideManual), funções runtime e funções de importação |
| Ao gerar SEO | `references/seo-tabua-mares.md` | Keywords (tábua de maré Porto de Cabedelo, melhores dias para Areia Vermelha etc.), FAQ schema, links internos |
| Planejando automação | `references/automacao-futura.md` | 6 fases: importar eventos → identificar baixas-mares → calcular saída sugerida → validação/override → cards → calendário → SEO |

---

## LIMITES

- **Fase 0 (atual):** definição de schema, regras e roadmap — sem código implementado
- **Fase 1 (próxima):** importador automático CHM (ver `references/automacao-futura.md`)
- **Fases 2–6:** geração automática de `data/tabua-mares.ts`, validação, cards, calendário, SEO
- Não toma decisão sobre cancelamento de passeio — só sinaliza status
- Não cria página — entrega dados e spec para `programador-de-site`
- Não promete saída sem confirmação explícita de Murillo
- Manual continua disponível como fallback, **não como caminho padrão**

---

## CHANGELOG

**v1.3 (2026-04-27):**
- **Regra de cálculo de saída substituída** — "baixa-mar − 1h" removida; nova regra: `floor30(baixa-mar − 15min)` com mínimo 07:00
- **Grade operacional de 30 minutos** — reflete comportamento real dos barcos observado por Murillo
- **Campos novos no schema:** `horarioSaidaSugerido`, `horarioSaidaConfirmado`, `horarioSaidaExibido`, `fonteTipo`, `confiancaFonte`, `overrideManual`
- **Override manual formalizado** — Murillo/operador pode definir `horarioSaidaConfirmado` que sobrescreve a sugestão automática
- **`horarioSaidaBarco` removido** — substituído por `horarioSaidaExibido` (confirmado ?? sugerido)
- **`calcularHorarioSaida()` renomeada** para `calcularSaidaSugerida()` — nova assinatura reflete a grade de 30min
- **Fonte operacional de referência:** `tabuademares.com/br/paraiba/joao-pessoa` adicionada como referência operacional prática
- Gatilhos expandidos: "tabuademares.com.br", "saída sugerida em grade de 30 minutos", "override manual de horário"

**v1.2 (2026-04-26):**
- **Coleta automática promovida a caminho principal** — manual passa a ser fallback de emergência
- Schema acrescentou `urlFonte` e `dataImportacao` (rastreabilidade do importador)
- Regra de seleção de baixa-mar definitiva: **baixa-mar da manhã** (não mais "menor altura")
- Funções de importação `importarTabuaMaresCabedelo(ano)` e `parseTabuaMaresOficial(arquivo)` formalizadas
- `automacao-futura.md` reestruturada em **6 fases** (importador → geração → validação → cards → calendário → SEO)
- Gatilhos da skill expandidos com "importação automática", "Porto de Cabedelo", "automação de dados de maré"

**v1.1 (2026-04-26):**
- Seção "QUANDO USAR" expandida com gatilhos diretos e indiretos
- Regras invioláveis numeradas e reforçadas
- Schema de dados alinhado com nomenclatura definitiva (`horarioBaixaMareInterno`, `horarioSaidaBarco`, `temPasseio`, `passeiosAfetados`, `revisadoPorMurillo`)
- Regra explícita de cards (próxima saída automática, sem hardcode)
- Exemplo de exibição ao cliente padronizado: "Segunda 27/05 — Saída 07h30 — Maré 0.6m — Boa"

**v1.0 (2026-04-26):** versão inicial da skill, fase 1 manual.
