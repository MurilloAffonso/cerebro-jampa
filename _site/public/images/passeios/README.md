# Imagens de passeios — convenção de arquivos

**Pasta raiz:** `_site/public/images/passeios/`

Esta pasta hospeda todas as imagens dos passeios da Vem Passear em Jampa.
Há subpastas por categoria/slug do passeio (ex: `seixas/`, `litoral-sul/coqueirinho/`).

---

## Padrão de nomes (obrigatório)

```
[passeio]-hero-01-descricao.jpg          ← imagem do hero (acima da dobra)
[passeio]-gallery-01-descricao.jpg       ← galeria, 1ª foto
[passeio]-gallery-02-descricao.jpg       ← galeria, 2ª foto
[passeio]-gallery-03-descricao.jpg       ← galeria, 3ª foto
...
```

A parte `descricao` é livre, em kebab-case, descritiva o suficiente para
servir de pista de conteúdo (ajuda o trabalho de SEO/alt). **Tudo em
minúsculas, sem acentos.**

### Exemplos válidos

```
seixas-hero-01-piscinas-naturais-agua-cristalina.jpg
seixas-gallery-01-snorkel-peixes.jpg
seixas-gallery-02-catamara-ancorado.jpg
areia-vermelha-hero-01-banco-de-areia.jpg
areia-vermelha-gallery-01-cataramã-pessoas.jpg   ❌ acento — NÃO usar
areia-vermelha-gallery-01-catamarã-pessoas.jpg   ❌ acento — NÃO usar
areia-vermelha-gallery-01-catamara-pessoas.jpg   ✅
litoral-sul-gallery-01-coqueirinho-falesias.jpg
```

---

## Formatos e dimensões

| Uso          | Dimensão alvo | Formato | Notas |
|--------------|--------------|---------|-------|
| Hero         | 1920 × 1080 (16:9) ou 1920 × 1200 (16:10) | WebP (preferencial) + JPG fallback | Foto da experiência principal, idealmente sem turista de costas |
| Galeria      | 1600 × 1200 (4:3) ou 1600 × 1000 (16:10) | WebP + JPG fallback | Variar ângulos: panorâmica, detalhe, pessoas em ação |
| Card listing | 1200 × 750 (16:10) | WebP + JPG fallback | Costuma ser a mesma do hero, mas cropada |

Peso-alvo: até **300 KB** por foto WebP em galeria, **500 KB** em hero. Otimizar antes de subir.

---

## Como popular no `passeios.ts`

### Campo `coverImage` (string)
```ts
coverImage: "/images/passeios/seixas/seixas-hero-01-piscinas-naturais.jpg",
imagemAlt: "Piscinas Naturais do Seixas com água cristalina em João Pessoa, ao amanhecer",
```

### Campo `galleryImages` (estruturado — usar este, não `gallery: string[]`)
```ts
galleryImages: [
  {
    src: "/images/passeios/seixas/seixas-gallery-01-snorkel.jpg",
    alt: "Turista fazendo snorkel nas Piscinas Naturais do Seixas, João Pessoa",
    caption: "Snorkel entre corais",  // opcional
  },
  {
    src: "/images/passeios/seixas/seixas-gallery-02-catamara.jpg",
    alt: "Catamarã ancorado próximo às Piscinas do Seixas durante maré baixa",
  },
  // ...
],
```

---

## Regras de conteúdo (importantes)

- **Não usar imagens de concorrente** (Luck, Jampa Paradise, etc).
- **Não usar imagem de banco genérico** que não represente o passeio real.
- **Sempre ter `alt` descritivo** — o que está na cena + contexto local (João Pessoa / Paraíba / nome do local).
- **Evitar fotos com placas/marcas de outras agências** visíveis.
- **Preferir fotos com turistas reais aprovados** (Murillo confirma autorização) — caso contrário, foco em paisagem/equipamento.

---

## Sobre `gallery` (legado)

O campo `gallery?: string[]` na interface `Passeio` é **deprecated**. Não usá-lo
em passeios novos. O `PasseioGallery` componente **ignora** o legado para
evitar exibir placeholders SVG como se fossem fotos comerciais.

Para migrar: trocar `gallery: ["/a.webp", "/b.webp"]` por
`galleryImages: [{ src: "/a.webp", alt: "..." }, { src: "/b.webp", alt: "..." }]`.

---

## Pasta `seixas/` — placeholders SVG temporários

A pasta `seixas/` ainda contém SVGs (`galeria-01.svg` … `galeria-06.svg`,
`hero-01.svg`) que foram criados como placeholders de Figma. Esses arquivos
**não são fotos comerciais** e o `PasseioGallery` não os exibe.

Substituir por JPG/WebP reais seguindo o padrão deste documento antes de
popular `coverImage` ou `galleryImages` no Seixas.

---

*Última atualização: 2026-05-12*
