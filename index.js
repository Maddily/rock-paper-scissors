//Create a function that randomly returns 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100) - 1;
    if (randomNum >= 0 && randomNum <= 32) {
        return 'rock';
    }
    else if (randomNum >= 33 && randomNum <= 65) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

//Create a function that plays one round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors' || playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'
    || playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        results.textContent = `You: ${playerSelection.toLowerCase()} - 
        Computer: ${computerSelection}`;
        playerScore++;
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper' || playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors'
    || playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        results.textContent = `You: ${playerSelection.toLowerCase()} - 
        Computer: ${computerSelection}`;
    }
    else if (playerSelection.toLowerCase() == computerSelection) {
        console.log(`You: ${playerSelection.toLowerCase()}`);
        console.log(`Computer: ${computerSelection}`);
        console.log("It's a tie!");
    }
    else {
        console.log("Wrong input!");
    }
}

function getPlayerSelection(button) {
    return button.textContent;
}

const buttons = document.querySelectorAll('button');
let results = document.querySelector('.results');
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => button.addEventListener('click', () => {
    playRound(getPlayerSelection(button), getComputerChoice());
}));