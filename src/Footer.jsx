export default function Footer() {
  return (
    <footer style={{
      padding: '3rem clamp(1.5rem, 5vw, 5rem)',
      background: '#060606',
      borderTop: '1px solid rgba(196,145,63,0.08)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1.5rem',
    }}>
      <div>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 300, color: '#c4913f', letterSpacing: '0.1em' }}>
          Moumeants &amp; Frames
        </p>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.55rem', fontWeight: 200, letterSpacing: '0.3em', color: 'rgba(245,240,234,0.2)', marginTop: '0.3rem', textTransform: 'uppercase' }}>
          Wedding Cinema · Est. 2016
        </p>
      </div>
      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', fontWeight: 200, letterSpacing: '0.2em', color: 'rgba(245,240,234,0.2)' }}>
        © {new Date().getFullYear()} Moumeants &amp; Frames. All rights reserved.
      </p>
    </footer>
  )
}
