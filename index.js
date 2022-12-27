//Create a function that randomly returns 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
    //Declare a variable inside the function and let it contain a generated random number
    let randomNum = Math.floor(Math.random() * 100) - 1;
    //Create an if statement with a condition to check if the random number is between 0 and 32
    if (randomNum >= 0 && randomNum <= 32) {
        //Return 'Rock' if the condition is met
        return 'Rock';
    }
    //If the condition isn't met, add another condition to check if the random number is between 33 and 65
    else if (randomNum >= 33 && randomNum <= 65) {
        //Return 'Paper' if the condition is met
        return 'Paper';
    }
}