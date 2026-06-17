import React, { useEffect } from 'react'
import Services from '../components/Services'

function ServicesPage() {
  useEffect(function() {
    window.scrollTo(0, 0)
    var observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.15 }
    )
    var revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    revealEls.forEach(function(el) { observer.observe(el) })
    return function() { observer.disconnect() }
  }, [])

  return (
    <main style={{ paddingTop: '80px' }}>
      <div style={{ background: 'var(--primary-dark)', padding: '60px 0', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontFamily: 'Playfair Display', fontSize: '3rem', fontWeight: 900 }}>Our Services</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '12px' }}>Professional pet care services by experts</p>
      </div>
      <Services />
    </main>
  )
}

export default ServicesPage