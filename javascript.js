let rock = "rock";
let scissors = "scissors";
let paper = "paper";

function getComputerChoice(){
    let computerChoice;

    let randomNumber = Math.random() * 10;
    if (randomNumber <= 3){
        computerChoice = rock;
    } else if (randomNumber >= 7){
       computerChoice = scissors;
    } else {
        computerChoice = paper;
    }
    return computerChoice;
}

function playRound(p1, p2){
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

let humanScore = 0;
let computerScore = 0;

const body = document.querySelector('body');

const select = document.querySelector('#select');

const display = document.querySelector('#display');

const choiceContainer = document.querySelector('#choiceContainer');
const humanChoiceContainer = document.querySelector('#humanChoiceContainer');
const computerChoiceContainer = document.querySelector('#computerChoiceContainer');

const buttons = document.querySelectorAll('button');
function disableButtons() {
    for (let button of buttons) {
        button.disabled = true;
    }
    display.appendChild(displayWinner);
}

let displayHumanChoice = document.createElement('span');
displayHumanChoice.setAttribute('id', 'humanChoice');
displayHumanChoice.setAttribute('style', 'font-weight: bold; font-size: larger');

let displayComputerChoice = document.createElement('span');
displayComputerChoice.setAttribute('id', 'computerChoice');
displayComputerChoice.setAttribute('style', 'font-weight: bold; font-size: larger');

let displayResult = document.createElement('div');
displayResult.setAttribute('id', 'result');

let displayScore = document.createElement('div');
displayScore.setAttribute('id', 'score');

let displayWinner = document.createElement('div');
displayWinner.setAttribute('id', 'winner');
displayWinner.setAttribute('style', 'font-weight: 900; font-size: larger');

function restartGame() {
    let restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Game';
    restartButton.setAttribute('style',
        'width: 100px; height: 40px; background: red; color: white; font-weight: bold'
    );
    display.appendChild(restartButton);

    restartButton.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        display.replaceChildren();
        displayComputerChoice.textContent = '';
        displayHumanChoice.textContent = '';
        for (let button of buttons) {
            button.disabled = false;
        }
    });
}

select.addEventListener('click', (e) => {
    
    let humanChoice;

    if (!['rock', 'paper', 'scissors'].includes(e.target.id)) {
        return;
    }
    
    switch (e.target.id) {
        case 'rock' : humanChoice = rock;
        break;
        case 'paper' : humanChoice = paper;
        break;
        case 'scissors' : humanChoice = scissors;
        break;
    }
    
    displayHumanChoice.textContent = humanChoice;
    humanChoiceContainer.appendChild(displayHumanChoice);
    
    let computerChoice = getComputerChoice();
    displayComputerChoice.textContent = computerChoice;
    computerChoiceContainer.appendChild(displayComputerChoice);
    
    displayResult.textContent = playRound(humanChoice, computerChoice);
    display.appendChild(displayResult);
    
    displayScore.textContent = `${humanScore}-${computerScore}`;
    display.appendChild(displayScore);

    if (humanScore === 5) {
        displayWinner.textContent = 'You won!';
        disableButtons();
        restartGame();
    } else if (computerScore === 5) {
        displayWinner.textContent = 'You lost.';
        disableButtons();
        restartGame();
    }
});


