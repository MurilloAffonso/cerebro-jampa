# SEO — Tábua de Marés e Piscinas Naturais

Conteúdo SEO indexável para páginas de disponibilidade e maré baixa. Consultar ao executar Passo 6 da skill.

---

## 1. Intenção de Busca do Turista

Três momentos distintos de busca relacionados à maré:

| Momento | Query Típica | Intent |
|---------|-------------|--------|
| Descoberta | "piscinas naturais joão pessoa quando visitar" | Informacional |
| Planejamento | "seixas maré baixa horário" / "quando ir piscinas seixas" | Navegacional |
| Decisão | "passeio seixas próxima data disponível" / "piscinas naturais jp reserva" | Transacional |

A skill deve gerar conteúdo que cubra os 3 momentos, especialmente o de **planejamento** — turista que chegou em JP e quer saber se pode ir hoje ou quando é a próxima saída.

---

## 2. Keywords Primárias

| Keyword | Volume estimado | Página alvo |
|---------|-----------------|-------------|
| piscinas naturais seixas maré | médio | `/passeios/piscinas-naturais/seixas` |
| quando visitar piscinas naturais joão pessoa | médio | `/passeios/piscinas-naturais/calendario` |
| maré baixa seixas horário | baixo-médio | `/passeios/piscinas-naturais/seixas` |
| piscinas naturais jp disponibilidade | baixo | `/passeios/piscinas-naturais/calendario` |
| areia vermelha maré | médio | `/passeios/litoral-norte/areia-vermelha` |
| picaozinho maré baixa | baixo | `/passeios/piscinas-naturais/picaozinho` |
| passeio barco jp maré baixa | baixo | `/passeios/piscinas-naturais/` |

---

## 3. Página de Calendário — Estrutura SEO

### Meta Tags

```
title: Calendário de Marés — Piscinas Naturais de João Pessoa | Vem Passear
description: Veja as próximas saídas para Seixas, Picãozinho e Areia Vermelha.
             Horários calculados pela tábua de marés oficial. Reserve pelo WhatsApp →
```

### H1 (único)

```
Próximas Saídas — Piscinas Naturais de João Pessoa
```

### H2s por seção

```
Próximas datas disponíveis (mês atual)
Como funciona o passeio na maré baixa
Seixas — Próximas saídas
Picãozinho — Próximas saídas
Areia Vermelha — Próximas saídas
Perguntas frequentes sobre maré e horários
```

### Canonical

```
https://vempassearjampa.com.br/passeios/piscinas-naturais/calendario
```

---

## 4. FAQ Schema — Maré e Disponibilidade

Usar nas páginas de passeio dependentes de maré e na página de calendário.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O passeio para as piscinas naturais de Seixas depende da maré?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. As piscinas naturais só aparecem quando a maré está baixa. Antes de confirmar sua data, consultamos a tábua de marés oficial da Marinha do Brasil para Porto de Cabedelo e avisamos o melhor horário. Você não precisa calcular nada — esse é o nosso trabalho."
      }
    },
    {
      "@type": "Question",
      "name": "Como saber quando a maré vai estar boa para o passeio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Publicamos as próximas datas disponíveis nesta página. Para maré classificada como Excelente (altura até 0.5m) ou Boa (0.6m–0.7m), o passeio acontece normalmente. Para datas não listadas, fale conosco pelo WhatsApp."
      }
    },
    {
      "@type": "Question",
      "name": "O que acontece se a maré não estiver favorável no dia da minha reserva?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Remarcamos sem custo. Se o dia escolhido não tiver maré baixa favorável, sugerimos outra data antes de confirmar. Nunca deixamos um cliente embarcar para encontrar piscinas cobertas — verificamos a maré antes de cada saída."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é a referência de maré que vocês usam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usamos a tábua de marés oficial da Marinha do Brasil (Centro de Hidrografia — CHM) para a estação Porto de Cabedelo, Paraíba. É a referência mais precisa para as praias de João Pessoa."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto antes da baixa-mar o barco sai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O barco sai aproximadamente 1 hora antes do horário da baixa-mar. Isso garante que você chegue nas piscinas com a maré ainda descendo e tenha mais tempo com elas abertas. O horário exato é confirmado pelo WhatsApp na véspera."
      }
    }
  ]
}
```

---

## 5. Schema `Event` (opcional — para datas específicas)

Para saídas confirmadas com data e horário, considerar `Event` schema:

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Passeio às Piscinas Naturais do Seixas",
  "startDate": "2026-05-03T08:40:00-03:00",
  "location": {
    "@type": "Place",
    "name": "Praia de Tambaú",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "João Pessoa",
      "addressRegion": "PB",
      "addressCountry": "BR"
    }
  },
  "organizer": {
    "@type": "TravelAgency",
    "name": "Vem Passear em Jampa"
  },
  "offers": {
    "@type": "Offer",
    "price": "60",
    "priceCurrency": "BRL",
    "url": "https://vempassearjampa.com.br/passeios/piscinas-naturais/seixas"
  },
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
}
```

**Atenção:** só incluir `Event` schema para datas já confirmadas por Murillo. Não gerar para dias com status `"consultar"` ou `"sem-passeio"`.

---

## 6. Texto Informativo para Página de Calendário

Conteúdo indexável que explica o funcionamento — base para `copywriter-vendas` refinar:

```markdown
## Como funciona o passeio na maré baixa

As piscinas naturais de João Pessoa só aparecem quando a maré recua — revelando 
corais, areia e água cristalina a poucos metros da costa.

Usamos a tábua de marés oficial da Marinha do Brasil (estação Porto de Cabedelo/PB) 
para calcular o melhor horário em cada data. O barco sai cerca de 1 hora antes da 
baixa-mar, garantindo que você chegue com as piscinas ainda se abrindo.

Dias com maré até 0.5m são **Excelentes** — piscinas rasas, corais à mostra, 
visibilidade máxima. Dias entre 0.6m e 0.7m são **Bons** — passeio acontece 
normalmente, piscinas um pouco mais fundas.

Se o dia que você quer não estiver disponível, fale conosco pelo WhatsApp — 
a gente sugere a próxima data favorável.
```

---

## 7. Alt Text para Imagens de Maré

Padrão de alt text para imagens relacionadas à maré:

| Contexto | Alt Text |
|----------|----------|
| Piscina natural com maré baixa | "Piscinas naturais do Seixas com maré baixa em João Pessoa — corais visíveis e água cristalina" |
| Barco saindo para passeio | "Catamarã saindo de Tambaú para as piscinas naturais de Seixas em João Pessoa" |
| Turistas nas piscinas | "Turistas flutuando nas piscinas naturais de João Pessoa durante maré baixa" |
| Areia Vermelha com maré baixa | "Banco de areia Areia Vermelha emergindo com maré baixa em Cabedelo, Paraíba" |

---

## 8. Links Internos Recomendados

A página de calendário deve linkar para:

```
/passeios/piscinas-naturais/seixas           → "Ver passeio Seixas"
/passeios/piscinas-naturais/picaozinho       → "Ver passeio Picãozinho"
/passeios/litoral-norte/areia-vermelha       → "Ver passeio Areia Vermelha"
/passeios/piscinas-naturais/                 → "Ver todos os passeios de piscinas naturais"
```

As páginas de passeio dependentes de maré devem linkar para:

```
/passeios/piscinas-naturais/calendario → "Ver todas as próximas datas disponíveis"
```

---

*SEO v1.0 | 2026-04-26 | Aguarda implementação e validação com dados reais de maré*
