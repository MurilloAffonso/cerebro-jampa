# Guia de Imagens — Vem Passear em Jampa

## Estrutura de Pastas

```
public/images/
├── brand/
│   ├── logo/          # Logos da marca (PNG/SVG, fundo transparente e branco)
│   ├── og/            # Imagens Open Graph (1200×630 JPG)
│   └── murillo/       # Foto do Murillo para seção "Quem somos"
├── parceiros/         # Logos e fotos de parceiros
├── placeholders/      # Placeholders usados enquanto foto real não chega
└── passeios/
    ├── pacotes/
    ├── litoral-sul/
    ├── litoral-norte/
    ├── piscinas-naturais/
    ├── city-tour/
    └── interestaduais/
```

Dentro de cada pasta de passeio (ex: `passeios/litoral-sul/roteiro-classico/`):

```
hero.jpg
card.jpg
gallery-01.jpg
gallery-02.jpg
gallery-03.jpg
```

---

## Padrão de Nomes

- Letras minúsculas, sem espaços, sem acentos
- Separador: hífen (`-`)
- Exemplos corretos: `hero.jpg`, `gallery-01.jpg`, `logo-vem-passear.svg`
- Exemplos errados: `Hero Final.jpg`, `Foto Murillo (2).jpg`

---

## Onde Colocar Cada Tipo de Foto

| Tipo | Pasta |
|------|-------|
| Logo principal | `brand/logo/` |
| Imagem Open Graph do site | `brand/og/` |
| Foto de Murillo | `brand/murillo/` |
| Logos / fotos de parceiros | `parceiros/` |
| Fotos de cada passeio | `passeios/[categoria]/[slug]/` |

---

## Tamanhos Recomendados

| Uso | Dimensão | Formato |
|-----|----------|---------|
| Hero da página de passeio | 1600×900 px (mínimo) | JPG |
| Card na listagem | 900×1200 px | JPG |
| Galeria (gallery-01/02/03) | 1200×900 px | JPG |
| Open Graph (og-image) | 1200×630 px | JPG |
| Logo | livre | SVG ou PNG (fundo transparente) |
| Foto Murillo | 800×800 px (mínimo) | JPG |

---

## Regras de SEO

1. **Foto real:** nenhuma imagem de banco genérico. Toda foto deve mostrar o passeio real ou local real.
2. **Nome descritivo:** o nome do arquivo deve refletir o conteúdo (não `IMG_0042.jpg`).
3. **Alt text obrigatório:** no código, cada `<img>` deve ter `alt` descritivo — ex: `"Piscina natural de Seixas com turistas, João Pessoa PB"`.
4. **Peso:** comprimir antes de subir. Máximo recomendado: 300 KB por imagem. Use Squoosh (squoosh.app) ou similar.
5. **Sem duplicata:** não subir a mesma foto em pastas diferentes sem necessidade.

---

## Passeios Cadastrados

Cada pasta abaixo espera: `hero.jpg`, `card.jpg`, `gallery-01/02/03.jpg`

**Pacotes:**
- `passeios/pacotes/3-dias-completo/`
- `passeios/pacotes/3-dias-basico/`
- `passeios/pacotes/super-economico/`

**Litoral Sul:**
- `passeios/litoral-sul/roteiro-classico/`
- `passeios/litoral-sul/praia-bela/`
- `passeios/litoral-sul/combo-jampa-quadriciclo/`
- `passeios/litoral-sul/combo-praia-bela-quadriciclo/`
- `passeios/litoral-sul/quadriciclo-coqueirinho/`
- `passeios/litoral-sul/quadriciclo-praia-bela/`

**Litoral Norte:**
- `passeios/litoral-norte/roteiro-classico/`
- `passeios/litoral-norte/combo-areia-vermelha/`
- `passeios/litoral-norte/areia-vermelha-catamara/`
- `passeios/litoral-norte/por-do-sol-jacare/`
- `passeios/litoral-norte/lancha-privativa/`

**Piscinas Naturais:**
- `passeios/piscinas-naturais/seixas/`
- `passeios/piscinas-naturais/penha/`
- `passeios/piscinas-naturais/picaozinho/`
- `passeios/piscinas-naturais/mergulho/`

**City Tour:**
- `passeios/city-tour/jampa-historica/`

**Interestaduais:**
- `passeios/interestaduais/porto-de-galinhas/`
- `passeios/interestaduais/praia-de-pipa/`
- `passeios/interestaduais/natal/`
