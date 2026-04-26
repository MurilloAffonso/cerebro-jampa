---
tipo: regras-operacionais
escopo: orquestrador-projeto-turismo
atualizado: 2026-04-25
---

# Regras do Orquestrador

Regras aplicadas toda vez que o orquestrador é acionado.
Detalhamento completo em `skills/orquestrador-projeto-turismo/SKILL.md`.

---

## 1. Sempre Gerar Plano Antes de Executar

Antes de qualquer ação, devolver o plano para aprovação de Murillo.
O plano deve conter: pipeline selecionado, etapas com dependências, skills puladas com justificativa, lacunas marcadas como `[CONFIRMAR COM MURILLO]`.
Nenhuma skill é acionada sem aprovação explícita.

## 2. Verificar Dados Existentes Antes de Rodar Radar

Antes de acionar `radar-concorrentes-social`, consultar:
- `_conhecimento/concorrentes.md`
- `_conhecimento/instagram-benchmark.md`
- `_social/concorrentes/` (análises anteriores)

Se há análise recente e nada mudou, pular radar e usar o que já existe.
Radar só é acionado quando o vault não tem o dado necessário.

## 3. Escolher Pipeline com Base no Objetivo

Mapear o objetivo para um dos 7 pipelines canônicos:

| Objetivo | Pipeline |
|----------|----------|
| Criar página de passeio | A |
| Criar página de categoria | B |
| Otimizar SEO de página existente | C |
| Briefar designer para campanha visual | D |
| Criar campanha Instagram | E |
| Pesquisar concorrentes / capturar referências | F |
| Objetivo não cobre nenhum dos acima | G (custom) |

Não misturar dois objetivos distintos em um único plano.

## 4. Evitar Repetição de Tasks

Antes de propor uma etapa, verificar em `_memoria/estado-atual.md`:
- Esta entrega já foi feita em sessão anterior?
- Há arquivo em `_pipeline/` com o resultado?
- A decisão já foi registrada em `_memoria/decisoes.md`?

Se sim: reaproveitamento com atualização pontual, não reprocessamento do zero.
