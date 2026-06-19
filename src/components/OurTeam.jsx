import React from 'react'
import './OurTeam.css'

var team = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Chief Veterinarian',
    image: 'images/team1.webp',
    exp: '12 Years Experience',
    speciality: 'Small Animals',
    social: { facebook: '#', instagram: '#', linkedin: '#' }
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    role: 'Senior Vet Surgeon',
    image: 'images/team2.webp',
    exp: '8 Years Experience',
    speciality: 'Surgery Specialist',
    social: { facebook: '#', instagram: '#', linkedin: '#' }
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Head Groomer',
    image: 'images/team1.webp',
    exp: '6 Years Experience',
    speciality: 'All Breeds',
    social: { facebook: '#', instagram: '#', linkedin: '#' }
  },
  {
    id: 4,
    name: 'James Miller',
    role: 'Pet Trainer',
    image: 'images/team2.webp',
    exp: '10 Years Experience',
    speciality: 'Behavior Expert',
    social: { facebook: '#', instagram: '#', linkedin: '#' }
  },
]

function TeamCard(props) {
  var member = props.member
  return (
    <div className="team-card reveal">
      <div className="team-image-wrap">
        <img src={member.image} alt={member.name} className="team-image" />
        <div className="team-overlay">
          <div className="team-social">
            <a href={member.social.facebook} className="team-social-btn">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href={member.social.instagram} className="team-social-btn">
              <i className="fab fa-instagram"></i>
            </a>
            <a href={member.social.linkedin} className="team-social-btn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="team-exp-badge">{member.exp}</div>
      </div>
      <div className="team-body">
        <span className="team-speciality">{member.speciality}</span>
        <h3 className="team-name">{member.name}</h3>
        <p className="team-role">{member.role}</p>
      </div>
    </div>
  )
}

function OurTeam() {
  return (
    <section className="team section section-light" id="team">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Experts</span>
          <h2 className="section-title reveal">
            Meet Our <span className="title-highlight">Team</span>
          </h2>
          <p className="section-subtitle reveal">
            Our certified veterinarians and pet care experts are
            passionate about giving your pets the best care possible
          </p>
        </div>
        <div className="team-grid">
          {team.map(function(member) {
            return <TeamCard key={member.id} member={member} />
          })}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
