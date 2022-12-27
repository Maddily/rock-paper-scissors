//Create a function that randomly returns 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
    //Declare a variable inside the function and let it contain a generated random number
    let randomNum = Math.floor(Math.random() * 100) - 1;
    //Create an if statement with a condition to check if the random number is between 0 and 32
    if (randomNum >= 0 && randomNum <= 32) {
        //Return 'Rock' if the condition is met
        return 'Rock';
    }
}