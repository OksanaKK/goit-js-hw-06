
const validInput = document.querySelector("#validation-input");
const validLength = Number(validInput.getAttribute("data-length"));


validInput.addEventListener("blur", checkValidInput);

function checkValidInput() {
  if (validInput.value.length === validLength) {
    return validInput.classList.add("valid");
  }
  validInput.classList.add("invalid");
}


