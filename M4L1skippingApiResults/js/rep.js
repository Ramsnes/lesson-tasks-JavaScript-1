const url =
  "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

const resultsContainer = document.querySelector(".results");

const fetchTeams = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const teams = data;

    resultsContainer.innerHTML = "";

    // Loop through teams and set rules and build html
    for (let i = 0; i < teams.length; i++) {
      if (i === 15) {
        break;
      }

      const teamName = teams[i].teamName;
      const city = teams[i].location;

      if (teamName.toLowerCase().startsWith("c")) {
        continue;
      }

      resultsContainer.innerHTML += `<div> 
            <h3>${teamName}</h3>
            <p>${city}</p>
            </div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
};

fetchTeams();
