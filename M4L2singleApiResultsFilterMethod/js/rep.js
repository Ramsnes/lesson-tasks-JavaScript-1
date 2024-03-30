// Display the name, description and image of the game returned.
const url = "https://api.noroff.dev/api/v1/old-games/3";

const container = document.querySelector(".details");

async function lemmings() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    createHtml(data);
    // By passing 'data' as an argument to createHtml, the data obtained from the API response is transferred to the createHtml function. This allows createHtml to access and utilize the retrieved data to dynamically generate HTML content.
  } catch (error) {
    console.log(error);
    container.innerHTML = error;
  }
}

lemmings();

function createHtml(info) {
  container.innerHTML = `<div> 
  <h1>Name: ${info.name} </h1>
  <p>${info.description}</p>
  <h3>Release date: ${info.released}</h3>
  <h3>Genre: ${info.genre}</h3>
  <p><img src="${info.image}"style="width: 500px; height: auto;"</p>
  </div>`;
}
