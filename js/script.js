const RPS = ["pedra", "papel", "tesoura"];

const userInput = document.getElementById("inputButtons");
userInput.addEventListener("click", playRPS);

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", reset);

const boxGame = document.getElementById("boxGame");
const result = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

const playerChoiceImg = document.getElementById("playerChoice");
const cpuChoiceImg = document.getElementById("cpuChoice");

let userChoice;
let cpuChoice;

function randomRPS() {
  return Math.floor(Math.random() * 3);
}

function playRPS(evt) {
  if (evt.target.dataset.input === undefined) {
    return;
  }

  userChoice = evt.target.dataset.input;
  cpuChoice = RPS[randomRPS()];

  playerChoiceImg.classList.add(userChoice);
  cpuChoiceImg.classList.add(cpuChoice);

  if (userChoice === cpuChoice) {
    resultText.textContent = `Empate! O computador escolheu ${cpuChoice} assim como você.`;
  } else if (
    (userChoice === "pedra" && cpuChoice === "tesoura") ||
    (userChoice === "tesoura" && cpuChoice === "papel") ||
    (userChoice === "papel" && cpuChoice === "pedra")
  ) {
    resultText.textContent = `Você ganhou! O computador escolheu ${cpuChoice} e você escolheu ${userChoice}.`;
  } else {
    resultText.textContent = `Você perdeu! O computador escolheu ${cpuChoice} e você escolheu ${userChoice}.`;
  }

  boxGame.classList.add("hidden");
  result.classList.remove("hidden");
  result.classList.add("show");
}

function reset() {
  playerChoiceImg.classList.remove(userChoice);
  cpuChoiceImg.classList.remove(cpuChoice);

  userChoice = "";
  cpuChoice = "";

  boxGame.classList.remove("hidden");
  result.classList.add("hidden");
}
