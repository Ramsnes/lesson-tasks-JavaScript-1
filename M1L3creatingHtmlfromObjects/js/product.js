//
// dont need 'let html' here since there are no loop
const product = {
  name: "Fancy Product",
  price: 99,
  onSale: true,
};

const specialProduct = document.querySelector(".container");

// Andre sin shorthand
// om venstre er noe, så vinner det. omm ikke så vinner høyre
// Price unknown kan erstattes med hva som helst
//      let price = product.price ?? "Price unknown";

// OR (teachers)
// the ${product.price} becomes displayPrice("Price not listed")
let displayPrice = "Price not listed";

if (product.price) {
  displayPrice = product.price;
}

// default color for the ${color}
let color = "orange";

// This string appeares if the product is onSale: true with ${onsaleText}
let onsaleText = "On sale!";

// This creates a variable with a default text decoration value
let textDecoration = "none";

// This prepares the text decoration for being "underlined" in ${textDecoration} if onSale = true
if (product.onSale) {
  textDecoration = "underline";
}

// This creates the html content and displays it in .container class
specialProduct.innerHTML = `
<div class ="product">
  <h4 style="text-decoration: ${textDecoration}"> ${product.name}</h4>
  <div style="color: ${color}" > ${product.price}</div>
  <div> ${onsaleText}</div>
</div>
`;
