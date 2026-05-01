# CONTEXT.md — Vem Passear em Jampa (_site)

Vocabulário canônico e decisões de domínio do site Next.js.
Atualizado inline durante sessões de grill-with-docs.

---

## Glossário de Domínio

### Passeio
Atividade turística guiada oferecida pela Vem Passear em Jampa. Todo passeio tem categoria, slug, preço, duração, ponto de saída e política de cancelamento. A fonte de verdade é `_conhecimento/base-operacional-comercial.md`.

Passeios vivem em `/passeios/[categoria]/[slug]`.

### Categoria
Agrupamento de passeios por região ou tipo. Existem exatamente 6 categorias de passeios:

| Categoria | Slug de URL | Passeios |
|-----------|-------------|----------|
| Pacotes | `pacotes` | 3 |
| Litoral Sul | `litoral-sul` | 6 |
| Litoral Norte | `litoral-norte` | 5 |
| Piscinas Naturais | `piscinas-naturais` | 4 |
| City Tour | `city-tour` | 1 |
| Interestaduais | `interestaduais` | 3 |

### Serviço
Atividade operacional de apoio ao turista que **não é passeio turístico**. Serviços vivem em `/servicos/[slug]`, fora da árvore de passeios.

Serviço atual: Transfer 24h → `/servicos/transfer-24h`.

### Slug
Identificador de URL em kebab-case, curto, legível e estável. SEO é tratado em `title`, `H1`, `meta description`, conteúdo, FAQ e schema — nunca no slug.

---

## Catálogo Fase 1

**23 itens comerciais = 22 passeios + 1 serviço**

| Tipo | Quantidade | Onde vivem |
|------|------------|------------|
| Passeios | 22 | `/passeios/[categoria]/[slug]/` |
| Serviços | 1 (Transfer 24h) | `/servicos/transfer-24h/` |

### Passeios prioritários (página completa no lançamento)
1. `/passeios/piscinas-naturais/seixas/`
2. `/passeios/litoral-norte/areia-vermelha-catamara/`
3. `/passeios/litoral-sul/roteiro-classico/`

### Regra para os 19 restantes
- Dados do vault apenas; nada inventado
- Campos incertos → `[CONSULTAR]`
- Sem informação suficiente → página com CTA de consulta via WhatsApp
- Nunca publicar: disponibilidade, valor privativo, horário exato, fornecedor sem confirmação

---

## Estrutura de URLs — Fase 1 Completa

```
/                                             Home
/faq/                                         FAQ centralizada (enxuta)
/passeios/                                    Hub — todos os passeios por categoria
/passeios/pacotes/
/passeios/litoral-sul/
/passeios/litoral-norte/
/passeios/piscinas-naturais/
/passeios/city-tour/
/passeios/interestaduais/
/passeios/pacotes/3-dias-completo/
/passeios/pacotes/3-dias-basico/
/passeios/pacotes/super-economico/
/passeios/litoral-sul/roteiro-classico/       ★ prioritário
/passeios/litoral-sul/praia-bela/
/passeios/litoral-sul/combo-jampa-quadriciclo/
/passeios/litoral-sul/combo-praia-bela-quadriciclo/
/passeios/litoral-sul/quadriciclo-coqueirinho/
/passeios/litoral-sul/quadriciclo-praia-bela/
/passeios/litoral-norte/roteiro-classico/
/passeios/litoral-norte/combo-areia-vermelha/
/passeios/litoral-norte/areia-vermelha-catamara/  ★ prioritário
/passeios/litoral-norte/por-do-sol-jacara/
/passeios/litoral-norte/lancha-privativa/
/passeios/piscinas-naturais/seixas/           ★ prioritário
/passeios/piscinas-naturais/penha/
/passeios/piscinas-naturais/picaozinho/
/passeios/piscinas-naturais/mergulho/
/passeios/city-tour/jampa-historica/
/passeios/interestaduais/porto-de-galinhas/
/passeios/interestaduais/praia-de-pipa/
/passeios/interestaduais/natal/
/servicos/transfer-24h/
```

**Total Fase 1:** 32 URLs (1 home + 1 faq + 1 hub + 6 categorias + 22 passeios + 1 serviço)

### Fora da Fase 1
- `/blog/` — Tier 2–3
- `/sobre/` — bloco na Home e footer, sem página própria
- `/passeios/familias/` e `/passeios/casais/` — landing pages de persona, Tier 2

---

## Navegação Principal (Header)

```
Início | Passeios ▾ | Serviços | [Reservar no WhatsApp]
                |
                ├── Pacotes
                ├── Litoral Sul
                ├── Litoral Norte
                ├── Piscinas Naturais
                ├── City Tour
                └── Interestaduais
```

- "Passeios" → `/passeios/` + dropdown com 6 categorias
- "Serviços" → `/servicos/transfer-24h/` (único serviço atual)
- CTA "Reservar no WhatsApp" fixo no header
- Blog e "Sobre" → footer apenas

---

## FAQ Centralizada

- URL: `/faq/`
- Fase 1, versão enxuta
- Fontes: `objecoes`, `base-operacional-comercial`, `politica-cancelamento-base`, `google-meu-negocio`, `provas-de-confianca`, `copy-pagina-de-passeio`
- Temas: pagamento, cartão/taxa, criança, chuva/remarcação, cancelamento, maré, segurança, acessibilidade, privativo, reserva, confirmação WhatsApp, avaliações
- Campos sem resposta segura → `[CONSULTAR]`

---

## Constantes Confirmadas

| Constante | Valor | Fonte |
|-----------|-------|-------|
| `SITE_URL` | `https://vempassearjampa.com.br` | `empresa.md` |
| WhatsApp | `+55 83 9908-7830` | `CLAUDE.md` |
| Cadastur | `52.077.577` | `provas-de-confianca.md` |
| Google nota | `4.9/5` | `provas-de-confianca.md` |
| Google reviews | `61 avaliações` | confirmado por Murillo |

---

## Conflito de Fonte Resolvido

`estrutura-site-recomendada.md` e `clusters-seo.md` mencionam 29 passeios e URLs `/cluster/` e `/passeio/`. Dados anteriores à consolidação de 2026-04-30. **Fonte de verdade:** `base-operacional-comercial.md` — 23 itens, URL padrão `/passeios/[categoria]/[slug]/` (ADR 0001).

---

*Última atualização: 2026-04-30 | Grill concluído — próximo passo: to-prd*
