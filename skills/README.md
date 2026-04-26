# Habilidades (Skills) — Vem Passear em Jampa

Arquitetura de skills especialistas para executar projeto de site e SEO local em João Pessoa.

## 🧭 Ponto de Entrada: Orquestrador

**Antes de escolher uma skill, consulte o orquestrador:**

```
→ skills/orquestrador-projeto-turismo/SKILL.md
```

O orquestrador decide qual skill usar, em que ordem e com qual objetivo.
Use-o quando o objetivo envolver mais de 2 skills ou quando não souber por onde começar.

---

## 🎯 Arquitetura de Skills Ativa (v4.0)

**10 skills especializadas + 1 orquestrador**, cada uma com responsabilidade clara e não sobreposta:

### 1. **Estrategista de Site** 
**Responsabilidade:** Definir estrutura, jornada, CRO  
**Entrada:** Quantas categorias, qual passeio hero, intent do turista  
**Saída:** Árvore de URLs, jornadas, estrutura CRO, navegação  
**Próximo na cadeia:** `ux-ui-mobile-first` + `copywriter-vendas` (paralelo)

📁 `estrategista-de-site/SKILL.md`

---

### 2. **UX/UI Mobile-First**
**Responsabilidade:** Transformar estratégia em wireframe visual  
**Entrada:** Copy aprovado, objetivo da página, ação esperada  
**Saída:** Wireframe textual, responsividade 3-breakpoint, componentes, acessibilidade  
**Próximo na cadeia:** `briefing-designer` (comunica ao designer) + `programador-de-site` (implementa)

📁 `ux-ui-mobile-first/SKILL.md`

---

### 3. **Copywriter Vendas**
**Responsabilidade:** Escrever copy que converte  
**Entrada:** Nome/tema, público-alvo, problema real, diferencial  
**Saída:** Copy completo (AIDA), notas de implementação, checklist qualidade  
**Próximo na cadeia:** `ux-ui-mobile-first` (layout) + `seo-local-turismo` (otimização)

📁 `copywriter-vendas/SKILL.md`

---

### 4. **SEO Local Turismo**
**Responsabilidade:** Otimizar para turista em Google (João Pessoa)  
**Entrada:** Página em markdown, palavra-chave alvo, intent do turista  
**Saída:** Análise de keywords, estrutura on-page, schema JSON-LD, links internos  
**Próximo na cadeia:** `programador-de-site` (implementa SEO técnico)

📁 `seo-local-turismo/SKILL.md`

---

### 5. **Briefing Designer**
**Responsabilidade:** Comunicar intenção ao designer  
**Entrada:** Página aprovada (copy + UX), objetivo, persona, referências  
**Saída:** Briefing visual (wireframe + componentes + responsividade + restrições)  
**Próximo na cadeia:** Designer (design real em Figma) → `programador-de-site`

📁 `briefing-designer/SKILL.md`

---

### 6. **Programador de Site** ⭐ NOVO v2.0
**Responsabilidade:** Implementar site em Next.js  
**Entrada:** Copy aprovado, UX/UI specs, design visual, dados de passeios  
**Saída:** Páginas Next.js, componentes reutilizáveis, SEO técnico, performance otimizada  
**Stack:** Next.js, TypeScript, Tailwind CSS, next/image, Schema.org JSON-LD  
**Próximo na cadeia:** QA/Deploy/Analytics

📁 `programador-de-site/SKILL.md`

---

### 7. **Diretor Visual de Turismo** ⭐ NOVO v3.0
**Responsabilidade:** Direção visual, padrões, treinamento em conversão visual  
**Entrada:** Layout para crítica, pergunta sobre visual, necessidade de padrão componente  
**Saída:** Crítica estruturada, especificação visual, treinamento em "por quê", checklist de qualidade  
**Integração:** Trabalha com `ux-ui-mobile-first` (refina), `briefing-designer` (comunica padrões), `programador-de-site` (valida)  
**Escopo:** Site (turismo receptivo, João Pessoa, mobile-first)

**Arquivos:**
- 📁 `diretor-visual-turismo/SKILL.md` — Documento principal
- 📁 `diretor-visual-turismo/references/PADROES-VISUAIS.md` — Catálogo de padrões
- 📁 `diretor-visual-turismo/references/CHECKLIST-QUALIDADE.md` — Validação 100+ items
- 📁 `diretor-visual-turismo/references/TURISMO-RECEPTIVO-VISUAL.md` — Educação em conversão
- 📁 `diretor-visual-turismo/templates/COMPONENTES-PRINCIPAIS.md` — Especificação de componentes

---

## 🎯 GATILHOS DE USO — Qual Skill Chamar

**Tenho uma página para começar:** → `estrategista-de-site` (define estrutura, URLs, CRO)

**Página foi aprovada estruturalmente:** → `ux-ui-mobile-first` + `copywriter-vendas` (paralelo)

**Tenho copy pronto, preciso de layout:** → `ux-ui-mobile-first` (wireframe visual)

**Tenho página estruturada, preciso de texto que venda:** → `copywriter-vendas` (AIDA, prova, conversão)

**Página está pronta textualmente, designer precisa de briefing:** → `briefing-designer` (comunica visual)

**Página precisa ranquear em Google:** → `seo-local-turismo` (keywords, metas, schema, links)

**Tenho copy final, UX/UI specs, design visual, SEO checklist:** → `programador-de-site` (implementa Next.js)

**Preciso de crítica visual de layout:** → `diretor-visual-turismo` (análise estruturada, checklist)

**Preciso de padrão visual novo (componente):** → `diretor-visual-turismo` (especificação) → `briefing-designer` (comunica) → Designer

**Preciso entender conversão visual em turismo:** → `diretor-visual-turismo` (educação, referências)

**Página tem baixa conversão:** → `copywriter-vendas` (reescreve) → `diretor-visual-turismo` (valida visual) → `ux-ui-mobile-first` (refina layout) → `programador-de-site` (atualiza código)

**Página tem baixo ranqueamento:** → `seo-local-turismo` (audita) → `copywriter-vendas` (refina) → `programador-de-site` (implementa)

---

## 📊 Fluxo de Execução (Cadeia de Skills v3.0)

```
┌─────────────────────────────────────────────────────────────────┐
│ 1. Estrategista de Site                                         │
│    (define: árvore URLs, jornadas, CRO, navegação)             │
└────────────────────┬────────────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        ↓                         ↓
   ┌─────────────────┐    ┌──────────────────┐
   │ 2a. UX/UI       │    │ 2b. Copywriter   │
   │ Mobile-First    │    │ Vendas           │
   │ (wireframe)     │    │ (copy AIDA)      │
   └────────┬────────┘    └────────┬─────────┘
            │                      │
            └──────────┬───────────┘
                       ↓
       ┌──────────────────────────────────┐
       │ 2c. Diretor Visual (PARALELO)    │
       │ (crítica visual, padrões, treino)│
       └──────────┬───────────────────────┘
                  │
                  └──────────┬─────────┐
                             ↓         ↓
                    ┌──────────────────┐
                    │ 3. Briefing      │
                    │ Designer         │
                    │ (comunica visual)│
                    └────────┬─────────┘
                             │
                   ┌─────────┴──────────┐
                   ↓                    ↓
               Designer            4. SEO Local
            (design real)           Turismo
                   │            (otimiza estrutura)
                   │                    │
                   └────────┬───────────┘
                            ↓
            ┌──────────────────────────────┐
            │ 5. Programador de Site       │
            │ (implementa em Next.js)      │
            │                              │
            │ 6. Diretor Visual Valida    │
            │ (checklist final vs Figma)   │
            └────────┬────────────────────┘
                     ↓
         Deploy + Analytics + A/B Test
```

**Paralelo OK:** UX/UI + Copywriter + Diretor Visual podem rodar juntos  
**Sequencial obrigatório:** Estrategista → (UX/UI + Copy + Visual) → Briefing → (Design + SEO) → Programador → Validação Visual

---

---

### 🧭 **Orquestrador de Projeto Turismo** ⭐ NOVO v4.0
**Responsabilidade:** Coordenar o uso das skills — decide qual usar, em que ordem e quando parar  
**Entrada:** Qualquer objetivo (ex: "criar página Seixas", "campanha Instagram", "otimizar SEO")  
**Saída:** Plano de execução com pipeline, motivos, dependências e primeiro passo acionável  
**Não executa:** Nunca escreve copy, wireframe, código ou pauta — apenas planeja e decide  
**Papel no sistema:** Ponto de entrada principal para projetos multi-skill

📁 `orquestrador-projeto-turismo/SKILL.md`

---

## 🗑️ Skills Descontinuadas (v1.0)

### ❌ Arquiteto de Conteúdo
**Status:** Arquivada em 2026-04-25  
**Motivo:** Sobreposição com `estrategista-de-site` + consolidação em `plano-seo-prioridades.md`  

**Onde foram as responsabilidades:**
- Planejamento estrutural de site → `estrategista-de-site`
- Cronograma de produção → `plano-seo-prioridades.md` (memória)
- Priorização de páginas → `oportunidades-ranqueamento.md` (conhecimento)
- Blog/conteúdo de apoio → Fase 2 (pós-lançamento)

**Aprendizados preservados:** `_aprendizados/skill-arquiteto-de-conteudo-arquivo.md`

---

## 🚀 Como Usar Uma Skill

1. **Leia o `SKILL.md`** da pasta correspondente
2. **Verifique "Quando usar"** — é realmente seu caso?
3. **Reúna as entradas necessárias** — qual dado precisa estar ready?
4. **Siga o processo** — sequência é importante, não pule etapas
5. **Gere a saída** conforme estrutura esperada na skill
6. **Cite fontes** — sempre aponte arquivos de `_conhecimento/` ou `_memoria/` usados

---

## 🎯 Exemplos Rápidos de Uso

### Cenário 1: Criar Página Nova (ex: Seixas)
1. **Estrategista** → "vai em `/litoral-sul/seixas`, CRO: preço visível + rating destacado"
2. **Copywriter** → Escreve headline, lead, descrição, roteiro, FAQ, CTA
3. **UX/UI** → Define: Hero 350px mobile, Info Card 3-col, FAQ accordion, CTA sticky
4. **Briefing** → Comunica wireframe ao designer
5. **Designer** → Faz visual em Figma
6. **SEO** → Otimiza: H1="Mergulho Seixas JP", schema TouristAttraction, links internos
7. **Programador** → Implementa em Next.js com componentes reutilizáveis

### Cenário 2: Página Existente com Baixa Conversão
1. **Copywriter** → Reescreve (novo headline, prova, CTA melhor)
2. **UX/UI** → Valida layout (CTA mais visível?)
3. **Programador** → Atualiza code

### Cenário 3: Otimizar para SEO
1. **SEO** → Analisa keywords, estrutura on-page
2. **Copywriter** → Refina se necessário (sem quebrar conversão)
3. **Programador** → Implementa schema, meta tags, alt text

---

## 📋 Regras Gerais de Skills

✅ **Responsabilidade clara:** Cada skill faz UMA coisa bem  
✅ **Não inventa:** Consulta `_conhecimento/` como fonte verdade  
✅ **Saída acionável:** Próxima skill consegue pegar e rodar  
✅ **Próximo identificado:** Sempre deixa claro quem vem depois  
✅ **Português, específico:** Foco em João Pessoa + conversão  

❌ **Sem sobreposição:** Não faz trabalho de outra skill  
❌ **Não quebra:** Respeita decisões de skill anterior  
❌ **Sem invenção:** Nunca inventa dados da empresa  

---

## 📚 Leitura Recomendada

**Para entender tudo:**
- Leia `_memoria/indice-mestre.md` (mapa central do vault)
- Leia resumo "1. Função" de cada `SKILL.md`

**Para começar um projeto:**
1. Abra `estrategista-de-site/SKILL.md`
2. Veja qual skill vem depois
3. Passe output para próxima skill

**Para entender fluxo:**
- Desenho acima (`📊 Fluxo de Execução`)

---

*Versão v3.0 | Reestruturada 2026-04-25 | 7 skills ativas + 1 descontinuada | Novo: programador-de-site (v2.0) + diretor-visual-turismo (v3.0)*
