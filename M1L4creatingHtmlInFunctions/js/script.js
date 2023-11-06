const sports = ["golf", "football", "cricket"];

const games = [
  {
    name: "Starcraft 2",
    released: "2010",
  },
  {
    name: "Age of Empires II",
  },
  {
    name: "Cyberpunk 2077",
    released: 2020,
  },
];

//
// Question 1
// Create a function called printSeason that accepts one argument (has one parameter) called season.
// Inside the function, log the value of that argument.

// Call the function and pass in the value "summer` as the argument.
function printSeason(season) {
  console.log(season);
}

printSeason("summer");

//
// Question 2
// Create a function called printNumbers that has two parameters, firstNumber and secondNumber.
// Inside the function, log each value that is passed in.
// Call the function and pass in two numbers as the arguments.
function printNumbers(firstNumber, secondNumber) {
  console.log(firstNumber, secondNumber);
}

printNumbers(10, 20);

//
// Question 3
// Create a function called addNumbers that has three parameters.
// Inside the function, add all the paramters and return the result.
// Assign the result to a variable and assign the variable to the innerHTML property of the DOM element with the class of total.
function addNumbers(num1, num2, num3) {
  let result = num1 + num2 + num3;
  return result;
}

const sum = addNumbers(10, 15, 20);

const sumContainer = document.querySelector(".total");
sumContainer.innerHTML = sum;

//
// Question 4
// Create a function called createGreeting that has one parameter.
// Inside the function, add the value passed in to the string "Hello, my name is " and return the new string.
// Assign the returned value to the innerHTML property of the DOM element with the id of name.
function createGreeting(name) {
  let greeting = "Hello, my name is" + " " + name + ".";
  return greeting;
} // We returned the new string + the function parameter. The parameter will change with a argument later with "Morten"
// We can now declare a variable called 'greeting' here, because the other variable called greeting is scoped to the function
// This call-function syntax underneath does now turn into "Hello, my name is" + "Morten"
const greeting = createGreeting("Morten");

// Lets add the total greeting to a container. Create variable to target it
const nameContainer = document.querySelector("#name");
// Now, use the new variable with targeted class and add the new function argument ("Morten")
nameContainer.innerHTML = greeting;

//
//Question 5
// Create a function called printListItems that has one parameter.
// Inside the function, loop through the value passed in and log each item.
// Call the function and pass the sports array in script.js in as the argument.

function printListItems(item) {
  for (let i = 0; i < item.length; i++) {
    console.log(item[i]);
  }
}

printListItems(sports);

// Question 6
// Create a function called createGames that has one parameter.
// Inside the function, loop through the value passed in, create HTML for each property in each object and return the HTML.
// Provide a default value for the released property if it is missing.
// Assign the return value of the function to the innerHTML property of the DOM element with the class of game-container.
function createGames(gamesList) {
  // An empty variable named "html" is made to prepare for entering HTML code and returning it more easily later with added code
  let html = "";

  for (let i = 0; i < gamesList.length; i++) {
    // variable "releasedYear" is here set to default string "Year not known", then added to the loop later IF the gameList[i] has a ".released" aka NOT missing a .released value in the object at the top of this script.
    let releaseYear = "Year not known";

    if (gamesList[i].released) {
      releaseYear = gamesList[i].released;
    }
    // Now the HTML code is being added
    // += is the shorthand assignment operator that adds the value on the right-hand side of the operator to the value on the left-hand side, and then assigns the result to the left-hand side.
    // including the [i] in ${gamesList[i].name} makes a loop and includes all the name(s) in the div and effectively creates three divs with a class name of "game"
    html += `<div class="game">
                    <h5>${gamesList[i].name}</h5>
                    <p>Released: ${releaseYear}</p>
                </div>`;
  }
  // Now we return the previous created variable "html" with it's newly added values above
  return html;
}
// Now we call the function "createGames" together with the (games) object/array which includes all the games and release dates
const newHTML = createGames(games);

// Now we create a variable to be able to target the .game-container
const gameContainer = document.querySelector(".game-container");
// We assign this newly created variable with the targeted class container, use the "innerHTML" syntax, and make the class container containt all the values of the "newHTML" variable(function) created above
gameContainer.innerHTML = newHTML;
