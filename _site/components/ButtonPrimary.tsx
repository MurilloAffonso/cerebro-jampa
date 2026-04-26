/**
 * ButtonPrimary Component
 *
 * Botão principal padrão (CTA)
 * - WhatsApp verde por padrão
 * - 44px mínimo (acessibilidade)
 * - Clicável em mobile
 *
 * Uso: CTA de passagem, conversão final, etc
 */

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonPrimaryProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  whatsapp?: boolean;
  newTab?: boolean;
}

export function ButtonPrimary({
  text,
  href,
  onClick,
  className,
  whatsapp = false,
  newTab = false,
}: ButtonPrimaryProps) {
  const buttonClass = cn(
    "btn-primary",
    whatsapp && "bg-green-500 hover:bg-green-600",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClass}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {text}
    </button>
  );
}
