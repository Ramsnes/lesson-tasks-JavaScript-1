// Q1
function printSeason(season) {
  console.log(season);
}

printSeason("summer");

// Q2
const printNumbers = (firstNumber, secondNumber) => {
  console.log(firstNumber, secondNumber);
};

printNumbers(10, 40);

// Q3
const addNumbers = (num1, num2, num3) => {
  const result = num1 + num2 + num3;
  return result;
};

const total = addNumbers(5, 10, 25);

let totalContainer = document.querySelector(".total");
totalContainer.innerHTML = `<div> 
    <h1>Total result: ${total}</h1>
</div>`;

// Q4
const createGreeting = (name) => {
  const greeting = "Hello, my name is " + name + ".";
  return greeting;
};

const fullGreeting = createGreeting("Morten");

const nameId = document.querySelector("#name");
nameId.innerHTML = fullGreeting;

// Q5
const sports = ["golf", "football", "cricket"];

const printListItems = (item) => {
  for (let i = 0; i < item.length; i++) {
    console.log(item[i]);
  }
};

printListItems(sports);

// Q6
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

const createGames = (game) => {
  let html = "";

  for (let i = 0; i < game.length; i++) {
    let name = games[i].name;
    let released = games[i].released;

    if (!released) {
      released = "Unknown";
    }

    html += `<div>
    <h5>${name}</h5>
    <p>Released: ${released}</p>
    </div>`;
  }
  return html;
};

// fn with array as argument
const newHtml = createGames(games);

const gameContainerList = document.querySelector(".game-container");
gameContainerList.innerHTML = newHtml;
