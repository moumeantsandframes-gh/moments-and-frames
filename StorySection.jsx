import { useInView } from '../hooks/useInView'
import { SectionLabel, SectionTitle } from './UI'

const PILLARS = [
  { icon: '◎', title: 'Narrative-Driven', desc: 'We don't just record events. We discover the story hiding inside your day — the pauses, the laughter, the tears — and weave them into a cinematic arc.' },
  { icon: '✦', title: 'Emotional Truth', desc: 'Every frame is chosen for feeling, not spectacle. We follow the light and the love, letting authenticity speak louder than production.' },
  { icon: '▷', title: 'Timeless Craft', desc: 'Shot on cinema-grade lenses, color-graded like a feature film. Your wedding film should still move you forty years from now.' },
]

export default function StorySection() {
  const [ref, inView] = useInView()

  return (
    <section id="story" ref={ref} style={{
      padding: '8rem clamp(1.5rem, 5vw, 6rem)',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #0e0c09 50%, #0a0a0a 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(196,145,63,0.04) 0%, transparent 65%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="mf-story-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center',
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)', transition: 'all 0.9s ease',
        }}>
          <div>
            <SectionLabel>Our Philosophy</SectionLabel>
            <SectionTitle style={{ marginBottom: '1.5rem' }}>
              Not a video.<br /><em style={{ color: '#c4913f' }}>A film.</em>
            </SectionTitle>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.95rem', fontWeight: 200, lineHeight: 2, color: 'rgba(245,240,234,0.55)', letterSpacing: '0.04em' }}>
              Ordinary wedding videography captures what happened. We capture how it felt. Through a
              cinematic language of light, movement, and silence — we create immersive films that
              transport you back to the most visceral moments of your love story.
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontWeight: 300, fontStyle: 'italic',
              color: 'rgba(196,145,63,0.8)', borderLeft: '1px solid rgba(196,145,63,0.3)',
              paddingLeft: '1.2rem', marginTop: '2rem', lineHeight: 1.6,
            }}>
              "We don't shoot weddings. We direct love stories."
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {PILLARS.map((p, i) => (
              <div key={i} style={{
                display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateX(20px)',
                transition: `all 0.7s ease ${0.2 * i + 0.5}s`,
              }}>
                <span style={{ color: '#c4913f', fontSize: '1rem', marginTop: '0.2rem', flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f5f0ea', marginBottom: '0.5rem' }}>{p.title}</h3>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.85rem', fontWeight: 200, lineHeight: 1.8, color: 'rgba(245,240,234,0.45)' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
