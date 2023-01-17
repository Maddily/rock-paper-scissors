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
        results.textContent += `You: ${playerSelection.toLowerCase()}\nComputer: ${computerSelection}\nYou win this round\n\n__\n\n`;
        playerScore++;
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper' || playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors'
    || playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        results.textContent += `You: ${playerSelection.toLowerCase()}\nComputer: ${computerSelection}\nThe computer wins this round\n\n__\n\n`;
        computerScore++;
    }
    else {
        results.textContent += `You: ${playerSelection.toLowerCase()}\nComputer: ${computerSelection}\nThis round, it's a tie\n\n__\n\n`;
    }

    if (playerScore === 5 || computerScore === 5) {
        results.textContent += `________\n\nYou: ${playerScore}\nComputer: ${computerScore}\n\n`;
        if (playerScore === 5) {
            results.textContent += "You win the game!"
        }
        else if (computerScore === 5) {
            results.textContent += "The computer wins the game!"
        }
        playerScore = 0;
        computerScore = 0;
    }
}

function getPlayerSelection(button) {
    return button.textContent;
}

const buttons = document.querySelectorAll('button');
let results = document.querySelector('.results');
results.setAttribute('style', 'white-space: pre;');
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => button.addEventListener('click', () => {
    playRound(getPlayerSelection(button), getComputerChoice());
}));