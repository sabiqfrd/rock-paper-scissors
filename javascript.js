let rock = "rock";  // Create variables
let scissors = "scissors";
let paper = "paper";
let restart = true;

while (restart) {
    function getComputerChoice(){   // Create function for computer's choice
        let computerChoice;

        let randomNumber = Math.random() * 10;  // Generate random number between 1 to 10
        if (randomNumber <= 3){         // Assign result to variables
            computerChoice = rock;
        } else if (randomNumber >= 7){
            computerChoice = scissors;
        } else {
            computerChoice = paper;
        }
        return computerChoice;  // Return computer's choice
    }

    function getHumanChoice(){  // Create function for human's choice
        let humanChoice;
        
        let isTrue = true;
        while (isTrue){
            let getHumanChoice = prompt("Choose between rock, paper, or scissors.");    // Ask human's choice
            isTrue = false; // Continue function when user's input is correct

            if (getHumanChoice.toLowerCase().trim() == rock){   // Assign result to variables
                humanChoice = rock;
            } else if (getHumanChoice.toLowerCase().trim() == paper){
                humanChoice = paper;
            } else if (getHumanChoice.toLowerCase().trim() == scissors){
                humanChoice = scissors;
            } else {
                console.log("Please enter a valid value");
                isTrue = true;   // Repeat prompt when user's input is false
            }
        }
        return humanChoice;
    }

    let humanScore = 0;
    let computerScore = 0;

    function playRound(p1, p2){    // Create function for game's logic
        let result;

        if ((p1 == rock && p2 == scissors) ||
            (p1 == scissors && p2 == paper) ||
            (p1 == paper && p2 == rock)
            ) {
            result = `You win! ${p1} beats ${p2}.`;
            humanScore++;
        } else if (p1 == p2) {
            result = "It's a draw.";
        } else {
            result = `You lost! ${p2} beats ${p1}`;
            computerScore++;
        }

        return result;
    }

    let totalGame = 1;  // Count number of rounds
    while(totalGame <= 5){
        console.log(`It's round ${totalGame}`);

        let humanChoice = getHumanChoice();
        console.log("You chose " + humanChoice);
        let computerChoice = getComputerChoice();
        console.log("Computer chose " + computerChoice);

        let result = playRound(humanChoice, computerChoice);
        console.log(result);
        console.log(`Its ${humanScore}-${computerScore}`);
        totalGame++;
    }

    if (humanScore == computerScore) {  // Declare winner of the game
        console.log("It's a draw.");
    } else if (humanScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("You lost.");
    }

    function restartGame() {    // Allow user to restart game
        let ask = confirm("Restart game?");

        if (ask != true) {
            restart = false;
        }
    }

    restartGame();
}