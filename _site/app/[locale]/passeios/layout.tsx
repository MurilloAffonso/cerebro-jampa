/**
 * Layout para páginas de passeios
 *
 * Compartilhado por:
 * - /passeios (listagem geral — se usar)
 * - /passeios/[categoria] (categoria)
 * - /passeios/[categoria]/[slug] (passeio individual)
 *
 * Pode incluir breadcrumb, sidebar com categorias, etc
 */

export default function PasseiosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
