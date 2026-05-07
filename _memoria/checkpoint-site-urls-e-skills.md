# Checkpoint — Site: URLs e Skills

**Salvo em:** 2026-04-30
**Sessão:** Frente Comercial + Arquitetura do Site

---

## 1. Onde paramos

Sessão de `grill-with-docs` iniciada para validar arquitetura do site. Pergunta 1 feita e respondida (URL de passeio individual). Sessão interrompida após a resposta de Murillo.

---

## 2. Últimas decisões aprovadas

| Decisão | Valor |
|---------|-------|
| Padrão definitivo de URL | `/passeios/[categoria]/[slug]` |
| Fonte oficial de passeios | 23 passeios (`base-operacional-comercial.md`) |
| Fonte principal para preços, criança, políticas | `base-operacional-comercial.md` |

---

## 3. O que já foi instalado

| Item | Localização | Status |
|------|-------------|--------|
| `git-guardrails-claude-code` (Fase 1A) | `_site/.claude/hooks/block-dangerous-git.sh` | ✅ Ativo e testado |
| `settings.json` com hook PreToolUse | `_site/.claude/settings.json` | ✅ Configurado (escopo projeto) |
| `grill-with-docs` (Fase 2) | `_site/.claude/skills/grill-with-docs/` | ✅ Copiado (3 arquivos) |
| `to-prd` (Fase 2) | `_site/.claude/skills/to-prd/SKILL.md` | ✅ Copiado |
| `to-issues` (Fase 2) | `_site/.claude/skills/to-issues/SKILL.md` | ✅ Copiado |

---

## 4. O que NÃO fazer ainda

- `git init` dentro de `_site/`
- `setup-pre-commit` / Husky
- Executar `to-prd`
- Criar issues
- Criar código novo
- Avançar para Fase 3 (`setup-matt-pocock-skills`)

---

## 5. Próximo passo ao retomar

1. Continuar `grill-with-docs` a partir da **Pergunta 2**
2. Contexto da Pergunta 1 já respondida: URL `/passeios/[categoria]/[slug]` confirmada
3. Perguntas restantes do grill: categorias dos 23 passeios, menu, `/passeios/` listing page, páginas de categoria, sitemap completo, dados que exigem [CONSULTAR]
4. Só rodar `to-prd` depois que o grill estiver completo e `CONTEXT.md` do `_site/` estiver criado

---

*Nenhuma alteração feita nesta sessão após o checkpoint — apenas este arquivo.*
