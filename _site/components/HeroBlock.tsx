/**
 * HeroBlock Component
 *
 * Bloco hero reutilizável:
 * - Imagem full-width com overlay escuro
 * - H1 ou título sobre imagem
 * - Subtítulo opcional
 * - CTA opcional
 * - Responsivo: mobile-first
 *
 * Uso: Home, categoria, página de passeio
 */

import Image from "next/image";
import Link from "next/link";

interface HeroBlockProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  cta?: {
    text: string;
    href: string;
  };
  isH1?: boolean;
}

export function HeroBlock({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  cta,
  isH1 = true,
}: HeroBlockProps) {
  const Heading = isH1 ? "h1" : "h2";

  return (
    <section className="relative w-full h-96 md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <Heading className="text-white text-4xl md:text-5xl font-bold mb-4">
          {title}
        </Heading>

        {subtitle && (
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl">
            {subtitle}
          </p>
        )}

        {cta && (
          <Link
            href={cta.href}
            className="btn-primary bg-primary hover:bg-accent"
          >
            {cta.text}
          </Link>
        )}
      </div>
    </section>
  );
}
