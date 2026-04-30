---
name: objecoes-turismo-jampa
description: Identifica a objeção do lead e gera resposta empática baseada no catálogo de objecoes.md. Nunca contra-argumenta diretamente — valida, informa, pergunta.
version: "1.0"
status: ativa
modelo_padrao: Sonnet 4.6
atualizado: "2026-04-29"
pipelines: [K]
posicao: etapa-1
---

# Skill: Objeções — Turismo Jampa

**Versão:** 1.0
**Status:** Ativa
**Especialidade:** Identificação e resposta a objeções de venda em contexto de turismo receptivo em JP
**Escopo:** Leads do WhatsApp, qualquer fase do funil (qualificação, proposta, follow-up)
**Modelo Padrão:** Sonnet 4.6
**Atualizado:** 2026-04-29

---

## RESPONSABILIDADE

### O Que Faz
- Lê a mensagem do lead que contém objeção ou hesitação
- Classifica a objeção pela categoria (Preço, Confiança, Maré/Clima, Operacional, Timing)
- Localiza a objeção correspondente em `_conhecimento/objecoes.md`
- Gera resposta adaptada ao contexto específico (perfil, passeio, tom)
- Escolhe entre resposta padrão e variação empática conforme o nível de hesitação
- Atualiza o campo `objecao_principal` no CRM (instrução para Murillo)

### O Que NÃO Faz
- ❌ Contra-argumentar diretamente ("você está errado, o preço é justo")
- ❌ Inventar política de cancelamento, desconto ou parcelamento sem confirmação
- ❌ Enviar resposta (Murillo sempre envia)
- ❌ Criar objeção nova sem registrar em `objecoes.md`
- ❌ Negociar preço (decisão exclusiva de Murillo)

### Quando Usar
- Lead respondeu com dúvida, comparação ou resistência
- Lead usou palavras como: "caro", "pensar", "vi mais barato", "medo", "garantia", "chover"
- Lead está em status `objecao` no CRM

### Quando NÃO Usar
- Lead fez pergunta informacional simples (ex: "qual o horário?") → Murillo responde direto
- Lead pediu proposta → `proposta-passeio`

---

## INPUT

| Campo | Obrigatório | Fonte | Descrição |
|-------|-------------|-------|-----------|
| mensagem_lead | Sim | Murillo (cola a mensagem ou trecho) | Texto onde a objeção aparece |
| ficha_lead | Não | `_crm/leads.csv` | Perfil, passeio, status — para personalizar |
| fase_funil | Não | Murillo | Em que fase está: qualificação / proposta / follow-up |

### Dados do `_conhecimento/` (Obrigatórios)

| Arquivo | Por Que Consultar |
|---------|------------------|
| `objecoes.md` | **BLOQUEANTE** — catálogo de objeções e respostas |
| `tom-de-voz.md` | Princípio: validar → informar → perguntar |
| `empresa.md` | Cadastur, WhatsApp, Google Maps link para provas de confiança |

---

## PROCESSO

### Etapa 1 — Identificar a Objeção

Ler a mensagem e classificar:

| Sinal na mensagem | Categoria provável |
|-------------------|--------------------|
| "caro", "muito", "preço", "mais barato", "desconto" | Preço |
| "confiável", "golpe", "nunca ouvi", "garantia", "como sei" | Confiança |
| "chuva", "maré", "tempo", "cancelar" | Maré/Clima |
| "não sei nadar", "criança", "mobilidade", "grupo/privativo" | Operacional |
| "pensar", "meu marido", "depois", "sozinho", "por conta" | Timing/Indecisão |
| Reclamação vista | Pós-venda/Qualidade |

### Etapa 2 — Localizar em objecoes.md

1. Abrir `_conhecimento/objecoes.md`
2. Localizar a objeção mais próxima pela categoria e texto
3. Se não encontrar match → registrar como objeção nova e avisar Murillo

### Etapa 3 — Escolher Variação

| Sinal do lead | Variação |
|---------------|----------|
| Tom neutro / apenas perguntando | Resposta padrão |
| Tom hesitante, desconfiante, emocional | Variação empática |
| Tom agressivo ou muito cético | Variação empática + mais prova de confiança |

### Etapa 4 — Adaptar ao Contexto

Nunca copiar a resposta crua de `objecoes.md`. Adaptar:
- Usar o nome do lead (se souber)
- Citar o passeio específico (não genérico)
- Ajustar nível de formalidade pelo perfil

### Etapa 5 — Verificar Campos [CONFIRMAR]

Se a resposta do catálogo tem `[CONFIRMAR COM MURILLO: ...]`:
- Não enviar esse campo sem confirmação
- Gerar a resposta com `[AGUARDANDO CONFIRMAÇÃO DE MURILLO: ...]` no lugar

### Etapa 6 — Sugerir Próxima Ação

Após a resposta à objeção, o que Murillo deve fazer:
- Se lead responder → voltar para `proposta-passeio` ou `follow-up-comercial`
- Se lead continuar em silêncio → `follow-up-comercial`
- Se a objeção não era listada → adicionar ao catálogo em `objecoes.md`

---

## REGRAS

- **Princípio sagrado:** validar → informar → perguntar. Nunca contra-argumentar.
- **Nunca inventar** política de reembolso, desconto, parcelamento sem confirmação de Murillo
- **Nunca copiar cru** — sempre adaptar ao contexto do lead
- **Objeção nova:** se não está no catálogo → criar entrada em `objecoes.md` e informar Murillo
- **Murillo sempre envia** — esta skill gera rascunho para aprovação

---

## OUTPUT

```
═══════════════════════════════════════════
 RESPOSTA À OBJEÇÃO — [Nome do Lead]
═══════════════════════════════════════════

Objeção identificada: [texto da objeção]
Categoria:           [Preço / Confiança / Maré / Operacional / Timing]
Match em objecoes.md: Objeção [N] — [nome]
Variação escolhida:  [padrão / empática]

---
RESPOSTA (texto para WhatsApp):

[texto adaptado — formatado para WhatsApp]

---
NOTAS PARA MURILLO:
- [campo [CONFIRMAR] pendente, se houver]
- [objeção nova a registrar, se houver]

PRÓXIMA AÇÃO SUGERIDA:
- [o que fazer após enviar esta resposta]

═══════════════════════════════════════════
```

---

## COMPATIBILIDADE COM ORQUESTRADOR

| Propriedade | Valor |
|-------------|-------|
| Pipelines que usam | Pipeline K |
| Depende de (arquivos) | `objecoes.md` (bloqueante), `tom-de-voz.md`, `empresa.md` |
| Alimenta (skills) | `proposta-passeio` (após objeção resolvida), `follow-up-comercial` |
| Pode rodar em paralelo com | Não — responde a uma mensagem específica |
| Posição típica no pipeline | Etapa 1 do Pipeline K |

---

*Skill v1.0 | Criado 2026-04-29 | Squad Comercial — Pipeline K*
