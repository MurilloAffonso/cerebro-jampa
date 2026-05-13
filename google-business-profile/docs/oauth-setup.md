# OAuth & Cloud Setup — Passo a Passo

**Pré-requisito não-negociável:** Murillo deve ter 2FA ativo na conta Google antes de iniciar este setup.

**Tempo total estimado:** 40-60 min de operação + tempo de aprovação Google (5-30 dias) para acesso à GMB v4.9.

---

## Passo 1 — Criar Google Cloud Project

1. Acessar [console.cloud.google.com](https://console.cloud.google.com)
2. Topo da tela: clicar no seletor de projeto → "Novo projeto"
3. Preencher:
   - **Nome do projeto:** `vem-passear-jampa-gbp`
   - **ID do projeto:** aceitar sugerido ou personalizar (não pode ser alterado depois)
   - **Organização:** sem organização (conta pessoal) ou organização da empresa
4. Clicar **Criar**
5. Aguardar 30-60 segundos. Selecionar o projeto recém-criado.

**Tempo:** 5 min.

---

## Passo 2 — Habilitar APIs no projeto

Para cada API abaixo: ir em **APIs e Serviços → Biblioteca**, pesquisar pelo nome do serviço, clicar e **Ativar**.

APIs a habilitar (na ordem):

1. `My Business Account Management API` (`mybusinessaccountmanagement.googleapis.com`)
2. `My Business Business Information API` (`mybusinessbusinessinformation.googleapis.com`)
3. `My Business Q&A API` (`mybusinessqanda.googleapis.com`)
4. `My Business Place Actions API` (`mybusinessplaceactions.googleapis.com`)
5. `My Business Verifications API` (`mybusinessverifications.googleapis.com`)
6. `My Business Notifications API` (`mybusinessnotifications.googleapis.com`)
7. `Business Profile Performance API` (`businessprofileperformance.googleapis.com`)

**NÃO habilitar:**
- Lodging API — não se aplica
- Business Calls API — marginal para Vem Passear

**A GMB v4.9 legacy NÃO aparece na Biblioteca padrão.** Acesso a ela é solicitado separadamente (Passo 3).

**Tempo:** 15 min.

---

## Passo 3 — Solicitar acesso à GMB v4.9 legacy

A v4.9 é restrita. Acesso é solicitado manualmente e aprovado pelo time do Google.

1. Acessar o formulário oficial:
   `https://support.google.com/business/contact/api_default`
2. Preencher:
   - **Project ID:** mesmo do Passo 1 (`vem-passear-jampa-gbp`)
   - **Tipo de uso:** "Manage my own business location"
   - **Motivo:** descrever de forma clara e honesta. Modelo:
     > "Sou proprietário da agência Vem Passear Jampa (CNPJ 52.077.577/0001-03), registrada no Cadastur. Quero usar a API para responder avaliações com mais consistência, publicar atualizações semanais, gerenciar fotos do perfil e ler métricas de performance, com fluxo de aprovação humana antes de qualquer publicação. Site: vempassearjampa.com.br."
   - **URL do site:** `vempassearjampa.com.br`
   - **Volume estimado:** "baixo (1-10 mutações/dia, todas com aprovação humana)"
3. Enviar.
4. Aguardar e-mail de aprovação. **Tempo típico: 5-30 dias.**

**Tempo:** 10 min preenchimento + aprovação assíncrona.

---

## Passo 4 — Configurar OAuth consent screen

1. Cloud Console → **APIs e Serviços → Tela de permissão OAuth**
2. **Tipo de usuário:** Externo (a conta usada é pessoal, não Workspace)
3. Clicar **Criar**

**Tela 1 — Informações do app:**
- Nome do app: `Vem Passear Jampa GBP Manager`
- E-mail de suporte: e-mail principal do Murillo
- Logo do app: opcional, pode pular
- Domínio do aplicativo: `vempassearjampa.com.br`
- Política de privacidade: `vempassearjampa.com.br/privacidade` (se existir; pode pular para uso interno)
- E-mail de contato do desenvolvedor: mesmo do suporte

**Tela 2 — Escopos:**
- Clicar **Adicionar ou remover escopos**
- Buscar e marcar: `https://www.googleapis.com/auth/business.manage`
- Salvar

**Tela 3 — Usuários de teste:**
- Adicionar o e-mail do Murillo (proprietário do GBP) como usuário de teste
- Limite enquanto o app está em "Modo de teste": 100 usuários

**Tela 4 — Resumo:**
- Revisar e voltar ao painel

**Status do app:** vai ficar em **"Modo de teste"** — perfeito para uso pessoal. **Não publicar o app** (publicar dispara verificação Google que pode levar semanas e não é necessário para uso próprio).

**Tempo:** 20 min.

---

## Passo 5 — Criar credencial OAuth 2.0 (Desktop)

1. Cloud Console → **APIs e Serviços → Credenciais**
2. **Criar credencial → ID do cliente OAuth**
3. **Tipo de aplicativo:** `Aplicativo para computador` (Desktop)
4. **Nome:** `vem-passear-jampa-gbp-cli`
5. Criar

Será exibido `Client ID` e `Client Secret` + botão para baixar `credentials.json`.

**Ação:**
- Baixar `credentials.json` → mover para `google-business-profile/credentials.json`
- **Confirmar que `credentials.json` está no `.gitignore` antes de qualquer commit**
- Copiar `Client ID` e `Client Secret` para `.env` local (NÃO `config.example.env`)

**Tempo:** 5 min.

---

## Passo 6 — Conferir titularidade do perfil

1. Abrir [business.google.com](https://business.google.com)
2. Selecionar perfil "VempassearJampa passeios e turismo João Pessoa"
3. Menu lateral → **Usuários**
4. Confirmar que a conta Google usada nos passos anteriores está listada como **Proprietário principal** (não apenas Gerente)

**Se não estiver como proprietário:** transferir titularidade antes de seguir. Gerentes têm acesso limitado em algumas APIs.

**Tempo:** 1-2 min.

---

## Passo 7 — Primeiro fluxo OAuth (Fase 2, ainda não agora)

Quando a Fase 2 começar:

1. Implementar `scripts/auth/login.ts` usando biblioteca `googleapis`
2. Rodar uma única vez: `npx tsx scripts/auth/login.ts`
3. Script abre browser → Murillo autoriza → script captura `refresh_token`
4. `refresh_token` é salvo em `.env` (apenas localmente)
5. A partir desse ponto, todos os scripts usam o refresh token para gerar access tokens sob demanda

**Não fazer agora. Apenas documentar para Fase 2.**

---

## Proteção de tokens — regras

### O que NUNCA pode acontecer

- ❌ Commitar `.env`, `credentials.json`, `token.json` ou `refresh_token.json`
- ❌ Colar refresh token em chat (incluindo este chat)
- ❌ Copiar tokens para pastas sincronizadas com nuvem pública (OneDrive público, Dropbox compartilhado)
- ❌ Usar GitHub Actions ou CI/CD com esses tokens sem cofre adequado (Secret Manager do GCP)
- ❌ Compartilhar a mesma credencial entre máquinas

### O que SEMPRE deve acontecer

- ✅ 2FA ativo na conta Google
- ✅ `.gitignore` validado antes do primeiro `git add`
- ✅ Refresh token em `.env` local apenas
- ✅ Backup de `refresh_token` em gerenciador de senhas privado (1Password, Bitwarden)
- ✅ Revisão mensal de "Apps com acesso à conta" em `myaccount.google.com/permissions`
- ✅ Em caso de suspeita de vazamento: revogar imediatamente em Cloud Console → Credenciais → o ID do cliente → "Redefinir secret" (gera novo) ou apagar e recriar

---

## Verificação final do setup

Antes de seguir para Fase 2, validar:

- [ ] Cloud Project `vem-passear-jampa-gbp` criado
- [ ] 7 APIs (modernas) habilitadas
- ✅ Solicitação de acesso à GMB v4.9 enviada — caso **0-9975000041103** (2026-05-13)
- ✅ OAuth consent screen configurada com escopo `business.manage`
- ✅ Credencial Desktop criada e `credentials.json` salvo localmente
- ✅ `credentials.json` listado no `.gitignore`
- [ ] Murillo confirmado como Proprietário principal no GBP
- [ ] 2FA ativo na conta Google
- [ ] Aprovação Google v4.9 recebida (sinal verde para Fase 2)

Quando os 9 itens estiverem ✅, abrir Fase 2 do roadmap.

---

## Status Atual — 2026-05-13

**OAuth:** ✅ Validado. Fluxo completo funcionou: navegador abriu, autorização concluída, `token.json` gerado.

**API:** ⚠️ Bloqueada por quota. A chamada a `mybusinessaccountmanagement.googleapis.com/v1/accounts` retornou erro de quota=0. Causa: acesso à GBP API ainda não aprovado pelo Google.

**Solicitação de acesso:** enviada via formulário `support.google.com/business/contact/api_default`.
- Caso: **0-9975000041103**
- Prazo informado pelo Google: **7 a 10 dias úteis**
- Data de envio: 2026-05-13
- Data limite estimada: 2026-05-27

**Próxima ação:** aguardar e-mail de aprovação do Google. Quando chegar, reexecutar `npm run test:readonly` para confirmar que a quota foi liberada e seguir para Fase 2.

---

*Documento de operação — atualizar se Google mudar o fluxo de console ou de aprovação.*
