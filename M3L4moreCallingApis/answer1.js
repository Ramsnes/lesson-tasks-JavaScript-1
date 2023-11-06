// Question 1
// Add headers to the below API call.

// You can choose whether to create a variable for the headers object seperately from the call and pass the variable in as the second parameter, or pass the headers object in directly.

const API_URL =
  "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";
/*
async function callUrbanDictionary() {
  const response = await fetch(API_URL);
  const results = await response.json();
  console.log(results);
}*/

// teachers answer:
// API_URL already decleared over above
const options = {
  headers: {
    "x-rapidapi-key": "f1f6bf4f35msh6bce51834ab65fep1142d8jsne932f1fff042",
  },
};

async function callUrbanDictionary() {
  const response = await fetch(API_URL, options);
  const results = await response.json();
  console.log(results);
}

callUrbanDictionary();
