import { empresa } from "@/data/empresa";

const CADASTUR_URL = "https://cadastur.turismo.gov.br/hotsite/#!/public/inicio";

interface MurilloBlockProps {
  whatsappUrl: string;
}

const DIFERENCIAIS = [
  "Grupos de até 8 pessoas — nada de van lotada",
  "Roteiros que respeitam a maré e o seu ritmo",
  "Atendimento direto com quem conhece cada praia",
  "Cadastur ativo — empresa registrada e regularizada",
];

export function MurilloBlock({ whatsappUrl }: MurilloBlockProps) {
  return (
    <section
      style={{ background: 'var(--cor-primaria)' }}
      aria-label="Sobre o Murillo e a Vem Passear em Jampa"
    >
      <div className="container-safe">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center',
            padding: '80px 0',
          }}
          className="md:grid-cols-[5fr_7fr] md:gap-16"
        >

          {/* ── Foto / Avatar ────────────────────────────── */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              {/* Placeholder foto Murillo — TODO: HOME-PRT-02 (4:5 retrato) */}
              <div
                style={{
                  width: 'clamp(200px, 28vw, 320px)',
                  aspectRatio: '4/5',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'rgba(255,255,255,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
                data-foto-id="HOME-PRT-02"
                title="TODO: substituir por foto real do Murillo 4:5 (HOME-PRT-02)"
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-fraunces)',
                      fontWeight: 700,
                      fontSize: '32px',
                      color: '#fff',
                    }}
                  >
                    M
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.05em',
                  }}
                >
                  Foto do Murillo
                </span>
              </div>

              {/* Badge Cadastur — clicável */}
              <a
                href={CADASTUR_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Verificar registro Cadastur no portal do Ministério do Turismo"
                style={{
                  position: 'absolute',
                  bottom: '-16px',
                  right: '-16px',
                  background: 'var(--cor-fundo-puro)',
                  border: '2px solid var(--cor-borda)',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  boxShadow: 'var(--sombra-card)',
                  transition: 'border-color 200ms',
                }}
                className="hover:border-[var(--cor-acento)]"
              >
                <span
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'var(--cor-sucesso)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 700,
                      fontSize: '12px',
                      color: 'var(--cor-texto-escuro)',
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    Cadastur Ativo
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '11px',
                      color: 'var(--cor-texto-claro)',
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {empresa.cadastur}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* ── Conteúdo ─────────────────────────────────── */}
          <div>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--cor-acento)',
                marginBottom: '16px',
              }}
            >
              Quem te atende
            </span>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 600,
                lineHeight: 1.1,
                color: '#fff',
                marginBottom: '24px',
                letterSpacing: '-0.02em',
              }}
            >
              Murillo. Não é atendente,<br />não é central.
            </h2>

            <div
              style={{
                borderLeft: '3px solid var(--cor-acento)',
                paddingLeft: '18px',
                marginBottom: '28px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: 'rgba(197, 183, 163, 0.9)',
                  margin: 0,
                }}
              >
                {empresa.missao}
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {DIFERENCIAIS.map((item) => (
                <li
                  key={item}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}
                >
                  <span
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'rgba(217, 119, 6, 0.15)',
                      border: '1px solid rgba(217, 119, 6, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7l3.5 3.5L12 3.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '15px',
                      color: 'rgba(255,255,255,0.85)',
                      lineHeight: 1.55,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Assinatura manuscrita */}
            <p
              style={{
                fontFamily: "var(--font-caveat), 'Caveat', cursive",
                fontSize: '26px',
                color: 'var(--cor-acento)',
                marginBottom: '28px',
                lineHeight: 1.2,
              }}
            >
              — Murillo
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com Murillo no WhatsApp"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'var(--cor-acento)',
                color: '#fff',
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '16px',
                padding: '16px 28px',
                borderRadius: '8px',
                minHeight: '52px',
                boxShadow: 'var(--sombra-cta)',
                textDecoration: 'none',
                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              className="hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(217,119,6,0.55)]"
            >
              <IconWhatsApp />
              Falar com o Murillo →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
