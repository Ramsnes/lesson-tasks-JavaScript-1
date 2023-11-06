// Question 3:
// Convert the below API call to use a try-catch-finally statement.

// async function getFact() {
//   const response = await fetch("https://api.noroff.dev/api/v1/cat-facts");
//   const results = await response.json();
//   console.log(results[8].text);
// }

const message = document.querySelector(".class");

async function getFact() {
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/cat-facts");
    const results = await response.json();

    message.innerHTML = `<div class="success">${results[8].text} </div>`; //added "success"-class, prints results[8].text from API to that class and adds it to the innerHTML"

    console.log(results[8].text);
  } catch (error) {
    console.log("error occurred, dumbass", error);
    message.innerHTML = `<div class="error"> "You've made a huuuuuuge mistake!" </div>`;
  } finally {
    console.log("Inevitable message");
  }
}

getFact();
