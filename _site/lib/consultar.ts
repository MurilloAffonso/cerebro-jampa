/**
 * Utilitários para campos não confirmados no vault.
 *
 * Campos marcados como "[CONSULTAR]" (ou null/undefined) não devem ser
 * exibidos ao usuário — redirecionar para CTA WhatsApp em vez disso.
 *
 * Fonte da regra: ISSUE-05 / _site/docs/issues-site-fase-1.md
 */

const SENTINEL = "[CONSULTAR]";

/** True quando o campo não tem dado seguro para exibir. */
export function isCampoIndisponivel(value: string | null | undefined): boolean {
  if (value == null || value.trim() === "") return true;
  return value.includes(SENTINEL);
}

/**
 * Remove cláusulas/frases que contêm [CONSULTAR] de strings de texto livre.
 * Útil para `observacoes` e outros campos mistos (parte confirmada, parte não).
 *
 * Exemplos:
 *   "Mínimo 7 anos. Valor privativo: [CONSULTAR]."
 *   → "Mínimo 7 anos."
 *
 *   "Saída conforme marés. Transfer até Cabedelo: [CONSULTAR]. Valor privativo: [CONSULTAR]."
 *   → "Saída conforme marés."
 */
export function limparConsultar(value: string): string {
  return value
    // Remove "Frase contendo [CONSULTAR]." (com ponto no final)
    .replace(/[^.]*?\[CONSULTAR[^\]]*\][^.]*\./g, "")
    // Remove remanescentes sem ponto (fim de string)
    .replace(/[^.]*?\[CONSULTAR[^\]]*\][^.]*/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}
