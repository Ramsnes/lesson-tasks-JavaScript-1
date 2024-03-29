const product = {
  name: "Fancy Product",
  price: 99,
  onSale: true,
};

let container = document.querySelector(".container");

let name = product.name;
let price = product.price;
let onSale = product.onSale;

// Price default value if missing
if (!price) {
  price = 666;
}

// Change innerText if onSale
if (onSale) {
  onSale = "On sale";
} else {
  onSale = "Regular price";
}

let color = onSale ? "red" : "green"; // true = red, else = green
let decoration = onSale ? "underline" : "none"; // true = underline, else = none

container.innerHTML = `<div class="product">
<h2>${name}</h2>
<p>${price}</p>
<p style="text-decoration:${decoration}; color: ${color}">${onSale}</p>
</div>`;
