import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)
  const pos = useRef({ x: -200, y: -200 })
  const raf = useRef(null)

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', move)

    const loop = () => {
      if (ref.current) {
        ref.current.style.transform = `translate(${pos.current.x - 160}px, ${pos.current.y - 160}px)`
      }
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 320,
        height: 320,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,145,73,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 9998,
        willChange: 'transform',
      }}
    />
  )
}
