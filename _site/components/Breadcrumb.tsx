/**
 * Breadcrumb — emite UI + schema BreadcrumbList automaticamente.
 *
 * - Item sem `href` é a página atual (último elo) e marca `aria-current="page"`.
 * - Para o schema, o último item é resolvido contra o domínio oficial caso
 *   a página atual não passe `currentUrl` — útil para SEO consistente.
 */

import Link from "next/link";
import { buildLocalizedUrl } from "@/lib/seo";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** URL canônica da página atual; opcional. Se omitido, schema usa `href` se houver. */
  currentUrl?: string;
  locale?: string;
}

function toAbsolute(path?: string, locale = "pt"): string | undefined {
  if (!path) return undefined;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return buildLocalizedUrl(locale, path);
}

export function Breadcrumb({ items, currentUrl, locale = "pt" }: BreadcrumbProps) {
  // Schema BreadcrumbList — só emite se houver pelo menos 2 itens
  const schemaItems = items
    .map((item, index) => {
      const isLast = index === items.length - 1;
      const url = isLast
        ? toAbsolute(currentUrl, locale) || toAbsolute(item.href, locale)
        : toAbsolute(item.href, locale);
      if (!url) return null;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: url,
      };
    })
    .filter(Boolean);

  const schema =
    schemaItems.length >= 2
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: schemaItems,
        }
      : null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <nav aria-label="Breadcrumb" className="container-safe py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && <span aria-hidden="true">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-700" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
