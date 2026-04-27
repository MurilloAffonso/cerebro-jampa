# SEO — Tábua de Marés e Piscinas Naturais

Conteúdo SEO indexável para páginas de disponibilidade e maré baixa. Consultar no Passo 6 da skill.

**Versão:** 1.1 | **Atualizada:** 2026-04-26

---

## 1. Impacto em SEO Local

A tábua de marés é um **diferencial editorial único** da Vem Passear em Jampa. Concorrentes em João Pessoa não publicam calendários de saída por maré — quase todos respondem por DM/WhatsApp sem indexar dados.

**Oportunidade:**
- Capturar long-tail informacional ("quando ir piscinas naturais joão pessoa")
- Capturar buscas transacionais por data ("próxima saída Seixas", "calendário Picãozinho")
- Estabelecer autoridade tópica em "piscinas naturais João Pessoa"
- Página `/calendario` se torna **âncora de links internos** para os 3 passeios dependentes de maré

**Ganho secundário:** sinal de E-E-A-T (experiência + expertise) para Google ao demonstrar conhecimento operacional real.

---

## 2. Página/Bloco "Tábua de Marés em João Pessoa"

### 2.1 Página dedicada

**URL canônica:** `/passeios/piscinas-naturais/calendario`

**Propósito:** hub de disponibilidade com calendário mensal, FAQ e links para os 3 passeios.

### 2.2 Bloco em páginas de passeio

Em `/passeios/piscinas-naturais/seixas` (e Picãozinho, Areia Vermelha): bloco condensado mostrando próximas 3–5 saídas + link para calendário completo.

---

## 3. Termos de Busca (Keywords)

### 3.1 Keywords Primárias

| Keyword | Intent | Página alvo |
|---------|--------|-------------|
| **tábua de marés João Pessoa** | informacional | `/calendario` |
| **tábua de maré Porto de Cabedelo** | informacional | `/calendario` |
| **maré baixa Seixas** | navegacional | `/seixas` |
| **próxima saída Seixas** | transacional | `/seixas` |
| **próxima saída Picãozinho** | transacional | `/picaozinho` |
| **melhores dias Picãozinho** | informacional | `/picaozinho` ou `/calendario` |
| **melhores dias para Areia Vermelha** | informacional | `/areia-vermelha` ou `/calendario` |
| **calendário piscinas naturais João Pessoa** | navegacional | `/calendario` |

### 3.2 Keywords Secundárias

| Keyword | Página alvo |
|---------|-------------|
| piscinas naturais seixas maré | `/seixas` |
| quando visitar piscinas naturais joão pessoa | `/calendario` |
| maré baixa horário joão pessoa | `/calendario` |
| areia vermelha maré | `/areia-vermelha` |
| picaozinho maré baixa | `/picaozinho` |
| passeio barco joão pessoa maré baixa | `/passeios/piscinas-naturais/` |
| calendário de saída piscinas naturais | `/calendario` |
| disponibilidade piscinas naturais jp | `/calendario` |

---

## 4. Meta Tags da Página de Calendário

```
title: Tábua de Marés em João Pessoa — Próximas Saídas para Piscinas Naturais | Vem Passear

description: Veja as próximas saídas para Seixas, Picãozinho e Areia Vermelha.
             Horários calculados pela tábua de marés oficial da Marinha (CHM).
             Reserve pelo WhatsApp →
```

### H1 (único)

```
Tábua de Marés em João Pessoa — Próximas Saídas
```

### H2s recomendados

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

## 5. FAQ Recomendada (Schema FAQPage)

Usar nas páginas de passeio dependentes de maré e na página de calendário.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O passeio para as piscinas naturais depende da maré?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. As piscinas naturais só aparecem quando a maré está baixa. Antes de confirmar sua data, consultamos a tábua de marés oficial da Marinha do Brasil (CHM — Porto de Cabedelo/PB) e avisamos o melhor horário. Você não precisa calcular nada — esse é o nosso trabalho."
      }
    },
    {
      "@type": "Question",
      "name": "Como saber qual o melhor dia para visitar Seixas, Picãozinho ou Areia Vermelha?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Publicamos as próximas datas disponíveis na nossa Tábua de Marés online. Dias com maré até 0.5m são Excelentes (piscinas mais rasas e cristalinas). Dias entre 0.6m e 0.7m são Bons (passeio acontece normalmente). Para datas não listadas, fale com a gente no WhatsApp."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é o horário de saída do barco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O barco sai aproximadamente 1 hora antes do horário da baixa-mar. Isso garante que você chegue nas piscinas com a maré ainda descendo. O horário exato muda a cada dia conforme a tábua oficial — confirmamos pelo WhatsApp na véspera."
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
        "text": "Usamos a tábua de marés oficial da Marinha do Brasil (Centro de Hidrografia da Marinha — CHM) para a estação Porto de Cabedelo, Paraíba. É a referência mais precisa para as praias de João Pessoa."
      }
    },
    {
      "@type": "Question",
      "name": "Quantas saídas têm por mês?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Em geral, há cerca de 2 janelas favoráveis por mês — uma a cada ciclo lunar. Cada janela tem entre 3 e 5 dias úteis com maré baixa. Por isso, planejar com antecedência ajuda — algumas datas têm vagas limitadas."
      }
    }
  ]
}
```

---

## 6. Texto Indexável (base para `copywriter-vendas` refinar)

```markdown
## Como funciona o passeio na maré baixa

As piscinas naturais de João Pessoa — Seixas, Picãozinho e Areia Vermelha —
só aparecem quando a maré recua, revelando corais, areia branca e água
cristalina a poucos metros da costa.

Usamos a tábua de marés oficial da Marinha do Brasil (estação Porto de Cabedelo/PB)
para calcular o melhor horário em cada data. O barco sai cerca de 1 hora antes
da baixa-mar, garantindo que você chegue com as piscinas ainda se abrindo.

**Como funcionam os ciclos de maré:**
- Maré até 0.5m → **Excelente** — piscinas rasas, corais à mostra, visibilidade máxima
- Maré 0.6m a 0.7m → **Boa** — passeio acontece normalmente
- Maré 0.8m → **Consultar** — depende das condições do dia
- Maré 0.9m ou mais → **Sem passeio** — piscinas cobertas

A maré segue o ciclo lunar. Em geral, há **2 janelas favoráveis por mês**
(cerca de 3 a 5 dias seguidos cada). Por isso a agenda **não é semanal** —
cada mês tem datas próprias.

Veja abaixo as próximas datas disponíveis. Se a sua não estiver lá,
fale com a gente pelo WhatsApp — sugerimos a próxima data favorável.
```

---

## 7. Schema `Event` (opcional — datas confirmadas)

Para saídas já confirmadas com data e horário, considerar `Event` schema:

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Passeio às Piscinas Naturais do Seixas",
  "startDate": "2026-05-27T07:30:00-03:00",
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

**Atenção:** só incluir `Event` para datas já confirmadas por Murillo. Não gerar para `"consultar"` ou `"sem-passeio"`.

---

## 8. Links Internos Recomendados

### A página `/calendario` aponta para:

```
/passeios/piscinas-naturais/seixas         → "Ver passeio Seixas"
/passeios/piscinas-naturais/picaozinho     → "Ver passeio Picãozinho"
/passeios/litoral-norte/areia-vermelha     → "Ver passeio Areia Vermelha"
/passeios/piscinas-naturais/               → "Ver todas as piscinas naturais em João Pessoa"
```

### As 3 páginas de passeio dependentes de maré apontam para:

```
/passeios/piscinas-naturais/calendario     → "Ver tábua de marés completa"
                                              (também: "Ver todas as próximas datas disponíveis")
```

### Texto âncora recomendado

| Link | Âncora |
|------|--------|
| Calendário (de Seixas) | "Ver tábua de marés e próximas saídas" |
| Calendário (de Picãozinho) | "Ver próximas datas disponíveis" |
| Seixas (de Calendário) | "Piscinas Naturais do Seixas — corais a 6km de Jampa" |
| Picãozinho (de Calendário) | "Picãozinho — aquário natural a 1.500m de Tambaú" |
| Areia Vermelha (de Calendário) | "Areia Vermelha — banco de areia em Cabedelo" |

---

## 9. Alt Text para Imagens

| Contexto | Alt Text |
|----------|----------|
| Piscina natural com maré baixa | "Piscinas naturais do Seixas com maré baixa em João Pessoa — corais visíveis e água cristalina" |
| Barco saindo de Tambaú | "Catamarã saindo de Tambaú para as piscinas naturais de Seixas em João Pessoa" |
| Turistas nas piscinas | "Turistas flutuando nas piscinas naturais de João Pessoa durante maré baixa" |
| Areia Vermelha emergindo | "Banco de areia Areia Vermelha emergindo com maré baixa em Cabedelo, Paraíba" |
| Calendário/tabela de marés | "Tábua de marés de João Pessoa — próximas saídas para piscinas naturais" |

---

*SEO v1.1 | 2026-04-26 | Aguarda implementação e validação com dados reais de maré*
