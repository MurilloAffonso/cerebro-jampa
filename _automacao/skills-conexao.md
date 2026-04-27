# Jampa Jarvis — Conexão com Skills do Vault

**Versão:** 0.1
**Criado:** 2026-04-27

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

### Tarefas AUTO

Skills que podem ser executadas sem aprovação:
- `jarvis-status` — apenas leitura e log
- `social-media-editorial-turismo` — gera rascunhos locais
- `radar-concorrentes-social` — pesquisa pública + relatório local
- `captura-referencias-visuais` — leitura + relatório local
- `orquestrador-projeto-turismo` — apenas planejamento, sem executar outras skills
- `aprendizado-semanal` — lê logs, gera relatório

### Tarefas APROVAÇÃO

Skills que sempre exigem aprovação antes de aplicar resultado externo:
- `programador-de-site` — altera `_site/`
- `tabua-mares-importar` — altera `_site/data/tabua-mares.ts`
- `seo-local-turismo` — pode alterar schemas e metatags
- `copywriter-vendas` — pode alterar copy em produção
- `briefing-designer` — produz entrega para terceiro
- `diretor-visual-turismo` — valida e aprova padrão visual
- `ux-ui-mobile-first` — pode gerar wireframe que vira código

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

## Referência de Skills Disponíveis

| Skill | Pasta | SKILL.md |
|-------|-------|----------|
| orquestrador-projeto-turismo | `skills/orquestrador-projeto-turismo/` | Leia antes de objetivos com 2+ skills |
| estrategista-de-site | `skills/estrategista-de-site/` | Arquitetura, URLs, CRO |
| ux-ui-mobile-first | `skills/ux-ui-mobile-first/` | Wireframe visual, mobile-first |
| copywriter-vendas | `skills/copywriter-vendas/` | Copy AIDA, FAQ, provas sociais |
| seo-local-turismo | `skills/seo-local-turismo/` | Keywords, schemas, meta tags |
| briefing-designer | `skills/briefing-designer/` | Specs para designer/Figma |
| programador-de-site | `skills/programador-de-site/` | Código Next.js, componentes |
| diretor-visual-turismo | `skills/diretor-visual-turismo/` | Padrão visual, paleta |
| radar-concorrentes-social | `skills/radar-concorrentes-social/` | Análise de concorrentes |
| captura-referencias-visuais | `skills/captura-referencias-visuais/` | Assets de referência |
| social-media-editorial-turismo | `skills/social-media-editorial-turismo/` | Calendário, pautas Instagram |
| tabua-mares-turismo | `skills/tabua-mares-turismo/` | Regras operacionais de maré |
