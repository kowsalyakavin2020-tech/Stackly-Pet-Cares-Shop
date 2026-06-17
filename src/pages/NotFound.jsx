import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '24px',
      background: 'var(--off-white)'
    }}>
      <h1 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(4rem, 10vw, 8rem)',
        fontWeight: 900,
        color: 'var(--primary)',
        lineHeight: 1
      }}>404</h1>
      <p style={{ fontSize: '1.5rem', color: 'var(--charcoal)', marginTop: '12px', fontWeight: 700 }}>
        Oops! Page Not Found
      </p>
      <p style={{ color: 'var(--mid-gray)', marginTop: '8px', maxWidth: '420px' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="btn btn-green" style={{ marginTop: '32px' }}>
        Back to Home
      </Link>
    </main>
  )
}

export default NotFound