//Declaring constants
const input = document.getElementById("input");
const output = document.getElementById("output");
const button = document.getElementById("check");
const errMessage = document.getElementById("error-message");

//Adding eventlistner
button.addEventListener("click", firstNonRepeatingChar);

function firstNonRepeatingChar() {
  //Setting input variable
  let str = input.value;
  let string = str.toLowerCase().split(" ").join("");
  
  //Setting conditions to accept letters only using regular expression
  let regExp = /^[a-zA-Z]+$/g;
  if (!string.match(regExp)) {
    errMessage.innerHTML = "Invalid input, enter letters only";

    return;
  }
    
  //Looping through the input string
  for (let i = 0; i < string.length; i++) {
    let x = string[i];
  
    //Finding the position of each character to determine repeated character
    if (string.indexOf(x) == i && string.indexOf(x, i + 1) == -1) {
      
    //Displaying the result in the browser
      return output.innerHTML = `<span id="bold">${x.toUpperCase()}</span> is the first non-repeating character.`;
    }
  }
  
  //Display if all the characters are repeated
  return output.innerHTML = "Every character is repeated";
}

//Function to clear error message and result from the broswer
input.oninput = function() {
  if (this.value.length++) {
    errMessage.innerHTML = "";
    output.innerHTML = "";
  }
}