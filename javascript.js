// 1. Get computer's choice
    // a. Generate variable "computerChoice"
    // b. Get random number between 1 to 10
    // c. Assign number generated to either rock, paper or scissors
    // d. return "computerChoice"
// 2. Get human's choice
    // a. Make sure user writes valid input
// 3. Play the round
    // a. Create game logic
    // b. Compare computer's and human's choices
    // c. Declare round's winner
// 5. Keep track of rounds' winner
// 6. Declare game's winner of 5 rounds
    // a. Compare computer's and human's wins


    
// Create variables
let rock = "Rock";
let scissors = "Scissors";
let paper = "Paper";

// Create function getComputerChoice
function getComputerChoice(){
    let computerChoice;

    // Generate random number between 1 to 10
    let randomNumber = Math.random() * 10;

    // Assign number to variables
    if (randomNumber <= 3){
        computerChoice = rock;
    } else if (randomNumber >= 7){
        computerChoice = scissors;
    } else {
        computerChoice = paper;
    }

    // Return computer's choice
    return computerChoice;
}

console.log(getComputerChoice());