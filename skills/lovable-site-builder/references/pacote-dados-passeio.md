# Pacote de Dados do Passeio — Template

**Uso:** Preencher este template a partir do vault antes de gerar qualquer prompt Lovable.
**Fonte obrigatória:** `_conhecimento/passeios.md` → `_conhecimento/catalogo_vempassear_estruturado.md` → `_site/data/passeios.ts`
**Regra:** Nunca inventar. Campo ausente = `[CONFIRMAR COM MURILLO: pergunta específica]` e registrar como lacuna.

---

## Status do Pacote

```
Passeio: ___________________
Data de montagem: YYYY-MM-DD
Status: [ ] COMPLETO  [ ] INCOMPLETO (N lacunas)
Lacunas identificadas:
  1. [CONFIRMAR COM MURILLO: ...]
  2. [CONFIRMAR COM MURILLO: ...]
Fontes consultadas:
  - _conhecimento/passeios.md (linha X)
  - _conhecimento/catalogo_vempassear_estruturado.md (seção X)
  - _site/data/passeios.ts (objeto X)
  - _site/planejamento/[arquivo]
```

---

## 1. Identificação

| Campo | Valor | Fonte | Status |
|-------|-------|-------|--------|
| `nome` | | passeios.md | |
| `slug` | | passeios.ts | |
| `url` | `https://vempassearjampa.com.br/passeios/[categoria]/[slug]` | | |
| `categoria` | | passeios.md | |
| `dependeDeMare` | `true / false` | passeios.ts | |

---

## 2. Dados Operacionais (Obrigatórios)

| Campo | Valor | Fonte | Status |
|-------|-------|-------|--------|
| `preco` | R$ ___ (compartilhado) / R$ ___ (privativo) | catalogo.md | |
| `duracao` | ___ horas | catalogo.md | |
| `saida` | Praia de Tambaú, próximo ao Hotel Tambaú | decisoes-estrategicas.md §27 | ✅ Confirmado |
| `localização` | João Pessoa — PB | empresa.md | |
| `idadeMinima` | Sem idade mínima. Crianças acompanhadas por responsável. | decisoes-estrategicas.md §28 | ✅ Confirmado (Seixas) |
| `horarioBaixaMareInterno` | [interno — não exibir ao cliente] | tabua-mares-turismo | |
| `horarioSaidaSugerido` | calculado via regra de maré v1.3 | tabua-mares-turismo | |
| `horarioSaidaConfirmado` | [override manual Murillo, se houver] | tabua-mares-turismo | |
| `horarioSaidaExibido` | `confirmado ?? sugerido` | tabua-mares-turismo | |

> **Atenção:** Se `dependeDeMare: true`, parar e acionar `tabua-mares-turismo` antes de continuar.

---

## 3. O Que Está Incluso / O Que Levar / Restrições

```markdown
### Incluso
- [item 1]
- [item 2]
Fonte: catalogo.md — [CONFIRMAR COM MURILLO se ausente]

### O Que Levar
- [item 1]
- [item 2]
Fonte: catalogo.md — [CONFIRMAR COM MURILLO se ausente]

### Restrições / Contraindicações
- [restrição 1]
Fonte: [arquivo] — [CONFIRMAR COM MURILLO se ausente]
```

---

## 4. Políticas (Pendentes de Aprovação)

| Campo | Status |
|-------|--------|
| Política de cancelamento | `[CONFIRMAR COM MURILLO: aprovação do texto em _conhecimento/politica-cancelamento-base.md]` |
| Política de privacidade | `[CONFIRMAR COM MURILLO: aprovação do texto em _conhecimento/politica-privacidade-base.md]` |

> **Regra:** Não publicar texto de política sem aprovação explícita de Murillo. Usar placeholder enquanto pendente.

---

## 5. Regra de Maré (apenas se `dependeDeMare: true`)

```markdown
Status maré: [ ] Dados disponíveis  [ ] Aguardando Murillo
Próxima janela: [cicloId] — [data início] a [data fim]
Próxima saída exibida: [horarioSaidaExibido] do dia [data]
Fonte: _site/data/tabua-mares.ts — revisadoPorMurillo: [true/false]

Alerta de maré (copy do MareAlert):
"[texto do alertaMare em data/passeios.ts]"
— [CONFIRMAR COM MURILLO se ausente]
```

---

## 6. CTA WhatsApp

```markdown
Número oficial: +55 83 9908-7830
Link base: https://wa.me/558399087830
Texto pré-preenchido (padrão): ?text=Oi, quero saber sobre o passeio de [Nome]
Link completo: https://wa.me/558399087830?text=Oi%2C+quero+saber+sobre+o+passeio+de+[Nome]

CTAs na página:
- Hero: "Quero reservar meu passeio →"
- Pós-confiança: "Fale com Murillo no WhatsApp"
- Rodapé: "Reserve agora — resposta rápida"
```

---

## 7. SEO

```markdown
title: [PREENCHER com seo-local-turismo ou _site/planejamento/04-seo-local-turismo.md]
meta description: [PREENCHER — incluir "João Pessoa" + CTA]
H1: [PREENCHER — único, inclui keyword principal]
H2: [lista de seções]
H3: [subseções, especialmente FAQ]
Keywords primárias: [lista]
Keywords secundárias: [lista]
Fonte: _site/planejamento/04-seo-local-turismo.md — [CONFIRMAR se ausente]
```

---

## 8. Copy por Bloco

```markdown
### Hero
Headline: [PREENCHER com copywriter-vendas ou _site/planejamento/02a-copywriter-vendas.md]
Subheadline: [PREENCHER]

### Por Que Confiar (Prova Social Institucional)
- Cadastur: 52.077.577
- Avaliação: [CONFIRMAR COM MURILLO: nota atual no Google?]
- Frase de confiança: [PREENCHER]

### Avaliações Google Maps (opcional — temAvaliacoes)
- Avaliação 1: "[texto real]" — [Nome] · [Mês/Ano] · Google Maps
- Avaliação 2: [idem]
- Link perfil Google: [CONFIRMAR COM MURILLO: URL do perfil Google Maps]
— Se ausente: temAvaliacoes: false (bloco não exibe)

### Lead / Descrição Principal
[PREENCHER com copywriter-vendas]

### O Que Você Vai Fazer
[PREENCHER — lista de atividades do roteiro]

### Experiência 360° (opcional — tem360)
- URL embed: [CONFIRMAR COM MURILLO: link YouTube 360° ou Street View ou Matterport]
— Se ausente: tem360: false (bloco não exibe)

### Roteiro
[PREENCHER — itinerário aprovado do catálogo]

### Informações Práticas
[incluso, o que levar, restrições, saída]

### FAQ
[PREENCHER — perguntas reais com respostas aprovadas]

### Depoimento
Texto: [CONFIRMAR COM MURILLO: depoimento real de cliente]
Autor: [CONFIRMAR COM MURILLO: nome e autorização]
— Se ausente: placeholder explícito no briefing
```

---

## 9. Fotos / Assets

```markdown
Hero:
- Arquivo: [CONFIRMAR COM MURILLO: foto real de qualidade de [local] para hero]
- Formato esperado: WebP + fallback JPG
- Alt text: "[descrição da cena + contexto local]"
- [CONFIRMAR COM MURILLO se ausente]

Galeria:
- [foto 1]: [descrição] — [CONFIRMAR COM MURILLO]
- [foto 2]: [descrição] — [CONFIRMAR COM MURILLO]
```

---

## 10. Links Internos

```markdown
Cluster pai: /passeios/[categoria]/ — "[Nome do Cluster]"
Passeios relacionados:
  - /passeios/[categoria]/[slug-2] — "[Nome 2]"
  - /passeios/[categoria]/[slug-3] — "[Nome 3]"
Calendário de marés (se aplicável): /passeios/piscinas-naturais/calendario
Fonte: estrategista-de-site ou _site/planejamento/01-estrategista-de-site.md
```

---

## 11. Provas Sociais e Institucional

```markdown
Cadastur: 52.077.577/0001-03 — ativo
Avaliação Google: [CONFIRMAR COM MURILLO: nota e número de avaliações]
Anos de operação: [CONFIRMAR COM MURILLO: desde quando?]
Murillo: rosto da marca — foto em hero e seção "sobre"
```

---

## 12. Dados Técnicos (para Handoff Programador)

```markdown
Stack: Next.js 14, React 18, TypeScript, Tailwind CSS
Rota: app/passeios/[categoria]/[slug]/page.tsx
Componentes existentes: HeroBlock, InfoCard, ButtonPrimary, FAQAccordion, ProximaSaidaCard, PasseioCard
Design tokens: primário #FF6B35 (text-primary/bg-primary), secundário #004E89 (text-secondary/bg-secondary)
Fonte body: Inter | Fonte headings: Lora
SITE_URL: https://vempassearjampa.com.br
WhatsApp: https://wa.me/558399087830
```

---

## 13. Resumo de Lacunas

```markdown
LACUNAS CRÍTICAS (impedem geração do prompt):
  1. [CONFIRMAR COM MURILLO: ...]

LACUNAS SECUNDÁRIAS (gerar com placeholder):
  1. [CONFIRMAR COM MURILLO: ...]

TOTAL: N lacunas críticas + M secundárias
DECISÃO: [ ] Parar e confirmar com Murillo  [ ] Avançar com placeholders marcados
```

---

*Versão: 1.0 | Criado: 2026-04-27 | Skill: lovable-site-builder*
