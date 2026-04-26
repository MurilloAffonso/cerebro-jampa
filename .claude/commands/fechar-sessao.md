# /fechar-sessao

**Descrição:** Fecha sessão de trabalho, atualizando memória e criando ata datada da sessão.

**Quando usar:**
- Terminando dia de trabalho
- Antes de passar tarefa para outra pessoa
- Mudaram as prioridades ou o estado mudou

**Entradas necessárias:**
- Nenhuma (interage com usuário para coletar)

**Processo:**
1. Pergunta: "O que você fez hoje?"
2. Pergunta: "Mudaram as prioridades?"
3. Pergunta: "Tem decisão nova para registrar?"
4. Atualiza `_memoria/estado-atual.md` com novo estado
5. Atualiza `_memoria/prioridades.md` se mudaram
6. Cria arquivo `_sessoes/[YYYY-MM-DD]-sessao.md` com ata

**Saída esperada:**

```
═══════════════════════════════════════════════════════════════
 SESSÃO FECHADA — Vem Passear em Jampa
═══════════════════════════════════════════════════════════════

📝 ATA DE SESSÃO
Data: 2026-04-25

## O Que Foi Feito
1. [Ação 1]
2. [Ação 2]
3. [Ação 3]

## Decisões
- [Decisão 1]
- [Decisão 2]

## Estado Novo
[Atualizado em _memoria/estado-atual.md]

## Próximos Passos
1. [Próximo]
2. [Próximo]

✅ Memória atualizada em:
   - _memoria/estado-atual.md
   - _memoria/prioridades.md
   - _sessoes/2026-04-25-sessao.md

═══════════════════════════════════════════════════════════════
```

**Arquivo criado:**
`_sessoes/[YYYY-MM-DD]-sessao.md`

**Notas:**
- Sempre criar arquivo de ata, nunca pular este passo
- Atualizar memória é obrigatório
