import React, { useState, useEffect } from 'react'
import './FeaturedProducts.css'

var products = [
  { id: 1, name: 'Premium Dog Food', category: 'Dogs', price: 29.99, oldPrice: 39.99, rating: 5, reviews: 128, image: 'images/food.webp', tag: 'Best Seller', tagColor: '#F4845F' },
  { id: 2, name: 'Cat Comfort Bed', category: 'Cats', price: 49.99, oldPrice: 69.99, rating: 4, reviews: 89, image: 'images/cat.webp', tag: 'Sale', tagColor: '#52B788' },
  { id: 3, name: 'Bird Perch Set', category: 'Birds', price: 19.99, oldPrice: null, rating: 5, reviews: 45, image: 'images/bird.webp', tag: 'New', tagColor: '#FFB347' },
  { id: 4, name: 'Aquarium Starter Kit', category: 'Fish', price: 89.99, oldPrice: 119.99, rating: 4, reviews: 67, image: 'images/fish.webp', tag: 'Popular', tagColor: '#4FC3F7' },
  { id: 5, name: 'Dog Chew Toys', category: 'Dogs', price: 14.99, oldPrice: null, rating: 5, reviews: 203, image: 'images/toys.webp', tag: 'Best Seller', tagColor: '#F4845F' },
  { id: 6, name: 'Cat Grooming Kit', category: 'Cats', price: 34.99, oldPrice: 44.99, rating: 4, reviews: 56, image: 'images/grooming.webp', tag: 'Sale', tagColor: '#52B788' },
]

var filters = ['All', 'Dogs', 'Cats', 'Birds', 'Fish']

function Stars(props) {
  var rating = props.rating
  var stars = []
  for (var i = 1; i <= 5; i++) {
    stars.push(
      <i key={i} className={i <= rating ? 'fas fa-star' : 'far fa-star'}></i>
    )
  }
  return <div className="product-stars">{stars}</div>
}

function ProductCard(props) {
  var product = props.product
  var discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : null
  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
        <span className="product-tag" style={{ background: product.tagColor }}>{product.tag}</span>
        {discount && (
          <span className="product-discount">-{discount}%</span>
        )}
        <div className="product-actions">
          <button className="product-action-btn" title="Wishlist">
            <i className="fas fa-heart"></i>
          </button>
          <button className="product-action-btn" title="Quick View">
            <i className="fas fa-eye"></i>
          </button>
        </div>
      </div>
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <Stars rating={product.rating} />
          <span className="product-reviews">({product.reviews})</span>
        </div>
        <div className="product-footer">
          <div className="product-price-wrap">
            <span className="product-price">${product.price}</span>
            {product.oldPrice && (
              <span className="product-old-price">${product.oldPrice}</span>
            )}
          </div>
          <button className="product-cart-btn">
            <i className="fas fa-cart-plus"></i>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

function FeaturedProducts() {
  var [activeFilter, setActiveFilter] = useState('All')

  var filtered = activeFilter === 'All'
    ? products
    : products.filter(function(p) { return p.category === activeFilter })

  useEffect(function() {
    var timer = setTimeout(function() {
      var revealEls = document.querySelectorAll('.product-card:not(.revealed)')
      revealEls.forEach(function(el) {
        el.classList.add('revealed')
      })
    }, 50)
    return function() { clearTimeout(timer) }
  }, [activeFilter])

  return (
    <section className="products section section-cream" id="products">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Shop</span>
          <h2 className="section-title reveal">
            Featured <span className="title-highlight">Products</span>
          </h2>
          <p className="section-subtitle reveal">
            Hand-picked premium products for your beloved pets,
            sourced from the world's best pet care brands
          </p>
        </div>
        <div className="products-filters reveal">
          {filters.map(function(filter) {
            return (
              <button
                key={filter}
                className={activeFilter === filter ? 'filter-btn active' : 'filter-btn'}
                onClick={function() { setActiveFilter(filter) }}
              >
                {filter}
              </button>
            )
          })}
        </div>
        <div className="products-grid">
          {filtered.map(function(product) {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
        <div className="products-cta reveal">
          <a href="#" className="btn btn-green">
            <i className="fas fa-store"></i>
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts