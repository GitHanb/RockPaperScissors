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

//get player's choice
const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, '').toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

//get computer's choice
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

//get winner
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  return cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
};

//start function when clicking on the start button
const start = () => {
  if (gameIsRunnning) {
    return;
  }
  gameIsRunnning = true;
  console.log('Game is starting...');
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();

  let winnder;
  if (playerSelection) {
    winner = getWinner(computerSelection, playerSelection);
  } else {
    winner = getWinner(computerSelection);
  }

  let message = `You picked ${
    playerSelection ? playerSelection : DEFAULT_USER_CHOICE
  }, computer picked ${computerSelection}, `;
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

//add a event listener to start game button
startGameBtn.addEventListener('click', start);

//not related to game
const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
    
  }
  resultHandler(sum);
}

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
}

combine(showResult.bind(this, 'The result after adding all number is:'), 'ADD', 1,5,10,-3,6,10);
combine(showResult.bind(this, 'The result after subtracting all number is:'), 'SUBTRACT', 1, 10, 15, 20);