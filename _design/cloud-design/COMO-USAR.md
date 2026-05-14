# Como usar o PROMPT-FINAL-CLOUD-DESIGN.md

---

## 1. Arquivos para anexar ao Claude Design

Anexe **na ordem abaixo** — do mais importante ao complementar:

### Obrigatórios
| Arquivo | Por quê |
|---------|---------|
| `_site/tailwind.config.ts` | Mostra a paleta de cores e tokens exatos do projeto |
| `_site/data/passeios.ts` (primeiras 120 linhas) | Mostra a estrutura de dados — quais campos existem para o Claude usar |
| `_site/components/PasseioCard.tsx` | Componente atual de card — ele vai saber o que está substituindo |
| `_site/components/HeroBlock.tsx` | Hero atual |
| `_site/components/CTAFinal.tsx` | CTA atual — para o Claude ter referência do que melhorar |

### Complementares (se quiser contexto mais profundo)
| Arquivo | Por quê |
|---------|---------|
| `_site/app/passeios/[categoria]/[slug]/page.tsx` | Template completo da página de passeio |
| `_site/lib/gallery.ts` | Lógica atual de galeria |
| `_site/components/PasseioGallery.tsx` | Galeria atual |

---

## 2. Prints do site para enviar

Tire prints **antes de iniciar a sessão** com o Claude Design:

### Prioritários
- [ ] Home completa (mobile 375px)
- [ ] Home completa (desktop 1280px)
- [ ] Página do Seixas — hero + início do conteúdo (mobile)
- [ ] Página do Seixas — galeria e CTA (mobile)
- [ ] Card de passeio (mobile, com badge visível se possível)
- [ ] Bloco de avaliações atual

### Opcionais
- [ ] Página de tábua de marés atual
- [ ] Lista de passeios (página `/passeios`)

**Dica:** use o DevTools do Chrome para simular mobile (F12 → ícone de celular → selecionar "iPhone 12 Pro" ou similar, 390px de largura).

---

## 3. Fotos para priorizar

Mostre ao Claude Design fotos reais do acervo para ele entender o estilo visual:

### Melhores fotos para referência
| Foto | Onde está |
|------|-----------|
| Drone casal sobre recifes com ondas | `_site/public/images/passeios/seixas/hero-01.jpg` |
| Drone catamarã sobre recifes de Picaozinho | `_site/public/images/passeios/picaozinho/hero-01.jpg` |
| Kayak laranja + plataformas Areia Vermelha | `_site/public/images/passeios/areia-vermelha/hero-01.jpg` |
| Praia do litoral sul com morros verdes | `_site/public/images/passeios/litoral-sul/hero-01.jpg` |

**Por quê essas:** são as melhores fotos disponíveis agora e serão as primeiras a aparecer no site. O Claude Design precisa ver a qualidade e o estilo para calibrar a proposta visual.

---

## 4. O que fazer depois que o Claude Design entregar

### Passo a passo pós-entrega

**4.1 — Revisar e validar**
- Confirme que as cores usadas são exatamente `#107997` (teal) e `#092238` (navy)
- Verifique se o CTA WhatsApp está em posição dominante em todos os componentes mobile
- Confirme que nenhum layout esconde o preço ou o botão abaixo da dobra no mobile

**4.2 — Aprovar componente por componente**
Não aprove tudo de uma vez. Siga a ordem:
1. Card de passeio → aprovado → implementar
2. Hero da página individual → aprovado → implementar
3. Badges → aprovado → implementar
4. E assim por diante

**4.3 — Pedir para o Claude Code implementar**
Quando tiver um componente aprovado, abra o Claude Code e diga:
> "Implemente o novo [nome do componente] conforme a especificação Tailwind entregue pelo Claude Design. Não altere outros arquivos. Mostre o diff antes de qualquer commit."

**4.4 — Testar no celular real**
Após cada implementação, teste no seu celular (não só no DevTools):
- Todos os botões são fáceis de tocar (mínimo 44px de altura)
- O CTA WhatsApp está visível sem scroll
- As fotos carregam rápido
- O texto é legível sem zoom

**4.5 — Só commitar depois de testar**
Nunca commitar sem ver no navegador. Use:
```
npm run dev
```
Depois aprovar visualmente, aí sim fazer o commit.

---

## Dica final

Se o Claude Design entregar algo que você não gostou, não rejeite tudo. Diga exatamente o que está errado:

> "O card ficou bom, mas o badge está grande demais e o botão WhatsApp está muito discreto. Refaz só esses dois pontos."

Feedback específico gera resultado melhor do que recomeçar do zero.
