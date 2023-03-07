import React from 'react'

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  )
}

const NavContent = () => (
  <>
    <h2>Shyam.</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#work">work</a>
      <a href="#timeline">Experience</a>
      <a href="#testimonial">Testimonial</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:shyam.radadiya100@gmail.com">
      <button>Email</button>
    </a>
  </>
)

export default Header