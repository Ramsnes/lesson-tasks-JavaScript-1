// Q1
// Give the below function's name parameter a default value of "John"
function greet(name = "John") {
  let greeting = console.log(`Hello ${name}!`);
  return greeting;
}
greet("Morten");
