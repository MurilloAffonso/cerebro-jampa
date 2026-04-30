---
name: proposta-passeio
description: Gera proposta de passeio personalizada para WhatsApp com preço, incluso, roteiro e CTA. Nunca inventa preço ou itinerário — bloqueia se dado não estiver no catálogo.
version: "1.0"
status: ativa
modelo_padrao: Sonnet 4.6
atualizado: "2026-04-29"
pipelines: [I]
posicao: etapa-2
---

# Skill: Proposta de Passeio

**Versão:** 1.0
**Status:** Ativa
**Especialidade:** Proposta personalizada de passeio para WhatsApp — concisa, clara, com valor breakdown
**Escopo:** Propostas individuais, propostas para grupo, propostas com múltiplos passeios
**Modelo Padrão:** Sonnet 4.6
**Atualizado:** 2026-04-29

---

## RESPONSABILIDADE

### O Que Faz
- Gera texto de proposta formatado para WhatsApp (não para email)
- Personaliza pelo perfil do lead (família, casal, grupo, solo)
- Inclui: passeio, preço por pessoa, preço total estimado, o que está incluso, roteiro resumido, data (se confirmada), como reservar
- Sugere passeio alternativo se o escolhido não estiver disponível
- Verifica maré (se passeio depende de maré) antes de confirmar data

### O Que NÃO Faz
- ❌ Inventar preço, duração, ponto de saída ou inclusões
- ❌ Enviar a proposta (Murillo sempre envia)
- ❌ Negociar preço (decisão de Murillo)
- ❌ Qualificar o lead → `qualificacao-lead`
- ❌ Responder objeção → `objecoes-turismo-jampa`

### Quando Usar
- Lead qualificado (status `qualificado` no CRM) e Murillo quer enviar proposta
- Lead pediu orçamento explicitamente
- Lead quer comparar 2 passeios — gerar proposta comparativa

### Quando NÃO Usar
- Lead ainda não deu data ou passeio de interesse → voltar para `qualificacao-lead`
- Lead apresentou objeção de preço antes da proposta → `objecoes-turismo-jampa` primeiro

---

## INPUT

| Campo | Obrigatório | Fonte | Descrição |
|-------|-------------|-------|-----------|
| ficha_lead | Sim | `qualificacao-lead` ou Murillo | Dados do lead (passeio, qtd, perfil, data) |
| passeio_slug | Sim | `_conhecimento/passeios.md` | Slug do passeio de interesse |
| data_viagem | Não | ficha do lead | Data para verificar disponibilidade e maré |

### Dados do `_conhecimento/` (Obrigatórios Antes de Executar)

| Arquivo | Por Que Consultar |
|---------|------------------|
| `passeios.md` | **BLOQUEANTE** — preço, slug, existência do passeio |
| `catalogo_vempassear_estruturado.md` | Roteiro detalhado, duração, ponto de saída, inclusões |
| `tom-de-voz.md` | Tom da mensagem — acolhedor, não corporativo |
| `empresa.md` | WhatsApp, Cadastur — para o CTA final |

### Fallback se Faltar Dado

- Preço não confirmado → `[CONFIRMAR COM MURILLO: preço de [passeio]]` e pausar
- Passeio não no catálogo → PARAR e avisar Murillo
- Data de viagem sem maré verificada → marcar `[VERIFICAR MARÉ para [data]]`

---

## PROCESSO

### Etapa 1 — Carregar Dados do Passeio

1. Ler `_conhecimento/passeios.md` → confirmar slug
2. Ler `_conhecimento/catalogo_vempassear_estruturado.md` → extrair:
   - Preço por pessoa (compartilhado e/ou privativo)
   - Duração
   - Ponto de saída / embarque
   - Roteiro (3-5 pontos principais)
   - O que está incluso
   - Restrições (idade, saúde, nado)

### Etapa 2 — Calcular Valor Total

```
valor_por_pessoa = [preço do catálogo]
qtd_pessoas = [da ficha do lead]
valor_total = valor_por_pessoa × qtd_pessoas
```

Se compartilhado vs. privativo: apresentar as duas opções se aplicável.

### Etapa 3 — Verificar Maré (se dependeDeMare = true)

Se o passeio depende de maré:
- Consultar `_site/data/tabua-mares.ts` para a data solicitada
- Se `revisadoPorMurillo: false` → marcar `[VERIFICAR MARÉ: Murillo confirmar janela de saída para [data]]`
- Se `revisadoPorMurillo: true` → incluir horário da saída na proposta

### Etapa 4 — Personalizar pelo Perfil

| Perfil | Ajuste de linguagem |
|--------|---------------------|
| `familia` | Mencionar segurança para crianças, colete, água rasa |
| `casal` | Destacar experiência, momento especial, privacidade se aplicável |
| `grupo-amigos` | Destacar diversão, capacidade do barco, fotos em grupo |
| `solo` | Destacar que o compartilhado é animado e seguro |

### Etapa 5 — Formatar para WhatsApp

WhatsApp não renderiza markdown. Usar:
- Emojis moderados (1-2 por bloco)
- Quebras de linha para respiração
- **Negrito** com asteriscos
- Listas com hífen ou bullet simples
- Mensagem máxima: 300 palavras (proposta deve ser lida em 30 segundos)

---

## REGRAS

- **Nunca inventar preço** — se não está no catálogo, bloqueio total
- **Nunca enviar** — saída é texto para Murillo revisar e enviar
- **Transparência de valor:** citar o que está incluso antes do preço, nunca depois
- **WhatsApp, não email:** formato conciso, sem parágrafos longos
- **CTA sempre no final:** como reservar (confirmar + pagar) em 1 linha

---

## OUTPUT

### Proposta (texto para WhatsApp)

```
Oi [Nome]! 👋

Aqui vai a proposta que você pediu:

*[Nome do Passeio]* — [duração]

📍 Saída: [ponto de saída]
📅 Data sugerida: [data]
👥 Para [N] pessoas

*O que está incluso:*
- [item 1]
- [item 2]
- [item 3]

*Valor:*
R$ [X] por pessoa
Total para [N] pessoas: R$ [Y]

[Se privativo disponível:]
Opção privativa (só seu grupo): R$ [Z]

*Como reservar:*
Só me confirmar aqui no WhatsApp — te passo os detalhes de pagamento.

Qualquer dúvida, pode perguntar! 😊
Murillo
```

### Notas para Murillo

```
NOTAS ANTES DE ENVIAR:
- [item que precisa confirmar, ex: maré da data]
- [item que está [CONFIRMAR]]
- [alternativa se data não disponível]
```

---

## COMPATIBILIDADE COM ORQUESTRADOR

| Propriedade | Valor |
|-------------|-------|
| Pipelines que usam | Pipeline I |
| Depende de (skills) | `qualificacao-lead` (ficha do lead) |
| Depende de (arquivos) | `passeios.md` (bloqueante), `catalogo_vempassear_estruturado.md`, `tom-de-voz.md` |
| Alimenta (skills) | `follow-up-comercial` (se não responder após proposta) |
| Pode rodar em paralelo com | Não — precisa da ficha qualificada |
| Posição típica no pipeline | Etapa 2 do Pipeline I |

---

*Skill v1.0 | Criado 2026-04-29 | Squad Comercial — Pipeline I*
