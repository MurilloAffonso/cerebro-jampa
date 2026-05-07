# approval-policy.md

Política de aprovação do CEREBRO.JAMPA.

**Responsável:** Murillo Affonso  
**Fonte complementar:** `_automacao/riscos.md` (classificação técnica de risco)  
**Atualizado:** 2026-05-05

---

## Princípio central

> Toda ação com efeito externo, irreversível ou que toque dados reais  
> requer aprovação explícita de Murillo antes de ser executada.

---

## Três níveis de aprovação

### AUTO — executa sem aprovação

Ação segura, reversível, sem efeito externo, sem escrita fora de logs.

**Exemplos:**
- Leitura de arquivos do vault
- Geração de rascunho em `_automacao/outputs/` ou `_pipeline/`
- Execução do doctor (`jampa-doctor.mjs`, `foundation-check.mjs`)
- Consulta a schemas ou manifest

**Regras:**
- `pode_alterar_arquivos: false`
- `pode_commitar: false`
- `pode_push: false`

---

### APROVAÇÃO — prepara e aguarda

Ação que altera arquivos do projeto ou produz entrega para publicação.

**Exemplos:**
- Editar arquivo em `_site/` (código, dados, componentes)
- Editar arquivo em `_conhecimento/` ou `_memoria/`
- Criar ou alterar skill em `skills/`
- Instalar dependências npm
- Criar commit git

**Fluxo obrigatório:**
1. IA apresenta diagnóstico + plano
2. Murillo aprova por escrito
3. IA executa alteração mínima
4. IA mostra diff + resultado das validações
5. IA sugere commit — mas NÃO executa sem novo "ok" explícito

---

### BLOQUEADO — para imediatamente

Ação que não pode ser executada de forma alguma sem instrução direta e explícita.

**Exemplos:**
- `git push` para qualquer remote
- Deploy em produção
- Enviar mensagem por WhatsApp ou qualquer canal externo
- Alterar `.env`, tokens, credenciais
- Deletar arquivos ou pastas
- Acessar ou compartilhar dados de `_seguro/` ou `_crm/leads.csv`
- Rodar migração de banco de dados
- Instalar integração com serviço externo

**O que fazer quando bloqueado:**
1. Parar imediatamente
2. Relatar: `BLOQUEADO — [motivo]`
3. Aguardar instrução de Murillo
4. Nunca tentar contornar com flag `--no-verify` ou equivalente

---

## Aprovações que NÃO valem retroativamente

Aprovar uma ação uma vez NÃO autoriza a mesma ação em contexto diferente.

| Aprovação recebida | O que autoriza | O que NÃO autoriza |
|--------------------|----------------|---------------------|
| "faz o commit" | criar commit neste momento | push automático |
| "edita o arquivo X" | editar X nesta sessão | editar Y ou editar X noutra sessão |
| "instala o pacote A" | instalar A agora | instalar outros pacotes |

---

## Regras de segurança absolutas (nunca violáveis)

1. Nunca fazer `git push` sem instrução explícita na mensagem atual
2. Nunca alterar `.env` ou arquivos em `_seguro/`
3. Nunca deletar arquivos sem aprovação (mover para arquivo é mais seguro)
4. Nunca enviar mensagens para canais externos (WhatsApp, Telegram, email)
5. Nunca instalar pacotes sem explicar o motivo e receber aprovação
6. Nunca pular hooks de validação (`--no-verify`)
7. Nunca compartilhar dados de clientes de `_crm/` com ferramentas externas

---

## Referências

- Classificação técnica de risco: `_automacao/riscos.md`
- Schema de tarefa: `_automacao/schemas/tarefa-jarvis.schema.json`
- Protocolo de execução: `CLAUDE.md#protocolo-de-execucao-disciplinada`
