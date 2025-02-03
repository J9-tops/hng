const colorBox = document.querySelector(".color-box");
const colorOptions = document.querySelectorAll(".color-option");
const gameStatus = document.querySelector("[data-testid='gameStatus']");
const scoreDisplay = document.querySelector("[data-testid='score']");
const newGameButton = document.querySelector("#newGameButton");

let score = 0;
let targetColor = "";

const predefinedColors = [
  "#BE3144",
  "#3674B5",
  "#5B913B",
  "#FADA7A",
  "#DD88CF",
  "#FBA518",
];

function startGame() {
  let colors = [...predefinedColors].sort(() => Math.random() - 0.5);
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = targetColor;

  colorOptions.forEach((btn, index) => {
    btn.style.backgroundColor = colors[index];
    btn.onclick = () => checkGuess(colors[index]);
    btn.style.opacity = "1";
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
    gameStatus.style.color = "#5CB338";
    score++;

    setTimeout(() => {
      startGame();
      colorOptions.forEach((btn) => {
        btn.style.transition = "opacity 0.5s ease-in-out";
        btn.style.opacity = "1";
      });
    }, 2000);
  } else {
    gameStatus.textContent = "❌ Wrong! Try again.";
    gameStatus.style.color = "#e74c3c";

    colorOptions.forEach((btn) => {
      btn.style.transition = "opacity 0.5s ease-in-out";
      btn.style.opacity = "0";
    });

    setTimeout(() => {
      startGame();

      setTimeout(() => {
        colorOptions.forEach((btn) => {
          btn.style.transition = "opacity 0.5s ease-in-out";
          btn.style.opacity = "1";
        });
      }, 500);
    }, 1000);
  }
  scoreDisplay.textContent = score;
}

newGameButton.onclick = () => {
  score = 0;
  scoreDisplay.textContent = score;
  gameStatus.textContent = "";
  startGame();
};

startGame();
