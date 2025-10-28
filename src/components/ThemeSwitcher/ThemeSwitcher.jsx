import React, { useState } from "react";
import "./ThemeSwitcher.css";
import { clickSound, hoverSound } from "../../utils/sounds";

export default function ThemeSwitcher({ setTheme }) {
  const [mode, setMode] = useState("cyber");

  const toggleMode = () => {
    clickSound.currentTime = 0;
    clickSound.play();

    if (mode === "cyber") {
      setMode("retro");
      setTheme({
        bg: "#0a0f1f",
        text: "#00f3ff",
        accent: "#00ff9f", 
      });
    } else {
      setMode("cyber");
      setTheme({
        bg: "#121212",
        text: "#ffffff",
        accent: "#ff00c8", 
      });
    }
  };

  return (
    <div
      className={`theme-switcher ${mode}`}
      onClick={toggleMode}
      onMouseEnter={() => {
        hoverSound.currentTime = 0;
        hoverSound.play();
      }}
    >
      <div className="switch-inner">
        <span className="mode-label">
          {mode === "cyber" ? "CYBER" : "RETRO"}
        </span>
      </div>
    </div>
  );
}
