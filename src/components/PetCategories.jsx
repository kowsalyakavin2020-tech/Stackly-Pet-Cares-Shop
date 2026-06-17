import React from 'react'
import './PetCategories.css'

var categories = [
  {
    id: 1,
    name: 'Dogs',
    image: '/images/dog.jpg',
    icon: '🐕',
    count: '120+ Products',
    desc: 'Premium food, toys, grooming and more for your loyal companion',
    color: '#F4845F',
    tag: 'Most Popular',
  },
  {
    id: 2,
    name: 'Cats',
    image: '/images/cat.jpg',
    icon: '🐈',
    count: '95+ Products',
    desc: 'Everything your feline friend needs to live their best life',
    color: '#52B788',
    tag: 'Trending',
  },
  {
    id: 3,
    name: 'Birds',
    image: '/images/bird.jpg',
    icon: '🦜',
    count: '60+ Products',
    desc: 'Cages, food, perches and accessories for your feathered friend',
    color: '#FFB347',
    tag: 'New Arrivals',
  },
  {
    id: 4,
    name: 'Fish',
    image: '/images/fish.jpg',
    icon: '🐠',
    count: '80+ Products',
    desc: 'Aquariums, filters, food and decor for aquatic life',
    color: '#4FC3F7',
    tag: 'Best Value',
  },
]

function CatCard(props) {
  var cat = props.cat
  return (
    <div key={cat.id} className="cat-card reveal">
      <div className="cat-card-image-wrap">
        <img src={cat.image} alt={cat.name} className="cat-card-image" />
        <div className="cat-card-overlay"></div>
        <span className="cat-tag" style={{ background: cat.color }}>
          {cat.tag}
        </span>
        <div className="cat-icon">{cat.icon}</div>
      </div>
      <div className="cat-card-body">
        <div className="cat-card-top">
          <h3 className="cat-name">{cat.name}</h3>
          <span className="cat-count" style={{ color: cat.color }}>
            {cat.count}
          </span>
        </div>
        <p className="cat-desc">{cat.desc}</p>
        <a href="#products" className="cat-btn" style={{ borderColor: cat.color, color: cat.color }}>
          Shop {cat.name}
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  )
}

function PetCategories() {
  return (
    <section className="categories section section-light" id="categories">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Pets</span>
          <h2 className="section-title reveal">
            Shop by Your <span className="title-highlight">Pet Type</span>
          </h2>
          <p className="section-subtitle reveal">
            Find everything your beloved pet needs from nutritious food
            to fun toys and expert care products
          </p>
        </div>
        <div className="categories-grid">
          {categories.map(function(cat) {
            return <CatCard key={cat.id} cat={cat} />
          })}
        </div>
      </div>
    </section>
  )
}

export default PetCategories
