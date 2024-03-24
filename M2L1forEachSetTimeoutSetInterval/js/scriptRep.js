// Q1
const receivingFunction = (callback) => {
  if (typeof callback === "function") {
    callback();
  } else {
    console.log("This is not a function");
  }
};

const callbackFunction = () => {
  console.log("I am a callback function");
};

receivingFunction(callbackFunction);

// Q2
const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

// Convert to forEach()
for (let i = 0; i < prizes.length; i++) {
  console.log(`Prize ${i + 1}: ${prizes[i]}`);
}

// Option 1
prizes.forEach(function (item, index) {
  console.log(`Prize ${index + 1}: ${item}`);
});
// Option 2
prizes.forEach((item, index) => console.log(`Prize ${index + 1}: ${item}`));

// Q3
const numberOfSeconds = 5;
const timerFn = () => {
  console.log("I waited 5 seconds before executing.");
};

setTimeout(timerFn, numberOfSeconds * 1000); // second argument must be in miliseconds

// Q4
let count = 0;
const limit = 4;

const logNumbers = () => {
  // Increases count by 1
  count++;

  // Logs current value
  console.log(count);

  if (count < limit) {
    setTimeout(logNumbers, 1500);
  }
};
logNumbers();
