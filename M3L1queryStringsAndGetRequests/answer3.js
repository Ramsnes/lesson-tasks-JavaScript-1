// Question 3

// Create an async function called getCatFacts.
// Inside the function, make an API call to the below URL using async/await, and save it to a variable called response.
// Create a variable called results where you await the json of your response variable.
// Console.log the length of results.

async function getCatFacts() {
  const url = "https://api.noroff.dev/api/v1/cat-facts";
  const response = await fetch(url);
  const results = await response.json();
  console.log(results.length);
}

getCatFacts();

/*  Explanation - Chat GPT

In JavaScript, an `async function` is a function that operates asynchronously, meaning that it allows other code to run in parallel while it is executing. The `async` keyword is used to define an asynchronous function.

Async functions work with the `await` keyword, which allows the function to pause its execution until a Promise is resolved. When a Promise is resolved, the function continues its execution from where it left off.

Here is an example of an async function:

async function fetchData() {
  const response = await fetch('https://example.com/data');
  const data = await response.json();
  return data;
}

In this example, `fetchData()` is an async function that retrieves data from an API using the `fetch()` function. The `await` keyword is used to wait for the Promise returned by `fetch()` to be resolved before continuing execution.

Async functions are useful for handling asynchronous operations in a more readable and synchronous-like way. They can help to avoid callback hell and make the code easier to reason about.
*/
