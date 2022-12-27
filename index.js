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

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let playRoundStatus;

//Create a function that runs 5 rounds of the game
function game() {
    //Create a for loop to run the game 5 times
    for (let i = 0; i < 5; i++) {
        //Ask the user to input their selection
        playerSelection = prompt('Enter your selection: ');
        //Display playerSelection
        console.log("You: " + playerSelection);
        //Call getComputerChoice() and store the returned value in computerSelection
        computerSelection = getComputerChoice();
        //Display computerSelection
        console.log("Computer: " + computerSelection);
        //Call playRound() and store its returned value in playRoundStatus
        playRoundStatus = playRound(playerSelection, computerSelection);
        //If playRoundStatus is 'player wins', increment playerScore and display the result
        if (playRoundStatus == 'player wins') {
            playerScore++;
            console.log("You win this round!");
        }
        //If playRoundStatus is 'computer wins', increment computerScore and display the result
        else if (playRoundStatus == 'computer wins') {
            computerScore++;
            console.log("You lose this round!");
        }
        //If playRoundStatus is 'tie', display the string 'It's a tie'
        else if (playRoundStatus == 'tie') {
            console.log("It's a tie");
        }
        //If the player's input isn't rock, paper or scissors, display "Wrong input! check your spelling"
        else {
            console.log("Wrong input! check your spelling");
        }
    }
    //If the player wins, display the score and the string "You win!"
    if (playerScore > computerScore) {
        console.log("You win!");
        console.log("The score:\nYou: " + playerScore + " - Computer: " + computerScore);
    }
    //if the computer wins, display the score and the string "You lose!"
    else if (playerScore < computerScore) {
        console.log("You lose!");
        console.log("The score:\nYou: " + playerScore + " - Computer: " + computerScore);
    }
}