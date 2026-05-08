import Image from "next/image";

interface HeroBlockProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  cta?: { text: string; href: string };
  isH1?: boolean;
}

export function HeroBlock({ imageSrc, imageAlt, title, subtitle, cta, isH1 = true }: HeroBlockProps) {
  const Heading = isH1 ? "h1" : "h2";
  const isExternal = cta?.href.startsWith("http") || cta?.href.startsWith("wa.me");

  return (
    <section
      className="relative overflow-hidden flex flex-col"
      style={{ minHeight: 'min(100svh, 680px)', background: '#092238' }}
    >
      {/* Imagem de fundo */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay — bottom-heavy para legibilidade do conteúdo */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(10,16,30,0.97) 0%, rgba(10,16,30,0.5) 45%, rgba(10,16,30,0.2) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Conteúdo — ancorado no bottom */}
      <div
        className="relative container-safe flex flex-col justify-end text-white pb-12 pt-20 flex-1"
        style={{ minHeight: 'min(100svh, 680px)' }}
      >
        <Heading
          className="font-serif font-bold text-white max-w-3xl mb-4"
          style={{ fontSize: 'clamp(30px, 5vw, 62px)', lineHeight: 1.1, letterSpacing: '-1px' }}
        >
          {title}
        </Heading>

        {subtitle && (
          <p
            className="text-white/75 max-w-xl mb-8 leading-relaxed"
            style={{ fontSize: 'clamp(15px, 1.6vw, 18px)' }}
          >
            {subtitle}
          </p>
        )}

        {cta && (
          <a
            href={cta.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2.5 bg-primary hover:bg-accent text-white font-extrabold px-7 py-[17px] rounded-full min-h-[56px] transition-all hover:scale-[1.02] hover:-translate-y-[2px] self-start"
            style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', boxShadow: '0 4px 32px rgba(16,121,151,0.45)', letterSpacing: '-0.2px' }}
            aria-label={cta.text}
          >
            {cta.text}
          </a>
        )}
      </div>
    </section>
  );
}
