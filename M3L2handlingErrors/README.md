JavaScript 1 - Module 3
Lesson Task 2 Answers
Question 1
Give the below function's name parameter a default value of "John"

function greet(name) {
return `Hello ${name}!`;
}

Question 2
Create a reusable function that accepts two parameters, then returns a dynamic HTML <div> element.
The <div> it creates should insert one of the parameters as a class, and the other as the inner value. Similar to the below HTML:

<div class="class">value</div>

Question 3:
Convert the below API call to use a try-catch-finally statement.

async function getFact() {
const response = await fetch("https://api.noroff.dev/api/v1/cat-facts");
const results = await response.json();
console.log(results[8].text);
}
