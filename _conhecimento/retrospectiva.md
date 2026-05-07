# Retrospectiva de Aprendizados — Vem Passear em Jampa

**Criado em:** 2026-05-05
**Propósito:** registro vivo de o que funcionou, o que falhou e o que foi decidido em cada ciclo de trabalho. Atualizar após cada sessão relevante.

---

## Ciclo 1 — Arquitetura 2.0 e Squad Comercial (2026-04-29)

### O que foi feito
- Expandido escopo do CÉREBRO para camada comercial assistida (IA rascunha, Murillo aprova e envia)
- Criado `_crm/` com `leads.csv` (15 campos), `_crm/README.md`
- Criadas skills do Squad Comercial: `qualificacao-lead`, `proposta-passeio`, `objecoes-turismo-jampa`, `follow-up-comercial`, `agente-atendimento-pre-passeio`, `agente-pos-venda`, `painel-kpi-vempassear`, `agente-comercial-jampa`
- Orquestrador atualizado com gatilhos comerciais
- Manifest de skills atualizado (21 skills + 1 orquestrador)
- `skills/README.md` atualizado com Pipelines I-M

### O que funcionou
- Modelo central `Objetivo → Orquestrador → Pipeline → Skills → Resultado` se manteve válido ao expandir para comercial
- Doctor (`jampa-doctor.mjs`) identificou inconsistências reais (P1, P2, P3) antes de qualquer problema em produção
- Separação clara entre o que IA faz (rascunha) e o que Murillo faz (aprova e envia) evitou ambiguidade de responsabilidade

### O que falhou / foi ajustado
- Skill `executar-issue` ficou em `.claude/skills/` em vez de `skills/` — inconsistência com manifest; decisão pendente (P1)
- Doctor usa parser CSV ingênuo que não respeita aspas — gerou falso positivo P2 (ver Ciclo 3 abaixo)
- 4 ids órfãos no schema Jarvis removidos; risco de quebra em workflows n8n referenciam esses ids (P3)

---

## Ciclo 2 — BLOCO B Design System v1.2 (2026-05-04/05)

### O que foi feito
- `tailwind.config.ts` atualizado com tokens DS v1.2 completos (cores, fontes, tamanhos, sombras, max-widths, timing)
- 17 arquivos de handoff corrigidos: termos proibidos substituídos por vocabulário oficial
- Commit e push realizados por Murillo

### O que funcionou
- Busca sistemática com regex (8 termos proibidos) garantiu que nenhum escapou
- Verificação final pós-edição confirmou zero ocorrências remanescentes
- Type-check e build passaram sem erros após mudanças no `tailwind.config.ts`

### Vocabulário definido como oficial (nunca reverter)

| Errado | Certo |
|--------|-------|
| `Vem Passear Jampa` | `Vem Passear em Jampa` |
| `Murillo guia`, `guia local`, `guia turístico` | `orientação local`, `curadoria dos passeios` |
| `Murillo — Guia Local` | `Murillo — Atendimento e Curadoria` |
| `+70 avaliações` | `Google 4.9/5 com 61 avaliações` |
| `guia credenciado` | `operação com parceiros e condutores regularizados` |

### O que falhou / foi ajustado
- Alguns arquivos com hash no nome (uploads do Claude Design) tinham nomes difíceis de descobrir — necessário Glob + Read antes de Grep para garantir cobertura total

---

## Ciclo 3 — HomeVideoHero e Auditoria CRM (2026-05-05)

### O que foi feito

#### HomeVideoHero
- Criado `_site/components/HomeVideoHero.tsx`: hero em vídeo com autoPlay, muted, loop, playsInline
- `_site/app/page.tsx` atualizado: hero inline substituído pelo componente
- Suporte a `prefers-reduced-motion`: `motion-reduce:hidden` no vídeo, `motion-safe:hidden` no poster estático
- Workaround React 18: `muted` setado via `videoRef.current.muted = true` em `useEffect` para garantir autoplay cross-browser
- Componente aguarda commit de Murillo

#### Auditoria CRM
- Lido e validado `_crm/leads.csv` com parser CSV próprio (Node.js) que respeita aspas duplas
- **Resultado:** 18 leads, todas as linhas com exatamente 12 campos — arquivo tecnicamente válido
- **Alerta P2 era falso positivo:** parser do `jampa-doctor` não respeitava aspas duplas em campos com vírgula interna
- **Decisão:** nenhuma correção técnica no CSV; alerta P2 encerrado

#### Base operacional
- Criados: `planejamento/sprint-atual.md`, `planejamento/backlog-principal.md`, `docs/handoff-tecnico.md`, `_conhecimento/retrospectiva.md`

### O que funcionou
- Parser Node.js inline para validar CSV sem depender de Python (não disponível no ambiente)
- Abordagem econômica: ler primeiro, propor depois, editar só com aprovação
- Separação entre problema técnico (CSV válido) e problema operacional (estorno, lead sem resposta) ficou clara

### Decisões tomadas neste ciclo

| Decisão | Justificativa |
|---------|--------------|
| Não alterar `_crm/leads.csv` | Arquivo tecnicamente válido; nenhuma correção é necessária |
| Alerta P2 = falso positivo | Parser do doctor não respeita RFC 4180 (aspas em campos) |
| `TrustBlock` como próxima task (S4) | Componente pronto, impacto direto em conversão, risco zero |
| Hero placeholder (S7) como urgente | `HomeVideoHero` sem `hero-poster.jpg` exibe só fundo escuro |
| Transfer 24h = P1 comercial | `preco: null` impede conversão direta na página de transfer |

### Pendências abertas identificadas neste ciclo

- Verificar estorno Jair e Ana (`_crm/leads.csv` linha 17)
- Retomar lead Picaozinho sem nome (linha 15, último contato 30/04 — pode ter ido para concorrente)
- Murillo fornecer `hero-poster.jpg` para placeholder do hero (S7)
- Murillo confirmar preço do Transfer 24h (P1)

---

## Ajustes de Processo Recomendados

1. **Doctor CSV:** atualizar `jampa-doctor.mjs` para usar parser RFC 4180 ao validar `leads.csv` — evitar novos falsos positivos
2. **Skill `executar-issue`:** formalizar posição: mover para `skills/` ou documentar exceção no manifest
3. **Antes de qualquer commit de skills:** rodar `node _automacao/scripts/jampa-doctor.mjs` e verificar P3 (ids órfãos no n8n)
4. **Ciclo de retrospectiva:** atualizar este arquivo ao fechar cada sprint ou ciclo relevante

---

*Próxima atualização esperada: ao fechar S4 (TrustBlock) ou S7 (Hero placeholder).*
