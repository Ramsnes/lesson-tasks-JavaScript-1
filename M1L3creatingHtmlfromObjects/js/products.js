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

//festes til let html senere
const container = document.querySelector(".container");

//tom html string lages for å brukes med nye verdier fra for-loopen
let html = "";

for (let i = 0; i < products.length; i++) {
  // om venstre er noe, så vinner det. omm ikke så vinner høyre
  // "Price unavailable" kan erstattes med hva som helst
  let price = products[i].price ?? "Price unavailable";

  // Lag rød farge på sold out, og grønn på de andre
  let color = "red";

  if (!products[i].soldOut) {
    color = "green";
  }

  // ${products[i].name} setter inn navnene i objektet direkte inn i html
  //innholdet av html(tomt atm) pluss det som står i backticks lagges til hver loop
  // ${price} hentet fra linje 26
  //style="color: ${color}" refererer til let color og setter fargen valgt i variablen deretter
  html += `
  <div class ="product">
  <h4 style="color: ${color}">${products[i].name}</h4>
  <div>Price: ${price}</div>
  <div>
  `;
}
// ${products[i].price byttet ut for å referrere til 'const price' variabelen skapt linje 27}

//div class container endre med innerHTML til å inneholder let html som igjen inneholder innholdet fra for-loopen
container.innerHTML = html;
