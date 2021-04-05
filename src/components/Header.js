import React, {useState, useEffect} from 'react';
import {FaHamburger} from 'react-icons/fa'

const Header = () => {
  const [showDropdownContent, setShowDropdownContent] = useState(false);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
      } else {
        document.querySelector(".navbar").style.top = "-10vh";
      }
      prevScrollpos = currentScrollPos;
    }
  }, []);

  return(
    <header>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar__dropdown">
          <FaHamburger className="navbar__hamburger" onClick={() => setShowDropdownContent(!showDropdownContent)}/>
          {showDropdownContent ? 
            (<ul className="navbar__dropdown-content">
              <li><a className="navbar__dropdown-item" href="#hero" onClick={() => setShowDropdownContent(!showDropdownContent)}>Home</a></li>
              <li><a className="navbar__dropdown-item" href="#about-me" onClick={() => setShowDropdownContent(!showDropdownContent)}>About me</a></li>
              <li><a className="navbar__dropdown-item" href="#projects" onClick={() => setShowDropdownContent(!showDropdownContent)}>Projects</a></li>
              <li><a className="navbar__dropdown-item" href="#experience" onClick={() => setShowDropdownContent(!showDropdownContent)}>Experience</a></li>
              <li><a className="navbar__dropdown-item" href="#contact" onClick={() => setShowDropdownContent(!showDropdownContent)}>Contact</a></li>
            </ul>) : null
          }
          
        </div>
        <ul className="navbar__desktop">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about-me">About me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* End of Navigation Bar */}

      {/* Hero */}
      <div id="hero" className="hero">
        <picture>
          <source media="(min-width: 769px)" srcSet="/images/foto_portfolio.png" alt="me" />
          <img src="/images/foto_portfolio300.png" alt="me" />
        </picture>
        <div className="hero__header-contact">
          <h3>inesbarataborges@gmail.com</h3>
          <h3>+351 910 182 440</h3>
        </div>
        <div className="hero__header-content">
          <button className="hero__header-button-cv"><a href="/inesCV-en.pdf" target="_blank">Check my CV</a></button>
          <h2>Inês's Portfolio Website</h2>
          <button className="hero__header-button-hire-me"><a href="#contact">Hire me!</a></button>
        </div>
      </div>
      {/* End of Hero */}
    </header>
  )
}

export default Header;