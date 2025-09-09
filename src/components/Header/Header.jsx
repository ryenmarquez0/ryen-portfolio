import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="header-content">
        <img src="/public/492699366_9558732190849105_1350912930303555159_n (1).jpg" alt="Ryen Marquez" className="profile-pic" />
        <h1>Ryen Marquez</h1>
        <p className="tagline">Frontend Developer & UI Designer</p>
        <div className="actions">
          <a href="#contact" className="btn primary">Get In Touch</a>
          <a href="/resume.pdf" className="btn outline">Download Resume</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
