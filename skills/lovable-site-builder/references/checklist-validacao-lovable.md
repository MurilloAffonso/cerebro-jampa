# Checklist de Validação — Resultado do Lovable

**Uso:** Murillo usa este checklist ao visualizar o resultado gerado pelo Lovable antes de aprovar exportação para GitHub.
**Regra:** Exportar para GitHub somente após checklist completa sem itens críticos em aberto.
**Classificação de item:** 🔴 Crítico (não exportar sem resolver) | 🟡 Importante (resolver antes de publicar) | 🟢 Desejável (resolver antes de lançar)

---

## 1. Mobile — 320px (iPhone SE)

| # | Item | Classificação | Status |
|---|------|---------------|--------|
| 1.1 | CTA WhatsApp visível sem scroll (above the fold) | 🔴 Crítico | [ ] |
| 1.2 | Botão WhatsApp ≥ 48px de altura | 🔴 Crítico | [ ] |
| 1.3 | Nenhum texto cortado ou overflow horizontal | 🔴 Crítico | [ ] |
| 1.4 | H1 ≤ 28px, legível sem zoom | 🟡 Importante | [ ] |
| 1.5 | Body ≥ 16px, confortável para leitura | 🟡 Importante | [ ] |
| 1.6 | Imagem hero sem corte de ponto de interesse | 🟡 Importante | [ ] |
| 1.7 | FAQ accordion funciona no touch | 🟡 Importante | [ ] |
| 1.8 | Menu de navegação acessível e funcional | 🟡 Importante | [ ] |
| 1.9 | Todos os links clicáveis têm área ≥ 44×44px | 🟢 Desejável | [ ] |
| 1.10 | Espaçamento entre blocos equilibrado (não apertado) | 🟢 Desejável | [ ] |

---

## 2. Desktop — 1024px+

| # | Item | Classificação | Status |
|---|------|---------------|--------|
| 2.1 | Layout não quebra em larguras > 1024px | 🔴 Crítico | [ ] |
| 2.2 | Nenhum conteúdo em coluna única que deveria ser multi-colunas | 🟡 Importante | [ ] |
| 2.3 | Foto de Murillo visível na seção "Por Que Confiar" | 🟡 Importante | [ ] |
| 2.4 | Grid de cards (passeios, FAQ, avaliações) alinhado horizontalmente | 🟡 Importante | [ ] |
| 2.5 | Hero com imagem em formato paisagem (não cortada) | 🟡 Importante | [ ] |
| 2.6 | Sidebar ou coluna de contexto (se houver) visível e funcional | 🟢 Desejável | [ ] |

---

## 3. CTA e WhatsApp

| # | Item | Classificação | Status |
|---|------|---------------|--------|
| 3.1 | Link WhatsApp usa `https://wa.me/558399087830` (número correto) | 🔴 Crítico | [ ] |
| 3.2 | Texto pré-preenchido correto no link (`?text=Oi, quero saber sobre...`) | 🔴 Crítico | [ ] |
| 3.3 | Botão WhatsApp usa cor `#25D366` | 🔴 Crítico | [ ] |
| 3.4 | CTA final na página (último bloco antes do rodapé) | 🔴 Crítico | [ ] |
| 3.5 | Nenhum link de email como CTA principal | 🔴 Crítico | [ ] |
| 3.6 | Botão abre WhatsApp (não Email, não Formulário) | 🔴 Crítico | [ ] |
| 3.7 | CTA visível também no meio da página (não só no topo e rodapé) | 🟡 Importante | [ ] |

---

## 4. SEO

| # | Item | Classificação | Status |
|---|------|---------------|--------|
| 4.1 | H1 único, contém keyword principal | 🔴 Crítico | [ ] |
| 4.2 | Meta description inclui "João Pessoa" + CTA | 🟡 Importante | [ ] |
| 4.3 | Title ≤ 60 caracteres | 🟡 Importante | [ ] |
| 4.4 | Estrutura de headings semântica (H1 → H2 → H3) | 🟡 Importante | [ ] |
| 4.5 | FAQ seção com H2 "Perguntas frequentes" | 🟡 Importante | [ ] |
| 4.6 | Alt text descritivo em todas as imagens | 🟡 Importante | [ ] |
| 4.7 | Nenhuma duplicação de H1 | 🔴 Crítico | [ ] |
| 4.8 | Schema JSON-LD presente (verificar no handoff Claude Code — Lovable pode não gerar) | 🟢 Desejável | [ ] |

---

## 5. Copy

| # | Item | Classificação | Status |
|---|------|---------------|--------|
| 5.1 | Headline não usa clichê ("paraíso tropical", "magia das areias", "cartão postal") | 🔴 Crítico | [ ] |
| 5.2 | Copy não usa urgência falsa ("últimas vagas", "só hoje") | 🔴 Crítico | [ ] |
| 5.3 | Tom acolhedor e local — não corporativo | 🟡 Importante | [ ] |
| 5.4 | Nenhuma frase genérica que funcionaria em Natal ou Recife | 🟡 Importante | [ ] |
| 5.5 | Preço visível e claro (ex: "R$ 60 compartilhado") | 🔴 Crítico | [ ] |
| 5.6 | Duração visível (ex: "4 horas") | 🟡 Importante | [ ] |
| 5.7 | Ponto de saída visível (ex: "Praia de Tambaú, próximo ao Hotel Tambaú") | 🟡 Importante | [ ] |

---

## 6. Dados do Passeio

| # | Item | Classificação | Status |
|---|------|---------------|--------|
| 6.1 | Preço correto (confirmar contra `_conhecimento/catalogo.md`) | 🔴 Crítico | [ ] |
| 6.2 | Duração correta | 🔴 Crítico | [ ] |
| 6.3 | Ponto de saída correto (Tambaú, próximo Hotel Tambaú) | 🔴 Crítico | [ ] |
| 6.4 | "Sem idade mínima — crianças com responsável" (se Seixas/Picãozinho/Areia Vermelha) | 🟡 Importante | [ ] |
| 6.5 | Cadastur `52.077.577` visível | 🟡 Importante | [ ] |
| 6.6 | Nenhum dado inventado — tudo rastreável para o vault | 🔴 Crítico | [ ] |
| 6.7 | Lacunas `[CONFIRMAR COM MURILLO]` não aparecem no front-end | 🔴 Crítico | [ ] |
| 6.8 | Itinerário/roteiro condiz com `_conhecimento/catalogo.md` | 🔴 Crítico | [ ] |

---

## 7. Regra de Maré (apenas se `dependeDeMare: true`)

| # | Item | Classificação | Status |
|---|------|---------------|--------|
| 7.1 | Aviso de maré presente e visível | 🔴 Crítico | [ ] |
| 7.2 | `horarioBaixaMareInterno` NÃO aparece para o cliente | 🔴 Crítico | [ ] |
| 7.3 | Horário de saída exibido = `horarioSaidaExibido` (não hardcoded) | 🔴 Crítico | [ ] |
| 7.4 | Fallback "Consulte próximas saídas" presente quando sem data | 🔴 Crítico | [ ] |
| 7.5 | Link "Ver calendário de saídas" aponta para `/passeios/piscinas-naturais/calendario` | 🟡 Importante | [ ] |

---

## 8. Imagens

| # | Item | Classificação | Status |
|---|------|---------------|--------|
| 8.1 | Imagem hero é real (não stock genérico) ou placeholder explícito | 🟡 Importante | [ ] |
| 8.2 | Alt text presente e descritivo (cena + contexto local) | 🟡 Importante | [ ] |
| 8.3 | Hero carrega sem lazy-loading (imagem acima da dobra) | 🟡 Importante | [ ] |
| 8.4 | Imagem não esticada ou distorcida em nenhum breakpoint | 🟡 Importante | [ ] |
| 8.5 | Formato WebP (ou PNG/JPG de alta qualidade como fallback) | 🟢 Desejável | [ ] |

---

## 9. Consistência com CEREBRO.JAMPA

| # | Item | Classificação | Status |
|---|------|---------------|--------|
| 9.1 | Domínio `vempassearjampa.com.br` em todos os links internos | 🔴 Crítico | [ ] |
| 9.2 | Cor primária `#FF6B35` usada corretamente (CTAs, destaques) | 🟡 Importante | [ ] |
| 9.3 | Cor secundária `#004E89` usada corretamente (rodapé, blocos de contraste) | 🟡 Importante | [ ] |
| 9.4 | Fontes: Inter (body) e Lora (headings) — sem fontes genéricas como Arial ou Times | 🟡 Importante | [ ] |
| 9.5 | Murillo aparece como rosto da marca (foto em seção de confiança) | 🟡 Importante | [ ] |
| 9.6 | Avaliações exibidas são reais (transcritas por Murillo) | 🔴 Crítico | [ ] |
| 9.7 | Depoimentos exibidos são reais (aprovados por Murillo) | 🔴 Crítico | [ ] |
| 9.8 | Nenhuma parceria, destino ou serviço não confirmado no vault | 🔴 Crítico | [ ] |

---

## 10. Performance (verificar após exportação no Claude Code)

| # | Item | Classificação | Status |
|---|------|---------------|--------|
| 10.1 | Nenhum iframe carregando automaticamente (360°, YouTube) | 🔴 Crítico | [ ] |
| 10.2 | Nenhuma biblioteca desnecessária adicionada pelo Lovable | 🟡 Importante | [ ] |
| 10.3 | CSS não conflita com Tailwind do Next.js | 🟡 Importante | [ ] |
| 10.4 | Componentes exportados são funcionais (sem estado quebrado) | 🟡 Importante | [ ] |
| 10.5 | Nenhum `console.error` ou warning óbvio no código gerado | 🟢 Desejável | [ ] |

---

## Resultado da Validação

```
Passeio/Página: ___________________
Data da validação: YYYY-MM-DD
Validado por: Murillo

Itens críticos 🔴 em aberto: N
Itens importantes 🟡 em aberto: N
Itens desejáveis 🟢 em aberto: N

DECISÃO:
[ ] ✅ Aprovado para exportação GitHub
[ ] 🔄 Ajustar no Lovable antes de exportar — lista de ajustes:
    1. [ajuste 1]
    2. [ajuste 2]
[ ] ❌ Reprovar — voltar ao pacote de dados e corrigir:
    Motivo: [problema crítico]
```

---

*Versão: 1.0 | Criado: 2026-04-27 | Skill: lovable-site-builder*
