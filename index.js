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
        return "player wins";
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper' || playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors'
    || playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        return "computer wins";
    }
    else if (playerSelection.toLowerCase() == computerSelection) {
        return "tie";
    }
    else {
        return "wrong input";
    }
}
