//JavaScript 1 - Module 2
// Lesson Task 4 Question

// Using the HTML provided write code that does the following:

// 1) When the button is pressed and held down, start a counter that increments by 1 every second
// 2) When the button is released, stop the counter and create an amount of text boxes equal to the counter value
// 3) When the counter is pressed and held down again, set the counter to 0, clear the text inputs and repeat the previous step

//////// Walkthrough///////
/*
1) 
- Make function handleMouseDown() to declear count. 
- Create and connect to: button.addEventListener("mousedown", handleMouseDown);
- Create const button = document.querySelector("button"); to enable the event
- Add 'intervalId' callback function to create count. 
*/

/* 
2) 
- Make function handleMouseUp() and clear count(clearInterval(intervalId)). 
- const button is alreade created.
    - Create and connect to: button.addEventListener("mouseup", handleMouseUp); 
- Add forLoop with innerHTML to create the text boxes.
*/

/*
3) 
- Add to first function 'handleMouseDown()':
    - Reset count: 'count = 0'
    - Clear text: inputContainer.innerHTML = "";
*/

// .toolbar > button
const button = document.querySelector("button");
// .toolbar > .counter
const counterContainer = document.querySelector(".counter");
// div class .inputs
const inputContainer = document.querySelector(".inputs");

// fetch 'const button', add argument 1 mouseup/down method, argument 2 both functions beneath
button.addEventListener("mousedown", handleMouseDown);
button.addEventListener("mouseup", handleMouseUp);

// prepare intervalID and count for the function beneath
let intervalId;
let count;

// code that runs when mouse pressed DOWN
function handleMouseDown() {
  count = 0; //start count at 0
  this.textContent = "Release to stop counting"; //shows when pressing down mouse
  counterContainer.innerHTML = count; // the 'count' fills the container class with itself live
  inputContainer.innerHTML = ""; //resets the text to blank after from being filled by function 2

  // interval/callback function. Counts 1 sec and feeds result to counterContainer above
  intervalId = setInterval(function () {
    //this func fills the 'let intervalID' from above
    count++; //adds +1 incement to let count from above
    counterContainer.innerHTML = count; //fills container with newly incremented 'count'
  }, 1000); //repeats process each second (1000 ms)
}

// function that runs when the mouse RELEASES
function handleMouseUp() {
  clearInterval(intervalId); //clears the count
  this.textContent = "Press and hold to count"; //shows when releasing mouse in log(?)

  // Inputcontainer feeds HTML with how many counts is made, beofre being reset by first function again
  // Also adds a new: input name, id name, and placeholder name for each second
  // Example : <input name="input1" id="input1" placeholder="Input 1">
  for (let i = 1; i <= count; i++) {
    inputContainer.innerHTML += `<input name="input${i}" id="input${i}" placeholder="Placeholder maboo name ${i}" />`;
    // <input name="input${i}": creates the text "Input 1 - 2 etc under the button in HTML"
    // id="input${i}": creates a new id each second based on the count
    // placeholder: name can be changed.
  }
}
