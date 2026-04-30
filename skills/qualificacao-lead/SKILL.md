---
name: qualificacao-lead
description: Qualifica leads de WhatsApp em ficha estruturada com 7 campos centrais e linha pronta para o CRM. Nunca inventa dados — só registra o que está na conversa.
version: "1.0"
status: ativa
modelo_padrao: Sonnet 4.6
atualizado: "2026-04-29"
pipelines: [I]
posicao: etapa-1
---

# Skill: Qualificação de Lead

**Versão:** 1.0
**Status:** Ativa
**Especialidade:** Leitura de conversa WhatsApp → ficha de lead estruturada → linha CSV
**Escopo:** Qualificação inicial, classificação de perfil, preenchimento de CRM
**Modelo Padrão:** Sonnet 4.6
**Atualizado:** 2026-04-29

---

## RESPONSABILIDADE

### O Que Faz
- Lê conversa de WhatsApp colada por Murillo
- Extrai os 7 campos centrais de qualificação: data de viagem, passeio de interesse, quantidade de pessoas, perfil, origem, orçamento (se mencionado), objeção principal (se apareceu)
- Classifica o status do lead (novo / qualificado / objecao)
- Gera linha pronta para colar em `_crm/leads.csv`
- Sugere próxima ação para Murillo (proposta? pergunta de qualificação? follow-up?)

### O Que NÃO Faz
- ❌ Escrever a resposta para o lead → `proposta-passeio` ou `objecoes-turismo-jampa`
- ❌ Enviar mensagem para o lead (nunca — Murillo sempre envia)
- ❌ Inventar dado que não está na conversa
- ❌ Adicionar campo ao CSV sem confirmação de Murillo

### Quando Usar
- Lead novo mandou mensagem no WhatsApp e Murillo quer qualificar
- Lead voltou após silêncio e Murillo quer atualizar a ficha
- Murillo cola uma conversa longa e quer resumo estruturado

### Quando NÃO Usar
- Já tem ficha qualificada e precisa de proposta → ir direto a `proposta-passeio`
- Lead está em follow-up ativo → `follow-up-comercial`

---

## INPUT

| Campo | Obrigatório | Fonte | Descrição |
|-------|-------------|-------|-----------|
| conversa | Sim | Murillo (cola a troca de mensagens) | Texto da conversa WhatsApp — pode ser parcial |
| telefone | Sim | Murillo (pegar do WhatsApp) | Número com DDD e +55 |
| data_atual | Não | contexto da sessão | Para calcular urgência da data de viagem |

### Dados do `_conhecimento/` (Consultar)

| Arquivo | Por Que Consultar |
|---------|------------------|
| `passeios.md` | Verificar se o passeio de interesse existe no catálogo |
| `publico-alvo.md` | Classificar perfil (família / casal / grupo-amigos / solo) |

---

## PROCESSO

### Etapa 1 — Ler a Conversa

Ler toda a conversa colada por Murillo. Identificar:
- Nome do lead (se mencionado)
- Passeio de interesse (se mencionado)
- Data de viagem (se mencionada)
- Número de pessoas (se mencionado)
- Perfil (família? casal? amigos?)
- Origem do contato (veio do Google? Instagram? indicação?)
- Orçamento (se mencionou algum valor)
- Objeção ou hesitação (se apareceu alguma dúvida, resistência ou comparação)

### Etapa 2 — Classificar o Status

| Condição | Status |
|----------|--------|
| Menos de 4 campos centrais preenchidos | `novo` |
| 4+ dos 7 campos centrais preenchidos (data, passeio, qtd, perfil) | `qualificado` |
| Lead expressou objeção ou dúvida clara | `objecao` |

### Etapa 3 — Verificar Passeio

Se o lead mencionou um passeio específico:
- Verificar em `_conhecimento/passeios.md` se o slug existe
- Se não encontrar → registrar como `[CONFIRMAR COM MURILLO: passeio mencionado não encontrado no catálogo]`

### Etapa 4 — Gerar ID do Lead

Formato: `AAAA-MM-DD-NNN` (data de hoje + sequencial do dia)
Ex: `2026-05-03-001`

### Etapa 5 — Sugerir Próxima Ação

Com base no status:
- `novo` → sugerir pergunta de qualificação para Murillo fazer
- `qualificado` → sugerir acionar `proposta-passeio`
- `objecao` → sugerir acionar `objecoes-turismo-jampa`

---

## REGRAS

- **Nunca inventar dado** — se a informação não está na conversa, colocar vazio no CSV
- **Nunca enviar mensagem** — a saída é sempre para Murillo aprovar
- **Fonte única de dados:** o que está na conversa, confirmado por Murillo
- **Privacidade:** telefone é dado pessoal — registrar apenas no CSV local do vault

---

## OUTPUT

### Ficha do Lead

```
═══════════════════════════════════════════
 FICHA DE LEAD — [NOME ou "Sem nome"]
═══════════════════════════════════════════

ID:              2026-MM-DD-NNN
Nome:            [nome ou —]
Telefone:        [+55 xx xxxxx-xxxx]
Origem:          [gmb / instagram / indicacao / outros]
Data de viagem:  [AAAA-MM-DD ou —]
Passeio:         [slug ou —]
Qtd pessoas:     [N ou —]
Perfil:          [familia / casal / grupo-amigos / solo]
Status:          [novo / qualificado / objecao]
Objeção:         [se houver, slug de objecoes.md]
Observações:     [dado relevante da conversa]

Campos faltando: [lista dos campos não preenchidos]

═══════════════════════════════════════════
 PRÓXIMA AÇÃO SUGERIDA
═══════════════════════════════════════════

[Pergunta que Murillo pode fazer OU acionar proposta-passeio OU acionar objecoes-turismo-jampa]

═══════════════════════════════════════════
```

### Linha CSV (pronta para colar)

```
[id],[nome],[telefone],[origem],[data_viagem],[passeio_interesse],[qtd_pessoas],[perfil],[status],[data_hora_atual],[proximo_followup],[objecao_principal],[valor_estimado],[motivo_perda],[observacoes]
```

---

## COMPATIBILIDADE COM ORQUESTRADOR

| Propriedade | Valor |
|-------------|-------|
| Pipelines que usam | Pipeline I |
| Depende de (arquivos) | `passeios.md`, `publico-alvo.md` |
| Alimenta (skills) | `proposta-passeio`, `objecoes-turismo-jampa`, `follow-up-comercial` |
| Pode rodar em paralelo com | Não — é sempre a primeira etapa |
| Posição típica no pipeline | Etapa 1 do Pipeline I |

---

*Skill v1.0 | Criado 2026-04-29 | Squad Comercial — Pipeline I*
