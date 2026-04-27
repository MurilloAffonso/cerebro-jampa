# Regras Operacionais — Tábua de Marés

Referência da skill `tabua-mares-turismo`. Carregar no Passo 1 do processo.

**Versão:** 1.3 | **Atualizada:** 2026-04-27 | **Aprovado por:** Murillo

---

## 1. Fontes de Dados

### 1.1 Fonte Oficial — Marinha/CHM (produção)

| Campo | Valor |
|-------|-------|
| Órgão | Marinha do Brasil — Centro de Hidrografia da Marinha (CHM) |
| Estação | **Porto de Cabedelo / PB** |
| URL de referência | `https://www.marinha.mil.br/chm/dados-do-sgbd-hidro/tabuas-de-mare` |
| Formato | Tabela mensal/anual com horários de preamar e baixa-mar e respectivas alturas |
| Fuso | Horário de Brasília (UTC−3) |
| `fonteTipo` | `"oficial-marinha"` |
| `confiancaFonte` | `"alta"` |

**Regra:** sempre usar a estação **Porto de Cabedelo**. Não usar tabelas de outras estações (Recife, Fortaleza, Salvador) — diferença de até 30–40 min no timing.

**Atenção:** o site da Marinha usa Cloudflare com proteção ativa contra bots. Download manual no browser é o único método garantido. Não tentar burlar Cloudflare por script — gera arquivo HTML inválido sem aviso.

### 1.2 Fonte Operacional de Referência (validação prática)

| Campo | Valor |
|-------|-------|
| Site | `tabuademares.com/br/paraiba/joao-pessoa` |
| Uso | Validação cruzada e referência operacional prática |
| Cita Marinha? | Sim — site indica dados baseados na Marinha do Brasil |
| `fonteTipo` | `"operacional-referencia"` |
| `confiancaFonte` | `"media"` |

**Quando usar:** validação cruzada após obter dados da CHM; referência rápida para checar horários antes de Murillo confirmar; não usar como fonte primária em produção sem comparação com CHM.

**Divergência esperada vs CHM:** ~0 a 25 minutos (fonte usa dados CHM como base, mas pode ter diferença de arredondamento).

---

## 2. Coleta Automática é o Caminho Principal

A solução final **não é manual**. A skill orienta a criação de um importador que:

1. Busca / baixa a tábua oficial da Marinha/CHM para Porto de Cabedelo/PB.
2. Faz parse dos dados (HTML ou PDF) e extrai dia, horário e altura da baixa-mar.
3. Aplica regras operacionais (cálculo de saída, classificação, agrupamento).
4. Gera `_site/data/tabua-mares.ts` automaticamente.
5. Marca cada registro com `fonte`, `urlFonte` e `dataImportacao`.
6. Solicita validação de Murillo (`revisadoPorMurillo`) antes de publicar.

### Coleta manual = fallback de segurança

A entrada manual de Murillo permanece disponível **apenas** quando:
- A fonte oficial está fora do ar
- Mudança de layout quebrou o parser
- Validação detectou divergência operacional e exige correção pontual

**Default desejado:** automação. **Default permitido em emergência:** manual.

---

## 3. Passeios Dependentes de Maré

Apenas estes 3 passeios dependem da tábua de marés:

| Passeio | Slug | Categoria |
|---------|------|-----------|
| Piscinas Naturais do Seixas | `seixas` | `piscinas-naturais` |
| Picãozinho | `picaozinho` | `piscinas-naturais` |
| Areia Vermelha | `areia-vermelha` | `litoral-norte` |

Os outros passeios da Vem Passear em Jampa **não dependem de maré** e não passam por esta skill.

---

## 4. Regra de Cálculo da Saída

### 4.1 Qual baixa-mar usar como referência operacional

**Regra única:** usar a **baixa-mar da manhã** como referência interna.

- A baixa-mar operacional é aquela que cai na janela 05:00–14:59 (hora da maré)
- A baixa-mar da tarde (se houver) é ignorada — operação atual não tem saída de tarde
- Se o único horário de baixa-mar do dia cair fora dessa janela, tratar como `"sem-passeio"` (sem janela operacional)

**Por que pela manhã:**
- A operação real acontece de manhã (turista chega cedo, evita sol forte do meio-dia)
- Garante uma única saída por dia (§5)
- Evita ambiguidade quando o dia tem duas baixas-mares em janelas diferentes

### 4.2 Fórmula da Saída Sugerida (grade operacional de 30 minutos)

Os barcos operam em uma grade de saída em blocos de 30 minutos. O horário sugerido é calculado assim:

```
horarioSaidaSugerido = max( floor30(horarioBaixaMareOperacional − 15min), 07:00 )
```

Onde `floor30(t)` arredonda o horário `t` para baixo ao múltiplo de 30 minutos mais próximo.

**Tabela de referência (validada por Murillo):**

| Baixa-mar | Cálculo | floor30 | Saída sugerida |
|-----------|---------|---------|----------------|
| 07:14 | 06:59 | 06:30 | **07:00** ← mínimo aplicado |
| 07:54 | 07:39 | 07:30 | **07:30** |
| 08:30 | 08:15 | 08:00 | **08:00** |
| 09:03 | 08:48 | 08:30 | **08:30** |
| 09:35 | 09:20 | 09:00 | **09:00** |
| 10:06 | 09:51 | 09:30 | **09:30** |
| 11:30 | 11:15 | 11:00 | **11:00** |

**Implementação da função `floor30(t)`:**
```typescript
function floor30(totalMinutos: number): number {
  return Math.floor(totalMinutos / 30) * 30;
}

function calcularSaidaSugerida(horarioBaixaMare: string): string {
  const [h, m] = horarioBaixaMare.split(':').map(Number);
  const totalMin = h * 60 + m - 15;          // baixaMar − 15min
  const sugerido = floor30(totalMin);          // arredonda para baixo ao múltiplo de 30
  const efetivo = Math.max(sugerido, 7 * 60); // mínimo 07:00
  const nh = Math.floor(efetivo / 60);
  const nm = efetivo % 60;
  return `${String(nh).padStart(2,'0')}:${String(nm).padStart(2,'0')}`;
}
```

### 4.3 Saída Confirmada — Override Manual

Murillo ou o operador pode definir `horarioSaidaConfirmado` para substituir a sugestão automática:

- **Quando usar override:** condições especiais do dia, barco em manutenção, grupo privado com horário diferente, discrepância entre CHM e situação real
- **`horarioSaidaConfirmado`** sobrescreve `horarioSaidaSugerido` na exibição ao cliente
- **`horarioSaidaExibido`** = `horarioSaidaConfirmado ?? horarioSaidaSugerido` — sempre público

### 4.4 Guardrails de horário

- Saída sugerida antes de 07:00 → usar 07:00 como mínimo (já embutido na fórmula)
- Baixa-mar antes de 05:00 → sem janela operacional — `statusOperacional: "sem-passeio"`, `horarioSaidaSugerido: null`
- Baixa-mar após 14:59 → fora da janela da manhã — tratar como "sem janela operacional"
- Saída sugerida após 14:00 → marcar `statusOperacional: "consultar"` independentemente da altura

---

## 5. Regra de Uma Saída Por Dia

- Operação: **uma única saída por dia** para cada passeio
- Não há saída de manhã + saída de tarde no mesmo dia
- Mesmo com 2 baixas-mares favoráveis, escolher apenas a da manhã (§4.1)

---

## 6. Regra de Classificação Operacional

| Altura da Maré | Status | Código | Exibição ao Cliente |
|----------------|--------|--------|---------------------|
| 0.0m – 0.5m | Excelente | `"excelente"` | ✅ Excelente |
| 0.6m – 0.7m | Boa | `"boa"` | 🟡 Boa |
| 0.8m | Consultar disponibilidade | `"consultar"` | 🔴 Consultar |
| 0.9m ou acima | Normalmente sem passeio | `"sem-passeio"` | ❌ Indisponível |

**Campo `temPasseio`:**
- `true`: status `"excelente"` ou `"boa"`
- `false`: status `"consultar"` ou `"sem-passeio"`

**Decisão final é de Murillo** — o status é orientativo, não definitivo.

---

## 7. Regra de Janelas / Ciclos de Saída

A tábua de marés **NÃO segue agenda fixa semanal**. Cada mês é analisado dia a dia, e janelas surgem conforme o ciclo lunar (~29.5 dias).

**Como funciona:**
- Vários dias consecutivos com maré entre 0.0 e 0.7m → **janela ativa** (saídas confirmadas)
- Dias com maré 0.8m → **consultar disponibilidade** (interrompem a janela)
- Dias com maré 0.9m+ → **sem saída** (janela termina)
- Quando a maré volta a baixar (após 7–10 dias típicos), inicia **nova janela**

**Algoritmo de agrupamento (`agruparJanelasDeSaida`):**
1. Varrer todos os dias do mês em ordem cronológica
2. Identificar sequências contínuas de `temPasseio: true`
3. Cada sequência = 1 janela com `cicloId`
4. Dias `temPasseio: false` quebram a sequência atual e abrem espaço para nova janela
5. Dias isolados (`true` cercados por `false`) são janelas de 1 dia

**Nomenclatura de ciclo:** `"[mes-abbr]-[ano]-ciclo-[n]"` — ex: `"mai-2026-ciclo-1"`, `"mai-2026-ciclo-2"`

**Tipicamente:** ~2 janelas por mês (uma a cada ~14 dias), com 3–5 dias úteis cada.

---

## 8. Regra de Exibição para o Cliente

O cliente vê **apenas estes 5 campos** por saída:

| Campo | Fonte no schema | Exemplo |
|-------|----------------|---------|
| Dia da semana | `diaSemana` | Segunda |
| Data | `data` | 27/05 |
| Horário de saída | `horarioSaidaExibido` | 07h30 |
| Altura da maré | `alturaMare` | 0.6m |
| Status operacional | `statusOperacional` | Boa |

`horarioSaidaExibido` = `horarioSaidaConfirmado` se existir, caso contrário `horarioSaidaSugerido`.

### Linha padrão exibida ao cliente:

> **Segunda 27/05 — Saída 07h30 — Maré 0.6m — Boa**

### O Que NUNCA Aparece para o Cliente

- ❌ `horarioBaixaMareInterno` — dado interno de cálculo e auditoria
- ❌ `horarioSaidaSugerido` — dado intermediário de cálculo
- ❌ `horarioSaidaConfirmado` — dado interno de operação
- ❌ Termos técnicos: "preamar", "sizígia", "quadratura", "amplitude"
- ❌ Tabela bruta da CHM
- ❌ `urlFonte`, `dataImportacao`, `revisadoPorMurillo`, `overrideManual` — metadados internos

---

## 9. Regra para Cards (Próxima Saída Automática)

Os cards dos passeios dependentes de maré (Seixas, Picãozinho, Areia Vermelha) **devem mostrar automaticamente** a próxima saída disponível.

### Comportamento Esperado

**Quando há próxima saída:**
> **Próxima saída: Terça, 28/04 — 07h30**

**Quando não há próxima saída cadastrada:**
> **Consulte próximas saídas**
> _(linkar para WhatsApp)_

### Regras Invioláveis dos Cards

- ❌ **Nunca usar data fixa hardcoded** no card
- ❌ **Nunca exigir atualização manual semanal** do desenvolvedor
- ✅ Cálculo automático: `proximaSaida` = primeiro dia onde `temPasseio: true` E `data >= hoje`
- ✅ Se base de dados expirou ou está vazia → fallback "Consulte próximas saídas"
- ✅ Sem `proximaSaida` cadastrada para o passeio → fallback igual

---

## 10. Regra de Validação Manual por Murillo

Toda saída de dados desta skill — **inclusive dados importados automaticamente** — passa por checklist humano antes de publicar:

```
[ ] Horários de saída conferem com a tábua original?
[ ] Status operacional faz sentido para cada dia?
[ ] Janelas/ciclos agrupados corretamente?
[ ] Próxima saída é o dia correto (a partir de hoje)?
[ ] Nenhum dia inventado ou ausente?
[ ] Fuso horário correto (UTC−3, sem DST)?
[ ] urlFonte e dataImportacao preenchidos?
[ ] Considerei vento, eventos sazonais, manutenção do barco?
```

**Campo `revisadoPorMurillo: true`** só é marcado após esse checklist.

**Sem revisão = sem publicação.** Importador automático **gera PR** — Murillo aprova; nenhuma automação publica direto.

---

## 11. O Que NUNCA Fazer

1. ❌ **Inventar datas, alturas ou horários** — só usar dados da CHM
2. ❌ **Mostrar `horarioBaixaMareInterno` ao cliente** — é dado interno
3. ❌ **Mostrar `horarioSaidaSugerido` ou `horarioSaidaConfirmado` diretamente** — usar sempre `horarioSaidaExibido`
4. ❌ **Assumir agenda fixa semanal** — janelas variam por ciclo lunar
5. ❌ **Hardcode de próxima saída** em card — sempre cálculo dinâmico
6. ❌ **Publicar sem revisão de Murillo** — `revisadoPorMurillo` deve ser `true`
7. ❌ **Usar tabela de outra estação** — só Porto de Cabedelo/PB
8. ❌ **Prometer saída** sem confirmação operacional
9. ❌ **Dar fallback silencioso** com data desatualizada — se expirou, mostrar "Consulte próximas saídas"
10. ❌ **Cancelar passeio automaticamente** — Murillo decide cancelamentos
11. ❌ **Fazer importador publicar direto em produção** — sempre via PR com checklist
12. ❌ **Tentar burlar Cloudflare da Marinha por script** — download manual no browser é o único método confiável

---

## 12. Ciclo de Atualização

### Cenário-alvo (com importador automático)
- Importador roda mensalmente (ou anualmente, na Fase 3)
- Abre PR com novo `data/tabua-mares.ts`
- Murillo revisa, valida checklist, aprova
- Merge → deploy automático

### Cenário de fallback (sem importador disponível)
- Murillo fornece dados manualmente até dia 25 do mês anterior
- Skill processa e gera bloco TypeScript
- Murillo valida com checklist do §10
- `programador-de-site` atualiza e deploya

**Frequência alvo:** mensal (Fase 1–2) → anual (Fase 3+).

---

*Regras v1.3 | Aprovadas por Murillo em 2026-04-27 | Operação: Vem Passear em Jampa*
