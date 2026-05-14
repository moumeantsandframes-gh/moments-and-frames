import { useState, useEffect } from 'react'

export default function LoadingIntro({ onDone }) {
  const [phase, setPhase] = useState(0) // 0 = visible, 1 = fading out

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2200)
    const t2 = setTimeout(() => onDone(), 2900)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [onDone])

  return (
    <div
      aria-label="Loading"
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0a0a0a',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        transition: 'opacity 0.7s ease',
        opacity: phase === 1 ? 0 : 1,
        pointerEvents: phase === 1 ? 'none' : 'all',
      }}
    >
      {/* Cinematic letterbox bars */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '12%',
          background: '#000',
          transform: phase === 1 ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.7s ease',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '12%',
          background: '#000',
          transform: phase === 1 ? 'translateY(100%)' : 'translateY(0)',
          transition: 'transform 0.7s ease',
        }}
      />

      {/* Brand mark */}
      <div style={{ textAlign: 'center', animation: 'mf-fade-up 0.9s ease forwards' }}>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
            fontWeight: 300,
            letterSpacing: '0.25em',
            color: '#c4913f',
            marginBottom: '0.3rem',
            textTransform: 'uppercase',
          }}
        >
          Moumeants
        </div>
        <div
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: 'clamp(0.6rem, 1.5vw, 0.8rem)',
            fontWeight: 200,
            letterSpacing: '0.55em',
            color: 'rgba(255,255,255,0.35)',
            textTransform: 'uppercase',
          }}
        >
          &amp; Frames
        </div>
        <div
          style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #c4913f, transparent)',
            margin: '2.5rem auto 0',
            animation: 'mf-width-in 1.2s ease 0.4s both',
          }}
        />
      </div>
    </div>
  )
}
