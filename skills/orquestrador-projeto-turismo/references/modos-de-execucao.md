# Modos de Execução

O orquestrador opera em três modos. O modo padrão é sempre **Planejamento** — os outros dois requerem ativação explícita de Murillo.

---

## Modo 1 — Planejamento (default)

**Quando usar:** toda vez que o orquestrador for acionado sem instrução de modo.

**Comportamento:**
```
1. Interpreta objetivo
2. Verifica contexto em _conhecimento/ e _memoria/
3. Gera PLANO DE EXECUÇÃO completo (formato definido em SKILL.md § 5)
4. PARA — aguarda aprovação

NÃO executa skill alguma.
NÃO escreve arquivo alguma de entrega.
```

**Ativação:** qualquer chamada sem especificação de modo.

**Output:** Plano com `Status: AGUARDANDO APROVAÇÃO`.

---

## Modo 2 — Execução Assistida

**Quando usar:** Murillo aprovou o plano e quer executar etapa por etapa, confirmando cada uma antes da próxima.

**Comportamento:**
```
1. Recebe plano aprovado (ou aprova agora)
2. Executa Etapa 1 → entrega resultado
3. PAUSA — pergunta: "Etapa 1 concluída. Prosseguir para Etapa 2 — [skill]?"
4. Aguarda confirmação de Murillo
5. Executa Etapa 2 → entrega resultado
6. PAUSA novamente
7. Repete até última etapa
```

**Ativação:** Murillo diz "executa etapa por etapa", "vai executando com minha confirmação" ou aprova plano e diz "começa".

**Pausa obrigatória entre etapas** — nunca avança sem resposta explícita.

**Output por etapa:** entrega da skill + pergunta de confirmação para próxima.

---

## Modo 3 — Execução Completa

**Quando usar:** Murillo quer executar o pipeline inteiro sem pausas intermediárias.

**Comportamento:**
```
1. Recebe plano aprovado
2. Executa todas as etapas em sequência
3. Registra entregas em _pipeline/ ao fim de cada etapa
4. Entrega resultado consolidado ao final
5. Lista o que foi produzido por etapa
```

**Ativação:** Murillo diz explicitamente "executa tudo", "pipeline completo", "sem pausas".

**Restrições:**
```
❌ Não disponível para Pipeline A ou B completo (envolve PAUSA de designer — ver references/pipelines.md Pipeline A Etapa 5)
❌ Não disponível quando há [CONFIRMAR COM MURILLO] em aberto no plano
❌ Não disponível em Pipeline G (custom — requer validação por etapa)
✅ Disponível para Pipeline C (SEO de página existente — sem dependência externa)
✅ Disponível para Pipeline F (inteligência — sem entrega de produção)
```

**Output final:**
```
EXECUÇÃO CONCLUÍDA — [projeto_id]

Etapa 1 — [skill]: ✓ [arquivo gerado]
Etapa 2 — [skill]: ✓ [arquivo gerado]
[...]

Próximo passo: [o que falta ou o que Murillo precisa revisar]
```

---

## Tabela de Referência Rápida

| | Modo 1 | Modo 2 | Modo 3 |
|---|--------|--------|--------|
| **Nome** | Planejamento | Execução Assistida | Execução Completa |
| **Default** | ✅ sim | ❌ | ❌ |
| **Ativação** | automático | "executa etapa por etapa" | "executa tudo" |
| **Pausa** | após plano | após cada etapa | só ao final |
| **Risco** | mínimo | baixo | médio |
| **Quando usar** | sempre primeiro | produção controlada | pipelines curtos e limpos |

---

## Regra Inviolável de Modo

```
Modo 1 é sempre o primeiro passo.
Modo 2 ou 3 só são ativados APÓS plano gerado em Modo 1 e aprovado por Murillo.
Nunca pular para Modo 2 ou 3 sem plano aprovado.
```

---

## Regras de Aprovação

```
Após gerar plano (Modo 1), o orquestrador aguarda:
  - "aprovado" → confirmar próximo passo (não executar)
  - "ajustar X" → revisar plano
  - "não fazer Y" → recalcular pipeline
  - silêncio → não avançar

Para escalar para Modo 2 ou 3:
  - Plano deve estar aprovado em Modo 1
  - Não pode haver [CONFIRMAR COM MURILLO] em aberto (Modo 3)
  - Murillo deve ativar explicitamente o modo
```
