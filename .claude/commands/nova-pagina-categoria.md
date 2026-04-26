# /nova-pagina-categoria

**Descrição:** Gera página de categoria que agrupa passeios temáticos (ex.: "Litoral Sul de João Pessoa", "Passeios Urbanos", "Trilhas e Natureza").

**Quando usar:**
- Precisa organizar grupo de passeios sob uma categoria
- Quer criar hub de SEO local para tema específico
- Retomando categoria inacabada

**Entradas necessárias:**
- Nome da categoria (ex.: "Litoral Sul")
- Passeios que entram nesta categoria (lista de nomes)
- Intent principal (o que turista busca quando procura por este tema)

**Processo:**
1. Carrega `templates/pagina-de-categoria.md`
2. Consulta `_conhecimento/passeios.md` para listar passeios da categoria
3. Cria H1 focado em SEO local + intent
4. Escreve intro acolhedora (por que João Pessoa é bom para este tema)
5. Lista passeios com 1-2 linhas de descrição cada
6. Inclui FAQ de categoria (dúvidas frequentes sobre o tema)
7. Marca lacunas com `[CONFIRMAR COM MURILLO]`
8. Inclui meta SEO

**Saída esperada:**
- H1 único, H2 para seções, links internos para páginas de passeios
- Seções: intro, lista de passeios com microdescritivos, comparativo, FAQ, CTA
- Tamanho: 600-1200 palavras
- Citação: "Baseado em: `_conhecimento/passeios.md`"

**Exemplo:**
```
# Litoral Sul de João Pessoa: Praias Selvagens a 30 Min do Centro

[Intro que credibiliza: "Enquanto o litoral norte é mais urbano..."]

## Praias da Região

1. **Praia do Seixas** — [microdescritivo] → Link para `/passeios/seixas`
2. **Praia de Tambaú** — [microdescritivo] → Link para `/passeios/tambau`

## Comparativo

| Praia | Vibe | Melhor Para | Distância |
|-------|------|-----------|----------|

## Dúvidas Frequentes

**Q: Qual é a melhor praia para nadar?**  
A: Depende...

**Meta Title:** Litoral Sul de João Pessoa: Praias e Passeios Guiados | Vem Passear em Jampa
```
