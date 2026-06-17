import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">

            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <div className="footer-logo-icon">
                  <span style={{fontSize: '20px'}}>🐾</span>
                </div>
                <div>
                  <span className="footer-logo-main">Stackly</span>
                  <span className="footer-logo-sub">Pet Cares and Shop</span>
                </div>
              </Link>
              <p className="footer-desc">
                Your one-stop destination for premium pet care products
                and professional services. Trusted by 10,000+ pet owners worldwide.
              </p>
              <div className="footer-social">
                <Link to="/404" className="social-btn"><i className="fab fa-facebook-f"></i></Link>
                <Link to="/404" className="social-btn"><i className="fab fa-instagram"></i></Link>
                <Link to="/404" className="social-btn"><i className="fab fa-twitter"></i></Link>
                <Link to="/404" className="social-btn"><i className="fab fa-youtube"></i></Link>
              </div>
            </div>

            <div className="footer-links-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/services">Pet Grooming</Link></li>
                <li><Link to="/services">Veterinary Care</Link></li>
                <li><Link to="/services">Pet Boarding</Link></li>
                <li><Link to="/services">Pet Training</Link></li>
                <li><Link to="/404">Pet Adoption</Link></li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Subscribe for pet care tips, new products and exclusive offers!</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button className="newsletter-btn">
                  <span style={{fontSize: '14px'}}>➤</span>
                </button>
              </div>
              <div className="footer-badges">
                <div className="footer-badge">
                  <i className="fas fa-shield-alt"></i>
                  <span>Secure Payment</span>
                </div>
                <div className="footer-badge">
                  <i className="fas fa-truck"></i>
                  <span>Free Delivery</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>2024 Stackly Pet Cares and Shop. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/404">Privacy Policy</Link>
            <Link to="/404">Terms of Service</Link>
            <Link to="/404">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
