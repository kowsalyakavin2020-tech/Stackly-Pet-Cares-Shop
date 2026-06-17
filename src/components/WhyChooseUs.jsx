import React, { useEffect, useRef, useState } from 'react'
import './WhyChooseUs.css'

var stats = [
  { number: 10000, suffix: '+', label: 'Happy Pet Owners', icon: 'fas fa-heart' },
  { number: 500, suffix: '+', label: 'Premium Products', icon: 'fas fa-box' },
  { number: 50, suffix: '+', label: 'Expert Vets', icon: 'fas fa-user-md' },
  { number: 15, suffix: '+', label: 'Years Experience', icon: 'fas fa-award' },
]

var reasons = [
  { icon: 'fas fa-shield-alt', title: '100% Safe Products', desc: 'All products are vet-approved and tested for safety', color: '#F4845F', bg: '#FFF3EF' },
  { icon: 'fas fa-truck', title: 'Free Delivery', desc: 'Free shipping on orders above $50 worldwide', color: '#52B788', bg: '#F0FAF4' },
  { icon: 'fas fa-undo', title: 'Easy Returns', desc: '30-day hassle-free return policy for all products', color: '#FFB347', bg: '#FFF8EF' },
  { icon: 'fas fa-headset', title: '24/7 Support', desc: 'Round the clock customer support for all your needs', color: '#4FC3F7', bg: '#EFF9FF' },
  { icon: 'fas fa-certificate', title: 'Certified Quality', desc: 'ISO certified products from trusted global brands', color: '#A78BFA', bg: '#F7F3FF' },
  { icon: 'fas fa-leaf', title: 'Eco Friendly', desc: 'Sustainable and environmentally friendly packaging', color: '#34D399', bg: '#EFFCF6' },
]

function Counter(props) {
  var target = props.target
  var [count, setCount] = useState(0)
  var ref = useRef(null)
  var started = useRef(false)

  useEffect(function() {
    var observer = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true
        var duration = 2000
        var steps = 60
        var step = 0
        var timer = setInterval(function() {
          step++
          setCount(Math.round((target * step) / steps))
          if (step >= steps) clearInterval(timer)
        }, duration / steps)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return function() { observer.disconnect() }
  }, [target])

  return <span ref={ref}>{count}</span>
}

function WhyChooseUs() {
  return (
    <section className="why section" id="why">
      <div className="why-stats-bar">
        <div className="container">
          <div className="why-stats-grid">
            {stats.map(function(stat) {
              return (
                <div key={stat.label} className="why-stat reveal">
                  <div className="why-stat-icon">
                    <i className={stat.icon}></i>
                  </div>
                  <div className="why-stat-info">
                    <span className="why-stat-number">
                      <Counter target={stat.number} />{stat.suffix}
                    </span>
                    <span className="why-stat-label">{stat.label}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section-header" style={{ marginTop: '80px' }}>
          <span className="section-eyebrow">Why Us</span>
          <h2 className="section-title reveal">
            Why Choose <span className="title-highlight">Stackly?</span>
          </h2>
          <p className="section-subtitle reveal">
            We are committed to providing the best care and products
            for your beloved pets with quality you can trust
          </p>
        </div>
        <div className="why-grid">
          {reasons.map(function(reason) {
            return (
              <div key={reason.title} className="why-card reveal" style={{ background: reason.bg, borderColor: reason.color + '30' }}>
                <div className="why-card-icon" style={{ background: reason.color + '22', color: reason.color }}>
                  <i className={reason.icon}></i>
                </div>
                <h3 className="why-card-title">{reason.title}</h3>
                <p className="why-card-desc">{reason.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
