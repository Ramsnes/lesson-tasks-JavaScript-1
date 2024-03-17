// Question 2
const button = document.querySelector("button.login");

// use dir instead of log when using Chrome to log elements
console.dir(button);

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

// Question 7

const firstName = "Florence";

const introduction = `Hello, my name is ${firstName}`;

console.log(introduction);

// Question 8
const title = "Big Technical Event";

const whatToHave = "good time";

const welcome = `Welcome! This ${title} is starting today. Have a ${whatToHave}!`;

console.log(welcome);

// Q 9
const car = {
  "paint-colour": "red",
  "number of wheels": 3,
};

console.log(car["paint-colour"]);
console.log(car["number of wheels"]);

// Q 10

const product = {
  name: "Chicken Lips",
  price: 35,
  expired: false,
};

const getExpired = () => {
  console.log(product.expired);
};
getExpired();
