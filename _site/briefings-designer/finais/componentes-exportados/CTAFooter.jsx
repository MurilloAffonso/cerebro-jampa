// CTAFinal + Footer
const CTAFinal = ({ ctaVariant = 'laranja' }) => {
  const isDark = ctaVariant === 'azul';
  const bg = isDark ? '#004E89' : '#FF6B35';
  const btnBg = isDark ? '#FF6B35' : 'white';
  const btnColor = isDark ? 'white' : '#FF6B35';

  return (
    <section id="cta-final" style={{
      background: bg,
      padding: 'clamp(64px, 8vw, 100px) 24px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Blob decorativo */}
      <div style={{
        position: 'absolute', top: '-30%', right: '-10%',
        width: '50%', paddingBottom: '50%',
        background: isDark
          ? 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 720, margin: '0 auto',
        textAlign: 'center', position: 'relative', zIndex: 1,
      }}>
        <div style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 700,
          color: isDark ? 'rgba(255,107,53,0.9)' : 'rgba(255,255,255,0.7)',
          letterSpacing: '2px', textTransform: 'uppercase',
          marginBottom: 16,
        }}>Pronto para conhecer João Pessoa?</div>

        <h2 style={{
          fontFamily: 'Lora, serif',
          fontSize: 'clamp(28px, 5vw, 52px)',
          fontWeight: 700, lineHeight: 1.1,
          color: 'white',
          margin: '0 0 20px',
          letterSpacing: '-1px',
          textWrap: 'pretty',
        }}>
          Vamos Montar o Roteiro<br />que Você Sonha
        </h2>

        <p style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 18,
          color: isDark ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.85)',
          lineHeight: 1.6, margin: '0 0 40px', textWrap: 'pretty',
        }}>
          Murillo responde no WhatsApp em minutos. Sem formulário, sem espera. Só orientação prática de quem conhece João Pessoa de verdade.
        </p>

        <a href="https://wa.me/558399087830" style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          background: btnBg, color: btnColor,
          fontFamily: 'DM Sans, sans-serif', fontSize: 18, fontWeight: 800,
          padding: '18px 36px', borderRadius: 100,
          textDecoration: 'none',
          boxShadow: isDark
            ? '0 8px 40px rgba(255,107,53,0.4)'
            : '0 8px 40px rgba(0,0,0,0.15)',
          letterSpacing: '-0.3px',
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.118 1.522 5.848L.057 23.292a.5.5 0 0 0 .651.651l5.444-1.465A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.535-5.209-1.462l-.374-.224-3.876 1.044 1.044-3.876-.224-.374A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
          Chamar Murillo no WhatsApp
        </a>

        <p style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 13,
          color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.6)',
          marginTop: 16,
        }}>Resposta em minutos · Sem compromisso</p>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{
    background: '#1A1A2E',
    padding: 'clamp(48px, 6vw, 80px) 24px 32px',
    color: 'rgba(255,255,255,0.7)',
  }}>
    <div style={{
      maxWidth: 1200, margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'clamp(32px, 4vw, 56px)',
      marginBottom: 48,
    }}>
      {/* Coluna 1 — Sobre */}
      <div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8, background: '#FF6B35',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Lora, serif', fontWeight: 700, fontSize: 16, color: 'white',
          }}>VP</div>
          <span style={{
            fontFamily: 'Lora, serif', fontWeight: 700, fontSize: 15, color: 'white',
          }}>Vem Passear em Jampa</span>
        </div>
        <p style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 14, lineHeight: 1.65,
          margin: '0 0 16px', textWrap: 'pretty', maxWidth: 240,
        }}>
          Passeios em João Pessoa com atendimento direto, orientação local e confiança comprovada.
        </p>
        <div style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 12,
          color: 'rgba(255,255,255,0.4)', lineHeight: 1.6,
        }}>
          <div>CNPJ: 00.000.000/0001-00</div>
          <div>Cadastur: 52.077.577 — ativo</div>
        </div>
      </div>

      {/* Coluna 2 — Navegação */}
      <div>
        <div style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700,
          color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase',
          marginBottom: 16,
        }}>Passeios</div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { label: 'Todos os Passeios', href: '/passeios/' },
            { label: 'Litoral Sul', href: '/passeios/litoral-sul/' },
            { label: 'Litoral Norte', href: '/passeios/litoral-norte/' },
            { label: 'Piscinas Naturais', href: '/passeios/piscinas-naturais/' },
            { label: 'Pacotes', href: '/passeios/pacotes/' },
            { label: 'City Tour', href: '/passeios/city-tour/' },
            { label: 'Interestaduais', href: '/passeios/interestaduais/' },
            { label: 'Transfer 24h', href: '/servicos/transfer-24h/' },
            { label: 'FAQ', href: '/faq/' },
          ].map(item => (
            <a key={item.href} href={item.href} style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 14,
              color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'white'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
            >{item.label}</a>
          ))}
        </nav>
      </div>

      {/* Coluna 3 — Contato */}
      <div>
        <div style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700,
          color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase',
          marginBottom: 16,
        }}>Contato</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <a href="https://wa.me/558399087830" style={{
            display: 'flex', gap: 10, alignItems: 'flex-start',
            textDecoration: 'none', color: 'rgba(255,255,255,0.7)',
            fontFamily: 'DM Sans, sans-serif', fontSize: 14, lineHeight: 1.5,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0, marginTop: 2 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.118 1.522 5.848L.057 23.292a.5.5 0 0 0 .651.651l5.444-1.465A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.535-5.209-1.462l-.374-.224-3.876 1.044 1.044-3.876-.224-.374A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            (83) 99908-7830<br />
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>WhatsApp direto com Murillo</span>
          </a>
          <div style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 13,
            color: 'rgba(255,255,255,0.45)', lineHeight: 1.6,
          }}>
            João Pessoa, Paraíba — Brasil<br />
            vempassearjampa.com.br
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div style={{
      borderTop: '1px solid rgba(255,255,255,0.08)',
      paddingTop: 24,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 12,
    }}>
      <span style={{
        fontFamily: 'DM Sans, sans-serif', fontSize: 12,
        color: 'rgba(255,255,255,0.35)',
      }}>© 2026 Vem Passear em Jampa. Todos os direitos reservados.</span>
      <span style={{
        fontFamily: 'DM Sans, sans-serif', fontSize: 12,
        color: 'rgba(255,255,255,0.25)',
      }}>vempassearjampa.com.br</span>
    </div>
  </footer>
);

Object.assign(window, { CTAFinal, Footer });
