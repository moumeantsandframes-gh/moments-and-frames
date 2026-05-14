import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionLabel, SectionTitle, GoldDivider } from './UI'

const INPUT_FIELDS = [
  { key: 'name',  label: 'Full Name',     type: 'text',  placeholder: 'Your name' },
  { key: 'email', label: 'Email',         type: 'email', placeholder: 'your@email.com' },
  { key: 'date',  label: 'Wedding Date',  type: 'text',  placeholder: 'Month, Year' },
]

export default function ContactSection() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', date: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (!form.name || !form.email) return
    setSent(true)
  }

  const inputStyle = {
    width: '100%', padding: '0.85rem 0',
    background: 'transparent', border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    color: '#f5f0ea', fontFamily: "'Jost', sans-serif",
    fontSize: '0.9rem', fontWeight: 200, letterSpacing: '0.06em',
    outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.3s',
  }

  return (
    <section id="contact" ref={ref} style={{ padding: '8rem clamp(1.5rem, 5vw, 6rem)', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem', opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease' }}>
          <SectionLabel>Begin Your Story</SectionLabel>
          <SectionTitle>Let's Make Your Film</SectionTitle>
          <GoldDivider />
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.85rem', fontWeight: 200, color: 'rgba(245,240,234,0.4)', letterSpacing: '0.06em' }}>
            Most dates book 12–18 months in advance. Reach out early.
          </p>
        </div>

        <div className="mf-contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '5rem', opacity: inView ? 1 : 0, transition: 'opacity 0.9s ease 0.2s' }}>
          {/* Contact info */}
          <div>
            {[
              { label: 'Email', content: <a href="mailto:hello@moumeants.com" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: 'rgba(245,240,234,0.7)', textDecoration: 'none' }}>hello@moumeants.com</a> },
              { label: 'Phone', content: <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: 'rgba(245,240,234,0.7)' }}>+1 (310) 000-0000</p> },
            ].map(({ label, content }) => (
              <div key={label} style={{ marginBottom: '2.5rem' }}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', fontWeight: 200, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#c4913f', marginBottom: '0.5rem' }}>{label}</p>
                {content}
              </div>
            ))}
            <div style={{ marginBottom: '3rem' }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', fontWeight: 200, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#c4913f', marginBottom: '1rem' }}>Follow</p>
              <div style={{ display: 'flex', gap: '1.2rem' }}>
                {['Instagram', 'Vimeo', 'YouTube'].map((s) => (
                  <a key={s} href="#" style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', fontWeight: 200, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,240,234,0.35)', textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => (e.target.style.color = '#c4913f')}
                    onMouseLeave={(e) => (e.target.style.color = 'rgba(245,240,234,0.35)')}
                  >{s}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(196,145,63,0.2)', padding: '4rem 2rem', textAlign: 'center' }}>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3rem', color: '#c4913f', marginBottom: '1rem' }}>✦</div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: '#f5f0ea', marginBottom: '0.8rem' }}>Thank you, {form.name}.</p>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.8rem', fontWeight: 200, color: 'rgba(245,240,234,0.45)', letterSpacing: '0.08em' }}>We'll be in touch within 48 hours.</p>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {INPUT_FIELDS.map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <label style={{ display: 'block', fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', fontWeight: 200, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(196,145,63,0.7)', marginBottom: '0.5rem' }}>{label}</label>
                  <input type={type} placeholder={placeholder} value={form[key]}
                    onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'rgba(196,145,63,0.6)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', fontWeight: 200, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(196,145,63,0.7)', marginBottom: '0.5rem' }}>Your Story</label>
                <textarea placeholder="Tell us about your wedding..." value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  rows={4}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'rgba(196,145,63,0.6)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)')}
                />
              </div>
              <button onClick={handleSubmit}
                style={{
                  marginTop: '1rem', padding: '1rem 2.5rem', background: '#c4913f', border: 'none',
                  color: '#0a0a0a', fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', fontWeight: 300,
                  letterSpacing: '0.3em', textTransform: 'uppercase', cursor: 'pointer', alignSelf: 'flex-start', transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.background = '#d4a24f')}
                onMouseLeave={(e) => (e.target.style.background = '#c4913f')}
              >
                Send Enquiry
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
