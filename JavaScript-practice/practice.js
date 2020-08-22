// "use strict"
function longestWord(sen) {
  return sen.toLowerCase().match(/[a-z0-9]+/g);

}
const output = longestWord('Hello there, my name is Brad');
// console.log(output);



function isIsogram(str) {
    str = str.toLowerCase();
    // let strArr = str;
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j <str.length; j++) {
        if (i!=j) {
          if (str[i] == str[j]) {
            return false
          }
        }
    }
  }
return true
}
// console.log(isIsogram('Amen'));


function isIsogram (word){
  word = word.toLowerCase().split('');
  word.every((v,i) => v !== word[i-1]) ? console.log('True') : console.log('False');
}

// console.log(isIsogram('Dermatoglyphics'));


// BEST SOLUTION TO THE ISOGRAM PROBLEM;
function isIsogram(a){
  a = a.toLowerCase();
  let b = Array.from(new Set(a)).join('');
    if (a === b){
    return true;
  } else
  return false;
}

// console.log(isIsogram('Dermatoglyphics'));

//CHECKING FOR ISOGRAM
function isIsogram(str) {
    str = str.toLowerCase();
    return str.split('').every((j, i) => str.indexOf(j) == i);
}

// console.log(isIsogram('Dermatoglyphics'));


function isIsogram (text) {
  text = text.toUpperCase();
  var unique = new Set();
  var text_array = text.split('');
  text_array.forEach(function(letter) {
    unique.add(letter);
  });
  return unique.size === text.length;
}

// console.log(isIsogram('Dermatoglyphics'));


let sum = 0;
for (let i = 0; i < 250; i++) {
   if (i % 9 === 0) {
    sum += i;
    }
}
// console.log(sum);

// let ask = (question, yes, no) => confirm(question) ? yes() : no();
// ask("Do you agree?", () => console.log("You agreed."), () => console.log("You cancelled"));

// var listBrand = ["LEXUS", "AUDI", "MAYBACK", "FERRARI", "TOYOTA"];

//   function printBtn() {
//     for (var i = 0; i < listBrand.length; i++) {
//       var btn = document.createElement("button");
//       var t = document.createTextNode(listBrand[i]);
//       btn.appendChild(t);
//       document.body.appendChild(btn);
//     }
//   }
//   printBtn()

const state = ["abia", "adamawa", "akwaibom", "anambra", "bauchi", "bayelsa", "benue", "borno", "crossriver", "delta", "ebonyi", "enugu", "edo", "ekiti", "gombe", "imo", "jigawa", "kaduna", "kano", "katsina","kebbi", "kogi", "kwara", "lagos", "nasarawa", "niger", "ogun", "ondo", "osun", "oyo", "plateau",
"rivers", "sokoto", "taraba", "yobe", "zamfara"];

state.sort(function(a,b) {
  return b.length - a.length
});

// console.log(state);


let places = ['warri', 'abuja', 'lagos', 'ibadan', 'kano'];
let [whereIWork, whereILive] = places;

// console.log(whereILive);

// const numberGame = (x,y) => {
//   let a = [], b = [];
//   if (isNaN(x) || isNaN(y)) {
//     throw Error ("Only numerical values allowed");
//   }
//   function even(x,y) {
//     for (let i = y; i < x; i++) {
//       if ((i!==y) && (i%2 === 0)) {
//         b.push(i);
//       }
//     }
//     return b;
//   }
//   function odd(x,y) {
//     for (let i = x; i < y; i++) {
//       if ((i!==x) && (i%2 !==0)) {
//         b.push(i);
//       }
//     }
//     return b;
//   }
//   a = (x > y) ? even(x,y) : odd(x,y);
//   return a;
// }
// console.log(numberGame(2, 11));


function numberGame(x,y) {
  
  let a = [], 
  b = [];
  if (isNaN(x) || isNaN(y)) {
    throw Error ("Only numerical values allowed");
  }
  function even(x,y) {
    for (let i = y; i <= x; i++) {
      if (i%2 === 0) {
        b.push(i);
      }
    }
    return b;
    
  }
  // console.log(even(12, 0));
  
  function odd(x,y) {
    for (let i = x; i <= y; i++) {
      if (i%2 !== 0) {
        b.push(i);
      }
    }
    return b;
  }
  // console.log(odd(0, 12));

  // if (x > y) {
  //   return even(x,y);
  // } 
  // else {
  //   return odd(x,y);
  // }
  
  a = (x > y) ? even(x,y) : odd(x,y);
  return a;
  
}
// console.log(numberGame(1, 13));



function countChange(money, coins) {
  let count = [];
  for (let i = 0; i <= money; i++) {
    count[i] = 0;
    }
  count[0] = 1;

  for (let j = 0; j < coins.length; j++) {
    var change = coins[j];

    for (let higherAmount = change; higherAmount <= money; higherAmount++) {
      var rem = higherAmount - change;

      count[higherAmount] += count[rem];
    }
  }
  return count[money];


}

// console.log(countChange(4, [1,2]));

// console.log(new Date(0582520000000));


class User {
  constructor(name) {
    this._name = name;
    this._loggedIn = false;
   }
  isLoggedIn() {
    return this._loggedIn;
  }
  getLastLoggedInAt() {
    return this._lastLoggedInAt;
  }
  logIn() {
    this._loggedIn = true;
    this._lastLoggedInAt = new Date();
  }
  logOut() {
    this._loggedIn = false;
  }
  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name;
  }
  canEdit(comment) {
    if (comment.getAuthor().getName() === this._name) {
      return true;
  }
    return false;
  }
  canDelete(comment) {
    return false;
  }
}

class Moderator extends User {
  constructor(name) {
    super(name);
  }
  
  canDelete(comment) {
    return true;
  }
}

class Admin extends Moderator {
  constructor(name) {
    super(name);
  }
  
  canEdit(comment) {
    return true;
  }
  
  canDelete(comment) {
    return true;
  }
}

class Comment {
  constructor(author, message, repliedTo) {
    this._createdAt = new Date();
    this._message = message;
    this._author = author;
    this._repliedTo = repliedTo || null;
  }
  getMessage() {
    return this._message
  }
  setMessage(message) {
    this._message = message;
  }
  getCreatedAt() {
    return this._createdAt;
  }
  getAuthor() {
    return this._author;
  }
  getRepliedTo() {
    return this._repliedTo
  }
  getString(comment) {
    const authorName = comment.getAuthor().getName();
      if (!comment.getRepliedTo()) return authorName;
      return `${comment.getMessage()} by ${authorName} (replied to ${this.getString(comment.getRepliedTo())})`;
  }
  toString() {
    if(!this._repliedTo) {
      return `${this._message} by ${this._author.getName()}`;
    }
    return `${this._message} by ${this._author.getName()} (replied to ${this._repliedTo.getAuthor().getName()})`
  }
}



const number_game = (x,y) => {
  let a = [], b = [];
  if (isNaN(x) || isNaN(y)) {
    throw Error ("Only numerical values allowed");
  }
  function even(x,y) {
    for (let i = y; i <= x; i++) {
      if (i%2 === 0) {
        b.push(i);
      }
    }
    return b;
  }
  function odd(x,y) {
    for (let i = x; i <= y; i++) {
      if (i%2 !==0) {
        b.push(i);
      }
    }
    return b;
  }
  a = (x > y) ? even(x,y) : odd(x,y);
  return a;
}



function digitize(n) {
  return Array.from(String(n), Number);
}


function mySort(nums) {
  let odd = [];
  let even = [];
  let result = [];
  
  if (!Array.isArray(nums)) {
    return
  } else {
    for (let counter = 0; counter < nums.length; counter++) {
      if (typeof nums[counter] === 'string') {
        nums.splice(counter, 0);
      } else if (Math.floor(nums[counter]) % 2 === 0) {
        even.push(Math.floor(nums[counter]));
      } else {
        odd.push(nums[counter]);
      }
    }
  }
  let newOdd = odd.sort(function(a, b) {return a-b});
  let newEven = even.sort(function(a, b) {return a-b});
  return result = newOdd.concat(newEven);
}
mySort([90, 45, 66, 'bye', 100.5]);


function power(a, b) {
  let result = 1;
  
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}


function countChange(money,coins) {
  let count = [];
  for (let i = 0; i <= money; i++) {
    count[i] = 0;
    }
  count[0] = 1;

  for (let j = 0; j < coins.length; j++) {
    let change = coins[j];

    for (let higherAmount = change; higherAmount <= money; higherAmount++) {
      let rem = higherAmount - change;

      count[higherAmount] += count[rem];
    }
  }
  return count[money];
}

function numberToOrdinal(n) {
  let j = n % 10, k = n % 100;
  if (j === 1 && k != 11) {
    return n + 'st';
  }
  if (j == 2 && k != 12) {
    return n + 'nd';
  }
  if (j == 3 && k != 13) {
    return n + 'rd';
  }
  if (n === 0) {
    return n;
  }
  return n + 'th';
  
}

// console.log(numberToOrdinal(10));

// OOP PRACTICE EXERCISE - MDN Web Docs //

// var person = {
//   name : {
//     first: 'Bob',
//     last: 'Smith'
//   },
//   age: 32,
//   gender: 'male',
//   interests: ['music', 'skiing'],
//   bio: function() {
//     console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
//   },
//   greeting: function() {
//     console.log('Hi! I\'m ' + this.name.last + '.');
//   }
// };
// var myDataName = 'height';
// var myDataValue = '1.75m';
// person[myDataName] = myDataValue;

// OOP PRACTICE EXERCISE - Constructors //
// function createNewPerson(name) {
//   var obj = {};
//   obj.name = name;
//   obj.greeting = function() {
//     console.log('Hi! I\'m ' + this.name + '.');
//   };
//   return obj;
// }

// function Person(name) {
//   this.name = name;
//   this.greeting = function() {
//     alert('Hi! I\'m ' + this.name + '.');
//   };
// }
// var person1 = new Person('Bob');
// var person2 = new Person('Sarah');

// INHERITANCE USING PROTOTYPE//
// function Person(first, last, age, gender, interests) {
//   this.name = {
//     first,
//     last
//   };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   this.bio = function() {
//     // First define a string, and make it equal to the part of
//     // the bio that we know will always be the same.
//     var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
//     // define a variable that will contain the pronoun part of
//     // the second sentence
//     var pronoun;
//     // check what the value of gender is, and set pronoun
//     // to an appropriate value in each case
//     if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
//       pronoun = 'He likes ';
//     } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
//       pronoun = 'She likes ';
//     } else {
//       pronoun = 'They like ';
//     }
//     // add the pronoun string on to the end of the main string
//     string += pronoun;
//     // use another conditional to structure the last part of the
//     // second sentence depending on whether the number of interests
//     // is 1, 2, or 3
//     if(this.interests.length === 1) {
//       string += this.interests[0] + '.';
//     } else if(this.interests.length === 2) {
//       string += this.interests[0] + ' and ' + this.interests[1] + '.';
//     } else {
//       // if there are more than 2 interests, we loop through them
//       // all, adding each one to the main string followed by a comma,
//       // except for the last one, which needs an and & a full stop
//       for(var i = 0; i < this.interests.length; i++) {
//         if(i === this.interests.length - 1) {
//           string += 'and ' + this.interests[i] + '.';
//         } else {
//           string += this.interests[i] + ', ';
//         }
//       }
//     }
//     // finally, with the string built, we alert() it
//     console.log(string);
//   };
//   this.greeting = function() {
//     console.log('Hi! I\'m ' + this.name.first + '.');
//   };
// }
// var person1 = new Person('Tammi', 'Smith', 32, 'Neutral', ['music', 'skiing', 'kickboxing']);
// person1.bio();

// Person.prototype.farewell = function() {
//   console.log(this.name.first + ' has left the building. Bye for now!');
// }

// person1.farewell();


// function Teacher(first, last, age, gender, interests, subject) {
//   Person.call(this, first, last, age, gender, interests);

//   this.subject = subject;
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;

// Teacher.prototype.greeting = function() {
//   var prefix;

//   if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
//     prefix = 'Mr.';
//   } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
//     prefix = 'Mrs.';
//   } else {
//     prefix = 'Mx.';
//   }

//   console.log('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
// };

// var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');

// INHERITANCE USING CLASS//
// class Person {
//   constructor(first, last, age, gender, interests) {
//     this.name = {
//       first,
//       last
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//   }

//   greeting() {
//     console.log(`Hi! I'm ${this.name.first}`);
//   };

//   farewell() {
//     console.log(`${this.name.first} has left the building. Bye for now!`);
//   };
// }

/* Creating a subclass the extend keywords
this inherit from the class person */

// class Teacher extends Person {
//   constructor(first, last, age, gender, interests, subject, grade) {
//     super(first, last, age, gender, interests);

//     // subject and grade are specific to Teacher
//     this.subject = subject;
//     this.grade = grade;
//   }
  
// }
// let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);

// snape.greeting();
// snape.farewell();
// console.log(snape.name.first);
// console.log(snape.subject);


function getPrime(n) {
  primeNumber = [];

  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    
    for (let y = 2; y < i; y++) {
      if (i % y === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      primeNumber.push(i);
    }
  }
  return primeNumber.join('\n');
}
// getPrime(10);
// console.log(getPrime(10));


// function getPrime(num) {
//   var sqrtnum = Math.floor(Math.sqrt(num));
//   var prime = num != 1;
//   for (var i = 2; i < sqrtnum + 1; i++) { // sqrtnum+1
//     if (num % i == 0) {
//       prime = false;
//       break;
//     }
//     if (prime) {
//       console.log('test');
//     }
//   }
//   // return prime;
// }

// function isPrime(number) {
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }


// function getPrimes(n) {
//     let primeList = [];
//     for (var j = 2; j <= n; j++) {
//       if (isPrime(j)) {
//         primeList.push(j);
//       }
//     }
//     return primeList.join('\n');
// }

console.log(getPrime(101));

// var p = prompt("input numeric value", "10");
// for (j = 2; j < p; j++) {
//   if (isPrimes(j)) {
//     document.write(j + ", ");
//   }
// }
// function isPrimes(n) {
//   var primes = true;
//   for (i = 2; i < n; i++) {
//     if (n % i == 0) {
//       primes = false;
//       break;
//     }
//   }
//   return primes;
// }

// const getPrime = num => {
//   for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//     if (num % i === 0) return false;
//   return num > 1;
// }

// console.log(getPrime(10));



// function getPrimeNumbers(limit) {
//   // iterate from 2 till the limit
//   for (let number = 2; number <= limit; number++) {
//     let isPrime = true;
//     // iterate from 2 till the current number to be tested
//     for (let factor = 2; factor < number; factor++) {
//       // check if the number has any other factor
//       if (number % factor == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     // print the number if it is prime
//     if (isPrime) {
//       console.log(number);
//     }
//   }
// }

// getPrimeNumbers(23);

// Toptal codility test solution
function solution(T, R) {
  // write your code in JavaScript (Node.js 8.9.4)
  const groups = {};
  for (let i = 0; i < T.length; i++) {
    const name = T[i];
    let group = name;
    if (/^[A-Za-z]+$/.test(name[name.length - 1])) {
      group = name.substring(0, name.length - 1);
    }
    if (!groups[group]) {
      groups[group] = [];
    }
    if (R[i] === 'OK') {
      groups[group].push(true);
    } else {
      groups[group].push(false);
    }
  }
  const passed = Object.values(groups).filter(v => !v.includes(false)).length;
  return Math.floor(passed * 100 / Object.keys(groups).length);
}

// Toptal codility test solution
function solution(A, S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = 1; j <= A.length; j++) {
      const t = A.slice(i, j);
      const sum = t.reduce((a, b) => a + b, 0);

      if (sum / t.length === S) {
        count++
      }
    }
  }
  return count;
}

// Toptal codility test solution
function includesAll(superset, subset) {
  if (0 === subset.length) {
    return false;
  }
  return subset.every(function(value) {
    return superset.indexOf(value) >= 0;
  });
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const s = new Set();
  A.forEach(a => s.add(a));
  let f = [];
  let k = [];
  for(let i = 0; i < A.length - 2; i++ ){
    k=[];
    k.push(A[i])
    for(let j = i+1; j < A.length -1; j++){
        k.push(A[j]);
      
      if(includesAll(k, [...s])){
        if(!f.length || f.length > k.length) {
          f = k;
        }
        break
      }
    }
  }
  return f.length;
}