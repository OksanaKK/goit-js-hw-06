const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", fillInInput);

function fillInInput(event) {
  if (nameInput.textContent === "") {
    nameOutput.textContent = "Anonymous";
  }
  nameOutput.textContent = event.currentTarget.value;
}
