// HeroSection — Variação A (sem foto, mesh gradient) + Variação B (com foto placeholder)
const HeroSection = ({ variant = 'A', heroBg }) => {
  const isB = variant === 'B';

  const heroStyle = isB ? {
    position: 'relative',
    minHeight: 'min(100svh, 780px)',
    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
    overflow: 'hidden',
    background: '#1A1A2E',
  } : {
    position: 'relative',
    minHeight: 'min(100svh, 780px)',
    display: 'flex', flexDirection: 'column', justifyContent: 'center',
    overflow: 'hidden',
    background: heroBg || 'linear-gradient(135deg, #004E89 0%, #1A1A2E 40%, #FF6B35 100%)',
  };

  return (
    <section id="hero-section" style={heroStyle}>
      {/* Variação A — formas orgânicas decorativas */}
      {!isB && (
        <>
          {/* Blob laranja */}
          <div style={{
            position: 'absolute', top: '-10%', right: '-5%',
            width: '55%', paddingBottom: '55%',
            background: 'radial-gradient(circle, rgba(255,107,53,0.35) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }} />
          {/* Blob azul */}
          <div style={{
            position: 'absolute', bottom: '5%', left: '-8%',
            width: '45%', paddingBottom: '45%',
            background: 'radial-gradient(circle, rgba(0,78,137,0.5) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(50px)',
            pointerEvents: 'none',
          }} />
          {/* Grain overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            opacity: 0.6,
            pointerEvents: 'none',
          }} />
          {/* Linha decorativa ondas */}
          <svg style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', opacity: 0.15 }} viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z" fill="white"/>
          </svg>
        </>
      )}

      {/* Variação B — foto placeholder */}
      {isB && (
        <>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'repeating-linear-gradient(135deg, #0d2a45 0px, #0d2a45 2px, #1A1A2E 2px, #1A1A2E 24px)',
            opacity: 0.8,
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(26,26,46,0.98) 0%, rgba(26,26,46,0.4) 50%, rgba(26,26,46,0.2) 100%)',
          }} />
          {/* Label placeholder */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '2px',
            color: 'rgba(255,255,255,0.2)', textAlign: 'center', textTransform: 'uppercase',
            pointerEvents: 'none',
          }}>
            foto real de João Pessoa<br />aqui — praia, mar turquesa, pôr do sol
          </div>
        </>
      )}

      {/* Conteúdo */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 1200, margin: '0 auto', width: '100%',
        padding: isB ? '48px 24px 72px' : '80px 24px',
        paddingTop: isB ? 48 : 120,
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(255,107,53,0.2)', border: '1px solid rgba(255,107,53,0.4)',
          borderRadius: 100, padding: '5px 14px',
          fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 600,
          color: '#FF6B35', letterSpacing: '0.5px', textTransform: 'uppercase',
          marginBottom: 24,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF6B35', display: 'inline-block' }} />
          João Pessoa, Paraíba
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: 'Lora, serif',
          fontSize: 'clamp(42px, 7vw, 80px)',
          fontWeight: 700, lineHeight: 1.08,
          color: 'white',
          margin: '0 0 24px',
          maxWidth: 720,
          letterSpacing: '-1.5px',
          textWrap: 'pretty',
        }}>
          O Que Fazer em<br />
          <span style={{ color: '#FF6B35' }}>João Pessoa?</span>
        </h1>

        {/* Subtítulo */}
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 'clamp(16px, 2vw, 20px)',
          fontWeight: 400, lineHeight: 1.6,
          color: 'rgba(255,255,255,0.78)',
          margin: '0 0 40px',
          maxWidth: 520,
          textWrap: 'pretty',
        }}>
          Praias paradisíacas, piscinas de corais, catamarã e o pôr do sol mais emocionante do Brasil. Murillo te orienta do jeito certo.
        </p>

        {/* CTA */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <a href="https://wa.me/558399087830" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#FF6B35',
            color: 'white',
            fontFamily: 'DM Sans, sans-serif', fontSize: 17, fontWeight: 700,
            padding: '16px 28px', borderRadius: 100,
            textDecoration: 'none',
            boxShadow: '0 4px 32px rgba(255,107,53,0.45)',
            transition: 'transform 0.15s, box-shadow 0.15s',
            letterSpacing: '-0.2px',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(255,107,53,0.6)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 32px rgba(255,107,53,0.45)'; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.118 1.522 5.848L.057 23.292a.5.5 0 0 0 .651.651l5.444-1.465A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.535-5.209-1.462l-.374-.224-3.876 1.044 1.044-3.876-.224-.374A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Montar Meu Roteiro no WhatsApp
          </a>
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 13,
            color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2px',
          }}>Sem compromisso — resposta em minutos</span>
        </div>

        {/* Stats abaixo do CTA */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 24,
          marginTop: 56,
          paddingTop: 32,
          borderTop: '1px solid rgba(255,255,255,0.12)',
        }}>
          {[
            { value: '★ 4.9', label: '61 avaliações Google' },
            { value: 'Cadastur', label: '52.077.577 — ativo' },
            { value: 'WhatsApp', label: 'Atendimento direto' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{
                fontFamily: 'Lora, serif', fontSize: 18, fontWeight: 700,
                color: '#FF6B35', marginBottom: 3,
              }}>{stat.value}</div>
              <div style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: 12,
                color: 'rgba(255,255,255,0.5)', letterSpacing: '0.3px',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { HeroSection });
