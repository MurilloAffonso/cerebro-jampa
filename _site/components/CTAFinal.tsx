import Link from "next/link";

interface CTAFinalProps {
  whatsappUrl: string;
  titulo?: string;
  subtitulo?: string;
  textoBotao?: string;
}

export function CTAFinal({
  whatsappUrl,
  titulo = "Vamos te ajudar a escolher a melhor data para o seu passeio.",
  subtitulo = "Atendimento rápido. Preço justo. Roteiro organizado.",
  textoBotao = "Falar com Murillo no WhatsApp",
}: CTAFinalProps) {
  return (
    <section id="cta-final" className="bg-secondary text-white">
      <div className="container-safe py-12 md:py-16 text-center">
        <p className="text-lg md:text-2xl font-bold text-white leading-snug max-w-xl mx-auto">
          {titulo}
        </p>
        <p className="text-white/70 text-sm md:text-base mt-2 mb-8">{subtitulo}</p>
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ea355] text-white font-bold text-base px-8 py-4 rounded-lg min-h-[52px] w-full max-w-sm transition-colors"
          aria-label={textoBotao}
        >
          💬 {textoBotao}
        </Link>
      </div>
    </section>
  );
}
