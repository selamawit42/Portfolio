import React, { useState, useEffect } from 'react';
import './navbar.css';
import profile from '../assets/id.jpg';
import contactImg from '../assets/contact.png';
import menu from '../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
          <img src={profile} alt="Profile" className="profile-logo" />

        {/* Desktop Menu */}
        <ul className="desktopMenu">
          <li><a href="#intro">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#work">Works</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#projects">Projects</a></li>
          <li>
            <a href="#contact" className="desktopMenuBtn">
              <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />

        {/* Mobile Dropdown */}
        {showMenu && (
          <ul className="navMenu">
            <li><a href="#intro" onClick={() => setShowMenu(false)}>Home</a></li>
            <li><a href="#skills" onClick={() => setShowMenu(false)}>Skills</a></li>
            <li><a href="#education" onClick={() => setShowMenu(false)}>Education</a></li>
            <li><a href="#work" onClick={() => setShowMenu(false)}>Works</a></li>
            <li><a href="#certifications" onClick={() => setShowMenu(false)}>Certifications</a></li>
            <li><a href="#projects" onClick={() => setShowMenu(false)}>Projects</a></li>
            <li>
              <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                setShowMenu(false);
              }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
