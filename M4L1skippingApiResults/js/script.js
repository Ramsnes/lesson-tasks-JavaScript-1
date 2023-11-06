// JavaScript 1 - Module 4
// Lesson Task 1 Question

// Make a call to the following endpoint: https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json
// Display the team name and city of the first 15 results, but exclude any team whose name begins with c.
// There will be a maximum of 15 results displayed if no teams' names begin with "C", and less than 15 displayed if there are teams whose names begin with "C".

/*
- Append the API url to a variable
- Append the class being used to a variable

- Make an async await fetch within a function and call the API
- Add try/catch for error handling around the function
- Make an for loop and include an if-statement that excludes small caps "c"

- Append the new content with ".innerHTML += ``" at the end of function
*/
const url =
  "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

const resultsContainer = document.querySelector(".results");

// we need the code in an async function as we are using the await keyword
async function fetchTeams() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    // always log and inspect the data you get from an API call to see what properties it has
    console.log(json);

    const teams = json;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < teams.length; i++) {
      // we only want to display a maximum of 15 teams
      // there will be less than 15 if any team names begin with "C"
      // use break to leave the loop
      if (i === 15) {
        break;
      }
      //this is the values within the API array info we want to use
      const teamName = teams[i].teamName;
      const city = teams[i].location;

      // we are checking for small "c" and big "C". Continue means "skip"
      if (teamName.startsWith("c") || teamName.startsWith("C")) {
        continue;
      }

      // instead of checking for both small "c" and big "C" we can make the teamName lowercase and just check for "c"
      // if (teamName.toLowerCase().startsWith("c")) {
      //     continue;
      // }

      resultsContainer.innerHTML += `<div class="card">
                                            <h4>${teamName}</h4>
                                            <p>${city}</p>
                                        </div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

// call the function
fetchTeams();
