import React from 'react'
import './Services.css'

var services = [
  {
    id: 1,
    icon: 'fas fa-cut',
    title: 'Pet Grooming',
    desc: 'Professional grooming services to keep your pet clean, healthy and looking their absolute best.',
    color: '#F4845F',
    bg: '#FFF3EF',
    features: ['Bath and Dry', 'Haircut and Styling', 'Nail Trimming', 'Ear Cleaning'],
    price: 'From $25',
    image: 'images/grooming.webp',
  },
  {
    id: 2,
    icon: 'fas fa-stethoscope',
    title: 'Veterinary Care',
    desc: 'Expert veterinary consultations and health checkups by certified and experienced animal doctors.',
    color: '#52B788',
    bg: '#F0FAF4',
    features: ['Health Checkups', 'Vaccinations', 'Dental Care', 'Surgery'],
    price: 'From $40',
    image: 'images/vet.webp',
  },
  {
    id: 3,
    icon: 'fas fa-home',
    title: 'Pet Boarding',
    desc: 'Safe, comfortable and loving boarding facilities for your pets when you are away from home.',
    color: '#FFB347',
    bg: '#FFF8EF',
    features: ['24/7 Supervision', 'Comfortable Beds', 'Play Time', 'Daily Updates'],
    price: 'From $35/night',
    image: 'images/boarding.webp',
  },
  {
    id: 4,
    icon: 'fas fa-graduation-cap',
    title: 'Pet Training',
    desc: 'Professional obedience and behavioral training programs designed for all breeds and ages.',
    color: '#4FC3F7',
    bg: '#EFF9FF',
    features: ['Basic Obedience', 'Behavior Correction', 'Agility Training', 'Puppy Classes'],
    price: 'From $50',
    image: 'images/training.webp',
  },
]

function ServiceCard(props) {
  var service = props.service
  return (
    <div className="service-card reveal">
      <div className="service-image-wrap">
        <img src={service.image} alt={service.title} className="service-image" />
        <div className="service-overlay"></div>
        <div className="service-icon-wrap" style={{ background: service.color }}>
          <i className={service.icon}></i>
        </div>
      </div>
      <div className="service-body" style={{ background: service.bg }}>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-desc">{service.desc}</p>
        <ul className="service-features">
          {service.features.map(function(f) {
            return (
              <li key={f}>
                <i className="fas fa-check" style={{ color: service.color }}></i>
                {f}
              </li>
            )
          })}
        </ul>
        <div className="service-footer">
          <span className="service-price" style={{ color: service.color }}>{service.price}</span>
          <a href="#newsletter" className="service-btn" style={{ background: service.color }}>
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="section-title reveal">
            Our Premium <span className="title-highlight">Services</span>
          </h2>
          <p className="section-subtitle reveal">
            From grooming to veterinary care, we provide everything
            your beloved pet needs to stay happy and healthy
          </p>
        </div>
        <div className="services-grid">
          {services.map(function(service) {
            return <ServiceCard key={service.id} service={service} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
