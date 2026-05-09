import Link from "next/link";
import { CategoryIcon } from "@/components/CategoryIcon";

interface CategoryCardProps {
  nome: string;
  slug: string;
  descricao: string;
  cor: string;
  /** @deprecated mantido por compat — não é mais renderizado */
  emoji?: string;
}

export function CategoryCard({ nome, slug, descricao, cor }: CategoryCardProps) {
  return (
    <Link
      href={`/passeios/${slug}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl min-h-[180px]"
      style={{ background: cor }}
    >
      {/* Radial highlight on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.09), transparent 60%)" }}
      />

      <div className="relative p-7 flex flex-col flex-1 text-white">
        {/* Ícone SVG line — herda currentColor do parent (branco) */}
        <div className="mb-4">
          <CategoryIcon slug={slug} size={36} strokeWidth={2} />
        </div>

        <h3 className="font-serif font-bold text-[21px] leading-snug mb-2">
          {nome}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed flex-1">{descricao}</p>

        <div className="mt-5 flex justify-end">
          <span className="text-white/60 group-hover:text-white text-sm font-medium transition-colors">
            Ver passeios →
          </span>
        </div>
      </div>
    </Link>
  );
}
