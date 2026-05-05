// Seção de Categorias — cards maiores com cor de fundo por categoria
const categorias = [
  {
    slug: 'pacotes',
    nome: 'Pacotes',
    descricao: 'Roteiros completos combinando os melhores passeios de João Pessoa.',
    bg: '#004E89',
    textColor: 'white',
    href: '/passeios/pacotes/',
  },
  {
    slug: 'litoral-sul',
    nome: 'Litoral Sul',
    descricao: 'Praias selvagens, dunas e paisagens intocadas ao sul da capital.',
    bg: '#1A6B52',
    textColor: 'white',
    href: '/passeios/litoral-sul/',
  },
  {
    slug: 'litoral-norte',
    nome: 'Litoral Norte',
    descricao: 'Catamarã, pôr do sol em Jacaré e as belezas do norte paraibano.',
    bg: '#7B4F12',
    textColor: 'white',
    href: '/passeios/litoral-norte/',
  },
  {
    slug: 'piscinas-naturais',
    nome: 'Piscinas Naturais',
    descricao: 'Areia Vermelha, Seixas e Picaozinho — recifes de coral ao rés do mar.',
    bg: '#0E5E8A',
    textColor: 'white',
    href: '/passeios/piscinas-naturais/',
  },
  {
    slug: 'city-tour',
    nome: 'City Tour',
    descricao: 'O centro histórico, as igrejas barrocas e a Lagoa do Parque Solon.',
    bg: '#4A3580',
    textColor: 'white',
    href: '/passeios/city-tour/',
  },
  {
    slug: 'interestaduais',
    nome: 'Interestaduais',
    descricao: 'Destinos além da Paraíba: Natal, Baía da Traição e mais.',
    bg: '#8B1A3A',
    textColor: 'white',
    href: '/passeios/interestaduais/',
  },
];

// Ícones SVG minimalistas por categoria
const CatIcon = ({ slug }) => {
  const icons = {
    'pacotes': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
        <rect x="8" y="16" width="32" height="24" rx="3" stroke="white" strokeWidth="2.5" strokeOpacity="0.7"/>
        <path d="M16 16V12a8 8 0 0 1 16 0v4" stroke="white" strokeWidth="2.5" strokeOpacity="0.7"/>
        <path d="M24 26v4M20 28h8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.9"/>
      </svg>
    ),
    'litoral-sul': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
        <path d="M4 34 C10 26 16 38 24 30 C32 22 38 36 44 28" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round"/>
        <circle cx="24" cy="16" r="7" stroke="white" strokeWidth="2.5" strokeOpacity="0.7"/>
        <path d="M24 9 V4M24 28v5M9 16H4M44 16h-5" stroke="white" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round"/>
      </svg>
    ),
    'litoral-norte': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
        <path d="M8 36 L24 12 L40 36" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" strokeLinejoin="round"/>
        <path d="M14 36 L24 20 L34 36" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" strokeLinejoin="round"/>
        <path d="M4 40h40" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round"/>
      </svg>
    ),
    'piscinas-naturais': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
        <circle cx="24" cy="22" r="12" stroke="white" strokeWidth="2.5" strokeOpacity="0.7"/>
        <circle cx="24" cy="22" r="5" stroke="white" strokeWidth="2" strokeOpacity="0.5"/>
        <path d="M6 38 C12 32 18 42 24 36 C30 30 36 40 42 34" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round"/>
      </svg>
    ),
    'city-tour': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
        <rect x="6" y="24" width="12" height="16" stroke="white" strokeWidth="2" strokeOpacity="0.6"/>
        <rect x="18" y="16" width="14" height="24" stroke="white" strokeWidth="2.5" strokeOpacity="0.8"/>
        <rect x="32" y="20" width="10" height="20" stroke="white" strokeWidth="2" strokeOpacity="0.6"/>
        <path d="M4 40h40" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round"/>
        <rect x="22" y="28" width="6" height="8" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
      </svg>
    ),
    'interestaduais': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
        <path d="M8 24 C8 15 15 8 24 8 C33 8 40 15 40 24" stroke="white" strokeWidth="2.5" strokeOpacity="0.7"/>
        <path d="M8 24 C8 33 15 40 24 40 C33 40 40 33 40 24" stroke="white" strokeWidth="2.5" strokeOpacity="0.7"/>
        <path d="M24 8 C18 14 16 20 16 24 C16 28 18 34 24 40" stroke="white" strokeWidth="1.5" strokeOpacity="0.4"/>
        <path d="M24 8 C30 14 32 20 32 24 C32 28 30 34 24 40" stroke="white" strokeWidth="1.5" strokeOpacity="0.4"/>
        <path d="M8 24h32" stroke="white" strokeWidth="1.5" strokeOpacity="0.4"/>
      </svg>
    ),
  };
  return icons[slug] || null;
};

const CategoriasSection = ({ layoutCards = 'grid' }) => {
  return (
    <section style={{
      background: '#FAFAF8',
      padding: 'clamp(64px, 8vw, 112px) 24px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header da seção */}
        <div style={{ marginBottom: 48, maxWidth: 560 }}>
          <div style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 700,
            color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase',
            marginBottom: 12,
          }}>Categorias</div>
          <h2 style={{
            fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700, color: '#1A1A2E',
            margin: 0, letterSpacing: '-0.8px', lineHeight: 1.15,
            textWrap: 'pretty',
          }}>Passeios em João Pessoa</h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 17, color: '#6B7280',
            margin: '14px 0 0', lineHeight: 1.6, textWrap: 'pretty',
          }}>6 categorias. 22 passeios. Curadoria local de confiança.</p>
        </div>

        {/* Grid de categorias */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: layoutCards === 'lista'
            ? '1fr'
            : 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 16,
        }}>
          {categorias.map((cat, i) => (
            <a key={cat.slug} href={cat.href} style={{
              background: cat.bg,
              borderRadius: 16,
              padding: layoutCards === 'lista' ? '24px 28px' : '32px 28px',
              textDecoration: 'none',
              display: layoutCards === 'lista' ? 'flex' : 'block',
              alignItems: layoutCards === 'lista' ? 'center' : 'flex-start',
              gap: layoutCards === 'lista' ? 20 : 0,
              position: 'relative', overflow: 'hidden',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.12)'; }}
            >
              {/* Textura de fundo sutil */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)',
                pointerEvents: 'none',
              }} />

              <div style={{ flexShrink: 0, marginBottom: layoutCards === 'lista' ? 0 : 20 }}>
                <CatIcon slug={cat.slug} />
              </div>

              <div>
                <div style={{
                  fontFamily: 'Lora, serif', fontSize: layoutCards === 'lista' ? 20 : 22,
                  fontWeight: 700, color: 'white',
                  marginBottom: 8, letterSpacing: '-0.3px',
                }}>{cat.nome}</div>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 14,
                  color: 'rgba(255,255,255,0.72)', lineHeight: 1.55,
                  textWrap: 'pretty',
                }}>{cat.descricao}</div>
              </div>

              {/* Seta */}
              <div style={{
                position: layoutCards === 'lista' ? 'static' : 'absolute',
                bottom: layoutCards !== 'lista' ? 24 : 'auto',
                right: layoutCards !== 'lista' ? 24 : 'auto',
                marginLeft: layoutCards === 'lista' ? 'auto' : 0,
                color: 'rgba(255,255,255,0.6)',
                flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Link ver todos */}
        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <a href="/passeios/" style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 600,
            color: '#004E89', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 6,
            borderBottom: '2px solid rgba(0,78,137,0.2)',
            paddingBottom: 2,
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = '#004E89'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,78,137,0.2)'}
          >
            Ver todos os 22 passeios
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { CategoriasSection });
