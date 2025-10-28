import React from "react";
import "./Header.css";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="header">
      <div className="overlay" />
      <motion.div className="header-content card"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <img src="/492699366_9558732190849105_1350912930303555159_n (1).jpg" alt="Ryen" className="profile-pic" />
        <h1>Ryen Marquez</h1>
        <p className="tagline">Frontend Developer & UI Designer</p>
        <div className="actions">
          <a href="#contact" className="btn primary">Get In Touch</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn outline">Download Resume</a>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
