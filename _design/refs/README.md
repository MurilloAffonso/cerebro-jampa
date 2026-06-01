# _design/refs/ — Referências Visuais

**Criado em:** 2026-05-29 (Fase 2 — limpeza técnica)
**Origem:** consolidação de 26 imagens que estavam soltas na raiz do projeto.

## Subpastas

### `screenshots-2026-05/`
Capturas do site em produção (desktop e mobile) usadas para revisão visual e validação de regressões. **Não são assets do site.**

| Arquivo | O que mostra |
|---|---|
| `hero-desktop.png` | Hero em desktop |
| `home-live.png` | Home publicada |
| `mobile-full.jpeg` | Home mobile completa |
| `mobile-home-current.png` | Home mobile no estado atual |
| `passeio-detail.png` | Página de passeio — detalhe |
| `passeio-fresh.png` | Página de passeio recém-carregada |
| `passeio-page.png` | Página de passeio (rolagem completa) |
| `screen-home.jpg` | Captura do home |
| `scrolled-header.png` | Header em estado scrolled |
| `seixas-full.png` | Captura completa da página Seixas |
| `t-home.jpg` | Thumbnail da home |

### `validacao-layouts-2026-05/`
Imagens de validação por breakpoint geradas em sessões recentes.

| Arquivo | Breakpoint |
|---|---|
| `home-1440.png` | Home @ 1440px |
| `val-home-1440.png` | Home @ 1440px (validação) |
| `val-mobile-375.png` | Mobile @ 375px (validação) |
| `val-passeios-1440.png` | Hub `/passeios/` @ 1440px (validação) |
| `val-seixas-1440.png` | Página Seixas @ 1440px (validação) |

### `candidatos-assets-passeios/`
**Pendência HITL** — fotos com aparência de **candidatos a virar assets reais** dos passeios. **Nenhuma é referenciada no código** (validado em 2026-05-29 via Grep). Antes de promover para `_site/public/images/passeios/{slug}/`, é necessário:

1. Murillo confirmar autoria/direito de uso de cada foto
2. Confirmar a qual passeio cada uma pertence
3. Renomear seguindo o padrão `[slug]-gallery-NN-descricao.jpg` (ver `_site/public/images/passeios/README.md`)
4. Otimizar (sharp/squoosh) para WebP + JPG fallback
5. Atualizar `_site/data/passeios.ts` no campo `galleryImages` do passeio correspondente

| Arquivo | Provável uso (a confirmar) |
|---|---|
| `r-areia-vermelha.jpg` | Areia Vermelha catamarã — galeria |
| `r-areia2.jpg` | Areia Vermelha — outra foto |
| `r-home.jpg` | Home — possível hero alternativo |
| `r-litoral-sul.jpg` | Litoral Sul Clássico — galeria |
| `r-logo-100.jpg` | Logo — 100px (formato JPG suspeito; logo deveria ser SVG/PNG transparente) |
| `r-logo-64.jpg` | Logo — 64px (idem) |
| `r-passeios.jpg` | Hub `/passeios/` — possível cover |
| `r-picaozinho.jpg` | Picãozinho — galeria |
| `r-seixas-hero.jpg` | Seixas — hero |
| `r-seixas-top.jpg` | Seixas — top |

**Regra:** nunca mover essas fotos direto para `_site/public/` sem aprovação explícita.
