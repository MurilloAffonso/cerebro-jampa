// Seção Passeios Prioritários — cards full-bleed com overlay de texto
const passeios = [
  {
    slug: 'seixas',
    nome: 'Piscinas de Seixas',
    descricao: 'O ponto mais oriental das Américas. Piscinas naturais em recifes de coral com água cristalina e transparente.',
    duracao: '4h',
    categoria: 'Piscinas Naturais',
    categoriaCor: '#0E5E8A',
    bgPattern: 'linear-gradient(135deg, #0d3b5e 0%, #1a6b8a 40%, #2d9cad 100%)',
  },
  {
    slug: 'areia-vermelha',
    nome: 'Areia Vermelha',
    descricao: 'Banco de areia avermelhada que emerge do mar a cada maré baixa. Um fenômeno único no litoral norte paraibano.',
    duracao: '5h',
    categoria: 'Litoral Norte',
    categoriaCor: '#7B4F12',
    bgPattern: 'linear-gradient(135deg, #4a2c0a 0%, #7b4a1a 40%, #c07830 100%)',
  },
  {
    slug: 'litoral-sul-classico',
    nome: 'Litoral Sul Clássico',
    descricao: 'Calhau, Carapibus, Tabatinga e Tambaba. As praias mais selvagens e belas ao sul de João Pessoa.',
    duracao: '8h',
    categoria: 'Litoral Sul',
    categoriaCor: '#1A6B52',
    bgPattern: 'linear-gradient(135deg, #0e3d2a 0%, #1a6b52 40%, #2d9c78 100%)',
  },
];

// Wave divider SVG
const WaveDivider = ({ flipped = false, fill = '#FAFAF8', bg = 'white' }) => (
  <div style={{ background: bg, lineHeight: 0, overflow: 'hidden' }}>
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      style={{ width: '100%', height: 60, display: 'block', transform: flipped ? 'scaleY(-1)' : 'none' }}
    >
      <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill={fill}/>
    </svg>
  </div>
);

const PasseioCard = ({ passeio }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      style={{
        borderRadius: 20, overflow: 'hidden',
        position: 'relative',
        aspectRatio: '3/4',
        background: passeio.bgPattern,
        boxShadow: hovered
          ? '0 24px 60px rgba(0,0,0,0.35)'
          : '0 4px 24px rgba(0,0,0,0.18)',
        transition: 'box-shadow 0.3s, transform 0.3s',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Pattern label */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '1.5px',
        color: 'rgba(255,255,255,0.18)', textAlign: 'center', textTransform: 'uppercase',
        lineHeight: 1.8, width: '80%',
        pointerEvents: 'none',
        textWrap: 'balance',
      }}>
        foto do passeio<br />{passeio.slug}
      </div>

      {/* Overlay gradient bottom */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 45%, transparent 70%)',
        transition: 'opacity 0.3s',
      }} />

      {/* Conteúdo */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '28px 24px',
      }}>
        {/* Tag categoria */}
        <div style={{
          display: 'inline-block',
          background: passeio.categoriaCor,
          borderRadius: 100,
          padding: '4px 12px',
          fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700,
          color: 'white', letterSpacing: '0.5px', textTransform: 'uppercase',
          marginBottom: 10,
        }}>{passeio.categoria}</div>

        <h3 style={{
          fontFamily: 'Lora, serif', fontSize: 'clamp(20px, 2.5vw, 26px)',
          fontWeight: 700, color: 'white',
          margin: '0 0 8px', letterSpacing: '-0.4px', lineHeight: 1.2,
        }}>{passeio.nome}</h3>

        <p style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 14,
          color: 'rgba(255,255,255,0.72)', lineHeight: 1.5,
          margin: '0 0 20px', textWrap: 'pretty',
          maxHeight: hovered ? 80 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}>{passeio.descricao}</p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 13,
            color: 'rgba(255,255,255,0.55)',
          }}>
            <svg style={{ verticalAlign: 'middle', marginRight: 4 }} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            {passeio.duracao}
          </div>
          <a href={`/passeios/piscinas-naturais/${passeio.slug}/`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: '#FF6B35',
            color: 'white',
            fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 700,
            padding: '9px 16px', borderRadius: 100,
            textDecoration: 'none',
            transition: 'background 0.15s',
          }}>
            Ver detalhes
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const PasseiosSection = () => (
  <>
    <WaveDivider fill="white" bg="#FAFAF8" />
    <section style={{
      background: 'white',
      padding: 'clamp(64px, 8vw, 112px) 24px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 700,
            color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase',
            marginBottom: 12,
          }}>Em destaque</div>
          <h2 style={{
            fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700, color: '#1A1A2E',
            margin: '0 0 14px', letterSpacing: '-0.8px', lineHeight: 1.15,
          }}>Os Mais Procurados</h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 17, color: '#6B7280',
            margin: 0, lineHeight: 1.6, maxWidth: 480,
          }}>Os passeios que turistas mais pedem. Duração, preço e saída — Murillo orienta tudo pelo WhatsApp.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {passeios.map(p => <PasseioCard key={p.slug} passeio={p} />)}
        </div>
      </div>
    </section>
    <WaveDivider flipped fill="white" bg="#FAFAF8" />
  </>
);

Object.assign(window, { PasseiosSection, WaveDivider });
