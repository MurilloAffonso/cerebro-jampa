# Checklist de Validação — Homepage Vem Passear em Jampa

**Uso:** Avaliar o resultado gerado pelo Claude Design ANTES de passar para `programador-de-site`  
**Fonte:** `_conhecimento/branding/referencia-prompt-visual-murillo.md §8`  
**Versão:** 1.0 | Criado: 2026-04-27  

---

## Parte 1 — Checklist Antes de Enviar ao Claude Design

Execute antes de colar o prompt:

- [ ] Todas as lacunas `[CONFIRMAR COM MURILLO]` foram resolvidas ou aceitas como placeholder?
- [ ] O arquivo `prompt-final-claude-design.md` está revisado e sem dados inventados?
- [ ] A paleta (#004E89, #FF6B35, #FFFFFF, #F5F5F5, #1A1A1A) está correta no prompt?
- [ ] A tipografia (Lora + Inter) está especificada?
- [ ] A descrição mobile-first está clara no prompt?
- [ ] Os 5 passeios dos cards têm preço, duração e categoria corretos?
- [ ] O WhatsApp CTA usa o link correto: https://wa.me/558399087830?
- [ ] Está claro que imagens são placeholder (não URLs reais)?

---

## Parte 2 — Critérios Bloqueantes (Reprovam o Design)

Se qualquer item abaixo falhar, o design não avança para implementação:

- [ ] **Identidade:** Com o nome coberto, um turista planejando JP reconheceria que é sobre Vem Passear em Jampa especificamente? → Se não: **REPROVAR**
- [ ] **CTA visível sem scroll (mobile):** O botão WhatsApp está visível sem nenhum scroll no hero? → Se não: **REPROVAR**
- [ ] **Prova social acima da dobra:** Cadastur OU nota 4.9 aparece antes do primeiro scroll? → Se não: **REPROVAR**
- [ ] **Contraste WCAG AA:** Texto sobre fundo claro ≥ 4.5:1, sobre fundo escuro ≥ 4.5:1? → Se não: **REPROVAR**
- [ ] **Mobile funcional:** Design funciona corretamente em 320px sem scroll horizontal? → Se não: **REPROVAR**

---

## Parte 3 — Critérios de Qualidade (Orientam Ajuste)

Itens que podem gerar pedido de ajuste na iteração:

**Identidade Visual**
- [ ] Paleta respeitada? (#004E89, #FF6B35 — sem cores não autorizadas)
- [ ] Tipografia correta? (Lora para H1/H2, Inter para corpo)
- [ ] Sem visuais proibidos? (ondas clip-art, sol genérico, âncora não refinada)
- [ ] Foto hero tem cara de João Pessoa / litoral paraibano?
- [ ] Murillo aparece no bloco de diferenciais?

**Layout e Hierarquia**
- [ ] Hierarquia visual clara em cada bloco? (o olho sabe onde ir primeiro)
- [ ] H1 único na página?
- [ ] Espaçamento generoso entre seções (48px+ mobile)?
- [ ] Cards de passeio com foto, nome, preço e CTA visíveis?
- [ ] Seção de maré com cards de próxima saída identificável?

**Responsividade**
- [ ] Grid de cards: 1-col mobile, 2-col tablet, 3-col desktop?
- [ ] Botões full-width no mobile para CTAs principais?
- [ ] Header colapsa corretamente no mobile?
- [ ] Texto H1 em no máximo 2 linhas no mobile (320px)?

**Conversão**
- [ ] CTA WhatsApp usa cor verde (#25D366)?
- [ ] CTA principal laranja (#FF6B35) em destaque no hero?
- [ ] FAQ em accordion (não lista estática)?
- [ ] Bloco "Como Reservar" com os 3 passos visíveis?
- [ ] CTA final com fundo azul (#004E89) e botão WhatsApp proeminente?

**Acessibilidade**
- [ ] Touch targets ≥ 44px em todos os botões e links?
- [ ] Texto body nunca abaixo de 16px?
- [ ] Focus states visíveis em todos os elementos interativos?
- [ ] Sem cor como único indicador de estado (badge de maré tem texto + cor)?

**Performance Visual**
- [ ] Animações leves? (< 400ms, sem parallax pesado)
- [ ] Imagens com aspect-ratio definido (sem layout shift)?
- [ ] Sem fundo gradiente genérico sem foto?

---

## Parte 4 — Formato de Avaliação Formal

Use este template ao avaliar o resultado do Claude Design:

```markdown
## Avaliação Visual — Homepage Vem Passear em Jampa
**Data:** YYYY-MM-DD
**Iteração:** #N

### STATUS GERAL: [APROVADO / REQUER AJUSTES / REPROVADO]

### Bloqueios (se REPROVADO ou REQUER AJUSTES):
- ✗ [item bloqueante] — [o que está errado] — [como corrigir]

### Ajustes Solicitados (APROVADO COM RESSALVAS):
- ⚠ [item] — [sugestão]
- ⚠ [item] — [sugestão]

### Pontos Fortes (registrar para manter):
- ✓ [o que está bem]
- ✓ [o que está bem]

### Próxima Ação:
- [ ] Iterar no Claude Design com os ajustes acima
- [ ] Aprovar e passar para `programador-de-site`
- [ ] Confirmar fotos reais com Murillo antes de implementar
```

---

## Parte 5 — Lacunas que Precisam de Resposta de Murillo

Antes de considerar o design 100% final, resolver:

| # | Lacuna | Status |
|---|--------|--------|
| L1 | Foto de Murillo (alta qualidade, uso profissional) | ⏳ Aguardando |
| L2 | Foto hero — cena icônica de JP real | ⏳ Aguardando |
| L3 | Depoimentos reais (texto + nome + cidade + data) — mín 2 | ⏳ Aguardando |
| L4 | Número exato de avaliações Google | ⏳ Aguardando |
| L5 | Anos de operação ("atendendo desde 20XX") | ⏳ Aguardando |
| L6 | Fotos reais dos 5 passeios dos cards | ⏳ Aguardando |
| L7 | URL do perfil Google Maps da empresa | ⏳ Aguardando |
| L8 | Dados de maré validados (para ProximaSaidaCard sair do fallback) | ⏳ Aguardando |

**Critério para publicar:** L3 (depoimentos) e L6 (fotos dos passeios) são bloqueantes para publicação. Os outros podem ir com placeholders visíveis e substituição posterior.

---

*Versão: 1.0 | Criado: 2026-04-27*
