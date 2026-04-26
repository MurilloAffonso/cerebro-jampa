/**
 * Funções utilitárias gerais
 */

export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPreco(preco: string): string {
  if (preco.startsWith("R$")) return preco;
  return `R$ ${preco}`;
}

export function formataDuracao(duracao: string): string {
  if (duracao.includes("h")) return duracao;
  return `${duracao}h`;
}

export function getInitials(nome: string): string {
  return nome
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function isExternalLink(href: string): boolean {
  return href.startsWith("http");
}
