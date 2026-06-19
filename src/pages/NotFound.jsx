import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function NotFound() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(function() {
    setLoading(true)
    var timer = setTimeout(function() {
      setLoading(false)
    }, 1500)
    return function() { clearTimeout(timer) }
  }, [location.key])

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--primary-dark)',
        gap: '24px'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          border: '4px solid rgba(255,255,255,0.2)',
          borderTop: '4px solid #FFB347',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite'
        }}></div>
        <p style={{
          color: 'rgba(255,255,255,0.8)',
          fontSize: '1rem',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.05em'
        }}>Loading...</p>
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

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