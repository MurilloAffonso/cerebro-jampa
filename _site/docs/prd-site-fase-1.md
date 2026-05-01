# PRD — Site Vem Passear em Jampa (Fase 1)

**Versão:** 1.0  
**Data:** 2026-04-30  
**Status:** Aguardando aprovação  
**Fonte de decisões:** `_site/CONTEXT.md`, ADRs 0001–0003, grill-with-docs concluído  
**Próximo passo aprovado:** `to-issues` (após aprovação deste PRD)

---

## 1. Objetivo do Site

Converter turistas que chegam via busca orgânica (Google) em leads qualificados no WhatsApp de Murillo — sem intermediários, sem formulário, sem espera.

O site não é brochura. É ferramenta de conversão: turista descobre o passeio certo → confia na agência → clica no WhatsApp → reserva.

**Domínio:** `https://vempassearjampa.com.br`  
**WhatsApp central:** `+55 83 9908-7830`  
**Stack:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS

---

## 2. Público-alvo

### Persona primária — Turista de fora
- Origem: SP, RJ, MG (grandes centros)
- Faixa etária: 25–55 anos
- Contexto: primeira ou segunda visita a João Pessoa, em férias ou feriado
- Acessa majoritariamente via **mobile** (70–80% do tráfego)
- Medos principais: cair em golpe, escolher passeio ruim, pegar maré errada, não ter suporte
- Fator de decisão: **confiança + organização + preço visível + atendimento rápido**

### Persona secundária — Morador local
- Recebe parentes ou amigos visitando João Pessoa
- Busca praticidade e preço justo
- Fator de decisão: reputação + custo-benefício

---

## 3. Escopo da Fase 1

### 3.1 Totais

| Tipo | Quantidade |
|------|------------|
| URLs totais | 32 |
| Passeios | 22 |
| Serviços | 1 (Transfer 24h) |
| Páginas de categoria | 6 |
| Hub de passeios | 1 |
| FAQ centralizada | 1 |
| Home | 1 |

**23 itens comerciais = 22 passeios + 1 serviço**

### 3.2 Passeios prioritários (página completa, copy revisada)

1. `/passeios/piscinas-naturais/seixas/`
2. `/passeios/litoral-norte/areia-vermelha-catamara/`
3. `/passeios/litoral-sul/roteiro-classico/`

### 3.3 Passeios não prioritários (19 páginas)
Dados básicos do vault. Campos incertos marcados `[CONSULTAR]`. Passeio sem dados suficientes: publicado apenas com CTA de consulta via WhatsApp — **sem informação inventada**.

---

## 4. Fora de Escopo (Fase 1)

| Item | Motivo |
|------|--------|
| `/blog/` | Exige produção de conteúdo contínua — Fase 2–3 |
| `/sobre/` | Conteúdo integrado à Home e footer; sem página própria |
| `/passeios/familias/` | Landing page de persona — Fase 2 |
| `/passeios/casais/` | Landing page de persona — Fase 2 |
| Sistema de reservas online | Canal é WhatsApp; reserva automática fora de escopo |
| Blog posts | Fora do Tier 1 do vault |
| Área logada / painel | Não planejado |
| Pagamento integrado | Não planejado |

---

## 5. Sitemap Aprovado

```
/                                             Home
/faq/                                         FAQ centralizada (enxuta)

/passeios/                                    Hub — todos os passeios por categoria
/passeios/pacotes/                            Categoria
/passeios/litoral-sul/                        Categoria
/passeios/litoral-norte/                      Categoria
/passeios/piscinas-naturais/                  Categoria
/passeios/city-tour/                          Categoria
/passeios/interestaduais/                     Categoria

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

**ADR de referência:** `docs/adr/0001`, `0002`, `0003`

---

## 6. Requisitos Funcionais

### 6.1 Navegação
- Header fixo com: `Início | Passeios ▾ | Serviços | [Reservar no WhatsApp]`
- Dropdown de "Passeios" lista as 6 categorias com link para cada `/passeios/[categoria]/`
- CTA "Reservar no WhatsApp" abre `https://wa.me/5583990887830` em nova aba
- Menu responsivo (hamburger em mobile)

### 6.2 Home (`/`)
- Hero com H1 orientado a keyword ("Passeios em João Pessoa")
- Bloco de prova de confiança: nota 4.9/5, 61 avaliações Google, Cadastur 52.077.577
- Seção "Nossos Passeios" com cards por categoria linkando para `/passeios/[categoria]/`
- Destaque dos 3 passeios prioritários
- Bloco "Quem Somos / Murillo" (sem página própria)
- CTA WhatsApp ao final
- Schema `LocalBusiness` + `TouristAttraction`

### 6.3 Hub de Passeios (`/passeios/`)
- Lista todos os 22 passeios agrupados por categoria
- Card por passeio: nome, preço (quando confirmado), duração, CTA
- Link para página de categoria + página individual

### 6.4 Página de Categoria (`/passeios/[categoria]/`)
- H1 com nome da categoria + "João Pessoa"
- Cards dos passeios da categoria
- Intro de 2–3 linhas sobre a região/tipo
- CTA WhatsApp

### 6.5 Página de Passeio Individual (`/passeios/[categoria]/[slug]/`)
Ordem de blocos (baseada em `copy-pagina-de-passeio.md`):

1. Hero: imagem + H1 + CTA primário
2. Lead/subtítulo (diferencial + local)
3. Prova social (4.9/5 + Cadastur + Murillo)
4. O que você vai fazer (narrativo)
5. Roteiro / Itinerário
6. O que está incluso / não incluso (bullets)
7. Preço (por pessoa, variações quando aplicável)
8. FAQ do passeio (5–8 perguntas)
9. Depoimento (quando disponível)
10. Informações práticas (ponto de saída, o que levar)
11. CTA secundário (WhatsApp)
12. Links internos (2–3 passeios relacionados)

Schema: `TouristAttraction` + `FAQPage`

### 6.6 FAQ Centralizada (`/faq/`)
- Versão enxuta com temas: pagamento, cartão/taxa, criança, chuva/remarcação, cancelamento, maré, segurança, acessibilidade, privativo, reserva, confirmação WhatsApp, avaliações
- Schema `FAQPage`
- Campos sem resposta segura → `[CONSULTAR]` em dev; omitidos em prod até confirmação

### 6.7 Serviço Transfer (`/servicos/transfer-24h/`)
- Fora da árvore de passeios
- Informações básicas + CTA WhatsApp para cotação
- Preço: [CONSULTAR] — não publicar valor sem confirmação

### 6.8 SEO Técnico
- `app/sitemap.ts` — sitemap.xml gerado automaticamente
- `app/robots.ts` — robots.txt
- `app/not-found.tsx` — página 404 com link para `/passeios/`
- Open Graph e Twitter Card em todas as páginas
- Breadcrumbs com schema `BreadcrumbList`

---

## 7. Requisitos de Conteúdo

### 7.1 Fonte de verdade
Toda informação de passeio vem de `_conhecimento/base-operacional-comercial.md`. Nada inventado.

### 7.2 Campos obrigatórios por página de passeio

| Campo | Status |
|-------|--------|
| Nome do passeio | ✅ confirmado para todos |
| Categoria / slug | ✅ confirmado para todos |
| Descrição curta | ✅ disponível no vault |
| Duração | ✅ disponível (maioria) |
| Ponto de saída | ✅ Tambaú, Cabo Branco, Manaíra, Bessa (padrão) |
| Valor adulto | ✅ disponível (maioria); [CONSULTAR] onde ausente |
| Valor criança 5–11 anos | ✅ regra padrão: 20% abaixo do adulto |
| Criança abaixo de 5 | ✅ não paga (todos os passeios) |
| O que está incluso | ✅ disponível (maioria) |
| O que não está incluso | ✅ disponível (maioria) |
| Política chuva | ✅ padrão: remarcação gratuita (2h) / reembolso 100% |
| Política cancelamento | ✅ padrão: no-show = perda do valor |
| Valor privativo | [CONSULTAR] — não publicar |
| Horário exato de saída | [CONSULTAR] para passeios que dependem de maré |
| Capacidade / mínimo | [CONSULTAR] — não publicar |
| Fornecedor | [CONSULTAR] — não publicar |

### 7.3 Tom de voz (baseado em vault)
- Acolhedor, local, humano — não corporativo
- Específico (nome da praia, atividade, horário) — nunca genérico
- Sem urgência falsa ("ÚLTIMAS VAGAS", "só hoje")
- Sem clichê turístico ("paraíso tropical", "cartão postal")

### 7.4 Política de lacunas
- Dado ausente ou incerto → `[CONSULTAR]` no arquivo de dados
- Em produção: bloco omitido ou substituído por CTA de consulta via WhatsApp
- **Nunca publicar** disponibilidade, valor privativo, horário exato ou fornecedor sem confirmação de Murillo

---

## 8. Requisitos de SEO

### 8.1 Constantes confirmadas (sem `[CONFIRMAR]`)

| Constante | Valor |
|-----------|-------|
| `SITE_URL` | `https://vempassearjampa.com.br` |
| Telefone | `+55 83 9908-7830` |
| Cadastur | `52.077.577` |
| Nota Google | `4.9/5` |
| Avaliações Google | `61` |

### 8.2 Padrão de title e H1

| Página | Title | H1 |
|--------|-------|-----|
| Home | `Passeios em João Pessoa — Vem Passear em Jampa` | `Passeios em João Pessoa` |
| Hub `/passeios/` | `Todos os Passeios em João Pessoa` | `Passeios em João Pessoa` |
| Categoria | `[Categoria] em João Pessoa — Vem Passear` | `[Categoria] em João Pessoa` |
| Passeio | `[Nome do Passeio] — João Pessoa` | `[Nome do Passeio] em João Pessoa` |
| FAQ | `Dúvidas Frequentes — Vem Passear em Jampa` | `Dúvidas Frequentes` |
| Transfer | `Transfer 24h — Aeroporto e Hotel — João Pessoa` | `Transfer 24h em João Pessoa` |

### 8.3 Meta description
- Padrão: `"[Especificidade do passeio/categoria]. Agende com Murillo pelo WhatsApp →"`
- Sempre inclui "João Pessoa" quando não está no slug
- Máximo 155 caracteres

### 8.4 Schemas obrigatórios

| Página | Schemas |
|--------|---------|
| Home | `LocalBusiness`, `TouristAttraction` |
| Passeio individual | `TouristAttraction`, `FAQPage` |
| FAQ | `FAQPage` |
| Todas | `BreadcrumbList` |

### 8.5 Alt text
Descritivo em todas as imagens: o que está na cena + contexto local. Nunca vazio.

### 8.6 Links internos
- Passeio individual → 2–3 passeios relacionados
- Categoria → hub `/passeios/` + passeios da categoria
- FAQ → passeios relevantes

---

## 9. Requisitos de CTA WhatsApp

- **Obrigatório em toda página** — sem exceção
- CTA primário: no hero de cada página de passeio, acima da dobra em mobile
- CTA secundário: ao final de cada página (após FAQ)
- CTA no header: fixo, sempre visível
- Texto: "Reservar no WhatsApp" (passeios) / "Solicitar Transfer" (serviço) / "Tirar Dúvida" (FAQ)
- Link: `https://wa.me/5583990887830` — abre em nova aba
- Botão grande, clicável por thumb (mínimo 48×48px) — obrigatório em mobile
- **Nunca usar email como canal único de contato**

---

## 10. Regras de Negócio

| Regra | Detalhe |
|-------|---------|
| Criança abaixo de 5 anos | Não paga — todos os passeios |
| Criança 5–11 anos | 20% abaixo do valor adulto (padrão) |
| Criança 12+ | Valor adulto |
| Política chuva | Aviso 2h antecedência → remarcação gratuita; impossível remarcar → 100% reembolso |
| No-show | Perda do valor sem reembolso |
| Valor privativo | Sempre [CONSULTAR] — nunca publicar tabela |
| Disponibilidade | Sempre [CONSULTAR] — não confirmar sem verificar com Murillo |
| Tábua de marés | Obrigatório informar que passeios de piscina natural dependem de maré baixa |
| Quadriciclo | Mínimo 7 anos para operar; máximo 2 pessoas por máquina |
| Transfer interestaduais | [CONSULTAR] disponibilidade e horário antes de confirmar |

---

## 11. Critérios de Aceite

### Site como um todo
- [ ] Todas as 32 URLs retornam HTTP 200 em produção
- [ ] `npm run build` sem erros
- [ ] `npm run type-check` sem erros
- [ ] `npm run lint` sem warnings críticos
- [ ] Lighthouse Mobile ≥ 90 (Performance, Accessibility, SEO)
- [ ] Carregamento < 3s em 3G mobile
- [ ] Sitemap.xml gerado e acessível em `/sitemap.xml`
- [ ] Robots.txt acessível em `/robots.txt`

### Cada página de passeio
- [ ] H1 único, inclui nome do passeio + "João Pessoa"
- [ ] Preço visível quando confirmado; [CONSULTAR] → CTA WhatsApp
- [ ] CTA WhatsApp presente acima da dobra (mobile) e ao final
- [ ] Schema `TouristAttraction` válido (testar no Rich Results Test)
- [ ] Schema `FAQPage` presente e válido (páginas com FAQ)
- [ ] Nenhum dado inventado — todo campo rastreável ao vault

### Passeios prioritários (Seixas, Areia Vermelha Catamarã, Litoral Sul Clássico)
- [ ] Todos os blocos de copy presentes (hero, lead, prova social, roteiro, incluso, preço, FAQ, depoimento, CTA)
- [ ] Imagem real (não placeholder) no hero
- [ ] Mínimo 5 perguntas na FAQ do passeio

### Home
- [ ] Bloco de prova de confiança visível: 4.9/5, 61 avaliações, Cadastur 52.077.577
- [ ] Cards das 6 categorias com link correto
- [ ] Bloco sobre Murillo presente
- [ ] Schema `LocalBusiness` válido

### FAQ
- [ ] Mínimo 8 perguntas publicadas
- [ ] Schema `FAQPage` válido
- [ ] Nenhuma resposta com dado não confirmado pelo vault

### Mobile
- [ ] Testado em viewport 320px
- [ ] Botão WhatsApp clicável por thumb em todas as páginas
- [ ] Nenhum texto truncado ou sobreposto em 320px
- [ ] Menu hamburger funciona sem JS desabilitado (ou fallback)

---

## 12. Riscos e Pendências

### Dados ainda [CONSULTAR]

| Item | Impacto | Ação |
|------|---------|------|
| Número exato de avaliações Google | Baixo — confirmado: 61 | ✅ Resolvido |
| Anos de experiência de Murillo | Médio — bloco "Quem Somos" | Confirmar com Murillo antes de publicar |
| Parcerias com hotéis/influenciadores | Baixo — não bloqueia lançamento | Confirmar após Fase 1 |
| Valor privativo de todos os passeios | Baixo — marcado [CONSULTAR] | Confirmar antes de habilitar seção |
| Capacidade / mínimo por passeio | Médio — afeta FAQ | Confirmar com Murillo |
| Fotos reais dos passeios | Alto — hero sem foto real = conversão baixa | Confirmar disponibilidade de assets |
| Depoimentos de clientes (texto + autor) | Médio — bloco omitido sem isso | Coletar antes dos 3 prioritários |
| Horário exato dos passeios de maré | Médio — afeta passeio do Seixas e Piscinas | Confirmar: depende da tábua |
| Tempo de experiência de Murillo (anos) | Médio — copy de credibilidade | Confirmar |

### Riscos técnicos

| Risco | Probabilidade | Mitigação |
|-------|---------------|-----------|
| `data/passeios.ts` desatualizado vs. vault | Alta — arquivo atual pode ter 29 entradas com dados antigos | Reconciliar com base-operacional-comercial antes de codar |
| Typo `rotario` (campo no codebase) | Baixa — documentado no CLAUDE.md | Não corrigir sem testar toda a cadeia de dados |
| `SITE_URL` e telefone ainda como `[CONFIRMAR]` em `lib/seo.ts` | Alta — bloqueia SEO correto | Atualizar como primeira tarefa de código |
| Imagens ausentes nos 19 passeios não prioritários | Média — placeholder prejudica conversão | Definir imagem fallback por categoria |

### Dependências externas (não bloqueiam início, bloqueiam publicação)
- Hospedagem/deploy definido: [CONSULTAR COM MURILLO]
- Domínio apontando para servidor: [CONFIRMAR antes de ir ao ar]
- Google Search Console configurado: necessário para monitorar indexação

---

*PRD gerado em 2026-04-30 | Aguardando aprovação antes de to-issues*  
*Fontes: `_site/CONTEXT.md`, ADRs 0001–0003, `base-operacional-comercial.md`, `copy-pagina-de-passeio.md`, `clusters-seo.md`, `provas-de-confianca.md`, `objecoes.md`, `publico-alvo.md`*
