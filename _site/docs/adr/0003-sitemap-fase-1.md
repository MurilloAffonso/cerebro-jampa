# ADR 0003 — Sitemap e Escopo da Fase 1

**Status:** Aceito  
**Data:** 2026-04-30  
**Contexto:** Grill-with-docs — validação final de sitemap

---

## Contexto

Após definir padrão de URL (ADR 0001) e hierarquia de listagem (ADR 0002), precisava-se definir o escopo exato do lançamento: quais páginas existem no dia 1, quais ficam para depois, e como tratar dados incompletos.

## Decisão

**Fase 1 lança com 32 URLs:**
- 1 Home
- 1 FAQ (`/faq/`)
- 1 Hub de passeios (`/passeios/`)
- 6 páginas de categoria (`/passeios/[categoria]/`)
- 22 páginas individuais de passeio (`/passeios/[categoria]/[slug]/`)
- 1 serviço (`/servicos/transfer-24h/`)

**23 itens comerciais = 22 passeios + 1 serviço**

**3 passeios prioritários com página completa:** Seixas, Areia Vermelha Catamarã, Litoral Sul Roteiro Clássico.

**19 restantes:** dados básicos do vault. Campos incertos marcados `[CONSULTAR]`. Passeio sem dados suficientes: página publicada com CTA de consulta via WhatsApp — sem informação inventada.

## Fora da Fase 1

- `/blog/` — produção de conteúdo contínua; adiada para Fase 2–3
- `/sobre/` — conteúdo integrado à Home e footer; sem página própria na Fase 1
- Landing pages de persona (`/passeios/familias/`, `/passeios/casais/`) — Fase 2

## Alternativa considerada

- Lançar apenas os 3 prioritários e adicionar os 19 depois — descartada: o template dinâmico torna o custo de lançar todos igual, e URLs mortas prejudicam SEO e autoridade percebida pelo cliente.

## Consequências

- `data/passeios.ts` precisa ter entrada para os 22 passeios desde o início
- Campos com `[CONSULTAR]` são placeholders visíveis só em dev; em prod mostram CTA de WhatsApp
- Qualquer nova página que não seja passeio ou serviço passa pelo critério Fase 1 / Fase 2 antes de ser criada
