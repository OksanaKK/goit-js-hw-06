
const validInput = document.querySelector("#validation-input");
const validLength = Number(validInput.getAttribute("data-length"));


validInput.addEventListener("blur", checkValidInput);

function checkValidInput() {
  validInput.classList.add("valid");

  if (validInput.value.length === validLength) {
    return validInput.classList.remove('invalid');
    
  }
  validInput.classList.add("invalid");
  validInput.classList.remove('valid');
}


