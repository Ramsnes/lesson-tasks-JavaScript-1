const select = document.querySelector("select");
const listContainer = document.querySelector(".list");

// When user selects an option from the "select div"
// Fires off function "buildList"
select.addEventListener("change", buildList);

function buildList(event) {
  console.log(event.target.value); // logs amount of boxes selected

  const amount = event.target.value;

  listContainer.innerHTML = "";

  for (let i = 1; i <= amount; i++) {
    listContainer.innerHTML += `<a class="item" href="details.html?id=${i}">${i}</a>`;
  }
}

// event.target = targets the <select> element.

// .value: refers to the value of the .target/<select>. "In a <select> element, the value corresponds to the currently selected <option> element's value attribute."

// Summary: .target is the targeted div(<select>), and .value is the value within the <select> div(<option>)
// When function buildList is fired, the event param is transformed into being the value of the target value property within the <option> div (the number).
