# Skill: Estrategista de Site

## 1. Função

Definir a **arquitetura macro do site** como ferramenta de conversão: estrutura de páginas, hierarquia de informação, fluxo de navegação do turista, CRO (conversion rate optimization), definição de CTAs, jornadas de decisão e relações entre home, passeios, categorias e WhatsApp.

Não faz design, não escreve copy, não otimiza SEO — faz o **plano estratégico** que guia todas as outras skills.

## 2. Quando Usar

✅ Começando novo site e precisa de mapa estrutural completo  
✅ Quer entender fluxo de decisão: turista chega → home → categoria → passeio → WhatsApp  
✅ Precisa definir quais páginas existem e como se conectam  
✅ Quer validar que CRO está embutida na estrutura (não improvisada depois)  
✅ Retomando site inacabado e precisa recuperar a visão geral  

## 3. Quando NÃO Usar

❌ Para design/wireframe visual (use `ux-ui-mobile-first`)  
❌ Para otimização SEO específica (use `seo-local-turismo`)  
❌ Para escrever copy (use `copywriter-vendas`)  
❌ Para implementar código (use `programador-de-site`)  

## 4. Entradas Necessárias

Antes de começar, confirme:

- Quantas **categorias de passeios** existem realmente? (ler em `_conhecimento/clusters-seo.md`)
- Qual é o **passeio hero** (estrela, mais vendido ou mais diferenciador)?
- **Número total de passeios** a oferecer? (ler em `_conhecimento/passeios.md`)
- Qual é a **jornada esperada** do turista? (busca → escolhe tipo → vê opções → lê detalhe → converte)
- Há **pacotes/combos** ou cada passeio é vendido separadamente?

Fonte de verdade: `_conhecimento/clusters-seo.md` + `_conhecimento/passeios.md` + `_conhecimento/plano-seo-prioridades.md`

## 5. Processo

### Etapa 1: Mapear Intent do Turista

Turista chegando em JP digitando no Google tem **3 intents principais:**

1. **DESCOBERTA:** "O que fazer em João Pessoa?" → Home
2. **CONSIDERAÇÃO:** "Quero praia / historia / trilhas" → Categoria
3. **DECISÃO:** "Quero Seixas especificamente" → Página de Passeio → WhatsApp

Sua tarefa é desenhar as páginas para cada intent.

### Etapa 2: Definir Páginas Críticas (Tier 1)

**Sempre existem:**

- **Home:** porta de entrada, responde "o que devo fazer em JP?", mostra categorias, cliques levam para categorias
- **Páginas de Passeio:** 1 por passeio, responde "por que fazer este passeio?", mostra preço/duração/roteiro, CTA WhatsApp
- **Páginas de Categoria:** agrupa passeios (ex: "Litoral Sul" agrupa Seixas, Tambaú, etc.), facilita SEO
- **Sobre Nós:** credibiliza Murillo, agência, expertise local
- **FAQ / Blog (futura):** educação, SEO de apoio

### Etapa 3: Desenhar Hierarquia (Arquitetura de URLs)

Estrutura recomendada:

```
/
├── / (home)
├── /passeios (listagem — opcional, pode pular direto para categorias)
│   ├── /[categoria-slug] (ex: /litoral-sul, /urbano)
│   │   ├── /[categoria-slug]/[passeio-slug] (ex: /litoral-sul/seixas)
│   │   ├── /[categoria-slug]/[passeio-slug] (ex: /litoral-sul/tambau)
├── /sobre
└── /blog (futura, Fase 2)
```

**Regra:** Máximo 3 cliques do turista até WhatsApp. Home → Categoria → Passeio → CTA.

### Etapa 4: Definir CRO — Conversion Rate Optimization

CRO não é "vender agressivo", é **remover fricção na conversão.** Para cada página, defina:

**1. CTA Principal:** 
- Sempre WhatsApp (único CTA de conversão)
- Deve estar: acima do fold (mobile), sticky em scroll, no final da página
- Deve ser óbvio: botão verde, contraste alto, 44px+ altura
- Nunca email/formulário como CTA primária

**2. Visibilidade de Preço:**
- Mostrar SEMPRE (sem "clique para ver", sem "sob consulta")
- Home: em cada card de categoria
- Página passeio: em destaque após hero (Info Card)
- Página categoria: em cada passeio listado

**3. Prova de Confiança (Ordem de Importância):**
- Home: Cadastur badge (topo) + Rating "4.9/5" (hero) + Murillo intro (meio) + 1 depoimento (fim)
- Página passeio: Cadastur (topo) + Rating (topo) + Murillo "conheço cada maré" (descrição) + Depoimento real (antes CTA final)
- Página categoria: Rating (topo) + N° de passeios oferecidos com proof

**4. Operacional Claro:**
- Info Card visível: Preço, Duração, Ponto de Saída, Horário
- Se aplicável: Restrição (maré, idade mínima, física, chuva)
- Não deixar informação crítica só no final

**5. FAQ antes do CTA Final:**
- Perguntas comuns DEVEM quebrar objeções (não "como vocês foram fundados")
- Mínimo 3 perguntas por página de passeio
- Accordion mobile-friendly (44px tap target)

Fonte: `_conhecimento/benchmark-site-cro.md` — consulte antes de finalizar

### Etapa 5: Mapear Fluxos de Conversão

Desenhe **3-5 jornadas reais** que turista pode tomar:

**Exemplo 1: Turista quer praia**
1. Google: "praias João Pessoa"
2. Clica em site
3. Vê home com cards de categorias
4. Clica "Litoral Sul"
5. Vê 3-4 praias (cards com foto, nome, preço)
6. Clica "Seixas"
7. Lê roteiro, vê depoimento, vê preço
8. Clica "Agendar no WhatsApp"

**Exemplo 2: Turista tem criança**
1. Google: "passeios família João Pessoa"
2. Clica em site
3. Vê home, procura algo safe para crianças
4. Encontra [CATEGORIA] apropriada
5. Escolhe [PASSEIO]
6. Vê info "apropriado para maiores de X anos", foto, depoimento de família
7. Clica WhatsApp

Defina seus 3-5 fluxos reais. Isso guia a estrutura de tudo.

### Etapa 6: Links Internos e Navegação

Defina:

- **Menu principal:** Home, Categorias, Sobre, Blog (depois)
- **Breadcrumb:** "Home > Litoral Sul > Seixas" (sempre contextualiza turista)
- **Links relacionados:** "Outras praias similares: Tambaú, Jacaré"
- **Conexão Cross-Categoria:** Se está em praia, aponta para trilhas? Depende.
- **Home aponta para:** Todas categorias (em cards/blocos), Sobre, Blog (depois)

### Etapa 7: Validar Contra Fonte de Verdade

Antes de finalizar, valide:

- [ ] Checou `clusters-seo.md`? (categorias estão alinhadas)
- [ ] Checou `passeios.md`? (número de passeios real)
- [ ] Checou `plano-seo-prioridades.md`? (prioridades de fase)
- [ ] Checou `benchmark-site-cro.md`? (CRO alinhada)
- [ ] Checou `provas-de-confianca.md`? (onde aparecem as provas)

## 6. Regras Específicas

- **Mobile-first:** Hierarquia deve funcionar em tela pequena (menos é mais)
- **Sem clique inútil:** Cada navegação leva mais perto da compra
- **CTA única clara:** WhatsApp é o botão verde óbvio em toda página
- **Prova sempre visível:** Rating/Cadastur/Murillo na home e passeios
- **Preço transparente:** Não esconder, mostrar desde o card
- **Jornada clara:** Turista não se perde (breadcrumb, botão voltar, menu fixo)
- **Links internos coerentes:** Página de passeio aponta para categoria (volta), para outras praias (similar)

## 7. Saída Esperada

Um arquivo markdown com **mínimo** 4 seções:

### Seção 1: Árvore de URLs

Visual clara de toda hierarquia:

```
/
├── / (home — porta de entrada)
├── /passeios/[categoria] (páginas de categoria)
│   ├── /passeios/[categoria]/[passeio] (páginas de passeio)
└── /sobre
```

Incluir slug proposto para cada página (ex: `litoral-sul`, `seixas`)

### Seção 2: Jornadas de Conversão

3-5 fluxos reais do turista, da chegada ao WhatsApp. Exemplo:

```
Turista 1 (Praia): Busca "praias João Pessoa" 
→ Home (vê cards Litoral, Urbano, etc)
→ Clica Litoral Sul 
→ Vê Seixas, Tambaú, Jacaré
→ Clica Seixas 
→ Lê descrição, preço, CTA 
→ Clica WhatsApp
```

### Seção 3: Estrutura de Navegação Mobile

Como menu, breadcrumb, CTAs se posicionam:

```
Menu (hambúrguer)
├── Home
├── Passeios
│   ├── Litoral Sul
│   ├── Urbano
│   └── Trilhas
├── Sobre Nós
└── Blog (futuro)

Breadcrumb: Home > Categoria > Passeio (sempre presente)
CTA: Botão WhatsApp sticky (mobile), não atrapalha conteúdo
```

### Seção 4: CRO — Elementos de Conversão

Onde cada elemento aparece:

```
Rating 4.9/5: Home (hero), cada passeio (topo), GMB link
Cadastur: Home (badge), cada passeio (legibilidade legal)
Preço: Card de passeio, topo da página, CTA
Depoimento: Home (1-2), cada passeio (1-2)
Duracao/Horario: Info card destacada, topo da página
FAQ: Seção dedicada, cada passeio (accordion)
CTA WhatsApp: Sticky mobile, fim da página, dentro de text (natural)
```

### Seção 5: Links Internos Esperados

Matriz de qual página aponta para qual:

```
Home → Todas categorias, Sobre, Blog (depois)
Seixas → Litoral Sul (volta), Tambaú (similar), Home (breadcrumb)
Litoral Sul → Seixas, Tambaú, Jacaré, Home (breadcrumb)
Sobre → Home
```

**Tamanho esperado:** 2-4 páginas markdown, visual clara, sem prosa desnecessária.

## 8. Critério de Qualidade

✅ **Bom estrategista:** Defini jornada clara, UX enxuta, CRO pensado, cada página tem propósito  
❌ **Ruim:** Copiou estrutura genérica de site turismo, sem pensar em jornada de Vem Passear, prova de confiança esquecida  

## 9. Próximas Skills na Cadeia

Depois disso, a estratégia guia:

1. **`ux-ui-mobile-first`:** Transforma estrutura em wireframe + layout
2. **`copywriter-vendas`:** Escreve copy baseado na estrutura
3. **`seo-local-turismo`:** Otimiza cada página conforme estrutura
4. **`briefing-designer`:** Gera briefing visual baseado na estrutura
5. **`programador-de-site`:** Implementa tudo isso em Next.js

---

*Skill v2.0 | Refinada 2026-04-25 | Fase Estrutura + CRO*
