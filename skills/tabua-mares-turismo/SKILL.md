---
name: tabua-mares-turismo
description: Interpreta a tábua de marés oficial (Marinha/CHM — Porto de Cabedelo/PB), calcula horários de saída, classifica status operacional, gera janelas/ciclos de saída e entrega dados estruturados para o site e SEO.
version: "1.0"
status: ativa
modelo_padrao: Sonnet 4.6
passeios_dependentes: [seixas, picaozinho, areia-vermelha]
estacao_referencia: "Porto de Cabedelo/PB — Marinha do Brasil / CHM"
atualizado: "2026-04-26"
pipelines: [A, G]
posicao: pre-programador
---

# Skill: Tábua de Marés Turismo

**Versão:** 1.0  
**Status:** Ativa  
**Especialidade:** Marés, agenda operacional, janelas de saída, SEO de disponibilidade  
**Escopo:** Passeios de piscinas naturais — Vem Passear em Jampa  
**Modelo Padrão:** Sonnet 4.6  
**Atualizado:** 2026-04-26

---

## RESPONSABILIDADE

### O Que Faz

- Recebe dados brutos da tábua de marés (tabulados manualmente por Murillo)
- Calcula horário de saída do barco: `baixa-mar − 1 hora`
- Classifica status operacional por dia (Excelente / Boa / Consultar / Sem passeio)
- Agrupa dias favoráveis em janelas/ciclos de saída mensais
- Determina `proximaSaida` automaticamente (primeiro dia ativo ≥ hoje)
- Gera estrutura de dados TypeScript pronta para `data/tabua-mares.ts`
- Gera conteúdo SEO indexável (FAQ de maré, H2s de calendário, meta tags)
- Entrega handoff para `programador-de-site` com spec de componentes

### O Que NÃO Faz

- ❌ Buscar dados automaticamente da web — dados chegam de Murillo (fase 1)
- ❌ Publicar calendário sem validação de Murillo
- ❌ Assumir agenda fixa semanal ou mensal
- ❌ Mostrar ao cliente o horário da baixa-mar (dado interno operacional)
- ❌ Inventar datas ou alturas de maré — só processa o que Murillo fornece
- ❌ Escrever copy da página — `copywriter-vendas` é responsável
- ❌ Implementar código — `programador-de-site` executa

### Quando Usar

- Murillo fornece dados de marés do mês e quer gerar o calendário de saídas
- Atualizar `proximaSaida` nos cards de passeio (Seixas, Picãozinho, Areia Vermelha)
- Criar ou atualizar página `/passeios/piscinas-naturais/calendario`
- Gerar conteúdo SEO sobre disponibilidade e maré baixa
- Preparar handoff de dados para `programador-de-site`

### Quando NÃO Usar

- Passeios que não dependem de maré (litoral sul clássico, passeios culturais)
- Sem dados de maré fornecidos por Murillo → não pode calcular nada, solicita dados
- Objetivo é apenas texto ou design sem dados → outra skill

---

## INPUT

| Campo | Obrigatório | Fonte | Descrição |
|-------|-------------|-------|-----------|
| `objetivo` | Sim | Murillo | Ex: "gerar calendário de maio 2026 para Seixas e Picãozinho" |
| `dados_mare` | Sim | Murillo (Marinha/CHM) | Lista de dias com baixa-mar e altura (ver formato abaixo) |
| `passeios_alvo` | Sim | Murillo | Quais passeios incluir: seixas, picaozinho, areia-vermelha |
| `mes_ano` | Sim | Murillo | Ex: "maio 2026" |
| `regras_operacionais` | Não | `references/regras-operacionais.md` | Já documentadas — carregar automaticamente |

### Formato de Input de Dados de Maré

Murillo fornece assim (pode ser tabela, texto ou foto CHM digitada):

```
Data       | Baixa-Mar | Altura (m)
-----------|-----------|----------
2026-05-01 | 07:12     | 0.4
2026-05-02 | 08:05     | 0.6
2026-05-03 | 08:58     | 0.3
...
```

Aceita também uma lista de baixas-mares do dia (CHM pode ter 2 por dia — usar a menor).

---

## PROCESSO

### Passo 1 — Validar Input

- [ ] Dados de maré fornecidos para o período completo?
- [ ] Passeios alvo identificados?
- [ ] Mês/ano definido?
- [ ] Se falta dado: marcar `[CONFIRMAR COM MURILLO: ...]` e parar

### Passo 2 — Calcular Saídas por Dia

Para cada dia com dados:

1. Se o dia tiver 2 baixas-mares: usar a de menor altura (mais favorável)
2. Calcular `horarioSaida = baixaMar − 60 minutos`
3. Classificar `status` pelas regras de `references/regras-operacionais.md`:
   - `0.0m – 0.5m` → `"excelente"`
   - `0.6m – 0.7m` → `"boa"`
   - `0.8m` → `"consultar"`
   - `0.9m+` → `"sem-passeio"`
4. Definir `ativo: true` para Excelente e Boa; `false` para os demais

### Passo 3 — Agrupar em Janelas/Ciclos

- Identificar sequências contínuas de dias com `ativo: true`
- Criar um `cicloId` por janela: `"[mes]-[ano]-ciclo-[n]"` (ex: `"maio-2026-ciclo-1"`)
- Separar dias com `ativo: false` que interrompem uma janela
- Uma janela pode ter 1 a ~5 dias consecutivos favoráveis (ciclos lunares ~14 dias de maré baixa)

### Passo 4 — Determinar `proximaSaida`

Por passeio:
- Varrer `SaidaDia[]` em ordem cronológica
- Primeiro dia onde `ativo: true` E `data >= dataHoje` é a `proximaSaida`
- Se nenhum encontrado: `proximaSaida: null` → card exibe "Consulte próximas saídas"

### Passo 5 — Gerar Estrutura de Dados

Produzir o bloco TypeScript completo para `data/tabua-mares.ts` (ver spec em `references/estrutura-dados.md`).

### Passo 6 — Gerar Conteúdo SEO (se solicitado)

Consultar `references/seo-tabua-mares.md` e produzir:
- FAQ de maré (3–5 perguntas) para schema FAQPage
- H2s para página de calendário
- Meta description do calendário

### Passo 7 — Validação por Murillo

Gerar checklist de validação:
- [ ] Horários de saída conferem com a tábua original?
- [ ] Status operacional faz sentido para cada dia?
- [ ] Janelas/ciclos agrupados corretamente?
- [ ] `proximaSaida` é o dia correto?

**Regra:** dados só vão ao site após Murillo confirmar.

### Passo 8 — Handoff para `programador-de-site`

Entregar (ver `references/estrutura-dados.md` § Handoff):
- Arquivo `data/tabua-mares.ts` gerado
- Spec do componente `ProximaSaidaCard`
- Spec do componente `CalendarioMaresPage`
- Lista de dependências no `Passeio` interface a adicionar

---

## OUTPUT

### Saída Principal

```
tabua-mares/
├── dados/[mes]-[ano]/
│   ├── saidas-calculadas.md       # Tabela legível com todos os dias
│   └── janelas-ciclos.md          # Agrupamento por janelas de maré
├── data-ts/
│   └── tabua-mares-[mes]-[ano].ts # Bloco TypeScript para data/tabua-mares.ts
├── seo/
│   └── faq-mare-[mes]-[ano].md    # FAQ de maré para schema
└── handoff-programador.md         # Instrução completa para programador-de-site
```

### Exemplo de Saída (saidas-calculadas.md)

```markdown
## Saídas — Maio 2026 — Seixas

| Data       | Dia     | Baixa-Mar | Saída  | Altura | Status          | Ativo |
|------------|---------|-----------|--------|--------|-----------------|-------|
| 2026-05-01 | Sexta   | 07:12     | 06:12  | 0.4m   | ✅ Excelente    | sim   |
| 2026-05-02 | Sábado  | 08:05     | 07:05  | 0.6m   | 🟡 Boa          | sim   |
| 2026-05-03 | Domingo | 08:58     | 07:58  | 0.3m   | ✅ Excelente    | sim   |
| 2026-05-04 | Segunda | 09:44     | 08:44  | 0.8m   | 🔴 Consultar    | não   |
| 2026-05-05 | Terça   | 10:31     | 09:31  | 1.1m   | ❌ Sem passeio  | não   |

**Janela 1:** 01/05 – 03/05 (3 saídas)
**Próxima saída (a partir de hoje):** [calculado dinamicamente]
```

---

## REGRAS

- **Não inventa dados:** só processa o que Murillo fornece. Sem dados = sem output
- **Cliente não vê baixa-mar:** só vê horário de saída, data, status e altura
- **Uma saída por dia:** mesmo que haja 2 baixas-mares favoráveis, usar apenas a primeira/menor
- **Sem agenda fixa:** cada mês é calculado independentemente — ciclos lunares variam
- **Validação obrigatória:** nenhum dado vai ao site sem checklist confirmado por Murillo
- **Status é decisão operacional:** em caso de dúvida em "consultar" vs "sem passeio", Murillo decide

---

## INTEGRAÇÃO COM ORQUESTRADOR

| Propriedade | Valor |
|-------------|-------|
| Pipelines que usa | Pipeline A (etapa pré-programador), Pipeline G |
| Gatilhos de acionamento | tábua de marés, próxima saída, calendário piscinas, Seixas/Picãozinho/Areia Vermelha, SEO maré baixa |
| Depende de (skills) | Nenhuma — entrada direta de Murillo |
| Depende de (arquivos) | `references/regras-operacionais.md` (automático) |
| Alimenta (skills) | `programador-de-site` (dados + spec), `seo-local-turismo` (conteúdo SEO de maré) |
| Pode rodar em paralelo com | `copywriter-vendas`, `ux-ui-mobile-first` (após estrategista) |
| Posição no pipeline | Antes de `programador-de-site` para passeios dependentes de maré |

---

## PAINEL DE REFERÊNCIAS

| Quando | Consultar | Conteúdo |
|--------|-----------|----------|
| Antes de calcular | `references/regras-operacionais.md` | Thresholds de altura, regra de 1h, passeios alvo, visão do cliente |
| Ao gerar estrutura de dados | `references/estrutura-dados.md` | Interfaces TypeScript, data layer, spec de componentes |
| Ao gerar SEO | `references/seo-tabua-mares.md` | Keywords, FAQ schema, meta tags, H2s do calendário |
| Planejando fase 2 | `references/automacao-futura.md` | Spec do importador CHM, automação, validação automática |

---

## LIMITES

- Fase 1: entrada manual de dados — Murillo digita ou copia da CHM
- Fase 2 (futura): importador automatizado — ver `references/automacao-futura.md`
- Não toma decisão sobre cancelamento de passeio — só sinaliza status, Murillo decide
- Não cria página — entrega dados e spec para `programador-de-site`

---

*Skill v1.0 | Criada 2026-04-26 | Fase 1: entrada manual de dados | Fase 2 (futura): importador CHM automatizado*
