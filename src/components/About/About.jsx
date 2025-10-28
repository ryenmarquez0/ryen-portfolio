import React from "react";
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <motion.section className="about card"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <h2>About Me</h2>
      <p>
        I'm <strong>Ryen Marquez</strong>, a Frontend Developer with a flair for designing responsive, intuitive interfaces.
        I craft user-friendly experiences using React, modern CSS, and clean architecture.
      </p>
      <p>
        I enjoy turning ideas into delightful interactions — animations, micro-interactions, and playful UI that feel alive.
        Currently open to collaboration and exciting opportunities.
      </p>
    </motion.section>
  );
}
