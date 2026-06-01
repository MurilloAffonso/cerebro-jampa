# SKILL: executar-issue

## Propósito

Executar uma ISSUE do backlog do site com disciplina RTK-lite: ler primeiro, implementar com precisão, validar com type-check, reportar o diff real.

---

## Protocolo de Execução

### 1. Leitura obrigatória antes de qualquer edit

```
_memoria/proximos-passos.md          # confirmar qual issue executar
_memoria/decisoes-estrategicas.md    # decisões que afetam a issue
_conhecimento/passeios.md            # se a issue envolve dados de passeio
```

Se a issue gera conteúdo de passeio (copy, preço, roteiro), consultar também:
```
_conhecimento/catalogo_vempassear_estruturado.md
_conhecimento/empresa.md
```

### 2. Identificar arquivos afetados

Usar Glob + Grep antes de abrir qualquer arquivo.
Nunca ler um arquivo inteiro quando só precisa de uma seção — usar `offset:` + `limit:`.

### 3. Implementar

Regras invariáveis do codebase:

| Regra | Detalhe |
|-------|---------|
| Dados de passeio | Apenas de `data/passeios.ts` — nunca hardcoded em componente |
| WA link | `empresa.contato.whatsappLink` — nunca string literal |
| Preço/Duração ausente | `isCampoIndisponivel(valor) ? "Consultar" : valor` |
| CTA | Toda página termina com CTA WhatsApp |
| Mobile-first | Base → sm: → md: → lg: — sempre partir de 320px |
| Touch target | `min-h-[44px]` em todos os CTAs e botões |
| Schema | `generateFAQSchema()` e `generateTouristAttractionSchema()` via `lib/seo.ts` |
| Layout | `container-safe` + `section-padding` — nunca padding inline |

Campos que NUNCA se inventa: preço, roteiro, duração, ponto de saída, depoimentos, parcerias.
Se o dado não está no vault → marcar `[CONFIRMAR COM MURILLO: ...]` e parar.

### 4. Validar

```bash
cd _site && npm run type-check
```

Zero erros obrigatório antes de reportar conclusão.
Se houver erros: corrigir antes de qualquer commit.

### 5. Reportar

Reportar exatamente:
- Arquivos modificados (caminho + o que mudou)
- Arquivos criados
- Resultado do type-check (✅ ou erros encontrados)
- Qualquer campo `[CONFIRMAR COM MURILLO]` aberto

---

## O Que Esta Skill NÃO Faz

- Não executa `git add`, `git commit` ou `git push` — commit é decisão de Murillo
- Não instala dependências (`npm install`, `pnpm add`, etc.)
- Não lê ou edita `.env` ou `.env.*`
- Não executa múltiplas issues em sequência sem aprovação entre elas
- Não inventa dados ausentes no vault

---

## Disciplina RTK-lite

- `git status --short` (não `git status`)
- `git log -3 --oneline` (não `git log`)
- `git diff --stat` antes de `git diff` completo
- `limit:` ao ler arquivos grandes — nunca ler mais do que o necessário
- Glob antes de Read para confirmar que o arquivo existe

---

## Saída Esperada

```
ISSUE-XX concluída.

Arquivos modificados:
  _site/app/.../page.tsx — [descrição do que mudou]

Arquivos criados:
  (nenhum | lista)

type-check: ✅ sem erros

Pendências HITL:
  (nenhuma | lista de [CONFIRMAR COM MURILLO])

Pronto para commit quando Murillo aprovar.
```
