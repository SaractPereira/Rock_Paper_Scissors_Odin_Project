const buttons = document.querySelectorAll('button');
const playerChoiceDiv = document.getElementById('player_choice');
const computerChoiceDiv = document.getElementById('computer_choice');
const playerWinsSpan = document.getElementById('player_wins');
const computerWinsSpan = document.getElementById('computer_wins');
const gameStatusDiv = document.getElementById('game_status');
const restartButton = document.getElementById('restart');
const startButton = document.getElementById('start');

let playerWins = 0;
let computerWins = 0;
let gameOver = false;

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.style.display = "none";
    restartButton.style.display = "none";
    restartGame();
}

function handleButtonClick() {
    if (gameOver) return;

    const playerSelection = this.id;
    const computerSelection = getComputerChoice();
    const player_choice = playRound(playerSelection, computerSelection);
    playerChoiceDiv.textContent = player_choice;
    computerChoiceDiv.textContent = computerSelection;

    if (player_choice.includes('Win')) {
        playerWins++;
    } else if (player_choice.includes('Lose')) {
        computerWins++;
    }

    playerWinsSpan.textContent = playerWins;
    computerWinsSpan.textContent = computerWins;

    checkGameOver();
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computer_choice = Math.floor(Math.random() * choices.length);
    return choices[computer_choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
        (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
        (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function checkGameOver() {
    if (playerWins === 5 || computerWins === 5) {
        gameStatusDiv.textContent = "Game Over";
        restartButton.style.display = "block";
        gameOver = true;
    }
}

restartButton.addEventListener('click', restartGame);

function restartGame() {
    // Reset game variables and counters
    playerWins = 0;
    computerWins = 0;
    playerWinsSpan.textContent = playerWins;
    computerWinsSpan.textContent = computerWins;
    gameStatusDiv.textContent = "";
    restartButton.style.display = "none";
    gameOver = false;
    startButton.style.display = "block";
}