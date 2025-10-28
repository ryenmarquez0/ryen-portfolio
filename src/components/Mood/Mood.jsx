import React, { useState } from "react";
import "./Mood.css";
import { clickSound, hoverSound } from "../../utils/sounds";


const playlistMap = {
  chill: "37i9dQZF1DX4WYpdgoIcn6",     
  ambient: "37i9dQZF1DWUZ5bk6qqDSy",    
  rock: "37i9dQZF1DWXRqgorJj26U",      
  metal: "37i9dQZF1DX9qNs32fujYe",     
  jazz: "37i9dQZF1DXbITWG1ZJKYt",      
  electro: "37i9dQZF1DX0BcQWzuB7ZO",   
  techno: "37i9dQZF1DX8tZsk68tuDw",    
  acoustic: "37i9dQZF1DX504r1DvyvxG",  
  folk: "37i9dQZF1DWYVURwQHUqnN",      
  funk: "37i9dQZF1DX70RN3TfWWJh",       
  groove: "37i9dQZF1DX7YCknf2jT6s",     
  default: "37i9dQZF1DX2sUQwD7tbmL"    
};

const getThemeColors = (mood) => {
  const lower = mood.toLowerCase();
  if (lower.includes("chill") || lower.includes("ambient")) return { bg: "#1a1a40", accent: "#6dd5fa" };
  if (lower.includes("rock") || lower.includes("metal")) return { bg: "#2c2c2c", accent: "#e74c3c" };
  if (lower.includes("jazz")) return { bg: "#3e2723", accent: "#ffb74d" };
  if (lower.includes("electro") || lower.includes("techno")) return { bg: "#0f2027", accent: "#00d2ff" };
  if (lower.includes("folk") || lower.includes("acoustic")) return { bg: "#3b2f2f", accent: "#a8e6cf" };
  if (lower.includes("funk") || lower.includes("groove")) return { bg: "#201f3f", accent: "#ff5fad" };
  return { bg: "#121212", accent: "#1ed760" };
};

export default function Mood() {
  const [mood, setMood] = useState("");
  const [playlist, setPlaylist] = useState("");
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState({ bg: "#121212", accent: "#1db954" });

  const fetchMood = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre");
      const data = await res.json();
      setMood(data);

  
      const key = Object.keys(playlistMap).find(k => data.toLowerCase().includes(k)) || "default";
      setPlaylist(playlistMap[key]);

      const colors = getThemeColors(data);
      setTheme(colors);
      document.documentElement.style.setProperty("--accent1", colors.accent);
    } catch (err) {
      console.error(err);
      setMood("mystery jazz (offline)");
      setPlaylist(playlistMap["jazz"]);
      setTheme(getThemeColors("jazz"));
    }
    setLoading(false);
  };

  return (
    <section className="mood-section">
      <div className="mood-container card" style={{ background: `linear-gradient(135deg, ${theme.bg}, rgba(0,0,0,0.45))`, borderColor: theme.accent }}>
        <h2 style={{ color: theme.accent }}>🎶 Music Mood Generator</h2>
        <p style={{ color: "rgba(255,255,255,0.8)" }}>Click the button to discover your vibe!</p>

            <button
  className="mood-btn"
  onClick={() => {
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play();
    }
    fetchMood();
  }}
  onMouseEnter={() => {
    if (hoverSound) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  }}
  style={{
    background: theme.accent,
    boxShadow: `0 0 15px ${theme.accent}`,
    transition: "all 0.3s ease",
  }}
  disabled={loading}
>
  {loading ? "🎶 Generating..." : "✨ What's my vibe?"}
</button>


        {mood && (
          <div className="mood-result">
            <h3>Your vibe today:</h3>
            <p className="mood-name" style={{ color: theme.accent }}>{mood}</p>

            {playlist && (
              <div className="spotify-placeholder">
                <iframe
                  title="Spotify vibe"
                  src={`https://open.spotify.com/embed/playlist/${playlist}`}
                  width="100%" height="82" frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
                ></iframe>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
