# project-context.md

**Projeto:** CEREBRO.JAMPA  
**Empresa:** Vem Passear em Jampa  
**Responsável:** Murillo Affonso  
**Canal central:** WhatsApp +55 83 9908-7830  
**Fase atual:** 1 — Site e SEO Local  
**Atualizado:** 2026-05-05

---

## O que é este projeto

Vault de IA para a Vem Passear em Jampa — operadora de passeios turísticos em João Pessoa (PB).

O CEREBRO.JAMPA centraliza:
- Conhecimento estruturado da empresa (tours, preços, diferenciais, SEO)
- Skills de IA especializadas por função (site, comercial, social, dados)
- Automação de tarefas operacionais via agentes e workflows
- Base para o site Next.js 14 (`_site/`)

## Problema que resolve

Murillo opera sozinho com alto volume de demandas: atendimento no WhatsApp, postagens no Instagram, atualização do site, SEO, proposta para leads. O CEREBRO.JAMPA permite que agentes de IA rascunhem entregas em cada área — Murillo revisa e aprova antes de publicar.

## O que NÃO é este projeto

- Sistema autônomo de reservas ou envio de mensagens
- Plataforma de e-commerce ou pagamentos
- Integração direta com WhatsApp Business API (fase futura)

## Produto principal

Site `vempassearjampa.com.br` — Next.js 14, App Router, TypeScript, Tailwind CSS.  
Rota dinâmica: `app/passeios/[categoria]/[slug]/page.tsx`  
Dados entram pelo data layer: `_site/data/passeios.ts`

## Estrutura de pastas

| Pasta | Tipo | Propósito |
|-------|------|-----------|
| `_conhecimento/` | conhecimento | Fonte de verdade — passeios, empresa, SEO |
| `_memoria/` | memória | Estado operacional vivo — sessões, decisões |
| `skills/` | agentes | 21 skills especializadas |
| `_automacao/` | automação | Scripts, schemas, logs, workflows |
| `_site/` | produto | Website Next.js 14 |
| `_crm/` | dados | Leads e dados comerciais |
| `configs/` | configs | Configurações de projeto sem credenciais |
| `_seguro/` | sensível | Credenciais locais — gitignored |
| `docs/` | docs | Documentação operacional |

## Regra de ouro

> **Nunca inventar fato sobre empresa, passeio, preço, prazo, parceria ou depoimento.**  
> Se não está em `_conhecimento/` e Murillo não confirmou: marcar `[CONFIRMAR COM MURILLO: ...]` e parar.

## Ciclo de sessão

```
/abrir-sessao   → lê _memoria/, carrega contexto
(trabalho)      → IA produz entregas, Murillo aprova
/fechar-sessao  → salva estado em _memoria/
```

## Referências rápidas

- Manifest central: `project-manifest.json`
- Skills: `skills/manifest.json` e `skills/README.md`
- Política de aprovação: `docs/approval-policy.md`
- Política de risco: `_automacao/riscos.md`
- Decisões: `_memoria/decisoes.md` e `docs/decision-log.md`
- Doctor: `node _automacao/scripts/jampa-doctor.mjs`
- Foundation check: `node _automacao/scripts/foundation-check.mjs`
