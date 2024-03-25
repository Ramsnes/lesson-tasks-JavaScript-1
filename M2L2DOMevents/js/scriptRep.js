const button = document.querySelector("button");
const countContainer = document.querySelector(".count");
let counter = 0;

button.onclick = () => {
  counter = 0;
  button.disabled = true;
  button.style.backgroundColor = "Green";

  const intervalId = setInterval(function () {
    counter++;
    countContainer.innerHTML = counter;

    if (counter === 7) {
      clearInterval(intervalId);
      button.disabled = false;
      button.style.backgroundColor = "Red";
    }
  }, 1000);
};
