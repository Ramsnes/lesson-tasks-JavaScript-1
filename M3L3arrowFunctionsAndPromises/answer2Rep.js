// Convert the below API call to use a try-catch-finally statement.

// Traditional
async function getCatFacts() {
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/cat-facts");
    const results = await response.json();
    // Added random fact log
    const randomIndex = Math.floor(Math.random() * results.length);
    const randomFact = results[randomIndex].text;
    console.log(randomFact);
  } catch (error) {
    console.log(error);
  }
}
getCatFacts();

// Arrow function
const getCatFacts2 = async () => {
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/cat-facts");
    const results = await response.json();

    const randomIndex = Math.floor(Math.random() * results.length);
    const randomFact = results[randomIndex].text;
    console.log(randomFact);
  } catch (error) {
    console.error(error);
  }
};

getCatFacts2();

// .then
function getCatFacts3() {
  fetch("https://api.noroff.dev/api/v1/cat-facts")
    .then((response) => response.json())
    .then((results) => {
      // Added random fact log
      const randomIndex = Math.floor(Math.random() * results.length);
      const randomFact = results[randomIndex].text;
      console.log(randomFact);
    })
    .catch((error) => console.log(error));
}

getCatFacts3();

//.then((response) is kinda like the fetch-result is being store in (response) - so (response) = (fetch content), and (resultss) = (fetch content .JSON-parsed)
//https://gemini.google.com/app/89ea1c505c8fa4f3
