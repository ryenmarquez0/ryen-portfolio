import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import { FaFigma, FaAndroid, FaJava, FaPython } from "react-icons/fa";
import { SiFlutter, SiGodotengine } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skills = [
  { name: "Figma", icon: <FaFigma /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Godot", icon: <SiGodotengine /> },
  { name: "NetBeans", icon: <FaJava /> },
  { name: "PyCharm", icon: <FaPython /> },
  { name: "VS Code", icon: <VscCode /> },
  { name: "Android Studio", icon: <FaAndroid /> },
];

export default function Skills() {
  return (
    <motion.section className="skills-section"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((s, i) => (
          <motion.div className="skill-card card" key={i}
            whileHover={{ y: -10, scale: 1.03 }} transition={{ duration: 0.25 }}>
            <div className="skill-icon">{s.icon}</div>
            <p>{s.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
