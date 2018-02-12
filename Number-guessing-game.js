// # Number-Guessing-Game
// Pre-work code for a random number guessing game

var ranNum = Math.floor(Math.random() * 50) + 1;
var i = 0;
var userGuess;

function numGuesser() {
  while (i < 10) {
    userGuess = prompt("Guess the number. Number is 1 throuh 50. Guesses so far: " + i);
    if (userGuess == ranNum) {
      alert("You guessed it correct! The number was " + ranNum + ". It took you " + (i + 1) + " guesses");
      break;
    } else {
      i++;
    }
  }
  if (i == 10) {
    alert("Sorry you lost. The correct number was " + ranNum);
  }
}

numGuesser();
