"use client";

import { useEffect, useState } from "react";

interface CTAStickyProps {
  whatsappUrl: string;
  label?: string;
}

export function CTASticky({
  whatsappUrl,
  label = "Reservar no WhatsApp",
}: CTAStickyProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero-section");
    const ctaFinal = document.getElementById("cta-final");

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "hero-section") {
            setIsVisible(!entry.isIntersecting);
          }
          if (entry.target.id === "cta-final" && entry.isIntersecting) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(heroSection);
    if (ctaFinal) observer.observe(ctaFinal);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={[
        "fixed bottom-0 left-0 right-0 z-50",
        "flex items-center justify-center gap-2",
        "bg-[#25D366] text-white font-bold text-base",
        "min-h-[52px] shadow-[0_-2px_8px_rgba(0,0,0,0.15)]",
        "md:hidden transition-opacity duration-200",
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
    >
      💬 {label}
    </a>
  );
}
