# ADR 0001 — Estrutura de URLs: Passeios vs. Serviços

**Status:** Aceito  
**Data:** 2026-04-30  
**Contexto:** Grill-with-docs — sessão de arquitetura do site

---

## Contexto

O site precisa de um padrão de URL estável para os 23 produtos do catálogo. Alguns produtos são passeios turísticos; um (Transfer 24h) é um serviço operacional sem caráter turístico.

## Decisão

1. **Passeios** ficam em `/passeios/[categoria]/[slug]`
2. **Serviços** ficam em `/servicos/[slug]`
3. **Transfer 24h é serviço**, não passeio — URL: `/servicos/transfer-24h`
4. **Slugs são curtos e legíveis** (ex: `litoral-sul`, não `passeios-litoral-sul-joao-pessoa`). SEO é tratado em title, H1, meta description, conteúdo, FAQ e schema.

## Alternativas consideradas

- `/passeios/servicos/transfer-24h` — descartada: mistura domínios distintos (passeio ≠ serviço) e cria precedente errado para novos serviços.
- Slugs longos com cidade no path — descartada: URL longa sem ganho real de ranking; o trabalho de SEO pertence ao conteúdo da página.

## Consequências

- O menu terá duas entradas de topo: **Passeios** e **Serviços**
- Toda nova rota deve decidir primeiro: é passeio ou serviço?
- `app/passeios/[categoria]/[slug]/page.tsx` cobre todos os 22 passeios com um template único
- `app/servicos/transfer-24h/page.tsx` (ou rota dinâmica `/servicos/[slug]`) cobre os serviços
