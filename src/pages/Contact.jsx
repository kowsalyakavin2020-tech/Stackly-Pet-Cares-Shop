import React, { useEffect } from 'react'
import './Contact.css'

function Contact() {
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
        <h1 style={{ fontFamily: 'Playfair Display', fontSize: '3rem', fontWeight: 900 }}>Contact Us</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '12px' }}>We would love to hear from you</p>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">

            <div className="contact-info reveal">
              <h2>Get In Touch</h2>
              <p>Have questions about our products or services? We are here to help!</p>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>MMR Complex, Chinna Thirupathi (near Chinna Muniyappan Kovil), Salem, Tamil Nadu, 636008</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>hello@stacklypets.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4>Hours</h4>
                    <p>Mon - Sat: 9AM - 8PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap reveal">
              <h2>Send a Message</h2>
              <div className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="How can we help?" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Write your message here..." rows="5"></textarea>
                </div>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe
          title="Stackly Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  )
}

export default Contact
