import { useState, useEffect } from 'react'

const NAV_LINKS = ['Films', 'Story', 'Packages', 'About', 'Contact']

export default function Navbar({ visible }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(196,145,63,0.1)' : 'none',
          transition: 'all 0.5s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          aria-label="Go to top"
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.25rem',
              fontWeight: 400,
              color: '#c4913f',
              letterSpacing: '0.1em',
            }}
          >
            M&amp;F
          </span>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="nav-link-desktop"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: "'Jost', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 300,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#c4913f')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.55)')}
            >
              {link}
            </button>
          ))}

          <button
            onClick={() => scrollTo('contact')}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.65rem',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '0.55rem 1.4rem',
              border: '1px solid rgba(196,145,63,0.6)',
              background: 'transparent',
              color: '#c4913f',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#c4913f'
              e.target.style.color = '#0a0a0a'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.color = '#c4913f'
            }}
          >
            Book Now
          </button>

          {/* Mobile menu toggle */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '4px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '1px',
                  background: '#c4913f',
                  transition: 'all 0.3s',
                  transformOrigin: 'center',
                  transform:
                    menuOpen
                      ? i === 0
                        ? 'rotate(45deg) translate(4px, 4px)'
                        : i === 1
                        ? 'scaleX(0)'
                        : 'rotate(-45deg) translate(4px, -4px)'
                      : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          zIndex: 999,
          background: 'rgba(8,8,8,0.97)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(196,145,63,0.1)',
          display: 'flex',
          flexDirection: 'column',
          padding: menuOpen ? '1.5rem clamp(1.5rem, 5vw, 3rem)' : '0 clamp(1.5rem, 5vw, 3rem)',
          gap: '0',
          maxHeight: menuOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: '1px solid rgba(196,145,63,0.08)',
              cursor: 'pointer',
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.8rem',
              fontWeight: 200,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,234,0.6)',
              padding: '1rem 0',
              textAlign: 'left',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#c4913f')}
            onMouseLeave={(e) => (e.target.style.color = 'rgba(245,240,234,0.6)')}
          >
            {link}
          </button>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-link-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
