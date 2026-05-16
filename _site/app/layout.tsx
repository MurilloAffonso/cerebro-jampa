/**
 * Root layout — pass-through.
 *
 * Toda a estrutura `<html>` / `<body>` / fontes vive em `app/[locale]/layout.tsx`
 * para permitir `<html lang={locale}>` dinâmico (SEO/Hreflang).
 *
 * Este layout só precisa existir para satisfazer o App Router.
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
