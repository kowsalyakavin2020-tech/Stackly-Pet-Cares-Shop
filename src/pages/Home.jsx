import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import PetCategories from '../components/PetCategories'
import Services from '../components/Services'
import FeaturedProducts from '../components/FeaturedProducts'
import WhyChooseUs from '../components/WhyChooseUs'
import OurTeam from '../components/OurTeam'
import Testimonials from '../components/Testimonials'
import NewsletterCTA from '../components/NewsletterCTA'

function Home() {
  useEffect(function() {
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
    <main>
      <Hero />
      <PetCategories />
      <Services />
      <FeaturedProducts />
      <WhyChooseUs />
      <OurTeam />
      <Testimonials />
      <NewsletterCTA />
    </main>
  )
}

export default Home