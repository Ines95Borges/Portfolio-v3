import React from 'react';

const Header = () => {
  return(
    <header>
      {/* Navigation Bar */}
      <nav id="navbar">
        <div className="navbar__dropdown">
          <button id="navbar__hamburger"><i className="fas fa-arrow-circle-down"></i></button>
          <ul className="navbar__dropdown-content">
            <li><a className="navbar__dropdown-item" href="#hero">Home</a></li>
            <li><a className="navbar__dropdown-item" href="#about-me">About me</a></li>
            <li><a className="navbar__dropdown-item" href="#projects">Projects</a></li>
            <li><a className="navbar__dropdown-item" href="#experience">Experience</a></li>
            <li><a className="navbar__dropdown-item" href="#studies">Academic formation</a></li>
            <li><a className="navbar__dropdown-item" href="#contact">Contact</a></li>
          </ul>
        </div>
        <ul className="navbar__desktop">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about-me">About me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#studies">Academic formation</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* End of Navigation Bar */}

      {/* Hero */}
      <div className="hero">
        <picture>
          <source media="(min-width: 769px)" srcset="../images/foto_portfolio.png" alt="me" />
          <img src="../images/foto_portfolio300.png" alt="me" />
        </picture>
        <div className="hero__header-contact">
          <h3>inesbarataborges@gmail.com</h3>
          <h3>+351 910 182 440</h3>
        </div>
        <div className="hero__header-content">
          <h2>Inês's Portfolio Website</h2>
          <button className="hero__header-button"><a href="#contact">Hire me!</a></button>
        </div>
      </div>
      {/* End of Hero */}
    </header>
  )
}

export default Header;