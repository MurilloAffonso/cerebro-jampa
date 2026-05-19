"use client";

import { useTranslations } from "next-intl";
import { empresa } from "@/data/empresa";

const CADASTUR_URL = "https://cadastur.turismo.gov.br/cadastur/#!/public/qrcode/52077577000103";

export function TrustBlock() {
  const t = useTranslations("Trust");

  const cardStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  return (
    <section className="bg-dark text-white" aria-label={t("aria")}>
      <div className="container-safe py-10 md:py-14">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          {t("titulo")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <a
            href={empresa.rede.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-colors hover:bg-white/10"
            style={cardStyle}
            aria-label={t("ratingAria", { total: empresa.rating.totalAvaliacoes })}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "44px",
                  lineHeight: 1,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                {String(empresa.rating.valor).replace(".", ",")}
              </span>
              <span style={{ color: "#F2B035", fontSize: "18px", letterSpacing: "1px" }} aria-hidden="true">
                ★★★★★
              </span>
            </div>
            <h3 className="text-white font-bold text-base md:text-lg group-hover:text-primary transition-colors">
              {t("ratingTitulo", { nota: String(empresa.rating.valor) })}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t("ratingDesc", { total: empresa.rating.totalAvaliacoes })}
            </p>
          </a>

          <a
            href={CADASTUR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-colors hover:bg-white/10"
            style={cardStyle}
            aria-label={t("cadasturAria")}
          >
            <span className="text-3xl" aria-hidden="true">✅</span>
            <h3 className="text-white font-bold text-base md:text-lg group-hover:text-primary transition-colors">
              {t("cadasturTitulo", { numero: empresa.cadastur })}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t("cadasturDesc")}
            </p>
          </a>

          <div style={cardStyle}>
            <span className="text-3xl" aria-hidden="true">💬</span>
            <h3 className="text-white font-bold text-base md:text-lg">
              {t("murilloTitulo")}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t("murilloDesc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
