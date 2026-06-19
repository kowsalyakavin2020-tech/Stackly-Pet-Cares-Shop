import React, { useState } from 'react'
import { Link } from 'react-router-dom'

var allProducts = [
  { id: 1, name: 'Premium Dog Food', category: 'Dogs', price: 29.99, image: '/images/food.webp' },
  { id: 2, name: 'Cat Comfort Bed', category: 'Cats', price: 49.99, image: '/images/cat.webp' },
  { id: 3, name: 'Bird Perch Set', category: 'Birds', price: 19.99, image: '/images/bird.webp' },
  { id: 4, name: 'Aquarium Starter Kit', category: 'Fish', price: 89.99, image: '/images/fish.webp' },
  { id: 5, name: 'Dog Chew Toys', category: 'Dogs', price: 14.99, image: '/images/toys.webp' },
  { id: 6, name: 'Cat Grooming Kit', category: 'Cats', price: 34.99, image: '/images/grooming.webp' },
  { id: 7, name: 'Pet Training Course', category: 'Dogs', price: 50.00, image: '/images/training.webp' },
  { id: 8, name: 'Veterinary Checkup', category: 'Services', price: 40.00, image: '/images/vet.webp' },
]

function Search() {
  var [query, setQuery] = useState('')

  var filtered = query.length > 1
    ? allProducts.filter(function(p) {
        return p.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
               p.category.toLowerCase().indexOf(query.toLowerCase()) !== -1
      })
    : []

  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--off-white)' }}>
      <div style={{ background: 'var(--primary-dark)', padding: '60px 0', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontFamily: 'Playfair Display', fontSize: '3rem', fontWeight: 900 }}>Search</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '12px' }}>Find your favourite pet products</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '48px auto', padding: '0 24px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'white',
          borderRadius: '16px',
          padding: '16px 24px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          marginBottom: '32px'
        }}>
          <span style={{ fontSize: '1.5rem' }}>🔍</span>
          <input
            type="text"
            placeholder="Search products, categories..."
            value={query}
            onChange={function(e) { setQuery(e.target.value) }}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '1.1rem',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--charcoal)',
              background: 'transparent'
            }}
            autoFocus
          />
          {query && (
            <button
              onClick={function() { setQuery('') }}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.2rem',
                cursor: 'pointer',
                color: 'var(--mid-gray)'
              }}
            >✕</button>
          )}
        </div>

        {query.length > 1 && filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
            <h3 style={{ fontFamily: 'Playfair Display', color: 'var(--charcoal)', marginBottom: '8px' }}>
              No results found
            </h3>
            <p style={{ color: 'var(--mid-gray)' }}>Try searching with different keywords</p>
          </div>
        )}

        {filtered.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '20px'
          }}>
            {filtered.map(function(product) {
              return (
                <div key={product.id} style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease',
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '16px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--primary-light)', fontWeight: 600, textTransform: 'uppercase' }}>
                      {product.category}
                    </span>
                    <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1rem', margin: '4px 0 8px', color: 'var(--charcoal)' }}>
                      {product.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.1rem' }}>
                        ${product.price}
                      </span>
                      <Link to="/shop" className="btn btn-green" style={{ padding: '6px 16px', fontSize: '0.8rem' }}>
                        Buy
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {query.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🐾</div>
            <p style={{ color: 'var(--mid-gray)', fontSize: '1rem' }}>
              Type to search for products and services
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

export default Search