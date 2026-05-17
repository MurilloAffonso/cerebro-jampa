/**
 * Pré-reserva consultiva → WhatsApp do Murillo.
 *
 * Cliente preenche data, hotel/bairro, passageiros (adultos/crianças/bebês),
 * nome e WhatsApp. Ao clicar, abre wa.me com mensagem pronta.
 *
 * Não é checkout. Não captura cartão. Não envia para backend.
 * Campos vazios não bloqueiam envio (microcopy explica que Murillo confirma).
 *
 * Mobile-first: funciona a partir de 320px sem scroll horizontal.
 */

"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { empresa } from "@/data/empresa";
import { buildReservationWhatsAppUrl } from "@/lib/whatsapp";

interface Props {
  passeioNome: string;
}

const MIN_ADULTOS = 1;
const MAX_ADULTOS = 20;
const MIN_CRIANCAS = 0;
const MAX_CRIANCAS = 10;
const MIN_BEBES = 0;
const MAX_BEBES = 10;

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

export function ReservationIntentForm({ passeioNome }: Props) {
  const t = useTranslations("ReservaForm");
  const [dataPasseio, setDataPasseio] = useState("");
  const [hotel, setHotel] = useState("");
  const [adultos, setAdultos] = useState(MIN_ADULTOS);
  const [criancas, setCriancas] = useState(MIN_CRIANCAS);
  const [bebes, setBebes] = useState(MIN_BEBES);
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const waUrl = buildReservationWhatsAppUrl(
    {
      passeioNome,
      dataPasseio,
      hotel,
      adultos,
      criancas,
      bebes,
      nome,
      whatsapp,
    },
    empresa.contato.whatsappLink,
  );

  return (
    <section
      aria-labelledby="pre-reserva-titulo"
      style={{
        background: "var(--cor-fundo)",
        borderTop: "1px solid var(--cor-borda)",
        borderBottom: "1px solid var(--cor-borda)",
        padding: "48px 0",
      }}
    >
      <div className="container-safe">
        <div
          style={{
            background: "var(--cor-fundo-puro)",
            border: "1px solid var(--cor-borda)",
            borderRadius: "16px",
            padding: "24px",
            maxWidth: "640px",
            margin: "0 auto",
            boxShadow: "var(--sombra-card)",
          }}
        >
          {/* Kicker + título */}
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--cor-primaria)",
              margin: "0 0 8px",
            }}
          >
            {t("kicker")}
          </p>
          <h2
            id="pre-reserva-titulo"
            className="font-serif"
            style={{
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 600,
              color: "var(--cor-texto-escuro)",
              margin: "0 0 10px",
              lineHeight: 1.2,
            }}
          >
            {t("titulo")}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "14px",
              lineHeight: 1.6,
              color: "var(--cor-texto-medio)",
              margin: "0 0 24px",
            }}
          >
            {t("subtitulo")}
          </p>

          {/* Linha 1: Data */}
          <div style={fieldWrap}>
            <label htmlFor="r-data" style={labelStyle}>
              {t("dataPasseio")}
            </label>
            <input
              id="r-data"
              type="date"
              value={dataPasseio}
              onChange={(e) => setDataPasseio(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Linha 2: Hotel */}
          <div style={fieldWrap}>
            <label htmlFor="r-hotel" style={labelStyle}>
              {t("hotel")}
            </label>
            <input
              id="r-hotel"
              type="text"
              value={hotel}
              onChange={(e) => setHotel(e.target.value)}
              placeholder={t("hotelPlaceholder")}
              style={inputStyle}
            />
          </div>

          {/* Steppers */}
          <Stepper
            label={t("adultos")}
            removeLabel={t("removerUm")}
            id="r-adultos"
            value={adultos}
            min={MIN_ADULTOS}
            max={MAX_ADULTOS}
            onChange={(n) => setAdultos(clamp(n, MIN_ADULTOS, MAX_ADULTOS))}
            hint={t("adultosHint")}
          />
          <Stepper
            label={t("criancas")}
            removeLabel={t("removerUm")}
            id="r-criancas"
            value={criancas}
            min={MIN_CRIANCAS}
            max={MAX_CRIANCAS}
            onChange={(n) => setCriancas(clamp(n, MIN_CRIANCAS, MAX_CRIANCAS))}
            hint={t("criancasHint")}
          />
          <Stepper
            label={t("bebes")}
            removeLabel={t("removerUm")}
            id="r-bebes"
            value={bebes}
            min={MIN_BEBES}
            max={MAX_BEBES}
            onChange={(n) => setBebes(clamp(n, MIN_BEBES, MAX_BEBES))}
            hint={t("bebesHint")}
          />

          {/* Linha 6: Nome */}
          <div style={fieldWrap}>
            <label htmlFor="r-nome" style={labelStyle}>
              {t("nome")}
            </label>
            <input
              id="r-nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder={t("nomePlaceholder")}
              autoComplete="name"
              style={inputStyle}
            />
          </div>

          {/* Linha 7: WhatsApp */}
          <div style={fieldWrap}>
            <label htmlFor="r-whatsapp" style={labelStyle}>
              {t("whatsapp")}
            </label>
            <input
              id="r-whatsapp"
              type="tel"
              inputMode="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder={t("whatsappPlaceholder")}
              autoComplete="tel"
              style={inputStyle}
            />
          </div>

          {/* CTA */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
              background: "var(--cor-whatsapp)",
              color: "#fff",
              fontFamily: "var(--font-inter)",
              fontWeight: 700,
              fontSize: "16px",
              padding: "16px 20px",
              borderRadius: "999px",
              minHeight: "52px",
              textDecoration: "none",
              marginTop: "8px",
              boxShadow: "0 4px 18px rgba(37,211,102,0.30)",
            }}
          >
            {t("cta")}
          </a>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              color: "var(--cor-texto-claro)",
              textAlign: "center",
              margin: "12px 0 0",
              lineHeight: 1.5,
            }}
          >
            {t("microcopy")}
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Stepper +/− mobile-friendly
// ---------------------------------------------------------------------------

interface StepperProps {
  label: string;
  removeLabel: string;
  id: string;
  value: number;
  min: number;
  max: number;
  hint?: string;
  onChange: (n: number) => void;
}

function Stepper({ label, removeLabel, id, value, min, max, hint, onChange }: StepperProps) {
  const atMin = value <= min;
  const atMax = value >= max;
  return (
    <div style={fieldWrap}>
      <label htmlFor={id} style={labelStyle}>
        {label}
        {hint && (
          <span
            style={{
              fontWeight: 400,
              fontSize: "12px",
              color: "var(--cor-texto-claro)",
              marginLeft: "8px",
            }}
          >
            {hint}
          </span>
        )}
      </label>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <button
          type="button"
          aria-label={`${removeLabel} ${label.toLowerCase()}`}
          onClick={() => onChange(value - 1)}
          disabled={atMin}
          style={stepperBtnStyle(atMin)}
        >
          −
        </button>
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          value={value}
          onChange={(e) => {
            const n = Number(e.target.value);
            if (!Number.isFinite(n)) return;
            onChange(n);
          }}
          style={{
            ...inputStyle,
            textAlign: "center",
            flex: 1,
            maxWidth: "120px",
            padding: "12px 8px",
          }}
        />
        <button
          type="button"
          aria-label={`Adicionar um ${label.toLowerCase()}`}
          onClick={() => onChange(value + 1)}
          disabled={atMax}
          style={stepperBtnStyle(atMax)}
        >
          +
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Estilos compartilhados
// ---------------------------------------------------------------------------

const fieldWrap: React.CSSProperties = {
  marginBottom: "16px",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-inter)",
  fontSize: "13px",
  fontWeight: 600,
  color: "var(--cor-texto-escuro)",
  marginBottom: "6px",
};

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  background: "var(--cor-fundo-puro)",
  border: "1px solid var(--cor-borda)",
  borderRadius: "10px",
  padding: "12px 14px",
  fontFamily: "var(--font-inter)",
  fontSize: "16px",
  color: "var(--cor-texto-escuro)",
  minHeight: "48px",
  outline: "none",
};

function stepperBtnStyle(disabled: boolean): React.CSSProperties {
  return {
    minWidth: "48px",
    minHeight: "48px",
    background: disabled ? "var(--cor-fundo)" : "var(--cor-fundo-puro)",
    color: disabled ? "var(--cor-texto-claro)" : "var(--cor-primaria)",
    border: `1px solid ${disabled ? "var(--cor-borda)" : "var(--cor-primaria)"}`,
    borderRadius: "10px",
    fontSize: "22px",
    fontWeight: 600,
    lineHeight: 1,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background 150ms",
  };
}
