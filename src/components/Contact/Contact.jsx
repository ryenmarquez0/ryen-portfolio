import React from "react";
import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact card" style={{ marginTop: 28 }}>
      <h2>Contact</h2>
      <p style={{ color: "rgba(255,255,255,0.8)" }}>Want to build something or collaborate? Drop a message!</p>
      <div className="contact-links">
        <a href="mailto:ryen@example.com" title="Email"><FaEnvelope /></a>
        <a href="https://github.com/ryenmarquez" target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
        <a href="https://linkedin.com/in/ryenmarquez" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin /></a>
      </div>
    </section>
  );
}
