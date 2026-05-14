import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { TESTIMONIALS } from '../data/testimonials'
import { SectionLabel, SectionTitle, GoldDivider } from './UI'

export default function TestimonialsSection() {
  const [ref, inView] = useInView()
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" ref={ref} style={{ padding: '8rem clamp(1.5rem, 5vw, 6rem)', background: '#080808' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem', opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <SectionLabel>Kind Words</SectionLabel>
        <SectionTitle>Couples Who Trusted Us</SectionTitle>
        <GoldDivider />
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease 0.3s' }}>
        <div style={{
          border: '1px solid rgba(196,145,63,0.12)', padding: 'clamp(2rem, 5vw, 4rem)',
          position: 'relative', background: 'linear-gradient(135deg, rgba(196,145,63,0.02) 0%, transparent 100%)',
          minHeight: '240px',
        }}>
          <div aria-hidden="true" style={{
            position: 'absolute', top: '2rem', left: 'clamp(1.5rem, 3vw, 3.5rem)',
            fontFamily: "'Cormorant Garamond', serif", fontSize: '6rem', lineHeight: 1,
            color: 'rgba(196,145,63,0.12)', fontWeight: 400,
          }}>"</div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)',
              fontWeight: 300, fontStyle: 'italic', color: 'rgba(245,240,234,0.85)',
              lineHeight: 1.7, marginBottom: '2rem',
            }}>
              {TESTIMONIALS[active].quote}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '32px', height: '1px', background: '#c4913f' }} />
              <div>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.15em', color: '#f5f0ea' }}>{TESTIMONIALS[active].name}</p>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', fontWeight: 200, letterSpacing: '0.2em', color: 'rgba(196,145,63,0.7)', textTransform: 'uppercase' }}>{TESTIMONIALS[active].location}</p>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '3px' }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#c4913f', fontSize: '0.6rem' }}>★</span>)}
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem' }} role="tablist" aria-label="Testimonials">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              role="tab" aria-selected={i === active} aria-label={`Testimonial ${i + 1}`}
              style={{
                width: i === active ? '24px' : '6px', height: '2px',
                background: i === active ? '#c4913f' : 'rgba(196,145,63,0.3)',
                border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
