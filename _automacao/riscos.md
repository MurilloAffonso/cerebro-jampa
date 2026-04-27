# Jampa Jarvis — Classificação de Riscos

**Versão:** 0.2
**Atualizado:** 2026-04-27

Todo workflow e toda tarefa Jarvis recebe obrigatoriamente uma das três classificações. A classificação determina nível de autonomia, o que pode ser tocado e se Murillo precisa aprovar.

---

## AUTO — Autonomia Total

**Definição:** Tarefa segura, 100% reversível, sem efeito externo, sem publicação.

Jarvis executa sem qualquer intervenção humana.

**Schema:** `risco: "auto"`, `autonomia: "total"`, `precisa_aprovacao: false`

**Critérios obrigatórios (todos devem ser verdadeiros):**
- `pode_alterar_arquivos: false` — não escreve fora de `_automacao/logs/`
- `pode_commitar: false` — sem commits
- `pode_push: false` — sem push
- Sem chamada de rede que afete sistemas externos
- Resultado reversível: desfazer = deletar o log

### Tarefas AUTO permitidas

| Tarefa | Descrição |
|--------|-----------|
| Status do projeto | Lê git status, proximos-passos, conta tarefas pendentes |
| Organizar backlog | Sugere reordenação de prioridades (só leitura + log) |
| Gerar rascunho de copy | Cria copy de passeio em log local — não altera `_site/` |
| Gerar linha editorial Instagram | 8-12 pautas em arquivo de log — não publica |
| Criar estratégia de Instagram | Calendário e ângulos temáticos em log |
| Planejamento de site | Árvore de URLs, estrutura, wireframe textual em log |
| Pesquisar referências públicas | WebSearch de benchmarks, concorrentes, imagens |
| Criar estratégia de SEO | Keywords, meta tags sugeridas em log |
| QA local | Verificar TypeScript (`npm run type-check`), lint, estrutura |
| Sugerir melhoria | Análise de copy, SEO, estrutura existente — só sugestão |
| Aprendizado semanal | Lê logs da semana, gera relatório de padrões |
| Relatório de concorrentes | Pesquisa web + análise em log |

---

## APROVAÇÃO — Autonomia Parcial

**Definição:** Tarefa que produz entrega real — código, conteúdo em produção, ação externa. Jarvis prepara e para. Murillo revisa e libera.

**Schema:** `risco: "aprovacao"`, `autonomia: "parcial"`, `precisa_aprovacao: true`, `aprovado_por_murillo: false`

**Jarvis só aplica quando:** `aprovado_por_murillo: true`

**Critérios:** pelo menos um dos seguintes:
- Escreve em `_site/`, `_memoria/`, `_conhecimento/`
- Faz chamada de rede com autenticação
- Cria commit ou PR
- Envia mensagem a terceiros (WhatsApp, Telegram)
- Altera dado que aparece para o cliente

### Tarefas APROVAÇÃO

| Tarefa | Motivo da aprovação |
|--------|---------------------|
| Alterar `_site/` | Código em produção |
| Commit git | Irreversível sem revert |
| Push / PR | Visível externamente |
| Publicar conteúdo (post, story) | Publicação pública |
| Enviar mensagem a cliente | Comunicação oficial |
| Alterar preço de passeio | Dado financeiro crítico |
| Mudar política comercial | Impacto jurídico |
| Tráfego pago (criar campanha) | Risco de gasto sem controle |
| Deploy em produção | Site ao vivo |
| Usar automação com conta logada | Ação autenticada em nome de Murillo |
| Importar tábua de marés | Altera dado operacional público |
| Alterar `_memoria/proximos-passos.md` | Altera estado do projeto |
| Criar nova skill ou template | Altera estrutura do sistema |

**Staging obrigatório:** entrega fica em `_automacao/logs/staging/` até `aprovado_por_murillo: true`.

---

## BLOQUEADO — Sem Execução

**Definição:** Tarefa que Jarvis identifica, recusa executar, registra e notifica. Nenhuma skill é acionada.

**Schema:** `risco: "bloqueado"`, `autonomia: "nenhuma"`, `motivo_bloqueio: "[texto obrigatório]"`

**O que Jarvis faz:**
1. Registra bloqueio em `_automacao/logs/YYYY-MM-DD-bloqueio.log`
2. Descreve campo e valor exato que causou o bloqueio
3. Sugere ação para Murillo desbloquear
4. Para completamente — sem tentativa de contorno

### Tarefas BLOQUEADAS (sempre)

| Categoria | Exemplos |
|-----------|---------|
| Credenciais | Acessar `.env`, tokens, senhas, chaves de API |
| Pagamento | Gastar verba de anúncio, fazer cobrança, alterar plano pago |
| Exclusão permanente | Deletar arquivos do vault, `git reset --hard`, dropar banco |
| Scraping proibido | Baixar conteúdo de site sem permissão explícita |
| Mídia de terceiros | Usar imagem, vídeo ou áudio sem autorização comprovada |
| Prometer sem base | Afirmar disponibilidade, preço ou itinerário sem fonte em `_conhecimento/` |
| Publicar em produção sozinho | Deploy, push para main, publicar post sem aprovação |
| Dado sem `revisadoPorMurillo` | Usar `revisadoPorMurillo: false` como dado oficial |
| Inventar fato | Criar depoimento, parceria ou dado operacional sem fonte |
| Alterar `_conhecimento/` | Fonte de verdade — só muda com confirmação explícita |

---

## Tabela de Decisão Rápida

| Condição | Classificação |
|----------|--------------|
| Só lê + só grava em `_automacao/logs/` | **AUTO** |
| Gera rascunho local (sem publicar) | **AUTO** |
| Pesquisa web pública (sem autenticação) | **AUTO** |
| Escreve em `_site/` ou `_memoria/` | **APROVAÇÃO** |
| Faz commit, push ou PR | **APROVAÇÃO** |
| Envia mensagem ou publica conteúdo | **APROVAÇÃO** |
| Envolve credenciais, `.env` ou tokens | **BLOQUEADO** |
| Envolve pagamento ou exclusão | **BLOQUEADO** |
| `revisadoPorMurillo: false` em dado público | **BLOQUEADO** |
| Campo com `[CONFIRMAR COM MURILLO]` | **BLOQUEADO** |
| Inventar dado não rastreável ao vault | **BLOQUEADO** |

---

## Regra de Ouro

> **Dúvida entre AUTO e APROVAÇÃO? → APROVAÇÃO.**
> **Dúvida entre APROVAÇÃO e BLOQUEADO? → BLOQUEADO.**
> O custo de pedir aprovação desnecessária é baixo. O custo de agir sem aprovação é alto.

---

## Histórico

| Versão | Data | Mudança |
|--------|------|---------|
| 0.1 | 2026-04-27 | Versão inicial — 3 categorias, critérios base |
| 0.2 | 2026-04-27 | Expansão de exemplos por categoria, tabela de decisão, regra de ouro |
