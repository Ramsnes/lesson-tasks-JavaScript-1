const products = [
  {
    name: "Fancy Product",
    price: 40,
    soldOut: true,
  },
  {
    name: "Another Product",
    soldOut: false,
  },
  {
    name: "Cheap Product",
    price: 10,
    soldOut: true,
  },
];

// Loop through array
// Display each object using HTML
let container = document.querySelector(".container");

let html = "";

for (let i = 0; i < products.length; i++) {
  let name = products[i].name;
  let price = products[i].price;
  let soldOut = products[i].soldOut;

  // If price is missing
  if (!price) {
    price = 100;
  }

  // Name color if sold out - Ternary
  let color = soldOut ? "red" : "green"; // True = red, else = green

  html += `<div class="products"> 
            <h3 style="color: ${color}">${name}</h3>
            <p>${price}</p>
            <p>${soldOut}<p>
        </div>`;
}

container.innerHTML = html;
