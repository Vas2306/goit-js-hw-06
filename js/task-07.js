const refs = {
  textEl: document.querySelector("#text"),
  inputEl: document.querySelector("#font-size-control"),
};

refs.inputEl.addEventListener("change", changeFontSize);

function changeFontSize() {
  const size = refs.inputEl.value;
  refs.textEl.style.fontSize = size + "px";
}
