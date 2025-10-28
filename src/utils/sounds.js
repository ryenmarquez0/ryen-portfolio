
let clickSound;
let hoverSound;

if (typeof window !== "undefined") {
  clickSound = new Audio("/sounds/mixkit-retro-game-notification-212.wav");
  hoverSound = new Audio("/sounds/mixkit-arcade-retro-game-over-213.wav");

  clickSound.volume = 0.4;
  hoverSound.volume = 0.3;
}

export { clickSound, hoverSound };
