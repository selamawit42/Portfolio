import React, { useState } from 'react';
import './navbar.css';
import logo from 'E:/React/my-portfolio/src/assets/logo.png';
import contactImg from 'E:/React/my-portfolio/src/assets/contact.png';
import menu from '../assets/menu.png';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            
            <div className="desktopMenu">
           
            <ul>
            <li><a href="#intro">Home</a></li> 
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
             <li><a href="#work">Works</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#projects">Projects</a></li>

            
       
          <li>
           
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
               </li> </ul>
            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            </div>
        </nav>
    )
}

export default Navbar;