///////////////////
// Question 1
// Create a function called receivingFunction which accepts one argument. Inside this function, check if the argument is a function, and if it is, call the function.
// Create another function called callbackFunction which logs the string: "I am a callback function".
// Call receivingFunction and pass callbackFunction into it as an argument.

// (callback) is just a parameter name, in referrence to the argument in the receivingFunction call at the bottom
function receivingFunction(callback) {
  if (typeof callback === "function") {
    callback();
  } else {
    console.log("This is not a function");
  }
}

const callbackFunction = function () {
  console.log("I am a callback function");
};

receivingFunction(callbackFunction);

///////////////////
// Question 2
// Convert the following for loop to a forEach loop.
const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

// for (let i = 0; i < prizes.length; i++) {
//   console.log(`Prize ${i + 1}: ${prizes[i]}`);
// }

prizes.forEach(function (prize, index) {
  console.log(`Prize ${index + 1}: ${prize}`);
});

///////////////////
// Question 3
// Write code that waits 5 seconds before logging the string: I waited 5 seconds before executing. Store the amount of seconds (5 initially) in a variable so it can be easily changed.

// Make a const with the amount of seconds
const numberOfSeconds = 5;
// Create a function that logs the message with ${const} that contains the number of seconds already
function logMessage() {
  console.log(`I've waited ${numberOfSeconds} seconds before executing.`);
}
// Start the setTimeout syntax. First argument is the function, second argument is the const(number of milliseconds times a thousand). * 1000 just multiplies the number 5 in miliseconds, as the argument needs to be in miliseconds
setTimeout(logMessage, numberOfSeconds * 1000);

///////////////////
// Question 4
// Write code that logs the numbers 1 to 4 every 1.5 seconds and then stops.

// start the count FROM 0
let count = 0;
// create a function variable that makes the 'let count' add a number(++;) every count
const intervalId = setInterval(function () {
  // Adds one number each count
  count++;
  // If count equals to 4, then stop/clear the count
  if (count === 4) {
    clearInterval(intervalId);
  }
  // Console log the let variable 'count' each 1.5 seconds
  console.log(count);
}, 1500);
