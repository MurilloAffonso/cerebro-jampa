# /auditar-conhecimento

**Descrição:** Varre `_conhecimento/` e lista lacunas, gerando pergunta estruturadas para Murillo preencher.

**Quando usar:**
- Antes de começar a gerar conteúdo do site
- Quando se depara com `[CONFIRMAR COM MURILLO]` demais
- Semanalmente, para certificar que nada está faltando
- Quando vai publicar página e quer validar que baseou em dados reais

**Entradas necessárias:**
- Nenhuma (lê direto de `_conhecimento/`)

**Processo:**
1. Varre cada arquivo em `_conhecimento/`
2. Procura por `[CONFIRMAR COM MURILLO]` ou placeholders
3. Agrupa por arquivo
4. Cria pergunta estruturada para preencher cada lacuna
5. Ordena por prioridade (o que bloqueia mais trabalho vem primeiro)

**Saída esperada:**

```
═══════════════════════════════════════════════════════════════
 AUDITORIA DE CONHECIMENTO — Vem Passear em Jampa
═══════════════════════════════════════════════════════════════

🔴 FALTAM 27 CONFIRMAÇÕES em _conhecimento/

Prioridade: ALTA
────────────────────────────────────────────────────────────

📄 empresa.md (5 perguntas)
1. Qual é o slogan ou mission statement da Vem Passear em Jampa?
2. Quantos anos a agência tem (ou quando foi fundada)?
3. Quantos clientes já atendeu (aproximadamente)?
4. Qual é o tamanho do time (guias, operacional)?
5. Qual é o ticket médio de passeio?

📄 passeios.md (8 perguntas)
1. Qual é o passeio mais popular?
2. Qual é o passeio com maior margem?
3. Quantos passeios diferentes a agência oferece?
4. [...]

[... outros arquivos ...]

────────────────────────────────────────────────────────────

Prioridade: MÉDIA
────────────────────────────────────────────────────────────

[... menos urgentes ...]

────────────────────────────────────────────────────────────

💡 SUGESTÃO
Preencher empresa.md PRIMEIRO (bloqueia todas as outras páginas).
Depois: passeios.md e publico-alvo.md (precisa para copy e SEO).

═══════════════════════════════════════════════════════════════
```

**Notas:**
- Ordenar por impacto (o que bloqueia mais trabalho)
- Máximo 5 perguntas por arquivo (não sobrecarregar)
- Sempre sugerir qual arquivo começar
