console.log(
  `Number of categories: ${
    document.querySelector("#categories").children.length
  }`
);

console.log(
  `Category: ${document.querySelector(".item").firstElementChild.textContent}`
);

console.log(
  `Elements: ${
    document.querySelector(".item").lastElementChild.children.length
  }`
);

console.log(
  `Category: ${
    document.querySelector(".item").nextElementSibling.firstElementChild
      .textContent
  }`
);

console.log(
  `Elements: ${
    document.querySelector(".item").nextElementSibling.lastElementChild.children
      .length
  }`
);

console.log(
  `Category: ${
    document.querySelector(".item").nextElementSibling.nextElementSibling
      .firstElementChild.textContent
  }`
);

console.log(
  `Elements: ${
    document.querySelector(".item").nextElementSibling.nextElementSibling
      .lastElementChild.children.length
  }`
);
