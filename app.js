const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let playerSelection = '';
let computerSelection = '';
let winner = '';
let gameIsRunnning = false;

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, '').toUpperCase();
    if (selection !== ROCK && 
        selection !== PAPER && 
        selection !== SCISSORS) {
        alert('Invalid choice! We chose Rock for you!');
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = function() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = function (cChoice, pChoice) {
    if(cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK)
    {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
}

const start = function() {
    if (gameIsRunnning) {
        return;
    }
    gameIsRunnning = true;
    console.log('Game is starting...');
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    winner = getWinner(computerSelection, playerSelection);
    console.log(winner);
};

startGameBtn.addEventListener('click', start);