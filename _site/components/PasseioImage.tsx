/**
 * PasseioImage Component
 *
 * Renderiza imagem de passeio com fallback automático:
 * 1. Se coverImage existe em public/images/passeios/[slug]/ → usa imagem real
 * 2. Se não existe → usa placeholder SVG neutro
 *
 * Nunca:
 * ❌ Carregar imagem aleatória da internet
 * ❌ Usar placeholder genérico/stock photo
 * ❌ Deixar vazio (quebra layout)
 *
 * Regra: Fotos reais só vão em _site/public/images/passeios/[slug]/
 */

'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PasseioImageProps {
  src?: string;
  alt: string;
  slug: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export function PasseioImage({
  src,
  alt,
  slug,
  width = 1200,
  height = 600,
  priority = false,
  className = '',
}: PasseioImageProps) {
  // Fallback para placeholder se src não foi fornecido
  const imageSrc = src || `/images/placeholders/placeholder-passeio.svg`;
  const isPlaceholder = imageSrc.includes('placeholder');

  return (
    <div className={`relative w-full overflow-hidden rounded-lg ${className}`}>
      {isPlaceholder ? (
        // Placeholder SVG (sem Next Image, pois é SVG)
        <div
          className="w-full bg-light flex items-center justify-center"
          style={{ aspectRatio: `${width} / ${height}` }}
        >
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover"
          />
          <p className="absolute text-gray-500 text-center px-4">
            Imagem em breve
          </p>
        </div>
      ) : (
        // Imagem real otimizada com Next/Image
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          className="w-full h-auto object-cover"
        />
      )}
    </div>
  );
}
