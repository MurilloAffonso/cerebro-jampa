# Estrutura de Imagens — Vem Passear em Jampa

## Organização de Pastas

```
public/images/
├── passeios/
│   ├── seixas/
│   │   ├── capa.webp (imagem principal)
│   │   ├── galeria-01.webp
│   │   ├── galeria-02.webp
│   │   └── galeria-03.webp
│   │
│   ├── areia-vermelha/
│   │   ├── capa.webp
│   │   ├── galeria-01.webp
│   │   └── galeria-02.webp
│   │
│   ├── litoral-sul-classico/
│   │   ├── capa.webp
│   │   ├── galeria-01.webp
│   │   └── galeria-02.webp
│   │
│   ├── picaozinho/
│   │   ├── capa.webp
│   │   └── galeria-01.webp
│   │
│   ├── por-do-sol-jacare/
│   │   ├── capa.webp
│   │   └── galeria-01.webp
│   │
│   └── [passeios-futuros]/
│       └── capa.webp (imagem principal)
│
└── placeholders/
    └── placeholder-passeio.svg (fallback neutro)
```

## Convenção de Nomes

### Imagem Principal
- `capa.webp` — Imagem de capa, usada em cards, home, etc.
- Tamanho mínimo: 800x600px
- Formato: WebP (otimizado)
- Proporção: 4:3 recomendado

### Galeria
- `galeria-01.webp`, `galeria-02.webp`, etc.
- Tamanho mínimo: 1200x800px
- Formato: WebP (otimizado)
- Ordem: sequência lógica da experiência (início, meio, fim)

## Regra de Fallback

**Fluxo de carregamento:**
```typescript
// Se capa.webp existe:
<img src="/images/passeios/seixas/capa.webp" alt="..." />

// Se não existe:
<img src="/images/placeholders/placeholder-passeio.svg" alt="..." />
```

**Nunca fazer:**
- ❌ Carregar imagem aleatória da internet
- ❌ Usar placeholder genérico/stock photo
- ❌ Deixar vazio (quebra layout)
- ❌ Carregar imagem de outra pasta sem confirmação

## Como Adicionar Imagens

1. Crie a pasta: `public/images/passeios/[passeio-slug]/`
2. Coloque `capa.webp` (obrigatório)
3. Coloque opcionais: `galeria-01.webp`, `galeria-02.webp`, etc.
4. Atualize `_site/data/passeios.ts` com os caminhos
5. Componente passa a usar imagem real automaticamente

## Formatos Aceitos

- ✅ WebP (recomendado, melhor compressão)
- ✅ JPEG (fallback, se WebP não disponível)
- ✅ PNG (se necessário transparência)
- ❌ SVG (só para placeholders)

## Performance

- Todas imagens devem passar por compressão
- WebP target: < 200KB por imagem
- JPEG target: < 300KB por imagem
- Use `next/image` para lazy-loading automático

## Próximos Passos

- [ ] Tirar fotos reais dos passeios
- [ ] Converter para WebP
- [ ] Colocar em respectivas pastas
- [ ] Validar alt-text (acessibilidade)
- [ ] Testar em mobile (loading performance)
