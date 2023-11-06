// JavaScript 1 - Module 2
// Lesson Task 3 Questions

// Question 1

// Convert the following code to use the addEventListener method:
/* 
const btn = document.querySelector(".btn");

 btn.onclick = function () {
     console.log("I'm a button");
}; 
*/
//first target the class
const btn = document.querySelector(".btn");

//second, create a function that logs the message
function logButton() {
  console.log("I'm a button");
}
//then add the .addEventListener to the 'const btn'
//first argument is the "click" function on the button/.btn. Second argument is function 'logButton' which logs the message upon the click
btn.addEventListener("click", logButton);

//
// Question 2
// Add a click event using addEventListener to the second button.
// In the event's function, display the character count from the input in the b.count element.
// Make sure to remove all trailing and leading spaces (spaces at the beginning and end of the input's value).

//"input" is selected since that is where the strings will be trimmed/entered by user
const input = document.querySelector("input");
//"form button" had to be reached for proper queryselector
const countButton = document.querySelector("form button");
//b.count = <b>(bold) and class "count" in index.html.
//this variable uses innerHTML in the function under to display the count itself under the textbox
const countOutput = document.querySelector("b.count");

function countCharacters() {
  //input = const input
  //.value = the value of the textbox
  //.trim = trims the dead space before and after, not between characters
  //.length = shows the length
  //countOutput.innerHTML = shows the count output in the HTML file
  const characterCount = input.value.trim().length;
  countOutput.innerHTML = characterCount;
}

// the const countButton is used because that is the button we were assigned to have the eventListener(click) to. The method "click" is the first argument, and the function countCharacters is the second argument
countButton.addEventListener("click", countCharacters);
