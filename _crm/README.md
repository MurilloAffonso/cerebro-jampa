# CRM Mínimo — Vem Passear em Jampa

**Versão:** 1.0
**Criado:** 2026-04-29
**Ferramenta:** `_crm/leads.csv` (versionado no vault) + Google Sheets espelho (vivo, editável por Murillo)
**Propósito:** Registrar cada lead recebido no WhatsApp, acompanhar o funil e gerar os 5 KPIs semanais.

---

## Por Que Este CRM Existe

Antes da Arquitetura 2.0, **nenhuma conversa de WhatsApp era registrada**. Sem registro:
- Impossível saber taxa de fechamento real
- Impossível identificar objeção mais comum
- Impossível medir tempo de resposta
- Impossível fazer follow-up estruturado

O CRM resolve isso com **custo zero** (CSV + Google Sheets) e **sem burocracia**.

---

## Como Murillo Alimenta

### Fluxo diário (1-2 minutos por lead)

1. Chega mensagem de lead no WhatsApp
2. Murillo cola a conversa no Claude Code: `"qualifica esse lead"`
3. Claude aciona `agente-comercial-jampa` → skill `qualificacao-lead`
4. Claude devolve ficha estruturada + linha pronta para o CSV
5. Murillo cola a linha no Google Sheets (ou o Claude atualiza o CSV)
6. Murillo atualiza o campo `status` conforme a conversa avança

### Atualização de status (30 segundos)

Murillo abre o Sheets e muda `status` conforme a conversa avança:
- Lead pediu proposta? → `proposta-enviada`
- Lead fechou? → `fechado`
- Lead sumiu por 5 dias? → `perdido`

---

## Os 15 Campos

| # | Campo | Tipo | Exemplo | Origem |
|---|-------|------|---------|--------|
| 1 | `id` | string | `2026-05-03-001` | auto (data + sequencial) |
| 2 | `nome` | string | `Maria Souza` | qualificacao-lead |
| 3 | `telefone` | string | `+5511987654321` | manual (de WhatsApp) |
| 4 | `origem` | enum | `gmb` / `site` / `instagram` / `indicacao` / `outros` | qualificacao-lead |
| 5 | `data_viagem` | date | `2026-06-15` | qualificacao-lead |
| 6 | `passeio_interesse` | string | `seixas` (slug do catálogo) | qualificacao-lead |
| 7 | `qtd_pessoas` | int | `4` | qualificacao-lead |
| 8 | `perfil` | enum | `familia` / `casal` / `grupo-amigos` / `solo` / `morador-local` | qualificacao-lead |
| 9 | `status` | enum | ver tabela abaixo | manual + agente |
| 10 | `ultima_interacao` | datetime | `2026-05-03 14:32` | manual |
| 11 | `proximo_followup` | date | `2026-05-04` | follow-up-comercial |
| 12 | `objecao_principal` | string | `preco-alto` | objecoes-turismo-jampa |
| 13 | `valor_estimado` | float | `320.00` | proposta-passeio |
| 14 | `motivo_perda` | string | `decidiu-pousada-com-passeio-incluido` | manual no fechamento |
| 15 | `observacoes` | text | `Marido tem mobilidade reduzida — confirmar acesso embarque` | qualificacao-lead + Murillo |

---

## Fluxo de Status

```
novo → qualificado → proposta-enviada → fechado
                  ↘ objecao → proposta-enviada → fechado
                                              ↘ perdido
```

| Status | Significado | Quem define |
|--------|-------------|-------------|
| `novo` | Primeira mensagem recebida, qualificação incompleta | agente / Murillo |
| `qualificado` | 4 dos 7 campos centrais preenchidos (data, passeio, qtd, perfil) | agente após qualificacao-lead |
| `proposta-enviada` | Lead recebeu proposta e Murillo enviou | Murillo |
| `objecao` | Lead respondeu com dúvida ou resistência | Murillo / agente |
| `fechado` | Lead confirmou e pagou (ou comprometeu pagamento) | Murillo |
| `perdido` | 5 dias sem resposta após T4, ou recusa explícita | Murillo |

---

## 5 KPIs Semanais (lidos toda sexta 17h)

| # | KPI | Como calcular | Meta mês 1 | Meta mês 3 |
|---|-----|---------------|-----------|-----------|
| 1 | Leads recebidos por origem | Contar novos na semana, agrupar por `origem` | Linha de base | +20% vs mês 1 |
| 2 | Tempo médio de resposta | `ultima_interacao` - hora estimada da 1ª mensagem | Linha de base | < 2h em 80% |
| 3 | Taxa de fechamento | `fechado` / (`fechado` + `perdido`) na semana | Linha de base | 30% |
| 4 | Motivo de perda — top 1 | Moda da coluna `motivo_perda` | Identificar | Reduzir 30% |
| 5 | Avaliações Google novas | Diferença GMB esta semana - semana passada | +1/semana | +3/semana |

---

## Google Sheets Espelho (Vivo)

**Para criar:** abrir Google Sheets, criar planilha `CRM — Vem Passear em Jampa`, colar o header do `leads.csv` na linha 1, ativar filtros.

**Sheet 1:** `leads` — todos os campos acima  
**Sheet 2:** `painel` — fórmulas que calculam os 5 KPIs automaticamente (adicionar quando tiver 10+ leads)

**Regra:** o `leads.csv` neste vault é o histórico versionado. O Google Sheets é o dia-a-dia. Sincronizar semanalmente (exportar Sheets → substituir CSV → commit).

---

## Regras Invioláveis

- Nunca inventar dado de lead — só registrar o que Murillo confirmar
- `telefone` é dado pessoal — não compartilhar fora do vault
- `motivo_perda` é aprendizado, não julgamento — registrar com objetividade
- Toda objeção nova que aparecer e não estiver em `_conhecimento/objecoes.md` → adicionar lá
- Lead `perdido` não é lixo — é dado de melhoria contínua

---

*v1.0 | Criado 2026-04-29 | Skill de alimentação: `agente-comercial-jampa` → `qualificacao-lead`*
