let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const MAX_ROUNDS = 5;

const human = document.querySelector("#human");
const computer = document.querySelector("#computer");
const scores = document.querySelector("#scores");
const winner = document.querySelector("#winner");
const btn_refresh = document.querySelector(".refresh-btn");
const selection = document.querySelector("#selection");
const roundEl = document.querySelector("#round");
const userNameDiv = document.querySelector("#userName");

const user = prompt("Welcome, what should I call you?") || "Player";

userNameDiv.innerHTML = `<h3>Welcome ${user}, to my rock paper scissors game!</h3>`;

function resetGame() {
humanScore = 0;
computerScore = 0;
roundsPlayed = 0;

human.textContent = "";
computer.textContent = "";
scores.textContent = "";
winner.textContent = "";
roundEl.textContent = "";
}

btn_refresh.addEventListener("click", resetGame);

function getComputerChoice() {
const choices = ["rock", "paper", "scissors"];
return choices[Math.floor(Math.random() * 3)];
}

function updateScores() {
scores.textContent = `Score — ${user}: ${humanScore} | Computer: ${computerScore}`;
}

function showFinalWinner() {
if (humanScore > computerScore) winner.textContent = `${user} wins the game!`;
else if (computerScore > humanScore) winner.textContent = `Computer wins the game!`;
else winner.textContent = `Overall tie!`;
}

function playRound(humanChoice, computerChoice) {
if (humanChoice === computerChoice) {
    winner.textContent = "It's a tie!";
    return;
}

const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

if (humanWins) {
    humanScore++;
    winner.textContent = `${user} wins this round!`;
} else {
    computerScore++;
    winner.textContent = "Computer wins this round!";
}
}

selection.addEventListener("click", (event) => {
// Stop after 5 rounds
if (roundsPlayed >= MAX_ROUNDS) return;

const btn = event.target.closest("button");
if (!btn) return;

const humanChoice = btn.id; // rock/paper/scissors
const computerChoice = getComputerChoice();

human.textContent = `${user} chooses ${humanChoice}`;
computer.textContent = `Computer chooses ${computerChoice}`;

roundsPlayed++;
roundEl.textContent = `Round ${roundsPlayed} of ${MAX_ROUNDS}`;

playRound(humanChoice, computerChoice);
updateScores();

if (roundsPlayed === MAX_ROUNDS) {
    roundEl.textContent = "Game Over";
    showFinalWinner();
}
});

// https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors//
