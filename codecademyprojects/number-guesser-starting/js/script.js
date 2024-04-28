let humanScore = 0;
let computerScore = 0;
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
const compareGuesses = (humanGuess, computerGuess, secretGuess) => { 
    //Let`s check for incorect input.
    if (humanGuess < 0 || humanGuess > 9) {
        alert('You have entered a wrong number, Please enter a number between 0 and 9 inclusive!')
    }

    else {
    // Here we find out the difference between Human guess and secret number.
    humanGuess = getAbsoluteDistance(humanGuess, secretGuess);
    computerGuess = getAbsoluteDistance(computerGuess, secretGuess);

    // Here we find out the difference between Computer guess and secret number.
    

    if (computerGuess > humanGuess || humanGuess === 0 && computerGuess > 0) {
        return 1;
    }
    else if (humanGuess > computerGuess || computerGuess === 0 && humanGuess > 0) {
        return 2;
    }
    else {
        if (humanGuess === computerGuess) {
            return 0; 
        }
    }
}
}

// This function will keep the track of score.
const updateScore = winner => { 
    if (winner === 1) {
        humanScore += 1;
        return humanScore;
    }
    else if (winner === 2){
        computerScore += 1;
        return computerScore;
    }
}


// This function keeps the track of rounds.
const advanceRound = () => {
    currentRoundNumber += 1;
}



console.log(advanceRound());