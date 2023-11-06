// Question 2
// Convert the below code to use the then/catch syntax.
async function getCatFacts() {
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/cat-facts");
    const results = await response.json();
    console.log(results.length);
  } catch (error) {
    console.log(error);
  }
}
////////////////// .then/catch ///////////////////////
fetch("https://api.noroff.dev/api/v1/cat-facts")
  .then(function (response) {
    return response.json();
  })
  .then(function (results) {
    console.log(results.length);
  })
  .catch(function (error) {
    console.log(error);
  });

// we can also enclose the code in a function and then call it
// this will have the same effect but means the code is reusable and can be called again from somewhere else in the code
function getCatFacts() {
  fetch("https://api.noroff.dev/api/v1/cat-facts")
    .then(function (response) {
      return response.json();
    })
    .then(function (results) {
      console.log(results.length);
      // maybe add something innerHTML as result
    })
    .catch(function (error) {
      console.log(error);
    });
}

// with arrow functions

//lager en funksjon for noe
function getCatFacts2() {
  //skaffer innholdet til API
  fetch("https://api.noroff.dev/api/v1/cat-facts")
    //vi ber om respons, og responsen skal inneholde JSON-format slik at vi forstår det bedre
    .then((response) => response.json())
    //så ønsker vi .length i resultatet skal bli logget
    .then((results) => {
      console.log(results.length);
    })
    //så catcher vi om en error oppstår og API ikke blir fetchet
    .catch((error) => console.log(error));
}
//så caller vi funksjonen uten arument
getCatFacts2();
