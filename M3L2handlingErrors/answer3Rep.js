// Convert the below API call to use a try-catch-finally statement.

async function getFact() {
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/cat-facts");
    const results = await response.json();

    const randomIndex = Math.floor(Math.random() * results.length);
    // This "floors" the random results, times the fetch(results)

    console.log(results[randomIndex].text);
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    console.log("Message that runs no matter what");
  }
}

getFact();
