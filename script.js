
const buttons = document.querySelectorAll('button');
const playerChoiceDiv = document.getElementById('player_choice');
const computerChoiceDiv = document.getElementById('computer_choice');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        const player_choice = playRound(playerSelection, computerSelection);
        playerChoiceDiv.textContent = player_choice;
        computerChoiceDiv.textContent = computerSelection;
    });
});

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