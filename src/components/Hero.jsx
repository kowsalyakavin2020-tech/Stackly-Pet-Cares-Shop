import React, { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const [currentText, setCurrentText] = useState(0)

  const texts = [
    'Your Pet Deserves the Best',
    'Premium Care & Products',
    'Trusted by 10,000+ Pet Owners',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="home">

      <div className="hero-bg-image"></div>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <div className="hero-badge reveal">
          <span>🐾</span>
          <span>Premium Pet Care Since 2020</span>
        </div>

        <h1 className="hero-title reveal">
          <span className="hero-title-main">Stackly</span>
          <span className="hero-title-sub">Pet Cares and Shop</span>
        </h1>

        <p className="hero-tagline reveal">
          {texts[currentText]}
        </p>

        <p className="hero-desc reveal">
          Everything your furry, feathered, and finned friends need —
          premium food, expert grooming, veterinary care, and more.
          All in one place, delivered with love.
        </p>

        <div className="hero-buttons reveal">
          <a href="#products" className="btn btn-primary">
            <i className="fas fa-shopping-bag"></i>
            Shop Now
          </a>
          <a href="#services" className="btn btn-secondary">
            <i className="fas fa-paw"></i>
            Our Services
          </a>
        </div>

        <div className="hero-stats reveal">
          <div className="hero-stat">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Happy Pets</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Products</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Expert Vets</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-number">4.9★</span>
            <span className="stat-label">Rating</span>
          </div>
        </div>

      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>

    </section>
  )
}

export default Hero