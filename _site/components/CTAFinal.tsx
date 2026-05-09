interface CTAFinalProps {
  whatsappUrl: string;
  titulo?: string;
  subtitulo?: string;
  textoBotao?: string;
  variante?: "laranja" | "azul";
  label?: string;
}

export function CTAFinal({
  whatsappUrl,
  titulo = "Vamos te ajudar a escolher a melhor data para o seu passeio.",
  subtitulo = "Atendimento direto, preço justo e roteiro organizado.",
  textoBotao = "Falar com Murillo no WhatsApp",
  variante = "azul",
  label,
}: CTAFinalProps) {
  const isLaranja = variante === "laranja";

  return (
    <section
      id="cta-final"
      className="relative overflow-hidden"
      style={{ background: isLaranja ? "#FF6B35" : "#004E89" }}
    >
      {/* Blob decorativo */}
      <div
        className="absolute top-[-30%] right-[-10%] w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: isLaranja ? "rgba(255,255,255,0.12)" : "rgba(255,107,53,0.15)",
          filter: "blur(50px)",
        }}
        aria-hidden="true"
      />

      <div className="relative container-safe py-16 md:py-20 lg:py-24 text-center">
        {label && (
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-white/60 mb-4">
            {label}
          </p>
        )}

        <h2
          className="font-serif font-bold text-white leading-[1.1] max-w-xl mx-auto mb-2"
          style={{ fontSize: "clamp(26px, 3.5vw, 42px)", letterSpacing: "-0.5px" }}
        >
          {titulo}
        </h2>
        <p className="text-white/70 text-sm md:text-base mb-8">{subtitulo}</p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 font-extrabold text-lg px-9 py-[18px] rounded-full min-h-[56px] transition-all hover:scale-[1.02] hover:-translate-y-[3px] shadow-lg ${
            isLaranja
              ? "bg-white text-primary hover:bg-orange-50"
              : "bg-primary hover:bg-accent text-white shadow-primary/30"
          }`}
          aria-label={textoBotao}
        >
          💬 {textoBotao}
        </a>

        <p className="text-white/60 text-xs mt-4">
          Atendimento direto pelo WhatsApp, em horário comercial · Sem compromisso
        </p>
      </div>
    </section>
  );
}
