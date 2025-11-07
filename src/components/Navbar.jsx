import React from 'react'
import './Navbar.css'
import logoImg from '../assets/logo.png'

const Navbar = () => {
  // Fallback for missing images
  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  return (
    <nav className="navbar">
      <ul className="nav-links left">
        <li><a href="#about">About</a></li>
        <li><a href="#recipes">Recipes</a></li>
        <li><a href="#recipes">Stories</a></li>

      </ul>

      <div className="logo">
        <img src={logoImg} alt="Logo" onError={handleImageError} />
      </div>

      <ul className="nav-links right">
        <li><a href="#shop">Shop</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact">Flavour</a></li>

      </ul>
    </nav>
  )
}

export default Navbar