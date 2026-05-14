// Shared UI primitives

export function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontFamily: "'Jost', sans-serif",
        fontSize: '0.65rem',
        fontWeight: 200,
        letterSpacing: '0.5em',
        textTransform: 'uppercase',
        color: '#c4913f',
        marginBottom: '1.2rem',
      }}
    >
      {children}
    </p>
  )
}

export function SectionTitle({ children, style = {} }) {
  return (
    <h2
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(2.2rem, 5vw, 4rem)',
        fontWeight: 300,
        lineHeight: 1.1,
        color: '#f5f0ea',
        letterSpacing: '0.02em',
        ...style,
      }}
    >
      {children}
    </h2>
  )
}

export function GoldDivider() {
  return (
    <div
      style={{
        width: '50px',
        height: '1px',
        background: 'linear-gradient(90deg, #c4913f, transparent)',
        margin: '2rem auto',
      }}
    />
  )
}
