import React from 'react'
import { Link } from 'react-router-dom'

function Wishlist() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--off-white)' }}>
      <div style={{ background: 'var(--primary-dark)', padding: '60px 0', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontFamily: 'Playfair Display', fontSize: '3rem', fontWeight: 900 }}>My Wishlist</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '12px' }}>Your favourite pet care products</p>
      </div>
      <div style={{ maxWidth: '800px', margin: '60px auto', padding: '0 24px', textAlign: 'center' }}>
        <div style={{ fontSize: '5rem', marginBottom: '24px' }}>♡</div>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: 'var(--charcoal)', marginBottom: '12px' }}>
          Your wishlist is empty
        </h2>
        <p style={{ color: 'var(--mid-gray)', marginBottom: '32px' }}>
          Save your favourite products here and shop them later!
        </p>
        <Link to="/shop" className="btn btn-primary">
          <i className="fas fa-shopping-bag"></i>
          Explore Products
        </Link>
      </div>
    </main>
  )
}

export default Wishlist