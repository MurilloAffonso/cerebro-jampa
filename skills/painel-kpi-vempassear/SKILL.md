---
name: painel-kpi-vempassear
description: Lê _crm/leads.csv e gera relatório semanal com os 5 KPIs da Vem Passear em Jampa. Saída em _automacao/relatorios/semanal-YYYY-WW.md. Acionado toda sexta às 17h (Ciclo 5).
version: "1.0"
status: ativa
modelo_padrao: Sonnet 4.6
atualizado: "2026-04-29"
pipelines: []
posicao: standalone
---

# Skill: Painel KPI Vem Passear

**Versão:** 1.0
**Status:** Ativa
**Papel:** Leitura do CRM → cálculo dos 5 KPIs → relatório semanal
**Escopo:** Toda sexta 17h (Ciclo 5 do Jarvis) ou sob demanda de Murillo
**Modelo Padrão:** Sonnet 4.6
**Atualizado:** 2026-04-29

---

## RESPONSABILIDADE

### O Que Faz
- Lê `_crm/leads.csv` e extrai os dados da semana corrente
- Calcula os 5 KPIs semanais
- Gera relatório em `_automacao/relatorios/semanal-YYYY-WW.md`
- Compara com semana anterior (se houver relatório anterior)
- Sinaliza alerta se KPI crítico está fora de meta

### O Que NÃO Faz
- ❌ Alterar dados do CRM
- ❌ Enviar relatório por Telegram (Jarvis faz isso — esta skill apenas gera o markdown)
- ❌ Tomar decisão estratégica — apenas apresentar os números
- ❌ Inventar dado — só o que está no CSV

---

## OS 5 KPIs

| # | KPI | Campo CSV | Como calcular | Meta mês 1 | Meta mês 3 |
|---|-----|-----------|---------------|-----------|-----------|
| 1 | Leads recebidos por origem | `origem` | Contar novos na semana, agrupar por origem | linha de base | +20% vs mês 1 |
| 2 | Tempo médio de resposta | `ultima_interacao` vs hora estimada da 1ª mensagem | Média em horas — usar `ultima_interacao` do primeiro registro | linha de base | < 2h em 80% |
| 3 | Taxa de fechamento | `status` | `fechado` / (`fechado` + `perdido`) × 100 | linha de base | 30% |
| 4 | Motivo de perda — top 1 | `motivo_perda` | Moda dos registros `perdido` na semana | identificar | reduzir 30% |
| 5 | Avaliações Google novas | `observacoes` | Contar registros com "avaliação Google: sim" no período | +1/semana | +3/semana |

**Nota KPI #2:** Se não há campo de hora da 1ª mensagem no CSV, usar proxy: `ultima_interacao` do registro com status `novo` como aproximação. Murillo refina com dado real.

---

## INPUT

| Campo | Obrigatório | Fonte | Descrição |
|-------|-------------|-------|-----------|
| semana | Sim | data atual | Semana ISO (ex: 2026-W18) |
| leads_csv | Sim | `_crm/leads.csv` | Todos os registros |
| relatorio_anterior | Não | `_automacao/relatorios/` | Para comparação semana a semana |

---

## PROCESSO

### Etapa 1 — Definir Janela da Semana

```
inicio_semana = segunda-feira da semana ISO atual
fim_semana    = sexta-feira da semana ISO atual (hoje)
```

Filtrar registros de `leads.csv` onde `ultima_interacao` está dentro da janela.

### Etapa 2 — Calcular KPI #1 (Leads por Origem)

```
gmb:        contar onde origem = "gmb"
site:       contar onde origem = "site"
instagram:  contar onde origem = "instagram"
indicacao:  contar onde origem = "indicacao"
outros:     contar onde origem = "outros"
total:      soma de todos
```

### Etapa 3 — Calcular KPI #2 (Tempo de Resposta)

Proxy: média de horas entre data da `ultima_interacao` dos registros com status `novo` e a data do mesmo registro com status `qualificado` (se disponível). Se dado incompleto → reportar como "dado insuficiente — preencher manualmente".

### Etapa 4 — Calcular KPI #3 (Taxa de Fechamento)

```
fechados_semana = contar status = "fechado" na janela
perdidos_semana = contar status = "perdido" na janela
taxa = fechados / (fechados + perdidos) × 100
```

Se ambos = 0: "sem dados suficientes esta semana".

### Etapa 5 — Calcular KPI #4 (Motivo de Perda Top 1)

```
registros_perdidos = filtrar status = "perdido" na janela
moda(motivo_perda) = motivo que aparece mais vezes
```

### Etapa 6 — Calcular KPI #5 (Avaliações Google)

Contar registros em `observacoes` que contém "avaliação Google: sim" com data dentro da janela.

### Etapa 7 — Comparar com Semana Anterior

Se existir `semanal-[YYYY-W(WW-1)].md`:
- Calcular delta de cada KPI
- Sinalizar ▲ (melhora) / ▼ (piora) / → (estável)

### Etapa 8 — Gerar Alertas

| Condição | Alerta |
|----------|--------|
| Taxa de fechamento < 10% com > 5 leads | ALERTA: taxa muito baixa |
| 0 avaliações Google por 2 semanas seguidas | ALERTA: pós-venda não acionado |
| Motivo de perda top 1 = `preco-alto` por 3 semanas | ALERTA: revisar proposta de valor |
| 0 leads na semana | ALERTA: verificar GMB e canais de entrada |

---

## OUTPUT

Arquivo: `_automacao/relatorios/semanal-YYYY-WW.md`

```markdown
# KPI Semanal — Vem Passear em Jampa
**Semana:** YYYY-WW (DD/MM a DD/MM/YYYY)
**Gerado em:** YYYY-MM-DD 17:00
**Fonte:** _crm/leads.csv ([N] registros lidos)

---

## KPI #1 — Leads por Origem

| Origem | Esta semana | Semana anterior | Δ |
|--------|------------|-----------------|---|
| GMB | N | N | ▲/▼/→ |
| Site | N | N | ▲/▼/→ |
| Instagram | N | N | ▲/▼/→ |
| Indicação | N | N | ▲/▼/→ |
| Outros | N | N | ▲/▼/→ |
| **Total** | **N** | **N** | **▲/▼/→** |

## KPI #2 — Tempo Médio de Resposta

**Média:** X horas | Meta: < 2h em 80% dos casos
**Status:** [dentro da meta / fora da meta / dado insuficiente]

## KPI #3 — Taxa de Fechamento

**Fechados:** N | **Perdidos:** N | **Taxa:** X%
**Meta:** 30% | **Status:** [dentro / fora]

## KPI #4 — Motivo de Perda Top 1

**Motivo:** [slug] (N ocorrências)
**Ação sugerida:** ver `_conhecimento/motivos-de-perda.md#[slug]`

## KPI #5 — Avaliações Google Novas

**Esta semana:** N | **Meta:** +1/semana
**Status:** [dentro / fora]

---

## Alertas

[lista de alertas ou "Nenhum alerta esta semana"]

---

## Funil da Semana

novo → qualificado → proposta → fechado → perdido
 N        N            N          N          N

---

*Gerado por painel-kpi-vempassear v1.0 | Ciclo 5 Jarvis*
```

---

## COMPATIBILIDADE

| Propriedade | Valor |
|-------------|-------|
| Acionamento | Toda sexta 17h via Jarvis Ciclo 5 (ou `"gera painel KPI"` por Murillo) |
| Depende de | `_crm/leads.csv` |
| Saída | `_automacao/relatorios/semanal-YYYY-WW.md` |
| Lido por | Ciclo 5 Jarvis → Telegram (fase futura) |

---

*Skill v1.0 | Criado 2026-04-29 | Squad Comercial — standalone (Ciclo 5)*
