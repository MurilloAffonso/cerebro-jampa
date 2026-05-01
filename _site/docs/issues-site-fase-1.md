# Issues — Site Vem Passear em Jampa (Fase 1)

**Versão:** 1.0  
**Data:** 2026-04-30  
**Base:** `docs/prd-site-fase-1.md`, `CONTEXT.md`, ADRs 0001–0003  
**Status:** Aprovadas — aguardando execução

**Legenda:**
- **AFK** — executável sem interação humana
- **HITL** — requer ação ou decisão de Murillo
- **Bloqueado por** — ID da issue que deve completar primeiro

---

## GRUPO 1 — SETUP

---

### ISSUE-01 — Reconciliar constantes de empresa no código

**Tipo:** AFK  
**Bloqueado por:** nenhum

**Objetivo:**  
Corrigir inconsistências entre `data/empresa.ts` e o restante do código antes de qualquer implementação de página.

**Problema atual:**
- `data/empresa.ts` → `totalAvaliacoes: 150` — **incorreto.** Confirmado com Murillo: **61 avaliações**
- `app/passeios/[categoria]/[slug]/page.tsx` linha 41 → `SITE_URL` hardcoded localmente; inconsistente com `data/empresa.ts`
- `data/empresa.ts` → `anos_operacao: null` — marcar como `[CONSULTAR]` explicitamente
- `lib/seo.ts` → constantes SITE_URL e WHATSAPP já corretos; não alterar

**Arquivos prováveis:**
- `data/empresa.ts`
- `app/passeios/[categoria]/[slug]/page.tsx`

**Critérios de aceite:**
- [ ] `totalAvaliacoes` em `data/empresa.ts` corrigido para `61`
- [ ] `SITE_URL` local em `app/passeios/[categoria]/[slug]/page.tsx` removido; usar `empresa.dominio` ou constante centralizada
- [ ] `anos_operacao` marcado como `null` com comentário `// [CONSULTAR COM MURILLO]`
- [ ] `npm run type-check` passa sem erros após a mudança

**Risco:** Baixo — mudança de dado, sem lógica nova.  
**Observação:** Não alterar `lib/seo.ts` — já está correto.

---

### ISSUE-02 — Auditar `data/empresa.ts` — completude para Fase 1

**Tipo:** HITL  
**Bloqueado por:** nenhum

**Objetivo:**  
Confirmar com Murillo os campos ainda em aberto em `data/empresa.ts` que afetam copy de credibilidade no site.

**Campos a confirmar:**
- `anos_operacao` — desde quando opera? (aparece no bloco "Sobre Murillo" na Home)
- Parcerias com hotéis ou influenciadores (bloco de credibilidade)
- Fotos de Murillo disponíveis para uso no site?

**Arquivos prováveis:**
- `data/empresa.ts` (atualizar após confirmação)
- `_conhecimento/provas-de-confianca.md` (atualizar como fonte)

**Critérios de aceite:**
- [ ] Murillo confirma anos de operação → campo atualizado
- [ ] Murillo confirma existência ou ausência de parcerias
- [ ] Campos sem resposta mantidos como `null` com `// [CONSULTAR]`

**Risco:** Médio — ausência de resposta significa bloco "Sobre Murillo" na Home fica genérico.  
**Observação:** Não bloqueia execução técnica; bloqueia apenas copy completo da Home.

---

## GRUPO 2 — DADOS

---

### ISSUE-03 — Expandir `data/passeios.ts` de 6 para 22 passeios

**Tipo:** AFK  
**Bloqueado por:** ISSUE-01

**Objetivo:**  
Adicionar as 16 entradas de passeio que faltam em `data/passeios.ts`, usando exclusivamente `_conhecimento/base-operacional-comercial.md` como fonte.

**Estado atual:** 6 passeios no array (apenas piscinas naturais parcialmente).  
**Estado esperado:** 22 passeios cobrindo as 6 categorias.

**Passeios a adicionar:**

| Categoria | Passeios a adicionar |
|-----------|---------------------|
| Pacotes | Pacote 3 Dias Completo, Pacote 3 Dias Básico, Super Econômico |
| Litoral Sul | Praia Bela, Combo Jampa Quadriciclo, Combo Praia Bela Quadriciclo, Quadriciclo Coqueirinho, Quadriciclo Praia Bela |
| Litoral Norte | Roteiro Clássico, Combo Areia Vermelha, Areia Vermelha Catamarã, Pôr do Sol Jacaré, Lancha Privativa |
| Piscinas Naturais | Penha, Picãozinho, Mergulho |
| City Tour | City Tour Jampa Histórica |
| Interestaduais | Porto de Galinhas, Praia de Pipa, Natal |

**Regras de preenchimento:**
- Usar slugs conforme sitemap aprovado (ADR 0001)
- Campo `rotario` (não `roteiro`) — typo do codebase, não corrigir
- Campos sem dado confirmado: `null` com comentário `// [CONSULTAR]`
- Nunca inventar: preço privativo, horário exato, capacidade, fornecedor

**Arquivos prováveis:**
- `data/passeios.ts` (único arquivo a editar)

**Fonte obrigatória:** `_conhecimento/base-operacional-comercial.md`

**Critérios de aceite:**
- [ ] `passeios.length === 22`
- [ ] Cada passeio tem: `id`, `nome`, `categoria`, `slug`, `preco` (ou `null`), `duracao`, `saida`, `descricao`
- [ ] Slugs batem com o sitemap aprovado em `CONTEXT.md`
- [ ] Nenhum campo inventado — todo dado rastreável ao vault
- [ ] `npm run type-check` passa
- [ ] `generateStaticParams()` em `app/passeios/[categoria]/[slug]/page.tsx` gera 22 rotas

**Risco:** Alto — é o maior bloqueador do projeto. Erro aqui quebra todas as páginas de passeio.  
**Observação:** Priorizar os 3 passeios prioritários (Seixas, Areia Vermelha Catamarã, Litoral Sul Clássico) com dados mais completos.

---

### ISSUE-04 — Criar dados do Transfer 24h

**Tipo:** AFK  
**Bloqueado por:** nenhum

**Objetivo:**  
Criar a estrutura de dados para o Transfer 24h — serviço fora da árvore de passeios.

**Decisão de arquitetura (ADR 0001):** Transfer é serviço, não passeio. Não entra em `data/passeios.ts`.

**Opções de implementação (decidir na execução):**
- Criar `data/servicos.ts` com tipagem própria
- Ou adicionar os dados diretamente na página `/app/servicos/transfer-24h/page.tsx`

**Dados disponíveis no vault:**
- Nome: Transfer 24h (Aeroporto/Hotel)
- Preço: `[CONSULTAR]` — não publicar valor
- Serviço: transfer para/do aeroporto, hotéis
- CTA: consulta via WhatsApp

**Arquivos prováveis:**
- `data/servicos.ts` (novo, se optar por arquivo separado)
- `app/servicos/transfer-24h/page.tsx` (novo)

**Critérios de aceite:**
- [ ] Dados do transfer acessíveis para a página `/servicos/transfer-24h/`
- [ ] Preço não publicado (campo como `null` com CTA WhatsApp)
- [ ] `npm run type-check` passa

**Risco:** Baixo — escopo pequeno e isolado.

---

### ISSUE-05 — Implementar tratamento de campos `[CONSULTAR]`

**Tipo:** AFK  
**Bloqueado por:** ISSUE-03

**Objetivo:**  
Garantir que campos ausentes ou não confirmados nunca apareçam como texto vazio, `null` ou `undefined` no site — e sim como CTA de consulta via WhatsApp.

**Comportamento esperado:**
- Campo `preco: null` → não exibir "R$ null"; exibir: "Consulte disponibilidade e valor pelo WhatsApp"
- Campo `depoimento: undefined` → não renderizar o bloco de depoimento
- Campo `faq: []` → não renderizar seção FAQ
- Campo com `[CONSULTAR]` em texto → não publicar esse texto; substituir por CTA

**Arquivos prováveis:**
- `app/passeios/[categoria]/[slug]/page.tsx` (lógica de renderização condicional)
- Componentes: `CTAFinal.tsx`, `InfoCard.tsx` (verificar se já tratam null)

**Critérios de aceite:**
- [ ] Nenhuma página exibe `null`, `undefined` ou string vazia visível ao usuário
- [ ] Passeios sem preço exibem CTA WhatsApp no lugar do valor
- [ ] Blocos opcionais (depoimento, FAQ, galeria) são omitidos quando dados ausentes
- [ ] Comportamento testado visualmente para pelo menos 2 passeios com dados parciais

**Risco:** Médio — risco de dados mal formatados aparecerem em produção nos 19 passeios não prioritários.  
**Observação:** Verificar se componentes existentes já fazem renderização condicional antes de criar lógica nova.

---

## GRUPO 3 — LAYOUT BASE

---

### ISSUE-06 — Header: dropdown de categorias + CTA WhatsApp fixo

**Tipo:** AFK  
**Bloqueado por:** ISSUE-03

**Objetivo:**  
Atualizar o `Header` para refletir a navegação aprovada: dropdown com 6 categorias e CTA WhatsApp fixo e sempre visível.

**Navegação aprovada (CONTEXT.md):**
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

**Regras:**
- "Passeios" linka para `/passeios/` e abre dropdown com as 6 categorias
- "Serviços" linka para `/servicos/transfer-24h/`
- CTA "Reservar no WhatsApp" abre `https://wa.me/558399087830` em nova aba
- Menu hamburger em mobile (breakpoint `md:`)
- `/sobre` **não entra** no menu

**Arquivos prováveis:**
- `components/Header.tsx`

**Critérios de aceite:**
- [ ] Dropdown de "Passeios" exibe as 6 categorias com link correto para cada `/passeios/[categoria]/`
- [ ] "Serviços" linka para `/servicos/transfer-24h/`
- [ ] CTA WhatsApp visível no header em desktop e mobile
- [ ] Menu hamburger funciona em 320px
- [ ] `/sobre` não aparece no menu

**Risco:** Baixo — componente Header já existe; é ajuste de conteúdo e estrutura.

---

### ISSUE-07 — Footer: links de FAQ, Transfer, "Sobre" e redes sociais

**Tipo:** AFK  
**Bloqueado por:** nenhum

**Objetivo:**  
Atualizar o Footer com os links corretos para a Fase 1, incluindo o conteúdo "Sobre/Murillo" que não tem página própria.

**Links obrigatórios no footer:**
- Passeios (hub `/passeios/`)
- FAQ (`/faq/`)
- Transfer 24h (`/servicos/transfer-24h/`)
- Bloco "Sobre a Vem Passear" (texto curto, sem link para `/sobre`)
- Instagram: `@vempassearjampa`
- WhatsApp
- Cadastur: 52.077.577

**Arquivos prováveis:**
- `components/Footer.tsx`

**Critérios de aceite:**
- [ ] Footer exibe links para `/faq/` e `/servicos/transfer-24h/`
- [ ] Bloco "Sobre" presente com texto (não link para `/sobre`)
- [ ] Cadastur e WhatsApp visíveis no footer
- [ ] Links do Instagram e Google Maps funcionando
- [ ] Nenhum link morto

**Risco:** Baixo.  
**Observação:** Conteúdo "Sobre Murillo" depende de ISSUE-02 para dados completos, mas não bloqueia o footer básico.

---

## GRUPO 4 — PÁGINAS

---

### ISSUE-08 — Home (`/`): hero, prova social, categorias, bloco Murillo, CTA

**Tipo:** AFK  
**Bloqueado por:** ISSUE-01, ISSUE-03

**Objetivo:**  
Atualizar a Home para refletir o sitemap e as decisões do PRD: mostrar cards das 6 categorias (não apenas 5 passeios), prova social com dados corretos (61 avaliações), e bloco sobre Murillo.

**Estado atual:**
- `topPasseios = passeios.slice(0, 5)` — mostra 5 passeios arbitrários
- Rating pode estar usando `totalAvaliacoes: 150` (corrigido em ISSUE-01)
- Sem cards de categoria — vai direto aos passeios

**Estado esperado:**
1. Hero: H1 "Passeios em João Pessoa" + CTA WhatsApp
2. Prova social: ⭐ 4.9/5, 61 avaliações Google, Cadastur 52.077.577
3. Cards das 6 categorias (não lista de passeios) com link para `/passeios/[categoria]/`
4. Destaques: cards dos 3 passeios prioritários
5. Bloco "Quem é Murillo" (texto, sem página `/sobre`)
6. CTA final WhatsApp
7. Schema `LocalBusiness` no `<head>`

**Arquivos prováveis:**
- `app/page.tsx`
- `data/empresa.ts` (fonte da prova social)

**Critérios de aceite:**
- [ ] H1 inclui "João Pessoa" e é único na página
- [ ] Prova social exibe 4.9/5 e 61 avaliações
- [ ] 6 cards de categoria com links corretos para `/passeios/[categoria]/`
- [ ] 3 cards dos passeios prioritários em destaque
- [ ] CTA WhatsApp acima da dobra (mobile 320px)
- [ ] Schema `LocalBusiness` válido (testar no Rich Results Test)
- [ ] `meta description` inclui "João Pessoa" e CTA

**Risco:** Médio — Home é a página de maior impacto; erro aqui tem visibilidade máxima.  
**Observação:** Bloco Murillo fica genérico até ISSUE-02 ser resolvida.

---

### ISSUE-09 — Hub `/passeios/`: listagem de 22 passeios por categoria

**Tipo:** AFK  
**Bloqueado por:** ISSUE-03

**Objetivo:**  
Garantir que `/passeios/` lista os 22 passeios agrupados pelas 6 categorias corretas, com cards e links funcionando.

**Estado atual:** Página já existe e agrupa dinamicamente por categoria. Funciona com os dados atuais (6 passeios). Precisará funcionar com 22.

**Verificações necessárias:**
- Nomes de categoria exibidos corretamente (não apenas kebab-case)
- Emojis por categoria (já mapeados no código)
- `interestaduais` e `pacotes` precisam entrar no mapa de emojis/nomes

**Arquivos prováveis:**
- `app/passeios/page.tsx`

**Critérios de aceite:**
- [ ] Todas as 6 categorias aparecem após ISSUE-03
- [ ] Nomes de categoria em português legível (não slugs)
- [ ] Cada categoria tem link correto para `/passeios/[categoria]/`
- [ ] CTA WhatsApp presente na página
- [ ] Schema ou metadata básica da página presente

**Risco:** Baixo — lógica já existe; é principalmente verificação + ajuste de dados.

---

### ISSUE-10 — Páginas de categoria (`/passeios/[categoria]/`): 6 páginas com um template

**Tipo:** AFK  
**Bloqueado por:** ISSUE-03

**Objetivo:**  
Implementar ou completar o template de página de categoria que serve as 6 URLs de listagem por categoria.

**Rota existente:** `app/passeios/[categoria]/page.tsx` — verificar estado atual.

**Conteúdo por página de categoria:**
1. H1: "[Nome da Categoria] em João Pessoa"
2. Intro de 2–3 linhas sobre a região/tipo (baseado no vault)
3. Cards de passeios da categoria com: nome, preço (quando disponível), duração, CTA
4. CTA WhatsApp ao final
5. Link de volta para `/passeios/`

**Dados por categoria (intros — baseado no vault):**

| Categoria | H1 sugerido |
|-----------|-------------|
| Pacotes | Pacotes de Passeios em João Pessoa |
| Litoral Sul | Litoral Sul de João Pessoa |
| Litoral Norte | Litoral Norte de João Pessoa |
| Piscinas Naturais | Piscinas Naturais em João Pessoa |
| City Tour | City Tour em João Pessoa |
| Interestaduais | Passeios Interestaduais a partir de João Pessoa |

**Arquivos prováveis:**
- `app/passeios/[categoria]/page.tsx`

**Critérios de aceite:**
- [ ] 6 URLs retornam HTTP 200 após ISSUE-03
- [ ] H1 único por categoria inclui "João Pessoa"
- [ ] Cards dos passeios da categoria presentes com links corretos para `/passeios/[categoria]/[slug]/`
- [ ] CTA WhatsApp presente
- [ ] Categoria inexistente retorna 404

**Risco:** Baixo — template único para 6 páginas.

---

### ISSUE-11 — Páginas dos 3 passeios prioritários (Seixas, Areia Vermelha, Litoral Sul Clássico)

**Tipo:** AFK  
**Bloqueado por:** ISSUE-03, ISSUE-05  
**Desbloqueado para conteúdo completo por:** ISSUE-20, ISSUE-21 (fotos e depoimentos — HITL)

**Objetivo:**  
Garantir que as 3 páginas prioritárias têm todos os blocos de copy completos conforme `copy-pagina-de-passeio.md`.

**Ordem de blocos obrigatória (baseado no vault):**
1. Hero: imagem real + H1 + CTA primário
2. Lead/subtítulo (diferencial + local)
3. Prova social (4.9/5, Cadastur, Murillo)
4. O que você vai fazer (narrativo sensorial)
5. Roteiro / itinerário
6. O que está incluso / não incluso (bullets)
7. Preço (por pessoa, variações)
8. FAQ do passeio (mínimo 5 perguntas)
9. Depoimento de cliente (quando disponível — HITL)
10. Informações práticas (ponto de saída, o que levar)
11. CTA secundário WhatsApp
12. Links internos (2–3 passeios relacionados)

**Arquivos prováveis:**
- `app/passeios/[categoria]/[slug]/page.tsx`
- `data/passeios.ts` (dados das 3 entradas prioritárias)
- Componentes existentes: `HeroBlock`, `TrustBlock`, `IncluidoBlock`, `FAQAccordion`, `DepoimentoBlock`, `CTAFinal`

**Critérios de aceite:**
- [ ] Os 3 slugs retornam HTTP 200: `/passeios/piscinas-naturais/seixas/`, `/passeios/litoral-norte/areia-vermelha-catamara/`, `/passeios/litoral-sul/roteiro-classico/`
- [ ] Todos os blocos acima presentes (depoimento condicional)
- [ ] Imagem real no hero (não placeholder) — após ISSUE-20
- [ ] Mínimo 5 perguntas na FAQ de cada passeio
- [ ] Schema `TouristAttraction` + `FAQPage` válidos
- [ ] CTA WhatsApp acima da dobra em mobile 320px
- [ ] Nenhum dado inventado

**Risco:** Alto — são as páginas de maior conversão; qualquer erro impacta diretamente reservas.  
**Observação:** Implementar blocos com dados disponíveis agora; imagem e depoimento entram depois via ISSUE-20 e ISSUE-21.

---

### ISSUE-12 — Páginas dos 19 passeios restantes (dados básicos)

**Tipo:** AFK  
**Bloqueado por:** ISSUE-03, ISSUE-05

**Objetivo:**  
Garantir que as 19 páginas de passeio não prioritárias estão publicadas com dados básicos e sem informação inventada.

**Padrão para passeios não prioritários:**
- Blocos obrigatórios: Hero (com placeholder de imagem), preco (ou CTA se `null`), duração, ponto de saída, incluso/não incluso, CTA WhatsApp
- Blocos opcionais (omitir se dados ausentes): roteiro detalhado, depoimento, galeria, FAQ
- Passeio com dados muito escassos: página mínima com descrição básica + CTA de consulta WhatsApp

**Arquivos prováveis:**
- `data/passeios.ts` (dados das 19 entradas)
- `app/passeios/[categoria]/[slug]/page.tsx` (renderização condicional — via ISSUE-05)

**Critérios de aceite:**
- [ ] 19 URLs retornam HTTP 200
- [ ] Nenhuma página exibe `null`, `undefined` ou dado inventado
- [ ] Passeios com preço `null` exibem CTA WhatsApp no lugar do valor
- [ ] Nenhum passeio exibe valor privativo, horário exato ou fornecedor sem confirmação
- [ ] Cada página tem CTA WhatsApp

**Risco:** Médio — volume alto; risco de dado incorreto passar despercebido.  
**Observação:** Revisar antes de ir ao ar — especialmente campos de preço e restrições.

---

### ISSUE-13 — Página `/servicos/transfer-24h/`

**Tipo:** AFK  
**Bloqueado por:** ISSUE-04

**Objetivo:**  
Criar a página do serviço Transfer 24h fora da árvore de passeios.

**URL:** `/servicos/transfer-24h/`  
**Rota:** `app/servicos/transfer-24h/page.tsx` (nova)

**Conteúdo:**
- H1: "Transfer 24h em João Pessoa — Aeroporto e Hotel"
- Descrição do serviço (sem inventar preço)
- O que está incluso / O que não está incluso
- CTA WhatsApp "Solicitar cotação de transfer"
- Prova social (mesmo bloco da empresa)

**Arquivos prováveis:**
- `app/servicos/transfer-24h/page.tsx` (novo)
- `data/servicos.ts` (se criado em ISSUE-04)

**Critérios de aceite:**
- [ ] `/servicos/transfer-24h/` retorna HTTP 200
- [ ] Preço não exibido (campo `null` → CTA WhatsApp para cotação)
- [ ] CTA WhatsApp presente
- [ ] Metadata com title e description corretos
- [ ] Página não aparece em `/passeios/`

**Risco:** Baixo — escopo pequeno.

---

### ISSUE-14 — Página `/faq/` versão enxuta com schema FAQPage

**Tipo:** AFK  
**Bloqueado por:** nenhum

**Objetivo:**  
Criar a página `/faq/` com as perguntas frequentes extraídas do vault, schema FAQPage e CTA WhatsApp.

**URL:** `/faq/`  
**Rota:** `app/faq/page.tsx` (nova)

**Fontes do conteúdo:** `objecoes.md`, `base-operacional-comercial.md`, `politica-cancelamento-base.md`, `google-meu-negocio.md`, `provas-de-confianca.md`

**Temas das perguntas (mínimo 8 no lançamento):**
- Como reservar / confirmar pelo WhatsApp
- Formas de pagamento / cartão / taxa
- Política de criança (grátis abaixo de 5 anos, 20% de desconto 5–11)
- O que acontece se chover (remarcação gratuita / reembolso)
- Política de cancelamento / no-show
- O que é tábua de marés e como afeta meu passeio
- Colete salva-vidas / segurança
- Passeio privativo (disponível sob consulta)
- A agência é registrada? (Cadastur 52.077.577)
- Avaliações — onde ver (Google 4.9/5, 61 avaliações)

**Campos sem resposta segura no vault:** manter a pergunta, responder com CTA WhatsApp.

**Arquivos prováveis:**
- `app/faq/page.tsx` (novo)
- `components/FAQAccordion.tsx` (reutilizar)

**Critérios de aceite:**
- [ ] `/faq/` retorna HTTP 200
- [ ] Mínimo 8 perguntas publicadas sem dado inventado
- [ ] Schema `FAQPage` válido (testar no Rich Results Test)
- [ ] CTA WhatsApp presente
- [ ] Nenhuma resposta com `null` ou `undefined` visível

**Risco:** Baixo — conteúdo já está no vault; é questão de extrair e estruturar.

---

## GRUPO 5 — SEO TÉCNICO

---

### ISSUE-15 — `app/sitemap.ts` — gerar sitemap.xml com as 32 URLs

**Tipo:** AFK  
**Bloqueado por:** ISSUE-01, ISSUE-03

**Objetivo:**  
Criar `app/sitemap.ts` para gerar o `sitemap.xml` automaticamente com todas as 32 URLs da Fase 1.

**URLs do sitemap (conforme ADR 0003):**
- `/` (Home)
- `/faq/`
- `/passeios/`
- 6 páginas de categoria
- 22 páginas de passeio
- `/servicos/transfer-24h/`

**URLs que NÃO devem entrar:** `/sobre`, `/passeios/piscinas-naturais/calendario` (rotas fora do sitemap aprovado)

**Arquivos prováveis:**
- `app/sitemap.ts` (novo)

**Critérios de aceite:**
- [ ] `/sitemap.xml` acessível em produção
- [ ] Contém as 32 URLs aprovadas
- [ ] Não contém `/sobre` nem `/calendario`
- [ ] `lastModified` presente
- [ ] Validado em `https://www.xml-sitemaps.com/validate-xml-sitemap.html`

**Risco:** Baixo — Next.js 14 tem suporte nativo a `app/sitemap.ts`.

---

### ISSUE-16 — `app/robots.ts` e `app/not-found.tsx`

**Tipo:** AFK  
**Bloqueado por:** ISSUE-01

**Objetivo:**  
Criar `robots.txt` e página 404 customizada.

**`robots.ts`:**
- `User-agent: *`, `Allow: /`
- `Sitemap: https://vempassearjampa.com.br/sitemap.xml`
- Bloquear: `/sobre` e `/passeios/piscinas-naturais/calendario` via `Disallow`

**`not-found.tsx`:**
- Mensagem clara: "Página não encontrada"
- Link para `/passeios/` e CTA WhatsApp
- Sem bloco de erro técnico visível ao usuário

**Arquivos prováveis:**
- `app/robots.ts` (novo)
- `app/not-found.tsx` (novo)

**Critérios de aceite:**
- [ ] `/robots.txt` acessível e válido
- [ ] Sitemap referenciado no robots.txt
- [ ] `/sobre` e `/calendario` com `Disallow`
- [ ] URL inexistente retorna HTTP 404 com página customizada
- [ ] Página 404 tem link para `/passeios/` e CTA WhatsApp

**Risco:** Baixo.

---

## GRUPO 6 — CTA / MOBILE / QA

---

### ISSUE-17 — Audit de CTA WhatsApp em todas as páginas

**Tipo:** AFK  
**Bloqueado por:** ISSUE-08 a ISSUE-14

**Objetivo:**  
Verificar que todas as 32 páginas têm CTA WhatsApp presente, funcional e visível acima da dobra em mobile.

**Regras (PRD seção 9):**
- CTA primário: acima da dobra em mobile (hero) em todas as páginas de passeio
- CTA secundário: ao final de cada página
- Header: CTA fixo sempre visível
- Link correto: `https://wa.me/558399087830` em nova aba
- Texto diferenciado: "Reservar no WhatsApp" / "Solicitar Transfer" / "Tirar Dúvida"
- Botão: mínimo 48×48px

**Arquivos prováveis:**
- Todos os `page.tsx` das 32 rotas
- `components/CTAFinal.tsx`, `components/CTASticky.tsx`

**Critérios de aceite:**
- [ ] Todas as páginas de passeio têm CTA acima da dobra em 320px
- [ ] Todas as páginas têm CTA no final
- [ ] Link WhatsApp abre em nova aba
- [ ] Link correto (`wa.me/558399087830`) — sem espaços ou formato errado
- [ ] Botão tem área de toque mínima de 48×48px

**Risco:** Médio — CTA quebrado = zero conversão.

---

### ISSUE-18 — Audit de responsividade mobile 320px

**Tipo:** AFK  
**Bloqueado por:** ISSUE-08 a ISSUE-14

**Objetivo:**  
Verificar que todas as páginas funcionam corretamente em viewport de 320px (mobile mínimo).

**Pontos a verificar:**
- Texto não truncado ou sobreposto
- Imagens não transbordam o container
- Botões clicáveis por thumb
- Menu hamburger funcional
- Tabelas/grids não quebram o layout
- FAQ accordion abre/fecha corretamente
- CTA visível sem scroll excessivo

**Arquivos prováveis:**
- Todos os componentes e páginas (revisão visual)

**Critérios de aceite:**
- [ ] Nenhum elemento transborda o viewport em 320px
- [ ] Menu hamburger funcional em 320px
- [ ] FAQ accordion funcional em 320px
- [ ] CTA WhatsApp clicável em 320px
- [ ] Lighthouse Mobile Score ≥ 90

**Risco:** Médio — 70–80% do tráfego é mobile.

---

### ISSUE-19 — Checklist QA manual: Lighthouse, schemas, HTTP 200, type-check, lint

**Tipo:** HITL  
**Bloqueado por:** ISSUE-08 a ISSUE-18

**Objetivo:**  
Validação final antes de deploy — rodar todos os critérios de aceite do PRD e registrar resultado.

**Checklist:**
- [ ] `npm run type-check` sem erros
- [ ] `npm run lint` sem warnings críticos
- [ ] `npm run build` completa sem erros
- [ ] Todas as 32 URLs retornam HTTP 200
- [ ] Lighthouse Mobile ≥ 90 (Performance, Accessibility, SEO) nas 3 páginas prioritárias
- [ ] Schema `LocalBusiness` válido (Rich Results Test — Home)
- [ ] Schema `TouristAttraction` + `FAQPage` válidos (Rich Results Test — passeios prioritários)
- [ ] Schema `FAQPage` válido (`/faq/`)
- [ ] `sitemap.xml` válido e com 32 URLs
- [ ] `robots.txt` válido com sitemap referenciado
- [ ] Nenhuma página exibe `null`, `undefined` ou dado inventado
- [ ] CTA WhatsApp funcional em todas as páginas

**Arquivos prováveis:** nenhum (é revisão, não implementação)

**Risco:** Alto — esta issue não pode falhar antes de deploy.

---

## GRUPO 7 — CONTEÚDO HITL

---

### ISSUE-20 — Coletar fotos reais dos 3 passeios prioritários

**Tipo:** HITL  
**Bloqueado por:** nenhum (não bloqueia execução técnica)

**Objetivo:**  
Murillo fornece fotos reais para o hero e galeria dos 3 passeios prioritários.

**Passeios:**
1. Seixas (piscinas naturais, snorkel, vida marinha)
2. Areia Vermelha Catamarã (catamarã, ilha, piscinas)
3. Litoral Sul Roteiro Clássico (praias Gramame, Amor, Tambaba, Coqueirinho)

**Especificações técnicas:**
- Hero: mínimo 1200×630px (proporção 16:9 ou 2:1)
- Formato: JPG ou WebP
- `alt` descritivo: o que está na cena + contexto local (ex: "Turistas com snorkel nas Piscinas Naturais do Seixas, João Pessoa")
- Evitar fotos genéricas de banco de imagem

**Critérios de aceite:**
- [ ] Mínimo 1 foto real por passeio prioritário
- [ ] Fotos com `alt` descritivo antes de ir ao ar
- [ ] Formato e dimensões adequados para hero

**Risco:** Alto — placeholder no hero reduz conversão significativamente.  
**Observação:** Não trava implementação técnica, mas trava lançamento com qualidade mínima.

---

### ISSUE-21 — Coletar depoimentos de clientes dos 3 passeios prioritários

**Tipo:** HITL  
**Bloqueado por:** nenhum (não bloqueia execução técnica)

**Objetivo:**  
Murillo fornece ou solicita depoimentos reais de clientes para os 3 passeios prioritários.

**Formato necessário:**
```
texto: "Depoimento real do cliente..."
autor: "Nome do Cliente"
cidade: "São Paulo, SP" (opcional)
```

**Critérios de aceite:**
- [ ] Mínimo 1 depoimento real por passeio prioritário
- [ ] Nenhum depoimento inventado ou modificado além de edição ortográfica
- [ ] Autor e cidade (quando disponível) confirmados

**Risco:** Médio — bloco de depoimento fica omitido sem isso; não impede lançamento do MVP.

---

## GRUPO 8 — LIMPEZA DE ROTAS FORA DO SITEMAP

---

### ISSUE-22 — Avaliar e tratar `/app/sobre/page.tsx`

**Tipo:** HITL  
**Bloqueado por:** nenhum

**Objetivo:**  
A rota `/sobre` existe no código mas está fora do sitemap aprovado da Fase 1 (ADR 0003). Decidir o tratamento antes do deploy.

**Decisão já tomada (grill-with-docs):** conteúdo "Sobre/Murillo" entra como bloco na Home e footer, sem página própria na Fase 1.

**Opções de tratamento (Murillo decide):**

| Opção | Impacto |
|-------|---------|
| A — Manter sem link público | Página acessível por URL direta, mas sem link no menu/footer/sitemap. Menor risco. |
| B — Redirecionar `/sobre` → `/` | 301 redirect para a Home. URLs externas que apontem para `/sobre` são preservadas. |
| C — Remover o arquivo | Rota some; qualquer link existente quebra com 404. Risco se houver links externos. |

**Recomendação:** Opção A (manter sem link público) por ora — menor risco, revisitar na Fase 2.

**Arquivos prováveis:**
- `app/sobre/page.tsx`
- `app/robots.ts` (adicionar `Disallow: /sobre`)

**Critérios de aceite:**
- [ ] Decisão registrada (A, B ou C)
- [ ] Opção implementada antes do deploy
- [ ] `/sobre` não aparece no `sitemap.xml`
- [ ] `/sobre` com `Disallow` no `robots.txt` se mantida (opção A)

**Risco:** Baixo — não afeta as 32 URLs aprovadas.

---

### ISSUE-23 — Avaliar e tratar `/app/passeios/piscinas-naturais/calendario/page.tsx`

**Tipo:** HITL  
**Bloqueado por:** nenhum

**Objetivo:**  
A rota `/passeios/piscinas-naturais/calendario` existe no código mas não está no sitemap aprovado da Fase 1. Decidir o tratamento.

**O que é a página:** aparentemente exibe o calendário de saídas das Piscinas Naturais com base na tábua de marés (`data/tabua-mares.ts` já existe). É funcionalidade de valor — mas não foi incluída no sitemap aprovado.

**Opções de tratamento:**

| Opção | Impacto |
|-------|---------|
| A — Manter sem link público | Página existe mas sem link; revisitar na Fase 2 |
| B — Incluir no sitemap como página extra | Adiciona 1 URL ao sitemap; requer revisão de conteúdo e SEO |
| C — Remover o arquivo | Funcionalidade de tábua de marés some |

**Recomendação:** Opção B — a tábua de marés é diferencial competitivo real (turistas pesquisam maré antes de ir ao Seixas). Vale incluir como `/passeios/piscinas-naturais/calendario/` se o conteúdo estiver correto.

**Arquivos prováveis:**
- `app/passeios/piscinas-naturais/calendario/page.tsx`
- `app/sitemap.ts` (se opção B)
- `data/tabua-mares.ts` (verificar dados)

**Critérios de aceite:**
- [ ] Decisão registrada (A, B ou C)
- [ ] Implementada antes do deploy
- [ ] Se opção B: URL adicionada ao sitemap e robots.txt atualizado

**Risco:** Baixo — não afeta as 32 URLs já aprovadas; é adição, não modificação.  
**Observação:** Se opção B for aprovada, atualizar ADR 0003 e CONTEXT.md com a URL extra.

---

## Resumo de Dependências

```
ISSUE-01 (constantes)
  └── ISSUE-03 (dados 22 passeios)
        ├── ISSUE-05 (tratamento [CONSULTAR])
        ├── ISSUE-06 (header dropdown)
        ├── ISSUE-08 (home)
        ├── ISSUE-09 (hub /passeios/)
        ├── ISSUE-10 (categorias)
        ├── ISSUE-11 (3 prioritários) ←── ISSUE-20, ISSUE-21 (conteúdo HITL)
        └── ISSUE-12 (19 restantes)
ISSUE-04 (dados transfer)
  └── ISSUE-13 (página transfer)
ISSUE-01
  └── ISSUE-15 (sitemap)
  └── ISSUE-16 (robots + 404)
ISSUE-08 a ISSUE-14
  └── ISSUE-17 (audit CTA)
  └── ISSUE-18 (audit mobile)
        └── ISSUE-19 (QA final — HITL)
                └── Deploy (ISSUE fora deste arquivo)
```

---

**Total: 23 issues** (ISSUE-02 e ISSUE-22 são HITL; ISSUE-03 é o critical path)  
*Gerado em 2026-04-30 | Base: `prd-site-fase-1.md` + `CONTEXT.md` + estado atual do codebase*
