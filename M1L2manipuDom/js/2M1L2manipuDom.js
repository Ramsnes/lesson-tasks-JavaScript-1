// JavaScript 1 - Module 1
// Lesson Task 2 Questions
//
// Question 1
// Select the h3 element and change its value to Hello instead of Welcome.
const firstHeading = document.querySelector("h3");
firstHeading.innerHTML = "Hello";

//
// Question 2
// Select all the h4 elements on the page and change their margin-bottom style to -20px.
const headings = document.querySelectorAll("h4");

for (let i = 0; i < headings.length; i++) {
  headings[i].style.marginBottom = "-20px";
}

//
// Question 3
// Set the background colour of the second h4 element to red.
// Question 3
headings[1].style.backgroundColor = "red";
// or
/*
const secondH4 = document.querySelector("h4.two");
secondH4.style.backgroundColor = "red";
*/

//
// Question 4
// Set the font size of the first paragraph element on the page to 24px and its color to blue.
const firstParagraph = document.querySelector("p.one");
firstParagraph.style.fontSize = "24px";
firstParagraph.style.color = "blue";

//
// Question 5
// Add span tags around the content of the third paragraph element on the page.
const thirdParagraph = document.querySelector("p.three");
thirdParagraph.innerHTML = "<span>" + thirdParagraph.innerHTML + "</span>";
// or
// thirdParagraph.innerHTML = `<span>${thirdParagraph.innerHTML}</span>`;

//
// Question 6
// Add a new paragraph to the div with a class of content. Add the paragraph after the others.
const content = document.querySelector(".content");
content.innerHTML += "<p>Another paragraph</p>";

//
// Question 7
// Add a new class called content-item to each paragraph in the div with a class of content.
const contentParagraphs = document.querySelectorAll(".content p");

for (let i = 0; i < contentParagraphs.length; i++) {
  contentParagraphs[i].classList.add("content-item");
}

// Question 8
// Select the ul element on the page by its id and add a new list item to the beginning of the list.
const list = document.querySelector("#services");
list.innerHTML = `<li>New item</li>`;
//or
// list.innerHTML = "<li>Newer item</li>" + list.innerHTML;

// Question 9
// Programmatically remove the class from the ul element.
list.classList.remove("service-list");

// Question 10
// Hide the element with the id of hide.
// const hideElement = document.querySelector("#hide");
// hideElement.style.display = "none";
// OR
const hideElement = document.getElementById("hide");
hideElement.style.display = "none";
