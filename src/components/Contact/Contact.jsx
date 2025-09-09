import React from 'react';
import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-links">
        <a href="mailto:ryen@example.com"><FaEnvelope /></a>
        <a href="https://github.com/ryenmarquez" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/in/ryenmarquez" target="_blank"><FaLinkedin /></a>
      </div>
    </section>
  );
}

export default Contact;
