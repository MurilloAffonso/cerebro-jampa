/**
 * FichaTecnica — 4 cells: Duração, Saída, Preço, Categoria
 * Renderizada abaixo do hero na página de passeio.
 */

"use client";

import { useTranslations } from "next-intl";
import type { Passeio } from "@/data/passeios";
import { isCampoIndisponivel } from "@/lib/consultar";

const CATEGORIA_TKEY: Record<string, string> = {
  "pacotes":           "pacotes",
  "litoral-sul":       "litoralSul",
  "litoral-norte":     "litoralNorte",
  "piscinas-naturais": "piscinasNaturais",
  "city-tour":         "cityTour",
  "interestaduais":    "interestaduais",
};

interface FichaTecnicaProps {
  passeio: Passeio;
}

export function FichaTecnica({ passeio }: FichaTecnicaProps) {
  const t    = useTranslations("Passeio");
  const tCat = useTranslations("Categorias");

  const precoExibir    = isCampoIndisponivel(passeio.preco)    ? t("sobConsulta") : passeio.preco;
  const duracaoExibir  = isCampoIndisponivel(passeio.duracao)  ? t("viaWhatsapp") : passeio.duracao;
  const saidaExibir    = isCampoIndisponivel(passeio.saida)    ? t("viaWhatsapp") : passeio.saida;
  const tkey           = CATEGORIA_TKEY[passeio.categoria];
  const categoriaLabel = tkey ? tCat(tkey) : passeio.categoria;

  const cells = [
    { icon: <IcoClock />, label: t("duracao"),    value: duracaoExibir },
    { icon: <IcoPin />,   label: t("saida"),      value: saidaExibir },
    { icon: <IcoTag />,   label: t("aPartirDe"),  value: precoExibir },
    { icon: <IcoGrid />,  label: t("categoria"),  value: categoriaLabel },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 1,
        background: '#E6E9EB',
        borderTop: '1px solid #E6E9EB',
        borderBottom: '1px solid #E6E9EB',
      }}
    >
      {cells.map((cell, i) => (
        <div
          key={i}
          style={{
            background: '#fff',
            padding: '14px 8px',
            textAlign: 'center',
          }}
        >
          <div style={{ color: '#107997', display: 'flex', justifyContent: 'center', marginBottom: 6 }}>
            {cell.icon}
          </div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '9.5px', color: '#5A6B78',
            textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4,
          }}>
            {cell.label}
          </div>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 14, fontWeight: 600, color: '#092238',
            lineHeight: 1.2,
          }}>
            {cell.value}
          </div>
        </div>
      ))}
    </div>
  );
}

function IcoClock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function IcoPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function IcoTag() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12V3h9l9 9-9 9-9-9z"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/>
    </svg>
  );
}

function IcoGrid() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  );
}
