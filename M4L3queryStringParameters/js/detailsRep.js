// Grabs the query string
const queryString = document.location.search;
// Makes the quesrystring understandable, like json()
const params = new URLSearchParams(queryString);
// Retrieves the value of the id parameter from the query string
const id = params.get("id");

// if id = null, redirect to home
if (id === null) {
  location.href = "/";
}

const url = "https://api.noroff.dev/api/v1/books/" + id;
// To display unique book
const idContainer = document.querySelector(".id");
// To display unique detailed info of unique book
const detailContainer = document.querySelector(".container");

idContainer.innerHTML = id;

const bookFetch = async () => {
  const respons = await fetch(url);
  const result = await respons.json();
  bookRender(result);
};

bookFetch();

function bookRender(details) {
  detailContainer.innerHTML = `
    <h1>${details.title}</h1>
    <p>${details.description}</p>
    <h2>Author: ${details.author}</h2>
    <p>Published: ${details.published} - Publisher: ${details.publisher}</p>
    `;
}
