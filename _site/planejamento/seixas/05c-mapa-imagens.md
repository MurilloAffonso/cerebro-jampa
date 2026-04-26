---
tipo: mapa-de-assets
versao: 1.1
projeto_id: pagina-seixas-2026-04-26
etapa: 5c de 6
status: PLACEHOLDERS CRIADOS — substituir por fotos reais antes do deploy
data: 2026-04-26
pasta_de_assets: _site/public/images/passeios/seixas/
---

# Mapa de Imagens — Piscinas Naturais do Seixas

**Pasta de assets:** `_site/public/images/passeios/seixas/`
**Página:** `/passeios/piscinas-naturais/seixas`

---

## Mapa de uso — arquivo por bloco

| Bloco | ID | Nome do componente | Arquivo atual | Arquivo final | Dimensão alvo |
|-------|----|--------------------|---------------|---------------|---------------|
| Hero (C2) | hero | `HeroBlock` | `hero-01.svg` | `hero-01.webp` + `hero-01.jpg` | 1920 × 600px |
| Descrição (I2) | galeria-01 | `DescricaoBlock` | `galeria-01.svg` | `galeria-01.webp` + `galeria-01.jpg` | 800 × 400px |
| Galeria — snorkel | galeria-02 | `GaleriaBlock` (futuro) | `galeria-02.svg` | `galeria-02.webp` + `galeria-02.jpg` | 800 × 400px |
| Galeria — catamarã | galeria-03 | `GaleriaBlock` (futuro) | `galeria-03.svg` | `galeria-03.webp` + `galeria-03.jpg` | 800 × 400px |
| Galeria — coral | galeria-04 | `GaleriaBlock` (futuro) | `galeria-04.svg` | `galeria-04.webp` + `galeria-04.jpg` | 800 × 400px |
| Galeria — Tambaú | galeria-05 | `GaleriaBlock` (futuro) | `galeria-05.svg` | `galeria-05.webp` + `galeria-05.jpg` | 800 × 400px |
| Galeria — nascer do sol | galeria-06 | `GaleriaBlock` (futuro) | `galeria-06.svg` | `galeria-06.webp` + `galeria-06.jpg` | 800 × 400px |

---

## Status atual dos assets

| Arquivo | Status | Bloqueante? |
|---------|--------|------------|
| `hero-01.svg` | ✅ Placeholder criado | 🔴 Sim — bloqueante para aprovação final do Figma e deploy |
| `galeria-01.svg` | ✅ Placeholder criado | 🟠 Não bloqueia Figma, bloqueia deploy |
| `galeria-02.svg` | ✅ Placeholder criado | 🟡 Não bloqueia |
| `galeria-03.svg` | ✅ Placeholder criado | 🟡 Não bloqueia |
| `galeria-04.svg` | ✅ Placeholder criado | 🟡 Não bloqueia |
| `galeria-05.svg` | ✅ Placeholder criado | 🟡 Não bloqueia |
| `galeria-06.svg` | ✅ Placeholder criado | 🟡 Não bloqueia |

---

## Specs técnicas para a foto real

| Requisito | Valor |
|-----------|-------|
| Formato | WebP (principal) + JPG (fallback) |
| Tamanho máximo | < 200KB por arquivo após compressão |
| Hero `object-position` | `center 30%` — prioriza água e coral, não céu |
| Hero `loading` | `eager` (LCP crítico — nunca `lazy`) |
| Galeria `loading` | `lazy` |
| `width` e `height` | Sempre definidos no `<Image>` para evitar CLS |

---

## Procedimento de substituição futura

Os arquivos atuais são `.svg` (placeholders). As fotos reais serão `.webp` e `.jpg` — extensões diferentes, portanto **não há sobreescrita direta**. Ambos os formatos coexistirão na pasta até os SVGs serem removidos.

**Quando Murillo enviar as fotos reais:**

```
1. Converter fotos para WebP (principal) + JPG (fallback)
   → Ferramentas: Squoosh, ImageOptim ou similar

2. Comprimir para < 200KB por arquivo

3. Nomear mantendo o slug lógico — apenas mudar a extensão:
   hero-01.svg      →  hero-01.webp  +  hero-01.jpg
   galeria-01.svg   →  galeria-01.webp  +  galeria-01.jpg
   galeria-02.svg   →  galeria-02.webp  +  galeria-02.jpg
   galeria-03.svg   →  galeria-03.webp  +  galeria-03.jpg
   galeria-04.svg   →  galeria-04.webp  +  galeria-04.jpg
   galeria-05.svg   →  galeria-05.webp  +  galeria-05.jpg
   galeria-06.svg   →  galeria-06.webp  +  galeria-06.jpg

4. Copiar os .webp e .jpg para _site/public/images/passeios/seixas/
   → Os .svg permanecem como backup até validação final

5. A Etapa 6 (programador-de-site) atualiza as referências nos componentes:
   - Trocar a extensão .svg por .webp em cada <Image> ou <img>
   - Adicionar o fallback .jpg onde aplicável
   - Rodar npm run build para verificar que nenhuma referência quebrou

6. Após validação no ambiente de staging, remover os .svg da pasta
```

> **Regras invioláveis:**
> - Preservar o slug lógico: `hero-01`, `galeria-01` ... `galeria-06`
> - Não mudar a numeração
> - Não mudar a ordem da galeria
> - A atualização das referências nos componentes é responsabilidade da **Etapa 6**, não do designer

---

## Alt texts obrigatórios (fonte: `04-seo-local-turismo.md` — não alterar)

| Arquivo | Alt text exato para o `<Image>` |
|---------|--------------------------------|
| `hero-01` | `Piscinas naturais de Seixas com coral e água cristalina durante maré baixa em João Pessoa` |
| `galeria-01` | `Turistas flutuando nas piscinas naturais de Seixas durante maré baixa em João Pessoa, Paraíba` |
| `galeria-02` | `Snorkel nas piscinas naturais de Seixas — João Pessoa, Paraíba` |
| `galeria-03` | `Catamarã partindo de Tambaú em direção às piscinas naturais de Seixas, João Pessoa` |
| `galeria-04` | `Coral roxo e amarelo nas piscinas naturais de Seixas, ponto mais oriental das Américas` |
| `galeria-05` | `Praia de Tambaú, ponto de embarque para o passeio de Seixas em João Pessoa` |
| `galeria-06` | `Nascer do sol em Seixas — ponto mais oriental das Américas, João Pessoa, Paraíba` |

---

## Observações para o designer (Figma)

- Hero usa `hero-01.svg` como placeholder — gradiente azul escuro com caption
- Galeria usa `galeria-01.svg` a `galeria-06.svg` nos blocos correspondentes
- Os SVGs mantêm as proporções corretas das fotos finais — o layout não vai mudar ao substituir
- O designer pode referenciar esses arquivos diretamente no Figma se precisar de base visual

---

*Versão: 1.1 | Data: 2026-04-26 | Substituir por fotos reais antes do deploy final | Etapa 6 responsável pela atualização de referências nos componentes*
