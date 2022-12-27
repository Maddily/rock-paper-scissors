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
    //If the player's selection is 'rock' and the computer's selection is 'scissors', return "You win! Rock beats Scissors"
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats Scissors";
    }
    //If the player's selection is 'rock' and the computer's selection is 'paper', return "You lose! Paper beats Rock"
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats Rock";
    }
    //If the player's selection is 'paper' and the computer's selection is 'rock', return "You win! Paper beats Rock"
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        return "You win! Paper beats Rock";
    }
    //If the player's selection is 'paper' and the computer's selection is 'scissors', return "You lose! Scissors beats Paper"
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats Paper";
    }
    //If the player's selection is 'scissors' and the computer's selection is 'paper', return "You win! Scissors beats Paper"
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats Paper";
    }
    //If the player's selection is 'scissors' and the computer's selection is 'rock', return "You lose! Rock beats Scissors"
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats Scissors";
    }
    //if the player's selection equals the computer's selection, return "It's a tie!"
    else if (playerSelection.toLowerCase() == computerSelection) {
        return "It's a tie!";
    }
    //If the user's input isn't rock, paper or scissors, return "Wrong input! check your spelling"
    else {
        return "Wrong input! check your spelling";
    }
}

const playerSelection = prompt('Enter your selection: ');
const computerSelection = getComputerChoice();

//Create a function that runs 5 rounds of the game
function game() {
    
}