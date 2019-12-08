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

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, '').toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert('Invalid choice! We chose Rock for you!');
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) => {
  return cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
};

const start = () => {
  if (gameIsRunnning) {
    return;
  }
  gameIsRunnning = true;
  console.log('Game is starting...');
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  winner = getWinner(computerSelection, playerSelection);
  let message = `You picked ${playerSelection}, computer picked ${computerSelection}, `;
  if (winner === RESULT_DRAW) {
    message = message + `therefore you had a draw.`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + `therefore you won.`;
  } else {
    message = message + `therefore you lost.`;
  }
  alert(message);
  gameIsRunnning = false;
};

startGameBtn.addEventListener('click', start);
