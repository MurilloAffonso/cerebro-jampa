// Bloco Murillo — identidade pessoal do fundador
const MurilloSection = () => {
  const diferenciais = [
    { titulo: 'Confiança comprovada', desc: 'Cadastur ativo, Google 4.9 e centenas de turistas atendidos com segurança.' },
    { titulo: 'Atendimento rápido', desc: 'Resposta direta pelo WhatsApp — sem formulário, sem intermediário.' },
    { titulo: 'Preço justo', desc: 'Transparência total: preço, duração e o que está incluso. Sem surpresas.' },
    { titulo: 'Conhecimento local', desc: 'Murillo é paraibano, conhece cada maré, cada praia, cada horário certo.' },
  ];

  return (
    <section style={{
      background: '#FAFAF8',
      padding: 'clamp(64px, 8vw, 112px) 24px',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(40px, 6vw, 80px)',
        alignItems: 'center',
      }}>
        {/* Lado esquerdo — avatar + assinatura */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 32 }}>
          {/* Avatar placeholder */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: 'clamp(140px, 20vw, 220px)',
              height: 'clamp(140px, 20vw, 220px)',
              borderRadius: '50%',
              background: 'repeating-linear-gradient(135deg, #e8e0d8 0px, #e8e0d8 2px, #f0ebe4 2px, #f0ebe4 14px)',
              border: '4px solid white',
              boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 6,
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: '#FF6B35',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Lora, serif', fontWeight: 700, fontSize: 24, color: 'white',
              }}>M</div>
              <div style={{
                fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '1px',
                color: '#9CA3AF', textAlign: 'center', textTransform: 'uppercase', lineHeight: 1.6,
              }}>foto profissional<br />Murillo</div>
            </div>
            {/* Badge Cadastur flutuante */}
            <div style={{
              position: 'absolute', bottom: 8, right: -12,
              background: 'white',
              borderRadius: 12,
              padding: '8px 14px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700,
              color: '#004E89', letterSpacing: '0.3px',
            }}>
              <div style={{ fontSize: 9, color: '#6B7280', fontWeight: 400, marginBottom: 2 }}>Cadastur</div>
              52.077.577
            </div>
          </div>

          {/* Assinatura */}
          <div>
            <div style={{
              fontFamily: 'Lora, serif', fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: 700, color: '#1A1A2E', letterSpacing: '-0.4px',
              lineHeight: 1.2, marginBottom: 6,
            }}>Affonso Murillo</div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 14,
              color: '#6B7280', marginBottom: 20,
            }}>Fundador · Curadoria e Atendimento · João Pessoa</div>
            <blockquote style={{
              margin: 0, padding: '16px 20px',
              borderLeft: '3px solid #FF6B35',
              background: 'white', borderRadius: '0 12px 12px 0',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}>
              <p style={{
                fontFamily: 'Lora, serif', fontSize: 16, fontStyle: 'italic',
                color: '#1F2937', lineHeight: 1.6, margin: 0,
                textWrap: 'pretty',
              }}>
                "Ajudar turistas a descobrir João Pessoa com atendimento rápido, confiança e orientação prática."
              </p>
            </blockquote>
          </div>
        </div>

        {/* Lado direito — diferenciais */}
        <div>
          <div style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 700,
            color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase',
            marginBottom: 12,
          }}>Por que a Vem Passear em Jampa?</div>
          <h2 style={{
            fontFamily: 'Lora, serif', fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: 700, color: '#1A1A2E',
            margin: '0 0 36px', letterSpacing: '-0.6px', lineHeight: 1.15,
            textWrap: 'pretty',
          }}>Um atendimento que você vai querer recomendar</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {diferenciais.map((d, i) => (
              <div key={i} style={{
                display: 'flex', gap: 16, alignItems: 'flex-start',
              }}>
                {/* Check mark */}
                <div style={{
                  flexShrink: 0,
                  width: 28, height: 28,
                  borderRadius: 8,
                  background: 'rgba(255,107,53,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginTop: 2,
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 700,
                    color: '#1A1A2E', marginBottom: 4,
                  }}>{d.titulo}</div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: 14,
                    color: '#6B7280', lineHeight: 1.55, textWrap: 'pretty',
                  }}>{d.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <a href="https://wa.me/558399087830" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            marginTop: 36,
            background: '#004E89',
            color: 'white',
            fontFamily: 'DM Sans, sans-serif', fontSize: 16, fontWeight: 700,
            padding: '14px 24px', borderRadius: 100,
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(0,78,137,0.3)',
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,78,137,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,78,137,0.3)'; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.118 1.522 5.848L.057 23.292a.5.5 0 0 0 .651.651l5.444-1.465A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.535-5.209-1.462l-.374-.224-3.876 1.044 1.044-3.876-.224-.374A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Falar com Murillo agora
          </a>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { MurilloSection });
