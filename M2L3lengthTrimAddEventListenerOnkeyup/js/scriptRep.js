// scriptRep.js
// Q1
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("I'm a button");
});

// Q2
const input = document.querySelector("input");
const countOutput = document.querySelector("b.count");
const countButton = document.querySelector("form button");

countButton.addEventListener("click", () => {
  const characterCount = input.value.trim().length;
  countOutput.innerHTML = characterCount;
});
