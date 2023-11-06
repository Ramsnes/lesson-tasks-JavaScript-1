// Question 2

// Create a reusable function that accepts two parameters, then returns a dynamic HTML <div> element.
// The <div> it creates should insert one of the parameters as a class, and the other as the inner value. Similar to the below HTML:
{
  /* <div class="class">value</div>; */
}

function reusable(para1, para2) {
  const html = `<div class="${para1}"> ${para2} </div>`;

  return html;
}
// reusable("newClass", "newContent"); // previous answer

//new answer
const result2 = reusable("newClass", "newContent");
console.log(result2);

//
// Teachers answer - different way of adding reusable HTML function

function divCreator(className, innerValue) {
  return `<div class="${className}">${innerValue}</div>`;
}

const result3 = divCreator("newClass", "newValue");
console.log(result3);
