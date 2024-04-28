let target;

const humanOneGuessInput = document.getElementById('human-one-guess');
const humanTwoGuessInput = document.getElementById('human-two-guess');

const roundNumberDisplay = document.getElementById('round-number');

//const computerGuessDisplay = document.getElementById('computer-guess');
const humanOneScoreDisplay = document.getElementById('human-one-score');
const humanTwoScoreDisplay = document.getElementById('human-two-score');
const targetNumberDisplay = document.getElementById('target-number');
let scoreOneDisplay = document.getElementById('score-one');
let scoreTwoDisplay = document.getElementById('score-two');
//const computerWinsDisplay = document.getElementById('computer-wins');

const guessButtonOne = document.getElementById('guess-one');
const guessButtonTwo = document.getElementById('guess-two');
const playButton = document.getElementById('play-game');
const nextRoundButton = document.getElementById('next-round')

guessButtonOne.addEventListener('click', () => {
  guessButtonOne.setAttribute('disabled', true);
  subtractButtonOne.setAttribute('disabled', true);
  addButtonOne.setAttribute('disabled', true);
  humanOneGuessInput.setAttribute('readonly', true);
  
});

guessButtonTwo.addEventListener('click', () => {
  guessButtonTwo.setAttribute('disabled', true);
  subtractButtonTwo.setAttribute('disabled', true);
  addButtonTwo.setAttribute('disabled', true);
  humanTwoGuessInput.setAttribute('readonly', true);
  playButton.removeAttribute('disabled');
  
  
});



playButton.addEventListener('click', () => {
  // Generate the target value
  target = generateTarget();

  // Retrieve the player one gues.
  const currentHumanOneGuess = humanOneGuessInput.value;

  // Retrieve the player two gues.
  const currentHumanTwoGuess = humanTwoGuessInput.value;

  // Display the computer guess and the target
  //computerGuessDisplay.innerText = computerGuess;
  targetNumberDisplay.innerText = target;
  
  // Determine if the human or computer wins:
  const humanIsWinner = compareGuesses(currentHumanOneGuess, currentHumanTwoGuess, target)
  const winner = humanIsWinner;

  // Update the correct score:
  updateScore(winner);
  

  // Display the winner
  if (humanIsWinner === 1) {
    scoreOneDisplay.value++;
    guessButtonOne.innerText = 'You Win!!!!!';
    guessButtonTwo.innerText = 'You Lost!!!';
    guessButtonOne.classList.toggle('winning-text');
    guessButtonTwo.classList.toggle('loosing-text');
  } else if (humanIsWinner === 2) {
    scoreTwoDisplay.value++;
    guessButtonTwo.innerText = 'You Win!!!!!';
    guessButtonTwo.classList.toggle('winning-text');
    guessButtonOne.classList.toggle('loosing-text');
    guessButtonOne.innerText = 'You Lost!!!';
  }
   else {
      if (humanIsWinner === 0) {
        guessButtonOne.innerText = 'Draw!!!';
        guessButtonOne.classList.toggle('draw-text');
        guessButtonTwo.innerText = 'Draw!!!';
        guessButtonTwo.classList.toggle('draw-text')
      }
      
   }

  // winnerDisplay.innerText = humanIsWinner ? 'You win!' : 'Computer wins!';

  // Display the current scores:
  humanOneScoreDisplay.innerText = humanOneScore;
  humanTwoScoreDisplay.innerText = humanTwoScore;

  

  // Set the correct disabled state for the buttons
  guessButtonOne.setAttribute('disabled', true)
  guessButtonTwo.setAttribute('disabled', true)
  nextRoundButton.removeAttribute('disabled');
  playButton.setAttribute('disabled', true);
  
  //Changes the color ofthe score 
  colorScore();
 
});

nextRoundButton.addEventListener('click', () => {
  // Increase the round number
  advanceRound();
  // Display the new round number
  roundNumberDisplay.innerText = currentRoundNumber;

  

  // Set the correct disabled state for the buttons
  nextRoundButton.setAttribute('disabled', true);
  guessButtonOne.removeAttribute('disabled');
  subtractButtonOne.removeAttribute('disabled');
  addButtonOne.removeAttribute('disabled');
  humanOneGuessInput.removeAttribute('readonly');
  guessButtonTwo.removeAttribute('disabled');
  subtractButtonTwo.removeAttribute('disabled');
  addButtonTwo.removeAttribute('disabled');
  humanTwoGuessInput.removeAttribute('readonly');


  // Reset the guess input box and the target number display:
  targetNumberDisplay.innerText = '?';
  guessButtonOne.innerText = 'Make a Guess';
  guessButtonTwo.innerText = 'Make a Guess';
  humanOneGuessInput.value = '';
  humanTwoGuessInput.value = '';
  guessButtonOne.classList.remove('winning-text');
  guessButtonTwo.classList.remove('winning-text');
  guessButtonOne.classList.remove('loosing-text');
  guessButtonTwo.classList.remove('loosing-text');
  guessButtonOne.classList.remove('draw-text');
  guessButtonTwo.classList.remove('draw-text');
  
});

const addButtonOne = document.getElementById('add-one');
const subtractButtonOne = document.getElementById('subtract-one');
const addButtonTwo = document.getElementById('add-two');
const subtractButtonTwo = document.getElementById('subtract-two');

addButtonOne.addEventListener('click', () => {
  humanOneGuessInput.value = +humanOneGuessInput.value + 1;
  handleValueChange(humanOneGuessInput.value);
});

subtractButtonOne.addEventListener('click', () => {
  humanOneGuessInput.value = +humanOneGuessInput.value - 1;
  handleValueChange(humanOneGuessInput.value);
});

const handleValueChange = value => {
  if (value > 0 && value <= 9) {
    subtractButtonOne.removeAttribute('disabled');
    addButtonOne.removeAttribute('disabled');
  } else if (value > 9) {
    addButtonOne.setAttribute('disabled', true);
  } else if (value <= 0) {
    subtractButtonOne.setAttribute('disabled', true);
  }
}

addButtonTwo.addEventListener('click', () => {
  humanTwoGuessInput.value = +humanTwoGuessInput.value + 1;
  handleValueChange1(humanTwoGuessInput.value);
});

subtractButtonTwo.addEventListener('click', () => {
  humanTwoGuessInput.value = +humanTwoGuessInput.value - 1;
  handleValueChange1(humanTwoGuessInput.value);
});

const handleValueChange1 = value => {
  if (value > 0 && value <= 9) {
    subtractButtonTwo.removeAttribute('disabled');
    addButtonTwo.removeAttribute('disabled');
  } else if (value > 9) {
    addButtonTwo.setAttribute('disabled', true);
  } else if (value <= 0) {
    subtractButtonTwo.setAttribute('disabled', true);
  }
}


humanOneGuessInput.addEventListener('input', function(e) {
  handleValueChange(e.target.value);
});
humanTwoGuessInput.addEventListener('input', function(e) {
  handleValueChange1(e.target.value);
});

const changePlayerNames = (nickNameOne = 'Sunny', nickNameTwo = 'Luna') => {
   let nickOne = document.getElementById('name-one').value;
   let nickTwo = document.getElementById('name-two').value;
  if (nickOne == '') {
    nickOne = 'Sunny'
    nickNameOne = nickOne;
  }
  else {
    nickNameOne = nickOne;
  }

  if (nickTwo == '') {
    nickTwo = 'Luna'
    nickNameTwo = nickTwo;
  }
  else {
    nickNameTwo = nickTwo;
  }

   document.getElementById('set-name-one').innerHTML = nickNameOne;
   document.getElementById('set-name-two').innerHTML = nickNameTwo;
   document.getElementById('top-name').style ="display: none;";
}

