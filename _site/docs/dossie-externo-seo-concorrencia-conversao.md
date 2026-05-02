# Dossiê Externo — SEO, Concorrência, Conteúdo e Conversão

**Projeto:** Vem Passear em Jampa
**Issue:** PESQUISA-AGENCIA-01
**Data:** 2026-05-02
**Modo de produção:** squad sênior (estrategista SEO local · analista de concorrência · copywriter de conversão · especialista em turismo receptivo · estrategista funil WhatsApp · UX strategist · especialista em conteúdo · arquiteto de site)
**Pesquisa externa:** ✅ realizada via WebSearch (15 queries; ver "Sources" no fim do documento)
**Próxima issue:** `ESTRUTURA-SITE-COMPLETA-02`

---

## 1. Resumo Executivo

### Tese de posicionamento

> **A Vem Passear é o guia local de João Pessoa que decide a maré por você.**
> Não vendemos passeio — vendemos **dia certo**, **maré certa** e **WhatsApp direto com Murillo**.
> Cadastur ativo + Google 4.9/61 + atendimento humano + 22 passeios = autoridade local com prova.

### Como o site deve competir

| Vetor | Concorrência típica | Vem Passear |
|------|---------------------|-------------|
| Quem atende | Atendente / formulário | **Murillo direto, sem intermediário** |
| Maré | "Conforme tábua" (frase genérica) | **Tábua já no site + alerta por passeio** |
| Confiança | Logo + slogan | **Cadastur 52.077.577 + 4.9/5 (61) visíveis em toda página** |
| CTA | Formulário longo + WhatsApp | **WhatsApp único, em toda dobra** |
| Conteúdo | Texto raso colado de portal | **Voz de guia local, sem clichê turístico** |
| Privativo | Mencionado de passe | **Linha clara: "100% privativo, não monta com estranhos"** |

### Principais oportunidades

1. **SEO de tábua de marés** — concorrentes têm tábua estática; nós já temos `tabua-mares.ts` por passeio. Post + página = âncora forte com baixa concorrência de qualidade.
2. **"Areia Vermelha vale a pena"** — busca alta, conteúdo dos concorrentes é puramente promocional. Espaço para guia honesto que explica o risco de maré.
3. **"João Pessoa com crianças"** — concorrência fraca: a maioria lista shoppings e parques urbanos. Cluster de família + segurança nos passeios é uma lacuna.
4. **"Roteiro 3 dias"** — top 3 SERPs são hotéis (Hplus, Accor) e portais. Espaço para roteiro de operador local com pacotes prontos linkados.
5. **Local-pack Google** — Vem Passear já tem 4.9/61 no GBP. Schema `LocalBusiness/TravelAgency` + NAP consistente + horário no rodapé fortalece pack local.
6. **Pôr do sol no Jacaré** — busca altíssima e perene. Concorrentes apenas vendem o ingresso; nós podemos contar a história (Bolero, Jurandy, 20+ anos) e linkar para combo.
7. **Picãozinho vs Seixas vs Penha vs Areia Vermelha** — busca comparativa real, ninguém entrega bem. Post comparativo = converte com facilidade para 4 páginas internas.

### Principais riscos

1. **Concorrentes consolidados em SEO** — Jampatur, PNP, Paraíba Travel, feriasemjoaopessoa, Quality Receptivo dominam SERPs. Quebra-galho: foco em long tail + conteúdo profundo, não competir em head terms no curto prazo.
2. **Aggregadores (TripAdvisor, Civitatis, Viator, TourFácil)** — sempre vão ranquear. Estratégia: integrar prova (avaliações) e usar conteúdo educativo + tábua como diferencial defensável.
3. **Confusão de nome** — existe "Vai Passear" e "Passeios em João Pessoa" (Paraíba Travel). Reforçar marca "Vem Passear em Jampa" no H1, title e em todos os schemas.
4. **Dados não confirmados** — preço de transfer, horário Jacaré por época, transfers para Cabedelo. Marcar `[CONFIRMAR COM MURILLO]` e nunca publicar inventado.
5. **Blog raso** — 10 drafts existem; publicar antes de revisão de Murillo destrói SEO. Manter regra "draft fora do sitemap" como invariante.

---

## 2. Diagnóstico Comercial

### O que o site vende

| Camada | Produto |
|--------|---------|
| Núcleo (3 prioritários) | Seixas · Litoral Sul Clássico · Areia Vermelha |
| Profundidade (catálogo) | 22 passeios em 6 categorias: pacotes, litoral sul, litoral norte, piscinas naturais, city tour, interestaduais |
| Serviço | Transfer 24h (privativo, por trajeto) |
| Bundle | Pacotes 2-3 dias (super-econômico, básico, completo) |

### Função de cada tipo de página

| Página | Função primária | Função secundária |
|--------|----------------|-------------------|
| `/` | **Converter** visitante em conversa WhatsApp em ≤30 s | Educar sobre 6 categorias |
| `/passeios/` | **Comparar** entre opções; ponte para categoria/individual | SEO mid-funnel "passeios em João Pessoa" |
| `/passeios/[categoria]/` | **Decidir** dentro de um cluster temático | SEO categoria ("piscinas naturais") |
| `/passeios/[categoria]/[slug]/` | **Vender** o passeio individual | Schema `TouristAttraction` + FAQ |
| `/faq/` | **Quebrar objeção** antes do WhatsApp | SEO long-tail por pergunta |
| `/servicos/transfer-24h/` | **Capturar** quem chega/sai | Vincular ao funil de passeios |
| `/blog/` (Fase 2) | **Atrair** quem ainda não busca preço | Distribuir autoridade para páginas comerciais |
| `/blog/[slug]/` | **Educar** → CTA WhatsApp + link interno | SEO long-tail |
| `/sobre` (404 hoje, redirecionar para `#` no Footer) | **Reforçar** Murillo como pessoa | — |

### Quais páginas convertem hoje

- **Páginas individuais de passeio** com FAQ + alerta de maré + CTA sticky → maior densidade de intenção comercial
- **Home** → top-of-funnel; converte visualmente quando o hero cumpre prova social em 1 dobra
- **`/faq/`** → fecha cliente em dúvida sobre maré, criança, cancelamento

### Quais páginas educam (e não fecham sozinhas)

- `/passeios/` listagem (mid-funnel)
- `/passeios/piscinas-naturais/calendario/` (interna, não SEO)
- `/blog/*` (Fase 2 — entra em produção quando Murillo aprovar 10 posts revisados)

### Quais páginas precisam ranquear primeiro

| Prioridade | Página | Keyword principal |
|-----------|--------|-------------------|
| P0 | `/passeios/piscinas-naturais/seixas` | "piscinas naturais Seixas" |
| P0 | `/passeios/litoral-norte/areia-vermelha-catamara` | "areia vermelha catamarã" |
| P0 | `/passeios/litoral-sul/roteiro-classico` | "litoral sul João Pessoa passeio" |
| P1 | `/` | "passeios em João Pessoa" |
| P1 | `/passeios/litoral-norte/por-do-sol-jacare` | "pôr do sol Jacaré" |
| P1 | `/passeios/pacotes/3-dias-completo` | "roteiro 3 dias João Pessoa pacote" |
| P2 | `/servicos/transfer-24h` | "transfer aeroporto João Pessoa" |
| P2 | `/passeios/city-tour/jampa-historica` | "city tour João Pessoa" |
| P3 | `/blog/*` (Fase 2) | long-tail informacional |

### Caminhos para WhatsApp

| Origem | Caminho mais curto | Status |
|--------|-------------------|--------|
| Home | Hero → CTA primário direto | ✅ |
| Página de passeio | CTA sticky permanente + CTA final | ✅ |
| FAQ | Cada resposta termina em CTA | ⚠️ revisar uniformidade |
| Blog (Fase 2) | Bloco "Dicas do Murillo" + "Passeios Relacionados" | 🟡 plano |
| Categoria | Card de passeio → individual → WhatsApp | ✅ |

### Objeções a quebrar (visão sintética — detalhe na §8)

1. Preço: "vai ter taxa escondida?"
2. Maré: "e se não tiver maré boa?"
3. Criança: "criança paga? é seguro?"
4. Privativo: "vou junto com estranhos?"
5. Confiança: "essa empresa existe mesmo?"
6. Saída: "como chego no ponto de embarque?"
7. Cancelamento: "se chover, perco o dinheiro?"
8. Pagamento: "como pago? Pix? cartão?"

---

## 3. Matriz de Intenção de Busca

Convenções:
- **Etapa**: TOFU (descoberta) · MOFU (consideração) · BOFU (decisão) · OPS (operacional pós-clique) · LOCAL (local pack)
- **Risco de inventar** = chance de produzir conteúdo sem dado real (preço, horário, parceria) — prioritário antes de escrever.

| # | Keyword | Intenção | Etapa | Página alvo | CTA | Conteúdo necessário | Prioridade | Risco de inventar |
|---|---------|----------|-------|-------------|-----|---------------------|-----------|------------------|
| **CLUSTER DESCOBERTA** |
| 1 | o que fazer em João Pessoa | informacional | TOFU | `/blog/o-que-fazer-em-joao-pessoa` (draft) | "Fale com Murillo no WhatsApp" | guia completo + 6 categorias linkadas | ALTA | baixo |
| 2 | melhores passeios em João Pessoa | navegacional/info | TOFU/MOFU | `/passeios/` | CTA WhatsApp + ver cards | listagem com filtros + ranking editorial | ALTA | baixo |
| 3 | João Pessoa o que conhecer | informacional | TOFU | `/blog/o-que-fazer-em-joao-pessoa` | WhatsApp | guia + comparativo categorias | MÉDIA | baixo |
| 4 | melhor época para João Pessoa | informacional | TOFU | `/blog/melhor-epoca-joao-pessoa` (futuro) | WhatsApp | clima + maré + eventos | MÉDIA | médio (datas) |
| 5 | quanto custa viajar para João Pessoa | informacional | TOFU | `/blog/quanto-custa-joao-pessoa` (futuro) | WhatsApp | estimativa real + pacotes | BAIXA | **alto** (preço) |
| **CLUSTER DECISÃO** |
| 6 | piscinas naturais João Pessoa | comercial | MOFU | `/passeios/piscinas-naturais/` | ver passeios | hub categoria + 4 piscinas | ALTA | baixo |
| 7 | piscinas naturais Seixas | comercial | BOFU | `/passeios/piscinas-naturais/seixas` | reservar WhatsApp | página completa atual | ALTA | baixo |
| 8 | passeio Seixas João Pessoa | comercial | BOFU | `/passeios/piscinas-naturais/seixas` | WhatsApp | página completa | ALTA | baixo |
| 9 | Picãozinho ou Seixas | comparativo | MOFU | `/blog/piscinas-naturais-joao-pessoa-guia` (draft) | WhatsApp + link interno | tabela comparativa | ALTA | baixo |
| 10 | Areia Vermelha vale a pena | comparativo | MOFU | `/blog/areia-vermelha-vale-a-pena` (draft) | WhatsApp + link Areia | resposta honesta + dependência de maré | ALTA | médio (maré) |
| 11 | catamarã João Pessoa preço | transacional | BOFU | `/passeios/piscinas-naturais/seixas` (e Areia) | WhatsApp | tabela com 4 catamarãs | ALTA | baixo (já documentado) |
| 12 | passeio Coqueirinho Tambaba | comercial | BOFU | `/passeios/litoral-sul/roteiro-classico` | WhatsApp | página completa | ALTA | baixo |
| 13 | quadriciclo Coqueirinho | comercial | BOFU | `/passeios/litoral-sul/quadriciclo-coqueirinho` | WhatsApp | página completa | ALTA | médio (preço pendente) |
| 14 | pôr do sol Jacaré | comercial | BOFU | `/passeios/litoral-norte/por-do-sol-jacare` | WhatsApp | página completa + áudio Bolero (futuro) | ALTA | médio (horário por época) |
| **CLUSTER OPERACIONAL** |
| 15 | tábua de marés João Pessoa | informacional | OPS | `/blog/tabua-de-mares-piscinas-naturais` (draft) + `/passeios/piscinas-naturais/calendario/` | WhatsApp | tábua atual + interpretação | ALTA | baixo (dado sólido) |
| 16 | melhor maré piscinas naturais Paraíba | informacional | OPS | mesmo do #15 | WhatsApp | guia de leitura de tábua | ALTA | baixo |
| 17 | quando ir nas piscinas naturais Seixas | informacional | OPS | `/passeios/piscinas-naturais/seixas` (alerta de maré) | WhatsApp | alerta + tábua | ALTA | baixo |
| **CLUSTER COMERCIAL** |
| 18 | roteiro 3 dias João Pessoa | comercial | MOFU | `/passeios/pacotes/` + `/blog/roteiro-3-dias-joao-pessoa` (draft) | WhatsApp + ver pacote | roteiro real + 3 pacotes | ALTA | baixo |
| 19 | pacote João Pessoa 3 dias | transacional | BOFU | `/passeios/pacotes/3-dias-completo` | WhatsApp | tabela 3 pacotes | ALTA | baixo |
| 20 | passeio privativo João Pessoa | comercial | MOFU | `/blog/passeio-privativo-joao-pessoa` (futuro) + lancha | WhatsApp | linha clara: 100% privativo + lancha | MÉDIA | médio (capacidade lancha) |
| 21 | passeio de lancha João Pessoa | transacional | BOFU | `/passeios/litoral-norte/lancha-privativa` | WhatsApp | página completa | MÉDIA | médio (preço varia) |
| **CLUSTER LOCAL SEO** |
| 22 | agência de turismo João Pessoa | navegacional | LOCAL | `/` + GBP | WhatsApp + Maps | NAP + Cadastur visível | ALTA | baixo |
| 23 | guia turístico João Pessoa | navegacional | LOCAL | `/` + bloco Murillo | WhatsApp | bloco Murillo com foto | MÉDIA | baixo |
| 24 | turismo receptivo João Pessoa | navegacional | LOCAL | `/` | WhatsApp | TravelAgency schema | MÉDIA | baixo |
| 25 | passeios João Pessoa Cadastur | navegacional | LOCAL | `/sobre` (footer) | WhatsApp | Cadastur + CNPJ visível | MÉDIA | baixo |
| **CLUSTER FAMÍLIA / CRIANÇAS** |
| 26 | João Pessoa com crianças | informacional | TOFU/MOFU | `/blog/joao-pessoa-com-criancas` (draft) | WhatsApp | passeios seguros + idades | ALTA | baixo |
| 27 | passeios para crianças João Pessoa | comercial | MOFU | mesmo do #26 | WhatsApp + link Picãozinho/Seixas | tabela "criança paga / a partir de quando" | ALTA | baixo |
| 28 | passeio com bebê João Pessoa | informacional | TOFU | `/blog/joao-pessoa-com-criancas` | WhatsApp | seção bebê | BAIXA | médio (operacional) |
| **CLUSTER MARÉ / PISCINAS NATURAIS** |
| 29 | tábua maré Cabo Branco | informacional | OPS | post tábua | WhatsApp | tábua + bairro | MÉDIA | baixo |
| 30 | quando aparece Areia Vermelha | informacional | OPS | `/blog/areia-vermelha-vale-a-pena` | WhatsApp | maré + lua nova/cheia | ALTA | baixo |
| 31 | maré baixa João Pessoa hoje | navegacional | OPS | `/passeios/piscinas-naturais/calendario/` | WhatsApp | tábua dinâmica | MÉDIA | baixo |
| **CLUSTER TRANSFER** |
| 32 | transfer aeroporto João Pessoa | comercial | BOFU | `/servicos/transfer-24h` | WhatsApp cotação | preço por trajeto + cobertura | ALTA | **alto** (preço pendente) |
| 33 | transfer Castro Pinto João Pessoa | comercial | BOFU | mesmo | WhatsApp | bloco aeroporto | MÉDIA | alto |
| 34 | transfer hotel passeio João Pessoa | comercial | BOFU | mesmo | WhatsApp | bloco hotel | BAIXA | médio |

---

## 4. Concorrência e Padrões de Mercado

### Concorrentes diretos identificados (operadores receptivos)

| Operador | URL | Forças | Lacunas |
|---------|-----|--------|---------|
| Jampatur | jampatur.com | catálogo amplo, blog, lancha privativa, brisa do mar, page por passeio | sem voz de marca pessoal; CTA por formulário e WhatsApp |
| PNP — Agência de Turismo | pnp.tur.br | 100+ passeios, página por passeio, 2 saídas (Tambaú e Praia do Seixas) | navegação pesada; sem prova social no fold |
| Paraíba Travel / "Passeios em João Pessoa" | passeiosemjoaopessoa.com.br | tem tábua de marés, combos com desconto, rede de catamarãs próprios | nome genérico = ranqueia mas confunde branding |
| Cabo Branco Receptivo | cabobrancoreceptivo.com.br | identidade local, roteiros personalizados | catálogo enxuto |
| Quality Receptivo | qualityreceptivo.com.br | tábua de marés simples, hub de piscinas | conteúdo raso |
| Férias em João Pessoa | feriasemjoaopessoa.com.br | tábua dedicada, hub Seixas, combos | pertence a Paraíba Náuticos (cativo de catamarã) |
| Luck Receptivo | luckreceptivo.com.br | rede grande (NE inteiro), confiança institucional | nada local de PB |
| Maresia Tour | maresiatour.com.br | exclusividade, premium | catálogo pequeno |
| Red Rock | redrock.com.br | quadriciclo dono, força em Coqueirinho | pouco além de quad |
| Jefferson Turismo | via Portal Jampa | privativo litoral sul, WhatsApp direto | sem site próprio |
| Amaral Tur | amaralturpasseios.com.br | buggy 4×4 forte | identidade visual fraca |
| Vai Passear | vaipassear.com | guia da Praia do Jacaré, conteúdo bom | nome próximo demais ao nosso (risco de canibalização de marca) |

### Aggregadores que dominam SERPs

- **TripAdvisor** — sempre top 3 em head terms; não dá para vencer, mas dá para integrar (link de reviews + Cadastur)
- **Civitatis / Viator / TourFácil** — rentam tráfego e revendem; nosso preço deveria igualar ou bater
- **Portais editoriais** (melhoresdestinos, viajenaviagem, viciadaemviajar, hiselly, civitatis blog, jornaldaparaiba, hplus) — dominam blog SEO de cidade; nossa estratégia é ir para conteúdo profundo + voz de operador local

### Padrões de H1/títulos observados

| Padrão | Exemplo concorrente | Nossa adaptação |
|--------|---------------------|-----------------|
| Atributo + cidade | "Piscinas Naturais do Seixas" | **manter** + adicionar "em João Pessoa" |
| Pergunta | "Areia Vermelha vale a pena?" | usar em blog, não em página comercial |
| "Melhores X em João Pessoa" | "Melhores passeios em João Pessoa" | usar em listagem `/passeios/` |
| Lista + número | "OS 15 MELHORES" | evitar (clickbait) — usar em blog se editorial |
| "Como ir / como funciona" | "Como ir Praia do Seixas" | usar em FAQ + blog |
| "Saindo de" | "Areia Vermelha em Cabedelo, saindo da Praia X" | usar em página individual quando há saída crítica |

### O que concorrentes fazem bem

- **Página por passeio** com info essencial (preço, duração, saída) — todos fazem
- **Combo com desconto** — marketing forte para upsell
- **Tábua de marés visível** — diferencial perceptível em quem tem
- **Foto de catamarã com toboágua** — gera CTR
- **WhatsApp como botão flutuante** — padrão estabelecido
- **Cadastur visível no rodapé** — confiança

### O que concorrentes fazem mal (nossas oportunidades)

- **Voz de marca** — quase ninguém tem (a maioria fala como "agência genérica")
- **Pessoa por trás** — Murillo como rosto é diferencial real (Vai Passear faz isso bem para o Jacaré)
- **Tábua + alerta por passeio** — a maioria tem tábua isolada; nós já temos por passeio
- **FAQ específico por passeio** — concorrentes repetem FAQ genérica
- **Conteúdo educativo de marés** — superficial em todo lugar
- **Comparativo honesto** ("Picãozinho vs Seixas vs Penha") — ninguém entrega bem
- **"Vale a pena" honesto** — todos vendem, ninguém diz quando NÃO vale
- **Pacotes 2-3 dias claramente apresentados** — concorrentes vendem solto, nossos pacotes têm estrutura única

### Uso de elementos de conversão (matriz)

| Elemento | Jampatur | PNP | Paraíba Travel | Cabo Branco | **Vem Passear (atual)** | **Vem Passear (proposto)** |
|---------|---------|-----|---------------|-------------|------------------------|---------------------------|
| Preço visível | sim | sim | sim | sim | **sim** | sim |
| FAQ por passeio | parcial | parcial | parcial | não | **sim** | sim ★ |
| Reviews / Google | não | não | parcial | não | **parcial (4.9/61 footer)** | **integrar Schema + GBP no fold** |
| WhatsApp único | parcial | sim | sim | sim | **sim** | sim |
| Mapa do ponto de saída | parcial | sim | parcial | não | **parcial** | **adicionar em todos** |
| Foto real | sim (sem alt) | sim | sim | parcial | **placeholder + assets em produção** | sim |
| Blog ativo | sim | parcial | parcial | não | **draft** | **publicar 10 posts editados (Fase 2)** |
| Tábua de marés | não | não | **sim** | não | **sim por passeio** ★ | sim ★ |
| Combo / pacote | sim | parcial | sim | parcial | **sim (3 pacotes)** | sim |
| Lancha privativa | sim | parcial | sim | não | **sim** | sim |

★ = vantagem defensável da Vem Passear

---

## 5. Mapa Página → Objetivo → CTA

### `/` Home

| Item | Definição |
|------|-----------|
| Objetivo | Converter visitante em conversa WhatsApp em ≤ 30 s |
| Público | Turista pesquisando passeios em João Pessoa, fase MOFU |
| Dor | "muita opção, não sei em qual confiar" |
| Prova | Cadastur + 4.9/61 + foto Murillo + 3 passeios prioritários |
| CTA primário | "Fale com Murillo no WhatsApp" |
| CTA secundário | "Ver todos os passeios" |
| Links internos | 6 categorias + 3 passeios prioritários + `/sobre` (footer) + `/faq/` |
| Imagem ideal | Murillo no embarque + Seixas em maré baixa (carrossel) |

### `/passeios/` Hub geral

| Item | Definição |
|------|-----------|
| Objetivo | Permitir comparação entre 22 passeios |
| Público | Turista MOFU comparando agências |
| Dor | "qual passeio escolho?" |
| Prova | Listagem completa + selo Cadastur no header |
| CTA primário | Card → página individual |
| CTA secundário | WhatsApp sticky |
| Links internos | 6 categorias + 22 individuais + `/faq/` |
| Imagem ideal | Capa por passeio (campo `coverImage`) |

### `/passeios/[categoria]/` (×6)

| Item | Definição |
|------|-----------|
| Objetivo | Apresentar cluster temático e converter dentro dele |
| Público | Já decidiu o tipo (ex: piscinas naturais) |
| Dor | "qual desses 4 é o melhor para mim?" |
| Prova | Intro editorial + comparativo curto + cor da categoria |
| CTA primário | Card de passeio |
| CTA secundário | WhatsApp + "Ainda em dúvida? Murillo orienta" |
| Links internos | passeios da categoria + categorias relacionadas + blog (Fase 2) |
| Imagem ideal | Hero próprio por categoria (Piscinas: Seixas; Litoral Sul: Coqueirinho aéreo; etc.) |

### `/passeios/[categoria]/[slug]/` (×22)

| Item | Definição |
|------|-----------|
| Objetivo | Vender o passeio individual |
| Público | BOFU pronto para reservar |
| Dor | "tem maré boa? criança vai? como pago?" |
| Prova | Cadastur + Google rating + FAQ específico + alerta de maré + depoimento (quando real) |
| CTA primário | "Reservar pelo WhatsApp" (sticky + final) |
| CTA secundário | WhatsApp inline em FAQ + alerta de maré |
| Links internos | passeios relacionados na categoria + `/faq/` + `/blog/[slug]` (Fase 2) |
| Imagem ideal | Hero do passeio + galeria 3-6 fotos + foto do ponto de embarque |

### `/faq/`

| Item | Definição |
|------|-----------|
| Objetivo | Quebrar objeção de quem ainda não foi para o WhatsApp |
| Público | MOFU/BOFU em dúvida |
| Dor | "preciso saber X antes de mandar mensagem" |
| Prova | Respostas específicas (não-genéricas) |
| CTA primário | "Sua dúvida não está aqui? Fale com Murillo" |
| CTA secundário | Link para passeio relacionado por pergunta |
| Links internos | Para cada categoria conforme pergunta |
| Imagem ideal | Foto Murillo no fim ("não achou? me chama") |

### `/servicos/transfer-24h/`

| Item | Definição |
|------|-----------|
| Objetivo | Capturar quem chega/sai do aeroporto e fidelizar para passeio |
| Público | BOFU operacional |
| Dor | "como vou do aeroporto até o hotel?" |
| Prova | Cadastur + 24h + WhatsApp + cobertura clara |
| CTA primário | "Solicitar cotação" (WhatsApp) |
| CTA secundário | "Veja também: passeios" |
| Links internos | Home + passeios prioritários |
| Imagem ideal | Carro/van na frente do aeroporto Castro Pinto |

### `/blog/` (Fase 2)

| Item | Definição |
|------|-----------|
| Objetivo | Atrair tráfego TOFU e distribuir para páginas comerciais |
| Público | TOFU descobrindo João Pessoa |
| Dor | "ainda não sei nada sobre João Pessoa" |
| Prova | Voz de Murillo + foto real + 4.9/61 no header |
| CTA primário | Card do post |
| CTA secundário | WhatsApp no header + footer |
| Links internos | Cluster + passeios relacionados |
| Imagem ideal | Capa editorial por cluster |

### `/blog/[slug]/` (Fase 2)

| Item | Definição |
|------|-----------|
| Objetivo | Educar + transferir autoridade para página comercial |
| Público | TOFU/MOFU |
| Dor | "pesquisando, ainda não decidi" |
| Prova | Conteúdo profundo + bloco "Dicas do Murillo" + FAQ + Cadastur |
| CTA primário | "Quer fazer esse passeio? Fale com Murillo" |
| CTA secundário | Bloco "Passeios Relacionados" |
| Links internos | mínimo 2 passeios + 1 outro post + `/faq/` |
| Imagem ideal | 1 foto real do tema (sem stock genérico) |

### `/sobre` (404 hoje — vira bloco no Footer)

| Item | Definição |
|------|-----------|
| Objetivo | Reforçar Murillo como pessoa + dados institucionais |
| Público | Visitante validando confiança |
| Dor | "essa empresa existe mesmo?" |
| Prova | CNPJ + Cadastur + Murillo (foto + bio curta) + Instagram |
| CTA primário | "Fale com Murillo" |
| CTA secundário | Instagram + Google Maps |
| Links internos | Home + passeios prioritários |
| Imagem ideal | Foto Murillo de uniforme/operação |

---

## 6. Blog SEO

### Função do blog

Capturar buscas TOFU/MOFU informacionais que páginas comerciais não capturam, transferir autoridade para páginas comerciais via links internos, posicionar Murillo como guia local e diferenciar a marca de operadores genéricos.

### Estratégia de clusters (consolida o que já existe em `data/blog.ts`)

| Cluster | Âncora | Posts satélites | Leva para |
|--------|--------|----------------|-----------|
| Guia da cidade | "O que fazer em João Pessoa" | Roteiros, melhor época, com crianças | Home + 6 categorias |
| Piscinas naturais | "Piscinas Naturais em JP — guia" | Seixas, Picãozinho, Penha, Areia Vermelha, comparativo | `/passeios/piscinas-naturais/*` |
| Litoral sul | "Litoral Sul de JP — o que fazer" | Coqueirinho, Tambaba, Praia Bela, quadriciclo | `/passeios/litoral-sul/*` |
| Litoral norte | "Litoral Norte — Cabedelo, Jacaré, Areia" | Pôr do sol Jacaré, Areia Vermelha vale a pena, lancha | `/passeios/litoral-norte/*` |
| Roteiros | "Roteiro 3 dias em JP" | Roteiro 5 dias, 7 dias, com crianças | `/passeios/pacotes/*` |
| Marés e natureza | "Tábua de marés JP" | melhor época, lua e maré, leitura de tábua | `/passeios/piscinas-naturais/*` |
| Logística | "Transfer aeroporto JP" | onde ficar, como sair do aeroporto | `/servicos/transfer-24h` + categorias |
| Família | "JP com crianças" | passeios seguros, com bebê | `/passeios/piscinas-naturais/picaozinho` + `/passeios/city-tour/*` |
| Privativo | "Passeio privativo em JP" | lancha vs catamarã, exclusivo | `/passeios/litoral-norte/lancha-privativa` |

### Top 10 posts prioritários

| # | Slug | Título SEO | H1 | Description (≤160) | Intenção | Cluster | Página comercial | CTA | Confirmações pendentes |
|---|------|-----------|----|-------------------|---------|---------|------------------|-----|------------------------|
| 1 | `o-que-fazer-em-joao-pessoa` | O Que Fazer em João Pessoa: guia completo do guia local | O Que Fazer em João Pessoa | Guia completo de João Pessoa por quem vive aqui: praias, piscinas naturais e roteiros do guia local. | TOFU informacional | guia-cidade | `/passeios/` | "Fale com Murillo no WhatsApp" | nenhuma |
| 2 | `tabua-de-mares-piscinas-naturais` | Tábua de Marés JP: melhor dia para piscinas naturais | Tábua de Marés em João Pessoa para Piscinas Naturais | Como ler a tábua e escolher o melhor dia para visitar Seixas, Picãozinho e Areia Vermelha. | OPS informacional | mares-natureza | `/passeios/piscinas-naturais/seixas` | "A gente confirma a maré para você no WhatsApp" | tábua atual em `data/tabua-mares.ts` ✅ |
| 3 | `piscinas-naturais-joao-pessoa-guia` | Piscinas Naturais em João Pessoa — Guia Completo | Piscinas Naturais em João Pessoa | Seixas, Picãozinho, Areia Vermelha e Penha: como funcionam, melhor maré e o que esperar. | MOFU comparativo | piscinas-naturais | `/passeios/piscinas-naturais/` | "Qual escolher? Murillo orienta" | nenhuma |
| 4 | `roteiro-3-dias-joao-pessoa` | Roteiro de 3 Dias em João Pessoa: o que ver, fazer e comer | Roteiro de 3 Dias em João Pessoa | Roteiro completo de 3 dias em JP, do litoral norte ao sul, com pacotes prontos. | MOFU comercial | roteiros | `/passeios/pacotes/3-dias-completo` | "Reserve seu pacote pelo WhatsApp" | nenhuma |
| 5 | `passeio-praia-do-seixas` | Passeio Piscinas do Seixas — guia completo | Passeio para a Praia do Seixas | Como funciona o passeio para a Praia do Seixas, melhor horário pela maré e o que levar. | BOFU comercial | piscinas-naturais | `/passeios/piscinas-naturais/seixas` | "Reserve com Murillo" | nenhuma |
| 6 | `areia-vermelha-vale-a-pena` | Areia Vermelha vale a pena? Catamarã + maré explicados | Areia Vermelha vale a pena? | A ilha que aparece e desaparece com a maré: como é o passeio, melhor maré e o que levar. | MOFU comparativo | litoral-norte | `/passeios/litoral-norte/areia-vermelha-catamara` | "Confirme sua data com Murillo" | nenhuma |
| 7 | `litoral-sul-joao-pessoa-o-que-fazer` | Litoral Sul de JP — praias, trilhas e quadriciclo | Litoral Sul de João Pessoa | Coqueirinho, Tabatinga, Praia Bela e Tambaba: o que ver no litoral sul de JP. | MOFU informacional | litoral-sul | `/passeios/litoral-sul/roteiro-classico` | "Combine quadriciclo + praias com Murillo" | preço quadriciclo solto pendente |
| 8 | `litoral-norte-joao-pessoa-o-que-fazer` | Litoral Norte de JP — Cabedelo, Jacaré e Areia Vermelha | Litoral Norte de João Pessoa | Pôr do sol no Jacaré, Areia Vermelha e a história colonial do litoral norte. | MOFU informacional | litoral-norte | `/passeios/litoral-norte/roteiro-classico` | "Monte seu dia no litoral norte" | horário Jacaré por época pendente |
| 9 | `joao-pessoa-com-criancas` | João Pessoa com Crianças — passeios seguros | João Pessoa com Crianças | Quais passeios em JP funcionam bem com crianças, segurança e o que levar. | MOFU segmentação | familia | `/passeios/piscinas-naturais/picaozinho` + `/passeios/city-tour/jampa-historica` | "Murillo monta o roteiro família" | confirmar idades por passeio com Murillo |
| 10 | `transfer-aeroporto-joao-pessoa` | Transfer Aeroporto JP — Castro Pinto 24h | Transfer do Aeroporto de João Pessoa | Opções de transfer do aeroporto Castro Pinto para JP, com atendimento 24h. | BOFU operacional | logistica | `/servicos/transfer-24h` | "Solicite sua cotação no WhatsApp" | preço por trajeto pendente |

### 30 ideias de posts (consolidação dos 10 acima + 20 novos)

| # | Slug | Cluster | Prioridade |
|---|------|---------|-----------|
| 1 | `o-que-fazer-em-joao-pessoa` | guia-cidade | ALTA |
| 2 | `tabua-de-mares-piscinas-naturais` | mares-natureza | ALTA |
| 3 | `piscinas-naturais-joao-pessoa-guia` | piscinas-naturais | ALTA |
| 4 | `roteiro-3-dias-joao-pessoa` | roteiros | ALTA |
| 5 | `passeio-praia-do-seixas` | piscinas-naturais | ALTA |
| 6 | `areia-vermelha-vale-a-pena` | litoral-norte | ALTA |
| 7 | `litoral-sul-joao-pessoa-o-que-fazer` | litoral-sul | ALTA |
| 8 | `litoral-norte-joao-pessoa-o-que-fazer` | litoral-norte | ALTA |
| 9 | `joao-pessoa-com-criancas` | familia | ALTA |
| 10 | `transfer-aeroporto-joao-pessoa` | logistica | ALTA |
| 11 | `picaozinho-ou-seixas-qual-escolher` | piscinas-naturais | MÉDIA |
| 12 | `por-do-sol-jacare-bolero-de-ravel` | litoral-norte | MÉDIA |
| 13 | `quadriciclo-coqueirinho-trilha-mirantes` | litoral-sul | MÉDIA |
| 14 | `melhor-epoca-para-visitar-joao-pessoa` | guia-cidade | MÉDIA |
| 15 | `praia-coqueirinho-como-chegar` | litoral-sul | MÉDIA |
| 16 | `praia-bela-paraiba-guia` | litoral-sul | MÉDIA |
| 17 | `mergulho-joao-pessoa-piscinas` | piscinas-naturais | MÉDIA |
| 18 | `passeio-privativo-joao-pessoa` | privativo | MÉDIA |
| 19 | `o-que-levar-passeio-de-barco-paraiba` | guia-cidade | MÉDIA |
| 20 | `roteiro-litoral-sul-completo` | litoral-sul | MÉDIA |
| 21 | `roteiro-litoral-norte-completo` | litoral-norte | MÉDIA |
| 22 | `quanto-custa-viagem-joao-pessoa` | roteiros | MÉDIA |
| 23 | `porto-de-galinhas-saindo-de-joao-pessoa` | guia-cidade | BAIXA |
| 24 | `praia-de-pipa-saindo-de-joao-pessoa` | guia-cidade | BAIXA |
| 25 | `natal-saindo-de-joao-pessoa` | guia-cidade | BAIXA |
| 26 | `city-tour-joao-pessoa-historico` | guia-cidade | BAIXA |
| 27 | `lancha-vs-catamara-qual-escolher` | privativo | BAIXA |
| 28 | `seguranca-passeios-de-barco-paraiba` | guia-cidade | BAIXA |
| 29 | `melhores-praias-paraiba-quem-vai-jp` | guia-cidade | BAIXA |
| 30 | `como-funciona-vem-passear-em-jampa` | institucional | BAIXA |

### Estrutura padrão de artigo

```
H1: keyword principal + "João Pessoa" quando aplicável

Introdução (2 parágrafos máx)
  Contexto + por que o leitor está no lugar certo. Sem rodeio.

## Resposta rápida (1 parágrafo)
  Otimizado para snippet do Google. Resposta objetiva à intenção.

## Seção H2 — conteúdo com experiência local
  Fatos concretos: nomes de praias, horários, dicas de acesso. Voz de operador.

## Seção H2 — mais conteúdo
  ...

## Dicas do Murillo (bloco assinado)
  Em primeira pessoa. Dica que só guia local sabe.

## Passeios relacionados
  Lista de passeios com link para páginas internas.
  CTA: "Quer fazer esse passeio? Fale com Murillo no WhatsApp"

## Perguntas frequentes (3-5)
  Schema FAQPage gerado via lib/seo.ts → generateFAQSchema()
```

### Regras `draft` vs `published`

| Estado | Visível em `/blog` | Visível em `/blog/[slug]` | No sitemap | Critério para mudar |
|-------|--------------------|---------------------------|------------|---------------------|
| `draft` | não | não (404) | não | espera revisão de Murillo |
| `published` | sim | sim | sim | passa pelo checklist editorial |

### Como cada artigo deve levar para WhatsApp

1. **CTA inline no meio do post** — quando responder uma objeção concreta ("se tiver dúvida da maré, a gente confirma no WhatsApp")
2. **Bloco "Dicas do Murillo"** — assinado em primeira pessoa
3. **Bloco "Passeios relacionados"** — links + CTA
4. **CTA final** — convite explícito + link `empresa.contato.whatsappLink`
5. **Sticky button** — herdado do layout

### Validação humana obrigatória antes de publicar

| Item | Quem aprova |
|------|-------------|
| Texto integral do post | Murillo |
| Preços citados (se algum) | Murillo |
| Horários, durações, idades por passeio | Murillo |
| Depoimento (se incluído) | Murillo (precisa ser real) |
| Foto principal | Murillo (precisa ser real, não stock) |
| FAQ | Murillo |
| Status `draft` → `published` | Murillo (commit explícito) |

---

## 7. Plano de Fotos para Conversão

> Plano detalhado complementa `_site/docs/plano-assets-fotos.md`. Aqui consolidamos foco em conversão.

| Foto | Objetivo | Enquadramento | Emoção | Onde usar | Nome recomendado | Alt text recomendado | Prioridade |
|------|---------|---------------|--------|-----------|------------------|---------------------|-----------|
| Hero da Home | Mostrar prova visual em 1 segundo | Carrossel/composição: Seixas em maré baixa OU drone Coqueirinho ao nascer do sol | Espanto, "quero ir agora" | `/` hero | `home-hero-jampa.webp` | Praias e piscinas naturais de João Pessoa em maré baixa | ALTA |
| Murillo retrato | Humanizar a marca | Plano médio, no embarque ou na praia, uniforme leve, sorrindo | Confiança, "essa pessoa existe" | `/` (bloco Murillo), `/sobre` (footer), `/blog/*` autor | `murillo-retrato.webp` | Murillo, guia local da Vem Passear em Jampa | ALTA |
| Murillo em ação | Provar operação real | Plano aberto: Murillo orientando turistas no catamarã | Profissionalismo, calor humano | `/blog/*`, FAQ final | `murillo-operando.webp` | Murillo orientando turistas no catamarã em João Pessoa | ALTA |
| Seixas hero | Vender o produto âncora | Drone vertical mostrando piscinas em maré baixa + coral visível | Espanto, "isso existe?" | `/passeios/piscinas-naturais/seixas` hero | `seixas-hero.webp` | Piscinas naturais do Seixas em maré baixa com coral visível | ALTA |
| Seixas detalhe | Reforçar promessa | Snorkel + peixes coloridos, em close | Maravilhamento | galeria Seixas + `/blog/passeio-praia-do-seixas` | `seixas-snorkel-peixes.webp` | Snorkel nas piscinas do Seixas com peixes coloridos | ALTA |
| Areia Vermelha hero | Vender 2º produto âncora | Drone do banco de areia vermelha emergindo na maré | "Insta-perfeito" | `/passeios/litoral-norte/areia-vermelha-catamara` hero | `areia-vermelha-hero.webp` | Banco de areia vermelha em maré baixa com piscinas naturais em Cabedelo | ALTA |
| Litoral Sul Coqueirinho | Vender 3º produto âncora | Plano aberto da praia + falésia colorida | Beleza paradisíaca | `/passeios/litoral-sul/roteiro-classico` hero | `litoral-sul-coqueirinho-hero.webp` | Praia de Coqueirinho com falésias coloridas no litoral sul da Paraíba | ALTA |
| Litoral Norte Jacaré | Vender pôr do sol | Pôr do sol no Rio Paraíba com catamarã em silhueta | Romance, único | `/passeios/litoral-norte/por-do-sol-jacare` hero | `por-do-sol-jacare-hero.webp` | Pôr do sol no Rio Paraíba na Praia do Jacaré com catamarã em silhueta | ALTA |
| Transfer | Vender serviço operacional | Van/carro na frente do aeroporto Castro Pinto, dia | Confiança operacional | `/servicos/transfer-24h` hero | `transfer-aeroporto.webp` | Transfer privativo no aeroporto Castro Pinto João Pessoa | MÉDIA |
| Parceiros (catamarã) | Mostrar embarcação | Catamarã com toboágua e bandeira | "Estrutura existe" | páginas de catamarã (Seixas, Areia, Picãozinho, Jacaré) | `catamara-toboagua.webp` | Catamarã com toboágua usado nas piscinas naturais de João Pessoa | MÉDIA |
| Quadriciclo | Vender adventure | Quadriciclo na falésia de Coqueirinho com mar atrás | Aventura | `/passeios/litoral-sul/quadriciclo-*` | `quadriciclo-coqueirinho.webp` | Quadriciclo nos mirantes de Coqueirinho no litoral sul da Paraíba | MÉDIA |
| Card categoria — Pacotes | Visual unificador | Composição 3 imagens (norte+sul+piscinas) | Completude | `/passeios/` cards | `card-pacotes.webp` | Pacote completo de passeios em João Pessoa | MÉDIA |
| Card categoria — Litoral Sul | Visual unificador | Praia do Amor ou Tambaba | Sul = paisagem selvagem | `/passeios/` cards | `card-litoral-sul.webp` | Praias do litoral sul de João Pessoa | MÉDIA |
| Card categoria — Litoral Norte | Visual unificador | Pôr do sol Jacaré | Norte = pôr do sol + história | `/passeios/` cards | `card-litoral-norte.webp` | Litoral norte de João Pessoa com pôr do sol no Jacaré | MÉDIA |
| Card categoria — Piscinas | Visual unificador | Seixas em maré baixa | Piscinas = aquário natural | `/passeios/` cards | `card-piscinas.webp` | Piscinas naturais de João Pessoa | MÉDIA |
| Card categoria — City Tour | Visual unificador | Igreja de São Francisco ou Estação Cabo Branco | History/architectural | `/passeios/` cards | `card-city-tour.webp` | City Tour histórico em João Pessoa | MÉDIA |
| Card categoria — Interestaduais | Visual unificador | Pipa ou Porto de Galinhas | Destinos próximos | `/passeios/` cards | `card-interestaduais.webp` | Passeios interestaduais saindo de João Pessoa | MÉDIA |
| Open Graph (default) | Compartilhamento social | 1200×630, branding visível | Reconhecimento de marca | `og-image.webp` | `og-default.webp` | Vem Passear em Jampa — passeios em João Pessoa | ALTA |
| Open Graph por passeio | Aumentar CTR social | 1200×630 com foto do passeio + nome | Conversão social | `og-{slug}.webp` por passeio | gerado por slug | Foto do passeio + nome | MÉDIA |

> **Regras invariáveis (do briefing existente):**
> - alt text descritivo + contexto local
> - sem stock genérico em página comercial
> - WebP primeiro, JPG fallback opcional
> - reservar foto real antes de publicar blog post

---

## 8. Copy e Objeções

### Mapa de objeções → resposta → onde

| # | Objeção | Onde responder | Como responder (sem inventar) | CTA recomendado |
|---|---------|---------------|------------------------------|-----------------|
| 1 | **Preço** "vai aparecer taxa escondida" | InfoCard de cada passeio + FAQ + bloco final | Mostrar preço por categoria (adulto, criança 5-11, ≤5 anos), separar incluso/não incluso, dizer claramente "valor por pessoa" ou "por trajeto" | "Tirar dúvida pelo WhatsApp" |
| 2 | **Segurança** "é seguro embarcar?" | TrustBlock + FAQ | Cadastur 52.077.577, 4.9/5 (61 av.), embarcações com Capitania dos Portos, salvatagem | "Reservar com confiança" |
| 3 | **Criança** "criança vai? a partir de quando? paga?" | FAQ por passeio + FAQ geral + post família | Tabela: ≤5 não paga, 5-11 paga 80%, 12+ adulto. Por passeio: idade mínima quando há (quad ≥7 anos, etc.) | "Família + Murillo: monte seu dia" |
| 4 | **Chuva** "se chover, perco o dinheiro?" | FAQ por passeio + alerta sazonal | Política: aviso 2h antes, remarcação sem custo; se impossível remarcar, 100% reembolso | "Confirme política no WhatsApp" |
| 5 | **Maré** "e se a maré não estiver boa?" | MareAlert + ProximaSaidaCard + FAQ | "A gente consulta a tábua antes; se não estiver favorável, sugerimos outra data sem custo" | "A gente confirma a maré" |
| 6 | **Cancelamento** "como cancelar?" | FAQ geral + cada FAQ por passeio | Política clara: prazo, percentual, com quem falar | "Chame no WhatsApp" |
| 7 | **Confiança** "essa empresa existe mesmo?" | Footer + bloco Murillo + TrustBlock | CNPJ 52.077.577/0001-03, Cadastur ativo até 2026-12-16, foto Murillo, link Google Maps, Instagram oficial | "Veja avaliações no Google" |
| 8 | **Transporte** "como chego no embarque?" | InfoCard ponto de saída + FAQ + transfer 24h | Endereço + link Google Maps + nota "transfer disponível, consulte" | "Quer transfer? Solicite cotação" |
| 9 | **Duração** "quanto tempo dura?" | InfoCard + roteiro narrativo | Hora exata por etapa quando há (Seixas: ~3h30 com 5 etapas) | "Cabe no seu dia? Vamos confirmar" |
| 10 | **Ponto de saída** "de onde sai?" | InfoCard + FAQ + Google Maps embed | Endereço completo + link Maps + bairro + referência ("próximo ao Hotel Tambaú") | "Te oriento no embarque pelo WhatsApp" |
| 11 | **Privativo** "vou junto com estranhos?" | Bloco específico em pacotes e lancha | "Compartilhado com até X pessoas" OU "100% privativo, só seu grupo, sem desconhecidos" | "Quer privativo? Solicite valor" |
| 12 | **Pagamento** "Pix? cartão? na hora?" | FAQ geral | [CONFIRMAR COM MURILLO: formas de pagamento aceitas e timing] | "Combinamos pagamento no WhatsApp" |

### Princípios de copy

- Tom acolhedor, local, sem clichê turístico ("paraíso tropical", "magia das areias", "cartão postal" — proibidos).
- Sem urgência falsa ("ÚLTIMAS VAGAS", "só hoje", "promoção relâmpago").
- Específico de João Pessoa — qualquer frase que serviria em Natal/Recife/Fortaleza está fora.
- AIDA, mas curto: dor → contexto local → prova → CTA.
- Voz: "a gente", "Murillo", "no WhatsApp" — humano, não corporativo.

---

## 9. Mapa de Links Internos

### Topologia geral

```
Home /
├── Categorias ×6 (todas linkadas no header + bloco "Categorias" + footer)
│   ├── Pacotes ─────────► /passeios/pacotes/{3-dias-completo, 3-dias-basico, super-economico}
│   ├── Litoral Sul ─────► /passeios/litoral-sul/{6 passeios}
│   ├── Litoral Norte ───► /passeios/litoral-norte/{5 passeios}
│   ├── Piscinas Naturais► /passeios/piscinas-naturais/{4 passeios}
│   ├── City Tour ───────► /passeios/city-tour/{1 passeio}
│   └── Interestaduais ──► /passeios/interestaduais/{3 passeios}
├── 3 prioritários (cards na home)
│   ├── /passeios/piscinas-naturais/seixas
│   ├── /passeios/litoral-norte/areia-vermelha-catamara
│   └── /passeios/litoral-sul/roteiro-classico
├── /faq/
├── /servicos/transfer-24h/
└── /blog/ (Fase 2)
    └── /blog/[slug] ×10 (drafts) → cada post linka:
        ├── 2-3 passeios em data/blog.ts → relatedPasseios
        ├── 1 outro post do mesmo cluster
        └── /faq/ quando responde objeção comum
```

### Regras de link interno (invariantes)

| Regra | Detalhe |
|-------|---------|
| Home → categorias | Sempre todas as 6, mesmo que vazias |
| Categoria → passeios da categoria | 100% — nada manualmente excluído |
| Passeio → FAQ relacionada | Pelo menos 1 link `/faq/#{ancora}` quando aplicável |
| Passeio → passeios relacionados | 2-3 da mesma categoria + 1 de categoria complementar (ex: pacote no fim de cada passeio individual) |
| Blog → passeio | Mínimo 2 links em `relatedPasseios` (campo já existe em `data/blog.ts`) |
| Blog → outro blog | 1 link cluster a cluster |
| Blog → transfer | Quando o post for sobre logística/chegada |
| FAQ → WhatsApp | Toda resposta termina em `empresa.contato.whatsappLink` |
| Página individual → próxima saída | Quando `dependeDeMare === true` (já implementado) |

### Anchor text (regras)

- Usar nome do passeio, não "clique aqui"
- Quando o passeio tem nome curto (`nomeCurto`), preferi-lo em prosa ("o passeio para Seixas", "Areia Vermelha")
- Para FAQ: pergunta inteira ou substantivo central ("Como funciona o cancelamento?")

---

## 10. Regras de Conteúdo

| Regra | Detalhe | Onde aplica |
|-------|---------|-------------|
| Não inventar preço | Apenas o que está em `data/passeios.ts` ou `data/servicos.ts`; faltando, marcar `[CONFIRMAR COM MURILLO]` | Todo conteúdo |
| Não inventar depoimento | `DepoimentoBlock` já tem guarda `texto.startsWith("[")` — manter | Páginas de passeio + blog |
| Não publicar post raso | Mínimo 800 palavras; abaixo de 600 não vai a `published` | Blog |
| Não publicar draft no sitemap | `sitemap.ts` filtra `status === "published"` — manter como invariante | Sitemap |
| Todo artigo tem CTA WhatsApp | Mínimo 1 inline + 1 final | Blog + páginas |
| Todo artigo linka 1+ página comercial | Via `relatedPasseios` em `data/blog.ts` | Blog |
| Operacional confirmado | Horário, ponto de saída, idade mínima — confirmação Murillo antes | Páginas + blog |
| Experiência local como diferencial | Voz de Murillo, sem genéricos | Toda copy |
| Dado ausente exibido como "Consultar" | Helper `isCampoIndisponivel()` em `lib/consultar.ts` | InfoCard, ProximaSaida |
| WhatsApp via empresa.ts | `empresa.contato.whatsappLink` — nunca string literal | Todos os componentes |
| Cadastur visível | Footer + página `/sobre` (futura) + schema TravelAgency | Site inteiro |
| Sem stock photo | Toda foto deve ser real — placeholder bem-feito enquanto não há | Toda página |

---

## 11. Resumo Para `ESTRUTURA-SITE-COMPLETA-02`

> Seção destinada a ser copiada como input direto da próxima issue.

### Rotas necessárias (consolidação do estado atual + adições)

| Rota | Status atual | Ação para 02 |
|------|--------------|--------------|
| `/` | ativa | refinar conforme redesign aprovado |
| `/passeios/` | ativa | adicionar filtros (categoria, dependência de maré, faixa de preço) |
| `/passeios/[categoria]/` ×6 | ativas | adicionar intro editorial por categoria |
| `/passeios/[categoria]/[slug]/` ×22 | ativas | publicar fotos reais + revisar FAQ por passeio |
| `/passeios/piscinas-naturais/calendario/` | ativa (não SEO) | manter `disallow` no robots |
| `/faq/` | ativa | revisar respostas vs §8 deste dossiê |
| `/servicos/transfer-24h/` | ativa | publicar preço quando Murillo confirmar |
| `/blog/` | ativa (hub vazio) | manter "guias em preparação" até 5 posts published |
| `/blog/[slug]/` | 10 reservadas em draft | publicar 1 a cada vez, com revisão Murillo |
| `/sobre` | 404 (decisão arquitetural) | manter como bloco no Footer |
| `/sitemap.xml` | gerado | adicionar `og-image` quando publicado por passeio |
| `/robots.txt` | gerado | manter bloqueio `/sobre/` e `calendario/` |

### Estrutura do blog

- 9 clusters (`data/blog.ts` → `BlogCluster`)
- 10 posts em `draft` (slugs reservados — não mexer)
- Cada cluster tem 1 âncora + satélites (ver §6)
- Posts publicam 1 por vez, após revisão de Murillo
- Schema `Article` + `FAQPage` + `BreadcrumbList` injetados via `lib/seo.ts`
- `relatedPasseios` mínimo 1 (recomendado 2-3) por post

### Posts em draft (não publicar antes de Murillo aprovar texto + foto real)

```
/blog/o-que-fazer-em-joao-pessoa
/blog/piscinas-naturais-joao-pessoa-guia
/blog/passeio-praia-do-seixas
/blog/areia-vermelha-vale-a-pena
/blog/roteiro-3-dias-joao-pessoa
/blog/litoral-sul-joao-pessoa-o-que-fazer
/blog/litoral-norte-joao-pessoa-o-que-fazer
/blog/tabua-de-mares-piscinas-naturais
/blog/joao-pessoa-com-criancas
/blog/transfer-aeroporto-joao-pessoa
```

### Regras de sitemap

- Apenas `published` entra no sitemap (`status === "published"` → incluir; `draft` → excluir)
- `/sobre` excluído (decisão arquitetural — bloco no footer)
- `/passeios/piscinas-naturais/calendario/` excluído (página interna)
- Hub `/blog/` sempre incluído (mesmo sem posts published)
- Adicionar `lastmod` por página (Fase 2 — hoje usa data de build)

### Regras de CTA

- WhatsApp único — sempre `empresa.contato.whatsappLink`
- Sticky em página de passeio — IDs `hero-section` e `cta-final` não podem mudar
- Touch target ≥ 44px em todos os CTAs
- Texto: começa com verbo de ação ("Reservar", "Solicitar", "Falar")
- Toda página termina em CTA — nenhuma exceção

### Regras de conteúdo

- 100% dos dados de passeio vêm de `data/passeios.ts` — nunca hardcoded
- Campos ausentes (`[CONSULTAR]`, `null`) tratados por `isCampoIndisponivel()`
- Sem invenção de preço, horário, idade mínima, depoimento, parceria
- Voz local + sem clichê turístico
- Sem urgência falsa

### Prioridades de implementação (sequência sugerida)

| Ordem | Bloco | Por quê primeiro |
|-------|------|------------------|
| 1 | Fotos reais para 3 prioritários (Seixas, Areia Vermelha, Litoral Sul) | Maior alavancagem em conversão |
| 2 | TrustBlock visível em todas as páginas (Cadastur + Google rating) | Ataca objeção universal #2 e #7 |
| 3 | FAQ revisada por passeio (vs matriz §8) | Ataca objeções #4, #5, #6, #11 |
| 4 | Transfer 24h com preço por trajeto confirmado | Desbloqueia conversão operacional |
| 5 | Filtros em `/passeios/` (categoria, maré, preço) | Reduz fricção MOFU |
| 6 | Intro editorial por categoria (`/passeios/[categoria]/`) | SEO mid-funnel |
| 7 | Top 3 posts publicados (1, 2, 3 do top 10) | Tráfego TOFU sem fricção |
| 8 | Schema `LocalBusiness/TravelAgency` + NAP no footer | Local pack |
| 9 | Open Graph por passeio (gerar `og-{slug}.webp`) | Compartilhamento social |
| 10 | Restantes 7 posts (4-10 do top 10) | Profundidade editorial |

### Alertas de risco

| # | Risco | Mitigação |
|---|------|-----------|
| 1 | Publicar post sem revisão Murillo | Mantê-los em `draft` até checklist editorial passar |
| 2 | Hardcode de preço/horário em componente | Code review obrigatório — vem de `data/*.ts` |
| 3 | Stock photo em página comercial | Reservar foto real antes do go-live |
| 4 | URLs alteradas após sitemap submetido | Slug é congelado — qualquer mudança exige `301` |
| 5 | Confusão de marca com "Vai Passear" | Title sempre `... — Vem Passear em Jampa`; footer com nome completo + CNPJ |
| 6 | Schema duplicado/inválido | Validar com Rich Results Test após cada release |
| 7 | Inventar capacidade da lancha privativa | Marcar `[CONFIRMAR COM MURILLO]` em vez de chutar |
| 8 | Esquecer `disallow` em `/sobre` e `/calendario` | Robots.txt no `npm run build` é regression-test fácil |
| 9 | Publicar transfer com preço errado | `preco: null` continua até Murillo confirmar; CTA é "solicitar cotação" |
| 10 | Post raso indexar antes de revisão | Sitemap respeita `published`; preview interno por feature flag em Fase 2 |

---

## Pendências para Murillo confirmar (bloqueadores específicos)

| Item | Onde aparece | Bloqueia o quê |
|------|-------------|----------------|
| Preço por trajeto do transfer 24h | `data/servicos.ts` (`preco: null`) | Página de transfer + post 10 |
| Incluso/não incluso do transfer | mesmo | mesmo |
| Horário exato do Pôr do Sol Jacaré por época | `data/passeios.ts` (`saida` + observação) | Página + post 12 (futuro) |
| Capacidade da lancha privativa | `data/passeios.ts` (`observacoes` da lancha) | Página + post 18 |
| Preço do quadriciclo solto (não combo) | 2 entradas com `[CONSULTAR]` | Página + post 13 |
| Preço do mergulho com cilindro | `data/passeios.ts` | Página de mergulho |
| Transfer disponível para Cabedelo (Areia Vermelha, Jacaré) e Penha | múltiplos `[CONSULTAR]` | Páginas e posts relacionados |
| Depoimento real de cliente Seixas | `data/passeios.ts` (placeholder) | Página Seixas |
| Formas de pagamento aceitas | FAQ geral | Objeção #12 + FAQ |
| `anos_operacao` da empresa | `data/empresa.ts` (`null`) | Bloco confiança Home + `/sobre` |

---

## Sources

Pesquisa realizada em 2026-05-02. URLs principais consultadas:

**Concorrentes diretos:**
- [Turismo João Pessoa](https://turismojoaopessoapb.com/)
- [PNP - Agência de Turismo](https://pnp.tur.br/)
- [Jampatur](https://jampatur.com/)
- [Paraíba Travel - Passeio em João Pessoa](https://passeiosemjoaopessoa.com.br/)
- [Cabo Branco Receptivo](https://cabobrancoreceptivo.com.br/)
- [Amaral Tur Passeios](https://www.amaralturpasseios.com.br/)
- [Quality Receptivo](https://www.qualityreceptivo.com.br/)
- [Luck Receptivo](https://luckreceptivo.com.br/)
- [Maresia Tour](https://www.maresiatour.com.br/)
- [Red Rock](https://redrock.com.br/)
- [Férias em João Pessoa (Paraíba Náuticos)](https://feriasemjoaopessoa.com.br/)
- [Vai Passear](https://vaipassear.com/)

**Aggregadores:**
- [TripAdvisor — João Pessoa attractions](https://www.tripadvisor.com/Attractions-g303428-Activities-Joao_Pessoa_State_of_Paraiba.html)
- [Civitatis — Day trip Tambaba/Coqueirinho](https://www.civitatis.com/en/joao-pessoa/day-trip-amor-tambaba-coqueirinho-beaches/)
- [Viator — Passeios em João Pessoa](https://www.viator.com/Joao-Pessoa/d30974-ttd)
- [TourFácil — Catamarã Seixas](https://www.tourfacil.com.br/joao-pessoa/passeios/passeio-de-catamara-nas-piscinas-do-seixas-com-transporte-ida-e-volta)
- [TripAdvisor — Picãozinho](https://www.tripadvisor.com/Attraction_Review-g303428-d2342321-Reviews-Picaozinho-Joao_Pessoa_State_of_Paraiba.html)
- [TripAdvisor — Piscinas do Seixas](https://www.tripadvisor.com/Attraction_Review-g303428-d8342655-Reviews-Piscinas_Naturais_do_Seixas-Joao_Pessoa_State_of_Paraiba.html)
- [TripAdvisor — Areia Vermelha Marine Park](https://www.tripadvisor.com/Attraction_Review-g793398-d4474635-Reviews-Areia_Vermelha_Marine_State_Park-Cabedelo_State_of_Paraiba.html)
- [TripAdvisor — Red Rock](https://www.tripadvisor.com/Attraction_Review-g2036919-d10637529-Reviews-Red_Rock_Turismo-Conde_State_of_Paraiba.html)

**Portais editoriais:**
- [Melhores Destinos — O que fazer em JP](https://guia.melhoresdestinos.com.br/o-que-fazer-em-joao-pessoa.html)
- [Melhores Destinos — Passeios em JP](https://guia.melhoresdestinos.com.br/passeios-em-joao-pessoa.html)
- [Melhores Destinos — Piscinas Seixas](https://guia.melhoresdestinos.com.br/piscinas-naturais-do-seixas-em-joao-pessoa.html)
- [Melhores Destinos — Coqueirinho](https://guia.melhoresdestinos.com.br/coqueirinho-joao-pessoa.html)
- [Melhores Destinos — Pôr do sol Jacaré](https://guia.melhoresdestinos.com.br/por-do-sol-na-praia-do-jacare-109-2235-l.html)
- [Melhores Destinos — Areia Vermelha](https://guia.melhoresdestinos.com.br/ilha-de-areia-vermelha-109-2236-l.html)
- [Viaje na Viagem — JP destino](https://www.viajenaviagem.com/destino/joao-pessoa/o-que-fazer/)
- [Viaje na Viagem — quando ir](https://www.viajenaviagem.com/destino/joao-pessoa/quando-ir/)
- [Viaje na Viagem — tábua de marés](https://www.viajenaviagem.com/como-usar-tabua-mares/)
- [Viciada em Viajar — Roteiro 3 dias](https://www.viciadaemviajar.com/o-que-fazer-em-joao-pessoa-pb-roteiro-de-3-dias-de-viagem/)
- [Viciada em Viajar — Passeios](https://www.viciadaemviajar.com/passeios-em-joao-pessoa/)
- [hiSelly — Roteiro 3 dias](https://hiselly.com.br/blog/novidades/o-que-fazer-em-joao-pessoa-roteiro-de-3-dias/)
- [Civitatis Magazine — JP](https://www.civitatis.com/blog/pt-br/o-que-fazer-joao-pessoa/)
- [Hplus — Roteiro 3 dias](https://www.hplus.com.br/roteiro-de-3-dias-em-joao-pessoa-o-que-fazer-e-onde-ir/)
- [Hplus — Crianças](https://www.hplus.com.br/passeios-para-fazer-com-criancas-em-joao-pessoa/)
- [Jornal da Paraíba — Melhores passeios](https://jornaldaparaiba.com.br/cotidiano/passeios-joao-pessoa)
- [Jornal da Paraíba — Crianças](https://jornaldaparaiba.com.br/qualaboa/o-que-fazer-em-joao-pessoa-com-criancas)
- [Mundo Viajante — Areia Vermelha](https://www.mundoviajante.com/ilha-de-areia-vermelha-em-joao-pessoa/)
- [Esse Mundo é Nosso — Areia Vermelha](https://www.essemundoenosso.com.br/areia-vermelha-joao-pessoa/)
- [Desbravando JP — Areia Vermelha](https://desbravandojoaopessoa.com.br/areia-vermelha-paraiba/)
- [Desbravando JP — Roteiros](https://desbravandojoaopessoa.com.br/roteiro-em-joao-pessoa-como-aproveitar-o-melhor-da-cidade-em-3-5-ou-7-dias/)
- [Roteirese — Picãozinho ou Seixas](https://www.roteirese.com/post/qual-piscina-natural-escolher-em-joao-pessoa-pb)
- [Quanto Custa Viajar — Seixas](https://quantocustaviajar.com/blog/piscinas-naturais-do-seixas-joao-pessoa/)
- [Construtora Brascon — Crianças](https://construtorabrascon.com.br/locais-para-ir-com-criancas-em-jp/)

**Tábua de marés:**
- [Destino a Bordo — Tábua 2026](https://www.destinoabordo.com.br/tabua-de-mare-de-joao-pessoa-2026/)
- [Quality Receptivo — Tábua 2026](https://www.qualityreceptivo.com.br/mare-2023)
- [Férias em JP — Tábua](https://feriasemjoaopessoa.com.br/tabua-de-mares/)
- [Paraíba Travel — Horários por maré](https://passeiosemjoaopessoa.com.br/tabuademares)

**Aeroporto:**
- [Aena Brasil — Castro Pinto](https://www.aenabrasil.com.br/pt/aeroportos/aeroporto-internacional-de-joao-pessoa-presidente-castro-pinto/index.html)
- [Wikipedia — Castro Pinto](https://en.wikipedia.org/wiki/Presidente_Castro_Pinto_International_Airport)

**Procon (referência de preço de mercado):**
- [Procon-PB — preços passeios náuticos](https://procon.pb.gov.br/noticias/confira-precos-de-passeios-nauticos-em-joao-pessoa)

---

*Documento gerado em 2026-05-02 como insumo da issue PESQUISA-AGENCIA-01. Próxima issue: ESTRUTURA-SITE-COMPLETA-02.*
