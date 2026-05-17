/**
 * Localização de Passeio.
 *
 * Estrutura:
 *   - data/passeios.ts mantém os dados em PT (fonte de verdade).
 *   - data/passeios.i18n.ts mapeia `passeio.id` → traduções EN/ES.
 *   - `localizarPasseio(passeio, locale)` aplica overrides do locale, com
 *     fallback para PT quando uma tradução específica não existe.
 *
 * Regra: tradução é fiel. Nomes próprios (Tambaba, Coqueirinho, Bolero de
 * Ravel, Murillo), valores em R$ e horários permanecem inalterados.
 */

import type { Passeio } from "@/data/passeios";
import { passeiosTranslations } from "@/data/passeios.i18n";

export type Locale = "pt" | "en" | "es";

function normalizeLocale(locale: string): Locale {
  if (locale === "en" || locale === "es") return locale;
  return "pt";
}

export function localizarPasseio(passeio: Passeio, locale: string): Passeio {
  const lang = normalizeLocale(locale);
  if (lang === "pt") return passeio;

  const overrides = passeiosTranslations[passeio.id]?.[lang];
  if (!overrides) return passeio;

  return { ...passeio, ...overrides };
}

export function localizarPasseios(lista: Passeio[], locale: string): Passeio[] {
  return lista.map((p) => localizarPasseio(p, locale));
}
