"use client";

import { useTranslations } from "next-intl";
import { empresa } from "@/data/empresa";

const CADASTUR_URL = "https://cadastur.turismo.gov.br/cadastur/#!/public/qrcode/52077577000103";

export function TrustBlock() {
  const t = useTranslations("Trust");

  return (
    <section className="bg-dark text-white" aria-label={t("aria")}>
      <div className="container-safe py-8 md:py-12">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          {t("titulo")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <a
            href={CADASTUR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 group"
            aria-label={t("cadasturAria")}
          >
            <span className="text-2xl flex-shrink-0" aria-hidden="true">✅</span>
            <div>
              <h3 className="text-white font-bold text-base md:text-lg group-hover:text-primary transition-colors">
                {t("cadasturTitulo", { numero: empresa.cadastur })}
              </h3>
              <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                {t("cadasturDesc")}
              </p>
            </div>
          </a>

          <a
            href={empresa.rede.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 group"
            aria-label={t("ratingAria", { total: empresa.rating.totalAvaliacoes })}
          >
            <span className="text-2xl flex-shrink-0" aria-hidden="true">⭐</span>
            <div>
              <h3 className="text-white font-bold text-base md:text-lg group-hover:text-primary transition-colors">
                {t("ratingTitulo", { nota: String(empresa.rating.valor) })}
              </h3>
              <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                {t("ratingDesc", { total: empresa.rating.totalAvaliacoes })}
              </p>
            </div>
          </a>

          <div className="flex gap-4">
            <span className="text-2xl flex-shrink-0" aria-hidden="true">👤</span>
            <div>
              <h3 className="text-white font-bold text-base md:text-lg">
                {t("murilloTitulo")}
              </h3>
              <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                {t("murilloDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
