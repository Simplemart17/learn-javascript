//Declaring constants
const input = document.getElementById("input");
const output = document.getElementById("output");
const button = document.getElementById("check");
const errMessage = document.getElementById("error-message");

//Adding eventlistner
button.addEventListener("click", scrabbleScoreCalc);

function scrabbleScoreCalc() {
  //Setting input variable
  let str = input.value;
  let word = str.toUpperCase();
  let alphabet = {A:1, B:3, C:3, D:2, E:1, F:4, G:2, H:4, I:1, J:8, K:5, L:1, M:3, N:1, O:1, P:3, Q:10, R:1, S:1, T:1, U:1, V:4, W:4, X:8, Y:4, Z:10}
  
  //Setting conditions to accept letters only using regular expression
  let regExp = /^[a-zA-Z]+$/g;
  if (!word.match(regExp)) {
    errMessage.innerHTML = "Invalid input, enter letters only";

    return;
  }
  let sum = 0;
  for (let score = 0; score < word.length; score++) {
    letter = word[score];
    sum += alphabet[letter];
  }
  return output.innerHTML = `Score = ${sum}`;
}

//Function to clear error message and result from the broswer
input.oninput = function() {
  if (this.value.length++) {
    errMessage.innerHTML = "";
    output.innerHTML = "";
  }
}
