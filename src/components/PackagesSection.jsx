import { useInView } from '../hooks/useInView'
import { PACKAGES } from '../data/packages'
import { SectionLabel, SectionTitle, GoldDivider } from './UI'

export default function PackagesSection() {
  const [ref, inView] = useInView()

  return (
    <section id="packages" ref={ref} style={{ padding: '8rem clamp(1.5rem, 5vw, 6rem)', background: '#0a0a0a' }}>
      <div style={{ textAlign: 'center', marginBottom: '4.5rem', opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <SectionLabel>Investment</SectionLabel>
        <SectionTitle>Cinematic Packages</SectionTitle>
        <GoldDivider />
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.85rem', fontWeight: 200, color: 'rgba(245,240,234,0.4)', letterSpacing: '0.06em', maxWidth: '400px', margin: '0 auto' }}>
          Every great story deserves the right canvas.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5px', maxWidth: '1000px', margin: '0 auto' }}>
        {PACKAGES.map((pkg, i) => (
          <div key={i} style={{
            position: 'relative',
            border: pkg.highlight ? '1px solid rgba(196,145,63,0.35)' : '1px solid rgba(255,255,255,0.06)',
            padding: '2.5rem 2rem',
            background: pkg.highlight ? 'linear-gradient(160deg, rgba(196,145,63,0.07) 0%, transparent 100%)' : '#0a0a0a',
            opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
            transition: `all 0.7s ease ${0.15 * i + 0.3}s`,
          }}>
            {pkg.highlight && (
              <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)',
                background: '#c4913f', padding: '0.3rem 1.2rem',
                fontFamily: "'Jost', sans-serif", fontSize: '0.55rem', fontWeight: 400,
                letterSpacing: '0.25em', textTransform: 'uppercase', color: '#0a0a0a', whiteSpace: 'nowrap',
              }}>Most Beloved</div>
            )}
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', fontWeight: 200, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#c4913f', marginBottom: '0.5rem' }}>{pkg.tag}</p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 300, color: '#f5f0ea', marginBottom: '0.5rem' }}>{pkg.name}</h3>
            <div style={{ marginBottom: '2rem' }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 300, color: pkg.highlight ? '#c4913f' : '#f5f0ea' }}>{pkg.price}</span>
              {pkg.price !== 'Custom' && <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', color: 'rgba(245,240,234,0.3)', letterSpacing: '0.1em' }}> USD</span>}
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
              {pkg.features.map((f, fi) => (
                <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                  <span style={{ color: '#c4913f', fontSize: '0.5rem' }}>◆</span>
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.8rem', fontWeight: 200, color: 'rgba(245,240,234,0.6)', letterSpacing: '0.05em' }}>{f}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                width: '100%', padding: '0.9rem',
                background: pkg.highlight ? '#c4913f' : 'transparent',
                border: pkg.highlight ? 'none' : '1px solid rgba(196,145,63,0.3)',
                color: pkg.highlight ? '#0a0a0a' : '#c4913f',
                fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', fontWeight: 300,
                letterSpacing: '0.25em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { if (!pkg.highlight) e.target.style.background = 'rgba(196,145,63,0.1)' }}
              onMouseLeave={(e) => { if (!pkg.highlight) e.target.style.background = 'transparent' }}
            >
              Enquire
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
