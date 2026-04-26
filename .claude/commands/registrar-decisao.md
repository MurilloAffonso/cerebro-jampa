# /registrar-decisao

**Descrição:** Registra uma decisão importante em `_memoria/decisoes.md` com data, contexto e impacto.

**Quando usar:**
- Aprovou uma estrutura de site
- Definiu prioridade de passeios
- Descartou uma ideia com razão importante
- Mudou direção de conteúdo ou SEO
- Definiu tom de voz ou CTA padrão

**Entradas necessárias:**
- Qual foi a decisão? (descrição clara)
- Por quê? (contexto/razão)
- Que afeta? (que arquivo, que página, que skill)

**Processo:**
1. Coleta 3 informações do usuário (acima)
2. Formata entrada com data (YYYY-MM-DD HH:MM)
3. Adiciona em `_memoria/decisoes.md`
4. Devolve confirmação

**Saída esperada:**

Entrada adicionada em `_memoria/decisoes.md`:

```
### 2026-04-25 10:30 — [TÍTULO DA DECISÃO]

**Decisão:** [Descrição clara do que foi decidido]

**Razão:** [Por quê — contexto, impacto no negócio, restrição, oportunidade]

**Afeta:** [Qual arquivo, página, skill, decisão anterior?]

---
```

**Exemplo:**
```
### 2026-04-25 14:00 — CTA Padrão é WhatsApp, Não Email

**Decisão:** Todos os CTAs apontam para WhatsApp. Email é canal secundário apenas para confirmação pós-venda.

**Razão:** Turista móvel chega em JP com WhatsApp aberto. Email é mais lento. Precisamos de conversação em tempo real.

**Afeta:** Todos os templates (pagina-de-passeio.md, copy-landing.md), todas as páginas em _site/

---
```

**Notas:**
- Sempre incluir raciocínio (o "por quê") para contexto futuro
- Usar data e hora para rastreabilidade
- Referênciar afeta claramente (qual arquivo mudou por causa disto)
