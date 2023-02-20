let counterValue = document.querySelector("#value");
let valueEl = Number(counterValue.textContent);

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

btnIncrement.addEventListener("click", () => {
  valueEl += 1;
  counterValue.textContent = valueEl;
});

btnDecrement.addEventListener("click", () => {
  valueEl -= 1;
  counterValue.textContent = valueEl;
});
