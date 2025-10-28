import React, { useState } from "react";
import CursorTrail from "./components/CursorTrail/CursorTrail";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import BackgroundParticles from "./components/Background/BackgroundParticles";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Mood from "./components/Mood/Mood";
import Contact from "./components/Contact/Contact";
import "./App.css";

export default function App() {
  
  const [theme, setTheme] = useState({
    bg: "#121212",
    text: "#ffffff",
    accent: "#ff00c8",
  });

  return (
    <div
      className="app-root"
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        transition: "background 0.6s, color 0.6s",
      }}
    >
      {}
      <BackgroundParticles color={theme.accent} />

      <CursorTrail />
      <ThemeSwitcher setTheme={setTheme} />

      <Header />
      <main className="main-content">
        <About />
        <Skills />
        <Mood theme={theme} />
        <Contact />
      </main>

      <footer
        className="footer-credit"
        style={{ color: theme.accent, textShadow: `0 0 8px ${theme.accent}` }}
      >
        © {new Date().getFullYear()} Ryen Marquez — Built with ❤️
      </footer>
    </div>
  );
}
