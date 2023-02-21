const refs = {
  buttonEl: document.querySelector(".change-color"),
  spanColor: document.querySelector(".color"),
  bodyEl: document.querySelector("body"),
};

refs.buttonEl.addEventListener("click", onChangeRandomHexColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeRandomHexColor() {
  const randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;
  refs.spanColor.textContent = randomHexColor;
}
