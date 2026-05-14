import { useState, useEffect } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      style={{ position: 'relative', height: '100vh', minHeight: '600px', overflow: 'hidden' }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, #0d0b09 0%, #1a1108 35%, #0a0a0a 70%, #060608 100%)',
        }}
      />

      {/* Cinematic vignette */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 40%, transparent 30%, rgba(0,0,0,0.85) 100%)',
          zIndex: 1,
        }}
      />

      {/* Floating light leak */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '60%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(196,145,63,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'mf-drift 8s ease-in-out infinite alternate',
          zIndex: 1,
        }}
      />

      {/* Letterbox bars */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '8vh', background: '#000', zIndex: 2 }}
      />
      <div
        aria-hidden="true"
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '8vh', background: '#000', zIndex: 2 }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 clamp(1.5rem, 6vw, 8rem)',
        }}
      >
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(30px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
          }}
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: 'clamp(0.6rem, 1.2vw, 0.72rem)',
              fontWeight: 200,
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              color: '#c4913f',
              marginBottom: '1.5rem',
            }}
          >
            Wedding Cinematography
          </p>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.8rem, 8vw, 7.5rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              color: '#f5f0ea',
              letterSpacing: '0.02em',
              marginBottom: '1.5rem',
              maxWidth: '900px',
            }}
          >
            Every Love Story
            <br />
            <em style={{ fontStyle: 'italic', color: '#c4913f' }}>Deserves Cinema</em>
          </h1>

          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
              fontWeight: 200,
              color: 'rgba(245,240,234,0.5)',
              letterSpacing: '0.08em',
              maxWidth: '500px',
              margin: '0 auto 3rem',
              lineHeight: 1.8,
            }}
          >
            We craft timeless wedding films that capture the raw emotion, stolen glances, and
            unrepeatable moments of your most sacred day.
          </p>

          <div
            style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <button
              onClick={() => scrollTo('films')}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 300,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                padding: '1rem 2.5rem',
                background: '#c4913f',
                color: '#0a0a0a',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.background = '#d4a24f')}
              onMouseLeave={(e) => (e.target.style.background = '#c4913f')}
            >
              Watch Films
            </button>
            <button
              onClick={() => scrollTo('contact')}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 300,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                padding: '1rem 2.5rem',
                background: 'transparent',
                color: 'rgba(245,240,234,0.8)',
                border: '1px solid rgba(245,240,234,0.25)',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#c4913f'
                e.target.style.color = '#c4913f'
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'rgba(245,240,234,0.25)'
                e.target.style.color = 'rgba(245,240,234,0.8)'
              }}
            >
              Book a Session
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '12vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.8rem',
            opacity: loaded ? 0.5 : 0,
            transition: 'opacity 1s ease 1.8s',
          }}
        >
          <div
            style={{
              width: '1px',
              height: '50px',
              background: 'linear-gradient(to bottom, transparent, #c4913f)',
              animation: 'mf-scroll-pulse 2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.55rem',
              letterSpacing: '0.4em',
              color: '#c4913f',
              textTransform: 'uppercase',
            }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  )
}
