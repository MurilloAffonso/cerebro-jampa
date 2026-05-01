# ADR 0002 — Hierarquia de Listagem de Passeios

**Status:** Aceito  
**Data:** 2026-04-30  
**Contexto:** Grill-with-docs — sessão de arquitetura do site

---

## Contexto

Com 22 passeios em 6 categorias, o site precisa de uma estratégia de listagem. A alternativa mais simples seria ir direto de `/passeios/` para a página individual, sem páginas intermediárias por categoria.

## Decisão

O site tem **dois níveis de listagem**:

1. `/passeios/` — hub geral de descoberta; mostra todos os 22 passeios agrupados por categoria
2. `/passeios/[categoria]/` — uma página por cada uma das 6 categorias; lista só os passeios daquele grupo

Páginas individuais continuam em `/passeios/[categoria]/[slug]`.

## Alternativa considerada

- Ir direto de `/passeios/` para a página individual (sem nível intermediário) — descartada: perde SEO por categoria ("passeios litoral sul João Pessoa") e dificulta navegação para turista que sabe a região mas não o passeio específico.

## Consequências

- O sitemap tem 7 URLs de listagem além das 22 individuais: 1 geral + 6 de categoria
- Cada `/passeios/[categoria]/` é uma página com conteúdo próprio (não redirect)
- A rota `app/passeios/[categoria]/page.tsx` renderiza as 6 páginas de categoria com template único
