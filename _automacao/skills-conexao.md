# Jampa Jarvis — Conexão com Skills do Vault

**Versão:** 0.2
**Criado:** 2026-04-27
**Atualizado:** 2026-05-04 — sincronizado com `skills/manifest.json` (21 skills)
**Fonte de verdade do inventário:** `skills/manifest.json`

Define como o Jarvis seleciona, conecta e executa as skills profissionais do vault (`skills/`).

---

## Regra Central: n8n Não Executa Skills

```
n8n NÃO ────────────────────────────────────► skills/ (proibido)

n8n ─────────► cria tarefa JSON ─────────────► _automacao/tasks/
                                                      │
                                              Claude Code lê a tarefa
                                                      │
                                              Claude Code consulta skills/[nome]/SKILL.md
                                                      │
                                              Claude Code executa
```

**Por quê:** n8n não tem contexto do vault, não conhece as regras de conteúdo, não sabe o que é permitido inventar. Ele só organiza e dispara. Claude Code é o executor inteligente.

---

## Quando Usar o Orquestrador

O orquestrador (`skills/orquestrador-projeto-turismo/`) é o **ponto de entrada obrigatório** para tarefas complexas.

**Usar orquestrador quando (`usar_orquestrador: true`):**
- Objetivo envolve 2 ou mais skills
- Objetivo é vago ("criar página", "campanha Instagram")
- `tipo` é `site-planejamento`, `site-implementacao` ou `pagina-passeio`
- Resultado afeta múltiplos arquivos ou diretórios

**Ir direto à skill quando (`usar_orquestrador: false`):**
- Objetivo envolve claramente 1 skill
- Tarefa é operacional e definida ("gera schema FAQ para Seixas")
- `tipo` é `status-check`, `tabua-mares`, `conteudo-instagram`

**O orquestrador:**
1. Recebe o objetivo da tarefa
2. Seleciona skills necessárias + ordem de execução
3. Devolve **plano para aprovação** — nunca executa diretamente
4. Murillo aprova → skills executam em sequência ou paralelo

---

## Mapeamento de Tipos de Tarefa para Skills

### Site e Passeios

| Objetivo | Skills (em ordem) | Orquestrador |
|----------|------------------|--------------|
| Nova página de passeio (completa) | orquestrador → estrategista-de-site → (copywriter-vendas + ux-ui-mobile-first em paralelo) → seo-local-turismo → briefing-designer → programador-de-site | Obrigatório |
| Planejamento de site (sem código) | orquestrador → estrategista-de-site → ux-ui-mobile-first | Obrigatório |
| Só implementar código (entrega aprovada) | programador-de-site | Não |
| Copy de passeio já existente | copywriter-vendas | Não |
| SEO de página existente | seo-local-turismo | Não |
| Briefing para designer | briefing-designer | Não |

### Tábua de Marés

| Objetivo | Skill | Orquestrador |
|----------|-------|--------------|
| Importar dados do CHM | tabua-mares-importar | Não |
| Validar dados importados | tabua-mares-validar | Não |
| Regras operacionais / saída sugerida | tabua-mares-turismo | Não |
| Calendário mensal completo | orquestrador → tabua-mares-turismo → seo-local-turismo | Sim |

### Social e Conteúdo

| Objetivo | Skill | Orquestrador |
|----------|-------|--------------|
| Linha editorial Instagram | social-media-editorial-turismo | Não |
| Analisar concorrentes | radar-concorrentes-social | Não |
| Capturar referências visuais | captura-referencias-visuais | Não |
| Validar padrão visual | diretor-visual-turismo | Não |
| Campanha completa (pauta + visual + copy) | orquestrador → social-media-editorial-turismo + diretor-visual-turismo + copywriter-vendas | Sim |

### Squad Comercial

| Objetivo | Skill | Orquestrador |
|----------|-------|--------------|
| Roteamento de objetivo comercial vago | agente-comercial-jampa | Não (é o próprio router) |
| Qualificar lead novo do WhatsApp | agente-comercial-jampa → qualificacao-lead | Não |
| Montar proposta para lead qualificado | agente-comercial-jampa → proposta-passeio | Não |
| Responder objeção identificada | agente-comercial-jampa → objecoes-turismo-jampa | Não |
| Lead sem resposta há 24h+ (sequência T1-T4) | agente-comercial-jampa → follow-up-comercial | Não |
| Confirmação D-1 antes do passeio | agente-atendimento-pre-passeio | Não |
| Pós-venda D+1 (agradecimento) e D+3 (avaliação) | agente-pos-venda | Não |

### Dados / Operacional

| Objetivo | Skill | Orquestrador |
|----------|-------|--------------|
| Relatório semanal de KPIs (sexta 17h) | painel-kpi-vempassear | Não |
| Briefing + prompt para Lovable.dev (experimental) | lovable-site-builder | Não |

---

## Como Claude Code Executa uma Tarefa com Skills

```
1. Lê _automacao/tasks/[id].json
2. Verifica risco e autonomia
3. Se usar_orquestrador: true → lê skills/orquestrador-projeto-turismo/SKILL.md primeiro
4. Lê skills/[skill_primaria]/SKILL.md
5. Lê arquivos de fontes listados em fontes[]
6. Consulta _memoria/decisoes-estrategicas.md (regras vinculantes)
7. Executa conforme SKILL.md
8. Grava resultado em log_path
9. Atualiza status da tarefa (auto: concluida | aprovacao: aguardando-aprovacao)
```

---

## Regras de Uso de Skills por Risco

> **Nota:** lista derivada de `skills/manifest.json` — campo `risco` por skill. Doctor (`node _automacao/scripts/jampa-doctor.mjs`) detecta divergência.

### Tarefas AUTO (executam sem aprovação)

Apenas leitura, planejamento ou rascunho local — não tocam em produção:
- `orquestrador-projeto-turismo` — só planeja, nunca executa
- `radar-concorrentes-social` — pesquisa pública + relatório local
- `captura-referencias-visuais` — leitura + relatório local
- `social-media-editorial-turismo` — gera pautas locais
- `agente-comercial-jampa` — apenas roteia (router)
- `qualificacao-lead` — gera ficha local em rascunho
- `painel-kpi-vempassear` — relatório a partir do CSV
- `lovable-site-builder` — gera briefing/prompt em arquivos locais

### Tarefas APROVAÇÃO (preparam staging, Murillo aprova antes de aplicar)

Tocam em produção, no site ou em mensagem que vai para cliente:
- `estrategista-de-site` — define arquitetura que vira código
- `ux-ui-mobile-first` — wireframe que vira código
- `copywriter-vendas` — copy em produção
- `seo-local-turismo` — meta tags, schemas
- `diretor-visual-turismo` — validação de padrão visual
- `briefing-designer` — entrega para terceiro
- `programador-de-site` — altera `_site/`
- `tabua-mares-turismo` — altera `_site/data/tabua-mares.ts`
- `proposta-passeio` — mensagem para cliente
- `objecoes-turismo-jampa` — mensagem para cliente
- `follow-up-comercial` — mensagem para cliente
- `agente-atendimento-pre-passeio` — mensagem para cliente
- `agente-pos-venda` — mensagem para cliente

### Skills NUNCA executam em tarefas BLOQUEADO

Quando `risco: "bloqueado"`, nenhuma skill executa. Jarvis apenas registra motivo e para.

---

## A Skill Deve Aparecer no Log

Toda execução registra em `_automacao/logs/`:

```
Skill executada: [nome]
SKILL.md consultado: skills/[nome]/SKILL.md
Fontes consultadas: [lista de arquivos]
Resultado: [sucesso | parcial | falhou]
Entrega: [caminho ou "aguardando-aprovacao"]
```

Sem esse registro, a execução não é auditável e não conta como concluída.

---

## Handoff Entre Skills (Pipeline)

Quando uma tarefa aciona múltiplas skills em sequência, o campo `handoff_para` conecta:

```json
{
  "skill_primaria": "copywriter-vendas",
  "handoff_para": "briefing-designer",
  "resultado_esperado": "Copy aprovada + briefing visual gerado"
}
```

O Jarvis cria automaticamente uma nova tarefa-filho com:
- `skill_primaria` = valor de `handoff_para`
- `origem` = `"jarvis-ciclo-diario"`
- `fontes` = resultado da tarefa pai

---

## Referência de Skills Disponíveis (21)

> Tabela derivada de `skills/manifest.json`. Para detalhe completo (gatilhos, arquivos relacionados, pipeline), ler o manifest. Visão humana com pipelines em `skills/README.md`.

| Skill | Categoria | Risco | SKILL.md |
|-------|-----------|-------|----------|
| orquestrador-projeto-turismo | orquestracao | auto | `skills/orquestrador-projeto-turismo/SKILL.md` |
| estrategista-de-site | site | aprovacao | `skills/estrategista-de-site/SKILL.md` |
| ux-ui-mobile-first | site | aprovacao | `skills/ux-ui-mobile-first/SKILL.md` |
| copywriter-vendas | site | aprovacao | `skills/copywriter-vendas/SKILL.md` |
| seo-local-turismo | site | aprovacao | `skills/seo-local-turismo/SKILL.md` |
| diretor-visual-turismo | visual | aprovacao | `skills/diretor-visual-turismo/SKILL.md` |
| briefing-designer | site | aprovacao | `skills/briefing-designer/SKILL.md` |
| programador-de-site | site | aprovacao | `skills/programador-de-site/SKILL.md` |
| captura-referencias-visuais | visual | auto | `skills/captura-referencias-visuais/SKILL.md` |
| radar-concorrentes-social | social | auto | `skills/radar-concorrentes-social/SKILL.md` |
| social-media-editorial-turismo | social | auto | `skills/social-media-editorial-turismo/SKILL.md` |
| tabua-mares-turismo | operacional | aprovacao | `skills/tabua-mares-turismo/SKILL.md` |
| lovable-site-builder | site (experimental) | auto | `skills/lovable-site-builder/SKILL.md` |
| agente-comercial-jampa | comercial (router) | auto | `skills/agente-comercial-jampa/SKILL.md` |
| qualificacao-lead | comercial | auto | `skills/qualificacao-lead/SKILL.md` |
| proposta-passeio | comercial | aprovacao | `skills/proposta-passeio/SKILL.md` |
| objecoes-turismo-jampa | comercial | aprovacao | `skills/objecoes-turismo-jampa/SKILL.md` |
| follow-up-comercial | comercial | aprovacao | `skills/follow-up-comercial/SKILL.md` |
| agente-atendimento-pre-passeio | comercial | aprovacao | `skills/agente-atendimento-pre-passeio/SKILL.md` |
| agente-pos-venda | comercial | aprovacao | `skills/agente-pos-venda/SKILL.md` |
| painel-kpi-vempassear | dados | auto | `skills/painel-kpi-vempassear/SKILL.md` |
