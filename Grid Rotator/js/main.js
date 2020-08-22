const grid = document.querySelectorAll("button");



const start = document.getElementById("btnFive");
start.addEventListener("click", rotate);


let one = document.getElementById("btnOne").innerText;
let two = document.getElementById("btnTwo").innerText;
let three = document.getElementById("btnThree").innerText;

let four = document.getElementById("btnFour").innerText;
let five = document.getElementById("btnFive").innerText;
let six = document.getElementById("btnSix").innerText;

let seven = document.getElementById("btnSeven").innerText;
let eight = document.getElementById("btnEight").innerText;
let nine = document.getElementById("btnNine").innerText;

arr1 = [one, two, three];
arr2 = [four, five, six];
arr3 = [seven, eight, nine];

array = arr1.concat(arr2).concat(arr3);

function rotate() {
  var arr1Pop = arr1.pop();
  var arr2Pop = arr2.pop();
  var arr2Shift = arr2.shift();
  var arr3Shift = arr3.shift();

  arr1.unshift(arr2Shift);
  arr3.push(arr2Pop);
  arr2.push(arr1Pop);
  arr2.unshift(arr3Shift);
  array = arr1.concat(arr2).concat(arr3);
  
  console.log(array);
}




