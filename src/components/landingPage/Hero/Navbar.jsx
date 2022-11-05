import React from 'react'

export default function Navbar() {
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector('.navbarContainer');
    navbar.classList.toggle("stick", window.scrollY > 0);
  })
  return (
    <div className='navbarContainer'>
        
        <a href='/' className="navbarHeading">
            LCG
        </a>
        <div className="navbarLinks">
            <a href='#toHero' className="navbarLinkItem">Home</a>
            <a href='#toService' className="navbarLinkItem">Services</a>
            <a href='#toAbout' className="navbarLinkItem">About</a>
            <a href='#toContact' className="navbarLinkItem">Contact</a>
        </div>
    </div>
  )
}
