# /abrir-sessao

**Descrição:** Abre uma sessão de trabalho lendo o estado atual e prioridades, devolvendo resumo do que precisa ser feito hoje.

**Quando usar:**
- Começando um dia novo de trabalho
- Retomando trabalho depois de pausa
- Primeiro comando de uma nova sessão

**Entradas necessárias:**
- Nenhuma (lê direto de `_memoria/`)

**Processo:**
1. Lê `_memoria/estado-atual.md`
2. Lê `_memoria/prioridades.md`
3. Lê `_memoria/decisoes.md` (últimas 3 decisões para contexto)
4. Devolve em formato de resumo visual

**Saída esperada:**

```
═══════════════════════════════════════════════════════════════
 SESSÃO ABERTA — Vem Passear em Jampa
═══════════════════════════════════════════════════════════════

📍 ESTADO ATUAL
[Conteúdo de _memoria/estado-atual.md]

✅ PRIORIDADES DE HOJE (em ordem)
1. [Prioridade 1]
2. [Prioridade 2]
3. [Prioridade 3]
4. [Prioridade 4]
5. [Prioridade 5]

🔄 ÚLTIMAS DECISÕES
- [Decisão 1] (data)
- [Decisão 2] (data)
- [Decisão 3] (data)

❓ Quer mudar algo nas prioridades ou começar agora?
═══════════════════════════════════════════════════════════════
```

**Notas:**
- Deve ser rápido e visual
- Sempre perguntar no final se quer ajustar algo
- Não invente estado, sempre lê do arquivo
