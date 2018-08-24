document.onkeyup = function (event) {
var chosenWord = document.getElementById("#chosenWord");
var guesses = 10;
var winCount = 0;
var lossCount = 0;
var userGuesses = 0;

var chosenWord = function () {
var khaledKeys = ["they", "blessed", "all the keys", "water your plants", "lion order", "live smooth", "all i do is win", "we the best"];
return khaledKeys[Math.floor(Math.random() * khaledKeys.length)];
};
var userGuess = event.key;
// Trying to put the correct word into an array of underscores
var makeAnswerArr = function() {
    answerArr = [];
    for (var i = 0; i < word.length; i++) {
      answerArr[i] = "_";
    }
    lettersLeft = word.length;
    // return answerArr;
    chosenWord.innerHTML = answerArr;
  };
// if answerArr[i] = any letter, then _, ELSE " "
  //how to show in html how many guesses left?
  var showPlayerProgress = function() {
    alert(answerArray.join(" "));
    // alert(answerArray.join(" "));
  };
  //how to show this in html? instead of prompt something for input in html page
    var getGuess = function() {
      var guess = prompt("Guess a letter, or click Cancel to stop playing.");
      guess = guess.toLowerCase();
      return guess;
   };
  
  var updateGameState = function(guess, word, answerArray, wrongGuesses) {
    //update answerArray and return a number showing how many times the guess appears in the word so remainingLetters can be updated
    var correctGuess = false;
    var correctGuesses = 0;
    for (var i = 0; i < word.length; i++) {
      if (word[i] === guess && answerArray[i] === "_") {
        answerArray[i] = guess;
        correctGuesses++;
        correctGuess = true;
      } else if (word[i] === guess) {
        console.log("You already guessed that letter.");
        correctGuess = true;
      }
    }
    if (!correctGuess) {
      wrongGuesses++;
    }
    var guessArray = [correctGuesses, wrongGuesses];
    return guessArray;
  };
  
  var showAnswerAndCongratulatePlayer = function(answerArray, wrongGuesses) {
  
    //use alert to show the answer and congratulate the player
    if (wrongGuesses === 10) {
      return (document.getElementById("gameOver").innerHTML = "Game Over");
    } else {
      // alert(answerArray.join(" "));
      // alert("Good job! The answer was " + word);
    }
  };
    
  var word = chosenWord();
  var answerArray = makeAnswerArr(word);
  var lettersLeft = word.length;
  var wrongGuesses = 0;
  
  while (lettersLeft > 0) {
    showPlayerProgress(answerArray);
    var guess = userGuess;
    if (guess === null) {
      break;
    // } else if (guess.length !== 1) {
    //   alert("Please enter a single letter.")
    } else {
      var guessArray = updateGameState(guess, word, answerArray, wrongGuesses);
      var correctGuesses = guessArray[0];
      var wrongGuesses = guessArray[1];
      lettersLeft -= correctGuesses;
    }
    if (wrongGuesses > 10) {
      // return (document.getElementById("wrong guesses").innerHTML = "Game Over");
      break;
    }
  }
  
  showAnswerAndCongratulatePlayer(answerArray, wrongGuesses, userGuess);}

