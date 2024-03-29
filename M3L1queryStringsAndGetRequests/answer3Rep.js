// Q3
async function getCatFacts() {
  const url = "https://api.noroff.dev/api/v1/cat-facts";
  const response = await fetch(url);
  const result = await response.json();
  console.log(result.length);
  console.log(result[0]); // logs first fact

  // log all facts
  result.forEach((fact) => {
    console.log(fact); // Log each fact object
  });
}

getCatFacts();
