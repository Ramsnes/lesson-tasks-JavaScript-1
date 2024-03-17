// 1
let headerThree = document.querySelector("h3");
headerThree.innerHTML = "Welcome";

// 2
// Remember [i]
let headerFour = document.querySelectorAll("h4");
for (let i = 0; i < headerFour.length; i++) {
  headerFour[i].style.marginBottom = "-20px";
}

// 3
let secondHeaderFour = document.querySelector("h4.two");
secondHeaderFour.style.backgroundColor = "red";

// 4
let firstPara = document.querySelector("p.one");
firstPara.style.fontSize = "24px";
firstPara.style.color = "blue";

// 5
let thirdPara = document.querySelector("p.three");
thirdPara.innerHTML = `<span> ${thirdPara.innerHTML} </span>`;

// 6
let content = document.querySelector(".content");
content.innerHTML += `<p>Another paragraph</p>`;
content.innerHTML += `<p>Yet Another paragraph</p>`;

// 7
let newClass = document.querySelectorAll(".content p");
for (let i = 0; i < newClass.length; i++) {
  newClass[i].classList.add("content-item");
}

// 8
let unorderedList = document.querySelector("#services");
unorderedList.innerHTML = "<li>New item</li>" + unorderedList.innerHTML;

// 9
unorderedList.classList.remove("service-list"); // using let from Q 8

// 10
let hideId = document.querySelector("#hide");
hideId.style.display = "none";
