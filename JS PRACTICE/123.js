var secretNumber = 4;


var stringGuess = prompt("guess a number");
var guess = Number(stringGuess);


if (guess === secretNumber) {
  alert("you got it!")
}

else if (guess > secretNumber) {
  alert("too high, guess again!")
}
else {
  alert("too low, guess again!")
}






// else {
//   alert("wrong!")
// };
