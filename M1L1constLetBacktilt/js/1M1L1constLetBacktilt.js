// JavaScript 1 - Module 1
// Lesson Task 1 Questions
// Question 1
const instrument = "guitar";

console.log(instrument);

//
// Question 2
const button = document.querySelector("button.login");

console.dir(button); // Use dir instead of log when using chrome to log elements

//
// Question 3
const instruments = [
  {
    type: "guitar",
    colour: "red",
  },
  {
    type: "piano",
    colour: "black",
  },
];

console.table(instruments);

//
// Question 4
const name = "Percival";
let age = 13;

//
// Question 5
let total = 0;
total = total + 10;

//
// Question 6
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//
// Question 7
// const firstName = "Florence";
// const introduction = "Hello, my name is " + firstName + ".";
const firstName = "Florence";

const introduction = `Hello, my name is ${firstName}.`;

console.log(introduction);

//
// Question 8
// const title = "Big Technical Event";

// const whatToHave = "good time";

// const welcome = "Welcome! \n\n" +
//                 "This " + title + " is starting today.\n\n" +
//                 "Have a " + whatToHave + "!";
const title = "Big Technical Event";

const whatToHave = "good time";

const welcome = `Welcome!

This ${title} is starting today.

Have a ${whatToHave}!`;

console.log(welcome);

//
// Question 9
// Log each object
const car = {
  "paint-colour": "red",
  "number of wheels": 3,
};

console.log(car["paint-colour"]);
console.log(car["number of wheels"]);

//
// Question 10
// (my answer)
/*const product = {
  name: "Chicken Lips",
  price: 35,
  expired: false,
};

function getExpired() {
  console.log(product.expired);
}
getExpired();
*/
// OR (teachers')

const product = {
  name: "Chicken Lips",
  price: 35,
  expired: false,
  getExpired: function () {
    console.log(this.expired);
  },
};

product.getExpired();
