
const buttons = document.querySelectorAll('button');
const playerChoiceDiv = document.getElementById('player_choice');
const computerChoiceDiv = document.getElementById('computer_choice');
const playerWinsSpan = document.getElementById('player_wins');
const computerWinsSpan = document.getElementById('computer_wins');
const gameStatusDiv = document.getElementById('game_status');
const restartButton = document.getElementById('restart');

let playerWins = 0;
let computerWins = 0;

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick() {
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

    checkGameOver(); // Check if the game is over
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
        // Display "Game Over" message
        gameStatusDiv.textContent = "Game Over";

        // Show the restart button
        restartButton.style.display = "block";

        // Disable the play buttons
        buttons.forEach(button => {
            button.removeEventListener('click', handleButtonClick);
            button.disabled = true;
        });
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

    // Re-enable the play buttons
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
        button.disabled = false;
    });
}
