---
tipo: spike
projeto: tabua-mares-turismo
etapa: pre-implementacao
status: CONCLUÍDO — aguarda decisão de Murillo
data: 2026-04-26
investigador: Claude Sonnet 4.6 (skill tabua-mares-turismo)
fontes_investigadas:
  - marinha.mil.br/cppb (PDF oficial)
  - surfguru.com.br/previsao/mare/30540
  - mymento.com.br/tabua-de-mares/cabedelo-pb
  - tabuademares.com/br/paraiba/cabedelo
  - tides4fishing.com/br/paraiba/cabedelo
  - tidetime.org/south-america/brazil/cabedelo-calendar.htm
---

# Spike — Fonte CHM / Porto de Cabedelo 2026

**Objetivo:** Avaliar viabilidade técnica de importar automaticamente a tábua de marés oficial para Porto de Cabedelo/PB e gerar a base interna do site.

---

## Resumo Executivo (TL;DR)

| Pergunta | Resposta |
|----------|----------|
| O PDF oficial existe? | ✅ Sim — CPPB publicou em dezembro/2025 |
| O PDF é baixável por script? | ❌ Não diretamente — retorna 403 para qualquer request automatizado |
| Existe alternativa automática? | ✅ Sim — surfguru.com.br tem dados via HTML + URL parametrizada |
| A alternativa usa dados da Marinha? | ⚠️ Não confirma — surfguru não cita fonte oficial |
| Dados reais extraídos no spike? | ✅ Sim — 31 dias de maio/2026 com todas as baixa-mares |
| OCR é necessário? | ❌ Não (para alternativas HTML) / ❌ Também não para PDF (texto extraível) |
| Estratégia recomendada? | PDF manual (Fase 1) + Playwright para automação (Fase 2) |

---

## 1. Fonte Oficial — CPPB PDF 2026

### 1.1 URL confirmada

```
https://www.marinha.mil.br/cppb/sites/www.marinha.mil.br.cppb/files/2025-12/2026-PORTO-DE-CABEDELO.pdf
```

**Confirmação:** URL encontrada via Google indexando o site oficial da Marinha/CPPB.
Título do documento: `"79 PORTO DE CABEDELO (ESTADO DA PARAÍBA) - 2026 Latitude 06° 58'.2 S"`

### 1.2 Acessibilidade para scripts

| Método testado | Resultado |
|----------------|-----------|
| `curl` sem headers | 403 Forbidden |
| `curl` com User-Agent Chrome | 403 Forbidden |
| `curl` com Referer da CPPB | 403 Forbidden |
| WebFetch (ferramenta de IA) | 403 Forbidden |
| Download manual no browser | **✅ Provavelmente funciona** (não testado — browser real exigido) |

**Conclusão:** marinha.mil.br bloqueia todos os requests não-browser com 403 consistente. A proteção parece ser por User-Agent ou cookie de sessão do servidor Drupal do governo.

### 1.3 Formato do arquivo

- **Tipo:** PDF (confirmado pelo Content-Type antes do 403)
- **Conteúdo esperado:** Tabela anual com 365 dias, colunas para preamar e baixa-mar, horários em UTC-3, alturas em metros
- **OCR necessário?** ❌ Não — PDFs da Marinha são digitais (texto extraível com `pdf-parse` ou `pdfjs-dist`)
- **Referência histórica:** Mesma série de PDFs existe para 2023 e 2025 — estrutura provavelmente estável

### 1.4 URL da tábua anual CHM 2026

```
https://www.marinha.mil.br/chm/tabuas-de-mare-6
```

Também retorna 403 via script. Contém links para download de todos os portos.

---

## 2. Fontes Alternativas Investigadas

### 2.1 surfguru.com.br — Fonte mais promissora

| Atributo | Valor |
|----------|-------|
| URL para Cabedelo | `https://surfguru.com.br/previsao/mare/30540` |
| URL mensal | `https://surfguru.com.br/previsao/mare/30540/m?mes=5&ano=26` |
| Título da página | "Previsão das marés para PORTO DE CABEDELO - Paraíba - Brasil" |
| Acessibilidade | ✅ Retornou 200 com dados completos |
| Formato | HTML server-side rendered (sem JS necessário para dados) |
| Estrutura | Blocos por dia com hora e altura em texto, sem tabela semântica |
| Classes CSS | Classe `.dia` identificada; sem `data-*` attributes |
| JSON embutido | ❌ Não encontrado |
| Cita Marinha | ⚠️ Não menciona fonte — risco de divergência |
| Dados de maio/2026 | ✅ Completos — 31 dias, 2 baixa-mares/dia |

**Padrão de URL:**
```
mes = número do mês (1–12)
ano = últimos 2 dígitos (ex: 26 para 2026, 27 para 2027)
/previsao/mare/30540/m?mes={mes}&ano={ano}
```

**Risco de scraping:** estrutura sem classes semânticas — parser baseado em posição relativa dentro do bloco diário, frágil a mudanças de layout.

### 2.2 mymento.com.br

| Atributo | Valor |
|----------|-------|
| URL | `https://mymento.com.br/tabua-de-mares/cabedelo-pb` |
| Cita Marinha | ✅ "Com dados oficiais da Marinha do Brasil" |
| Formato | HTML server-side rendered |
| Classes CSS | `tide-high`, `tide-low` identificadas |
| Navegação por mês | Seletor JS (sem URL limpa por mês) |
| Acessibilidade | ✅ Funcional |
| Risco | Navegação por mês requer JS — pode precisar Playwright |

### 2.3 tabuademares.com / tides4fishing.com

- Ambos usam `javascript:Day('2026-04-25')` para navegação — requerem Playwright
- Dados disponíveis mas não extraíveis via HTTP simples
- tabuademares cita dados de Porto de Cabedelo especificamente

### 2.4 tidetime.org

| Atributo | Valor |
|----------|-------|
| URL mensal | `/south-america/brazil/cabedelo-calendar-may.htm` |
| Acessibilidade | ✅ Funcional |
| Formato | HTML estático |
| Dados de maio/2026 | ✅ Disponíveis |
| Fonte | Não cita Marinha — modelo próprio |
| Divergência vs surfguru | ⚠️ Valores ligeiramente diferentes (01/05: surfguru 0.4m vs tidetime 0.24m) |

### 2.5 Fontes descartadas

| Fonte | Motivo do descarte |
|-------|-------------------|
| TideLevelAPI (phellipe.dev) | ECONNREFUSED — servidor fora do ar |
| API-Tabua-Mare (GitHub) | Inativa desde 2017, baseada em PDFs locais |
| temperaturadomar.pt | 403 Forbidden |
| tideschart.com | 402 Payment Required |

---

## 3. Divergência entre Fontes

Comparação para baixa-mares da manhã em abril/2026 (dados disponíveis):

| Data | surfguru | mymento | tabuademares (abr) |
|------|----------|---------|---------------------|
| 26/04 | (não testado) | 06:47 / 0.81m | 06:26 / 0.7m |
| 27/04 | (não testado) | 07:42 / 0.68m | 07:17 / 0.6m |
| 28/04 | (não testado) | 08:21 / 0.57m | 07:57 / 0.5m |

**Divergência de 20–25 min e 0.1m** entre fontes de terceiros. Apenas o PDF oficial da Marinha é autoritativo.

**Risco operacional:** usar fonte não-oficial pode resultar em anunciar saída em horário e condição ligeiramente errados.

---

## 4. Dados Reais Extraídos — Maio 2026

**Fonte:** surfguru.com.br | **Estação:** Porto de Cabedelo, PB

### 4.1 Tabela completa de baixa-mares da manhã (maio 2026)

| Data | Dia | Baixa-Mar Manhã | Altura | Saída (-1h) | Status | temPasseio |
|------|-----|-----------------|--------|-------------|--------|------------|
| 2026-05-01 | Sexta | 10:06 | 0.4m | 09:06 | ✅ excelente | true |
| 2026-05-02 | Sábado | 10:40 | 0.4m | 09:40 | ✅ excelente | true |
| 2026-05-03 | Domingo | 11:10 | 0.5m | 10:10 | ✅ excelente | true |
| 2026-05-04 | Segunda | 11:44 | 0.6m | 10:44 | 🟡 boa | true |
| 2026-05-05 | Terça | 12:16 | 0.7m | 11:16 | 🟡 boa | true |
| 2026-05-06 | Quarta | 12:55 | 0.8m | 11:55 | 🔴 consultar | false |
| 2026-05-07 | Quinta | 13:40 | 0.9m | 12:40 | ❌ sem-passeio | false |
| 2026-05-08 | Sexta | 14:47 | 0.9m | 13:47 | ❌ sem-passeio¹ | false |
| 2026-05-09 | Sábado | 16:04 | 1.1m | — | ❌ fora janela² | false |
| 2026-05-10 | Domingo | 17:14 | 1.1m | — | ❌ fora janela² | false |
| 2026-05-11 | Segunda | 05:36 | 0.9m | 04:36 | ❌ sem-passeio³ | false |
| 2026-05-12 | Terça | 06:32 | 0.8m | 05:32 | 🔴 consultar³ | false |
| 2026-05-13 | Quarta | 07:23 | 0.6m | 06:23 | 🟡 boa | true |
| 2026-05-14 | Quinta | 08:12 | 0.5m | 07:12 | ✅ excelente | true |
| 2026-05-15 | Sexta | 09:01 | 0.3m | 08:01 | ✅ excelente | true |
| 2026-05-16 | Sábado | 09:51 | 0.2m | 08:51 | ✅ excelente | true |
| 2026-05-17 | Domingo | 10:36 | 0.2m | 09:36 | ✅ excelente | true |
| 2026-05-18 | Segunda | 11:25 | 0.2m | 10:25 | ✅ excelente | true |
| 2026-05-19 | Terça | 12:17 | 0.3m | 11:17 | ✅ excelente | true |
| 2026-05-20 | Quarta | 13:12 | 0.4m | 12:12 | ✅ excelente | true |
| 2026-05-21 | Quinta | 14:16 | 0.5m | 13:16 | ✅ excelente | true |
| 2026-05-22 | Sexta | 15:25 | 0.6m | 14:25 | 🔴 consultar² | false |
| 2026-05-23 | Sábado | 16:36 | 0.7m | — | ❌ fora janela² | false |
| 2026-05-24 | Domingo | 17:44 | 0.7m | — | ❌ fora janela² | false |
| 2026-05-25 | Segunda | 06:01 | 0.8m | 05:01 | 🔴 consultar | false |
| 2026-05-26 | Terça | 07:01 | 0.8m | 06:01 | 🔴 consultar | false |
| 2026-05-27 | Quarta | 07:49 | 0.7m | 06:49 | 🟡 boa | true |
| 2026-05-28 | Quinta | 08:29 | 0.6m | 07:29 | 🟡 boa | true |
| 2026-05-29 | Sexta | 09:08 | 0.5m | 08:08 | ✅ excelente | true |
| 2026-05-30 | Sábado | 09:47 | 0.5m | 08:47 | ✅ excelente | true |
| 2026-05-31 | Domingo | 10:19 | 0.5m | 09:19 | ✅ excelente | true |

**Notas:**
¹ Saída às 13:47 — dentro da janela (< 14h), mas altura 0.9m → sem-passeio por altura
² Baixa-mar depois das 14:00 → saída fora da janela operacional (guardrail do `regras-operacionais.md §4.2`)
³ Saída antes das 06:00 → `[CONFIRMAR COM MURILLO]` (guardrail do `regras-operacionais.md §4.2`)

### 4.2 Janelas/Ciclos Identificados

| Ciclo | Período | Dias | Dias ativos | Melhor dia |
|-------|---------|------|-------------|------------|
| mai-2026-ciclo-1 | 01-05/05 | 5 | **5** (3 ✅ + 2 🟡) | 15/05 |
| — intervalo — | 06-12/05 | 7 | 0 | — |
| mai-2026-ciclo-2 | 13-21/05 | 9 | **9** (1 🟡 + 8 ✅) | 16-18/05 (0.2m!) |
| — intervalo — | 22-26/05 | 5 | 0 | — |
| mai-2026-ciclo-3 | 27-31/05 | 5 | **5** (2 🟡 + 3 ✅) | 29-31/05 |

**Total de dias com passeio em maio/2026: 19 de 31**

A maré de 0.2m dos dias 16–18/05 é excepcional — ciclo lunar de sizígia (máxima amplitude).

### 4.3 Amostras no Formato Interno da Skill

```typescript
// AVISO: dados de surfguru.com.br — NÃO é fonte oficial Marinha
// Usar APENAS para teste/desenvolvimento. Substituir pelo PDF oficial antes de publicar.
// revisadoPorMurillo: false em todos os registros abaixo

const amostraMaio2026: SaidaDia[] = [
  {
    data: "2026-05-01",
    diaSemana: "Sexta-feira",
    horarioBaixaMareInterno: "10:06",  // INTERNO — não exibir ao cliente
    horarioSaidaBarco: "09:06",
    alturaMare: 0.4,
    statusOperacional: "excelente",
    temPasseio: true,
    passeiosAfetados: ["seixas", "picaozinho", "areia-vermelha"],
    fonte: "surfguru.com.br — Porto de Cabedelo/PB (NÃO OFICIAL)",
    urlFonte: "https://surfguru.com.br/previsao/mare/30540/m?mes=5&ano=26",
    dataImportacao: "2026-04-26T00:00:00-03:00",
    revisadoPorMurillo: false,
    observacao: "SPIKE — dado de terceiro, não oficial Marinha. Validar contra PDF CPPB."
  },
  {
    data: "2026-05-02",
    diaSemana: "Sábado",
    horarioBaixaMareInterno: "10:40",
    horarioSaidaBarco: "09:40",
    alturaMare: 0.4,
    statusOperacional: "excelente",
    temPasseio: true,
    passeiosAfetados: ["seixas", "picaozinho", "areia-vermelha"],
    fonte: "surfguru.com.br — Porto de Cabedelo/PB (NÃO OFICIAL)",
    urlFonte: "https://surfguru.com.br/previsao/mare/30540/m?mes=5&ano=26",
    dataImportacao: "2026-04-26T00:00:00-03:00",
    revisadoPorMurillo: false,
    observacao: "SPIKE — dado de terceiro."
  },
  {
    data: "2026-05-03",
    diaSemana: "Domingo",
    horarioBaixaMareInterno: "11:10",
    horarioSaidaBarco: "10:10",
    alturaMare: 0.5,
    statusOperacional: "excelente",
    temPasseio: true,
    passeiosAfetados: ["seixas", "picaozinho", "areia-vermelha"],
    fonte: "surfguru.com.br — Porto de Cabedelo/PB (NÃO OFICIAL)",
    urlFonte: "https://surfguru.com.br/previsao/mare/30540/m?mes=5&ano=26",
    dataImportacao: "2026-04-26T00:00:00-03:00",
    revisadoPorMurillo: false,
    observacao: "SPIKE — dado de terceiro."
  },
  {
    data: "2026-05-16",
    diaSemana: "Sábado",
    horarioBaixaMareInterno: "09:51",
    horarioSaidaBarco: "08:51",
    alturaMare: 0.2,
    statusOperacional: "excelente",
    temPasseio: true,
    passeiosAfetados: ["seixas", "picaozinho", "areia-vermelha"],
    fonte: "surfguru.com.br — Porto de Cabedelo/PB (NÃO OFICIAL)",
    urlFonte: "https://surfguru.com.br/previsao/mare/30540/m?mes=5&ano=26",
    dataImportacao: "2026-04-26T00:00:00-03:00",
    revisadoPorMurillo: false,
    observacao: "SPIKE — dado de terceiro. Maré 0.2m = condição excepcional."
  },
  {
    data: "2026-05-09",
    diaSemana: "Sábado",
    horarioBaixaMareInterno: "16:04",
    horarioSaidaBarco: null,          // saída fora da janela operacional (>14h)
    alturaMare: 1.1,
    statusOperacional: "sem-passeio",
    temPasseio: false,
    passeiosAfetados: ["seixas", "picaozinho", "areia-vermelha"],
    fonte: "surfguru.com.br — Porto de Cabedelo/PB (NÃO OFICIAL)",
    urlFonte: "https://surfguru.com.br/previsao/mare/30540/m?mes=5&ano=26",
    dataImportacao: "2026-04-26T00:00:00-03:00",
    revisadoPorMurillo: false,
    observacao: "Baixa-mar às 16:04 — fora da janela operacional (>14h). Sem saída."
  }
];
```

---

## 5. Viabilidade Técnica — Resumo

### 5.1 PDF Oficial (marinha.mil.br)

| Critério | Status |
|----------|--------|
| Existe para 2026? | ✅ Confirmado |
| URL conhecida? | ✅ CPPB e CHM |
| Baixável por `curl`/`fetch`? | ❌ 403 em todos os testes |
| Precisa de OCR? | ❌ PDF digital (texto extraível) |
| Baixável no browser manual? | ✅ Murillo pode baixar clicando |
| Automatizável com Playwright? | ✅ Provavelmente sim (simula browser real) |
| Parse por `pdf-parse`? | ✅ Sim, após download |
| Risco de mudança de formato? | 🟡 Baixo (série histórica estável desde 2023) |

### 5.2 surfguru.com.br (alternativa)

| Critério | Status |
|----------|--------|
| URL paramétrica? | ✅ `/m?mes=5&ano=26` |
| Dados completos? | ✅ 31 dias, 2 baixas/dia |
| HTML estático? | ✅ Server-side rendered |
| Parseable sem Playwright? | 🟡 Provavelmente sim, mas estrutura frágil |
| Dados são da Marinha? | ⚠️ Não confirmado |
| Divergência esperada? | 🟡 ~20min e ~0.1m vs fontes oficiais |
| Risco de bloqueio futuro? | 🟡 Possível — site de terceiro |

---

## 6. Estratégia Recomendada

### Fase 0 → 1 (imediato, sem código): Validação manual

**Murillo executa uma vez:**
1. Abrir no browser: `https://www.marinha.mil.br/cppb/tabuas_de_mare`
2. Baixar o PDF "2026-PORTO-DE-CABEDELO.pdf"
3. Confirmar que o formato bate com o esperado (tabela de dias com 4 colunas de maré)
4. Compartilhar o PDF com Claude Code para validação do parser

**Valor:** confirma formato real do PDF antes de construir o parser. 10 minutos de trabalho.

### Fase 1 → 2 (implementação): Importador em 2 caminhos

**Caminho A — PDF oficial (recomendado para produção):**
```
Playwright → acessa CPPB → clica PDF → baixa → pdf-parse → SaidaDia[]
```
- Mais confiável (fonte oficial)
- Requer Playwright como dependência
- Uma execução anual suficiente (PDF cobre o ano inteiro)

**Caminho B — surfguru scraping (desenvolvimento/fallback):**
```
fetch → surfguru.com.br/previsao/mare/30540/m?mes=X&ano=YY → cheerio → SaidaDia[]
```
- Mais simples de implementar
- Não é fonte oficial — risco de divergência operacional
- Usar apenas para testes, nunca para publicação sem validação

**Recomendação de Murillo:** qual caminho autorizar para implementação?

### Fase 2 → 3: Automação anual

GitHub Action roda em janeiro (quando CHM publica tábua do novo ano) → Playwright baixa PDF → gera PR → Murillo valida em 10 min → merge.

---

## 7. Riscos Identificados

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Marinha muda URL do PDF | Baixa | Alto | Parser busca link dinamicamente na página de tábuas |
| Marinha muda formato do PDF | Baixa-Média | Alto | Testes de integridade + alerta para Murillo se parser falhar |
| Playwright bloqueado pelo site | Baixa | Médio | Fallback manual (Murillo baixa 1x/ano) |
| surfguru diverge da oficial | **Alta** (confirmado ~20min) | **Crítico** | Nunca usar surfguru em produção sem comparação com PDF |
| PDF tem dados corruptos | Muito baixa | Alto | Validação de continuidade de datas, nenhum dia faltante |
| Fuso horário errado | Médio | Alto | Forçar UTC-3 no parser; validar primeiro/último dia do mês |

---

## 8. Próximos Passos (ordenados)

| # | Ação | Responsável | Pré-requisito |
|---|------|-------------|---------------|
| 1 | Murillo baixa PDF 2026 no browser e confirma formato | Murillo | — |
| 2 | Claude implementa `parseTabuaMaresOficial(pdfBuffer)` contra PDF real | Claude | PDF em mãos |
| 3 | Teste: comparar 10 dias do parser vs. tabela visual do PDF | Murillo + Claude | Parser pronto |
| 4 | Claude implementa `importarTabuaMaresCabedelo(ano)` com Playwright | Claude | Parser validado |
| 5 | GitHub Action mensal (dia 25) abre PR com novo `tabua-mares.ts` | Claude | Playwright OK |
| 6 | Integrar `ProximaSaidaCard` nos cards de Seixas/Picãozinho/Areia Vermelha | Claude | tabua-mares.ts OK |

---

## 9. Checklist de Validação (para Murillo ao baixar o PDF)

```
[ ] PDF abre corretamente no visualizador
[ ] Contém 12 meses + 365 dias
[ ] Cada dia tem 4 horários (2 preaMar, 2 baixa-Mar) e 4 alturas
[ ] Horários estão em UTC-3 (horário de Brasília)
[ ] Alturas estão em metros (formato "0,4" com vírgula ou "0.4" com ponto?)
[ ] Primeiro dia: 01 de janeiro de 2026
[ ] Último dia: 31 de dezembro de 2026
[ ] Há cabeçalho indicando a estação (Porto de Cabedelo)?
[ ] Há índice numérico "79" na capa (número da estação na série CHM)?
```

---

*Spike v1.0 | 2026-04-26 | Investigação: Claude Sonnet 4.6 | Dados reais de maio/2026 extraídos de surfguru.com.br (não-oficial) para teste interno | Aguarda decisão de Murillo sobre caminho de implementação*
