# Automação Futura — Importador de Tábua de Marés

Roadmap e spec técnica para quando a skill evoluir de entrada manual para importação automatizada. NÃO implementar agora.

---

## 1. Estado Atual (Fase 1 — Manual)

| Etapa | Responsável | Meio |
|-------|-------------|------|
| Obter dados mensais de maré | Murillo | Acessa site CHM / baixa PDF ou tabela |
| Digitar/copiar dados | Murillo | Cola no chat com Claude Code |
| Calcular saídas | `tabua-mares-turismo` | Processa e gera TypeScript |
| Validar output | Murillo | Confere tabela gerada |
| Publicar | `programador-de-site` | Atualiza `data/tabua-mares.ts` e deploya |

**Cadência:** mensal, ~30 minutos de trabalho manual.

---

## 2. Fase 2 — Importador Semi-Automatizado

**Objetivo:** Murillo só precisa confirmar o output, não mais digitar os dados.

### 2.1 Fonte de Dados

O CHM disponibiliza dados por dois canais:

| Canal | URL | Formato | Viabilidade |
|-------|-----|---------|-------------|
| Site CHM (HTML) | `marinha.mil.br/chm/dados-do-sgbd-hidro/tabuas-de-mare` | HTML com tabela | Scraping possível |
| SGBD-Hidro (Web App) | Sistema online do CHM | HTML interativo | Requer seleção de estação |
| Tábua em PDF | Download mensal por estação | PDF tabulado | Requer parser PDF |

**Recomendação:** usar o HTML do SGBD-Hidro ou a tabela mensual do CHM para Porto de Cabedelo.

### 2.2 Script de Importação (spec)

```typescript
// scripts/import-tabua-mares.ts
// Uso: npx ts-node scripts/import-tabua-mares.ts --estacao=cabedelo --mes=05 --ano=2026

interface ImportOptions {
  estacao: "cabedelo";   // Único valor válido para Vem Passear
  mes: number;           // 1-12
  ano: number;
  output: string;        // Caminho para arquivo de saída
}

interface DadoCHM {
  data: string;          // "2026-05-01"
  horarios: Array<{
    tipo: "baixa" | "preamar";
    hora: string;        // "07:12"
    altura: number;      // 0.4
  }>;
}

// Função principal:
async function importarTabulaCHM(opts: ImportOptions): Promise<DadoCHM[]>

// Fluxo:
// 1. Fetch da tabela CHM para o mês/estação
// 2. Parse do HTML → array DadoCHM[]
// 3. Selecionar baixa-mar mais favorável por dia
// 4. Aplicar regras operacionais (calcular saída, classificar status)
// 5. Gerar CalendarioMare[]
// 6. Escrever em data/tabua-mares.ts
// 7. Imprimir checklist de validação para Murillo
```

### 2.3 Gatilho de Execução

Opções (decidir com Murillo quando chegar na Fase 2):

| Opção | Prós | Contras |
|-------|------|---------|
| Murillo executa manualmente (`npm run import-mares`) | Controle total | Ainda requer ação |
| GitHub Action mensal (dia 25 de cada mês) | Totalmente automático | Requer revisão do PR gerado |
| Claude Code hook no início de sessão | Integrado ao workflow | Pode ser invasivo |

**Recomendação Fase 2:** GitHub Action que abre um PR com o novo `tabua-mares.ts` no dia 25 de cada mês. Murillo revisa e aprova o PR.

---

## 3. Fase 3 — Atualização Automática em Produção

**Objetivo:** Site sempre mostra dados corretos sem deploy manual.

### 3.1 Arquitetura

```
CHM (fonte) → API Route Next.js → Cache Redis/Vercel KV → Componentes
```

```typescript
// _site/app/api/proxima-saida/route.ts
// GET /api/proxima-saida?passeio=seixas

export async function GET(request: Request) {
  const passeio = new URL(request.url).searchParams.get("passeio");
  
  // 1. Checar cache (Redis ou Vercel KV, TTL: 6h)
  // 2. Se miss: buscar dados CHM, calcular, armazenar
  // 3. Retornar ProximaSaidaCard
  
  return Response.json(proximaSaida);
}
```

**Trade-offs:**
- `+` Sempre atualizado, sem deploy
- `+` Murillo não precisa fazer nada mensalmente
- `-` Dependência de servidor (não mais SSG puro)
- `-` Risco de downtime do CHM afetar o site
- `-` Mais complexidade de infra (cache layer)

**Recomendação Fase 3:** só faz sentido quando o volume de passeios/reservas justificar a complexidade. Para Fase 1 e início de Fase 2, data estática em `tabua-mares.ts` é suficiente.

---

## 4. Fallback de Segurança (todas as fases)

Independente da fase, o site deve ter fallback gracioso:

```typescript
// Fallback: se proximaSaida for null ou stale:
// → Exibir "Consulte próximas saídas" com link WhatsApp
// → NUNCA mostrar data desatualizada ou incorreta
// → NUNCA travar o carregamento da página por dados de maré

// Regra: dados de maré nunca são blocking — são enhancement
```

---

## 5. Critério para Avançar de Fase

| Critério | Fase 1 → 2 | Fase 2 → 3 |
|----------|-----------|-----------|
| Murillo gasta >30min/mês com dados de maré | ✅ ir para Fase 2 | — |
| Erro humano na digitação causou data errada | ✅ ir para Fase 2 | — |
| Volume de reservas justifica infra de cache | — | ✅ ir para Fase 3 |
| Orçamento para Redis/Vercel KV disponível | — | ✅ ir para Fase 3 |
| CHM disponibiliza API pública oficial | ✅ ir para Fase 2 | ✅ ir direto para Fase 3 |

---

## 6. Dependências Técnicas (Fase 2)

```json
// package.json additions para Fase 2
{
  "devDependencies": {
    "ts-node": "^10.x",
    "cheerio": "^1.x"      // parse HTML das tabelas CHM
  },
  "scripts": {
    "import-mares": "ts-node scripts/import-tabua-mares.ts"
  }
}
```

**Cheerio** para parse de HTML é leve e sem dependência de browser. Alternativa: `node-html-parser`.

---

## 7. Riscos e Mitigações

| Risco | Probabilidade | Mitigação |
|-------|--------------|-----------|
| CHM muda estrutura do HTML | Média | Script com testes de integridade; alerta para Murillo se falhar |
| Dados CHM com erro (raros) | Baixa | Sempre gerar checklist de validação; Murillo aprova antes de publicar |
| Fuso horário errado | Média | Sempre trabalhar em horário de Brasília (UTC-3); validar no output |
| Duas baixas-mares similares | Média | Regra documentada: usar a de menor altura (ver `regras-operacionais.md` § 3) |

---

*Automação v1.0 | 2026-04-26 | Fase 1 ativa. Fases 2 e 3 para decisão futura de Murillo.*
