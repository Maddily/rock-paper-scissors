//Create a function that randomly returns 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
    //Declare a variable inside the function and let it contain a generated random number
    let randomNum = Math.floor(Math.random() * 100) - 1;
    //Create an if statement with a condition to check if the random number is between 0 and 32
    if (randomNum >= 0 && randomNum <= 32) {
        //Return 'Rock' if the condition is met
        return 'rock';
    }
    //If the condition isn't met, add another condition to check if the random number is between 33 and 65
    else if (randomNum >= 33 && randomNum <= 65) {
        //Return 'Paper' if the condition is met
        return 'paper';
    }
    //If the conditions aren't met, return 'Scissors'
    else {
        return 'scissors';
    }
}

//Create a function that takes two parameters and plays one round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    //If the player wins
    if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors' || playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'
    || playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
        return "player wins";
    }
    //If the player loses
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper' || playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors'
    || playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock') {
        return "computer wins";
    }
    //if the player's selection equals the computer's selection, return "It's a tie!"
    else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "tie";
    }
    //If the player's input isn't rock, paper or scissors, return "Wrong input"
    else {
        return "wrong input";
    }
}

//Declare variable playerSelection
let playerSelection;
//Declare variable computerSelection
let computerSelection;
//Declare and initialize variable playerScore
let playerScore = 0;
//Declare and initialize variable computerScore
let computerScore = 0;
//Declare variable playRoundStatus
let playRoundStatus;

