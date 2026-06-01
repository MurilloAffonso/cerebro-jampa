# Memória: Decisões

Registro de decisões importantes tomadas ao longo do projeto. Cada entrada contém contexto, razão e impacto.

---

## 2026-04-25 — Criação da Base (Sessão 0 — Bootstrap)

### Decisão: Vault Obsidian como Memória Persistente

**Decisão:** Sistema central de conhecimento = pastas Obsidian (CLAUDE.md, skills, templates, conhecimento, memória)

**Razão:** 
- Murillo consegue acessar/editar direto (human-readable)
- Versionável com Git (se quiser)
- Não depende de APIs externas (n8n, etc.)
- Estrutura clara separando conhecimento fixo × memória viva × entrega

**Impacto:** Toda operação de IA passa por ler/escrever arquivos markdown aqui. Base de verdade centralizada.

**Status:** ✅ Implementado

---

### Decisão: Fase 1 = SITE + SEO LOCAL (não automação)

**Decisão:** Focar exclusivamente em estruturar conteúdo do site. Sem n8n, WhatsApp bot, ou CRM nesta fase.

**Razão:**
- Murillo precisa de website funcional vendendo passeios (é o negócio)
- Automação é secundária se não tem conteúdo bom
- Mais fácil aprovar e iterar site com human-in-the-loop
- Fase 2 pode vir depois com menos risco

**Impacto:** Skills, templates, documentação toda focada em site. Sem prompts de bot/automação.

**Status:** ✅ Implementado

---

### Decisão: 6 Skills Especializadas (não 1 super-skill)

**Decisão:** Criar 6 skills separadas (estrategista, UX, SEO, copywriter, briefing, arquiteto) em vez de 1 grande skill de "criar página"

**Razão:**
- Cada especialista foca em sua área (separa responsabilidades)
- Fácil de terceirizar depois (hire designer? skill briefing-designer fica)
- Documentação clara de quando usar cada uma
- Menos erro vs. mega-prompt gigante

**Impacto:** Fluxo de trabalho é serial (estrategista → copywriter → designer), não paralelo. Planejamento rigoroso = melhor qualidade.

**Status:** ✅ Implementado

---

### Decisão: Placeholders Explícitos, Nunca Inventar Fatos

**Decisão:** Dados não confirmados = `[CONFIRMAR COM MURILLO: ...]` em vermelho. NUNCA gerar ficção sobre empresa/passeios/preços.

**Razão:**
- Evita erros de marketing (invention = perda de confiança)
- Força iteração com Murillo (feedback loop claro)
- Documenta lacunas (sabe exatamente o que está faltando)

**Impacto:** Rascunhos terão buracos até dados reais. Mas zero alucinações sobre negócio.

**Status:** ✅ Implementado

---

### Decisão: Mobile-First em Tudo

**Decisão:** Toda página, wireframe, briefing = pensada em 320px mobile PRIMEIRO. Desktop é adaptação.

**Razão:**
- 94% do tráfego de turismo é mobile (chegando em JP com celular)
- Conversa em WhatsApp é mobile (CTA tem que funcionar ali)
- Mobile bem feito = desktop gratuito (o oposto não é verdade)

**Impacto:** Skills de UX/design focam em mobile. Responsiveness é requisito, não extra.

**Status:** ✅ Implementado

---

### Decisão: Português em TUDO

**Decisão:** Toda documentação, comando, skill, template, comentário = português. Não misto português-inglês.

**Razão:**
- Murillo é falante nativo de português (mais confortável)
- Projeto é para João Pessoa (contexto local)
- Evita confusão lingüística

**Impacto:** Nenhuma chave em inglês em skills ou templates. Comandos em português também (se possível).

**Status:** ✅ Implementado

---

### Decisão: Progressive Disclosure (Não Mega-Documentos)

**Decisão:** Cada skill = arquivo curto focado, cada template = molde simples, cada arquivo = só necessário. Não documentos gigantes.

**Razão:**
- Fácil navegar vault
- Fácil atualizar (mudar 1 skill não afeta outras)
- Menos contexto poluído

**Impacto:** CLAUDE.md é regra-mãe, skills são especialistas, templates são moldes, comandos são atalhos.

**Status:** ✅ Implementado

---

## Próximas Decisões Esperadas

Após sessão com Murillo, esperamos decidir:

- [ ] **Passeio Hero:** qual é o passeio principal a destacar?
- [ ] **Categorias de Passeios:** quais categorias (Litoral/Urbano/Trilhas/etc)?
- [ ] **Tom de Voz:** formal ou conversacional? Com regionalismos?
- [ ] **Lançamento:** tudo junto ou gradual?
- [ ] **Blog:** fazer desde o início ou só site + blog depois?

---

*Última atualização: 2026-04-25*

---
