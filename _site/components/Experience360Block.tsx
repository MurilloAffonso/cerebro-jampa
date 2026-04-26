"use client";

import { useState } from "react";

interface Experience360BlockProps {
  url360: string;
  previewSrc?: string;
  previewAlt?: string;
}

export function Experience360Block({
  url360,
  previewSrc,
  previewAlt = "Preview da experiência 360° do passeio",
}: Experience360BlockProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="section-padding bg-white">
      <div className="container-safe max-w-3xl">
        <h2>Conheça o passeio em 360°</h2>
        <p className="text-gray-700 mt-2 mb-5">
          Antes de reservar, dá uma espiada. Esta é a vista de dentro das piscinas de Seixas
          — você no meio, o coral embaixo, o mar em volta.
        </p>

        <div
          className="relative rounded-lg overflow-hidden bg-gray-200"
          style={{ aspectRatio: "16/9" }}
        >
          {!isLoaded ? (
            <>
              {previewSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={previewSrc}
                  alt={previewAlt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Preview indisponível</span>
                </div>
              )}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={() => setIsLoaded(true)}
                  className="flex items-center gap-2 bg-black/70 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-black/90 transition-colors min-h-[44px]"
                  aria-label="Abrir experiência 360°"
                >
                  ▶ Abrir experiência 360°
                </button>
              </div>
            </>
          ) : (
            <iframe
              src={url360}
              className="w-full"
              style={{ minHeight: "400px", height: "100%", border: "none" }}
              allow="fullscreen; accelerometer; gyroscope"
              loading="lazy"
              title="Experiência 360° — Piscinas Naturais do Seixas"
            />
          )}
        </div>
      </div>
    </section>
  );
}
