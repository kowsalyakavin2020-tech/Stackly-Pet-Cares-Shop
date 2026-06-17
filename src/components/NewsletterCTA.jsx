import React, { useState } from 'react'
import './NewsletterCTA.css'

function NewsletterCTA() {
  var [email, setEmail] = useState('')
  var [submitted, setSubmitted] = useState(false)

  var handleSubmit = function() {
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="newsletter section" id="newsletter">
      <div className="newsletter-bg"></div>
      <div className="container">
        <div className="newsletter-wrap reveal">
          <div className="newsletter-content">
            <div className="newsletter-icon">
              <i className="fas fa-paw"></i>
            </div>
            <span className="section-eyebrow" style={{ color: '#FFB347' }}>Stay Connected</span>
            <h2 className="newsletter-title">
              Get Exclusive Pet Care Tips and Offers!
            </h2>
            <p className="newsletter-desc">
              Join 10,000+ pet owners who receive weekly tips, product
              recommendations, and exclusive discounts straight to their inbox.
            </p>
            <div className="newsletter-perks">
              <div className="perk">
                <i className="fas fa-check-circle"></i>
                <span>Weekly pet care tips</span>
              </div>
              <div className="perk">
                <i className="fas fa-check-circle"></i>
                <span>Exclusive discounts</span>
              </div>
              <div className="perk">
                <i className="fas fa-check-circle"></i>
                <span>New product alerts</span>
              </div>
            </div>
            {submitted ? (
              <div className="newsletter-success">
                <i className="fas fa-check-circle"></i>
                Thank you! You are now subscribed!
              </div>
            ) : (
              <div className="newsletter-input-wrap">
                <div className="newsletter-input-group">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={function(e) { setEmail(e.target.value) }}
                  />
                </div>
                <button className="newsletter-submit" onClick={handleSubmit}>
                  Subscribe Now
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            )}
            <p className="newsletter-note">
              No spam ever. Unsubscribe anytime.
            </p>
          </div>

          <div className="newsletter-image-side">
            <div className="newsletter-img-wrap">
              <img src="/images/dog.jpg" alt="Happy Pet" className="newsletter-img" />
              <div className="newsletter-img-badge">
                <span className="badge-number">10K+</span>
                <span className="badge-text">Happy Subscribers</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default NewsletterCTA
