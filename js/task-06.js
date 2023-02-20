const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {

  const permissibleNumberSymbols = Number(input.dataset.length);
  let enteredNumberSymbols = event.currentTarget.value.length;
    
  if (enteredNumberSymbols === permissibleNumberSymbols) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};
