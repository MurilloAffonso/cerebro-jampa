# Regras Operacionais — Tábua de Marés

Referência da skill `tabua-mares-turismo`. Carregar no Passo 1 do processo.

---

## 1. Passeios Dependentes de Maré

Apenas estes 3 passeios dependem da tábua de marés:

| Passeio | Slug | Categoria | Observação |
|---------|------|-----------|------------|
| Piscinas Naturais do Seixas | `seixas` | `piscinas-naturais` | Corais em ponto mais oriental das Américas |
| Picãozinho | `picaozinho` | `piscinas-naturais` | Banco de areia submerso em JP |
| Areia Vermelha | `areia-vermelha` | `litoral-norte` | Banco de areia em Cabedelo |

**Todos os outros passeios** da Vem Passear em Jampa **não dependem de maré** e não são processados por esta skill.

---

## 2. Estação de Referência

| Campo | Valor |
|-------|-------|
| Órgão | Marinha do Brasil — Centro de Hidrografia da Marinha (CHM) |
| Estação | Porto de Cabedelo / PB |
| URL de referência | `https://www.marinha.mil.br/chm/dados-do-sgbd-hidro/tabuas-de-mare` |
| Formato | Tabela mensal com horários de preamar e baixa-mar e respectivas alturas |

**Regra:** sempre usar a estação Porto de Cabedelo. Não usar tabelas de outras estações (Recife, Fortaleza, Salvador) — diferença de até 30–40 min no timing.

---

## 3. Cálculo de Horário de Saída

```
horarioSaida = horarioBaixaMar − 60 minutos
```

**Exemplos:**
- Baixa-mar 09:40 → Saída 08:40
- Baixa-mar 07:12 → Saída 06:12
- Baixa-mar 14:30 → Saída 13:30

**Regras complementares:**
- Se o dia tiver 2 baixas-mares: usar a de **menor altura** (piscinas mais expostas = melhor para passeio)
- Se a 2ª baixa-mar for de melhor altura mas cair após as 14:00, usar a 1ª (horário operacional razoável para turista)
- Horário de saída nunca antes das 06:00 — se cálculo resultar menor, `[CONFIRMAR COM MURILLO]`
- Horário de saída nunca após as 14:00 — se cálculo resultar maior, marcar `status: "consultar"` mesmo que altura seja favorável

---

## 4. Classificação de Status Operacional

| Altura da Maré | Status | Código | Exibe ao cliente |
|----------------|--------|--------|-----------------|
| 0.0m – 0.5m | Excelente | `"excelente"` | ✅ Excelente |
| 0.6m – 0.7m | Boa | `"boa"` | 🟡 Boa |
| 0.8m | Consultar disponibilidade | `"consultar"` | 🔴 Consultar |
| 0.9m ou acima | Normalmente sem passeio | `"sem-passeio"` | ❌ Indisponível |

**Campo `ativo`:**
- `true`: status `"excelente"` ou `"boa"` (saída confirmada em princípio)
- `false`: status `"consultar"` ou `"sem-passeio"` (saída improvável ou cancelada)

**Responsabilidade final:** Murillo confirma ou cancela cada saída — o status é orientativo, não definitivo.

---

## 5. O Que o Cliente Vê

O cliente **nunca** vê o horário da baixa-mar nem a altura bruta como número isolado.

O cliente vê:

| Campo | Exemplo | Nota |
|-------|---------|------|
| Dia da semana | Sábado | Uppercase, nome completo |
| Data formatada | 03/05/2026 | Ou "3 de maio" dependendo do contexto |
| Horário de saída | 08:40 | Horário da baixa-mar − 1h |
| Status operacional | ✅ Excelente | Label amigável, não a altura numérica |
| Altura (opcional) | 0.4m | Só exibir em contexto educativo/FAQ |

**O que NÃO aparece para o cliente:**
- Horário da baixa-mar (dado interno operacional)
- Termos técnicos como "preamar", "sizígia", "quadratura"
- Tabela bruta da CHM
- Altura em contextos que possam gerar comparação ou confusão

---

## 6. Uma Saída Por Dia

- Operação: **uma única saída por dia** para cada passeio
- Não há saída de manhã + saída de tarde no mesmo dia (escala atual da Vem Passear em Jampa)
- Se futuramente houver múltiplas saídas por dia, criar extensão desta regra

---

## 7. Janelas/Ciclos de Saída

A maré segue ciclos lunares (~29.5 dias). Dentro de cada mês, há aproximadamente **2 janelas** de marés baixas favoráveis (~14 dias de baixa adequada divididos em 2 blocos, com ~14 dias de marés altas entre eles).

**Como agrupar:**
- Identificar sequências contínuas de dias com `ativo: true`
- Cada sequência = 1 `JanelaSaida`
- Dias com `ativo: false` que quebram a sequência = fim da janela anterior, início da próxima (se houver)
- Dias isolados (`ativo: true` cercado por `false`) = janela de 1 dia

**Nomenclatura:** `"[mes-abbr]-[ano]-ciclo-[n]"` (ex: `"mai-2026-ciclo-1"`)

---

## 8. Próxima Saída (para Card no Site)

O card do passeio (PasseioCard e página de passeio) exibe a próxima saída disponível.

**Algoritmo:**
1. Pegar array `SaidaDia[]` ordenado por data crescente
2. Filtrar onde `ativo: true`
3. Filtrar onde `data >= dataHoje` (data atual do servidor)
4. Pegar o primeiro resultado = `proximaSaida`
5. Se vazio: `proximaSaida: null`

**Comportamento no card:**
- `proximaSaida` preenchida → exibir: dia da semana, data, horário, status
- `proximaSaida: null` → exibir: "Consulte próximas saídas" + link WhatsApp

---

## 9. Ciclo de Atualização

- Murillo fornece dados da CHM mensalmente (idealmente até o dia 25 do mês anterior)
- Skill processa os dados e gera novo bloco TypeScript
- Murillo valida checklist antes de publicar
- `programador-de-site` atualiza `data/tabua-mares.ts` e redeployar

**Frequência:** mensal, ou conforme disponibilidade da tabela CHM.

---

*Regras v1.0 | Aprovadas por Murillo em 2026-04-26 | Referência: operação real da Vem Passear em Jampa*
