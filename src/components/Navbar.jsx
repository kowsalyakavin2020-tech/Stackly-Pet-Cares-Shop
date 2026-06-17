import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount] = useState(3)
  const location = useLocation()

  useEffect(function() {
    var handleScroll = function() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return function() { window.removeEventListener('scroll', handleScroll) }
  }, [])

  var navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  var getNavClass = function() {
    if (scrolled) return 'navbar navbar-scrolled'
    return 'navbar'
  }

  var getMenuClass = function() {
    if (menuOpen) return 'navbar-links open'
    return 'navbar-links'
  }

  var getHamburgerClass = function() {
    if (menuOpen) return 'hamburger open'
    return 'hamburger'
  }

  return (
    <nav className={getNavClass()}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <span style={{fontSize: '24px'}}>🐾</span>
          </div>
          <div className="logo-text">
            <span className="logo-main">Stackly</span>
            <span className="logo-sub">Pet Cares and Shop</span>
          </div>
        </Link>
        <ul className={getMenuClass()}>
          {navLinks.map(function(link) {
            return (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={location.pathname === link.href ? 'nav-link active' : 'nav-link'}
                  onClick={function() { setMenuOpen(false) }}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="navbar-actions">
          <button className="nav-icon-btn" title="Search">
            <span style={{fontSize: '16px'}}>🔍</span>
          </button>
          <button className="nav-icon-btn" title="Wishlist">
            <span style={{fontSize: '16px'}}>♡</span>
          </button>
          <button className="nav-icon-btn cart-btn" title="Cart">
            <span style={{fontSize: '16px'}}>🛒</span>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>
          <Link to="/shop" className="btn btn-primary nav-cta">
            Shop Now
          </Link>
          <button className={getHamburgerClass()} onClick={function() { setMenuOpen(!menuOpen) }} title="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="menu-overlay" onClick={function() { setMenuOpen(false) }}></div>
      )}
    </nav>
  )
}

export default Navbar
