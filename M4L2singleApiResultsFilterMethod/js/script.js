// Make a call to the following endpoint:
// https://api.noroff.dev/api/v1/old-games/2

// Display the name, description and image of the game returned.

const url = "https://api.noroff.dev/api/v1/old-games/2";
const detailContainer = document.querySelector(".details");

async function fetchCharacter() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const details = result;
    // Pass the details to the function that will create the HTML
    createHtml(details);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = error;
  }
}

// call the function
fetchCharacter();

//this func is being hoistet up, so this is called in line 15
function createHtml(details) {
  detailContainer.innerHTML = `
        <h1 class="name">${details.name}</h1>
        <div class="status">${details.description}</div>
        <div class="image" style="background-image: url('${details.image}')"></div>
    `;
}
