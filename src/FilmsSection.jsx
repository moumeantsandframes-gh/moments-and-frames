import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { FILMS } from '../data/films'
import { SectionLabel, SectionTitle, GoldDivider } from './UI'

function FilmCard({ film, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onClick={() => onClick(film)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(film)}
      aria-label={`Watch ${film.title}`}
      style={{
        position: 'relative', overflow: 'hidden', aspectRatio: '16/10', cursor: 'pointer',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <img src={film.thumb} alt={film.title}
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          filter: hovered ? 'brightness(0.45)' : 'brightness(0.65)',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.4s',
      }}>
        <div style={{
          width: '56px', height: '56px', border: '1px solid rgba(196,145,63,0.8)', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(196,145,63,0.12)', backdropFilter: 'blur(4px)',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#c4913f"><polygon points="5,3 19,12 5,21" /></svg>
        </div>
      </div>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem',
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
        transform: hovered ? 'translateY(0)' : 'translateY(8px)',
        opacity: hovered ? 1 : 0.7, transition: 'all 0.4s ease',
      }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 400, color: '#f5f0ea', marginBottom: '0.25rem' }}>{film.title}</p>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', fontWeight: 200, letterSpacing: '0.2em', color: 'rgba(196,145,63,0.85)', textTransform: 'uppercase' }}>
          {film.location} · {film.duration}
        </p>
      </div>
    </div>
  )
}

function VideoModal({ film, onClose }) {
  if (!film) return null
  return (
    <div onClick={onClose} role="dialog" aria-modal="true" aria-label="Film player"
      style={{
        position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(0,0,0,0.96)',
        backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'mf-fade-in 0.3s ease',
      }}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ width: 'min(90vw, 960px)', position: 'relative' }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: '-3rem', right: 0, background: 'none', border: 'none',
          color: 'rgba(255,255,255,0.5)', fontFamily: "'Jost', sans-serif", fontSize: '0.65rem',
          letterSpacing: '0.3em', cursor: 'pointer', textTransform: 'uppercase',
        }}>✕ Close</button>
        <div style={{ aspectRatio: '16/9', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <img src={film.thumb} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3, position: 'absolute', inset: 0 }} />
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div style={{
              width: '72px', height: '72px', border: '1px solid rgba(196,145,63,0.7)', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem',
              background: 'rgba(196,145,63,0.1)',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#c4913f"><polygon points="5,3 19,12 5,21" /></svg>
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: '#f5f0ea', marginBottom: '0.5rem' }}>{film.title}</p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', letterSpacing: '0.25em', color: '#c4913f', textTransform: 'uppercase' }}>{film.location}</p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', marginTop: '1.5rem', letterSpacing: '0.1em' }}>
              Replace this modal with your hosted video URL
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FilmsSection() {
  const [ref, inView] = useInView()
  const [activeFilm, setActiveFilm] = useState(null)

  return (
    <section id="films" ref={ref} style={{ padding: '7rem clamp(1.5rem, 5vw, 5rem)', background: '#0a0a0a' }}>
      <div style={{
        textAlign: 'center', marginBottom: '4rem',
        opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)', transition: 'all 0.8s ease',
      }}>
        <SectionLabel>Featured Work</SectionLabel>
        <SectionTitle>Films That Live Forever</SectionTitle>
        <GoldDivider />
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
        gap: '1.5px', opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease 0.3s',
      }}>
        {FILMS.map((film, i) => (
          <div key={film.id} style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)', transition: `all 0.7s ease ${0.1 * i + 0.4}s` }}>
            <FilmCard film={film} onClick={setActiveFilm} />
          </div>
        ))}
      </div>
      <VideoModal film={activeFilm} onClose={() => setActiveFilm(null)} />
    </section>
  )
}
