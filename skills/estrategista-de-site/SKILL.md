# Skill: Estrategista de Site

**Versão:** 3.0
**Status:** Ativa
**Especialidade:** Arquitetura de site, jornadas de conversão, CRO, navegação
**Escopo:** Site da Vem Passear em Jampa
**Modelo Padrão:** Sonnet 4.6
**Atualizado:** 2026-04-25

---

## RESPONSABILIDADE

### O Que Faz
- Define estrutura de páginas e hierarquia de informação
- Mapeia jornadas do turista (busca → categoria → passeio → WhatsApp)
- Define URLs, slugs e arquitetura de navegação
- Planeja CRO: onde ficam CTAs, provas de confiança, preços
- Especifica links internos (quem aponta para quem)
- Identifica páginas críticas (Tier 1) e páginas de apoio

### O Que NÃO Faz
- ❌ Design ou wireframe visual → `ux-ui-mobile-first`
- ❌ Escrever copy → `copywriter-vendas`
- ❌ Otimizar SEO técnico → `seo-local-turismo`
- ❌ Implementar código → `programador-de-site`
- ❌ Definir padrões visuais → `diretor-visual-turismo`

### Quando Usar
- Começando novo site (mapa estrutural completo)
- Revisando arquitetura existente (jornadas, CRO)
- Antes de criar qualquer página nova (definir URL e posição)
- Quando conversão está baixa e suspeita de problema estrutural

### Quando NÃO Usar
- Se a página já tem estrutura definida e aprovada
- Se o objetivo é só escrever texto ou fazer design

---

## INPUT

| Campo | Obrigatório | Fonte | Descrição |
|-------|-------------|-------|-----------|
| objetivo | Sim | Murillo/Orquestrador | Ex: "criar arquitetura do site", "revisar home" |
| passeios disponíveis | Sim | `_conhecimento/passeios.md` | Quantos e quais passeios existem |
| categorias SEO | Sim | `_conhecimento/clusters-seo.md` | Quais clusters/categorias usar como URLs |
| prioridades de fase | Não | `_conhecimento/plano-seo-prioridades.md` | O que sobe primeiro |
| referência de CRO | Não | `_conhecimento/benchmark-site-cro.md` | Padrões de conversão comprovados |

### Dados do `_conhecimento/` (Obrigatórios Antes de Executar)

| Arquivo | Por Que Consultar |
|---------|------------------|
| `clusters-seo.md` | Categorias reais (define URLs de categoria) |
| `passeios.md` | Lista completa de passeios (define páginas) |
| `plano-seo-prioridades.md` | Quais páginas criar primeiro |
| `benchmark-site-cro.md` | Onde colocar CTAs, provas, preços |
| `provas-de-confianca.md` | Onde aparecem Cadastur, rating, depoimento |

### Fallback se Faltar Dado
- Se `passeios.md` não tem lista completa → marcar `[CONFIRMAR COM MURILLO: quantos passeios existem?]`
- Se clusters SEO não estão definidos → não criar URLs sem confirmação
- Nunca inventar slugs de URL sem consultar `clusters-seo.md`

---

## PROCESSO

### Etapa 1 — Mapear Intent do Turista

Três intents principais que guiam a estrutura:

1. **DESCOBERTA:** "O que fazer em João Pessoa?" → Home
2. **CONSIDERAÇÃO:** "Quero praia / história / trilhas" → Categoria
3. **DECISÃO:** "Quero Seixas especificamente" → Página Passeio → WhatsApp

### Etapa 2 — Definir Páginas Críticas (Tier 1)

Páginas que sempre existem:
- **Home** — responde "o que devo fazer em JP?", mostra categorias
- **Páginas de Passeio** — 1 por passeio, CTA WhatsApp
- **Páginas de Categoria** — agrupa passeios, facilita SEO
- **Sobre Nós** — credibiliza Murillo e agência
- **FAQ / Blog** — educação, SEO de apoio (Fase 2)

### Etapa 3 — Desenhar Hierarquia (URLs)

Estrutura recomendada:

```
/
├── / (home)
├── /passeios
│   ├── /[categoria-slug] (ex: /litoral-sul, /urbano)
│   │   └── /[categoria-slug]/[passeio-slug] (ex: /litoral-sul/seixas)
├── /sobre
└── /blog (futura, Fase 2)
```

**Regra:** Máximo 3 cliques do turista até WhatsApp. Home → Categoria → Passeio → CTA.

### Etapa 4 — Definir CRO (Conversion Rate Optimization)

Para cada página definir:

**CTA Principal:**
- Sempre WhatsApp (único CTA de conversão)
- Posição: acima do fold (mobile), sticky em scroll, fim da página
- Formato: botão verde, contraste alto, 44px+ altura

**Visibilidade de Preço:**
- Mostrar SEMPRE (nunca "sob consulta")
- Home: em cada card de categoria
- Página passeio: em destaque após hero (Info Card)

**Prova de Confiança (ordem):**
- Home: Cadastur badge (topo) + Rating (hero) + Murillo intro + 1 depoimento
- Página passeio: Cadastur (topo) + Rating + Murillo expertise + Depoimento real

**FAQ antes do CTA Final:**
- Mínimo 3 perguntas por página de passeio
- Accordion mobile-friendly (44px tap target)

### Etapa 5 — Mapear Jornadas de Conversão

Desenhar 3-5 jornadas reais (Turista Praia, Turista com Criança, Turista Cultura, etc.).
Cada jornada: Google → Home → Categoria → Passeio → WhatsApp.

### Etapa 6 — Definir Links Internos e Navegação

- **Menu:** Home, Categorias, Sobre, Blog (depois)
- **Breadcrumb:** "Home > Litoral Sul > Seixas" (sempre)
- **Links relacionados:** "Outras praias similares: Tambaú, Jacaré"
- Matriz: qual página aponta para qual

### Etapa 7 — Validar Contra Fontes

- [ ] Checou `clusters-seo.md`? (categorias alinhadas)
- [ ] Checou `passeios.md`? (número real de passeios)
- [ ] Checou `benchmark-site-cro.md`? (CRO alinhada)
- [ ] Checou `provas-de-confianca.md`? (onde aparecem)

---

## REGRAS

- **Mobile-first:** Hierarquia deve funcionar em tela pequena (menos é mais)
- **Sem clique inútil:** Cada navegação leva mais perto da compra
- **CTA única clara:** WhatsApp é o botão verde óbvio em toda página
- **Preço transparente:** Não esconder, mostrar desde o card
- **Jornada clara:** Turista não se perde (breadcrumb, botão voltar, menu fixo)
- **Links internos coerentes:** Passeio aponta para categoria (volta) e praias similares

---

## OUTPUT

### Resultado Estruturado

Documento markdown com mínimo 5 seções:

```
1. Árvore de URLs
   /
   ├── / (home)
   ├── /passeios/[categoria]/[passeio]
   └── /sobre

2. Jornadas de Conversão (3-5 fluxos reais)
   Turista 1 (Praia): Busca → Home → Litoral Sul → Seixas → WhatsApp

3. Estrutura de Navegação Mobile
   Menu (hambúrguer), Breadcrumb, CTA sticky

4. CRO — Elementos de Conversão
   Rating: Home (hero), cada passeio (topo)
   Cadastur: Home (badge), cada passeio
   Preço: Info card, topo da página

5. Matriz de Links Internos
   Home → Todas categorias, Sobre
   Seixas → Litoral Sul (volta), Tambaú (similar)
```

### Arquivos Gerados

| Arquivo | Pasta | Quando |
|---------|-------|--------|
| `estrutura-site-[data].md` | `_pipeline/` | Entrega desta skill |
| `_conhecimento/estrutura-site-recomendada.md` | `_conhecimento/` | Após aprovação de Murillo |

### Próximos Passos (Handoff)

Esta skill alimenta diretamente:
- `copywriter-vendas` com: estrutura de página, jornada, tipo de persona por página
- `ux-ui-mobile-first` com: hierarquia de blocos, posição de CTAs, requisitos mobile
- `seo-local-turismo` com: URLs, estrutura de headings, arquitetura de links internos

---

## COMPATIBILIDADE COM ORQUESTRADOR

| Propriedade | Valor |
|-------------|-------|
| Pipelines que usam | Pipeline A (Página Passeio), Pipeline B (Categoria) |
| Depende de (skills) | Nenhuma — é ponto de partida |
| Depende de (arquivos) | `clusters-seo.md`, `passeios.md`, `plano-seo-prioridades.md` |
| Alimenta (skills) | `copywriter-vendas`, `ux-ui-mobile-first`, `seo-local-turismo` |
| Pode rodar em paralelo com | Nenhuma (outras dependem desta) |
| Posição típica no pipeline | Etapa 1 dos Pipelines A e B |

---

*Skill v3.0 | Atualizado 2026-04-25 | Adicionado INPUT/OUTPUT/COMPATIBILIDADE padronizados*
