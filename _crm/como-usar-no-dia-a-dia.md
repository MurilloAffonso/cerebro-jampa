# Como Usar o CRM no Dia a Dia

**Para:** Murillo
**Tempo médio:** 2 min por lead
**Ferramenta:** Cole a conversa do WhatsApp aqui no Claude Code

---

## Quando Cadastrar um Lead

Todo contato de WhatsApp que pede informação sobre passeio vira um lead. Mesmo que não feche.

**Cadastrar quando:**
- Pessoa perguntou sobre preço ou disponibilidade
- Pessoa pediu mais informações sobre qualquer passeio
- Pessoa enviou localização ou "quero ir"

**Não cadastrar:**
- Mensagem errada / número errado
- Apenas "oi" sem contexto de passeio

---

## Fluxo Padrão (2 minutos por lead)

```
1. Chegou mensagem → cole aqui: "qualifica esse lead" + [cole a conversa]
2. Claude devolve ficha + linha CSV
3. Cole a linha no Google Sheets
4. Conforme a conversa avança, mude o status no Sheets
```

---

## Quando Usar Cada Skill

### `qualificacao-lead`
**Use quando:** chegou lead novo ou retomou contato e você quer estruturar as informações.
**Como acionar:** "qualifica esse lead" + [cole a conversa do WhatsApp]
**Resultado:** ficha estruturada + linha pronta para o CSV

---

### `proposta-passeio`
**Use quando:** lead já tem data + passeio de interesse definidos.
**Como acionar:** "gera proposta para [nome] — passeio [slug], [N] pessoas, data [YYYY-MM-DD]"
**Resultado:** texto formatado para WhatsApp, pronto para você revisar e enviar

**Não use antes de ter:** data de viagem, passeio de interesse, quantidade de pessoas

---

### `follow-up-comercial`
**Use quando:** enviou proposta há mais de 24h e não teve resposta.
**Como acionar:** "gera follow-up para [nome] — proposta enviada em [data], passeio [slug]"
**Resultado:** 4 mensagens prontas (T1 a T4) com datas de envio

**Regra:** máximo 4 toques. Após T4 sem resposta → marcar `perdido` no CSV.

---

### `objecoes-turismo-jampa`
**Use quando:** lead respondeu com resistência, dúvida ou comparação.
**Como acionar:** "responde essa objeção: [cole a mensagem do lead]"
**Resultado:** resposta empática adaptada ao contexto, pronta para revisar e enviar

**Exemplos de objeção:** "tá caro", "vi mais barato", "deixa eu pensar", "e se chover?"

---

### `agente-atendimento-pre-passeio`
**Use quando:** passeio é amanhã e você quer enviar o lembrete D-1.
**Como acionar:** "gera lembrete D-1 para [nome] — passeio [slug] amanhã"
**Resultado:** mensagem completa com ponto de encontro, horário, o que levar

---

### `agente-pos-venda`
**Use quando:** passeio foi realizado hoje ou ontem.
**Como acionar:** "gera pós-venda para [nome] — fez [slug] hoje"
**Resultado:** mensagem D+1 (agradecimento) + mensagem D+3 (link avaliação Google)

---

## Como Atualizar o Status

Abra o Google Sheets e mude a coluna `status`:

| Quando | Status |
|--------|--------|
| Primeiro contato | `novo` |
| Tem data + passeio + qtd pessoas | `qualificado` |
| Você enviou a proposta | `proposta-enviada` |
| Lead disse "tá caro" ou "deixa eu pensar" | `objecao` |
| Lead confirmou e vai pagar | `fechado` |
| 5 dias sem resposta após T4 | `perdido` |

---

## Atualizações Rápidas de Observações

Quando acontecer algo relevante, adicione em `observacoes`:
- "passeio realizado em 2026-05-10"
- "avaliação Google: sim"
- "marido tem mobilidade reduzida — confirmar embarque"
- "indicou 2 amigos"

---

## Sincronização Semanal (5 min toda sexta)

1. Exportar Google Sheets → substituir `_crm/leads.csv`
2. Digitar aqui: "gera painel KPI" → Claude lê o CSV e gera o relatório semanal
3. Relatório salvo em `_automacao/relatorios/semanal-YYYY-WW.md`

---

*v1.0 | 2026-04-30*
