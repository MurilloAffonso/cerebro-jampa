---
skill: estrategista-de-site
versao: 3.1
projeto_id: pagina-seixas-2026-04-26
etapa: 1 de 6
status: CONCLUÍDA — aguardando Etapa 2
data: 2026-04-26
fontes_consultadas:
  - _conhecimento/estrutura-site-recomendada.md
  - _conhecimento/clusters-seo.md
  - _conhecimento/passeios.md
  - _conhecimento/benchmark-site-cro.md
  - _conhecimento/provas-de-confianca.md
  - _memoria/decisoes-estrategicas.md
---

# Estratégia de Site — Piscinas Naturais do Seixas

**Entrega da Etapa 1 — `estrategista-de-site`**
**Próxima etapa:** 2a `copywriter-vendas` + 2b `ux-ui-mobile-first` (paralelo)

---

## 1. Árvore de URLs Confirmada

```
/ (home)
└── /passeios/
    └── /passeios/piscinas-naturais/              ← cluster pai (Tier 1, Semana 1-2)
        ├── /passeios/piscinas-naturais/seixas    ← ESTA PÁGINA ✓ APROVADA
        ├── /passeios/piscinas-naturais/penha
        ├── /passeios/piscinas-naturais/picaozinho
        └── /passeios/piscinas-naturais/mergulho
```

**Notas de URL:**
- Padrão adotado: `/passeios/[categoria]/[slug]/` — alinhado com App Router `app/passeios/[categoria]/[slug]/page.tsx` (CLAUDE.md)
- `estrutura-site-recomendada.md` registra `/passeio/seixas/` (flat, singular) — padrão **descartado** em favor do App Router nested
- Slug aprovado: `seixas` (sem acento, sem maiúscula)
- Categoria aprovada: `piscinas-naturais` (sem acento)

> ⚠️ [CONFIRMAR COM MURILLO: URL padrão `/passeios/piscinas-naturais/seixas` está alinhada com o que foi acordado para o site? Substituirá o registro antigo `/passeio/seixas/` de `estrutura-site-recomendada.md`]

---

## 2. Jornada de Conversão

Três fluxos reais mapeados. Máximo 3 cliques de qualquer ponto até WhatsApp.

### Fluxo A — Turista com Intent de Decisão (principal)

```
Google "seixas joão pessoa"
        ↓
/passeios/piscinas-naturais/seixas  (cai direto)
        ↓  (lê hero + Info Card + Por Que Confiar)
Confiança estabelecida (Cadastur + 4.9/5)
        ↓  (lê roteiro + FAQ + depoimento)
Objeções quebradas
        ↓
[Botão WhatsApp — CTA principal]
        ↓
Reserva
```

**Perfil do turista neste fluxo:** já sabe que quer Seixas, está comparando ou confirmando — precisa de confiança + preço claro + CTA fácil.

### Fluxo B — Turista Explorando Piscinas Naturais (consideração)

```
Google "piscinas naturais joão pessoa"
        ↓
/passeios/piscinas-naturais/  (cluster)
        ↓  (vê cards de Seixas, Penha, Picãozinho)
Card: Seixas — R$ 60 — 3h30
        ↓
/passeios/piscinas-naturais/seixas
        ↓
[Botão WhatsApp]
        ↓
Reserva
```

**Perfil:** sabe que quer piscinas naturais, ainda escolhendo qual. Card de Seixas precisa de preço visível + imagem forte.

### Fluxo C — Turista Chegando via Home (descoberta)

```
Google "o que fazer em joão pessoa" ou "passeios joão pessoa"
        ↓
/ (home)
        ↓  (vê grid de categorias)
Categoria: Piscinas Naturais
        ↓
/passeios/piscinas-naturais/  (cluster)
        ↓
/passeios/piscinas-naturais/seixas
        ↓
[Botão WhatsApp]
        ↓
Reserva
```

**Perfil:** turista sem destino definido, em fase de descoberta. Precisa de hierarquia clara home → categoria → passeio.

---

## 3. Estrutura de Navegação Mobile

### Menu Principal

```
[Logo Vem Passear]  ············  [≡ Menu]  [WhatsApp →]
```

- Botão WhatsApp sempre visível no header (thumb-accessible)
- Menu hambúrguer com: Home / Passeios / Sobre Murillo / [Contato → redireciona para WhatsApp]

### Breadcrumb (obrigatório nesta página)

```
Home > Piscinas Naturais > Seixas
```

- Renderizado abaixo do hero
- Cada item é link clicável
- Permite voltar ao cluster sem usar o botão voltar do browser

### CTA Sticky (mobile)

```
[Reservar no WhatsApp →]
```

- Aparece após o turista scrollar além do hero (quando CTA primário do hero some da tela)
- Fixo no bottom: 16px acima da borda
- Altura ≥44px, largura 100% — 16px padding lateral

---

## 4. CRO — Posição de Elementos de Conversão

### Sequência obrigatória de blocos (mobile, de cima para baixo)

| Posição | Bloco | Conteúdo | Objetivo |
|---------|-------|----------|----------|
| 1 | Hero | Foto Seixas + H1 + CTA primário | Atenção imediata |
| 2 | Info Card | Preço R$ 60 / Duração ~3h30 / Embarque Tambaú | Eliminar fricção de preço |
| 3 | Aviso de Maré | "Passeio sujeito à tábua de marés" | Honestidade que gera confiança |
| 4 | Por Que Confiar | Cadastur 52.077.577 + 4.9/5 ⭐ + Murillo | Prova de confiança |
| 5 | O Que Você Vai Fazer | Descrição sensorial + roteiro do dia | Desejo |
| 6 | O Que Está Incluso | Checklist visual | Clareza + segurança |
| 7 | FAQ | Mínimo 5 perguntas em accordion | Quebra de objeções |
| 8 | Depoimento | 1 quote de cliente real | Prova social final |
| 9 | CTA Final | Texto contextual + botão WhatsApp | Conversão |
| 10 | Passeios Similares | Cards: Penha, Picãozinho | Retenção + links internos |
| 11 | Footer | Links, Cadastur, contato | Navegação + confiança |

### Regras de Posição

**Preço (R$ 60):**
- Obrigatório no Info Card (bloco 2) — logo após o hero, antes de qualquer texto
- Obrigatório no card da página de cluster (bloco 10, quando mostrado em outros contextos)
- Nunca escondido ou "a partir de" sem valor base

**Cadastur + Rating 4.9/5:**
- Bloco 3 (Por Que Confiar) — não no footer
- Aparecem também no header (pequeno, desktop) e footer (redundância de confiança)
- Em mobile: acima da dobra após Info Card (turista decide em <5 segundos)

**CTA WhatsApp:**
- CTA primário: no hero (bloco 1), botão verde grande
- CTA sticky: ativado após scroll (bottom fixed)
- CTA secundário: após FAQ (bloco 7)
- CTA final: bloco 9, com frase contextual antes do botão

---

## 5. Matriz de Links Internos

### Quem Aponta PARA Esta Página

| Origem | Posição do Link | Tipo |
|--------|----------------|------|
| `/` (home) | Grid de passeios em destaque (card com imagem + preço) | Card de passeio |
| `/passeios/piscinas-naturais/` | Grid do cluster (card com imagem + preço) | Card de passeio |

### Para Onde Esta Página Aponta

| Destino | URL | Posição na Página | Por Quê |
|---------|-----|-------------------|---------|
| Cluster pai | `/passeios/piscinas-naturais/` | Breadcrumb (topo) + "Ver todas as piscinas" (bloco 10) | Navegação e autoridade de cluster |
| Home | `/` | Breadcrumb (topo) + footer | Navegação |
| Penha | `/passeios/piscinas-naturais/penha` | Bloco "Passeios Similares" (bloco 10) | Retenção + SEO |
| Picãozinho | `/passeios/piscinas-naturais/picaozinho` | Bloco "Passeios Similares" (bloco 10) | Retenção + SEO |

> **Regra de links cruzados:** Seixas → Penha e Picãozinho (piscinas próximas). Não linkar para passeios de outros clusters nesta página — foco no cluster.

### Texto âncora recomendado

| Link | Âncora |
|------|--------|
| Cluster pai | "Ver todas as piscinas naturais em João Pessoa" |
| Penha | "Piscinas Naturais da Penha — exclusivo, apenas 2 catamarãs por vez" |
| Picãozinho | "Picãozinho — aquário natural a 1.500m de Tambaú" |

---

## 6. Lacunas Identificadas [CONFIRMAR]

| # | Lacuna | Quem confirma | Impacto se não resolvido |
|---|--------|---------------|--------------------------|
| 1 | `[CONFIRMAR COM MURILLO: preço R$ 60 para Seixas está vigente em 2026?]` | Murillo | Copywriter e Info Card usam valor errado |
| 2 | `[CONFIRMAR COM MURILLO: link completo do WhatsApp para CTA? ex: +55 83 9XXXX-XXXX]` | Murillo | Programador não consegue gerar link funcional |
| 3 | `[CONFIRMAR COM MURILLO: há foto real de qualidade de Seixas disponível para hero?]` | Murillo | Programador usará placeholder; Figma ficará incompleto |
| 4 | `[CONFIRMAR COM MURILLO: URL pattern `/passeios/piscinas-naturais/seixas` está alinhada com o domínio e estrutura final aprovada?]` | Murillo | Slug pode precisar de redirect se mudar depois |
| 5 | `[CONFIRMAR: número exato de avaliações Google? Ex.: "147 avaliações"]` | Verificar Google | Copy "4.9/5 com X avaliações" precisa de número real |
| 6 | `[CONFIRMAR: há depoimento real de cliente sobre Seixas disponível para bloco 8?]` | Murillo | Copywriter marcará `[INSERIR DEPOIMENTO REAL]` |

---

## 7. Handoff para Próxima Skill

### Para `copywriter-vendas` (Etapa 2a)

Entregar:

```
Contexto da página:
- URL: /passeios/piscinas-naturais/seixas
- Persona primária: turista chegando em JP, primeira vez, intent de decisão
- Jornada principal: Google → página → WhatsApp (Fluxo A)
- Objetivo da página: converter leitura em reserva via WhatsApp

Dados confirmados de passeio:
- Nome: Piscinas Naturais do Seixas
- Preço: R$ 60 [CONFIRMAR atualização]
- Formato: Compartilhado
- Duração: ~3h30
- Embarque: Tambaú
- Restrição: Sujeito à tábua de marés (mencionar como honestidade, não como aviso negativo)
- Catálogo: linhas 341–364 de catalogo_vempassear_estruturado.md

Estrutura de blocos obrigatória (para que copy siga a ordem):
1. H1 (hero)
2. Info Card: Preço / Duração / Embarque
3. Aviso de Maré (tom honesto)
4. Por Que Confiar: Cadastur 52.077.577 + 4.9/5 ⭐ + Murillo
5. Descrição sensorial + roteiro
6. O Que Está Incluso (checklist)
7. FAQ (mínimo 5 perguntas)
8. Depoimento [INSERIR REAL se não disponível]
9. CTA final com frase contextual
```

### Para `ux-ui-mobile-first` (Etapa 2b)

Entregar:

```
Hierarquia de blocos (crítico → suporte):
CRÍTICO (acima da dobra mobile):
  - Hero: foto Seixas + H1 + CTA botão verde
  - Info Card: Preço R$ 60 / ~3h30 / Tambaú
  - Aviso de Maré (inline, não modal)
  - Por Que Confiar: Cadastur + 4.9/5

IMPORTANTE (30-70% da tela):
  - Descrição sensorial
  - Incluso (checklist)
  - FAQ accordion

SUPORTE (70%+):
  - Depoimento
  - CTA final
  - Passeios Similares (cards: Penha, Picãozinho)
  - Footer

Navegação mobile obrigatória:
  - Header com botão WhatsApp sempre visível
  - Breadcrumb: Home > Piscinas Naturais > Seixas
  - CTA sticky bottom (ativa após hero sair do viewport)
  
URL: /passeios/piscinas-naturais/seixas
Links internos: Penha, Picãozinho, cluster, home
```

---

*Etapa 1 concluída — `estrategista-de-site` v3.1 | 2026-04-26*
*Próximo: Etapa 2a (`copywriter-vendas`) + Etapa 2b (`ux-ui-mobile-first`) — podem rodar em paralelo após aprovação*
