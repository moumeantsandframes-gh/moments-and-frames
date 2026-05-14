import { useInView } from '../hooks/useInView'
import { SectionLabel, SectionTitle } from './UI'

export default function AboutSection() {
  const [ref, inView] = useInView()

  return (
    <section id="about" ref={ref} style={{ padding: '8rem clamp(1.5rem, 5vw, 6rem)', background: '#080808', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="mf-about-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem', alignItems: 'center',
          opacity: inView ? 1 : 0, transition: 'all 0.9s ease',
        }}>
          <div style={{ position: 'relative' }}>
            <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=700&q=80"
                alt="Filmmaker portrait"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.75) saturate(0.8)' }}
              />
            </div>
            <div aria-hidden="true" style={{
              position: 'absolute', top: '1.5rem', left: '1.5rem', right: '-1.5rem', bottom: '-1.5rem',
              border: '1px solid rgba(196,145,63,0.2)', zIndex: -1,
            }} />
          </div>
          <div>
            <SectionLabel>The Filmmaker</SectionLabel>
            <SectionTitle style={{ marginBottom: '1.5rem' }}>
              Driven by<br /><em style={{ color: '#c4913f' }}>Moments</em>
            </SectionTitle>
            <div style={{ width: '40px', height: '1px', background: '#c4913f', marginBottom: '2rem' }} />
            {[
              'My journey into wedding cinema began the day I watched a couple see their wedding film for the first time. The way they reached for each other's hands without thinking — that was it. That was the moment I understood what I was really making.',
              'I studied filmmaking in London and spent years working on documentary features before finding my true calling: the intimate, unrepeatable cinema of love stories. Every wedding is its own genre, its own world.',
              'I believe the best wedding film is one you can feel. My approach is quiet, unobtrusive, and deeply attentive. I chase light. I wait for truth. I find the frames that others miss.',
            ].map((p, i) => (
              <p key={i} style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.88rem', fontWeight: 200, lineHeight: 2, color: 'rgba(245,240,234,0.5)', marginBottom: '1.2rem', letterSpacing: '0.04em' }}>{p}</p>
            ))}
            <div style={{ display: 'flex', gap: '3rem', marginTop: '2.5rem' }}>
              {[['120+', 'Films Made'], ['8', 'Years'], ['14', 'Countries']].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 300, color: '#c4913f', lineHeight: 1 }}>{num}</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', fontWeight: 200, letterSpacing: '0.25em', color: 'rgba(245,240,234,0.35)', textTransform: 'uppercase', marginTop: '0.3rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
