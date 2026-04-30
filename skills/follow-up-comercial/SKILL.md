---
name: follow-up-comercial
description: Gera sequência de 4 toques de follow-up (T1-T4 em 5 dias) para leads que não responderam após proposta. Nunca spam, nunca urgência falsa, Murillo sempre envia.
version: "1.0"
status: ativa
modelo_padrao: Sonnet 4.6
atualizado: "2026-04-29"
pipelines: [J]
posicao: etapa-1
---

# Skill: Follow-up Comercial

**Versão:** 1.0
**Status:** Ativa
**Especialidade:** Sequência de follow-up 4 toques / 5 dias — acolhedor, sem spam, sem urgência falsa
**Escopo:** Leads que receberam proposta mas não responderam
**Modelo Padrão:** Sonnet 4.6
**Atualizado:** 2026-04-29

---

## RESPONSABILIDADE

### O Que Faz
- Gera os 4 toques de follow-up personalizados com base no perfil e passeio do lead
- Calcula as datas de envio de cada toque (T1 a T4)
- Adapta o ângulo de cada toque (valor → urgência real → conteúdo educacional → encerramento)
- Marca o lead como `perdido` após T4 sem resposta (instrução para Murillo)

### O Que NÃO Faz
- ❌ Enviar mensagem (Murillo sempre envia)
- ❌ Gerar mais de 4 toques (além disso vira spam)
- ❌ Usar urgência falsa ("ÚLTIMAS VAGAS" sem ser verdade)
- ❌ Qualificar o lead → `qualificacao-lead`
- ❌ Gerar proposta → `proposta-passeio`
- ❌ Responder objeção → `objecoes-turismo-jampa`

### Quando Usar
- Lead recebeu proposta e não respondeu em 24h
- Lead sumiu após primeira mensagem e Murillo quer reativar
- Lead marcou como `qualificado` mas está parado há mais de 2 dias

### Quando NÃO Usar
- Lead respondeu com objeção → `objecoes-turismo-jampa`
- Lead pediu nova proposta → `proposta-passeio`
- Lead já está em status `perdido` há mais de 30 dias (não reativar sem gatilho real)

---

## SEQUÊNCIA DE 4 TOQUES

### Cadência padrão

| Toque | Quando enviar | Ângulo | Tom |
|-------|--------------|--------|-----|
| T1 | 24h após proposta sem resposta | Verificar se recebeu + reabrir conversa | Leve, direto |
| T2 | D+2 (48h após T1) | Novo ângulo de valor (maré, passeio, experiência) | Educacional |
| T3 | D+4 (48h após T2) | Urgência real (se houver) ou "ainda posso ajudar" | Honesto |
| T4 | D+5 (24h após T3) | Encerramento respeitoso — porta aberta | Acolhedor |

Após T4 sem resposta: classificar como `perdido` com `motivo_perda: ghosting`

### Regras de tom por toque

**T1 — Verificação:**
- Curto (máx 3 linhas)
- Não repetir a proposta inteira
- Pergunta aberta: "chegou minha mensagem de [dia]?"

**T2 — Valor educacional:**
- Conteúdo útil relacionado ao passeio (ex: dica de maré, o que levar)
- Não pedir decisão — apenas entregar valor
- Terminar com pergunta leve

**T3 — Urgência real (se houver):**
- Só mencionar vagas limitadas se for verdade
- Se não houver urgência real: "posso responder qualquer dúvida antes de você decidir"
- Nunca "última chance" falso

**T4 — Encerramento respeitoso:**
- Reconhecer que a pessoa pode ter mudado de planos
- Deixar porta aberta: "quando vier a JP, a gente está aqui"
- Sem pressão, sem mágoa

---

## INPUT

| Campo | Obrigatório | Fonte | Descrição |
|-------|-------------|-------|-----------|
| ficha_lead | Sim | `_crm/leads.csv` ou `qualificacao-lead` | Nome, passeio, perfil, data de viagem |
| data_proposta | Sim | Murillo | Quando a proposta foi enviada |
| data_atual | Sim | contexto da sessão | Para calcular datas dos toques |
| vagas_reais_disponiveis | Não | Murillo | Se há restrição real de vaga na data do lead |

### Dados do `_conhecimento/` (Consultar)

| Arquivo | Por Que Consultar |
|---------|------------------|
| `passeios.md` | Detalhes do passeio para o T2 (ângulo de valor) |
| `tom-de-voz.md` | Tom acolhedor sem urgência falsa |
| `objecoes.md` | Antecipação se o silêncio pode ser uma objeção disfarçada |

---

## PROCESSO

### Etapa 1 — Calcular Datas

```
T1 = data_proposta + 1 dia
T2 = T1 + 2 dias
T3 = T2 + 2 dias
T4 = T3 + 1 dia
```

Se data de viagem do lead for antes do T4: comprimir cadência para caber.

### Etapa 2 — Selecionar Ângulo para T2

Com base no passeio de interesse:
- Passeio de maré (Seixas, Picãozinho, Areia Vermelha) → dica sobre janela de maré
- Passeio de litoral → dica sobre o que levar, melhor horário
- Passeio com atividade (quad) → dica de restrição ou preparação
- Passeio interestadual → dica logística (saída cedo, o que incluir)

### Etapa 3 — Verificar Urgência Real (T3)

Murillo confirma: há vaga limitada real para a data do lead?
- Sim → mencionar de forma honesta no T3
- Não → usar ângulo "posso tirar qualquer dúvida antes de você decidir"

### Etapa 4 — Gerar os 4 Textos

Um bloco por toque, com data de envio e texto formatado para WhatsApp.

---

## REGRAS

- **Máximo 4 toques** — além disso é spam e prejudica a marca
- **Nunca urgência falsa** — "ÚLTIMAS VAGAS" sem ser real = perda de confiança
- **Murillo sempre envia** — esta skill gera o rascunho, Murillo decide se envia
- **Após T4 sem resposta** → instruir Murillo a classificar como `perdido` em `_crm/leads.csv`
- **Respeito acima de conversão** — T4 encerra com dignidade, não com pressão

---

## OUTPUT

```
═══════════════════════════════════════════
 FOLLOW-UP — [Nome do Lead] — [Passeio]
═══════════════════════════════════════════

T1 — Enviar em: [data]
---
[texto para WhatsApp]

T2 — Enviar em: [data]
---
[texto para WhatsApp]

T3 — Enviar em: [data]
---
[texto para WhatsApp]

T4 — Enviar em: [data] (último toque)
---
[texto para WhatsApp]

═══════════════════════════════════════════
 SE NÃO HOUVER RESPOSTA APÓS T4:
 → Atualizar status no CRM: perdido
 → motivo_perda: ghosting
═══════════════════════════════════════════
```

---

## COMPATIBILIDADE COM ORQUESTRADOR

| Propriedade | Valor |
|-------------|-------|
| Pipelines que usam | Pipeline J |
| Depende de (skills) | `proposta-passeio` (proposta enviada) |
| Depende de (arquivos) | `passeios.md`, `tom-de-voz.md` |
| Alimenta (skills) | `objecoes-turismo-jampa` (se lead responder com objeção) |
| Pode rodar em paralelo com | Não — depende de proposta enviada |
| Posição típica no pipeline | Etapa 1 do Pipeline J |

---

*Skill v1.0 | Criado 2026-04-29 | Squad Comercial — Pipeline J*
