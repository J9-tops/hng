const colorBox = document.querySelector(".color-box");
const colorOptions = document.querySelectorAll(".color-option");
const gameStatus = document.querySelector("[data-testid='gameStatus']");
const scoreDisplay = document.querySelector("[data-testid='score']");
const newGameButton = document.getElementById("newGameButton");

let score = 0;
let targetColor = "";

const predefinedColors = ["red", "blue", "green", "yellow", "purple", "orange"];

function getContrastingColor(color) {
  let rgb = color.match(/\d+/g); // Extract RGB values
  if (!rgb) return "black"; // Default fallback

  let [r, g, b] = rgb.map(Number);
  let brightness = (r * 299 + g * 587 + b * 114) / 1000; // Luminance formula

  return brightness > 125 ? "black" : "white"; // Dark colors get white text, light colors get black text
}

function startGame() {
  let colors = [...predefinedColors].sort(() => Math.random() - 0.5);
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = targetColor;

  colorOptions.forEach((btn, index) => {
    btn.style.backgroundColor = colors[index];
    btn.onclick = () => checkGuess(colors[index]);
    btn.style.opacity = "1";

    const bgColor = window.getComputedStyle(btn).backgroundColor;
    const textColor = getContrastingColor(bgColor);
    btn.querySelector(".button-text").style.color = textColor;
  });

  gameStatus.textContent = "";
}

function createConfetti() {
  const container = document.querySelector(".confetti-container");

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.backgroundColor = [
      "#ff0",
      "#f00",
      "#0f0",
      "#00f",
      "#f0f",
      "#0ff",
    ][Math.floor(Math.random() * 6)];

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 2 + 1 + "s";

    container.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 2000);
  }
}

function checkGuess(selectedColor) {
  if (selectedColor === targetColor) {
    createConfetti();
    gameStatus.textContent = "🎉 Correct!";
    gameStatus.style.color = "#27ae60";
    score++;

    setTimeout(() => {
      startGame();
      colorOptions.forEach((btn) => {
        btn.style.transition = "opacity 0.5s ease-in-out";
        btn.style.opacity = "1";
      });
    }, 1000);
  } else {
    gameStatus.textContent = "❌ Wrong! Try again.";
    gameStatus.style.color = "#e74c3c";

    // Fade out effect
    colorOptions.forEach((btn) => {
      btn.style.transition = "opacity 0.5s ease-in-out";
      btn.style.opacity = "0";
    });

    setTimeout(() => {
      startGame();

      // Fade back in effect
      setTimeout(() => {
        colorOptions.forEach((btn) => {
          btn.style.transition = "opacity 0.5s ease-in-out";
          btn.style.opacity = "1";
        });
      }, 100);
    }, 500);
  }
  scoreDisplay.textContent = score;
}

newGameButton.onclick = () => {
  score = 0; // Reset score
  scoreDisplay.textContent = score;
  gameStatus.textContent = "";
  startGame();
};

startGame();
