const selectDiv = document.querySelector("select");
const listDiv = document.querySelector(".list");

// When changing value in select: call listBuilder()
selectDiv.addEventListener("change", listBuilder);

function listBuilder(event) {
  console.log(event.target.value);

  // Store the targetvalue in a variable
  const boxAmount = event.target.value;
  listDiv.innerHTML = "";

  for (let i = 1; i <= boxAmount; i++) {
    listDiv.innerHTML += `
    <a class="item" href="details.html?id=${i}">Box: ${i}</a>
    `;
  }
}

/*
i <= boxAmount: 
Keep counting up until 'i' is less than or equal to value in variable 'boxAmount'(10)

*/
