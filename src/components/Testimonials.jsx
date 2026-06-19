import React, { useState, useEffect } from 'react'
import './Testimonials.css'

var testimonials = [
  {
    id: 1,
    name: 'Jennifer Adams',
    location: 'New York, USA',
    image: 'images/client1.webp',
    rating: 5,
    text: 'Stackly has been amazing for my golden retriever Max. The products are premium quality and the grooming service is absolutely fantastic. Highly recommend to all pet owners!',
    pet: 'Golden Retriever Owner',
  },
  {
    id: 2,
    name: 'Robert Chen',
    location: 'London, UK',
    image: 'images/client2.webp',
    rating: 5,
    text: 'The veterinary care team at Stackly is exceptional. Dr. Sarah diagnosed my cat perfectly and the treatment was spot on. My cat Luna is healthy and happy now!',
    pet: 'Cat Owner',
  },
  {
    id: 3,
    name: 'Maria Garcia',
    location: 'Sydney, Australia',
    image: 'images/client3.webp',
    rating: 5,
    text: 'I have been shopping at Stackly for 2 years now. The product quality is unmatched and delivery is always on time. My parrots absolutely love the food and toys!',
    pet: 'Bird Owner',
  },
  {
    id: 4,
    name: 'David Wilson',
    location: 'Toronto, Canada',
    image: 'images/client1.webp',
    rating: 5,
    text: 'The pet boarding service is incredible. I was nervous leaving my dogs but the team sent daily updates with photos. Will definitely use again!',
    pet: 'Dog Owner',
  },
]

function Stars(props) {
  var rating = props.rating
  var stars = []
  for (var i = 1; i <= 5; i++) {
    stars.push(<i key={i} className="fas fa-star"></i>)
  }
  return <div className="test-stars">{stars}</div>
}

function Testimonials() {
  var [active, setActive] = useState(0)

  useEffect(function() {
    var timer = setInterval(function() {
      setActive(function(prev) { return (prev + 1) % testimonials.length })
    }, 4000)
    return function() { clearInterval(timer) }
  }, [])

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Reviews</span>
          <h2 className="section-title reveal">
            What Our <span className="title-highlight">Customers Say</span>
          </h2>
          <p className="section-subtitle reveal">
            Thousands of happy pet owners trust Stackly for their
            pet care needs every single day
          </p>
        </div>

        <div className="testimonials-wrap">
          <div className="testimonials-grid">
            {testimonials.map(function(test, index) {
              return (
                <div
                  key={test.id}
                  className={index === active ? 'test-card active' : 'test-card'}
                >
                  <div className="test-quote">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <Stars rating={test.rating} />
                  <p className="test-text">{test.text}</p>
                  <div className="test-author">
                    <img src={test.image} alt={test.name} className="test-avatar" />
                    <div className="test-info">
                      <h4 className="test-name">{test.name}</h4>
                      <span className="test-location">{test.location}</span>
                      <span className="test-pet">{test.pet}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="test-dots">
            {testimonials.map(function(test, index) {
              return (
                <button
                  key={test.id}
                  className={index === active ? 'test-dot active' : 'test-dot'}
                  onClick={function() { setActive(index) }}
                ></button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
