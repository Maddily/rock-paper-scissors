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
        console.log(`You: ${playerSelection.toLowerCase()}`);
        console.log(`Computer: ${computerSelection}`);
        console.log("You win!");
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper' || playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors'
    || playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        console.log(`You: ${playerSelection.toLowerCase()}`);
        console.log(`Computer: ${computerSelection}`);
        console.log("Computer wins!");
    }
    else if (playerSelection.toLowerCase() == computerSelection) {
        console.log(`You: ${playerSelection.toLowerCase()}`);
        console.log(`Computer: ${computerSelection}`);
        console.log("It's a tie!");
    }
    else {
        return "wrong input";
    }
}
