# Memória: Canais Oficiais da Vem Passear em Jampa

**Consolidado em:** 2026-04-25  
**Status:** ✅ Confirmado com Murillo  
**Vigência:** Permanente (até mudança explícita)

---

## 1. IDENTIDADE DA EMPRESA

| Campo | Valor |
|-------|-------|
| **Nome Oficial** | Vem Passear em Jampa |
| **Domínio Oficial** | vempassearjampa.com.br |
| **CNPJ** | 52.077.577/0001-03 |
| **Cadastur** | 52.077.577 (Ativo até 16/12/2026) |

---

## 2. CANAIS DE COMUNICAÇÃO

### Instagram Oficial

| Campo | Valor |
|-------|-------|
| **Handle** | @vempassearjampa |
| **URL Oficial** | https://www.instagram.com/vempassearjampa?igsh=MTB1a2F5ZHRndmdtdQ%3D%3D&utm_source=qr |
| **Propósito** | Conteúdo visual, stories, reels, discovery |
| **Responsável** | Murillo |
| **Frequência** | 3-5 posts/semana (conteúdo real, não stock photos) |

**Regra:** Sempre usar a URL com parâmetros `?igsh=...&utm_source=qr` para rastrear origem corretamente.

---

### WhatsApp Oficial

| Campo | Valor |
|-------|-------|
| **Número** | 83 99908-7830 |
| **Número Formatado (BR)** | (83) 99908-7830 |
| **Número Formatado (International)** | +55 83 99908-7830 |
| **Link wa.me** | https://wa.me/5583999087830 |
| **Propósito** | Atendimento, reservas, dúvidas |
| **Responsável** | Murillo (responde direto) |
| **SLA Esperado** | Resposta rápida (diferencial) |

**Regra:** Link wa.me sempre usa formato `https://wa.me/55[DDD][NUMERO]` (sem hífens, sem +, sem parênteses).

---

### Google Maps / Google Meu Negócio

| Campo | Valor |
|-------|-------|
| **URL Oficial** | https://maps.app.goo.gl/Q1Q8BNC5K1k9tiyX7?g_st=ic |
| **Plataforma** | Google Maps + Google Meu Negócio |
| **Localização** | João Pessoa, Paraíba, Brasil |
| **Propósito** | Localização, avaliações, informações de contato |
| **Rating Atual** | 4.9/5 ⭐ (150+ avaliações) |
| **Frequência de Sincronização** | Semanal (validar dados) |

**Regra:** URL deve incluir parâmetro `?g_st=ic` para ratraceamento. Não usar URLs intermediárias.

---

## 3. MATRIZ DE DISTRIBUIÇÃO

| Canal | Status | Responsável | Frequência |
|-------|--------|-------------|-----------|
| **Site (vempassearjampa.com.br)** | ✅ Ativo | Claude Code | Contínuo (Phase 1-3) |
| **Instagram (@vempassearjampa)** | ✅ Ativo | Murillo | 3-5x/semana |
| **Google Meu Negócio** | ✅ Ativo | Murillo | Semanal (verificar) |
| **WhatsApp (83 99908-7830)** | ✅ Ativo | Murillo | Contínuo (24h) |
| **Google Maps** | ✅ Ativo | Google (auto) | Auto-sincroniza com GMB |
| **TripAdvisor** | 📋 Planejado | Murillo | Phase 3 |
| **Viator** | 📋 Planejado | Murillo | Phase 3 |

---

## 4. REGRA DE COERÊNCIA MULTI-CANAL

### NAP Consistente (Nome + Endereço + Telefone)

Esses dados devem estar **IDÊNTICOS** em:
- ✅ Site (footer, home, sobre)
- ✅ Google Meu Negócio
- ✅ Google Maps
- ✅ Instagram (bio)
- ✅ WhatsApp (número no link)

**Nome:** Vem Passear em Jampa  
**Telefone:** 83 99908-7830  
**Endereço:** João Pessoa, Paraíba, Brasil  
**Domínio:** vempassearjampa.com.br  

### Links de Conversão

Todos os CTAs de conversão canalizam para **WhatsApp ÚNICO:**
- ❌ NÃO: Email
- ❌ NÃO: Formulário
- ✅ SIM: WhatsApp (https://wa.me/5583999087830)

### CTA Visual Padrão

```
💬 Chamar Murillo no WhatsApp
ou
💬 Agendar no WhatsApp
ou
💬 Vamos Montar Seu Passeio
```

Todos apontam para: `https://wa.me/5583999087830`

---

## 5. COMO USAR ESTE ARQUIVO

### Você é Front-End Developer

**Para colocar um link de WhatsApp:**
```typescript
// ❌ NÃO FAÇA
href={empresa.contato.whatsapp} // Isso é número, não URL

// ✅ FAÇA
href="https://wa.me/5583999087830"
// ou use helper:
href={paginasInfo.whatsappHref}
```

**Para colocar link de Instagram:**
```typescript
// ✅ CORRETO
href="https://www.instagram.com/vempassearjampa?igsh=MTB1a2F5ZHRndmdtdQ%3D%3D&utm_source=qr"
```

**Para colocar link de Google Maps:**
```typescript
// ✅ CORRETO
href="https://maps.app.goo.gl/Q1Q8BNC5K1k9tiyX7?g_st=ic"
```

### Você é Murillo (Operador)

Se precisar mudar qualquer canal:
1. Atualize este arquivo primeiro
2. Depois avise Claude para atualizar `_site/data/empresa.ts`
3. Claude sincroniza em todos os places (site, componentes, etc)

---

## 6. HISTÓRICO DE MUDANÇAS

| Data | Campo | Antes | Depois | Confirmado Por |
|------|-------|-------|--------|----------------|
| 2026-04-25 | Todos | — | Dados confirmados | Murillo |

---

## 7. PRÓXIMOS PASSOS

- [ ] Phase 2: Integração com Google Analytics (rastrear origem Instagram vs Google vs direto)
- [ ] Phase 2: Integrar Schedule de Stories (automação)
- [ ] Phase 3: Adicionar TripAdvisor e Viator
- [ ] Phase 3: Integrar avaliações Google direto no site

---

**Status:** ✅ Fonte única de verdade estabelecida  
**Sincronização:** Todos canais apontam para aqui  
**Próxima revisão:** Quando Murillo solicitar mudança

---
