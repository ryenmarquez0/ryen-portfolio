import React, { useEffect } from "react";
import "./CursorTrail.css";

export default function CursorTrail() {
  useEffect(() => {
    const trail = document.createElement("div");
    trail.className = "cursor-trail";
    document.body.appendChild(trail);

    const move = (e) => {
      trail.style.left = e.clientX + "px";
      trail.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      trail.remove();
    };
  }, []);

  return null;
}
