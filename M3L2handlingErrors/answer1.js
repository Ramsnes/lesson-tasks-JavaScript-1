// Question 1

// Give the below function's name parameter a default value of "John"

function greet(name = "John") {
  return `Hello ${name}!`;
}
greet();

console.log(greet());
console.log(greet("Morten")); //changed parameter (argument) to "Morten" from "John"

//
// Scrimba video example:
function sum(numA = 0, numB = 0) {
  return numA + numB;
}

const result = sum(5, 4); //5 is numA, 4 is numB

console.log("result: ", result);
