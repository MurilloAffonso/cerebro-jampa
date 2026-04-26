# Regras de Decisão

Critérios para incluir/pular skills, resolver conflitos, definir defaults, aplicar guardrails e acionar fallbacks. Consultar ao validar dependências (Passo 5) e ao decidir composição do pipeline (Passo 4) do `SKILL.md`.

---

## 1. Quando Incluir uma Skill

```
INCLUIR skill se:
  ✓ Entrega da skill é NECESSÁRIA para o objetivo
  ✓ Dependências da skill ESTÃO ATENDIDAS (ou serão antes da etapa)
  ✓ Saída da skill SERÁ CONSUMIDA por etapa seguinte ou pelo objetivo final
```

---

## 2. Quando Pular uma Skill

```
PULAR skill se:
  ✗ Entrega já existe em _conhecimento/, _memoria/ ou _social/assets/
  ✗ Objetivo explicitamente exclui aquele domínio (ex: "só copy, sem código")
  ✗ Skill pertence a domínio não envolvido (ex: SEO em campanha 100% social)
  ✗ Murillo confirmou em sessão anterior que não precisa
```

Cada pulo deve ter justificativa de uma linha no plano.

---

## 3. Sequencial vs Paralelo

```
SEQUENCIAL (uma após outra):
  - Skill B consome saída de Skill A
  - Exemplo: copywriter-vendas → seo-local-turismo (SEO precisa do copy)

PARALELO (ao mesmo tempo):
  - Skills não compartilham dependência
  - Saídas convergem em etapa seguinte
  - Exemplo: copywriter-vendas || ux-ui-mobile-first (após estrategista)
```

---

## 4. Resolução de Conflitos

```
Se duas skills produzem saídas conflitantes:
  - Identificar conflito explicitamente no plano
  - Propor resolução (qual prevalece)
  - Pedir confirmação de Murillo

Exemplo: copywriter-vendas propõe H1 "X", seo-local-turismo recomenda H1 "Y"
Resolução proposta: SEO prevalece (afeta ranking), copy ajusta lead
```

---

## 5. Quando NÃO Acionar o Orquestrador

```
NÃO usar orquestrador se:
  ✗ Objetivo claramente envolve uma única skill
    Exemplo: "gera schema JSON-LD para essa página" → vai direto a seo-local-turismo
  ✗ Plano já aprovado em sessão atual e em execução
  ✗ Murillo pediu execução direta de skill específica
```

---

## 6. Defaults Quando Murillo Diz "Decida Você"

| Decisão | Default |
|---------|---------|
| Mobile-first ou desktop-first | Mobile-first (regra do CLAUDE.md) |
| Stack | Next.js (Sonnet 4.6 confirmado em política) |
| Idioma | PT-BR como base, EN/ES marcados como `[FUTURO]` |
| Modelo de IA | Sonnet 4.6 |
| Inclusão de social | Pular se objetivo não menciona |
| Inclusão de design | Incluir briefing-designer se houver visual novo |

---

## 7. Guardrails (Nunca Fazer)

```
❌ Iniciar execução sem aprovação do plano
❌ Acionar todas as 10 skills "por garantia"
❌ Pular verificação de _conhecimento/ para "ganhar tempo"
❌ Inventar dados para preencher dependências faltantes
❌ Mudar pipeline no meio sem comunicar Murillo
❌ Misturar 2+ objetivos diferentes em um único plano
❌ Omitir justificativa de skills puladas
❌ Tratar como concluída uma etapa sem entrega validada
```

---

## 8. Como Tratar Input Incompleto

Se Murillo passa só o objetivo sem detalhes:

1. **Não inferir silenciosamente** — não assumir prazo, escopo ou tipo sozinho
2. **Fazer máximo 3 perguntas de clarificação** antes de gerar o plano
3. **Se respondidas → gerar plano** com base nas respostas
4. **Se Murillo disser "decida você"** → usar defaults documentados em § 6

---

## 9. FALLBACK — Cenários Esperados

### 9.1 Quando Falta Dado em `_conhecimento/`

```
SITUAÇÃO: Pipeline exige passeios.md com passeio X, mas X não está catalogado

AÇÃO:
1. NÃO PROPOR PIPELINE COMPLETO
2. Devolver plano parcial com:
   - "BLOQUEADO: faltam dados em _conhecimento/passeios.md"
   - Lista exata do que falta
   - Sugestão: pré-etapa para catalogar passeio (manualmente por Murillo)
3. Aguardar Murillo:
   a) Confirmar dados → atualizar conhecimento → recalcular plano
   b) Pedir para usar dados parciais → marcar [CONFIRMAR] em todos os campos vazios
   c) Adiar objetivo
```

### 9.2 Quando Objetivo é Ambíguo

```
SITUAÇÃO: "fazer alguma coisa pra Seixas"

AÇÃO:
1. NÃO ESCOLHER PIPELINE SOZINHO
2. Devolver até 3 perguntas de clarificação:
   - "É página nova ou atualização da existente?"
   - "Foco em conversão (copy/CTA) ou ranking (SEO)?"
   - "Inclui campanha social ou só site?"
3. Após respostas → gerar plano normal
```

### 9.3 Quando Skill Necessária Não Existe

```
SITUAÇÃO: Objetivo exige tradução EN/ES, mas não há skill de internacionalização

AÇÃO:
1. Identificar lacuna no plano:
   - "GAP: skill de internacionalização não existe no inventário"
2. Sugerir alternativas:
   a) Adiar parte EN/ES até skill existir
   b) Murillo executa manualmente
   c) Criar skill nova (fora do escopo do orquestrador)
3. Marcar etapa como [GAP DE SKILL: ...]
```

### 9.4 Quando Há Conflito Entre Skills

```
SITUAÇÃO: copywriter-vendas e seo-local-turismo recomendariam H1 diferentes

AÇÃO:
1. Identificar conflito no plano (não esperar acontecer)
2. Aplicar regra de prevalência (§ 4)
3. Documentar resolução proposta
4. Marcar para revisão de Murillo se prevalência não for óbvia
```

### 9.5 Quando Murillo Pede Execução Direta

```
SITUAÇÃO: "esquece o plano, só roda o copywriter agora"

AÇÃO:
1. Reconhecer — orquestrador não é necessário
2. Devolver: "Entendido — pulando orquestração. Acionar copywriter-vendas com objetivo: [...]"
3. Não bloquear — Murillo tem autoridade para pular
4. Sugerir documentar decisão em _memoria/decisoes.md se for padrão recorrente
```

### 9.6 Quando Pipeline Em Andamento É Interrompido

```
SITUAÇÃO: Murillo pausa após Etapa 3 e volta dias depois

AÇÃO:
1. Recuperar estado de _memoria/estado-atual.md
2. Confirmar entregas já feitas (Etapas 1-3)
3. Validar se contexto mudou (conhecimento atualizado? prioridade mudou?)
4. Devolver plano de retomada das Etapas 4+ (não regenerar do zero)
```

Detalhamento da retomada: ver `references/estado-e-ciclo-de-vida.md`.
