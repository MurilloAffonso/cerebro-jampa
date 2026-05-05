// Header component — sticky nav com logo VP + nav desktop + CTA WhatsApp
const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(250,250,248,0.95)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(31,41,55,0.08)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0 24px',
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="/" style={{
          display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none',
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: '#FF6B35',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Lora, serif', fontWeight: 700,
            fontSize: 16, color: 'white', letterSpacing: '-0.5px',
          }}>VP</div>
          <span style={{
            fontFamily: 'Lora, serif', fontWeight: 700,
            fontSize: 15, color: '#1A1A2E', letterSpacing: '-0.3px',
            lineHeight: 1.2,
          }}>Vem Passear<br /><span style={{ fontSize: 11, fontWeight: 400, fontFamily: 'DM Sans, sans-serif', color: '#6B7280', letterSpacing: '0.5px', textTransform: 'uppercase' }}>em Jampa</span></span>
        </a>

        {/* Nav desktop */}
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="nav-desktop">
          {[
            { label: 'Passeios', href: '/passeios/' },
            { label: 'Litoral Sul', href: '/passeios/litoral-sul/' },
            { label: 'Litoral Norte', href: '/passeios/litoral-norte/' },
            { label: 'Piscinas Naturais', href: '/passeios/piscinas-naturais/' },
            { label: 'FAQ', href: '/faq/' },
          ].map(item => (
            <a key={item.href} href={item.href} style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500,
              color: '#1F2937', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#FF6B35'}
            onMouseLeave={e => e.target.style.color = '#1F2937'}
            >{item.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <a href="https://wa.me/558399087830" style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: '#25D366', color: 'white',
          fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 600,
          padding: '10px 18px', borderRadius: 100,
          textDecoration: 'none',
          boxShadow: '0 2px 12px rgba(37,211,102,0.3)',
          transition: 'transform 0.15s, box-shadow 0.15s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(37,211,102,0.3)'; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.118 1.522 5.848L.057 23.292a.5.5 0 0 0 .651.651l5.444-1.465A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.535-5.209-1.462l-.374-.224-3.876 1.044 1.044-3.876-.224-.374A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
          Reservar no WhatsApp
        </a>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="hamburger"
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: 8, color: '#1F2937',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: '#FAFAF8', borderTop: '1px solid rgba(31,41,55,0.08)',
          padding: '16px 24px 24px',
        }}>
          {[
            { label: 'Todos os Passeios', href: '/passeios/' },
            { label: 'Litoral Sul', href: '/passeios/litoral-sul/' },
            { label: 'Litoral Norte', href: '/passeios/litoral-norte/' },
            { label: 'Piscinas Naturais', href: '/passeios/piscinas-naturais/' },
            { label: 'FAQ', href: '/faq/' },
          ].map(item => (
            <a key={item.href} href={item.href} style={{
              display: 'block', padding: '12px 0',
              fontFamily: 'DM Sans, sans-serif', fontSize: 16, fontWeight: 500,
              color: '#1F2937', textDecoration: 'none',
              borderBottom: '1px solid rgba(31,41,55,0.06)',
            }}>{item.label}</a>
          ))}
          <a href="https://wa.me/558399087830" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            marginTop: 16,
            background: '#25D366', color: 'white',
            fontFamily: 'DM Sans, sans-serif', fontSize: 16, fontWeight: 600,
            padding: '14px 18px', borderRadius: 100,
            textDecoration: 'none',
          }}>Reservar no WhatsApp</a>
        </div>
      )}
    </header>
  );
};

Object.assign(window, { Header });
