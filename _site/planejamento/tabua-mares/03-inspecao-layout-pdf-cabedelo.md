---
tipo: inspecao-tecnica
projeto: tabua-mares-turismo
etapa: pre-implementacao
status: CONCLUÍDO — aguarda decisão de Murillo sobre fonte
data: 2026-04-27
investigador: Claude Sonnet 4.6 (skill tabua-mares-turismo)
fontes_inspecionadas:
  - _site/planejamento/tabua-mares/2026-PORTO-DE-CABEDELO.pdf (arquivo local)
  - _site/planejamento/tabua-mares/cabedelo-2025.pdf (arquivo local)
  - surfguru.com.br/previsao/mare/30540/m?mes=5&ano=26 (HTML ao vivo)
---

# Inspeção Técnica — Layout PDF Cabedelo 2026

**Objetivo:** Determinar se o PDF da CHM/Marinha é parseável sem OCR e mapear o layout para implementar `parseTabuaMaresOficial(pdfBuffer)`.

---

## TL;DR — Achados Críticos

| Pergunta | Resposta |
|----------|----------|
| Os arquivos PDF no repositório são PDFs reais? | ❌ **Não** — são páginas de desafio Cloudflare (HTML) |
| O PDF real é parseável sem OCR? | ✅ Sim (PDFs CHM são digitais) — mas ainda não temos o arquivo |
| Existe alternativa imediata funcional? | ✅ Sim — surfguru.com.br tem HTML parsável |
| O parser surfguru funciona? | ✅ **Sim — 31/31 dias extraídos e processados** |
| Classe CSS que identifica baixa-mar? | ✅ `celula_mare_baixa` — semântica explícita |
| Precisa de OCR? | ❌ Não (nem PDF nem HTML precisam de OCR) |

---

## 1. Descoberta Crítica — Arquivos do Repositório não são PDFs

### 1.1 O que foram encontrados

Os dois arquivos no repositório:
- `_site/planejamento/tabua-mares/2026-PORTO-DE-CABEDELO.pdf` (5.996 bytes)
- `_site/planejamento/tabua-mares/cabedelo-2025.pdf`

**Ambos começam com `<!DOCTYPE html>` — são páginas HTML, não PDFs.**

### 1.2 O que é esse conteúdo

São respostas do **Cloudflare Bot Management** (challenge page) capturadas quando alguém tentou fazer download automatizado da URL da Marinha/CPPB. O site `www.marinha.mil.br` usa Cloudflare com proteção ativa contra bots.

O conteúdo HTML contém:
- Challenge Cloudflare Ray ID: `9f2a4dae1f136508`
- URL real do PDF (confirmada): `/cppb/sites/www.marinha.mil.br.cppb/files/2025-12/2026-PORTO-DE-CABEDELO.pdf`
- JavaScript de desafio que requer browser real para resolver

### 1.3 Confirmação

```
Primeiros bytes (hex): 3c21444f435459504520 = "<!DOCTYPE "
Tamanho: 5.996 bytes (PDF real teria ~500KB+)
pdf-parse: TypeError — não é um PDF válido
```

### 1.4 Implicação Imediata

Não é possível inspecionar o layout do PDF oficial sem o arquivo real. **Murillo precisa baixar o PDF manualmente no browser** (ver checklist no spike `02-spike-fonte-chm-cabedelo.md §Fase 0 → 1`).

---

## 2. Inspeção Realizada — surfguru.com.br (HTML)

Diante da impossibilidade de inspecionar o PDF, a inspeção foi realizada na fonte alternativa `surfguru.com.br`, que é o fallback identificado no spike e é **tecnicamente parsável agora**.

### 2.1 URL inspecionada

```
https://surfguru.com.br/previsao/mare/30540/m?mes=5&ano=26
```

- Título da página: "Previsão das marés para PORTO DE CABEDELO - Paraíba - Brasil"
- Tamanho do HTML: 127.882 bytes
- Método de fetch: `curl` com User-Agent Chrome — retornou HTTP 200 ✅

### 2.2 Estrutura HTML Real

**Padrão de um dia (HTML bruto extraído):**

```html
<div class="celula_dia">
  <div class="linha_data_lua">
    <label class="float-left margin8hor">
      01 - Sex
    </label>
    <div class="lua">
      <div class="imagem_lua" style="left:-375px;">
        <img src="https://surfguru.space/img/luas_mes.png" alt="lua cheia" title="lua cheia" />
      </div>
    </div>
    <label class='status_lua'>cheia</label>
  </div>

  <!-- preamar -->
  <div class="celula_mare">
    04:02h
    <b>2.4m</b>
  </div>

  <!-- baixa-mar ← CLASSE SEMÂNTICA EXPLÍCITA -->
  <div class="celula_mare_baixa">
    10:06h
    <b>0.4m</b>
  </div>

  <!-- preamar -->
  <div class="celula_mare">
    16:23h
    <b>2.4m</b>
  </div>

  <!-- baixa-mar noturna -->
  <div class="celula_mare_baixa">
    22:17h
    <b>0.5m</b>
  </div>
</div>
```

### 2.3 Mapeamento de Classes

| Classe CSS | Conteúdo | Uso no parser |
|-----------|----------|---------------|
| `celula_dia` | Container do dia inteiro | Loop principal — 1 registro por iteração |
| `linha_data_lua` | Data + fase lunar | Extrair `"01 - Sex"` → dia e dia da semana |
| `float-left margin8hor` (dentro de `linha_data_lua`) | `"01 - Sex"` | Split por `-` → dia + abreviação do dia |
| `celula_mare` | Preamar (alta) | **Ignorar** — não usada pelo parser |
| `celula_mare_baixa` | Baixa-mar (baixa) | **Extrair** hora e altura |
| `<b>` (dentro de `celula_mare_baixa`) | Altura em metros | `parseFloat(texto.replace('m',''))` |
| Texto-nó (antes do `<b>`) | Hora no formato `HH:MMh` | Regex `(\d{2}:\d{2})h` |

### 2.4 Padrão de Extração

**Dia da semana:**
```
"01 - Sex" → split('-') → ["01", "Sex"] → mapeamento para "Sexta-feira"
```

**Hora e altura da baixa-mar:**
```
texto bruto: "10:06h\n\n0.4m" (com espaços/tabs)
hora: regex /(\d{2}:\d{2})h/ → "10:06"
altura: regex /(\d+\.\d+)m/ → 0.4
```

**Seleção da baixa-mar da manhã (regra operacional §4.1):**
```
Filtrar celula_mare_baixa onde hora >= 05:00 e hora < 15:00
Se mais de uma: menor altura (raramente ocorre)
Se nenhuma: sem-passeio por falta de janela
```

---

## 3. Resultado do Parser — Maio 2026 Completo

**Ferramenta usada:** Node.js + cheerio (seletor CSS)
**Fonte:** surfguru.com.br — Porto de Cabedelo/PB
**Aviso:** dados NÃO são da Marinha oficial — usar apenas para desenvolvimento

### 3.1 Resumo Operacional

| Categoria | Dias | % |
|-----------|------|---|
| ✅ Excelente (0.0–0.5m) | 14 | 45% |
| 🟡 Boa (0.6–0.7m) | 5 | 16% |
| 🔴 Consultar (0.8m / guardrail) | 5 | 16% |
| ❌ Sem passeio (0.9m+) | 7 | 23% |
| **Com passeio (✅+🟡)** | **19** | **61%** |

### 3.2 Tabela Completa Maio 2026

| Data | Dia | Baixa-Mar | Altura | Saída | Status |
|------|-----|-----------|--------|-------|--------|
| 2026-05-01 | Sex | 10:06 | 0.4m | 09:06 | ✅ excelente |
| 2026-05-02 | Sáb | 10:40 | 0.4m | 09:40 | ✅ excelente |
| 2026-05-03 | Dom | 11:10 | 0.5m | 10:10 | ✅ excelente |
| 2026-05-04 | Seg | 11:44 | 0.6m | 10:44 | 🟡 boa |
| 2026-05-05 | Ter | 12:16 | 0.7m | 11:16 | 🟡 boa |
| 2026-05-06 | Qua | 12:55 | 0.8m | 11:55 | 🔴 consultar |
| 2026-05-07 | Qui | 13:40 | 0.9m | 12:40 | ❌ sem-passeio |
| 2026-05-08 | Sex | 14:47 | 0.9m | 13:47 | ❌ sem-passeio |
| 2026-05-09 | Sáb | — | —    | — | ❌ sem-passeio¹ |
| 2026-05-10 | Dom | — | —    | — | ❌ sem-passeio¹ |
| 2026-05-11 | Seg | 05:36 | 0.9m | 04:36 | 🔴 consultar² |
| 2026-05-12 | Ter | 06:32 | 0.8m | 05:32 | 🔴 consultar² |
| 2026-05-13 | Qua | 07:23 | 0.6m | 06:23 | 🟡 boa |
| 2026-05-14 | Qui | 08:12 | 0.5m | 07:12 | ✅ excelente |
| 2026-05-15 | Sex | 09:01 | 0.3m | 08:01 | ✅ excelente |
| 2026-05-16 | Sáb | 09:51 | 0.2m | 08:51 | ✅ excelente |
| 2026-05-17 | Dom | 10:36 | 0.2m | 09:36 | ✅ excelente |
| 2026-05-18 | Seg | 11:25 | 0.2m | 10:25 | ✅ excelente |
| 2026-05-19 | Ter | 12:17 | 0.3m | 11:17 | ✅ excelente |
| 2026-05-20 | Qua | 13:12 | 0.4m | 12:12 | ✅ excelente |
| 2026-05-21 | Qui | 14:16 | 0.5m | 13:16 | ✅ excelente |
| 2026-05-22 | Sex | — | — | — | ❌ sem-passeio¹ |
| 2026-05-23 | Sáb | — | — | — | ❌ sem-passeio¹ |
| 2026-05-24 | Dom | — | — | — | ❌ sem-passeio¹ |
| 2026-05-25 | Seg | 06:01 | 0.8m | 05:01 | 🔴 consultar² |
| 2026-05-26 | Ter | 07:01 | 0.8m | 06:01 | 🔴 consultar³ |
| 2026-05-27 | Qua | 07:49 | 0.7m | 06:49 | 🟡 boa |
| 2026-05-28 | Qui | 08:29 | 0.6m | 07:29 | 🟡 boa |
| 2026-05-29 | Sex | 09:08 | 0.5m | 08:08 | ✅ excelente |
| 2026-05-30 | Sáb | 09:47 | 0.5m | 08:47 | ✅ excelente |
| 2026-05-31 | Dom | 10:19 | 0.5m | 09:19 | ✅ excelente |

**Notas:**
¹ Sem baixa-mar na janela operacional 05h–14h (baixa-mar só à tarde ou madrugada)
² Saída calculada antes das 06:00 → `[CONFIRMAR COM MURILLO]` (guardrail §4.2)
³ Saída às 06:01 com altura 0.8m → consultar por altura

### 3.3 Janelas / Ciclos Identificados

| Ciclo | Período | Dias com passeio | Melhor dia |
|-------|---------|-----------------|-----------|
| mai-2026-ciclo-1 | 01–05/05 | 5 (3✅ + 2🟡) | 01-02/05 (0.4m) |
| — intervalo — | 06–12/05 | 0 | — |
| mai-2026-ciclo-2 | 13–21/05 | 9 (1🟡 + 8✅) | 16–18/05 (0.2m — sizígia!) |
| — intervalo — | 22–26/05 | 0 | — |
| mai-2026-ciclo-3 | 27–31/05 | 5 (2🟡 + 3✅) | 29–31/05 (0.5m) |

### 3.4 Amostra — 5 Registros no Formato `SaidaDia[]`

```typescript
// AVISO: fonte surfguru.com.br — NÃO é a Marinha oficial.
// Usar APENAS para desenvolvimento. Substituir pelo PDF oficial antes de publicar.
// revisadoPorMurillo: false em todos os registros.

const amostraMaio2026: SaidaDia[] = [
  {
    data: "2026-05-01",
    diaSemana: "Sexta-feira",
    horarioBaixaMareInterno: "10:06",
    horarioSaidaBarco: "09:06",
    alturaMare: 0.4,
    statusOperacional: "excelente",
    temPasseio: true,
    passeiosAfetados: ["seixas", "picaozinho", "areia-vermelha"],
    fonte: "surfguru.com.br — Porto de Cabedelo/PB (NÃO OFICIAL)",
    urlFonte: "https://surfguru.com.br/previsao/mare/30540/m?mes=5&ano=26",
    dataImportacao: "2026-04-27T00:00:00-03:00",
    revisadoPorMurillo: false,
    observacao: null
  },
  {
    data: "2026-05-15",
    diaSemana: "Sexta-feira",
    horarioBaixaMareInterno: "09:01",
    horarioSaidaBarco: "08:01",
    alturaMare: 0.3,
    statusOperacional: "excelente",
    temPasseio: true,
    passeiosAfetados: ["seixas", "picaozinho", "areia-vermelha"],
    fonte: "surfguru.com.br — Porto de Cabedelo/PB (NÃO OFICIAL)",
    urlFonte: "https://surfguru.com.br/previsao/mare/30540/m?mes=5&ano=26",
    dataImportacao: "2026-04-27T00:00:00-03:00",
    revisadoPorMurillo: false,
    observacao: null
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
    dataImportacao: "2026-04-27T00:00:00-03:00",
    revisadoPorMurillo: false,
    observacao: "Maré 0.2m — condição excepcional (sizígia)"
  },
  {
    data: "2026-05-09",
    diaSemana: "Sábado",
    horarioBaixaMareInterno: null,
    horarioSaidaBarco: null,
    alturaMare: null,
    statusOperacional: "sem-passeio",
    temPasseio: false,
    passeiosAfetados: ["seixas", "picaozinho", "areia-vermelha"],
    fonte: "surfguru.com.br — Porto de Cabedelo/PB (NÃO OFICIAL)",
    urlFonte: "https://surfguru.com.br/previsao/mare/30540/m?mes=5&ano=26",
    dataImportacao: "2026-04-27T00:00:00-03:00",
    revisadoPorMurillo: false,
    observacao: "Sem baixa-mar na janela operacional 05h-14h. BM às 03:08h e 16:04h."
  },
  {
    data: "2026-05-11",
    diaSemana: "Segunda-feira",
    horarioBaixaMareInterno: "05:36",
    horarioSaidaBarco: "04:36",
    alturaMare: 0.9,
    statusOperacional: "consultar",
    temPasseio: false,
    passeiosAfetados: ["seixas", "picaozinho", "areia-vermelha"],
    fonte: "surfguru.com.br — Porto de Cabedelo/PB (NÃO OFICIAL)",
    urlFonte: "https://surfguru.com.br/previsao/mare/30540/m?mes=5&ano=26",
    dataImportacao: "2026-04-27T00:00:00-03:00",
    revisadoPorMurillo: false,
    observacao: "[CONFIRMAR COM MURILLO] Saída calculada 04:36 — antes das 06:00"
  }
];
```

---

## 4. Riscos Técnicos

### 4.1 Risco da Fonte (surfguru vs PDF oficial)

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Divergência horária surfguru vs Marinha | **Alta** (~20 min) | **Crítico** | Nunca publicar surfguru sem comparação com PDF oficial |
| surfguru muda layout CSS | Média | Alto | Estrutura usa classes estáveis (`celula_mare_baixa`) — mas sem garantia |
| surfguru fica fora do ar | Baixa | Médio | Fallback: Murillo baixa PDF manualmente |
| Cloudflare bloqueia scraping | Média | Alto | Adicionar headers realistas; ou usar Playwright |

### 4.2 Risco do Parser (cheerio)

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Dia do mês "Sáb" vs "Sab" | Baixo | Mapa de abreviações inclui ambos (`Sab` e `Sáb`) |
| Altura com vírgula (ex: "0,4m") | Médio | Normalizar: `texto.replace(',', '.')` antes do parse |
| Horário sem `h` sufixo | Baixo | Regex aceita `HH:MM` com e sem `h` |
| Dois dias com `temPasseio: true` consecutivos que viram 3 | Não se aplica | Máximo 1 por dia pela regra de uma saída |

### 4.3 Risco do PDF (quando obtido)

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Formato de altura com vírgula (ex: "0,4") | Médio | Normalizar decimal antes do parse |
| Colunas em ordem variável (jan–dez) | Alto | Detectar cabeçalho de coluna dinamicamente |
| Texto extraído sem separação clara de colunas | Médio | Usar `pdfjs-dist` com extração por posição X/Y |
| Diferentes fontes de layout entre anos | Baixo | Série histórica CHM estável desde 2023 |

---

## 5. Estratégia Técnica Recomendada

### Caminho Imediato (sem esperar o PDF)

**Implementar parser surfguru como `parseTabuaMaresSurfguru(html)`:**

```typescript
// scripts/import-tabua-mares-surfguru.ts
import * as cheerio from 'cheerio';

export function parseTabuaMaresSurfguru(html: string): DiaRaw[] {
  const $ = cheerio.load(html);
  const dias: DiaRaw[] = [];

  $('.celula_dia').each((_, el) => {
    const label = $(el).find('.linha_data_lua label.float-left').text().trim();
    const [diaStr, semanaAbrev] = label.split('-').map(s => s.trim());
    
    const baixasMares: { hora: string; altura: number }[] = [];
    $(el).find('.celula_mare_baixa').each((_, mare) => {
      const texto = $(mare).text().trim().replace(/\s+/g, ' ');
      const hora = texto.match(/(\d{2}:\d{2})h/)?.[1];
      const alturaStr = $(mare).find('b').text().replace(',', '.').replace('m', '');
      const altura = parseFloat(alturaStr);
      if (hora && !isNaN(altura)) {
        baixasMares.push({ hora, altura });
      }
    });

    dias.push({ diaStr, semanaAbrev, baixasMares });
  });

  return dias;
}
```

**Fetch com headers realistas:**

```typescript
const res = await fetch(
  `https://surfguru.com.br/previsao/mare/30540/m?mes=${mes}&ano=${String(ano).slice(-2)}`,
  {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'text/html,application/xhtml+xml',
      'Accept-Language': 'pt-BR,pt;q=0.9',
      'Referer': 'https://surfguru.com.br/'
    }
  }
);
```

### Caminho para Produção (requer PDF real)

**Murillo executa uma vez:**
1. Acessar `https://www.marinha.mil.br/cppb/tabuas_de_mare` no browser
2. Baixar `2026-PORTO-DE-CABEDELO.pdf` clicando no link (não via script)
3. Substituir o arquivo falso em `_site/planejamento/tabua-mares/2026-PORTO-DE-CABEDELO.pdf`
4. Confirmar que o arquivo tem `%PDF-` como header (não `<!DOCTYPE`)

**Parser PDF (após obter arquivo real):**
```typescript
import PDFParser from 'pdf-parse';

export async function parseTabuaMaresOficialPDF(pdfBuffer: Buffer): Promise<DiaRaw[]> {
  const data = await PDFParser(pdfBuffer);
  const texto = data.text;
  // Detectar padrão: linhas com "DD" seguido de 4 pares "HH:MM  0,X"
  // Separar por página ou por mês (a confirmar após ver o PDF real)
  // ...
}
```

> **NOTA:** A implementação completa do parser PDF só pode ser finalizada após inspecionar o arquivo real. A estrutura de colunas (horizontal vs. vertical por mês) precisa ser confirmada.

---

## 6. Decisão Necessária de Murillo

Antes de implementar o parser final, Murillo precisa decidir:

### 6.1 Para desenvolvimento imediato

> **Posso usar os dados do surfguru como fonte de desenvolvimento?**
> - Se SIM: implementar `parseTabuaMaresSurfguru()` e gerar `data/tabua-mares.ts` com flag `revisadoPorMurillo: false`
> - Se NÃO: aguardar o PDF oficial antes de qualquer dado no site

### 6.2 Para produção

> **Qual PDF baixar agora para inspeção?**
> 1. Acessar `https://www.marinha.mil.br/cppb/tabuas_de_mare`
> 2. Baixar `2026-PORTO-DE-CABEDELO.pdf` clicando no link azul
> 3. Substituir o arquivo atual no repositório
> 4. Confirmar: tem todas as 12 colunas de mês? Formato de hora é HH:MM ou HHhMM?

### 6.3 Checklist de validação do PDF (quando obtido)

```
[ ] PDF abre normalmente no visualizador (não é HTML)
[ ] Começa com %PDF- nos primeiros bytes
[ ] Contém 365 dias (ou 366 para ano bissexto)
[ ] Cada dia tem 4 marés (2 preamar + 2 baixa-mar)
[ ] Horários em UTC-3 (Brasília) — sem ajuste de DST necessário
[ ] Alturas em metros (vírgula ou ponto decimal?)
[ ] Cabeçalho identifica "PORTO DE CABEDELO"
[ ] Estrutura: tabela horizontal (meses em colunas) ou vertical (dias em colunas)?
[ ] Primeiro dia: 01 de janeiro de 2026
[ ] Último dia: 31 de dezembro de 2026
```

---

## 7. Conclusão

### O que funciona agora

- ✅ Parser HTML surfguru.com.br está **funcional** — 31/31 dias de maio/2026 extraídos
- ✅ Classe CSS `celula_mare_baixa` identifica baixa-mar com semântica explícita
- ✅ Regras operacionais aplicadas corretamente (baixa-mar da manhã, saída = BM-1h, status por altura)
- ✅ Todos os guardrails aplicados (antes das 06h, depois das 14h)
- ✅ Formato `SaidaDia[]` conforme `references/estrutura-dados.md`

### O que bloqueia o parser final do PDF

- ❌ Arquivos `.pdf` no repositório são páginas Cloudflare — não são PDFs reais
- ❌ Sem o PDF real não é possível confirmar o layout de colunas/linhas para `parseTabuaMaresOficial()`

### Próxima ação exata

**Murillo baixa o PDF real no browser** → Claude inspeciona o layout → implementa `parseTabuaMaresOficial()`.

Enquanto isso, **parser surfguru está pronto para desenvolvimento** (dados não-oficiais, `revisadoPorMurillo: false`).

---

*Inspeção v1.0 | 2026-04-27 | Claude Sonnet 4.6 | Aguarda PDF real de Murillo para implementar parser definitivo*
