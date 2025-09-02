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
let rock = "rock";
let scissors = "scissors";
let paper = "paper";

// Create function for computer's choice
function getComputerChoice(){
    let computerChoice;

    // Generate random number between 1 to 10
    let randomNumber = Math.random() * 10;

    // Assign result to variables
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

// Create function for human's choice
function getHumanChoice(){
    let isTrue = true;

    while (isTrue){
        // Ask human's choice
        let getHumanChoice = prompt("Choose between rock, paper, or scissors.");

        // Continue function when user's input is correct
        isTrue = false;

        let humanChoice;

        // Assign result to variables
        if (getHumanChoice.toLowerCase().trim() == rock){
            humanChoice = rock;
            console.log(humanChoice);
        } else if (getHumanChoice.toLowerCase().trim() == paper){
            humanChoice = paper;
            console.log(humanChoice);
        } else if (getHumanChoice.toLowerCase().trim() == scissors){
            humanChoice = scissors;
            console.log(humanChoice);
        } else {
            console.log("Please enter a valid value");
            
            // Repeat prompt when user's input is false
            isTrue = true;
        }

    }
}

getHumanChoice();

console.log(getComputerChoice());