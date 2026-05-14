import { useState, useCallback } from 'react'

import FilmGrain        from './components/FilmGrain'
import CursorGlow       from './components/CursorGlow'
import LoadingIntro     from './components/LoadingIntro'
import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import FilmsSection     from './components/FilmsSection'
import StorySection     from './components/StorySection'
import TestimonialsSection from './components/TestimonialsSection'
import PackagesSection  from './components/PackagesSection'
import AboutSection     from './components/AboutSection'
import ContactSection   from './components/ContactSection'
import Footer           from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const handleDone = useCallback(() => setLoaded(true), [])

  return (
    <>
      <FilmGrain />
      <CursorGlow />

      {!loaded && <LoadingIntro onDone={handleDone} />}

      <div style={{
        background: '#0a0a0a',
        color: '#f5f0ea',
        minHeight: '100vh',
        fontFamily: "'Jost', sans-serif",
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.8s ease',
        overflowX: 'hidden',
      }}>
        <Navbar visible={loaded} />
        <Hero />
        <FilmsSection />
        <StorySection />
        <TestimonialsSection />
        <PackagesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}
