# /copy-landing

**Descrição:** Gera copy de landing page ou campanha seguindo fórmula AIDA (Atenção, Interesse, Desejo, Ação) com prova social e quebra de objeção, sem clichê turístico.

**Quando usar:**
- Novo passeio ou campanha precisa de landing page
- Quer testar copy diferente de página existente
- Retomando campainha inacabada

**Entradas necessárias:**
- Nome/tema do passeio ou campanha
- Público-alvo (ex.: mochileiros, casais, famílias)
- Diferencial competitivo (o que a Vem Passear faz que concorrentes não fazem?)
- Prova social disponível (depoimentos, números de clientes, vídeos?)

**Processo:**
1. Carrega `templates/copy-landing.md`
2. Consulta `_conhecimento/tom-de-voz.md` para tom
3. Consulta `_conhecimento/publico-alvo.md` para persona
4. Estrutura AIDA:
   - **Headline (Atenção):** pergunta que turista faz a si mesmo / promessa sem genérico
   - **Sublinha (Interesse):** contexto, credibilidade, por que agora
   - **Blocos (Desejo):** benefícios específicos, não features genéricas
   - **Prova (Confiança):** depoimento real, número de clientes, foto genuína
   - **CTA (Ação):** botão/link claro para WhatsApp
5. Marca lacunas com `[CONFIRMAR COM MURILLO]`

**Saída esperada:**
- Copy markdown com 400-800 palavras
- Headline atraente (sem "Bem-vindo a" ou "Descubra")
- 3-5 blocos de benefício, cada um com 1-3 linhas
- Prova social (citação de cliente real, número, foto)
- FAQ comprimida (3-5 perguntas mais frequentes)
- CTA no final e em meio do texto (não apenas uma)
- Citação: "Baseado em: `_conhecimento/tom-de-voz.md`, `_conhecimento/publico-alvo.md`"

**Exemplo:**
```
# Passeio Seixas: O Único Lugar Onde Você Vê o Sol Nascer no Oceano Atlântico (e Está em SP)

## Não é Mais Um Tour de Praia.

É uma manhã inteira descobrindo história, vendo jangadeiros trabalhar, e comendo frutos do mar que você tocou há 2 horas.

Porque a maioria das agências leva você para tirar foto. A gente leva você para entender.

## Você Vai Levar Para Casa

- **Histório de jangadeiro** — Você conversa com quem vive disso há 40 anos
- **Água morna o ano inteiro** — Mergullo sem frouxo, sem medo
- **Almoço com gosto de pesca** — Não é "frutos do mar resort", é "meu amigo vendeu isso hoje"
- **Sunrise que nenhuma foto faz justiça** — Porque você está lá, não olhando tela

## Verdadeiros Roteiros de Quem Entende

"Murillo nos mostrou lugares que nenhum outro guia conhece. A gente virou viciado em Seixas." — Carolina, São Paulo

**Quero viver essa manhã** → [CTA WhatsApp]

## Perguntas que Surgem (Respondidas)

**P: E se entrar água na câmera?**  
R: A gente tem caixa à prova d'água. Se quiser, empresta.

**P: Quanto custa?**  
R: [CONFIRMAR COM MURILLO]. Incluso: transporte, mergulho, almoço, café, todas as histórias.

**P: Quantas pessoas?**  
R: Máximo 8, para conversa de verdade, não de comitiva.
```
