# Imagens — Piscinas Naturais do Seixas

**Pasta:** `_site/public/images/passeios/seixas/`
**Status:** placeholders temporários — substituir por fotos reais antes do deploy final

---

## Finalidade

Esta pasta contém os assets de imagem da página `/passeios/piscinas-naturais/seixas`.

Os arquivos atuais são SVGs placeholder criados para:
- Permitir que o designer monte o Figma com proporções reais
- Permitir que o programador implemente os componentes sem depender de fotos finais
- Servir como referência visual temporária em ambiente de desenvolvimento

---

## Arquivos desta pasta

| Arquivo | Uso na página | Dimensão alvo (foto real) | Formato final |
|---------|--------------|--------------------------|---------------|
| `hero-01.svg` | Hero principal (C2) — acima da dobra | 1920 × 600px | WebP + JPG fallback |
| `galeria-01.svg` | Galeria / Bloco I2 (descrição) | 800 × 400px | WebP + JPG fallback |
| `galeria-02.svg` | Galeria / uso secundário | 800 × 400px | WebP + JPG fallback |
| `galeria-03.svg` | Galeria / catamarã ou embarque | 800 × 400px | WebP + JPG fallback |
| `galeria-04.svg` | Galeria / corais subaquáticos | 800 × 400px | WebP + JPG fallback |
| `galeria-05.svg` | Galeria / praia de Tambaú | 800 × 400px | WebP + JPG fallback |
| `galeria-06.svg` | Galeria / nascer do sol / ponto oriental | 800 × 400px | WebP + JPG fallback |

---

## Instrução de substituição futura

Os arquivos atuais são `.svg` (placeholders). As fotos reais serão `.webp` e `.jpg` — extensões diferentes, não uma sobreescrita direta. O processo correto é:

**Quando Murillo enviar as fotos reais:**

1. Converter cada foto para WebP (principal) + JPG (fallback), usando Squoosh, ImageOptim ou similar
2. Comprimir para menos de **200KB por imagem**
3. Nomear os arquivos mantendo o mesmo **slug lógico** — apenas mudando a extensão:

   | Placeholder atual | Foto real (principal) | Fallback |
   |-------------------|-----------------------|---------|
   | `hero-01.svg` | `hero-01.webp` | `hero-01.jpg` |
   | `galeria-01.svg` | `galeria-01.webp` | `galeria-01.jpg` |
   | `galeria-02.svg` | `galeria-02.webp` | `galeria-02.jpg` |
   | `galeria-03.svg` | `galeria-03.webp` | `galeria-03.jpg` |
   | `galeria-04.svg` | `galeria-04.webp` | `galeria-04.jpg` |
   | `galeria-05.svg` | `galeria-05.webp` | `galeria-05.jpg` |
   | `galeria-06.svg` | `galeria-06.webp` | `galeria-06.jpg` |

4. Copiar os arquivos `.webp` e `.jpg` para esta mesma pasta — os `.svg` podem ser mantidos como backup até validação final
5. **A Etapa 6 (`programador-de-site`) é responsável por atualizar as referências nos componentes** de `.svg` → `.webp` quando as fotos reais entrarem

> **Regra inviolável:** preservar o slug lógico (`hero-01`, `galeria-01` ... `galeria-06`). Não mudar a numeração. Não mudar a ordem da galeria. Os componentes referenciam esses slugs — qualquer mudança quebra as referências.

---

## Alt texts obrigatórios (definidos em `04-seo-local-turismo.md`)

| Arquivo | Alt text exato |
|---------|---------------|
| `hero-01` | `Piscinas naturais de Seixas com coral e água cristalina durante maré baixa em João Pessoa` |
| `galeria-01` | `Turistas flutuando nas piscinas naturais de Seixas durante maré baixa em João Pessoa, Paraíba` |
| `galeria-03` | `Catamarã partindo de Tambaú em direção às piscinas naturais de Seixas, João Pessoa` |
| `galeria-04` | `Coral roxo e amarelo nas piscinas naturais de Seixas, ponto mais oriental das Américas` |

---

## O que fotografar (para Murillo)

| Imagem | O que mostrar | Evitar |
|--------|--------------|--------|
| Hero | Água verde-azul translúcida, coral visível, luz de manhã | Filtro HDR, pôr do sol, coqueiro genérico |
| Galeria 01 | Turistas flutuando, água rasa, coral ao fundo | Pose forçada, expressão tensa |
| Galeria 02 | Snorkel — rosto próximo da água, coral visible | Equipamento genérico sem contexto local |
| Galeria 03 | Catamarã em movimento ou ancorado com turistas | Foto de catálogo genérico |
| Galeria 04 | Coral de perto — cores vivas, fundo nítido | Coral morto, água turva |
| Galeria 05 | Praia de Tambaú ao amanhecer, ponto de embarque | Praia lotada sem identidade |
| Galeria 06 | Horizonte de Seixas — ponto mais oriental | Foto sem referência geográfica |

---

*Criado em: 2026-04-26 | Status: placeholders temporários | Substituir antes do deploy*
