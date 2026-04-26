# /nova-pagina-passeio

**Descrição:** Gera rascunho estruturado de página de passeio individual (ex.: "Praia do Seixas", "Tour Liberdade") com base no template.

**Quando usar:**
- Novo passeio foi aprovado para o site
- Precisa de página de venda para um roteiro específico
- Retomando passeio inacabado

**Entradas necessárias:**
- Nome do passeio
- Categoria (Litoral, Urbano, Trilhas, etc.)
- Público-alvo (mochileiros, famílias, casais, etc.)

**Processo:**
1. Localiza passeio EXATO em `_conhecimento/passeios.md` (índice rápido)
2. Lê dados completos em `catalogo_vempassear_estruturado.md`
3. Extrai: nome, categoria, preço, roteiro, duração, saída, ponto de embarque, observações
4. Carrega `templates/pagina-de-passeio.md`
5. Preenche com dados **exatamente como estão** no catálogo (nunca inventa)
6. Consulta `_conhecimento/tom-de-voz.md` para tom
7. Marca como `[CONFIRMAR COM MURILLO]` apenas o que realmente falta (depoimentos, fotos, etc.)
8. Inclui bloco de meta SEO (title, meta description, slug)
9. Devolve markdown pronto para copiar em `_site/paginas/[nome-passeio].md`

**Saída esperada:**
- Markdown completo, H1-H3 estruturados, blocos visuais claros
- Seções: intro, o que está incluso, roteiro do dia, FAQ, depoimentos, CTA, meta tags
- Tamanho: 800-1500 palavras (sem contar meta tags)
- Citação de fonte ao final: "Baseado em: `_conhecimento/passeios.md`"

**Exemplo de saída boa:**
```
# Praia do Seixas: O Ponto Mais Oriental de São Paulo... Quer Dizer, do Brasil

[intro acolhedor que responde "por que este passeio?"]

## O Que Você Vai Descobrir

- Farol centenário + história do jangadeiro
- Piscina natural de água morna
- Almoço de frutos do mar (quando disponível)

## Roteiro do Dia

**8h00** – Encontro em [CONFIRMAR COM MURILLO: endereço do ponto de encontro]

...

## Perguntas Frequentes

**Q: Pode entrar na água?**  
A: Sim, sem problemas. Recomendamos...

---

**Meta Title:** Praia do Seixas em João Pessoa: O Passeio da Aurora | Vem Passear em Jampa  
**Meta Description:** Conheça o ponto mais oriental do Brasil. Farol, história e natureza. Passeios guiados. Agende no WhatsApp →
```
