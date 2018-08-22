var khaledKeys = ["they", "blessed", "all the keys", "water your plants", "lion order", "live smooth", "all i do is win", "we the best"];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var userBands = prompt("Do you have all the keys?").toLowerCase();
var guesses = 10;
var userGuesses = 0;

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
// Determines which key was pressed.
    var userGuess = event.key;




//     if (favoriteBands.indexOf(userBands) == -1) {
//     alert("Nah. They're pretty lame.");
// }
// else {
//     alert("YEAH I LOVE THEM!");
// }

// for reference:
//     var likeSteak = confirm("Do you like steak?");
//     var ofAge = prompt("How old are you?");

//     if (likeSteak) {
//         alert("Here's a steak sandwich");
//     }

//     else {
//         alert("Here's a Tofu Stir-Fry");
//     }

//     if (ofAge >= 21) {
//         alert("Kampai");
//     }

//     else {
//         alert("No Sake for you!");

//     }