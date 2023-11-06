// Add a click event to the button, that will disable the button and start a counter.
// Count to 7 and update span.count with the value of the count.
// Once 7 is reached stop the count and enable the button.

//counter starts at 0
let counter = 0;
//attach button to a variable for later targeting
const button = document.querySelector("button");
//attach a variable to the span class .count
const countContainer = document.querySelector(".count");

//creates a onclick function on the button
button.onclick = function () {
  //log: console.log("click worked");

  // resets counter
  counter = 0;
  //disables the button after click
  button.disabled = true;

  //start a counter with a variable function. setInterval is used to create the counting.
  const intervalId = setInterval(function () {
    // adds 1 to counter each interval
    counter++;
    //sends counter to the countContainer span class
    countContainer.innerHTML = counter;

    // If count equals to 7, stop/clear the count
    if (counter === 7) {
      clearInterval(intervalId);
      //this resets and enables the button again
      button.disabled = false;
    }
  }, 1000);
};
