# Exemplos de Uso — Leads Fictícios

**Propósito:** Treinar o fluxo antes de usar com leads reais. Não alterar `leads.csv`.

---

## Exemplo 1 — Lead de família, passeio Seixas, fecha fácil

### Conversa WhatsApp (fictícia)

```
[Lead - 09:14] Oi, vi vocês no Google. Tenho 4 pessoas, eu, minha esposa e 2 filhos de 8 e 11 anos. Quero ir em Seixas semana que vem. Quanto custa?
```

### Comando para o Claude

```
qualifica esse lead

[Lead - 09:14] Oi, vi vocês no Google. Tenho 4 pessoas, eu, minha esposa e 2 filhos de 8 e 11 anos. Quero ir em Seixas semana que vem. Quanto custa?

Telefone: +55 11 98765-4321
```

### Saída esperada (ficha)

```
ID:              2026-05-05-001
Nome:            —
Telefone:        +55 11 98765-4321
Origem:          gmb
Data de viagem:  semana de 05/05 a 09/05 (confirmar dia exato)
Passeio:         seixas
Qtd pessoas:     4
Perfil:          familia
Status:          qualificado
Observações:     2 filhos (8 e 11 anos) — confirmar restrição de idade

Campos faltando: nome, dia exato da semana

PRÓXIMA AÇÃO: Confirmar o dia exato. Depois acionar proposta-passeio.
```

### Próximo comando (após confirmar dia = quinta-feira 08/05)

```
gera proposta para família Silva — passeio seixas, 4 pessoas, quinta 08/05
```

### Saída esperada (proposta WhatsApp)

```
Oi! 👋 Que legal que vocês vão aproveitar Seixas com as crianças!

*Passeio Seixas* — snorkel em piscina natural

📍 Saída: [ponto de embarque — confirmar com Murillo]
📅 Quinta-feira, 08/05
👥 4 pessoas

*O que está incluso:*
- Equipamento de snorkel
- Guia certificado
- Colete salva-vidas (incluso para as crianças)

*Valor:*
R$ [X] por pessoa
Total para 4 pessoas: R$ [Y]

*Como reservar:*
Só me confirmar aqui no WhatsApp — te passo os detalhes de pagamento. 😊

Murillo
```

---

## Exemplo 2 — Lead com objeção de preço

### Conversa WhatsApp (fictícia)

```
[Lead - 14:22] Boa tarde! Quero fazer o passeio pra Areia Vermelha, somos 2. Vi por R$50 em outro lugar, mas o guia do hotel falou que o valor de vocês é diferente. Por que é mais caro?
```

### Comando para o Claude

```
responde essa objeção: "Boa tarde! Quero fazer o passeio pra Areia Vermelha, somos 2. Vi por R$50 em outro lugar, mas o guia do hotel falou que o valor de vocês é diferente. Por que é mais caro?"

Perfil: casal
```

### Saída esperada (resposta à objeção)

Categoria: Preço / Concorrência → Objeção 2

```
Boa tarde! Faz todo sentido comparar — e você está certo em perguntar isso.

A diferença costuma estar no que está incluso. A gente é registrado no Cadastur (número 52.077.577 — você pode verificar no site do Ministério do Turismo), tem 4.9/5 no Google com avaliações de turistas reais, e você fala diretamente comigo, o Murillo.

Me conta o que estava incluso na outra opção? Às vezes consigo mostrar a diferença do que você vai receber — aí você decide com mais informação. 😊
```

---

## Exemplo 3 — Lead que sumiu após proposta (follow-up)

### Situação

Lead "Carla" recebeu proposta para Litoral Sul Clássico (2 pessoas) em 28/04. Hoje é 30/04 — 2 dias sem resposta.

### Comando para o Claude

```
gera follow-up para Carla — proposta enviada em 28/04, passeio litoral-sul-classico, 2 pessoas, casal. Não respondeu.
```

### Saída esperada

```
T1 — Enviar em: 30/04 (hoje)
─────────────────────────────────────
Oi Carla! 😊 Passou minha mensagem de quarta com a proposta do Litoral Sul?

Qualquer dúvida — sobre o roteiro, o que levar, a maré — é só me perguntar. Estou por aqui!

Murillo

T2 — Enviar em: 02/05
─────────────────────────────────────
Oi Carla! Uma dica rápida: o Litoral Sul tem praias bem diferentes entre si — Praia do Amor, Tabatinga, Coqueirinho. O que mais chama atenção no roteiro pra vocês — praia mais movimentada ou mais tranquila?

(Pergunto porque consigo adaptar o roteiro se quiserem algo mais específico.)

Murillo

T3 — Enviar em: 04/05
─────────────────────────────────────
Oi Carla! Posso responder qualquer dúvida que estiver travando a decisão — sobre o passeio, sobre o pagamento, sobre o que levar. Sem pressão — só quero garantir que você tem tudo para decidir bem. 😊

Murillo

T4 — Enviar em: 05/05 (último toque)
─────────────────────────────────────
Oi Carla! Imagino que os planos podem ter mudado — tudo bem! Se em algum momento vocês vierem a João Pessoa e quiserem conhecer o Litoral Sul, é só me chamar. 

Boa viagem! 🙏
Murillo

═══════════════════════════════════════════
SE NÃO HOUVER RESPOSTA APÓS T4:
→ Atualizar status no CRM: perdido
→ motivo_perda: ghosting
═══════════════════════════════════════════
```

---

*v1.0 | 2026-04-30 | Exemplos fictícios — não alterar leads.csv com estes dados*
