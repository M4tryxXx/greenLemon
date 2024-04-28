let humanOneScore = 0;
let humanTwoScore = 0;
let currentRoundNumber = 0;

// Write your code below:

// This function generates a integer number between 0 and 9 inclusive.
const generateTarget = () => {
    const randInt = Math.floor(Math.random() * 10); 
    return randInt;
}

// This function return the difference between two numbers.
const getAbsoluteDistance = (firstNumber, secondNumber) => {
    return Math.abs(firstNumber - secondNumber);
}
/* This function compare which number between Human choice and computer random generated 
is closest to secret number generated randomly by computer */
const compareGuesses = (humanOneGuess, humanTwoGuess, secretGuess) => { 
    //Let`s check for incorect input.
    if (humanOneGuess < 0 || humanOneGuess > 9) {
        alert('Player one, You have entered a wrong number, Please enter a number between 0 and 9 inclusive!')
    }

    else if (humanTwoGuess < 0 || humanTwoGuess > 9) {
        alert('Player two, You have entered a wrong number, Please enter a number between 0 and 9 inclusive!')
    }

    else {
    // Here we find out the difference between Human guess and secret number.
    humanOneGuess = getAbsoluteDistance(humanOneGuess, secretGuess);
    humanTwoGuess = getAbsoluteDistance(humanTwoGuess, secretGuess);

    // Here we find out the difference between Computer guess and secret number.
    

    if (humanTwoGuess > humanOneGuess || humanOneGuess === 0 && humanTwoGuess > 0) {
        return 1;
    }
    else if (humanOneGuess > humanTwoGuess || humanTwoGuess === 0 && humanOneGuess > 0) {
        return 2;
    }
    else {
            return 0; 
    }
}
}

// This function will keep the track of score.
const updateScore = winner => { 
    if (winner === 1) {
        humanOneScore += 1;
    }
    else if (winner === 2){
        humanTwoScore += 1;
    }
}

//This Function Changes the color of the score 
const colorScore = () => {
    if (scoreOneDisplay.value > scoreTwoDisplay.value) {
        humanOneScoreDisplay.style = 'color: green;';
        humanTwoScoreDisplay.style = 'color: red;';
        return console.log('one is bigger ' + scoreTwoDisplay.value + ' - ' + scoreTwoDisplay.value); 
      } else if (scoreTwoDisplay.value > scoreOneDisplay.value) {
        humanOneScoreDisplay.style = 'color: red;';
        humanTwoScoreDisplay.style = 'color: green;';
        return console.log('two is bigger ' + scoreTwoDisplay.value + ' - ' + scoreTwoDisplay.value); 
      } else if (scoreTwoDisplay.value == scoreOneDisplay.value){
        humanOneScoreDisplay.style ='color: navy;';
        humanTwoScoreDisplay.style ='color: navy;';
        return console.log('equall ' + scoreTwoDisplay.value + ' - ' + scoreTwoDisplay.value); 
      }
}





// This function keeps the track of rounds.
const advanceRound = () => {
    currentRoundNumber += 1;
}
